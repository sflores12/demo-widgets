(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("ui-bb-loading-indicator-ng"), require("ui-bb-i18n-ng"), require("ui-bb-product-summary-ng"));
	else if(typeof define === 'function' && define.amd)
		define("ext-bb-product-selected-ng", ["ui-bb-loading-indicator-ng", "ui-bb-i18n-ng", "ui-bb-product-summary-ng"], factory);
	else if(typeof exports === 'object')
		exports["ext-bb-product-selected-ng"] = factory(require("ui-bb-loading-indicator-ng"), require("ui-bb-i18n-ng"), require("ui-bb-product-summary-ng"));
	else
		root["ext-bb-product-selected-ng"] = factory(root["ui-bb-loading-indicator-ng"], root["ui-bb-i18n-ng"], root["ui-bb-product-summary-ng"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_4__, __WEBPACK_EXTERNAL_MODULE_8__, __WEBPACK_EXTERNAL_MODULE_25__) {
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

	module.exports = __webpack_require__(24);

/***/ }),

/***/ 4:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_4__;

/***/ }),

/***/ 8:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_8__;

/***/ }),

/***/ 24:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.hooks = exports.dependencyKeys = undefined;
	
	var _uiBbProductSummaryNg = __webpack_require__(25);
	
	var _uiBbProductSummaryNg2 = _interopRequireDefault(_uiBbProductSummaryNg);
	
	var _uiBbLoadingIndicatorNg = __webpack_require__(4);
	
	var _uiBbLoadingIndicatorNg2 = _interopRequireDefault(_uiBbLoadingIndicatorNg);
	
	var _uiBbI18nNg = __webpack_require__(8);
	
	var _uiBbI18nNg2 = _interopRequireDefault(_uiBbI18nNg);
	
	var _productKindView = __webpack_require__(26);
	
	var _productKindView2 = _interopRequireDefault(_productKindView);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * @module ext-bb-product-selected-ng
	 *
	 * @description
	 * Extension for product summary widget to show currently selected product
	 *
	 * @requires ui-bb-product-summary-ng
	 *
	 * @example
	 * <!-- payment widget model.xml -->
	 * <property name="extension" viewHint="text-input,admin">
	 *  <value type="string">ext-bb-product-selected-ng</value>
	 * </property>
	 */
	var dependencyKeys = exports.dependencyKeys = [_uiBbProductSummaryNg2.default, _uiBbLoadingIndicatorNg2.default, _uiBbI18nNg2.default];
	
	/**
	 * @name Hooks
	 * @type {object}
	 *
	 * @description
	 * Hooks for widget-bb-product-summary-ng
	 */
	var hooks = exports.hooks = {
	  /**
	   * @name processProductSelected
	   * @description
	   * Hook for processing selected product after selection update
	   *
	   * @type {function}
	   * @param {object} product The source Product from the widget controller
	   * @returns {ProductView}
	   */
	  processProductSelected: _productKindView2.default
	};

/***/ }),

/***/ 25:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_25__;

/***/ }),

/***/ 26:
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var maskCardNumber = function maskCardNumber(suffix) {
	  return 'XXXX-XXXX-XXXX-' + suffix;
	};
	
	var defaultViewModel = function defaultViewModel(product) {
	  return {
	    id: product.id,
	    name: product.name
	  };
	};
	
	var viewModelFactories = {
	  currentAccounts: function currentAccounts(product) {
	    return {
	      id: product.id,
	      name: product.name,
	      identifier: product.IBAN || product.BBAN,
	      primaryValue: product.bookedBalance,
	      secondaryValue: product.availableBalance,
	      secondaryLabel: 'label.available',
	      currency: product.currency
	    };
	  },
	
	  savingsAccounts: function savingsAccounts(product) {
	    return {
	      id: product.id,
	      name: product.name,
	      identifier: product.IBAN || product.BBAN,
	      primaryValue: product.bookedBalance,
	      secondaryValue: product.accruedInterest,
	      currency: product.currency
	    };
	  },
	
	  termDeposits: function termDeposits(product) {
	    return {
	      id: product.id,
	      name: product.name,
	      primaryValue: product.bookedBalance,
	      secondaryValue: product.principalAmount,
	      currency: product.currency
	    };
	  },
	
	  creditCards: function creditCards(product) {
	    return {
	      id: product.id,
	      name: product.name,
	      identifier: maskCardNumber(product.cardNumberSuffix),
	      primaryValue: product.bookedBalance,
	      secondaryValue: product.creditLimit,
	      currency: product.currency
	    };
	  },
	
	  debitCards: function debitCards(product) {
	    return {
	      id: product.id,
	      name: product.name,
	      identifier: maskCardNumber(product.cardNumberSuffix)
	    };
	  },
	
	  loans: function loans(product) {
	    return {
	      id: product.id,
	      name: product.name,
	      primaryValue: product.bookedBalance,
	      secondaryValue: product.principalAmount,
	      currency: product.currency
	    };
	  },
	
	  investmentAccounts: function investmentAccounts(product) {
	    return {
	      id: product.id,
	      name: product.name,
	      primaryValue: product.currentInvestmentValue,
	      currency: product.currency
	    };
	  }
	};
	
	/**
	 * Prepare the fields of a Product into a form ready for display to the User
	 *
	 * @inner
	 * @param {object} product The source Product from the API
	 * @returns {ProductView}
	 */
	
	exports.default = function (product) {
	  return viewModelFactories[product.kind](product) || defaultViewModel(product);
	};
	
	/**
	 * @typedef {Object} ProductView
	 * @property {string} id The internal Product Identifier
	 * @property {string} name The product's name, suitable for display to users
	 * @property {?string} identifier The identifier of the Product from the user's perspective
	 * @property {?string} primaryValue The most important associated value to be displayed
	 * @property {?string} secondaryValue A secondary associated value to be displayed
	 * @property {?string} secondaryLabel A label to describe the secondary value
	 * @property {?string} currency ISO currency code
	 */

/***/ })

/******/ })
});
;
//# sourceMappingURL=ext-bb-product-selected-ng.js.map