(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vendor-bb-angular"));
	else if(typeof define === 'function' && define.amd)
		define("data-bb-action-recipes-http-ng", ["vendor-bb-angular"], factory);
	else if(typeof exports === 'object')
		exports["data-bb-action-recipes-http-ng"] = factory(require("vendor-bb-angular"));
	else
		root["data-bb-action-recipes-http-ng"] = factory(root["vendor-bb-angular"]);
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
	exports.actionRecipesDataKey = undefined;
	
	var _vendorBbAngular = __webpack_require__(2);
	
	var _vendorBbAngular2 = _interopRequireDefault(_vendorBbAngular);
	
	var _dataBbActionRecipesHttp = __webpack_require__(3);
	
	var _dataBbActionRecipesHttp2 = _interopRequireDefault(_dataBbActionRecipesHttp);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * @module data-bb-action-recipes-http-ng
	 *
	 * @description A data module for accessing the Action Recipes REST API.
	 *
	 * @returns {String} `data-bb-action-recipes-http-ng`
	 * @example
	 * import actionRecipesDataModuleKey, {
	 *   actionRecipesDataKey,
	 * } from 'data-bb-action-recipes-http-ng';
	 */
	
	var actionRecipesDataModuleKey = 'data-bb-action-recipes-http-ng';
	/**
	 * @name actionRecipesDataKey
	 * @type {string}
	 * @description Angular dependency injection key for the ActionRecipesData service
	 */
	var actionRecipesDataKey = exports.actionRecipesDataKey = 'data-bb-action-recipes-http-ng:actionRecipesData';
	/**
	 * @name default
	 * @type {string}
	 * @description Angular dependency injection module key
	 */
	exports.default = _vendorBbAngular2.default.module(actionRecipesDataModuleKey, [])
	
	/**
	 * @constructor ActionRecipesData
	 * @type {object}
	 *
	 * @description Public api for data-bb-action-recipes-http-ng service
	 *
	 */
	.provider(actionRecipesDataKey, [function () {
	  var config = {
	    baseUri: '/'
	  };
	
	  /**
	   * @name ActionRecipesDataProvider
	   * @type {object}
	   * @ngkey data-bb-action-recipes-http-ng:actionRecipesDataProvider
	   * @description
	   * Data service that can be configured with custom base URI.
	   *
	   * @example
	   * // Configuring in an angular app:
	   * angular.module(...)
	   *   .config(['data-bb-action-recipes-http-ng:actionRecipesDataProvider',
	   *     (dataProvider) => {
	   *       dataProvider.setBaseUri('http://my-service.com/');
	   *       });
	   *
	   * // Configuring With config-bb-providers-ng:
	   * export default [
	   *   ['data-bb-action-recipes-http-ng:actionRecipesDataProvider', (dataProvider) => {
	   *       dataProvider.setBaseUri('http://my-service.com/');
	   *   }]
	   * ];
	   */
	  return {
	    /**
	     * @name ActionRecipesDataProvider#setBaseUri
	     * @type {function}
	     * @param {string} baseUri Base URI which will be the prefix for all HTTP requests
	     */
	    setBaseUri: function setBaseUri(baseUri) {
	      config.baseUri = baseUri;
	    },
	
	    /**
	     * @name ActionRecipesDataProvider#$get
	     * @type {function}
	     * @return {object} An instance of the service
	     */
	    $get: ['$http',
	    /* into */
	    (0, _dataBbActionRecipesHttp2.default)(config)]
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
	
	    definedTypes['ActionRecipesData.ActionRecipe'] = { "properties": { "id": { "type": "string", "required": true }, "name": { "type": "string", "required": true }, "specificationId": { "type": "string", "required": true }, "active": { "type": "boolean", "required": true }, "userId": { "type": "string", "required": false }, "trigger": { "type": "object", "properties": { "selectors": { "type": "array", "items": { "properties": { "path": { "type": "string", "required": false }, "value": { "type": "string", "required": false } } }, "required": false }, "filter": { "type": "object", "properties": {}, "required": false } }, "required": true }, "actions": { "type": "array", "items": { "properties": { "type": { "type": "string", "required": false }, "destination": { "type": "object", "properties": {}, "required": false } } }, "required": true } } };
	
	    definedTypes['ActionRecipesData.ActionRecipes'] = { "properties": { "actionRecipes": { "type": "array", "items": { "properties": { "id": { "type": "string", "required": true }, "name": { "type": "string", "required": true }, "specificationId": { "type": "string", "required": true }, "active": { "type": "boolean", "required": true }, "userId": { "type": "string", "required": false }, "trigger": { "type": "object", "properties": { "selectors": { "type": "array", "items": { "properties": { "path": { "type": "string", "required": false }, "value": { "type": "string", "required": false } } }, "required": false }, "filter": { "type": "object", "properties": {}, "required": false } }, "required": true }, "actions": { "type": "array", "items": { "properties": { "type": { "type": "string", "required": false }, "destination": { "type": "object", "properties": {}, "required": false } } }, "required": true } } }, "required": false } } };
	
	    definedTypes['ActionRecipesData.ActionRecipeSpecifications'] = { "properties": { "actionRecipeSpecifications": { "type": "array", "items": { "properties": { "id": { "type": "string", "required": false }, "name": { "type": "string", "required": false }, "type": { "type": "string", "required": false }, "userDefinable": { "type": "boolean", "required": false }, "triggerDefinition": { "type": "object", "properties": { "selectors": { "type": "array", "items": { "properties": { "path": { "type": "string", "required": false }, "type": { "type": "string", "required": false } } }, "required": false }, "filter": { "type": "array", "items": { "properties": { "path": { "type": "string", "required": false }, "type": { "type": "string", "required": false } } }, "required": false } }, "required": false }, "actions": { "type": "array", "items": { "properties": { "type": { "type": "string", "required": false }, "destination": { "type": "object", "properties": {}, "required": false }, "templateId": { "type": "string", "required": false } } }, "required": false } } }, "required": false } } };
	
	    definedTypes['ActionRecipesData.IdHolder'] = { "properties": { "id": { "type": "string", "required": false } } };
	
	    definedTypes['ActionRecipesData.NewActionRecipe'] = { "properties": { "name": { "type": "string", "required": true }, "specificationId": { "type": "string", "required": true }, "active": { "type": "boolean", "required": true }, "trigger": { "type": "object", "properties": { "selectors": { "type": "array", "items": { "properties": { "path": { "type": "string", "required": false }, "value": { "type": "string", "required": false } } }, "required": false }, "filter": { "type": "object", "properties": {}, "required": false } }, "required": true }, "actions": { "type": "array", "items": { "properties": { "type": { "type": "string", "required": false } } }, "required": true } } };
	
	    definedTypes['ActionRecipesData.UpdateActionRecipe'] = { "properties": { "name": { "type": "string", "required": true }, "specificationId": { "type": "string", "required": true }, "active": { "type": "boolean", "required": true }, "trigger": { "type": "object", "properties": { "selectors": { "type": "array", "items": { "properties": { "path": { "type": "string", "required": false }, "value": { "type": "string", "required": false } } }, "required": false }, "filter": { "type": "object", "properties": {}, "required": false } }, "required": false }, "actions": { "type": "array", "items": { "properties": { "type": { "type": "string", "required": false } } }, "required": false } } };
	
	    definedTypes['ActionRecipesData.Error'] = { "properties": { "message": { "type": "string", "required": true }, "errorCode": { "type": "string", "required": true } } };
	
	    /**
	     * @typedef ActionRecipesData.ActionRecipe
	     * @type {Object}
	     * @property {String} id
	     * @property {String} name
	     * @property {String} specificationId
	     * @property {Boolean} active
	     * @property {?String} userId
	     * @property {ActionRecipesData.ActionRecipe.trigger} trigger
	     * @property {Array.<ActionRecipesData.ActionRecipe.actions>} actions
	     */
	
	    /**
	     * @typedef ActionRecipesData.ActionRecipe.trigger
	     * @type {Object}
	     * @property {?Array.<ActionRecipesData.ActionRecipe.trigger.selectors>} selectors
	     * @property {?ActionRecipesData.ActionRecipe.trigger.filter} filter
	     */
	
	    /**
	     * @typedef ActionRecipesData.ActionRecipe.trigger.selectors
	     * @type {Object}
	     * @property {?String} path
	     * @property {?String} value
	     */
	
	    /**
	     * @typedef ActionRecipesData.ActionRecipe.actions
	     * @type {Object}
	     * @property {?String} type
	     * @property {?ActionRecipesData.ActionRecipe.actions.destination} destination
	     */
	
	    /**
	     * @typedef ActionRecipesData.ActionRecipes
	     * @type {Object}
	     * @property {?Array.<ActionRecipesData.ActionRecipes.actionRecipes>} actionRecipes
	     */
	
	    /**
	     * @typedef ActionRecipesData.ActionRecipes.actionRecipes
	     * @type {Object}
	     * @property {String} id
	     * @property {String} name
	     * @property {String} specificationId
	     * @property {Boolean} active
	     * @property {?String} userId
	     * @property {ActionRecipesData.ActionRecipes.actionRecipes.trigger} trigger
	     * @property {Array.<ActionRecipesData.ActionRecipes.actionRecipes.actions>} actions
	     */
	
	    /**
	     * @typedef ActionRecipesData.ActionRecipes.actionRecipes.trigger
	     * @type {Object}
	     * @property {?Array.<ActionRecipesData.ActionRecipes.actionRecipes.trigger.selectors>} selectors
	     * @property {?ActionRecipesData.ActionRecipes.actionRecipes.trigger.filter} filter
	     */
	
	    /**
	     * @typedef ActionRecipesData.ActionRecipes.actionRecipes.trigger.selectors
	     * @type {Object}
	     * @property {?String} path
	     * @property {?String} value
	     */
	
	    /**
	     * @typedef ActionRecipesData.ActionRecipes.actionRecipes.actions
	     * @type {Object}
	     * @property {?String} type
	     * @property {?ActionRecipesData.ActionRecipes.actionRecipes.actions.destination} destination
	     */
	
	    /**
	     * @typedef ActionRecipesData.ActionRecipeSpecifications
	     * @type {Object}
	     * @property {?Array.<ActionRecipesData.ActionRecipeSpecifications.actionRecipeSpecifications>} actionRecipeSpecifications
	     */
	
	    /**
	     * @typedef ActionRecipesData.ActionRecipeSpecifications.actionRecipeSpecifications
	     * @type {Object}
	     * @property {?String} id
	     * @property {?String} name
	     * @property {?String} type
	     * @property {?Boolean} userDefinable
	     * @property {?ActionRecipesData.ActionRecipeSpecifications.actionRecipeSpecifications.triggerDefinition} triggerDefinition
	     * @property {?Array.<ActionRecipesData.ActionRecipeSpecifications.actionRecipeSpecifications.actions>} actions
	     */
	
	    /**
	     * @typedef ActionRecipesData.ActionRecipeSpecifications.actionRecipeSpecifications.triggerDefinition
	     * @type {Object}
	     * @property {?Array.<ActionRecipesData.ActionRecipeSpecifications.actionRecipeSpecifications.triggerDefinition.selectors>} selectors
	     * @property {?Array.<ActionRecipesData.ActionRecipeSpecifications.actionRecipeSpecifications.triggerDefinition.filter>} filter
	     */
	
	    /**
	     * @typedef ActionRecipesData.ActionRecipeSpecifications.actionRecipeSpecifications.triggerDefinition.selectors
	     * @type {Object}
	     * @property {?String} path
	     * @property {?String} type
	     */
	
	    /**
	     * @typedef ActionRecipesData.ActionRecipeSpecifications.actionRecipeSpecifications.triggerDefinition.filter
	     * @type {Object}
	     * @property {?String} path
	     * @property {?String} type
	     */
	
	    /**
	     * @typedef ActionRecipesData.ActionRecipeSpecifications.actionRecipeSpecifications.actions
	     * @type {Object}
	     * @property {?String} type
	     * @property {?ActionRecipesData.ActionRecipeSpecifications.actionRecipeSpecifications.actions.destination} destination
	     * @property {?String} templateId
	     */
	
	    /**
	     * @typedef ActionRecipesData.IdHolder
	     * @type {Object}
	     * @property {?String} id
	     */
	
	    /**
	     * @typedef ActionRecipesData.NewActionRecipe
	     * @type {Object}
	     * @property {String} name
	     * @property {String} specificationId
	     * @property {Boolean} active
	     * @property {ActionRecipesData.NewActionRecipe.trigger} trigger
	     * @property {Array.<ActionRecipesData.NewActionRecipe.actions>} actions
	     */
	
	    /**
	     * @typedef ActionRecipesData.NewActionRecipe.trigger
	     * @type {Object}
	     * @property {?Array.<ActionRecipesData.NewActionRecipe.trigger.selectors>} selectors
	     * @property {?ActionRecipesData.NewActionRecipe.trigger.filter} filter
	     */
	
	    /**
	     * @typedef ActionRecipesData.NewActionRecipe.trigger.selectors
	     * @type {Object}
	     * @property {?String} path
	     * @property {?String} value
	     */
	
	    /**
	     * @typedef ActionRecipesData.NewActionRecipe.actions
	     * @type {Object}
	     * @property {?String} type
	     */
	
	    /**
	     * @typedef ActionRecipesData.UpdateActionRecipe
	     * @type {Object}
	     * @property {String} name
	     * @property {String} specificationId
	     * @property {Boolean} active
	     * @property {?ActionRecipesData.UpdateActionRecipe.trigger} trigger
	     * @property {?Array.<ActionRecipesData.UpdateActionRecipe.actions>} actions
	     */
	
	    /**
	     * @typedef ActionRecipesData.UpdateActionRecipe.trigger
	     * @type {Object}
	     * @property {?Array.<ActionRecipesData.UpdateActionRecipe.trigger.selectors>} selectors
	     * @property {?ActionRecipesData.UpdateActionRecipe.trigger.filter} filter
	     */
	
	    /**
	     * @typedef ActionRecipesData.UpdateActionRecipe.trigger.selectors
	     * @type {Object}
	     * @property {?String} path
	     * @property {?String} value
	     */
	
	    /**
	     * @typedef ActionRecipesData.UpdateActionRecipe.actions
	     * @type {Object}
	     * @property {?String} type
	     */
	
	    /**
	     * @typedef ActionRecipesData.Error
	     * @type {Object}
	     * @property {String} message
	     * @property {String} errorCode
	     */
	
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
	    * @name ActionRecipesData#getActionRecipeSpecifications
	    * @type {Function}
	    * @description get request - Returns data as ActionRecipesData.ActionRecipeSpecifications on success or ActionRecipesData.Error on error
	    
	    * @param {Object} params Map of query parameters.
	      
	    
	    * @returns {Promise.<Response>} A promise resolving to response object
	    *
	    * @example
	    * actionRecipesData
	    *  .getActionRecipeSpecifications(params)
	    *  .then(function(result){
	    *    console.log('headers', result.headers)
	    *    console.log('data', result.data);
	    *  });
	    */
	    function getActionRecipeSpecifications(params) {
	      var url = baseUri + '/' + version + '/action-recipe-specifications';
	
	      return httpClient({
	        method: 'GET',
	        url: url,
	
	        params: params
	
	      }).then(parse).catch(function (err) {
	        throw parse(err);
	      });
	    }
	
	    /**
	    * @name ActionRecipesData#getActionRecipes
	    * @type {Function}
	    * @description get request - Returns data as ActionRecipesData.ActionRecipes on success or ActionRecipesData.Error on error
	    
	    * @param {?Object} params Map of query parameters.
	      
	    * @param {?string} params.trigger trigger.
	      
	    * @param {?string} params.specificationId specificationId.
	      
	    * @param {?string} params.selectors selectors.
	      
	    * @param {?string} params.active active.
	      
	    
	    * @returns {Promise.<Response>} A promise resolving to response object
	    *
	    * @example
	    * actionRecipesData
	    *  .getActionRecipes(params)
	    *  .then(function(result){
	    *    console.log('headers', result.headers)
	    *    console.log('data', result.data);
	    *  });
	    */
	    function getActionRecipes(params) {
	      var url = baseUri + '/' + version + '/action-recipes';
	
	      return httpClient({
	        method: 'GET',
	        url: url,
	
	        params: params
	
	      }).then(parse).catch(function (err) {
	        throw parse(err);
	      });
	    }
	
	    /**
	    * @name ActionRecipesData#postActionRecipesRecord
	    * @type {Function}
	    * @description post request - Returns data as ActionRecipesData.IdHolder on success or ActionRecipesData.Error|ActionRecipesData.Error on error
	    
	    * @param {ActionRecipesData.NewActionRecipe} data Data to be sent as the request message data.
	      
	    
	    * @returns {Promise.<Response>} A promise resolving to response object
	    *
	    * @example
	    * actionRecipesData
	    *  .postActionRecipesRecord(data)
	    *  .then(function(result){
	    *    console.log('headers', result.headers)
	    *    console.log('data', result.data);
	    *  });
	    */
	    function postActionRecipesRecord(data) {
	      var url = baseUri + '/' + version + '/action-recipes';
	
	      return httpClient({
	        method: 'POST',
	        url: url,
	
	        data: data
	
	      }).then(parse).catch(function (err) {
	        throw parse(err);
	      });
	    }
	
	    /**
	    * @name ActionRecipesData#getActionRecipesRecord
	    * @type {Function}
	    * @description ActionRecipe - Returns data as ActionRecipesData.ActionRecipe on success or ActionRecipesData.Error|ActionRecipesData.Error on error
	    
	    * @param {string} recipeId 
	      
	    
	    * @param {Object} params Map of query parameters.
	      
	    
	    * @returns {Promise.<Response>} A promise resolving to response object
	    *
	    * @example
	    * actionRecipesData
	    *  .getActionRecipesRecord(recipeId, params)
	    *  .then(function(result){
	    *    console.log('headers', result.headers)
	    *    console.log('data', result.data);
	    *  });
	    */
	    function getActionRecipesRecord(recipeId, params) {
	      var url = baseUri + '/' + version + '/action-recipes/' + recipeId;
	
	      return httpClient({
	        method: 'GET',
	        url: url,
	
	        params: params
	
	      }).then(parse).catch(function (err) {
	        throw parse(err);
	      });
	    }
	
	    /**
	    * @name ActionRecipesData#putActionRecipesRecord
	    * @type {Function}
	    * @description put request - Returns data as ActionRecipesData.Error|ActionRecipesData.Error on error
	    
	    * @param {string} recipeId 
	      
	    
	    * @param {ActionRecipesData.UpdateActionRecipe} data Data to be sent as the request message data.
	      
	    
	    * @returns {Promise.<Response>} A promise resolving to response object
	    *
	    * @example
	    * actionRecipesData
	    *  .putActionRecipesRecord(recipeId, data)
	    *  .then(function(result){
	    *    console.log('headers', result.headers)
	    *    console.log('data', result.data);
	    *  });
	    */
	    function putActionRecipesRecord(recipeId, data) {
	      var url = baseUri + '/' + version + '/action-recipes/' + recipeId;
	
	      return httpClient({
	        method: 'PUT',
	        url: url,
	
	        data: data
	
	      }).then(parse).catch(function (err) {
	        throw parse(err);
	      });
	    }
	
	    /**
	    * @name ActionRecipesData#deleteActionRecipesRecord
	    * @type {Function}
	    * @description delete request - Returns data as ActionRecipesData.Error|ActionRecipesData.Error on error
	    
	    * @param {string} recipeId 
	      
	    
	    * @param {?Object} data Data to be sent as the request message data.
	      
	    
	    * @returns {Promise.<Response>} A promise resolving to response object
	    *
	    * @example
	    * actionRecipesData
	    *  .deleteActionRecipesRecord(recipeId, data)
	    *  .then(function(result){
	    *    console.log('headers', result.headers)
	    *    console.log('data', result.data);
	    *  });
	    */
	    function deleteActionRecipesRecord(recipeId, data) {
	      var url = baseUri + '/' + version + '/action-recipes/' + recipeId;
	
	      return httpClient({
	        method: 'DELETE',
	        url: url,
	
	        data: data
	
	      }).then(parse).catch(function (err) {
	        throw parse(err);
	      });
	    }
	
	    /**
	    * @name ActionRecipesData#postActionRecipesDeactivationRequestRecord
	    * @type {Function}
	    * @description post request - Returns data as ActionRecipesData.Error on error
	    
	    * @param {string} recipeId 
	      
	    
	    * @param {?Object} data Data to be sent as the request message data.
	      
	    
	    * @returns {Promise.<Response>} A promise resolving to response object
	    *
	    * @example
	    * actionRecipesData
	    *  .postActionRecipesDeactivationRequestRecord(recipeId, data)
	    *  .then(function(result){
	    *    console.log('headers', result.headers)
	    *    console.log('data', result.data);
	    *  });
	    */
	    function postActionRecipesDeactivationRequestRecord(recipeId, data) {
	      var url = baseUri + '/' + version + '/action-recipes/' + recipeId + '/deactivation-request';
	
	      return httpClient({
	        method: 'POST',
	        url: url,
	
	        data: data
	
	      }).then(parse).catch(function (err) {
	        throw parse(err);
	      });
	    }
	
	    /**
	    * @name ActionRecipesData#postActionRecipesActivationRequestRecord
	    * @type {Function}
	    * @description post request - Returns data as ActionRecipesData.Error on error
	    
	    * @param {string} recipeId 
	      
	    
	    * @param {?Object} data Data to be sent as the request message data.
	      
	    
	    * @returns {Promise.<Response>} A promise resolving to response object
	    *
	    * @example
	    * actionRecipesData
	    *  .postActionRecipesActivationRequestRecord(recipeId, data)
	    *  .then(function(result){
	    *    console.log('headers', result.headers)
	    *    console.log('data', result.data);
	    *  });
	    */
	    function postActionRecipesActivationRequestRecord(recipeId, data) {
	      var url = baseUri + '/' + version + '/action-recipes/' + recipeId + '/activation-request';
	
	      return httpClient({
	        method: 'POST',
	        url: url,
	
	        data: data
	
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
	     * @name ActionRecipesData#schemas
	     * @type {Object}
	     */
	    var schemas = {};
	
	    /**
	     * @description
	     * An object describing the JSON schema for the postActionRecipesRecord method
	     *
	     * @name ActionRecipesData#schemas.postActionRecipesRecord
	     * @type {Object}
	     * @example
	     * {
	    "properties": {
	      "name": {
	        "type": "string",
	        "required": true
	      },
	      "specificationId": {
	        "type": "string",
	        "required": true
	      },
	      "active": {
	        "type": "boolean",
	        "required": true
	      },
	      "trigger": {
	        "type": "object",
	        "properties": {
	          "selectors": {
	            "type": "array",
	            "items": {
	              "properties": {
	                "path": {
	                  "type": "string",
	                  "required": false
	                },
	                "value": {
	                  "type": "string",
	                  "required": false
	                }
	              }
	            },
	            "required": false
	          },
	          "filter": {
	            "type": "object",
	            "properties": {},
	            "required": false
	          }
	        },
	        "required": true
	      },
	      "actions": {
	        "type": "array",
	        "items": {
	          "properties": {
	            "type": {
	              "type": "string",
	              "required": false
	            }
	          }
	        },
	        "required": true
	      }
	    }
	    }
	     */
	
	    schemas.postActionRecipesRecord = definedTypes['ActionRecipesData.NewActionRecipe'];
	
	    /**
	     * @description
	     * An object describing the JSON schema for the putActionRecipesRecord method
	     *
	     * @name ActionRecipesData#schemas.putActionRecipesRecord
	     * @type {Object}
	     * @example
	     * {
	    "properties": {
	      "name": {
	        "type": "string",
	        "required": true
	      },
	      "specificationId": {
	        "type": "string",
	        "required": true
	      },
	      "active": {
	        "type": "boolean",
	        "required": true
	      },
	      "trigger": {
	        "type": "object",
	        "properties": {
	          "selectors": {
	            "type": "array",
	            "items": {
	              "properties": {
	                "path": {
	                  "type": "string",
	                  "required": false
	                },
	                "value": {
	                  "type": "string",
	                  "required": false
	                }
	              }
	            },
	            "required": false
	          },
	          "filter": {
	            "type": "object",
	            "properties": {},
	            "required": false
	          }
	        },
	        "required": false
	      },
	      "actions": {
	        "type": "array",
	        "items": {
	          "properties": {
	            "type": {
	              "type": "string",
	              "required": false
	            }
	          }
	        },
	        "required": false
	      }
	    }
	    }
	     */
	
	    schemas.putActionRecipesRecord = definedTypes['ActionRecipesData.UpdateActionRecipe'];
	
	    /**
	     * @typedef Response
	     * @type {Object}
	     * @property {Object} data See method descriptions for possible return types
	     * @property {Function} headers Getter headers function
	     * @property {Number} status HTTP status code of the response.
	     * @property {String} statusText HTTP status text of the response.
	     */
	
	    return {
	
	      getActionRecipeSpecifications: getActionRecipeSpecifications,
	
	      getActionRecipes: getActionRecipes,
	
	      postActionRecipesRecord: postActionRecipesRecord,
	
	      getActionRecipesRecord: getActionRecipesRecord,
	
	      putActionRecipesRecord: putActionRecipesRecord,
	
	      deleteActionRecipesRecord: deleteActionRecipesRecord,
	
	      postActionRecipesDeactivationRequestRecord: postActionRecipesDeactivationRequestRecord,
	
	      postActionRecipesActivationRequestRecord: postActionRecipesActivationRequestRecord,
	
	      schemas: schemas
	    };
	  };
	};

/***/ }
/******/ ])
});
;
//# sourceMappingURL=data-bb-action-recipes-http-ng.js.map