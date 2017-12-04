/**
 * @module ui-bbm-product-summary-ng
 *
 * @example
 * // In an extension:
 * // file: scripts/index.js
 * import uiBbmProductSummaryNgKey from 'ui-bbm-product-summary-ng';
 *
 * export const dependencyKeys = [
 *   uiBbmProductSummaryNgKey,
 * ];
 *
 * // file: templates/template.ng.html
 * <ui-bbm-product-summary-ng
 *   product-name="product.name"
 *   product-identifier="$ctrl.getIdentifier(product)"
 *   currency="product.currency"
 *   primary-value="$ctrl.getPrimaryValue(product)"
 *   available-balance="product.availableBalance"
 *   accrued-interest="product.accruedInterest"
 *   credit-limit="product.creditLimit"
 *   messages="{
 *     available: ('ui-bbm-product-summary.available' | i18n),
 *     creditLimit: ('ui-bbm-product-summary.creditLimit' | i18n),
 *     accrued: ('ui-bbm-product-summary.accrued' | i18n),
 *   }">
 * </ui-bbm-product-summary-ng>
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
  .module('ui-bbm-product-summary-ng', [
    uiBbFormatAmount,
  ])
  .component('uiBbmProductSummaryNg', component)
  .name;
