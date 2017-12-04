(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("ui-bb-format-amount"), require("ui-bb-i18n-ng"), require("ui-bbm-scroll-ng"));
	else if(typeof define === 'function' && define.amd)
		define("ext-bbm-transactions-list-ng", ["ui-bb-format-amount", "ui-bb-i18n-ng", "ui-bbm-scroll-ng"], factory);
	else if(typeof exports === 'object')
		exports["ext-bbm-transactions-list-ng"] = factory(require("ui-bb-format-amount"), require("ui-bb-i18n-ng"), require("ui-bbm-scroll-ng"));
	else
		root["ext-bbm-transactions-list-ng"] = factory(root["ui-bb-format-amount"], root["ui-bb-i18n-ng"], root["ui-bbm-scroll-ng"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_6__, __WEBPACK_EXTERNAL_MODULE_8__, __WEBPACK_EXTERNAL_MODULE_40__) {
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

	module.exports = __webpack_require__(39);

/***/ }),

/***/ 6:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_6__;

/***/ }),

/***/ 8:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_8__;

/***/ }),

/***/ 39:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.hooks = exports.dependencyKeys = exports.helpers = undefined;
	
	var _uiBbFormatAmount = __webpack_require__(6);
	
	var _uiBbFormatAmount2 = _interopRequireDefault(_uiBbFormatAmount);
	
	var _uiBbmScrollNg = __webpack_require__(40);
	
	var _uiBbmScrollNg2 = _interopRequireDefault(_uiBbmScrollNg);
	
	var _uiBbI18nNg = __webpack_require__(8);
	
	var _uiBbI18nNg2 = _interopRequireDefault(_uiBbI18nNg);
	
	var _debitCreditSign = __webpack_require__(41);
	
	var _debitCreditSign2 = _interopRequireDefault(_debitCreditSign);
	
	var _productKindView = __webpack_require__(42);
	
	var _productKindView2 = _interopRequireDefault(_productKindView);
	
	var _helpers = __webpack_require__(43);
	
	var _helpers2 = _interopRequireDefault(_helpers);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * @module ext-bbm-transactions-list-ng
	 *
	 * @description
	 * Mobile extension for the transactions list widget.
	 *
	 * @example
	 * <!-- transactions widget model.xml -->
	 * <property name="extension" viewHint="text-input,admin">
	 *  <value type="string">ext-bbm-transactions-list-ng</value>
	 * </property>
	 */
	var helpers = exports.helpers = _helpers2.default;
	
	var dependencyKeys = exports.dependencyKeys = [_uiBbFormatAmount2.default, _uiBbI18nNg2.default, _uiBbmScrollNg2.default];
	
	/**
	 * @name groupTransactions
	 *
	 * @description
	 * Groups transactions by date
	 * We assume that scheduledDate is always date only, e.g. "2016-10-14"
	 * Otherwise this method should be improved
	 *
	 * @type {function}
	 * @param {array} transactions
	 * @returns {array} groups - Transactions grouped by date
	 * @inner
	 */
	function groupTransactions(transactions) {
	  var groups = [];
	
	  transactions.forEach(function (transaction) {
	    var date = transaction.bookingDate;
	    var group = groups.find(function (currGroup) {
	      return currGroup.date === date;
	    });
	
	    if (!group) {
	      group = {
	        date: date,
	        transactions: []
	      };
	      groups.push(group);
	    }
	
	    group.transactions.push(transaction);
	  });
	
	  return groups;
	}
	
	/**
	 * @name Hooks
	 * @type {object}
	 *
	 * @description
	 * Hooks for widget-bb-transactions-ng
	 */
	var hooks = exports.hooks = {
	  /**
	   * @name Hooks#processProductSelected
	   *
	   * @description
	   * Hook to process the selected product.
	   *
	   * @type {function}
	   * @param {object} product The original product data from the API
	   * @returns {ProductView} Processed product
	   */
	  processProductSelected: _productKindView2.default,
	
	  /**
	   * @name Hooks#processTransactions
	   * @description
	   * Hook to process the list of transactions.
	   *
	   * @type {function}
	   * @param {array<object>} transactions The original transactions from the API
	   * @returns {array<object>} The list of processed transactions
	   */
	  processTransactions: function processTransactions(transactions) {
	    return groupTransactions(transactions.map(_debitCreditSign2.default));
	  }
	};

/***/ }),

/***/ 40:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_40__;

/***/ }),

/***/ 41:
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var positiveSignKey = exports.positiveSignKey = 'CRDT';
	var negativeSignKey = exports.negativeSignKey = 'DBIT';
	
	var creditDebitKeysToSign = {};
	creditDebitKeysToSign[positiveSignKey] = '+';
	creditDebitKeysToSign[negativeSignKey] = '-';
	
	/**
	 * @description
	 * Adds debitCreditSign property to transaction object based on debitCreditIndicator key
	 *
	 * @param {Object} transaction Transaction object
	 * @returns {Object} new copy of Transaction object
	 */
	
	exports.default = function (transaction) {
	  return Object.assign({
	    debitCreditSign: creditDebitKeysToSign[transaction.creditDebitIndicator]
	  }, transaction);
	};

/***/ }),

/***/ 42:
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var maskCardNumber = function maskCardNumber(suffix) {
	  if (!suffix) {
	    return '';
	  }
	  return 'XXXX-XXXX-XXXX-' + suffix;
	};
	
	var defaultViewModel = function defaultViewModel(product) {
	  return product;
	};
	
	var viewModelFactories = {
	  currentAccounts: function currentAccounts(product) {
	    return Object.assign({}, product, {
	      identifier: product.IBAN || product.BBAN,
	      primaryValue: product.bookedBalance,
	      secondaryValue: product.availableBalance,
	      secondaryLabel: 'label.availableBalance',
	      tertiaryValue: product.creditLimit,
	      tertiaryLabel: 'label.creditLimit'
	    });
	  },
	
	  savingsAccounts: function savingsAccounts(product) {
	    return Object.assign({}, product, {
	      identifier: product.BBAN || product.IBAN,
	      primaryValue: product.bookedBalance,
	      secondaryValue: product.accruedInterest,
	      secondaryLabel: 'label.accruedInterestAmount'
	    });
	  },
	
	  termDeposits: function termDeposits(product) {
	    return Object.assign({}, product, {
	      primaryValue: product.principalAmount,
	      secondaryValue: product.accruedInterest,
	      secondaryLabel: 'label.accruedInterestAmount'
	    });
	  },
	
	  creditCards: function creditCards(product) {
	    return Object.assign({}, product, {
	      identifier: maskCardNumber(product.number),
	      primaryValue: product.bookedBalance,
	      secondaryValue: product.creditLimit,
	      secondaryLabel: 'label.creditLimit',
	      tertiaryValue: product.availableBalance,
	      tertiaryLabel: 'label.availableBalance'
	    });
	  },
	
	  debitCards: function debitCards(product) {
	    return Object.assign({}, product, {
	      identifier: maskCardNumber(product.number)
	    });
	  },
	
	  loans: function loans(product) {
	    return Object.assign({}, product, {
	      primaryValue: product.bookedBalance
	    });
	  },
	
	  investmentAccounts: function investmentAccounts(product) {
	    return Object.assign({}, product, {
	      primaryValue: product.currentInvestmentValue
	    });
	  }
	};
	
	/**
	 * Prepare the fields of a Product into a form ready for display to the User
	 *
	 * @param {object} product The source Product from the API
	 * @type {function}
	 * @returns {ProductView}
	 * @inner
	 */
	
	exports.default = function (product) {
	  var isProcessedProduct = {}.hasOwnProperty.call(product, 'identifier') || {}.hasOwnProperty.call(product, 'primaryValue');
	
	  if (isProcessedProduct) {
	    return product;
	  }
	
	  var kind = product.kind;
	  if (!{}.hasOwnProperty.call(viewModelFactories, kind)) {
	    throw new TypeError('Unhandled product kind: ' + kind);
	  }
	
	  return viewModelFactories[kind](product) || defaultViewModel(product);
	};
	
	/**
	 * @typedef ProductView
	 * @type {object}
	 * @property {string} id The internal Product Identifier
	 * @property {string} name The product's name, suitable for display to users
	 * @property {?string} identifier The identifier of the Product from the user's perspective
	 * @property {?string} primaryValue The most important associated value to be displayed
	 * @property {?string} secondaryValue A secondary associated value to be displayed
	 * @property {?string} secondaryLabel A label to describe the secondary value
	 */

/***/ }),

/***/ 43:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _debitCreditSign = __webpack_require__(41);
	
	var Intent = {
	  INITIATE_PAYMENT: 'intent.bb.paymentOrder.payment.initiate'
	}; /* global window */
	
	
	var Platform = {
	  ANDROID: 'android',
	  IOS: 'ios'
	};
	
	var ToolbarButtonEvent = {
	  SHOW_PRODUCT_DETAILS: 'bb.action.productDetails.view.show'
	};
	
	var getPlatform = function getPlatform() {
	  return window.BB_PLATFORM;
	};
	
	var warn = function warn(msg) {
	  return console.warn('[ext-bbm-transactions-list-ng] ' + msg);
	};
	
	exports.default = function (_ref) {
	  var bbIntent = _ref.bbIntent,
	      stateContainer = _ref.stateContainer;
	
	  var initiatePaymentIntent = bbIntent.create(Intent.INITIATE_PAYMENT);
	
	  var getSelectedProduct = stateContainer.createSelector(function (state) {
	    return state.product.data;
	  });
	
	  /**
	   * @description
	   * Checks whether the widget is running on Android.
	   * Returns true, if the platform is Android, false otherwise.
	   *
	   * @name Helpers#isAndroid
	   * @type {function}
	   * @returns {boolean}
	   */
	  var isAndroid = function isAndroid() {
	    return getPlatform() === Platform.ANDROID;
	  };
	
	  /**
	   * @description
	   * Checks whether the widget is running on iOS.
	   * Returns true, if the platform is iOS, false otherwise.
	   *
	   * @name Helpers#isIOS
	   * @type {function}
	   * @returns {boolean}
	   */
	  var isIOS = function isIOS() {
	    return getPlatform() === Platform.IOS;
	  };
	
	  /**
	   * @description
	   * Checks whether actions for a given account should be displayed.
	   * Returns true, if they should be displayed, or `false` otherwise.
	   *
	   * @name Helpers#showAccountActions
	   * @type {function}
	   * @returns {boolean}
	   */
	  var showAccountActions = function showAccountActions() {
	    return Boolean(getSelectedProduct() && getSelectedProduct().debitAccount);
	  };
	
	  /**
	   * @description
	   * Checks whether FAB (Floating Action Buttons) should be displayed. Returns true
	   * if it should be displayed, false otherwise.
	   *
	   * @name Helpers#showFAB
	   * @type {function}
	   * @returns {boolean}
	   */
	  var showFAB = function showFAB(ctrl) {
	    return Boolean(!ctrl.searching && isAndroid() && showAccountActions());
	  };
	
	  /**
	   * @description
	   * Based on credit/debit indicator, put right sign on the transaction amount
	   *
	   * @name Helpers#getSignedAmount
	   * @type {function}
	   * @param {object} transaction Transaction object
	   * @returns {number} Signed amount
	   */
	  var getSignedAmount = function getSignedAmount(transaction) {
	    return transaction.amount * (transaction.creditDebitIndicator === _debitCreditSign.negativeSignKey ? -1 : 1);
	  };
	
	  /**
	   * @description
	   * Helper which adds event listener on show details.
	   *
	   * @name Helpers#onInit
	   * @type {function}
	   * @param {module:widget-bb-transactions-ng.TransactionsController} ctrl
	   *  TransactionsController instance.
	   */
	  var onInit = function onInit(ctrl) {
	    window.addEventListener(ToolbarButtonEvent.SHOW_PRODUCT_DETAILS, function () {
	      var productId = ctrl.product.id;
	      ctrl.showProductDetails(productId);
	    });
	  };
	
	  /**
	   * @description
	   * Initiates payment from the given product.
	   *
	   * @name Helpers#initiatePayment
	   * @type {function}
	   */
	  var initiatePayment = function initiatePayment() {
	    var product = getSelectedProduct();
	
	    if (!product) {
	      warn('Cannot initiate a payment – no selected product');
	      return;
	    }
	
	    initiatePaymentIntent({
	      debitAccount: product
	    });
	  };
	
	  /**
	   * @description
	   * Checks for initial loading.
	   *
	   * @name Helpers#isInitialLoading
	   * @type {function}
	   *
	   * @param {module:widget-bb-transactions-ng.TransactionsController} ctrl
	   * @returns {boolean}
	   */
	  var isInitialLoading = function isInitialLoading(ctrl) {
	    return ctrl.loading && !ctrl.transactions;
	  };
	
	  /**
	   * @description
	   * Checks if the searching has been failed.
	   *
	   * @name Helpers#isSearchErrorState
	   * @type {function}
	   *
	   * @param {module:widget-bb-transactions-ng.TransactionsController} ctrl
	   * @returns {boolean}
	   */
	  var isSearchErrorState = function isSearchErrorState(ctrl) {
	    return ctrl.searching && ctrl.searchLoadingError && !ctrl.searchLoading;
	  };
	
	  /**
	   * @description
	   * Checks if there are no search results.
	   *
	   * @name Helpers#isSearchEmptyState
	   * @type {function}
	   *
	   * @param {module:widget-bb-transactions-ng.TransactionsController} ctrl
	   * @returns {boolean}
	   */
	  var isSearchEmptyState = function isSearchEmptyState(ctrl) {
	    return ctrl.searching && Boolean(ctrl.searchTransactions && !ctrl.searchTransactions.length) && !ctrl.searchLoadingError && !ctrl.searchLoading;
	  };
	
	  /**
	   * @description
	   * Checks if there are no transactions.
	   *
	   * @name Helpers#isEmptyState
	   * @type {function}
	   *
	   * @param {module:widget-bb-transactions-ng.TransactionsController} ctrl
	   * @returns {boolean}
	   */
	  var isEmptyState = function isEmptyState(ctrl) {
	    return !ctrl.searching && Boolean(ctrl.transactions && !ctrl.transactions.length) && !ctrl.loading && !ctrl.loadingError;
	  };
	
	  /**
	   * @description
	   * Checks if the loading has been failed.
	   *
	   * @name Helpers#isErrorState
	   * @type {function}
	   *
	   * @param {module:widget-bb-transactions-ng.TransactionsController} ctrl
	   * @returns {boolean}
	   */
	  var isErrorState = function isErrorState(ctrl) {
	    return !ctrl.searching && !ctrl.loading && ctrl.loadingError;
	  };
	
	  return {
	    getSignedAmount: getSignedAmount,
	    initiatePayment: initiatePayment,
	    isAndroid: isAndroid,
	    isEmptyState: isEmptyState,
	    isErrorState: isErrorState,
	    isInitialLoading: isInitialLoading,
	    isSearchEmptyState: isSearchEmptyState,
	    isSearchErrorState: isSearchErrorState,
	    onInit: onInit,
	    isIOS: isIOS,
	    showAccountActions: showAccountActions,
	    showFAB: showFAB
	  };
	};

/***/ })

/******/ })
});
;
//# sourceMappingURL=ext-bbm-transactions-list-ng.js.map