/* global angular, document */
import getStyle from 'lib-bb-styles';
import {
  MS_IN_MIN,
  CHART_SLICE_LABEL,
  DEFAULT_TOOLTIP_SELECTOR,
  ARROW_INNER_CSS_SELECTOR,
  ARROW_OUTER_CSS_SELECTOR,
  CHART_SECTOR_SHIFT_SIZE,
  RENDERING_ANIMATION_TIME,
  CHART_UPDATE_SUBSCRIPTIONS,
} from './constants';

/**
 * @description
 * Parses numeric style to float or returns 0 if not found
 *
 * @name parseStyle
 * @type {function}
 * @inner
 * @param {string} selector
 * @param {string} attr Attribute
 * @returns {number}
 */
const parseStyle = (selector, attr) => parseFloat(getStyle(selector, attr)) || 0;

/**
 * @description
 * Retrieves inner size of the tooltip arrow
 *
 * @name getTooltipArrowInnerSize
 * @type {function}
 * @inner
 * @returns {number}
 */
const getTooltipArrowInnerSize = () => parseStyle(ARROW_INNER_CSS_SELECTOR, 'borderWidth');

/**
 * @description
 * Retrieves outer size of the tooltip arrow
 *
 * @name getTooltipArrowOutterSize
 * @type {function}
 * @inner
 * @returns {number}
 */
const getTooltipArrowOutterSize = () => parseStyle(ARROW_OUTER_CSS_SELECTOR, 'borderWidth');

/**
 * @description
 * Retrieves default line height of the tooltip content
 *
 * @name getTooltipLineHeight
 * @type {function}
 * @inner
 * @returns {number}
 */
const getTooltipLineHeight = () => parseStyle(DEFAULT_TOOLTIP_SELECTOR, 'lineHeight');

/**
 * @description
 * Converts portion value to angle in RAD
 *
 * @name getAngleFromPortion
 * @type {function}
 * @inner
 * @property {number} portion
 * @returns {number}
 */
const getAngleFromPortion = (portion) => {
  const offset = portion <= 25 ? 25 : 125;
  return (((offset - portion) / 100) * 2) * Math.PI;
};

/**
 * @description
 * Calculates absolute position of an element in chart area
 *
 * @name calculatePosition
 * @type {function}
 * @inner
 * @property {number} portion Element's portion
 * @property {number} center Chart's center distance from the edge
 * @property {number} radius Distance from the chart's center
 * @property {?number} xOffset Additional x offset
 * @property {?number} yOffset Additional y offset
 * @returns {Position}
 */
const calculatePosition = (portion, center, radius, xOffset = 0, yOffset = 0) => {
  const angle = getAngleFromPortion(portion);
  const chartRadius = CHART_SECTOR_SHIFT_SIZE + radius;
  const position = {
    left: (Math.cos(angle) * chartRadius) + center + CHART_SECTOR_SHIFT_SIZE,
    top: (-Math.sin(angle) * chartRadius) + center + CHART_SECTOR_SHIFT_SIZE,
  };

  return {
    left: `${position.left - xOffset}px`,
    top: `${position.top - yOffset}px`,
  };
};

/**
 * @description
 * Calculates absolute position of the tooltip, based on
 * chart dimensions and assigns them to the tooltip DOM element
 *
 * @name setTooltipPosition
 * @type {function}
 * @inner
 * @param {object} element in DOM
 * @param {object} tooltip object containing tooltip related data like
 * positions, current data point, styling from chart options, etc.
 * @param {object} chart instance
 * @param {ExtendedSpendingItem} item Selected item
 */
const setTooltipPosition = (element, tooltip, chart, item) => {
  const circlePosition = item.totalPortion - (item.portion / 2);
  const additionalOffset = item.portion < CHART_SLICE_LABEL.minimum ? 0 : CHART_SLICE_LABEL.offset;
  const arrowOutSize = getTooltipArrowOutterSize();
  const arrowBorder = arrowOutSize - getTooltipArrowInnerSize();

  const xOffset = circlePosition > 50 ?
    (element.clientWidth + arrowOutSize + (additionalOffset / 3)) :
    -arrowOutSize - (additionalOffset / 3);
  const yOffset = ((element.clientHeight + getTooltipLineHeight()) / 2) - arrowBorder -
    (item.portion < CHART_SLICE_LABEL.minimum ? CHART_SECTOR_SHIFT_SIZE : 0);

  Object.assign(element.style, calculatePosition(circlePosition,
    chart.outerRadius, chart.outerRadius + additionalOffset, xOffset, yOffset));
};

/**
 * @description
 * Converts transaction category name into category CSS icon class sufix
 *
 * @name categoryToIconClass
 * @type {function}
 * @inner
 * @param {string} transactionCategory Transaction category
 * @returns {string}
 */
const categoryToIconClass = (transactionCategory) =>
  transactionCategory.toLowerCase().replace(/\W/g, '-').replace(/-{2,}/g, '-');

/**
 * @description
 * Clears all slice labels already present in chart area
 *
 * @name clearSliceLabels
 * @type {function}
 * @inner
 * @param {object} container DOM element that contains all labels
 */
const clearSliceLabels = (container) =>
  angular.element(container.querySelectorAll(`div[${CHART_SLICE_LABEL.dataAttr}]`)).remove();

/**
 * @description
 * Creates new Date object based on input date
 * Returns new Date object
 *
 * @name getNewDate
 * @type {function}
 * @inner
 * @param {Date} newDate
 * @returns {string}
 */
const getNewDate = newDate =>
  new Date(newDate.getTime() - (newDate.getTimezoneOffset() * MS_IN_MIN))
    .toISOString()
    .slice(0, 10);

const populateSelectedSectorObject = ($ctrl, activeSectorName) => ({
  category: activeSectorName,
  bookingDateGreaterThan: $ctrl.periodStartDate,
  bookingDateLessThan: $ctrl.periodEndDate,
  productId: $ctrl.selectedProduct.id,
});

const helpers = (context) => {
  const i18nFilter = context.$filter('i18n');
  const dateFilter = context.$filter('date');

  /**
   * @description
   * Builds HTML content of the tooltip
   *
   * @name buildTooltipContent
   * @type {function}
   * @inner
   * @param {ExtendedSpendingItem} item Selected item
   * @returns {string}
   */
  const buildTooltipContent = (item) => {
    const textClass = item.trend > 0 ? 'text-danger' : 'text-success';
    const arrowClass = item.trend > 0 ? 'fa-arrow-up' : 'fa-arrow-down';
    const tooltipCategory = `
      <i class="fa bb-transaction-category-${categoryToIconClass(item.category)}"></i>
    `;
    return `
      <span class="chart-tooltip-spending-category">
        ${item.portion < CHART_SLICE_LABEL.minimum ? tooltipCategory : ''}
        ${item.category}
      </span>
      <div class="row">
        <strong>
          <ui-bb-format-amount class="col-xs-12 chart-tooltip-spending-amount amount-regular-color"
            data-amount="${item.totalAmount.amount}"
            data-currency="'${item.totalAmount.currencyCode}'"
            data-wrap>
          </ui-bb-format-amount>
        </strong>
      </div>
      <p class="chart-tooltip-spending-portion">
        ${item.portion}% ${i18nFilter('spending.tooltip.of.total')}
      </p>
      <hr class="chart-tooltip-divider">
      <span class="chart-tooltip-spending-trend ${textClass}">
        <i class="chart-tooltip-info-icon fa ${arrowClass}"></i>
        <span class="chart-tooltip-info-text">
          ${item.trend}% ${i18nFilter('spending.tooltip.compared.to')}
        </span>
      </span>
    `;
  };

  /**
   * @description
   * Builds the DOM element that contains slice label
   *
   * @name getNewSliceLabel
   * @type {function}
   * @inner
   * @param {string} category Category name
   * @param {object} amount Amount object
   * @param {string} amount.currencyCode Amount's currency code (ISO)
   * @param {number} amount.amount Amount's value
   * @param {boolean} topHalf Is this top half slice
   * @returns {object}
   */
  const getNewSliceLabel = (category, amount, topHalf) => {
    const wrapper = document.createElement('div');
    wrapper.setAttribute(CHART_SLICE_LABEL.dataAttr, '');
    wrapper.className = 'text-center';

    const icon = document.createElement('i');
    icon.className =
      `fa chart-donut-slice-icon bb-transaction-category-${categoryToIconClass(category)}`;

    const amountEl = document.createElement('div');
    amountEl.className = 'chart-donut-slice-amount';
    amountEl.innerHTML = `
      <ui-bb-format-amount class="amount-regular-color amount-integer"
        data-amount="${amount.amount}"
        data-currency="'${amount.currencyCode}'"
        data-wrap>
      </ui-bb-format-amount>`;

    // compile UI component
    context.$compile(angular.element(amountEl).contents())(context.$rootScope);

    wrapper.style.position = 'absolute';
    // do not show item until it is positioned correctly
    wrapper.style.opacity = 0;
    if (!topHalf) {
      wrapper.appendChild(icon);
    }
    wrapper.appendChild(amountEl);
    if (topHalf) {
      wrapper.appendChild(icon);
    }

    return wrapper;
  };

  /**
   * @description onClick handler with a visualisation for donut sector
   *
   * @name onDonutChartSectorClickAnimation
   * @type {function}
   * @param {*} chartInstance - the Chart.js object
   * @param {*} event - Chart.js click event object with a clicked area
   * @returns {object} name and isSelected flag of the active sector (category)
   */
  const onDonutChartSectorClickAnimation = (chartInstance, event) => {
    const defaultChartRadius = chartInstance.outerRadius;
    const activeSectors = chartInstance.getElementsAtEvent(event);

    if (!activeSectors.length) { return null; }
    /* eslint dot-notation:1 */
    const isActiveSectorSelected = activeSectors[0]['_model'].outerRadius > defaultChartRadius;

    // clear the chart radius
    Object.assign(chartInstance, { outerRadius: defaultChartRadius });
    chartInstance.update();

    // toggle active sector shifting
    if (!isActiveSectorSelected) {
      activeSectors[0]['_model'].outerRadius = defaultChartRadius + CHART_SECTOR_SHIFT_SIZE;
      chartInstance.render(RENDERING_ANIMATION_TIME, false);
    }
    return { name: activeSectors[0]['_model'].label, selected: !isActiveSectorSelected };
  };

  return {
    /**
     * @description
     * Period label formatter helper. In case period is larger than current date
     * (end date of current month) it returns translation for spending.label.period.now,
     * otherwise it returns formatted date
     *
     * @name periodLabelFormatter
     * @type {function}
     * @param {Date} date
     * @returns {string} Formatted label
     */
    periodLabelFormatter: (date) =>
      (new Date() < date ?
        i18nFilter('spending.label.period.now') : dateFilter(date, 'd MMM yyyy')),
    /**
     * @description
     * Creates custom tooltip content and places tooltip element on the edge
     * of currently active portion
     *
     * @name customizeTooltip
     * @type {function}
     *
     * @param {object} tooltip object containing tooltip related data like
     * positions, current data point, styling from chart options, etc.
     * @param {object} element in DOM
     * @param {SpendingsBBSeries} data array of data used to draw the chart
     * @param {object} chart instance
     */
    customizeTooltip: (tooltip, element, data, chart) => {
      // get all data for active point
      const item = data.spendings[tooltip.dataPoints[0].index];
      const arrowClass = (item.totalPortion - (item.portion / 2)) > 50 ?
        'bb-arrow-right' : 'bb-arrow-left';

      Object.assign(element, {
        innerHTML: buildTooltipContent(item),
        className: `chart-tooltip chart-tooltip-default hidden-xs ${arrowClass}`,
      });

      // compile tooltip's content
      context.$compile(angular.element(element).contents())(context.$rootScope);

      // calculate element position
      setTooltipPosition(element, tooltip, chart, item);
    },

    /**
     * @description
     * Chart.js options object to be used by component.
     * Has higher priority, can be used to override default options
     * values in a chart.
     *
     * @name donutChartOptions
     * @type {object}
     */
    donutChartOptions: {
      layout: {
        padding: {
          left: CHART_SECTOR_SHIFT_SIZE,
          right: CHART_SECTOR_SHIFT_SIZE,
          top: CHART_SECTOR_SHIFT_SIZE,
          bottom: CHART_SECTOR_SHIFT_SIZE,
        },
      },
      hover: {
        mode: null,
      },
    },
    /**
     * @description
     * Array of plugins used to transform Chart.js rendering in the extension
     *
     * @name chartPlugins
     * @type {array}
     */
    chartPlugins: [
      {
        afterInit: (chartInstance) => {
          const isInsideContainer = (element, idPrefix) => {
            const parent = element.parentNode;
            if (!parent || !parent.getAttribute) {
              return false;
            } else if ((parent.getAttribute('data-pid') || '').indexOf(idPrefix) === 0) {
              return true;
            }

            return isInsideContainer(parent, idPrefix);
          };

          // subscribe to toggle event of any type of container that has this behaviour
          CHART_UPDATE_SUBSCRIPTIONS.forEach((subscription) => {
            // if canvas is not inside a container, do not subscribe to it's event
            const containerIdPrefix = `container-${subscription.container}`;
            if (!isInsideContainer(chartInstance.canvas, containerIdPrefix)) {
              return;
            }

            context.bus.subscribe(subscription.event, (sender) => {
              // sender can be either HTML node or container's object
              // to conduct a search, node is needed
              const node = sender.htmlNode ? angular.element(sender.htmlNode) : sender;
              if (node.find(chartInstance.canvas).length) {
                chartInstance.update();
              }
            });
          });
        },
        beforeEvent: (chartInstance, event) => {
          if (event.type === 'click') {
            Object.assign(chartInstance, { onClickLayoutUpdate: true });
          }
        },
        afterEvent: (chartInstance, event) => {
          if (event.type === 'click') {
            Object.assign(chartInstance, { onClickLayoutUpdate: false });
          }
        },
        afterDatasetsUpdate: (chartInstance) => {
          if (chartInstance.onClickLayoutUpdate) {
            return;
          }
          // clear any existing icons if any on render
          clearSliceLabels(chartInstance.canvas.parentNode);
          if (!chartInstance.config.data.spendings) {
            return;
          }

          chartInstance.config.data.spendings.forEach(item => {
            if (item.portion < CHART_SLICE_LABEL.minimum) {
              return;
            }

            const circlePosition = item.totalPortion - (item.portion / 2);
            // top half of the labels has amount on top of the icon, other half on the bottom
            const topHalf = circlePosition < 25 || circlePosition > 75;
            const labelOffset = CHART_SLICE_LABEL.offset;
            const element = getNewSliceLabel(item.category, item.totalAmount, topHalf);
            // append element to chart in order to make it possible to measure width and height
            chartInstance.canvas.parentNode.appendChild(element);
            // use timeout to get real element dimensions once ui component is compiled
            setTimeout(() => {
              // position label correctly
              const yOffset = labelOffset + (element.clientHeight / 2) +
                (topHalf ? (element.clientHeight / 6) : (-element.clientHeight / 3));

              const radius = chartInstance.outerRadius + labelOffset;
              Object.assign(element.style, calculatePosition(circlePosition,
                radius, radius, labelOffset + (element.clientWidth / 2), yOffset),
                { opacity: 1 });
            }, 0);
          });
        },
      },
    ],
    /**
     * @description
     * Callback on period start date value change. This function ensures
     * that controller property is also updated
     *
     * @name onPeriodStartChange
     * @type {function}
     * @param {SpendingController} ctrl
     */
    onPeriodStartChange: (ctrl) => (newStartDate) =>
      Object.assign(ctrl, { periodStartDate: getNewDate(newStartDate) }),
    /**
     * @description
     * Callback on period value change. Calls
     * controller's onPeriodEndChanged listener
     *
     * @name onPeriodEndChange
     * @type {function}
     * @param {SpendingController} ctrl
     */
    onPeriodEndChange: (ctrl) => (newEndDate) =>
      ctrl.onPeriodEndDateChanged(getNewDate(newEndDate)),
    /**
     * @description
     * Checks if data for chart is available in series object
     *
     * @name isSeriesDataAvailable
     * @type {function}
     * @param {SpendingsBBSeries} series
     * @returns {boolean} returns true if series data is not empty
     */
    isSeriesDataAvailable: (series) => (series ? series.datasets[0].data.length : false),

    /**
     * @description
     * Function to create new handler for the chart click handling
     *
     * @name getClickHandler
     * @type {function}
     * @param {object} $ctrl spendings controller
     * @returns {function} chart click handler
     */
    getClickHandler: function getClickHandler($ctrl) {
      return function (clickEvent) {
        const chartInstance = this;
        const activeSector = onDonutChartSectorClickAnimation(chartInstance, clickEvent);
        if (activeSector && activeSector.name) {
          $ctrl.setSelectedSpendingItem(activeSector.selected
            ? populateSelectedSectorObject($ctrl, activeSector.name)
            : null
          );
        }
      };
    },
  };
};

export default helpers;

/**
 * Element absolute position object
 * @typedef {object} Position
 * @property {number} left Distance from left edge of the area
 * @property {number} top Distance from the top of area
 */
