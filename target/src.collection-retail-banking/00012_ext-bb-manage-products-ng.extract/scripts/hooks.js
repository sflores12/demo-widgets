/**
 * @name Hooks
 * @type {object}
 *
 * @description
 * Hooks for widget-bb-manage-products-ng
 */

/**
 * @name processKinds
 *
 * @description
 * Hook that processing all productKinds to get
 * a singe array containing all products from all productKinds
 *
 * @type {function}
 * @param {module:model-bb-product-summary-ng.ProductKind[]} productKinds ProductKinds to process
 * @returns {array<object>} Array of products from all ProductKinds
 */
export const processKinds = productKinds =>
  productKinds
    .reduce((memo, item) => {
      const products = item.products.map(p => Object.assign(p, { kindName: item.name }));
      return [...memo, ...products];
    },
    []);

export default {
  processKinds,
};
