import uiBbChartjsChartDonutController from './controller';

/**
 * @name uiBbChartjsChartDonutComponent
 * @type {object}
 * @description
 * Chart.js Donut chart component object
 *
 * @property {string} title Title of the chart
 * @property {ChartjsDonutSeries} series Object used to draw Chartjs donut chart
 * @property {ChartjsLegend} legend Object used to define chart's legend behavior and look
 * @property {number} cutoutPercentage The percentage of the chart that is cut out of the middle.
 * Example: 50 - for doughnut, 0 - for pie
 * @property {function} tooltip Method for drawing custom tooltip. If this property is not
 * used, default tooltip will be rendered. Otherwise, this method will be provided with:
 * - tooltip: Chart.js tooltip object
 * - element: tooltip DOM element
 * - data: series used to draw chart
 * - chart: Chart.js chart object
 * Custom method needs at least to fill in internal HTML of custom tooltip
 * by injecting the content into element provided
 * - Example:
 * customTooltip: (tooltip, element, data, chart) =>
 * Object.assign(element, { innerHTML: '<div>Custom content</div>' }),
 * @property {ChartjsPlugin[]} plugins
 * @property {ChartjsSettings} options Object that overrides any property of
 * Chart.js default settings object
 * @property {ChartjsEvents} clickGetter Function, which returns click handler
 * for the Donut chart.
 */
const component = {
  controller: ['$element', '$scope', 'chartjs', uiBbChartjsChartDonutController],
  bindings: {
    title: '@',
    series: '<',
    legend: '<',
    cutoutPercentage: '<',
    tooltip: '<',
    plugins: '<',
    options: '<',
    clickGetter: '&',
  },
  transclude: true,
  template: `
    <div class="donut-chart-container">
      <ng-transclude></ng-transclude>
      <div class="donut-chart-canvas-container">
        <canvas></canvas>
      </div>
    </div>`,
};

export default component;

/**
 * Series object used to draw Chartjs donut chart. Compatible with BBSeries generated
 * by model modules.
 * @typedef {object} ChartjsDonutSeries
 * @property {string[]} labels Array of chart labels
 * @property {ChartjsDonutDataset[]} datasets Array of datasets
 */

/**
 * Dataset object for donut chart as defined by Chart.js library.
 * Compatible with BBDataset object used in BBSeries.
 * It is required for it to contain data as array of values.
 * More info about additional (optional) properties can be found at
 * {@link http://www.chartjs.org/docs/latest/charts/doughnut.html#dataset-properties}
 * @typedef {object} ChartjsDonutDataset
 * @property {number[]} data Array of data points to be drawn for each label
 */

/**
 * Legend object as defined in Chart.js library.
 * More info
 * {@link http://www.chartjs.org/docs/latest/configuration/legend.html#configuration-options}
 * @typedef {object} ChartjsLegend
 */

/**
 * Plugin object as defined in Chart.js library. It should define at least one hook from
 * {@link http://www.chartjs.org/docs/latest/developers/plugins.html#plugin-core-api}
 * @typedef {object} ChartjsPlugin
 */

/**
 * Settings object with options available for Donut chart.
 * More info {@link http://www.chartjs.org/docs/latest/charts/doughnut.html}
 * @typedef {object} ChartjsSettings
 */

/**
 * Function, which returns click handler for the Donut chart.
 * More info {@link http://www.chartjs.org/docs/latest/general/interactions/events.html}
 * @typedef {object} ChartjsEvents
 */
