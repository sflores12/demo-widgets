/**
 * @module ui-bb-load-more-ng
 *
 * @example
 * // In an extension:
 * // file: scripts/index.js
 * import uiBbLoadMoreNgKey from 'ui-bb-load-more-ng';
 *
 * export const dependencyKeys = [
 *   uiBbLoadMoreNgKey,
 * ];
 *
 * // file: templates/template.ng.html
 * <ui-bb-load-more-ng
 *   ng-show="$ctrl.hasMore"
 *   label="Load more"
 *   on-load-more="$ctrl.loadMore(done)"
 * ></ui-bb-load-more-ng>
 */
import angular from 'vendor-bb-angular';

import component from './component';
import controller from './controller';

/**
 * @description The angular module name
 * @name default
 * @type {string}
 */
export default angular.module('ui-bb-load-more-ng', [])
	.component('uiBbLoadMoreNg', component)
	.controller('controller', ['$timeout', controller])
	.name;
