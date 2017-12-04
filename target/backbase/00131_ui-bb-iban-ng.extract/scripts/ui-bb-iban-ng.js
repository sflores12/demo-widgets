(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vendor-bb-angular"), require("lib-bb-iban"));
	else if(typeof define === 'function' && define.amd)
		define("ui-bb-iban-ng", ["vendor-bb-angular", "lib-bb-iban"], factory);
	else if(typeof exports === 'object')
		exports["ui-bb-iban-ng"] = factory(require("vendor-bb-angular"), require("lib-bb-iban"));
	else
		root["ui-bb-iban-ng"] = factory(root["vendor-bb-angular"], root["lib-bb-iban"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_47__, __WEBPACK_EXTERNAL_MODULE_72__) {
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

	module.exports = __webpack_require__(70);

/***/ }),

/***/ 47:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_47__;

/***/ }),

/***/ 70:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _vendorBbAngular = __webpack_require__(47);
	
	var _vendorBbAngular2 = _interopRequireDefault(_vendorBbAngular);
	
	var _directive = __webpack_require__(71);
	
	var _directive2 = _interopRequireDefault(_directive);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * @name default
	 * @type {string}
	 * @description Angular module name
	 */
	/**
	 * @module ui-bb-iban-ng
	 *
	 * @description
	 * IBAN input custom validation directive.
	 *
	 */
	exports.default = _vendorBbAngular2.default.module('ui-bb-iban-ng', []).directive('uiBbIban', _directive2.default).name;

/***/ }),

/***/ 71:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = uiBbIban;
	
	var _libBbIban = __webpack_require__(72);
	
	function uiBbIban() {
	  /**
	   * @name uiBbIban
	   * @type {object}
	   * @description
	   * Custom form validation for IBAN account number
	   *
	   * @example
	   * <form name="form">
	   *   <label for="ibanInputId">IBAN</label>
	   *   <input type="text" id="ibanInputId" name="ibanInput" data-ng-model="iban" ui-bb-iban />
	   *   <span data-ng-if="form.ibanInput.$error.uiBbIban">
	   *     Please input a valid IBAN
	   *   </span>
	   * </form>
	   */
	  return {
	    require: 'ngModel',
	    link: function link(scope, elm, attrs, ctrl) {
	      ctrl.$validators.uiBbIban = function (modelValue) {
	        if (ctrl.$isEmpty(modelValue)) {
	          return true;
	        }
	        return (0, _libBbIban.isValidIBAN)(modelValue);
	      };
	    }
	  };
	} /* eslint no-param-reassign: ["error", { "props": false }] */

/***/ }),

/***/ 72:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_72__;

/***/ })

/******/ })
});
;
//# sourceMappingURL=ui-bb-iban-ng.js.map