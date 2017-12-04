(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("lib-bb-styles", [], factory);
	else if(typeof exports === 'object')
		exports["lib-bb-styles"] = factory();
	else
		root["lib-bb-styles"] = factory();
})(this, function() {
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

	module.exports = __webpack_require__(20);

/***/ }),

/***/ 20:
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/* global document */
	
	/**
	 * @module lib-bb-styles
	 *
	 * @description
	 * Provides a method to read defined styles from document's stylesheet
	 *
	 * @example
	 * // file: my-helper.js
	 *
	 * import getStyle from 'lib-bb-styles';
	 *
	 * function integrateStyles() {
	 *   return {
	 *     color: getStyle('.some-class', 'color'),
	 *   };
	 * } ```
	 */
	
	/**
	 * @description
	 * Cache for previous searches
	 *
	 * @name cache
	 * @type {object}
	 * @inner
	 */
	var cache = {};
	
	/**
	 * @description
	 * Tries to find style in cache object
	 *
	 * @name getFromCache
	 * @type {function}
	 * @inner
	 *
	 * @param {string} selector CSS selector. Must match selector in stylesheet
	 * @param {string} style defined in stylesheet
	 * @returns {string} Style value or empty string if not found
	 */
	var getFromCache = function getFromCache(selector, style) {
	  return cache[selector] && cache[selector][style] ? cache[selector][style] : '';
	};
	
	/**
	 * @description
	 * Saves style value into cache object
	 *
	 * @name saveToCache
	 * @type {function}
	 * @inner
	 *
	 * @param {string} selector CSS selector. Must match selector in stylesheet
	 * @param {string} style defined in stylesheet
	 * @param {string} value value that needs to be cached
	 */
	var saveToCache = function saveToCache(selector, style, value) {
	  if (!cache[selector]) {
	    cache[selector] = {};
	  }
	
	  cache[selector][style] = value;
	};
	
	/**
	 * @description
	 * Tries to find style in one stylesheet
	 *
	 * @name searchStylesheet
	 * @type {function}
	 * @inner
	 *
	 * @param {CSSRuleList} classes List of CSS rules
	 * @param {string} selector CSS selector. Must match selector in stylesheet
	 * @param {string} style defined in stylesheet
	 * @returns {string} Style value or empty string if not found
	 */
	var searchStylesheet = function searchStylesheet(classes, selector, style) {
	  var value = '';
	  Array.prototype.slice.call(classes).forEach(function (classItem) {
	    if (classItem.selectorText === selector) {
	      value = classItem.style[style];
	    }
	  });
	  return value;
	};
	
	/**
	 * @description
	 * Retrieves style from document's stylesheets
	 *
	 * @name getStyle
	 * @type {function}
	 *
	 * @param {string} selector CSS selector. Must match selector in stylesheet
	 * @param {string} style defined in stylesheet
	 * @param {?boolean} useCache check cache for result (default true)
	 * @returns {string} Style value or empty string if not found
	 */
	var getStyle = function getStyle(selector, style) {
	  var useCache = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
	
	  var value = useCache ? getFromCache(selector, style) : '';
	  if (!value && document.styleSheets) {
	    Array.prototype.slice.call(document.styleSheets).forEach(function (styleSheet) {
	      // if stylesheet is not from the same origin, skip it
	      if (styleSheet.href === null || styleSheet.href.indexOf(document.location.origin) === 0) {
	        var classes = styleSheet.rules || styleSheet.cssRules || [];
	        value = searchStylesheet(classes, selector, style) || value;
	      }
	    });
	
	    if (useCache && value) {
	      saveToCache(selector, style, value);
	    }
	  }
	
	  return value;
	};
	
	exports.default = getStyle;

/***/ })

/******/ })
});
;
//# sourceMappingURL=lib-bb-styles.js.map