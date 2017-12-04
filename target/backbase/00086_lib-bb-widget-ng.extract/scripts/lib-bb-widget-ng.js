(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vendor-bb-angular"), require("lib-bb-widget"));
	else if(typeof define === 'function' && define.amd)
		define("lib-bb-widget-ng", ["vendor-bb-angular", "lib-bb-widget"], factory);
	else if(typeof exports === 'object')
		exports["lib-bb-widget-ng"] = factory(require("vendor-bb-angular"), require("lib-bb-widget"));
	else
		root["lib-bb-widget-ng"] = factory(root["vendor-bb-angular"], root["lib-bb-widget"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_5__, __WEBPACK_EXTERNAL_MODULE_58__) {
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

	module.exports = __webpack_require__(86);

/***/ }),

/***/ 5:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_5__;

/***/ }),

/***/ 58:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_58__;

/***/ }),

/***/ 86:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.widgetKey = undefined;
	
	var _vendorBbAngular = __webpack_require__(5);
	
	var _vendorBbAngular2 = _interopRequireDefault(_vendorBbAngular);
	
	var _libBbWidget = __webpack_require__(58);
	
	var _libBbWidget2 = _interopRequireDefault(_libBbWidget);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * @module lib-bb-widget-ng
	 *
	 * @description
	 * Provides access to the details of the instance of the widget in the
	 * portal, such as its ID and preferences.
	 *
	 * @example
	 * // file: index.js
	 * import libBbWidgetNgKey, { widgetKey } from 'lib-bb-widget-ng';
	 * import Controller from './controller.js';
	 *
	 * angular.module('blah', [ libBbWidgetNgKey ])
	 * .controller([
	 *   // inject
	 *   widgetKey
	 *   // into
	 *   Controller
	 * ])
	 *
	 * // file: controller.js
	 * function Controller(bbWidget) {
	 *   // ...
	 * }
	 */
	
	var moduleKey = 'lib-bb-widget-ng';
	
	/**
	 * @name widgetKey
	 * @type {string}
	 * @description Injector name of {@link module:lib-bb-widget.WidgetAdapter} service
	 */
	var widgetKey = exports.widgetKey = moduleKey + ':widget';
	
	/**
	 * @name default
	 * @type {string}
	 * @description Angular module name
	 */
	exports.default = _vendorBbAngular2.default.module(moduleKey, []).provider(widgetKey, [function () {
	  var instance = void 0;
	
	  /**
	   * @name widgetProvider
	   * @type {object}
	   * @description
	   * Service can be configured with underlying widget instance.
	   *
	   * @example
	   * angular.module(...)
	   *   .config([`${widgetKey}Provider`,
	   *     (widgetProvider) => {
	   *       widgetProvider.config( ... );
	   *     });
	   */
	  return {
	    /**
	     * @name widgetProvider#config
	     * @type {function}
	     * @param {Object} portalWidget portal client widget instance (a.k.a __WIDGET__)
	     */
	    config: function config(widgetInstance) {
	      instance = widgetInstance;
	    },
	
	    /**
	     * @name widgetProvider#$get
	     * @type {function}
	     * @return {widget} A {@link module:lib-bb-widget.WidgetAdapter} service
	     */
	    $get: ['$q', function (Promise) {
	      return (0, _libBbWidget2.default)(instance, Promise);
	    }]
	  };
	}]).name;

/***/ })

/******/ })
});
;
//# sourceMappingURL=lib-bb-widget-ng.js.map