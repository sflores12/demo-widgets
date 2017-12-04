/**
 * @module model-bb-payment-orders-ng
 *
 * @description
 * Model for widget-bb-payment-orders-ng
 *
 * @example
 * import modelPaymentOrdersModuleKey, { modelPaymentOrdersKey } from 'model-bb-payment-orders-ng';
 *
 * angular
 *   .module('ExampleModule', [
 *     modelPaymentOrdersModuleKey,
 *   ])
 *   .factory('someFactory', [
 *     modelPaymentOrdersKey,
 *     // into
 *     function someFactory(paymentOrdersModel) {
 *       // ...
 *     },
 *   ]);
 */
import angular from 'vendor-bb-angular';
import widgetModuleKey, { widgetKey } from 'lib-bb-widget-ng';

import paymentOrdersDataModuleKey, {
  paymentOrdersDataKey,
} from 'data-bb-payment-orders-http-ng';

import productSummaryDataModuleKey, {
  productSummaryDataKey,
} from 'data-bb-product-summary-http-ng';

import contactDataModuleKey, { contactDataKey } from 'data-bb-contact-http-ng';

import bbStorageModuleKey, { bbStorageServiceKey } from 'lib-bb-storage-ng';

import Model from './payment-orders';

const moduleKey = 'model-bb-payment-orders-ng';
export const modelPaymentOrdersKey = `${moduleKey}:model`;

export default angular
  .module(moduleKey, [
    paymentOrdersDataModuleKey,
    productSummaryDataModuleKey,
    contactDataModuleKey,
    bbStorageModuleKey,
    widgetModuleKey,
  ])

  .factory(modelPaymentOrdersKey, [
    paymentOrdersDataKey,
    productSummaryDataKey,
    contactDataKey,
    bbStorageServiceKey,
    widgetKey,
    /* into */
    Model,
  ])

  .name;
