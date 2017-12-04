(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vendor-bb-angular"));
	else if(typeof define === 'function' && define.amd)
		define("ui-bb-loading-overlay-ng", ["vendor-bb-angular"], factory);
	else if(typeof exports === 'object')
		exports["ui-bb-loading-overlay-ng"] = factory(require("vendor-bb-angular"));
	else
		root["ui-bb-loading-overlay-ng"] = factory(root["vendor-bb-angular"]);
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

	module.exports = __webpack_require__(96);

/***/ }),

/***/ 2:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ }),

/***/ 96:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _vendorBbAngular = __webpack_require__(2);
	
	var _vendorBbAngular2 = _interopRequireDefault(_vendorBbAngular);
	
	var _component = __webpack_require__(97);
	
	var _component2 = _interopRequireDefault(_component);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * @description The angular module name
	 * @name default
	 * @type {string}
	 */
	/**
	 * @module ui-bb-loading-overlay-ng
	 *
	 * @example
	 * // In an extension:
	 * // file: scripts/index.js
	 * import uiBbLoadingOverlayKey from 'ui-bb-loading-overlay-ng';
	 *
	 * export const dependencyKeys = [
	 *   uiBbLoadingOverlayKey,
	 * ];
	 *
	 * // file: templates/template.ng.html
	 * <ui-bb-loading-overlay-ng
	 *   is-loading="$ctrl.loading">
	 *   Content available when loading is finished
	 * </ui-bb-loading-overlay-ng>
	 */
	exports.default = _vendorBbAngular2.default.module('ui-bb-loading-overlay-ng', []).component('uiBbLoadingOverlayNg', _component2.default).name;

/***/ }),

/***/ 97:
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * @name uiBbLoadingOverlayNg
	 * @type {object}
	 * @description
	 * Loading overlay component.
	 *
	 * @property {boolean} isLoading Controls whether or not loading overlay is visible
	 *
	 * It shows an overlay with a spinning animation in it that will be positioned
	 * on top of the current content.
	 */
	exports.default = {
	  bindings: {
	    isLoading: '<'
	  },
	  transclude: true,
	  template: '\n    <div class="bb-loading-overlay">\n      <ng-transclude></ng-transclude>\n      <div ng-if="$ctrl.isLoading">\n        <div class="bb-loading-overlay-cover"></div>\n        <div class="bb-loading-overlay-spinner"></div>\n      </div>\n    </div>\n  '
	};

/***/ })

/******/ })
});
;
//# sourceMappingURL=ui-bb-loading-overlay-ng.js.map