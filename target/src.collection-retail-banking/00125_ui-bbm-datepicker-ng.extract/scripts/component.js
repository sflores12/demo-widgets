import { CONTROLLER_KEY } from './constants';

/**
 * @name uiBbmDatepickerNg
 * @type {Object}
 *
 * @property {string} label Text label
 * @property {?string} title Title for the DatePicker plugin
 * @property {?string} placeholder Placeholder text which is displayed
 *   when there is no selected date yet
 * @property {string} ngModel Selected date
 * @property {?string} minDate Minimum allowed date
 * @property {?string} maxDate Maximum allowed date
 * @property {?object} dateLabels Labels for decorating dates
 */
export default {
  bindings: {
    label: '<',
    title: '<',
    placeholder: '<',
    minDate: '<',
    mDate: '<',
    ngModel: '<',
    dateLabels: '<',
  },
  controller: CONTROLLER_KEY,
  restrict: 'E',
  template: `
    <div
      class="bbm-datepicker"
      data-role="datepicker"
      data-ng-click="$ctrl.openDatepicker()">
      <div
        class="bbm-form-control"
        data-ng-class="{'bbm-form-control-active': $ctrl.opened }">
        <div
          class="bbm-form-control-label"
          data-role="datepicker-label"
          data-ng-bind="$ctrl.label">
        </div>
        <div
          class="bbm-form-control-value"
          data-ng-if="$ctrl.ngModel">
          <span
            class="prevent-ios-click"
            data-role="datepicker-value"
            data-ng-bind="$ctrl.ngModel | date | dateDecorator : $ctrl.dateLabels">
          </span>
        </div>
        <div
          class="bbm-form-control-placeholder"
          data-role="datepicker-placeholder"
          data-ng-if="!$ctrl.ngModel"
          data-ng-bind="$ctrl.placeholder">
        </div>
      </div>
    </div>
  `,
};
