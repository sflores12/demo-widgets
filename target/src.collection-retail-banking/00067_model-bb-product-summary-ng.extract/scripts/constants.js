/**
 * Widget preferences enum
 * @type {object}
 */
export const Preference = {
  ACCOUNTS_PAGE_SIZE: 'bb.accountsOverview.pageSize',
  ACCOUNTS_MAX_NAV_PAGES: 'bb.accountsOverview.maxNavPages',
  ACCOUNTS_PAGINATION_TYPE: 'bb.accountsOverview.paginationType',
  ACCOUNTS_SORTABLE_COLUMN: 'bb.accountsOverview.defaultSortableColumn',
  ACCOUNTS_DISSMISS_MESSAGE_TIME: 'bb.accountsOverview.dismissMessageTime',
  PRODUCT_KIND_NAME: 'bb.accountsOverview.productKindName',
};

/**
 * bbStorage keys enum
 * @type {object}
 */
export const BbStorageKeys = {
  PRODUCT_SELECTED: 'bb.product.selected',
  PRODUCTS_SELECTED: 'bb.products.selected',
  PRODUCT_SUMMARY: 'bb.product.summary.data',
};

/**
 * Supported account types
 * @type {array<string>}
 */
export const SupportedProductKinds = [
  'Aggregated Balance',
  'Current Account',
  'Savings Account',
  'Term Deposit',
  'Loan',
  'Credit Card',
  'Debit Card',
  'Investment Account',
];
