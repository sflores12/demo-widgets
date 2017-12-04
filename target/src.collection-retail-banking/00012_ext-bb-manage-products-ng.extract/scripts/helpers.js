const helpers = (context) => {
  const i18nFilter = context.$filter('i18n');

  const LookupKeyFactory = {
    currentAccounts: (product) => ({
      primaryBalance: product.bookedBalance,
      secondaryBalance: product.availableBalance,
      tertiaryBalance: product.creditLimit,
    }),
    savingsAccounts: (product) => ({
      primaryBalance: product.bookedBalance,
      secondaryBalance: product.accruedInterest,
    }),
    termDeposits: (product) => ({
      primaryBalance: product.principalAmount,
      tertiaryBalance: product.accruedInterest,
    }),
    creditCards: (product) => ({
      primaryBalance: product.bookedBalance,
      secondaryBalance: product.availableBalance,
      tertiaryBalance: product.creditLimit,
    }),
    debitCards: () => ({
      primaryBalance: i18nFilter('product.label.debit.card.no.amount'),
    }),
    loans: (product) => ({
      primaryBalance: product.bookedBalance,
    }),
    investmentAccounts: (product) => ({
      primaryBalance: product.currentInvestmentValue,
    }),
  };

  return {
    /**
	 * @description
	 * Handles displaying a value for alias depending on what is available
	 * from the product.
	 *
	 * @name handleAlias
	 * @type {function}
	 * @param {string} name
	 * @param {string} alias
	 * @returns {string} alias || name || fallback message
	 */
    handleAlias: (alias, name) => (alias || name || i18nFilter('product.label.no.alias')),
    /**
     * @description
     * Checking if the condition is met to display the editable input
     * for changing the name or alias.
     *
     * @name showChangeNameInput
     * @type {function}
     * @param {object} productSelected The selected product.
     * @param {object} product The product that needs to be checked.
     * @returns {boolean} true if condition is met or false otherwise
     */
    showChangeNameInput: (productSelected, product) =>
      (productSelected.id === product.id && productSelected.showInput),

    /**
     * @description
     * Processing the selected product and appending appropriate balance values
     * per product kind
     *
     * @name processBalances
     * @type {function}
     * @param {object} selectedProduct - The selected product.
     * @returns {object} selectedProduct.balance - Returns the appropriate
     * balance available on the object
     */
    processBalances: (selectedProduct) => {
      const processed = LookupKeyFactory[selectedProduct.kind](selectedProduct);
      return (processed.primaryBalance || processed.secondaryBalance || processed.tertiaryBalance);
    },
  };
};

export default helpers;

