/**
 * @module ui-bbm-currency-input-ng
 * @description
 * Currency input UI component (deprecated).
 * Use ui-bbm-amount-field-ng instead.
 *
 * @example
 * // In an extension:
 * // file: scripts/index.js
 * import uiBbmCurrencyInputNgKey from 'ui-bbm-currency-input-ng';
 *
 * export const dependencyKeys = [
 *   uiBbmCurrencyInputNgKey,
 * ];
 *
 * // file: templates/template.ng.html
 * <ui-bbm-currency-input-ng
 *   max-length="6"
 *   decimal-max-length="2"
 *   ng-model="$ctrl.payment.amount"
 *   currency="$ctrl.currency">
 * </ui-bbm-currency-input-ng>
 */
import angular from 'vendor-bb-angular';

import currencyInput from './currency-input';
import numericMaxLength from './numeric-max-length';

import '../styles/index.css';

// eslint-disable-next-line max-len, no-console
console.warn('DEPRECATED - Component ui-bbm-currency-input-ng will be removed. Use component ui-bbm-amount-field-ng instead.');

/**
 * @name default
 * @type {string}
 * @description The angular module name
 */
export default angular.module('ui-bbm-currency-input-ng', [])
  .directive('numericMaxLength', numericMaxLength)
  .directive('uiBbmCurrencyInputNg', ['$timeout', currencyInput])
  .name;
