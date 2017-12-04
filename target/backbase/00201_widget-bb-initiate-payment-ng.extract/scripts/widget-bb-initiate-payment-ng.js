(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vendor-bb-angular"), require("lib-bb-widget-ng"), require("lib-bb-storage-ng"), require("lib-bb-model-errors"), require("lib-bb-event-bus-ng"), require("lib-bb-widget-extension-ng"), require("lib-bb-intent-ng"), require("model-bb-payment-orders-ng"));
	else if(typeof define === 'function' && define.amd)
		define("widget-bb-initiate-payment-ng", ["vendor-bb-angular", "lib-bb-widget-ng", "lib-bb-storage-ng", "lib-bb-model-errors", "lib-bb-event-bus-ng", "lib-bb-widget-extension-ng", "lib-bb-intent-ng", "model-bb-payment-orders-ng"], factory);
	else if(typeof exports === 'object')
		exports["widget-bb-initiate-payment-ng"] = factory(require("vendor-bb-angular"), require("lib-bb-widget-ng"), require("lib-bb-storage-ng"), require("lib-bb-model-errors"), require("lib-bb-event-bus-ng"), require("lib-bb-widget-extension-ng"), require("lib-bb-intent-ng"), require("model-bb-payment-orders-ng"));
	else
		root["widget-bb-initiate-payment-ng"] = factory(root["vendor-bb-angular"], root["lib-bb-widget-ng"], root["lib-bb-storage-ng"], root["lib-bb-model-errors"], root["lib-bb-event-bus-ng"], root["lib-bb-widget-extension-ng"], root["lib-bb-intent-ng"], root["model-bb-payment-orders-ng"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_88__, __WEBPACK_EXTERNAL_MODULE_89__, __WEBPACK_EXTERNAL_MODULE_93__, __WEBPACK_EXTERNAL_MODULE_95__, __WEBPACK_EXTERNAL_MODULE_120__, __WEBPACK_EXTERNAL_MODULE_121__, __WEBPACK_EXTERNAL_MODULE_122__, __WEBPACK_EXTERNAL_MODULE_123__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(119);

/***/ }),

/***/ 88:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_88__;

/***/ }),

/***/ 89:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_89__;

/***/ }),

/***/ 93:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_93__;

/***/ }),

/***/ 95:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_95__;

/***/ }),

/***/ 119:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _vendorBbAngular = __webpack_require__(88);
	
	var _vendorBbAngular2 = _interopRequireDefault(_vendorBbAngular);
	
	var _libBbWidgetNg = __webpack_require__(89);
	
	var _libBbWidgetNg2 = _interopRequireDefault(_libBbWidgetNg);
	
	var _libBbEventBusNg = __webpack_require__(120);
	
	var _libBbEventBusNg2 = _interopRequireDefault(_libBbEventBusNg);
	
	var _libBbWidgetExtensionNg = __webpack_require__(121);
	
	var _libBbWidgetExtensionNg2 = _interopRequireDefault(_libBbWidgetExtensionNg);
	
	var _libBbStorageNg = __webpack_require__(93);
	
	var _libBbStorageNg2 = _interopRequireDefault(_libBbStorageNg);
	
	var _libBbIntentNg = __webpack_require__(122);
	
	var _libBbIntentNg2 = _interopRequireDefault(_libBbIntentNg);
	
	var _modelBbPaymentOrdersNg = __webpack_require__(123);
	
	var _modelBbPaymentOrdersNg2 = _interopRequireDefault(_modelBbPaymentOrdersNg);
	
	var _controller = __webpack_require__(124);
	
	var _controller2 = _interopRequireDefault(_controller);
	
	var _defaultHooks = __webpack_require__(127);
	
	var defaultHooks = _interopRequireWildcard(_defaultHooks);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var moduleKey = 'widget-bb-initiate-payment-ng'; /**
	                                                  * @module widget-bb-initiate-payment-ng
	                                                  *
	                                                  * @description
	                                                  * Initiate payment widget
	                                                  */
	
	var hooksKey = moduleKey + ':hooks';
	
	exports.default = _vendorBbAngular2.default.module(moduleKey, [_libBbWidgetNg2.default, _libBbEventBusNg2.default, _modelBbPaymentOrdersNg2.default, _libBbStorageNg2.default, _libBbWidgetNg2.default, _libBbIntentNg2.default]).factory(hooksKey, (0, _libBbWidgetExtensionNg2.default)(defaultHooks)).controller('InitiatePaymentController', [
	// dependencies to inject
	_libBbEventBusNg.eventBusKey, hooksKey, _modelBbPaymentOrdersNg.modelPaymentOrdersKey, _libBbStorageNg.bbStorageServiceKey, _libBbWidgetNg.widgetKey, '$q',
	/* into */
	_controller2.default]).run([_libBbEventBusNg.eventBusKey, _libBbWidgetNg.widgetKey, _libBbIntentNg.bbIntentKey, function (bus, widget, bbIntent) {
	  bus.publish('cxp.item.loaded', {
	    id: widget.getId()
	  });
	  bbIntent.init();
	}]).name;

/***/ }),

/***/ 120:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_120__;

/***/ }),

/***/ 121:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_121__;

/***/ }),

/***/ 122:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_122__;

/***/ }),

/***/ 123:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_123__;

/***/ }),

/***/ 124:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	exports.default = InitiatePaymentController;
	
	var _libBbModelErrors = __webpack_require__(95);
	
	var _message = __webpack_require__(125);
	
	var _constants = __webpack_require__(126);
	
	/**
	 * @name InitiatePaymentController
	 * @type {object}
	 *
	 * @description
	 * Initiate payment widget
	 */
	function InitiatePaymentController(bus, hooks, model, bbStorage, widget, Promise) {
	  var $ctrl = this;
	  var paymentPreferences = {
	    showExchangeRate: widget.getBooleanPreference(_constants.Preference.SHOW_EXCHANGE_RATE),
	    urgent: widget.getBooleanPreference(_constants.Preference.URGENT),
	    recurring: widget.getBooleanPreference(_constants.Preference.RECURRING)
	  };
	
	  var accountsFromPromise = void 0;
	  var accountsToPromise = void 0;
	  var originCurrencies = void 0;
	
	  /**
	   * @description
	   * Initialises new payment object.
	   *
	   * @type {function}
	   * @inner
	   * @name InitiatePaymentController#initPayment
	   */
	  var initPayment = function initPayment() {
	    var today = new Date();
	
	    // Payment view model
	    $ctrl.payment = {
	      amount: {
	        value: null,
	        currency: null
	      },
	      from: null,
	      to: null,
	      schedule: {
	        startDate: today,
	        endDate: new Date(today.getFullYear(), today.getMonth() + 1, today.getDate()),
	        transferFrequency: _constants.singleTransfer,
	        repeat: null
	      },
	      endingType: _constants.EndingType.NEVER
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
	  var updateAccountsFrom = function updateAccountsFrom() {
	    var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	
	    $ctrl.accountsLoading = true;
	    updateAccountsFrom.list = updateAccountsFrom.list || {};
	
	    // Getting full debit accounts list from memory (if no search)
	    if (!params.debit && updateAccountsFrom.list.full) {
	      accountsFromPromise = Promise.resolve(updateAccountsFrom.list.full);
	    } else if (
	    // Getting debit list if search is stored
	    params.debit && params.debit.searchQuery && updateAccountsFrom.list[params.debit.searchQuery]) {
	      accountsFromPromise = Promise.resolve(updateAccountsFrom.list[params.debit.searchQuery]);
	    } else {
	      // Retrieving accounts from model (if not memoized yet)
	      accountsFromPromise = model.getAccountsFrom(params.debit ? params.debit : {});
	    }
	
	    return Promise.resolve(accountsFromPromise).then(function (accounts) {
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
	    }).catch(function (modelError) {
	      $ctrl.accountsLoading = false;
	      $ctrl.accountsLoadError = (0, _message.createAccountsLoadErrorMessage)(modelError);
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
	  var getCurrencies = function getCurrencies() {
	    var defaultItem = {
	      id: '',
	      crossCurrencyAllowed: true
	    };
	    var currentItem = $ctrl.payment.from || defaultItem;
	
	    if (!currentItem.crossCurrencyAllowed) {
	      return Promise.resolve([]);
	    }
	    return Promise.resolve(originCurrencies || model.getCurrencies().then(function (currencies) {
	      originCurrencies = hooks.processCurrencies(currencies);
	      return originCurrencies;
	    })
	    // Return empty array if currencies cannot be loaded
	    .catch(function () {
	      return [];
	    }));
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
	  var updateCurrencyList = function updateCurrencyList() {
	    return getCurrencies().then(function (currencies) {
	      var debitAccount = $ctrl.payment.from;
	      var currentCurrency = void 0;
	
	      $ctrl.currencies = [].concat(currencies);
	
	      if (debitAccount) {
	        currentCurrency = currencies.find(function (currency) {
	          return currency.name === debitAccount.currency;
	        });
	        if (!currentCurrency) {
	          currentCurrency = debitAccount.currency;
	          $ctrl.currencies.push({ name: currentCurrency });
	        } else {
	          currentCurrency = currentCurrency.name;
	        }
	      } else {
	        currentCurrency = currencies[0] && currencies[0].name || '';
	      }
	
	      var sortByCurrentCurrency = function sortByCurrentCurrency(a, b) {
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
	        value: $ctrl.payment.amount.value
	      };
	    });
	  };
	
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
	  var getAccountsTo = function getAccountsTo(debitAccountId) {
	    return model.getAccountsTo(debitAccountId);
	  };
	
	  /**
	   * @description
	   * Proxy function to method on the model
	   *
	   * @inner
	   * @name InitiatePaymentController#getExternals
	   * @type {function}
	   * @returns {Promise.<object[]>} A Promise with flat accounts list.
	   */
	  var getExternals = function getExternals() {
	    return model.getExternals();
	  };
	
	  /**
	   * @description
	   * Updates the accounts list for the to selector. Uses account from as a filter for model method
	   *
	   * @inner
	   * @name InitiatePaymentController#updateAccountsTo
	   * @type {function}
	   */
	  var updateAccountsTo = function updateAccountsTo() {
	    $ctrl.accountsLoading = true;
	
	    var debitAccount = $ctrl.payment.from || {};
	    var creditAccount = $ctrl.payment.to || {};
	    var isDebitEqualsCredit = creditAccount.id === debitAccount.id;
	    var isCreditExternalAndNew = !debitAccount.externalTransferAllowed && (creditAccount.external || creditAccount.isNew);
	
	    if (debitAccount.id && (isDebitEqualsCredit || isCreditExternalAndNew)) {
	      $ctrl.payment.to = null;
	    }
	
	    var accountsTo = hooks.processAccountsTo(debitAccount, getAccountsTo, getExternals);
	
	    // accountsTo could be a Promise so it should be processed correspondingly
	    accountsToPromise = Promise.resolve(accountsTo).then(function (accounts) {
	      $ctrl.accountsLoading = false;
	      $ctrl.accountsTo = accounts;
	    }).catch(function (modelError) {
	      $ctrl.accountsLoading = false;
	      $ctrl.accountsLoadError = (0, _message.createAccountsLoadErrorMessage)(modelError);
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
	  var updateAccountSelected = function updateAccountSelected() {
	    model.getProductSelectedId().then(function (id) {
	      if (id && updateAccountsFrom.list.full) {
	        $ctrl.payment.from = updateAccountsFrom.list.full.find(function (item) {
	          return item.id === id;
	        });
	
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
	  var updateAccounts = function updateAccounts(params) {
	    return updateAccountsFrom(params).then(updateCurrencyList).then(updateAccountsTo);
	  };
	
	  /**
	   * @description
	   * Resets payment model, updates accounts and currency lists
	   *
	   * @type {function}
	   * @name InitiatePaymentController#resetPayment
	   * @returns {Promise} A Promise with no response data.
	   */
	  var resetPayment = function resetPayment() {
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
	  var onAccountFromChange = function onAccountFromChange() {
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
	  var bindEvents = function bindEvents() {
	    bus.subscribe(_constants.Event.ACCOUNT_SELECTED, function (data) {
	      if (data.isAccountsFrom) {
	        $ctrl.payment.from = data.account;
	        return onAccountFromChange();
	      }
	
	      $ctrl.payment.to = data.account;
	      return null;
	    });
	
	    bus.subscribe(_constants.Event.CONTACT_CREATE_DONE, function () {
	      return updateAccountsTo();
	    });
	    bus.subscribe(_constants.Event.CONTACT_UPDATE_DONE, function () {
	      return updateAccountsTo();
	    });
	    bus.subscribe(_constants.Event.CONTACT_DELETE_DONE, function () {
	      return updateAccountsTo();
	    });
	
	    /**
	     * This event (cxp.item.loaded) is deprecated in Mobile SDK version > 3.0
	     * and will be removed with the update to widget collection 3 (WC3)
	     */
	    bus.publish('cxp.item.loaded', {
	      id: widget.getId()
	    });
	
	    bus.publish('bb.item.loaded', {
	      id: widget.getId()
	    });
	  };
	
	  /**
	   * AngularJS Lifecycle hook used to initialize the controller
	   *
	   * @name InitiatePaymentController#$onInit
	   * @type {function}
	   * @returns {Promise}
	   */
	  var $onInit = function $onInit() {
	    return resetPayment().then(updateAccountSelected).then(bindEvents);
	  };
	
	  /**
	   * @description
	   * Retrieves exchange rate for two currencies.
	   *
	   * @name InitiatePaymentController#updateRate
	   * @type {function}
	   * @returns {Promise}
	   */
	  var updateRate = function updateRate(currencyFrom, currencyTo) {
	    $ctrl.rate = null;
	
	    var areDifferentCurrencies = currencyFrom && currencyTo && currencyTo !== currencyFrom;
	    if (!areDifferentCurrencies) {
	      return Promise.resolve();
	    }
	
	    return model.getRate({ currencyFrom: currencyFrom, currencyTo: currencyTo }).then(function (rate) {
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
	  var canSaveNewContact = function canSaveNewContact(beneficiary, creditAccounts) {
	    var accounts = creditAccounts || []; // to cover null arg issue
	    var newBeneficiaryAdded = !!(beneficiary && beneficiary.name && beneficiary.identifier);
	    var isEqualtoBeneficiary = function isEqualtoBeneficiary(item) {
	      return item.name === beneficiary.name && item.identifier === beneficiary.identifier;
	    };
	    var itIsNotInCollection = newBeneficiaryAdded && accounts.findIndex(isEqualtoBeneficiary) === -1;
	    var canBeSaved = newBeneficiaryAdded && itIsNotInCollection;
	
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
	  var clearPaymentError = function clearPaymentError() {
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
	  var getPaymentOrderData = function getPaymentOrderData(payment) {
	    var to = payment.to,
	        from = payment.from,
	        schedule = payment.schedule,
	        amount = payment.amount;
	
	    var isExternal = to.external || !to.id;
	    var isSinglePayment = !schedule.transferFrequency || schedule.transferFrequency.value === _constants.singleTransfer.value;
	    var creditIdentification = {
	      schemeName: isExternal ? 'IBAN' : 'ID',
	      identification: isExternal ? to.identifier : to.id
	    };
	
	    var data = {
	      debtorAccount: {
	        arrangementId: from.id,
	        identification: {
	          schemeName: 'ID',
	          identification: from.id
	        },
	        name: from.name
	      },
	      requestedExecutionDate: schedule.startDate,
	      paymentMode: isSinglePayment ? 'SINGLE' : 'RECURRING',
	      creditTransferTransactionInformation: [{
	        instructedAmount: {
	          amount: amount.value,
	          currencyCode: amount.currency
	        },
	        creditor: {
	          name: to.name
	        },
	        creditorAccount: {
	          identification: creditIdentification,
	          name: to.name
	        }
	      }]
	    };
	
	    if (payment.urgent) {
	      data.instructionPriority = 'HIGH';
	    }
	
	    var creditInfo = data.creditTransferTransactionInformation[0];
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
	        endDate: payment.endingType === _constants.EndingType.ON ? schedule.endDate : null,
	        repeat: payment.endingType === _constants.EndingType.AFTER ? schedule.repeat : null
	      };
	    }
	
	    if (_typeof(payment.additions) === 'object') {
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
	  var getNewContactData = function getNewContactData(payment) {
	    return {
	      name: payment.to.name,
	      accounts: [{
	        IBAN: payment.to.identifier
	      }]
	    };
	  };
	
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
	  var saveContact = function saveContact(contact) {
	    return model.createContact(contact).then(updateAccountsTo);
	  };
	
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
	  var isPaymentDataValid = function isPaymentDataValid(paymentData) {
	    return !!paymentPreferences.recurring || paymentData.schedule && paymentData.schedule.transferFrequency && paymentData.schedule.transferFrequency.value === _constants.singleTransfer.value;
	  };
	
	  /**
	   * @description
	   * Validate payment data before moving payment state to review.
	   *
	   * @name InitiatePaymentController#reviewPayment
	   * @type {function}
	   * @param payment   The payment to validate
	   * @returns {Promise} A promise that will be fulfilled with the validation result
	   */
	  var reviewPayment = function reviewPayment(payment) {
	    $ctrl.paymentLoading = true;
	    $ctrl.paymentValidation.messages = [];
	    // @TODO: replace with model method to validate in server when implemented
	    return Promise.resolve(payment).then(function (data) {
	      return hooks.validatePayment(data);
	    }).then(function (_ref) {
	      var valid = _ref.valid,
	          messages = _ref.messages;
	
	      $ctrl.paymentLoading = false;
	      if (!valid) {
	        return Promise.reject(messages);
	      }
	      return { valid: valid, messages: messages };
	    }).catch(function (errorMessages) {
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
	  var makePayment = function makePayment(paymentData) {
	    var saveContactPromise = void 0;
	
	    $ctrl.paymentLoading = true;
	    clearPaymentError();
	
	    // save new contact (if needed)
	    var isCreditorDefined = paymentData.to && paymentData.to.name && paymentData.to.identifier;
	    if ($ctrl.saveNewContact && isCreditorDefined) {
	      var contact = getNewContactData(paymentData);
	
	      saveContactPromise = Promise.resolve(saveContact(contact).then(function () {
	        $ctrl.saveNewContact = false;
	      }).catch(function () {
	        $ctrl.saveNewContact = true;
	      }));
	    }
	
	    // make sure we are processing single payment if recurring is disabled via preferences
	    var requestPromise = void 0;
	    if (!isPaymentDataValid(paymentData)) {
	      requestPromise = Promise.reject({ code: _libBbModelErrors.E_USER });
	    } else {
	      var paymentOrderData = getPaymentOrderData(paymentData);
	      requestPromise = Promise.resolve(model.createPaymentOrder(paymentOrderData));
	    }
	
	    requestPromise.then(function (resp) {
	      $ctrl.createPaymentResponseStatus = resp.data.status;
	      $ctrl.paymentLoading = false;
	    }).catch(function (error) {
	      if (saveContactPromise) {
	        $ctrl.saveNewContact = false;
	      }
	      $ctrl.paymentLoading = false;
	      $ctrl.paymentSubmitError = (0, _message.createPaymentErrorMessage)(error);
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
	    paymentPreferences: paymentPreferences,
	    /**
	     * @description
	     * Available payment order ending types
	     *
	     * @name InitiatePaymentController#EndingType
	     * @type {object}
	     */
	    EndingType: _constants.EndingType,
	    /**
	     * @description
	     * Single Transfer constant
	     *
	     * @name InitiatePaymentController#singleTransfer
	     * @type {string}
	     */
	    singleTransfer: _constants.singleTransfer,
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
	    $onInit: $onInit,
	    resetPayment: resetPayment,
	    onAccountFromChange: onAccountFromChange,
	    updateRate: updateRate,
	    canSaveNewContact: canSaveNewContact,
	    clearPaymentError: clearPaymentError,
	    reviewPayment: reviewPayment,
	    makePayment: makePayment,
	    updateAccounts: updateAccounts
	  });
	}

/***/ }),

/***/ 125:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.createPaymentErrorMessage = exports.createAccountsLoadErrorMessage = undefined;
	
	var _accountsErrorMessage, _paymentErrorMessages;
	
	var _libBbModelErrors = __webpack_require__(95);
	
	var _constants = __webpack_require__(126);
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	var accountsErrorMessages = (_accountsErrorMessage = {}, _defineProperty(_accountsErrorMessage, _libBbModelErrors.E_AUTH, 'account.model.error.auth'), _defineProperty(_accountsErrorMessage, _libBbModelErrors.E_CONNECTIVITY, 'account.model.error.connectivity'), _defineProperty(_accountsErrorMessage, _libBbModelErrors.E_USER, 'account.model.error.user'), _defineProperty(_accountsErrorMessage, _libBbModelErrors.E_UNEXPECTED, 'account.model.error.unexpected'), _accountsErrorMessage);
	
	var paymentErrorMessages = (_paymentErrorMessages = {}, _defineProperty(_paymentErrorMessages, _libBbModelErrors.E_AUTH, 'payment.model.error.auth'), _defineProperty(_paymentErrorMessages, _libBbModelErrors.E_CONNECTIVITY, 'payment.model.error.connectivity'), _defineProperty(_paymentErrorMessages, _libBbModelErrors.E_USER, 'payment.model.error.user'), _defineProperty(_paymentErrorMessages, _libBbModelErrors.E_UNEXPECTED, 'payment.model.error.unexpected'), _paymentErrorMessages);
	
	/**
	 * @name breachIsShadow
	 * @description
	 * Returns true if the report is "shadow" and false otherwise
	 * @inner
	 *
	 * @param {object[]} report
	 * @returns {boolean}
	 */
	var breachIsShadow = function breachIsShadow() {
	  var report = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
	  return report.length === 1 && report[0].shadow || report.length > 1 && report.filter(function (item) {
	    return item.shadow === true;
	  }).length === report.length;
	};
	
	/**
	 * @name createPaymentLimitsBreachMessage
	 * @description
	 * Create a view object to show
	 * complex message in case of limits breach
	 *
	 * @inner
	 * @type {function}
	 * @param {module:lib-bb-model-errors.ModelError} modelError Error from the model
	 * @returns {object|null} New payment limits breach error object
	 */
	var createPaymentLimitsBreachMessage = function createPaymentLimitsBreachMessage(modelError) {
	  return modelError[_constants.BreachReport.key] ? {
	    messageKey: breachIsShadow(modelError[_constants.BreachReport.key]) ? _constants.BreachReport.shadowMessageKey : _constants.BreachReport.messageKey,
	    breach: true,
	    shadow: breachIsShadow(modelError[_constants.BreachReport.key]),
	    report: modelError[_constants.BreachReport.key],
	    type: 'danger'
	  } : null;
	};
	
	/**
	 * @description
	 * Create i18n error key from error model based on error message code
	 *
	 * @inner
	 * @type {function}
	 * @param {module:lib-bb-model-errors.ModelError} modelError Error from the model
	 * @returns {object} Accounts load error
	 */
	var createAccountsLoadErrorMessage = exports.createAccountsLoadErrorMessage = function createAccountsLoadErrorMessage(modelError) {
	  return {
	    messageKey: accountsErrorMessages[modelError.code] || accountsErrorMessages[_libBbModelErrors.E_UNEXPECTED],
	    type: 'warning'
	  };
	};
	
	/**
	 * @description
	 * Create i18n error key from error model based on error message code
	 *
	 * @inner
	 * @type {function}
	 * @param {module:lib-bb-model-errors.ModelError} modelError Error from the model
	 * @returns {object} New payment order error
	 */
	var createPaymentErrorMessage = exports.createPaymentErrorMessage = function createPaymentErrorMessage(modelError) {
	  return createPaymentLimitsBreachMessage(modelError) || {
	    messageKey: paymentErrorMessages[modelError.code] || paymentErrorMessages[_libBbModelErrors.E_UNEXPECTED],
	    type: 'warning'
	  };
	};

/***/ }),

/***/ 126:
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * Widget preferences enum
	 * @name Preference
	 * @type {object}
	 */
	var Preference = exports.Preference = {
	  SAVE_CONTACT: 'bb.payment.save.contact',
	  SHOW_EXCHANGE_RATE: 'bb.payment.show.exchange',
	  URGENT: 'bb.payment.urgent',
	  RECURRING: 'bb.payment.recurring'
	};
	
	/**
	 * @description
	 * Single transfer constant
	 *
	 * @name singleTransfer
	 * @type {object}
	 */
	var singleTransfer = exports.singleTransfer = {
	  name: 'form.schedule.frequency.once',
	  value: 'ONCE'
	};
	
	/**
	 * Widget events enum
	 * @type {object}
	 */
	var Event = exports.Event = {
	  CONTACT_CREATE_DONE: 'bb.event.contact.create.done',
	  CONTACT_DELETE_DONE: 'bb.event.contact.delete.done',
	  CONTACT_UPDATE_DONE: 'bb.event.contact.update.done',
	  ACCOUNT_SELECTED: 'bb.event.account.selected'
	};
	
	/**
	 * @description
	 * Available payment order ending types
	 *
	 * @name EndingType
	 * @type {object}
	 */
	var EndingType = exports.EndingType = {
	  NEVER: 'never',
	  ON: 'on',
	  AFTER: 'after'
	};
	
	/**
	 * @description
	 * Limit breach report constants
	 *
	 * @type {object}
	 */
	var BreachReport = exports.BreachReport = {
	  key: 'breachReport',
	  messageKey: 'payment.model.error.breach',
	  shadowMessageKey: 'payment.model.error.breach.shadow'
	};

/***/ }),

/***/ 127:
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * @name Hooks
	 * @type {object}
	 *
	 * @description
	 * Hooks for widget-bb-initiate-payment-ng
	 */
	
	/**
	 * @name Hooks#processAccountsTo
	 * @type {function}
	 *
	 * @description
	 * Hook for processing account list in 'to' field (credit).
	 * Assigned to $ctrl.accountsTo.
	 *
	 * @param {object} debitAccount Selected debit account (can be null).
	 * @param {function} getCreditAccounts Function to retrieve all credit accounts
	 * @param {function} getExternalContacts Function to retrieve all external contacts
	 * formatted like Product kind
	 * @returns {Promise.<array.<module:model-bb-product-summary-ng.Product>>}
	 *  Promise that retrieves array of accounts.
	 */
	// eslint-disable-next-line no-unused-vars
	var processAccountsTo = exports.processAccountsTo = function processAccountsTo(debitAccount, getCreditAccounts, getExternalContacts) {
	  return getCreditAccounts(debitAccount && debitAccount.id || null);
	};
	
	/**
	 * @name Hooks#getRecurringTransactionDay
	 * @type {function}
	 *
	 * @description
	 * Denotes day on which transfer should be executed.
	 * For weekly it will be 1..7 indicating weekday.
	 * For monthly it will be 1..31 indicating day of month.
	 * For yearly it will be 1..12 indicating month of the year
	 *
	 * @param {object} schedule Recurring payment schedule object
	 * @returns {number} Recurring transaction day
	 */
	var getRecurringTransactionDay = exports.getRecurringTransactionDay = function getRecurringTransactionDay(schedule) {
	  return schedule.startDate.getDate();
	};
	
	/**
	 * @name Hooks#processCurrencies
	 * @type {function}
	 *
	 * @description
	 * Processes currencies array returned from the service
	 *
	 * @param {object[]} currencies Initial currencies
	 * @returns {object[]} Processed currencies
	 */
	var processCurrencies = exports.processCurrencies = function processCurrencies(currencies) {
	  return currencies;
	};
	
	/**
	 * @name Hooks#processAccountsFrom
	 * @type {function}
	 *
	 * @description
	 * Hook for processing account list in 'from' field (debit).
	 * Assigned to $ctrl.accountsFrom.
	 *
	 * @param {object[]} accounts Initial debit accounts.
	 * @returns {object[]} Processed debit accounts.
	 */
	var processAccountsFrom = exports.processAccountsFrom = function processAccountsFrom(accounts) {
	  return accounts;
	};
	
	/**
	 * @name Hooks#processNewPaymentData
	 * @type {function}
	 *
	 * @description
	 * Hook for processing new payment order data.
	 * Will be passed to model.createPaymentOrder method.
	 *
	 * @param {object} data Initial new payment order data.
	 * @returns {object} Processed new payment order data.
	 */
	var processNewPaymentData = exports.processNewPaymentData = function processNewPaymentData(data) {
	  return data;
	};
	
	/**
	 * @name Hooks#validatePayment
	 * @type {function}
	 *
	 * @description
	 * Hook for reviewing new payment order data.
	 * Assigned to $ctrl.reviewPayment
	 *
	 * @param {object} data Initial new payment order data.
	 * @returns {Validation} Payment validation object.
	 */
	// eslint-disable-next-line no-unused-vars
	var validatePayment = exports.validatePayment = function validatePayment(payment) {
	  return { valid: true, messages: [] };
	};
	
	/**
	 * Validation object
	 * @typedef {object}  Validation
	 * @property  {boolean} valid
	 * @property  {ValidationMessage[]} messages
	 */
	
	/**
	 * Validation Messages object
	 * @typedef {object} ValidationMessage
	 * @property {string} messageKey
	 * @property {string} type
	 */

/***/ })

/******/ })
});
;
//# sourceMappingURL=widget-bb-initiate-payment-ng.js.map