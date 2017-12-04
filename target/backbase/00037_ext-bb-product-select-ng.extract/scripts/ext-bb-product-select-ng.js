(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vendor-bb-angular-ng-aria"), require("ui-bb-account-selector"));
	else if(typeof define === 'function' && define.amd)
		define("ext-bb-product-select-ng", ["vendor-bb-angular-ng-aria", "ui-bb-account-selector"], factory);
	else if(typeof exports === 'object')
		exports["ext-bb-product-select-ng"] = factory(require("vendor-bb-angular-ng-aria"), require("ui-bb-account-selector"));
	else
		root["ext-bb-product-select-ng"] = factory(root["vendor-bb-angular-ng-aria"], root["ui-bb-account-selector"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_19__) {
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

	module.exports = __webpack_require__(22);

/***/ }),

/***/ 2:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ }),

/***/ 19:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_19__;

/***/ }),

/***/ 22:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.events = exports.helpers = exports.hooks = exports.dependencyKeys = undefined;
	
	var _vendorBbAngularNgAria = __webpack_require__(2);
	
	var _vendorBbAngularNgAria2 = _interopRequireDefault(_vendorBbAngularNgAria);
	
	var _uiBbAccountSelector = __webpack_require__(19);
	
	var _uiBbAccountSelector2 = _interopRequireDefault(_uiBbAccountSelector);
	
	var _productKindView = __webpack_require__(23);
	
	var _productKindView2 = _interopRequireDefault(_productKindView);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var dependencyKeys = exports.dependencyKeys = [_vendorBbAngularNgAria2.default, _uiBbAccountSelector2.default];
	
	// uncomment below to include CSS in your extension
	// import '../styles/index.css';
	
	/**
	 * @module ext-bb-product-select-ng
	 *
	 * @description
	 * Product select extension for product summary widget.
	 *
	 * @requires ui-bb-account-selector
	 *
	 * @example
	 * <!-- payment widget model.xml -->
	 * <property name="extension" viewHint="text-input,admin">
	 *  <value type="string">ext-bb-product-select-ng</value>
	 * </property>
	 */
	
	var hooks = exports.hooks = {
	  /**
	   * @name processKinds
	   * @description
	   * Hook for process products
	   *
	   * Make flat list
	   *
	   * Map to view model
	   *
	   * @type {function}
	   * @param {array} product The source Product from the widget controller
	   * @returns {array<ProductView>}
	   */
	  processKinds: _productKindView2.default,
	  /**
	   * @name processProductSelected
	   * @type {function}
	   *
	   * @description
	   * Hook for processing selected product after selection update
	   * Prepares the fields of the selected product into a form ready for display to the User
	   *
	   * @param {object} product Product to process
	   * @returns {object}
	   */
	  processProductSelected: function processProductSelected(product) {
	    return (0, _productKindView.productKindView)(product);
	  }
	};
	
	var helpers = exports.helpers = {};
	
	var events = exports.events = {};
	
	/**
	 * @typedef {Object} ProductKindView
	 * @property {string} id The Product Kind identifier
	 * @property {string} name The name of the Kind, suitable for display to users
	 * @property {Array.<ProductView>} products The products of this Kind
	 */
	
	/**
	 * @typedef {Object} ProductView
	 * @property {string} id The internal Product Identifier
	 * @property {string} name The product's name, suitable for display to users
	 * @property {?string} identifier The identifier of the Product from the user's perspective
	 * @property {?string} amount The most important associated value to be displayed
	 * @property {?string} currency ISO currency code
	 */

/***/ }),

/***/ 23:
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var maskCardNumber = function maskCardNumber(suffix) {
	  return suffix && "XXXX-XXXX-XXXX-" + suffix;
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
	      identifier: product.IBAN,
	      amount: product.bookedBalance,
	      currency: product.currency
	    };
	  },
	
	  termDeposits: function termDeposits(product) {
	    return {
	      id: product.id,
	      name: product.name,
	      identifier: product.BBAN,
	      amount: product.principalAmount,
	      currency: product.currency
	    };
	  },
	
	  savingsAccounts: function savingsAccounts(product) {
	    return {
	      id: product.id,
	      name: product.name,
	      identifier: product.BBAN,
	      amount: product.bookedBalance,
	      currency: product.currency
	    };
	  },
	
	  creditCards: function creditCards(product) {
	    return {
	      id: product.id,
	      name: product.name,
	      identifier: maskCardNumber(product.cardNumberSuffix),
	      amount: product.bookedBalance,
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
	      identifier: product.BBAN,
	      amount: product.bookedBalance,
	      currency: product.currency
	    };
	  },
	
	  investmentAccounts: function investmentAccounts(product) {
	    return {
	      id: product.id,
	      name: product.name,
	      identifier: product.BBAN,
	      amount: product.currentInvestmentValue,
	      currency: product.currency
	    };
	  }
	};
	
	/**
	 * @description
	 * Prepare the fields of a Product into a form ready for display to the User
	 *
	 * @inner
	 * @type {function}
	 * @param {object} product The source Product from the API
	 * @returns {ProductView}
	 */
	var productKindView = exports.productKindView = function productKindView(product) {
	  return Object.assign(product, viewModelFactories[product.kind](product) || defaultViewModel(product));
	};
	
	/**
	 * @description
	 * Prepare the fields of a Product Kind into a form ready for display to the User
	 *
	 * @private
	 * @type {function}
	 * @param {array<object>} kinds The source ProductKinds from the API
	 * @returns {array<ProductKindView>}
	 */
	
	exports.default = function (kinds) {
	  return kinds.reduce(function (memo, _ref) {
	    var products = _ref.products;
	    return memo.concat(products && products.length ? products.map(productKindView) : []);
	  }, []);
	};

/***/ })

/******/ })
});
;
//# sourceMappingURL=ext-bb-product-select-ng.js.map