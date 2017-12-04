(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vendor-bb-angular"));
	else if(typeof define === 'function' && define.amd)
		define("lib-bb-i18n-ng", ["vendor-bb-angular"], factory);
	else if(typeof exports === 'object')
		exports["lib-bb-i18n-ng"] = factory(require("vendor-bb-angular"));
	else
		root["lib-bb-i18n-ng"] = factory(root["vendor-bb-angular"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_5__) {
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

	module.exports = __webpack_require__(23);

/***/ }),

/***/ 5:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_5__;

/***/ }),

/***/ 23:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.bbTranslateKey = exports.bbMessageFormatKey = undefined;
	
	var _vendorBbAngular = __webpack_require__(5);
	
	var _vendorBbAngular2 = _interopRequireDefault(_vendorBbAngular);
	
	var _libBbI18n = __webpack_require__(24);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * @module lib-bb-i18n-ng
	 *
	 * @description Translation of message keys.
	 *
	 * Generally this library doesn't need to be used directly, and you should use ui-bb-i18n-ng for
	 * translations.
	 *
	 * @example
	 * import angular from 'vendor-bb-angular';
	 * import libBbI18nNgModuleKey, { bbTranslateKey, bbMessageFormatKey } from 'lib-bb-i18n-ng';
	 *
	 * angular.module('example-module', [libBbI18nNgModuleKey])
	 *   .config([`${bbTranslateKey}Provider`, function(i18n) {
	 *     i18n.setMessages({
	 *       'example.greeting': 'Greetings, {user}!',
	 *     });
	 *   }])
	 *
	 *   .factory('MyService', [
	 *     bbTranslateKey, bbMessageFormatKey,
	 *     (translate, format) => ({
	 *       internationalize: (key, data) => format(data, translate(key)),
	 *     }),
	 *   ]);
	 *
	 */
	
	var moduleKey = 'lib-bb-i18n-ng';
	
	/**
	 * The dependency injection key for the bbMessageFormat Service
	 * @name bbMessageFormatKey
	 * @type {string}
	 */
	var bbMessageFormatKey = exports.bbMessageFormatKey = moduleKey + ':bbMessageFormat';
	
	/**
	 * The dependency injection key for the bbTranslate Service
	 * @name bbTranslateKey
	 * @type {string}
	 */
	var bbTranslateKey = exports.bbTranslateKey = moduleKey + ':bbTranslate';
	
	/**
	 * @name default
	 * @type {string}
	 * @description Angular module name
	 */
	exports.default = _vendorBbAngular2.default.module(moduleKey, [])
	
	/**
	 * A provider that allows configuration of the localized messages to use.
	 * Set the messages for the current locale using the `setMessages` provider method.
	 *
	 * @name bbTranslateProvider
	 * @ngkey lib-bb-i18n-ng:bbTranslateProvider
	 * @type {object}
	 * @example
	 * angular.module(...)
	 *   .config([
	 *     `${bbTranslateKey}Provider`,
	 *     (i18nProvider) => {
	 *       i18nProvider.setMessages(...);
	 *     }
	 *   ]);
	 */
	.provider(bbTranslateKey, [function () {
	  var messages = {};
	
	  return {
	    /**
	     * @name bbTranslateProvider#setMessages
	     * @type {function}
	     * @param {object.<string>} msgs A map of translation keys to translations
	     */
	    setMessages: function setMessages(msgs) {
	      messages = msgs;
	    },
	
	    /**
	     * @name bbTranslateProvider#$get
	     * @type {function}
	     * @return {bbTranslate} A translation function
	     */
	    $get: ['$log',
	    /* into */
	    function (logger) {
	      return function (key) {
	        return (0, _libBbI18n.translate)(logger, messages, key);
	      };
	    }]
	  };
	}])
	
	/**
	 * A factory to get a message format function, allowing translated messages to have values
	 * subsituted into their placeholders.
	 *
	 * @name bbMessageFormat
	 * @ngkey lib-bb-i18n-ng:bbMessageFormat
	 * @type {function}
	 * @return {bbMessageFormat} Function which returns message with substituted data.
	 */
	.factory(bbMessageFormatKey, ['$log',
	/* into */
	function (logger) {
	  return function (message, data) {
	    return (0, _libBbI18n.format)(logger, message, data);
	  };
	}]).name;
	
	/**
	 * @typedef bbTranslate
	 * @type {function}
	 * @param key {string} The translation key for which to find a translation
	 * @returns {string} The translated message. Empty string if not translation is available.
	 */
	
	/**
	 * @typedef bbMessageFormat
	 * @type {function}
	 * @param message {string} The message, with placeholders, to format
	 * @param data {object.<string>} A map of placeholder to value. To be substituted into the message
	 * @returns {string} The message with substituted data. Missing data leaves the key in place
	 */

/***/ }),

/***/ 24:
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * Format a message be replacing placeholders with the provided data
	 *
	 * @example
	 * const logger = ...;
	 * const message = 'You have {count} messages';
	 * console.log(format(logger, message, { count: 2 }));
	 * // log: You have 2 messages
	 *
	 * @name lib-bb-i18n.format
	 * @inner
	 * @type {function}
	 * @param logger {object} A logger to report formatting failures (e.g. missing data)
	 * @param logger.warn {function} Log warnings
	 * @param message {string} The message, with placeholders, to format
	 * @param data {object.<string>} A map of placeholder to value. To be substituted into the message
	 * @returns {string} The message with substituted data. Missing data leaves the key in place
	 */
	var format = exports.format = function format(logger, message, data) {
	  return message.replace(/{\s*([^\s.\-,{}]*)\s*}/g, function (match, key) {
	    var value = data[key];
	    if (value === undefined) {
	      logger.warn('[i18n] Missing format data key - "' + key + '"');
	      return '{' + key + '}';
	    }
	    return data[key];
	  });
	};
	
	/**
	 * Find a translation for an internationalized message key
	 *
	 * @example
	 * const logger = ...;
	 * const messages = {
	 *   messageNotice: 'You have {count} messages',
	 * };
	 *
	 * console.log(translate(logger, messages, 'messageNotice'));
	 * // log: You have {count} messages
	 *
	 * @name lib-bb-i18n.translate
	 * @inner
	 * @type {function}
	 * @param logger {object} A logger to report formatting failures (e.g. missing translations)
	 * @param logger.warn {function} Log warnings
	 * @param messages {object.<string>} The mapping of translation keys to message
	 * @param key {string} The translation key for which to find a translation
	 * @returns {string} The translated message. Empty string if not translation is available.
	 */
	var translate = exports.translate = function translate(logger, messages, key) {
	  var message = messages[key];
	  if (message !== undefined) {
	    return message;
	  }
	  logger.warn('[I18n] Undefined translation key: "' + key + '"');
	  return '';
	};

/***/ })

/******/ })
});
;
//# sourceMappingURL=lib-bb-i18n-ng.js.map