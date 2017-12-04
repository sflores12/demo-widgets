/**
 * @description
 * Helpers for ext-bbm-product-details-view-ng
 *
 * @name Helpers
 * @type {Object}
 */

export default () => ({
  /**
   * @description
   * Checks for the loading status.
   *
   * @name Helpers#isLoading
   * @type {function}
   *
   * @param {module:widget-bbm-product-details-ng.ViewController} ctrl
   * @returns {boolean}
   */
  isLoading: ctrl => ctrl.state.loading,

  /**
   * @description
   * Checks for the error state.
   *
   * @name Helpers#isErrorState
   * @type {function}
   *
   * @param {module:widget-bbm-product-details-ng.ViewController} ctrl
   * @returns {boolean}
   */
  isErrorState: ctrl => (
    ctrl.state.error && !ctrl.state.loading
  ),
});
