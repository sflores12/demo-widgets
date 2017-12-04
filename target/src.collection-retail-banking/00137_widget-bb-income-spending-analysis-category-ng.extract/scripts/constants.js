/**
 * @name CURRENT_DATE_OBJECT
 * @description
 * Current date
 * Cache the date object to negate possible miss synchronization
 * @type {object}
 * @inner
 */
const CURRENT_DATE_OBJECT = new Date();

/**
 * @name CURRENT_YEAR
 * @description
 * Current year
 * @type {number}
 * @inner
 */
const CURRENT_YEAR = CURRENT_DATE_OBJECT.getFullYear();

/**
 * @name CURRENT_MONTH
 * @description
 * Current month
 * @type {number}
 * @inner
 */
const CURRENT_MONTH = CURRENT_DATE_OBJECT.getMonth();

/**
 * @name ANALYSIS_INDICATOR_PREF
 * @description
 * Name of analysis indicator preference in the model
 * @type {string}
 */
export const ANALYSIS_INDICATOR_PREF = 'analysisIndicator';

/**
 * @name SPENDING_ANALYSIS_INDICATOR
 * @description
 * Analysis indicator value for spending analysis
 * @type {string}
 */
export const SPENDING_ANALYSIS_INDICATOR = 'DBIT';

/**
 * @name MS_IN_MIN
 * @description
 * Amount of milliseconds in a minute
 * @type {number}
 */
export const MS_IN_MIN = 60000;

/**
 * @name DEFAULT_PERIOD_START
 * @description
 * First day in the current month
 * @type {number}
 */
export const DEFAULT_PERIOD_START = new Date(CURRENT_YEAR, CURRENT_MONTH, 1);

/**
 * @name DEFAULT_PERIOD_END
 * @description
 * Current day
 * @type {number}
 */
export const DEFAULT_PERIOD_END = new Date();

/**
 * Delay for account selection change callback execution
 * @name ACCOUNT_CHANGE_DEBOUNCE
 * @type {number}
 */
export const ACCOUNT_CHANGE_DEBOUNCE = 0;

/**
 * @name Intents
 * @description
 * An object with all the intents names
 * @type {Object}
 */
export const Intent = {
  // view.account.category.transactions key is deprecated
  // TODO: remove in 2.10.1
  SELECT_ANALYSIS_ITEM_DEPRECATED: 'view.account.category.transactions',
  SELECT_ANALYSIS_ITEM: {
    DBIT: 'intent.rb.transactions.dbit.list.view',
    CRDT: 'intent.rb.transactions.crdt.list.view',
  },
};

export const TURNOVERS_DATA_KEY = {
  DBIT: 'debitAmount',
  CRDT: 'creditAmount',
};
