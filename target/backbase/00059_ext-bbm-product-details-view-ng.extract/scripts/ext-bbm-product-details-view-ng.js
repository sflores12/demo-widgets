(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("ui-bb-format-amount"), require("ui-bb-i18n-ng"));
	else if(typeof define === 'function' && define.amd)
		define("ext-bbm-product-details-view-ng", ["ui-bb-format-amount", "ui-bb-i18n-ng"], factory);
	else if(typeof exports === 'object')
		exports["ext-bbm-product-details-view-ng"] = factory(require("ui-bb-format-amount"), require("ui-bb-i18n-ng"));
	else
		root["ext-bbm-product-details-view-ng"] = factory(root["ui-bb-format-amount"], root["ui-bb-i18n-ng"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_3__, __WEBPACK_EXTERNAL_MODULE_8__) {
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

	module.exports = __webpack_require__(40);

/***/ }),

/***/ 3:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/***/ }),

/***/ 8:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_8__;

/***/ }),

/***/ 40:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.dependencyKeys = exports.hooks = exports.helpers = undefined;
	
	var _uiBbI18nNg = __webpack_require__(8);
	
	var _uiBbI18nNg2 = _interopRequireDefault(_uiBbI18nNg);
	
	var _uiBbFormatAmount = __webpack_require__(3);
	
	var _uiBbFormatAmount2 = _interopRequireDefault(_uiBbFormatAmount);
	
	var _hooks = __webpack_require__(41);
	
	var extHooks = _interopRequireWildcard(_hooks);
	
	var _helpers = __webpack_require__(43);
	
	var _helpers2 = _interopRequireDefault(_helpers);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/* eslint-disable import/prefer-default-export */
	
	/**
	 * @module ext-bbm-product-details-view-ng
	 *
	 * @description
	 * Mobile extension for the product details widget - View.
	 *
	 * @requires ui-bb-i18n-ng
	 *
	 * @example
	 * <!-- product details widget model.xml -->
	 * <property name="extension" viewHint="text-input,admin">
	 *  <value type="string">ext-bbm-product-details-view-ng</value>
	 * </property>
	 */
	var helpers = exports.helpers = _helpers2.default;
	var hooks = exports.hooks = extHooks;
	
	var dependencyKeys = exports.dependencyKeys = [_uiBbI18nNg2.default, _uiBbFormatAmount2.default];

/***/ }),

/***/ 41:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.processProductDetails = undefined;
	
	var _productDetailsView = __webpack_require__(42);
	
	var _productDetailsView2 = _interopRequireDefault(_productDetailsView);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * @name Hooks
	 * @type {object}
	 *
	 * @description
	 * Hooks for widget-bb-product-details-ng
	 */
	
	/**
	 * @name processProductDetails
	 * @description
	 * Hook for processing product details after initialization.
	 *
	 * @type {function}
	 * @param productDetails {ProductDetails} ProductDetails to process
	 * @returns {ProductDetailsView}
	 */
	var processProductDetails = exports.processProductDetails = function processProductDetails(productDetails) {
	  return (0, _productDetailsView2.default)(productDetails);
	}; /* eslint-disable import/prefer-default-export */

/***/ }),

/***/ 42:
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/* eslint-disable quote-props */
	
	var maskCardNumber = function maskCardNumber(suffix) {
	  return suffix && 'XXXX-XXXX-XXXX-' + suffix;
	};
	
	var defaultViewModel = function defaultViewModel(product) {
	  return {
	    id: product.id,
	    name: product.name,
	    alias: product.alias || product.name,
	    currency: product.currency,
	    productBalances: null,
	    additionalDetails: null
	  };
	};
	
	var viewModelFactories = {
	  'Current Account': function CurrentAccount(product) {
	    return {
	      id: product.id,
	      name: product.name,
	      alias: product.alias || product.name,
	      identifier: product.IBAN || product.BBAN,
	      currency: product.currency,
	      productBalances: {
	        primary: {
	          label: 'label.bookedBalance',
	          value: product.bookedBalance
	        },
	        secondary: {
	          label: 'label.availableBalance',
	          value: product.availableBalance
	        },
	        tertiary: {
	          label: 'label.creditLimit',
	          value: product.creditLimit
	        }
	      },
	      additionalDetails: {
	        accountOpeningDate: product.accountOpeningDate,
	        externalTransferAllowed: product.externalTransferAllowed
	      }
	    };
	  },
	
	  'Savings Account': function SavingsAccount(product) {
	    return {
	      id: product.id,
	      name: product.name,
	      alias: product.alias || product.name,
	      identifier: product.IBAN || product.BBAN,
	      currency: product.currency,
	      productBalances: {
	        primary: {
	          label: 'label.bookedBalance',
	          value: product.bookedBalance
	        },
	        secondary: {
	          label: 'label.accruedInterest',
	          value: product.accruedInterest
	        }
	      },
	      additionalDetails: {
	        accountOpeningDate: product.accountOpeningDate,
	        externalTransferAllowed: product.externalTransferAllowed
	      }
	    };
	  },
	
	  'Term Deposit': function TermDeposit(product) {
	    return {
	      id: product.id,
	      name: product.name,
	      alias: product.alias || product.name,
	      currency: product.currency,
	      productBalances: {
	        primary: {
	          label: 'label.principalAmount',
	          value: product.principalAmount
	        },
	        secondary: {
	          label: 'label.accruedInterest',
	          value: product.accruedInterest
	        }
	      },
	      additionalDetails: {
	        accountOpeningDate: product.accountOpeningDate,
	        externalTransferAllowed: product.externalTransferAllowed
	      }
	    };
	  },
	
	  'Credit Card': function CreditCard(product) {
	    return {
	      id: product.id,
	      name: product.name,
	      alias: product.alias || product.name,
	      identifier: maskCardNumber(product.PANSuffix),
	      currency: product.currency,
	      productBalances: {
	        primary: {
	          label: 'label.bookedBalance',
	          value: product.bookedBalance
	        },
	        secondary: {
	          label: 'label.availableBalance',
	          value: product.availableBalance
	        },
	        tertiary: {
	          label: 'label.creditLimit',
	          value: product.creditLimit
	        }
	      },
	      additionalDetails: {
	        accountOpeningDate: product.accountOpeningDate,
	        externalTransferAllowed: product.externalTransferAllowed
	      }
	    };
	  },
	
	  'Debit Card': function DebitCard(product) {
	    return {
	      id: product.id,
	      name: product.name,
	      alias: product.alias || product.name,
	      identifier: maskCardNumber(product.PANSuffix),
	      currency: product.currency,
	      additionalDetails: {
	        accountOpeningDate: product.accountOpeningDate,
	        externalTransferAllowed: product.externalTransferAllowed
	      }
	    };
	  },
	
	  'Loan': function Loan(product) {
	    return {
	      id: product.id,
	      name: product.name,
	      alias: product.alias || product.name,
	      currency: product.currency,
	      productBalances: {
	        primary: {
	          label: 'label.bookedBalance',
	          value: product.bookedBalance
	        }
	      },
	      additionalDetails: {
	        accountOpeningDate: product.accountOpeningDate,
	        externalTransferAllowed: product.externalTransferAllowed
	      }
	    };
	  },
	
	  'Investment Account': function InvestmentAccount(product) {
	    return {
	      id: product.id,
	      name: product.name,
	      alias: product.alias || product.name,
	      currency: product.currency,
	      productBalances: {
	        primary: {
	          label: 'label.bookedBalance',
	          value: product.bookedBalance
	        }
	      },
	      additionalDetails: {
	        accountOpeningDate: product.accountOpeningDate,
	        externalTransferAllowed: product.externalTransferAllowed
	      }
	    };
	  }
	};
	
	/**
	 * @description
	 * Prepare the fields of a Product into a details object ready for display to the User
	 *
	 * @inner
	 * @type {function}
	 * @param {Object} product - The source Product from the API
	 * @returns {ProductDetailsView}
	 */
	
	exports.default = function (product) {
	  return viewModelFactories[product.productKindName](product) || defaultViewModel(product);
	};
	
	/**
	 * @typedef {object} ProductDetailsView
	 * @property {string} id - The internal Product Identifier
	 * @property {string} name - The product's name, suitable for display to users
	 * @property {string} alias - The product's alias, suitable for display to users
	 * (fallback to product name)
	 * @property {?string} identifier - The identifier of the Product from the user's perspective
	 * @property {?string} currency - ISO currency code
	 * @property {?ProductBalances} productBalances - Balances (amounts) for the given product
	 * @property {?AdditionalDetails} additionalDetails - Additional details for the given product
	 */
	
	/**
	 * @typedef {object} ProductBalances
	 * @property {?PrimaryBalance} primary - The primary balance for the given product
	 * @property {?SecondaryBalance} secondary - The secondary balance for the given product
	 * @property {?TertiaryBalance} tertiary - The tertiary balance for the given product
	 */
	
	/**
	 * @typedef {object} AdditionalDetails
	 * @property {?string} accountOpeningDate - The opening date of the product arrangement
	 * @property {?boolean} externalTransferAllowed - Flag to check if transfers to external
	 * accounts are allowed
	 */
	
	/**
	 * @typedef {object} PrimaryBalance
	 * @property {string} label - The label to show for the primary balance
	 * @property {string} value - The value (amount) of the primary balance
	 */
	
	/**
	 * @typedef {object} SecondaryBalance
	 * @property {string} label - The label to show for the secondary balance
	 * @property {string} value - The value (amount) of the secondary balance
	 */
	
	/**
	 * @typedef {object} TertiaryBalance
	 * @property {string} label - The label to show for the tertiary balance
	 * @property {string} value - The value (amount) of the tertiary balance
	 */

/***/ }),

/***/ 43:
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	/**
	 * @description
	 * Helpers for ext-bbm-product-details-view-ng
	 *
	 * @name Helpers
	 * @type {Object}
	 */
	
	exports.default = function () {
	  return {
	    /**
	     * @description
	     * Checks for the loading status.
	     *
	     * @name Helpers#isLoading
	     * @type {function}
	     *
	     * @param {module:widget-bbm-product-details-ng.ViewController} ctrl
	     * @returns {boolean}
	     */
	    isLoading: function isLoading(ctrl) {
	      return ctrl.state.loading;
	    },
	
	    /**
	     * @description
	     * Checks for the error state.
	     *
	     * @name Helpers#isErrorState
	     * @type {function}
	     *
	     * @param {module:widget-bbm-product-details-ng.ViewController} ctrl
	     * @returns {boolean}
	     */
	    isErrorState: function isErrorState(ctrl) {
	      return ctrl.state.error && !ctrl.state.loading;
	    }
	  };
	};

/***/ })

/******/ })
});
;
//# sourceMappingURL=ext-bbm-product-details-view-ng.js.map