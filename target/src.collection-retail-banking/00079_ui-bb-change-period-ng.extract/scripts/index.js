/**
 * @module ui-bb-change-period-ng
 *
 * @example
 * // In an extension:
 * // file: scripts/index.js
 * import uiBbChangePeriodKey from 'ui-bb-change-period-ng';
 *
 * export const dependencyKeys = [
 *   uiBbChangePeriodKey,
 * ];
 *
 * // file: templates/template.ng.html
 * <ui-bb-change-period-ng
 *  data-period-start="2017-06-01"
 *  data-period-end="2017-06-31"
 *  data-change-period="ext.helpers.onPeriodChange()"
 * ></ui-bb-change-period-ng>
 */
import angular from 'vendor-bb-angular';

import component from './component';

export default angular
  .module('ui-bb-change-period-ng', [])
  .component('uiBbChangePeriodNg', component)
  .name;

