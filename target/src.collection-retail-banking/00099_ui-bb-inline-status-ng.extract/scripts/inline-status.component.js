/**
 * @name uiBbInlineStatusComponent
 * @type {object}
 * @description
 * Inline Status Component Object
 *
 * @property {string} text Text to display
 * @property {string} show-spinner condition to show/hide spinner
 */
const uiBbInlineStatusComponent = {
  bindings: {
    text: '<',
    showSpinner: '=',
  },
  template: `
      <i data-ng-if="$ctrl.showSpinner"
        class="fa fa-spinner fa-spin"
        data-role="inline-status-icon"
        aria-hidden="true">
      </i>
      <span data-role="inline-status-text" data-ng-bind="$ctrl.text" role="status"></span>
  `,
  controller: class uiBbInlineStatusController {},
};

export default uiBbInlineStatusComponent;
