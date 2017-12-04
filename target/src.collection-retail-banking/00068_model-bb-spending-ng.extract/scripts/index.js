/**
 * @module model-bb-spending-ng
 *
 * @description
 * Model for widget-bb-spending-ng
 *
 * @example
 * import modelSpendingModuleKey, { modelSpendingKey } from 'model-bb-spending-ng';
 *
 * angular
 *   .module('ExampleModule', [
 *     modelSpendingModuleKey,
 *   ])
 *   .factory('someFactory', [
 *     modelSpendingKey,
 *     // into
 *     function someFactory(spendingModel) {
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

import Model from './spending';

const moduleKey = 'model-bb-spending-ng';
export const modelSpendingKey = `${moduleKey}:model`;

export default angular
  .module(moduleKey, [
    transactionsDataModuleKey,
    productSummaryDataModuleKey,
    bbStorageModuleKey,
    widgetModuleKey,
  ])

  .factory(modelSpendingKey, [
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
 * Spending response object
 * @typedef {object} Spending
 * @property {Amount} totalSpending Total spending object
 * @property {SpendingItem[]} items Array of spending items
 */

/**
 * Spending response item
 * @typedef {object} SpendingItem
 * @property {string} category Transactions category
 * @property {Amount} totalAmount The total amount of the aggregated transactions by category
 * @property {number} trend Percentage value of the trend
 * @property {number} portion Percentage of the total spending for a given period
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
