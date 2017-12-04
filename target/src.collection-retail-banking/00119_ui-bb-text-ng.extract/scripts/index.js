/**
 * @module ui-bb-text-ng
 * @description
 * Component to avoid enter not regex valid symbols on input
 *
 * @example
 * // In an extension:
 * // file: scripts/index.js
 * import uiBbTextNg from 'ui-bb-text-ng';
 *
 * export const dependencyKeys = [
 *   uiBbTextNg,
 * ];
 *
 * // file: templates/template.ng.html
 * <textarea name="description"
 * 	ng-model="$ctrl.payment.description"
 * 	regex="$ctrl.paymentPreferences.REGEX"
 * 	ui-bb-text-ng="ui-bb-text-ng">
 * </textarea>
 */

import angular from 'vendor-bb-angular';

import text from './text';

export default angular.module('ui-bb-text-ng', [])
	.directive('uiBbTextNg', text)
	.name;
