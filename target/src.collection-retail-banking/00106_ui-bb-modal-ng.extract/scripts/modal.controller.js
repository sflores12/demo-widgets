/**
 * @name uiBbModalController
 * @type {function}
 *
 * @description
 * Modal instance controller
 *
 * @param {object} $uibModal AngularUI modal provider
 * @param {object} $scope Directive scope
 */
export default function uiBbModalController($uibModal, $scope, $timeout) {
  const $ctrl = this;
  let modalInstance;

  /**
   * Open modal dialog callback
   * @name uiBbModalController#onModalOpen
   * @type {function}
   * @inner
   */
  const onModalOpen = () => {
    if ($ctrl.onOpen) {
      $ctrl.onOpen();
    }
  };

  /**
   * Close modal dialog callback
   * @name uiBbModalController#onModalClose
   * @type {function}
   * @inner
   */
  const onModalClose = () => {
    modalInstance = null;

    $ctrl.isOpen = false;

    if ($ctrl.onClose) {
      // Call handler in separate thread because component
      // might get destroyed as a result of handler execution
      $timeout($ctrl.onClose);
    }
  };

  /**
   * @name uiBbModalController#getModalOptions
   * @description
   * Returns options to open modal dialog.
   * @type {function}
   * @inner
   */
  const getModalOptions = () => {
    const options = {
      template: $ctrl.modalTemplate,
      scope: $scope.$parent,
    };

    if ($ctrl.backdrop !== undefined) {
      options.backdrop = $ctrl.backdrop;
    }

    if ($ctrl.keyboard !== undefined) {
      options.keyboard = $ctrl.keyboard;
    }

    if ($ctrl.size !== undefined) {
      options.size = $ctrl.size;
    }

    if ($ctrl.animation !== undefined) {
      options.animation = $ctrl.animation;
    }

    return options;
  };

  /**
   * @name uiBbModalController#openModal
   * @description
   * Opens modal dialog
   * @type {function}
   * @inner
   */
  const openModal = () => {
    modalInstance = $uibModal.open(getModalOptions());

    modalInstance.opened.then(onModalOpen);
    modalInstance.closed.then(onModalClose);
  };

  /**
   * @name uiBbModalController#closeModal
   * @description
   * Closes modal dialog
   * @type {function}
   * @inner
   */
  const closeModal = () => {
    if (modalInstance) {
      modalInstance.close();
      modalInstance = null;
    }
  };

  /**
   * AngularJS Lifecycle hook used to initialize the controller
   *
   * @name uiBbModalController#$onInit
   * @type {function}
   * @returns {void}
   */
  const $onInit = () => {
    $scope.$watch(() => $ctrl.isOpen, (isOpen) => {
      if (isOpen) {
        openModal();
      } else {
        closeModal();
      }
    });
  };

  /**
   * AngularJS Lifecycle hook used to destroy the controller
   *
   * @name uiBbModalController#$onDestroy
   * @type {function}
   * @returns {void}
   */
  const $onDestroy = () => {
    closeModal();
  };

  Object.assign($ctrl, {
    $onInit,
    $onDestroy,
  });
}
