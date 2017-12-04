/* eslint max-len: ["error", 100, { "ignoreComments": true }]*/
import { fromHttpError } from 'lib-bb-model-errors';
import { BbStorageKeys } from './constants';

/**
 * @name transactionsModel
 * @returns {object}
 * @inner
 */
export default function transactionsModel(
  transactionsData,
  productSummaryData,
  paymentOrdersData,
  widget,
  bbStorage
) {
  /**
   * @name transactionsModel#loadProducts
   * @inner
   * @type {function}
   *
   * @description
   * Load products.
   *
   * @returns {Promise.<module:model-bb-product-summary-ng.ProductKinds, module:lib-bb-model-errors.ModelError>}
   * A Promise resolving to object with ProductsKinds and TotalBalance.
   */
  const loadProductSummary = () => productSummaryData
    .getProductsummary()
    .then(({ data }) => {
      bbStorage.setItem(BbStorageKeys.PRODUCT_SUMMARY, data);
      return data;
    })
    .catch((e) => {
      throw fromHttpError(e);
    });

  /**
   * @name transactionsModel#getProducts
   * @inner
   * @type {function}
   *
   * @description
   * Get product list.
   *
   * @returns {Promise.<module:model-bb-product-summary-ng.ProductKinds, module:lib-bb-model-errors.ModelError>}
   * A Promise resolving to array with products.
   */
  const getProducts = () => bbStorage.getItem(BbStorageKeys.PRODUCT_SUMMARY)
    .then(data => (data || loadProductSummary()))
    .then(data => Object.keys(data)
      .filter(kind => data[kind].products && data[kind].products.length)
      .reduce((products, kind) => {
        const extendedProducts = data[kind].products
          .map(product => Object.assign(product, { kind }));
        return products.concat(extendedProducts);
      }, []));

  /**
   * @name transactionsModel#getProductViewModel
   * @inner
   * @type {function}
   *
   * @description
   * Get product view model contains product name and product number.
   *
   * @param {module:model-bb-product-summary-ng.Product} product Product
   * @returns {ProductViewModel} product view model
   */
  const getProductViewModel = product => ({
    accountHolderName: product.accountHolderName || product.name,
    accountNumber: product.IBAN || product.BBAN || product.number || product.productNumber,
  });

  /**
   * @name transactionsModel#processResponse
   * @inner
   * @type {function}
   *
   * @description
   * Process response of loading transaction list.
   *
   * @param {module:model-bb-product-summary-ng.Product} product Product
   * @returns {Promise.<Array>} Processed transaction data.
   */
  const processResponse = (response) => getProducts()
    .then((products) => {
      const data = response.data.map((transaction) => {
        const accountOfTransaction = products.find(product =>
          product.id === transaction.arrangementId);

        if (accountOfTransaction) {
          Object.assign(transaction, getProductViewModel(accountOfTransaction));
        }

        return transaction;
      });

      return {
        totalCount: parseInt(response.headers('x-total-count'), 10) || 0,
        data,
      };
    });

  /**
   * @public
   * @name transactionsModel#load
   * @type {function}
   *
   * @description
   * Load transactions.
   *
   * @param {object} params Request parameters
   * @returns {Promise.<TransactionItem[]>} List of transactions as a promise.
   */
  const load = (params) => transactionsData.getTransactions(params)
    .then(processResponse)
    .catch(e => {
      throw fromHttpError(e);
    });

  /**
   * @name transactions@getExportFileResource
   * @type {function}
   * @description
   * Compound URI by data module method and query parameters
   *
   * @param {object} params Request parameters
   */
  const getExportFileResource = params => {
    const query = Object.keys(params).reduce((array, key) => {
      if (Object.prototype.hasOwnProperty.call(params, key) && params[key]) {
        array.push(`${key}=${params[key]}`);
      }

      return array;
    }, []).join('&');

    return transactionsData.getTransactionsUri(`export?${query}`, params);
  };

  /**
   * @name transactionsModel#getDefaultProduct
   * @inner
   * @type {function}
   *
   * @description
   * Get default product.
   *
   * @param {object} id Product ID
   * @param {Product[]} products Products list
   * @returns {Promise.<module:model-bb-product-summary-ng.Product|null, module:lib-bb-model-errors.ModelError>}
   * A Promise resolving to object with default Product or null.
   */
  const findProductById = (id, products) => products.find(product => product.id === id);

  /**
   * @name transactionsModel#getProductFromList
   * @inner
   * @type {function}
   *
   * @description
   * Get product from list.
   *
   * @param {object} id Product ID
   * @param {object} getFirstInstead Product ID
   * @returns {Promise.<module:model-bb-product-summary-ng.Product, module:lib-bb-model-errors.ModelError>}
   * A Promise resolving to object with Product or null.
   */
  const getProductFromList = (id, getFirstInstead) => getProducts()
    .then(products => {
      const defaultProduct = getFirstInstead && products[0] ? products[0] : null;
      return id ? (findProductById(id, products) || defaultProduct) : defaultProduct;
    });

  /**
   * @public
   * @name transactionsModel#getSelectedProduct
   * @type {function}
   *
   * @description
   * Get current selected product
   *
   * @returns {Promise.<module:model-bb-product-summary-ng.Product, module:lib-bb-model-errors.ModelError>}
   * A Promise with Product
   */
  const getSelectedProduct = (getFirstInstead = true) =>
    bbStorage.getItem(BbStorageKeys.PRODUCT_SELECTED)
      .then(id => getProductFromList(id, getFirstInstead));

  /**
   * @name transactionsModel#getCurrentTransaction
   * @type {function}
   *
   * @description
   * Tries to read the current transaction from sync preferences
   *
   * @returns {object} Transaction data
   */
  const getCurrentTransaction = () => bbStorage.getItem(BbStorageKeys.TRANSACTION_SELECTED);

  /**
   * @public
   * @name transactionsModel#storeTransactionAsCurrent
   * @type {function}
   *
   * @description
   * Stores a given transaction as current in sync preferences
   *
   * @param {object} transaction Transaction data
   */
  const storeTransactionAsCurrent = transaction =>
    bbStorage.setItem(BbStorageKeys.TRANSACTION_SELECTED, transaction);

  /**
   * @name transactionsModel#updateTransactionCategory
   * @type {function}
   *
   * @description
   * Updates the transaction's category
   *
   * @param {string} id Transaction identifier
   * @param {TransactionUpdate} body Update object
   * @returns {Promise.<TransactionItem, module:lib-bb-model-errors.ModelError>}
   * A Promise with Transaction item or error
   */
  const updateTransactionCategory = (id, body) =>
    transactionsData.putTransactionsCategoryRecord(id, body)
      .then(response => response.data)
      .catch((e) => {
        throw fromHttpError(e);
      });

  /**
   * @public
   * @name transactionsModel#getCurrencies
   * @type {function}
   *
   * @description
   * Get available currencies.
   *
   * @returns {Promise.<object[]>} A Promise with response.
   */
  const getCurrencies = () => paymentOrdersData
    .getPaymentOrdersCurrencies()
    // Convert currencies format to the format used in the widgets
    .then(({ data }) => data.map(({ code }) => ({ name: code })))
    .catch(httpErrorResponse => {
      throw fromHttpError(httpErrorResponse);
    });


  /**
   * @name transactionsModel
   * @type {object}
   */
  return {
    load,
    getSelectedProduct,
    getCurrentTransaction,
    storeTransactionAsCurrent,
    getCurrencies,
    getExportFileResource,
    updateTransactionCategory,
  };
}

/**
 * TransactionUpdate type definition
 * @typedef {Object} TransactionUpdate
 * @property {string} categoryName Name of the category
 */

/**
 * TransactionItem type definition
 * @typedef {Object} TransactionItem
 * @property {string} id Internally used unique identification of the transaction
 * @property {string} arrangementId Reference to the product to which the transaction belongs
 * @property {string} externalId Internally used unique external identification of the transaction
 * @property {string} externalArrangementId External reference to the product to which the transaction belongs
 * @property {string} productId Reference to the product to which the transaction belongs
 * @property {string} reference A tag/label issued by the initiator of the transaction in order to be able
 * to refer to the respective transaction
 * @property {string} description Transaction description
 * @property {string} typeGroup Bank specific code of the group the transaaction type belangs to this to be
 * mapped to in integration
 * @property {string} type Bank specific code to be mapped to generic type in integration
 * @property {string} category Transaction category
 * @property {string} bookingDate The date the amount is posted to the balance of
 * an account from a book keeping perspective
 * @property {string} valueDate The date on which an amount posted to an account becomes interest bearing
 * @property {number} amount The amount of the transaction
 * @property {string} currency Currency code
 * @property {string} creditDebitIndicator Indicator if transaction is incoming our outgoing
 * @property {number} instructedAmount Only present if the transaction currency <> account currency
 * @property {string} instructedCurrency Currency code of instructed amount
 * @property {number} currencyExchangeRate The exchange rate (between both account and transaction currency)
 * that was used for the conversion. To be used if those currencies are not the same
 * @property {string} counterPartyName The name of the counterparty
 * @property {string} counterPartyAccountNumber The International Bank Account Number of the counterparty
 * @property {string} counterPartyBIC The BIC of the counterparty
 * @property {string} counterPartyCountry ISO Country code
 * @property {string} counterPartyBankName The bank name of the counterparty
 * @property {string} creditorId Id of the creditor (Only for SEPA DD)
 * @property {string} mandateReference Mandate Reference (Only for SEPA DD)
 */

/**
 * Product view model type definition
 * @typedef {Object} ProductViewModel
 * @property {string} productName name of the Product
 * @property {string} productNumber number of the Product
 */
