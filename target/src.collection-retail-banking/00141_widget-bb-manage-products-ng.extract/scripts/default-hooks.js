/**
 * @name Hooks
 *
 * @description
 * Hooks for widget-bb-manage-products-ng
 *
 * @type {object}
 */

/**
 * @name processKinds
 *
 * @description
 * Hook for processing productKinds.
 *
 * @type {function}
 *
 * @param {module:model-bb-product-summary-ng.ProductKind[]} productKinds ProductKinds to process
 * @returns {module:model-bb-product-summary-ng.ProductKind[]} Processed  productKinds
 */
const processKinds = productKinds => productKinds;

export default {
  processKinds,
};
