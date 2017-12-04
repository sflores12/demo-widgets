/**
 * @module ui-bb-notifications-filter-ng
 * @description
 * UI notifications filter component
 *
 * @example
 * // In an extension:
 * // file: scripts/index.js
 * import uiBbNotificationsFilterKey from 'ui-bb-notifications-filter-ng';
 *
 * export const dependencyKeys = [
 *   uiBbNotificationsFilterKey,
 * ];
 *
 * // file: templates/template.ng.html
 * <ui-bb-notifications-filter-ng on-filter="$ctrl.filter()"
 * header-labels="{
 *  date: 'Date', searchInText: 'Search', searchInType: 'Search in type', level: 'Levels'
 * }"
 * level-labels="{ info: 'Info', alert: 'Alert', warning: 'Warning', success: 'Success' }"
 * status-labels="{ read: 'Read', unread: 'Unread', all: 'All' }"
 * button-labels="{
 *  main: 'Filter',
 *  apply: 'Apply',
 *  reset: 'Reset',
 *  clearFromDate: 'Clear "from" date"',
 *  clearToDate: 'Clear "to" date"',
 * }"
 * on-clear-filter="$ctrl.clearFilter">
 * </ui-bb-notifications-filter-ng>
 */

import angular from 'vendor-bb-angular';

import uiBbCalendarPopupNgKey from 'ui-bb-calendar-popup-ng';
import uiBbTrackChangesKey from 'ui-bb-track-form-changes-ng';

import Component from './component';
import Controller from './controller';

/**
 * @name default
 * @type {string}
 * @description The angular module name
 */
export default angular
  .module('ui-bb-notifications-filter-ng', [
    uiBbCalendarPopupNgKey,
    uiBbTrackChangesKey,
  ])
  .component('uiBbNotificationsFilter', Component)
  .controller('uiBbNotificationsFilterController', ['$scope', Controller])
  .name;
