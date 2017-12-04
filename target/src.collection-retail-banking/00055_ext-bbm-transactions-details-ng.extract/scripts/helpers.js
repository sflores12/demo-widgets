import { negativeSignKey } from './debit-credit-sign';

export default () => ({
  /**
   * @description
   * Based on credit/debit indicator, put right sign on the transaction amount
   *
   * @name getSignedAmount
   * @type {function}
   * @param {object} transaction Transaction object
   * @returns {number} Signed amount
   */
  getSignedAmount: (transaction) =>
    transaction.amount * (transaction.creditDebitIndicator === negativeSignKey ? -1 : 1),
});
