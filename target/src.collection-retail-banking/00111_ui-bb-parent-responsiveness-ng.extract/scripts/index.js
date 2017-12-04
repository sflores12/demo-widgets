/**
 * @module ui-bb-parent-responsiveness-ng
 * @description
 * Directive that dynamically toggles bootstrap column
 * classes based on the width of the parent container, rather
 * than the width of the whole window
 *
 * This directive listens to parentResized event.
 * Use this event to manually trigger parent size calculation and
 * class processing
 *
 * @example
 * // in main script
 * import uiBbParentResponsivenessNg from 'ui-bb-parent-responsiveness-ng';
 *
 * export const dependencyKeys = [
 *   uiBbParentResponsivenessNg,
 * ];
 *
 * // in template file
 * <div ui-bb-parent-responsiveness-ng class="col-xs-12 col-sm-8 col-md-6">
 * 	...
 * </div>
 *
 * // dispatch an event to manually trigger size processing
 * const event = new Event('parentResized');
 * element.dispatchEvent(event);
 */

import angular from 'vendor-bb-angular';
import directive from './directive';

export default angular.module('ui-bb-parent-responsiveness-ng', [])
	.directive('uiBbParentResponsivenessNg', [directive])
	.name;
