import { negativeSignKey } from './debit-credit-sign';
import CATEGORY_CLASS_PREFIX, {
  uncategorizedIconClass as DEFAULT_ICON_CLASS,
  Types,
  TimePeriod,
} from './constants';

const helpers = (context) => {
  const i18nFilter = context.$filter('i18n');

  return {
    /**
     * @description
     * Transaction types constant
     *
     * @public
     * @name transactionTypes
     * @type {Types}
     */
    transactionTypes: Types,

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

    /**
     * @description
     * Checkes if actual pagination type matches the one, defined in properties
     *
     * @public
     * @name isPaginationTypeMatch
     * @type {function}
     * @param {function} $ctrl      Current controller
     * @param {string} type         Description of pagination type (pagination, load-more)
     *
     * @returns {boolean}
     */
    isPaginationTypeMatch: ($ctrl, type) =>
      $ctrl.state.pageParams.paginationType === type,

    /**
     * @description
     * Checks if conditions are met to show the no result icon and message
     *
     * @name showNoResults
     * @type {function}
     * @param {function} $ctrl      Current controller
     *
     * @returns {boolean}
     */
    showNoResults: $ctrl =>
      $ctrl.searchTransactions
      && !Object.keys($ctrl.searchTransactions).length
      && $ctrl.searching
      && !$ctrl.loading,

    /**
     * @description
     * Converts transaction category name into category CSS icon class
     *
     * @name getCategoryIconClass
     * @type {function}
     * @param {string} transactionCategory Transaction category
     * @param {?boolean} withPrefix Include class prefix
     * @returns {string}
     */
    getCategoryIconClass: (transactionCategory, withPrefix = true) =>
      `${withPrefix ? CATEGORY_CLASS_PREFIX : ''}${transactionCategory.toLowerCase()
        .replace(/\W/g, '-').replace(/-{2,}/g, '-') || DEFAULT_ICON_CLASS}`,

    /**
     * @description
     * Returns either label like now, today or yesterday or the actual date
     *
     * @name dateLabel
     * @type {function}
     * @param {string} label date
     *
     * @returns {string}
     */
    dateLabel: (label) => i18nFilter(TimePeriod[label]) || label,
  };
};

export default helpers;
