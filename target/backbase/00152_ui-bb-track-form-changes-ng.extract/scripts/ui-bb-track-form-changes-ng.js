(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vendor-bb-angular"));
	else if(typeof define === 'function' && define.amd)
		define("ui-bb-track-form-changes-ng", ["vendor-bb-angular"], factory);
	else if(typeof exports === 'object')
		exports["ui-bb-track-form-changes-ng"] = factory(require("vendor-bb-angular"));
	else
		root["ui-bb-track-form-changes-ng"] = factory(root["vendor-bb-angular"]);
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

	module.exports = __webpack_require__(135);

/***/ }),

/***/ 2:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ }),

/***/ 135:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _vendorBbAngular = __webpack_require__(2);
	
	var _vendorBbAngular2 = _interopRequireDefault(_vendorBbAngular);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * @name default
	 * @type {string}
	 * @description The angular module name
	 */
	exports.default = _vendorBbAngular2.default.module('ui-bb-track-form-changes-ng', []).directive('uiBbTrackChanges', function () {
	  return {
	    require: 'form',
	    scope: {
	      trackingValue: '=uiBbTrackChanges'
	    },
	    link: function link(scope, elem, attr, form) {
	      var initialValue = _vendorBbAngular2.default.copy(scope.trackingValue);
	
	      scope.$watch(function () {
	        return scope.trackingValue;
	      }, function (newValue) {
	        if (_vendorBbAngular2.default.equals(newValue, initialValue) && !form.$pristine) {
	          form.$setPristine();
	        }
	      }, true);
	    }
	  };
	}).name; /**
	          * @module ui-bb-track-form-changes-ng
	          * @description
	          * Contains UI directive to track changes on the provided object
	          * and set $pristine flag of ngForm directive to true when tracking
	          * object value changes back to initial value.
	          *
	          * @example
	          * // In an extension:
	          * // file: scripts/index.js
	          * import uiBbTrackChanges from 'ui-bb-track-form-changes-ng';
	          *
	          * export const dependencyKeys = [
	          *   uiBbTrackChanges,
	          * ];
	          *
	          * // file: templates/template.ng.html
	          * <form ui-bb-track-changes="formObject">
	          *   <input name="firstName" ng-model="formObject.name" />
	          *   <input name="lastName" ng-model="formObject.lastName" />
	          * </form>
	          */

/***/ })

/******/ })
});
;
//# sourceMappingURL=ui-bb-track-form-changes-ng.js.map