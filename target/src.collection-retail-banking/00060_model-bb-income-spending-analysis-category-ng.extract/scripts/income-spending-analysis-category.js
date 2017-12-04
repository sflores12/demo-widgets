/* eslint max-len: ["error", 100, { "ignoreComments": true }]*/
import { fromHttpError } from 'lib-bb-model-errors';
import { bbStorageKeys, preferencesKeys, E_PARAMS } from './constants';

/**
 * Model factory for model-bb-income-spending-analysis-category-ng
 *
 * @inner
 * @type {function}
 * @param {Object} Promise An ES2015 compatible `Promise` object.
 *
 * @return {Object}
 */
export default function analysisCategoryModel(
  Promise,
  incomeSpendingData,
  productSummaryData,
  bbStorage,
  widgetInstance
) {
  /**
   * @name analysisCategoryModel#FROM_STORAGE
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
   * @name analysisCategoryModel#GET_FIRST_AS_DEFAULT
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
   * @name analysisCategoryModel#IS_MULTIPLE_ACCOUNTS
   * @inner
   * @type {boolean}
   *
   * @description
   * Defines if the widget is combined with multiple account selector
   */
  const IS_MULTIPLE_ACCOUNTS = widgetInstance.getBooleanPreference(
    preferencesKeys.IS_MULTIPLE_ACCOUNTS
  );

  /**
   * @name analysisCategoryModel#productKindHasProducts
   * @inner
   * @type {function}
   *
   * @description
   * Checks if product kind has any products
   *
   * @param {module:model-bb-product-summary-ng.ProductKind} productKind Product kind object
   * @return {boolean} Has at least one product products
   */
  const productKindHasProducts = productKind => productKind.products && productKind.products.length;

  /**
   * @name analysisCategoryModel#validateAnalysisParameters
   * @type {function}
   *
   * @description
   * Checks if all required parameters are set
   *
   * @param {object} params
   * @returns {Promise.<object>}
   * A Promise resolving to object with parameters.
   */
  const validateAnalysisParameters = (params) => {
    if (params.creditDebitIndicator
      && params.arrangementIds && Array.isArray(params.arrangementIds)
      && params.periodStartDate
      && params.periodEndDate
    ) {
      return Promise.resolve(params);
    }

    return Promise.reject({
      code: E_PARAMS,
    });
  };

  /**
   * @name analysisCategoryModel#loadAnalysisData
   * @type {function}
   *
   * @description
   * Load income/spending analysis data by category
   *
   * @param {object} params Request parameters
   * @returns {Promise.<AnalysisCategoryData, module:lib-bb-model-errors.ModelError>} A Promise with spending or error data
   */
  const loadAnalysisData = (params) => incomeSpendingData.getTransactionsCategorytotals(params)
    .then(response => response.data)
    .catch(e => {
      throw fromHttpError(e);
    });

  /**
   * @name analysisCategoryModel#loadProducts
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
   * @name analysisCategoryModel#getProducts
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
   * @name analysisCategoryModel#getProductsArray
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
   * @name analysisCategoryModel#getProductByID
   * @inner
   * @type {function}
   *
   * @description
   * Retrieves a product object with an ID provided
   *
   * @param {string} productId product ID to get a stored product record
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
   * @name analysisCategoryModel#getProductsFromList
   * @inner
   * @type {function}
   *
   * @description
   * Get products from list
   *
   * @param {string[]} ids Product ID array
   * @returns {Promise.<module:model-bb-product-summary-ng.Product[], module:lib-bb-model-errors.ModelError>}
   * A Promise resolving to an array with Products or null
   */
  const getProductsFromList = (ids) => getProductsArray()
    .then(products => {
      const defaultProduct = [];
      if (GET_FIRST_AS_DEFAULT && products[0]) {
        defaultProduct.push(products[0]);
      }

      if (!ids || !ids.length) {
        return defaultProduct;
      }

      return ids.map(id => products.find(product => product.id === id) || defaultProduct);
    });

  /**
   * @name analysisCategoryModel#getSelectedProduct
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
   * @name analysisCategoryModel#getSelectedProducts
   * @type {function}
   *
   * @description
   * Get currently selected products array
   *
   * @returns {Promise.<module:model-bb-product-summary-ng.Product[], module:lib-bb-model-errors.ModelError>}
   * A Promise resolving to Product array
   */
  const getSelectedProducts = () => bbStorage.getItem(bbStorageKeys.PRODUCTS_SELECTED)
    .then(ids => getProductsFromList(ids));

  /**
   * @name analysisCategoryModel#setSelectedProduct
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
   * @name analysisCategoryModel#setSelectedProducts
   * @type {function}
   *
   * @description
   * Set currently selected products array
   *
   * @param {module:model-bb-product-summary-ng.Product[]} products Array of products to select
   */
  const setSelectedProducts = (products) => {
    if (products && products.length) {
      bbStorage.setItem(bbStorageKeys.PRODUCTS_SELECTED,
        products.map(product => product.id).filter(id => id)
      );
    } else {
      bbStorage.removeItem(bbStorageKeys.PRODUCTS_SELECTED);
    }
  };

  /**
   * @name analysisCategoryModel#transformToSeries
   * @type {function}
   *
   * @description
   * Transforms data into format suitable for chart UI components
   *
   * @param {AnalysisCategoryData} analysisCategoryData Income/Spending category data
   * @returns {BBSeries} Data in format suitable for chart UI components
   */
  const transformToSeries = (analysisCategoryData) => {
    analysisCategoryData.items.sort((a, b) => b.portion - a.portion);
    return {
      datasets: [{
        data: analysisCategoryData.items
          .map(item => item.portion),
      }],
      labels: analysisCategoryData.items
        .map(item => item.category),
    };
  };

  /**
   * @name analysisCategoryModel#isFirstProductDefault
   * @type {function}
   *
   * @description
   * Defines if the first product is selected by default
   *
   * @returns {boolean} GET_FIRST_AS_DEFAULT
   */
  const isFirstProductDefault = () => GET_FIRST_AS_DEFAULT;

  /**
   * @name analysisCategoryModel#isMultipleAccount
   * @type {function}
   *
   * @description
   * Defines if the widget is combined with multiple account selector
   *
   * @returns {boolean} IS_MULTIPLE_ACCOUNTS
   */
  const isMultipleAccount = () => IS_MULTIPLE_ACCOUNTS;

  /**
   * @name analysisCategoryModel
   * @type {Object}
   */
  return {
    E_PARAMS,
    validateAnalysisParameters,
    loadAnalysisData,
    getProducts,
    getProductsArray,
    getSelectedProduct,
    getSelectedProducts,
    setSelectedProduct,
    setSelectedProducts,
    transformToSeries,
    isFirstProductDefault,
    isMultipleAccount,
  };
}
