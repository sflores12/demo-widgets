(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("lib-bb-model-errors", [], factory);
	else if(typeof exports === 'object')
		exports["lib-bb-model-errors"] = factory();
	else
		root["lib-bb-model-errors"] = factory();
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

	module.exports = __webpack_require__(29);

/***/ }),

/***/ 29:
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * @module lib-bb-model-errors
	 *
	 * @description
	 * Provides a unified set of errors that can be returned from the
	 * Model layer, isolating the Widget and UI layer from the details of the underlying HTTP errors.
	 *
	 * @example
	 * // file: my-model.js
	 *
	 * import { fromHttpError } from 'lib-bb-model-errors';
	 *
	 * function load() {
	 *   return accountData.getAccounts()
	 *     .catch(e => {
	 *       const modelError = fromHttpError(e);
	 *       throw modelError;
	 *     });
	 * } ```
	 *
	 * // file: my-controller.js
	 *
	 * // get error constants
	 * import { E_AUTH, E_CONNECTIVITY, E_UNEXPECTED } from 'lib-bb-model-errors';
	 * import { Labels, Message } from './constants';
	 *
	 * // Map of error constants to user messages.
	 * const errorMessages = {
	 *   [E_AUTH]: Labels.ERROR_AUTH,
	 *   [E_CONNECTIVITY]: Labels.ERROR_CONNECTION,
	 *   [E_UNEXPECTED]: Labels.ERROR_UNEXPECTED,
	 * };
	 *
	 * const uiError = modelError => errorMessages[modelError.code];
	 *
	 * const $onInit = () => {
	 *   $ctrl.isAccountLoading = true;
	 *   return model
	 *     .load()
	 *     .then(accounts=> {
	 *       $ctrl.isAccountLoading = false;
	 *       $ctrl.accounts = accounts;
	 *     })
	 *     .catch(error => {
	 *       $ctrl.isAccountLoading = false;
	 *       $ctrl.accountsError = uiError(error);
	 *       bus.publish(Message.ACCOUNT_LOAD_FAILED, { error });
	 *     });
	 * };
	 */
	
	/**
	 * An Authentication or Authorization Error
	 *
	 * The user is not logged in or is not allowed to access this resource.
	 *
	 * @name E_AUTH
	 * @type {ErrorCode}
	 */
	var E_AUTH = exports.E_AUTH = Symbol('E_AUTH');
	
	/**
	 * A Connectivity Error
	 *
	 * The connection either timed out or could not be established.
	 *
	 * @name E_CONNECTIVITY
	 * @type {ErrorCode}
	 */
	var E_CONNECTIVITY = exports.E_CONNECTIVITY = Symbol('E_CONNECTIVITY');
	
	/**
	 * An Unexpected Error
	 *
	 * Some other unclassified error prevented the completion of the requested action.
	 *
	 * @name E_UNEXPECTED
	 * @type {ErrorCode}
	 */
	var E_UNEXPECTED = exports.E_UNEXPECTED = Symbol('E_UNEXPECTED');
	
	/**
	 * A User Error
	 *
	 * Some part of the requested action is invalid - e.g. A the submitted data is invalid
	 *
	 * @name E_USER
	 * @type {ErrorCode}
	 */
	var E_USER = exports.E_USER = Symbol('E_USER');
	
	/**
	 * Create an Error Model
	 *
	 * @private
	 */
	var error = function error(code) {
	  return function (httpResponse) {
	    return {
	      code: code,
	      __httpResponse: httpResponse
	    };
	  };
	};
	
	/**
	 * Handlers for various HTTP errors
	 *
	 * @private
	 */
	var httpHandlers = [{
	  matches: function matches(e) {
	    return e.status === 401;
	  },
	  action: error(E_AUTH)
	}, {
	  matches: function matches(e) {
	    return e.status === 400;
	  },
	  action: error(E_USER)
	}, {
	  matches: function matches(e) {
	    return e.status === 0;
	  },
	  action: error(E_CONNECTIVITY)
	}, {
	  matches: function matches() {
	    return true;
	  },
	  action: error(E_UNEXPECTED)
	}];
	
	/**
	 * Convert an HTTP Error response to a ModelError
	 * @name fromHttpError
	 * @example
	 * someHttpDataService.get()
	 *   .then(updateUI)
	 *   .catch(httpErrorResponse => {
	 *     const modelError = fromHttpError(httpErrorResponse);
	 *     throw modelError;
	 *   });
	 * @type {function}
	 * @param {Object} errorResponse The error response from the HTTP library
	 * @param {number} errorResponse.status The HTTP Status code
	 * @returns {ModelError} The ModelError related to the HTTP Error
	 */
	var fromHttpError = exports.fromHttpError = function fromHttpError(errorResponse) {
	  return httpHandlers.find(function (h) {
	    return h.matches(errorResponse);
	  }).action(errorResponse);
	};
	
	/**
	 * @typedef {Object} ModelError
	 * @property {ErrorCode} code
	 */
	
	/**
	 * @typedef {Symbol} ErrorCode
	 */

/***/ })

/******/ })
});
;
//# sourceMappingURL=lib-bb-model-errors.js.map