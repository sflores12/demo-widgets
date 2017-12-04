/**
 * @module ext-bb-income-spending-analysis-category-ng
 *
 * @description
 * Default extension for widget-bb-income-spending-analysis-category-ng
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
import uiBbChartjsChartBarNgKey from 'ui-bb-chartjs-chart-bar-ng';
import uiBbEmptyStateKey from 'ui-bb-empty-state-ng';
import uiBbChangePeriodKey from 'ui-bb-change-period-ng';
import uibBbButtons from 'vendor-bb-uib-buttons';

import extHooks from './hooks';
import extHelpers from './helpers';

export const dependencyKeys = [
  ngAriaModuleKey,
  i18nNgKey,
  uiBbSubstituteErrorNgKey,
  uiBbFormatAmount,
  uiBbChartjsChartDonutNg,
  uiBbChartjsChartBarNgKey,
  uiBbEmptyStateKey,
  uiBbChangePeriodKey,
  uibBbButtons,
];

export const hooks = extHooks;
export const helpers = extHelpers;
export const events = {};

/**
 * Extended analysis category item
 * @typedef {object} ExtendedAnalysisCategory
 * @extends module:model-bb-income-spending-analysis-category-ng.AnalysisCategory
 * @property {number} totalPortion
 * Percentage of total income/spending for a given category
 * and all categories with a higher portion
 */

/**
 * Analysis specific BBSeries object
 * @typedef {object} AnalysisCategoryBBSeries
 * @property {string[]} labels Array of chart labels
 * @property {AnalysisCategoryDataset[]} datasets Array of all datasets
 * @property {ExtendedAnalysisCategory[]} analysisItems Extended spending array
 */

/**
 * Spendings specific dataset object for chart
 * @typedef {object} AnalysisCategoryDataset
 * @extends module:model-bb-income-spending-analysis-category-ng.Dataset
 * @property {string} backgroundColor Background color for chart slices
 * @property {number} borderWidth Border size between slices
 */
