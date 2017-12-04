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
     * Table headers
     *
     * @public
     * @name headers
     * @type {Object}
     */
    headers: [
      {
        label: 'details.label.date',
        class: 'col-sm-1',
        sortable: {
          key: 'bookingDate',
          direction: 'DESC',
        },
      },
      {
        label: 'details.label.category',
        class: 'col-sm-1 text-center',
        sortable: {
          key: 'category',
          direction: 'ASC',
        },
      },
      {
        label: 'details.label.description',
        class: 'col-sm-6',
        sortable: {
          key: 'description',
          direction: 'ASC',
        },
      },
      {
        label: 'details.label.creditAmount',
        class: 'col-sm-2 text-right',
        sortable: {
          key: 'amount',
          direction: 'ASC',
        },
      },
      {
        label: 'details.label.debitAmount',
        class: 'col-sm-2 text-right',
        sortable: {
          key: 'amount',
          direction: 'ASC',
        },
      },
    ],

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
     * Checks sortable header matches current sort state
     *
     * @public
     * @name isSortableActive
     * @type {function}
     * @param {object} sortable Sortable header item
     * @param {object} sort Sort state object of the controller
     *
     * @returns {boolean}
     */
    isSortableActive: (sortable, sort) =>
      sortable.key === sort.orderBy,

    /**
     * @description
     * Checks if actual pagination type matches the one, defined in properties
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
