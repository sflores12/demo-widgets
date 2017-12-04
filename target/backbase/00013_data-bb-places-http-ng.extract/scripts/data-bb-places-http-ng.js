(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vendor-bb-angular"));
	else if(typeof define === 'function' && define.amd)
		define("data-bb-places-http-ng", ["vendor-bb-angular"], factory);
	else if(typeof exports === 'object')
		exports["data-bb-places-http-ng"] = factory(require("vendor-bb-angular"));
	else
		root["data-bb-places-http-ng"] = factory(root["vendor-bb-angular"]);
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
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.placesDataKey = undefined;
	
	var _vendorBbAngular = __webpack_require__(2);
	
	var _vendorBbAngular2 = _interopRequireDefault(_vendorBbAngular);
	
	var _dataBbPlacesHttp = __webpack_require__(3);
	
	var _dataBbPlacesHttp2 = _interopRequireDefault(_dataBbPlacesHttp);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * @module data-bb-places-http-ng
	 *
	 * @description A data module for accessing the Places REST API.
	 *
	 * @returns {String} `data-bb-places-http-ng`
	 * @example
	 * import placesDataModuleKey, {
	 *   placesDataKey,
	 * } from 'data-bb-places-http-ng';
	 */
	
	var placesDataModuleKey = 'data-bb-places-http-ng';
	/**
	 * @name placesDataKey
	 * @type {string}
	 * @description Angular dependency injection key for the PlacesData service
	 */
	var placesDataKey = exports.placesDataKey = 'data-bb-places-http-ng:placesData';
	/**
	 * @name default
	 * @type {string}
	 * @description Angular dependency injection module key
	 */
	exports.default = _vendorBbAngular2.default.module(placesDataModuleKey, [])
	
	/**
	 * @constructor PlacesData
	 * @type {object}
	 *
	 * @description Public api for data-bb-places-http-ng service
	 *
	 */
	.provider(placesDataKey, [function () {
	  var config = {
	    baseUri: '/'
	  };
	
	  /**
	   * @name PlacesDataProvider
	   * @type {object}
	   * @ngkey data-bb-places-http-ng:placesDataProvider
	   * @description
	   * Data service that can be configured with custom base URI.
	   *
	   * @example
	   * // Configuring in an angular app:
	   * angular.module(...)
	   *   .config(['data-bb-places-http-ng:placesDataProvider',
	   *     (dataProvider) => {
	   *       dataProvider.setBaseUri('http://my-service.com/');
	   *       });
	   *
	   * // Configuring With config-bb-providers-ng:
	   * export default [
	   *   ['data-bb-places-http-ng:placesDataProvider', (dataProvider) => {
	   *       dataProvider.setBaseUri('http://my-service.com/');
	   *   }]
	   * ];
	   */
	  return {
	    /**
	     * @name PlacesDataProvider#setBaseUri
	     * @type {function}
	     * @param {string} baseUri Base URI which will be the prefix for all HTTP requests
	     */
	    setBaseUri: function setBaseUri(baseUri) {
	      config.baseUri = baseUri;
	    },
	
	    /**
	     * @name PlacesDataProvider#$get
	     * @type {function}
	     * @return {object} An instance of the service
	     */
	    $get: ['$http',
	    /* into */
	    (0, _dataBbPlacesHttp2.default)(config)]
	  };
	}]).name;

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ },
/* 3 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function (conf) {
	  return function (httpClient) {
	    // Base param constants
	    var baseUri = conf.baseUri || '';
	
	    var version = 'v2';
	
	    /**
	     * The root defined types from the RAML.
	     * @private
	     */
	    var definedTypes = {};
	
	    /*
	     * @name parse
	     * @type {Function}
	     * @private
	     * @description Should be overitten by transformRespone on a project level
	     */
	    function parse(res) {
	      return {
	        data: res.data,
	        headers: res.headers,
	        status: res.status,
	        statusText: res.statusText
	      };
	    }
	
	    /**
	    * @name PlacesData#getPlaces
	    * @type {Function}
	    * @description Retrieve list of all places.
	    
	    * @param {Object} params Map of query parameters.
	      
	    * @param {number} params.latitude Latitude for current location. Should be used with longitude and radius params to return places available in specified radius. Eg: 40.71558.
	      
	    * @param {number} params.longitude Longitude for current location. Should be used with latitude and radius params to return places available in specified radius. Eg: 39.91558.
	      
	    * @param {number} params.radius Search radius (distance in KM). Eg: 2.
	      
	    
	    * @returns {Promise.<Response>} A promise resolving to response object
	    *
	    * @example
	    * placesData
	    *  .getPlaces(params)
	    *  .then(function(result){
	    *    console.log('headers', result.headers)
	    *    console.log('data', result.data);
	    *  });
	    */
	    function getPlaces(params) {
	      var url = '' + baseUri + version + '/places';
	
	      return httpClient({
	        method: 'GET',
	        url: url,
	
	        params: params
	
	      }).then(parse).catch(function (err) {
	        throw parse(err);
	      });
	    }
	
	    var schemas = {};
	
	    /**
	     * @typedef Response
	     * @type {Object}
	     * @property {Object} data See method descriptions for possible return types
	     * @property {Function} headers Getter headers function
	     * @property {Number} status HTTP status code of the response.
	     * @property {String} statusText HTTP status text of the response.
	     */
	
	    return {
	
	      getPlaces: getPlaces,
	
	      schemas: schemas
	    };
	  };
	};

/***/ }
/******/ ])
});
;
//# sourceMappingURL=data-bb-places-http-ng.js.map