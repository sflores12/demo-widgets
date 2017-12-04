(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vendor-bb-angular"), require("lib-bb-challenge-ng"));
	else if(typeof define === 'function' && define.amd)
		define("data-bb-cxp-authentication-http-ng", ["vendor-bb-angular", "lib-bb-challenge-ng"], factory);
	else if(typeof exports === 'object')
		exports["data-bb-cxp-authentication-http-ng"] = factory(require("vendor-bb-angular"), require("lib-bb-challenge-ng"));
	else
		root["data-bb-cxp-authentication-http-ng"] = factory(root["vendor-bb-angular"], root["lib-bb-challenge-ng"]);
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
	exports.cXPAuthenticationDataKey = undefined;
	
	var _vendorBbAngular = __webpack_require__(2);
	
	var _vendorBbAngular2 = _interopRequireDefault(_vendorBbAngular);
	
	var _libBbChallengeNg = __webpack_require__(3);
	
	var _libBbChallengeNg2 = _interopRequireDefault(_libBbChallengeNg);
	
	var _dataBbCxpAuthenticationHttp = __webpack_require__(4);
	
	var _dataBbCxpAuthenticationHttp2 = _interopRequireDefault(_dataBbCxpAuthenticationHttp);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var cXPAuthenticationDataModuleKey = 'data-bb-cxp-authentication-http-ng';
	/**
	 * @name cXPAuthenticationDataKey
	 * @type {string}
	 * @description Angular dependency injection key for the CXP Authentication data service
	 */
	/**
	 * @module data-bb-cxp-authentication-http-ng
	 *
	 * @description A data module for accessing the CXP Authentication REST API
	 *
	 * @returns {String} `data-bb-cxp-authentication-http-ng`
	 * @example
	 * import cXPAuthenticationDataModuleKey, {
	 *   cXPAuthenticationDataKey,
	 * } from 'data-bb-cxp-authentication-http-ng';
	 *
	 * For compatibility with CX 6 config-bb-provider is needed with these options
	 *
	 * define('config-bb-providers-ng', function (require, exports) {
	 *   exports.default = [
	 *     ['data-bb-cxp-authentication-http-ng:cXPAuthenticationDataProvider', function(endpoint) {
	 *       endpoint.setHeaders({
	 *         Accept: '* /*',
	 *         'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
	 *         'Cache-Control': 'no-cache, no-store, must-revalidate',
	 *         'X-Requested-With': 'XMLHttpRequest',
	 *       });
	 *       endpoint.setApiRoot('/gateway/api')
	 *       endpoint.setAuthUri('/auth');
	 *       endpoint.setUsernameParamName('username');
	 *       endpoint.setPasswordParamName('password');
	 *     }],
	 *   ];
	 * });
	 */
	
	var cXPAuthenticationDataKey = exports.cXPAuthenticationDataKey = 'data-bb-cxp-authentication-http-ng:cXPAuthenticationData';
	/**
	 * @name default
	 * @type {string}
	 * @description Angular dependency injection module key
	 */
	exports.default = _vendorBbAngular2.default.module(cXPAuthenticationDataModuleKey, [_libBbChallengeNg2.default])
	
	/**
	 * @name CXPAuthenticationData
	 * @type {object}
	 * @constructor
	 *
	 * @description Public api for service data-bb-cxp-authentication-http
	 *
	 */
	.provider(cXPAuthenticationDataKey, [function () {
	  var config = {
	    baseUri: ''
	  };
	
	  /**
	   * @name CXPAuthenticationDataProvider
	   * @type {object}
	   * @description
	   * Data service that can be configured with custom base URI.
	   *
	   * @example
	   * angular.module(...)
	   *   .config(['data-bb-cxp-authentication-http-ng:cXPAuthenticationDataProvider',
	   *     (dataProvider) => {
	   *       dataProvider.setBaseUri('http://my-service.com/');
	   *       });
	   */
	  return {
	    /**
	     * @name CXPAuthenticationDataProvider#setHeaders
	     * @type {function}
	     * @param {object} headers
	     * Object with all headers that should be included for all HTTP requests
	     */
	    setHeaders: function setHeaders(headers) {
	      config.headers = headers;
	    },
	    /**
	     * @name CXPAuthenticationDataProvider#setBaseUri
	     * @type {function}
	     * @param {string} baseUri Base URI which will be the prefix for all HTTP requests
	     */
	    setBaseUri: function setBaseUri(baseUri) {
	      config.baseUri = baseUri;
	    },
	    /**
	     * @name CXPAuthenticationDataProvider#setApiRoot
	     * @type {function}
	     * @param {string} apiRoot Root for API calls
	     */
	    setApiRoot: function setApiRoot(apiRoot) {
	      config.apiRoot = apiRoot;
	    },
	    /**
	     * @name CXPAuthenticationDataProvider#setUsernameParamName
	     * @type {function}
	     * @param {string} usernameParam New username param key
	     */
	    setUsernameParamName: function setUsernameParamName(usernameParam) {
	      config.usernameParam = usernameParam;
	    },
	    /**
	     * @name CXPAuthenticationDataProvider#setPasswordParamName
	     * @type {function}
	     * @param {string} passwordParam New password param key
	     */
	    setPasswordParamName: function setPasswordParamName(passwordParam) {
	      config.passwordParam = passwordParam;
	    },
	    /**
	     * @name CXPAuthenticationDataProvider#authUri
	     * @type {function}
	     * @param {string} authUri Auth URI which will included in all HTTP requests
	     */
	    setAuthUri: function setAuthUri(authUri) {
	      config.authUri = authUri;
	    },
	    /**
	     * @name CXPAuthenticationDataProvider#$get
	     * @type {function}
	     * @return {object} An instance of the service
	     */
	    $get: ['$http', _libBbChallengeNg.bbChallengeKey,
	    /* into */
	    (0, _dataBbCxpAuthenticationHttp2.default)(config)]
	  };
	}]).config(['$httpProvider', function ($httpProvider) {
	  // Configure $http service to use challenge interceptor
	  $httpProvider.interceptors.push(_libBbChallengeNg.bbChallengeKey);
	}]).name;

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
	
	/* global window */
	exports.default = function (conf) {
	  return function (httpClient) {
	    // v6ApiRoot will be found only in compatibility mode. To use it without compatibility
	    // set api root via config provider
	    var v6ApiRoot = function v6ApiRoot() {
	      return window.b$ && window.b$.portal && window.b$.portal.config.apiRoot;
	    };
	    var v5ApiRoot = function v5ApiRoot() {
	      return window.b$ && window.b$.portal && window.b$.portal.config.serverRoot;
	    };
	    var apiRoot = conf.apiRoot || v6ApiRoot() || v5ApiRoot() || '';
	    var authUri = conf.authUri || '/bb-public-api/security';
	    var defaultHeaders = {
	      Accept: 'application/json',
	      'Content-Type': 'application/x-www-form-urlencoded;',
	      'Cache-Control': 'no-cache, no-store, must-revalidate'
	    };
	
	    var config = {
	      endpoint: '' + conf.baseUri + apiRoot + authUri,
	      headers: Object.assign(defaultHeaders, conf.headers || {}),
	      formDataParameters: {
	        username: conf.usernameParam || 'j_username',
	        password: conf.passwordParam || 'j_password'
	      }
	    };
	
	    /**
	     * @name CXPAuthenticationData#buildQueryString
	     * @type {function}
	     * @inner
	     * @description Builds query string with username and password keys and values
	     * @param {object} obj Object with query values
	     * @param {string} obj.username Username
	     * @param {string} obj.password Password
	     * @returns {string} Query string
	     */
	    function buildQueryString(obj) {
	      var loginParam = config.formDataParameters.username + '=' + obj.username;
	      var passwordParam = config.formDataParameters.password + '=' + obj.password;
	      return loginParam + '&' + passwordParam;
	    }
	
	    /**
	     * @name CXPAuthenticationData#getProfile
	     * @type {function}
	     * @description Retrieves profile information from CX 6
	     * @param {object} headers custom headers
	     * @returns {Promise.<object>} A promise resolving to object with headers and data keys
	     */
	    function getProfile() {
	      var headers = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	
	      return httpClient({
	        method: 'GET',
	        url: '' + conf.baseUri + apiRoot + '/bb-public-api/profile.json',
	        headers: Object.assign(config.headers, headers)
	      });
	    }
	
	    /**
	     * @name CXPAuthenticationData#postLogin
	     * @type {function}
	     * @description Perform a POST request to the URI.
	     * @param {object} data configuration object
	     * @param {object} headers custom headers
	     * @returns {Promise.<object>} A promise resolving to object with headers and data keys
	     *
	     * @example
	     * cXPAuthenticationData
	     *  .postLogin(data, headers)
	     *  .then(function(result){
	     *    console.log(result)
	     *  });
	     */
	    function postLogin() {
	      var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	      var headers = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	
	      return httpClient({
	        method: 'POST',
	        url: config.endpoint + '/login',
	        data: buildQueryString(data),
	        headers: Object.assign(config.headers, headers)
	      });
	    }
	
	    /**
	     * @name CXPAuthenticationData#postLogout
	     * @type {function}
	     * @description Perform a POST request to the URI.
	     * @param {object} headers custom headers
	     * @returns {Promise.<object>} A promise resolving to object with headers and data keys
	     *
	     * @example
	     * cXPAuthenticationData
	     *  .postLogout(headers)
	     *  .then(function(result){
	     *    console.log(result)
	     *  });
	     */
	    function postLogout() {
	      var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	      var headers = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	
	      var url = config.endpoint + '/logout';
	
	      return httpClient({
	        method: 'POST',
	        url: url,
	        data: data,
	        headers: Object.assign(config.headers, headers)
	      });
	    }
	
	    return {
	      getProfile: getProfile,
	      postLogin: postLogin,
	      postLogout: postLogout
	    };
	  };
	};

/***/ })
/******/ ])
});
;
//# sourceMappingURL=data-bb-cxp-authentication-http-ng.js.map