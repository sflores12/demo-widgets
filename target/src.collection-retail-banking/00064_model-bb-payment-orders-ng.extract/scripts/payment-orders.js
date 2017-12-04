import { fromHttpError } from 'lib-bb-model-errors';

import { createAccountModel, getExtendedAccountModelFlat } from './account-model';
import { ExternalType, AccountPrivilegeParams, BbStorageKeys, Preference } from './constants';

/**
 * @description
 * Method to normalize products data
 *
 * @inner
 * @param {object} rawData Raw response data object
 * @returns {object[]} An array of products
 */
const convertToAccountsArray = rawData => Object.keys(rawData)
  .filter(kind => rawData[kind].products && rawData[kind].products.length > 0)
  .reduce((memo, kind) => memo.concat(
    rawData[kind].products.map(createAccountModel(kind))
  ), []);

/**
 * @description
 * Method to normalize products data (flat list)
 *
 * @inner
 * @param {object[]} rawData Raw response data object
 * @returns {object[]} An array of products
 */
const convertFromAccountsArrayFlat = rawData => getExtendedAccountModelFlat(rawData);

/**
 * @description
 * Method to format external contacts data as product kind.
 *
 * @inner
 * @param {object} rawData Contact object.
 * @returns {object} External product object.
 */
const convertExternalsToProductKind = (rawData) => ({
  [ExternalType.IDENTIFIER]: {
    name: ExternalType.NAME,
    products: rawData,
    aggregatedBalance: 0.0,
  },
});

/**
 * Model factory for model-bb-payment-orders-ng
 *
 * @inner
 * @type {function}
 * @param {Object} Promise An ES2015 compatible `Promise` object.
 *
 * @return {Object}
 */
export default function paymentOrdersModel(
  paymentOrdersData,
  productSummaryData,
  contactData,
  bbStorage,
  widget
) {
  /**
   * @name paymentOrdersModel#createPaymentOrder
   * @type {function}
   *
   * @description
   * Create new payment order.
   *
   * @param {object} paymentOrderParams New payment order data
   * @returns {Promise.<object>} A Promise with response.
   */
  const createPaymentOrder = paymentOrderParams =>
    paymentOrdersData.postPaymentOrdersRecord(paymentOrderParams)
      .catch(httpErrorResponse => {
        const error = fromHttpError(httpErrorResponse);
        if (httpErrorResponse.status === 403) {
          Object.assign(error, { breachReport: httpErrorResponse.data.breachReport });
        }
        throw error;
      });

  /**
   * @name paymentOrdersModel#getCurrencies
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
   * @name normalizeDebitParams
   * @type {function}
   * @description
   * Provide correct list of request params (including search)
   * @inner
   *
   * @param {object} params
   * @return {object}
   */
  const normalizeDebitParams = (params = {}) => {
    const extraParams = Object.assign({}, params);

    if (extraParams.searchQuery) {
      extraParams.searchTerm = extraParams.searchQuery;
      delete extraParams.searchQuery;
    }

    return Object.assign({}, AccountPrivilegeParams.debit, extraParams);
  };

  /**
   * @name paymentOrdersModel#getProductSelectedId
   * @inner
   * @type {function}
   *
   * @description
   * Tries to read selected product id from storage.
   *
   * @returns {Promise<?string>} a Promise with ID
   */
  const getProductSelectedId = () => bbStorage.getItem(BbStorageKeys.PRODUCT_SELECTED);

  /**
   * @name paymentOrdersModel#getAccountsFrom
   * @type {function}
   *
   * @description
   * Load accounts available to payment from.
   *
   * @param {object} params
   * @returns {Promise.<object[]>} A Promise with flat accounts list.
   */
  const getAccountsFrom = (params = {}) => productSummaryData
    .getProductsummaryContextArrangements(normalizeDebitParams(params))
    .then(({ data }) => data)
    .then(convertFromAccountsArrayFlat)
    .catch(httpErrorResponse => {
      throw fromHttpError(httpErrorResponse);
    });
  /**
   * @name paymentOrdersModel#getAccountsTo
   * @type {function}
   *
   * @description
   * Load accounts available for payment to.
   *
   * @param {string} debitAccountId Filter account list with debitAccountId param
   * @returns {Promise.<object[]>} A Promise with flat accounts list.
   */
  const getAccountsTo = debitAccountId => productSummaryData
    .getProductsummaryCreditaccounts({ debitAccountId })
    .then(({ data }) => data)
    .then(convertToAccountsArray)
    .then(accounts => accounts.filter(account => account.id !== debitAccountId))
    .catch(httpErrorResponse => {
      throw fromHttpError(httpErrorResponse);
    });

  /**
   * @name paymentOrdersModel#getExternals
   * @type {function}
   *
   * @description
   * Load external accounts from contact list.
   *
   * @returns {Promise.<object[]>} A Promise with flat accounts list.
   */
  const getExternals = () => contactData
    .getContacts({ size: 999 })
    .then(({ data }) => data)
    .then(convertExternalsToProductKind)
    .then(convertToAccountsArray)
    .catch(httpErrorResponse => {
      throw fromHttpError(httpErrorResponse);
    });

  /**
   * @description
   * Get currencies available for payment.
   *
   * @name paymentOrdersModel#getRate
   * @type {function}
   * @param {object} rateParams Parameters for getRate request
   * @returns {number} Rate number
   */
  const getRate = rateParams => paymentOrdersData
    .getPaymentOrdersRate(rateParams)
    .then(({ data }) => data.rate)
    .catch(httpErrorResponse => {
      throw fromHttpError(httpErrorResponse);
    });

  /**
   * @name paymentOrdersModel#createContact
   * @type {function}
   *
   * @description
   * Creates a new contact
   *
   * @param {object} contact Contact data
   * @returns {Promise} A Promise object for create contact request
   */
  const createContact = contact => contactData
    .postContactsRecord(contact)
    .catch(httpErrorResponse => {
      throw fromHttpError(httpErrorResponse);
    });

  /**
   * @name paymentOrdersModel#getPaymentOrders
   * @type {function}
   *
   * @description
   * Get payments orders data.
   *
   * @param  {object} params Params to send to the request
   * @returns {Promise.<Payments, module:lib-bb-model-errors.ModelError>} A Promise
   */
  const getPaymentOrders = params => paymentOrdersData
    .getPaymentOrders(params)
    .then(raw => ({
      data: raw.data,
      totalCount: parseInt(raw.headers('x-total-count'), 10) || 0,
    }))
    .catch(httpErrorResponse => {
      throw fromHttpError(httpErrorResponse);
    });

  /**
   * @name paymentOrdersModel#getStandingOrdersPreferences
   * @type {function}
   *
   * @description
   * Tries to read the stored standing orders preferences
   *
   * @returns {Object}
   */
  function getStandingOrdersPreferences() {
    const paymentPreferences = {};

    paymentPreferences.standingOrdersPageSize = widget
      .getLongPreference(Preference.STANDING_ORDERS_PAGE_SIZE);
    paymentPreferences.standingOrdersMaxNavPages = widget
      .getLongPreference(Preference.STANDING_ORDERS_MAX_NAV_PAGES);
    paymentPreferences.standingOrdersPaginationType = widget
      .getStringPreference(Preference.STANDING_ORDERS_PAGINATION_TYPE);
    paymentPreferences.standingOrdersNotificationDismissTime = widget
      .getLongPreference(Preference.STANDING_ORDERS_NOTIFICATION_DISMISS);

    return paymentPreferences;
  }

  /**
   * @name paymentOrdersModel#getStandingOrders
   * @type {function}
   *
   * @description
   * Get standing orders data.
   *
   * @param  {object} params Params to send to the request
   * @returns {Promise.<Payments, ModelError>} A Promise
   */
  const getStandingOrders = params => paymentOrdersData
    .getPaymentOrders(Object.assign(params, { paymentMode: 'RECURRING' }))
    .then(raw => ({
      data: raw.data,
      totalCount: parseInt(raw.headers('x-total-count'), 10) || 0,
    }))
    .catch(httpErrorResponse => {
      throw fromHttpError(httpErrorResponse);
    });

  /**
   * @name paymentOrdersModel
   * @type {Object}
   */
  return {
    createPaymentOrder,
    getCurrencies,
    getAccountsFrom,
    getAccountsTo,
    getExternals,
    getRate,
    createContact,
    getPaymentOrders,
    getProductSelectedId,
    getStandingOrdersPreferences,
    getStandingOrders,
  };
}

/**
 * Payments type definition
 * @typedef {Array.<Payment>} Payments
 */

/**
 * Payment type definition
 * @typedef {Object} Payment
 * @property {string}         id                                   - Payment ID
 * @property {string}         status                               - Payment status
 * @property {string}         bankStatus                           - Bank Status
 * @property {string}         reasonCode                           - Reason id
 * @property {string}         reasonText                           - Reason description
 * @property {object}         debtorAccount                        - Debtor account
 * @property {string}         instructionPriority                  - Instruction priority
 * @property {string}         requestedExecutionDate               - Requested execution date
 * @property {object}         creditTransferTransactionInformation - Transaction information
 * @property {string}         createdBy                            - User id that created payment
 * @property {string}         createdAt                            - Date when payment was created
 */
