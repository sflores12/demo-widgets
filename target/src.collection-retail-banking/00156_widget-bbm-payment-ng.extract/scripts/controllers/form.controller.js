import { AccountType, Event, Intent } from '../constants';

export default function FormController(
  widget,
  model,
  viewModel,
  sharedApi,
  bbIntent,
  bus,
  hooks,
  Promise
) {
  /**
   * @name FormController
   * @ngkey FormController
   *
   * @description
   * Payment widget form controller.
   * Loads debit accounts and beneficiaries on start.
   * Provides API to make a payment.
   *
   * @type {Object}
   */
  const ctrl = this;

  /**
   * @description
   * A set of intents that the Form controller uses or handles.
   *
   * @name intents
   * @type {Object}
   * @inner
   */
  const intents = {};

  /**
   * @description
   * Payment preferences set in the widget preferences.
   *
   * @name FormController#preferences
   * @type {Object}
   */
  const preferences = model.getPaymentPreferences();

  /**
   * @description
   * The promise of the request to load debit accounts.
   *
   * @name debitAccountsPromise
   * @type {Promise}
   * @inner
   */
  let debitAccountsPromise;

  const { isUrgentPaymentAllowed } = sharedApi;

  /**
   * @description
   * The promise of the request to load beneficiaries.
   *
   * @name beneficiariesPromise
   * @type {Promise}
   * @inner
   */
  let beneficiariesPromise;

  /**
   * @description
   * Checks whether the given beneficiary is external.
   * Returns true, if the beneficiary is external, and false otherwise.
   *
   * @name isExternalBeneficiary
   * @type {function}
   *
   * @param {AccountView} beneficiary
   * @returns {boolean}
   * @inner
   */
  const isExternalBeneficiary = beneficiary => Boolean(
    beneficiary && (beneficiary.external || beneficiary.isNew)
  );

  /**
   * @description
   * Checks whether external transfers are allowed for the given debitAccount
   *
   * @name isExternalTransferAllowed
   * @type {function}
   *
   * @param {AccountView} debitAccount
   * @returns {boolean}
   * @inner
   */
  const isExternalTransferAllowed = debitAccount => (
    !debitAccount || !debitAccount.id || debitAccount.externalTransferAllowed
  );

  /**
   * @description
   * Loads the list of credit accounts for the given debit account.
   *
   * @name loadCreditAccounts
   * @type {function}
   *
   * @param {AccountView} debitAccount
   * @returns {Promise.<Array>}
   * @inner
   */
  const loadCreditAccounts = debitAccount => (
    model.getAccountsTo(debitAccount ? debitAccount.id : null)
  );

  /**
   * @description
   * Loads contacts.
   *
   * @name loadContacts
   * @type {function}
   * @returns {Promise.<Array>}
   * @inner
   */
  const loadContacts = () => {
    if (viewModel.getContacts()) {
      return Promise.resolve(viewModel.getContacts());
    }

    return model.getExternals()
      .then(contacts => {
        viewModel.setContacts(contacts);
        return contacts;
      });
  };

  /**
   * @description
   * Loads the list of beneficiaries.
   *
   * @name loadBeneficiaries
   * @type {function}
   * @returns {Promise.<Array>}
   * @inner
   */
  const loadBeneficiaries = () => {
    const debitAccount = viewModel.getSelectedDebitAccount();

    const requests = [
      loadCreditAccounts(debitAccount),
      isExternalTransferAllowed(debitAccount) ? loadContacts() : [],
    ];

    viewModel.setBeneficiariesLoading(true);

    beneficiariesPromise = Promise.all(requests)
      .then(([creditAccounts, contacts]) => {
        const processedData = hooks.processBeneficiaries(creditAccounts, contacts);

        viewModel.setBeneficiaries(processedData);
        viewModel.setBeneficiariesError(null);
        viewModel.setBeneficiariesLoading(false);

        return processedData;
      })
      .catch(error => {
        viewModel.setBeneficiariesError(error); // TODO Convert to UI error
        viewModel.setBeneficiariesLoading(false);

        bus.publish(Event.BENEFICIARIES_LOAD_FAILED, {
          error,
        });

        throw error;
      });

    return beneficiariesPromise;
  };

  /**
   * @description
   * Loads debit accounts.
   *
   * @name loadDebitAccounts
   * @type {function}
   * @returns {Promise.<Array>}
   * @inner
   */
  const loadDebitAccounts = () => {
    viewModel.setDebitAccountsLoading(true);

    debitAccountsPromise = model.getAccountsFrom()
      .then(data => {
        const processedData = hooks.processDebitAccounts(data);

        viewModel.setDebitAccounts(processedData);
        viewModel.setDebitAccountsError(null);
        viewModel.setDebitAccountsLoading(false);

        return processedData;
      })
      .catch(error => {
        viewModel.setDebitAccountsError(error); // TODO: Convert to UI error
        viewModel.setDebitAccountsLoading(false);

        bus.publish(Error.DEBIT_ACCOUNTS_LOAD_FAILED, {
          error,
        });

        throw error;
      });

    return debitAccountsPromise;
  };

  /**
   * @description
   * Loads currencies.
   *
   * @name loadCurrencies
   * @type {function}
   *
   * @returns {Promise.<Array.Currency>}
   * @inner
   */
  const loadCurrencies = () => {
    viewModel.setCurrenciesLoading(true);

    return model.getCurrencies()
      .then(currencies => {
        viewModel.setCurrencies(currencies);
        viewModel.setCurrenciesError(null);
        viewModel.setCurrenciesLoading(false);
      })
      .catch(error => {
        viewModel.setCurrenciesError(error); // TODO Convert to UI error
        viewModel.setCurrenciesLoading(false);

        throw error;
      });
  };

  /**
   * @description
   * Initializes the list of debit accounts.
   *
   * @name initDebitAccounts
   * @type {function}
   * @inner
   */
  const initDebitAccounts = () => {
    const debitAccounts = viewModel.getDebitAccounts();

    if (debitAccounts) {
      debitAccountsPromise = Promise.resolve(debitAccounts);
      return debitAccountsPromise;
    }

    return loadDebitAccounts();
  };

  /**
   * @description
   * Initializes the list of beneficiaries.
   *
   * @name initBeneficiaries
   * @type {function}
   * @inner
   */
  const initBeneficiaries = () => {
    const beneficiaries = viewModel.getBeneficiaries();

    if (beneficiaries) {
      beneficiariesPromise = Promise.resolve(beneficiaries);
      return beneficiariesPromise;
    }

    return loadBeneficiaries();
  };

  /**
   * @description
   * Initializes the list of currencies.
   *
   * @name initCurrencies
   * @type {function}
   *
   * @inner
   */
  const initCurrencies = () => {
    const currencies = viewModel.getCurrencies();
    return currencies
      ? Promise.resolve(currencies)
      : loadCurrencies();
  };

  /**
   * @description
   * Initializes the payment state.
   *
   * @name initPayment
   * @type {function}
   *
   * @param {boolean} reset
   * @inner
   */
  const initPayment = reset => {
    if (!viewModel.getPayment() || reset) {
      const initialPayment = viewModel.getInitialPayment();
      const processedInitialPayment = hooks.processInitialPaymentState(initialPayment);

      viewModel.setPayment(processedInitialPayment);
    }
  };

  /**
   * @description
   * Checks if given accounts A and B are the same account.
   *
   * @name isSameContact
   * @type {function}
   *
   * @param {AccountView} accountA
   * @param {AccountView} accountB
   * @returns {boolean}
   */
  const isSameAccount = (accountA, accountB) => accountA.id === accountB.id;

  /**
   * @description
   * Resets the payment beneficiary, if it is not valid for the currently selected
   * debit account.
   *
   * @name resetBeneficiaryIfNeeded
   * @type {function}
   * @inner
   */
  const resetBeneficiaryIfNeeded = () => {
    const beneficiary = viewModel.getSelectedBeneficiary();
    const debitAccount = viewModel.getSelectedDebitAccount();

    if (beneficiary && debitAccount) {
      const isBeneficiaryInvalid = isSameAccount(beneficiary, debitAccount) ||
        (isExternalBeneficiary(beneficiary) && !isExternalTransferAllowed(debitAccount));

      if (isBeneficiaryInvalid) {
        viewModel.resetSelectedBeneficiary();
      }
    }
  };

  /**
   * @description
   * Handles the intent to change the selected beneficiary.
   *
   * @name onBeneficiarySelect
   * @type {function}
   * @param {AccountView} beneficiary
   * @inner
   */
  const onBeneficiarySelect = beneficiary => {
    viewModel.setSelectedBeneficiary(beneficiary);
  };

  /**
   * @description
   * Handles the intent to change the selected debit account.
   *
   * @name onDebitAccountSelect
   * @type {function}
   * @param {AccountView} account
   * @inner
   */
  const onDebitAccountSelect = account => {
    viewModel.setSelectedDebitAccount(account);

    loadBeneficiaries();
    resetBeneficiaryIfNeeded();
  };

  /**
   * @description
   * Checks if given contacts A and B are the same contact.
   *
   * @name isSameContact
   * @type {function}
   *
   * @param {AccountView} contactA
   * @param {AccountView} contactB
   * @returns {boolean}
   */
  const isSameContact = (contactA, contactB) => Boolean(
    contactA.name === contactB.name &&
    contactA.identifier === contactB.identifier
  );

  /**
   * @description
   * Checks if the given list of contacts contains the given contact.
   *
   * @name isExistingAccount
   * @type {function}
   *
   * @param {Array.<AccountView>} contacts
   * @param {AccountView} contact
   * @returns {boolean}
   * @inner
   */
  const isExistingContact = (contacts, contact) => (
    (contacts || []).some(contactItem => isSameContact(contact, contactItem))
  );

  /**
   * @description
   * Checks whether the beneficiary can be saved to the address book as a new contact.
   *
   * @name FormController#canSaveContact
   * @type {function}
   *
   * @returns {boolean}
   */
  const canSaveContact = () => (
    viewModel.isBeneficiaryComplete() && viewModel.isBeneficiaryExternal() &&
    !isExistingContact(viewModel.getContacts(), viewModel.getSelectedBeneficiary())
  );

  /**
   * @description
   * Resets the payment form.
   *
   * @name FormController#resetPayment
   * @type {function}
   */
  const resetPayment = () => initPayment(true);

  /**
   * @description
   * Initiates the process of selecting an account by calling
   * the "view.payment.account.select" intent with the given type.
   *
   * @name selectAccount
   * @type {function}
   *
   * @param {string} type
   * @returns {Promise.<void>}
   * @inner
   */
  const selectAccount = type => {
    const accountsPromise = type === AccountType.DEBIT
      ? debitAccountsPromise
      : beneficiariesPromise;

    if (!accountsPromise) {
      return Promise.reject('Controller must be initialized');
    }

    bus.publish(Event.SELECT_ACCOUNT_LOAD_START, { type });

    return Promise.resolve(accountsPromise)
      .then(() => viewModel.save())
      .then(() => {
        intents.selectAccount({ type });

        bus.publish(Event.SELECT_ACCOUNT_LOAD_DONE, { type });
      })
      .catch(error => {
        bus.publish(Event.SELECT_ACCOUNT_FAILED, {
          error,
          type,
        });

        throw error;
      });
  };

  /**
   * @description
   * Initiates the process of selecting of the beneficiary by calling
   * the "view.payment.account.select" intent with type = "credit".
   *
   * Before calling the intent it ensures, that beneficiaries are loaded.
   *
   * @name FormController#selectBeneficiary
   * @type {function}
   *
   * @fires bb.event.payment.selectAccount.load.start
   * @fires bb.event.payment.selectAccount.load.done
   * @fires bb.event.payment.selectAccount.failed
   */
  const selectBeneficiary = () => (
    selectAccount(AccountType.CREDIT)
  );

  /**
   * @description
   * Initiates the process of selecting of the debit account by calling
   * the "view.payment.account.select" intent with type = "debit".
   *
   * Before calling the intent it ensures, that debit accounts are loaded.
   *
   * @name FormController#selectDebitAccount
   * @type {function}
   *
   * @fires bb.event.payment.selectAccount.load.start
   * @fires bb.event.payment.selectAccount.load.done
   * @fires bb.event.payment.selectAccount.failed
   */
  const selectDebitAccount = () => (
    selectAccount(AccountType.DEBIT)
  );

  /**
   * @description
   * Initiates the process of a scheduling a payment by calling
   * the "view.payment.schedule.select" intent, that navigates the user
   * to the Payment Schedule view.
   *
   * @name FormController#selectSchedule
   * @type {function}
   */
  const selectSchedule = () => {
    viewModel.save().then(() => {
      intents.selectSchedule();
    });
  };

  /**
   * @description
   * Updates state of the "Save contact" flag.
   *
   * @name FormController#setSaveContact
   * @type {function}
   *
   * @param {boolean} saveContact
   */
  const setSaveContact = saveContact => (
    Object.assign(viewModel.state, {
      saveContact: Boolean(saveContact),
    })
  );

  /**
   * @description
   * Updates state of the "urgent" flag.
   *
   * @name FormController#setUrgentPayment
   * @type {function}
   *
   * @param {boolean} urgent
   */
  const setUrgentPayment = urgent => {
    const payment = viewModel.state.payment.data;
    if (payment) {
      Object.assign(payment, { urgent });
    }
  };

  /**
   * @description
   * Navigates the user to the review page.
   *
   * @name showReview
   * @type {function}
   * @inner
   */
  const showReview = () => (
    viewModel.save().then(() => {
      intents.showReview();
    })
  );

  /**
   * @description
   * Makes the payment and saves the beneficiary as a contact if needed.
   *
   * @name makePayment
   * @type {function}
   * @inner
   */
  const makePayment = () => {
    sharedApi.saveContactIfNeeded();

    return sharedApi.makePaymentWithAuthorization()
      .then(() => resetPayment());
  };

  /**
   * @description
   * Depending on the preference either navigates the user to the review page
   * or makes the payment.
   *
   * @name FormController#submitPayment
   * @type {function}
   *
   * @returns {Promise.<void>} Promise that resolves once the operation is complete.
   */
  const submitPayment = () => (
    preferences.reviewStep ? showReview() : makePayment()
  );

  /**
   * @description
   * Reloads beneficiaries.
   *
   * @name updateBeneficiaries
   * @type {function}
   *
   * @returns {Promise.<void>}
   * @inner
   */
  const updateBeneficiaries = () => {
    // Delete cached contacts in order to force a request to the server
    viewModel.resetContacts();
    return loadBeneficiaries();
  };

  /**
   * @description
   * Subscribes to events.
   *
   * @name bindEvents
   * @type {function}
   * @inner
   */
  const bindEvents = () => {
    bus.subscribe(Event.CONTACT_CREATE_DONE, () => {
      updateBeneficiaries();
    });

    bus.subscribe(Event.CONTACT_UPDATE_DONE, () => {
      updateBeneficiaries();
    });

    bus.subscribe(Event.CONTACT_DELETE_DONE, () => {
      updateBeneficiaries();
    });
  };

  /**
   * @description
   * AngularJS Lifecycle hook used to initialize the controller.
   *
   * Preloads debit accounts and beneficiaries. Prepares the view model.
   *
   * @name FormController#$onInit
   * @type {function}
   *
   * @fires cxp.item.loaded
   */
  const $onInit = () => (
    viewModel.fetch().then(() => {
      initPayment();

      initDebitAccounts();
      initBeneficiaries();
      initCurrencies();

      bindEvents();

      /**
       * This event (cxp.item.loaded) is deprecated in Mobile SDK version > 3.0
       * and will be removed with the update to widget collection 3 (WC3)
       */
      bus.publish(Event.CXP_ITEM_LOADED, {
        id: widget.getId(),
      });

      bus.publish(Event.BB_ITEM_LOADED, {
        id: widget.getId(),
      });
    })
  );

  /**
   * @description
   * The intent to select an account.
   *
   * @name intents#selectAccount
   * @type {function}
   * @inner
   */
  intents.selectAccount = bbIntent.create(Intent.SELECT_ACCOUNT, ({ type, selectedAccount }) => {
    viewModel.fetch().then(() => (
      type === AccountType.CREDIT
        ? onBeneficiarySelect(selectedAccount)
        : onDebitAccountSelect(selectedAccount)
    ));
  });

  /**
   * @description
   * The intent to schedule a payment.
   *
   * @name intents#selectSchedule
   * @type {function}
   * @inner
   */
  intents.selectSchedule = bbIntent.create(Intent.SELECT_SCHEDULE, () => {
    viewModel.fetch();
  });

  /**
   * @description
   * The intent to show the Review page.
   *
   * @name intents#showReview
   * @type {function}
   * @inner
   */
  intents.showReview = bbIntent.create(Intent.SHOW_REVIEW);

  bbIntent.handle(Intent.SHOW_FORM, ({ reset }) => {
    viewModel.fetch().then(() => {
      if (reset) {
        resetPayment();
      }
    });
  });

  bbIntent.init(() => {});

  Object.defineProperty(ctrl, 'state', {
    get() {
      return viewModel.state;
    },
  });

  Object.assign(ctrl, {
    $onInit,
    canSaveContact,
    isUrgentPaymentAllowed,
    preferences,
    resetPayment,
    selectBeneficiary,
    selectDebitAccount,
    selectSchedule,
    setSaveContact,
    setUrgentPayment,
    submitPayment,
  });
}
