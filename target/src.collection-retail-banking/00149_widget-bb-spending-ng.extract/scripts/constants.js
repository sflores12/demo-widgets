/**
 * Current date
 * Cache the date object to negate possible miss synchronization
 * @type {object}
 */

const CURRENT_DATE_OBJECT = new Date();

/**
 * Current year
 * @type {number}
 */
const CURRENT_YEAR = CURRENT_DATE_OBJECT.getFullYear();

/**
 * Current month
 * @type {number}
 */
const CURRENT_MONTH = CURRENT_DATE_OBJECT.getMonth();

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
 * Last day in the current month
 * @type {number}
 */
export const DEFAULT_PERIOD_END = new Date(CURRENT_YEAR, CURRENT_MONTH + 1, 0);

/**
 * @name Intents
 * @description
 * An object with all the intents names
 * @type {Object}
 */
export const Intent = {
  SELECT_SPENDING_ITEM: 'view.account.category.transactions',
};
