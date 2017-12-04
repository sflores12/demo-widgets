(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vendor-bb-angular"));
	else if(typeof define === 'function' && define.amd)
		define("data-bb-messaging-service-http-ng", ["vendor-bb-angular"], factory);
	else if(typeof exports === 'object')
		exports["data-bb-messaging-service-http-ng"] = factory(require("vendor-bb-angular"));
	else
		root["data-bb-messaging-service-http-ng"] = factory(root["vendor-bb-angular"]);
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
	exports.messagingServiceDataKey = undefined;
	
	var _vendorBbAngular = __webpack_require__(2);
	
	var _vendorBbAngular2 = _interopRequireDefault(_vendorBbAngular);
	
	var _dataBbMessagingServiceHttp = __webpack_require__(3);
	
	var _dataBbMessagingServiceHttp2 = _interopRequireDefault(_dataBbMessagingServiceHttp);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/* eslint-disable */
	/**
	 * @module data-bb-messaging-service-http-ng
	 *
	 * @description A data module for accessing the Messaging Service REST API.
	 *
	 * @returns {String} `data-bb-messaging-service-http-ng`
	 * @example
	 * import messagingServiceDataModuleKey, {
	 *   messagingServiceDataKey,
	 * } from 'data-bb-messaging-service-http-ng';
	 */
	
	var messagingServiceDataModuleKey = 'data-bb-messaging-service-http-ng';
	/**
	 * @name messagingServiceDataKey
	 * @type {string}
	 * @description Angular dependency injection key for the MessagingServiceData service
	 */
	var messagingServiceDataKey = exports.messagingServiceDataKey = 'data-bb-messaging-service-http-ng:messagingServiceData';
	/**
	 * @name default
	 * @type {string}
	 * @description Angular dependency injection module key
	 */
	exports.default = _vendorBbAngular2.default.module(messagingServiceDataModuleKey, [])
	
	/**
	 * @constructor MessagingServiceData
	 * @type {object}
	 *
	 * @description Public api for data-bb-messaging-service-http-ng service
	 *
	 */
	.provider(messagingServiceDataKey, [function () {
	  var config = {
	    baseUri: '/'
	  };
	
	  /**
	   * @name MessagingServiceDataProvider
	   * @type {object}
	   * @ngkey data-bb-messaging-service-http-ng:messagingServiceDataProvider
	   * @description
	   * Data service that can be configured with custom base URI.
	   *
	   * @example
	   * // Configuring in an angular app:
	   * angular.module(...)
	   *   .config(['data-bb-messaging-service-http-ng:messagingServiceDataProvider',
	   *     (dataProvider) => {
	   *       dataProvider.setBaseUri('http://my-service.com/');
	   *       });
	   *
	   * // Configuring With config-bb-providers-ng:
	   * export default [
	   *   ['data-bb-messaging-service-http-ng:messagingServiceDataProvider', (dataProvider) => {
	   *       dataProvider.setBaseUri('http://my-service.com/');
	   *   }]
	   * ];
	   */
	  return {
	    /**
	     * @name MessagingServiceDataProvider#setBaseUri
	     * @type {function}
	     * @param {string} baseUri Base URI which will be the prefix for all HTTP requests
	     */
	    setBaseUri: function setBaseUri(baseUri) {
	      config.baseUri = baseUri;
	    },
	
	    /**
	     * @name MessagingServiceDataProvider#$get
	     * @type {function}
	     * @return {object} An instance of the service
	     */
	    $get: ['$http',
	    /* into */
	    (0, _dataBbMessagingServiceHttp2.default)(config)]
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
	
	    var version = 'v3';
	
	    /**
	     * The root defined types from the RAML.
	     * @private
	     */
	    var definedTypes = {};
	
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
	    * @name MessagingServiceData#getMessageCenterUsersTopics
	    * @type {Function}
	    * @description Returns a list of available topics. Each topic is associated with a list of subscribers. Selection of a topic determines a target destination a message is to be sent to.
	    
	    * @param {string} userId 
	      
	    
	    * @param {?Object} params Map of query parameters.
	      
	    
	    * @param {?Object} headers Map of custom header attributes.
	      
	    
	    * @returns {Promise.<Response>}
	    *
	    * @example
	    * messagingServiceData
	    *  .getMessageCenterUsersTopics(userId, params, headers)
	    *  .then(function(result){
	    *    console.log('headers', result.headers)
	    *    console.log('data', result.data);
	    *  });
	    */
	    function getMessageCenterUsersTopics(userId, params, headers) {
	      var url = baseUri + '/' + version + '/message-center/users/' + userId + '/topics';
	
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
	    * @name MessagingServiceData#postMessageCenterUsersTopicsRecord
	    * @type {Function}
	    * @description Creates a new topic
	    
	    * @param {string} userId 
	      
	    
	    * @param {?Object} data Data to be sent as the request message data.
	      
	    
	    * @param {?Object} headers Map of custom header attributes.
	      
	    
	    * @returns {Promise.<Response>}
	    *
	    * @example
	    * messagingServiceData
	    *  .postMessageCenterUsersTopicsRecord(userId, data, headers)
	    *  .then(function(result){
	    *    console.log('headers', result.headers)
	    *    console.log('data', result.data);
	    *  });
	    */
	    function postMessageCenterUsersTopicsRecord(userId, data, headers) {
	      var url = baseUri + '/' + version + '/message-center/users/' + userId + '/topics';
	
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
	    * @name MessagingServiceData#getMessageCenterUsersUnreadConversationCount
	    * @type {Function}
	    * @description Returns unread conversation count for a given user
	    
	    * @param {string} userId 
	      
	    
	    * @param {?Object} params Map of query parameters.
	      
	    
	    * @param {?Object} headers Map of custom header attributes.
	      
	    
	    * @returns {Promise.<Response>}
	    *
	    * @example
	    * messagingServiceData
	    *  .getMessageCenterUsersUnreadConversationCount(userId, params, headers)
	    *  .then(function(result){
	    *    console.log('headers', result.headers)
	    *    console.log('data', result.data);
	    *  });
	    */
	    function getMessageCenterUsersUnreadConversationCount(userId, params, headers) {
	      var url = baseUri + '/' + version + '/message-center/users/' + userId + '/unread-conversation-count';
	
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
	    * @name MessagingServiceData#getMessageCenterUsersDrafts
	    * @type {Function}
	    * @description Returns a list of user's drafts
	    
	    * @param {string} userId 
	      
	    
	    * @param {?Object} params Map of query parameters.
	      
	    * @param {?string} params.sort Comma separated field names. If prefix is not given, results will be ordered in ascending order.
	    If prefix - is provided, results will be ordered in descending fashion. Eg: subject,-updatedDate. (defaults to -updatedDate)
	      
	    * @param {?string} params.recipients It is a filtering parameter. It represents a list of users to whom the draft is addressed to. Every user is
	    identified by an external user ID. The resulting set will include drafts that are addressed to these users
	    only. The ";" character is used as a delimiter. Eg: sarah;john.
	      
	    * @param {?string} params.category A category a conversation/draft belongs to. Eg: Loans.
	      
	    * @param {?string} params.subject A topic of a conversation/draft. Eg: Inquiry About the Loans.
	      
	    
	    * @param {?Object} headers Map of custom header attributes.
	      
	    
	    * @returns {Promise.<Response>}
	    *
	    * @example
	    * messagingServiceData
	    *  .getMessageCenterUsersDrafts(userId, params, headers)
	    *  .then(function(result){
	    *    console.log('headers', result.headers)
	    *    console.log('data', result.data);
	    *  });
	    */
	    function getMessageCenterUsersDrafts(userId, params, headers) {
	      var url = baseUri + '/' + version + '/message-center/users/' + userId + '/drafts';
	
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
	    * @name MessagingServiceData#postMessageCenterUsersDraftsRecord
	    * @type {Function}
	    * @description Creates a draft with a specified user as an author
	    
	    * @param {string} userId 
	      
	    
	    * @param {?Object} data Data to be sent as the request message data.
	      
	    
	    * @param {Object} headers Map of custom header attributes.
	      
	    * @param {string} headers.X-BBSVC-Request-Id Request Idempotency Identifier.
	      
	    
	    * @returns {Promise.<Response>}
	    *
	    * @example
	    * messagingServiceData
	    *  .postMessageCenterUsersDraftsRecord(userId, data, headers)
	    *  .then(function(result){
	    *    console.log('headers', result.headers)
	    *    console.log('data', result.data);
	    *  });
	    */
	    function postMessageCenterUsersDraftsRecord(userId, data, headers) {
	      var url = baseUri + '/' + version + '/message-center/users/' + userId + '/drafts';
	
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
	    * @name MessagingServiceData#getMessageCenterUsersConversations
	    * @type {Function}
	    * @description Returns preview of conversations available for user
	    
	    * @param {string} userId 
	      
	    
	    * @param {?Object} params Map of query parameters.
	      
	    * @param {?string} params.status Type of a conversation. Essentially it is used for selecting a mailbox. Currently supported types:
	    received (i.e., inbox), sent (i.e., outbox), archived (i.e., archive). If the parameter is not
	    specified, received (non archived, non deleted) conversations are returned by default.
	      
	    * @param {?string} params.sort Comma separated field names. If prefix is not given, results will be ordered in ascending order.
	    If prefix - is provided, results will be ordered in descending fashion. Eg: subject,-timestamp. (defaults to -timestamp)
	      
	    * @param {?string} params.sender It is a filtering parameter. It represents a user that takes part in the conversation. It is an external
	    user ID. The resulting list will include only those conversatons where the specified user takes part in. Eg: lisa.
	      
	    * @param {?number} params.from The offset from which the results are listed. Eg: 3. (defaults to 0)
	      
	    * @param {?number} params.size Maximum number of elements to be returned. Eg: 20. (defaults to 10)
	      
	    * @param {?string} params.category A category a conversation/draft belongs to. Eg: Loans.
	      
	    * @param {?string} params.subject A topic of a conversation/draft. Eg: Inquiry About the Loans.
	      
	    
	    * @param {?Object} headers Map of custom header attributes.
	      
	    
	    * @returns {Promise.<Response>}
	    *
	    * @example
	    * messagingServiceData
	    *  .getMessageCenterUsersConversations(userId, params, headers)
	    *  .then(function(result){
	    *    console.log('headers', result.headers)
	    *    console.log('data', result.data);
	    *  });
	    */
	    function getMessageCenterUsersConversations(userId, params, headers) {
	      var url = baseUri + '/' + version + '/message-center/users/' + userId + '/conversations';
	
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
	    * @name MessagingServiceData#deleteMessageCenterUsersTopicsRecord
	    * @type {Function}
	    * @description Deletes a topic of the given ID
	    
	    * @param {string} userId 
	      
	    
	    * @param {string} topicId 
	      
	    
	    * @param {?Object} data Data to be sent as the request message data.
	      
	    
	    * @param {?Object} headers Map of custom header attributes.
	      
	    
	    * @returns {Promise.<Response>}
	    *
	    * @example
	    * messagingServiceData
	    *  .deleteMessageCenterUsersTopicsRecord(userId, topicId, data, headers)
	    *  .then(function(result){
	    *    console.log('headers', result.headers)
	    *    console.log('data', result.data);
	    *  });
	    */
	    function deleteMessageCenterUsersTopicsRecord(userId, topicId, data, headers) {
	      var url = baseUri + '/' + version + '/message-center/users/' + userId + '/topics/' + topicId;
	
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
	    * @name MessagingServiceData#getMessageCenterUsersTopicsSubscriptions
	    * @type {Function}
	    * @description Returns a list of subscriptions for a topic
	    
	    * @param {string} userId 
	      
	    
	    * @param {string} topicId 
	      
	    
	    * @param {?Object} params Map of query parameters.
	      
	    
	    * @param {?Object} headers Map of custom header attributes.
	      
	    
	    * @returns {Promise.<Response>}
	    *
	    * @example
	    * messagingServiceData
	    *  .getMessageCenterUsersTopicsSubscriptions(userId, topicId, params, headers)
	    *  .then(function(result){
	    *    console.log('headers', result.headers)
	    *    console.log('data', result.data);
	    *  });
	    */
	    function getMessageCenterUsersTopicsSubscriptions(userId, topicId, params, headers) {
	      var url = baseUri + '/' + version + '/message-center/users/' + userId + '/topics/' + topicId + '/subscriptions';
	
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
	    * @name MessagingServiceData#postMessageCenterUsersTopicsSubscriptionsRecord
	    * @type {Function}
	    * @description Add a new subscription to the given topic
	    
	    * @param {string} userId 
	      
	    
	    * @param {string} topicId 
	      
	    
	    * @param {?Object} data Data to be sent as the request message data.
	      
	    
	    * @param {?Object} headers Map of custom header attributes.
	      
	    
	    * @returns {Promise.<Response>}
	    *
	    * @example
	    * messagingServiceData
	    *  .postMessageCenterUsersTopicsSubscriptionsRecord(userId, topicId, data, headers)
	    *  .then(function(result){
	    *    console.log('headers', result.headers)
	    *    console.log('data', result.data);
	    *  });
	    */
	    function postMessageCenterUsersTopicsSubscriptionsRecord(userId, topicId, data, headers) {
	      var url = baseUri + '/' + version + '/message-center/users/' + userId + '/topics/' + topicId + '/subscriptions';
	
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
	    * @name MessagingServiceData#deleteMessageCenterUsersTopicsSubscriptionsRecord
	    * @type {Function}
	    * @description Remove a subscription for a topic
	    
	    * @param {string} userId 
	      
	    
	    * @param {string} topicId 
	      
	    
	    * @param {string} subscriptionId 
	      
	    
	    * @param {string} subscriberId 
	      
	    
	    * @param {?Object} data Data to be sent as the request message data.
	      
	    
	    * @param {?Object} headers Map of custom header attributes.
	      
	    
	    * @returns {Promise.<Response>}
	    *
	    * @example
	    * messagingServiceData
	    *  .deleteMessageCenterUsersTopicsSubscriptionsRecord(userId, topicId, subscriptionId, subscriberId, data, headers)
	    *  .then(function(result){
	    *    console.log('headers', result.headers)
	    *    console.log('data', result.data);
	    *  });
	    */
	    function deleteMessageCenterUsersTopicsSubscriptionsRecord(userId, topicId, subscriptionId, subscriberId, data, headers) {
	      var url = baseUri + '/' + version + '/message-center/users/' + userId + '/topics/' + topicId + '/subscriptions/' + subscriptionId;
	
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
	    * @name MessagingServiceData#putMessageCenterUsersDraftsRecord
	    * @type {Function}
	    * @description Updates draft with a given id for a given user
	    
	    * @param {string} userId 
	      
	    
	    * @param {string} draftId 
	      
	    
	    * @param {?Object} data Data to be sent as the request message data.
	      
	    
	    * @param {Object} headers Map of custom header attributes.
	      
	    * @param {string} headers.X-BBSVC-Request-Id Request Idempotency Identifier.
	      
	    
	    * @returns {Promise.<Response>}
	    *
	    * @example
	    * messagingServiceData
	    *  .putMessageCenterUsersDraftsRecord(userId, draftId, data, headers)
	    *  .then(function(result){
	    *    console.log('headers', result.headers)
	    *    console.log('data', result.data);
	    *  });
	    */
	    function putMessageCenterUsersDraftsRecord(userId, draftId, data, headers) {
	      var url = baseUri + '/' + version + '/message-center/users/' + userId + '/drafts/' + draftId;
	
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
	    * @name MessagingServiceData#deleteMessageCenterUsersDraftsRecord
	    * @type {Function}
	    * @description Deletes given draft
	    
	    * @param {string} userId 
	      
	    
	    * @param {string} draftId 
	      
	    
	    * @param {?Object} data Data to be sent as the request message data.
	      
	    
	    * @param {?Object} headers Map of custom header attributes.
	      
	    
	    * @returns {Promise.<Response>}
	    *
	    * @example
	    * messagingServiceData
	    *  .deleteMessageCenterUsersDraftsRecord(userId, draftId, data, headers)
	    *  .then(function(result){
	    *    console.log('headers', result.headers)
	    *    console.log('data', result.data);
	    *  });
	    */
	    function deleteMessageCenterUsersDraftsRecord(userId, draftId, data, headers) {
	      var url = baseUri + '/' + version + '/message-center/users/' + userId + '/drafts/' + draftId;
	
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
	    * @name MessagingServiceData#postMessageCenterUsersDraftsSendDraftRequestRecord
	    * @type {Function}
	    * @description Creates send request for given draft. If body is added draft will be updated with provided data.
	    
	    * @param {string} userId 
	      
	    
	    * @param {string} draftId 
	      
	    
	    * @param {?Object} data Data to be sent as the request message data.
	      
	    
	    * @param {Object} headers Map of custom header attributes.
	      
	    * @param {string} headers.X-BBSVC-Request-Id Request Idempotency Identifier.
	      
	    
	    * @returns {Promise.<Response>}
	    *
	    * @example
	    * messagingServiceData
	    *  .postMessageCenterUsersDraftsSendDraftRequestRecord(userId, draftId, data, headers)
	    *  .then(function(result){
	    *    console.log('headers', result.headers)
	    *    console.log('data', result.data);
	    *  });
	    */
	    function postMessageCenterUsersDraftsSendDraftRequestRecord(userId, draftId, data, headers) {
	      var url = baseUri + '/' + version + '/message-center/users/' + userId + '/drafts/' + draftId + '/send-draft-request';
	
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
	    * @name MessagingServiceData#deleteMessageCenterUsersConversationsRecord
	    * @type {Function}
	    * @description Deletes conversation for given user. However conversation may be resurrected if another party updates it.
	    
	    * @param {string} userId 
	      
	    
	    * @param {string} conversationId 
	      
	    
	    * @param {?Object} data Data to be sent as the request message data.
	      
	    
	    * @param {Object} headers Map of custom header attributes.
	      
	    * @param {string} headers.X-BBSVC-Request-Id Request Idempotency Identifier.
	      
	    
	    * @returns {Promise.<Response>}
	    *
	    * @example
	    * messagingServiceData
	    *  .deleteMessageCenterUsersConversationsRecord(userId, conversationId, data, headers)
	    *  .then(function(result){
	    *    console.log('headers', result.headers)
	    *    console.log('data', result.data);
	    *  });
	    */
	    function deleteMessageCenterUsersConversationsRecord(userId, conversationId, data, headers) {
	      var url = baseUri + '/' + version + '/message-center/users/' + userId + '/conversations/' + conversationId;
	
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
	    * @name MessagingServiceData#postMessageCenterUsersConversationsArchiveConversationRequestRecord
	    * @type {Function}
	    * @description Puts given conversation in user's archive box
	    
	    * @param {string} userId 
	      
	    
	    * @param {string} conversationId 
	      
	    
	    * @param {?Object} data Data to be sent as the request message data.
	      
	    
	    * @param {Object} headers Map of custom header attributes.
	      
	    * @param {string} headers.X-BBSVC-Request-Id Request Idempotency Identifier.
	      
	    
	    * @returns {Promise.<Response>}
	    *
	    * @example
	    * messagingServiceData
	    *  .postMessageCenterUsersConversationsArchiveConversationRequestRecord(userId, conversationId, data, headers)
	    *  .then(function(result){
	    *    console.log('headers', result.headers)
	    *    console.log('data', result.data);
	    *  });
	    */
	    function postMessageCenterUsersConversationsArchiveConversationRequestRecord(userId, conversationId, data, headers) {
	      var url = baseUri + '/' + version + '/message-center/users/' + userId + '/conversations/' + conversationId + '/archive-conversation-request';
	
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
	    * @name MessagingServiceData#getMessageCenterUsersConversationsDrafts
	    * @type {Function}
	    * @description Returns drafts that have been created in conversation by given user
	    
	    * @param {string} userId 
	      
	    
	    * @param {string} conversationId 
	      
	    
	    * @param {?Object} params Map of query parameters.
	      
	    * @param {?string} params.status statuses of drafts to return. No statuses would match no drafts.
	      
	    * @param {?number} params.limit maximum amount of drafts to provide.
	      
	    
	    * @param {?Object} headers Map of custom header attributes.
	      
	    
	    * @returns {Promise.<Response>}
	    *
	    * @example
	    * messagingServiceData
	    *  .getMessageCenterUsersConversationsDrafts(userId, conversationId, params, headers)
	    *  .then(function(result){
	    *    console.log('headers', result.headers)
	    *    console.log('data', result.data);
	    *  });
	    */
	    function getMessageCenterUsersConversationsDrafts(userId, conversationId, params, headers) {
	      var url = baseUri + '/' + version + '/message-center/users/' + userId + '/conversations/' + conversationId + '/drafts';
	
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
	    * @name MessagingServiceData#postMessageCenterUsersConversationsDraftsRecord
	    * @type {Function}
	    * @description Creates a draft in conversation for user
	    
	    * @param {string} userId 
	      
	    
	    * @param {string} conversationId 
	      
	    
	    * @param {?Object} data Data to be sent as the request message data.
	      
	    
	    * @param {Object} headers Map of custom header attributes.
	      
	    * @param {string} headers.X-BBSVC-Request-Id Request Idempotency Identifier.
	      
	    
	    * @returns {Promise.<Response>}
	    *
	    * @example
	    * messagingServiceData
	    *  .postMessageCenterUsersConversationsDraftsRecord(userId, conversationId, data, headers)
	    *  .then(function(result){
	    *    console.log('headers', result.headers)
	    *    console.log('data', result.data);
	    *  });
	    */
	    function postMessageCenterUsersConversationsDraftsRecord(userId, conversationId, data, headers) {
	      var url = baseUri + '/' + version + '/message-center/users/' + userId + '/conversations/' + conversationId + '/drafts';
	
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
	    * @name MessagingServiceData#getMessageCenterUsersConversationsMessages
	    * @type {Function}
	    * @description Returns all messages that have been sent in conversation by all parties
	    
	    * @param {string} userId 
	      
	    
	    * @param {string} conversationId 
	      
	    
	    * @param {?Object} params Map of query parameters.
	      
	    
	    * @param {?Object} headers Map of custom header attributes.
	      
	    
	    * @returns {Promise.<Response>}
	    *
	    * @example
	    * messagingServiceData
	    *  .getMessageCenterUsersConversationsMessages(userId, conversationId, params, headers)
	    *  .then(function(result){
	    *    console.log('headers', result.headers)
	    *    console.log('data', result.data);
	    *  });
	    */
	    function getMessageCenterUsersConversationsMessages(userId, conversationId, params, headers) {
	      var url = baseUri + '/' + version + '/message-center/users/' + userId + '/conversations/' + conversationId + '/messages';
	
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
	    * @name MessagingServiceData#putMessageCenterUsersConversationsDraftsRecord
	    * @type {Function}
	    * @description Updates draft in conversation for a given user
	    
	    * @param {string} userId 
	      
	    
	    * @param {string} conversationId 
	      
	    
	    * @param {string} draftId 
	      
	    
	    * @param {?Object} data Data to be sent as the request message data.
	      
	    
	    * @param {Object} headers Map of custom header attributes.
	      
	    * @param {string} headers.X-BBSVC-Request-Id Request Idempotency Identifier.
	      
	    
	    * @returns {Promise.<Response>}
	    *
	    * @example
	    * messagingServiceData
	    *  .putMessageCenterUsersConversationsDraftsRecord(userId, conversationId, draftId, data, headers)
	    *  .then(function(result){
	    *    console.log('headers', result.headers)
	    *    console.log('data', result.data);
	    *  });
	    */
	    function putMessageCenterUsersConversationsDraftsRecord(userId, conversationId, draftId, data, headers) {
	      var url = baseUri + '/' + version + '/message-center/users/' + userId + '/conversations/' + conversationId + '/drafts/' + draftId;
	
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
	    * @name MessagingServiceData#postMessageCenterUsersConversationsMessagesReadMessageRequestRecord
	    * @type {Function}
	    * @description Marks given message as read
	    
	    * @param {string} userId 
	      
	    
	    * @param {string} conversationId 
	      
	    
	    * @param {string} messageId 
	      
	    
	    * @param {?Object} data Data to be sent as the request message data.
	      
	    
	    * @param {Object} headers Map of custom header attributes.
	      
	    * @param {string} headers.X-BBSVC-Request-Id Request Idempotency Identifier.
	      
	    
	    * @returns {Promise.<Response>}
	    *
	    * @example
	    * messagingServiceData
	    *  .postMessageCenterUsersConversationsMessagesReadMessageRequestRecord(userId, conversationId, messageId, data, headers)
	    *  .then(function(result){
	    *    console.log('headers', result.headers)
	    *    console.log('data', result.data);
	    *  });
	    */
	    function postMessageCenterUsersConversationsMessagesReadMessageRequestRecord(userId, conversationId, messageId, data, headers) {
	      var url = baseUri + '/' + version + '/message-center/users/' + userId + '/conversations/' + conversationId + '/messages/' + messageId + '/read-message-request';
	
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
	     * @name MessagingServiceData#schemas
	     * @type {Object}
	     */
	    var schemas = {};
	
	    /**
	     * @description
	     * An object describing the JSON schema for the postMessageCenterUsersTopicsRecord method
	     *
	     * @name MessagingServiceData#schemas.postMessageCenterUsersTopicsRecord
	     * @type {Object}
	     * @example
	     * {
	    "properties": {}
	    }
	     */
	
	    schemas.postMessageCenterUsersTopicsRecord = { "properties": {} };
	
	    /**
	     * @description
	     * An object describing the JSON schema for the postMessageCenterUsersDraftsRecord method
	     *
	     * @name MessagingServiceData#schemas.postMessageCenterUsersDraftsRecord
	     * @type {Object}
	     * @example
	     * {
	    "properties": {}
	    }
	     */
	
	    schemas.postMessageCenterUsersDraftsRecord = { "properties": {} };
	
	    /**
	     * @description
	     * An object describing the JSON schema for the postMessageCenterUsersTopicsSubscriptionsRecord method
	     *
	     * @name MessagingServiceData#schemas.postMessageCenterUsersTopicsSubscriptionsRecord
	     * @type {Object}
	     * @example
	     * {
	    "properties": {
	      "externalUserId": {
	        "type": "string",
	        "required": true
	      }
	    }
	    }
	     */
	
	    schemas.postMessageCenterUsersTopicsSubscriptionsRecord = { "properties": { "externalUserId": { "type": "string", "required": true } } };
	
	    /**
	     * @description
	     * An object describing the JSON schema for the putMessageCenterUsersDraftsRecord method
	     *
	     * @name MessagingServiceData#schemas.putMessageCenterUsersDraftsRecord
	     * @type {Object}
	     * @example
	     * {
	    "properties": {}
	    }
	     */
	
	    schemas.putMessageCenterUsersDraftsRecord = { "properties": {} };
	
	    /**
	     * @description
	     * An object describing the JSON schema for the postMessageCenterUsersDraftsSendDraftRequestRecord method
	     *
	     * @name MessagingServiceData#schemas.postMessageCenterUsersDraftsSendDraftRequestRecord
	     * @type {Object}
	     * @example
	     * {
	    "properties": {}
	    }
	     */
	
	    schemas.postMessageCenterUsersDraftsSendDraftRequestRecord = { "properties": {} };
	
	    /**
	     * @description
	     * An object describing the JSON schema for the postMessageCenterUsersConversationsDraftsRecord method
	     *
	     * @name MessagingServiceData#schemas.postMessageCenterUsersConversationsDraftsRecord
	     * @type {Object}
	     * @example
	     * {
	    "properties": {}
	    }
	     */
	
	    schemas.postMessageCenterUsersConversationsDraftsRecord = { "properties": {} };
	
	    /**
	     * @description
	     * An object describing the JSON schema for the putMessageCenterUsersConversationsDraftsRecord method
	     *
	     * @name MessagingServiceData#schemas.putMessageCenterUsersConversationsDraftsRecord
	     * @type {Object}
	     * @example
	     * {
	    "properties": {}
	    }
	     */
	
	    schemas.putMessageCenterUsersConversationsDraftsRecord = { "properties": {} };
	
	    /**
	     * @typedef Response
	     * @type {Object}
	     * @property {Object} data See method descriptions for possible return types
	     * @property {Function} headers Getter headers function
	     * @property {Number} status HTTP status code of the response.
	     * @property {String} statusText HTTP status text of the response.
	     */
	
	    return {
	
	      getMessageCenterUsersTopics: getMessageCenterUsersTopics,
	
	      postMessageCenterUsersTopicsRecord: postMessageCenterUsersTopicsRecord,
	
	      getMessageCenterUsersUnreadConversationCount: getMessageCenterUsersUnreadConversationCount,
	
	      getMessageCenterUsersDrafts: getMessageCenterUsersDrafts,
	
	      postMessageCenterUsersDraftsRecord: postMessageCenterUsersDraftsRecord,
	
	      getMessageCenterUsersConversations: getMessageCenterUsersConversations,
	
	      deleteMessageCenterUsersTopicsRecord: deleteMessageCenterUsersTopicsRecord,
	
	      getMessageCenterUsersTopicsSubscriptions: getMessageCenterUsersTopicsSubscriptions,
	
	      postMessageCenterUsersTopicsSubscriptionsRecord: postMessageCenterUsersTopicsSubscriptionsRecord,
	
	      deleteMessageCenterUsersTopicsSubscriptionsRecord: deleteMessageCenterUsersTopicsSubscriptionsRecord,
	
	      putMessageCenterUsersDraftsRecord: putMessageCenterUsersDraftsRecord,
	
	      deleteMessageCenterUsersDraftsRecord: deleteMessageCenterUsersDraftsRecord,
	
	      postMessageCenterUsersDraftsSendDraftRequestRecord: postMessageCenterUsersDraftsSendDraftRequestRecord,
	
	      deleteMessageCenterUsersConversationsRecord: deleteMessageCenterUsersConversationsRecord,
	
	      postMessageCenterUsersConversationsArchiveConversationRequestRecord: postMessageCenterUsersConversationsArchiveConversationRequestRecord,
	
	      getMessageCenterUsersConversationsDrafts: getMessageCenterUsersConversationsDrafts,
	
	      postMessageCenterUsersConversationsDraftsRecord: postMessageCenterUsersConversationsDraftsRecord,
	
	      getMessageCenterUsersConversationsMessages: getMessageCenterUsersConversationsMessages,
	
	      putMessageCenterUsersConversationsDraftsRecord: putMessageCenterUsersConversationsDraftsRecord,
	
	      postMessageCenterUsersConversationsMessagesReadMessageRequestRecord: postMessageCenterUsersConversationsMessagesReadMessageRequestRecord,
	
	      schemas: schemas
	    };
	  };
	};

/***/ })
/******/ ])
});
;
//# sourceMappingURL=data-bb-messaging-service-http-ng.js.map