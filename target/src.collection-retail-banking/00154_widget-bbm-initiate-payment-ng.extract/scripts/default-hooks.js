/**
 * @description
 * Hooks for widget-bbm-initiate-payment-ng.
 *
 * @name Hooks
 * @type {object}
 */

/**
 * @description
 * Processes the list of debit accounts.
 *
 * @name Hooks#processDebitAccounts
 * @type {function}
 * @param {Array.<AccountView>} debitAccounts Original list of debit accounts from the model.
 * @returns {Array.<AccountView>} Processed list of debit accounts.
 */
export const processDebitAccounts = debitAccounts => debitAccounts;

/**
 * @description
 * Processes the list of beneficiaries. By default it merges credit accounts and
 * contacts into a single list of beneficiaries.
 *
 * @name Hooks#processBeneficiaries
 * @type {function}
 *
 * @param {Array.<AccountView>} creditAccounts Original list of credit accounts from the model.
 * @param {Array.<AccountView>} contacts Original list of contacts from the model.
 * @returns {Array.<AccountView>} Processed list of beneficiaries.
 */
export const processBeneficiaries = (creditAccounts, contacts) => ([
  ...creditAccounts,
  ...contacts,
]);

/**
 * @description
 * Processes the initial payment object.
 *
 * The widget uses this hook on start when the initial payment object is created.
 * Also the widget uses this when it resets the payment and starts another one.
 *
 * Use it to add custom properties to the payment object.
 *
 * @name Hooks#processInitialPaymentState
 * @type {function}
 *
 * @param {Payment} payment Payment state, that is supposed to be processed
 * @returns {Payment}
 */
export const processInitialPaymentState = payment => payment;

/**
 * @description
 * Processes the payload of a the payment.
 *
 * @name Hooks#processPaymentPayload
 * @type {function}
 *
 * @param {PaymentPayload} paymentPayload Payment payload, that is supposed to be processed
 * @returns {Payment}
 */
export const processPaymentPayload = paymentPayload => paymentPayload;
