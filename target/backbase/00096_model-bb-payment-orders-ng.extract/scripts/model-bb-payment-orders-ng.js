(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vendor-bb-angular"), require("lib-bb-widget-ng"), require("data-bb-payment-orders-http-ng"), require("data-bb-product-summary-http-ng"), require("data-bb-contact-http-ng"), require("lib-bb-storage-ng"), require("lib-bb-model-errors"));
	else if(typeof define === 'function' && define.amd)
		define("model-bb-payment-orders-ng", ["vendor-bb-angular", "lib-bb-widget-ng", "data-bb-payment-orders-http-ng", "data-bb-product-summary-http-ng", "data-bb-contact-http-ng", "lib-bb-storage-ng", "lib-bb-model-errors"], factory);
	else if(typeof exports === 'object')
		exports["model-bb-payment-orders-ng"] = factory(require("vendor-bb-angular"), require("lib-bb-widget-ng"), require("data-bb-payment-orders-http-ng"), require("data-bb-product-summary-http-ng"), require("data-bb-contact-http-ng"), require("lib-bb-storage-ng"), require("lib-bb-model-errors"));
	else
		root["model-bb-payment-orders-ng"] = factory(root["vendor-bb-angular"], root["lib-bb-widget-ng"], root["data-bb-payment-orders-http-ng"], root["data-bb-product-summary-http-ng"], root["data-bb-contact-http-ng"], root["lib-bb-storage-ng"], root["lib-bb-model-errors"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_88__, __WEBPACK_EXTERNAL_MODULE_89__, __WEBPACK_EXTERNAL_MODULE_90__, __WEBPACK_EXTERNAL_MODULE_91__, __WEBPACK_EXTERNAL_MODULE_92__, __WEBPACK_EXTERNAL_MODULE_93__, __WEBPACK_EXTERNAL_MODULE_95__) {
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

	module.exports = __webpack_require__(87);

/***/ }),

/***/ 87:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.modelPaymentOrdersKey = undefined;
	
	var _vendorBbAngular = __webpack_require__(88);
	
	var _vendorBbAngular2 = _interopRequireDefault(_vendorBbAngular);
	
	var _libBbWidgetNg = __webpack_require__(89);
	
	var _libBbWidgetNg2 = _interopRequireDefault(_libBbWidgetNg);
	
	var _dataBbPaymentOrdersHttpNg = __webpack_require__(90);
	
	var _dataBbPaymentOrdersHttpNg2 = _interopRequireDefault(_dataBbPaymentOrdersHttpNg);
	
	var _dataBbProductSummaryHttpNg = __webpack_require__(91);
	
	var _dataBbProductSummaryHttpNg2 = _interopRequireDefault(_dataBbProductSummaryHttpNg);
	
	var _dataBbContactHttpNg = __webpack_require__(92);
	
	var _dataBbContactHttpNg2 = _interopRequireDefault(_dataBbContactHttpNg);
	
	var _libBbStorageNg = __webpack_require__(93);
	
	var _libBbStorageNg2 = _interopRequireDefault(_libBbStorageNg);
	
	var _paymentOrders = __webpack_require__(94);
	
	var _paymentOrders2 = _interopRequireDefault(_paymentOrders);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var moduleKey = 'model-bb-payment-orders-ng'; /**
	                                               * @module model-bb-payment-orders-ng
	                                               *
	                                               * @description
	                                               * Model for widget-bb-payment-orders-ng
	                                               *
	                                               * @example
	                                               * import modelPaymentOrdersModuleKey, { modelPaymentOrdersKey } from 'model-bb-payment-orders-ng';
	                                               *
	                                               * angular
	                                               *   .module('ExampleModule', [
	                                               *     modelPaymentOrdersModuleKey,
	                                               *   ])
	                                               *   .factory('someFactory', [
	                                               *     modelPaymentOrdersKey,
	                                               *     // into
	                                               *     function someFactory(paymentOrdersModel) {
	                                               *       // ...
	                                               *     },
	                                               *   ]);
	                                               */
	var modelPaymentOrdersKey = exports.modelPaymentOrdersKey = moduleKey + ':model';
	
	exports.default = _vendorBbAngular2.default.module(moduleKey, [_dataBbPaymentOrdersHttpNg2.default, _dataBbProductSummaryHttpNg2.default, _dataBbContactHttpNg2.default, _libBbStorageNg2.default, _libBbWidgetNg2.default]).factory(modelPaymentOrdersKey, [_dataBbPaymentOrdersHttpNg.paymentOrdersDataKey, _dataBbProductSummaryHttpNg.productSummaryDataKey, _dataBbContactHttpNg.contactDataKey, _libBbStorageNg.bbStorageServiceKey, _libBbWidgetNg.widgetKey,
	/* into */
	_paymentOrders2.default]).name;

/***/ }),

/***/ 88:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_88__;

/***/ }),

/***/ 89:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_89__;

/***/ }),

/***/ 90:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_90__;

/***/ }),

/***/ 91:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_91__;

/***/ }),

/***/ 92:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_92__;

/***/ }),

/***/ 93:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_93__;

/***/ }),

/***/ 94:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = paymentOrdersModel;
	
	var _libBbModelErrors = __webpack_require__(95);
	
	var _accountModel = __webpack_require__(96);
	
	var _constants = __webpack_require__(97);
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	/**
	 * @description
	 * Method to normalize products data
	 *
	 * @inner
	 * @param {object} rawData Raw response data object
	 * @returns {object[]} An array of products
	 */
	var convertToAccountsArray = function convertToAccountsArray(rawData) {
	  return Object.keys(rawData).filter(function (kind) {
	    return rawData[kind].products && rawData[kind].products.length > 0;
	  }).reduce(function (memo, kind) {
	    return memo.concat(rawData[kind].products.map((0, _accountModel.createAccountModel)(kind)));
	  }, []);
	};
	
	/**
	 * @description
	 * Method to normalize products data (flat list)
	 *
	 * @inner
	 * @param {object[]} rawData Raw response data object
	 * @returns {object[]} An array of products
	 */
	var convertFromAccountsArrayFlat = function convertFromAccountsArrayFlat(rawData) {
	  return (0, _accountModel.getExtendedAccountModelFlat)(rawData);
	};
	
	/**
	 * @description
	 * Method to format external contacts data as product kind.
	 *
	 * @inner
	 * @param {object} rawData Contact object.
	 * @returns {object} External product object.
	 */
	var convertExternalsToProductKind = function convertExternalsToProductKind(rawData) {
	  return _defineProperty({}, _constants.ExternalType.IDENTIFIER, {
	    name: _constants.ExternalType.NAME,
	    products: rawData,
	    aggregatedBalance: 0.0
	  });
	};
	
	/**
	 * Model factory for model-bb-payment-orders-ng
	 *
	 * @inner
	 * @type {function}
	 * @param {Object} Promise An ES2015 compatible `Promise` object.
	 *
	 * @return {Object}
	 */
	function paymentOrdersModel(paymentOrdersData, productSummaryData, contactData, bbStorage, widget) {
	  /**
	   * @name paymentOrdersModel#createPaymentOrder
	   * @type {function}
	   *
	   * @description
	   * Create new payment order.
	   *
	   * @param {object} paymentOrderParams New payment order data
	   * @returns {Promise.<object>} A Promise with response.
	   */
	  var createPaymentOrder = function createPaymentOrder(paymentOrderParams) {
	    return paymentOrdersData.postPaymentOrdersRecord(paymentOrderParams).catch(function (httpErrorResponse) {
	      var error = (0, _libBbModelErrors.fromHttpError)(httpErrorResponse);
	      if (httpErrorResponse.status === 403) {
	        Object.assign(error, { breachReport: httpErrorResponse.data.breachReport });
	      }
	      throw error;
	    });
	  };
	
	  /**
	   * @name paymentOrdersModel#getCurrencies
	   * @type {function}
	   *
	   * @description
	   * Get available currencies.
	   *
	   * @returns {Promise.<object[]>} A Promise with response.
	   */
	  var getCurrencies = function getCurrencies() {
	    return paymentOrdersData.getPaymentOrdersCurrencies()
	    // Convert currencies format to the format used in the widgets
	    .then(function (_ref2) {
	      var data = _ref2.data;
	      return data.map(function (_ref3) {
	        var code = _ref3.code;
	        return { name: code };
	      });
	    }).catch(function (httpErrorResponse) {
	      throw (0, _libBbModelErrors.fromHttpError)(httpErrorResponse);
	    });
	  };
	
	  /**
	   * @name normalizeDebitParams
	   * @type {function}
	   * @description
	   * Provide correct list of request params (including search)
	   * @inner
	   *
	   * @param {object} params
	   * @return {object}
	   */
	  var normalizeDebitParams = function normalizeDebitParams() {
	    var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	
	    var extraParams = Object.assign({}, params);
	
	    if (extraParams.searchQuery) {
	      extraParams.searchTerm = extraParams.searchQuery;
	      delete extraParams.searchQuery;
	    }
	
	    return Object.assign({}, _constants.AccountPrivilegeParams.debit, extraParams);
	  };
	
	  /**
	   * @name paymentOrdersModel#getProductSelectedId
	   * @inner
	   * @type {function}
	   *
	   * @description
	   * Tries to read selected product id from storage.
	   *
	   * @returns {Promise<?string>} a Promise with ID
	   */
	  var getProductSelectedId = function getProductSelectedId() {
	    return bbStorage.getItem(_constants.BbStorageKeys.PRODUCT_SELECTED);
	  };
	
	  /**
	   * @name paymentOrdersModel#getAccountsFrom
	   * @type {function}
	   *
	   * @description
	   * Load accounts available to payment from.
	   *
	   * @param {object} params
	   * @returns {Promise.<object[]>} A Promise with flat accounts list.
	   */
	  var getAccountsFrom = function getAccountsFrom() {
	    var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	    return productSummaryData.getProductsummaryContextArrangements(normalizeDebitParams(params)).then(function (_ref4) {
	      var data = _ref4.data;
	      return data;
	    }).then(convertFromAccountsArrayFlat).catch(function (httpErrorResponse) {
	      throw (0, _libBbModelErrors.fromHttpError)(httpErrorResponse);
	    });
	  };
	  /**
	   * @name paymentOrdersModel#getAccountsTo
	   * @type {function}
	   *
	   * @description
	   * Load accounts available for payment to.
	   *
	   * @param {string} debitAccountId Filter account list with debitAccountId param
	   * @returns {Promise.<object[]>} A Promise with flat accounts list.
	   */
	  var getAccountsTo = function getAccountsTo(debitAccountId) {
	    return productSummaryData.getProductsummaryCreditaccounts({ debitAccountId: debitAccountId }).then(function (_ref5) {
	      var data = _ref5.data;
	      return data;
	    }).then(convertToAccountsArray).then(function (accounts) {
	      return accounts.filter(function (account) {
	        return account.id !== debitAccountId;
	      });
	    }).catch(function (httpErrorResponse) {
	      throw (0, _libBbModelErrors.fromHttpError)(httpErrorResponse);
	    });
	  };
	
	  /**
	   * @name paymentOrdersModel#getExternals
	   * @type {function}
	   *
	   * @description
	   * Load external accounts from contact list.
	   *
	   * @returns {Promise.<object[]>} A Promise with flat accounts list.
	   */
	  var getExternals = function getExternals() {
	    return contactData.getContacts({ size: 999 }).then(function (_ref6) {
	      var data = _ref6.data;
	      return data;
	    }).then(convertExternalsToProductKind).then(convertToAccountsArray).catch(function (httpErrorResponse) {
	      throw (0, _libBbModelErrors.fromHttpError)(httpErrorResponse);
	    });
	  };
	
	  /**
	   * @description
	   * Get currencies available for payment.
	   *
	   * @name paymentOrdersModel#getRate
	   * @type {function}
	   * @param {object} rateParams Parameters for getRate request
	   * @returns {number} Rate number
	   */
	  var getRate = function getRate(rateParams) {
	    return paymentOrdersData.getPaymentOrdersRate(rateParams).then(function (_ref7) {
	      var data = _ref7.data;
	      return data.rate;
	    }).catch(function (httpErrorResponse) {
	      throw (0, _libBbModelErrors.fromHttpError)(httpErrorResponse);
	    });
	  };
	
	  /**
	   * @name paymentOrdersModel#createContact
	   * @type {function}
	   *
	   * @description
	   * Creates a new contact
	   *
	   * @param {object} contact Contact data
	   * @returns {Promise} A Promise object for create contact request
	   */
	  var createContact = function createContact(contact) {
	    return contactData.postContactsRecord(contact).catch(function (httpErrorResponse) {
	      throw (0, _libBbModelErrors.fromHttpError)(httpErrorResponse);
	    });
	  };
	
	  /**
	   * @name paymentOrdersModel#getPaymentOrders
	   * @type {function}
	   *
	   * @description
	   * Get payments orders data.
	   *
	   * @param  {object} params Params to send to the request
	   * @returns {Promise.<Payments, module:lib-bb-model-errors.ModelError>} A Promise
	   */
	  var getPaymentOrders = function getPaymentOrders(params) {
	    return paymentOrdersData.getPaymentOrders(params).then(function (raw) {
	      return {
	        data: raw.data,
	        totalCount: parseInt(raw.headers('x-total-count'), 10) || 0
	      };
	    }).catch(function (httpErrorResponse) {
	      throw (0, _libBbModelErrors.fromHttpError)(httpErrorResponse);
	    });
	  };
	
	  /**
	   * @name paymentOrdersModel#getStandingOrdersPreferences
	   * @type {function}
	   *
	   * @description
	   * Tries to read the stored standing orders preferences
	   *
	   * @returns {Object}
	   */
	  function getStandingOrdersPreferences() {
	    var paymentPreferences = {};
	
	    paymentPreferences.standingOrdersPageSize = widget.getLongPreference(_constants.Preference.STANDING_ORDERS_PAGE_SIZE);
	    paymentPreferences.standingOrdersMaxNavPages = widget.getLongPreference(_constants.Preference.STANDING_ORDERS_MAX_NAV_PAGES);
	    paymentPreferences.standingOrdersPaginationType = widget.getStringPreference(_constants.Preference.STANDING_ORDERS_PAGINATION_TYPE);
	    paymentPreferences.standingOrdersNotificationDismissTime = widget.getLongPreference(_constants.Preference.STANDING_ORDERS_NOTIFICATION_DISMISS);
	
	    return paymentPreferences;
	  }
	
	  /**
	   * @name paymentOrdersModel#getStandingOrders
	   * @type {function}
	   *
	   * @description
	   * Get standing orders data.
	   *
	   * @param  {object} params Params to send to the request
	   * @returns {Promise.<Payments, ModelError>} A Promise
	   */
	  var getStandingOrders = function getStandingOrders(params) {
	    return paymentOrdersData.getPaymentOrders(Object.assign(params, { paymentMode: 'RECURRING' })).then(function (raw) {
	      return {
	        data: raw.data,
	        totalCount: parseInt(raw.headers('x-total-count'), 10) || 0
	      };
	    }).catch(function (httpErrorResponse) {
	      throw (0, _libBbModelErrors.fromHttpError)(httpErrorResponse);
	    });
	  };
	
	  /**
	   * @name paymentOrdersModel
	   * @type {Object}
	   */
	  return {
	    createPaymentOrder: createPaymentOrder,
	    getCurrencies: getCurrencies,
	    getAccountsFrom: getAccountsFrom,
	    getAccountsTo: getAccountsTo,
	    getExternals: getExternals,
	    getRate: getRate,
	    createContact: createContact,
	    getPaymentOrders: getPaymentOrders,
	    getProductSelectedId: getProductSelectedId,
	    getStandingOrdersPreferences: getStandingOrdersPreferences,
	    getStandingOrders: getStandingOrders
	  };
	}
	
	/**
	 * Payments type definition
	 * @typedef {Array.<Payment>} Payments
	 */
	
	/**
	 * Payment type definition
	 * @typedef {Object} Payment
	 * @property {string}         id                                   - Payment ID
	 * @property {string}         status                               - Payment status
	 * @property {string}         bankStatus                           - Bank Status
	 * @property {string}         reasonCode                           - Reason id
	 * @property {string}         reasonText                           - Reason description
	 * @property {object}         debtorAccount                        - Debtor account
	 * @property {string}         instructionPriority                  - Instruction priority
	 * @property {string}         requestedExecutionDate               - Requested execution date
	 * @property {object}         creditTransferTransactionInformation - Transaction information
	 * @property {string}         createdBy                            - User id that created payment
	 * @property {string}         createdAt                            - Date when payment was created
	 */

/***/ }),

/***/ 95:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_95__;

/***/ }),

/***/ 96:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.getExtendedAccountModelFlat = exports.createAccountModel = undefined;
	
	var _constants = __webpack_require__(97);
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	var maskCardNumber = function maskCardNumber(suffix) {
	  return suffix ? 'XXXX-XXXX-XXXX-' + suffix : '';
	};
	
	var defaultViewModelFactory = function defaultViewModelFactory(_ref) {
	  var id = _ref.id,
	      name = _ref.name,
	      currency = _ref.currency,
	      externalTransferAllowed = _ref.externalTransferAllowed,
	      crossCurrencyAllowed = _ref.crossCurrencyAllowed;
	  return {
	    id: id,
	    name: name,
	    currency: currency,
	    externalTransferAllowed: externalTransferAllowed,
	    crossCurrencyAllowed: crossCurrencyAllowed
	  };
	};
	
	var viewModelFactories = _defineProperty({
	  currentAccounts: function currentAccounts(account) {
	    return Object.assign({
	      identifier: account.IBAN || account.BBAN,
	      amount: account.availableBalance
	    }, account);
	  },
	
	  savingsAccounts: function savingsAccounts(account) {
	    return Object.assign({
	      identifier: account.IBAN || account.BBAN,
	      amount: account.bookedBalance
	    }, account);
	  },
	
	  termDeposits: function termDeposits(account) {
	    return Object.assign({
	      amount: account.principalAmount
	    }, account);
	  },
	
	  loans: function loans(account) {
	    return Object.assign({
	      amount: account.bookedBalance
	    }, account);
	  },
	
	  creditCards: function creditCards(account) {
	    return Object.assign({
	      identifier: maskCardNumber(account.cardNumberSuffix),
	      amount: account.availableBalance
	    }, account);
	  },
	
	  investmentAccounts: function investmentAccounts(account) {
	    return Object.assign({
	      amount: account.currentInvestmentValue
	    }, account);
	  }
	
	}, _constants.ExternalType.IDENTIFIER, function (contact) {
	  return Object.assign({
	    identifier: contact.accounts[0].IBAN,
	    external: true
	  }, contact);
	});
	
	var viewModelFactory = function viewModelFactory(kind, account) {
	  return (viewModelFactories[kind] || defaultViewModelFactory)(account);
	};
	
	/**
	 * @name createAccountModel
	 * @type {function}
	 * @description
	 * Prepare the fields of a account into a form ready for display to the User
	 *
	 * @param {string} kindId Product kind Id
	 * @returns {function}
	 */
	var createAccountModel = exports.createAccountModel = function createAccountModel(kindId) {
	  return function (account) {
	    return viewModelFactory(kindId, account);
	  };
	};
	
	/**
	 * @name getExtendedAccountModelFlat
	 * @type {function}
	 * @description
	 * Prepare the fields of a account into a form ready for display to the User
	 *
	 * @param {object[]} accountsRaw flat list of accounts
	 * @return {object[]}
	 */
	var getExtendedAccountModelFlat = exports.getExtendedAccountModelFlat = function getExtendedAccountModelFlat() {
	  var accountsRaw = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
	  return accountsRaw.map(function (account) {
	    return Object.assign({
	      identifier: account.IBAN || account.BBAN || account.productNumber || maskCardNumber(account.cardNumberSuffix),
	      amount: account.availableBalance || account.bookedBalance
	    }, account);
	  });
	};

/***/ }),

/***/ 97:
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * @description
	 * Identifier and name for external account product kind
	 *
	 * @name ExternalType
	 * @type {object}
	 */
	var ExternalType = exports.ExternalType = {
	  IDENTIFIER: 'ExternalAccounts',
	  NAME: 'Contacts'
	};
	
	/**
	 * @description
	 * Request params to get privilege entitlements
	 *
	 * @type {object}
	 */
	var AccountPrivilegeParams = exports.AccountPrivilegeParams = {
	  debit: {
	    businessFunction: 'SEPA CT',
	    privilege: 'create',
	    resourceName: 'Payments',
	    debitAccount: true
	  }
	};
	
	/**
	 * bbStorage keys enum
	 * @type {object}
	 */
	var BbStorageKeys = exports.BbStorageKeys = {
	  PRODUCT_SELECTED: 'bb.product.selected'
	};
	
	/**
	 * Widget preferences enum
	 * @type {object}
	 */
	var Preference = exports.Preference = {
	  STANDING_ORDERS_PAGE_SIZE: 'pageSize',
	  STANDING_ORDERS_MAX_NAV_PAGES: 'maxNavPages',
	  STANDING_ORDERS_PAGINATION_TYPE: 'paginationType',
	  STANDING_ORDERS_NOTIFICATION_DISMISS: 'notificationDismissTime'
	};

/***/ })

/******/ })
});
;
//# sourceMappingURL=model-bb-payment-orders-ng.js.map