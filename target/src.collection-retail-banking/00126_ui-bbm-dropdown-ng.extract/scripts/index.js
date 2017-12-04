/**
 * @module ui-bbm-dropdown-ng
 * @description
 * Mobile Dropdown UI component
 *
 * @example
 * // In an extension:
 * // file: scripts/index.js
 * import uiBbmDropdownNgKey from 'ui-bbm-dropdown-ng';
 *
 * export const dependencyKeys = [
 *   uiBbmDropdownNgKey,
 * ];
 *
 * // file: templates/template.ng.html
 * <ui-bbm-dropdown-ng
 *   data-label="'Frequency'"
 *   data-title="'Select frequency'"
 *   data-ng-model="$ctrl.frequency"
 *   data-options="$ctrl.frequencies">
 * </ui-bbm-dropdown-ng>
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
  .controller(CONTROLLER_KEY, ['$element', controller])
  .component(COMPONENT_KEY, component)
  .name;
