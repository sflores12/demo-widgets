(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vendor-bb-angular"), require("vendor-bb-angular-sanitize"));
	else if(typeof define === 'function' && define.amd)
		define("ui-bb-empty-state-ng", ["vendor-bb-angular", "vendor-bb-angular-sanitize"], factory);
	else if(typeof exports === 'object')
		exports["ui-bb-empty-state-ng"] = factory(require("vendor-bb-angular"), require("vendor-bb-angular-sanitize"));
	else
		root["ui-bb-empty-state-ng"] = factory(root["vendor-bb-angular"], root["vendor-bb-angular-sanitize"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_18__) {
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

	module.exports = __webpack_require__(68);

/***/ }),

/***/ 2:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ }),

/***/ 18:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_18__;

/***/ }),

/***/ 68:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _vendorBbAngular = __webpack_require__(2);
	
	var _vendorBbAngular2 = _interopRequireDefault(_vendorBbAngular);
	
	var _vendorBbAngularSanitize = __webpack_require__(18);
	
	var _vendorBbAngularSanitize2 = _interopRequireDefault(_vendorBbAngularSanitize);
	
	var _component = __webpack_require__(69);
	
	var _component2 = _interopRequireDefault(_component);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * @description The angular module name
	 * @name default
	 * @type {string}
	 */
	exports.default = _vendorBbAngular2.default.module('ui-bb-empty-state-ng', [_vendorBbAngularSanitize2.default]).component('uiBbEmptyStateNg', _component2.default).name; /**
	                                                                                                                                                                          * @module ui-bb-empty-state-ng
	                                                                                                                                                                          *
	                                                                                                                                                                          * @example
	                                                                                                                                                                          * // In an extension:
	                                                                                                                                                                          * // file: scripts/index.js
	                                                                                                                                                                          * import uiBbEmptyStateKey from 'ui-bb-empty-state-ng';
	                                                                                                                                                                          *
	                                                                                                                                                                          * export const dependencyKeys = [
	                                                                                                                                                                          *   uiBbEmptyStateKey,
	                                                                                                                                                                          * ];
	                                                                                                                                                                          *
	                                                                                                                                                                          * // file: templates/template.ng.html
	                                                                                                                                                                          * <ui-bb-empty-state-ng
	                                                                                                                                                                          *  data-icon-classes="fa fa-4x fa-bar-chart"
	                                                                                                                                                                          *  data-title="{{ $ctrl.title }}"
	                                                                                                                                                                          *  data-subtitle="{{ $ctrl.subtitle }}"
	                                                                                                                                                                          *  data-is-empty="true"
	                                                                                                                                                                          * >
	                                                                                                                                                                          * </ui-bb-empty-state-ng>
	                                                                                                                                                                          */

/***/ }),

/***/ 69:
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * @name uiBbEmptyStateNg
	 * @type {object}
	 * @description
	 * Empty state component.
	 *
	 * @property {string} iconClasses Specify the icon class names
	 * @property {string} title Title of the component
	 * @property {string} subtitle Sub title of the component
	 * @property {boolean} isEmpty Specify if the component is shown or not
	 *
	 * Can be used to avoid bad user experience while missing data
	 */
	var component = {
	  bindings: {
	    iconClasses: '@',
	    title: '@',
	    subtitle: '@',
	    isEmpty: '<'
	  },
	  transclude: true,
	  template: '\n    <div class="col-xs-12 text-center" data-ng-show="$ctrl.isEmpty">\n      <i class="{{$ctrl.iconClasses || \'fa fa-4x fa-bar-chart text-muted\' }} empty-state-icon"\n        aria-hidden="true"\n      ></i>\n      <p class="empty-state-title"\n        data-role="empty-state-title">\n        <strong>{{ $ctrl.title }}</strong></p>\n      <p class="empty-state-subtitle text-muted"\n        data-role="empty-state-subtitle"\n        data-ng-bind-html="$ctrl.subtitle"></p>\n    </div>\n\n    <ng-transclude data-ng-hide="$ctrl.isEmpty"></ng-transclude>\n  '
	};
	
	exports.default = component;

/***/ })

/******/ })
});
;
//# sourceMappingURL=ui-bb-empty-state-ng.js.map