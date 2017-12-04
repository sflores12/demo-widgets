/**
 * @description
 * Identifier and name for external account product kind
 *
 * @name ExternalType
 * @type {object}
 */
export const ExternalType = {
  IDENTIFIER: 'ExternalAccounts',
  NAME: 'Contacts',
};

/**
 * @description
 * Request params to get privilege entitlements
 *
 * @type {object}
 */
export const AccountPrivilegeParams = {
  debit: {
    businessFunction: 'SEPA CT',
    privilege: 'create',
    resourceName: 'Payments',
    debitAccount: true,
  },
};

/**
 * bbStorage keys enum
 * @type {object}
 */
export const BbStorageKeys = {
  PRODUCT_SELECTED: 'bb.product.selected',
};

/**
 * Widget preferences enum
 * @type {object}
 */
export const Preference = {
  STANDING_ORDERS_PAGE_SIZE: 'pageSize',
  STANDING_ORDERS_MAX_NAV_PAGES: 'maxNavPages',
  STANDING_ORDERS_PAGINATION_TYPE: 'paginationType',
  STANDING_ORDERS_NOTIFICATION_DISMISS: 'notificationDismissTime',
};
