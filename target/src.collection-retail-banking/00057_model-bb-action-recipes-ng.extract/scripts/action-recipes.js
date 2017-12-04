import { fromHttpError } from 'lib-bb-model-errors';
import accountModel from './account-mapper';

/**
 * Model factory for model-bb-action-recipes-ng
 *
 * @inner
 * @type {function}
 * @param {Object} Promise An ES2015 compatible `Promise` object.
 *
 * @return {Object}
 */
export default function actionRecipesModel(actionRecipesData, productSummaryData, $q) {
  /**
   * @description Extracting data set from raw response
   * @inner
   * @param rawData - response
   * @returns [object] data response
   */
  const convertRawData = (rawData) => rawData.data || [];

  /**
   * @description Load users recipe data.
   *
   * @name actionRecipesModel#loadRecipes
   * @type {function}
   * @returns {Promise.<Object>} A Promise with an array of Recipes
   */
  function loadRecipes() {
    return actionRecipesData.getActionRecipes()
      .then(convertRawData)
      .then(res => res.actionRecipes)
      .catch(httpErrorResponse => {
        throw fromHttpError(httpErrorResponse);
      });
  }

  /**
   * @description Load available Recipe Specifications
   *
   * @name actionRecipesModel#loadSpecifications
   * @type {function}
   * @returns {Promise.<Object>} A Promise with an array of specification data
   */
  function loadSpecifications() {
    return actionRecipesData.getActionRecipeSpecifications()
      .then(convertRawData)
      .then(res => res.actionRecipeSpecifications)
      .catch(httpErrorResponse => {
        throw fromHttpError(httpErrorResponse);
      });
  }

  /**
   * @description Method to normalize account data
   *
   * @param {object} data http response data
   * @type {function}
   * @returns {Array<Account>} accounts normalized account data
   * @inner
   */
  function convertToArray(data) {
    return Object.keys(data)
      .filter(groupName => data[groupName].products && data[groupName].products.length > 0)
      .map(groupName => data[groupName].products.map(accountModel(groupName)))
      .reduce((accumulated, arr) => accumulated.concat(arr), []);
  }

  /**
   * @description Load users account data
   *
   * @name actionRecipesModel#loadAccounts
   * @type {function}
   * @returns {Promise.<Object>} A Promise with an array of account data
   */
  function loadAccounts() {
    return productSummaryData.getProductsummaryDebitaccounts()
      .then(convertRawData)
      .then(convertToArray)
      .catch(httpErrorResponse => {
        throw fromHttpError(httpErrorResponse);
      });
  }

  /**
   * @description
   * Load all necessary data to display Recipes:
   * Recipes, Specifications and Accounts.
   *
   * @name actionRecipesModel#load
   * @type {function}
   * @returns {Promise.<Object>} A Promise with an array of account data
   */
  function load() {
    return $q.all([
      loadSpecifications(),
      loadAccounts(),
      loadRecipes(),
    ]).then(res => ({
      specifications: res[0],
      accounts: res[1],
      recipes: res[2],
    })).catch((httpErrorResponse) => {
      throw fromHttpError(httpErrorResponse);
    });
  }

  /**
   * @description
   * Load all necessary data to display Recipes:
   * Recipes, Specifications and Accounts.
   *
   * @name actionRecipesModel#load
   * @type {function}
   * @returns {Promise.<Object>} A Promise with an array of account data
   */
  function save(recipe) {
    return actionRecipesData.postActionRecipesRecord(recipe)
      .then(convertRawData)
      .then((response) => {
        const id = response.id;
        return Object.assign(recipe, { id });
      })
      .catch((httpErrorResponse) => {
        throw fromHttpError(httpErrorResponse);
      });
  }

  /**
   * @description
   * Load all necessary data to display Recipes:
   * Recipes, Specifications and Accounts.
   *
   * @name actionRecipesModel#load
   * @type {function}
   * @returns {Promise.<Object>} A Promise with an array of account data
   */
  function update(recipe) {
    return actionRecipesData.putActionRecipesRecord(recipe.id, recipe)
      .then(convertRawData)
      .then(() => recipe)
      .catch((httpErrorResponse) => {
        throw fromHttpError(httpErrorResponse);
      });
  }

  /**
   * @description
   * Load all necessary data to display Recipes:
   * Recipes, Specifications and Accounts.
   *
   * @name actionRecipesModel#load
   * @type {function}
   * @returns {Promise.<Object>} A Promise with an array of account data
   */
  function remove(recipe) {
    return actionRecipesData.deleteActionRecipesRecord(recipe.id, {})
      .then(convertRawData)
      .catch((httpErrorResponse) => {
        throw fromHttpError(httpErrorResponse);
      });
  }

  /**
   * @description Activates given action recipe
   * @name actionRecipesModel#activate
   * @type {Function}
   * @param {Object} recipe recipe to activate
   * @return {Promise} promise which is resolved with the activated recipe
   */
  function activate(recipe) {
    return actionRecipesData.postActionRecipesActivationRequestRecord(recipe.id)
      .then(() => Object.assign(recipe, { active: true }))
      .catch((httpErrorResponse) => {
        throw fromHttpError(httpErrorResponse);
      });
  }

  /**
   * @description Deactivates given action recipe
   * @name actionRecipesModel#deactivate
   * @type {Function}
   * @param {Object} recipe recipe to deactivate
   * @return {Promise} promise which is resolved with deactivated recipe
   */
  function deactivate(recipe) {
    return actionRecipesData.postActionRecipesDeactivationRequestRecord(recipe.id)
      .then(() => Object.assign(recipe, { active: false }))
      .catch((httpErrorResponse) => {
        throw fromHttpError(httpErrorResponse);
      });
  }

  /**
  * @description
  * Action recipes  widget model service.
  *
  * @name actionRecipesModel
  * @type {object}
  */
  return {
    loadRecipes,
    loadSpecifications,
    loadAccounts,
    load,
    save,
    update,
    remove,
    activate,
    deactivate,
  };
}
