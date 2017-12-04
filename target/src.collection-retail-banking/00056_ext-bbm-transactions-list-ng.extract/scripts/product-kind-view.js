
const maskCardNumber = (suffix) => {
  if (!suffix) {
    return '';
  }
  return `XXXX-XXXX-XXXX-${suffix}`;
};

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
 * Prepare the fields of a Product into a form ready for display to the User
 *
 * @param {object} product The source Product from the API
 * @type {function}
 * @returns {ProductView}
 * @inner
 */
export default (product) => {
  const isProcessedProduct = {}.hasOwnProperty.call(product, 'identifier') ||
    {}.hasOwnProperty.call(product, 'primaryValue');

  if (isProcessedProduct) {
    return product;
  }

  const kind = product.kind;
  if (!{}.hasOwnProperty.call(viewModelFactories, kind)) {
    throw new TypeError(`Unhandled product kind: ${kind}`);
  }

  return viewModelFactories[kind](product) || defaultViewModel(product);
};


/**
 * @typedef ProductView
 * @type {object}
 * @property {string} id The internal Product Identifier
 * @property {string} name The product's name, suitable for display to users
 * @property {?string} identifier The identifier of the Product from the user's perspective
 * @property {?string} primaryValue The most important associated value to be displayed
 * @property {?string} secondaryValue A secondary associated value to be displayed
 * @property {?string} secondaryLabel A label to describe the secondary value
 */
