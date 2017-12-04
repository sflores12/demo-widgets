/**
 * @module ext-bbm-transactions-list-ng
 *
 * @description
 * Mobile extension for the transactions list widget.
 *
 * @example
 * <!-- transactions widget model.xml -->
 * <property name="extension" viewHint="text-input,admin">
 *  <value type="string">ext-bbm-transactions-list-ng</value>
 * </property>
 */
import uiBbFormatAmountKey from 'ui-bb-format-amount';
import uiBbmScrollNgKey from 'ui-bbm-scroll-ng';
import uiBbI18nNgKey from 'ui-bb-i18n-ng';

import debitCreditSign from './debit-credit-sign';
import processProductSelected from './product-kind-view';

import extHelpers from './helpers';

export const helpers = extHelpers;

export const dependencyKeys = [
  uiBbFormatAmountKey,
  uiBbI18nNgKey,
  uiBbmScrollNgKey,
];

/**
 * @name groupTransactions
 *
 * @description
 * Groups transactions by date
 * We assume that scheduledDate is always date only, e.g. "2016-10-14"
 * Otherwise this method should be improved
 *
 * @type {function}
 * @param {array} transactions
 * @returns {array} groups - Transactions grouped by date
 * @inner
 */
function groupTransactions(transactions) {
  const groups = [];

  transactions.forEach(transaction => {
    const date = transaction.bookingDate;
    let group = groups.find(currGroup => currGroup.date === date);

    if (!group) {
      group = {
        date,
        transactions: [],
      };
      groups.push(group);
    }

    group.transactions.push(transaction);
  });

  return groups;
}

/**
 * @name Hooks
 * @type {object}
 *
 * @description
 * Hooks for widget-bb-transactions-ng
 */
export const hooks = {
  /**
   * @name Hooks#processProductSelected
   *
   * @description
   * Hook to process the selected product.
   *
   * @type {function}
   * @param {object} product The original product data from the API
   * @returns {ProductView} Processed product
   */
  processProductSelected,

  /**
   * @name Hooks#processTransactions
   * @description
   * Hook to process the list of transactions.
   *
   * @type {function}
   * @param {array<object>} transactions The original transactions from the API
   * @returns {array<object>} The list of processed transactions
   */
  processTransactions: (transactions) => (
    groupTransactions(transactions.map(debitCreditSign))
  ),
};
