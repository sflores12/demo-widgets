/**
 * @module model-bb-transactions-ng
 *
 * @description
 * Transactions model module.
 *
 * @usage
 * import modelTransactionsModuleKey, {
 *   modelTransactionsKey,
 * } from 'model-bb-transactions-ng';
 *
 * angular.module('widget-bb-transactions-ng', [
 *   modelTransactionsModuleKey,
 * ])
 * .controller('TransactionsController', [
 *   modelTransactionsKey,
 *   ...,
 * ])
 */
import angular from 'vendor-bb-angular';
import widgetModuleKey, { widgetKey } from 'lib-bb-widget-ng';

import transactionsDataModuleKey, {
  transactionsDataKey,
} from 'data-bb-transactions-http-ng';

import productSummaryDataModuleKey, {
  productSummaryDataKey,
} from 'data-bb-product-summary-http-ng';

import paymentOrdersDataModuleKey, {
  paymentOrdersDataKey,
} from 'data-bb-payment-orders-http-ng';

import bbStorageModuleKey, {
  bbStorageServiceKey,
} from 'lib-bb-storage-ng';

import Model from './transactions';

export const modelTransactionsModuleKey = 'model-bb-transactions-ng';
export const modelTransactionsKey = 'model-bb-transactions-ng:model';

/**
 * @name default
 * @type {string}
 * @description
 * Transactions Model
 */
export default angular
  .module(modelTransactionsModuleKey, [
    transactionsDataModuleKey,
    productSummaryDataModuleKey,
    paymentOrdersDataModuleKey,
    widgetModuleKey,
    bbStorageModuleKey,
  ])

  .factory(modelTransactionsKey, [
    transactionsDataKey,
    productSummaryDataKey,
    paymentOrdersDataKey,
    widgetKey,
    bbStorageServiceKey,
    /* into */
    Model,
  ])

  .name;
