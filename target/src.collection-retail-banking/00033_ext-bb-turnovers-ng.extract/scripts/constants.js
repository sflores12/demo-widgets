/* eslint-disable import/prefer-default-export */
/**
 * @name PERIODS
 * @description
 * Periods definition array
 * @type {Period[]}
 */
export const PERIODS = [
  {
    interval: 'MONTH',
    duration: 6,
    label: 'turnovers.label.duration.month.six',
    default: true,
  },
  {
    interval: 'MONTH',
    duration: 12,
    label: 'turnovers.label.duration.month.twelve',
  },
];

/**
 * @name DATASET_LABELS
 * @description
 * Array of dataset labels
 * @type {string[]}
 */
export const DATASET_LABELS = [
  'turnovers.label.incoming',
  'turnovers.label.outgoing',
];

/**
 * @name BAR_COUNT_BREAK_POINT
 * @description
 * Number of bars from which they should be put closer together
 * @type {number}
 */
export const BAR_COUNT_BREAK_POINT = 10;

/**
 * @name MAX_Y_TICKS
 * @description
 * Maximum number of ticks on Y axis
 * @type {number}
 */
export const MAX_Y_TICKS = 7;

/**
 * @name CSS_SELECTORS
 * @description
 * Object with all selectors needed for correct styling of canvas parts
 * @type {CSS}
 */
export const CSS_SELECTORS = {
  axisBase: '.chart-bar-axis',
  axisX: '.chart-bar-axis-x',
  axisY: '.chart-bar-axis-y',
  arrowOuter: '.chart-tooltip-default.bb-arrow-bottom::before',
  layoutBreak: '.chart-layout-change',
  arrowNear: 'bb-arrow-near',
  arrowFar: 'bb-arrow-far',
  legend: 'chart-bar-legend',
};

/**
 * @typedef {object} CSS
 * @description
 * Object that containes all CSS selectors needed to style canvas parts
 *
 * @property {string} axisBase Axis CSS selector prefix
 * @property {string} axisX X axis CSS selector
 * @property {string} axisY Y axis CSS selector
 * @property {string} arrowOuter Chart's tooltip arrow CSS selector (outer)
 * @property {string} layoutBreak Selector for getting breaking point between
 * small and medium screen
 * @property {string} arrowNear CSS class for tooltip's arrow moved to the front
 * @property {string} arrowFar CSS class for tooltip's arrow moved to the back
 * @property {string} legend CSS class for legend wrapper
 */

/**
 * @typedef {object} Period
 * @description
 * Object used to create list of period options
 *
 * @property {string} interval Interval name
 * @property {number} duration Number of intervals
 * (for creation period of multiple days, weeks, months...)
 * @property {string} label Key used to generate localized title for the option
 * @property {?boolean} default Optional flag to mark default period.
 * If there is no default, first period will be shown
 */
