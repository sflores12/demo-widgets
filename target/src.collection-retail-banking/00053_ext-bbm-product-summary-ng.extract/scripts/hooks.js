/* eslint-disable import/prefer-default-export */
import productKindView from './product-kind-view';

/**
 * @name Hooks
 * @type {object}
 *
 * @description
 * Hooks for widget-bb-product-summary-ng
 */

/**
 * @name processKinds
 * @description
 * Hook for processing product kinds after initialization.
 *
 * @type {function}
 * @param kinds {ProductKind[]} ProductKinds to process
 * @returns {ProductKindView[]}
 */
export const processKinds = (kinds) => kinds.map(productKindView);
