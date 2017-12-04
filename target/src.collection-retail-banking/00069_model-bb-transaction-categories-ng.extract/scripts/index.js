/**
 * @module model-bb-transaction-categories-ng
 *
 * @description
 * Model for widget-bb-transaction-categories-ng
 *
 * @example
 * import modelTransactionCategoriesModuleKey, {
 *  modelTransactionCategoriesKey
 * } from 'model-bb-transaction-categories-ng';
 *
 * angular
 *   .module('ExampleModule', [
 *     modelTransactionCategoriesModuleKey,
 *   ])
 *   .factory('someFactory', [
 *     modelTransactionCategoriesKey,
 *     // into
 *     function someFactory(transactionCategoriesModel) {
 *       // ...
 *     },
 *   ]);
 */
import angular from 'vendor-bb-angular';

import categoriesManagementDataModuleKey, {
  categoriesManagementDataKey,
} from 'data-bb-categories-management-http-ng';

import bbStorageModuleKey, {
  bbStorageServiceKey,
} from 'lib-bb-storage-ng';

import Model from './transaction-categories';

const moduleKey = 'model-bb-transaction-categories-ng';

export const modelTransactionCategoriesKey = `${moduleKey}:model`;

export default angular
  .module(moduleKey, [
    categoriesManagementDataModuleKey,
    bbStorageModuleKey,
  ])

  .factory(modelTransactionCategoriesKey, [
    categoriesManagementDataKey,
    bbStorageServiceKey,
    /* into */
    Model,
  ])

  .name;
