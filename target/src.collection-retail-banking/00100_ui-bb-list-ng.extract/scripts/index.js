/**
 * @module ui-bb-list-ng
 *
 * @example
 * // In an extension:
 * // file: scripts/index.js
 * import uiBbListKey from 'ui-bb-list-ng';
 *
 * // ...
 *
 * export const dependencyKeys = [
 *   uiBbListKey,
 * ];
 *
 * // file: templates/template.ng.html
 * <ui-bb-list on-scroll-to-end="$ctrl.searchMore()">
 *   <div ng-repeat="group in $ctrl.searchTransactions track by $index">
 *     <div class="table-view-divider">
 *       <h4 data-role="transactions-group-date" ng-bind="group.date | date"></h4>
 *     </div>
 *   </div>
 * </ui-bb-list>
 */
import angular from 'vendor-bb-angular';

import uiBbListComponent from './list.component';

import '../styles/index.css';

export default angular.module('ui-bb-list-ng', [])
  .component('uiBbList', uiBbListComponent)
  .name;
