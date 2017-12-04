(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vendor-bb-angular-ng-aria"), require("ui-bb-format-amount"), require("ui-bb-loading-indicator-ng"), require("ui-bb-substitute-error-ng"), require("ui-bb-element-dimensions-ng"), require("ui-bb-i18n-ng"), require("vendor-bb-uib-popover"), require("vendor-bb-uib-accordion"), require("ui-bb-account-card"));
	else if(typeof define === 'function' && define.amd)
		define("ext-bb-product-summary-ng", ["vendor-bb-angular-ng-aria", "ui-bb-format-amount", "ui-bb-loading-indicator-ng", "ui-bb-substitute-error-ng", "ui-bb-element-dimensions-ng", "ui-bb-i18n-ng", "vendor-bb-uib-popover", "vendor-bb-uib-accordion", "ui-bb-account-card"], factory);
	else if(typeof exports === 'object')
		exports["ext-bb-product-summary-ng"] = factory(require("vendor-bb-angular-ng-aria"), require("ui-bb-format-amount"), require("ui-bb-loading-indicator-ng"), require("ui-bb-substitute-error-ng"), require("ui-bb-element-dimensions-ng"), require("ui-bb-i18n-ng"), require("vendor-bb-uib-popover"), require("vendor-bb-uib-accordion"), require("ui-bb-account-card"));
	else
		root["ext-bb-product-summary-ng"] = factory(root["vendor-bb-angular-ng-aria"], root["ui-bb-format-amount"], root["ui-bb-loading-indicator-ng"], root["ui-bb-substitute-error-ng"], root["ui-bb-element-dimensions-ng"], root["ui-bb-i18n-ng"], root["vendor-bb-uib-popover"], root["vendor-bb-uib-accordion"], root["ui-bb-account-card"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_3__, __WEBPACK_EXTERNAL_MODULE_4__, __WEBPACK_EXTERNAL_MODULE_5__, __WEBPACK_EXTERNAL_MODULE_6__, __WEBPACK_EXTERNAL_MODULE_8__, __WEBPACK_EXTERNAL_MODULE_14__, __WEBPACK_EXTERNAL_MODULE_28__, __WEBPACK_EXTERNAL_MODULE_29__) {
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

	module.exports = __webpack_require__(27);

/***/ }),
/* 1 */,
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
/* 7 */,
/* 8 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_8__;

/***/ }),
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_14__;

/***/ }),
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.dependencyKeys = exports.helpers = exports.hooks = undefined;
	
	var _vendorBbUibAccordion = __webpack_require__(28);
	
	var _vendorBbUibAccordion2 = _interopRequireDefault(_vendorBbUibAccordion);
	
	var _vendorBbAngularNgAria = __webpack_require__(2);
	
	var _vendorBbAngularNgAria2 = _interopRequireDefault(_vendorBbAngularNgAria);
	
	var _uiBbAccountCard = __webpack_require__(29);
	
	var _uiBbAccountCard2 = _interopRequireDefault(_uiBbAccountCard);
	
	var _uiBbSubstituteErrorNg = __webpack_require__(5);
	
	var _uiBbSubstituteErrorNg2 = _interopRequireDefault(_uiBbSubstituteErrorNg);
	
	var _uiBbFormatAmount = __webpack_require__(3);
	
	var _uiBbFormatAmount2 = _interopRequireDefault(_uiBbFormatAmount);
	
	var _vendorBbUibPopover = __webpack_require__(14);
	
	var _vendorBbUibPopover2 = _interopRequireDefault(_vendorBbUibPopover);
	
	var _uiBbElementDimensionsNg = __webpack_require__(6);
	
	var _uiBbElementDimensionsNg2 = _interopRequireDefault(_uiBbElementDimensionsNg);
	
	var _uiBbLoadingIndicatorNg = __webpack_require__(4);
	
	var _uiBbLoadingIndicatorNg2 = _interopRequireDefault(_uiBbLoadingIndicatorNg);
	
	var _uiBbI18nNg = __webpack_require__(8);
	
	var _uiBbI18nNg2 = _interopRequireDefault(_uiBbI18nNg);
	
	var _helpers = __webpack_require__(30);
	
	var _helpers2 = _interopRequireDefault(_helpers);
	
	var _hooks = __webpack_require__(31);
	
	var extHooks = _interopRequireWildcard(_hooks);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * @name Hooks
	 * @type {object}
	 *
	 * @description
	 * Hooks for widget-bb-product-summary-ng
	 */
	var hooks = exports.hooks = extHooks; /**
	                                       * @module ext-bb-product-summary-ng
	                                       *
	                                       * @description
	                                       * Default extension for product summary widget.
	                                       *
	                                       * @requires vendor-bb-uib-accordion
	                                       * @requires ui-bb-account-card
	                                       * @requires ui-bb-substitute-error-ng
	                                       * @requires ui-bb-format-amount
	                                       * @requires vendor-bb-uib-popover
	                                       *
	                                       * @example
	                                       * <!-- payment widget model.xml -->
	                                       * <property name="extension" viewHint="text-input,admin">
	                                       *  <value type="string">ext-bb-product-summary-ng</value>
	                                       * </property>
	                                       *
	                                       * Usage of ui-bb-account-card component in template
	                                       *
	                                       * <ui-bb-account-card
	                                       *   account-name="$ctrl.payment.from.name"
	                                       *   account-number="$ctrl.payment.from.identifier"
	                                       *   amount="$ctrl.payment.from.amount"
	                                       *   currency="$ctrl.payment.from.currency"
	                                       *   show-avatar="true">
	                                       * </ui-bb-account-card>
	                                       *
	                                       * Usage of ui-bb-format-amount component in template
	                                       *
	                                       * <ui-bb-format-amount
	                                       * amount="$option.amount"
	                                       * currency="$option.currency"
	                                       * wrap
	                                       * no-map
	                                       * ></ui-bb-format-amount>
	                                       *
	                                       * where
	                                       * amount {string} Amount string
	                                       * currency {string} Currency code string
	                                       * wrap Condition to process values as HTML or not
	                                       * noMap Condition to stop looking for currency mapping in the currency-map
	                                       */
	var helpers = exports.helpers = _helpers2.default;
	
	var dependencyKeys = exports.dependencyKeys = [_vendorBbUibAccordion2.default, _vendorBbAngularNgAria2.default, _uiBbAccountCard2.default, _uiBbSubstituteErrorNg2.default, _uiBbFormatAmount2.default, _vendorBbUibPopover2.default, _uiBbElementDimensionsNg2.default, _uiBbLoadingIndicatorNg2.default, _uiBbI18nNg2.default];

/***/ }),
/* 28 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_28__;

/***/ }),
/* 29 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_29__;

/***/ }),
/* 30 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var helpers = function helpers(context) {
	  var i18nFilter = context.$filter('i18n');
	  var productAdditions = [];
	
	  return {
	    /**
	     * @description
	     * Builds AdditionalInfo array out of ProductView object.
	     * Result can be passed to account card component
	     *
	     * @name buildAdditionalInfo
	     * @type {function}
	     * @param {ProductView} product
	     * @returns {AdditionalInfo[]}
	     */
	    buildAdditionalInfo: function buildAdditionalInfo(product) {
	      if (productAdditions[product.id]) {
	        return productAdditions[product.id];
	      }
	
	      var additional = [];
	      var pushAddition = function pushAddition(name, amount, currency, alias) {
	        additional.push({
	          name: i18nFilter(name),
	          amount: amount,
	          currency: currency,
	          alias: i18nFilter(alias)
	        });
	      };
	
	      if (product.secondaryLabel || product.secondaryValue) {
	        pushAddition(product.secondaryLabel, product.secondaryValue, product.currency);
	      }
	
	      if (product.tertiaryLabel || product.tertiaryValue) {
	        pushAddition(product.tertiaryLabel, product.tertiaryValue, product.currency);
	      }
	
	      productAdditions[product.id] = additional;
	      return additional;
	    },
	    /**
	     * @description
	     * Filters products by visibility
	     *
	     * @name filterVisibleProducts
	     * @type {function}
	     * @param {object[]} products
	     * @returns {object} products - filtered products
	     */
	    filterVisibleProducts: function filterVisibleProducts(kinds) {
	      return kinds.filter(function (kind) {
	        return kind.products.some(function (e) {
	          return e.visible;
	        });
	      });
	    },
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
	    }
	  };
	};
	
	exports.default = helpers;
	
	/**
	 * @typedef {Object} AdditionalInfo
	 * @property {?string} name Additional info label
	 * @property {?number} amount Additional info row's amount
	 * @property {?string} currency ISO currency code
	 */

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.processKinds = undefined;
	
	var _productKindView = __webpack_require__(32);
	
	var _productKindView2 = _interopRequireDefault(_productKindView);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
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
	  return (0, _productKindView.openImportantKinds)(kinds).map(_productKindView2.default);
	}; /* eslint-disable import/prefer-default-export */

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.importantProductKinds = undefined;
	exports.openImportantKinds = openImportantKinds;
	
	var _sortingMethods = __webpack_require__(33);
	
	var _sortingMethods2 = _interopRequireDefault(_sortingMethods);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var maskCardNumber = function maskCardNumber(suffix) {
	  return suffix && 'XXXX-XXXX-XXXX-' + suffix;
	};
	
	var defaultViewModel = function defaultViewModel(product) {
	  return {
	    id: product.id,
	    name: product.name,
	    alias: product.alias
	  };
	};
	
	/**
	 * @description
	 * List of product kinds that will be expanded on widget initialization
	 *
	 * @type {string[]}
	 */
	var importantProductKinds = exports.importantProductKinds = ['currentAccounts', 'savingsAccounts'];
	
	var viewModelFactories = {
	  currentAccounts: function currentAccounts(product) {
	    return {
	      id: product.id,
	      name: product.name,
	      alias: product.alias,
	      identifier: product.IBAN || product.BBAN,
	      primaryValue: product.bookedBalance,
	      secondaryValue: product.availableBalance,
	      secondaryLabel: 'label.availableBalance',
	      tertiaryValue: product.creditLimit,
	      tertiaryLabel: 'label.creditLimit',
	      currency: product.currency,
	      visible: product.visible
	    };
	  },
	
	  savingsAccounts: function savingsAccounts(product) {
	    return {
	      id: product.id,
	      name: product.name,
	      alias: product.alias,
	      identifier: product.IBAN || product.BBAN,
	      primaryValue: product.bookedBalance,
	      secondaryValue: product.accruedInterest,
	      secondaryLabel: 'label.accruedInterestAmount',
	      currency: product.currency,
	      visible: product.visible
	    };
	  },
	
	  termDeposits: function termDeposits(product) {
	    return {
	      id: product.id,
	      name: product.name,
	      alias: product.alias,
	      primaryValue: product.principalAmount,
	      secondaryValue: product.accruedInterest,
	      secondaryLabel: 'label.accruedInterestAmount',
	      currency: product.currency,
	      visible: product.visible
	    };
	  },
	
	  creditCards: function creditCards(product) {
	    return {
	      id: product.id,
	      name: product.name,
	      alias: product.alias,
	      identifier: maskCardNumber(product.cardNumberSuffix),
	      primaryValue: product.bookedBalance,
	      secondaryValue: product.creditLimit,
	      secondaryLabel: 'label.creditLimit',
	      tertiaryValue: product.availableBalance,
	      tertiaryLabel: 'label.availableBalance',
	      currency: product.currency,
	      visible: product.visible
	    };
	  },
	
	  debitCards: function debitCards(product) {
	    return {
	      id: product.id,
	      name: product.name,
	      alias: product.alias,
	      identifier: maskCardNumber(product.cardNumberSuffix),
	      visible: product.visible
	    };
	  },
	
	  loans: function loans(product) {
	    return {
	      id: product.id,
	      name: product.name,
	      alias: product.alias,
	      primaryValue: product.bookedBalance,
	      currency: product.currency,
	      visible: product.visible
	    };
	  },
	
	  investmentAccounts: function investmentAccounts(product) {
	    return {
	      id: product.id,
	      name: product.name,
	      alias: product.alias,
	      primaryValue: product.currentInvestmentValue,
	      currency: product.currency,
	      visible: product.visible
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
	var productKindView = function productKindView(product) {
	  return viewModelFactories[product.kind](product) || defaultViewModel(product);
	};
	
	/**
	 * @description
	 * Check important kind option and determine which ProductKind should be opened on init
	 *
	 * @inner
	 * @type {function}
	 * @param {ProductKind[]} Array of ProductKinds
	 * @returns {ProductKind[]}
	 */
	function openImportantKinds(kinds) {
	  var openAll = kinds.filter(function (kind) {
	    return importantProductKinds.indexOf(kind.id) >= 0;
	  }).length === 0;
	
	  kinds.forEach(function (kind) {
	    if (openAll || !!(importantProductKinds.indexOf(kind.id) + 1)) {
	      Object.assign(kind, { isOpen: true });
	    }
	  });
	  return kinds;
	}
	
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
	    alias: kind.alias,
	    products: kind.products.map(productKindView).sort(_sortingMethods2.default.productNameAsc),
	    aggregatedBalance: kind.aggregatedBalance,
	    currency: kind.currency,
	    isOpen: kind.isOpen,
	    visible: kind.products.visible
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
/* 33 */
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

/***/ })
/******/ ])
});
;
//# sourceMappingURL=ext-bb-product-summary-ng.js.map