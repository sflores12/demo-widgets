import { E_USER } from 'lib-bb-model-errors';

import { createAccountsLoadErrorMessage, createPaymentErrorMessage } from './message';
import {
  Preference,
  singleTransfer,
  Event,
  EndingType,
} from './constants';

/**
 * @name InitiatePaymentController
 * @type {object}
 *
 * @description
 * Initiate payment widget
 */
export default function InitiatePaymentController(bus, hooks, model, bbStorage, widget, Promise) {
  const $ctrl = this;
  const paymentPreferences = {
    showExchangeRate: widget.getBooleanPreference(Preference.SHOW_EXCHANGE_RATE),
    urgent: widget.getBooleanPreference(Preference.URGENT),
    recurring: widget.getBooleanPreference(Preference.RECURRING),
  };

  let accountsFromPromise;
  let accountsToPromise;
  let originCurrencies;

  /**
   * @description
   * Initialises new payment object.
   *
   * @type {function}
   * @inner
   * @name InitiatePaymentController#initPayment
   */
  const initPayment = () => {
    const today = new Date();

    // Payment view model
    $ctrl.payment = {
      amount: {
        value: null,
        currency: null,
      },
      from: null,
      to: null,
      schedule: {
        startDate: today,
        endDate: new Date(
          today.getFullYear(),
          today.getMonth() + 1,
          today.getDate()
        ),
        transferFrequency: singleTransfer,
        repeat: null,
      },
      endingType: EndingType.NEVER,
    };

    // Init char counter state
    $ctrl.descriptionCounterState = null;
  };

  /**
   * @description
   * Updates the accounts list for the from (debit) selector.
   *
   * @inner
   * @name InitiatePaymentController#updateAccountsFrom
   * @type {function}
   * @param {object} params Request params (with search possibility)
   * @returns {Promise} Promise with no response.
   */
  const updateAccountsFrom = (params = {}) => {
    $ctrl.accountsLoading = true;
    updateAccountsFrom.list = updateAccountsFrom.list || {};

    // Getting full debit accounts list from memory (if no search)
    if (!params.debit && updateAccountsFrom.list.full) {
      accountsFromPromise = Promise.resolve(updateAccountsFrom.list.full);
    } else if (
      // Getting debit list if search is stored
      params.debit && params.debit.searchQuery &&
      updateAccountsFrom.list[params.debit.searchQuery]
    ) {
      accountsFromPromise = Promise.resolve(updateAccountsFrom.list[params.debit.searchQuery]);
    } else {
      // Retrieving accounts from model (if not memoized yet)
      accountsFromPromise = model.getAccountsFrom(params.debit ? params.debit : {});
    }

    return Promise.resolve(accountsFromPromise)
      .then((accounts) => {
        $ctrl.accountsLoading = false;
        $ctrl.accountsFrom = accounts;

        // No search? List is full? Store debits to memory...
        if (!params.debit && !accounts.hasMore) {
          updateAccountsFrom.list.full = accounts.slice();
        }

        // Is search? List is full? Store searched debits to memory...
        if (params.debit && params.debit.searchQuery && !accounts.hasMore) {
          updateAccountsFrom.list[params.debit.searchQuery] = Object.assign({}, accounts);
        }
      })
      .catch((modelError) => {
        $ctrl.accountsLoading = false;
        $ctrl.accountsLoadError = createAccountsLoadErrorMessage(modelError);
      });
  };

  /**
   * @description
   * Downloads and caches currencies
   *
   * @inner
   * @name InitiatePaymentController#getCurrencies
   * @type {function}
   * @returns {Promise.<object[]>} Promise object.
   */
  const getCurrencies = () => {
    const defaultItem = {
      id: '',
      crossCurrencyAllowed: true,
    };
    const currentItem = $ctrl.payment.from || defaultItem;

    if (!currentItem.crossCurrencyAllowed) {
      return Promise.resolve([]);
    }
    return Promise.resolve(
      originCurrencies ||
      model.getCurrencies()
        .then(currencies => {
          originCurrencies = hooks.processCurrencies(currencies);
          return originCurrencies;
        })
        // Return empty array if currencies cannot be loaded
        .catch(() => [])
    );
  };

  /**
   * @description
   * Updates the currency list available for the payment and a value.
   *
   * @inner
   * @name InitiatePaymentController#updateCurrencyList
   * @type {function}
   * @returns {Promise} A Promise for Currencies get request
   */
  const updateCurrencyList = () => getCurrencies()
    .then(currencies => {
      const debitAccount = $ctrl.payment.from;
      let currentCurrency;

      $ctrl.currencies = [].concat(currencies);

      if (debitAccount) {
        currentCurrency = currencies.find(currency => currency.name === debitAccount.currency);
        if (!currentCurrency) {
          currentCurrency = debitAccount.currency;
          $ctrl.currencies.push({ name: currentCurrency });
        } else {
          currentCurrency = currentCurrency.name;
        }
      } else {
        currentCurrency = (currencies[0] && currencies[0].name) || '';
      }

      const sortByCurrentCurrency = (a, b) => {
        if (a.name === currentCurrency) {
          return -1;
        } else if (b.name === currentCurrency) {
          return 1;
        }
        return 0;
      };

      $ctrl.currencies.sort(sortByCurrentCurrency);

      $ctrl.payment.amount = {
        currency: currentCurrency,
        value: $ctrl.payment.amount.value,
      };
    });

  /**
   * @description
   * Proxy function to method on the model
   *
   * @inner
   * @name InitiatePaymentController#getAccountsTo
   * @type {function}
   * @param {String} debitAccountId Filter account list with debitAccountId param
   * @returns {Promise.<object[]>} A Promise with flat accounts list.
   */
  const getAccountsTo = debitAccountId => model.getAccountsTo(debitAccountId);

  /**
   * @description
   * Proxy function to method on the model
   *
   * @inner
   * @name InitiatePaymentController#getExternals
   * @type {function}
   * @returns {Promise.<object[]>} A Promise with flat accounts list.
   */
  const getExternals = () => model.getExternals();

  /**
   * @description
   * Updates the accounts list for the to selector. Uses account from as a filter for model method
   *
   * @inner
   * @name InitiatePaymentController#updateAccountsTo
   * @type {function}
   */
  const updateAccountsTo = () => {
    $ctrl.accountsLoading = true;

    const debitAccount = $ctrl.payment.from || {};
    const creditAccount = $ctrl.payment.to || {};
    const isDebitEqualsCredit = creditAccount.id === debitAccount.id;
    const isCreditExternalAndNew = !debitAccount.externalTransferAllowed &&
      (creditAccount.external || creditAccount.isNew);

    if (debitAccount.id && (isDebitEqualsCredit || isCreditExternalAndNew)) {
      $ctrl.payment.to = null;
    }

    const accountsTo = hooks.processAccountsTo(debitAccount, getAccountsTo, getExternals);

    // accountsTo could be a Promise so it should be processed correspondingly
    accountsToPromise = Promise.resolve(accountsTo)
      .then(accounts => {
        $ctrl.accountsLoading = false;
        $ctrl.accountsTo = accounts;
      })
      .catch(modelError => {
        $ctrl.accountsLoading = false;
        $ctrl.accountsLoadError = createAccountsLoadErrorMessage(modelError);
      });

    return accountsToPromise;
  };

  /**
   * @name InitiatePaymentController#updateAccountSelected
   * @type {function}
   *
   * @inner
   *
   * @description
   * Handles account select
   */
  const updateAccountSelected = () => {
    model.getProductSelectedId()
      .then(id => {
        if (id && updateAccountsFrom.list.full) {
          $ctrl.payment.from = updateAccountsFrom.list.full.find(item => item.id === id);

          if ($ctrl.payment.from) {
            updateCurrencyList();
            updateAccountsTo();
          }
        }
      });
  };

  /**
   * @name InitiatePaymentController#updateAccounts
   * @type {function}
   * @description
   * Update accounts from service (with possible search param)
   *
   * @param {object} params
   * @returns {Promise} A Promise with no response data.
   */
  const updateAccounts = (params) => updateAccountsFrom(params)
    .then(updateCurrencyList)
    .then(updateAccountsTo);

  /**
   * @description
   * Resets payment model, updates accounts and currency lists
   *
   * @type {function}
   * @name InitiatePaymentController#resetPayment
   * @returns {Promise} A Promise with no response data.
   */
  const resetPayment = () => {
    initPayment();

    return updateAccounts();
  };

  /**
   * @description
   * Account from change handler.
   *
   * @see updateCurrencyList
   * @see updateAccountsTo
   *
   * @name InitiatePaymentController#onAccountFromChange
   * @type {function}
   * @returns {Promise} A Promise object.
   */
  const onAccountFromChange = () => {
    updateCurrencyList();
    return updateAccountsTo();
  };

  /**
   * @description
   * Adds subscriptions to bus events
   *
   * @inner
   * @name bindEvents
   * @type {function}
   */
  const bindEvents = () => {
    bus.subscribe(Event.ACCOUNT_SELECTED, data => {
      if (data.isAccountsFrom) {
        $ctrl.payment.from = data.account;
        return onAccountFromChange();
      }

      $ctrl.payment.to = data.account;
      return null;
    });

    bus.subscribe(Event.CONTACT_CREATE_DONE, () => updateAccountsTo());
    bus.subscribe(Event.CONTACT_UPDATE_DONE, () => updateAccountsTo());
    bus.subscribe(Event.CONTACT_DELETE_DONE, () => updateAccountsTo());

    /**
     * This event (cxp.item.loaded) is deprecated in Mobile SDK version > 3.0
     * and will be removed with the update to widget collection 3 (WC3)
     */
    bus.publish('cxp.item.loaded', {
      id: widget.getId(),
    });

    bus.publish('bb.item.loaded', {
      id: widget.getId(),
    });
  };

  /**
   * AngularJS Lifecycle hook used to initialize the controller
   *
   * @name InitiatePaymentController#$onInit
   * @type {function}
   * @returns {Promise}
   */
  const $onInit = () => resetPayment()
    .then(updateAccountSelected)
    .then(bindEvents);

  /**
   * @description
   * Retrieves exchange rate for two currencies.
   *
   * @name InitiatePaymentController#updateRate
   * @type {function}
   * @returns {Promise}
   */
  const updateRate = (currencyFrom, currencyTo) => {
    $ctrl.rate = null;

    const areDifferentCurrencies = currencyFrom && currencyTo && (currencyTo !== currencyFrom);
    if (!areDifferentCurrencies) {
      return Promise.resolve();
    }

    return model.getRate({ currencyFrom, currencyTo })
      .then(rate => {
        $ctrl.rate = rate;
      });
  };

  /**
   * @description
   * Checks if layout should show 'save beneficiary' switcher
   *
   * @name InitiatePaymentController#canSaveNewContact
   * @type {function}
   * @param {object} beneficiary Recipient data
   * @param {array} creditAccounts Credit accounts and contacts collection
   * @returns {boolean} True if new contact can be saved
   */
  const canSaveNewContact = (beneficiary, creditAccounts) => {
    const accounts = creditAccounts || []; // to cover null arg issue
    const newBeneficiaryAdded = !!(beneficiary && beneficiary.name && beneficiary.identifier);
    const isEqualtoBeneficiary = item => item.name === beneficiary.name &&
      item.identifier === beneficiary.identifier;
    const itIsNotInCollection = newBeneficiaryAdded &&
      accounts.findIndex(isEqualtoBeneficiary) === -1;
    const canBeSaved = newBeneficiaryAdded && itIsNotInCollection;

    // reset switcher before any further appearance
    if (!canBeSaved) {
      $ctrl.saveNewContact = false;
    }
    return canBeSaved;
  };

  /**
   * @description
   * Clears payment submit message
   *
   * @name InitiatePaymentController#clearPaymentError
   * @type {function}
   */
  const clearPaymentError = () => {
    $ctrl.paymentSubmitError = null;
  };

  /**
   * @description
   * Transofrms widget's payment data to payment order data
   * required by the model.
   *
   * @inner
   * @name InitiatePaymentController#getPaymentOrderData
   * @type {function}
   * @param {object} payment Payment data
   * @returns {object} Transformed payment order data
   */
  const getPaymentOrderData = payment => {
    const { to, from, schedule, amount } = payment;
    const isExternal = to.external || !to.id;
    const isSinglePayment = !schedule.transferFrequency ||
      schedule.transferFrequency.value === singleTransfer.value;
    const creditIdentification = {
      schemeName: isExternal ? 'IBAN' : 'ID',
      identification: isExternal ? to.identifier : to.id,
    };

    const data = {
      debtorAccount: {
        arrangementId: from.id,
        identification: {
          schemeName: 'ID',
          identification: from.id,
        },
        name: from.name,
      },
      requestedExecutionDate: schedule.startDate,
      paymentMode: isSinglePayment ? 'SINGLE' : 'RECURRING',
      creditTransferTransactionInformation: [{
        instructedAmount: {
          amount: amount.value,
          currencyCode: amount.currency,
        },
        creditor: {
          name: to.name,
        },
        creditorAccount: {
          identification: creditIdentification,
          name: to.name,
        },
      }],
    };

    if (payment.urgent) {
      data.instructionPriority = 'HIGH';
    }

    const creditInfo = data.creditTransferTransactionInformation[0];
    if (payment.paymentReference) {
      creditInfo.endToEndIdentification = payment.paymentReference;
    }

    if (payment.description) {
      creditInfo.remittanceInformation = payment.description;
    }

    if (!isSinglePayment) {
      data.schedule = {
        transferFrequency: schedule.transferFrequency.value,
        on: hooks.getRecurringTransactionDay(schedule),
        startDate: schedule.startDate,
        every: schedule.transferFrequency.every,
        endDate: payment.endingType === EndingType.ON ? schedule.endDate : null,
        repeat: payment.endingType === EndingType.AFTER ? schedule.repeat : null,
      };
    }

    if (typeof payment.additions === 'object') {
      data.additions = Object.assign({}, payment.additions);
    }

    return hooks.processNewPaymentData(data);
  };

  /**
   * @description
   * Transofrms widget's payment data to contact data
   * required by the model.
   *
   * @inner
   * @name InitiatePaymentController#getNewContactData
   * @type {function}
   * @param {object} payment Payment data
   * @returns {object} Transformed contact data
   */
  const getNewContactData = payment => ({
    name: payment.to.name,
    accounts: [{
      IBAN: payment.to.identifier,
    }],
  });

  /**
   * @name InitiatePaymentController#saveContact
   *
   * @description
   * Saves a new contact
   *
   * @inner
   * @type {function}
   * @param {object} contact New contact data
   * @return {Promise} A Promise for new contact request
   */
  const saveContact = contact => model.createContact(contact)
    .then(updateAccountsTo);

  /**
   * @description
   * Checks if payment order data is valid.
   * It cannot have recurring payment details if recurring payment is disabled.
   *
   * @inner
   * @name InitiatePaymentController#isPaymentDataValid
   * @type {function}
   * @param {object} paymentData Payment order data
   * @returns {boolean} Returns true if data is valid, false otherwise.
   */
  const isPaymentDataValid = paymentData => !!paymentPreferences.recurring ||
    (paymentData.schedule && paymentData.schedule.transferFrequency &&
      paymentData.schedule.transferFrequency.value === singleTransfer.value);

  /**
   * @description
   * Validate payment data before moving payment state to review.
   *
   * @name InitiatePaymentController#reviewPayment
   * @type {function}
   * @param payment   The payment to validate
   * @returns {Promise} A promise that will be fulfilled with the validation result
   */
  const reviewPayment = payment => {
    $ctrl.paymentLoading = true;
    $ctrl.paymentValidation.messages = [];
    // @TODO: replace with model method to validate in server when implemented
    return Promise.resolve(payment)
      .then(data => hooks.validatePayment(data))
      .then(({ valid, messages }) => {
        $ctrl.paymentLoading = false;
        if (!valid) {
          return Promise.reject(messages);
        }
        return { valid, messages };
      })
      .catch(errorMessages => {
        $ctrl.paymentLoading = false;
        $ctrl.paymentValidation.valid = false;
        $ctrl.paymentValidation.messages = $ctrl.paymentValidation.messages.concat(errorMessages);
        return Promise.reject();
      });
  };

  /**
   * @description
   * Prepares and sends payment order request
   *
   * @name InitiatePaymentController#makePayment
   * @type {function}
   * @param {object} paymentData New payment order data
   * @returns {Promise} A Promise object for new payment request
   */
  const makePayment = paymentData => {
    let saveContactPromise;

    $ctrl.paymentLoading = true;
    clearPaymentError();

    // save new contact (if needed)
    const isCreditorDefined = paymentData.to && paymentData.to.name && paymentData.to.identifier;
    if ($ctrl.saveNewContact && isCreditorDefined) {
      const contact = getNewContactData(paymentData);

      saveContactPromise = Promise.resolve(saveContact(contact)
        .then(() => {
          $ctrl.saveNewContact = false;
        })
        .catch(() => {
          $ctrl.saveNewContact = true;
        }));
    }

    // make sure we are processing single payment if recurring is disabled via preferences
    let requestPromise;
    if (!isPaymentDataValid(paymentData)) {
      requestPromise = Promise.reject({ code: E_USER });
    } else {
      const paymentOrderData = getPaymentOrderData(paymentData);
      requestPromise = Promise.resolve(model.createPaymentOrder(paymentOrderData));
    }

    requestPromise
      .then((resp) => {
        $ctrl.createPaymentResponseStatus = resp.data.status;
        $ctrl.paymentLoading = false;
      })
      .catch(error => {
        if (saveContactPromise) {
          $ctrl.saveNewContact = false;
        }
        $ctrl.paymentLoading = false;
        $ctrl.paymentSubmitError = createPaymentErrorMessage(error);
        return Promise.reject();
      });

    if (saveContactPromise) {
      return Promise.all([requestPromise, saveContactPromise]);
    }

    return requestPromise;
  };

  Object.assign($ctrl, {
    /**
     * @description
     * Status of payment order create. Needed to show proper
     * message on confirmation screen
     *
     * @name InitiatePaymentController#createPaymentResponseStatus
     * @type {string|null}
     */
    createPaymentResponseStatus: null,
    /**
     * @description
     * Flag that tells if accounts list is being loaded
     *
     * @name InitiatePaymentController#accountsLoading
     * @type {boolean} accountsLoading
     */
    accountsLoading: false,
    /**
     * @description
     * Store model error key which can be used for translation in the extension
     *
     * Possible values:
     * - account.model.error.auth
     * - account.model.error.connectivity
     * - account.model.error.user
     * - account.model.error.unexpected
     *
     * @name InitiatePaymentController#accountsLoadError
     * @type {object}
     */
    accountsLoadError: null,
    /**
     * @description
     * Payment object, containing info - from account, to account, amount, etc.
     *
     * @name InitiatePaymentController#payment
     * @type {object} Payment object
     */
    payment: null,
    /**
     * @description
     * List of accounts to do payment from
     *
     * @name InitiatePaymentController#accountsFrom
     * @type {object[]} accountsFrom
     */
    accountsFrom: null,
    /**
     * @description
     * List of accounts to payment to
     *
     * @name InitiatePaymentController#accountsTo
     * @type {object[]} accountsTo
     */
    accountsTo: null,
    /**
     * @description
     * List of currencies available for payment
     *
     * @name InitiatePaymentController#currencies
     * @type {object[]} currencies
     */
    currencies: null,
    /**
     * @description
     * Flag which indicates is new contact have to be saved
     *
     * @name InitiatePaymentController#saveNewContact
     * @type {boolean} saveNewContact
     */
    saveNewContact: false,
    /**
     * @description
     * Rate defined for cross-currency payments
     *
     * @name InitiatePaymentController#rate
     * @type {number}
     */
    rate: null,
    /**
     * @description
     * Payment preferences set in the widget preferences
     *
     * @name InitiatePaymentController#paymentPreferences
     * @type {number}
     */
    paymentPreferences,
    /**
     * @description
     * Available payment order ending types
     *
     * @name InitiatePaymentController#EndingType
     * @type {object}
     */
    EndingType,
    /**
     * @description
     * Single Transfer constant
     *
     * @name InitiatePaymentController#singleTransfer
     * @type {string}
     */
    singleTransfer,
    /**
     * @description
     * Store model error key which can be used for translation in the extension
     *
     * Possible values:
     * - payment.model.error.auth
     * - payment.model.error.connectivity
     * - payment.model.error.user
     * - payment.model.error.unexpected
     *
     * @name InitiatePaymentController#paymentSubmitError
     * @type {string}
     */
    paymentSubmitError: null,
    /**
     * @description
     * Flag that tells if new payment is being processed
     *
     * @name InitiatePaymentController#paymentLoading
     * @type {boolean} paymentLoading
     */
    paymentLoading: false,

    /**
     * @description
     * Store payment validations
     *
     * @name InitiatePaymentController#paymentValidation
     * @type {object}
     * @property {boolean} valid
     * @property {array.<ValidationMessages>} messages
     */
    paymentValidation: { valid: true, messages: [] },

    /**
     * @description
     * Container to store char counter state for payment description
     *
     * @name InitiatePaymentController#descriptionCounterState
     * @type {object}
     */
    descriptionCounterState: null,

    // Methods
    $onInit,
    resetPayment,
    onAccountFromChange,
    updateRate,
    canSaveNewContact,
    clearPaymentError,
    reviewPayment,
    makePayment,
    updateAccounts,
  });
}
