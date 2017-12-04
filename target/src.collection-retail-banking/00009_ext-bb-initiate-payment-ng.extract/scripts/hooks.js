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
 * @returns {Promise.<any[]>} Promise that retrieves array of accounts.
 */
export const processAccountsTo = (debitAccount, getCreditAccounts, getExternalAccounts) =>
  getCreditAccounts(debitAccount.id || null)
  .then(accounts => {
    if (!debitAccount.id || debitAccount.externalTransferAllowed) {
      return getExternalAccounts()
        .then(contacts => accounts.concat(contacts));
    }
    return accounts;
  });

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
export const getRecurringTransactionDay = schedule => {
  switch (schedule.transferFrequency.value) {
    case 'YEARLY':
      return schedule.startDate.getMonth() + 1;
    case 'MONTHLY':
      return schedule.startDate.getDate();
    default:
      return schedule.startDate.getDay() + 1;
  }
};
