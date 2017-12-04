(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vendor-bb-angular"), require("data-bb-messaging-service-http-ng"), require("lib-bb-model-errors"));
	else if(typeof define === 'function' && define.amd)
		define("model-bb-messages-ng", ["vendor-bb-angular", "data-bb-messaging-service-http-ng", "lib-bb-model-errors"], factory);
	else if(typeof exports === 'object')
		exports["model-bb-messages-ng"] = factory(require("vendor-bb-angular"), require("data-bb-messaging-service-http-ng"), require("lib-bb-model-errors"));
	else
		root["model-bb-messages-ng"] = factory(root["vendor-bb-angular"], root["data-bb-messaging-service-http-ng"], root["lib-bb-model-errors"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_28__, __WEBPACK_EXTERNAL_MODULE_29__, __WEBPACK_EXTERNAL_MODULE_31__) {
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

	module.exports = __webpack_require__(27);

/***/ }),

/***/ 27:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.modelMessagesKey = exports.moduleKey = undefined;
	
	var _vendorBbAngular = __webpack_require__(28);
	
	var _vendorBbAngular2 = _interopRequireDefault(_vendorBbAngular);
	
	var _dataBbMessagingServiceHttpNg = __webpack_require__(29);
	
	var _dataBbMessagingServiceHttpNg2 = _interopRequireDefault(_dataBbMessagingServiceHttpNg);
	
	var _messages = __webpack_require__(30);
	
	var _messages2 = _interopRequireDefault(_messages);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var moduleKey = exports.moduleKey = 'model-bb-messages-ng';
	var modelMessagesKey = exports.modelMessagesKey = 'model-bb-messages-ng:model';
	
	exports.default = _vendorBbAngular2.default.module('model-bb-messages-ng', [_dataBbMessagingServiceHttpNg2.default]).factory(modelMessagesKey, [_dataBbMessagingServiceHttpNg.messagingServiceDataKey, '$q', '$timeout',
	/* into */
	_messages2.default]).name;

/***/ }),

/***/ 28:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_28__;

/***/ }),

/***/ 29:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_29__;

/***/ }),

/***/ 30:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = Model;
	
	var _libBbModelErrors = __webpack_require__(31);
	
	var _constants = __webpack_require__(32);
	
	/**
	 * @name encodeInBase64
	 * @description Encodes text to Base64 format
	 * @param {String} text text to encode
	 * @returns {String} base64 encoded text
	 * @type {function}
	 * @private
	 */
	/* global window */
	var encodeInBase64 = function encodeInBase64(text) {
	  if (!text) {
	    return text;
	  }
	  return window.btoa(encodeURIComponent(text).replace(/%([0-9A-F]{2})/g, function (match, p1) {
	    return String.fromCharCode('0x' + p1);
	  }));
	};
	
	/**
	 * @name MessagingModel
	 * @description Model for widget-bb-messages-ng
	 * @param {MessagingData} messagingData A Data module to allow access to messaging data.
	 * @type {function}
	 * @return {MessagingModel}
	 * @inner
	 */
	function Model(messagingData, Promise, $timeout) {
	  var userId = 'me';
	
	  /**
	   * @name MessagingModel#getTopics
	   * @description Fetches available topics
	   * @type {function}
	   * @returns {Promise.<Array>} A Promise with a list of topics
	   *                            [{id: 'id123', code: 'ln', name: 'Loans'}]
	   */
	  function getTopics() {
	    return messagingData.getMessageCenterUsersTopics(userId).then(function (res) {
	      return res.data.topics;
	    }).catch(function (e) {
	      throw (0, _libBbModelErrors.fromHttpError)(e);
	    });
	  }
	
	  /**
	   * @name MessagingModel#loadConversations
	   * @description Loads users conversation threads
	   * @type {function}
	   * @param {object} params query parameters to pass to backend
	   * @returns {Promise.<Object>} A wrapper of conversations in the following format:
	   *                             {conversations: [], totalCount: 0}
	   */
	  function loadConversations() {
	    var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	
	    return messagingData.getMessageCenterUsersConversations(userId, params).then(function (res) {
	      return {
	        conversations: res.data.conversations.map(function (conversation) {
	          return Object.assign({
	            otherUserName: conversation.otherUser,
	            status: params.status || 'inbox'
	          }, conversation);
	        }),
	        totalCount: res.data.totalCount
	      };
	    }).catch(function (e) {
	      throw (0, _libBbModelErrors.fromHttpError)(e);
	    });
	  }
	
	  /**
	   * @name MessagingModel#loadArchivedConversations
	   * @description Loads archived users conversation threads
	   * @type {function}
	   * @param {object} params query parameters to pass to backend
	   * @returns {Promise.<Object>} A wrapper of conversations in the following format:
	   *                             {conversations: [], totalCount: 0}
	   */
	  function loadArchivedConversations() {
	    var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	
	    return loadConversations(Object.assign({ status: 'archived' }, params));
	  }
	
	  /**
	   * @name MessagingModel#loadSentConversations
	   * @description Loads sent users conversation threads
	   * @type {function}
	   * @param {object} params query parameters to pass to backend
	   * @returns {Promise.<Object>} A wrapper of conversations in the following format:
	   *                             {conversations: [], totalCount: 0}
	   */
	  function loadSentConversations() {
	    var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	
	    return loadConversations(Object.assign({ status: 'sent' }, params));
	  }
	
	  /**
	   * @name MessagingModel#loadMessages
	   * @description Loads messages of a given conversation
	   * @param {string} conversationId conversation identifier
	   * @type {function}
	   * @returns {Promise} An array of messages
	   */
	  function loadMessages(conversationId) {
	    return messagingData.getMessageCenterUsersConversationsMessages(userId, conversationId, {}).then(function (res) {
	      return res.data.messages.map(function (message) {
	        return Object.assign({
	          senderName: message.sender
	        }, message);
	      });
	    });
	  }
	
	  /**
	   * @name MessagingModel#getUnreadMessagesCount
	   * @description Gets user's unread messages count
	   * @type {function}
	   * @param {object} params query parameters to pass to backend
	   * @returns {Promise.<{unreadMessagesCount: number}>}
	   *          a promise holding user's unread messages count
	   */
	  function getUnreadMessagesCount() {
	    var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	
	    return messagingData.getMessageCenterUsersUnreadConversationCount(userId, params).then(function (res) {
	      return {
	        unreadMessagesCount: res.data.unreadCount
	      };
	    });
	  }
	
	  /**
	   * @name MessagingModel#removeConversations
	   * @description Removes given conversation
	   * @param {string} conversationId Conversation Id to be removed
	   * @type {function}
	   * @returns {Promise.<Object>} An array of conversations
	   */
	  function removeConversation(conversationId) {
	    return messagingData.deleteMessageCenterUsersConversationsRecord(userId, conversationId, {});
	  }
	
	  /**
	   * @name MessagingModel#loadDrafts
	   * @description Loads users drafts
	   * @type {function}
	   * @param {object} params query parameters to pass to backend
	   * @returns {Promise.<Object>} A wrapper of draft items: {"drafts": []}
	   */
	  function loadDrafts() {
	    var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	
	    return messagingData.getUsersDrafts(userId, params).then(function (res) {
	      return res.data;
	    });
	  }
	
	  /**
	   * @name MessagingModel#createDraft
	   * @description Saves draft
	   * @param {any} pDraft Draft to save
	   * @type {function}
	   * @returns {Promise.<{id: string}>} a promise holding created draft ID
	   */
	  function createDraft(pDraft) {
	    var encodedBody = encodeInBase64(pDraft.body);
	    var draft = Object.assign({}, pDraft, { body: encodedBody });
	    return messagingData.postMessageCenterUsersDraftsRecord(userId, draft).then(function (res) {
	      return res.data;
	    });
	  }
	
	  /**
	   * @name MessagingModel#sendDraftWithRetry
	   * @type {function}
	   * @description Sends draft, if it fails, it will retry sending for 3 times
	   * @param {string} draftId draft ID which will be sent
	   * @param {string} messageBody updated message body which will be applied to draft before sending
	   * @returns {Promise} a promise which is resolved when draft is successfully sent
	   */
	  function sendDraftWithRetry(draftId, messageBody) {
	    var attempt = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
	
	    var encodedBody = encodeInBase64(messageBody);
	    return messagingData.postMessageCenterUsersDraftsSendDraftRequestRecord(userId, draftId, { body: encodedBody }).catch(function (error) {
	      if (error.status === 404 && attempt < 3) {
	        return $timeout(function () {
	          return sendDraftWithRetry(draftId, encodedBody, attempt + 1);
	        }, 1000);
	      }
	      throw error;
	    });
	  }
	
	  /**
	   * @name MessagingModel#sendDraft
	   * @description Sends given draft.
	   * @param {string} draftId Draft ID to be sent
	   * @param {string} messageBody with which message will be sent
	   * @type {function}
	   * @returns {Promise} an empty promise
	   */
	  function sendDraft(draftId, messageBody) {
	    return sendDraftWithRetry(draftId, messageBody);
	  }
	
	  /**
	   * @name MessagingModel#createReplyDraft
	   * @description Creates a draft for replying to a conversation
	   * @param {string} conversationId the conversation ID for which reply draft will be created
	   * @param {object} draft object with "body" property in it
	   * @type {function}
	   * @returns {Promise.<{id: string}>} a promise holding created draft ID
	   */
	  function createReplyDraft(conversationId, draft) {
	    var encodedBody = encodeInBase64(draft.body);
	    return messagingData.postMessageCenterUsersConversationsDraftsRecord(userId, conversationId, Object.assign({}, draft, { body: encodedBody })).then(function (res) {
	      return res.data;
	    });
	  }
	
	  /**
	   * @name MessagingModel#updateReplyDraft
	   * @description Updates the response draft
	   * @param {string} conversationId the conversation ID for which response draft will be updated
	   * @param {object} draft object to be updated
	   * @type {function}
	   * @returns {Promise} an empty promise
	   */
	  function updateReplyDraft(conversationId, draft) {
	    var encodedBody = encodeInBase64(draft.body);
	    return messagingData.putMessageCenterUsersConversationsDraftsRecord(userId, conversationId, draft.id, Object.assign({}, draft, { body: encodedBody })).then(function (res) {
	      return res.data;
	    });
	  }
	
	  /**
	   * @name MessagingModel#sortDraftsByUpdatedDateDescending
	   * @type {function}
	   * @description Function designed to be used as a comparator
	   * to determine if draftA is after draftB
	   * @param {object} draftA object with "updatedDate" property in it
	   * @param {object} draftB object with "updatedDate" property in it
	   * @returns {number} time difference between draftB and draftA
	   * @private
	   * */
	  function sortDraftsByUpdatedDateDescending(draftA, draftB) {
	    var dateA = new Date(draftA.updatedDate);
	    var dateB = new Date(draftB.updatedDate);
	
	    return dateB.getTime() - dateA.getTime();
	  }
	
	  /**
	   * @name MessagingModel#getLatestConversationDraft
	   * @description Gets latest (i.e. last updated) draft belonging to the specified conversation
	   * @param {string} conversationId the conversation ID for which draft will be fetched
	   * @type {function}
	   * @returns {Promise.<Object>} a promise containing latest conversation
	   */
	  function getLatestConversationDraft(conversationId) {
	    return messagingData.getMessageCenterUsersConversationsDrafts(userId, conversationId).then(function (res) {
	      return res.data.drafts && res.data.drafts.length ? res.data.drafts.sort(sortDraftsByUpdatedDateDescending)[0] : {};
	    });
	  }
	
	  /**
	   * @name MessagingModel#saveConversationDraft
	   * @description Saves (creates or updates) conversation draft.
	   * @param {string} conversationId the conversation ID for which draft will be saved
	   * @param {object} draft draft to be saved.
	   * @type {function}
	   * @returns {Promise} promise object. If draft has been updated, then the Promise will be empty.
	   * If draft was created, then the promise will hold object with an ID of created draft.
	   */
	  function saveConversationDraft(conversationId, draft) {
	    return draft.id ? updateReplyDraft(conversationId, draft) : createReplyDraft(conversationId, draft);
	  }
	
	  function markMessageAsRead(conversationId, messageId) {
	    return messagingData.postMessageCenterUsersConversationsMessagesReadMessageRequestRecord(userId, conversationId, messageId);
	  }
	
	  /**
	   * @name MessagingModel#markUnreadMessagesAsRead
	   * @description Marks messages whose recipient is current user as read.
	   * @param {object} conversation conversation object for which messages need to be marked as read
	   * @param {array} messages array of messages. The array will be filtered and only messages whose
	   * recipient is current user will be marked as read.
	   * @type {function}
	   * @returns {Promise} promise object, which is resolved once all the
	   * passed messages are marked as read.
	   */
	  function markUnreadMessagesAsRead(conversation, messages) {
	    var unreadMessages = (messages || []).filter(function (message) {
	      return message.status === _constants.MessageState.DELIVERED && message.sender === conversation.otherUser;
	    });
	
	    var markAsReadRequests = unreadMessages.map(function (unreadMessage) {
	      return markMessageAsRead(conversation.id, unreadMessage.id);
	    });
	
	    return Promise.all(markAsReadRequests);
	  }
	
	  /**
	   * @name MessagingModel
	   * @type {object}
	   *
	   * @description
	   * Model factory for widget-bb-messaging-ng
	   */
	  return {
	    getTopics: getTopics,
	
	    // Conversations
	    loadConversations: loadConversations,
	    loadArchivedConversations: loadArchivedConversations,
	    loadSentConversations: loadSentConversations,
	
	    loadMessages: loadMessages,
	    getUnreadMessagesCount: getUnreadMessagesCount,
	    removeConversation: removeConversation,
	    getLatestConversationDraft: getLatestConversationDraft,
	    saveConversationDraft: saveConversationDraft,
	    markUnreadMessagesAsRead: markUnreadMessagesAsRead,
	
	    // Drafts
	    loadDrafts: loadDrafts,
	    createDraft: createDraft,
	    sendDraft: sendDraft,
	
	    // Response drafts
	    createReplyDraft: createReplyDraft,
	    updateReplyDraft: updateReplyDraft
	  };
	}

/***/ }),

/***/ 31:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_31__;

/***/ }),

/***/ 32:
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * @description
	 * Message states
	 *
	 * @name MessageState
	 * @type {object}
	 */
	var MessageState = exports.MessageState = {
	  DELIVERED: 'DELIVERED',
	  READ: 'READ'
	};
	
	exports.default = MessageState;

/***/ })

/******/ })
});
;
//# sourceMappingURL=model-bb-messages-ng.js.map