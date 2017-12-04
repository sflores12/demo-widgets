/* eslint-disable import/prefer-default-export */
import debitCreditSign from './debit-credit-sign';
import setType from './set-type';

/**
 * @name processTransactions
 * @description
 * Hook for process transactions
 *
 * Add debitCreditSign property to transaction
 *
 * Add customType field to transaction
 *
 * Sort transactions collection based on valueDate (descending)
 *
 * @type {function}
 * @param {Object[]} transactions The source transactions from the widget controller
 * @returns {Object} transactions grouped by date and transactions array
 */
export const processTransactions = (transactions) => {
  const transactionsArray = transactions.map(debitCreditSign).map(setType);
  const transactionsGroupedByDate = transactionsArray.reduce((groupedByDate, transaction) => {
    const datesObject = groupedByDate;
    // get only date part
    const bookingDateObj = new Date(transaction.bookingDate);
    const date = bookingDateObj.toISOString().slice(0, 10);

    if (datesObject[date]) {
      let clearToAdd = true;

      datesObject[date].forEach((element) => {
        if (element.id === transaction.id) {
          clearToAdd = false;
        }
      });

      if (clearToAdd) {
        datesObject[date].push(transaction);
      }
    } else {
      datesObject[date] = [transaction];
    }

    return datesObject;
  }, {});

  return {
    transactionsArray,
    transactionsGroupedByDate,
  };
};

/**
 * @name defaultSortableColumn
 *
 * @description
 * Return the key of the default sort column
 *
 * @type {function}
 * @returns {string|null} Returns column key
 */
export const defaultSortableColumn = () => 'bookingDate';

/**
 * @name defaultSortableDirection
 *
 * @description
 * Return the sorting direction of the default sort column
 *
 * @type {function}
 * @returns {string|null} Returns sorting direction
 */
export const defaultSortableDirection = () => 'DESC';
