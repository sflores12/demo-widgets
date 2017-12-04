/**
 * @module ui-bbm-switch-ng
 * @description
 * Mobile Switch UI component
 *
 * @example
 * // In an extension:
 * // file: scripts/index.js
 * import uiBbmSwitchNgKey from 'ui-bbm-switch-ng';
 *
 * export const dependencyKeys = [
 *   uiBbmSwitchNgKey,
 * ];
 *
 * // file: templates/template.ng.html
 * <ui-bbm-switch-ng
 *   title="{{ 'form.label.urgentPayment' | i18n }}"
 *   name="urgent"
 *   data-ng-model="$ctrl.urgentPayment"
 * </ui-bbm-switch-ng>
 */
import angular from 'vendor-bb-angular';

import controller from './controller';
import component from './component';

import { COMPONENT_KEY, CONTROLLER_KEY, MODULE_KEY } from './constants';

import '../styles/index.css';

/**
 * @name default
 * @type {string}
 * @description The angular module name
 */
export default angular.module(MODULE_KEY, [])
  .controller(CONTROLLER_KEY, ['$element', '$document', controller])
  .component(COMPONENT_KEY, component)
  .name;
