/**
 * @module model-bb-action-recipes-ng
 *
 * @description
 * Model for widget-bb-action-recipes-ng
 *
 * @example
 * import modelActionRecipesModuleKey, { modelActionRecipesKey } from 'model-bb-action-recipes-ng';
 *
 * angular
 *   .module('ExampleModule', [
 *     modelActionRecipesModuleKey,
 *   ])
 *   .factory('someFactory', [
 *     modelActionRecipesKey,
 *     // into
 *     function someFactory(actionRecipesModel) {
 *       // ...
 *     },
 *   ]);
 */
import angular from 'vendor-bb-angular';

import actionRecipesDataModuleKey, {
  actionRecipesDataKey,
} from 'data-bb-action-recipes-http-ng';

import productSummaryDataModuleKey, {
  productSummaryDataKey,
} from 'data-bb-product-summary-http-ng';

import Model from './action-recipes';

export const moduleKey = 'model-bb-action-recipes-ng';
export const modelActionRecipesKey = 'model-bb-action-recipes-ng:model';

export default angular
  .module(moduleKey, [
    actionRecipesDataModuleKey,
    productSummaryDataModuleKey,
  ])

  .factory(modelActionRecipesKey, [
    actionRecipesDataKey,
    productSummaryDataKey,
    '$q',
    /* into */
    Model,
  ])

  .name;
