/**
 * @module ui-bb-dropdown-select
 * @description
 * UI dropdown select component
 *
 * @example
 * // In an extension:
 * // file: scripts/index.js
 * import uiBbDropdownSelectKey from 'ui-bb-dropdown-select';
 *
 * export const dependencyKeys = [
 *   uiBbDropdownSelectKey,
 * ];
 *
 * // file: templates/template.ng.html
 * <ui-bb-dropdown-select
 *   ng-model="item"
 *   selected-as="$option.name">
 *   <ui-bb-dropdown-option
 *     option="item"
 *     data-arrow-navigation="true"
 *     ng-repeat="item in items"
 *     class="list-group-item-text">
 *       {{:: $option.name }}
 *   </ui-bb-dropdown-option>
 * </ui-bb-dropdown-select>
 */

import angular from 'vendor-bb-angular';
import uibDropdown from 'vendor-bb-uib-dropdown';

import uiBbDropdownSelectDirective from './select.directive';
import uiBbDropdownSelectedDirective from './selected.directive';
import uiBbDropdownOption from './option.directive';

import '../styles/index.css';

/**
 * @name default
 * @type {string}
 * @description The angular module name
 */
export default angular
  .module('ui-bb-dropdown-select', [uibDropdown])
	.directive('uiBbDropdownSelect', uiBbDropdownSelectDirective)
  .directive('uiBbDropdownSelected', [
    '$q',
    '$compile',
    '$templateRequest',
    uiBbDropdownSelectedDirective,
  ])
  .directive('uiBbDropdownOption', [
    '$templateRequest',
    '$compile',
    uiBbDropdownOption,
  ])
	.name;
