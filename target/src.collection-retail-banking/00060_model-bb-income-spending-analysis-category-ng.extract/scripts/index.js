/**
 * @module model-bb-income-spending-analysis-category-ng
 *
 * @description
 * Model for widget-bb-income-spending-analysis-category-ng
 *
 * @example
 * import modelIncomeSpendingAnalysisCategoryModuleKey, {
 *  modelIncomeSpendingAnalysisCategoryKey
 * } from 'model-bb-income-spending-analysis-category-ng';
 *
 * angular
 *   .module('ExampleModule', [
 *     modelAnalysisCategoryModuleKey,
 *   ])
 *   .factory('someFactory', [
 *     modelAnalysisCategoryKey,
 *     // into
 *     function someFactory(analysisCategoryModel) {
 *       // ...
 *     },
 *   ]);
 */
import angular from 'vendor-bb-angular';

import transactionsDataModuleKey, {
  transactionsDataKey,
} from 'data-bb-transactions-http-ng';

import productSummaryDataModuleKey, {
  productSummaryDataKey,
} from 'data-bb-product-summary-http-ng';

import bbStorageModuleKey, {
  bbStorageServiceKey,
} from 'lib-bb-storage-ng';

import widgetModuleKey, {
  widgetKey,
} from 'lib-bb-widget-ng';

import Model from './income-spending-analysis-category';

const moduleKey = 'model-bb-income-spending-analysis-category-ng';
export const modelIncomeSpendingAnalysisCategoryKey = `${moduleKey}:model`;

export default angular
  .module(moduleKey, [
    transactionsDataModuleKey,
    productSummaryDataModuleKey,
    bbStorageModuleKey,
    widgetModuleKey,
  ])

  .factory(modelIncomeSpendingAnalysisCategoryKey, [
    '$q',
    transactionsDataKey,
    productSummaryDataKey,
    bbStorageServiceKey,
    widgetKey,
    /* into */
    Model,
  ])

  .name;

/**
 * Amount object
 * @typedef {object} Amount
 * @property {string} currencyCode Currency code (ISO)
 * @property {number} value
 */

/**
 * Income/Spending analysis category response object
 * @typedef {object} AnalysisCategoryData
 * @property {Amount} total Total amount for all categories retrieved for selected period
 * @property {AnalysisCategory[]} items Array of income/spending items
 */

/**
 * Income/Spending category item
 * @typedef {object} AnalysisCategory
 * @property {string} category Transactions category
 * @property {Amount} totalAmount Total amount of aggregated transactions by category
 * @property {number} trend Percentage value of the trend
 * @property {number} portion Percentage of the total amount for a given period
 */

/**
 * BBSeries data object used to draw charts
 * @typedef {object} BBSeries
 * @property {string[]} labels Array of x axis labels
 * @property {Dataset[]} datasets Array of all y axis value datasets
 */

/**
 * Dataset object for y axis data
 * @typedef {object} Dataset
 * @property {number[]} data Array of data points to be drawn for each label
 */
