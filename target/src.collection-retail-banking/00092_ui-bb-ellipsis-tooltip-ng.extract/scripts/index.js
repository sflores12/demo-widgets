/**
 * @module ui-bb-ellipsis-tooltip-ng
 * @description
 * UI component that shows tooltip when text is truncated
 *
 * @example
 * // In an extension:
 * // file: scripts/index.js
 * import uiBbEllipsisTooltipNg from 'ui-bb-ellipsis-tooltip-ng';
 *
 * export const dependencyKeys = [
 *   uiBbEllipsisTooltipNg,
 * ];
 *
 * // file: templates/template.ng.html
 * <ui-bb-ellipsis-tooltip-ng
 *   tooltip="'Some very long text, that will be truncated'"
 * >
 *   <span class="dummy">Some very long text</span>
 * </ui-bb-ellipsis-tooltip-ng>
 */
import angular from 'vendor-bb-angular';
import vendorBbUibTooltipKey from 'vendor-bb-uib-tooltip';

import '../styles/index.css';
import directive from './directive';

/**
 * @name default
 * @type {string}
 * @description The angular module name
 */
export default angular
  .module('ui-bb-ellipsis-tooltip-ng', [
    vendorBbUibTooltipKey,
  ])
  .directive('uiBbEllipsisTooltipNg', directive)
  .name;
