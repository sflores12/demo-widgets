/**
 * @module ui-bb-chartjs-chart-donut-ng
 *
 * @example
 * // In an extension:
 * // file: scripts/index.js
 * import uiBbChartjsChartDonut from 'ui-bb-chartjs-chart-donut-ng';
 *
 * export const dependencyKeys = [
 *   uiBbChartjsChartDonut,
 * ];
 *
 * // file: templates/template.ng.html
 * <ui-bb-chartjs-chart-donut
 *   data-series="$ctrl.series"
 *   data-title="$ctrl.title"
 *   data-cutout-percentage="30"
 *   data-legend="ext.helpers.customizeLegend"
 *   data-options="ext.helpers.chartOptions"
 *   data-click-getter="ext.helpers.getClickHandler($ctrl)">
 *     <!-- Optional content that can be inserted over the canvas -->
 *     <div class="absolute-center">Total amount: 100</div>
 * <ui-bb-chartjs-chart-donut
 */

import angular from 'vendor-bb-angular';
import chartjs from 'vendor-bb-chartjs';

import component from './component';
import '../styles/index.css';

/**
 * @description The angular module name
 * @name default
 * @type {string}
 */
export default angular
  .module('ui-bb-chartjs-chart-donut-ng', [])
  .value('chartjs', chartjs)
  .component('uiBbChartjsChartDonutNg', component)
  .name;
