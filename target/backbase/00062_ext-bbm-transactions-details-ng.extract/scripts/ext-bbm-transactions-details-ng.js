(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("ui-bb-format-amount"), require("ui-bb-i18n-ng"));
	else if(typeof define === 'function' && define.amd)
		define("ext-bbm-transactions-details-ng", ["ui-bb-format-amount", "ui-bb-i18n-ng"], factory);
	else if(typeof exports === 'object')
		exports["ext-bbm-transactions-details-ng"] = factory(require("ui-bb-format-amount"), require("ui-bb-i18n-ng"));
	else
		root["ext-bbm-transactions-details-ng"] = factory(root["ui-bb-format-amount"], root["ui-bb-i18n-ng"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_6__, __WEBPACK_EXTERNAL_MODULE_8__) {
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

	module.exports = __webpack_require__(36);

/***/ }),

/***/ 6:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_6__;

/***/ }),

/***/ 8:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_8__;

/***/ }),

/***/ 36:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.hooks = exports.dependencyKeys = exports.helpers = undefined;
	
	var _uiBbFormatAmount = __webpack_require__(6);
	
	var _uiBbFormatAmount2 = _interopRequireDefault(_uiBbFormatAmount);
	
	var _uiBbI18nNg = __webpack_require__(8);
	
	var _uiBbI18nNg2 = _interopRequireDefault(_uiBbI18nNg);
	
	var _helpers = __webpack_require__(37);
	
	var _helpers2 = _interopRequireDefault(_helpers);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var helpers = exports.helpers = _helpers2.default; /**
	                                                    * @module ext-bbm-transactions-details-ng
	                                                    *
	                                                    * @description
	                                                    * Mobile extension for transactions details widget.
	                                                    *
	                                                    * @example
	                                                    * <!-- transactions widget model.xml -->
	                                                    * <property name="extension" viewHint="text-input,admin">
	                                                    *  <value type="string">ext-bbm-transactions-details-ng</value>
	                                                    * </property>
	                                                    */
	var dependencyKeys = exports.dependencyKeys = [_uiBbFormatAmount2.default, _uiBbI18nNg2.default];
	
	var hooks = exports.hooks = {};

/***/ }),

/***/ 37:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _debitCreditSign = __webpack_require__(38);
	
	exports.default = function () {
	  return {
	    /**
	     * @description
	     * Based on credit/debit indicator, put right sign on the transaction amount
	     *
	     * @name getSignedAmount
	     * @type {function}
	     * @param {object} transaction Transaction object
	     * @returns {number} Signed amount
	     */
	    getSignedAmount: function getSignedAmount(transaction) {
	      return transaction.amount * (transaction.creditDebitIndicator === _debitCreditSign.negativeSignKey ? -1 : 1);
	    }
	  };
	};

/***/ }),

/***/ 38:
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

/***/ })

/******/ })
});
;
//# sourceMappingURL=ext-bbm-transactions-details-ng.js.map