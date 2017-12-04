/**
 * @module ui-bb-product-summary-ng
 * @requires ui-bb-format-amount
 *
 * @example
 * // In an extension:
 * // file: scripts/index.js
 * import uiBbProductSummaryNgKey from 'ui-bb-product-summary-ng';
 *
 * export const dependencyKeys = [
 *   uiBbProductSummaryNgKey,
 * ];
 *
 * // file: templates/template.ng.html
 * <ui-bb-product-summary-ng
 * product-name="product.name"
 * product-identifier="product.identifier"
 * primary-value="product.primaryValue"
 * secondary-value="product.secondaryValue"
 * secondary-label="product.secondaryLabel"
 * tertiary-value="product.tertiaryValue"
 * tertiary-label="product.tertiaryLabel"
 * currency="product.currency">
 * </ui-bb-product-summary-ng>
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
  .module('ui-bb-product-summary-ng', [
    uiBbFormatAmount,
  ])
  .component('uiBbProductSummaryNg', component)
  .name;
