/**
 * @module model-bb-turnovers-ng
 *
 * @description
 * Model for widget-bb-turnovers-ng
 *
 * @example
 * import modelTurnoversModuleKey, { modelTurnoversKey } from 'model-bb-turnovers-ng';
 *
 * angular
 *   .module('ExampleModule', [
 *     modelTurnoversModuleKey,
 *   ])
 *   .factory('someFactory', [
 *     modelTurnoversKey,
 *     // into
 *     function someFactory(turnoversModel) {
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

import Model from './turnovers';

const moduleKey = 'model-bb-turnovers-ng';
export const modelTurnoversKey = `${moduleKey}:model`;

export default angular
  .module(moduleKey, [
    transactionsDataModuleKey,
    productSummaryDataModuleKey,
    bbStorageModuleKey,
    widgetModuleKey,
  ])

  .factory(modelTurnoversKey, [
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
 * Turnover response object
 * @typedef {object} Turnover
 * @property {string} arrangementId Id of the arrangement this turnover belongs to
 * @property {string} intervalDuration Duration of intervals returned
 * @property {TurnoverItem[]} turnovers Array of turnover items
 */

/**
 * Turnover response item
 * @typedef {object} TurnoverItem
 * @property {string} intervalStartDate Date in ISO format (2016-06-01T16:41:41.090Z)
 * @property {Amount} debitAmount Debit amount object
 * @property {Amount} creditAmount Credit amount object
 * @property {Amount} balance Debit and credit difference object
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
