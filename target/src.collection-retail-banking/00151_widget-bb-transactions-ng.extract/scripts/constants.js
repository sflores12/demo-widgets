/**
 * Widget events enum
 * @type {object}
 */
const Event = {
  TRANSACTION_SELECTED: 'bb.event.transaction.selected',
  PRODUCT_SELECTED: 'bb.event.product.selected',
  SEARCH: 'bb.event.transactions.search',

  CXP_ITEM_LOADED: 'cxp.item.loaded',
  BB_ITEM_LOADED: 'bb.item.loaded',
};

/**
 * Widget actions enum
 * @type {object}
 */
const Action = {};

/**
 * Widget messages enum
 * @type {object}
 */
export const Message = Object.assign({}, Action, Event);

/**
 * Widget static text
 * @type {object}
 */
export const Text = {};

/**
 * Widget intent enum
 * @type {object}
 */
export const Intent = {
  // view.account.category.transactions key is deprecated
  // Remove in 2.10.1
  VIEW_CATEGORY_TRANSACTIONS: 'view.account.category.transactions',
  VIEW_CATEGORY_DBIT_TRANSACTIONS: 'intent.rb.transactions.dbit.list.view',
  VIEW_CATEGORY_CRDT_TRANSACTIONS: 'intent.rb.transactions.crdt.list.view',
  SHOW_PRODUCT_DETAILS: 'intent.bb.productDetails.view.show',
  CHANGE_TRANSACTION_CATEGORY: 'intent.rb.categories.management.list.view',
};
