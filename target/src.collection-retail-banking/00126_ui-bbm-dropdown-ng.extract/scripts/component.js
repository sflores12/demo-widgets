import { CONTROLLER_KEY } from './constants';

/**
 * @name uiBbmDropdownNg
 * @type {object}
 *
 * @property {string} label Text label
 * @property {string} title Dropdown title
 * @property {string} ngModel Selected option
 * @property {Array.<DropdownOption>} options List of dropdown options
 */
export default {
  bindings: {
    label: '<',
    title: '<',
    options: '<',
    ngModel: '<',
  },
  controller: CONTROLLER_KEY,
  restrict: 'E',
  template: `
    <div class="bbm-dropdown" data-ng-click="$ctrl.openDropdown()">
      <div
        data-ng-class="{'bbm-form-control-active': $ctrl.opened }"
        class="bbm-form-control">
        <div
          class="bbm-form-control-label"
          data-role="dropdown-label"
          data-ng-bind="$ctrl.label">
        </div>
        <div class="bbm-form-control-value">
          <span
            class="prevent-ios-click"
            data-role="dropdown-value"
            data-ng-bind="$ctrl.displayValue">
          </span>
        </div>
      </div>
    </div>
  `,
};

/**
 * @typedef {Object} DropdownOption
 * @property {string} id Identifier of the option
 * @property {string} text Text of the option, that will be displayed in a dropdown
 */
