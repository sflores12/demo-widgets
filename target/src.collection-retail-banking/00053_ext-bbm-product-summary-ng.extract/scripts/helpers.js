/**
 * @description
 * Helpers for ext-bbm-product-summary-ng
 *
 * @name Helpers
 * @type {Object}
 */

export default () => ({
  /**
   * @description
   * Checks for the initial loading.
   *
   * @name Helpers#isInitialLoading
   * @type {function}
   *
   * @param {module:widget-bb-product-summary-ng.ProductSummaryController} ctrl
   * @returns {boolean}
   */
  isInitialLoading: ctrl => (
    ctrl.isProductLoading && !ctrl.productKinds
  ),

  /**
   * @description
   * Checks if there are no products.
   *
   * @name Helpers#isEmptyState
   * @type {function}
   *
   * @param {module:widget-bb-product-summary-ng.ProductSummaryController} ctrl
   * @returns {boolean}
   */
  isEmptyState: ctrl => (
    Boolean(ctrl.productKinds && !ctrl.productKinds.length) &&
    !ctrl.productKindsError &&
    !ctrl.isProductLoading
  ),

  /**
   * @description
   * Checks for the error state.
   *
   * @name Helpers#isErrorState
   * @type {function}
   *
   * @param {module:widget-bb-product-summary-ng.ProductSummaryController} ctrl
   * @returns {boolean}
   */
  isErrorState: ctrl => (
    ctrl.productKindsError && !ctrl.isProductLoading
  ),
});
