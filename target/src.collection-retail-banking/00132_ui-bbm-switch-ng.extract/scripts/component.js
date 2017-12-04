import { CONTROLLER_KEY } from './constants';

/**
 * @name uiBbmSwitchNg
 * @type {object}
 *
 * @property {name} name Input name
 * @property {title} title Container title
 * @property {boolean} ngModel Model
 */
export default {
  bindings: {
    name: '@',
    title: '@',
    ngModel: '<',
  },
  controller: CONTROLLER_KEY,
  restrict: 'E',
  template: `
    <div
      class="bbm-switch" 
      data-ng-class="{ 'bbm-switch-checked': $ctrl.ngModel }"
      data-role="switch"
      role="checkbox"
      title="{{ $ctrl.title }}"
      aria-checked="{{ $ctrl.ngModel }}"
      aria-disabled="false">
      <label class="bbm-switch-control" data-role="switch-control">
        <input
          class="bbm-switch-input"
          name="{{ $ctrl.name }}"
          type="checkbox"
          data-ng-model="$ctrl.ngModel"
          data-ng-change="$ctrl.onChange()"
          data-role="switch-input">
        <span class="bbm-switch-bar"></span>
        <span class="bbm-switch-knob">
          <i class="bbm-switch-knob-icon"></i>
        </span>
      </label>
    </div>
  `,
};
