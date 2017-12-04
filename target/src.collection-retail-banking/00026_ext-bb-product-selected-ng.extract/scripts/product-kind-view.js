
const maskCardNumber = (suffix) => `XXXX-XXXX-XXXX-${suffix}`;

const defaultViewModel = (product) => ({
  id: product.id,
  name: product.name,
});

const viewModelFactories = {
  currentAccounts: (product) => ({
    id: product.id,
    name: product.name,
    identifier: product.IBAN || product.BBAN,
    primaryValue: product.bookedBalance,
    secondaryValue: product.availableBalance,
    secondaryLabel: 'label.available',
    currency: product.currency,
  }),

  savingsAccounts: (product) => ({
    id: product.id,
    name: product.name,
    identifier: product.IBAN || product.BBAN,
    primaryValue: product.bookedBalance,
    secondaryValue: product.accruedInterest,
    currency: product.currency,
  }),

  termDeposits: (product) => ({
    id: product.id,
    name: product.name,
    primaryValue: product.bookedBalance,
    secondaryValue: product.principalAmount,
    currency: product.currency,
  }),

  creditCards: (product) => ({
    id: product.id,
    name: product.name,
    identifier: maskCardNumber(product.cardNumberSuffix),
    primaryValue: product.bookedBalance,
    secondaryValue: product.creditLimit,
    currency: product.currency,
  }),

  debitCards: (product) => ({
    id: product.id,
    name: product.name,
    identifier: maskCardNumber(product.cardNumberSuffix),
  }),

  loans: (product) => ({
    id: product.id,
    name: product.name,
    primaryValue: product.bookedBalance,
    secondaryValue: product.principalAmount,
    currency: product.currency,
  }),

  investmentAccounts: (product) => ({
    id: product.id,
    name: product.name,
    primaryValue: product.currentInvestmentValue,
    currency: product.currency,
  }),
};

/**
 * Prepare the fields of a Product into a form ready for display to the User
 *
 * @inner
 * @param {object} product The source Product from the API
 * @returns {ProductView}
 */
export default (product) =>
  viewModelFactories[product.kind](product) || defaultViewModel(product);

/**
 * @typedef {Object} ProductView
 * @property {string} id The internal Product Identifier
 * @property {string} name The product's name, suitable for display to users
 * @property {?string} identifier The identifier of the Product from the user's perspective
 * @property {?string} primaryValue The most important associated value to be displayed
 * @property {?string} secondaryValue A secondary associated value to be displayed
 * @property {?string} secondaryLabel A label to describe the secondary value
 * @property {?string} currency ISO currency code
 */
