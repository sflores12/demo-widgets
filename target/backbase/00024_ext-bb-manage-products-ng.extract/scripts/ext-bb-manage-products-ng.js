(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vendor-bb-angular-ng-aria"), require("ui-bb-format-amount"), require("ui-bb-loading-indicator-ng"), require("ui-bb-substitute-error-ng"), require("ui-bb-element-dimensions-ng"), require("ui-bb-notification-stripe-ng"), require("ui-bb-i18n-ng"), require("ui-bb-focus-ng"), require("ui-bb-empty-state-ng"));
	else if(typeof define === 'function' && define.amd)
		define("ext-bb-manage-products-ng", ["vendor-bb-angular-ng-aria", "ui-bb-format-amount", "ui-bb-loading-indicator-ng", "ui-bb-substitute-error-ng", "ui-bb-element-dimensions-ng", "ui-bb-notification-stripe-ng", "ui-bb-i18n-ng", "ui-bb-focus-ng", "ui-bb-empty-state-ng"], factory);
	else if(typeof exports === 'object')
		exports["ext-bb-manage-products-ng"] = factory(require("vendor-bb-angular-ng-aria"), require("ui-bb-format-amount"), require("ui-bb-loading-indicator-ng"), require("ui-bb-substitute-error-ng"), require("ui-bb-element-dimensions-ng"), require("ui-bb-notification-stripe-ng"), require("ui-bb-i18n-ng"), require("ui-bb-focus-ng"), require("ui-bb-empty-state-ng"));
	else
		root["ext-bb-manage-products-ng"] = factory(root["vendor-bb-angular-ng-aria"], root["ui-bb-format-amount"], root["ui-bb-loading-indicator-ng"], root["ui-bb-substitute-error-ng"], root["ui-bb-element-dimensions-ng"], root["ui-bb-notification-stripe-ng"], root["ui-bb-i18n-ng"], root["ui-bb-focus-ng"], root["ui-bb-empty-state-ng"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_3__, __WEBPACK_EXTERNAL_MODULE_4__, __WEBPACK_EXTERNAL_MODULE_5__, __WEBPACK_EXTERNAL_MODULE_6__, __WEBPACK_EXTERNAL_MODULE_7__, __WEBPACK_EXTERNAL_MODULE_8__, __WEBPACK_EXTERNAL_MODULE_9__, __WEBPACK_EXTERNAL_MODULE_10__) {
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
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.events = exports.helpers = exports.hooks = exports.dependencyKeys = undefined;
	
	var _vendorBbAngularNgAria = __webpack_require__(2);
	
	var _vendorBbAngularNgAria2 = _interopRequireDefault(_vendorBbAngularNgAria);
	
	var _uiBbFormatAmount = __webpack_require__(3);
	
	var _uiBbFormatAmount2 = _interopRequireDefault(_uiBbFormatAmount);
	
	var _uiBbLoadingIndicatorNg = __webpack_require__(4);
	
	var _uiBbLoadingIndicatorNg2 = _interopRequireDefault(_uiBbLoadingIndicatorNg);
	
	var _uiBbSubstituteErrorNg = __webpack_require__(5);
	
	var _uiBbSubstituteErrorNg2 = _interopRequireDefault(_uiBbSubstituteErrorNg);
	
	var _uiBbElementDimensionsNg = __webpack_require__(6);
	
	var _uiBbElementDimensionsNg2 = _interopRequireDefault(_uiBbElementDimensionsNg);
	
	var _uiBbNotificationStripeNg = __webpack_require__(7);
	
	var _uiBbNotificationStripeNg2 = _interopRequireDefault(_uiBbNotificationStripeNg);
	
	var _uiBbI18nNg = __webpack_require__(8);
	
	var _uiBbI18nNg2 = _interopRequireDefault(_uiBbI18nNg);
	
	var _uiBbFocusNg = __webpack_require__(9);
	
	var _uiBbFocusNg2 = _interopRequireDefault(_uiBbFocusNg);
	
	var _uiBbEmptyStateNg = __webpack_require__(10);
	
	var _uiBbEmptyStateNg2 = _interopRequireDefault(_uiBbEmptyStateNg);
	
	var _helpers = __webpack_require__(11);
	
	var _helpers2 = _interopRequireDefault(_helpers);
	
	var _hooks = __webpack_require__(12);
	
	var extHooks = _interopRequireWildcard(_hooks);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var dependencyKeys = exports.dependencyKeys = [_vendorBbAngularNgAria2.default, _uiBbFormatAmount2.default, _uiBbLoadingIndicatorNg2.default, _uiBbSubstituteErrorNg2.default, _uiBbElementDimensionsNg2.default, _uiBbNotificationStripeNg2.default, _uiBbI18nNg2.default, _uiBbFocusNg2.default, _uiBbEmptyStateNg2.default]; /**
	                                                                                                                                                                                                                                                                                                                                 * @module ext-bb-manage-products-ng
	                                                                                                                                                                                                                                                                                                                                 *
	                                                                                                                                                                                                                                                                                                                                 * @description
	                                                                                                                                                                                                                                                                                                                                 * Default extension for widget-bb-manage-products-ng
	                                                                                                                                                                                                                                                                                                                                 *
	                                                                                                                                                                                                                                                                                                                                 * @requires vendor-bb-angular-ng-aria
	                                                                                                                                                                                                                                                                                                                                 */
	var hooks = exports.hooks = extHooks;
	var helpers = exports.helpers = _helpers2.default;
	
	var events = exports.events = {};

/***/ }),
/* 2 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ }),
/* 3 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/***/ }),
/* 4 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_4__;

/***/ }),
/* 5 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_5__;

/***/ }),
/* 6 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_6__;

/***/ }),
/* 7 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_7__;

/***/ }),
/* 8 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_8__;

/***/ }),
/* 9 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_9__;

/***/ }),
/* 10 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_10__;

/***/ }),
/* 11 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var helpers = function helpers(context) {
	  var i18nFilter = context.$filter('i18n');
	
	  var LookupKeyFactory = {
	    currentAccounts: function currentAccounts(product) {
	      return {
	        primaryBalance: product.bookedBalance,
	        secondaryBalance: product.availableBalance,
	        tertiaryBalance: product.creditLimit
	      };
	    },
	    savingsAccounts: function savingsAccounts(product) {
	      return {
	        primaryBalance: product.bookedBalance,
	        secondaryBalance: product.accruedInterest
	      };
	    },
	    termDeposits: function termDeposits(product) {
	      return {
	        primaryBalance: product.principalAmount,
	        tertiaryBalance: product.accruedInterest
	      };
	    },
	    creditCards: function creditCards(product) {
	      return {
	        primaryBalance: product.bookedBalance,
	        secondaryBalance: product.availableBalance,
	        tertiaryBalance: product.creditLimit
	      };
	    },
	    debitCards: function debitCards() {
	      return {
	        primaryBalance: i18nFilter('product.label.debit.card.no.amount')
	      };
	    },
	    loans: function loans(product) {
	      return {
	        primaryBalance: product.bookedBalance
	      };
	    },
	    investmentAccounts: function investmentAccounts(product) {
	      return {
	        primaryBalance: product.currentInvestmentValue
	      };
	    }
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
	    handleAlias: function handleAlias(alias, name) {
	      return alias || name || i18nFilter('product.label.no.alias');
	    },
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
	    showChangeNameInput: function showChangeNameInput(productSelected, product) {
	      return productSelected.id === product.id && productSelected.showInput;
	    },
	
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
	    processBalances: function processBalances(selectedProduct) {
	      var processed = LookupKeyFactory[selectedProduct.kind](selectedProduct);
	      return processed.primaryBalance || processed.secondaryBalance || processed.tertiaryBalance;
	    }
	  };
	};
	
	exports.default = helpers;

/***/ }),
/* 12 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	/**
	 * @name Hooks
	 * @type {object}
	 *
	 * @description
	 * Hooks for widget-bb-manage-products-ng
	 */
	
	/**
	 * @name processKinds
	 *
	 * @description
	 * Hook that processing all productKinds to get
	 * a singe array containing all products from all productKinds
	 *
	 * @type {function}
	 * @param {module:model-bb-product-summary-ng.ProductKind[]} productKinds ProductKinds to process
	 * @returns {array<object>} Array of products from all ProductKinds
	 */
	var processKinds = exports.processKinds = function processKinds(productKinds) {
	  return productKinds.reduce(function (memo, item) {
	    var products = item.products.map(function (p) {
	      return Object.assign(p, { kindName: item.name });
	    });
	    return [].concat(_toConsumableArray(memo), _toConsumableArray(products));
	  }, []);
	};
	
	exports.default = {
	  processKinds: processKinds
	};

/***/ })
/******/ ])
});
;
//# sourceMappingURL=ext-bb-manage-products-ng.js.map