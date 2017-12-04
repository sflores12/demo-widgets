(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vendor-bb-angular"), require("lib-bb-i18n-ng"));
	else if(typeof define === 'function' && define.amd)
		define("ui-bb-i18n-ng", ["vendor-bb-angular", "lib-bb-i18n-ng"], factory);
	else if(typeof exports === 'object')
		exports["ui-bb-i18n-ng"] = factory(require("vendor-bb-angular"), require("lib-bb-i18n-ng"));
	else
		root["ui-bb-i18n-ng"] = factory(root["vendor-bb-angular"], root["lib-bb-i18n-ng"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_3__) {
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

	module.exports = __webpack_require__(1);

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _vendorBbAngular = __webpack_require__(2);
	
	var _vendorBbAngular2 = _interopRequireDefault(_vendorBbAngular);
	
	var _libBbI18nNg = __webpack_require__(3);
	
	var _libBbI18nNg2 = _interopRequireDefault(_libBbI18nNg);
	
	var _i18n = __webpack_require__(4);
	
	var _i18n2 = _interopRequireDefault(_i18n);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * The angular module name
	 * @name default
	 * @type {string}
	 */
	exports.default = _vendorBbAngular2.default.module('ui-bb-i18n-ng', [_libBbI18nNg2.default])
	
	/**
	 * Resolve a message from the translation messages, substituting placeholders with the values
	 * from the provided data. The filter is most useful when translating attributes where the
	 * directive form cannot be used or when the translation key is not a static value (e.g. it
	 * comes from model data).
	 *
	 * @name i18nFilter
	 *
	 * @example
	 * // file: messages.json
	 * {
	 *   "example.profileImageAlt": "Profile image for {name}"
	 * }
	 *
	 * // file: controller.js
	 * function MyController() {
	 *   const $ctrl = this;
	 *   $ctrl.user = {
	 *     name: 'Bob',
	 *   };
	 * }
	 *
	 * // file: template.ng.html
	 * <img src="..." alt="{{'example.profileImageAlt' | i18n: { name: $ctrl.user.name } }}" />
	 *
	 * // Result:
	 * <img src="..." alt="Profile image for Bob" />
	 *
	 * @type {function}
	 * @param key {string} The translation key
	 * @param data {object.<string>} The mapping of placeholder name to value to substitute
	 * @returns {string} The translated string with the available placeholders substituted.
	 *                   If no translation is available, the empty string.
	 */
	.filter('i18n', [_libBbI18nNg.bbMessageFormatKey, _libBbI18nNg.bbTranslateKey,
	/* into */
	function (format, translate) {
	  return function (key, data) {
	    return key && format(translate(key), data);
	  };
	}])
	
	/**
	 * Display a message from the translation messages, substituting placeholders with the values
	 * from the provided data.
	 *
	 * The `i18n-key` attribute specifies the translation key to use. The data required for the
	 * placeholders can be provided in 2 ways, either as a map in the `i18n-data` attribute or as
	 * a series of `i18n-data-*` attributes, the two can also be mixed. If both provide a value
	 * for the same placeholder, the `i18n-data-*` attributes take precedence.
	 *
	 * @name i18nKey
	 *
	 * @example
	 * // file: messages.json
	 * {
	 *   "example.greeting": "Hello, {name}"
	 * }
	 *
	 * // file: controller.js
	 * function MyController() {
	 *   const $ctrl = this;
	 *   $ctrl.user = {
	 *     name: 'Bob',
	 *   };
	 * }
	 *
	 * // file: template.ng.html
	 * <h1 i18n-key="example.greeting" i18n-data="{ name: $ctrl.user.name }"</h1>
	 * <!-- or -->
	 * <h1 i18n-key="example.greeting" i18n-data-name="$ctrl.user.name"></h1>
	 *
	 * // Result:
	 * <h1>Hello, Bob</h1>
	 *
	 * @type {function}
	 * @param key {string} The translation key
	 * @param data {object.<string>} The mapping of placeholder name to value to substitute
	 * @returns {string} The translated string with the available placeholders substituted.
	 *                   If no translation is available, the empty string.
	 */
	.directive('i18nKey', [_libBbI18nNg.bbMessageFormatKey, _libBbI18nNg.bbTranslateKey,
	/* into */
	_i18n2.default]).name; /**
	                        * @module ui-bb-i18n-ng
	                        *
	                        * @description Filter and directive for translating message keys.
	                        *
	                        * @example
	                        * // In an extension:
	                        * // file: scripts/index.js
	                        * import uiBbI18nNgKey from 'ui-bb-i18n-ng';
	                        *
	                        * export const dependencyKeys = [
	                        *   uiBbI18nNgKey,
	                        * ];
	                        *
	                        * // file: assets/messages.json
	                        * {
	                        *   "en-US": {
	                        *     "example.title": "Example Widget Title",
	                        *     "example.greeting": "Welcome, {name}!"
	                        *   },
	                        *   "nl-NL": {
	                        *     "example.title": "Voorbeeld Widget Titel",
	                        *     "example.greeting": "Welkom, {name}!"
	                        *   }
	                        * }
	                        *
	                        * // file: templates/template.ng.html
	                        * <h1 i18n-key="example.title"></h1>
	                        * <p i18n-key="example.greeting" i18n-data-name="$ctrl.user.name"></p>
	                        */

/***/ }),
/* 2 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ }),
/* 3 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/***/ }),
/* 4 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	var dataAttributePrefix = 'i18n-data-';
	
	var dataAttributes = function dataAttributes(attrs) {
	  return Object.keys(attrs).map(function (attributeName) {
	    return attrs[attributeName];
	  }).filter(function (attributeName) {
	    return attributeName.startsWith(dataAttributePrefix);
	  });
	};
	
	var withoutPrefix = function withoutPrefix(attribute) {
	  return attribute.slice(dataAttributePrefix.length);
	};
	
	var dataFromDataAttributes = function dataFromDataAttributes(attrs, scopeEval) {
	  return dataAttributes(attrs.$attr).reduce(function (acc, attributeName) {
	    var dataKey = attrs.$normalize(withoutPrefix(attributeName));
	    var passedValue = scopeEval(attrs[attrs.$normalize(attributeName)]);
	    return Object.assign({}, acc, _defineProperty({}, dataKey, passedValue));
	  }, {});
	};
	
	var dataFromDataAttribute = function dataFromDataAttribute(attrs, scopeEval) {
	  return scopeEval(attrs.i18nData);
	};
	
	var extractData = function extractData(attrs, scopeEval) {
	  return Object.assign({}, dataFromDataAttribute(attrs, scopeEval), dataFromDataAttributes(attrs, scopeEval));
	};
	
	exports.default = function (format, translate) {
	  return {
	    restrict: 'A',
	    link: function link(scope, element, attrs) {
	      var key = attrs.i18nKey;
	      var data = extractData(attrs, function (expr) {
	        return scope.$eval(expr);
	      });
	      var localized = key ? format(translate(key), data) : '';
	
	      element.html(localized);
	    }
	  };
	};

/***/ })
/******/ ])
});
;
//# sourceMappingURL=ui-bb-i18n-ng.js.map