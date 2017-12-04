(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vendor-bb-angular"));
	else if(typeof define === 'function' && define.amd)
		define("ui-bb-loading-indicator-ng", ["vendor-bb-angular"], factory);
	else if(typeof exports === 'object')
		exports["ui-bb-loading-indicator-ng"] = factory(require("vendor-bb-angular"));
	else
		root["ui-bb-loading-indicator-ng"] = factory(root["vendor-bb-angular"]);
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

	module.exports = __webpack_require__(93);

/***/ }),

/***/ 2:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ }),

/***/ 93:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _vendorBbAngular = __webpack_require__(2);
	
	var _vendorBbAngular2 = _interopRequireDefault(_vendorBbAngular);
	
	var _component = __webpack_require__(94);
	
	var _component2 = _interopRequireDefault(_component);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * @description The angular module name
	 * @name default
	 * @type {string}
	 */
	/**
	 * @module ui-bb-loading-indicator-ng
	 *
	 * @example
	 * // In an extension:
	 * // file: scripts/index.js
	 * import uiBbLoadingIndicatorKey from 'ui-bb-loading-indicator-ng';
	 *
	 * export const dependencyKeys = [
	 *   uiBbLoadingIndicatorKey,
	 * ];
	 *
	 * // file: templates/template.ng.html
	 * <ui-bb-loading-indicator-ng
	 *   is-loading="$ctrl.loading"
	 *   show-delay="$ctrl.loadingDelay"
	 *   loading-text="Loading...">
	 *   Content available when loading is finished
	 * </ui-bb-loading-indicator-ng>
	 */
	exports.default = _vendorBbAngular2.default.module('ui-bb-loading-indicator-ng', []).component('uiBbLoadingIndicatorNg', _component2.default).name;

/***/ }),

/***/ 94:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _loadingIndicator = __webpack_require__(95);
	
	var _loadingIndicator2 = _interopRequireDefault(_loadingIndicator);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * @name uiBbLoadingIndicatorNg
	 * @type {object}
	 * @description
	 * Loading indicator component.
	 *
	 * @property {boolean} isLoading Controls whether or not loading indicator is visible
	 * @property {?number} showDelay Loading message display delay in ms
	 *
	 * Can be used to avoid bad user experience while rebuilding parts of the current form
	 * based on changes in user input/selection. Rather than displaying loading message immediately,
	 * it will pop up on slow server response only
	 * @property {string} loadingText Loading message
	 */
	exports.default = {
	  bindings: {
	    isLoading: '<',
	    showDelay: '<',
	    loadingText: '@'
	  },
	  transclude: true,
	  template: '\n    <div data-ng-if="$ctrl.showComponent" class="jumbotron text-center">\n      {{ $ctrl.loadingText || \'Loading...\' }}\n    </div>\n    <ng-transclude data-ng-if="!$ctrl.showComponent"></ng-transclude>\n  ',
	  controller: ['$timeout', _loadingIndicator2.default]
	};

/***/ }),

/***/ 95:
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * @name uiBbLoadingIndicatorController
	 * @ngkey uiBbLoadingIndicatorController
	 * @type {function}
	 * @description
	 * Loading indicator Controller
	 */
	var uiBbLoadingIndicatorController = function uiBbLoadingIndicatorController($timeout) {
	  var ctrl = this;
	  Object.assign(ctrl, { timeout: null, showComponent: ctrl.isLoading });
	  ctrl.$onChanges = function (changedObj) {
	    if (changedObj.isLoading.currentValue) {
	      ctrl.timeout = $timeout(function () {
	        ctrl.showComponent = true;
	        ctrl.timeout = null;
	      }, ctrl.showDelay || 0);
	    } else {
	      if (ctrl.timeout) {
	        $timeout.cancel(ctrl.timeout);
	      }
	      ctrl.showComponent = false;
	    }
	  };
	};
	
	exports.default = uiBbLoadingIndicatorController;

/***/ })

/******/ })
});
;
//# sourceMappingURL=ui-bb-loading-indicator-ng.js.map