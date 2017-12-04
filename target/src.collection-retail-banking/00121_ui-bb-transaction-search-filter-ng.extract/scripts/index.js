/**
 * @module ui-bb-transaction-search-filter-ng
 * @description
 * UI transaction-search filter component
 *
 * @example
 * // In an extension:
 * // file: scripts/index.js
 * import uiBbTransactionSearchFilterKey from 'ui-bb-transaction-search-filter-ng';
 *
 * export const dependencyKeys = [
 *   uiBbTransactionSearchFilterKey,
 * ];
 *
 * // file: templates/template.ng.html
 * <ui-bb-transaction-search-filter-ng
 * on-filter="$ctrl.filter()"
 * button-labels="{
 *  main: 'Filter',
 *  apply: 'Apply',
 *  cancel: 'Cancel',
 * }"
 * field-labels="{
 *  transaction: 'Transaction',
 *  credit: 'Credit',
 *  debit: 'Debit',
 *  dateRange: 'Date range',
 *  amountRange: 'Amount range',
 *  amountFrom: 'Amount from',
 *  amountTo: 'Amount to',
 * }"
 * on-clear-filter="$ctrl.clearFilter">
 * </ui-bb-transaction-search-filter-ng>
 */

import angular from 'vendor-bb-angular';
import uiBbCalendarPopupNgKey from 'ui-bb-calendar-popup-ng';
import uiBbTrackChangesKey from 'ui-bb-track-form-changes-ng';
import uiBbSearchBoxKey from 'ui-bb-search-box-ng';

import Component from './component';
import Controller from './controller';

/**
 * @name default
 * @type {string}
 * @description The angular module name
 */

export default angular
  .module('ui-bb-transaction-search-filter-ng', [
    uiBbCalendarPopupNgKey,
    uiBbTrackChangesKey,
    uiBbSearchBoxKey,
  ])
  .component('uiBbTransactionSearchFilter', Component)
  .controller('uiBbTransactionSearchFilterController', ['$scope', Controller])
  .name;
