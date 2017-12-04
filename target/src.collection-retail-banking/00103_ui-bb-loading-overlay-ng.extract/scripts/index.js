/**
 * @module ui-bb-loading-overlay-ng
 *
 * @example
 * // In an extension:
 * // file: scripts/index.js
 * import uiBbLoadingOverlayKey from 'ui-bb-loading-overlay-ng';
 *
 * export const dependencyKeys = [
 *   uiBbLoadingOverlayKey,
 * ];
 *
 * // file: templates/template.ng.html
 * <ui-bb-loading-overlay-ng
 *   is-loading="$ctrl.loading">
 *   Content available when loading is finished
 * </ui-bb-loading-overlay-ng>
 */
import angular from 'vendor-bb-angular';

import component from './component';

/**
 * @description The angular module name
 * @name default
 * @type {string}
 */
export default angular.module('ui-bb-loading-overlay-ng', [])
  .component('uiBbLoadingOverlayNg', component)
  .name;
