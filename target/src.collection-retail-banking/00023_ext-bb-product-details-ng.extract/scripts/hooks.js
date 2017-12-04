/* eslint-disable import/prefer-default-export */
import productKindView from './product-kind-view';

/**
 * @name processExtendedProduct
 * @description
 * Hook for processing product kinds in an abstracted format
 * ready to be displayed to the user.
 *
 * @type {function}
 * @param product {object} product to process
 * @returns {object}
 */
export const processExtendedProduct = (product) => productKindView(product);
