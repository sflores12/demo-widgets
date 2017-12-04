/**
 * @module ui-bb-expandable-ng
 *
 * @example
 * // In an extension:
 * // file: scripts/index.js
 * import uiBbExpandableNgKey from 'ui-bb-expandable-ng';
 *
 * export const dependencyKeys = [
 *   uiBbExpandableNgKey,
 * ];
 *
 * // file: templates/template.ng.html
 * <ui-bb-expandable-ng chevron="true">
 *  <ui-bb-expandable-summary-ng>
 *      Hello
 *  </ui-bb-expandable-summary-ng>
 *  <ui-bb-expandable-details-ng>
 *      World!
 *  </ui-bb-expandable-details-ng>
 * </ui-bb-expandable-ng>
 */
import angular from 'vendor-bb-angular';
import uibCollapseKey from 'vendor-bb-uib-collapse';

import component from './component';
import controller from './controller';

import '../styles/index.css';

/**
 * The angular module name
 * @name default
 * @type {string}
 */
export default angular.module('ui-bb-expandable-ng', [uibCollapseKey])
    .component('uiBbExpandableNg', component)
    .controller('uiBbExpandableController', controller)
    .name;
