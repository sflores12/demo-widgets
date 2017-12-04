/**
 * @name Helpers
 * @type {Object}
 *
 * @description
 * Helpers for ext-bbm-product-details-form-ng
 */
export default () => ({
  /**
   * @description
   * Helper to get the form validation status.
   *
   * @name Helpers#isFormValid
   * @type {function}
   * @param {Object} form
   *
   * @return {boolean} validation status.
   */
  isFormValid: form => Boolean(form.$valid && form.$dirty),
});
