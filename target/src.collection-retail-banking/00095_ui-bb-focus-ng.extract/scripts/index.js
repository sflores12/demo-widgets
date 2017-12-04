/**
 * @module ui-bb-focus-ng
 *
 * @description
 * Directive to focus HTML elements on condition.
 *
 */
import angular from 'vendor-bb-angular';

import directive from './directive';

/**
 * @name default
 * @type {string}
 * @description Angular module name
 */
export default angular
  .module('ui-bb-focus-ng', [])
  .directive('uiBbFocus', directive)
  .name;
