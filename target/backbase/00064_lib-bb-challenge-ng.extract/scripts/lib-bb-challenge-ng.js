(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vendor-bb-angular"), require("lib-bb-intent-ng"));
	else if(typeof define === 'function' && define.amd)
		define("lib-bb-challenge-ng", ["vendor-bb-angular", "lib-bb-intent-ng"], factory);
	else if(typeof exports === 'object')
		exports["lib-bb-challenge-ng"] = factory(require("vendor-bb-angular"), require("lib-bb-intent-ng"));
	else
		root["lib-bb-challenge-ng"] = factory(root["vendor-bb-angular"], root["lib-bb-intent-ng"]);
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
	exports.bbChallengeKey = undefined;
	
	var _vendorBbAngular = __webpack_require__(2);
	
	var _vendorBbAngular2 = _interopRequireDefault(_vendorBbAngular);
	
	var _libBbIntentNg = __webpack_require__(3);
	
	var _libBbIntentNg2 = _interopRequireDefault(_libBbIntentNg);
	
	var _interceptors = __webpack_require__(4);
	
	var _interceptors2 = _interopRequireDefault(_interceptors);
	
	var _configuration = __webpack_require__(7);
	
	var _configuration2 = _interopRequireDefault(_configuration);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * @module lib-bb-challenge
	 * @description Handles challenge response
	 * Known limitations of the library:
	 * - It can only work with one request at a time.
	 * - It can only work if the intent is handled on the same page.
	 * On web, that could be a modal. On mobile if it navigates away,
	 * the original page would need to be "retained".
	 *
	 * @example
	 * The best place to inject library is the data module of capability that requires MFA
	 * // index.js
	 * ///////////
	 * // Import lib-bb-challenge-ng
	 * import bbChallengeModuleKey, {
	 *   bbChallengeKey,
	 * } from 'lib-bb-challenge-ng';
	 *
	 * // Inject it in your data module
	 * export default angular
	 *   .module(moduleKey, [
	 *     cXPAuthenticationDataModuleKey,
	 *     ...
	 *     bbChallengeModuleKey,
	 *   ])
	 *   .provider(cXPAuthenticationDataKey, [() => {
	 *     ...
	 *     return {
	 *       $get: [
	 *         bbChallengeKey,
	 *         // Into
	 *         cXPAuthenticationData,
	 *       ],
	 *     }
	 *   }])
	 *   .config(['$httpProvider', ($httpProvider) => {
	 *     // Configure $http service to use challenge interceptor
	 *     $httpProvider.interceptors.push(bbChallengeKey);
	 *   }])
	 */
	var moduleKey = 'lib-bb-challenge-ng';
	
	/**
	 * The dependency injection key for the BbChallenge Service
	 * @name bbChallengeKey
	 * @type {string}
	 */
	var bbChallengeKey = exports.bbChallengeKey = moduleKey + ':challenge';
	
	/**
	 * @name default
	 * @type {string}
	 * @description Angular module name
	 */
	exports.default = _vendorBbAngular2.default.module(moduleKey, [_libBbIntentNg2.default])
	/**
	 * A provider that allows configuration of the challenge type/intent key map.
	 *
	 * @name BbChallengeProvider
	 * @ngkey lib-bb-challenge-ng:challengeProvider
	 * @type {object}
	 * @example
	 * // General usage:
	 * angular.module(...)
	 *   .config([
	 *     `${bbChallengeKey}Provider`,
	 *     (challengeProvider) => {
	 *       challengeProvider.setChallengeToIntent(...);
	 *     }
	 *   ]);
	 *
	 * export default [
	 *   ['lib-bb-challenge-ng:challengeProvider', (challenges) => {
	 *       challenges.setChallengeToIntent({sms: 'some.intent'});
	 *   }],
	 * ];
	 */
	.provider(bbChallengeKey, function () {
	  var challengeToIntent = _configuration2.default;
	  return {
	    /**
	     * @name BbChallengeProvider#setChallengeToIntent
	     * @type {function}
	     * @param {object.<string>} routes A map of challenge types to intent keys
	     */
	    setChallengeToIntent: function setChallengeToIntent(challengeToIntentObject) {
	      if (!!challengeToIntentObject && challengeToIntentObject.constructor === Object) {
	        challengeToIntent = Object.assign(_configuration2.default, challengeToIntentObject);
	      }
	    },
	
	    /**
	     * @name BbChallengeProvider#$get
	     * @type {function}
	     * @returns {function} Challenge service
	     */
	    $get: [_libBbIntentNg.bbIntentKey, '$injector', '$q', function (bbIntent, $injector, $q) {
	      return (0, _interceptors2.default)(bbIntent, $injector, $q, challengeToIntent);
	    }]
	  };
	}).name;

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
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _utils = __webpack_require__(5);
	
	var _utils2 = _interopRequireDefault(_utils);
	
	var _constans = __webpack_require__(6);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	exports.default = function (bbIntent, $injector, $q, challengeToIntent) {
	  var intents = {};
	  var noop = function noop() {};
	
	  var resolveIntent = noop;
	  // create all the intents upfront
	  Object.keys(challengeToIntent).forEach(function (key) {
	    var intentKey = challengeToIntent[key];
	
	    intents[intentKey] = bbIntent.create(intentKey, function (intentResponse) {
	      resolveIntent(intentResponse);
	    });
	  });
	
	  var interceptor = {
	    responseError: function responseError(_response) {
	      var response = _response;
	      var status = response.status;
	      var header = response.headers(_constans.challengeResponse.HEADER_ATTRIBUTE) || response.config.headers[_constans.challengeResponse.HEADER_ATTRIBUTE];
	      var $http = $injector.get('$http');
	
	      if (!_utils2.default.isChallengeResponse(status, header)) {
	        return $q.reject(response);
	      }
	
	      return new Promise(function (newResolve) {
	        var intentKey = challengeToIntent[_utils2.default.getChallengeTypeKey(header)];
	        resolveIntent = newResolve;
	        intents[intentKey](_utils2.default.parseChallengeHeader(header));
	      }).then(function (intentResponse) {
	        var headerResult = _utils2.default.processChallengeResponse(intentResponse);
	        var customHeaders = _defineProperty({}, _constans.challengeRequest.HEADER_ATTRIBUTE, headerResult);
	        delete response.config.headers[_constans.challengeResponse.HEADER_ATTRIBUTE];
	
	        Object.assign(response.config.headers, customHeaders);
	        resolveIntent = noop;
	      }).then(function () {
	        return $http(response.config);
	      });
	    }
	  };
	
	  return interceptor;
	};

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();
	
	var _constans = __webpack_require__(6);
	
	var getChallengeTypeKey = function getChallengeTypeKey(challengeType) {
	  return challengeType.split(' ')[0];
	};
	
	var isChallengeStatus = function isChallengeStatus(responseStatus) {
	  return responseStatus === _constans.challengeResponse.STATUS_CODE;
	};
	
	var isChallengeResponse = function isChallengeResponse(status, header) {
	  return Boolean(isChallengeStatus(status) && header);
	};
	
	var processChallengeResponse = function processChallengeResponse(response) {
	  return Object.entries(response).map(function (_ref) {
	    var _ref2 = _slicedToArray(_ref, 2),
	        key = _ref2[0],
	        value = _ref2[1];
	
	    if (typeof value === 'string') {
	      return key + '="' + value + '"';
	    }
	    return key + '=' + value;
	  }).join(', ');
	};
	
	var parseChallengeHeader = function parseChallengeHeader(header) {
	  var result = [];
	  var QUOTE = '"';
	  var DELIMITER = ',';
	  var KEY_VALUE_SEPARATOR = '=';
	
	  var next = header;
	  var keyLen = void 0;
	  var key = void 0;
	  var value = void 0;
	  var valueLen = void 0;
	  var valueIndex = void 0;
	  while (next.length > 0) {
	    keyLen = next.indexOf(KEY_VALUE_SEPARATOR);
	    if (keyLen === -1) {
	      keyLen = 0;
	    }
	    key = next.substring(0, keyLen).trim();
	    next = next.substring(keyLen + 1);
	
	    value = null;
	    valueLen = 0;
	    valueIndex = 0;
	    if (next[0] === QUOTE) {
	      // Value is a string
	      do {
	        valueIndex++;
	        if (valueIndex > next.length) {
	          throw new Error('Malformed attribute value');
	        }
	
	        if (next[valueIndex] === QUOTE) {
	          if (next[valueIndex - 1] !== '\\') {
	            valueLen = valueIndex + 1;
	            value = next.substring(0, valueLen);
	          }
	        }
	      } while (!value);
	    } else {
	      // Value is a token
	      valueLen = next.indexOf(DELIMITER);
	      value = next.substring(valueIndex, valueLen).trim();
	    }
	    next = next.substring(valueLen + 1);
	    result.push('"' + key + '": ' + value);
	  }
	
	  return JSON.parse('{' + result.join(',') + '}');
	};
	exports.default = {
	  getChallengeTypeKey: getChallengeTypeKey,
	  parseChallengeHeader: parseChallengeHeader,
	  isChallengeResponse: isChallengeResponse,
	  processChallengeResponse: processChallengeResponse
	};

/***/ }),
/* 6 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var challengeResponse = exports.challengeResponse = {
	  STATUS_CODE: 401,
	  HEADER_ATTRIBUTE: 'WWW-Authenticate'
	};
	
	var challengeRequest = exports.challengeRequest = {
	  HEADER_ATTRIBUTE: 'X-MFA'
	};

/***/ }),
/* 7 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * @name challengeToIntentConf
	 * @type {object}
	 *
	 * Challenge type to intent key map
	 * It can be customized in config-bb-providers
	 *
	 * export default [
	 *   ['lib-bb-challenge-ng:challengeProvider', (challenges) => {
	 *       challenges.setChallengeToIntent({sms: 'some.intent'});
	 *   }],
	 * ];
	 */
	exports.default = {
	  sms: 'sms.auth.step'
	};

/***/ })
/******/ ])
});
;
//# sourceMappingURL=lib-bb-challenge-ng.js.map