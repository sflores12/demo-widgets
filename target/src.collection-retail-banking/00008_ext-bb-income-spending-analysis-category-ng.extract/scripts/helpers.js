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
  BAR_CHART_CSS_SELECTORS,
  MAX_Y_TICKS,
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
 * @param {ExtendedAnalysisCategory} item Hovered item
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
 * Tries to get Y axis label padding
 * Returns 0 if selector is not correct
 *
 * @name helpers#getYAxisLabelPadding
 * @type {function}
 * @inner
 * @returns {number}
 */
const getYAxisLabelPadding = () =>
  parseFloat(getStyle(BAR_CHART_CSS_SELECTORS.axisY, 'padding')) || 0;

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

/**
 * @description
 * Maps controller's properties into object required for transaction category intent
 *
 * @name populateSelectedSectorObject
 * @type {function}
 * @inner
 * @param {object} $ctrl
 * @param {string} activeSectorName
 * @returns {object}
 */
const populateSelectedSectorObject = ($ctrl, activeSectorName) => ({
  category: activeSectorName,
  bookingDateGreaterThan: $ctrl.periodStartDate,
  bookingDateLessThan: $ctrl.periodEndDate,
  productId: $ctrl.selectedProducts[0].id,
});

const helpers = (context) => {
  const i18nFilter = context.$filter('i18n');
  const dateFilter = context.$filter('date');
  const currencyFilter = context.$filter('currency');
  const getSymbol = (code) => context.getRule(code).symbol || code;

  /**
   * @description
   * Flag that tells us if current analysis type is spending
   *
   * @inner
   * @name isSpending
   * @type {boolean}
   */
  let isSpending = true;

  /**
   * @description
   * Chart.js options object to be used by component.
   * Has higher priority, can be used to override default options
   * values in a chart.
   *
   * @inner
   * @name chartOptions
   * @type {object}
   */
  const chartOptions = {
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
  };

  /**
   * @description
   * Returns the different icon class based on trend value
   *
   * @name getTrendIconClass
   * @type {function}
   * @inner
   * @param {number} trend Trend percentage
   * @returns {string}
   */
  const getTrendIconClass = trend => {
    if (trend < -1) {
      return 'fa-arrow-down';
    } else if (trend > 1) {
      return 'fa-arrow-up';
    }

    return '';
  };

  /**
   * @description
   * Checks if the trend for the previous month
   * is the same as for the current one
   *
   * @name checkTrendValueChanged
   * @type {function}
   * @inner
   * @param {number} trend Trend percentage
   * @returns {boolean}
   */
  const checkTrendValueChanged = trend => {
    if (Math.abs(trend) <= 1) {
      return false;
    }

    return true;
  };

  /**
   * @description
   * Returns the message for the trend label based on trend value
   *
   * @name getTrendLabel
   * @type {function}
   * @inner
   * @param {number} trend Trend percentage
   * @returns {string}
   */
  const getTrendLabel = trend => {
    if (trend < -1) {
      return 'analysis.tooltip.less.than.previous';
    } else if (trend > 1) {
      return 'analysis.tooltip.more.than.previous';
    }

    return 'analysis.tooltip.same.as.previous';
  };

  /**
   * @description
   * Builds HTML content of the tooltip
   *
   * @name buildTooltipContent
   * @type {function}
   * @inner
   * @param {ExtendedAnalysisCategory} item Hovered item
   * @returns {string}
   */
  const buildTooltipContent = (item) => {
    const trendClass = item.trend > 0 ? 'text-danger' : 'text-success';
    const textClass = isSpending ? trendClass : 'text-muted';
    const tooltipCategory = `
      <i class="fa bb-transaction-category-${categoryToIconClass(item.category)}"></i>
    `;
    const trendValue = `
      <span>${Math.abs(item.trend)}%</span>
    `;
    return `
      <span class="chart-tooltip-analysis-category text-muted">
        ${item.portion < CHART_SLICE_LABEL.minimum
          ? `<span class="mr-1 d-inline-block">${tooltipCategory}</span>`
          : ''}
        ${item.category}
      </span>
      <div class="row">
        <strong>
          <ui-bb-format-amount
            class="h4 my-0 mb-05 col-xs-12 chart-tooltip-analysis-amount amount-regular-color"
            data-amount="${item.totalAmount.amount}"
            data-currency="'${item.totalAmount.currencyCode}'"
            data-wrap>
          </ui-bb-format-amount>
        </strong>
      </div>
      <p class="chart-tooltip-analysis-portion text-muted">
        ${item.portion}% ${i18nFilter('analysis.tooltip.of.total')}
      </p>
      ${item.trend !== undefined ? `
        <hr class="chart-tooltip-divider">
        <p class="chart-tooltip-analysis-trend ${textClass}">
          <i
            class="chart-tooltip-info-icon fa ${getTrendIconClass(item.trend)}"
          ></i>
          <span class="h4 m-0 d-block">
            ${checkTrendValueChanged(item.trend) ? trendValue : ''}
          </span>
          <span class="chart-tooltip-info-text text-muted">
            ${i18nFilter(getTrendLabel(item.trend))}
          </span>
        </p>
      ` : ''}
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
   * Renders slice labels
   *
   * @name renderSliceLabels
   * @type {function}
   * @inner
   * @param {*} chartInstance - the Chart.js object
   */
  const renderSliceLabels = (chartInstance) => {
    // clear any existing icons if any on render
    clearSliceLabels(chartInstance.canvas.parentNode);

    if (!chartInstance.config.data.analysisItems) {
      return;
    }

    chartInstance.config.data.analysisItems.forEach(item => {
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
          radius, radius, labelOffset + (element.clientWidth / 2), yOffset), { opacity: 1 });
      }, 0);
    });
  };


  /**
   * @description
   * Calculates absolute position of the tooltip, based on
   * bar height and chart dimensions and assigns them to the
   * tooltip DOM element
   *
   * @name helpers#setTurnoversTooltipPosition
   * @type {function}
   * @inner
   * @param {object} element in DOM
   * @param {object} tooltip object containing tooltip related data like
   * positions, current data point, styling from chart options, etc.
   */
  const setTurnoversTooltipPosition = (element, tooltip) => {
    const positionX = Math.floor(tooltip.caretX) - Math.floor(tooltip.width);
    const positionY = tooltip.caretY - element.clientHeight;

    Object.assign(element.style, {
      left: `${positionX}px`,
      top: `${Math.max(0, positionY)}px`,
    });
  };

  return {
    /**
     * @description
     * Start period label formatter helper. Returns formatted date.
     *
     * @name periodStartLabelFormatter
     * @type {function}
     * @param {Date} date
     * @returns {string} Formatted label
     */
    periodStartLabelFormatter: (date) => dateFilter(date, 'd MMM yyyy'),

    /**
     * @description
     * End period label formatter helper. In case period is larger than current date
     * (end date of current month) it returns translation for analysis.label.period.now,
     * otherwise it returns formatted date
     *
     * @name periodEndLabelFormatter
     * @type {function}
     * @param {Date} date
     * @returns {string} Formatted label
     */
    periodEndLabelFormatter: (date) => (new Date(new Date().setHours(0, 0, 0, 0)) > date
      ? dateFilter(date, 'd MMM yyyy')
      : i18nFilter('analysis.label.period.now')),

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
     * @param {AnalysisCategoryBBSeries} data array of data used to draw the chart
     * @param {object} chart instance
     */
    customizeTooltip: (tooltip, element, data, chart) => {
      // get all data for active point
      const item = data.analysisItems[tooltip.dataPoints[0].index];
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
     * Creates custom tooltip content and places tooltip element on top
     * of the currently active bar
     *
     * @name customizeTurnoversTooltip
     * @type {function}
     *
     * @param {object} tooltip object containing tooltip related data like
     * positions, current data point, styling from chart options, etc.
     * @param {object} element in DOM
     * @param {TurnoversBBSeries} data array of data used to draw the chart
     */
    customizeTurnoversTooltip: (tooltip, element, data) => {
      // get all data for active point
      const item = data.original.turnovers[tooltip.dataPoints[0].index];
      const dataKey = data.datasets[0].dataKey;
      Object.assign(element, {
        innerHTML: `
          <ui-bb-format-amount class="amount-regular-color"
            data-amount="${item[dataKey].amount}"
            data-currency="'${item[dataKey].currencyCode}'"
            data-wrap>
          </ui-bb-format-amount>
        `,
        className:
          `chart-tooltip chart-tooltip-default chart-tooltip-small
            text-center bb-arrow-bottom hidden-xs`,
      });

      // compile tooltip's content
      context.$compile(angular.element(element).contents())(context.$rootScope);

      // calculate element position
      setTurnoversTooltipPosition(element, tooltip);
    },

    /**
     * @description
     * Keeps analysis type flag and returns chart options object
     *
     * @name donutChartOptions
     * @type {function}
     * @returns {object} Donut chart options object
     */
    donutChartOptions: (ctrl) => {
      isSpending = ctrl.isSpendingAnalysis();
      return chartOptions;
    },

    /**
     * @description
     * Chart.js options object to be used by bar chart component.
     * Has higher priority, can be used to override default options
     * values in a chart.
     *
     * @inner
     * @name barChartOptions
     * @type {object}
     */

    barChartOptions: {
      scales: {
        xAxes: [{
          ticks: {
            fontColor: getStyle(BAR_CHART_CSS_SELECTORS.axisX, 'color'),
            fontFamily: getStyle(BAR_CHART_CSS_SELECTORS.axisBase, 'fontFamily'),
          },
        }],
        yAxes: [{
          gridLines: {
            display: true,
            drawBorder: false,
            tickMarkLength: 0,
          },
          ticks: {
            min: 0,
            maxTicksLimit: MAX_Y_TICKS,
            padding: getYAxisLabelPadding(),
            fontColor: getStyle(BAR_CHART_CSS_SELECTORS.axisY, 'color'),
            fontFamily: getStyle(BAR_CHART_CSS_SELECTORS.axisBase, 'fontFamily'),
          },
        }],
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
                renderSliceLabels(chartInstance);
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

          renderSliceLabels(chartInstance);
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
     * @param {IncomeSpendingAnalysisCategoryController} ctrl
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
     * @param {IncomeSpendingAnalysisCategoryController} ctrl
     */
    onPeriodEndChange: (ctrl) => (newEndDate) => {
      Object.assign(ctrl, { periodEndDate: getNewDate(newEndDate) });
      ctrl.updateAnalysisCategories();
    },

    updatePeriod: (ctrl, monthsRange) => {
      const date = new Date();
      const startDate = (monthsRange === 1)
        ? date.setDate(1)
        : date.setMonth(date.getMonth() - monthsRange);

      Object.assign(ctrl, {
        periodStartDate: getNewDate(new Date(startDate)),
        periodEndDate: getNewDate(new Date()),
      });
      if (monthsRange > 1) {
        ctrl.updateTurnovers();
      }

      ctrl.updateAnalysisCategories();
    },

    /**
     * @description
     * Checks if data for chart is available in series object
     *
     * @name isSeriesDataAvailable
     * @type {function}
     * @param {AnalysisCategoryBBSeries} series
     * @returns {boolean} returns true if series data is not empty
     */
    isSeriesDataAvailable: (series) => (series ? series.datasets[0].data.length : false),

    /**
     * @description
     * Function to create new handler for the chart click handling
     *
     * @name getClickHandler
     * @type {function}
     * @param {IncomeSpendingAnalysisCategoryController} $ctrl
     * @returns {function} chart click handler
     */
    getClickHandler: function getClickHandler($ctrl) {
      return function (clickEvent) {
        // TODO: remove once multiple account request is supported by transactions enpoint
        if ($ctrl.selectedProducts.length > 1) {
          return;
        }
        // end of section

        const chartInstance = this;
        const activeSector = onDonutChartSectorClickAnimation(chartInstance, clickEvent);
        if (activeSector && activeSector.name) {
          $ctrl.setSelectedAnalysisItem(activeSector.selected
            ? populateSelectedSectorObject($ctrl, activeSector.name)
            : null
          );
        }
      };
    },

    /**
     * @description
     * X axis tick formatter
     *
     * @name formatX
     * @type {function}
     *
     * @param {array} ticks Array of scale ticks
     * @param {TurnoversBBSeries} data Chart series
     * @returns {array} Formatted array of ticks
     */
    formatX: (ticks) => ticks.map(tick => dateFilter(tick, 'MMM')),

    /**
     * @description
     * Y axis tick formatter
     *
     * @name formatY
     * @type {function}
     *
     * @param {array} ticks Array of scale ticks
     * @param {TurnoversBBSeries} data Chart series
     * @returns {array} Formatted array of ticks
     */
    formatY: (ticks, data) => {
      if (!data) {
        return [];
      }

      // the same currency is being used for all ticks
      const currencyCode = data.original.turnovers[0].balance.currencyCode;
      return ticks.map(tick => {
        if (parseFloat(tick) === 0) {
          return null;
        }
        return currencyFilter(tick, getSymbol(currencyCode), 0);
      });
    },
    categoryToIconClass,
  };
};

export default helpers;

/**
 * Element absolute position object
 * @typedef {object} Position
 * @property {number} left Distance from left edge of the area
 * @property {number} top Distance from the top of area
 */
