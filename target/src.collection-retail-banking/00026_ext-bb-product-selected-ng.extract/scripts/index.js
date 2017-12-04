/**
 * @module ext-bb-product-selected-ng
 *
 * @description
 * Extension for product summary widget to show currently selected product
 *
 * @requires ui-bb-product-summary-ng
 *
 * @example
 * <!-- payment widget model.xml -->
 * <property name="extension" viewHint="text-input,admin">
 *  <value type="string">ext-bb-product-selected-ng</value>
 * </property>
 */
import uiBbProductSummaryNgKey from 'ui-bb-product-summary-ng';
import uiBbLoadingIndicatorKey from 'ui-bb-loading-indicator-ng';
import i18nNgKey from 'ui-bb-i18n-ng';

import processProductSelected from './product-kind-view';

export const dependencyKeys = [
  uiBbProductSummaryNgKey,
  uiBbLoadingIndicatorKey,
  i18nNgKey,
];

/**
 * @name Hooks
 * @type {object}
 *
 * @description
 * Hooks for widget-bb-product-summary-ng
 */
export const hooks = {
  /**
   * @name processProductSelected
   * @description
   * Hook for processing selected product after selection update
   *
   * @type {function}
   * @param {object} product The source Product from the widget controller
   * @returns {ProductView}
   */
  processProductSelected,
};
