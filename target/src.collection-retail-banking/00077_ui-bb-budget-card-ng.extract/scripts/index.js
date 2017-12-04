/**
 * @module ui-bb-budget-card-ng
 *
 * @example
 * // In an extension:
 * // file: scripts/index.js
 * import uiBbBudgetCardNg from 'ui-bb-budget-card-ng';
 *
 * export const dependencyKeys = [
 *   uiBbBudgetCardNg,
 * ];
 *
 * // file: templates/template.ng.html
 * <ui-bb-budget-card-ng class="col-xs-12"
 * />
 */

import angular from 'vendor-bb-angular';

import uiBbFormatAmount from 'ui-bb-format-amount';

import component from './component';

/**
 * @description The angular module name
 * @name default
 * @type {string}
 */
export default angular
  .module('ui-bb-budget-card-ng', [
    uiBbFormatAmount,
  ])
  .component('uiBbBudgetCardNg', component)
  .name;
