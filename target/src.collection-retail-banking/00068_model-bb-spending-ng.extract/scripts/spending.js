/* eslint max-len: ["error", 100, { "ignoreComments": true }]*/
import { fromHttpError } from 'lib-bb-model-errors';
import { bbStorageKeys, preferencesKeys, E_PARAMS } from './constants';

/**
 * Model factory for model-bb-spending-ng
 *
 * @inner
 * @type {function}
 * @param {Object} Promise An ES2015 compatible `Promise` object.
 *
 * @return {Object}
 */
export default function spendingModel(
  Promise,
  spendingData,
  productSummaryData,
  bbStorage,
  widgetInstance
) {
  /**
   * @name spendingModel#FROM_STORAGE
   * @inner
   * @type {boolean}
   *
   * @description
   * Defines if products are recieved from bb-storage or from API always
   */
  const FROM_STORAGE = widgetInstance.getBooleanPreference(
    preferencesKeys.IS_PRODUCTS_LIST_FROM_STORAGE
  );

  /**
   * @name spendingModel#IS_FIRST_PRODUCT_DEFAULT
   * @inner
   * @type {boolean}
   *
   * @description
   * Defines if the first product is selected by default
   */
  const GET_FIRST_AS_DEFAULT = widgetInstance.getBooleanPreference(
    preferencesKeys.IS_FIRST_PRODUCT_DEFAULT
  );

  /**
   * @name spendingModel#productKindHasProducts
   * @inner
   * @type {function}
   *
   * @description
   * Checks if product kind has any products
   *
   * @param {module:model-bb-product-summary-ng.ProductKind} productKind a product kind object
   * @return {boolean} 'true' if has any products
   */
  const productKindHasProducts = productKind => productKind.products && productKind.products.length;

  /**
   * @name spendingModel#validateSpendingParameters
   * @type {function}
   *
   * @description
   * Checks if all required parameters are set
   *
   * @returns {Promise.<object>}
   * A Promise resolving to object with parameters.
   */
  const validateSpendingParameters = (params) => {
    if (params.arrangementId && params.periodStartDate && params.periodEndDate) {
      return Promise.resolve(params);
    }

    return Promise.reject({
      code: E_PARAMS,
    });
  };

  /**
   * @name spendingModel#loadSpending
   * @type {function}
   *
   * @description
   * Load product spending.
   *
   * @param {object} params Request parameters
   * @returns {Promise.<Spending, module:lib-bb-model-errors.ModelError>} A Promise with spending or error data
   */
  const loadSpending = (params) => spendingData.getTransactionsSpending(params)
    .then(response => response.data)
    .catch(e => {
      throw fromHttpError(e);
    });

  /**
   * @name spendingModel#loadProducts
   * @inner
   * @type {function}
   *
   * @description
   * Load products from API.
   *
   * @returns {Promise.<module:model-bb-product-summary-ng.ProductKinds, module:lib-bb-model-errors.ModelError>}
   * A Promise resolving to object with ProductsKinds and TotalBalance.
   */
  const loadProducts = () => productSummaryData
    .getProductsummary()
    .then(({ data }) => {
      bbStorage.setItem(bbStorageKeys.PRODUCT_SUMMARY, data);
      return data;
    })
    .catch((e) => {
      throw fromHttpError(e);
    });

  /**
   * @name spendingModel#getProducts
   * @type {function}
   *
   * @description
   * Get products either from storage or from the service
   *
   * @returns {Promise.<module:model-bb-product-summary-ng.ProductKinds, module:lib-bb-model-errors.ModelError>}
   * A Promise resolving to object with ProductsKinds and TotalBalance.
   */
  const getProducts = () =>
    bbStorage.getItem(bbStorageKeys.PRODUCT_SUMMARY)
    .then(data => (
      FROM_STORAGE && data
      ? data
      : loadProducts()
    ));

  /**
   * @name spendingModel#getProductsArray
   * @type {function}
   *
   * @description
   * Get products.
   *
   * @param {boolean} keepEmptyProducts defines if empty product kinds should be passed.
   *
   * @returns {Promise.<module:model-bb-product-summary-ng.Product[], module:lib-bb-model-errors.ModelError>}
   * A Promise resolving to array with Products.
   */
  const getProductsArray = (keepEmptyProducts = false) =>
    getProducts()
    .then(data => Object.keys(data)
      .filter(kind => keepEmptyProducts || productKindHasProducts(data[kind]))
      .reduce((products, kind) => {
        const extendedProducts = data[kind].products
          .map(product => Object.assign(product, { kind }));
        return products.concat(extendedProducts);
      }, [])
    );

  /**
   * @name spendingModel#getProductByID
   * @inner
   * @type {function}
   *
   * @description
   * Get products kinds.
   *
   * @param {any} productId product ID to get a stored product record
   *
   * @returns {Promise.<module:model-bb-product-summary-ng.Product, module:lib-bb-model-errors.ModelError>}
   * A Promise resolving to object with ProductsKinds and TotalBalance.
   */
  const getProductByID = (productId) => getProductsArray()
    .then(products => {
      const defaultProduct = GET_FIRST_AS_DEFAULT && products[0]
        ? products[0]
        : null;
      return productId
        ? products.find(product => product.id === productId)
        : defaultProduct;
    });

  /**
   * @name spendingModel#getSelectedProduct
   * @type {function}
   *
   * @description
   * Get current selected product.
   *
   * @returns {Promise.<module:model-bb-product-summary-ng.Product, module:lib-bb-model-errors.ModelError>}
   * A Promise resolving to a selected product object.
   */
  const getSelectedProduct = () => bbStorage.getItem(bbStorageKeys.PRODUCT_SELECTED)
    .then(id => getProductByID(id));

  /**
   * @name spendingModel#setSelectedProduct
   * @type {function}
   *
   * @description
   * Set selected product to the sorage
   *
   * @param {module:model-bb-product-summary-ng.Product} selectedProduct The selected product value
   */
  const setSelectedProduct = (selectedProduct) => {
    if (selectedProduct) {
      bbStorage.setItem(bbStorageKeys.PRODUCT_SELECTED, selectedProduct.id);
    } else {
      bbStorage.removeItem(bbStorageKeys.PRODUCT_SELECTED);
    }
  };

  /**
   * @name spendingModel#transformToSeries
   * @type {function}
   *
   * @description
   * Transforms data into format suitable for chart UI components
   *
   * @param {Spending} spendings Spending data
   * @returns {BBSeries} Data in format suitable for chart UI components
   */
  const transformToSeries = (spendings) => {
    spendings.items.sort((a, b) => b.portion - a.portion);
    return {
      datasets: [{
        data: spendings.items
          .map(item => item.portion),
      }],
      labels: spendings.items
        .map(item => item.category),
    };
  };

  /**
   * @name spendingModel
   * @type {Object}
   */
  return {
    E_PARAMS,
    validateSpendingParameters,
    loadSpending,
    getProducts,
    getProductsArray,
    getSelectedProduct,
    setSelectedProduct,
    transformToSeries,
  };
}
