/**
 * Available intervals
 * @name INTERVAL
 * @type {Interval}
 */
export const INTERVAL = {
  DAY: 'DAY',
  WEEK: 'WEEK',
  MONTH: 'MONTH',
  YEAR: 'YEAR',
};

/**
 * Default load interval
 * @name DEFAULT_INTERVAL
 * @type {string}
 */
export const DEFAULT_INTERVAL = INTERVAL.MONTH;

/**
 * Default load duration
 * @name DEFAULT_DURATION
 * @type {number}
 */
export const DEFAULT_DURATION = 6;

/**
 * Default start day for monthly interval
 * @name DEFAULT_START_DAY
 * @type {number}
 */
export const DEFAULT_START_DAY = 1;

/**
 * Delay for account selection change callback execution
 * @name ACCOUNT_CHANGE_DEBOUNCE
 * @type {number}
 */
export const ACCOUNT_CHANGE_DEBOUNCE = 0;

/**
 * Interval object
 * @typedef {object} Interval
 * @property {string} DAY Daily interval
 * @property {string} WEEK Weekly interval
 * @property {string} MONTH Monthly interval
 * @property {string} YEAR Yearly interval
 */
