import uiBbChartjsChartBarController from './controller';

/**
 * @name uiBbChartjsChartBarComponent
 * @type {object}
 * @description
 * Chart.js bar chart component object
 *
 * @property {string} title Title of the chart
 * @property {ChartjsBarSeries} series Object used to draw Chartjs bar chart
 * @property {number} barPercentage Part of tick width used for one bar in the category.
 * Can be number between 0.0 and 1.0
 * @property {number} categoryPercentage Part of tick width used for one category.
 * Can be number between 0.0 and 1.0
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
 * @property {ChartjsLegend} legend Object used to define chart's legend behavior and look
 * @property {ChartjsPlugin[]} plugins
 * Array of plugins that will be registered upon chart rendering
 * @property {boolean} horizontal Draw bars horizontally
 * @property {boolean} stacked Draw bars stacked one on another
 * @property {boolean} gridLines Draw gridlines inside chart area
 * @property {function} xFormatter Callback that receives all x axes ticks and series data.
 * It should return array of formatted ticks
 * @property {function} yFormatter Callback that receives all y axes ticks and series data.
 * It should return array of formatted ticks
 * @property {ChartjsSettings} options Object that overrides any property of
 * Chart.js default settings object
 */
const uiBbChartjsChartBarComponent = {
  controller: ['$element', '$scope', 'chartjs', uiBbChartjsChartBarController],
  bindings: {
    title: '@',
    series: '<',
    barPercentage: '<',
    categoryPercentage: '<',
    tooltip: '<',
    legend: '<',
    plugins: '<',
    horizontal: '<',
    stacked: '<',
    gridLines: '<',
    xFormatter: '&',
    yFormatter: '&',
    options: '<',
  },
  template: '<canvas></canvas>',
};

export default uiBbChartjsChartBarComponent;

/**
 * Series object used to draw Chartjs bar chart. Compatible with BBSeries generated
 * by model modules.
 * @typedef {object} ChartjsBarSeries
 * @property {string[]} labels Array of x axis labels
 * @property {ChartjsBarDataset[]} datasets Array of datasets
 */

/**
 * Dataset object for bar chart as defined by Chart.js library.
 * Compatible with BBDataset object used in BBSeries.
 * It is required for it to contain data as array of values.
 * More info about additional (optional) properties can be found at
 * {@link http://www.chartjs.org/docs/latest/charts/bar.html#dataset-properties}
 * @typedef {object} ChartjsBarDataset
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
 * Settings object with options available for bar chart.
 * More info {@link http://www.chartjs.org/docs/latest/charts/bar.html}
 * @typedef {object} ChartjsSettings
 */
