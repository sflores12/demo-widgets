/**
 * @module ui-bb-stepper-ng
 * @description
 * UI component for spliting views into multiple steps that
 * user needs to pass in order to complete some process.
 *
 * @example
 * // In an extension:
 * // file: scripts/index.js
 * import uiBbStepperNg from 'ui-bb-stepper-ng';
 *
 * export const dependencyKeys = [
 *   uiBbStepperNg,
 * ];
 *
 * // file: templates/template.ng.html
 * <ui-bb-stepper-ng
 *   labels="{
 *     step: 'Step',
 *     of: 'of',
 *     previous: 'Previous',
 *     next: 'Next',
 *     cancel: 'Cancel',
 *     finish: 'Close',
 *   }"
 *   on-cancel="ext.helpers.onCancel(ctrl)"
 *   allow-next="ext.helpers.allowNext"
 *   after-step-change="ext.helpers.stepChange(ctrl, oldStep)"
 *   on-finish="ext.helpers.onFinish(ctrl)"
 * >
 *   <ui-bb-stepper-step-ng title="Step 1">
 *     <p>Step 1 content</p>
 *     <input type="text" ng-model="$ctrl.myinput" />
 *   </ui-bb-stepper-step-ng>
 *   <ui-bb-stepper-step-ng
 *     title="Step 2"
 *     labels="{
 *       next: 'Submit',
 *     }"
 *   >
 *     <p>Step 2 content</p>
 *     <p>Your input was: {{ $ctrl.myinput }}</p>
 *   </ui-bb-stepper-step-ng>
 *   <ui-bb-stepper-step-ng title="Step 3">
 *     <p>Step 3 content</p>
 *     <p>You are ready to go</p>
 *   </ui-bb-stepper-step-ng>
 * </ui-bb-stepper-ng>
 */

import angular from 'vendor-bb-angular';
import stepperComponent from './stepper.component';
import stepComponent from './step.component';

export default angular
  .module('ui-bb-stepper-ng', [])
  .component('uiBbStepperNg', stepperComponent)
  .component('uiBbStepperStepNg', stepComponent)
  .name;
