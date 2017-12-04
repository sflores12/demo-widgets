/* global angular, document */
/**
 * @name uiBbChartjsChartBarController
 * @ngkey uiBbChartjsChartBarController
 * @type {function}
 *
 * @description
 * Chart.js bar chart controller
 */
const uiBbChartjsChartBarController =
  function uiBbChartjsChartBarController($element, $scope, Chartjs) {
    const $ctrl = this;
    const HAS_CUSTOM_TOOLTIP = typeof($ctrl.tooltip) === 'function';

    const element = $element.find('canvas')[0];
    let chart;

    /**
     * @name removeEmptyProperty
     * @type {function}
     * @inner
     * @description
     * Returns a copy of the scanned object without selected property
     * if the property is null or undefined
     *
     * @param {string} prop Name of the property
     * @param {object} obj Object to be scanned
     * @returns {object} Cleared object
     */
    const removeEmptyProperty = (prop, obj) => {
      const target = obj;
      const item = target[prop];
      if (item === null || item === undefined) {
        delete target[prop];
      } else if (typeof item === 'object') {
        angular.forEach(item, (value, key) => removeEmptyProperty(key, item));
      }

      return target;
    };

    /**
     * @name removeEmptyProperties
     * @type {function}
     * @inner
     * @description
     * Removes all null or undefined properties from an object
     *
     * @param {object} obj Object to be scanned
     */
    const removeEmptyProperties = (obj) =>
      angular.forEach(obj, (value, key) => removeEmptyProperty(key, obj));

    /**
     * @name drawTooltip
     * @type {function}
     * @inner
     * @description
     * In case there is custom tooltip callback, this method will prepare
     * DOM element and provide reference to it, additionally with all
     * series data and chart instance
     *
     * @param {object} tooltip Chart.js tooltip object
     */
    const drawTooltip = (tooltip) => {
      // retrieve existing tooltip DOM element or create a new one
      const tooltipDataAttr = 'data-chartjs-tooltip';
      const tooltipSelector = `div[${tooltipDataAttr}]`;
      let tooltipEl = $element[0].querySelector(tooltipSelector);
      if (!tooltipEl) {
        tooltipEl = document.createElement('div');
        tooltipEl.setAttribute(tooltipDataAttr, '');
        // prevent flickering when hovering above tooltip that covers part of the chart
        tooltipEl.setAttribute('onmouseenter', 'event.target.style.display = \'inherit\'');
        tooltipEl.setAttribute('onmouseleave', 'event.target.style.display = \'none\'');
        chart.canvas.parentNode.appendChild(tooltipEl);
      }

      // if tooltip should not be visible, hide it and stop execution
      if (tooltip.opacity === 0) {
        tooltipEl.style.display = 'none';
        return;
      }

      tooltipEl.style.display = 'inherit';
      // execute custom tooltip builder
      $ctrl.tooltip(tooltip, tooltipEl, $ctrl.series, chart);
    };

    /**
     * @name getAxesOptions
     * @type {function}
     * @inner
     * @description
     * Builds axes JSON configuration
     *
     * @param {function} formatter Axis tick formatter
     */
    const getAxesOptions = (formatter) => [{
      beforeCalculateTickRotation: (axis) => {
        Object.assign(axis, {
          ticks: formatter(axis.ticks, $ctrl.series),
        });
      },
      gridLines: {
        display: !!$ctrl.gridLines,
      },
      stacked: !!$ctrl.stacked,
      barPercentage: $ctrl.barPercentage,
      categoryPercentage: $ctrl.categoryPercentage,
    }];

    /**
     * @name getChartOptions
     * @type {function}
     * @inner
     * @description
     * Builds JSON structure needed for chart rendering
     */
    const getChartOptions = () => {
      // if there are no formatters use dummy callback
      const xFormatter = $ctrl.xFormatter() || (v => v);
      const yFormatter = $ctrl.yFormatter() || (v => v);
      // legend is displayed by default, so if there is no legend data
      // create an object that forces it to be hidden
      const legend = $ctrl.legend ?
        Object.assign($ctrl.legend, { display: true }) :
        { display: false };

      const options = {
        title: {
          display: !!$ctrl.title,
          text: $ctrl.title,
        },
        scales: {
          xAxes: getAxesOptions(xFormatter),
          yAxes: getAxesOptions(yFormatter),
        },
        legend,
        tooltips: {
          enabled: !HAS_CUSTOM_TOOLTIP,
          custom: HAS_CUSTOM_TOOLTIP ? tooltip => drawTooltip(tooltip) : null,
        },
      };

      removeEmptyProperties(options);
      return options;
    };

    /**
     * @name createChart
     * @type {function}
     * @inner
     * @description
     * Creates new chart instance
     */
    const createChart = () => {
      // generate chart with all the options combined
      chart = Object.assign(new Chartjs(element, {
        type: $ctrl.horizontal ? 'horizontalBar' : 'bar',
        data: $ctrl.series,
        options: angular.merge(getChartOptions(), $ctrl.options),
        plugins: $ctrl.plugins,
      }), { $scope });
    };

    /**
     * @name updateChart
     * @type {function}
     * @inner
     * @description
     * Redraws chart with the new data
     */
    const updateChart = () => {
      chart.data = $ctrl.series;
      chart.update();
    };

    /**
     * AngularJS Lifecycle hook used to draw chart
     *
     * @name $onInit
     * @type {function}
     * @returns {void}
     */
    const $onInit = () => createChart();

    /**
     * AngularJS Lifecycle hook used to update chart
     *
     * @name $onChanges
     * @type {function}
     * @returns {void}
     */
    const $onChanges = () => {
      // Skip update before init
      if (chart) {
        updateChart();
      }
    };

    Object.assign($ctrl, {
      $onInit,
      $onChanges,
    });
  };

export default uiBbChartjsChartBarController;
