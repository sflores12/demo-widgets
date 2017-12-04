/**
 * @name uiBbConfirmController
 * @type {function}
 *
 * @description
 * Confirmation modal controller
 */
export default function Controller($timeout) {
  const $ctrl = this;

  /**
   * AngularJS Lifecycle hook used to initialize the controller
   *
   * @name Controller#$onInit
   * @type {function}
   * @returns {void}
   */
  const $onInit = () => {
    $ctrl.isDismissible = $ctrl.isDismissible === undefined ? true : $ctrl.isDismissible;
  };

  /**
   * Calls component callback handler in separate thread because component
   * might get destroyed as a result of handler execution.
   *
   * @name callHandler
   * @type {function}
   * @inner
   * @param {function} fn Callback handler function
   */
  const callHandler = fn => {
    if (fn) {
      $timeout(fn);
    }
  };

  /**
   * Cancel action for dialog
   * @name Controller#cancel
   * @type {function}
   * @returns {void}
   */
  const cancel = () => {
    $ctrl.isOpen = false;
    callHandler($ctrl.onCancel);
  };

  /**
   * Confirmation action for dialog
   * @name Controller#confirm
   * @type {function}
   * @returns {void}
   */
  const confirm = () => {
    $ctrl.isOpen = false;
    callHandler($ctrl.onConfirm);
  };

  Object.assign($ctrl, {
    $onInit,
    cancel,
    confirm,
  });
}
