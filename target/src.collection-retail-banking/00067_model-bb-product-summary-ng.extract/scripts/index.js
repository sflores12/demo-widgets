/**
 * @module model-bb-product-summary-ng
 *
 * @description
 * Product summary widget model.
 *
 * @usage
 * import modelProductSummaryModuleKey, {
 *   modelProductSummaryKey,
 * } from 'model-bb-product-summary-ng';
 *
 * angular.module('widget-bb-product-summary-ng', [
 *   modelProductSummaryModuleKey,
 * ])
 * .controller('ProductSummaryController', [
 *   modelProductSummaryKey,
 *   ...,
 * ])
 */

import angular from 'vendor-bb-angular';

import bbStorageModuleKey, { bbStorageServiceKey } from 'lib-bb-storage-ng';

import productSummaryDataModuleKey, {
  productSummaryDataKey,
} from 'data-bb-product-summary-http-ng';

import arrangementsDataModuleKey, {
  arrangementsDataKey,
} from 'data-bb-arrangements-http-ng';

import widgetModuleKey, { widgetKey } from 'lib-bb-widget-ng';

import productSummaryModelKey from './product-summary';

/**
 * Injector name of the model service
 * @name modelProductSummaryKey
 * @type {string}
 */
export const modelProductSummaryKey = 'model-bb-product-summary-ng:model';

export default angular
  .module('model-bb-product-summary-ng', [
    productSummaryDataModuleKey,
    arrangementsDataModuleKey,
    bbStorageModuleKey,
    widgetModuleKey,
  ])

  .factory(modelProductSummaryKey, [
    productSummaryDataKey,
    arrangementsDataKey,
    bbStorageServiceKey,
    '$q',
    widgetKey,
    /* into */
    productSummaryModelKey,
  ])

  .name;
