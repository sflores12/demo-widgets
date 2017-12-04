import { E_AUTH, E_CONNECTIVITY, E_USER, E_UNEXPECTED } from 'lib-bb-model-errors';

const errorMessages = {
  [E_AUTH]: 'model.error.auth',
  [E_CONNECTIVITY]: 'model.error.connectivity',
  [E_USER]: 'model.error.user',
  [E_UNEXPECTED]: 'model.error.unexpected',
};

export const uiError = error => ({
  message: errorMessages[error.code],
});

/**
 * @description
 * Helper function to iterate transaction collection and check for day in bookingDate field
 *
 * @name TransactionsController#isSameDay
 * @type {function}
 * @inner
 * @param {string} date String representing the target day
 * @returns {boolean}
 */
const isSameDay = date => transaction => transaction.bookingDate === date;

/**
 * @description
 * Helper function to check if there are transactions for a specific date
 *
 * @name TransactionsController#hasTodayTransactions
 * @type {function}
 * @param {object[]} transactions Array of transaction items
 * @param {string} date String representing the target day
 * @returns {boolean}
 */
export const hasTodayTransactions = (transactions, date) =>
  transactions.some(isSameDay(date));
