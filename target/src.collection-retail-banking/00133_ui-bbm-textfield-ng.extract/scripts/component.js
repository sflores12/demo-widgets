import { CONTROLLER_KEY } from './constants';

/**
 * @name uiBBmTextfield
 * @type {object}
 *
 * @property {string} name: the name of the input field
 * @property {string} type: the type of the input field
 * @property {string} label: the title of the textfield component
 * @property {string} placeholder: the placeholder of the input field
 * @property {object} ngModel: the model of the textfield compenent
 * @property {?string} role: the role of the input field
 * @property {?boolean} disabled: determines if the input field is disabled
 * @property {?boolean} required: determines if the input field is required
 * @property {?boolean} autofocus: determines if the input field should autofocus
 * @property {?string} autocomplete: determines if the input field should autocomplete
 * @property {?string} autocorrect: determines if the input field should autocorrect
 * @property {?string} autocapitalize: determines if the input field should autocapitalize
 * @property {?boolean} clearButton: determines if the input field should show a clear button
 * @property {?number} maxLength: the max number of symbols that is allowed
 */
const component = {
  bindings: {
    name: '<',
    type: '@',
    label: '@',
    placeholder: '@',
    ngModel: '<',
    role: '@',
    disabled: '<',
    required: '<',
    autofocus: '<',
    autocomplete: '<',
    autocorrect: '<',
    autocapitalize: '<',
    clearButton: '<',
    maxLength: '<',
  },
  transclude: true,
  controller: CONTROLLER_KEY,
  template: `
    <div class="bbm-text-field">
      <label 
        class="bbm-text-field-control bbm-form-control"
        ng-class="{
          'bbm-form-control-has-clear': $ctrl.clearButton,
          'bbm-form-control-has-label': $ctrl.label,
          'bbm-form-control-active':    $ctrl.state.isActive,
          'bbm-form-control-empty':     $ctrl.isEmpty(),
          'bbm-form-control-disabled':  $ctrl.disabled,
          'bbm-form-control-error' :    $ctrl.ngModelCtrl.$dirty && 
                                        $ctrl.ngModelCtrl.$touched && 
                                        $ctrl.ngModelCtrl.$invalid,
        }">
        <span
          class="bbm-text-field-label bbm-form-control-label"
          ng-bind="$ctrl.label">  
        </span>
        <input
          class="bbm-text-field-input bbm-form-control-value"
          type="{{ $ctrl.type || 'text' }}"
          name="{{ $ctrl.name }}" 
          placeholder="{{ $ctrl.placeholder }}"
          data-ng-model="$ctrl.state.value"
          aria-label="{{ $ctrl.label }}"
          data-role="{{ $ctrl.role }}"
          data-ng-focus="$ctrl.setFocus()"
          data-ng-blur="$ctrl.unsetFocus()"
          data-ng-change="$ctrl.updateModel()"
          data-ng-disabled="$ctrl.disabled"
          data-ng-required="{{ $ctrl.required || false }}"
          data-ng-attr-pattern="{{ $ctrl.isNumeric() ? '[0-9]*' : undefined }}"
          data-ng-attr-step="{{ $ctrl.isNumeric() ? 1 : undefined }}"
          data-ng-attr-autofocus="{{ $ctrl.autofocus || undefined }}"
          data-ng-trim="false"
          autocomplete="{{ $ctrl.autocomplete || 'off' }}"
          autocorrect="{{ $ctrl.autocorrect || 'off' }}"
          autocapitalize="{{ $ctrl.autocapitalize || 'off' }}"
          ui-bbm-maxlength="{{ $ctrl.maxLength >= 0 ? $ctrl.maxLength : -1 }}">
        </input>
        <span
          class="bbm-text-field-value prevent-ios-click"
          aria-hidden="true">
          <span
            class="bbm-text-field-value-text"
            data-ng-bind="$ctrl.state.value">
          </span>
        </span>
        <span
          data-ng-if="$ctrl.clearButton"
          class="bbm-text-field-clear bbm-form-control-clear"
          data-action="clear-field">
        </span>
        <div class="bbm-text-field-message bbm-form-control-message">
          <ng-transclude></ng-transclude>
        </div>
      </label>
    </div>
  `,
};

export default component;
