(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vendor-bb-angular"));
	else if(typeof define === 'function' && define.amd)
		define("data-bb-user-http-ng", ["vendor-bb-angular"], factory);
	else if(typeof exports === 'object')
		exports["data-bb-user-http-ng"] = factory(require("vendor-bb-angular"));
	else
		root["data-bb-user-http-ng"] = factory(root["vendor-bb-angular"]);
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
	exports.userDataKey = undefined;
	
	var _vendorBbAngular = __webpack_require__(2);
	
	var _vendorBbAngular2 = _interopRequireDefault(_vendorBbAngular);
	
	var _dataBbUserHttp = __webpack_require__(3);
	
	var _dataBbUserHttp2 = _interopRequireDefault(_dataBbUserHttp);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/* eslint-disable */
	/**
	 * @module data-bb-user-http-ng
	 *
	 * @description A data module for accessing the User REST API.
	 *
	 * @returns {String} `data-bb-user-http-ng`
	 * @example
	 * import userDataModuleKey, {
	 *   userDataKey,
	 * } from 'data-bb-user-http-ng';
	 */
	
	var userDataModuleKey = 'data-bb-user-http-ng';
	/**
	 * @name userDataKey
	 * @type {string}
	 * @description Angular dependency injection key for the UserData service
	 */
	var userDataKey = exports.userDataKey = 'data-bb-user-http-ng:userData';
	/**
	 * @name default
	 * @type {string}
	 * @description Angular dependency injection module key
	 */
	exports.default = _vendorBbAngular2.default.module(userDataModuleKey, [])
	
	/**
	 * @constructor UserData
	 * @type {object}
	 *
	 * @description Public api for data-bb-user-http-ng service
	 *
	 */
	.provider(userDataKey, [function () {
	  var config = {
	    baseUri: '/'
	  };
	
	  /**
	   * @name UserDataProvider
	   * @type {object}
	   * @ngkey data-bb-user-http-ng:userDataProvider
	   * @description
	   * Data service that can be configured with custom base URI.
	   *
	   * @example
	   * // Configuring in an angular app:
	   * angular.module(...)
	   *   .config(['data-bb-user-http-ng:userDataProvider',
	   *     (dataProvider) => {
	   *       dataProvider.setBaseUri('http://my-service.com/');
	   *       });
	   *
	   * // Configuring With config-bb-providers-ng:
	   * export default [
	   *   ['data-bb-user-http-ng:userDataProvider', (dataProvider) => {
	   *       dataProvider.setBaseUri('http://my-service.com/');
	   *   }]
	   * ];
	   */
	  return {
	    /**
	     * @name UserDataProvider#setBaseUri
	     * @type {function}
	     * @param {string} baseUri Base URI which will be the prefix for all HTTP requests
	     */
	    setBaseUri: function setBaseUri(baseUri) {
	      config.baseUri = baseUri;
	    },
	
	    /**
	     * @name UserDataProvider#$get
	     * @type {function}
	     * @return {object} An instance of the service
	     */
	    $get: ['$http', '$httpParamSerializer',
	    /* into */
	    (0, _dataBbUserHttp2.default)(config)]
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
	
	    definedTypes['UserData.UserItem'] = { "properties": { "externalId": { "type": "string", "minLength": 1, "maxLength": 255, "required": true }, "legalEntityId": { "type": "string", "minLength": 1, "maxLength": 255, "required": true }, "id": { "type": "string", "minLength": 1, "maxLength": 255, "required": false }, "imageAvatar": { "type": "string", "required": false }, "fullName": { "type": "string", "minLength": 1, "maxLength": 255, "required": false }, "firstName": { "type": "string", "minLength": 1, "maxLength": 255, "required": false }, "lastName": { "type": "string", "minLength": 1, "maxLength": 255, "required": false }, "dateOfBirth": { "type": "string", "pattern": "^[0-9]{2}-[0-9]{2}-[0-9]{4}$", "required": false }, "street": { "type": "string", "required": false }, "houseNumber": { "type": "string", "required": false }, "postalCode": { "type": "string", "required": false }, "area": { "type": "string", "required": false }, "city": { "type": "string", "required": false }, "citizenship": { "type": "string", "required": false }, "phone": { "type": "array", "items": { "properties": {} }, "required": false }, "email": { "type": "string", "required": false }, "lastLogin": { "type": "string", "format": "date-time", "required": false } } };
	
	    definedTypes['UserData.GetUsers'] = { "type": "array", "items": { "properties": { "externalId": { "type": "string", "minLength": 1, "maxLength": 255, "required": true }, "legalEntityId": { "type": "string", "minLength": 1, "maxLength": 255, "required": true }, "id": { "type": "string", "minLength": 1, "maxLength": 255, "required": false }, "imageAvatar": { "type": "string", "required": false }, "fullName": { "type": "string", "minLength": 1, "maxLength": 255, "required": false }, "firstName": { "type": "string", "minLength": 1, "maxLength": 255, "required": false }, "lastName": { "type": "string", "minLength": 1, "maxLength": 255, "required": false }, "dateOfBirth": { "type": "string", "pattern": "^[0-9]{2}-[0-9]{2}-[0-9]{4}$", "required": false }, "street": { "type": "string", "required": false }, "houseNumber": { "type": "string", "required": false }, "postalCode": { "type": "string", "required": false }, "area": { "type": "string", "required": false }, "city": { "type": "string", "required": false }, "citizenship": { "type": "string", "required": false }, "phone": { "type": "array", "items": { "properties": {} }, "required": false }, "email": { "type": "string", "required": false }, "lastLogin": { "type": "string", "format": "date-time", "required": false } } } };
	
	    definedTypes['UserData.GetLegalEntity'] = { "properties": { "id": { "type": "string", "minLength": 1, "maxLength": 255, "required": true }, "externalId": { "type": "string", "minLength": 1, "maxLength": 255, "required": true }, "name": { "type": "string", "minLength": 1, "maxLength": 255, "required": true }, "parentId": { "type": "string", "maxLength": 255, "required": false }, "isParent": { "type": "boolean", "default": false, "required": false } } };
	
	    definedTypes['UserData.GetLegalEntities'] = { "type": "array", "items": { "properties": { "id": { "type": "string", "minLength": 1, "maxLength": 255, "required": true }, "externalId": { "type": "string", "minLength": 1, "maxLength": 255, "required": true }, "name": { "type": "string", "minLength": 1, "maxLength": 255, "required": true }, "parentId": { "type": "string", "maxLength": 255, "required": false }, "isParent": { "type": "boolean", "default": false, "required": false } } } };
	
	    definedTypes['UserData.IdItem'] = { "properties": { "id": { "type": "string", "required": true } } };
	
	    definedTypes['UserData.UserCreateItem'] = { "properties": { "externalId": { "type": "string", "minLength": 1, "maxLength": 255, "pattern": "^\\S+$", "required": true }, "legalEntityExternalId": { "type": "string", "minLength": 1, "maxLength": 255, "pattern": "^\\S+$", "required": true }, "fullName": { "type": "string", "minLength": 1, "maxLength": 255, "pattern": "^\\S(.*(\\S))?$", "required": true } } };
	
	    definedTypes['UserData.EntitlementsAdminCreateItem'] = { "properties": { "externalId": { "type": "string", "minLength": 1, "maxLength": 255, "required": true }, "legalEntityExternalId": { "type": "string", "minLength": 1, "maxLength": 255, "required": true } } };
	
	    definedTypes['UserData.GetUsersByIds'] = { "properties": { "totalElements": { "type": "number", "required": true }, "users": { "type": "array", "items": { "properties": { "id": { "type": "string", "minLength": 1, "maxLength": 255, "required": true }, "externalId": { "type": "string", "minLength": 1, "maxLength": 255, "required": true }, "legalEntityId": { "type": "string", "minLength": 1, "maxLength": 255, "required": true }, "fullName": { "type": "string", "minLength": 1, "maxLength": 255, "required": true } } }, "required": true } } };
	
	    definedTypes['UserData.GetUsersByExternalIdsPostItem'] = { "properties": { "ids": { "type": "array", "items": { "properties": {} }, "minItems": 1, "uniqueItems": true, "required": false } } };
	
	    definedTypes['UserData.GetUsersByExternalIdsResponseItem'] = { "type": "array", "items": { "properties": { "id": { "type": "string", "minLength": 1, "maxLength": 255, "required": true }, "externalId": { "type": "string", "minLength": 1, "maxLength": 255, "required": true }, "legalEntityId": { "type": "string", "minLength": 1, "maxLength": 255, "required": true }, "fullName": { "type": "string", "minLength": 1, "maxLength": 255, "required": true } } } };
	
	    definedTypes['UserData.UsersProfileItem'] = { "properties": { "externalId": { "type": "string", "required": true }, "legalEntityId": { "type": "string", "required": true }, "id": { "type": "string", "required": false }, "imageAvatar": { "type": "string", "required": false }, "fullName": { "type": "string", "required": false }, "lastName": { "type": "string", "required": false }, "dateOfBirth": { "type": "string", "pattern": "^[0-9]{2}-[0-9]{2}-[0-9]{4}$", "required": false }, "street": { "type": "string", "required": false }, "houseNumber": { "type": "string", "required": false }, "postalCode": { "type": "string", "required": false }, "area": { "type": "string", "required": false }, "city": { "type": "string", "required": false }, "citizenship": { "type": "string", "required": false }, "phones": { "type": "array", "items": { "properties": {} }, "required": false }, "emails": { "type": "array", "items": { "properties": {} }, "required": false }, "lastLogin": { "type": "string", "format": "date-time", "required": false } } };
	
	    definedTypes['UserData.UsersProfileItems'] = { "type": "array", "items": { "properties": { "externalId": { "type": "string", "required": true }, "legalEntityId": { "type": "string", "required": true }, "id": { "type": "string", "required": false }, "imageAvatar": { "type": "string", "required": false }, "fullName": { "type": "string", "required": false }, "lastName": { "type": "string", "required": false }, "dateOfBirth": { "type": "string", "pattern": "^[0-9]{2}-[0-9]{2}-[0-9]{4}$", "required": false }, "street": { "type": "string", "required": false }, "houseNumber": { "type": "string", "required": false }, "postalCode": { "type": "string", "required": false }, "area": { "type": "string", "required": false }, "city": { "type": "string", "required": false }, "citizenship": { "type": "string", "required": false }, "phones": { "type": "array", "items": { "properties": {} }, "required": false }, "emails": { "type": "array", "items": { "properties": {} }, "required": false }, "lastLogin": { "type": "string", "format": "date-time", "required": false } } } };
	
	    definedTypes['UserData.UserProfileCreate'] = { "properties": { "externalId": { "type": "string", "minLength": 1, "pattern": "^\\S+$", "required": true }, "legalEntityExternalId": { "type": "string", "minLength": 1, "pattern": "^\\S+$", "required": true }, "firstName": { "type": "string", "minLength": 1, "pattern": "^\\S(.*(\\S))?$", "required": true } } };
	
	    /**
	     * @typedef UserData.EntitlementsAdminCreateItem
	     * @type {Object}
	     * @property {String} externalId
	     * @property {String} legalEntityExternalId
	     * @property {?Object} additions Container object for custom API extensions
	     */
	
	    /**
	     * @typedef UserData.GetLegalEntities
	     * @type {Array.<UserData.GetLegalEntity>}
	     */
	
	    /**
	     * @typedef UserData.GetLegalEntity
	     * @type {Object}
	     * @property {String} id
	     * @property {String} externalId
	     * @property {String} name
	     * @property {?String} parentId
	     * @property {?Boolean} isParent
	     * @property {?Object} additions Container object for custom API extensions
	     */
	
	    /**
	     * @typedef UserData.GetUsers
	     * @type {Array.<UserData.UserItem>}
	     */
	
	    /**
	     * @typedef UserData.GetUsersByExternalIdsPostItem
	     * @type {Object}
	     * @property {?Array.<String>} ids
	     * @property {?Object} additions Container object for custom API extensions
	     */
	
	    /**
	     * @typedef UserData.GetUsersByExternalIdsResponseItem
	     * @type {Array.<UserData.UserByIdsItem>}
	     */
	
	    /**
	     * @typedef UserData.GetUsersByIds
	     * @type {Object}
	     * @property {Number} totalElements total number of elements matching the query
	     * @property {Array.<UserData.UserByIdsItem>} users
	     * @property {?Object} additions Container object for custom API extensions
	     */
	
	    /**
	     * @typedef UserData.IdItem
	     * @type {Object}
	     * @property {String} id Internally used unique identification
	     * @property {?Object} additions Container object for custom API extensions
	     */
	
	    /**
	     * @typedef UserData.UserByIdsItem
	     * @type {Object}
	     * @property {String} id
	     * @property {String} externalId
	     * @property {String} legalEntityId
	     * @property {String} fullName
	     * @property {?Object} additions Container object for custom API extensions
	     */
	
	    /**
	     * @typedef UserData.UserCreateItem
	     * @type {Object}
	     * @property {String} externalId external Id of the user.
	     * @property {String} legalEntityExternalId Legal Entity Id of the user.
	     * @property {String} fullName Full name of the user.
	     * @property {?Object} additions Container object for custom API extensions
	     */
	
	    /**
	     * @typedef UserData.UserItem
	     * @type {Object}
	     * @property {String} externalId
	     * @property {String} legalEntityId
	     * @property {?String} id Internally used unique identification of the user.
	     * @property {?String} imageAvatar base64 encoded picture of the user.
	     * @property {?String} fullName The full name of a user.
	     * @property {?String} firstName The given name of a user.
	     * @property {?String} lastName The family name of a user.
	     * @property {?String} dateOfBirth The date the party was born in the format DD-MM-YYYY.
	     * @property {?String} street Optional part of the address specification.
	     * @property {?String} houseNumber Optional part of the address specifying the location in a street.
	     * @property {?String} postalCode Optional part of the address specification.
	     * @property {?String} area Optional part of the address specification.
	     * @property {?String} city Part of the address specification referring to the place.
	     * @property {?String} citizenship Reference to the country where the user is citizen of.
	     * @property {?Array.<String>} phone The number the user can be reached by.
	     * @property {?String} email The primary email address of the user.
	     * @property {?String} lastLogin Timestamp of the last user login.
	     * @property {?Object} additions Container object for custom API extensions
	     */
	
	    /**
	     * @typedef UserData.UserProfileCreate
	     * @type {Object}
	     * @property {String} externalId external Id of the user.
	     * @property {String} legalEntityExternalId Legal Entity Id of the user.
	     * @property {String} firstName First name of the user.
	     * @property {?Object} additions Container object for custom API extensions
	     */
	
	    /**
	     * @typedef UserData.UsersProfileItem
	     * @type {Object}
	     * @property {String} externalId
	     * @property {String} legalEntityId
	     * @property {?String} id Internally used unique identification of the user.
	     * @property {?String} imageAvatar base64 encoded picture of the user.
	     * @property {?String} fullName The given name of a user.
	     * @property {?String} lastName The family name of a user.
	     * @property {?String} dateOfBirth The date the party was born in the format DD-MM-YYYY.
	     * @property {?String} street Optional part of the address specification.
	     * @property {?String} houseNumber Optional part of the address specifying the location in a street.
	     * @property {?String} postalCode Optional part of the address specification.
	     * @property {?String} area Optional part of the address specification.
	     * @property {?String} city Part of the address specification referring to the place.
	     * @property {?String} citizenship Reference to the country where the user is citizen of.
	     * @property {?Array.<Object>} phones The phone numbers the user can be reached by.
	     * @property {?Array.<Object>} emails The email addresses of the user.
	     * @property {?String} lastLogin Timestamp of the last user login.
	     * @property {?Object} additions Container object for custom API extensions
	     */
	
	    /**
	     * @typedef UserData.UsersProfileItems
	     * @type {Array.<UserData.UsersProfileItem>}
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
	     * @name UserData#getUsers
	     * @type {Function}
	     * @description # Users list
	    Initial call to retrieve the list of enrolled Users that belong to a given Legal Entity.
	     
	     * @param {Object} params Map of query parameters.
	       
	     * @param {string} params.entityId Legal Entity ID. Eg: 1002.
	       
	     * @param {?string} params.query The search term used to search users. Eg: backb.
	       
	     * @param {?number} params.from Page Number. Skip over pages of elements by specifying a start value for the query. Eg: 0. (defaults to 0)
	       
	     * @param {?number} params.size Query parameter for pagination - number of records that will be shown on the page. Eg: 10. (defaults to 10)
	       
	     * @param {?string} params.cursor Cursor for pagination. Eg: 1. (defaults to "")
	       
	     
	     * @param {?Object} headers Map of custom header attributes.
	       
	     
	     * @returns {Promise.<Response>} Resolves data value as {@link UserData.GetUsers} on success 
	     *
	     * @example
	     * userData
	     *  .getUsers(params, headers)
	     *  .then(function(result){
	     *    console.log('headers', result.headers)
	     *    console.log('data', result.data);
	     *  });
	     */
	    function getUsers(params, headers) {
	      var url = '' + baseUri + version + '/users';
	
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
	     * @name UserData#postUsersRecord
	     * @type {Function}
	     * @description # Create user
	    Creates a new user that belongs to the given legal entity
	     
	     * @param {UserData.UserCreateItem} data Data to be sent as the request message data.
	       
	     
	     * @param {?Object} headers Map of custom header attributes.
	       
	     
	     * @returns {Promise.<Response>} Resolves data value as {@link UserData.IdItem} on success 
	     *
	     * @example
	     * userData
	     *  .postUsersRecord(data, headers)
	     *  .then(function(result){
	     *    console.log('headers', result.headers)
	     *    console.log('data', result.data);
	     *  });
	     */
	    function postUsersRecord(data, headers) {
	      var url = '' + baseUri + version + '/users';
	
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
	     * @name UserData#getUsersProfiles
	     * @type {Function}
	     * @description # Users profiles list
	    Initial call to retrieve the list of enrolled Users profiles that belong to a given Legal Entity.
	     
	     * @param {Object} params Map of query parameters.
	       
	     * @param {string} params.entityId Legal Entity ID. Eg: 1002.
	       
	     
	     * @param {?Object} headers Map of custom header attributes.
	       
	     
	     * @returns {Promise.<Response>} Resolves data value as {@link UserData.UsersProfileItems} on success 
	     *
	     * @example
	     * userData
	     *  .getUsersProfiles(params, headers)
	     *  .then(function(result){
	     *    console.log('headers', result.headers)
	     *    console.log('data', result.data);
	     *  });
	     */
	    function getUsersProfiles(params, headers) {
	      var url = '' + baseUri + version + '/users/profiles';
	
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
	     * @name UserData#postUsersProfilesRecord
	     * @type {Function}
	     * @description # Create a user profile
	    Creates a new user profile that belongs to the given legal entity
	     
	     * @param {UserData.UserProfileCreate} data Data to be sent as the request message data.
	       
	     
	     * @param {?Object} headers Map of custom header attributes.
	       
	     
	     * @returns {Promise.<Response>} Resolves data value as {@link UserData.IdItem} on success 
	     *
	     * @example
	     * userData
	     *  .postUsersProfilesRecord(data, headers)
	     *  .then(function(result){
	     *    console.log('headers', result.headers)
	     *    console.log('data', result.data);
	     *  });
	     */
	    function postUsersProfilesRecord(data, headers) {
	      var url = '' + baseUri + version + '/users/profiles';
	
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
	     * @name UserData#getUsersBulk
	     * @type {Function}
	     * @description # Users By Ids
	    Initial call to retrieve the list of enrolled Users by Ids in the System that might belong to separate Legal Entities.
	     
	     * @param {Object} params Map of query parameters.
	       
	     * @param {string} params.id # Users By Ids
	    Initial call to retrieve the list of enrolled Users by Ids in the System that might belong to separate Legal Entities. Eg: 1,2,3,4.
	       
	     * @param {?string} params.query The search term used to search users. Eg: backb.
	       
	     * @param {?number} params.from Page Number. Skip over pages of elements by specifying a start value for the query. Eg: 0. (defaults to 0)
	       
	     * @param {?number} params.size Query parameter for pagination - number of records that will be shown on the page. Eg: 10. (defaults to 10)
	       
	     * @param {?string} params.cursor Cursor for pagination. Eg: 1. (defaults to "")
	       
	     
	     * @param {?Object} headers Map of custom header attributes.
	       
	     
	     * @returns {Promise.<Response>} Resolves data value as {@link UserData.GetUsersByIds} on success 
	     *
	     * @example
	     * userData
	     *  .getUsersBulk(params, headers)
	     *  .then(function(result){
	     *    console.log('headers', result.headers)
	     *    console.log('data', result.data);
	     *  });
	     */
	    function getUsersBulk(params, headers) {
	      var url = '' + baseUri + version + '/users/bulk';
	
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
	     * @name UserData#getUsersRecord
	     * @type {Function}
	     * @description # User
	    Get a single User by ID.
	     
	     * @param {string} userId 
	       
	     
	     * @param {?Object} params Map of query parameters.
	       
	     
	     * @param {?Object} headers Map of custom header attributes.
	       
	     
	     * @returns {Promise.<Response>} Resolves data value as {@link UserData.UserItem} on success 
	     *
	     * @example
	     * userData
	     *  .getUsersRecord(userId, params, headers)
	     *  .then(function(result){
	     *    console.log('headers', result.headers)
	     *    console.log('data', result.data);
	     *  });
	     */
	    function getUsersRecord(userId, params, headers) {
	      var url = '' + baseUri + version + '/users/' + userId;
	
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
	     * @name UserData#postUsersExternalIdsRecord
	     * @type {Function}
	     * @description # Users By External Ids
	    Initial call to retrieve the list of enrolled Users by external Ids in the System that might belong to separate Legal Entities.
	     
	     * @param {UserData.GetUsersByExternalIdsPostItem} data Data to be sent as the request message data.
	       
	     
	     * @param {?Object} headers Map of custom header attributes.
	       
	     
	     * @returns {Promise.<Response>} Resolves data value as {@link UserData.GetUsersByExternalIdsResponseItem} on success 
	     *
	     * @example
	     * userData
	     *  .postUsersExternalIdsRecord(data, headers)
	     *  .then(function(result){
	     *    console.log('headers', result.headers)
	     *    console.log('data', result.data);
	     *  });
	     */
	    function postUsersExternalIdsRecord(data, headers) {
	      var url = '' + baseUri + version + '/users/externalIds';
	
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
	     * @name UserData#getUsersExternalIdRecord
	     * @type {Function}
	     * @description # Get User By External Id
	    Initial call to retrieve a single user from the platform
	    using the external identifier.
	     
	     * @param {string} externalId 
	       
	     
	     * @param {?Object} params Map of query parameters.
	       
	     
	     * @param {?Object} headers Map of custom header attributes.
	       
	     
	     * @returns {Promise.<Response>} Resolves data value as {@link UserData.UserItem} on success 
	     *
	     * @example
	     * userData
	     *  .getUsersExternalIdRecord(externalId, params, headers)
	     *  .then(function(result){
	     *    console.log('headers', result.headers)
	     *    console.log('data', result.data);
	     *  });
	     */
	    function getUsersExternalIdRecord(externalId, params, headers) {
	      var url = '' + baseUri + version + '/users/externalId/' + externalId;
	
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
	     * @name UserData#postUsersEntitlementsAdminRecord
	     * @type {Function}
	     * @description # Create Admin User
	    Create Admin required to manage entitlements for the Bank and every Legal Entity.
	     
	     * @param {UserData.EntitlementsAdminCreateItem} data Data to be sent as the request message data.
	       
	     
	     * @param {?Object} headers Map of custom header attributes.
	       
	     
	     * @returns {Promise.<Response>}
	     *
	     * @example
	     * userData
	     *  .postUsersEntitlementsAdminRecord(data, headers)
	     *  .then(function(result){
	     *    console.log('headers', result.headers)
	     *    console.log('data', result.data);
	     *  });
	     */
	    function postUsersEntitlementsAdminRecord(data, headers) {
	      var url = '' + baseUri + version + '/users/entitlementsAdmin';
	
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
	     * @name UserData#getUsersExternalIdLegalentities
	     * @type {Function}
	     * @description # Legal Entities by User list
	    Retrieve the Legal Entity that the User Belongs to
	     
	     * @param {string} externalId 
	       
	     
	     * @param {?Object} params Map of query parameters.
	       
	     
	     * @param {?Object} headers Map of custom header attributes.
	       
	     
	     * @returns {Promise.<Response>} Resolves data value as {@link UserData.GetLegalEntity} on success 
	     *
	     * @example
	     * userData
	     *  .getUsersExternalIdLegalentities(externalId, params, headers)
	     *  .then(function(result){
	     *    console.log('headers', result.headers)
	     *    console.log('data', result.data);
	     *  });
	     */
	    function getUsersExternalIdLegalentities(externalId, params, headers) {
	      var url = '' + baseUri + version + '/users/externalId/' + externalId + '/legalentities';
	
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
	     * @name UserData#getUsersProfilesRecord
	     * @type {Function}
	     * @description # User profile
	    Get a single User profile by ID.
	     
	     * @param {string} userId 
	       
	     
	     * @param {?Object} params Map of query parameters.
	       
	     
	     * @param {?Object} headers Map of custom header attributes.
	       
	     
	     * @returns {Promise.<Response>} Resolves data value as {@link UserData.UsersProfileItem} on success 
	     *
	     * @example
	     * userData
	     *  .getUsersProfilesRecord(userId, params, headers)
	     *  .then(function(result){
	     *    console.log('headers', result.headers)
	     *    console.log('data', result.data);
	     *  });
	     */
	    function getUsersProfilesRecord(userId, params, headers) {
	      var url = '' + baseUri + version + '/users/profiles/' + userId;
	
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
	     * @name UserData#putUsersProfilesRecord
	     * @type {Function}
	     * @description # Update a user profile
	    Updates an existing user profile that belongs to the given legal entity
	     
	     * @param {string} userId 
	       
	     
	     * @param {UserData.UsersProfileItem} data Data to be sent as the request message data.
	       
	     
	     * @param {?Object} headers Map of custom header attributes.
	       
	     
	     * @returns {Promise.<Response>} Resolves data value as {@link UserData.UsersProfileItem} on success 
	     *
	     * @example
	     * userData
	     *  .putUsersProfilesRecord(userId, data, headers)
	     *  .then(function(result){
	     *    console.log('headers', result.headers)
	     *    console.log('data', result.data);
	     *  });
	     */
	    function putUsersProfilesRecord(userId, data, headers) {
	      var url = '' + baseUri + version + '/users/profiles/' + userId;
	
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
	     * @name UserData#schemas
	     * @type {Object}
	     */
	    var schemas = {};
	
	    /**
	     * @description
	     * An object describing the JSON schema for the postUsersRecord method
	     *
	     * @name UserData#schemas.postUsersRecord
	     * @type {Object}
	     * @example
	     * {
	    "properties": {
	      "externalId": {
	        "type": "string",
	        "minLength": 1,
	        "maxLength": 255,
	        "pattern": "^\\S+$",
	        "required": true
	      },
	      "legalEntityExternalId": {
	        "type": "string",
	        "minLength": 1,
	        "maxLength": 255,
	        "pattern": "^\\S+$",
	        "required": true
	      },
	      "fullName": {
	        "type": "string",
	        "minLength": 1,
	        "maxLength": 255,
	        "pattern": "^\\S(.*(\\S))?$",
	        "required": true
	      }
	    }
	    }
	     */
	
	    schemas.postUsersRecord = definedTypes['UserData.UserCreateItem'];
	
	    /**
	     * @description
	     * An object describing the JSON schema for the postUsersProfilesRecord method
	     *
	     * @name UserData#schemas.postUsersProfilesRecord
	     * @type {Object}
	     * @example
	     * {
	    "properties": {
	      "externalId": {
	        "type": "string",
	        "minLength": 1,
	        "pattern": "^\\S+$",
	        "required": true
	      },
	      "legalEntityExternalId": {
	        "type": "string",
	        "minLength": 1,
	        "pattern": "^\\S+$",
	        "required": true
	      },
	      "firstName": {
	        "type": "string",
	        "minLength": 1,
	        "pattern": "^\\S(.*(\\S))?$",
	        "required": true
	      }
	    }
	    }
	     */
	
	    schemas.postUsersProfilesRecord = definedTypes['UserData.UserProfileCreate'];
	
	    /**
	     * @description
	     * An object describing the JSON schema for the postUsersExternalIdsRecord method
	     *
	     * @name UserData#schemas.postUsersExternalIdsRecord
	     * @type {Object}
	     * @example
	     * {
	    "properties": {
	      "ids": {
	        "type": "array",
	        "items": {
	          "properties": {}
	        },
	        "minItems": 1,
	        "uniqueItems": true,
	        "required": false
	      }
	    }
	    }
	     */
	
	    schemas.postUsersExternalIdsRecord = definedTypes['UserData.GetUsersByExternalIdsPostItem'];
	
	    /**
	     * @description
	     * An object describing the JSON schema for the postUsersEntitlementsAdminRecord method
	     *
	     * @name UserData#schemas.postUsersEntitlementsAdminRecord
	     * @type {Object}
	     * @example
	     * {
	    "properties": {
	      "externalId": {
	        "type": "string",
	        "minLength": 1,
	        "maxLength": 255,
	        "required": true
	      },
	      "legalEntityExternalId": {
	        "type": "string",
	        "minLength": 1,
	        "maxLength": 255,
	        "required": true
	      }
	    }
	    }
	     */
	
	    schemas.postUsersEntitlementsAdminRecord = definedTypes['UserData.EntitlementsAdminCreateItem'];
	
	    /**
	     * @description
	     * An object describing the JSON schema for the putUsersProfilesRecord method
	     *
	     * @name UserData#schemas.putUsersProfilesRecord
	     * @type {Object}
	     * @example
	     * {
	    "properties": {
	      "externalId": {
	        "type": "string",
	        "required": true
	      },
	      "legalEntityId": {
	        "type": "string",
	        "required": true
	      },
	      "id": {
	        "type": "string",
	        "required": false
	      },
	      "imageAvatar": {
	        "type": "string",
	        "required": false
	      },
	      "fullName": {
	        "type": "string",
	        "required": false
	      },
	      "lastName": {
	        "type": "string",
	        "required": false
	      },
	      "dateOfBirth": {
	        "type": "string",
	        "pattern": "^[0-9]{2}-[0-9]{2}-[0-9]{4}$",
	        "required": false
	      },
	      "street": {
	        "type": "string",
	        "required": false
	      },
	      "houseNumber": {
	        "type": "string",
	        "required": false
	      },
	      "postalCode": {
	        "type": "string",
	        "required": false
	      },
	      "area": {
	        "type": "string",
	        "required": false
	      },
	      "city": {
	        "type": "string",
	        "required": false
	      },
	      "citizenship": {
	        "type": "string",
	        "required": false
	      },
	      "phones": {
	        "type": "array",
	        "items": {
	          "properties": {}
	        },
	        "required": false
	      },
	      "emails": {
	        "type": "array",
	        "items": {
	          "properties": {}
	        },
	        "required": false
	      },
	      "lastLogin": {
	        "type": "string",
	        "format": "date-time",
	        "required": false
	      }
	    }
	    }
	     */
	
	    schemas.putUsersProfilesRecord = definedTypes['UserData.UsersProfileItem'];
	
	    /**
	     * @typedef Response
	     * @type {Object}
	     * @property {Object} data See method descriptions for possible return types
	     * @property {Function} headers Getter headers function
	     * @property {Number} status HTTP status code of the response.
	     * @property {String} statusText HTTP status text of the response.
	     */
	
	    return {
	
	      getUsers: getUsers,
	
	      postUsersRecord: postUsersRecord,
	
	      getUsersProfiles: getUsersProfiles,
	
	      postUsersProfilesRecord: postUsersProfilesRecord,
	
	      getUsersBulk: getUsersBulk,
	
	      getUsersRecord: getUsersRecord,
	
	      postUsersExternalIdsRecord: postUsersExternalIdsRecord,
	
	      getUsersExternalIdRecord: getUsersExternalIdRecord,
	
	      postUsersEntitlementsAdminRecord: postUsersEntitlementsAdminRecord,
	
	      getUsersExternalIdLegalentities: getUsersExternalIdLegalentities,
	
	      getUsersProfilesRecord: getUsersProfilesRecord,
	
	      putUsersProfilesRecord: putUsersProfilesRecord,
	
	      schemas: schemas
	    };
	  };
	};

/***/ })
/******/ ])
});
;
//# sourceMappingURL=data-bb-user-http-ng.js.map