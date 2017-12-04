import sortingBy from './sorting-methods';

const maskCardNumber = suffix => suffix && `XXXX-XXXX-XXXX-${suffix}`;

const defaultViewModel = product => product;

const viewModelFactories = {
  currentAccounts: product => ({
    ...product,
    identifier: product.IBAN || product.BBAN,
    primaryValue: product.bookedBalance,
    secondaryValue: product.availableBalance,
    secondaryLabel: 'label.availableBalance',
    tertiaryValue: product.creditLimit,
    tertiaryLabel: 'label.creditLimit',
  }),

  savingsAccounts: product => ({
    ...product,
    identifier: product.BBAN || product.IBAN,
    primaryValue: product.bookedBalance,
    secondaryValue: product.accruedInterest,
    secondaryLabel: 'label.accruedInterestAmount',
  }),

  termDeposits: product => ({
    ...product,
    primaryValue: product.principalAmount,
    secondaryValue: product.accruedInterest,
    secondaryLabel: 'label.accruedInterestAmount',
  }),

  creditCards: product => ({
    ...product,
    identifier: maskCardNumber(product.number),
    primaryValue: product.bookedBalance,
    secondaryValue: product.creditLimit,
    secondaryLabel: 'label.creditLimit',
    tertiaryValue: product.availableBalance,
    tertiaryLabel: 'label.availableBalance',
  }),

  debitCards: product => ({
    ...product,
    identifier: maskCardNumber(product.number),
  }),

  loans: product => ({
    ...product,
    primaryValue: product.bookedBalance,
  }),

  investmentAccounts: product => ({
    ...product,
    primaryValue: product.currentInvestmentValue,
  }),
};

/**
 * @description
 * Prepare the fields of a Product into a form ready for display to the User
 *
 * @inner
 * @type {function}
 * @param {object} product The source Product from the API
 * @returns {ProductView}
 */
const productKindView = product =>
  viewModelFactories[product.kind](product) || defaultViewModel(product);

/**
 * @description
 * Prepare the fields of a Product Kind into a form ready for display to the User
 *
 * @private
 * @type {function}
 * @param {object} kind The source ProductKind from the API
 * @returns {ProductKindView}
 */
export default kind => ({
  id: kind.id,
  name: kind.name,
  products: kind.products
    .map(productKindView)
    .sort(sortingBy.productNameAsc),
  aggregatedBalance: kind.aggregatedBalance,
  currency: kind.currency,
  isOpen: kind.isOpen,
});

/**
 * @typedef {Object} ProductKindView
 * @property {string} id The Product Kind identifier
 * @property {string} name The name of the Kind, suitable for display to users
 * @property {Array.<ProductView>} products The products of this Kind
 */

/**
 * @typedef {Object} ProductView
 * @property {string} id The internal Product Identifier
 * @property {string} name The product's name, suitable for display to users
 * @property {?string} identifier The identifier of the Product from the user's perspective
 * @property {?string} primaryValue The most important associated value to be displayed
 * @property {?string} secondaryValue A secondary associated value to be displayed
 * @property {?string} secondaryLabel A label to describe the secondary value
 * @property {?string} tertiaryValue A tertiary associated value to be displayed
 * @property {?string} tertiaryLabel A label to describe the tertiary value
 * @property {?string} currency ISO currency code
 */
