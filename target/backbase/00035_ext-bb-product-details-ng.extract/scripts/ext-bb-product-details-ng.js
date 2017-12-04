(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vendor-bb-angular-ng-aria"), require("ui-bb-format-amount"), require("ui-bb-i18n-ng"), require("ui-bb-empty-state-ng"), require("vendor-bb-uib-popover"));
	else if(typeof define === 'function' && define.amd)
		define("ext-bb-product-details-ng", ["vendor-bb-angular-ng-aria", "ui-bb-format-amount", "ui-bb-i18n-ng", "ui-bb-empty-state-ng", "vendor-bb-uib-popover"], factory);
	else if(typeof exports === 'object')
		exports["ext-bb-product-details-ng"] = factory(require("vendor-bb-angular-ng-aria"), require("ui-bb-format-amount"), require("ui-bb-i18n-ng"), require("ui-bb-empty-state-ng"), require("vendor-bb-uib-popover"));
	else
		root["ext-bb-product-details-ng"] = factory(root["vendor-bb-angular-ng-aria"], root["ui-bb-format-amount"], root["ui-bb-i18n-ng"], root["ui-bb-empty-state-ng"], root["vendor-bb-uib-popover"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_3__, __WEBPACK_EXTERNAL_MODULE_8__, __WEBPACK_EXTERNAL_MODULE_10__, __WEBPACK_EXTERNAL_MODULE_14__) {
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

	module.exports = __webpack_require__(13);

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
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_8__;

/***/ }),
/* 9 */,
/* 10 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_10__;

/***/ }),
/* 11 */,
/* 12 */,
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.events = exports.helpers = exports.hooks = exports.dependencyKeys = undefined;
	
	var _vendorBbAngularNgAria = __webpack_require__(2);
	
	var _vendorBbAngularNgAria2 = _interopRequireDefault(_vendorBbAngularNgAria);
	
	var _vendorBbUibPopover = __webpack_require__(14);
	
	var _vendorBbUibPopover2 = _interopRequireDefault(_vendorBbUibPopover);
	
	var _uiBbI18nNg = __webpack_require__(8);
	
	var _uiBbI18nNg2 = _interopRequireDefault(_uiBbI18nNg);
	
	var _uiBbFormatAmount = __webpack_require__(3);
	
	var _uiBbFormatAmount2 = _interopRequireDefault(_uiBbFormatAmount);
	
	var _uiBbEmptyStateNg = __webpack_require__(10);
	
	var _uiBbEmptyStateNg2 = _interopRequireDefault(_uiBbEmptyStateNg);
	
	var _hooks = __webpack_require__(15);
	
	var extHooks = _interopRequireWildcard(_hooks);
	
	var _helpers = __webpack_require__(17);
	
	var _helpers2 = _interopRequireDefault(_helpers);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var dependencyKeys = exports.dependencyKeys = [_vendorBbAngularNgAria2.default, _vendorBbUibPopover2.default, _uiBbI18nNg2.default, _uiBbFormatAmount2.default, _uiBbEmptyStateNg2.default]; /**
	                                                                                                                                                                                             * @module ext-bb-product-details-ng
	                                                                                                                                                                                             * @description
	                                                                                                                                                                                             * Extension used for displaying product details
	                                                                                                                                                                                             * in a certain format per product kind
	                                                                                                                                                                                             *
	                                                                                                                                                                                             * @example
	                                                                                                                                                                                             * <!-- Product summary widget model.xml -->
	                                                                                                                                                                                             * <property name="extension" viewHint="text-input,admin">
	                                                                                                                                                                                             *  <value type="string">ext-bb-product-details-ng</value>
	                                                                                                                                                                                             * </property>
	                                                                                                                                                                                             */
	var hooks = exports.hooks = extHooks;
	
	var helpers = exports.helpers = _helpers2.default;
	
	var events = exports.events = {};

/***/ }),
/* 14 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_14__;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.processExtendedProduct = undefined;
	
	var _productKindView = __webpack_require__(16);
	
	var _productKindView2 = _interopRequireDefault(_productKindView);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * @name processExtendedProduct
	 * @description
	 * Hook for processing product kinds in an abstracted format
	 * ready to be displayed to the user.
	 *
	 * @type {function}
	 * @param product {object} product to process
	 * @returns {object}
	 */
	var processExtendedProduct = exports.processExtendedProduct = function processExtendedProduct(product) {
	  return (0, _productKindView2.default)(product);
	}; /* eslint-disable import/prefer-default-export */

/***/ }),
/* 16 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * @description
	 * Populate the activity details of the productKindView object
	 *
	 * @inner
	 * @type {function}
	 * @param {object} product
	 * @returns {ProductKindView}
	 */
	var activityDetails = function activityDetails(product) {
	  return {
	    accountOpeningDateValue: product.accountOpeningDate,
	    accountOpeningDateLabel: 'product.details.label.аccountOpeningDate',
	    lastUpdateDateValue: product.lastUpdateDate,
	    lastUpdateDateLabel: 'product.details.label.lastUpdatedDate'
	  };
	};
	
	var interestPaymentFrequencyKeyPrefix = 'product.details.label.interestPaymentFrequency';
	
	var termUnitKeyPrefix = 'product.details.label.termUnit';
	
	/**
	 * @description
	 * Representation of interest payments enum values.
	 * Possible values are:
	 * D - day
	 * W - week
	 * M - month
	 * Y - year
	 * @return {string} Translation key label
	 */
	var interestPayments = {
	  D: interestPaymentFrequencyKeyPrefix + '.daily',
	  W: interestPaymentFrequencyKeyPrefix + '.weekly',
	  M: interestPaymentFrequencyKeyPrefix + '.monthly',
	  Y: interestPaymentFrequencyKeyPrefix + '.yearly'
	};
	
	/**
	 * @description
	 * Representation of term unit enum values.
	 * Possible values are:
	 * D - day
	 * W - week
	 * M - month
	 * Y - year
	 * @return {string} Translation key label
	 */
	var termUnits = {
	  D: termUnitKeyPrefix + '.daily',
	  W: termUnitKeyPrefix + '.weekly',
	  M: termUnitKeyPrefix + '.monthly',
	  Y: termUnitKeyPrefix + '.yearly'
	};
	
	/**
	 * @description
	 * Get the translation key for an interest payment frequency
	 * @name getInterestPaymentFrequency
	 * @type {function}
	 * @param {object} product
	 * @return {string} Translation key label
	 */
	var getInterestPaymentFrequency = function getInterestPaymentFrequency(product) {
	  return interestPayments[product.interestPaymentFrequencyUnit];
	};
	
	/**
	 * @description
	 * Get the translation key for a term unit frequency
	 * @name getTermUnitFrequency
	 * @type {function}
	 * @param {object} product
	 * @return {string} Translation key label
	 */
	var getTermUnitFrequency = function getTermUnitFrequency(product) {
	  return termUnits[product.termUnit];
	};
	
	/**
	 * @description
	 * Get the translation key auto renewal indicator
	 * @name getAutoRenewalIndicator
	 * @type {function}
	 * @param {object} product
	 * @return {string} Translation key label
	 */
	var getAutoRenewalIndicator = function getAutoRenewalIndicator(product) {
	  if (product.autoRenewalIndicator) {
	    return 'product.details.label.autoRenewalIndicatorTrue';
	  }
	  return 'product.details.label.autoRenewalIndicatorFalse';
	};
	
	/**
	 * @description
	 * Prepare the fields of a Product into an abstracted form
	 * ready to be displayed to the user
	 *
	 * @inner
	 * @type {function}
	 * @param {object} product
	 * @returns {ProductKindView}
	 */
	var viewModelFactories = {
	  'Current Account': function CurrentAccount(product) {
	    return {
	      id: product.id,
	      currency: product.currency,
	      generalDetails: {
	        name: product.name,
	        valueOne: product.productTypeName,
	        valueOneLabel: 'product.details.label.accountType',
	        valueTwo: product.IBAN,
	        valueTwoLabel: 'product.details.label.IBAN',
	        valueTwoType: 'text',
	        valueThree: product.availableBalance,
	        valueThreeLabel: 'product.details.label.availableBalance',
	        valueThreeType: 'amount'
	      },
	      interestDetails: {
	        headerLabel: 'product.details.label.interestDetails',
	        valueOne: product.accountInterestRate,
	        valueOneLabel: 'product.details.label.interestRate',
	        valueOneType: 'percentage',
	        valueTwo: product.accruedInterest,
	        valueTwoLabel: 'product.details.label.accruedInterest',
	        valueTwoType: 'amount'
	      },
	      maturityDetails: {
	        headerLabel: 'product.details.label.overdraftDetails',
	        valueOne: product.accountInterestRate,
	        valueOneLabel: 'product.details.label.overdraftLimit',
	        valueOneType: 'amount',
	        valueTwo: product.creditLimitExpiryDate,
	        valueTwoLabel: 'product.details.label.overdraftExpiryDate',
	        valueTwoType: 'date'
	      },
	      associatedCards: {
	        headerLabel: 'product.details.label.associatedDebitCards',
	        sectionType: 'debitCards',
	        debitCards: product.debitCards,
	        debitCardLabel: 'product.details.label.debitCard',
	        debitCardExpiryDateLabel: 'product.details.label.expiryDate'
	      },
	      activityDetails: activityDetails(product)
	    };
	  },
	  'Term Deposit': function TermDeposit(product) {
	    return {
	      id: product.id,
	      currency: product.currency,
	      generalDetails: {
	        name: product.name,
	        valueOne: product.productTypeName,
	        valueOneLabel: 'product.details.label.accountType',
	        valueTwo: product.BBAN,
	        valueTwoLabel: 'product.details.label.accountNumber',
	        valueTwoType: 'text',
	        valueThree: product.IBAN,
	        valueThreeLabel: 'product.details.label.IBAN',
	        valueThreeType: 'text',
	        valueFour: product.principalAmount,
	        valueFourLabel: 'product.details.label.principalAmount',
	        valueFourType: 'amount'
	      },
	      interestDetails: {
	        headerLabel: 'product.details.label.interestDetails',
	        valueOne: product.accountInterestRate,
	        valueOneLabel: 'product.details.label.interestRate',
	        valueOneType: 'percentage',
	        valueTwo: product.accruedInterest,
	        valueTwoLabel: 'product.details.label.accruedInterest',
	        valueTwoType: 'amount',
	        valueThree: product.interestPaymentFrequencyNumber,
	        valueThreeLabel: 'product.details.label.interestPaymentFrequency',
	        valueThreeLabelValue: getInterestPaymentFrequency(product),
	        valueThreeType: 'label',
	        valueFourLabel: 'product.details.label.autoRenewalIndicator',
	        valueFourLabelValue: getAutoRenewalIndicator(product),
	        valueFourType: 'label'
	      },
	      maturityDetails: {
	        headerLabel: 'product.details.label.maturityDetails',
	        valueOne: product.maturityAmount,
	        valueOneLabel: 'product.details.label.maturityBalance',
	        valueOneType: 'amount',
	        valueTwo: product.termNumber,
	        valueTwoLabel: 'product.details.label.term',
	        valueTwoLabelValue: getTermUnitFrequency(product),
	        valueTwoType: 'label',
	        valueThree: product.startDate,
	        valueThreeLabel: 'product.details.label.startDate',
	        valueThreeType: 'date',
	        valueFour: product.maturityDate,
	        valueFourLabel: 'product.details.label.maturityDate',
	        valueFourType: 'date'
	      },
	      associatedCards: {
	        headerLabel: 'product.details.label.interestAndMaturitySettlementAccount',
	        sectionType: 'account',
	        accountLabel: 'product.details.label.myCurrentAccount',
	        account: product.interestSettlementAccount
	      },
	      activityDetails: activityDetails(product)
	    };
	  },
	  Loan: function Loan(product) {
	    return {
	      id: product.id,
	      currency: product.currency,
	      generalDetails: {
	        name: product.name,
	        valueOne: product.productTypeName,
	        valueOneLabel: 'product.details.label.accountType',
	        valueTwo: product.BBAN,
	        valueTwoLabel: 'product.details.label.accountNumber',
	        valueTwoType: 'text',
	        valueThree: product.bookedBalance,
	        valueThreeLabel: 'product.details.label.outstandingAmount',
	        valueThreeType: 'amount',
	        valueFour: product.amountInArrear,
	        valueFourLabel: 'product.details.label.amountInArrear',
	        valueFourType: 'amount'
	      },
	      interestDetails: {
	        valueOne: product.monthlyInstalmentAmount,
	        valueOneLabel: 'product.details.label.monthlyInstalmentAmount',
	        valueOneType: 'amount',
	        valueTwo: product.principalAmount,
	        valueTwoLabel: 'product.details.label.principalAmount',
	        valueTwoType: 'amount',
	        valueThree: product.accountInterestRate,
	        valueThreeLabel: 'product.details.label.interestRate',
	        valueThreeType: 'percentage',
	        valueFour: product.termNumber,
	        valueFourLabel: 'product.details.label.term',
	        valueFourLabelValue: getTermUnitFrequency(product),
	        valueFourType: 'label'
	      },
	      associatedCards: {
	        headerLabel: 'product.details.label.interestAndRedemptionSettlementAccount',
	        sectionType: 'account',
	        accountLabel: 'product.details.label.myCurrentAccount',
	        account: product.interestSettlementAccount
	      },
	      activityDetails: activityDetails(product)
	    };
	  },
	  'Savings Account': function SavingsAccount(product) {
	    return {
	      id: product.id,
	      currency: product.currency,
	      generalDetails: {
	        name: product.name,
	        valueOne: product.productTypeName,
	        valueOneLabel: 'product.details.label.accountType',
	        valueTwo: product.BBAN,
	        valueTwoLabel: 'product.details.label.accountNumber',
	        valueTwoType: 'text',
	        valueThree: product.bookedBalance,
	        valueThreeLabel: 'product.details.label.accountBalance',
	        valueThreeType: 'amount'
	      },
	      interestDetails: {
	        valueOne: product.accountInterestRate,
	        valueOneLabel: 'product.details.label.interestRate',
	        valueOneType: 'percentage',
	        valueTwo: product.accruedInterest,
	        valueTwoLabel: 'product.details.label.accruedInterest',
	        valueTwoType: 'amount',
	        valueThree: product.minimumRequiredBalance,
	        valueThreeLabel: 'product.details.label.minimumRequiredBalance',
	        valueThreeType: 'amount'
	      },
	      activityDetails: activityDetails(product)
	    };
	  },
	  'Credit Card': function CreditCard(product) {
	    return {
	      id: product.id,
	      currency: product.currency,
	      generalDetails: {
	        name: product.name,
	        valueOne: product.productTypeName,
	        valueOneLabel: 'product.details.label.accountType',
	        valueTwo: product.number,
	        valueTwoLabel: 'product.details.label.accountNumber',
	        valueTwoType: 'card'
	      },
	      interestDetails: {
	        valueOne: product.bookedBalance,
	        valueOneLabel: 'product.details.label.consumedAmount',
	        valueOneType: 'amount',
	        valueTwo: product.availableBalance,
	        valueTwoLabel: 'product.details.label.remainingAmount',
	        valueTwoType: 'amount',
	        valueThree: product.creditLimit,
	        valueThreeLabel: 'product.details.label.creditLimit',
	        valueThreeType: 'amount'
	      },
	      maturityDetails: {
	        valueOne: product.minimumPayment,
	        valueOneLabel: 'product.details.label.minimumPayment',
	        valueOneType: 'amount',
	        valueTwo: product.minimumPaymentDueDate,
	        valueTwoLabel: 'product.details.label.minimumPaymentDueDate',
	        valueTwoType: 'date',
	        valueThree: product.validThru,
	        valueThreeLabel: 'product.details.label.validThru',
	        valueThreeType: 'date',
	        valueFour: product.applicableInterestRate,
	        valueFourLabel: 'product.details.label.interestRate',
	        valueFourType: 'percentage'
	      },
	      activityDetails: activityDetails(product)
	    };
	  },
	  'Investment Account': function InvestmentAccount(product) {
	    return {
	      id: product.id,
	      currency: product.currency,
	      generalDetails: {
	        name: product.name,
	        valueOne: product.productTypeName,
	        valueOneLabel: 'product.details.label.accountType',
	        valueTwo: product.BBAN,
	        valueTwoLabel: 'product.details.label.accountNumber',
	        valueTwoType: 'text',
	        valueThree: product.totalInvestmentValue,
	        valueThreeLabel: 'product.details.label.totalInvestmentAmount',
	        valueThreeType: 'amount'
	      },
	      activityDetails: activityDetails(product)
	    };
	  },
	  'Debit Card': function DebitCard(product) {
	    return {
	      id: product.id,
	      currency: product.currency,
	      generalDetails: {
	        name: product.name,
	        valueOne: product.productTypeName,
	        valueOneLabel: 'product.details.label.accountType',
	        valueTwo: product.BBAN,
	        valueTwoLabel: 'product.details.label.accountNumber',
	        valueTwoType: 'text'
	      },
	      activityDetails: activityDetails(product)
	    };
	  }
	};
	
	exports.default = function (product) {
	  return viewModelFactories[product.productKindName](product);
	};
	
	/**
	 * @typedef {Object} ProductKindView
	 * @property {string} id - Internal Product identifier
	 * @property {string} currency - ISO currency code
	 * @property {object} generalDetails - section for general details of the product
	 * @property {string} name - Product name value to be displayed
	 * @property {?any} valueOne - First value to be displayed for this section
	 * @property {string} valueOneLabel - Label to describe the first value
	 * @property {?any} valueTwo - Second value to be displayed
	 * @property {string} valueTwoLabel - Label to describe the second value
	 * @property {?any} valueTwoType - Type of the second value
	 * @property {?any} valueThree - Third value to be displayed
	 * @property {?string} valueThreeLabel - Label to describe the third value
	 * @property {?any} valueThreeType - Type of the third value
	 * @property {?any} valueFour - Fourth value to be displayed
	 * @property {?string} valueFourLabel - Label to describe the fourth value
	 * @property {?any} valueFourType - Type of the fourth value
	 * @property {object} interestDetails - section for interest details of the product
	 * @property {string} headerLabel - Label to describe the section
	 * @property {?any} valueOne - First value to be displayed for this section
	 * @property {string} valueOneLabel - Label to describe the first value
	 * @property {?any} valueTwo - Second value to be displayed
	 * @property {string} valueTwoLabel - Label to describe the second value
	 * @property {?any} valueTwoType - Type of the second value
	 * @property {?any} valueThree - Third value to be displayed
	 * @property {?string} valueThreeLabel - Label to describe the third value
	 * @property {?any} valueThreeType - Type of the third value
	 * @property {?any} valueFour - Fourth value to be displayed
	 * @property {?string} valueFourLabel - Label to describe the fourth value
	 * @property {?any} valueFourType - Type of the fourth value
	 * @property {object} maturityDetails - section for maturity details of the product
	 * @property {string} headerLabel - Label to describe the section
	 * @property {?any} valueOne - First value to be displayed for this section
	 * @property {string} valueOneLabel - Label to describe the first value
	 * @property {?any} valueTwo - Second value to be displayed
	 * @property {string} valueTwoLabel - Label to describe the second value
	 * @property {?any} valueTwoType - Type of the second value
	 * @property {?any} valueThree - Third value to be displayed
	 * @property {?string} valueThreeLabel - Label to describe the third value
	 * @property {?any} valueThreeType - Type of the third value
	 * @property {?any} valueFour - Fourth value to be displayed
	 * @property {?string} valueFourLabel - Label to describe the fourth value
	 * @property {?any} valueFourType - Type of the fourth value
	 * @property {object} associatedCards - section for listing associated cards of the product
	 * @property {string} headerLabel - Label to describe the section
	 * @property {?any} sectionType - Type of the section
	 * @property {object} debitCards - List of debit cards associated to the product
	 * @property {string} debitCardLabel - Label to describe the debit card
	 * @property {string} debitCardExpiryDateLabel - Expiry date of the debit card
	 * @property {string} accountLabel - Label to describe the account associated to the product
	 * @property {string} account - Associated account to the product
	 * @property {object} activityDetails - section for listing activity details of the product
	 * @property {date} accountOpeningDateValue - Date when the account was created
	 * @property {string} accountOpeningDateLabel - Label to describe the account opening date
	 * @property {date} lastUpdateDateValue - Date when the account was last updated
	 * @property {string} lastUpdateDateLabel - Label to describe the last update date
	*/

/***/ }),
/* 17 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
			value: true
	});
	var helpers = function helpers() {
			var cardPrefixMask = '\u25CF\u25CF\u25CF\u25CF \u25CF\u25CF\u25CF\u25CF \u25CF\u25CF\u25CF\u25CF ';
	
			return {
					/**
	    * @description
	    * Sets a prefix for a number property which contains last
	    * 4 characters for a card number
	    *
	    * @name maskCardNumber
	    * @type {function}
	    * @param {string} number
	    * @returns {string} prefix + number
	    */
					maskCardNumber: function maskCardNumber(number) {
							return cardPrefixMask + number;
					}
			};
	};
	
	exports.default = helpers;

/***/ })
/******/ ])
});
;
//# sourceMappingURL=ext-bb-product-details-ng.js.map