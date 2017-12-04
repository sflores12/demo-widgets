(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vendor-bb-angular"));
	else if(typeof define === 'function' && define.amd)
		define("vendor-bb-uib-debounce", ["vendor-bb-angular"], factory);
	else if(typeof exports === 'object')
		exports["vendor-bb-uib-debounce"] = factory(require("vendor-bb-angular"));
	else
		root["vendor-bb-uib-debounce"] = factory(root["vendor-bb-angular"]);
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
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(39);

/***/ },

/***/ 2:
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ },

/***/ 39:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(2);
	__webpack_require__(40);
	
	var MODULE_NAME = 'vendor-bb-uib-debounce';
	
	angular.module(MODULE_NAME, ['ui.bootstrap.debounce']);
	
	module.exports = MODULE_NAME;

/***/ },

/***/ 40:
/***/ function(module, exports) {

	'use strict';
	
	angular.module('ui.bootstrap.debounce', [])
	/**
	 * A helper, internal service that debounces a function
	 */
	.factory('$$debounce', ['$timeout', function ($timeout) {
	  return function (callback, debounceTime) {
	    var timeoutPromise;
	
	    return function () {
	      var self = this;
	      var args = Array.prototype.slice.call(arguments);
	      if (timeoutPromise) {
	        $timeout.cancel(timeoutPromise);
	      }
	
	      timeoutPromise = $timeout(function () {
	        callback.apply(self, args);
	      }, debounceTime);
	    };
	  };
	}]);

/***/ }

/******/ })
});
;
//# sourceMappingURL=vendor-bb-uib-debounce.js.map