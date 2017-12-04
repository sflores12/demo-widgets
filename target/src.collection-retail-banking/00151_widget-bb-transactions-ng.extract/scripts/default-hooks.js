/**
 * @name defaultHooks
 * @type {object}
 *
 * @description
 * Default hooks for widget-bb-transactions-ng
 */

/**
 * @name defaultHooks#processProductSelected
 * @type {function}
 *
 * @description
 * Default hook for selected product processing
 *
 * @param {module:model-bb-transactions.Product} productSelected Product to process
 * @returns {Object} Processed product
 */
export function processProductSelected(productSelected) {
  return productSelected;
}

/**
 * @name defaultHooks#processRequestParams
 * @type {function}
 *
 * @description
 * Default hook for transactions query params processing/extending
 *
 * @param {object} params to process
 * @param {?number} params.amountGreaterThan Amount greater than
 * @param {?number} params.amountLessThan Amount less than
 * @param {?string} params.bookingDateGreaterThan Booking date greater than
 * @param {?string} params.bookingDateLessThan Booking date less than
 * @param {?string} params.productId The product id
 * @param {?string} params.type Type category
 * @param {?string} params.orderBy The key to order by
 * @param {?string} params.direction The direction to order by
 * @param {?number} params.from The page to list from
 * @param {?number} params.size The number of results per page
 * @param {?string} params.query The search term used to search for transactions
 * @returns {Object} Processed params
 */
export function processRequestParams(params) {
  return params;
}

/**
 * @name defaultHooks#processTransactions
 * @type {function}
 *
 * @description
 * Default hook for transactions list post processing
 *
 * @param {module:data-bb-transactions-ng.TransactionsData.TransactionItemGet[]} transactions
 * @returns {Array} Processed transactions
 */
export function processTransactions(transactions) {
  return transactions;
}

/**
 * @name defaultHooks#defaultPaginationType
 * @type {function}
 * @description
 * defaultPaginationType default hook for setting load-more or pagination as default
 *
 * @returns {?string}
 */
export const defaultPaginationType = () => null;

/**
 * @name defaultHooks#defaultSortableColumn
 *
 * @description
 * defaultSortableColumn default hook
 *
 * @type {function}
 * @returns {?string}
 */
export const defaultSortableColumn = () => null;

/**
 * @name defaultHooks#defaultSortableDirection
 *
 * @description
 * defaultSortableDirection default hook
 *
 * @type {function}
 * @returns {?string}
 */
export const defaultSortableDirection = () => null;

/**
 * @name defaultHooks#isDefaultProductFirst
 *
 * @description
 * isDefaultProductFirst default hook
 *
 * @type {function}
 * @returns {boolean}
 */
export const isDefaultProductFirst = () => true;

/**
 * @name defaultHooks#extendLoadMoreParams
 * @type {function}
 *
 * @description
 * Default hook for extending loadMore params
 *
 * @param {object} params to extend
 * @param {?number} params.amountGreaterThan Amount greater than
 * @param {?number} params.amountLessThan Amount less than
 * @param {?string} params.bookingDateGreaterThan Booking date greater than
 * @param {?string} params.bookingDateLessThan Booking date less than
 * @param {?string} params.productId The product id
 * @param {?string} params.type Type category
 * @returns {object} Processed params
 */
export function extendLoadMoreParams(params) {
  return params;
}

/**
 * @name defaultHooks#isTransactionsShown
 *
 * @description
 * Default hook for checking if the transactions should be visible
 *
 * @type {function}
 * @returns {boolean}
 */
export const isTransactionsShown = () => true;
