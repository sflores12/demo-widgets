// There is only 1 hook, otherwise there would be more named exports
/* eslint-disable import/prefer-default-export */

/**
 * @name Hooks
 * @type {object}
 *
 * @description
 * Hooks for widget-bb-product-summary-ng
 */

/**
 * @name Hooks#processKinds
 * @type {function}
 *
 * @description
 * Hook for processing product kinds after initialization.
 * Assigned to [$ctrl.productKinds]{@link ProductSummaryController#productKinds}
 *
 * @param kinds {ProductKind[]} ProductKinds to process
 * @returns {any} Depends on hook implementation.
 */
export function processKinds(kinds) {
  return kinds;
}

/**
 * @name Hooks#processProductSelected
 * @type {function}
 *
 * @description
 * Hook for processing selected product after selection update
 * Assigned to [$ctrl.productSelected]{@link ProductSummaryController#productSelected}
 *
 * @param product {Product} Product to process
 * @returns {any} Depends on hook implementation.
 */
export function processProductSelected(product) {
  return product;
}

/**
 * @name Hooks#processProductsSelected
 * @type {function}
 *
 * @description
 * Hook for processing selected array of products after selection update
 * Assigned to [$ctrl.productsSelected]{@link ProductSummaryController#productsSelected}
 *
 * @param products {Product[]} Products to process
 * @returns {any} Depends on hook implementation.
 */
export function processProductsSelected(products) {
  return products;
}

/**
 * @name Hooks#processExtendedProduct
 * @type {function}
 *
 * @description
 * Hook for processing extended product after selection update
 * Assigned to [$ctrl.extendedProduct]{@link ProductSummaryController#extendedProduct}
 *
 * @param product {Product} Product to process
 * @returns {any} Depends on hook implementation.
 */
export function processExtendedProduct(product) {
  return product;
}
