/**
 * @module ui-bbm-list-ng
 *
 * @example
 * // In an extension:
 * // file: scripts/index.js
 * import uiBbmListKey from 'ui-bbm-list-ng';
 *
 * // ...
 *
 * export const dependencyKeys = [
 *   uiBbmListKey,
 * ];
 *
 * // file: templates/template.ng.html
 * <ui-bbm-list on-scroll-to-end="$ctrl.searchMore()">
 *   <div ng-repeat="group in $ctrl.searchTransactions track by $index">
 *     <div class="table-view-divider">
 *       <h4 data-role="transactions-group-date" ng-bind="group.date | date"></h4>
 *     </div>
 *   </div>
 * </ui-bbm-list>
 */
import angular from 'vendor-bb-angular';

import uiBbmListComponent from './list.component';

import { COMPONENT_KEY, MODULE_KEY } from './constants';

import '../styles/index.css';

export default angular.module(MODULE_KEY, [])
  .component(COMPONENT_KEY, uiBbmListComponent)
  .name;
