/**
 * @module model-bb-budget-ng
 *
 * @description
 * Budget widget model
 *
 * @example
 * import modelBudgetModuleKey, { modelBudgetKey } from 'model-bb-budget-ng';
 */
import angular from 'vendor-bb-angular';
import budgetingDataModuleKey, { budgetingDataKey } from 'data-bb-budgeting-http-ng';

import budgetsModel from './budget';

const moduleKey = 'model-bb-budget-ng';
export const modelBudgetKey = `${moduleKey}:model`;

export default angular
  .module(moduleKey, [
    budgetingDataModuleKey,
  ])

  .factory(modelBudgetKey, [
    '$q',
    budgetingDataKey,
    budgetsModel,
  ])
  .name;
