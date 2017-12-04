(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("ui-bb-i18n-ng"), require("ui-bbm-product-kind-table-view-ng"));
	else if(typeof define === 'function' && define.amd)
		define("ext-bbm-product-summary-ng", ["ui-bb-i18n-ng", "ui-bbm-product-kind-table-view-ng"], factory);
	else if(typeof exports === 'object')
		exports["ext-bbm-product-summary-ng"] = factory(require("ui-bb-i18n-ng"), require("ui-bbm-product-kind-table-view-ng"));
	else
		root["ext-bbm-product-summary-ng"] = factory(root["ui-bb-i18n-ng"], root["ui-bbm-product-kind-table-view-ng"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_8__, __WEBPACK_EXTERNAL_MODULE_45__) {
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

	module.exports = __webpack_require__(49);

/***/ }),

/***/ 8:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_8__;

/***/ }),

/***/ 45:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_45__;

/***/ }),

/***/ 49:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.hooks = exports.dependencyKeys = exports.helpers = undefined;
	
	var _uiBbmProductKindTableViewNg = __webpack_require__(45);
	
	var _uiBbmProductKindTableViewNg2 = _interopRequireDefault(_uiBbmProductKindTableViewNg);
	
	var _uiBbI18nNg = __webpack_require__(8);
	
	var _uiBbI18nNg2 = _interopRequireDefault(_uiBbI18nNg);
	
	var _hooks = __webpack_require__(50);
	
	var extHooks = _interopRequireWildcard(_hooks);
	
	var _helpers = __webpack_require__(53);
	
	var _helpers2 = _interopRequireDefault(_helpers);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * @module ext-bbm-product-summary-ng
	 *
	 * @description
	 * Mobile extension for the product summary widget.
	 *
	 * @requires ui-bbm-product-kind-table-view-ng
	 * @requires ui-bb-inline-status-ng
	 * @requires ui-bb-i18n-ng
	 *
	 * @example
	 * <!-- product summary widget model.xml -->
	 * <property name="extension" viewHint="text-input,admin">
	 *  <value type="string">ext-bbm-product-summary-ng</value>
	 * </property>
	 */
	var helpers = exports.helpers = _helpers2.default;
	
	var dependencyKeys = exports.dependencyKeys = [_uiBbmProductKindTableViewNg2.default, _uiBbI18nNg2.default];
	
	var hooks = exports.hooks = extHooks;

/***/ }),

/***/ 50:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.processKinds = undefined;
	
	var _productKindView = __webpack_require__(51);
	
	var _productKindView2 = _interopRequireDefault(_productKindView);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * @name Hooks
	 * @type {object}
	 *
	 * @description
	 * Hooks for widget-bb-product-summary-ng
	 */
	
	/**
	 * @name processKinds
	 * @description
	 * Hook for processing product kinds after initialization.
	 *
	 * @type {function}
	 * @param kinds {ProductKind[]} ProductKinds to process
	 * @returns {ProductKindView[]}
	 */
	var processKinds = exports.processKinds = function processKinds(kinds) {
	  return kinds.map(_productKindView2.default);
	}; /* eslint-disable import/prefer-default-export */

/***/ }),

/***/ 51:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _sortingMethods = __webpack_require__(52);
	
	var _sortingMethods2 = _interopRequireDefault(_sortingMethods);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var maskCardNumber = function maskCardNumber(suffix) {
	  return suffix && 'XXXX-XXXX-XXXX-' + suffix;
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
	 * @description
	 * Prepare the fields of a Product into a form ready for display to the User
	 *
	 * @inner
	 * @type {function}
	 * @param {object} product The source Product from the API
	 * @returns {ProductView}
	 */
	var productKindView = function productKindView(product) {
	  return viewModelFactories[product.kind](product) || defaultViewModel(product);
	};
	
	/**
	 * @description
	 * Prepare the fields of a Product Kind into a form ready for display to the User
	 *
	 * @private
	 * @type {function}
	 * @param {object} kind The source ProductKind from the API
	 * @returns {ProductKindView}
	 */
	
	exports.default = function (kind) {
	  return {
	    id: kind.id,
	    name: kind.name,
	    products: kind.products.map(productKindView).sort(_sortingMethods2.default.productNameAsc),
	    aggregatedBalance: kind.aggregatedBalance,
	    currency: kind.currency,
	    isOpen: kind.isOpen
	  };
	};
	
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
	 * @property {?string} primaryValue The most important associated value to be displayed
	 * @property {?string} secondaryValue A secondary associated value to be displayed
	 * @property {?string} secondaryLabel A label to describe the secondary value
	 * @property {?string} tertiaryValue A tertiary associated value to be displayed
	 * @property {?string} tertiaryLabel A label to describe the tertiary value
	 * @property {?string} currency ISO currency code
	 */

/***/ }),

/***/ 52:
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * Sorting methods for products
	 */
	exports.default = {
	  /**
	   * @name productNameAsc
	   * @description
	   * Sort products alphabetically by name, ascending
	   * @type {function}
	   * @param {Object} productA
	   * @param {Object} productB
	   * @returns {('-1'|'0'|'1')} result
	   */
	  productNameAsc: function productNameAsc(productA, productB) {
	    if (productA.name < productB.name) return -1;
	    if (productA.name > productB.name) return 1;
	    return 0;
	  }
	};

/***/ }),

/***/ 53:
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	/**
	 * @description
	 * Helpers for ext-bbm-product-summary-ng
	 *
	 * @name Helpers
	 * @type {Object}
	 */
	
	exports.default = function () {
	  return {
	    /**
	     * @description
	     * Checks for the initial loading.
	     *
	     * @name Helpers#isInitialLoading
	     * @type {function}
	     *
	     * @param {module:widget-bb-product-summary-ng.ProductSummaryController} ctrl
	     * @returns {boolean}
	     */
	    isInitialLoading: function isInitialLoading(ctrl) {
	      return ctrl.isProductLoading && !ctrl.productKinds;
	    },
	
	    /**
	     * @description
	     * Checks if there are no products.
	     *
	     * @name Helpers#isEmptyState
	     * @type {function}
	     *
	     * @param {module:widget-bb-product-summary-ng.ProductSummaryController} ctrl
	     * @returns {boolean}
	     */
	    isEmptyState: function isEmptyState(ctrl) {
	      return Boolean(ctrl.productKinds && !ctrl.productKinds.length) && !ctrl.productKindsError && !ctrl.isProductLoading;
	    },
	
	    /**
	     * @description
	     * Checks for the error state.
	     *
	     * @name Helpers#isErrorState
	     * @type {function}
	     *
	     * @param {module:widget-bb-product-summary-ng.ProductSummaryController} ctrl
	     * @returns {boolean}
	     */
	    isErrorState: function isErrorState(ctrl) {
	      return ctrl.productKindsError && !ctrl.isProductLoading;
	    }
	  };
	};

/***/ })

/******/ })
});
;
//# sourceMappingURL=ext-bbm-product-summary-ng.js.map