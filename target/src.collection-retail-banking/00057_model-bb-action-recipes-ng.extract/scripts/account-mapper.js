const maskCardNumber = (suffix) => {
  let masked = '';
  if (suffix) {
    masked = `XXXX-XXXX-XXXX-${suffix}`;
  }
  return masked;
};

const defaultViewModelFactory = ({ id, name, currency }) => ({
  id,
  name,
  currency,
});

const viewModelFactories = {
  currentAccounts: (account) => ({
    id: account.id,
    name: account.name,
    identifier: account.IBAN || account.BBAN,
    amount: account.availableBalance,
    currency: account.currency,
  }),

  savingsAccounts: (account) => ({
    id: account.id,
    name: account.name,
    identifier: account.IBAN || account.BBAN,
    amount: account.bookedBalance,
    currency: account.currency,
  }),

  termDeposits: (account) => ({
    id: account.id,
    name: account.name,
    amount: account.principalAmount,
    currency: account.currency,
  }),

  loans: (account) => ({
    id: account.id,
    name: account.name,
    amount: account.bookedBalance,
    currency: account.currency,
  }),

  creditCards: (account) => ({
    id: account.id,
    name: account.name,
    identifier: maskCardNumber(account.cardNumberSuffix),
    amount: account.availableBalance,
    currency: account.currency,
  }),

  investmentAccounts: (account) => ({
    id: account.id,
    name: account.name,
    amount: account.currentInvestmentValue,
    currency: account.currency,
  }),

};

const viewModelFactory = (kind, account) => {
  const acc = (viewModelFactories[kind] || defaultViewModelFactory)(account);
  acc.kind = kind;
  return acc;
};

/**
 * Prepare the fields of a account into a form ready for display to the User
 *
 * @inner
 * @param {object} account The source account from the API
 * @returns {AccountView}
 */
export default (kindId) => (account) =>
  viewModelFactory(kindId, account);
