/**
 * @module ui-bb-switcher-ng
 * @description
 * State switcher UI component
 *
 * @example
 * // In an extension:
 * // file: scripts/index.js
 * import uiBbSwitcherNgKey from 'ui-bb-switcher-ng';
 *
 * export const dependencyKeys = [
 *   uiBbSwitcherNgKey,
 * ];
 *
 * // file: templates/template.ng.html
 * <ui-bb-switcher-ng
 *   data-switcher="user.toBeSaved"
 *   data-size="small"
 *	 data-on="Switch on text"
 *	 data-off="Switch off text"
 *	 data-disabled="false"
 *   aria-label="Save user">
 * </ui-bb-switcher-ng>
 */

import angular from 'vendor-bb-angular';
import component from './component';

import '../styles/index.css';

export default angular.module('ui-bb-switcher-ng', [])
	.component('uiBbSwitcherNg', component)
	.name;
