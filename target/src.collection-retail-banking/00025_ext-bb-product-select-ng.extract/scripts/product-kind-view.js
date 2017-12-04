const maskCardNumber = (suffix) => suffix && `XXXX-XXXX-XXXX-${suffix}`;

const defaultViewModel = (product) => ({
  id: product.id,
  name: product.name,
});

const viewModelFactories = {
  currentAccounts: (product) => ({
    id: product.id,
    name: product.name,
    identifier: product.IBAN,
    amount: product.bookedBalance,
    currency: product.currency,
  }),

  termDeposits: (product) => ({
    id: product.id,
    name: product.name,
    identifier: product.BBAN,
    amount: product.principalAmount,
    currency: product.currency,
  }),

  savingsAccounts: (product) => ({
    id: product.id,
    name: product.name,
    identifier: product.BBAN,
    amount: product.bookedBalance,
    currency: product.currency,
  }),

  creditCards: (product) => ({
    id: product.id,
    name: product.name,
    identifier: maskCardNumber(product.cardNumberSuffix),
    amount: product.bookedBalance,
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
    identifier: product.BBAN,
    amount: product.bookedBalance,
    currency: product.currency,
  }),

  investmentAccounts: (product) => ({
    id: product.id,
    name: product.name,
    identifier: product.BBAN,
    amount: product.currentInvestmentValue,
    currency: product.currency,
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
export const productKindView = (product) =>
  Object.assign(product,
    viewModelFactories[product.kind](product) || defaultViewModel(product)
  );

/**
 * @description
 * Prepare the fields of a Product Kind into a form ready for display to the User
 *
 * @private
 * @type {function}
 * @param {array<object>} kinds The source ProductKinds from the API
 * @returns {array<ProductKindView>}
 */
export default (kinds) =>
  kinds
    .reduce((memo, { products }) =>
      memo.concat(
        products && products.length ?
        products.map(productKindView) :
        []
      ),
    []);
