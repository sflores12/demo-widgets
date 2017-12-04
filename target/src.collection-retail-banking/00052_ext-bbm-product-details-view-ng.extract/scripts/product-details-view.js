/* eslint-disable quote-props */

const maskCardNumber = (suffix) => (
  suffix && `XXXX-XXXX-XXXX-${suffix}`
);

const defaultViewModel = (product) => ({
  id: product.id,
  name: product.name,
  alias: product.alias || product.name,
  currency: product.currency,
  productBalances: null,
  additionalDetails: null,
});

const viewModelFactories = {
  'Current Account': (product) => ({
    id: product.id,
    name: product.name,
    alias: product.alias || product.name,
    identifier: product.IBAN || product.BBAN,
    currency: product.currency,
    productBalances: {
      primary: {
        label: 'label.bookedBalance',
        value: product.bookedBalance,
      },
      secondary: {
        label: 'label.availableBalance',
        value: product.availableBalance,
      },
      tertiary: {
        label: 'label.creditLimit',
        value: product.creditLimit,
      },
    },
    additionalDetails: {
      accountOpeningDate: product.accountOpeningDate,
      externalTransferAllowed: product.externalTransferAllowed,
    },
  }),

  'Savings Account': (product) => ({
    id: product.id,
    name: product.name,
    alias: product.alias || product.name,
    identifier: product.IBAN || product.BBAN,
    currency: product.currency,
    productBalances: {
      primary: {
        label: 'label.bookedBalance',
        value: product.bookedBalance,
      },
      secondary: {
        label: 'label.accruedInterest',
        value: product.accruedInterest,
      },
    },
    additionalDetails: {
      accountOpeningDate: product.accountOpeningDate,
      externalTransferAllowed: product.externalTransferAllowed,
    },
  }),

  'Term Deposit': (product) => ({
    id: product.id,
    name: product.name,
    alias: product.alias || product.name,
    currency: product.currency,
    productBalances: {
      primary: {
        label: 'label.principalAmount',
        value: product.principalAmount,
      },
      secondary: {
        label: 'label.accruedInterest',
        value: product.accruedInterest,
      },
    },
    additionalDetails: {
      accountOpeningDate: product.accountOpeningDate,
      externalTransferAllowed: product.externalTransferAllowed,
    },
  }),

  'Credit Card': (product) => ({
    id: product.id,
    name: product.name,
    alias: product.alias || product.name,
    identifier: maskCardNumber(product.PANSuffix),
    currency: product.currency,
    productBalances: {
      primary: {
        label: 'label.bookedBalance',
        value: product.bookedBalance,
      },
      secondary: {
        label: 'label.availableBalance',
        value: product.availableBalance,
      },
      tertiary: {
        label: 'label.creditLimit',
        value: product.creditLimit,
      },
    },
    additionalDetails: {
      accountOpeningDate: product.accountOpeningDate,
      externalTransferAllowed: product.externalTransferAllowed,
    },
  }),

  'Debit Card': (product) => ({
    id: product.id,
    name: product.name,
    alias: product.alias || product.name,
    identifier: maskCardNumber(product.PANSuffix),
    currency: product.currency,
    additionalDetails: {
      accountOpeningDate: product.accountOpeningDate,
      externalTransferAllowed: product.externalTransferAllowed,
    },
  }),

  'Loan': (product) => ({
    id: product.id,
    name: product.name,
    alias: product.alias || product.name,
    currency: product.currency,
    productBalances: {
      primary: {
        label: 'label.bookedBalance',
        value: product.bookedBalance,
      },
    },
    additionalDetails: {
      accountOpeningDate: product.accountOpeningDate,
      externalTransferAllowed: product.externalTransferAllowed,
    },
  }),

  'Investment Account': (product) => ({
    id: product.id,
    name: product.name,
    alias: product.alias || product.name,
    currency: product.currency,
    productBalances: {
      primary: {
        label: 'label.bookedBalance',
        value: product.bookedBalance,
      },
    },
    additionalDetails: {
      accountOpeningDate: product.accountOpeningDate,
      externalTransferAllowed: product.externalTransferAllowed,
    },
  }),
};

/**
 * @description
 * Prepare the fields of a Product into a details object ready for display to the User
 *
 * @inner
 * @type {function}
 * @param {Object} product - The source Product from the API
 * @returns {ProductDetailsView}
 */
export default (product) =>
  viewModelFactories[product.productKindName](product) || defaultViewModel(product);

/**
 * @typedef {object} ProductDetailsView
 * @property {string} id - The internal Product Identifier
 * @property {string} name - The product's name, suitable for display to users
 * @property {string} alias - The product's alias, suitable for display to users
 * (fallback to product name)
 * @property {?string} identifier - The identifier of the Product from the user's perspective
 * @property {?string} currency - ISO currency code
 * @property {?ProductBalances} productBalances - Balances (amounts) for the given product
 * @property {?AdditionalDetails} additionalDetails - Additional details for the given product
 */

/**
 * @typedef {object} ProductBalances
 * @property {?PrimaryBalance} primary - The primary balance for the given product
 * @property {?SecondaryBalance} secondary - The secondary balance for the given product
 * @property {?TertiaryBalance} tertiary - The tertiary balance for the given product
 */

/**
 * @typedef {object} AdditionalDetails
 * @property {?string} accountOpeningDate - The opening date of the product arrangement
 * @property {?boolean} externalTransferAllowed - Flag to check if transfers to external
 * accounts are allowed
 */

/**
 * @typedef {object} PrimaryBalance
 * @property {string} label - The label to show for the primary balance
 * @property {string} value - The value (amount) of the primary balance
 */

/**
 * @typedef {object} SecondaryBalance
 * @property {string} label - The label to show for the secondary balance
 * @property {string} value - The value (amount) of the secondary balance
 */

/**
 * @typedef {object} TertiaryBalance
 * @property {string} label - The label to show for the tertiary balance
 * @property {string} value - The value (amount) of the tertiary balance
 */
