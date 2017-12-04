(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vendor-bb-angular"));
	else if(typeof define === 'function' && define.amd)
		define("ui-bb-inline-status-ng", ["vendor-bb-angular"], factory);
	else if(typeof exports === 'object')
		exports["ui-bb-inline-status-ng"] = factory(require("vendor-bb-angular"));
	else
		root["ui-bb-inline-status-ng"] = factory(root["vendor-bb-angular"]);
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
/******/ ({

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(83);

/***/ }),

/***/ 2:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ }),

/***/ 83:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _vendorBbAngular = __webpack_require__(2);
	
	var _vendorBbAngular2 = _interopRequireDefault(_vendorBbAngular);
	
	var _inlineStatus = __webpack_require__(84);
	
	var _inlineStatus2 = _interopRequireDefault(_inlineStatus);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * @description The angular module name
	 * @name default
	 * @type {string}
	 */
	/**
	 * @module ui-bb-inline-status-ng
	 *
	 * @example
	 * // In an extension:
	 * // file: scripts/index.js
	 * import uiBbInlineStatusNgKey from 'ui-bb-inline-status-ng';
	 *
	 * export const dependencyKeys = [
	 *   uiBbInlineStatusNgKey,
	 * ];
	 *
	 * // file: templates/template.ng.html
	 * <ui-bb-inline-status
	 * show-spinner="$ctrl.state.contacts.loading"
	 * text="'Loading contacts'">
	 * </ui-bb-inline-status>
	 */
	exports.default = _vendorBbAngular2.default.module('ui-bb-inline-status-ng', []).component('uiBbInlineStatus', _inlineStatus2.default).name;

/***/ }),

/***/ 84:
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	/**
	 * @name uiBbInlineStatusComponent
	 * @type {object}
	 * @description
	 * Inline Status Component Object
	 *
	 * @property {string} text Text to display
	 * @property {string} show-spinner condition to show/hide spinner
	 */
	var uiBbInlineStatusComponent = {
	  bindings: {
	    text: '<',
	    showSpinner: '='
	  },
	  template: '\n      <i data-ng-if="$ctrl.showSpinner"\n        class="fa fa-spinner fa-spin"\n        data-role="inline-status-icon"\n        aria-hidden="true">\n      </i>\n      <span data-role="inline-status-text" data-ng-bind="$ctrl.text" role="status"></span>\n  ',
	  controller: function uiBbInlineStatusController() {
	    _classCallCheck(this, uiBbInlineStatusController);
	  }
	};
	
	exports.default = uiBbInlineStatusComponent;

/***/ })

/******/ })
});
;
//# sourceMappingURL=ui-bb-inline-status-ng.js.map