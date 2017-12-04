/**
 * @module ui-bb-inline-status-ng
 *
 * @example
 * // In an extension:
 * // file: scripts/index.js
 * import uiBbInlineStatusNgKey from 'ui-bb-inline-status-ng';
 *
 * export const dependencyKeys = [
 *   uiBbInlineStatusNgKey,
 * ];
 *
 * // file: templates/template.ng.html
 * <ui-bb-inline-status
 * show-spinner="$ctrl.state.contacts.loading"
 * text="'Loading contacts'">
 * </ui-bb-inline-status>
 */
import angular from 'vendor-bb-angular';

import uiBbInlineStatusComponent from './inline-status.component';

/**
 * @description The angular module name
 * @name default
 * @type {string}
 */
export default angular.module('ui-bb-inline-status-ng', [])
  .component('uiBbInlineStatus', uiBbInlineStatusComponent)
  .name;
