/**
 * @module ui-bb-currency-input-ng
 * @description
 * Currency input UI component
 *
 * @example
 * // In an extension:
 * // file: scripts/index.js
 * import uiBbCurrencyInputNgKey from 'ui-bb-currency-input-ng';
 *
 * export const dependencyKeys = [
 *   uiBbCurrencyInputNgKey,
 * ];
 *
 * // file: templates/template.ng.html
 * <ui-bb-currency-input-ng
 *   data-max-length="6"
 *   data-decimal-max-length="2"
 *   data-placeholder="000,000"
 *   data-ng-model="$ctrl.payment.amount"
 *   data-currencies="$ctrl.currencies"
 *   data-integer>
 * </ui-bb-currency-input-ng>
 */
import angular from 'vendor-bb-angular';
import uiBbDropdownSelectKey from 'ui-bb-dropdown-select';
import libBbCurrencyNgKey, { bbCurrencyRuleKey } from 'lib-bb-currency-ng';

import currencyInput from './currency-input';
import currencyFormatting from './currency-formatting';
import decimalsFormatting from './decimals-formatting';

const dependencyKeys = [
  libBbCurrencyNgKey,
  uiBbDropdownSelectKey,
];

/**
 * @name default
 * @type {string}
 * @description The angular module name
 */
export default angular.module('ui-bb-currency-input-ng', dependencyKeys)
  .directive('currencyFormatting', ['$filter', '$locale', currencyFormatting])
  .directive('decimalsFormatting', decimalsFormatting)
  .directive('uiBbCurrencyInputNg', ['$locale', 'currencyAttr', currencyInput])
  .factory('currencyAttr', [bbCurrencyRuleKey, (getRule) => ({
    decimalDigits: (currencyCode) => (getRule(currencyCode) || {
      decimalDigits: 2,
    }).decimalDigits,
  }),
  ])
  .name;
