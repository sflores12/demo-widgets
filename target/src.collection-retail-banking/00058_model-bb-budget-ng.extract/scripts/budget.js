import { fromHttpError } from 'lib-bb-model-errors';

/**
 * @inner
 * @type {function}
 * @param {object} Promise An ES2015 compatible `Promise` object.
 * @param {object} budgetingData budgeting data module
 * @param {object} widget widget item
 *
 * @return {object} model object
 */
export default function budgetModel(Promise, budgetingData) {
  const defaultErrorHandler = httpErrorResponse => {
    throw fromHttpError(httpErrorResponse);
  };

  /**
   * @name budgetModel#getBudgetSchema
   * @type {function}
   *
   * @description
   * Gets the budgeting item schema from the data (RAML)
   *
   * @returns {BudgetingSchema}
   */
  const getBudgetSchema = () => budgetingData.schemas.postBudgetsRecord.properties;

   /**
   * @name budgetModel#getBudgets
   * @type {function}
   *
   * @description
   * Gets the list of budgets
   *
   * @param {object} params Parameters to be passed.
   * @returns {Promise.<BudgetingResponse>} A Promise with an array of budgets
   */
  const getBudgets = (params = {}) =>
    budgetingData.getBudgets(params)
      .then(response => ({
        items: response.data,
      }))
      .catch(defaultErrorHandler);

  /**
   * @name budgetModel#createBudget
   * @type {function}
   *
   * @description
   * Creates a new budget
   *
   * @param {object} budget Budget data
   * @returns {Promise} A Promise with response data
   */
  const createBudget = (budget) => budgetingData.postBudgetsRecord(budget)
    .catch(defaultErrorHandler);
  /**
   * @name budgetModel#updateBudget
   * @type {function}
   *
   * @description
   * Updates an existing budget
   *
   * @param {string} budgetId Budget id
   * @param {object} budget budget object
   * @returns {Promise} A Promise with response data
   */
  const updateBudget = (budgetId, budget) => budgetingData.putBudgetsRecord(budgetId, budget)
    .catch(defaultErrorHandler);

  /**
   * @name budgetModel#deleteBudget
   * @type {function}
   *
   * @description
   * Deletes a budget
   *
   * @param {string} budgetId Budget id
   * @param {object} budget Budget data
   * @returns {Promise} A Promise with response data
   */
  const deleteBudget = (budgetId, budget) => budgetingData.deleteBudgetsRecord(budgetId, budget)
    .catch(defaultErrorHandler);

  /**
   * @name budgetModel
   * @type {Object}
   */
  return {
    getBudgetSchema,
    getBudgets,
    createBudget,
    updateBudget,
    deleteBudget,
  };
}

/**
 * @typedef {object} BudgetingResponse
 * @property {Array.<BudgetingItem>} data
 */

/**
 * @typedef {object} BudgetingItem
 * @extends module:data-bb-budgeting-http-ng.BudgetingData
 */

/**
 * @typedef {object} BudgetingSchema
 * @extends module:data-bb-budgeting-http-ng.schemas
 */
