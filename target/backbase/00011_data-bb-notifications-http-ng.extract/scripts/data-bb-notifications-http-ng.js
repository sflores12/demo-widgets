(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vendor-bb-angular"));
	else if(typeof define === 'function' && define.amd)
		define("data-bb-notifications-http-ng", ["vendor-bb-angular"], factory);
	else if(typeof exports === 'object')
		exports["data-bb-notifications-http-ng"] = factory(require("vendor-bb-angular"));
	else
		root["data-bb-notifications-http-ng"] = factory(root["vendor-bb-angular"]);
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
	exports.notificationsDataKey = undefined;
	
	var _vendorBbAngular = __webpack_require__(2);
	
	var _vendorBbAngular2 = _interopRequireDefault(_vendorBbAngular);
	
	var _dataBbNotificationsHttp = __webpack_require__(3);
	
	var _dataBbNotificationsHttp2 = _interopRequireDefault(_dataBbNotificationsHttp);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/* eslint-disable */
	/**
	 * @module data-bb-notifications-http-ng
	 *
	 * @description A data module for accessing the Notifications REST API.
	 *
	 * @returns {String} `data-bb-notifications-http-ng`
	 * @example
	 * import notificationsDataModuleKey, {
	 *   notificationsDataKey,
	 * } from 'data-bb-notifications-http-ng';
	 */
	
	var notificationsDataModuleKey = 'data-bb-notifications-http-ng';
	/**
	 * @name notificationsDataKey
	 * @type {string}
	 * @description Angular dependency injection key for the NotificationsData service
	 */
	var notificationsDataKey = exports.notificationsDataKey = 'data-bb-notifications-http-ng:notificationsData';
	/**
	 * @name default
	 * @type {string}
	 * @description Angular dependency injection module key
	 */
	exports.default = _vendorBbAngular2.default.module(notificationsDataModuleKey, [])
	
	/**
	 * @constructor NotificationsData
	 * @type {object}
	 *
	 * @description Public api for data-bb-notifications-http-ng service
	 *
	 */
	.provider(notificationsDataKey, [function () {
	  var config = {
	    baseUri: '/'
	  };
	
	  /**
	   * @name NotificationsDataProvider
	   * @type {object}
	   * @ngkey data-bb-notifications-http-ng:notificationsDataProvider
	   * @description
	   * Data service that can be configured with custom base URI.
	   *
	   * @example
	   * // Configuring in an angular app:
	   * angular.module(...)
	   *   .config(['data-bb-notifications-http-ng:notificationsDataProvider',
	   *     (dataProvider) => {
	   *       dataProvider.setBaseUri('http://my-service.com/');
	   *       });
	   *
	   * // Configuring With config-bb-providers-ng:
	   * export default [
	   *   ['data-bb-notifications-http-ng:notificationsDataProvider', (dataProvider) => {
	   *       dataProvider.setBaseUri('http://my-service.com/');
	   *   }]
	   * ];
	   */
	  return {
	    /**
	     * @name NotificationsDataProvider#setBaseUri
	     * @type {function}
	     * @param {string} baseUri Base URI which will be the prefix for all HTTP requests
	     */
	    setBaseUri: function setBaseUri(baseUri) {
	      config.baseUri = baseUri;
	    },
	
	    /**
	     * @name NotificationsDataProvider#$get
	     * @type {function}
	     * @return {object} An instance of the service
	     */
	    $get: ['$http',
	    /* into */
	    (0, _dataBbNotificationsHttp2.default)(config)]
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
	
	    definedTypes['NotificationsData.InternalServerError'] = { "properties": { "message": { "type": "string", "required": true } } };
	
	    definedTypes['NotificationsData.BadRequest'] = { "properties": { "message": { "type": "string", "required": true } } };
	
	    definedTypes['NotificationsData.UnprocessableEntity'] = { "properties": { "errorDetails": { "type": "object", "properties": { "message": { "type": "string", "required": true }, "errorFields": { "type": "array", "items": { "properties": { "fieldName": { "type": "string", "required": true }, "message": { "type": "string", "required": true } } }, "required": true } }, "required": false } } };
	
	    definedTypes['NotificationsData.NotFound'] = { "properties": { "message": { "type": "string", "required": true } } };
	
	    definedTypes['NotificationsData.Forbidden'] = { "properties": { "message": { "type": "string", "required": true } } };
	
	    definedTypes['NotificationsData.ChangeAcknowledgementCommand'] = { "properties": { "read": { "type": "boolean", "required": true } } };
	
	    definedTypes['NotificationsData.CreateNotificationsCommand'] = { "properties": { "recipients": { "type": "array", "items": { "properties": { "userId": { "type": "string", "minLength": 1, "required": true } } }, "required": false }, "legalEntities": { "type": "array", "items": { "properties": { "leId": { "type": "string", "minLength": 1, "required": true } } }, "required": false }, "title": { "type": "string", "required": false }, "message": { "type": "string", "minLength": 1, "required": true }, "level": { "type": "string", "enum": ["ALERT", "WARNING", "SUCCESS", "INFO"], "required": true }, "targetGroup": { "type": "string", "enum": ["GLOBAL", "CUSTOMER", "USER"], "required": true }, "link": { "type": "string", "required": false }, "validFrom": { "type": "string", "format": "date-time", "required": false }, "expiresOn": { "type": "string", "format": "date-time", "required": false }, "origin": { "type": "string", "minLength": 1, "required": true } } };
	
	    definedTypes['NotificationsData.CreatedNotifications'] = { "type": "array", "items": { "properties": { "id": { "type": "string", "required": true } } } };
	
	    definedTypes['NotificationsData.UnreadNotificationsCount'] = { "properties": { "unread": { "type": "integer", "required": true } } };
	
	    definedTypes['NotificationsData.NotificationsStream'] = { "type": "array", "items": { "properties": { "id": { "type": "string", "required": true }, "title": { "type": "string", "required": false }, "message": { "type": "string", "required": true }, "level": { "type": "string", "enum": ["ALERT", "WARNING", "SUCCESS", "INFO"], "required": true }, "createdOn": { "type": "string", "format": "date-time", "required": true }, "link": { "type": "string", "required": false }, "validFrom": { "type": "string", "format": "date-time", "required": false }, "expiresOn": { "type": "string", "format": "date-time", "required": false } } } };
	
	    definedTypes['NotificationsData.Notifications'] = { "type": "array", "items": { "properties": { "id": { "type": "string", "minLength": 1, "required": true }, "title": { "type": "string", "required": false }, "message": { "type": "string", "minLength": 1, "required": true }, "level": { "type": "string", "enum": ["ALERT", "WARNING", "SUCCESS", "INFO"], "required": true }, "createdOn": { "type": "string", "format": "date-time", "required": true }, "link": { "type": "string", "required": false }, "validFrom": { "type": "string", "format": "date-time", "required": false }, "expiresOn": { "type": "string", "format": "date-time", "required": false }, "read": { "type": "boolean", "required": true }, "origin": { "type": "string", "minLength": 1, "required": true } } } };
	
	    /**
	     * @typedef NotificationsData.BadRequest
	     * @type {Object}
	     * @property {String} message
	     * @property {?Object} additions Container object for custom API extensions
	     */
	
	    /**
	     * @typedef NotificationsData.ChangeAcknowledgementCommand
	     * @type {Object}
	     * @property {Boolean} read Read Status field
	     * @property {?Object} additions Container object for custom API extensions
	     */
	
	    /**
	     * @typedef NotificationsData.CreateNotificationsCommand
	     * @type {Object}
	     * @property {?Array.<NotificationsData.recipients>} recipients Notification recipients. List all users IDs intended to receive this particular notification
	     * @property {?Array.<NotificationsData.legalEntities>} legalEntities List all legal entity IDs intended to receive this particular notification. Use with targetGroup=CUSTOMER
	     * @property {?String} title Title of notification message
	     * @property {String} message Text of notification message
	     * @property {String} level
	     * @property {String} targetGroup One of "GLOBAL", "CUSTOMER", "USER"
	     * @property {?String} link Http(s) link where user will be directed when clicking notification. If present, 'message' needs to have a special {{link}} placeholder
	     * @property {?String} validFrom Date and time when notification becomes relevant, e.g. should be shown to user. Use this field to notify recipients about something supposed to happen at some point in future
	     * @property {?String} expiresOn Special-purpose field to create 'sticky' notifications: this is a date until which notification will always be shown. Be careful: many 'sticky' notifications can cause bad user experience. Notification will not be displayed after expiry date.
	     * @property {String} origin Name of notification creator
	     * @property {?Object} additions Container object for custom API extensions
	     */
	
	    /**
	     * @typedef NotificationsData.CreatedNotifications
	     * @type {Array.<NotificationsData.CreatedNotificationsItem>}
	     */
	
	    /**
	     * @typedef NotificationsData.CreatedNotificationsItem
	     * @type {Object}
	     * @property {String} id Identifier assigned to notification by server
	     * @property {?Object} additions Container object for custom API extensions
	     */
	
	    /**
	     * @typedef NotificationsData.ErrorMessage
	     * @type {Object}
	     * @property {String} message Description of the exception
	     * @property {Array.<NotificationsData.errorFields>} errorFields Description of the error and the field that caused the error
	     * @property {?Object} additions Container object for custom API extensions
	     */
	
	    /**
	     * @typedef NotificationsData.Forbidden
	     * @type {Object}
	     * @property {String} message
	     * @property {?Object} additions Container object for custom API extensions
	     */
	
	    /**
	     * @typedef NotificationsData.InternalServerError
	     * @type {Object}
	     * @property {String} message
	     * @property {?Object} additions Container object for custom API extensions
	     */
	
	    /**
	     * @typedef NotificationsData.NotFound
	     * @type {Object}
	     * @property {String} message
	     * @property {?Object} additions Container object for custom API extensions
	     */
	
	    /**
	     * @typedef NotificationsData.NotificationItem
	     * @type {Object}
	     * @property {String} id Notification identifier
	     * @property {?String} title Title of notification message
	     * @property {String} message Text of notification message
	     * @property {String} level
	     * @property {String} createdOn Date and time when notification was created
	     * @property {?String} link Link where user will be directed when clicks notification
	     * @property {?String} validFrom Date and time when notification becomes valid and should be shown
	     * @property {?String} expiresOn Date until which notification will be shown. Notification will not be displayed after this date.
	     * @property {Boolean} read Was notification already seen by user
	     * @property {String} origin Name of notification creator
	     * @property {?Object} additions Container object for custom API extensions
	     */
	
	    /**
	     * @typedef NotificationsData.NotificationStreamItem
	     * @type {Object}
	     * @property {String} id Notification identifier
	     * @property {?String} title Title of notification message
	     * @property {String} message Text of notification message
	     * @property {String} level
	     * @property {String} createdOn Date and time when notification was created
	     * @property {?String} link Link where user will be directed when clicks notification
	     * @property {?String} validFrom Date and time when notification becomes valid and should be shown
	     * @property {?String} expiresOn Date until which notification will be shown. Notification will not be displayed after this date.
	     * @property {?Object} additions Container object for custom API extensions
	     */
	
	    /**
	     * @typedef NotificationsData.Notifications
	     * @type {Array.<NotificationsData.NotificationItem>}
	     */
	
	    /**
	     * @typedef NotificationsData.NotificationsStream
	     * @type {Array.<NotificationsData.NotificationStreamItem>}
	     */
	
	    /**
	     * @typedef NotificationsData.UnprocessableEntity
	     * @type {Object}
	     * @property {?NotificationsData.ErrorMessage} errorDetails
	     * @property {?Object} additions Container object for custom API extensions
	     */
	
	    /**
	     * @typedef NotificationsData.UnreadNotificationsCount
	     * @type {Object}
	     * @property {Integer} unread
	     * @property {?Object} additions Container object for custom API extensions
	     */
	
	    /**
	     * @typedef NotificationsData.errorFields
	     * @type {Object}
	     * @property {String} fieldName The name of the field that caused the error
	     * @property {String} message Description of the error in the field
	     * @property {?Object} additions Container object for custom API extensions
	     */
	
	    /**
	     * @typedef NotificationsData.legalEntities
	     * @type {Object}
	     * @property {String} leId legal entity Id
	     * @property {?Object} additions Container object for custom API extensions
	     */
	
	    /**
	     * @typedef NotificationsData.recipients
	     * @type {Object}
	     * @property {String} userId User Id
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
	    * @name NotificationsData#getNotifications
	    * @type {Function}
	    * @description Get all notifications for current user
	    
	    * @param {?Object} params Map of query parameters.
	      
	    * @param {?string} params.cursor As an alternative for specifying 'from' this allows to point to the record to start the selection from. Eg: 1483006260. (defaults to null)
	      
	    * @param {?number} params.from Skip over a page of elements by specifying a start value for the query. Eg: 20. (defaults to 0)
	      
	    * @param {?number} params.size Limit the number of elements on the response. Eg: 80. (defaults to 10)
	      
	    * @param {?string} params.fromDate Date from which the notifications should be retrieved. Eg: 2017-02-12T14:15:12+00:00.
	      
	    * @param {?string} params.toDate Date to which the notifications should be retrieved. Eg: 2017-04-11T15:14:33+00:00.
	      
	    * @param {?string} params.levels Array of severity levels notifications should be filtered by.
	      
	    * @param {?string} params.read Fetch only read or not read notifications. (defaults to null)
	      
	    * @param {?string} params.originTerm A sequense of symbols/words entered by user.
	      
	    * @param {?string} params.messageTerm A sequense of symbols/words entered by user.
	      
	    
	    * @param {?Object} headers Map of custom header attributes.
	      
	    
	    * @returns {Promise.<Response>} Resolves data value as {@link NotificationsData.Notifications} on success  or rejects with data of {@link NotificationsData.BadRequest}, {@link NotificationsData.Forbidden}, {@link NotificationsData.InternalServerError} on error
	    *
	    * @example
	    * notificationsData
	    *  .getNotifications(params, headers)
	    *  .then(function(result){
	    *    console.log('headers', result.headers)
	    *    console.log('data', result.data);
	    *  });
	    */
	    function getNotifications(params, headers) {
	      var url = '' + baseUri + version + '/notifications';
	
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
	    * @name NotificationsData#postNotificationsRecord
	    * @type {Function}
	    * @description Create notification
	    
	    * @param {NotificationsData.CreateNotificationsCommand} data Data to be sent as the request message data.
	      
	    
	    * @param {?Object} headers Map of custom header attributes.
	      
	    
	    * @returns {Promise.<Response>} Resolves data value as {@link NotificationsData.CreatedNotifications} on success  or rejects with data of {@link NotificationsData.BadRequest}, {@link NotificationsData.Forbidden}, {@link NotificationsData.UnprocessableEntity}, {@link NotificationsData.InternalServerError} on error
	    *
	    * @example
	    * notificationsData
	    *  .postNotificationsRecord(data, headers)
	    *  .then(function(result){
	    *    console.log('headers', result.headers)
	    *    console.log('data', result.data);
	    *  });
	    */
	    function postNotificationsRecord(data, headers) {
	      var url = '' + baseUri + version + '/notifications';
	
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
	    * @name NotificationsData#getNotificationsUnreadCount
	    * @type {Function}
	    * @description get request
	    
	    * @param {?Object} params Map of query parameters.
	      
	    
	    * @param {?Object} headers Map of custom header attributes.
	      
	    
	    * @returns {Promise.<Response>} Resolves data value as {@link NotificationsData.UnreadNotificationsCount} on success  or rejects with data of {@link NotificationsData.BadRequest}, {@link NotificationsData.Forbidden}, {@link NotificationsData.InternalServerError} on error
	    *
	    * @example
	    * notificationsData
	    *  .getNotificationsUnreadCount(params, headers)
	    *  .then(function(result){
	    *    console.log('headers', result.headers)
	    *    console.log('data', result.data);
	    *  });
	    */
	    function getNotificationsUnreadCount(params, headers) {
	      var url = '' + baseUri + version + '/notifications/unread-count';
	
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
	    * @name NotificationsData#getNotificationsStream
	    * @type {Function}
	    * @description Retrieve latest unread notifications for current user
	    
	    * @param {?Object} params Map of query parameters.
	      
	    * @param {?number} params.interval Age of notifications that will be retrieved from stream (milliseconds). Eg: 15000. (defaults to 30000)
	      
	    
	    * @param {?Object} headers Map of custom header attributes.
	      
	    
	    * @returns {Promise.<Response>} Resolves data value as {@link NotificationsData.NotificationsStream} on success  or rejects with data of {@link NotificationsData.BadRequest}, {@link NotificationsData.Forbidden}, {@link NotificationsData.InternalServerError} on error
	    *
	    * @example
	    * notificationsData
	    *  .getNotificationsStream(params, headers)
	    *  .then(function(result){
	    *    console.log('headers', result.headers)
	    *    console.log('data', result.data);
	    *  });
	    */
	    function getNotificationsStream(params, headers) {
	      var url = '' + baseUri + version + '/notifications/stream';
	
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
	    * @name NotificationsData#deleteNotificationsRecord
	    * @type {Function}
	    * @description Delete the notification with the specified id
	    
	    * @param {string} id 
	      
	    
	    * @param {?Object} data Data to be sent as the request message data.
	      
	    
	    * @param {?Object} headers Map of custom header attributes.
	      
	    
	    * @returns {Promise.<Response>} Resolves data value as void on success or rejects with data of {@link NotificationsData.Forbidden}, {@link NotificationsData.NotFound}, {@link NotificationsData.InternalServerError} on error
	    *
	    * @example
	    * notificationsData
	    *  .deleteNotificationsRecord(id, data, headers)
	    *  .then(function(result){
	    *    console.log('headers', result.headers)
	    *    console.log('data', result.data);
	    *  });
	    */
	    function deleteNotificationsRecord(id, data, headers) {
	      var url = '' + baseUri + version + '/notifications/' + id;
	
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
	    * @name NotificationsData#putNotificationsReadRecord
	    * @type {Function}
	    * @description Mark notification as read/unread
	    
	    * @param {string} id 
	      
	    
	    * @param {NotificationsData.ChangeAcknowledgementCommand} data Data to be sent as the request message data.
	      
	    
	    * @param {?Object} headers Map of custom header attributes.
	      
	    
	    * @returns {Promise.<Response>} Resolves data value as void on success or rejects with data of {@link NotificationsData.BadRequest}, {@link NotificationsData.Forbidden}, {@link NotificationsData.NotFound}, {@link NotificationsData.UnprocessableEntity}, {@link NotificationsData.InternalServerError} on error
	    *
	    * @example
	    * notificationsData
	    *  .putNotificationsReadRecord(id, data, headers)
	    *  .then(function(result){
	    *    console.log('headers', result.headers)
	    *    console.log('data', result.data);
	    *  });
	    */
	    function putNotificationsReadRecord(id, data, headers) {
	      var url = '' + baseUri + version + '/notifications/' + id + '/read';
	
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
	     * @name NotificationsData#schemas
	     * @type {Object}
	     */
	    var schemas = {};
	
	    /**
	     * @description
	     * An object describing the JSON schema for the postNotificationsRecord method
	     *
	     * @name NotificationsData#schemas.postNotificationsRecord
	     * @type {Object}
	     * @example
	     * {
	    "properties": {
	      "recipients": {
	        "type": "array",
	        "items": {
	          "properties": {
	            "userId": {
	              "type": "string",
	              "minLength": 1,
	              "required": true
	            }
	          }
	        },
	        "required": false
	      },
	      "legalEntities": {
	        "type": "array",
	        "items": {
	          "properties": {
	            "leId": {
	              "type": "string",
	              "minLength": 1,
	              "required": true
	            }
	          }
	        },
	        "required": false
	      },
	      "title": {
	        "type": "string",
	        "required": false
	      },
	      "message": {
	        "type": "string",
	        "minLength": 1,
	        "required": true
	      },
	      "level": {
	        "type": "string",
	        "enum": [
	          "ALERT",
	          "WARNING",
	          "SUCCESS",
	          "INFO"
	        ],
	        "required": true
	      },
	      "targetGroup": {
	        "type": "string",
	        "enum": [
	          "GLOBAL",
	          "CUSTOMER",
	          "USER"
	        ],
	        "required": true
	      },
	      "link": {
	        "type": "string",
	        "required": false
	      },
	      "validFrom": {
	        "type": "string",
	        "format": "date-time",
	        "required": false
	      },
	      "expiresOn": {
	        "type": "string",
	        "format": "date-time",
	        "required": false
	      },
	      "origin": {
	        "type": "string",
	        "minLength": 1,
	        "required": true
	      }
	    }
	    }
	     */
	
	    schemas.postNotificationsRecord = definedTypes['NotificationsData.CreateNotificationsCommand'];
	
	    /**
	     * @description
	     * An object describing the JSON schema for the putNotificationsReadRecord method
	     *
	     * @name NotificationsData#schemas.putNotificationsReadRecord
	     * @type {Object}
	     * @example
	     * {
	    "properties": {
	      "read": {
	        "type": "boolean",
	        "required": true
	      }
	    }
	    }
	     */
	
	    schemas.putNotificationsReadRecord = definedTypes['NotificationsData.ChangeAcknowledgementCommand'];
	
	    /**
	     * @typedef Response
	     * @type {Object}
	     * @property {Object} data See method descriptions for possible return types
	     * @property {Function} headers Getter headers function
	     * @property {Number} status HTTP status code of the response.
	     * @property {String} statusText HTTP status text of the response.
	     */
	
	    return {
	
	      getNotifications: getNotifications,
	
	      postNotificationsRecord: postNotificationsRecord,
	
	      getNotificationsUnreadCount: getNotificationsUnreadCount,
	
	      getNotificationsStream: getNotificationsStream,
	
	      deleteNotificationsRecord: deleteNotificationsRecord,
	
	      putNotificationsReadRecord: putNotificationsReadRecord,
	
	      schemas: schemas
	    };
	  };
	};

/***/ })
/******/ ])
});
;
//# sourceMappingURL=data-bb-notifications-http-ng.js.map