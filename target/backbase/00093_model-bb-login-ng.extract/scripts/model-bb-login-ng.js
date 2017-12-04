(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vendor-bb-angular"), require("data-bb-cxp-authentication-http-ng"));
	else if(typeof define === 'function' && define.amd)
		define("model-bb-login-ng", ["vendor-bb-angular", "data-bb-cxp-authentication-http-ng"], factory);
	else if(typeof exports === 'object')
		exports["model-bb-login-ng"] = factory(require("vendor-bb-angular"), require("data-bb-cxp-authentication-http-ng"));
	else
		root["model-bb-login-ng"] = factory(root["vendor-bb-angular"], root["data-bb-cxp-authentication-http-ng"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_26__) {
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

	module.exports = __webpack_require__(30);

/***/ }),

/***/ 2:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ }),

/***/ 26:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_26__;

/***/ }),

/***/ 30:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.modelLoginKey = exports.moduleKey = undefined;
	
	var _vendorBbAngular = __webpack_require__(2);
	
	var _vendorBbAngular2 = _interopRequireDefault(_vendorBbAngular);
	
	var _dataBbCxpAuthenticationHttpNg = __webpack_require__(26);
	
	var _dataBbCxpAuthenticationHttpNg2 = _interopRequireDefault(_dataBbCxpAuthenticationHttpNg);
	
	var _login = __webpack_require__(31);
	
	var _login2 = _interopRequireDefault(_login);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var moduleKey = exports.moduleKey = 'model-bb-login-ng'; /**
	                                                          * @module model-bb-login-ng
	                                                          *
	                                                          * @description
	                                                          * Model for login and user menu widgets
	                                                          *
	                                                          * @example
	                                                          * import modelLoginModuleKey, { modelLoginKey } from 'model-bb-login-ng';
	                                                          *
	                                                          * angular
	                                                          *   .module('ExampleModule', [
	                                                          *     modelLoginModuleKey,
	                                                          *   ])
	                                                          *   .factory('someFactory', [
	                                                          *     modelLoginKey,
	                                                          *     // into
	                                                          *     function someFactory(loginModel) {
	                                                          *       // ...
	                                                          *     },
	                                                          *   ]);
	                                                          */
	var modelLoginKey = exports.modelLoginKey = moduleKey + ':model';
	
	exports.default = _vendorBbAngular2.default.module(moduleKey, [_dataBbCxpAuthenticationHttpNg2.default]).factory(modelLoginKey, ['$q', _dataBbCxpAuthenticationHttpNg.cXPAuthenticationDataKey,
	/* into */
	_login2.default]).name;

/***/ }),

/***/ 31:
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = loginModel;
	/**
	 * Model factory for model-bb-login-ng
	 *
	 * @inner
	 * @type {function}
	 * @param {Object} Promise An ES2015 compatible `Promise` object.
	 *
	 * @return {Object}
	 */
	function loginModel(Promise, cxpData) {
	  /**
	   * @name loginModel#login
	   * @type {function}
	   *
	   * @description
	   * Makes a login request
	   *
	   * @param {string} username
	   * @param {string} password
	   * @returns {Promise}
	   */
	  var login = function login(username, password) {
	    return cxpData.postLogin({ username: username, password: password });
	  };
	
	  /**
	   * @name loginModel#logout
	   * @type {function}
	   *
	   * @description
	   * Makes a logout request
	   *
	   * @returns {Promise}
	   */
	  var logout = function logout() {
	    return cxpData.postLogout();
	  };
	
	  /**
	   * @name loginModel
	   * @type {object}
	   *
	   * @description
	   * Model for widget-bb-login-ng, widget-bb-user-menu-ng and widget-bb-user-context-menu-ng
	   */
	  return {
	    login: login,
	    logout: logout
	  };
	}

/***/ })

/******/ })
});
;
//# sourceMappingURL=model-bb-login-ng.js.map