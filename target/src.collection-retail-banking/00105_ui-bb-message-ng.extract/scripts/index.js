/**
 * @module ui-bb-message-ng
 *
 * @example
 * // In an extension:
 * // file: scripts/index.js
 * import uiBbMessageNgKey from 'ui-bb-message-ng';
 *
 * export const dependencyKeys = [
 *   uiBbMessageNgKey,
 * ];
 *
 * // file: templates/template.ng.html
 * <ui-bb-message
 *  on-link-click="$ctrl.someAction()"
 *  template="item.message"
 *  link="item.link"
 *  preventDefault="true"
 *  truncate-line="1"/>
 */
import angular from 'vendor-bb-angular';

import uiBbMessageDirective from './directive';
import uiBbMessageController from './controller';

/**
 * @description The angular module name
 * @name default
 * @type {string}
 */
export default angular.module('ui-bb-message-ng', [])
  .directive('uiBbMessage', ['$compile', '$window', '$timeout', uiBbMessageDirective])
  .controller('uiBbMessageController', ['$scope', uiBbMessageController])
  .name;
