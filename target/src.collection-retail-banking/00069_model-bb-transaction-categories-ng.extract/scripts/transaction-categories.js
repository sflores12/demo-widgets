import { fromHttpError } from 'lib-bb-model-errors';
import bbStorageKeys from './constants';

/**
 * Model factory for model-bb-transaction-categories-ng
 *
 * @inner
 * @type {function}
 * @param {Object} Promise An ES2015 compatible `Promise` object.
 *
 * @return {Object}
 */
export default function transactionCategoriesModel(
  transactionCategoriesData,
  bbStorage
) {
  /**
   * @name transactionCategoriesModel#loadCategories
   * @type {function}
   *
   * @description
   * Load the availabe categories.
   *
   * @returns {Promise.<Object>} A Promise with all of the availabe categories.
   */
  const loadCategories = () =>
    transactionCategoriesData.getCategories()
      .then(data => {
        bbStorage.setItem(bbStorageKeys.TRANSACTION_CATEGORIES_LIST, data);
        return data;
      })
      .catch(e => {
        throw fromHttpError(e);
      });

  /**
   * @name transactionCategoriesModel#getCategories
   * @type {function}
   *
   * @description
   * Load the availabe categories from server or storage.
   *
   * @returns {Promise.<Object>} A Promise with all of the availabe categories.
   */
  const getCategories = () =>
    bbStorage.getItem(bbStorageKeys.TRANSACTION_CATEGORIES_LIST)
      .then(data => data || loadCategories());

  /**
   * @name transactionCategoriesModel
   * @type {Object}
   */
  return {
    getCategories,
  };
}
