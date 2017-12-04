(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vendor-bb-angular"));
	else if(typeof define === 'function' && define.amd)
		define("vendor-bb-uib-stacked-map", ["vendor-bb-angular"], factory);
	else if(typeof exports === 'object')
		exports["vendor-bb-uib-stacked-map"] = factory(require("vendor-bb-angular"));
	else
		root["vendor-bb-uib-stacked-map"] = factory(root["vendor-bb-angular"]);
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

	module.exports = __webpack_require__(80);

/***/ },

/***/ 2:
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ },

/***/ 80:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(2);
	__webpack_require__(81);
	
	var MODULE_NAME = 'vendor-bb-uib-stacked-map';
	
	angular.module(MODULE_NAME, ['ui.bootstrap.stackedMap']);
	
	module.exports = MODULE_NAME;

/***/ },

/***/ 81:
/***/ function(module, exports) {

	'use strict';
	
	angular.module('ui.bootstrap.stackedMap', [])
	/**
	 * A helper, internal data structure that acts as a map but also allows getting / removing
	 * elements in the LIFO order
	 */
	.factory('$$stackedMap', function () {
	  return {
	    createNew: function createNew() {
	      var stack = [];
	
	      return {
	        add: function add(key, value) {
	          stack.push({
	            key: key,
	            value: value
	          });
	        },
	        get: function get(key) {
	          for (var i = 0; i < stack.length; i++) {
	            if (key === stack[i].key) {
	              return stack[i];
	            }
	          }
	        },
	        keys: function keys() {
	          var keys = [];
	          for (var i = 0; i < stack.length; i++) {
	            keys.push(stack[i].key);
	          }
	          return keys;
	        },
	        top: function top() {
	          return stack[stack.length - 1];
	        },
	        remove: function remove(key) {
	          var idx = -1;
	          for (var i = 0; i < stack.length; i++) {
	            if (key === stack[i].key) {
	              idx = i;
	              break;
	            }
	          }
	          return stack.splice(idx, 1)[0];
	        },
	        removeTop: function removeTop() {
	          return stack.splice(stack.length - 1, 1)[0];
	        },
	        length: function length() {
	          return stack.length;
	        }
	      };
	    }
	  };
	});

/***/ }

/******/ })
});
;
//# sourceMappingURL=vendor-bb-uib-stacked-map.js.map