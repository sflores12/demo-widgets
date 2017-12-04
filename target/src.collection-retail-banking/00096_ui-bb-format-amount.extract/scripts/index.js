/**
 * @module ui-bb-format-amount
 *
 * @example
 * // In an extension:
 * // file: scripts/index.js
 * import uiBbFormatAmountKey from 'ui-bb-format-amount';
 *
 * export const dependencyKeys = [
 *   uiBbFormatAmountKey,
 * ];
 *
 * // file: templates/template.ng.html
 * <ui-bb-format-amount
 * amount="$option.amount"
 * currency="$option.currency"
 * wrap-whole-number
 * wrap-decimals
 * wrap-currency
 * wrap
 * no-map
 * show-plus-sign
 * ></ui-bb-format-amount>
 *
 * Note:
 * wrap-whole-number, wrap-decimals and wrap-currency attributes are deprecated. Use wrap instead
 */
import angular from 'vendor-bb-angular';
import libBbCurrencyNgKey, { bbCurrencyRuleKey } from 'lib-bb-currency-ng';

import uiBbFormatAmountComponent from './format-amount.component';
import wrapFilter from './wrap.filter';
import signFilter from './sign.filter';
import rulesFactory from './rule.factory';

/**
* @description The angular module name
* @name default
* @type {string}
*/
export default angular.module('ui-bb-format-amount', [libBbCurrencyNgKey])
	.component('uiBbFormatAmount', uiBbFormatAmountComponent)
  .factory('currencyRules', [bbCurrencyRuleKey, rulesFactory])
  /**
   * Wraps whole number part in <span class="amount-whole-number">
   * Wraps decimals in <span class="amount-decimals">
   * Wraps decimal point in <span class="amount-decimal-point">
   * Wraps currency in <span class="amount-currency">
   *
   * @name wrap
   * @type {function}
   * @param {object} $locale Localization service
   * @param {object} $sce SCE Service
   * @returns {string} Figures wrapped in <span> elements
   */
  .filter('wrap', ['$locale', '$sce', wrapFilter])
  /**
   * @type {function}
   * @name signFilter
   * @description
   * Filter for currency formatting with an option to add + sign for positive values
   *
   * @returns {string}
   */
  .filter('sign', ['$locale', '$filter', signFilter])
	.name;
