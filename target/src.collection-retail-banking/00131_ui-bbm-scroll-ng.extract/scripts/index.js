/**
 * @module ui-bbm-scroll-ng
 *
 * @example
 * // In an extension:
 * // file: scripts/index.js
 * import uiBbmScrollNgKey from 'ui-bbm-scroll-ng';
 *
 * // ...
 *
 * export const dependencyKeys = [
 *   uiBbmScrollNgKey,
 * ];
 *
 * // file: templates/template.ng.html
 * <ui-bbm-scroll-ng on-scroll-to-end="$ctrl.searchMore()">
 *   <div ng-repeat="group in $ctrl.searchTransactions track by $index">
 *     <div class="table-view-divider">
 *       <h4 data-role="transactions-group-date" ng-bind="group.date | date"></h4>
 *     </div>
 *   </div>
 * </ui-bbm-scroll-ng>
 */
import angular from 'vendor-bb-angular';

import uiBbmScrollComponent from './scroll.component';

import { COMPONENT_KEY, MODULE_KEY } from './constants';

import '../styles/index.css';

export default angular.module(MODULE_KEY, [])
  .component(COMPONENT_KEY, uiBbmScrollComponent)
  .name;
