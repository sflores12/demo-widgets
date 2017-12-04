/**
 * @name uiBbLoadingIndicatorController
 * @ngkey uiBbLoadingIndicatorController
 * @type {function}
 * @description
 * Loading indicator Controller
 */
const uiBbLoadingIndicatorController = function uiBbLoadingIndicatorController($timeout) {
  const ctrl = this;
  Object.assign(ctrl, { timeout: null, showComponent: ctrl.isLoading });
  ctrl.$onChanges = (changedObj) => {
    if (changedObj.isLoading.currentValue) {
      ctrl.timeout = $timeout(() => {
        ctrl.showComponent = true;
        ctrl.timeout = null;
      }, ctrl.showDelay || 0);
    } else {
      if (ctrl.timeout) {
        $timeout.cancel(ctrl.timeout);
      }
      ctrl.showComponent = false;
    }
  };
};

export default uiBbLoadingIndicatorController;
