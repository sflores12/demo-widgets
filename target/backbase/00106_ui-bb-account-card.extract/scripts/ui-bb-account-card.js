(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vendor-bb-angular"), require("ui-bb-avatar-ng"), require("ui-bb-format-amount"));
	else if(typeof define === 'function' && define.amd)
		define("ui-bb-account-card", ["vendor-bb-angular", "ui-bb-avatar-ng", "ui-bb-format-amount"], factory);
	else if(typeof exports === 'object')
		exports["ui-bb-account-card"] = factory(require("vendor-bb-angular"), require("ui-bb-avatar-ng"), require("ui-bb-format-amount"));
	else
		root["ui-bb-account-card"] = factory(root["vendor-bb-angular"], root["ui-bb-avatar-ng"], root["ui-bb-format-amount"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_3__, __WEBPACK_EXTERNAL_MODULE_4__) {
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
	
	var _vendorBbAngular = __webpack_require__(2);
	
	var _vendorBbAngular2 = _interopRequireDefault(_vendorBbAngular);
	
	var _uiBbAvatarNg = __webpack_require__(3);
	
	var _uiBbAvatarNg2 = _interopRequireDefault(_uiBbAvatarNg);
	
	var _uiBbFormatAmount = __webpack_require__(4);
	
	var _uiBbFormatAmount2 = _interopRequireDefault(_uiBbFormatAmount);
	
	var _card = __webpack_require__(5);
	
	var _card2 = _interopRequireDefault(_card);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * @name default
	 * @type {string}
	 * @description The angular module name
	 */
	/**
	 * @module ui-bb-account-card
	 * @description
	 * UI component for displaying account card.
	 *
	 * @example
	 * // In an extension:
	 * // file: scripts/index.js
	 * import uiBbAccountCard from 'ui-bb-account-card';
	 *
	 * export const dependencyKeys = [
	 *   uiBbAccountCard,
	 * ];
	 *
	 * // file: templates/template.ng.html
	 * <ui-bb-account-card
	 *   account-name="$ctrl.payment.from.name"
	 *   account-number="$ctrl.payment.from.name.account"
	 *   amount="$ctrl.payment.from.amount"
	 *   currency="$ctrl.payment.from.currency"
	 *   show-avatar="true">
	 * </ui-bb-account-card>
	 */
	exports.default = _vendorBbAngular2.default.module('ui-bb-account-card', [_uiBbFormatAmount2.default, _uiBbAvatarNg2.default]).component('uiBbAccountCard', _card2.default).name;

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

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * @name uiBbAccountCard
	 * @type {object}
	 *
	 * @property {string} account-name Account name
	 * @property {string} account-image Image url, shown in avatar field (if it is enabled)
	 * @property {string} account-number Account number
	 * @property {number} amount Account's balance
	 * @property {string} currency Currency's ISO 4217 code
	 * @property {AdditionalInfo[]} additional-info Array with additional card info objects
	 * @property {boolean} show-avatar Display avatar field with image or name initials
	 */
	
	/**
	 * @typedef {Object} AdditionalInfo
	 * @property {?string} name Additional info label
	 * @property {?number} amount Additional info row's amount
	 * @property {?string} currency Currency's ISO 4217 code
	 */
	
	var uiBbAccountCard = {
	  bindings: {
	    accountName: '<',
	    accountImage: '<',
	    accountNumber: '<',
	    amount: '<',
	    currency: '<',
	    additionalInfo: '<',
	    showAvatar: '<'
	  },
	  template: '\n    <div class="bb-account-card-content">\n      <div\n        data-ng-if="$ctrl.showAvatar"\n        class="bb-account-card-avatar"\n      >\n        <ui-bb-avatar\n          class="bb-avatar media img-circle img-thumbnail no-padding text-center"\n          data-name="$ctrl.accountName"\n          data-image="$ctrl.accountImage">\n        </ui-bb-avatar>\n      </div>\n      <div class="bb-account-card-info row">\n        <div class="col-sm-7">\n          <div><strong>{{ $ctrl.accountName }}</strong></div>\n          <div>{{ $ctrl.accountNumber }}</div>\n        </div>\n        <div class="col-sm-5 mt-2 mt-sm-0">\n          <strong class="d-sm-block text-right">\n            <ui-bb-format-amount\n              class="amount-regular-color"\n              data-amount="$ctrl.amount"\n              data-currency="$ctrl.currency"\n              data-wrap\n            ></ui-bb-format-amount>\n          </strong>\n          <div class="text-muted">\n            <div\n              class="row mt-2 mt-sm-0"\n              data-ng-repeat="additional in $ctrl.additionalInfo track by additional.name"\n            >\n              <div class="col-sm-6">{{ additional.name }}</div>\n              <ui-bb-format-amount\n                class="col-sm-6 amount-regular-color text-right"\n                data-amount="additional.amount"\n                data-currency="additional.currency"\n                data-wrap\n              ></ui-bb-format-amount>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  '
	};
	
	exports.default = uiBbAccountCard;

/***/ })
/******/ ])
});
;
//# sourceMappingURL=ui-bb-account-card.js.map