/**
 * @module ui-bbm-amount-field-ng
 * @description
 * Currency input UI component
 *
 * @example
 * // In an extension:
 * // file: scripts/index.js
 * import uiBbmAmountFieldNgKey from 'ui-bbm-amount-field-ng';
 *
 * export const dependencyKeys = [
 *   uiBbmAmountFieldNgKey,
 * ];
 *
 * // file: templates/template.ng.html
 * <ui-bbm-amount-field-ng
 *   max-length="6"
 *   decimal-max-length="2"
 *   ng-model="$ctrl.payment.amount"
 *   currency="$ctrl.currency">
 * </ui-bbm-amount-field-ng>
 */
import angular from 'vendor-bb-angular';

import component from './component';
import numericMaxLength from './numeric-max-length';

import '../styles/index.css';

/**
 * @name default
 * @type {string}
 * @description The angular module name
 */
export default angular.module('ui-bbm-amount-field-ng', [])
  .directive('numericMaxLength', numericMaxLength)
  .directive('uiBbmAmountFieldNg', [
    '$timeout',
    component,
  ])
  .name;
