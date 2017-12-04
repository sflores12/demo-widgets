/* eslint no-unused-vars: ["error", { "args": "none" }] */
/**
 * @name Default Hooks
 * @type {object}
 *
 * @description
 * Default hooks for widget-bb-turnovers-ng
 */

import {
  DEFAULT_DURATION,
  DEFAULT_INTERVAL,
  DEFAULT_START_DAY,
  ACCOUNT_CHANGE_DEBOUNCE,
} from './constants';

/**
 * @name default-hooks#processTurnoverResponse
 * @type {function}
 *
 * @description
 * Default hook for turnovers response object post processing
 *
 * @param {module:model-bb-turnovers-ng.Turnover} data turnover object to process
 * @returns {module:model-bb-turnovers-ng.Turnover} turnover response object
 */
const processTurnoverResponse = data => data;

/**
 * @name default-hooks#processTurnoverSeries
 * @type {function}
 *
 * @description
 * Default hook for turnovers chart series object post processing
 *
 * @param {module:model-bb-turnovers-ng.BBSeries} series chart series data
 * @param {module:model-bb-turnovers-ng.Turnover} data original turnover object
 * @returns {object} processed series
 */
const processTurnoverSeries = (series, data) => series;

/**
 * @name default-hooks#processSelectedProducts
 * @type {function}
 *
 * @description
 * Default hook to process products when selection is changed
 * @param {module:model-bb-product-summary-ng.Product[]} product which is selected
 * @returns {module:model-bb-product-summary-ng.Product[]} product after processing
 */
const processSelectedProducts = selectedProducts => selectedProducts;

/**
 * @name default-hooks#processProductsList
 * @type {function}
 *
 * @description
 * Process passed products list before passing it to the view.
 *
 * @param {module:model-bb-product-summary-ng.ProductKinds} products to process
 * @returns {module:model-bb-product-summary-ng.ProductKinds} processed products
 */
const processProductsList = products => products;

/**
 * @name default-hooks#onTurnoversUpdate
 * @type {function}
 *
 * @description
 * Process parameters before they are sent to the model's load method
 *
 * @param {object} params to process
 * @returns {object} processed params
 */
const onTurnoversUpdate = params => params;

/**
 * @name default-hooks#defaultPeriodStart
 * @type {function}
 *
 * @description
 * Sets period start property on init
 *
 * @returns {string} Start period string in format yyyy-mm-dd
 */
const defaultPeriodStart = () => {
  const date = new Date();
  date.setMonth(date.getMonth() - DEFAULT_DURATION);
  return date.toISOString().slice(0, 10);
};

/**
 * @name default-hooks#defaultPeriodEnd
 * @type {function}
 *
 * @description
 * Sets period end property on init
 *
 * @returns {string} End period string in format yyyy-mm-dd
 */
const defaultPeriodEnd = () => new Date().toISOString().slice(0, 10);

/**
 * @name default-hooks#defaultInterval
 * @type {function}
 *
 * @description
 * Sets interval property on init
 *
 * @param {Interval} interval Available intervals
 * @returns {string} One of the available intervals
 */
const defaultInterval = (interval) => DEFAULT_INTERVAL;

/**
 * @name default-hooks#defaultStartDay
 * @type {function}
 *
 * @description
 * Sets monthly interval start day on init
 *
 * @returns {string} One of the available intervals
 */
const defaultStartDay = () => DEFAULT_START_DAY;

/**
 * @name default-hooks#accountSelectionDebounce
 * @type {function}
 *
 * @description
 * Used when multiple account selection is active. Defines account selection change
 * silence interval after which widget should send a new request and refresh
 *
 * @returns {number} Time in ms
 */
const accountSelectionDebounce = () => ACCOUNT_CHANGE_DEBOUNCE;

/**
 * @name default-hooks#processLoadError
 * @type {function}
 *
 * @description
 * Sets the error for missing parameters in the turnovers request
 *
 * @param {error} The error passed
 * @returns {error} The actual error
 */
const processLoadError = (error) => error;

export default {
  processTurnoverResponse,
  processTurnoverSeries,
  processProductsList,
  processSelectedProducts,
  onTurnoversUpdate,
  defaultPeriodStart,
  defaultPeriodEnd,
  defaultInterval,
  defaultStartDay,
  accountSelectionDebounce,
  processLoadError,
};
