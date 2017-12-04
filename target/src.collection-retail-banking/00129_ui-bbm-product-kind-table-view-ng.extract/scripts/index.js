/**
 * @module ui-bbm-product-kind-table-ng
 *
 * @example
 * // In an extension:
 * // file: scripts/index.js
 * import uiBbmProductKindTableViewKey from 'ui-bbm-product-kind-table-view-ng';
 *
 * export const dependencyKeys = [
 *   uiBbmProductKindTableViewKey,
 * ];
 *
 * // file: templates/template.ng.html
 * <ui-bbm-product-kind-table-view-ng
 *   product-kind="productKind"
 *   on-select="$ctrl.selectProduct(product)"
 *   data-role="product-kind"
 *   data-index="{{$index}}"
 *   messages="{
 *    available: ('ui-bbm-product-summary.available' | i18n),
 *    creditLimit: ('ui-bbm-product-summary.creditLimit' | i18n),
 *    accrued: ('ui-bbm-product-summary.accrued' | i18n),
 *   }">
 *   </ui-bbm-product-kind-table-view-ng>
 */
import angular from 'vendor-bb-angular';

import uiBbmProductSummaryKey from 'ui-bbm-product-summary-ng';

import component from './component';

/**
 * @description The angular module name
 * @name default
 * @type {string}
 */
export default angular
  .module('ui-bbm-product-kind-table-view-ng', [
    uiBbmProductSummaryKey,
  ])
  .component('uiBbmProductKindTableViewNg', component)
  .name;
