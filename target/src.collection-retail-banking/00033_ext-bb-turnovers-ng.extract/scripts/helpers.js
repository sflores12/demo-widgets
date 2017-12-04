/* eslint no-underscore-dangle: [2, { "allow": ["_model"] }]*/
/* global angular, window, document */
import getStyle from 'lib-bb-styles';
import {
  PERIODS,
  DATASET_LABELS,
  BAR_COUNT_BREAK_POINT,
  MAX_Y_TICKS,
  CSS_SELECTORS,
} from './constants';

/**
 * @description
 * Retrieves list of all periods
 *
 * @name getPeriods
 * @type {function}
 * @returns {Period[]} List of all available periods
 */
export const getPeriods = () => PERIODS;

/**
 * @description
 * Checks period object and converts it into format needed
 * for request (yyyy-mm-dd)
 *
 * @name periodToDate
 * @type {function}
 * @param {Period} period
 * @returns {string} Formatted date
 */
export const periodToDate = (period) => {
  const date = new Date();
  // current date already covers one period
  const intervalCount = period.duration - 1;
  switch (period.interval) {
    case 'DAY':
      date.setDate(date.getDate() - intervalCount);
      break;
    case 'WEEK':
      date.setDate(date.getDate() - (intervalCount * 7));
      break;
    case 'YEAR':
      date.setFullYear(date.getFullYear() - intervalCount);
      break;
    case 'MONTH':
    default:
      date.setMonth(date.getMonth() - intervalCount);
      break;
  }

  return date.toISOString().slice(0, 10);
};

/**
 * @description
 * Finds default period from period list
 *
 * @name getDefaultPeriod
 * @type {function}
 * @returns {Period} Period marked as default
 */
export const getDefaultPeriod = () => {
  const periods = getPeriods();
  const index = Math.max(periods.map(item => item.default).indexOf(true), 0);
  return periods[index];
};

const helpers = (context) => {
  const dateFilter = context.$filter('date');
  const currencyFilter = context.$filter('currency');
  const i18nFilter = context.$filter('i18n');
  const getSymbol = (code) => context.getRule(code).symbol || code;

  /**
   * @description
   * Keeps state of last screen mode
   *
   * @name helpers#onSmallScreen
   * @type {boolean}
   * @inner
   */
  let onSmallScreen = false;

  /**
   * @description
   * Keeps state of initial bar percentage
   * This value gets increased for small screens and reverted back
   * on resize
   *
   * @name helpers#initialBarPercentage
   * @type {number}
   * @inner
   */
  let initialBarPercentage = 0;

  /**
   * @description
   * To lower impact on performance, tooltip content will be stored in cache array once
   * it is compiled. Both datasets present the same tooltip for same point index, so
   * having cache per index is enough.
   *
   * @name helpers#tooltipContentCache
   * @type {string[]}
   * @inner
   */
  let tooltipContentCache = [];

  /**
   * @description
   * Checks if screen mode has changed from last time it was checked
   *
   * @name helpers#isScreenChanged
   * @type {function}
   * @inner
   * @param {boolean} smallScreen
   * @returns {boolean}
   */
  const isScreenChanged = (smallScreen) => {
    const changed = smallScreen !== onSmallScreen;
    if (changed) {
      onSmallScreen = smallScreen;
    }

    return changed;
  };

  /**
   * @description
   * Builds HTML content of the tooltip
   *
   * @name helpers#buildTooltipContent
   * @type {function}
   * @inner
   * @param {module:model-bb-turnovers-ng.TurnoverItem} item Selected item
   * @returns {string}
   */
  const buildTooltipContent = (item) => `
    <div class="row">
      <span class="col-xs-4">
        ${i18nFilter('turnovers.label.incoming')}
      </span>
      <span class="col-xs-8 text-right">
        <ui-bb-format-amount class="amount-regular-color"
          data-amount="${item.creditAmount.amount}"
          data-currency="'${item.creditAmount.currencyCode}'"
          data-wrap
          data-show-plus-sign>
        </ui-bb-format-amount>
      </span>
    </div>
    <div class="row">
      <span class="col-xs-4">
        ${i18nFilter('turnovers.label.outgoing')}
      </span>
      <span class="col-xs-8 text-right">
        <ui-bb-format-amount class="amount-regular-color"
          data-amount="${item.debitAmount.amount * -1}"
          data-currency="'${item.debitAmount.currencyCode}'"
          data-wrap>
        </ui-bb-format-amount>
      </span>
    </div>
    <hr class="chart-tooltip-divider">
    <div class="row">
      <span class="col-xs-4">
        <strong>${i18nFilter('turnovers.label.difference')}</strong>
      </span>
      <span class="col-xs-8 text-right text-${item.balance.amount < 0 ? 'danger' : 'success'}">
        <ui-bb-format-amount class="amount-regular-color"
          data-amount="${item.balance.amount}"
          data-currency="'${item.balance.currencyCode}'"
          data-wrap>
        </ui-bb-format-amount>
      </span>
    </div>
  `;

  /**
   * @description
   * Tries to get breaking point between small and medium screen width
   * Returns 0 if selector is not correct
   *
   * @name helpers#getBreakingPoint
   * @type {function}
   * @inner
   * @returns {number}
   */
  const getBreakingPoint = () => parseFloat(getStyle(CSS_SELECTORS.layoutBreak, 'width') || 0);

  /**
   * @description
   * Tries to get height of the tooltip arrow
   * Returns 0 if selector is not correct
   *
   * @name helpers#getTooltipArrowHeight
   * @type {function}
   * @inner
   * @returns {number}
   */
  const getTooltipArrowHeight = () =>
    parseFloat(getStyle(CSS_SELECTORS.arrowOuter, 'borderWidth')) || 0;

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
    parseFloat(getStyle(CSS_SELECTORS.axisY, 'padding')) || 0;

  /**
   * @description
   * Checks if current window width is lower than small screen break point
   *
   * @name helpers#isSmallScreen
   * @type {function}
   * @inner
   * @returns {boolean}
   */
  const isSmallScreen = () => window.innerWidth <= getBreakingPoint();

  /**
   * @description
   * Calculates absolute position of the tooltip, based on
   * bar height and chart dimensions and assigns them to the
   * tooltip DOM element
   *
   * @name helpers#setTooltipPosition
   * @type {function}
   * @inner
   * @param {object} element in DOM
   * @param {object} tooltip object containing tooltip related data like
   * positions, current data point, styling from chart options, etc.
   * @param {object} chart instance
   * @returns {string} CSS class that needs to be appended to tooltip's arrow
   */
  const setTooltipPosition = (element, tooltip, chart) => {
    const dataPoint = tooltip.dataPoints[0];
    const barWidth = chart.getDatasetMeta(dataPoint.datasetIndex)
      .data[dataPoint.index]._model.width;
    let positionX = (chart.canvas.offsetLeft + Math.floor(dataPoint.x) +
      Math.floor((dataPoint.datasetIndex === 0 ? 1 : -1) * (barWidth / 2))) -
      Math.ceil(element.clientWidth / 2);
    const positionY = tooltip.caretY - getTooltipArrowHeight() - element.clientHeight;

    // in case when tooltip is outside chart area, it needs to be moved inside
    let adjustmentClass = '';
    if (positionX < chart.chartArea.left) {
      adjustmentClass = CSS_SELECTORS.arrowNear;
      positionX += element.clientWidth / 4;
    } else if (positionX + element.clientWidth > chart.chartArea.right) {
      adjustmentClass = CSS_SELECTORS.arrowFar;
      positionX -= element.clientWidth / 4;
    }

    Object.assign(element.style, {
      left: `${positionX}px`,
      top: `${Math.max(0, positionY)}px`,
    });

    return adjustmentClass;
  };

  /**
   * @description
   * Post processing of tooltip's content
   *
   * @name helpers#afterContentReady
   * @type {function}
   * @inner
   * @param {object} element in DOM
   * @param {object} tooltip object containing tooltip related data like
   * positions, current data point, styling from chart options, etc.
   * @param {object} chart instance
   * @param {string} classes Default CSS classes of tooltip element
   */
  const afterContentReady = (element, tooltip, chart, classes) => {
    // calculate element's position and determine if some additional CSS class is needed
    const additionalClass = setTooltipPosition(element, tooltip, chart);
    Object.assign(element, { className: `${classes} ${additionalClass}` });
    Object.assign(element.style, { opacity: 1 });
  };

  return {
    periodToDate,
    getPeriods,
    getDefaultPeriod,

    /**
     * @description
     * Callback on period value change. This function makes sure
     * that controller properties are updated accordingly and calls
     * controller's onPeriodChanged listener
     *
     * @name helpers#onPeriodChange
     * @type {function}
     * @param {TurnoversController} ctrl
     */
    onPeriodChange: (ctrl) => {
      Object.assign(ctrl, { periodStartDate: periodToDate(ctrl.currentPeriod) });
      Object.assign(ctrl, { periodEndDate: new Date().toISOString().slice(0, 10) });
      ctrl.onPeriodStartDateChanged();
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
          // append dataset labels
          chartInstance.config.data.datasets.forEach((dataset, index) => {
            Object.assign(dataset, {
              label: i18nFilter(DATASET_LABELS[index]),
            });
          });

          const legendEl = document.createElement('div');
          legendEl.className = CSS_SELECTORS.legend;
          legendEl.innerHTML = chartInstance.generateLegend();
          chartInstance.canvas.parentNode.appendChild(legendEl);
        },
        beforeUpdate: (chartInstance) => {
          tooltipContentCache = [];
          const scales = chartInstance.config.options.scales;
          if (!initialBarPercentage) {
            initialBarPercentage = scales.xAxes[0].categoryPercentage;
          }

          const smallScreen = isSmallScreen();
          const data = chartInstance.config.data;
          const count = (data && data.labels) ? data.labels.length : 0;
          const smallScreenBarPercentage = Math.min(1, count >= BAR_COUNT_BREAK_POINT ?
            initialBarPercentage + 0.2 : initialBarPercentage + 0.1);

          if (isScreenChanged(smallScreen)) {
            chartInstance.config.data.datasets.reverse();
          } else if (chartInstance.config.data.updated && smallScreen) {
            // after data reload, we need immediate reverse for small screens
            chartInstance.config.data.datasets.reverse();
          }

          scales.yAxes[0].display = !smallScreen;
          scales.xAxes[0].categoryPercentage =
            smallScreen ? smallScreenBarPercentage : initialBarPercentage;
          data.updated = false;
        },
        afterUpdate: (chartInstance) => {
          if (!isSmallScreen()) {
            return;
          }

          const makeOffset = (datasetIndex, x, w) => {
            const meta = chartInstance.getDatasetMeta(datasetIndex);
            if (!meta) {
              return;
            }

            const metaData = meta.data;
            for (let i = 0; i < metaData.length; i++) {
              const model = metaData[i]._model;
              model.x += model.width * x;
              model.width *= w;
            }
          };

          makeOffset(0, 0.5, 1.43);
          makeOffset(1, -0.5, 2);
        },
      },
    ],

    /**
     * @description
     * Creates custom tooltip content and places tooltip element on top
     * of the currently active bar
     *
     * @name customizeTooltip
     * @type {function}
     *
     * @param {object} tooltip object containing tooltip related data like
     * positions, current data point, styling from chart options, etc.
     * @param {object} element in DOM
     * @param {TurnoversBBSeries} data array of data used to draw the chart
     * @param {object} chart instance
     */
    customizeTooltip: (tooltip, element, data, chart) => {
      const pointIndex = tooltip.dataPoints[0].index;
      const defaultClasses =
        'chart-tooltip chart-tooltip-wide chart-tooltip-default bb-arrow-bottom hidden-xs';
      Object.assign(element, { className: defaultClasses });
      // do not show element until it's content is ready
      Object.assign(element.style, { opacity: 0 });

      // if content is cached skip building and compilation and go straight to post processing
      if (tooltipContentCache[pointIndex]) {
        Object.assign(element, { innerHTML: tooltipContentCache[pointIndex] });
        afterContentReady(element, tooltip, chart, defaultClasses);
        return;
      }

      // get data object for active point
      const item = data.original.turnovers[tooltip.dataPoints[0].index];
      Object.assign(element, { innerHTML: buildTooltipContent(item) });
      // compile tooltip's content
      context.$compile(angular.element(element).contents())(chart.$scope);
      // use timeout to get real element dimensions once ui component is compiled
      setTimeout(() => {
        afterContentReady(element, tooltip, chart, defaultClasses);
        // cache the content
        tooltipContentCache[pointIndex] = element.innerHTML;
      }, 0);
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

    /**
     * @description
     * Object with chart options that need to be overriden
     *
     * @name chartOptions
     * @type {ChartjsSettings}
     */
    chartOptions: {
      scales: {
        xAxes: [{
          ticks: {
            fontColor: getStyle(CSS_SELECTORS.axisX, 'color'),
            fontFamily: getStyle(CSS_SELECTORS.axisBase, 'fontFamily'),
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
            fontColor: getStyle(CSS_SELECTORS.axisY, 'color'),
            fontFamily: getStyle(CSS_SELECTORS.axisBase, 'fontFamily'),
          },
        }],
      },
    },

    /**
     * @description
     * Checks chart series object to see if there are actual chart points to draw
     *
     * @name hasDataToDraw
     * @type {function}
     *
     * @param {TurnoversBBSeries} series Chart series
     * @returns {boolean}
     */
    hasDataToDraw: (series) =>
      series && series.datasets && series.datasets[0] &&
      series.datasets[0].data && series.datasets[0].data.length,
  };
};

export default helpers;
