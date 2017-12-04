/**
 * @module ui-bb-sortable-column-ng
 * @description
 * UI component to add sortable behavior to a table header column.
 *
 * @example
 * // In an extension:
 * // file: scripts/index.js
 * import uiBbSortableColumnNg from 'ui-bb-sortable-column-ng';
 *
 * export const dependencyKeys = [
 *   uiBbSortableColumnNg,
 * ];
 *
 * // file: templates/template.ng.html
 * <th
 *   ui-bb-sortable-column-ng
 *   options="columnOptions"
 *   active="columnActive"
 *   on-sort="$ctrl.onSort(key, direction)">
 *   <span i18n-key="label.status"></span>
 * </th>
 */
import angular from 'vendor-bb-angular';

import uiBbSortableColumnDirective from './sortable.directive';
import sortDirectionConstant from './sortDirection.constant';

/**
 * @name default
 * @type {string}
 * @description The angular module name
 */
export default angular
  .module('ui-bb-sortable-column-ng', [])
  .constant('sortDirection', sortDirectionConstant)
  .directive('uiBbSortableColumnNg', ['sortDirection', uiBbSortableColumnDirective])
  .name;
