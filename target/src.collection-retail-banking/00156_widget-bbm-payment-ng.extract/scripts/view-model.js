import {
  AccountType,
  RecurrenceEnding,
  StorageKey,
  TransferFrequency,
} from './constants';

export default bbStorage => {
  const viewModel = {};

  /**
   * @description
   * Default payment currency.
   * TODO Decide how to get the default currency.
   *
   * @name defaultCurrency
   * @type {Currency}
   * @inner
   */
  const defaultCurrency = {
    name: 'EUR',
  };

  /**
   * @description
   * Returns the initial beneficiary.
   *
   * @name getInitialBeneficiary
   * @type {function}
   *
   * @returns {AccountView}
   * @inner
   */
  const getInitialBeneficiary = () => ({
    name: '',
    identifier: '',
    isNew: true,
  });

  /**
   * @description
   * Returns the initial payment schedule object.
   *
   * @name  getInitialSchedule
   * @type {function}
   *
   * @param {?Date} today
   * @returns {Schedule}
   * @inner
   */
  const getInitialSchedule = (today = new Date()) => ({
    transferFrequency: TransferFrequency.ONCE,
    startDate: today,
    end: RecurrenceEnding.NEVER,
    endDate: null,
    every: 1,
    repeat: 5,
  });

  /**
   * @description
   * Returns the initial state of the payment.
   *
   * @name getInitialPayment
   * @type {function}
   *
   * @returns {Payment}
   * @inner
   */
  const getInitialPayment = () => ({
    amount: {
      currency: defaultCurrency.name,
      value: null,
    },
    beneficiary: getInitialBeneficiary(),
    debitAccount: null,
    description: null,
    schedule: getInitialSchedule(),
    urgent: false,
  });

  /**
   * @description
   * Returns the initial state of the view model.
   *
   * @name getInitialState
   * @type {function}
   *
   * @returns {PaymentView}
   * @inner
   */
  const getInitialState = () => ({
    allowedCurrencies: [
      defaultCurrency,
    ],

    contacts: null,

    currencies: {
      error: null,
      loading: false,
      data: null,
    },

    beneficiaries: {
      error: null,
      loading: false,
      data: null,
    },

    debitAccounts: {
      error: null,
      loading: false,
      data: null,
    },

    payment: {
      error: null,
      loading: false,
      data: null,
    },

    saveContact: false,
  });

  /**
   * @description
   * Returns the payment object.
   *
   * @name getPayment
   * @type {function}
   *
   * @returns {Payment}
   * @inner
   */
  const getPayment = () => viewModel.state.payment.data;

  /**
   * @description
   * Returns the list of beneficiaries.
   *
   * @name getBeneficiaries
   * @type {function}
   *
   * @returns {*}
   * @inner
   */
  const getBeneficiaries = () => viewModel.state.beneficiaries.data;

  /**
   * @description
   * Returns the currency of the given account.
   *
   * @name getAccountCurrency
   * @type {function}
   *
   * @param {AccountView} account
   * @returns {Currency}
   * @inner
   */
  const getAccountCurrency = account => (
    account && account.currency ? ({ name: account.currency }) : null
  );

  /**
   * @description
   * Returns list of contacts.
   *
   * @name getContacts
   * @type {function}
   *
   * @returns {Array.<AccountView>}
   * @inner
   */
  const getContacts = () => viewModel.state.contacts;

  /**
   * @description
   * Returns the selected beneficiary of the payment.
   *
   * @name getBeneficiaries
   * @type {function}
   *
   * @returns {*}
   * @inner
   */
  const getSelectedBeneficiary = () => getPayment().beneficiary;

  /**
   * @description
   * Returns the list of debit accounts.
   *
   * @name getDebitAccounts
   * @type {function}
   *
   * @returns {*}
   * @inner
   */
  const getDebitAccounts = () => viewModel.state.debitAccounts.data;

  /**
   * @description
   * Returns the selected debit account of the payment.
   *
   * @name getSelectedDebitAccount
   * @type {function}
   *
   * @returns {AccountView}
   * @inner
   */
  const getSelectedDebitAccount = () => getPayment().debitAccount;

  /**
   * @description
   * Adds the given currency to the given list of currencies.
   *
   * @name addCurrency
   * @type {function}
   *
   * @param {Array.<Currency>} currencies
   * @param {Currency} currency
   * @inner
   */
  const addCurrency = (currencies, currency) => {
    const includes = currencies.some(curr => curr.name === currency.name);
    if (!includes) {
      currencies.unshift(currency);
    }
  };

  /**
   * @description
   * Returns the list of all currencies.
   *
   * @name getCurrencies
   * @type {function}
   *
   * @returns {Array.<Currency>}
   * @inner
   */
  const getCurrencies = () => viewModel.state.currencies.data;

  /**
   * @description
   * Updates the payment currency according, making sure
   * the currency of the payment is allowed.
   *
   * @name updatePaymentCurrency
   * @type {function}
   * @inner
   */
  const updatePaymentCurrency = () => {
    const debitAccount = getSelectedDebitAccount();
    const debitAccountCurrency = getAccountCurrency(debitAccount);

    const currency = (debitAccountCurrency || defaultCurrency).name;

    Object.assign(viewModel.state.payment.data.amount, { currency });
  };

  /**
   * @description
   * Updates the list of currencies, that are allowed for the selected debit account.
   *
   * @name updateAllowedCurrencies
   * @type {function}
   * @inner
   */
  const updateAllowedCurrencies = () => {
    const debitAccount = getSelectedDebitAccount();
    const crossCurrencyAllowed = debitAccount ? debitAccount.crossCurrencyAllowed : true;

    const allCurrencies = getCurrencies() || [];
    const allowedCurrencies = crossCurrencyAllowed ? [...allCurrencies] : [];

    const debitAccountCurrency = getAccountCurrency(debitAccount);

    // Add debit account currency
    if (debitAccountCurrency) {
      addCurrency(allowedCurrencies, debitAccountCurrency);
    }

    // Add default currency
    if (crossCurrencyAllowed) {
      addCurrency(allowedCurrencies, defaultCurrency);
    }

    Object.assign(viewModel.state, { allowedCurrencies });
  };

  /**
   * @description
   * Returns selected account.
   *
   * @name getAccounts
   * @type {function}
   *
   * @param {string} type
   * @returns {Array.<AccountView>}
   * @inner
   */
  const getAccounts = type => (
    type === AccountType.DEBIT
      ? getDebitAccounts()
      : getBeneficiaries()
  );

  /**
   * @description
   * Returns the value of the "Save contact" flag.
   *
   * @name getSaveContact
   * @type {function}
   *
   * @returns {boolean}
   * @inner
   */
  const getSaveContact = () => viewModel.state.saveContact;

  /**
   * @description
   * Returns the selected account.
   *
   * @name getSelectedAccount
   * @type {function}
   *
   * @param {string} type
   * @returns {AccountView}
   * @inner
   */
  const getSelectedAccount = type => (
    type === AccountType.DEBIT
      ? getSelectedDebitAccount()
      : getSelectedBeneficiary()
  );

  /**
   * @description
   * Checks if all the required fields for a beneficiary have been filled.
   *
   * @name isBeneficiaryComplete
   * @type {function}
   *
   * @returns {boolean}
   * @inner
   */
  const isBeneficiaryComplete = () => {
    const beneficiary = getSelectedBeneficiary();
    return Boolean(beneficiary && beneficiary.name && beneficiary.identifier);
  };

  /**
   * @description
   * Checks if the beneficiary is external.
   *
   * @name isBeneficiaryExternal
   * @type {function}
   *
   * @returns {boolean}
   * @inner
   */
  const isBeneficiaryExternal = () => {
    const beneficiary = getSelectedBeneficiary();
    return Boolean(beneficiary.external || !beneficiary.id);
  };

  /**
   * @description
   * Sets the given error to the given target.
   *
   * @name setLoading
   * @type {function}
   *
   * @param {Object} target
   * @param {Error} error
   * @inner
   */
  const setError = (target, error) => Object.assign(target, { error });

  /**
   * @description
   * Sets the given loading state to the given target.
   *
   * @name setLoading
   * @type {function}
   *
   * @param {Object} target
   * @param {boolean} loading
   * @inner
   */
  const setLoading = (target, loading) => Object.assign(target, {
    loading: Boolean(loading),
  });

  /**
   * @description
   * Sets the payment beneficiary.
   *
   * @name setSelectedBeneficiary
   * @type {function}
   *
   * @param {AccountView} beneficiary
   * @inner
   */
  const setSelectedBeneficiary = beneficiary => (
    Object.assign(viewModel.state.payment.data, { beneficiary })
  );

  /**
   * @description
   * Resets the payment beneficiary to the initial value.
   *
   * @name resetSelectedBeneficiary
   * @type {function}
   *
   * @inner
   */
  const resetSelectedBeneficiary = () => (
    setSelectedBeneficiary(getInitialBeneficiary())
  );

  /**
   * @description
   * Sets the payment beneficiary.
   *
   * @name setSelectedDebitAccount
   * @type {function}
   *
   * @param {AccountView} debitAccount
   * @inner
   */
  const setSelectedDebitAccount = debitAccount => {
    Object.assign(viewModel.state.payment.data, { debitAccount });

    updateAllowedCurrencies();
    updatePaymentCurrency();
  };

  /**
   * @description
   * Sets the given parameter as the list of beneficiaries.
   *
   * @name setBeneficiaries
   * @type {function}
   *
   * @param {*} beneficiaries
   * @inner
   */
  const setBeneficiaries = beneficiaries => (
    Object.assign(viewModel.state.beneficiaries, {
      data: beneficiaries,
    })
  );

  /**
   * @description
   * Sets an error state to the beneficiaries with the given error.
   *
   * @name setBeneficiariesError
   * @type {function}
   *
   * @param {Error} error
   * @inner
   */
  const setBeneficiariesError = error => {
    setError(viewModel.state.beneficiaries, error);
  };

  /**
   * @description
   * Sets the loading state of the beneficiaries.
   *
   * @name setBeneficiariesLoading
   * @type {function}
   *
   * @param {boolean} loading
   * @inner
   */
  const setBeneficiariesLoading = loading => {
    setLoading(viewModel.state.beneficiaries, loading);
  };

  /**
   * @description
   * Sets the given parameter as the list of contacts.
   *
   * @name setContacts
   * @type {function}
   *
   * @param {Array.<AccountView>} contacts
   * @inner
   */
  const setContacts = contacts => (
    Object.assign(viewModel.state, { contacts })
  );

  /**
   * @description
   * Resets the list of contacts.
   *
   * @name resetContacts
   * @type {function}
   *
   * @inner
   */
  const resetContacts = () => setContacts(null);

  /**
   * @description
   * Sets the list of currencies.
   *
   * @name setCurrencies
   * @type {function}
   *
   * @param {Array.<Currency>} currencies
   * @inner
   */
  const setCurrencies = currencies => {
    Object.assign(viewModel.state.currencies, {
      data: currencies,
    });

    updateAllowedCurrencies();
    updatePaymentCurrency();
  };

  /**
   * @description
   * Sets an error state to the currencies with the given error.
   *
   * @name setCurrenciesError
   * @type {function}
   *
   * @param {Error} error
   * @inner
   */
  const setCurrenciesError = error => {
    setError(viewModel.state.currencies, error);
  };

  /**
   * @description
   * Sets the loading state of the beneficiaries.
   *
   * @name setCurrenciesLoading
   * @type {function}
   *
   * @param {boolean} loading
   * @inner
   */
  const setCurrenciesLoading = loading => {
    setLoading(viewModel.state.currencies, loading);
  };

  /**
   * @description
   * Sets the given parameter as the list of debit accounts.
   *
   * @name setDebitAccounts
   * @type {function}
   *
   * @param {*} debitAccounts
   * @inner
   */
  const setDebitAccounts = debitAccounts => (
    Object.assign(viewModel.state.debitAccounts, {
      data: debitAccounts,
    })
  );

  /**
   * @description
   * Sets an error state to the debit accounts with the given error.
   *
   * @name setDebitAccountsError
   * @type {function}
   *
   * @param {Error} error
   * @inner
   */
  const setDebitAccountsError = error => {
    setError(viewModel.state.debitAccounts, error);
  };

  /**
   * @description
   * Sets the loading state of the debit accounts.
   *
   * @name setDebitAccountsLoading
   * @type {function}
   *
   * @param {boolean} loading
   * @inner
   */
  const setDebitAccountsLoading = loading => {
    setLoading(viewModel.state.debitAccounts, loading);
  };

  /**
   * @description
   * Sets the loading state of the payment.
   *
   * @name setPaymentLoading
   * @type {function}
   *
   * @param {boolean} loading
   * @inner
   */
  const setPaymentLoading = loading => {
    setLoading(viewModel.state.payment, loading);
  };

  /**
   * @description
   * Updates the payment state with the given payment data.
   *
   * @name setPayment
   * @type {function}
   *
   * @param {Payment} data
   * @inner
   */
  const setPayment = data => Object.assign(viewModel.state.payment, { data });

  /**
   * @description
   * Sets the payment as failed with the given error.
   *
   * @name setPaymentError
   * @type {function}
   *
   * @param {Error} error
   * @inner
   */
  const setPaymentError = error => {
    setError(viewModel.state.payment, error);
  };

  /**
   * @description
   * Fetches the state from the storage.
   *
   * @name fetch
   * @type {function}
   * @inner
   */
  const fetch = () => (
    bbStorage.getItem(StorageKey.PAYMENT)
      .then(state => {
        if (state) {
          viewModel.state = state;
        }
      })
  );

  /**
   * @description
   * Saves the state to the storage.
   *
   * @name save
   * @type {function}
   * @inner
   */
  const save = () => (
    bbStorage.setItem(StorageKey.PAYMENT, viewModel.state)
  );

  Object.assign(viewModel, {
    state: getInitialState(),

    getAccounts,
    getBeneficiaries,
    getContacts,
    getCurrencies,
    getDebitAccounts,
    getInitialPayment,
    getPayment,
    getSaveContact,
    getSelectedAccount,
    getSelectedBeneficiary,
    getSelectedDebitAccount,

    isBeneficiaryComplete,
    isBeneficiaryExternal,

    resetContacts,
    resetSelectedBeneficiary,

    setBeneficiaries,
    setBeneficiariesError,
    setBeneficiariesLoading,
    setContacts,
    setCurrencies,
    setCurrenciesError,
    setCurrenciesLoading,
    setDebitAccounts,
    setDebitAccountsError,
    setDebitAccountsLoading,
    setPayment,
    setPaymentError,
    setPaymentLoading,
    setSelectedBeneficiary,
    setSelectedDebitAccount,

    fetch,
    save,
  });

  return viewModel;
};

/**
 * @typedef {Object} PaymentView
 * @property {BeneficiariesState} beneficiaries State of the beneficiaries
 * @property {DebitAccountsState} debitAccounts State of the debit accounts
 * @property {PaymentState} payment State of the payment
 * @property {boolean} saveContact Whether the beneficiary should be saved to address book
 */

/**
 * @typedef {Object} BeneficiariesState
 * @property {Error} error Error if beneficiaries request failed
 * @property {boolean} loading Indicates whether beneficiaries are being loading
 * @property {Array.<AccountView>} data List of beneficiaries
 */

/**
 * @typedef {Object} DebitAccountsState
 * @property {Error} error Error if accounts request failed
 * @property {boolean} loading Indicates whether debit accounts are being loading
 * @property {Array.<AccountView>} data List of accounts
 */

/**
 * @typedef {Object} PaymentState
 * @property {Error} error Error if payment request failed
 * @property {boolean} loading Indicates whether a payment request is being sending
 * @property {Payment} data Payment data
 */

/**
 * @typedef {Object} Schedule
 * @property {string} transferFrequency How frequently the transfer should be made
 * @property {Date} startDate When to start executing the schedule
 * @property {?Date} endDate When to stop transfers
 */

/**
 * @typedef {Object} Payment
 * @property {AccountView} debitAccount Selected debit account
 * @property {AccountView} beneficiary Selected beneficiary
 * @property {Amount} amount Amount and currency of the payment
 * @property {string} description Description of the payment
 * @property {Schedule} schedule Schedule for recurring transfer
 */

/**
 * @typedef {Object} Amount
 * @property {string} currency Currency code
 * @property {number} value Amount value
 */

/**
 * @typedef {Object} Currency
 * @property {string} name Currency name, suitable for display to users
 */
