(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vendor-bb-angular"), require("lib-bb-widget-ng"), require("lib-bb-storage-ng"), require("lib-bb-event-bus-ng"), require("lib-bb-widget-extension-ng"), require("lib-bb-intent-ng"), require("model-bb-payment-orders-ng"));
	else if(typeof define === 'function' && define.amd)
		define("widget-bbm-initiate-payment-ng", ["vendor-bb-angular", "lib-bb-widget-ng", "lib-bb-storage-ng", "lib-bb-event-bus-ng", "lib-bb-widget-extension-ng", "lib-bb-intent-ng", "model-bb-payment-orders-ng"], factory);
	else if(typeof exports === 'object')
		exports["widget-bbm-initiate-payment-ng"] = factory(require("vendor-bb-angular"), require("lib-bb-widget-ng"), require("lib-bb-storage-ng"), require("lib-bb-event-bus-ng"), require("lib-bb-widget-extension-ng"), require("lib-bb-intent-ng"), require("model-bb-payment-orders-ng"));
	else
		root["widget-bbm-initiate-payment-ng"] = factory(root["vendor-bb-angular"], root["lib-bb-widget-ng"], root["lib-bb-storage-ng"], root["lib-bb-event-bus-ng"], root["lib-bb-widget-extension-ng"], root["lib-bb-intent-ng"], root["model-bb-payment-orders-ng"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_88__, __WEBPACK_EXTERNAL_MODULE_89__, __WEBPACK_EXTERNAL_MODULE_93__, __WEBPACK_EXTERNAL_MODULE_120__, __WEBPACK_EXTERNAL_MODULE_121__, __WEBPACK_EXTERNAL_MODULE_122__, __WEBPACK_EXTERNAL_MODULE_123__) {
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

	module.exports = __webpack_require__(141);

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

/***/ 141:
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
	
	var _libBbIntentNg = __webpack_require__(122);
	
	var _libBbIntentNg2 = _interopRequireDefault(_libBbIntentNg);
	
	var _libBbWidgetExtensionNg = __webpack_require__(121);
	
	var _libBbWidgetExtensionNg2 = _interopRequireDefault(_libBbWidgetExtensionNg);
	
	var _modelBbPaymentOrdersNg = __webpack_require__(123);
	
	var _modelBbPaymentOrdersNg2 = _interopRequireDefault(_modelBbPaymentOrdersNg);
	
	var _libBbStorageNg = __webpack_require__(93);
	
	var _libBbStorageNg2 = _interopRequireDefault(_libBbStorageNg);
	
	var _form = __webpack_require__(142);
	
	var _form2 = _interopRequireDefault(_form);
	
	var _review = __webpack_require__(144);
	
	var _review2 = _interopRequireDefault(_review);
	
	var _selectAccount = __webpack_require__(145);
	
	var _selectAccount2 = _interopRequireDefault(_selectAccount);
	
	var _schedule = __webpack_require__(146);
	
	var _schedule2 = _interopRequireDefault(_schedule);
	
	var _sharedApi = __webpack_require__(147);
	
	var _sharedApi2 = _interopRequireDefault(_sharedApi);
	
	var _viewModel = __webpack_require__(148);
	
	var _viewModel2 = _interopRequireDefault(_viewModel);
	
	var _defaultHooks = __webpack_require__(149);
	
	var defaultHooks = _interopRequireWildcard(_defaultHooks);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * @module widget-bbm-initiate-payment-ng
	 *
	 * @description
	 * Mobile Initiate Payment widget.
	 *
	 * @example
	 *  <!-- Initiate Payment Form Extension -->
	 *  <div ng-controller="FormController as $ctrl">
	 *    <form name="initiate-payment-form">
	 *      <input
	 *        type="text"
	 *        name="description"
	 *        value="$ctrl.state.payment.data.description"/>
	 *    </form>
	 *  </div>
	 *
	 *  <!-- Initiate Payment Review Extension -->
	 *  <div ng-controller="ReviewController as $ctrl">
	 *    <ul>
	 *      <li>
	 *        <div i18n-key="label.description"></div>
	 *        <div data-ng-bind="$ctrl.state.payment.data.description"></div>
	 *      </li>
	 *    </ul>
	 *  </div>
	 *
	 *  <!-- Initiate Payment Select Account Extension -->
	 *  <div ng-controller="SelectAccountController as $ctrl">
	 *    <ul>
	 *      <li ng-repeat="account in $ctrl.state.beneficiaries.data.creditAccounts track by $index">
	 *        <div data-ng-bind="account.name"></div>
	 *        <div data-ng-bind="account.identifier"></div>
	 *      </li>
	 *    </ul>
	 *  </div>
	 *
	 *  <!-- Initiate Payment Schedule Extension -->
	 *  <div ng-controller="ScheduleController as $ctrl">
	 *    <div>
	 *      <input
	 *        type="number"
	 *        name="repeat"
	 *        value="$ctrl.state.payment.data.schedule.repeat"/>
	 *    </div>
	 *  </div>
	 */
	var moduleKey = 'widget-bbm-initiate-payment-ng';
	var sharedApiKey = moduleKey + ':sharedApi';
	var hooksKey = moduleKey + ':hooks';
	var viewModelKey = moduleKey + ':viewModel';
	
	exports.default = _vendorBbAngular2.default.module(moduleKey, [_libBbStorageNg2.default, _libBbEventBusNg2.default, _libBbIntentNg2.default, _modelBbPaymentOrdersNg2.default, _libBbWidgetNg2.default]).factory(hooksKey, (0, _libBbWidgetExtensionNg2.default)(defaultHooks)).factory(viewModelKey, [
	// dependencies to inject
	_libBbStorageNg.bbStorageServiceKey,
	
	// into
	_viewModel2.default]).factory(sharedApiKey, [
	// dependencies to inject
	
	// dependencies to inject
	
	// dependencies to inject
	
	// dependencies to inject
	
	// dependencies to inject
	_libBbWidgetNg.widgetKey, _modelBbPaymentOrdersNg.modelPaymentOrdersKey, viewModelKey, _libBbEventBusNg.eventBusKey, hooksKey, '$q',
	
	// into
	_sharedApi2.default]).controller('FormController', [_libBbWidgetNg.widgetKey, _modelBbPaymentOrdersNg.modelPaymentOrdersKey, viewModelKey, sharedApiKey, _libBbIntentNg.bbIntentKey, _libBbEventBusNg.eventBusKey, hooksKey, '$q',
	
	// into
	_form2.default]).controller('ReviewController', [_libBbWidgetNg.widgetKey, _modelBbPaymentOrdersNg.modelPaymentOrdersKey, viewModelKey, sharedApiKey, _libBbIntentNg.bbIntentKey, _libBbEventBusNg.eventBusKey,
	
	// into
	_review2.default]).controller('SelectAccountController', [_libBbWidgetNg.widgetKey, _modelBbPaymentOrdersNg.modelPaymentOrdersKey, viewModelKey, sharedApiKey, _libBbIntentNg.bbIntentKey, _libBbEventBusNg.eventBusKey,
	
	/* into */
	_selectAccount2.default]).controller('ScheduleController', [_libBbWidgetNg.widgetKey, _modelBbPaymentOrdersNg.modelPaymentOrdersKey, viewModelKey, sharedApiKey, _libBbIntentNg.bbIntentKey, _libBbEventBusNg.eventBusKey,
	
	/* into */
	_schedule2.default]).name;
	
	/**
	 * @typedef {Object} AccountView
	 * @property {string} id The internal account identifier
	 * @property {string} name The account's name, suitable for display to users
	 * @property {?string} identifier The identifier of the account from the user's perspective
	 * @property {?string} amount The most important associated value to be displayed
	 * @property {?string} currency Account currency
	 * @property {?boolean} external Whether the account is external
	 */

/***/ }),

/***/ 142:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();
	
	exports.default = FormController;
	
	var _constants = __webpack_require__(143);
	
	function FormController(widget, model, viewModel, sharedApi, bbIntent, bus, hooks, Promise) {
	  /**
	   * @name FormController
	   * @ngkey FormController
	   *
	   * @description
	   * Initiate payment widget form controller.
	   * Loads debit accounts and beneficiaries on start.
	   * Provides API to make a payment.
	   *
	   * @type {Object}
	   */
	  var ctrl = this;
	
	  /**
	   * @description
	   * A set of intents that the Form controller uses or handles.
	   *
	   * @name intents
	   * @type {Object}
	   * @inner
	   */
	  var intents = {};
	
	  /**
	   * @description
	   * The promise of the request to load debit accounts.
	   *
	   * @name debitAccountsPromise
	   * @type {Promise}
	   * @inner
	   */
	  var debitAccountsPromise = void 0;
	
	  var isUrgentPaymentAllowed = sharedApi.isUrgentPaymentAllowed,
	      preferences = sharedApi.preferences;
	
	  /**
	   * @description
	   * The promise of the request to load beneficiaries.
	   *
	   * @name beneficiariesPromise
	   * @type {Promise}
	   * @inner
	   */
	
	  var beneficiariesPromise = void 0;
	
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
	  var isExternalBeneficiary = function isExternalBeneficiary(beneficiary) {
	    return Boolean(beneficiary && (beneficiary.external || beneficiary.isNew));
	  };
	
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
	  var isExternalTransferAllowed = function isExternalTransferAllowed(debitAccount) {
	    return !debitAccount || !debitAccount.id || debitAccount.externalTransferAllowed;
	  };
	
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
	  var loadCreditAccounts = function loadCreditAccounts(debitAccount) {
	    return model.getAccountsTo(debitAccount ? debitAccount.id : null);
	  };
	
	  /**
	   * @description
	   * Loads contacts.
	   *
	   * @name loadContacts
	   * @type {function}
	   * @returns {Promise.<Array>}
	   * @inner
	   */
	  var loadContacts = function loadContacts() {
	    if (viewModel.getContacts()) {
	      return Promise.resolve(viewModel.getContacts());
	    }
	
	    return model.getExternals().then(function (contacts) {
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
	  var loadBeneficiaries = function loadBeneficiaries() {
	    var debitAccount = viewModel.getSelectedDebitAccount();
	
	    var requests = [loadCreditAccounts(debitAccount), isExternalTransferAllowed(debitAccount) ? loadContacts() : []];
	
	    viewModel.setBeneficiariesLoading(true);
	
	    beneficiariesPromise = Promise.all(requests).then(function (_ref) {
	      var _ref2 = _slicedToArray(_ref, 2),
	          creditAccounts = _ref2[0],
	          contacts = _ref2[1];
	
	      var processedData = hooks.processBeneficiaries(creditAccounts, contacts);
	
	      viewModel.setBeneficiaries(processedData);
	      viewModel.setBeneficiariesError(null);
	      viewModel.setBeneficiariesLoading(false);
	
	      return processedData;
	    }).catch(function (error) {
	      viewModel.setBeneficiariesError(error); // TODO Convert to UI error
	      viewModel.setBeneficiariesLoading(false);
	
	      bus.publish(_constants.Event.BENEFICIARIES_LOAD_FAILED, {
	        error: error
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
	  var loadDebitAccounts = function loadDebitAccounts() {
	    viewModel.setDebitAccountsLoading(true);
	
	    debitAccountsPromise = model.getAccountsFrom().then(function (data) {
	      var processedData = hooks.processDebitAccounts(data);
	
	      viewModel.setDebitAccounts(processedData);
	      viewModel.setDebitAccountsError(null);
	      viewModel.setDebitAccountsLoading(false);
	
	      return processedData;
	    }).catch(function (error) {
	      viewModel.setDebitAccountsError(error); // TODO: Convert to UI error
	      viewModel.setDebitAccountsLoading(false);
	
	      bus.publish(Error.DEBIT_ACCOUNTS_LOAD_FAILED, {
	        error: error
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
	  var loadCurrencies = function loadCurrencies() {
	    viewModel.setCurrenciesLoading(true);
	
	    return model.getCurrencies().then(function (currencies) {
	      viewModel.setCurrencies(currencies);
	      viewModel.setCurrenciesError(null);
	      viewModel.setCurrenciesLoading(false);
	    }).catch(function (error) {
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
	  var initDebitAccounts = function initDebitAccounts() {
	    var debitAccounts = viewModel.getDebitAccounts();
	
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
	  var initBeneficiaries = function initBeneficiaries() {
	    var beneficiaries = viewModel.getBeneficiaries();
	
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
	  var initCurrencies = function initCurrencies() {
	    var currencies = viewModel.getCurrencies();
	    return currencies ? Promise.resolve(currencies) : loadCurrencies();
	  };
	
	  /**
	   * @description
	   * Initializes the payment state.
	   *
	   * @name initPaymentData
	   * @type {function}
	   *
	   * @param {boolean} reset
	   * @inner
	   */
	  var initPaymentData = function initPaymentData(reset) {
	    if (!viewModel.getPayment() || reset) {
	      var initialPayment = viewModel.getInitialPayment();
	      var processedInitialPayment = hooks.processInitialPaymentState(initialPayment);
	
	      viewModel.setPayment(processedInitialPayment);
	    }
	  };
	
	  /**
	   * @description
	   * Checks if given accounts A and B are the same account.
	   *
	   * @name isSameAccount
	   * @type {function}
	   *
	   * @param {AccountView} accountA
	   * @param {AccountView} accountB
	   * @returns {boolean}
	   * @inner
	   */
	  var isSameAccount = function isSameAccount(accountA, accountB) {
	    return accountA.id === accountB.id;
	  };
	
	  /**
	   * @description
	   * Resets the payment beneficiary, if it is not valid for the currently selected
	   * debit account.
	   *
	   * @name resetBeneficiaryIfNeeded
	   * @type {function}
	   * @inner
	   */
	  var resetBeneficiaryIfNeeded = function resetBeneficiaryIfNeeded() {
	    var beneficiary = viewModel.getSelectedBeneficiary();
	    var debitAccount = viewModel.getSelectedDebitAccount();
	
	    if (beneficiary && debitAccount) {
	      var isBeneficiaryInvalid = isSameAccount(beneficiary, debitAccount) || isExternalBeneficiary(beneficiary) && !isExternalTransferAllowed(debitAccount);
	
	      if (isBeneficiaryInvalid) {
	        viewModel.resetSelectedBeneficiary();
	      }
	    }
	  };
	
	  /**
	   * @description
	   * Handles the intent to change the selected beneficiary.
	   *
	   * @name setBeneficiary
	   * @type {function}
	   * @param {AccountView} beneficiary
	   * @inner
	   */
	  var setBeneficiary = function setBeneficiary(beneficiary) {
	    viewModel.setSelectedBeneficiary(beneficiary);
	  };
	
	  /**
	   * @description
	   * Handles the intent to change the selected debit account.
	   *
	   * @name setDebitAccount
	   * @type {function}
	   * @param {AccountView} account
	   * @inner
	   */
	  var setDebitAccount = function setDebitAccount(account) {
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
	   * @inner
	   */
	  var isSameContact = function isSameContact(contactA, contactB) {
	    return Boolean(contactA.name === contactB.name && contactA.identifier === contactB.identifier);
	  };
	
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
	  var isExistingContact = function isExistingContact(contacts, contact) {
	    return (contacts || []).some(function (contactItem) {
	      return isSameContact(contact, contactItem);
	    });
	  };
	
	  /**
	   * @description
	   * Checks whether the beneficiary can be saved to the address book as a new contact.
	   *
	   * @name FormController#canSaveContact
	   * @type {function}
	   *
	   * @returns {boolean}
	   */
	  var canSaveContact = function canSaveContact() {
	    return viewModel.isBeneficiaryComplete() && viewModel.isBeneficiaryExternal() && !isExistingContact(viewModel.getContacts(), viewModel.getSelectedBeneficiary());
	  };
	
	  /**
	   * @description
	   * Resets the payment form.
	   *
	   * @name FormController#resetPayment
	   * @type {function}
	   */
	  var resetPayment = function resetPayment() {
	    initPaymentData(true);
	    return viewModel.save();
	  };
	
	  /**
	   * @description
	   * Initiates the process of selecting an account by calling
	   * the "view.payment.account.select" intent with the given type.
	   *
	   * @name selectAccount
	   * @type {function}
	   *
	   * @param {string} type
	   * @returns {Promise}
	   * @inner
	   */
	  var selectAccount = function selectAccount(type) {
	    var accountsPromise = type === _constants.AccountType.DEBIT ? debitAccountsPromise : beneficiariesPromise;
	
	    if (!accountsPromise) {
	      return Promise.reject('Controller must be initialized');
	    }
	
	    bus.publish(_constants.Event.SELECT_ACCOUNT_LOAD_START, { type: type });
	
	    return Promise.resolve(accountsPromise).then(function () {
	      return viewModel.save();
	    }).then(function () {
	      intents.selectAccount({ type: type });
	
	      bus.publish(_constants.Event.SELECT_ACCOUNT_LOAD_DONE, { type: type });
	    }).catch(function (error) {
	      bus.publish(_constants.Event.SELECT_ACCOUNT_FAILED, {
	        error: error,
	        type: type
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
	  var selectBeneficiary = function selectBeneficiary() {
	    return selectAccount(_constants.AccountType.CREDIT);
	  };
	
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
	  var selectDebitAccount = function selectDebitAccount() {
	    return selectAccount(_constants.AccountType.DEBIT);
	  };
	
	  /**
	   * @description
	   * Initiates the process of a scheduling a payment by calling
	   * the "view.payment.schedule.select" intent, that navigates the user
	   * to the Payment Schedule view.
	   *
	   * @name FormController#selectSchedule
	   * @type {function}
	   */
	  var selectSchedule = function selectSchedule() {
	    viewModel.save().then(function () {
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
	  var setSaveContact = function setSaveContact(saveContact) {
	    return Object.assign(viewModel.state, {
	      saveContact: Boolean(saveContact)
	    });
	  };
	
	  /**
	   * @description
	   * Updates state of the "urgent" flag.
	   *
	   * @name FormController#setUrgentPayment
	   * @type {function}
	   *
	   * @param {boolean} urgent
	   */
	  var setUrgentPayment = function setUrgentPayment(urgent) {
	    var payment = viewModel.state.payment.data;
	    if (payment) {
	      Object.assign(payment, { urgent: urgent });
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
	  var showReview = function showReview() {
	    return viewModel.save().then(function () {
	      intents.showReview();
	    });
	  };
	
	  /**
	   * @description
	   * Starts a new payment.
	   *
	   * @name startNewPayment
	   * @type {function}
	   * @param {Object} [initialPaymentData]
	   * @inner
	   */
	  var startNewPayment = function startNewPayment(initialPaymentData) {
	    resetPayment();
	
	    if (initialPaymentData) {
	      var debitAccount = initialPaymentData.debitAccount;
	
	      if (debitAccount) {
	        setDebitAccount(debitAccount);
	      }
	    }
	  };
	
	  /**
	   * @description
	   * Makes the payment and saves the beneficiary as a contact if needed.
	   *
	   * @name makePayment
	   * @type {function}
	   * @inner
	   */
	  var makePayment = function makePayment() {
	    sharedApi.saveContactIfNeeded();
	
	    return sharedApi.makePaymentWithAuthorization().then(function () {
	      return resetPayment();
	    });
	  };
	
	  /**
	   * @description
	   * Depending on the preference either navigates the user to the review page
	   * or makes the payment.
	   *
	   * @name FormController#submitPayment
	   * @type {function}
	   *
	   * @returns {Promise} Promise that resolves once the operation is complete.
	   */
	  var submitPayment = function submitPayment() {
	    return preferences.reviewStep ? showReview() : makePayment();
	  };
	
	  /**
	   * @description
	   * Reloads beneficiaries.
	   *
	   * @name updateBeneficiaries
	   * @type {function}
	   *
	   * @returns {Promise}
	   * @inner
	   */
	  var updateBeneficiaries = function updateBeneficiaries() {
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
	  var bindEvents = function bindEvents() {
	    bus.subscribe(_constants.Event.CONTACT_CREATE_DONE, function () {
	      updateBeneficiaries();
	    });
	
	    bus.subscribe(_constants.Event.CONTACT_UPDATE_DONE, function () {
	      updateBeneficiaries();
	    });
	
	    bus.subscribe(_constants.Event.CONTACT_DELETE_DONE, function () {
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
	  var $onInit = function $onInit() {
	    return viewModel.fetch().then(function () {
	      initPaymentData();
	
	      initDebitAccounts();
	      initBeneficiaries();
	      initCurrencies();
	
	      bindEvents();
	
	      /**
	       * This event (cxp.item.loaded) is deprecated in Mobile SDK version > 3.0
	       * and will be removed with the update to widget collection 3 (WC3)
	       */
	      bus.publish(_constants.Event.CXP_ITEM_LOADED, {
	        id: widget.getId()
	      });
	
	      bus.publish(_constants.Event.BB_ITEM_LOADED, {
	        id: widget.getId()
	      });
	    });
	  };
	
	  /**
	   * @description
	   * The intent to select an account.
	   *
	   * @name intents#selectAccount
	   * @type {function}
	   * @inner
	   */
	  intents.selectAccount = bbIntent.create(_constants.Intent.SELECT_ACCOUNT, function (_ref3) {
	    var type = _ref3.type,
	        selectedAccount = _ref3.selectedAccount;
	
	    viewModel.fetch().then(function () {
	      return type === _constants.AccountType.CREDIT ? setBeneficiary(selectedAccount) : setDebitAccount(selectedAccount);
	    });
	  });
	
	  /**
	   * @description
	   * The intent to schedule a payment.
	   *
	   * @name intents#selectSchedule
	   * @type {function}
	   * @inner
	   */
	  intents.selectSchedule = bbIntent.create(_constants.Intent.SELECT_SCHEDULE, function () {
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
	  intents.showReview = bbIntent.create(_constants.Intent.SHOW_REVIEW);
	
	  bbIntent.handle(_constants.Intent.INITIATE_PAYMENT, function (initialPaymentData) {
	    startNewPayment(initialPaymentData);
	  });
	
	  bbIntent.handle(_constants.Intent.SHOW_FORM, function () {
	    viewModel.fetch().then(function () {
	      startNewPayment();
	    });
	  });
	
	  bbIntent.init(function () {});
	
	  Object.defineProperty(ctrl, 'state', {
	    get: function get() {
	      return viewModel.state;
	    }
	  });
	
	  Object.assign(ctrl, {
	    /**
	     * @description
	     * Checks if urgent payment is available for the current transaction.
	     *
	     * Returns true, if beneficiary allows urgent payments, payment is scheduled only for once,
	     * payment is not scheduled for future, otherwise false.
	     *
	     * @name FormController#isUrgentPaymentAllowed
	     * @type {function}
	     *
	     * @params beneficiary, schedule, isUrgent
	     * @returns {boolean}
	     */
	    isUrgentPaymentAllowed: isUrgentPaymentAllowed,
	    /**
	     * @description
	     * Payment preferences set in the widget preferences.
	     *
	     * @name FormController#preferences
	     * @type {Object}
	     */
	    preferences: preferences,
	    $onInit: $onInit,
	    canSaveContact: canSaveContact,
	    resetPayment: resetPayment,
	    selectBeneficiary: selectBeneficiary,
	    selectDebitAccount: selectDebitAccount,
	    selectSchedule: selectSchedule,
	    setSaveContact: setSaveContact,
	    setUrgentPayment: setUrgentPayment,
	    submitPayment: submitPayment
	  });
	}
	
	/**
	 * @typedef {Object} InitiatePaymentIntentParameters
	 * @property {module:model-bb-product-summary-ng.Product?} debitAccount
	 *   An optional debit account for a new payment.
	 */

/***/ }),

/***/ 143:
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var AccountType = exports.AccountType = {
	  DEBIT: 'debit',
	  CREDIT: 'credit'
	};
	
	/**
	 * Pubsub events
	 * @type {Object}
	 */
	var Event = exports.Event = {
	  CXP_ITEM_LOADED: 'cxp.item.loaded',
	  BB_ITEM_LOADED: 'bb.item.loaded',
	
	  CONTACT_CREATE_START: 'bb.event.contact.create.start',
	  CONTACT_CREATE_DONE: 'bb.event.contact.create.done',
	  CONTACT_CREATE_FAILED: 'bb.event.contact.create.failed',
	  CONTACT_DELETE_DONE: 'bb.event.contact.delete.done',
	  CONTACT_UPDATE_DONE: 'bb.event.contact.update.done',
	
	  BENEFICIARIES_LOAD_FAILED: 'bb.event.payment.beneficiaries.load.failed',
	  DEBIT_ACCOUNTS_LOAD_FAILED: 'bb.event.payment.debitAccounts.load.failed',
	
	  PAYMENT_DONE: 'bb.event.payment.done',
	  PAYMENT_FAILED: 'bb.event.payment.failed',
	  PAYMENT_START: 'bb.event.payment.started',
	
	  SELECT_ACCOUNT_LOAD_START: 'bb.event.payment.selectAccount.load.start',
	  SELECT_ACCOUNT_LOAD_DONE: 'bb.event.payment.selectAccount.load.done',
	  SELECT_ACCOUNT_FAILED: 'bb.event.payment.selectAccount.failed',
	
	  SHOW_PIN: 'bb.action.pin.show',
	  PIN_CONFIRMATION_SUCCESSFUL: 'bb.event.pin.confirmation.success'
	};
	
	/**
	 * Intents
	 * @type {Object}
	 */
	var Intent = exports.Intent = {
	  INITIATE_PAYMENT: 'intent.bb.paymentOrder.payment.initiate',
	  SELECT_ACCOUNT: 'view.payment.account.select',
	  SELECT_SCHEDULE: 'view.payment.schedule.select',
	  SHOW_FORM: 'view.payment.form.show',
	  SHOW_REVIEW: 'view.payment.review.show'
	};
	
	/**
	 * Payment mode. Denotes whether payment will be single or will be recurring.
	 * @type {Object}
	 */
	var PaymentMode = exports.PaymentMode = {
	  SINGLE: 'SINGLE',
	  RECURRING: 'RECURRING'
	};
	
	/**
	 * Options when to end a recurring payment.
	 * @type {Object}
	 */
	var RecurrenceEnding = exports.RecurrenceEnding = {
	  NEVER: 'NEVER',
	  ON: 'ON',
	  AFTER: 'AFTER'
	};
	
	/**
	 * Storage keys
	 * @type {Object}
	 */
	var StorageKey = exports.StorageKey = {
	  PAYMENT: 'bb.payment.payment'
	};
	
	/**
	 * Transfer frequency. Denotes how frequently the transfer should be made.
	 * @type {Object}
	 */
	var TransferFrequency = exports.TransferFrequency = {
	  ONCE: 'ONCE',
	  DAILY: 'DAILY',
	  WEEKLY: 'WEEKLY',
	  MONTHLY: 'MONTHLY',
	  QUARTERLY: 'QUARTERLY',
	  YEARLY: 'YEARLY'
	};
	
	/**
	 * Widget preferences enum
	 * @name Preference
	 * @type {object}
	 */
	var Preference = exports.Preference = {
	  REVIEW_STEP: 'bb.payment.review.step',
	  SHOW_PIN: 'bb.payment.show.pin',
	  URGENT: 'bb.payment.urgent',
	  RECURRING: 'bb.payment.recurring',
	  DESCRIPTION_REGEX: 'bb.payment.description.REGEX'
	};

/***/ }),

/***/ 144:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = ReviewController;
	
	var _constants = __webpack_require__(143);
	
	function ReviewController(widget, model, viewModel, sharedApi, bbIntent, bus) {
	  /**
	   * @name ReviewController
	   * @ngkey ReviewController
	   *
	   * @description
	   * Initiate payment widget review controller.
	   * Provides API to make a payment.
	   *
	   * @type {object}
	   */
	  var ctrl = this;
	
	  /**
	   * @description
	   * A set of intents that the Review controller uses or handles.
	   *
	   * @name intents
	   * @type {Object}
	   * @inner
	   */
	  var intents = {};
	
	  /**
	   * @description
	   * AngularJS Lifecycle hook used to initialize the controller.
	   *
	   * Prepares the view model.
	   *
	   * @name ReviewController#$onInit
	   * @type {function}
	   *
	   * @fires cxp.item.loaded
	   */
	  var $onInit = function $onInit() {
	    return viewModel.fetch().then(function () {
	      /**
	       * This event (cxp.item.loaded) is deprecated in Mobile SDK version > 3.0
	       * and will be removed with the update to widget collection 3 (WC3)
	       */
	      bus.publish(_constants.Event.CXP_ITEM_LOADED, {
	        id: widget.getId()
	      });
	
	      bus.publish(_constants.Event.BB_ITEM_LOADED, {
	        id: widget.getId()
	      });
	    });
	  };
	
	  /**
	   * @description
	   * Submits the payment.
	   *
	   * @name ReviewController#submitPayment
	   * @type {function}
	   * @returns {Promise}
	   */
	  var submitPayment = function submitPayment() {
	    sharedApi.saveContactIfNeeded();
	
	    return sharedApi.makePaymentWithAuthorization().then(function () {
	      return viewModel.save();
	    }).then(function () {
	      intents.showForm();
	    });
	  };
	
	  /**
	   * @description
	   * The intent to show the Form page
	   *
	   * @name intents#showForm
	   * @type {function}
	   * @inner
	   */
	  intents.showForm = bbIntent.create(_constants.Intent.SHOW_FORM);
	
	  bbIntent.handle(_constants.Intent.SHOW_REVIEW, function () {
	    viewModel.fetch();
	  });
	
	  bbIntent.init(function () {});
	
	  Object.defineProperty(ctrl, 'state', {
	    get: function get() {
	      return viewModel.state;
	    }
	  });
	
	  Object.assign(ctrl, {
	    $onInit: $onInit,
	    preferences: sharedApi.preferences,
	    submitPayment: submitPayment
	  });
	}

/***/ }),

/***/ 145:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = SelectAccountController;
	
	var _constants = __webpack_require__(143);
	
	function SelectAccountController(widget, model, viewModel, sharedApi, bbIntent, bus) {
	  /**
	   * @name SelectAccountController
	   * @ngkey SelectAccountController
	   *
	   * @description
	   * Initiate payment widget Select account controller.
	   * Provides API to select an account.
	   *
	   * @type {Object}
	   */
	  var ctrl = this;
	
	  /**
	   * @description
	   * A reference to the response function of the select account intent.
	   *
	   * @name selectAccountHandler
	   * @type {function}
	   * @inner
	   */
	  var selectAccountRespond = void 0;
	
	  /**
	   * @description
	   * AngularJS Lifecycle hook used to initialize the controller.
	   *
	   * Prepares the view model.
	   *
	   * @name SelectAccountController#$onInit
	   * @type {function}
	   *
	   * @fires cxp.item.loaded
	   */
	  var $onInit = function $onInit() {
	    return viewModel.fetch().then(function () {
	      /**
	       * This event (cxp.item.loaded) is deprecated in Mobile SDK version > 3.0
	       * and will be removed with the update to widget collection 3 (WC3)
	       */
	      bus.publish(_constants.Event.CXP_ITEM_LOADED, {
	        id: widget.getId()
	      });
	
	      bus.publish(_constants.Event.BB_ITEM_LOADED, {
	        id: widget.getId()
	      });
	    });
	  };
	
	  /**
	   * @description
	   * Fulfils the select account intent with the given account.
	   *
	   * @name SelectAccountController#selectAccount
	   * @type {function}
	   * @param {AccountView} account
	   */
	  var selectAccount = function selectAccount(account) {
	    viewModel.save().then(function () {
	      selectAccountRespond({
	        selectedAccount: account,
	        type: ctrl.accountType
	      });
	    });
	  };
	
	  bbIntent.handle(_constants.Intent.SELECT_ACCOUNT, function (_ref, respond) {
	    var type = _ref.type;
	
	    viewModel.fetch().then(function () {
	      ctrl.accountType = type;
	      selectAccountRespond = respond;
	    });
	  });
	
	  bbIntent.init(function () {});
	
	  Object.defineProperty(ctrl, 'state', {
	    get: function get() {
	      return viewModel.state;
	    }
	  });
	
	  Object.assign(ctrl, {
	    /**
	     * @description
	     * Enumeration of available types of accounts.
	     *
	     * @name SelectAccountController#AccountType
	     * @type {Object}
	     */
	    AccountType: _constants.AccountType,
	
	    /**
	     * @description
	     * The type of the account that needs to be selected.
	     * Possible values are "debit" or "credit".
	     *
	     * @name SelectAccountController#accountType
	     * @type {?string}
	     */
	    accountType: null,
	
	    $onInit: $onInit,
	    preferences: sharedApi.preferences,
	    selectAccount: selectAccount
	  });
	}

/***/ }),

/***/ 146:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = ScheduleController;
	
	var _constants = __webpack_require__(143);
	
	function ScheduleController(widget, model, viewModel, sharedApi, bbIntent, bus) {
	  /**
	   * @name ScheduleController
	   * @ngkey ScheduleController
	   *
	   * @description
	   * Initiate payment widget Schedule controller.
	   * Provides API to set a schedule of a payment.
	   *
	   * @type {Object}
	   */
	  var ctrl = this;
	
	  /**
	   * @description
	   * A reference to the response function of the select schedule intent.
	   *
	   * @name selectScheduleHandler
	   * @type {function}
	   * @inner
	   */
	  var selectScheduleRespond = void 0;
	
	  /**
	   * @description
	   * AngularJS Lifecycle hook used to initialize the controller.
	   *
	   * Prepares the view model.
	   *
	   * @name ScheduleController#$onInit
	   * @type {function}
	   *
	   * @fires cxp.item.loaded
	   */
	  var $onInit = function $onInit() {
	    return viewModel.fetch().then(function () {
	      /**
	       * This event (cxp.item.loaded) is deprecated in Mobile SDK version > 3.0
	       * and will be removed with the update to widget collection 3 (WC3)
	       */
	      bus.publish(_constants.Event.CXP_ITEM_LOADED, {
	        id: widget.getId()
	      });
	
	      bus.publish(_constants.Event.BB_ITEM_LOADED, {
	        id: widget.getId()
	      });
	    });
	  };
	
	  /**
	   * @description
	   * Fulfils the select schedule intent with the given data.
	   *
	   * @name ScheduleController#submitSchedule
	   * @type {function}
	   */
	  var submitSchedule = function submitSchedule() {
	    viewModel.save().then(function () {
	      selectScheduleRespond({});
	    });
	  };
	
	  bbIntent.handle(_constants.Intent.SELECT_SCHEDULE, function (payload, respond) {
	    viewModel.fetch().then(function () {
	      selectScheduleRespond = respond;
	    });
	  });
	
	  bbIntent.init(function () {});
	
	  Object.defineProperty(ctrl, 'state', {
	    get: function get() {
	      return viewModel.state;
	    }
	  });
	
	  Object.assign(ctrl, {
	    $onInit: $onInit,
	    preferences: sharedApi.preferences,
	    submitSchedule: submitSchedule
	  });
	}

/***/ }),

/***/ 147:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _constants = __webpack_require__(143);
	
	exports.default = function (widget, model, viewModel, bus, hooks, Promise) {
	  var isRecurring = function isRecurring(schedule) {
	    return schedule.transferFrequency !== _constants.TransferFrequency.ONCE;
	  };
	
	  var preferences = {
	    urgent: widget.getBooleanPreference(_constants.Preference.URGENT),
	    recurring: widget.getBooleanPreference(_constants.Preference.RECURRING),
	    showPin: widget.getBooleanPreference(_constants.Preference.SHOW_PIN),
	    reviewStep: widget.getBooleanPreference(_constants.Preference.REVIEW_STEP),
	    descriptionRegex: widget.getStringPreference(_constants.Preference.DESCRIPTION_REGEX)
	  };
	
	  var isUrgentPaymentAllowed = function isUrgentPaymentAllowed(payment) {
	    if (!payment) {
	      return false;
	    }
	
	    var isAllowedByAccount = Boolean(payment.debitAccount && payment.debitAccount.urgentTransferAllowed);
	    var currentDate = new Date();
	    var startDate = new Date(payment.schedule.startDate);
	    var isNotFuture = currentDate >= startDate;
	
	    return isAllowedByAccount && !isRecurring(payment.schedule) && isNotFuture;
	  };
	
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
	  var isExternalBeneficiary = function isExternalBeneficiary(beneficiary) {
	    return beneficiary && (beneficiary.external || beneficiary.isNew);
	  };
	
	  /**
	   * @description
	   * Returns the identification of the given contact.
	   *
	   * @name getContactIdentification
	   * @type {function}
	   *
	   * @param {AccountView} beneficiary
	   * @returns {ContactIdentification}
	   * @inner
	   */
	  var getContactIdentification = function getContactIdentification(beneficiary) {
	    return {
	      name: beneficiary ? beneficiary.name : null,
	      identification: {
	        identification: beneficiary ? beneficiary.identifier : null,
	        schemeName: 'IBAN'
	      }
	    };
	  };
	
	  /**
	   * @description
	   * Returns the identification of the given credit account.
	   *
	   * @name getCreditAccountIdentification
	   * @type {function}
	   *
	   * @param {AccountView} creditAccount
	   * @returns {CreditAccountIdentification}
	   * @inner
	   */
	  var getCreditAccountIdentification = function getCreditAccountIdentification(creditAccount) {
	    return {
	      identification: {
	        identification: creditAccount ? creditAccount.id : null,
	        schemeName: 'ID'
	      }
	    };
	  };
	
	  /**
	   * @description
	   * Returns the creditor account of the given beneficiary.
	   *
	   * @name getCreditorAccount
	   * @type {function}
	   *
	   * @param {AccountView} beneficiary
	   * @returns {ContactIdentification|CreditAccountIdentification}
	   * @inner
	   */
	  var getCreditorAccount = function getCreditorAccount(beneficiary) {
	    return isExternalBeneficiary(beneficiary) ? getContactIdentification(beneficiary) : getCreditAccountIdentification(beneficiary);
	  };
	
	  /**
	   * @description
	   * Returns a day of a recurring payment for the given schedule.
	   *
	   * @name getScheduleRecurringDay
	   * @type {function}
	   *
	   * @param {Schedule} schedule
	   * @returns {number}
	   * @inner
	   */
	  var getScheduleRecurringDay = function getScheduleRecurringDay(schedule) {
	    var startDate = schedule.startDate,
	        transferFrequency = schedule.transferFrequency;
	
	    var date = new Date(startDate);
	
	    if (transferFrequency === _constants.TransferFrequency.WEEKLY) {
	      var dayOfWeek = date.getDay();
	      return dayOfWeek === 0 ? 7 : dayOfWeek;
	    }
	
	    if (transferFrequency === _constants.TransferFrequency.MONTHLY) {
	      return date.getDate();
	    }
	
	    if (transferFrequency === _constants.TransferFrequency.YEARLY) {
	      return date.getMonth() + 1;
	    }
	
	    return null;
	  };
	
	  /**
	   * @description
	   * Creates a payload for the payment schedule.
	   *
	   * @name getSchedulePayload
	   * @type {function}
	   *
	   * @param {Schedule} schedule
	   * @returns {SchedulePayload}
	   * @inner
	   */
	  var getSchedulePayload = function getSchedulePayload(schedule) {
	    var end = schedule.end,
	        endDate = schedule.endDate,
	        every = schedule.every,
	        repeat = schedule.repeat,
	        startDate = schedule.startDate,
	        transferFrequency = schedule.transferFrequency;
	
	    var on = getScheduleRecurringDay(schedule);
	
	    var schedulePayload = {
	      every: every,
	      startDate: startDate,
	      transferFrequency: transferFrequency
	    };
	
	    if (on) {
	      Object.assign(schedulePayload, { on: on });
	    }
	
	    if (end === _constants.RecurrenceEnding.ON) {
	      Object.assign(schedulePayload, { endDate: endDate });
	    }
	
	    if (end === _constants.RecurrenceEnding.AFTER) {
	      Object.assign(schedulePayload, { repeat: repeat });
	    }
	
	    return schedulePayload;
	  };
	
	  /**
	   * @description
	   * Creates a payload for making a payment.
	   *
	   * @name getPaymentPayload
	   * @type {function}
	   *
	   * @param {Payment} payment
	   * @returns {PaymentPayload}
	   * @inner
	   */
	  var getPaymentPayload = function getPaymentPayload(payment) {
	    var _payment$debitAccount = payment.debitAccount,
	        debitAccount = _payment$debitAccount === undefined ? {} : _payment$debitAccount,
	        beneficiary = payment.beneficiary,
	        schedule = payment.schedule,
	        amount = payment.amount,
	        additions = payment.additions;
	
	    var creditorAccount = getCreditorAccount(beneficiary);
	
	    var payload = {
	      debtorAccount: {
	        arrangementId: debitAccount.id,
	        identification: {
	          schemeName: 'ID',
	          identification: debitAccount.id
	        },
	        name: debitAccount.name
	      },
	      requestedExecutionDate: schedule.startDate,
	      paymentMode: isRecurring(schedule) ? _constants.PaymentMode.RECURRING : _constants.PaymentMode.SINGLE,
	      creditTransferTransactionInformation: [{
	        instructedAmount: {
	          amount: amount.value,
	          currencyCode: amount.currency
	        },
	        creditor: {
	          name: beneficiary.name
	        },
	        creditorAccount: creditorAccount
	      }]
	    };
	
	    if (payment.urgent) {
	      Object.assign(payload, { instructionPriority: 'HIGH' });
	    }
	
	    if (payment.description) {
	      Object.assign(payload.creditTransferTransactionInformation[0], {
	        remittanceInformation: payment.description
	      });
	    }
	
	    if (isRecurring(schedule)) {
	      Object.assign(payload, {
	        schedule: getSchedulePayload(schedule)
	      });
	    }
	
	    if (additions) {
	      Object.assign(payload, { additions: additions });
	    }
	
	    return hooks.processPaymentPayload(payload, payment);
	  };
	
	  /**
	   * @description
	   * Creates a payload for creating a contact.
	   *
	   * @name getContactPayload
	   * @type {function}
	   *
	   * @param {AccountView} contact
	   * @returns {ContactCreatePayload}
	   * @inner
	   */
	  var getContactPayload = function getContactPayload(contact) {
	    return {
	      accounts: [{
	        IBAN: contact.identifier
	      }],
	      name: contact.name
	    };
	  };
	
	  /**
	   * @description
	   * Shows the pin confirmation screen
	   *
	   * @name showPin
	   * @type {function}
	   *
	   * @fires bb.payment.show.pin
	   * @inner
	   */
	  var showPin = function showPin() {
	    return bus.publish(_constants.Event.SHOW_PIN);
	  };
	
	  /**
	   * @description
	   * Subscribes to the event that will be fired once the pin is successful
	   * and calls the showPin function which will show the pin verification screen
	   *
	   * @name authorizePayment
	   * @type {function}
	   * @inner
	   */
	  var authorizePayment = function authorizePayment() {
	    return new Promise(function (resolve) {
	      bus.subscribe(_constants.Event.PIN_CONFIRMATION_SUCCESSFUL, resolve);
	
	      showPin();
	    });
	  };
	
	  /**
	   * @description
	   * Checks whether the payment should be authorized via pin code and
	   * calls the pin code screen if needed or resolves immediately so the payment
	   * can continue
	   *
	   * @name authorizePaymentIfNeeded
	   * @type {function}
	   *
	   * @returns {Promise.<void>}
	   * @inner
	   */
	  var authorizePaymentIfNeeded = function authorizePaymentIfNeeded() {
	    return preferences.showPin ? authorizePayment() : Promise.resolve();
	  };
	
	  /**
	   * @description
	   * Makes a payment.
	   *
	   * @name makePayment
	   * @type {function}
	   *
	   * @fires bb.event.payment.done
	   * @fires bb.event.payment.failed
	   * @fires bb.event.payment.started
	   *
	   * @returns {Promise.<void>}
	   * @inner
	   */
	  var makePayment = function makePayment() {
	    var payment = viewModel.getPayment();
	    var payload = getPaymentPayload(payment);
	
	    bus.publish(_constants.Event.PAYMENT_START);
	
	    viewModel.setPaymentLoading(true);
	
	    return model.createPaymentOrder(payload).then(function () {
	      viewModel.setPaymentError(null);
	      viewModel.setPaymentLoading(false);
	
	      bus.publish(_constants.Event.PAYMENT_DONE);
	    }).catch(function (error) {
	      viewModel.setPaymentError(error); // TODO: Convert to UI error
	      viewModel.setPaymentLoading(false);
	
	      bus.publish(_constants.Event.PAYMENT_FAILED, error);
	
	      throw error;
	    });
	  };
	
	  /**
	   * @description
	   * Checks whether the payment should be authorized via pin code and
	   * calls the pin code screen if needed
	   *
	   * @name makePaymentWithAuthorization
	   * @type {function}
	   *
	   * @returns {Promise.<void>}
	   * @inner
	   */
	  var makePaymentWithAuthorization = function makePaymentWithAuthorization() {
	    return authorizePaymentIfNeeded().then(function () {
	      return makePayment();
	    });
	  };
	
	  /**
	   * @description
	   * Saves the given contact to the address book.
	   *
	   * @name saveContact
	   * @type {function}
	   *
	   * @param {AccountView} contact
	   * @inner
	   */
	  var saveContact = function saveContact(contact) {
	    var payload = getContactPayload(contact);
	
	    bus.publish(_constants.Event.CONTACT_CREATE_START);
	
	    return model.createContact(payload).then(function () {
	      bus.publish(_constants.Event.CONTACT_CREATE_DONE);
	    }).catch(function (error) {
	      // TODO Convert error to UI error
	      bus.publish(_constants.Event.CONTACT_CREATE_FAILED, { error: error });
	    });
	  };
	
	  /**
	   * @description
	   * Saves the selected beneficiary to the address book if needed.
	   *
	   * @name saveContactIfNeeded
	   * @type {function}
	   * @inner
	   */
	  var saveContactIfNeeded = function saveContactIfNeeded() {
	    if (viewModel.getSaveContact()) {
	      var contact = viewModel.getSelectedBeneficiary();
	      saveContact(contact);
	    }
	  };
	
	  return {
	    preferences: preferences,
	    isUrgentPaymentAllowed: isUrgentPaymentAllowed,
	    makePayment: makePayment,
	    makePaymentWithAuthorization: makePaymentWithAuthorization,
	    saveContactIfNeeded: saveContactIfNeeded
	  };
	};
	
	/**
	 * @typedef {Object} ContactIdentification
	 * @property {string} counterpartyName Counterparty name. Only required when 'scheme'
	 *   is set to IBAN/BBAN.
	 * @property {string} identification Identification of the product. Different schemes
	 *   are supported: IBAN, BBAN, ID
	 * @property {string} scheme  The name of the scheme. For contacts is always "IBAN".
	 */
	
	/**
	 * @typedef {Object} CreditAccountIdentification
	 * @property {string} identification Credit account ID
	 * @property {string} scheme The name of the scheme. For credit accounts is always "ID".
	 */
	
	/**
	 * @typedef {Object} DebitAccountIdentification
	 * @property {string} identification Debit account ID
	 * @property {string} scheme The name of the scheme. For debit accounts is always "ID".
	 */
	
	/**
	 * @typedef {Object} PaymentPayload
	 * @property {DebitAccountIdentification} debitAccountIdentification Identification of the payment
	 *   debit account
	 * @property {CreditAccountIdentification} creditAccountIdentification Identification of the payment
	 *   credit account
	 * @property {number} amount The amount of the payment
	 * @property {string} currency The alpha-3 code (complying with ISO 4217) of
	 *   the currency that qualifies the amount
	 * @property {string} description The description for the payment.
	 * @property {string} paymentMode Denotes whether payment will be single or will be recurring.
	 *   Possible values are "SINGLE" and "RECURRING"
	 */
	
	/**
	 * @typedef {Object} SchedulePayload
	 * @property {string} transferFrequency Denotes how frequently the transfer should be made
	 * @property {number} on Denotes day on which transfer should be executed. For weekly
	 *   it will be 1..7 indicating weekday. For monthly it will be 1..31 indicating day of month.
	 *   For yearly it will be 1..12 indicating month of the year
	 * @property {string} startDate When to start executing the schedule. First transfer
	 *   will be executed on first calculated date by schedule after this date
	 * @property {number} repeat Number of transfer to be executed. Only one of endDate
	 *   and repeat is possible. If neither repeat nor endDate is provided transfer
	 *   will be executed until canceled
	 * @property {number} every Indicates skip interval of transfer.
	 *   1 would mean execute every time, 2 - every other time
	 * @property {?string} endDate When to stop transfers. Transfers will not be executed
	 *   after this date. Only one of endDate and repeat is possible. If neither repeat
	 *   nor endDate is provided transfer will be executed until canceled
	 */
	
	/**
	 * @typedef {Object} ContactAccount
	 * @property {string} IBAN Contact's IBAN
	 */
	
	/**
	 * @typedef {Object} ContactCreatePayload
	 * @property {string} name Contact's name
	 * @property {Array.<ContactAccount>} accounts List of contact's accounts
	 */

/***/ }),

/***/ 148:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _constants = __webpack_require__(143);
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	exports.default = function (bbStorage) {
	  var viewModel = {};
	
	  /**
	   * @description
	   * Default payment currency.
	   * TODO Decide how to get the default currency.
	   *
	   * @name defaultCurrency
	   * @type {Currency}
	   * @inner
	   */
	  var defaultCurrency = {
	    name: 'EUR'
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
	  var getInitialBeneficiary = function getInitialBeneficiary() {
	    return {
	      name: '',
	      identifier: '',
	      isNew: true
	    };
	  };
	
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
	  var getInitialSchedule = function getInitialSchedule() {
	    var today = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new Date();
	    return {
	      transferFrequency: _constants.TransferFrequency.ONCE,
	      startDate: today,
	      end: _constants.RecurrenceEnding.NEVER,
	      endDate: null,
	      every: 1,
	      repeat: 5
	    };
	  };
	
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
	  var getInitialPayment = function getInitialPayment() {
	    return {
	      amount: {
	        currency: defaultCurrency.name,
	        value: null
	      },
	      beneficiary: getInitialBeneficiary(),
	      debitAccount: null,
	      description: null,
	      schedule: getInitialSchedule(),
	      urgent: false
	    };
	  };
	
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
	  var getInitialState = function getInitialState() {
	    return {
	      allowedCurrencies: [defaultCurrency],
	
	      contacts: null,
	
	      currencies: {
	        error: null,
	        loading: false,
	        data: null
	      },
	
	      beneficiaries: {
	        error: null,
	        loading: false,
	        data: null
	      },
	
	      debitAccounts: {
	        error: null,
	        loading: false,
	        data: null
	      },
	
	      payment: {
	        error: null,
	        loading: false,
	        data: null
	      },
	
	      saveContact: false
	    };
	  };
	
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
	  var getPayment = function getPayment() {
	    return viewModel.state.payment.data;
	  };
	
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
	  var getBeneficiaries = function getBeneficiaries() {
	    return viewModel.state.beneficiaries.data;
	  };
	
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
	  var getAccountCurrency = function getAccountCurrency(account) {
	    return account && account.currency ? { name: account.currency } : null;
	  };
	
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
	  var getContacts = function getContacts() {
	    return viewModel.state.contacts;
	  };
	
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
	  var getSelectedBeneficiary = function getSelectedBeneficiary() {
	    return getPayment().beneficiary;
	  };
	
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
	  var getDebitAccounts = function getDebitAccounts() {
	    return viewModel.state.debitAccounts.data;
	  };
	
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
	  var getSelectedDebitAccount = function getSelectedDebitAccount() {
	    return getPayment().debitAccount;
	  };
	
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
	  var addCurrency = function addCurrency(currencies, currency) {
	    var includes = currencies.some(function (curr) {
	      return curr.name === currency.name;
	    });
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
	  var getCurrencies = function getCurrencies() {
	    return viewModel.state.currencies.data;
	  };
	
	  /**
	   * @description
	   * Updates the payment currency according, making sure
	   * the currency of the payment is allowed.
	   *
	   * @name updatePaymentCurrency
	   * @type {function}
	   * @inner
	   */
	  var updatePaymentCurrency = function updatePaymentCurrency() {
	    var debitAccount = getSelectedDebitAccount();
	    var debitAccountCurrency = getAccountCurrency(debitAccount);
	
	    var currency = (debitAccountCurrency || defaultCurrency).name;
	
	    Object.assign(viewModel.state.payment.data.amount, { currency: currency });
	  };
	
	  /**
	   * @description
	   * Updates the list of currencies, that are allowed for the selected debit account.
	   *
	   * @name updateAllowedCurrencies
	   * @type {function}
	   * @inner
	   */
	  var updateAllowedCurrencies = function updateAllowedCurrencies() {
	    var debitAccount = getSelectedDebitAccount();
	    var crossCurrencyAllowed = debitAccount ? debitAccount.crossCurrencyAllowed : true;
	
	    var allCurrencies = getCurrencies() || [];
	    var allowedCurrencies = crossCurrencyAllowed ? [].concat(_toConsumableArray(allCurrencies)) : [];
	
	    var debitAccountCurrency = getAccountCurrency(debitAccount);
	
	    // Add debit account currency
	    if (debitAccountCurrency) {
	      addCurrency(allowedCurrencies, debitAccountCurrency);
	    }
	
	    // Add default currency
	    if (crossCurrencyAllowed) {
	      addCurrency(allowedCurrencies, defaultCurrency);
	    }
	
	    Object.assign(viewModel.state, { allowedCurrencies: allowedCurrencies });
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
	  var getAccounts = function getAccounts(type) {
	    return type === _constants.AccountType.DEBIT ? getDebitAccounts() : getBeneficiaries();
	  };
	
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
	  var getSaveContact = function getSaveContact() {
	    return viewModel.state.saveContact;
	  };
	
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
	  var getSelectedAccount = function getSelectedAccount(type) {
	    return type === _constants.AccountType.DEBIT ? getSelectedDebitAccount() : getSelectedBeneficiary();
	  };
	
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
	  var isBeneficiaryComplete = function isBeneficiaryComplete() {
	    var beneficiary = getSelectedBeneficiary();
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
	  var isBeneficiaryExternal = function isBeneficiaryExternal() {
	    var beneficiary = getSelectedBeneficiary();
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
	  var setError = function setError(target, error) {
	    return Object.assign(target, { error: error });
	  };
	
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
	  var setLoading = function setLoading(target, loading) {
	    return Object.assign(target, {
	      loading: Boolean(loading)
	    });
	  };
	
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
	  var setSelectedBeneficiary = function setSelectedBeneficiary(beneficiary) {
	    return Object.assign(viewModel.state.payment.data, { beneficiary: beneficiary });
	  };
	
	  /**
	   * @description
	   * Resets the payment beneficiary to the initial value.
	   *
	   * @name resetSelectedBeneficiary
	   * @type {function}
	   *
	   * @inner
	   */
	  var resetSelectedBeneficiary = function resetSelectedBeneficiary() {
	    return setSelectedBeneficiary(getInitialBeneficiary());
	  };
	
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
	  var setSelectedDebitAccount = function setSelectedDebitAccount(debitAccount) {
	    Object.assign(viewModel.state.payment.data, { debitAccount: debitAccount });
	
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
	  var setBeneficiaries = function setBeneficiaries(beneficiaries) {
	    return Object.assign(viewModel.state.beneficiaries, {
	      data: beneficiaries
	    });
	  };
	
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
	  var setBeneficiariesError = function setBeneficiariesError(error) {
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
	  var setBeneficiariesLoading = function setBeneficiariesLoading(loading) {
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
	  var setContacts = function setContacts(contacts) {
	    return Object.assign(viewModel.state, { contacts: contacts });
	  };
	
	  /**
	   * @description
	   * Resets the list of contacts.
	   *
	   * @name resetContacts
	   * @type {function}
	   *
	   * @inner
	   */
	  var resetContacts = function resetContacts() {
	    return setContacts(null);
	  };
	
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
	  var setCurrencies = function setCurrencies(currencies) {
	    Object.assign(viewModel.state.currencies, {
	      data: currencies
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
	  var setCurrenciesError = function setCurrenciesError(error) {
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
	  var setCurrenciesLoading = function setCurrenciesLoading(loading) {
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
	  var setDebitAccounts = function setDebitAccounts(debitAccounts) {
	    return Object.assign(viewModel.state.debitAccounts, {
	      data: debitAccounts
	    });
	  };
	
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
	  var setDebitAccountsError = function setDebitAccountsError(error) {
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
	  var setDebitAccountsLoading = function setDebitAccountsLoading(loading) {
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
	  var setPaymentLoading = function setPaymentLoading(loading) {
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
	  var setPayment = function setPayment(data) {
	    return Object.assign(viewModel.state.payment, { data: data });
	  };
	
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
	  var setPaymentError = function setPaymentError(error) {
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
	  var fetch = function fetch() {
	    return bbStorage.getItem(_constants.StorageKey.PAYMENT).then(function (state) {
	      if (state) {
	        viewModel.state = state;
	      }
	    });
	  };
	
	  /**
	   * @description
	   * Saves the state to the storage.
	   *
	   * @name save
	   * @type {function}
	   * @inner
	   */
	  var save = function save() {
	    return bbStorage.setItem(_constants.StorageKey.PAYMENT, viewModel.state);
	  };
	
	  Object.assign(viewModel, {
	    state: getInitialState(),
	
	    getAccounts: getAccounts,
	    getBeneficiaries: getBeneficiaries,
	    getContacts: getContacts,
	    getCurrencies: getCurrencies,
	    getDebitAccounts: getDebitAccounts,
	    getInitialPayment: getInitialPayment,
	    getPayment: getPayment,
	    getSaveContact: getSaveContact,
	    getSelectedAccount: getSelectedAccount,
	    getSelectedBeneficiary: getSelectedBeneficiary,
	    getSelectedDebitAccount: getSelectedDebitAccount,
	
	    isBeneficiaryComplete: isBeneficiaryComplete,
	    isBeneficiaryExternal: isBeneficiaryExternal,
	
	    resetContacts: resetContacts,
	    resetSelectedBeneficiary: resetSelectedBeneficiary,
	
	    setBeneficiaries: setBeneficiaries,
	    setBeneficiariesError: setBeneficiariesError,
	    setBeneficiariesLoading: setBeneficiariesLoading,
	    setContacts: setContacts,
	    setCurrencies: setCurrencies,
	    setCurrenciesError: setCurrenciesError,
	    setCurrenciesLoading: setCurrenciesLoading,
	    setDebitAccounts: setDebitAccounts,
	    setDebitAccountsError: setDebitAccountsError,
	    setDebitAccountsLoading: setDebitAccountsLoading,
	    setPayment: setPayment,
	    setPaymentError: setPaymentError,
	    setPaymentLoading: setPaymentLoading,
	    setSelectedBeneficiary: setSelectedBeneficiary,
	    setSelectedDebitAccount: setSelectedDebitAccount,
	
	    fetch: fetch,
	    save: save
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

/***/ }),

/***/ 149:
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	/**
	 * @description
	 * Hooks for widget-bbm-initiate-payment-ng.
	 *
	 * @name Hooks
	 * @type {object}
	 */
	
	/**
	 * @description
	 * Processes the list of debit accounts.
	 *
	 * @name Hooks#processDebitAccounts
	 * @type {function}
	 * @param {Array.<AccountView>} debitAccounts Original list of debit accounts from the model.
	 * @returns {Array.<AccountView>} Processed list of debit accounts.
	 */
	var processDebitAccounts = exports.processDebitAccounts = function processDebitAccounts(debitAccounts) {
	  return debitAccounts;
	};
	
	/**
	 * @description
	 * Processes the list of beneficiaries. By default it merges credit accounts and
	 * contacts into a single list of beneficiaries.
	 *
	 * @name Hooks#processBeneficiaries
	 * @type {function}
	 *
	 * @param {Array.<AccountView>} creditAccounts Original list of credit accounts from the model.
	 * @param {Array.<AccountView>} contacts Original list of contacts from the model.
	 * @returns {Array.<AccountView>} Processed list of beneficiaries.
	 */
	var processBeneficiaries = exports.processBeneficiaries = function processBeneficiaries(creditAccounts, contacts) {
	  return [].concat(_toConsumableArray(creditAccounts), _toConsumableArray(contacts));
	};
	
	/**
	 * @description
	 * Processes the initial payment object.
	 *
	 * The widget uses this hook on start when the initial payment object is created.
	 * Also the widget uses this when it resets the payment and starts another one.
	 *
	 * Use it to add custom properties to the payment object.
	 *
	 * @name Hooks#processInitialPaymentState
	 * @type {function}
	 *
	 * @param {Payment} payment Payment state, that is supposed to be processed
	 * @returns {Payment}
	 */
	var processInitialPaymentState = exports.processInitialPaymentState = function processInitialPaymentState(payment) {
	  return payment;
	};
	
	/**
	 * @description
	 * Processes the payload of a the payment.
	 *
	 * @name Hooks#processPaymentPayload
	 * @type {function}
	 *
	 * @param {PaymentPayload} paymentPayload Payment payload, that is supposed to be processed
	 * @returns {Payment}
	 */
	var processPaymentPayload = exports.processPaymentPayload = function processPaymentPayload(paymentPayload) {
	  return paymentPayload;
	};

/***/ })

/******/ })
});
;
//# sourceMappingURL=widget-bbm-initiate-payment-ng.js.map