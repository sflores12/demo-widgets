/**
 * @module ui-bb-autocomplete-search-ng
 *
 * @description
 * Autocomplete search component
 *
 * @example
 * // In an extension:
 * // file: scripts/index.js
 * import uiBbAutocompleteSearchNgKey from 'ui-bb-autocomplete-search-ng';
 *
 * export const dependencyKeys = [
 *   uiBbAutocompleteSearchNgKey,
 * ];
 *
 * // file: templates/template.ng.html
 * <ui-bb-autocomplete-search-ng
 *   searchBoxConfig="{
 *     labels: {
 *       title: 'Search',
 *       placeholder: 'Enter search text...',
 *       clear: 'Clear text',
 *       submit: 'Submit search',
 *     },
 *     hideButton: true,
 *     iconClasses: 'fa fa-chevron-down',
 *   }"
 *   load-result="(options) => {}"
 *   on-select="(item, label) => {}"
 *   label-key="'name'">
 * </ui-bb-autocomplete-search-ng>
 */

import angular from 'vendor-bb-angular';
import ngSanitizeKey from 'vendor-bb-angular-sanitize';

import uibTypeahead from 'vendor-bb-uib-typeahead';

import uiBbSearchBoxKey from 'ui-bb-search-box-ng';
import uiBbListKey from 'ui-bb-list-ng';

import component from './component';
import controller from './controller';

import { COMPONENT_KEY, CONTROLLER_KEY, MODULE_KEY } from './constants';

/**
 * The angular module name
 * @name default
 * @type {string}
 */
export default angular
  .module(MODULE_KEY, [
    ngSanitizeKey,
    uibTypeahead,
    uiBbSearchBoxKey,
    uiBbListKey,
  ])
  .component(COMPONENT_KEY, component)
  .controller(CONTROLLER_KEY, [
    '$element',
    '$templateCache',
    '$timeout',
    '$q',
    '$document',
    controller,
  ])
  .name;
