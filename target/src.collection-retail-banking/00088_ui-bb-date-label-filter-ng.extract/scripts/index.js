/**
 * @module ui-bb-date-label-filter-ng
 *
 * @description Provides angular filter to create date labels
 *
 * @example
 * import angular from 'vendor-bb-angular';
 * import uiBbDateLabelFilterModuleKey from 'ui-bb-date-label-filter-ng';
 *
 * angular.module('example-module', [uiBbDateLabelFilterModuleKey])
 *   .controller('MyController', ['$filter', ($filter) => {
 *      this.nowLabel = $filter('dateLabel')(Date.now()); // 'now'
 *      this.todayLabel = $filter('dateLabel')(Date.now() - 1000 * 60 * 60); // 'today'
 *      this.yesterdayLabel = $filter('dateLabel')(Date.now() - 1000 * 60 * 60 * 24); // 'yesterday'
 *   },
 *  ]);
 */
import angular from 'vendor-bb-angular';

import dateLabelFilter from './date-label-filter';

export { TimePeriod } from './constants';

export default angular
  .module('ui-bb-date-label-filter-ng', [])

  /**
   * Converts valid date(any valid value for Date constructor) to date label string like:
   * "now", "today", "yesterday"
   *
   * @name dateLabelFilter
   *
   * @example
   * // file: controller.js
   * function MyController() {
   *   const $ctrl = this;
   *   $ctrl.createdOn = Date.now();
   * }
   *
   * // file: template.ng.html
   * <div ng-controller="MyController as $ctrl">
   *   <p>Created: {{ $ctrl.createdOn | dateLabel }}</p>
   * </div>
   *
   * // Result:
   * <div>
   *   <p>Created: now</p>
   * </div>
   *
   * @type {function}
   * @param date {string|number|Date} any valid value for Date constructor
   * @returns {?string} Date label string, or null if unable to convert
   */
  .filter('dateLabel', () => dateLabelFilter)

  .name;
