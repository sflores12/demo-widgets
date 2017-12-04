(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vendor-bb-angular"), require("ui-bbm-product-summary-ng"));
	else if(typeof define === 'function' && define.amd)
		define("ui-bbm-product-kind-table-view-ng", ["vendor-bb-angular", "ui-bbm-product-summary-ng"], factory);
	else if(typeof exports === 'object')
		exports["ui-bbm-product-kind-table-view-ng"] = factory(require("vendor-bb-angular"), require("ui-bbm-product-summary-ng"));
	else
		root["ui-bbm-product-kind-table-view-ng"] = factory(root["vendor-bb-angular"], root["ui-bbm-product-summary-ng"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_79__, __WEBPACK_EXTERNAL_MODULE_100__) {
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

	module.exports = __webpack_require__(99);

/***/ }),

/***/ 79:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_79__;

/***/ }),

/***/ 99:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _vendorBbAngular = __webpack_require__(79);
	
	var _vendorBbAngular2 = _interopRequireDefault(_vendorBbAngular);
	
	var _uiBbmProductSummaryNg = __webpack_require__(100);
	
	var _uiBbmProductSummaryNg2 = _interopRequireDefault(_uiBbmProductSummaryNg);
	
	var _component = __webpack_require__(101);
	
	var _component2 = _interopRequireDefault(_component);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * @description The angular module name
	 * @name default
	 * @type {string}
	 */
	exports.default = _vendorBbAngular2.default.module('ui-bbm-product-kind-table-view-ng', [_uiBbmProductSummaryNg2.default]).component('uiBbmProductKindTableViewNg', _component2.default).name; /**
	                                                                                                                                                                                                * @module ui-bbm-product-kind-table-ng
	                                                                                                                                                                                                *
	                                                                                                                                                                                                * @example
	                                                                                                                                                                                                * // In an extension:
	                                                                                                                                                                                                * // file: scripts/index.js
	                                                                                                                                                                                                * import uiBbmProductKindTableViewKey from 'ui-bbm-product-kind-table-view-ng';
	                                                                                                                                                                                                *
	                                                                                                                                                                                                * export const dependencyKeys = [
	                                                                                                                                                                                                *   uiBbmProductKindTableViewKey,
	                                                                                                                                                                                                * ];
	                                                                                                                                                                                                *
	                                                                                                                                                                                                * // file: templates/template.ng.html
	                                                                                                                                                                                                * <ui-bbm-product-kind-table-view-ng
	                                                                                                                                                                                                *   product-kind="productKind"
	                                                                                                                                                                                                *   on-select="$ctrl.selectProduct(product)"
	                                                                                                                                                                                                *   data-role="product-kind"
	                                                                                                                                                                                                *   data-index="{{$index}}"
	                                                                                                                                                                                                *   messages="{
	                                                                                                                                                                                                *    available: ('ui-bbm-product-summary.available' | i18n),
	                                                                                                                                                                                                *    creditLimit: ('ui-bbm-product-summary.creditLimit' | i18n),
	                                                                                                                                                                                                *    accrued: ('ui-bbm-product-summary.accrued' | i18n),
	                                                                                                                                                                                                *   }">
	                                                                                                                                                                                                *   </ui-bbm-product-kind-table-view-ng>
	                                                                                                                                                                                                */

/***/ }),

/***/ 100:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_100__;

/***/ }),

/***/ 101:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _controller = __webpack_require__(102);
	
	var _controller2 = _interopRequireDefault(_controller);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  bindings: {
	    productKind: '<',
	    select: '&onSelect',
	    messages: '<'
	  },
	  template: '\n      <div class="table-view" aria-label="{{$ctrl.productKind.name}}">\n        <div class="table-view-cell table-view-divider">\n          <h4 \n            data-role="product-kind-name" \n            data-product-kind-name="{{$ctrl.productKind.name}}" \n            ng-bind="$ctrl.productKind.name"></h4>\n        </div>\n        <div\n          class="table-view-cell"\n          ng-click="$ctrl.select({product})"\n          ng-repeat="product in $ctrl.productKind.products track by product.id">\n          <ui-bbm-product-summary-ng\n            product-name="product.name"\n            product-identifier="$ctrl.getIdentifier(product)"\n            currency="product.currency"\n            primary-value="$ctrl.getPrimaryValue(product)"\n            available-balance="product.availableBalance"\n            accrued-interest="product.accruedInterest"\n            credit-limit="product.creditLimit"\n            messages="$ctrl.messages"\n            data-role="product"\n            data-index="{{$index}}">\n          </ui-bbm-product-summary-ng>\n        </div>\n      </div>\n  ',
	  controller: _controller2.default
	}; /**
	    * @name uiBbmProductKindTableViewComponent
	    * @type {object}
	    * @description
	    * Product kind table view component object
	    *
	    * @property {object} product-kind - product kind with a group of products
	    * @property {function} select - function to select a product
	    * @property {object} messages - messages per product kind
	    */

/***/ }),

/***/ 102:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _constants = __webpack_require__(103);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	/**
	 * @name UiProductKindTableViewController
	 * @type {object}
	 * @description
	 * Product kind table view controller.
	 * @inner
	 */
	var UiProductKindTableViewController = function () {
	  function UiProductKindTableViewController() {
	    _classCallCheck(this, UiProductKindTableViewController);
	  }
	
	  _createClass(UiProductKindTableViewController, [{
	    key: 'getIdentifier',
	
	    /**
	     * @name UiProductKindTableViewController#getIdentifier
	     * @description Gets the identifier for the product
	     * @type {function}
	     * @inner
	     */
	    value: function getIdentifier(product) {
	      switch (this.productKind.id) {
	        case _constants.ProductKind.CURRENT_ACCOUNT:
	          return product.IBAN;
	        case _constants.ProductKind.SAVING_ACCOUNT:
	        case _constants.ProductKind.TERM_DEPOSIT:
	        case _constants.ProductKind.LOAN:
	        case _constants.ProductKind.INVESTMENT_ACCOUNT:
	          return product.BBAN;
	        case _constants.ProductKind.CREDIT_CARD:
	        case _constants.ProductKind.DEBIT_CARD:
	          return product.number ? '' + _constants.CARD_MASK + product.number : '';
	        default:
	          return '';
	      }
	    }
	
	    /**
	     * @name UiProductKindTableViewController#getPrimaryValue
	     * @description Gets the primary value for the product
	     * @type {function}
	     * @inner
	     */
	
	  }, {
	    key: 'getPrimaryValue',
	    value: function getPrimaryValue(product) {
	      return product.bookedBalance || product.principalAmount || product.currentInvestmentValue;
	    }
	  }]);
	
	  return UiProductKindTableViewController;
	}();
	
	exports.default = UiProductKindTableViewController;

/***/ }),

/***/ 103:
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * Product kinds enum
	 * @type {object}
	 */
	var ProductKind = exports.ProductKind = {
	  CURRENT_ACCOUNT: 'currentAccounts',
	  SAVING_ACCOUNT: 'savingsAccounts',
	  TERM_DEPOSIT: 'termDeposits',
	  LOAN: 'loans',
	  INVESTMENT_ACCOUNT: 'investmentAccounts',
	  CREDIT_CARD: 'creditCards',
	  DEBIT_CARD: 'debitCards'
	};
	
	var CARD_MASK = exports.CARD_MASK = 'XXXX-XXXX-XXXX-';

/***/ })

/******/ })
});
;
//# sourceMappingURL=ui-bbm-product-kind-table-view-ng.js.map