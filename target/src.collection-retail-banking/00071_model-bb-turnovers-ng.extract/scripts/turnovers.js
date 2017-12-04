/* eslint max-len: ["error", 100, { "ignoreComments": true }]*/
import { fromHttpError } from 'lib-bb-model-errors';
import { bbStorageKeys, preferencesKeys, E_PARAMS } from './constants';

/**
 * Model factory for model-bb-turnovers-ng
 *
 * @inner
 * @type {function}
 * @param {Object} Promise An ES2015 compatible `Promise` object.
 *
 * @return {Object}
 */
export default function turnoversModel(
  Promise,
  transactionsData,
  productSummaryData,
  bbStorage,
  widgetInstance
) {
  /**
   * @name turnoversModel#FROM_STORAGE
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
   * @name turnoversModel#IS_FIRST_PRODUCT_DEFAULT
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
   * @name turnoversModel#IS_MULTIPLE_ACCOUNTS
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
   * @name turnoversModel#productKindHasProducts
   * @inner
   * @type {function}
   *
   * @description
   * Checks if product kind has any products
   *
   * @param {Object} productKind a product kind object
   * @return {boolean} 'true' if has any products
   */
  const productKindHasProducts = productKind => productKind.products && productKind.products.length;

  /**
   * @name turnoversModel#validateTurnoversParameters
   * @type {function}
   *
   * @description
   * Checks if all required parameters are set
   *
   * @returns {Promise.<object>}
   * A Promise resolving to object with parameters.
   */
  const validateTurnoversParameters = (params) => {
    if (params.arrangementIds && Array.isArray(params.arrangementIds)
      && params.periodStartDate && params.periodEndDate && params.intervalDuration) {
      return Promise.resolve(params);
    }

    return Promise.reject({
      code: E_PARAMS,
    });
  };

  /**
   * @name turnoversModel#loadProducts
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
   * @name turnoversModel#getProducts
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
   * @name turnoversModel#getProductsArray
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
   * @name turnoversModel#getProductByID
   * @inner
   * @type {function}
   *
   * @description
   * Get product by id
   *
   * @param {any} productId product ID to get a stored product record
   *
   * @returns {Promise.<module:model-bb-product-summary-ng.Product, module:lib-bb-model-errors.ModelError>}
   * A Promise resolving to a product with specified id
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
   * @name turnoversModel#getProductsFromList
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
   * @name turnoversModel#getSelectedProduct
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
   * @name turnoversModel#getSelectedProducts
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
   * @name turnoversModel#setSelectedProduct
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
   * @name turnoversModel#setSelectedProducts
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
   * @name turnoversModel#loadTurnovers
   * @type {function}
   *
   * @description
   * Load product turnovers
   *
   * @param {object} params Request parameters
   * @returns {Promise.<Turnover, module:lib-bb-model-errors.ModelError>}
   * A Promise with turnover or error data
   */
  const loadTurnovers = (params) => transactionsData.getTransactionsTurnovers(params)
    .then(response => response.data)
    .catch(e => {
      throw fromHttpError(e);
    });

  /**
   * @name turnoversModel#transformToSeries
   * @type {function}
   *
   * @description
   * Transforms data into format suitable for chart UI components
   *
   * @param {Turnover} data Turnover data
   * @param {?string} dataKey Optional, tells if data should be mapped to specific key
   * @returns {BBSeries} Data in format suitable for chart UI components
   */
  const transformToSeries = (data, dataKey) => {
    const turnovers = (data && data.turnovers) ? data.turnovers : [];

    const series = {
      labels: turnovers.map(turnover => turnover.intervalStartDate),
    };

    if (dataKey) {
      Object.assign(series, {
        datasets: [{
          dataKey,
          data: turnovers.map(item => item[dataKey].amount),
        }],
      });
    } else {
      Object.assign(series, {
        datasets: [{
          data: turnovers.map(item => item.debitAmount.amount),
        }, {
          data: turnovers.map(item => item.creditAmount.amount),
        }],
      });
    }
    return series;
  };

  /**
   * @name turnoversModel#isFirstProductDefault
   * @type {function}
   *
   * @description
   * Defines if the first product is selected by default
   *
   * @returns {boolean} GET_FIRST_AS_DEFAULT
   */
  const isFirstProductDefault = () => GET_FIRST_AS_DEFAULT;

  /**
   * @name turnoversModel#isProductsListFromStorage
   * @type {function}
   *
   * @description
   * Defines if products are recieved from bb-storage or from API always
   *
   * @returns {boolean} FROM_STORAGE
   */
  const isProductsListFromStorage = () => FROM_STORAGE;

  /**
   * @name turnoversModel#isMultipleAccount
   * @type {function}
   *
   * @description
   * Defines if the widget is combined with multiple account selector
   *
   * @returns {boolean} IS_MULTIPLE_ACCOUNTS
   */
  const isMultipleAccount = () => IS_MULTIPLE_ACCOUNTS;

  /**
   * @name turnoversModel
   * @type {Object}
   */
  return {
    E_PARAMS,
    loadTurnovers,
    validateTurnoversParameters,
    transformToSeries,
    getProducts,
    getProductsArray,
    getSelectedProduct,
    getSelectedProducts,
    setSelectedProduct,
    setSelectedProducts,
    isFirstProductDefault,
    isProductsListFromStorage,
    isMultipleAccount,
  };
}
