import { Operator } from '../constants';
import { findFilter } from './filter-helpers';

const ACCOUNT_ID = 'transaction.arrangementId';
const TRANSACTION_TYPE_PARAM = 'transaction.creditDebitIndicator';
const TRANSACTION_TYPE_CREDIT = 'CRDT';
const TRANSACTION_AMOUNT_PARAM = 'transaction.amount';
const DEFAULT_AMOUNT = '0';
const TEMPLATE_ID = 'credit-transaction';

export const CREDIT_TRANSACTION_TYPE = 'newTransaction';

/**
 * @name CreditTransactionFilter
 * @type {object}
 */
export class CreditTransactionFilter {

  constructor(trigger, accounts) {
    let condition = Operator.greaterOrEqual;
    let amount = DEFAULT_AMOUNT;

    // When editing a recipe
    if (trigger) {
      const transactionAmountFilter = findFilter(trigger.filter, TRANSACTION_AMOUNT_PARAM);
      amount = transactionAmountFilter.value.toString();
      condition = transactionAmountFilter.operator;
      const accountIdSelector = trigger.selectors.find(item => item.path === ACCOUNT_ID);

      if (accounts) {
        this.account = accounts.find(acc => acc.id === accountIdSelector.value);
      }
    }

    this.templateId = TEMPLATE_ID;
    this.amount = { value: amount, currency: 'USD' };
    this.condition = condition;
  }

  validate() {
    return Boolean(this.account &&
      this.amount && this.amount.value && this.amount.value > 0 &&
      this.condition);
  }

  /**
   * @name CreditTransactionFilter#changeAccount
   * @description Handles change of selected account. Changes the currency of this filter to
   * the currency of the selected account. Retains the old inputted amount value.
   * @param {object} account the newly selected account
   * @type {function} * @typedef CreditTransactionFilter
   */
  changeAccount(account) {
    this.amount = {
      value: this.amount.value,
      currency: account.currency,
    };
    this.account = account;
  }

  toApiModel() {
    return {
      selectors: [
        {
          path: ACCOUNT_ID,
          value: this.account.id,
        },
      ],
      filter: {
        and: [{
          [Operator.equals]: [{ pathValue: [TRANSACTION_TYPE_PARAM] }, TRANSACTION_TYPE_CREDIT],
        }, {
          [this.condition]: [
            { pathValue: [TRANSACTION_AMOUNT_PARAM] },
            parseFloat(this.amount.value),
          ],
        }],
      },
    };
  }

}
