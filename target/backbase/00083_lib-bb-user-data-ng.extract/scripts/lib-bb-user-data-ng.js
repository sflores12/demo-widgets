(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vendor-bb-angular"), require("data-bb-cxp-authentication-http-ng"));
	else if(typeof define === 'function' && define.amd)
		define("lib-bb-user-data-ng", ["vendor-bb-angular", "data-bb-cxp-authentication-http-ng"], factory);
	else if(typeof exports === 'object')
		exports["lib-bb-user-data-ng"] = factory(require("vendor-bb-angular"), require("data-bb-cxp-authentication-http-ng"));
	else
		root["lib-bb-user-data-ng"] = factory(root["vendor-bb-angular"], root["data-bb-cxp-authentication-http-ng"]);
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

	module.exports = __webpack_require__(25);

/***/ }),

/***/ 2:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ }),

/***/ 25:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.bbUserDataServiceKey = undefined;
	
	var _vendorBbAngular = __webpack_require__(2);
	
	var _vendorBbAngular2 = _interopRequireDefault(_vendorBbAngular);
	
	var _dataBbCxpAuthenticationHttpNg = __webpack_require__(26);
	
	var _dataBbCxpAuthenticationHttpNg2 = _interopRequireDefault(_dataBbCxpAuthenticationHttpNg);
	
	var _userData = __webpack_require__(27);
	
	var _userData2 = _interopRequireDefault(_userData);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var moduleKey = 'lib-bb-user-data-ng';
	/**
	 * @name userDataServiceKey
	 * @type {string}
	 * @description User data service name
	 */
	/**
	 * @module lib-bb-user-data-ng
	 */
	
	var bbUserDataServiceKey = exports.bbUserDataServiceKey = moduleKey + ':userDataService';
	
	exports.default = _vendorBbAngular2.default.module(moduleKey, [_dataBbCxpAuthenticationHttpNg2.default]).service(bbUserDataServiceKey, _userData2.default).name;

/***/ }),

/***/ 26:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_26__;

/***/ }),

/***/ 27:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _dataBbCxpAuthenticationHttpNg = __webpack_require__(26);
	
	exports.default = ['$q', _dataBbCxpAuthenticationHttpNg.cXPAuthenticationDataKey, function (Promise, cxpAuth) {
	  var portal = window.b$ && window.b$.portal;
	
	  var getUserFromPortal = function getUserFromPortal() {
	    if (portal && portal.loggedInUserId && portal.loggedInUserId !== 'null') {
	      return portal;
	    }
	    return {};
	  };
	
	  return {
	    /**
	     * @description Retrieves information about currently logged in user
	     * from CX endpoint or CXP global object
	     * @name getUserData
	     * @type {function}
	     * @returns {Promise.<Object>} an object containing user data
	     */
	    getUserData: function getUserData() {
	      if (portal) {
	        var userData = getUserFromPortal();
	        return Promise.resolve({
	          username: userData.loggedInUserId
	        });
	      }
	      return cxpAuth.getProfile().then(function (response) {
	        var profile = response.data || {};
	        return {
	          username: profile.username
	        };
	      });
	    }
	  };
	}]; /* global window */

/***/ })

/******/ })
});
;
//# sourceMappingURL=lib-bb-user-data-ng.js.map