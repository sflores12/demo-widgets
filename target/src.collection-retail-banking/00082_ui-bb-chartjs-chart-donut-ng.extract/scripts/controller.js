/* global angular, document */

/**
 * @name uiBbChartjsChartDonutController
 * @ngkey uiBbChartjsChartDonutController
 * @type {function}
 *
 * @description
 * Chart.js donut chart controller
 */

import utils from './utils';

const uiBbChartjsChartDonutController =
  function uiBbChartjsChartDonutController($element, $scope, Chartjs) {
    const $ctrl = this;
    const element = $element.find('canvas')[0];
    const HAS_CUSTOM_TOOLTIP = typeof($ctrl.tooltip) === 'function';

    let chart;

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
     * @name getChartOptions
     * @type {function}
     * @inner
     * @description
     * Builds JSON structure needed for chart rendering
     */
    const getChartOptions = () => {
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
        legend,
        cutoutPercentage: $ctrl.cutoutPercentage,
        tooltips: {
          enabled: !HAS_CUSTOM_TOOLTIP,
          custom: HAS_CUSTOM_TOOLTIP ? tooltip => drawTooltip(tooltip) : null,
        },
      };
      utils.removeEmptyProperties(options);
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
        type: 'doughnut',
        options: angular.merge(getChartOptions(), $ctrl.options, {
          onClick: $ctrl.clickGetter(),
        }),
        data: $ctrl.series,
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
     * AngularJS Lifecycle hook used to initialize the controller
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

export default uiBbChartjsChartDonutController;
