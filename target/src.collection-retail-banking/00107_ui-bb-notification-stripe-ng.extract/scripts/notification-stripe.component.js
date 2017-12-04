/**
 * @name uiBbNotificationStripeComponent
 * @type {object}
 * @description
 * Notification Stripe Component Object
 *
 * @property {function} on-close function to be invoked on clicking "✕"
 * @property {string} message message -> messageHtmlSafe, processed in controller
 * @property {string} type css class to be added to wrapper element
 * @property {number} timeout-second delay in seconds after which onClose will be invoked
 * @property {string} icon-classes font-awesome icon classes. If provided it will add that icon
 */
const uiBbNotificationStripeComponent = {
  bindings: {
    onClose: '&',
    message: '@',
    type: '@',
    timeoutSecond: '@',
    iconClasses: '@',
  },
  controller: 'uiBbNotificationStripeController',
  template: `
    <div class="notification-stripe row" data-ng-class="$ctrl.type">
        <i
          data-ng-if="$ctrl.iconClasses"
          data-ng-class="$ctrl.iconClasses"
          class="notification-stripe-icon col-xs-1"
            aria-hidden="true"
          ></i>
        <div
          data-ng-class="$ctrl.iconClasses ?
            'col-xs-9 col-sm-10' : 'col-xs-11 col-sm-11 col-md-11 col-lg-11'"
          data-ng-bind-html="$ctrl.messageHtmlSafe"></div>
        <div class="col-xs-1 col-sm-1 col-md-1 col-lg-1">
            <button
              type="button"
              class="close"
              data-ng-click="$ctrl.onClose()"
            >
              <span aria-hidden="true">&times;</span>
            </button>
        </div>
    </div>
  `,
};

export default uiBbNotificationStripeComponent;
