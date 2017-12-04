/**
 * @description
 * Helpers for ext-bbm-personal-profile-ng
 *
 * @name Helpers
 * @type {Object}
 */
export default () => {
  /**
   * @description
   * Checks for the loading.
   *
   * @name Helpers#showLoadingState
   * @type {function}
   *
   * @param {module:widget-bbm-personal-profile-ng.DetailsController} ctrl
   * @returns {boolean}
   */
  const showLoadingState = ctrl => (
    ctrl.state.user.loading && !ctrl.state.user.data
  );

  /**
   * @description
   * Checks for the error state.
   *
   * @name Helpers#showErrorState
   * @type {function}
   *
   * @param {module:widget-bbm-personal-profile-ng.DetailsController} ctrl
   * @returns {boolean}
   */
  const showErrorState = ctrl => (
    ctrl.state.user.error && !ctrl.state.user.loading
  );

  return {
    showLoadingState,
    showErrorState,
  };
};
