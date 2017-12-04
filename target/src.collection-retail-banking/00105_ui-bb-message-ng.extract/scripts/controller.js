const uiBbMessageController = function uiBbMessageController($scope) {
  const $ctrl = this;

  /**
   * @description
   * Call `onLinkClick` event that define in `ui-bb-message` directive if it is set and prevent
   * default event if need.
   *
   * @name uiBbMessageController#onLinkClick
   * @type {function}
   * @param {object} event Event object
   */
  const onLinkClick = event => {
    if ($scope.onLinkClick) {
      $scope.onLinkClick();
    }
    if ($scope.preventDefault) {
      event.preventDefault();
    }
  };

  Object.assign($ctrl, {
    onLinkClick,
  });
};

/**
 * @name uiBbMessageController
 * @type {function}
 */
export default uiBbMessageController;
