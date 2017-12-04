/**
 * @name uiBbNotificationStripeController
 * @ngkey uiBbNotificationStripeController
 * @type {function}
 * @description
 * Notification Stripe Controller
 */
const uiBbNotificationStripeController =
  function uiBbNotificationStripeController($scope, $sce, $timeout) {
    function bindEvents() {
    }

    function unbindEvents() {
    }

    $scope.$on('destroy', () => {
      unbindEvents();
    });

    $scope.$watch(() => this.message, (newVal) => {
      // Message could have html tags inside -- making it safe
      this.messageHtmlSafe = $sce.trustAsHtml(newVal);
    });

    // Check if timeout is passed to component
    if (
      this.timeoutSecond &&
      parseInt(this.timeoutSecond, 10) > 0 &&
      typeof this.onClose === 'function'
    ) {
      // invoke closing function after delay
      $timeout(this.onClose, parseInt(this.timeoutSecond, 10) * 1000);
    }

    bindEvents();
  };

export default uiBbNotificationStripeController;
