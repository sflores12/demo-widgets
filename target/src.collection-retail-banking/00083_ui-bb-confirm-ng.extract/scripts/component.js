import controller from './controller';

/**
 * @name uiBbConfirmComponent
 * @type {object}
 * @description
 * Confirmation modal component
 *
 * @property {boolean} isOpen Flag which indicates dialog's open state
 * @property {object} labels Object with string labels for component
 * @property {boolean} isDismissible Flag which indicates can component be dismissed
 * by keyboard or mouse click. Default is true.
 * @property {string} confirmBtnClass Class name for confirmation button
 * @property {string} footerClass Class name for the footer section
 * @property {string} size Confirmation modal dialog size
 * @property {boolean} animation Flag which indicates will dialog be
 * open/hidden with animation. Default is true.
 * @property {function} onConfirm Confirm callback function
 * @property {function} onCancel Cancel callback function
 * @property {function} onClose Dialog close callback function
 */
const component = {
  controller: ['$timeout', controller],
  bindings: {
    isOpen: '=',
    labels: '<',
    isDismissible: '<',
    confirmBtnClass: '<',
    footerClass: '<',
    size: '<',
    animation: '<',
    onConfirm: '&',
    onCancel: '&',
    onClose: '&',
  },
  template: `
    <ui-bb-modal data-is-open="$ctrl.isOpen"
      data-on-close="$ctrl.onClose()"
      data-keyboard="$ctrl.isDismissible"
      data-backdrop="$ctrl.isDismissible || 'static'"
      data-size="$ctrl.size"
      data-animation="$ctrl.animation">

      <div class="modal-header text-center">
        <h3 class="modal-title"
          data-ng-bind="$ctrl.labels.heading"
          data-role="ui-bb-confirm-ng-header"></h3>
      </div>

      <div class="modal-body text-center break-word"
        data-ng-if="!$ctrl.labels.bodyHtml"
        data-ng-bind="$ctrl.labels.bodyText"
        data-role="ui-bb-confirm-ng-body-text">
      </div>
      <div class="modal-body text-center break-word"
        data-ng-if="$ctrl.labels.bodyHtml"
        data-ng-bind-html="$ctrl.labels.bodyHtml"
        data-role="ui-bb-confirm-ng-body-text">
      </div>

      <div class="modal-footer" data-ng-class="$ctrl.footerClass">
        <button type="button"
          class="btn btn-default"
          data-ng-bind="$ctrl.labels.cancel"
          data-ng-click="$ctrl.cancel()"
          data-role="ui-bb-confirm-ng-cancel-button">
        </button>
        <button type="button"
          class="btn"
          data-ng-class="$ctrl.confirmBtnClass || 'btn-primary'"
          data-ng-bind="$ctrl.labels.confirm"
          data-ng-click="$ctrl.confirm()"
          data-role="ui-bb-confirm-ng-confirm-button">
        </button>
      </div>

    </ui-bb-modal>
  `,
};

export default component;
