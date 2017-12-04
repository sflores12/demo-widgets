/* eslint no-unused-vars: ["error", { "args": "none" }] */
/**
 * @name default-hooks
 * @type {object}
 *
 * @description
 * Default hooks for widget-bb-income-spending-analysis-category-ng
 */

import {
  DEFAULT_PERIOD_START,
  DEFAULT_PERIOD_END,
  ACCOUNT_CHANGE_DEBOUNCE,
  MS_IN_MIN,
} from './constants';

/**
 * @name default-hooks#processAnalysisCategoryItems
 * @type {function}
 *
 * @description
 * Default hook for income/spending analysis by category collection post processing
 *
 * @param {module:model-bb-income-spending-analysis-category-ng.AnalysisCategoryData} items
 * items to process
 * @returns {module:model-bb-income-spending-analysis-category-ng.AnalysisCategoryData}
 * processed items
 */
const processAnalysisCategoryItems = items => items || [];

/**
 * @name default-hooks#processAnalysisCategorySeries
 * @type {function}
 *
 * @description
 * Default hook for donut chart series object post processing
 *
 * @param {module:model-bb-income-spending-analysis-category-ng.BBSeries} series chart series data
 * @param {module:model-bb-income-spending-analysis-category-ng.AnalysisCategoryData} data
 * original analysis object
 * @returns {object} processed series
 */
const processAnalysisCategorySeries = (series, data) => series || {};

/**
 * @name default-hooks#onAnalysisDataUpdate
 * @type {function}
 *
 * @description
 * Process parameters before they are sent to the model's load method
 *
 * @param {object} params parameters to process
 * @returns {object} processed params
 */
const onAnalysisDataUpdate = params => params;

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
const processSelectedProducts = selectedProduct => selectedProduct;

/**
 * @name default-hooks#processProductsList
 * @type {function}
 *
 * @description
 * Process passed products list before passing it to the view.
 *
 * @param {module:model-bb-product-summary-ng.Product[]} products products to process
 * @returns {module:model-bb-product-summary-ng.Product[]} processed products
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
 * @name default-hooks#onSelectedItemChanged
 * @type {function}
 *
 * @description
 * Sets a selected analysis item
 *
 * @param {any} item selected analysis item
 * @returns {any} selected analysis item
 */
const onSelectedItemChanged = item => item;

/**
 * @name default-hooks#processLoadError
 * @type {function}
 *
 * @description
 * Sets the error for missing parameters in the income/spending analysis request
 *
 * @param {error} error error passed
 * @returns {error} processed error
 */
const processLoadError = error => error;

export default {
  processAnalysisCategoryItems,
  processAnalysisCategorySeries,
  onAnalysisDataUpdate,
  onTurnoversUpdate,
  processTurnoverResponse,
  processTurnoverSeries,
  processSelectedProducts,
  processProductsList,
  defaultPeriodStart,
  defaultPeriodEnd,
  accountSelectionDebounce,
  processLoadError,
  onSelectedItemChanged,
};
