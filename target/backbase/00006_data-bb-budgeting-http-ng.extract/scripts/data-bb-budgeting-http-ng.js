(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vendor-bb-angular"));
	else if(typeof define === 'function' && define.amd)
		define("data-bb-budgeting-http-ng", ["vendor-bb-angular"], factory);
	else if(typeof exports === 'object')
		exports["data-bb-budgeting-http-ng"] = factory(require("vendor-bb-angular"));
	else
		root["data-bb-budgeting-http-ng"] = factory(root["vendor-bb-angular"]);
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
	exports.budgetingDataKey = undefined;
	
	var _vendorBbAngular = __webpack_require__(2);
	
	var _vendorBbAngular2 = _interopRequireDefault(_vendorBbAngular);
	
	var _dataBbBudgetingHttp = __webpack_require__(3);
	
	var _dataBbBudgetingHttp2 = _interopRequireDefault(_dataBbBudgetingHttp);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/* eslint-disable */
	/**
	 * @module data-bb-budgeting-http-ng
	 *
	 * @description A data module for accessing the Budgeting REST API.
	 *
	 * @returns {String} `data-bb-budgeting-http-ng`
	 * @example
	 * import budgetingDataModuleKey, {
	 *   budgetingDataKey,
	 * } from 'data-bb-budgeting-http-ng';
	 */
	
	var budgetingDataModuleKey = 'data-bb-budgeting-http-ng';
	/**
	 * @name budgetingDataKey
	 * @type {string}
	 * @description Angular dependency injection key for the BudgetingData service
	 */
	var budgetingDataKey = exports.budgetingDataKey = 'data-bb-budgeting-http-ng:budgetingData';
	/**
	 * @name default
	 * @type {string}
	 * @description Angular dependency injection module key
	 */
	exports.default = _vendorBbAngular2.default.module(budgetingDataModuleKey, [])
	
	/**
	 * @constructor BudgetingData
	 * @type {object}
	 *
	 * @description Public api for data-bb-budgeting-http-ng service
	 *
	 */
	.provider(budgetingDataKey, [function () {
	  var config = {
	    baseUri: '/'
	  };
	
	  /**
	   * @name BudgetingDataProvider
	   * @type {object}
	   * @ngkey data-bb-budgeting-http-ng:budgetingDataProvider
	   * @description
	   * Data service that can be configured with custom base URI.
	   *
	   * @example
	   * // Configuring in an angular app:
	   * angular.module(...)
	   *   .config(['data-bb-budgeting-http-ng:budgetingDataProvider',
	   *     (dataProvider) => {
	   *       dataProvider.setBaseUri('http://my-service.com/');
	   *       });
	   *
	   * // Configuring With config-bb-providers-ng:
	   * export default [
	   *   ['data-bb-budgeting-http-ng:budgetingDataProvider', (dataProvider) => {
	   *       dataProvider.setBaseUri('http://my-service.com/');
	   *   }]
	   * ];
	   */
	  return {
	    /**
	     * @name BudgetingDataProvider#setBaseUri
	     * @type {function}
	     * @param {string} baseUri Base URI which will be the prefix for all HTTP requests
	     */
	    setBaseUri: function setBaseUri(baseUri) {
	      config.baseUri = baseUri;
	    },
	
	    /**
	     * @name BudgetingDataProvider#$get
	     * @type {function}
	     * @return {object} An instance of the service
	     */
	    $get: ['$http', '$httpParamSerializer',
	    /* into */
	    (0, _dataBbBudgetingHttp2.default)(config)]
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
	  return function (httpClient, serializeParams) {
	    // Base param constants
	    var baseUri = conf.baseUri || '';
	
	    var version = 'v2';
	
	    /**
	     * The root defined types from the RAML.
	     * @private
	     */
	    var definedTypes = {};
	
	    definedTypes['BudgetingData.Budget-GET'] = { "properties": { "id": { "type": "string", "required": true }, "categoryName": { "type": "string", "enum": ["Home", "Health & Beauty", "Groceries", "Eating & Drinking", "Transportation", "Shopping", "Hobbies & Entertainment", "Bills & Utilities", "Income", "Other Income", "Savings", "Transfer", "Fees", "Other", "Uncategorized"], "required": true }, "budgetName": { "type": "string", "required": true }, "budgetIcon": { "type": "string", "required": false }, "spendingLimit": { "type": "object", "properties": { "amount": { "type": "string", "required": true }, "currencyCode": { "type": "string", "pattern": "^[A-Z]{3}$", "required": true } }, "required": true }, "spent": { "type": "object", "properties": { "amount": { "type": "string", "required": true }, "currencyCode": { "type": "string", "pattern": "^[A-Z]{3}$", "required": true } }, "required": false }, "spentPercentage": { "type": "number", "required": false }, "available": { "type": "object", "properties": { "amount": { "type": "string", "required": true }, "currencyCode": { "type": "string", "pattern": "^[A-Z]{3}$", "required": true } }, "required": false }, "period": { "required": false } } };
	
	    definedTypes['BudgetingData.Budget-UPDATE'] = { "properties": { "id": { "type": "string", "required": true }, "categoryName": { "type": "string", "enum": ["Home", "Health & Beauty", "Groceries", "Eating & Drinking", "Transportation", "Shopping", "Hobbies & Entertainment", "Bills & Utilities", "Income", "Other Income", "Savings", "Transfer", "Fees", "Other", "Uncategorized"], "required": true }, "budgetName": { "type": "string", "required": true }, "budgetIcon": { "type": "string", "required": false }, "spendingLimit": { "type": "object", "properties": { "amount": { "type": "string", "required": true }, "currencyCode": { "type": "string", "pattern": "^[A-Z]{3}$", "required": true } }, "required": true }, "spent": { "type": "object", "properties": { "amount": { "type": "string", "required": true }, "currencyCode": { "type": "string", "pattern": "^[A-Z]{3}$", "required": true } }, "required": false }, "spentPercentage": { "type": "number", "required": false }, "available": { "type": "object", "properties": { "amount": { "type": "string", "required": true }, "currencyCode": { "type": "string", "pattern": "^[A-Z]{3}$", "required": true } }, "required": false }, "period": { "required": false } } };
	
	    definedTypes['BudgetingData.Budget-POST'] = { "properties": { "categoryName": { "type": "string", "enum": ["Home", "Health & Beauty", "Groceries", "Eating & Drinking", "Transportation", "Shopping", "Hobbies & Entertainment", "Bills & Utilities", "Income", "Other Income", "Savings", "Transfer", "Fees", "Other", "Uncategorized"], "required": true }, "budgetName": { "type": "string", "required": true }, "budgetIcon": { "type": "string", "required": false }, "spendingLimit": { "type": "object", "properties": { "amount": { "type": "string", "required": true }, "currencyCode": { "type": "string", "pattern": "^[A-Z]{3}$", "required": true } }, "required": true }, "period": { "required": false } } };
	
	    definedTypes['BudgetingData.Budget-LIST'] = { "type": "array", "items": { "properties": { "id": { "type": "string", "required": true }, "categoryName": { "type": "string", "enum": ["Home", "Health & Beauty", "Groceries", "Eating & Drinking", "Transportation", "Shopping", "Hobbies & Entertainment", "Bills & Utilities", "Income", "Other Income", "Savings", "Transfer", "Fees", "Other", "Uncategorized"], "required": true }, "budgetName": { "type": "string", "required": true }, "budgetIcon": { "type": "string", "required": false }, "spendingLimit": { "type": "object", "properties": { "amount": { "type": "string", "required": true }, "currencyCode": { "type": "string", "pattern": "^[A-Z]{3}$", "required": true } }, "required": true }, "spent": { "type": "object", "properties": { "amount": { "type": "string", "required": true }, "currencyCode": { "type": "string", "pattern": "^[A-Z]{3}$", "required": true } }, "required": false }, "spentPercentage": { "type": "number", "required": false }, "available": { "type": "object", "properties": { "amount": { "type": "string", "required": true }, "currencyCode": { "type": "string", "pattern": "^[A-Z]{3}$", "required": true } }, "required": false }, "period": { "required": false } } } };
	
	    definedTypes['BudgetingData.Budget-BAD-REQUEST'] = { "properties": { "message": { "type": "string", "required": true } } };
	
	    definedTypes['BudgetingData.Budget-NOT-FOUND'] = { "properties": { "message": { "type": "string", "required": true } } };
	
	    definedTypes['BudgetingData.Budget-INTERNAL-SERVER-ERROR'] = { "properties": { "message": { "type": "string", "required": true } } };
	
	    definedTypes['BudgetingData.BudgetId'] = { "properties": { "id": { "type": "string", "required": true } } };
	
	    /**
	     * @typedef BudgetingData.Budget-BAD-REQUEST
	     * @type {Object}
	     * @property {String} message
	     * @property {?Object} additions Container object for custom API extensions
	     */
	
	    /**
	     * @typedef BudgetingData.Budget-GET
	     * @type {Object}
	     * @property {String} id Primary Key Internal Budget Id
	     * @property {String} categoryName One of "Home", "Health & Beauty", "Groceries", "Eating & Drinking", "Transportation", "Shopping", "Hobbies & Entertainment", "Bills & Utilities", "Income", "Other Income", "Savings", "Transfer", "Fees", "Other", "Uncategorized"
	     * @property {String} budgetName Budget name
	     * @property {?String} budgetIcon
	     * @property {BudgetingData.Currency} spendingLimit
	     * @property {?BudgetingData.Currency} spent
	     * @property {?Number} spentPercentage
	     * @property {?BudgetingData.Currency} available
	     * @property {?*} period
	     * @property {?Object} additions Container object for custom API extensions
	     */
	
	    /**
	     * @typedef BudgetingData.Budget-INTERNAL-SERVER-ERROR
	     * @type {Object}
	     * @property {String} message
	     * @property {?Object} additions Container object for custom API extensions
	     */
	
	    /**
	     * @typedef BudgetingData.Budget-LIST
	     * @type {Array.<BudgetingData.BudgetUPDATE>}
	     */
	
	    /**
	     * @typedef BudgetingData.Budget-NOT-FOUND
	     * @type {Object}
	     * @property {String} message
	     * @property {?Object} additions Container object for custom API extensions
	     */
	
	    /**
	     * @typedef BudgetingData.Budget-POST
	     * @type {Object}
	     * @property {String} categoryName One of "Home", "Health & Beauty", "Groceries", "Eating & Drinking", "Transportation", "Shopping", "Hobbies & Entertainment", "Bills & Utilities", "Income", "Other Income", "Savings", "Transfer", "Fees", "Other", "Uncategorized"
	     * @property {String} budgetName Specific code of the group the category type belongs to this to be mapped to in integration
	     * @property {?String} budgetIcon
	     * @property {BudgetingData.Currency} spendingLimit
	     * @property {?*} period
	     * @property {?Object} additions Container object for custom API extensions
	     */
	
	    /**
	     * @typedef BudgetingData.Budget-UPDATE
	     * @type {Object}
	     * @property {String} id Primary Key Internal Budget Id
	     * @property {String} categoryName One of "Home", "Health & Beauty", "Groceries", "Eating & Drinking", "Transportation", "Shopping", "Hobbies & Entertainment", "Bills & Utilities", "Income", "Other Income", "Savings", "Transfer", "Fees", "Other", "Uncategorized"
	     * @property {String} budgetName Budget name
	     * @property {?String} budgetIcon
	     * @property {BudgetingData.Currency} spendingLimit
	     * @property {?BudgetingData.Currency} spent
	     * @property {?Number} spentPercentage
	     * @property {?BudgetingData.Currency} available
	     * @property {?*} period
	     * @property {?Object} additions Container object for custom API extensions
	     */
	
	    /**
	     * @typedef BudgetingData.BudgetId
	     * @type {Object}
	     * @property {String} id Internally used unique identification
	     * @property {?Object} additions Container object for custom API extensions
	     */
	
	    /**
	     * @typedef BudgetingData.BudgetUPDATE
	     * @type {Object}
	     * @property {String} id Primary Key Internal Budget Id
	     * @property {String} categoryName One of "Home", "Health & Beauty", "Groceries", "Eating & Drinking", "Transportation", "Shopping", "Hobbies & Entertainment", "Bills & Utilities", "Income", "Other Income", "Savings", "Transfer", "Fees", "Other", "Uncategorized"
	     * @property {String} budgetName Budget name
	     * @property {?String} budgetIcon
	     * @property {BudgetingData.Currency} spendingLimit
	     * @property {?BudgetingData.Currency} spent
	     * @property {?Number} spentPercentage
	     * @property {?BudgetingData.Currency} available
	     * @property {?*} period
	     * @property {?Object} additions Container object for custom API extensions
	     */
	
	    /**
	     * @typedef BudgetingData.Currency
	     * @type {Object}
	     * @property {String} amount The amount in the specified currency
	     * @property {String} currencyCode The alpha-3 code (complying with ISO 4217) of the currency that qualifies the amount
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
	     * @name BudgetingData#postBudgetsRecord
	     * @type {Function}
	     * @description Create budget
	     
	     * @param {BudgetingData.Budget-POST} data Data to be sent as the request message data.
	       
	     
	     * @param {?Object} headers Map of custom header attributes.
	       
	     
	     * @returns {Promise.<Response>} Resolves data value as {@link BudgetingData.BudgetId} on success  or rejects with data of {@link BudgetingData.Budget-BAD-REQUEST}, {@link BudgetingData.Budget-INTERNAL-SERVER-ERROR} on error
	     *
	     * @example
	     * budgetingData
	     *  .postBudgetsRecord(data, headers)
	     *  .then(function(result){
	     *    console.log('headers', result.headers)
	     *    console.log('data', result.data);
	     *  });
	     */
	    function postBudgetsRecord(data, headers) {
	      var url = '' + baseUri + version + '/budgets';
	
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
	     * @name BudgetingData#getBudgets
	     * @type {Function}
	     * @description Retrieve list of budgets
	     
	     * @param {?Object} params Map of query parameters.
	       
	     * @param {?string} params.id Find by budgetId to which the category belong.
	       
	     * @param {?string} params.categoryName backbase specific category.
	       
	     * @param {?string} params.budgetName Budget name.
	       
	     
	     * @param {?Object} headers Map of custom header attributes.
	       
	     
	     * @returns {Promise.<Response>} Resolves data value as {@link BudgetingData.Budget-LIST} on success  or rejects with data of {@link BudgetingData.Budget-BAD-REQUEST}, {@link BudgetingData.Budget-NOT-FOUND}, {@link BudgetingData.Budget-INTERNAL-SERVER-ERROR} on error
	     *
	     * @example
	     * budgetingData
	     *  .getBudgets(params, headers)
	     *  .then(function(result){
	     *    console.log('headers', result.headers)
	     *    console.log('data', result.data);
	     *  });
	     */
	    function getBudgets(params, headers) {
	      var url = '' + baseUri + version + '/budgets';
	
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
	     * @name BudgetingData#deleteBudgetsRecord
	     * @type {Function}
	     * @description Delete budget by Id
	     
	     * @param {string} id 
	       
	     
	     * @param {?Object} data Data to be sent as the request message data.
	       
	     
	     * @param {?Object} headers Map of custom header attributes.
	       
	     
	     * @returns {Promise.<Response>} Resolves data value as void on success or rejects with data of {@link BudgetingData.Budget-BAD-REQUEST}, {@link BudgetingData.Budget-NOT-FOUND}, {@link BudgetingData.Budget-INTERNAL-SERVER-ERROR} on error
	     *
	     * @example
	     * budgetingData
	     *  .deleteBudgetsRecord(id, data, headers)
	     *  .then(function(result){
	     *    console.log('headers', result.headers)
	     *    console.log('data', result.data);
	     *  });
	     */
	    function deleteBudgetsRecord(id, data, headers) {
	      var url = '' + baseUri + version + '/budgets/' + id;
	
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
	     * @name BudgetingData#putBudgetsRecord
	     * @type {Function}
	     * @description Update budget by an Id
	     
	     * @param {string} id 
	       
	     
	     * @param {BudgetingData.Budget-UPDATE} data Data to be sent as the request message data.
	       
	     
	     * @param {?Object} headers Map of custom header attributes.
	       
	     
	     * @returns {Promise.<Response>} Resolves data value as void on success or rejects with data of {@link BudgetingData.Budget-BAD-REQUEST}, {@link BudgetingData.Budget-NOT-FOUND}, {@link BudgetingData.Budget-INTERNAL-SERVER-ERROR} on error
	     *
	     * @example
	     * budgetingData
	     *  .putBudgetsRecord(id, data, headers)
	     *  .then(function(result){
	     *    console.log('headers', result.headers)
	     *    console.log('data', result.data);
	     *  });
	     */
	    function putBudgetsRecord(id, data, headers) {
	      var url = '' + baseUri + version + '/budgets/' + id;
	
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
	     * @name BudgetingData#schemas
	     * @type {Object}
	     */
	    var schemas = {};
	
	    /**
	     * @description
	     * An object describing the JSON schema for the postBudgetsRecord method
	     *
	     * @name BudgetingData#schemas.postBudgetsRecord
	     * @type {Object}
	     * @example
	     * {
	    "properties": {
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
	      "budgetName": {
	        "type": "string",
	        "required": true
	      },
	      "budgetIcon": {
	        "type": "string",
	        "required": false
	      },
	      "spendingLimit": {
	        "type": "object",
	        "properties": {
	          "amount": {
	            "type": "string",
	            "required": true
	          },
	          "currencyCode": {
	            "type": "string",
	            "pattern": "^[A-Z]{3}$",
	            "required": true
	          }
	        },
	        "required": true
	      },
	      "period": {
	        "required": false
	      }
	    }
	    }
	     */
	
	    schemas.postBudgetsRecord = definedTypes['BudgetingData.Budget-POST'];
	
	    /**
	     * @description
	     * An object describing the JSON schema for the putBudgetsRecord method
	     *
	     * @name BudgetingData#schemas.putBudgetsRecord
	     * @type {Object}
	     * @example
	     * {
	    "properties": {
	      "id": {
	        "type": "string",
	        "required": true
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
	      "budgetName": {
	        "type": "string",
	        "required": true
	      },
	      "budgetIcon": {
	        "type": "string",
	        "required": false
	      },
	      "spendingLimit": {
	        "type": "object",
	        "properties": {
	          "amount": {
	            "type": "string",
	            "required": true
	          },
	          "currencyCode": {
	            "type": "string",
	            "pattern": "^[A-Z]{3}$",
	            "required": true
	          }
	        },
	        "required": true
	      },
	      "spent": {
	        "type": "object",
	        "properties": {
	          "amount": {
	            "type": "string",
	            "required": true
	          },
	          "currencyCode": {
	            "type": "string",
	            "pattern": "^[A-Z]{3}$",
	            "required": true
	          }
	        },
	        "required": false
	      },
	      "spentPercentage": {
	        "type": "number",
	        "required": false
	      },
	      "available": {
	        "type": "object",
	        "properties": {
	          "amount": {
	            "type": "string",
	            "required": true
	          },
	          "currencyCode": {
	            "type": "string",
	            "pattern": "^[A-Z]{3}$",
	            "required": true
	          }
	        },
	        "required": false
	      },
	      "period": {
	        "required": false
	      }
	    }
	    }
	     */
	
	    schemas.putBudgetsRecord = definedTypes['BudgetingData.Budget-UPDATE'];
	
	    /**
	     * @typedef Response
	     * @type {Object}
	     * @property {Object} data See method descriptions for possible return types
	     * @property {Function} headers Getter headers function
	     * @property {Number} status HTTP status code of the response.
	     * @property {String} statusText HTTP status text of the response.
	     */
	
	    return {
	
	      postBudgetsRecord: postBudgetsRecord,
	
	      getBudgets: getBudgets,
	
	      deleteBudgetsRecord: deleteBudgetsRecord,
	
	      putBudgetsRecord: putBudgetsRecord,
	
	      schemas: schemas
	    };
	  };
	};

/***/ })
/******/ ])
});
;
//# sourceMappingURL=data-bb-budgeting-http-ng.js.map