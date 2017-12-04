(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vendor-bb-angular"), require("lib-bb-event-bus-ng"), require("lib-bb-model-errors"), require("model-bb-notifications-ng"), require("lib-bb-intent-ng"));
	else if(typeof define === 'function' && define.amd)
		define("widget-bb-notification-badge-ng", ["vendor-bb-angular", "lib-bb-event-bus-ng", "lib-bb-model-errors", "model-bb-notifications-ng", "lib-bb-intent-ng"], factory);
	else if(typeof exports === 'object')
		exports["widget-bb-notification-badge-ng"] = factory(require("vendor-bb-angular"), require("lib-bb-event-bus-ng"), require("lib-bb-model-errors"), require("model-bb-notifications-ng"), require("lib-bb-intent-ng"));
	else
		root["widget-bb-notification-badge-ng"] = factory(root["vendor-bb-angular"], root["lib-bb-event-bus-ng"], root["lib-bb-model-errors"], root["model-bb-notifications-ng"], root["lib-bb-intent-ng"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_36__, __WEBPACK_EXTERNAL_MODULE_39__, __WEBPACK_EXTERNAL_MODULE_41__, __WEBPACK_EXTERNAL_MODULE_52__, __WEBPACK_EXTERNAL_MODULE_53__) {
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

	module.exports = __webpack_require__(51);

/***/ }),

/***/ 36:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_36__;

/***/ }),

/***/ 39:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_39__;

/***/ }),

/***/ 41:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_41__;

/***/ }),

/***/ 51:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _vendorBbAngular = __webpack_require__(36);
	
	var _vendorBbAngular2 = _interopRequireDefault(_vendorBbAngular);
	
	var _modelBbNotificationsNg = __webpack_require__(52);
	
	var _modelBbNotificationsNg2 = _interopRequireDefault(_modelBbNotificationsNg);
	
	var _libBbEventBusNg = __webpack_require__(39);
	
	var _libBbEventBusNg2 = _interopRequireDefault(_libBbEventBusNg);
	
	var _libBbIntentNg = __webpack_require__(53);
	
	var _libBbIntentNg2 = _interopRequireDefault(_libBbIntentNg);
	
	var _controller = __webpack_require__(54);
	
	var _controller2 = _interopRequireDefault(_controller);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = _vendorBbAngular2.default.module('widget-bb-notification-badge-ng', [_modelBbNotificationsNg2.default, _libBbEventBusNg2.default, _libBbIntentNg2.default]).controller('NotificationsBadgeController', [_modelBbNotificationsNg.modelNotificationsKey, _libBbEventBusNg.eventBusKey, _controller2.default]).run([_libBbIntentNg.bbIntentKey, function (bbIntent) {
	  bbIntent.init();
	}]).name; /**
	           * @module widget-bb-notification-badge-ng
	           *
	           * @description
	           * Notifications badge widget.
	           *
	           * @example
	           * <div ng-controller="NotificationsBadgeController as $ctrl">
	           *  <span>{{$ctrl.numberOfUnread}}</span>
	           * </div>
	           */

/***/ }),

/***/ 52:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_52__;

/***/ }),

/***/ 53:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_53__;

/***/ }),

/***/ 54:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _errorMessages;
	
	exports.default = NotificationsBadgeController;
	
	var _libBbModelErrors = __webpack_require__(41);
	
	var _modelBbNotificationsNg = __webpack_require__(52);
	
	var _constants = __webpack_require__(55);
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	var errorMessages = (_errorMessages = {}, _defineProperty(_errorMessages, _libBbModelErrors.E_AUTH, _constants.MessageKey.ERROR_AUTH), _defineProperty(_errorMessages, _libBbModelErrors.E_CONNECTIVITY, _constants.MessageKey.ERROR_CONNECTION), _defineProperty(_errorMessages, _libBbModelErrors.E_UNEXPECTED, _constants.MessageKey.ERROR_UNEXPECTED), _defineProperty(_errorMessages, _libBbModelErrors.E_USER, _constants.MessageKey.ERROR_USER), _errorMessages);
	
	var uiError = function uiError(messageMap, modelError) {
	  return {
	    message: messageMap[modelError.code]
	  };
	};
	
	/**
	 * Defines the default page size for the notifications list in popover
	 * as defined in the widget model.xml
	 * @inner
	 * @type {number}
	 */
	var DEFAULT_PAGE_SIZE = 15;
	
	/**
	 * Defines widget page enumeration
	 * @name Page
	 * @inner
	 * @enum {String}
	 * @type {Object}
	 */
	var Page = {
	  DETAILS: 'details',
	  LIST: 'list'
	};
	
	function NotificationsBadgeController(model, eventBus) {
	  /**
	   * Notifications badge controller.
	   * @name NotificationsBadgeController
	   * @ngkey NotificationsBadgeController
	   * @type {Object}
	   */
	  var $ctrl = this;
	
	  var preferences = model.getNotificationPreferences();
	
	  /**
	   * Number of records to return per request. The 'itemsPerPage' property is deprecated in
	   * favor of 'pageSize'
	   * @name pageSize
	   * @inner
	   * @type {Number} pageSize
	   */
	  var pageSize = preferences.itemsPerPage || preferences.pageSize || DEFAULT_PAGE_SIZE;
	  var pollingInterval = preferences.pollingInterval;
	
	  var notifications = {
	    params: {
	      cursor: null,
	      size: pageSize
	    }
	  };
	
	  var pollingRef = null;
	
	  /**
	   * Holds current controller state
	   * @name NotificationsBadgeController#state
	   * @type {Object}
	   */
	  var state = {
	    page: Page.LIST,
	    badge: {
	      numberOfUnread: 0,
	      showUnreadCount: preferences.badgeCounter,
	      loading: false
	    },
	    popover: {
	      isOpen: false,
	      loading: false,
	      error: null
	    },
	    notifications: {
	      active: null,
	      data: [],
	      loading: false,
	      get hasMore() {
	        return !!notifications.params.cursor;
	      },
	      error: null
	    }
	  };
	
	  /**
	   * Funtcion that performs before load stream request
	   * @name NotificationsBadgeController#beforeLoadStream
	   * @inner
	   * @type {Function}
	   */
	  var beforeLoadUnreadCount = function beforeLoadUnreadCount() {
	    state.badge.loading = true;
	  };
	
	  /**
	   * Funtcion that performs before load stream request
	   * @name NotificationsBadgeController#beforeLoadStream
	   * @inner
	   * @type {Function}
	   */
	  var afterLoadUnreadCount = function afterLoadUnreadCount() {
	    state.badge.loading = false;
	  };
	
	  /**
	   * Function that performs when unread count iteration was successful
	   * @name NotificationsBadgeController#onLoadUnreadCountSuccess
	   * @inner
	   * @type {Function}
	   * @param {loadUnreadCountResponse} raw Unread count response object
	   */
	  var onLoadUnreadCountSuccess = function onLoadUnreadCountSuccess(raw) {
	    state.badge.numberOfUnread = raw.data.unread || 0;
	
	    pollingRef = raw.ref;
	  };
	
	  /**
	   * Load count of unread notifications.
	   * @name NotificationsBadgeController#loadUnreadCount
	   * @inner
	   * @type {Function}
	   * @returns {Promise.<loadUnreadCountResponse, module:lib-bb-model-errors.ModelError>} Resolves
	   * data of {@link loadUnreadCountResponse} on success or rejects with data of
	   * {@link module:lib-bb-model-errors.ModelError}
	   */
	  var loadUnreadCount = function loadUnreadCount() {
	    beforeLoadUnreadCount();
	
	    return model.loadUnreadCount().then(onLoadUnreadCountSuccess).then(afterLoadUnreadCount);
	  };
	
	  /**
	   * Merges new notifications with existing notifications
	   * @name NotificationsBadgeController#append
	   * @inner
	   * @type {Function}
	   * @returns {module:data-bb-notifications-http-ng.NotificationsData.NotificationItem[]}
	   * merged array of old and new notifications
	   */
	  var append = function append(newItems, existingItems) {
	    return [].concat(_toConsumableArray(existingItems), _toConsumableArray(newItems));
	  };
	
	  /**
	   * Replaces existing notifications with new notifications
	   * @name NotificationsBadgeController#replace
	   * @inner
	   * @type {Function}
	   * @returns {module:data-bb-notifications-http-ng.NotificationsData.NotificationItem[]}
	   * New notifications
	   */
	  var replace = function replace(items) {
	    return items;
	  };
	
	  /**
	   * Loads notifications.
	   * @name NotificationsBadgeController#loadNotifications
	   * @inner
	   * @type {Function}
	   * @param {Object} [params={}] Custom params for request
	   * @param {Function} [merge=append] Determines whether to use the old array on notifications
	   * @param {Boolean} [applyParams=true] True if need save request params
	   * @returns {Promise.<loadResponse, module:lib-bb-model-errors.ModelError>} Resolves data of
	   * {@link loadResponse} on success or rejects with data of
	   * {@link module:lib-bb-model-errors.ModelError}
	   */
	  var loadNotifications = function loadNotifications() {
	    var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	    var merge = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : append;
	    var applyParams = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
	
	    var currentParams = Object.assign({}, notifications.params, params);
	    state.notifications.loading = true;
	
	    return model.load(currentParams).then(function (raw) {
	      state.notifications.loading = false;
	      state.notifications.data = merge(raw.data, state.notifications.data);
	      if (applyParams) {
	        notifications.params = currentParams;
	      }
	      notifications.params.cursor = raw.cursor || null;
	    }).catch(function (error) {
	      state.notifications.loading = false;
	      state.notifications.error = uiError(errorMessages, error);
	
	      throw error;
	    });
	  };
	
	  /**
	   * Loads next notification.
	   * @name NotificationsBadgeController#loadNextNotification
	   * @inner
	   * @type {Function}
	   * @returns {null|Promise.<loadResponse, module:lib-bb-model-errors.ModelError>} Returns void if
	   * there is no next notification or whether a Promise that resolves data of {@link loadResponse}
	   * on success or rejects with data of {@link module:lib-bb-model-errors.ModelError}
	   */
	  var loadNextNotification = function loadNextNotification() {
	    return notifications.params.cursor ? loadNotifications({ size: 1 }, append, false) : null;
	  };
	
	  /**
	   * Loads more notifications.
	   * @name NotificationsBadgeController#loadMore
	   * @type {Function}
	   * @param {Function} done Callback function for `ui-bb-load-more-ng` component
	   * @returns {null|Promise.<loadResponse, module:lib-bb-model-errors.ModelError>} Returns void if
	   * loading is in process or whether a Promise that resolves data of {@link loadResponse} on
	   * success or rejects with data of {@link module:lib-bb-model-errors.ModelError}
	   */
	  var loadMore = function loadMore(done) {
	    if (state.notifications.loading) {
	      return null;
	    }
	
	    return loadNotifications().then(done).catch(done);
	  };
	
	  /**
	   * Reloads the current collection
	   * @name NotificationsBadgeController#reload
	   * @inner
	   * @type {Function}
	   * @returns {Promise.<loadResponse, module:lib-bb-model-errors.ModelError>} Resolves data of
	   * {@link loadResponse} on success or rejects with data of
	   * {@link module:lib-bb-model-errors.ModelError}
	   */
	  var reload = function reload() {
	    notifications.params.cursor = null;
	    state.notifications.data = [];
	    state.notifications.error = null;
	    state.popover.error = null;
	
	    return loadNotifications(replace);
	  };
	
	  /**
	   * Changes current page in widget.
	   * @name NotificationsBadgeController#navigateTo
	   * @type {Function}
	   * @inner
	   * @param {String} page Page to navigate to
	   * @param {?Notification} item Notification item
	   */
	  function navigateTo(page) {
	    var item = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
	
	    state.page = page;
	    $ctrl.state.notifications.active = item;
	  }
	
	  /**
	   * Rests active notification and navigates the user to the Notifications list view.
	   * @name NotificationsBadgeController#viewNotificationDetails
	   * @type {Function}
	   */
	  var viewNotificationList = function viewNotificationList() {
	    if (state.page !== Page.LIST) {
	      navigateTo(Page.LIST);
	    }
	  };
	
	  /**
	   * Loads notifications and toggles the popover.
	   * @name NotificationsBadgeController#togglePopover
	   * @type {Function}
	   */
	  var togglePopover = function togglePopover() {
	    state.popover.isOpen = !state.popover.isOpen;
	
	    if (state.popover.isOpen) {
	      state.popover.loading = true;
	
	      viewNotificationList();
	      reload().then(function () {
	        state.popover.loading = false;
	      }).catch(function (error) {
	        state.popover.loading = false;
	        state.popover.error = uiError(errorMessages, error);
	      });
	    }
	  };
	
	  /**
	   * Gets notifications by ID.
	   * @name NotificationsBadgeController#getNotificationById
	   * @inner
	   * @type {Function}
	   * @param {String} id Notification ID
	   * @returns {module:data-bb-notifications-http-ng.NotificationsData.NotificationItem}
	   * A notification
	   */
	  var getNotificationById = function getNotificationById(id) {
	    return $ctrl.state.notifications.data.find(function (item) {
	      return item.id === id;
	    });
	  };
	
	  /**
	   * Mark notification as read/unread.
	   * @name NotificationsBadgeController#markNotification
	   * @type {Function}
	   * @param {String} id Notification ID.
	   * @param {Boolean} read True if notification was read.
	   * @returns {null|Promise.<DefaultResponse, module:lib-bb-model-errors.ModelError>} Returns void
	   * if notification is in process or whether a Promise that resolves data of
	   * {@link DefaultResponse} on success or rejects with data of
	   * {@link module:lib-bb-model-errors.ModelError}
	   * @fires bb.event.number.of.unread.changed
	   */
	  var markNotification = function markNotification(id) {
	    var read = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
	
	    var notification = getNotificationById(id);
	    if (notification.isUpdating) {
	      return null;
	    }
	    notification.isUpdating = true;
	
	    return model.putReadRecord(notification.id, { read: read }).then(function () {
	      notification.isUpdating = false;
	      notification.read = read;
	      eventBus.publish(_constants.Event.NOTIFICATION_CHANGE_READ_STATUS, notification);
	    }).catch(function (error) {
	      notification.read = !read;
	      state.notifications.error = uiError(errorMessages, error);
	      notification.isUpdating = false;
	    });
	  };
	
	  /**
	   * Set active notification and navigates the user to the Notifications Detail view.
	   * @name NotificationsBadgeController#viewNotificationDetails
	   * @type {Function}
	   * @param {module:data-bb-notifications-http-ng.NotificationsData.NotificationItem} item
	   * Active notification
	   */
	  var viewNotificationDetails = function viewNotificationDetails(item) {
	    if (!item.read) {
	      markNotification(item.id);
	    }
	    if (state.page !== Page.DETAILS) {
	      navigateTo(Page.DETAILS, item);
	    }
	  };
	
	  /**
	   * Remove notification from array.
	   * @name NotificationsBadgeController#removeNotification
	   * @inner
	   * @type {Function}
	   * @param {module:data-bb-notifications-http-ng.NotificationsData.NotificationItem} item
	   * A notification
	   * @fires bb.event.notification.deleted
	   */
	  var removeNotification = function removeNotification(item) {
	    var index = $ctrl.state.notifications.data.indexOf(item);
	    if (index !== -1) {
	      $ctrl.state.notifications.data.splice(index, 1);
	      eventBus.publish(_constants.Event.NOTIFICATION_DELETED, item);
	    }
	  };
	
	  /**
	   * Delete notification.
	   * @name NotificationsBadgeController#deleteNotification
	   * @type {Function}
	   * @param {String} id Notification ID.
	   * @returns {null|Promise.<DefaultResponse, module:lib-bb-model-errors.ModelError>} Returns void
	   * if notification is in process or whether a Promise that resolves data of
	   * {@link DefaultResponse} on success or rejects with data of
	   * {@link module:lib-bb-model-errors.ModelError}
	   * @fires bb.event.number.of.unread.changed
	   */
	  var deleteNotification = function deleteNotification(id) {
	    var notification = getNotificationById(id);
	    if (notification.isUpdating) {
	      return null;
	    }
	    notification.isUpdating = true;
	
	    return model.deleteRecord(id).then(function () {
	      if (!notification.read) {
	        eventBus.publish(_constants.Event.NUMBER_OF_UNREAD_CHANGED, -1);
	      }
	
	      removeNotification(notification);
	    }).then(function () {
	      return navigateTo(Page.LIST);
	    }).then(function () {
	      return loadNextNotification();
	    }).catch(function (error) {
	      state.notifications.error = uiError(errorMessages, error);
	      notification.isUpdating = false;
	    });
	  };
	
	  /**
	   * Check notification has read status.
	   * @name NotificationsBadgeController#isNotificationUnRead
	   * @type {Function}
	   * @param {module:data-bb-notifications-http-ng.NotificationsData.NotificationItem} item
	   * A notification
	   * @returns {Boolean} True if notification is read or false if notification is unread
	   */
	  var isNotificationUnRead = function isNotificationUnRead(item) {
	    return Boolean(!item.read);
	  };
	
	  /**
	   * Function that performs when error occurs in load unread count iteration.
	   * @name NotificationsBadgeController#onLoadUnreadCountError
	   * @inner
	   * @type {Function}
	   */
	  var stopPolling = function stopPolling() {
	    return model.stopPolling(pollingRef);
	  };
	
	  /**
	   * Init unread count polling.
	   * @name NotificationsBadgeController#initPolling
	   * @inner
	   * @type {Function}
	   */
	  var initPolling = function initPolling() {
	    var pollingOptions = {
	      type: _modelBbNotificationsNg.PollingType.UNREAD_COUNT,
	      pollingInterval: pollingInterval
	    };
	
	    pollingRef = model.initPolling(pollingOptions);
	
	    eventBus.subscribe(_constants.Event.NOTIFICATION_UNREAD_COUNT_SUCCESS, onLoadUnreadCountSuccess);
	    eventBus.subscribe(_constants.Event.NOTIFICATION_UNREAD_COUNT_ERROR, stopPolling);
	  };
	
	  /**
	   * Widget initialization logic - called automatically in the angular cycle.
	   * @name NotificationsBadgeController#$onInit
	   * @type {Function}
	   */
	  var $onInit = function $onInit() {
	    eventBus.subscribe(_constants.Event.NUMBER_OF_UNREAD_CHANGED, function (count) {
	      state.badge.numberOfUnread += count;
	    });
	
	    eventBus.subscribe(_constants.Event.NOTIFICATION_CHANGE_READ_STATUS, function (response) {
	      var notification = getNotificationById(response.id);
	
	      state.badge.numberOfUnread += response.read ? -1 : 1;
	
	      if (notification) {
	        notification.read = response.read;
	      }
	    });
	
	    eventBus.subscribe(_constants.Event.NOTIFICATION_DELETED, function (response) {
	      var notification = getNotificationById(response.id);
	
	      if (notification) {
	        removeNotification(notification);
	        navigateTo(Page.LIST);
	        loadNextNotification();
	      }
	    });
	
	    loadUnreadCount();
	
	    initPolling();
	  };
	
	  /**
	   * Widget destroy logic - called automatically in the angular cycle.
	   * @name NotificationsBadgeController#$onDestroy
	   * @type {Function}
	   */
	  var $onDestroy = function $onDestroy() {
	    return stopPolling();
	  };
	
	  Object.assign($ctrl, {
	    state: state,
	    markNotification: markNotification,
	    viewNotificationList: viewNotificationList,
	    viewNotificationDetails: viewNotificationDetails,
	    deleteNotification: deleteNotification,
	    isNotificationUnRead: isNotificationUnRead,
	    loadMore: loadMore,
	    togglePopover: togglePopover,
	    /* Lifecycle hooks */
	    $onInit: $onInit,
	    $onDestroy: $onDestroy
	  });
	}
	
	/**
	 * @typedef {Object} DefaultResponse
	 * @type {module:data-bb-notifications-http-ng.Response}
	 */
	
	/**
	 * @typedef {Object} loadResponse
	 * @property {module:data-bb-notifications-http-ng.NotificationsData.NotificationItem[]} data Array
	 * of notifications
	 * @property {Number} totalCount Total count of notifications if needed
	 * @property {?Number} cursor Cursor is used in request parameters as an alternative
	 * for specifying 'from' this allows to point to the record to start the selection from
	 */
	
	/**
	 * @typedef {Object} loadUnreadCountResponse
	 * @property {Number} unread Total count of unread notifications
	 */

/***/ }),

/***/ 55:
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * Widget events enum
	 * @name Event
	 * @type {Object}
	 */
	var Event = exports.Event = {
	  NUMBER_OF_UNREAD_CHANGED: 'bb.event.number.of.unread.changed',
	  NOTIFICATION_CHANGE_READ_STATUS: 'bb.event.notification.change.read.status',
	  NOTIFICATION_DELETED: 'bb.event.notification.deleted',
	  NOTIFICATION_UNREAD_COUNT_SUCCESS: 'bb.event.notifications.unread.count.success',
	  NOTIFICATION_UNREAD_COUNT_ERROR: 'bb.event.notifications.unread.count.error'
	};
	
	/**
	 * Widget static messages for the template
	 * @name MessageKey
	 * @type {Object}
	 */
	var MessageKey = exports.MessageKey = {
	  ERROR_AUTH: 'model.error.auth',
	  ERROR_CONNECTION: 'model.error.connectivity',
	  ERROR_USER: 'model.error.user',
	  ERROR_UNEXPECTED: 'model.error.unexpected'
	};

/***/ })

/******/ })
});
;
//# sourceMappingURL=widget-bb-notification-badge-ng.js.map