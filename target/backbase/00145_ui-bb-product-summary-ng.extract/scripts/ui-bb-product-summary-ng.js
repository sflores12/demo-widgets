(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("ui-bb-format-amount"), require("vendor-bb-angular"));
	else if(typeof define === 'function' && define.amd)
		define("ui-bb-product-summary-ng", ["ui-bb-format-amount", "vendor-bb-angular"], factory);
	else if(typeof exports === 'object')
		exports["ui-bb-product-summary-ng"] = factory(require("ui-bb-format-amount"), require("vendor-bb-angular"));
	else
		root["ui-bb-product-summary-ng"] = factory(root["ui-bb-format-amount"], root["vendor-bb-angular"]);
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

	module.exports = __webpack_require__(97);

/***/ }),

/***/ 3:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/***/ }),

/***/ 79:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_79__;

/***/ }),

/***/ 97:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _vendorBbAngular = __webpack_require__(79);
	
	var _vendorBbAngular2 = _interopRequireDefault(_vendorBbAngular);
	
	var _uiBbFormatAmount = __webpack_require__(3);
	
	var _uiBbFormatAmount2 = _interopRequireDefault(_uiBbFormatAmount);
	
	var _component = __webpack_require__(98);
	
	var _component2 = _interopRequireDefault(_component);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * @description The angular module name
	 * @name default
	 * @type {string}
	 */
	exports.default = _vendorBbAngular2.default.module('ui-bb-product-summary-ng', [_uiBbFormatAmount2.default]).component('uiBbProductSummaryNg', _component2.default).name; /**
	                                                                                                                                                                           * @module ui-bb-product-summary-ng
	                                                                                                                                                                           * @requires ui-bb-format-amount
	                                                                                                                                                                           *
	                                                                                                                                                                           * @example
	                                                                                                                                                                           * // In an extension:
	                                                                                                                                                                           * // file: scripts/index.js
	                                                                                                                                                                           * import uiBbProductSummaryNgKey from 'ui-bb-product-summary-ng';
	                                                                                                                                                                           *
	                                                                                                                                                                           * export const dependencyKeys = [
	                                                                                                                                                                           *   uiBbProductSummaryNgKey,
	                                                                                                                                                                           * ];
	                                                                                                                                                                           *
	                                                                                                                                                                           * // file: templates/template.ng.html
	                                                                                                                                                                           * <ui-bb-product-summary-ng
	                                                                                                                                                                           * product-name="product.name"
	                                                                                                                                                                           * product-identifier="product.identifier"
	                                                                                                                                                                           * primary-value="product.primaryValue"
	                                                                                                                                                                           * secondary-value="product.secondaryValue"
	                                                                                                                                                                           * secondary-label="product.secondaryLabel"
	                                                                                                                                                                           * tertiary-value="product.tertiaryValue"
	                                                                                                                                                                           * tertiary-label="product.tertiaryLabel"
	                                                                                                                                                                           * currency="product.currency">
	                                                                                                                                                                           * </ui-bb-product-summary-ng>
	                                                                                                                                                                           */

/***/ }),

/***/ 98:
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * @name uiBbProductSummaryComponent
	 * @type {object}
	 * @description
	 * Product Summary Component Object
	 *
	 * @property {string} product-name name of the product
	 * @property {string} product-identifier product indentifier
	 * @property {string} currency currency of the product
	 * @property {string} primary-value primary value of the product
	 * @property {string} secondary-value secondary value of the product
	 * @property {string} secondary-label label for the secondary value
	 * @property {string} tertiary-value tertiary value of the product
	 * @property {string} tertiary-label label for the tertiary value
	 * @property {string} on-select function to be executed on product summary selection
	 */
	exports.default = {
	  bindings: {
	    productName: '<',
	    productIdentifier: '<',
	    currency: '<',
	    primaryValue: '<',
	    secondaryValue: '<',
	    secondaryLabel: '<',
	    tertiaryValue: '<',
	    tertiaryLabel: '<',
	    select: '&onSelect'
	  },
	
	  template: '\n    <div class="panel panel-default" tabindex="0" data-ng-click="$ctrl.select()">\n      <div class="panel-heading">\n        <h3 class="panel-title">\n          {{ $ctrl.productName }}<br>\n          <small data-ng-if="$ctrl.productIdentifier">{{ $ctrl.productIdentifier }}</small>\n        </h3>\n      </div>\n\n      <div class="panel-body">\n\n        <div data-ng-if="$ctrl.primaryValue" class="text-right">\n          <strong>\n            <ui-bb-format-amount \n              data-amount="$ctrl.primaryValue"\n              data-currency="$ctrl.currency">\n            </ui-bb-format-amount>\n          </strong>\n        </div>\n        <div data-ng-if="$ctrl.secondaryValue" class="row">\n          <div class="col-xs-7 col-sm-7 col-md-7 text-left">\n            <span class="text-uppercase small">{{ $ctrl.secondaryLabel }}</span>\n          </div>\n          <div class="col-xs-5 col-sm-5 col-md-5 text-right">\n            <ui-bb-format-amount \n              data-amount="$ctrl.secondaryValue"\n              data-currency="$ctrl.currency">\n            </ui-bb-format-amount>\n          </div>\n        </div>\n        \n        <div data-ng-if="$ctrl.tertiaryValue" class="row">\n          <div class="col-xs-7 col-sm-7 col-md-7 text-left">\n            <span class="text-uppercase small">{{ $ctrl.tertiaryLabel }}</span>\n          </div>\n          <div class="col-xs-5 col-sm-5 col-md-5 text-right">\n            <ui-bb-format-amount \n              data-amount="$ctrl.tertiaryValue"\n              data-currency="$ctrl.currency">\n            </ui-bb-format-amount>\n          </div>\n        </div>\n\n      </div>\n    </div>\n  '
	};

/***/ })

/******/ })
});
;
//# sourceMappingURL=ui-bb-product-summary-ng.js.map