/**
 * @module ui-bb-element-dimensions-ng
 *
 * @example
 * <div ng-class="{'my-xs-col': dims.width < 200}" element-dimensions="dims"></div>
 *
 */
import angular from 'vendor-bb-angular';

import directive from './directive';

/**
 * @description The angular module name
 * @name default
 * @type {string}
 */
export default angular
  .module('ui-bb-element-dimensions-ng', [])
  .directive('elementDimensions', directive)
  .name;
