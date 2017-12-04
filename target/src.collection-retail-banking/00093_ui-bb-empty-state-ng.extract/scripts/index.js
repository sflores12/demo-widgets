/**
 * @module ui-bb-empty-state-ng
 *
 * @example
 * // In an extension:
 * // file: scripts/index.js
 * import uiBbEmptyStateKey from 'ui-bb-empty-state-ng';
 *
 * export const dependencyKeys = [
 *   uiBbEmptyStateKey,
 * ];
 *
 * // file: templates/template.ng.html
 * <ui-bb-empty-state-ng
 *  data-icon-classes="fa fa-4x fa-bar-chart"
 *  data-title="{{ $ctrl.title }}"
 *  data-subtitle="{{ $ctrl.subtitle }}"
 *  data-is-empty="true"
 * >
 * </ui-bb-empty-state-ng>
 */
import angular from 'vendor-bb-angular';
import ngSanitizeKey from 'vendor-bb-angular-sanitize';

import component from './component';

/**
 * @description The angular module name
 * @name default
 * @type {string}
 */
export default angular
  .module('ui-bb-empty-state-ng', [ngSanitizeKey])
  .component('uiBbEmptyStateNg', component)
  .name;
