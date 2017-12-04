import { E_AUTH, E_CONNECTIVITY, E_USER, E_UNEXPECTED } from 'lib-bb-model-errors';

/**
 * @name errorMessages
 *
 * @description
 * Error messages keys for connectivity, user, auth and unexpected errors.
 *
 * @type {object}
 */
export const errorMessages = {
  [E_AUTH]: 'model.error.auth',
  [E_CONNECTIVITY]: 'model.error.connectivity',
  [E_USER]: 'model.error.user',
  [E_UNEXPECTED]: 'model.error.unexpected',
};

/**
 * Widget intent enum
 * @type {object}
 */
export const Intent = {
  VIEW_PRODUCT_SUMMARY: 'intent.bb.product.summary.view',
  VIEW_MANAGE_PRODUCTS: 'intent.bb.manage.products.view',
};
