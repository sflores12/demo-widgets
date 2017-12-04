import processKinds, { productKindView } from './product-kind-view';

/**
 * @name Hooks
 * @type {object}
 *
 * @description
 * Hooks for widget-bb-product-summary-ng
 */
export default {
  /**
   * @name processKinds
   * @description
   * Hook for process products
   *
   * Make flat list
   *
   * Map to view model
   *
   * @type {function}
   * @param {array} product The source Product from the widget controller
   * @returns {array<ProductView>}
   */
  processKinds,
  /**
   * @name processProductSelected
   * @type {function}
   *
   * @description
   * Hook for processing selected products after selection update
   * Prepares the fields of the selected products into a form ready for display to the User
   *
   * @param {object} product Product to process
   * @returns {object}
   */
  processProductsSelected: (products) => products.map(productKindView),
};
