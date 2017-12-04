(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("ui-bb-format-amount"), require("vendor-bb-angular"));
	else if(typeof define === 'function' && define.amd)
		define("ui-bbm-product-summary-ng", ["ui-bb-format-amount", "vendor-bb-angular"], factory);
	else if(typeof exports === 'object')
		exports["ui-bbm-product-summary-ng"] = factory(require("ui-bb-format-amount"), require("vendor-bb-angular"));
	else
		root["ui-bbm-product-summary-ng"] = factory(root["ui-bb-format-amount"], root["vendor-bb-angular"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_3__, __WEBPACK_EXTERNAL_MODULE_79__) {
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

	module.exports = __webpack_require__(104);

/***/ }),

/***/ 3:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/***/ }),

/***/ 79:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_79__;

/***/ }),

/***/ 104:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _vendorBbAngular = __webpack_require__(79);
	
	var _vendorBbAngular2 = _interopRequireDefault(_vendorBbAngular);
	
	var _uiBbFormatAmount = __webpack_require__(3);
	
	var _uiBbFormatAmount2 = _interopRequireDefault(_uiBbFormatAmount);
	
	var _component = __webpack_require__(105);
	
	var _component2 = _interopRequireDefault(_component);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * @description The angular module name
	 * @name default
	 * @type {string}
	 */
	exports.default = _vendorBbAngular2.default.module('ui-bbm-product-summary-ng', [_uiBbFormatAmount2.default]).component('uiBbmProductSummaryNg', _component2.default).name; /**
	                                                                                                                                                                             * @module ui-bbm-product-summary-ng
	                                                                                                                                                                             *
	                                                                                                                                                                             * @example
	                                                                                                                                                                             * // In an extension:
	                                                                                                                                                                             * // file: scripts/index.js
	                                                                                                                                                                             * import uiBbmProductSummaryNgKey from 'ui-bbm-product-summary-ng';
	                                                                                                                                                                             *
	                                                                                                                                                                             * export const dependencyKeys = [
	                                                                                                                                                                             *   uiBbmProductSummaryNgKey,
	                                                                                                                                                                             * ];
	                                                                                                                                                                             *
	                                                                                                                                                                             * // file: templates/template.ng.html
	                                                                                                                                                                             * <ui-bbm-product-summary-ng
	                                                                                                                                                                             *   product-name="product.name"
	                                                                                                                                                                             *   product-identifier="$ctrl.getIdentifier(product)"
	                                                                                                                                                                             *   currency="product.currency"
	                                                                                                                                                                             *   primary-value="$ctrl.getPrimaryValue(product)"
	                                                                                                                                                                             *   available-balance="product.availableBalance"
	                                                                                                                                                                             *   accrued-interest="product.accruedInterest"
	                                                                                                                                                                             *   credit-limit="product.creditLimit"
	                                                                                                                                                                             *   messages="{
	                                                                                                                                                                             *     available: ('ui-bbm-product-summary.available' | i18n),
	                                                                                                                                                                             *     creditLimit: ('ui-bbm-product-summary.creditLimit' | i18n),
	                                                                                                                                                                             *     accrued: ('ui-bbm-product-summary.accrued' | i18n),
	                                                                                                                                                                             *   }">
	                                                                                                                                                                             * </ui-bbm-product-summary-ng>
	                                                                                                                                                                             */

/***/ }),

/***/ 105:
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * @name uiBbmProductSummaryComponent
	 * @type {object}
	 * @description
	 * Product summary component descriptor.
	 *
	 * @property {string} productName - The product's name, suitable for display to users
	 * @property {string} productIdentifier - The identifier of the product from the user's perspective
	 * @property {string} currency - Currency code
	 * @property {string} primaryValue - The most important associated value to be displayed
	 * @property {string} availableBalance - Available balance of the product
	 * @property {string} accruedInterest - Accrued interest of the product
	 * @property {string} creditLimit - Credit limit of the product
	 * @property {object} messages - Messages
	 */
	exports.default = {
	  bindings: {
	    productName: '<',
	    productIdentifier: '<',
	    currency: '<',
	    primaryValue: '<',
	    availableBalance: '<',
	    accruedInterest: '<',
	    creditLimit: '<',
	    messages: '<'
	  },
	  template: '\n    <div>\n      <div class="pull-left">\n        <h4 data-role="product-name" ng-bind=\'$ctrl.productName\'></h4>\n        <p data-role="product-id" ng-bind=\'$ctrl.productIdentifier\'></p>\n      </div>\n      <div class="pull-right">\n        <h3 ng-if="$ctrl.primaryValue">\n          <ui-bb-format-amount amount="$ctrl.primaryValue" currency="$ctrl.currency" wrap-decimals>\n          </ui-bb-format-amount>\n        </h3>\n        <p ng-if="$ctrl.availableBalance">\n          <span ng-bind="$ctrl.messages.available"></span>\n          <span>\n            <ui-bb-format-amount amount="$ctrl.availableBalance" currency="$ctrl.currency">\n            </ui-bb-format-amount>\n          </span>\n        </p>\n        <p ng-if="$ctrl.accruedInterest">\n          <span ng-bind="$ctrl.messages.accrued"></span>\n          <span>\n            <ui-bb-format-amount amount="$ctrl.accruedInterest" currency="$ctrl.currency">\n            </ui-bb-format-amount>\n          </span>\n        </p>\n        <p ng-if="$ctrl.creditLimit">\n          <span ng-bind="$ctrl.messages.creditLimit"></span>\n          <span>\n            <ui-bb-format-amount amount="$ctrl.creditLimit" currency="$ctrl.currency">\n            </ui-bb-format-amount>\n          </span>\n        </p>\n      </div>\n    </div>\n  '
	};

/***/ })

/******/ })
});
;
//# sourceMappingURL=ui-bbm-product-summary-ng.js.map