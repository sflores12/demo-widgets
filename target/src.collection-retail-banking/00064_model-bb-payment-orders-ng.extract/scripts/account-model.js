import { ExternalType } from './constants';

const maskCardNumber = (suffix) => (suffix ? `XXXX-XXXX-XXXX-${suffix}` : '');

const defaultViewModelFactory = ({
  id,
  name,
  currency,
  externalTransferAllowed,
  crossCurrencyAllowed,
}) => ({
  id,
  name,
  currency,
  externalTransferAllowed,
  crossCurrencyAllowed,
});

const viewModelFactories = {
  currentAccounts: account => Object.assign({
    identifier: account.IBAN || account.BBAN,
    amount: account.availableBalance,
  },
  account),

  savingsAccounts: account => Object.assign({
    identifier: account.IBAN || account.BBAN,
    amount: account.bookedBalance,
  },
  account),

  termDeposits: account => Object.assign({
    amount: account.principalAmount,
  },
  account),

  loans: account => Object.assign({
    amount: account.bookedBalance,
  },
  account),

  creditCards: account => Object.assign({
    identifier: maskCardNumber(account.cardNumberSuffix),
    amount: account.availableBalance,
  },
  account),

  investmentAccounts: account => Object.assign({
    amount: account.currentInvestmentValue,
  },
  account),

  [ExternalType.IDENTIFIER]: contact => Object.assign({
    identifier: contact.accounts[0].IBAN,
    external: true,
  },
  contact),
};

const viewModelFactory = (kind, account) =>
  (viewModelFactories[kind] || defaultViewModelFactory)(account);

/**
 * @name createAccountModel
 * @type {function}
 * @description
 * Prepare the fields of a account into a form ready for display to the User
 *
 * @param {string} kindId Product kind Id
 * @returns {function}
 */
export const createAccountModel = kindId => (account) => viewModelFactory(kindId, account);

/**
 * @name getExtendedAccountModelFlat
 * @type {function}
 * @description
 * Prepare the fields of a account into a form ready for display to the User
 *
 * @param {object[]} accountsRaw flat list of accounts
 * @return {object[]}
 */
export const getExtendedAccountModelFlat = (accountsRaw = []) => accountsRaw
  .map(account => ({
    identifier: account.IBAN ||
      account.BBAN ||
      account.productNumber ||
      maskCardNumber(account.cardNumberSuffix),
    amount: account.availableBalance || account.bookedBalance,
    ...account,
  }));
