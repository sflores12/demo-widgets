import { notificationLevels, errorMessages, successMessages } from '../constants';

/**
 * @name makeUIErrorMessage
 *
 * @type {function}
 * @description Creates an error object for template
 *
 * @inner
 * @param {object} modelError Error object
 * @returns {{message: string, level: string}} notification
 */
export const makeUIErrorMessage = modelError => {
  let message = '';
  const level = notificationLevels.DANGER;

  if (modelError && modelError.code) {
    message = errorMessages[modelError.code];
  }
  return { message, level };
};

/**
 * @name makeUISuccessMessage
 *
 * @type {function}
 * @description Creates a success notification for a specific
 * method of [success, update, delete]
 *
 * @inner
 * @param {string} method
 * @returns {{message: string, level: string}} notification
 */
export const makeUISuccessMessage = (method) => ({
  message: successMessages[method],
  level: notificationLevels.SUCCESS,
});

/**
 * @name createInitialState
 *
 * @type {function}
 * @description Creates an initial state for the budgeting state
 *
 * @inner
 * @return {object}
 */
export const createInitialState = () => ({
  isLoading: false,
  budgets: [],
  template: '#widget-bb-budget-ng/list.html',
  route: {
    name: 'list',
    params: {},
  },
  form: {},
  notifications: [],
});

/**
 * @name findBudgetById
 *
 * @type {function}
 * @description Helper to get an item from the array by a budgetId
 *
 * @inner
 * @param {Array<BudgetItem>} budgets an array of BudgetItems to search in
 * @param {string} budgetId id to be used for a search
 * @returns {BudgetItem} search result (single item)
 */
export const findBudgetById = (budgets = [], budgetId) =>
  budgets.filter(budget => budget.id === budgetId).pop();
