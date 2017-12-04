/**
 * @module ui-bb-search-box-ng
 *
 * @description
 * Search box component supporting typeahead and submit search,
 * including clear text button
 *
 * @example
 * // In an extension:
 * // file: scripts/index.js
 * import uiBbSearchBoxNgKey from 'ui-bb-search-box-ng';
 *
 * export const dependencyKeys = [
 *   uiBbSearchBoxNgKey,
 * ];
 *
 * // file: templates/template.ng.html
 * <ui-bb-search-box-ng
 *   config="{
 *     labels: {
 *       title: 'Search',
 *       placeholder: 'Enter search text...',
 *       clear: 'Clear text',
 *       submit: 'Submit search',
 *     }
 *   }"
 *   on-change="(search) => {}"
 *   on-submit="(search) => {}">
 * </ui-bb-search-box-ng>
 */

import angular from 'vendor-bb-angular';
import component from './component';
import controller from './controller';

import { COMPONENT_KEY, CONTROLLER_KEY, MODULE_KEY } from './constants';

/**
 * The angular module name
 * @name default
 * @type {string}
 */
export default angular
  .module(MODULE_KEY, [])
  .component(COMPONENT_KEY, component)
  .controller(CONTROLLER_KEY, [
    '$element',
    /* Into */
    controller,
  ])
  .name;
