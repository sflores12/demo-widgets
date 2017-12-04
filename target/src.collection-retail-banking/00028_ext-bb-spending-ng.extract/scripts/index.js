/**
 * @module ext-bb-spending-ng
 *
 * @description
 * Default extension for widget-bb-spending-ng
 *
 * @requires vendor-bb-angular-ng-aria
 * @requires ui-bb-i18n-ng
 * @requires ui-bb-substitute-error-ng
 * @requires ui-bb-format-amount
 * @requires ui-bb-chartjs-chart-donut-ng
 * @requires ui-bb-empty-state-ng
 */
import ngAriaModuleKey from 'vendor-bb-angular-ng-aria';
import i18nNgKey from 'ui-bb-i18n-ng';
import uiBbSubstituteErrorNgKey from 'ui-bb-substitute-error-ng';
import uiBbFormatAmount from 'ui-bb-format-amount';
import uiBbChartjsChartDonutNg from 'ui-bb-chartjs-chart-donut-ng';
import uiBbEmptyStateKey from 'ui-bb-empty-state-ng';
import uiBbChangePeriodKey from 'ui-bb-change-period-ng';

import extHooks from './hooks';
import extHelpers from './helpers';

export const dependencyKeys = [
  ngAriaModuleKey,
  i18nNgKey,
  uiBbSubstituteErrorNgKey,
  uiBbFormatAmount,
  uiBbChartjsChartDonutNg,
  uiBbEmptyStateKey,
  uiBbChangePeriodKey,
];

export const hooks = extHooks;
export const helpers = extHelpers;
export const events = {};

/**
 * Extended spending response item
 * @typedef {object} ExtendedSpendingItem
 * @extends module:model-bb-spending-ng.SpendingItem
 * @property {number} totalPortion
 * Percentage of total spending for a given period and all periods larger than that period
 */

/**
 * Spendings specific BBSeries object
 * @typedef {object} SpendingsBBSeries
 * @property {string[]} labels Array of chart labels
 * @property {SpendingsDataset[]} datasets Array of all datasets
 * @property {ExtendedSpendingItem[]} spendings Extended spending array
 */

/**
 * Spendings specific dataset object for chart
 * @typedef {object} SpendingsDataset
 * @extends module:model-bb-spending-ng.Dataset
 * @property {string} backgroundColor Background color for chart slices
 * @property {string} hoverBackgroundColor Hover background color for chart slices
 * @property {number} borderWidth Border size between slices
 */
