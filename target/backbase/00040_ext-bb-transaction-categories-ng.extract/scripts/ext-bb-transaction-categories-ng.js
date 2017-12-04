(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vendor-bb-angular-ng-aria"), require("ui-bb-loading-indicator-ng"), require("ui-bb-modal-ng"), require("ui-bb-format-amount"), require("ui-bb-i18n-ng"));
	else if(typeof define === 'function' && define.amd)
		define("ext-bb-transaction-categories-ng", ["vendor-bb-angular-ng-aria", "ui-bb-loading-indicator-ng", "ui-bb-modal-ng", "ui-bb-format-amount", "ui-bb-i18n-ng"], factory);
	else if(typeof exports === 'object')
		exports["ext-bb-transaction-categories-ng"] = factory(require("vendor-bb-angular-ng-aria"), require("ui-bb-loading-indicator-ng"), require("ui-bb-modal-ng"), require("ui-bb-format-amount"), require("ui-bb-i18n-ng"));
	else
		root["ext-bb-transaction-categories-ng"] = factory(root["vendor-bb-angular-ng-aria"], root["ui-bb-loading-indicator-ng"], root["ui-bb-modal-ng"], root["ui-bb-format-amount"], root["ui-bb-i18n-ng"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_3__, __WEBPACK_EXTERNAL_MODULE_4__, __WEBPACK_EXTERNAL_MODULE_5__, __WEBPACK_EXTERNAL_MODULE_6__) {
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
	
	var _uiBbLoadingIndicatorNg = __webpack_require__(3);
	
	var _uiBbLoadingIndicatorNg2 = _interopRequireDefault(_uiBbLoadingIndicatorNg);
	
	var _uiBbModalNg = __webpack_require__(4);
	
	var _uiBbModalNg2 = _interopRequireDefault(_uiBbModalNg);
	
	var _uiBbFormatAmount = __webpack_require__(5);
	
	var _uiBbFormatAmount2 = _interopRequireDefault(_uiBbFormatAmount);
	
	var _uiBbI18nNg = __webpack_require__(6);
	
	var _uiBbI18nNg2 = _interopRequireDefault(_uiBbI18nNg);
	
	var _helpers = __webpack_require__(7);
	
	var _helpers2 = _interopRequireDefault(_helpers);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * @module ext-bb-transaction-categories-ng
	 *
	 * @description
	 * Default extension for widget-bb-transaction-categories-ng
	 *
	 * @requires vendor-bb-angular-ng-aria
	 */
	var dependencyKeys = exports.dependencyKeys = [_vendorBbAngularNgAria2.default, _uiBbLoadingIndicatorNg2.default, _uiBbModalNg2.default, _uiBbFormatAmount2.default, _uiBbI18nNg2.default];
	
	var hooks = exports.hooks = {};
	
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
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _debitCreditSign = __webpack_require__(8);
	
	var _constants = __webpack_require__(9);
	
	var _constants2 = _interopRequireDefault(_constants);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * @description
	 * Contains default modal config (if any) used to init the modal window
	 *
	 * @name modal
	 * @type {object}
	 */
	var modal = {};
	
	var $ctrl = void 0;
	
	/**
	 * @name getCategoryIconClass
	 * @description
	 * Converts transaction category name into category CSS icon class
	 *
	 * @type {function}
	 * @param {string} transactionCategory Transaction category
	 * @returns {string}
	 */
	var getCategoryIconClass = function getCategoryIconClass(transactionCategory) {
	  return '' + _constants2.default + (transactionCategory.toLowerCase().replace(/\W/g, '-').replace(/-{2,}/g, '-') || _constants.UNCATEGORIZED_ICON_CLASS);
	};
	
	/**
	 * @name getSignedAmount
	 *
	 * @description
	 * Based on credit/debit indicator, put right sign on the transaction amount
	 *
	 * @type {function}
	 * @param {object} transaction Transaction object
	 * @returns {number} Signed amount
	 */
	var getSignedAmount = function getSignedAmount(transaction) {
	  var amount = void 0;
	  if (transaction) {
	    amount = transaction.amount * (transaction.creditDebitIndicator === _debitCreditSign.negativeSignKey ? -1 : 1);
	  }
	
	  return amount;
	};
	
	/**
	 * @name getModalData
	 *
	 * @description
	 * Get modal widget data
	 *
	 * @type {function}
	 * @returns {object}
	 */
	var getModalData = function getModalData() {
	  return modal;
	};
	
	/**
	 * @name initModal
	 *
	 * @description
	 * Get modal widget data
	 *
	 * @param {object} ctrl
	 * @type {function}
	 * @returns {void}
	 */
	var initModal = function initModal(ctrl) {
	  $ctrl = ctrl;
	  $ctrl.isModalOpen = true;
	  Object.assign(modal, {
	    items: $ctrl.items,
	    transaction: $ctrl.selectedTransaction,
	    newCategory: $ctrl.selectedTransaction.category
	  });
	};
	
	/**
	 * @name cancel
	 *
	 * @description
	 * Cancel / close the modal window
	 *
	 * @type {function}
	 * @returns {void}
	 */
	var cancel = function cancel() {
	  $ctrl.isModalOpen = false;
	};
	
	/**
	 * @name submit
	 *
	 * @description
	 * Submit a category object to update transactions' category
	 *
	 * @type {function}
	 * @returns {void}
	 */
	var submit = function submit() {
	  var data = {
	    transactionId: modal.transaction.id,
	    categoryName: modal.newCategory
	  };
	
	  $ctrl.intentResolve(data);
	  cancel();
	};
	
	/**
	 * @name onClose
	 *
	 * @description
	 * Handler to call cancel()
	 *
	 * @type {function}
	 * @returns {void}
	 */
	var onClose = function onClose() {
	  return cancel();
	};
	
	exports.default = function () {
	  return {
	    getCategoryIconClass: getCategoryIconClass,
	    initModal: initModal,
	    onClose: onClose,
	    submit: submit,
	    cancel: cancel,
	    getModalData: getModalData,
	    getSignedAmount: getSignedAmount
	  };
	};

/***/ }),
/* 8 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * @description
	 * Credit transaction type
	 *
	 * @name positiveSignKey
	 * @type {string}
	 */
	var positiveSignKey = exports.positiveSignKey = 'CRDT';
	
	/**
	 * @description
	 * Debit transaction type
	 *
	 * @name positiveSignKey
	 * @type {string}
	 */
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
/* 9 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * @description
	 * Category icon CSS class prefix
	 *
	 * @name CATEGORY_CLASS_PREFIX
	 * @type {string}
	 */
	var CATEGORY_CLASS_PREFIX = 'bb-transaction-category-';
	
	exports.default = CATEGORY_CLASS_PREFIX;
	
	/**
	 * @description
	 * Uncategorized CSS icon class
	 *
	 * @name UNCATEGORIZED_ICON_CLASS
	 * @type {string}
	 */
	
	var UNCATEGORIZED_ICON_CLASS = exports.UNCATEGORIZED_ICON_CLASS = 'uncategorized';

/***/ })
/******/ ])
});
;
//# sourceMappingURL=ext-bb-transaction-categories-ng.js.map