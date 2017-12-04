/* eslint-disable import/prefer-default-export */
import productDetailsView from './product-details-view';

/**
 * @name Hooks
 * @type {object}
 *
 * @description
 * Hooks for widget-bb-product-details-ng
 */

/**
 * @name processProductDetails
 * @description
 * Hook for processing product details after initialization.
 *
 * @type {function}
 * @param productDetails {ProductDetails} ProductDetails to process
 * @returns {ProductDetailsView}
 */
export const processProductDetails = (productDetails) => productDetailsView(productDetails);
