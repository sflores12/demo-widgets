export const MODULE_KEY = 'widget-bbm-product-details-ng';
export const VIEW_CONTROLLER_KEY = 'ViewController';
export const FORM_CONTROLLER_KEY = 'FormController';

/**
 * Pubsub events
 * @type {Object}
 */
export const Event = {
  CXP_ITEM_LOADED: 'cxp.item.loaded',
  BB_ITEM_LOADED: 'bb.item.loaded',

  PRODUCT_ALIAS_EDIT_START: 'bb.event.productDetails.alias.edit.start',
  PRODUCT_ALIAS_EDIT_DONE: 'bb.event.productDetails.alias.edit.done',
  PRODUCT_ALIAS_EDIT_FAILED: 'bb.event.productDetails.alias.edit.failed',
};

/**
 * Intent
 * @type {Object}
 */
export const Intent = {
  SHOW_PRODUCT_DETAILS_VIEW: 'intent.bb.productDetails.view.show',
  SHOW_ALIAS_EDIT_FORM: 'intent.bb.productDetails.alias.edit',
};

/**
 * Storage keys
 * @type {Object}
 */
export const StorageKey = {
  PRODUCT_DETAILS_STATE: 'widget-bbm-product-details-ng:state',
};
