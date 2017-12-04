/**
 * @module ui-bb-loading-indicator-ng
 *
 * @example
 * // In an extension:
 * // file: scripts/index.js
 * import uiBbLoadingIndicatorKey from 'ui-bb-loading-indicator-ng';
 *
 * export const dependencyKeys = [
 *   uiBbLoadingIndicatorKey,
 * ];
 *
 * // file: templates/template.ng.html
 * <ui-bb-loading-indicator-ng
 *   is-loading="$ctrl.loading"
 *   show-delay="$ctrl.loadingDelay"
 *   loading-text="Loading...">
 *   Content available when loading is finished
 * </ui-bb-loading-indicator-ng>
 */
import angular from 'vendor-bb-angular';

import component from './component';

/**
 * @description The angular module name
 * @name default
 * @type {string}
 */
export default angular.module('ui-bb-loading-indicator-ng', [])
  .component('uiBbLoadingIndicatorNg', component)
  .name;
