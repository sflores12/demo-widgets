/**
 * @module ui-bbm-textfield-ng
 *
 * @description
 * Mobile specific textfield component with extra features such as highlighting
 * the label and a clear button
 *
 * @example
 * // In an extension:
 * // file: scripts/index.js
 * import uiBbmTextfieldNgKey from 'ui-bbm-textfield-ng';
 *
 * export const dependencyKeys = [
 *   uiBbmTextfieldNgKey,
 * ];
 *
 * // file: templates/template.ng.html
 * <ui-bbm-textfield-ng
 *  type="text"
 *  name="name"
 *  label="{{ 'Name' | i18n }}"
 *  placeholder="{{ 'Name' | i18n }}"
 *  role="name-field"
 *  ng-model="$ctrl.state.name"
 *  disabled="false"
 *  required="true"
 *  max-length="10"
 *  autofocus="true"
 *  autocomplete="off"
 *  autocorrect="off"
 *  autocapitalize="off"
 *  clear-button="true">
 *
 *  <ng-messages
 *    for="form.name.$error"
 *    ng-show="form.name.$touched && form.name.$dirty && form.name.$error.required"
 *    data-role="alert">
 *    <ng-message when="required" i18n-key="errors.requiredName"></ng-message>
 *  </ng-messages>
 *
 * </ui-bbm-textfield-ng>
 */

import angular from 'vendor-bb-angular';
import uiBbmMaxlengthKey from 'ui-bbm-maxlength-ng';
import component from './component';
import controller from './controller';

import { COMPONENT_KEY, CONTROLLER_KEY, MODULE_KEY } from './constants';

/**
 * The angular module name
 * @name default
 * @type {string}
 */
export default angular
  .module(MODULE_KEY, [uiBbmMaxlengthKey])
  .component(COMPONENT_KEY, component)
  .controller(CONTROLLER_KEY, [
    '$element',
    '$timeout',
    /* Into */
    controller,
  ])
  .name;
