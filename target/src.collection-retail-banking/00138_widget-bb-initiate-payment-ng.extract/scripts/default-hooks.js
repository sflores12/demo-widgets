/**
 * @name Hooks
 * @type {object}
 *
 * @description
 * Hooks for widget-bb-initiate-payment-ng
 */

/**
 * @name Hooks#processAccountsTo
 * @type {function}
 *
 * @description
 * Hook for processing account list in 'to' field (credit).
 * Assigned to $ctrl.accountsTo.
 *
 * @param {object} debitAccount Selected debit account (can be null).
 * @param {function} getCreditAccounts Function to retrieve all credit accounts
 * @param {function} getExternalContacts Function to retrieve all external contacts
 * formatted like Product kind
 * @returns {Promise.<array.<module:model-bb-product-summary-ng.Product>>}
 *  Promise that retrieves array of accounts.
 */
// eslint-disable-next-line no-unused-vars
export const processAccountsTo = (debitAccount, getCreditAccounts, getExternalContacts) =>
  getCreditAccounts((debitAccount && debitAccount.id) || null);

/**
 * @name Hooks#getRecurringTransactionDay
 * @type {function}
 *
 * @description
 * Denotes day on which transfer should be executed.
 * For weekly it will be 1..7 indicating weekday.
 * For monthly it will be 1..31 indicating day of month.
 * For yearly it will be 1..12 indicating month of the year
 *
 * @param {object} schedule Recurring payment schedule object
 * @returns {number} Recurring transaction day
 */
export const getRecurringTransactionDay = schedule => schedule.startDate.getDate();

/**
 * @name Hooks#processCurrencies
 * @type {function}
 *
 * @description
 * Processes currencies array returned from the service
 *
 * @param {object[]} currencies Initial currencies
 * @returns {object[]} Processed currencies
 */
export const processCurrencies = currencies => currencies;

/**
 * @name Hooks#processAccountsFrom
 * @type {function}
 *
 * @description
 * Hook for processing account list in 'from' field (debit).
 * Assigned to $ctrl.accountsFrom.
 *
 * @param {object[]} accounts Initial debit accounts.
 * @returns {object[]} Processed debit accounts.
 */
export const processAccountsFrom = accounts => accounts;

/**
 * @name Hooks#processNewPaymentData
 * @type {function}
 *
 * @description
 * Hook for processing new payment order data.
 * Will be passed to model.createPaymentOrder method.
 *
 * @param {object} data Initial new payment order data.
 * @returns {object} Processed new payment order data.
 */
export const processNewPaymentData = data => data;

/**
 * @name Hooks#validatePayment
 * @type {function}
 *
 * @description
 * Hook for reviewing new payment order data.
 * Assigned to $ctrl.reviewPayment
 *
 * @param {object} data Initial new payment order data.
 * @returns {Validation} Payment validation object.
 */
// eslint-disable-next-line no-unused-vars
export const validatePayment = payment => ({ valid: true, messages: [] });

/**
 * Validation object
 * @typedef {object}  Validation
 * @property  {boolean} valid
 * @property  {ValidationMessage[]} messages
 */

 /**
  * Validation Messages object
  * @typedef {object} ValidationMessage
  * @property {string} messageKey
  * @property {string} type
  */
