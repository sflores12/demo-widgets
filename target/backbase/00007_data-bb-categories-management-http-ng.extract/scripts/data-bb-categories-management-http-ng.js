(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vendor-bb-angular"));
	else if(typeof define === 'function' && define.amd)
		define("data-bb-categories-management-http-ng", ["vendor-bb-angular"], factory);
	else if(typeof exports === 'object')
		exports["data-bb-categories-management-http-ng"] = factory(require("vendor-bb-angular"));
	else
		root["data-bb-categories-management-http-ng"] = factory(root["vendor-bb-angular"]);
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
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.categoriesManagementDataKey = undefined;
	
	var _vendorBbAngular = __webpack_require__(2);
	
	var _vendorBbAngular2 = _interopRequireDefault(_vendorBbAngular);
	
	var _dataBbCategoriesManagementHttp = __webpack_require__(3);
	
	var _dataBbCategoriesManagementHttp2 = _interopRequireDefault(_dataBbCategoriesManagementHttp);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/* eslint-disable */
	/**
	 * @module data-bb-categories-management-http-ng
	 *
	 * @description A data module for accessing the Categories Management REST API.
	 *
	 * @returns {String} `data-bb-categories-management-http-ng`
	 * @example
	 * import categoriesManagementDataModuleKey, {
	 *   categoriesManagementDataKey,
	 * } from 'data-bb-categories-management-http-ng';
	 */
	
	var categoriesManagementDataModuleKey = 'data-bb-categories-management-http-ng';
	/**
	 * @name categoriesManagementDataKey
	 * @type {string}
	 * @description Angular dependency injection key for the CategoriesManagementData service
	 */
	var categoriesManagementDataKey = exports.categoriesManagementDataKey = 'data-bb-categories-management-http-ng:categoriesManagementData';
	/**
	 * @name default
	 * @type {string}
	 * @description Angular dependency injection module key
	 */
	exports.default = _vendorBbAngular2.default.module(categoriesManagementDataModuleKey, [])
	
	/**
	 * @constructor CategoriesManagementData
	 * @type {object}
	 *
	 * @description Public api for data-bb-categories-management-http-ng service
	 *
	 */
	.provider(categoriesManagementDataKey, [function () {
	  var config = {
	    baseUri: '/'
	  };
	
	  /**
	   * @name CategoriesManagementDataProvider
	   * @type {object}
	   * @ngkey data-bb-categories-management-http-ng:categoriesManagementDataProvider
	   * @description
	   * Data service that can be configured with custom base URI.
	   *
	   * @example
	   * // Configuring in an angular app:
	   * angular.module(...)
	   *   .config(['data-bb-categories-management-http-ng:categoriesManagementDataProvider',
	   *     (dataProvider) => {
	   *       dataProvider.setBaseUri('http://my-service.com/');
	   *       });
	   *
	   * // Configuring With config-bb-providers-ng:
	   * export default [
	   *   ['data-bb-categories-management-http-ng:categoriesManagementDataProvider', (dataProvider) => {
	   *       dataProvider.setBaseUri('http://my-service.com/');
	   *   }]
	   * ];
	   */
	  return {
	    /**
	     * @name CategoriesManagementDataProvider#setBaseUri
	     * @type {function}
	     * @param {string} baseUri Base URI which will be the prefix for all HTTP requests
	     */
	    setBaseUri: function setBaseUri(baseUri) {
	      config.baseUri = baseUri;
	    },
	
	    /**
	     * @name CategoriesManagementDataProvider#$get
	     * @type {function}
	     * @return {object} An instance of the service
	     */
	    $get: ['$http',
	    /* into */
	    (0, _dataBbCategoriesManagementHttp2.default)(config)]
	  };
	}]).name;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ }),
/* 3 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	/* eslint-disable */
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
	
	    definedTypes['CategoriesManagementData.Category-UPDATE'] = { "properties": { "categoryId": { "type": "integer", "required": true }, "transactionId": { "type": "string", "required": false }, "categoryName": { "type": "string", "enum": ["Home", "Health & Beauty", "Groceries", "Eating & Drinking", "Transportation", "Shopping", "Hobbies & Entertainment", "Bills & Utilities", "Income", "Other Income", "Savings", "Transfer", "Fees", "Other", "Uncategorized"], "required": true }, "iconLocation": { "type": "string", "required": false }, "categoryType": { "type": "string", "enum": ["Expenses", "Income", "Transfer", "Deferred Compensation", "General"], "required": true }, "subCategoryName": { "type": "string", "required": false } } };
	
	    definedTypes['CategoriesManagementData.Category-ITEM'] = { "properties": { "categoryId": { "type": "integer", "required": true }, "transactionId": { "type": "string", "required": false }, "categoryName": { "type": "string", "enum": ["Home", "Health & Beauty", "Groceries", "Eating & Drinking", "Transportation", "Shopping", "Hobbies & Entertainment", "Bills & Utilities", "Income", "Other Income", "Savings", "Transfer", "Fees", "Other", "Uncategorized"], "required": true }, "iconLocation": { "type": "string", "required": false }, "categoryType": { "type": "string", "enum": ["Expenses", "Income", "Transfer", "Deferred Compensation", "General"], "required": true }, "subCategoryName": { "type": "string", "required": false } } };
	
	    definedTypes['CategoriesManagementData.Category-LIST'] = { "type": "array", "items": { "properties": { "categoryId": { "type": "integer", "required": true }, "transactionId": { "type": "string", "required": false }, "categoryName": { "type": "string", "enum": ["Home", "Health & Beauty", "Groceries", "Eating & Drinking", "Transportation", "Shopping", "Hobbies & Entertainment", "Bills & Utilities", "Income", "Other Income", "Savings", "Transfer", "Fees", "Other", "Uncategorized"], "required": true }, "iconLocation": { "type": "string", "required": false }, "categoryType": { "type": "string", "enum": ["Expenses", "Income", "Transfer", "Deferred Compensation", "General"], "required": true }, "subCategoryName": { "type": "string", "required": false } } } };
	
	    definedTypes['CategoriesManagementData.Category-BAD-REQUEST'] = { "properties": { "message": { "type": "string", "required": true } } };
	
	    definedTypes['CategoriesManagementData.Category-INTERNAL-SERVER-ERROR'] = { "properties": { "message": { "type": "string", "required": true } } };
	
	    definedTypes['CategoriesManagementData.Category-NOT-FOUND'] = { "properties": { "message": { "type": "string", "required": true } } };
	
	    definedTypes['CategoriesManagementData.CategoryId'] = { "properties": { "id": { "type": "integer", "required": true } } };
	
	    /**
	     * @typedef CategoriesManagementData.Category-BAD-REQUEST
	     * @type {Object}
	     * @property {String} message
	     * @property {?Object} additions Container object for custom API extensions
	     */
	
	    /**
	     * @typedef CategoriesManagementData.Category-INTERNAL-SERVER-ERROR
	     * @type {Object}
	     * @property {String} message
	     * @property {?Object} additions Container object for custom API extensions
	     */
	
	    /**
	     * @typedef CategoriesManagementData.Category-ITEM
	     * @type {Object}
	     * @property {Integer} categoryId Primary Key Internal Category Id
	     * @property {?String} transactionId Internal transaction category, to be used when updating a specific category
	     * @property {String} categoryName One of "Home", "Health & Beauty", "Groceries", "Eating & Drinking", "Transportation", "Shopping", "Hobbies & Entertainment", "Bills & Utilities", "Income", "Other Income", "Savings", "Transfer", "Fees", "Other", "Uncategorized"
	     * @property {?String} iconLocation
	     * @property {String} categoryType One of "Expenses", "Income", "Transfer", "Deferred Compensation", "General"
	     * @property {?String} subCategoryName
	     * @property {?Object} additions Container object for custom API extensions
	     */
	
	    /**
	     * @typedef CategoriesManagementData.Category-LIST
	     * @type {Array.<CategoriesManagementData.CategoryITEM>}
	     */
	
	    /**
	     * @typedef CategoriesManagementData.Category-NOT-FOUND
	     * @type {Object}
	     * @property {String} message
	     * @property {?Object} additions Container object for custom API extensions
	     */
	
	    /**
	     * @typedef CategoriesManagementData.Category-UPDATE
	     * @type {Object}
	     * @property {Integer} categoryId Primary Key Internal Category Id
	     * @property {?String} transactionId Internal transaction category, to be used when updating a specific category
	     * @property {String} categoryName One of "Home", "Health & Beauty", "Groceries", "Eating & Drinking", "Transportation", "Shopping", "Hobbies & Entertainment", "Bills & Utilities", "Income", "Other Income", "Savings", "Transfer", "Fees", "Other", "Uncategorized"
	     * @property {?String} iconLocation
	     * @property {String} categoryType One of "Expenses", "Income", "Transfer", "Deferred Compensation", "General"
	     * @property {?String} subCategoryName
	     * @property {?Object} additions Container object for custom API extensions
	     */
	
	    /**
	     * @typedef CategoriesManagementData.CategoryITEM
	     * @type {Object}
	     * @property {Integer} categoryId Primary Key Internal Category Id
	     * @property {?String} transactionId Internal transaction category, to be used when updating a specific category
	     * @property {String} categoryName One of "Home", "Health & Beauty", "Groceries", "Eating & Drinking", "Transportation", "Shopping", "Hobbies & Entertainment", "Bills & Utilities", "Income", "Other Income", "Savings", "Transfer", "Fees", "Other", "Uncategorized"
	     * @property {?String} iconLocation
	     * @property {String} categoryType One of "Expenses", "Income", "Transfer", "Deferred Compensation", "General"
	     * @property {?String} subCategoryName
	     * @property {?Object} additions Container object for custom API extensions
	     */
	
	    /**
	     * @typedef CategoriesManagementData.CategoryId
	     * @type {Object}
	     * @property {Integer} id Internally used unique identification
	     * @property {?Object} additions Container object for custom API extensions
	     */
	
	    /*
	     * @name parse
	     * @type {Function}
	     * @private
	     * @description Should be overwritten by transformResponse on a project level
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
	    * @name CategoriesManagementData#postCategoriesRecord
	    * @type {Function}
	    * @description Create categories
	    
	    * @param {CategoriesManagementData.Category-ITEM} data Data to be sent as the request message data.
	      
	    
	    * @param {?Object} headers Map of custom header attributes.
	      
	    
	    * @returns {Promise.<Response>} Resolves data value as {@link CategoriesManagementData.CategoryId} on success  or rejects with data of {@link CategoriesManagementData.Category-BAD-REQUEST}, {@link CategoriesManagementData.Category-INTERNAL-SERVER-ERROR} on error
	    *
	    * @example
	    * categoriesManagementData
	    *  .postCategoriesRecord(data, headers)
	    *  .then(function(result){
	    *    console.log('headers', result.headers)
	    *    console.log('data', result.data);
	    *  });
	    */
	    function postCategoriesRecord(data, headers) {
	      var url = '' + baseUri + version + '/categories';
	
	      return httpClient({
	        method: 'POST',
	        url: url,
	
	        data: data || {},
	
	        headers: headers || {}
	      }).then(parse).catch(function (err) {
	        throw parse(err);
	      });
	    }
	
	    /**
	    * @name CategoriesManagementData#getCategories
	    * @type {Function}
	    * @description Retrieve list of categories
	    
	    * @param {?Object} params Map of query parameters.
	      
	    * @param {?string} params.categoryId Primary Key Internal Category Id.
	      
	    * @param {?string} params.categoryName backbase specific category.
	      
	    * @param {?string} params.categoryType Specific code of the group the category type belongs to this to be mapped to in integration.
	      
	    * @param {?string} params.subCategoryName subCategoryName.
	      
	    
	    * @param {?Object} headers Map of custom header attributes.
	      
	    
	    * @returns {Promise.<Response>} Resolves data value as {@link CategoriesManagementData.Category-LIST} on success  or rejects with data of {@link CategoriesManagementData.Category-BAD-REQUEST}, {@link CategoriesManagementData.Category-NOT-FOUND}, {@link CategoriesManagementData.Category-INTERNAL-SERVER-ERROR} on error
	    *
	    * @example
	    * categoriesManagementData
	    *  .getCategories(params, headers)
	    *  .then(function(result){
	    *    console.log('headers', result.headers)
	    *    console.log('data', result.data);
	    *  });
	    */
	    function getCategories(params, headers) {
	      var url = '' + baseUri + version + '/categories';
	
	      return httpClient({
	        method: 'GET',
	        url: url,
	
	        params: params || {},
	
	        headers: headers || {}
	      }).then(parse).catch(function (err) {
	        throw parse(err);
	      });
	    }
	
	    /**
	    * @name CategoriesManagementData#deleteCategoriesRecord
	    * @type {Function}
	    * @description Delete category by Id
	    
	    * @param {string} id 
	      
	    
	    * @param {?Object} data Data to be sent as the request message data.
	      
	    
	    * @param {?Object} headers Map of custom header attributes.
	      
	    
	    * @returns {Promise.<Response>} Resolves data value as void on success or rejects with data of {@link CategoriesManagementData.Category-BAD-REQUEST}, {@link CategoriesManagementData.Category-NOT-FOUND}, {@link CategoriesManagementData.Category-INTERNAL-SERVER-ERROR} on error
	    *
	    * @example
	    * categoriesManagementData
	    *  .deleteCategoriesRecord(id, data, headers)
	    *  .then(function(result){
	    *    console.log('headers', result.headers)
	    *    console.log('data', result.data);
	    *  });
	    */
	    function deleteCategoriesRecord(id, data, headers) {
	      var url = '' + baseUri + version + '/categories/' + id;
	
	      return httpClient({
	        method: 'DELETE',
	        url: url,
	
	        data: data || {},
	
	        headers: headers || {}
	      }).then(parse).catch(function (err) {
	        throw parse(err);
	      });
	    }
	
	    /**
	    * @name CategoriesManagementData#putCategoriesRecord
	    * @type {Function}
	    * @description Update category by an Id
	    
	    * @param {string} id 
	      
	    
	    * @param {CategoriesManagementData.Category-UPDATE} data Data to be sent as the request message data.
	      
	    
	    * @param {?Object} headers Map of custom header attributes.
	      
	    
	    * @returns {Promise.<Response>} Resolves data value as void on success or rejects with data of {@link CategoriesManagementData.Category-BAD-REQUEST}, {@link CategoriesManagementData.Category-NOT-FOUND}, {@link CategoriesManagementData.Category-INTERNAL-SERVER-ERROR} on error
	    *
	    * @example
	    * categoriesManagementData
	    *  .putCategoriesRecord(id, data, headers)
	    *  .then(function(result){
	    *    console.log('headers', result.headers)
	    *    console.log('data', result.data);
	    *  });
	    */
	    function putCategoriesRecord(id, data, headers) {
	      var url = '' + baseUri + version + '/categories/' + id;
	
	      return httpClient({
	        method: 'PUT',
	        url: url,
	
	        data: data || {},
	
	        headers: headers || {}
	      }).then(parse).catch(function (err) {
	        throw parse(err);
	      });
	    }
	
	    /**
	     * @description
	     * Schema data. Keys of the object are names of the POST and PUT methods
	     *
	     * Note: The schema is not strictly a JSON schema. It is a whitelisted set of
	     * keys for each object property. The keys that are exposed are meant for validation
	     * purposes.
	     *
	     * The full list of *possible* keys for each property is:
	     * type, minimum, maximum, minLength, maxLength, pattern, enum, format, default,
	     * properties, items, minItems, maxItems, uniqueItems and required.
	     *
	     * See http://json-schema.org/latest/json-schema-validation.html for more details
	     * on the meaning of these keys.
	     *
	     * The "required" array from JSON schema is tranformed into a "required" boolean
	     * on each property. This is for ease of use.
	     *
	     * @name CategoriesManagementData#schemas
	     * @type {Object}
	     */
	    var schemas = {};
	
	    /**
	     * @description
	     * An object describing the JSON schema for the postCategoriesRecord method
	     *
	     * @name CategoriesManagementData#schemas.postCategoriesRecord
	     * @type {Object}
	     * @example
	     * {
	    "properties": {
	      "categoryId": {
	        "type": "integer",
	        "required": true
	      },
	      "transactionId": {
	        "type": "string",
	        "required": false
	      },
	      "categoryName": {
	        "type": "string",
	        "enum": [
	          "Home",
	          "Health & Beauty",
	          "Groceries",
	          "Eating & Drinking",
	          "Transportation",
	          "Shopping",
	          "Hobbies & Entertainment",
	          "Bills & Utilities",
	          "Income",
	          "Other Income",
	          "Savings",
	          "Transfer",
	          "Fees",
	          "Other",
	          "Uncategorized"
	        ],
	        "required": true
	      },
	      "iconLocation": {
	        "type": "string",
	        "required": false
	      },
	      "categoryType": {
	        "type": "string",
	        "enum": [
	          "Expenses",
	          "Income",
	          "Transfer",
	          "Deferred Compensation",
	          "General"
	        ],
	        "required": true
	      },
	      "subCategoryName": {
	        "type": "string",
	        "required": false
	      }
	    }
	    }
	     */
	
	    schemas.postCategoriesRecord = definedTypes['CategoriesManagementData.Category-ITEM'];
	
	    /**
	     * @description
	     * An object describing the JSON schema for the putCategoriesRecord method
	     *
	     * @name CategoriesManagementData#schemas.putCategoriesRecord
	     * @type {Object}
	     * @example
	     * {
	    "properties": {
	      "categoryId": {
	        "type": "integer",
	        "required": true
	      },
	      "transactionId": {
	        "type": "string",
	        "required": false
	      },
	      "categoryName": {
	        "type": "string",
	        "enum": [
	          "Home",
	          "Health & Beauty",
	          "Groceries",
	          "Eating & Drinking",
	          "Transportation",
	          "Shopping",
	          "Hobbies & Entertainment",
	          "Bills & Utilities",
	          "Income",
	          "Other Income",
	          "Savings",
	          "Transfer",
	          "Fees",
	          "Other",
	          "Uncategorized"
	        ],
	        "required": true
	      },
	      "iconLocation": {
	        "type": "string",
	        "required": false
	      },
	      "categoryType": {
	        "type": "string",
	        "enum": [
	          "Expenses",
	          "Income",
	          "Transfer",
	          "Deferred Compensation",
	          "General"
	        ],
	        "required": true
	      },
	      "subCategoryName": {
	        "type": "string",
	        "required": false
	      }
	    }
	    }
	     */
	
	    schemas.putCategoriesRecord = definedTypes['CategoriesManagementData.Category-UPDATE'];
	
	    /**
	     * @typedef Response
	     * @type {Object}
	     * @property {Object} data See method descriptions for possible return types
	     * @property {Function} headers Getter headers function
	     * @property {Number} status HTTP status code of the response.
	     * @property {String} statusText HTTP status text of the response.
	     */
	
	    return {
	
	      postCategoriesRecord: postCategoriesRecord,
	
	      getCategories: getCategories,
	
	      deleteCategoriesRecord: deleteCategoriesRecord,
	
	      putCategoriesRecord: putCategoriesRecord,
	
	      schemas: schemas
	    };
	  };
	};

/***/ })
/******/ ])
});
;
//# sourceMappingURL=data-bb-categories-management-http-ng.js.map