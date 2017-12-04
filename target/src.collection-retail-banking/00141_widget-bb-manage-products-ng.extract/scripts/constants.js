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
 * @name DEFAULT_DISMISS_TIME
 *
 * @description
 * Default notification dismiss time.
 *
 * @type {number}
 */
export const DEFAULT_DISMISS_TIME = 3;

/**
 * @name UPDATED_PRODUCT_SUCCESS_KEY
 *
 * @description
 * Key string for notification success message
 *
 * @type {string}
 */
export const UPDATED_PRODUCT_SUCCESS_KEY = 'product.notification.updated.success';

/**
 * @name UPDATED_PRODUCT_ERROR_KEY
 *
 * @description
 * Key string for notification error message
 *
 * @type {string}
 */
export const UPDATED_PRODUCT_ERROR_KEY = 'product.notification.updated.error';

/**
 * Widget intent enum
 * @type {object}
 */
export const Intent = {
  VIEW_PRODUCT_SUMMARY: 'intent.bb.product.summary.view',
  VIEW_MANAGE_PRODUCTS: 'intent.bb.manage.products.view',
};
