/* eslint no-unused-vars: ["error", { "args": "none" }] */
/**
 * @name default-hooks
 * @type {object}
 *
 * @description
 * Default hooks for widget-bb-spending-ng
 */

import {
  DEFAULT_PERIOD_START,
  DEFAULT_PERIOD_END,
  MS_IN_MIN,
} from './constants';

/**
 * @name default-hooks#processSpendingItems
 * @type {function}
 *
 * @description
 * Default hook for spending collection post processing
 *
 * @param {module:model-bb-spending-ng.Spending} items to process
 * @returns {module:model-bb-spending-ng.Spending} total spendings by category
 */
const processSpendingItems = items => items || [];

/**
 * @name default-hooks#processSpendingSeries
 * @type {function}
 *
 * @description
 * Default hook for spending chart series object post processing
 *
 * @param {module:model-bb-spending-ng.BBSeries} series chart series data
 * @param {module:model-bb-spending-ng.Spending} data original spending object
 * @returns {object} processed series
 */
const processSpendingSeries = (series, data) => series || {};

/**
 * @name default-hooks#onSpendingUpdate
 * @type {function}
 *
 * @description
 * Process parameters before they are sent to the model's load method
 *
 * @param {object} params to process
 * @returns {object} processed params
 */
const onSpendingUpdate = params => params;

/**
 * @name default-hooks#processSelectedProduct
 * @type {function}
 *
 * @description
 * Default hook to process product then it's selected
 * @param {module:model-bb-product-summary-ng.Product} product which is selected
 * @returns {module:model-bb-product-summary-ng.Product} product after processing
 */
const processSelectedProduct = selectedProduct => selectedProduct;

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
 * @name default-hooks#defaultPeriodStart
 * @type {function}
 *
 * @description
 * Sets period start property on init
 *
 * @returns {string} Start period string in format yyyy-mm-dd
 */
const defaultPeriodStart = () =>
  new Date(DEFAULT_PERIOD_START.getTime() - (DEFAULT_PERIOD_START.getTimezoneOffset() * MS_IN_MIN))
    .toISOString()
    .slice(0, 10);

/**
 * @name default-hooks#defaultPeriodEnd
 * @type {function}
 *
 * @description
 * Sets period end property on init
 *
 * @returns {string} End period string in format yyyy-mm-dd
 */
const defaultPeriodEnd = () =>
  new Date(DEFAULT_PERIOD_END.getTime() - (DEFAULT_PERIOD_END.getTimezoneOffset() * MS_IN_MIN))
    .toISOString()
    .slice(0, 10);

/**
 * @name default-hooks#onSelectedItemChanged
 * @type {function}
 *
 * @description
 * Sets a selected spending item
 *
 * @param {any} item selected spending item
 * @returns {any} selected spending item
 */
const onSelectedItemChanged = (item) => item;
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
  processSpendingItems,
  processSpendingSeries,
  onSpendingUpdate,
  processSelectedProduct,
  processProductsList,
  defaultPeriodStart,
  defaultPeriodEnd,
  processLoadError,
  onSelectedItemChanged,
};
