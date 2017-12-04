/**
 * @module ui-bb-substitute-error-ng
 *
 * @description UI Component to replace content with an error message
 *
 * @example
 * // In an extension:
 * // file: scripts/index.js
 * import uiBbSubstituteErrorNgKey from 'ui-bb-substitute-error-ng';
 *
 * export const dependencyKeys = [
 *   uiBbSubstituteErrorNgKey,
 * ];
 *
 * // file: templates/template.ng.html
 * <ui-bb-substitute-error-ng
 * error="$ctrl.productKindsError">
 * </ui-bb-substitute-error-ng>
 */
import angular from 'vendor-bb-angular';

import component from './component';

/**
 * @description The angular module name
 * @name default
 * @type {string}
 */
export default angular.module('ui-bb-substitute-error-ng', [])
  .component('uiBbSubstituteErrorNg', component)
  .name;
