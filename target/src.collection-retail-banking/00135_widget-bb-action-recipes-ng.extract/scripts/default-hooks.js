
/**
 * @name Hooks
 * @type {object}
 *
 * @description
 * Hooks for widget-bb-action-recipes-ng
 */

/**
 * @name Hooks#createRecipeFilter
 * @type {function}
 * @description
 * This hook function should return a model of recipe's filter. The returned model is likely to be
 * different for each specification type. The returned object will be assigned to 'filter' field
 * of the recipe and it will be accessible from the templates.
 * The returned object must implement 'toApiModel()' method. This method must convert the filter
 * back to API representation of a trigger (i.e. 'selectors' and 'filter' fields must be present).
 * Here's an example of an object returned by 'toApiModel()':
 * {
 *   selectors: [{
 *     path: 'accountId',
 *     value: '123456789'
 *   }],
 *   filter: {
 *     gte: [{ 'pathValue': 'transaction.amount' }, 1000]
 *   }
 * }
 *
 * @param {object} specification specification used by the recipe
 * @param {object} trigger trigger in backen format from which filter model should be created
 * @param {array} accounts list of accounts which are available for the user
 * @returns {object} view model of recipe filter
 */
export function createRecipeFilter() {
  return null;
}

/**
 * @name Hooks#getAvailableChannels
 * @type {function}
 * @description
 * This hook returns an object which contains mapping from template channel to backend channel
 * code. Only the channels defined here will be mapped when loading or sending data to/from backend.
 *
 * @returns {object} mapping from template channel name to backend channel name
 */
export function getAvailableChannels() {
  return {
    browser: 'notification',
    sms: 'sms',
    email: 'email',
  };
}
