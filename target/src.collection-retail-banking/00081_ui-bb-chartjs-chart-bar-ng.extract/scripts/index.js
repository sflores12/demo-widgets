/**
 * @module ui-bb-chartjs-chart-bar-ng
 *
 * @example
 * // In an extension:
 * // file: scripts/index.js
 * import uiBbChartjsChartBar from 'ui-bb-chartjs-chart-bar-ng';
 *
 * export const dependencyKeys = [
 *   uiBbChartjsChartBar,
 * ];
 *
 * // file: templates/template.ng.html
 * <ui-bb-chartjs-chart-bar class="col-xs-12"
 *   data-series="$ctrl.series"
 *   data-title="$ctrl.title"
 *   data-stacked="false"
 *   data-horizontal="false"
 *   data-grid-lines="false"
 *   data-bar-percentage="0.9"
 *   data-category-percentage="1.0"
 *   data-legend="ext.helpers.customizeLegend"
 *   data-tooltip="ext.helpers.customizeTooltip"
 *   data-plugins="ext.helpers.chartPlugins"
 *   data-options="ext.helpers.chartOptions"
 *   data-x-formatter="ext.helpers.formatX"
 *   data-y-formatter="ext.helpers.formatY"
 * />
 */

import angular from 'vendor-bb-angular';
import chartjs from 'vendor-bb-chartjs';

import component from './component';

/**
 * @description The angular module name
 * @name default
 * @type {string}
 */
export default angular.module('ui-bb-chartjs-chart-bar-ng', [])
  .value('chartjs', chartjs)
  .component('uiBbChartjsChartBar', component)
  .name;
