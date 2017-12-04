(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vendor-bb-angular"));
	else if(typeof define === 'function' && define.amd)
		define("ui-bb-substitute-error-ng", ["vendor-bb-angular"], factory);
	else if(typeof exports === 'object')
		exports["ui-bb-substitute-error-ng"] = factory(require("vendor-bb-angular"));
	else
		root["ui-bb-substitute-error-ng"] = factory(root["vendor-bb-angular"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__) {
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

	module.exports = __webpack_require__(5);

/***/ }),
/* 1 */,
/* 2 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ }),
/* 3 */,
/* 4 */,
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _vendorBbAngular = __webpack_require__(2);
	
	var _vendorBbAngular2 = _interopRequireDefault(_vendorBbAngular);
	
	var _component = __webpack_require__(6);
	
	var _component2 = _interopRequireDefault(_component);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * @description The angular module name
	 * @name default
	 * @type {string}
	 */
	/**
	 * @module ui-bb-substitute-error-ng
	 *
	 * @description UI Component to replace content with an error message
	 *
	 * @example
	 * // In an extension:
	 * // file: scripts/index.js
	 * import uiBbSubstituteErrorNgKey from 'ui-bb-substitute-error-ng';
	 *
	 * export const dependencyKeys = [
	 *   uiBbSubstituteErrorNgKey,
	 * ];
	 *
	 * // file: templates/template.ng.html
	 * <ui-bb-substitute-error-ng
	 * error="$ctrl.productKindsError">
	 * </ui-bb-substitute-error-ng>
	 */
	exports.default = _vendorBbAngular2.default.module('ui-bb-substitute-error-ng', []).component('uiBbSubstituteErrorNg', _component2.default).name;

/***/ }),
/* 6 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * @name uiBbSubstituteErrorComponent
	 * @type {object}
	 * @description
	 * Substitute Error Component Object
	 *
	 * @property {object} error Object containing error message. Kept for backwards compatibility.
	 * @property {string} message Translated error message
	 */
	exports.default = {
	  bindings: {
	    error: '<',
	    message: '<'
	  },
	  transclude: true,
	  template: '\n    <div data-ng-if="$ctrl.message || $ctrl.error"\n        class="jumbotron text-center">\n      <h1><i class="fa fa-exclamation-triangle pull-right" aria-hidden="true"></i></h1>\n      <p>{{$ctrl.message || $ctrl.error.message}}</p>\n    </div>\n    <ng-transclude data-ng-if="!$ctrl.message && !$ctrl.error"></ng-transclude>\n  '
	};

/***/ })
/******/ ])
});
;
//# sourceMappingURL=ui-bb-substitute-error-ng.js.map