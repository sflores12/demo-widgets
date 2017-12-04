(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vendor-bb-angular"), require("lib-bb-event-bus-ng"), require("lib-bb-model-errors"), require("model-bb-notifications-ng"), require("lib-bb-intent-ng"));
	else if(typeof define === 'function' && define.amd)
		define("widget-bb-notification-center-ng", ["vendor-bb-angular", "lib-bb-event-bus-ng", "lib-bb-model-errors", "model-bb-notifications-ng", "lib-bb-intent-ng"], factory);
	else if(typeof exports === 'object')
		exports["widget-bb-notification-center-ng"] = factory(require("vendor-bb-angular"), require("lib-bb-event-bus-ng"), require("lib-bb-model-errors"), require("model-bb-notifications-ng"), require("lib-bb-intent-ng"));
	else
		root["widget-bb-notification-center-ng"] = factory(root["vendor-bb-angular"], root["lib-bb-event-bus-ng"], root["lib-bb-model-errors"], root["model-bb-notifications-ng"], root["lib-bb-intent-ng"]);
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

	module.exports = __webpack_require__(56);

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

/***/ 52:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_52__;

/***/ }),

/***/ 53:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_53__;

/***/ }),

/***/ 56:
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
	
	var _controller = __webpack_require__(57);
	
	var _controller2 = _interopRequireDefault(_controller);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = _vendorBbAngular2.default.module('widget-bb-notification-center-ng', [_modelBbNotificationsNg2.default, _libBbEventBusNg2.default, _libBbIntentNg2.default]).controller('NotificationCenterController', [_modelBbNotificationsNg.modelNotificationsKey, _libBbEventBusNg.eventBusKey, _controller2.default]).run([_libBbIntentNg.bbIntentKey, function (bbIntent) {
	  bbIntent.init();
	}]).name; /**
	           * @module widget-bb-notification-center-ng
	           *
	           * @description
	           * Notifications center widget.
	           *
	           * @example
	           * <div ng-controller="NotificationsCenterController as $ctrl">
	           *  <ul ng-repeat="notification in $ctrl.notifications">
	           *    <li>{{notification.id}}</li>
	           *  </ul>
	           * </div>
	           */

/***/ }),

/***/ 57:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _ErrorMessage;
	
	exports.default = NotificationCenterController;
	
	var _libBbModelErrors = __webpack_require__(41);
	
	var _constants = __webpack_require__(58);
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	var ErrorMessage = (_ErrorMessage = {}, _defineProperty(_ErrorMessage, _libBbModelErrors.E_AUTH, _constants.MessageKey.ERROR_AUTH), _defineProperty(_ErrorMessage, _libBbModelErrors.E_CONNECTIVITY, _constants.MessageKey.ERROR_CONNECTION), _defineProperty(_ErrorMessage, _libBbModelErrors.E_UNEXPECTED, _constants.MessageKey.ERROR_UNEXPECTED), _defineProperty(_ErrorMessage, _libBbModelErrors.E_USER, _constants.MessageKey.ERROR_USER), _ErrorMessage);
	
	/**
	 * @description
	 * Creates an error object for template
	 *
	 * @name uiError
	 *
	 * @inner
	 * @param {object} ModelError Error object
	 * @param {object} messageMap Error message map
	 * @type {Function}
	 * @returns {object}
	 */
	
	var uiError = function uiError(messageMap, ModelError) {
	  return {
	    message: messageMap[ModelError.code],
	    class: _constants.StatusClass.ERROR
	  };
	};
	
	/**
	 * Defines the default page size for the notifications list in popover
	 * as defined in the widget model.xml
	 * @type {int}
	 */
	var DEFAULT_PAGE_SIZE = 15;
	
	/**
	 * Defines the default maxNavPages for the accounts page
	 * as defined in the widget model.xml
	 * @type {int}
	 */
	var DEFAULT_MAX_NAV_PAGES = 3;
	
	/**
	 * Defines the default paginationType for the accounts page
	 * as defined in the widget model.xml
	 * @type {String}
	 */
	var DEFAULT_PAGINATION_TYPE = 'load-more';
	
	function NotificationCenterController(model, eventBus) {
	  /**
	   * @name NotificationCenterController
	   * @ngkey NotificationCenterController
	   * @type {Object}
	   * @description
	   * Notification center controller.
	   */
	  var $ctrl = this;
	
	  var preferences = model.getNotificationPreferences();
	
	  /**
	   * Number of records to return per request. The 'itemsPerPage' property is deprecated in favor
	   * of 'pageSize'
	   * @name NotificationCenterController#pageSize
	   * @inner
	   * @type {Number} pageSize
	   */
	  var pageSize = preferences.itemsPerPage || preferences.pageSize || DEFAULT_PAGE_SIZE;
	
	  // The variable which is established from the response of the model and has an identifier
	  // that allows to point to the record to start the selection from its
	  var cursor = null;
	
	  // Request params for initialization and reset to default.
	  var defaultParams = {
	    fromDate: null,
	    toDate: null,
	    levels: null,
	    read: null,
	    from: 0,
	    cursor: null,
	    size: pageSize
	  };
	
	  // For save the previous successful request.
	  var lastParams = defaultParams;
	
	  /**
	   * @description
	   * Get params for request.
	   *
	   * @name NotificationCenterController#getRequestParams
	   *
	   * @inner
	   * @param {Object} params Custom params
	   * @type {Function}
	   * @returns {Object} A request params
	   */
	  var getRequestParams = function getRequestParams(params) {
	    return Object.assign({}, lastParams, {
	      // In BE services pagination starts from 0 page, but in paginator component it's 1
	      from: params.currentPage ? params.currentPage - 1 : 0
	    }, params);
	  };
	
	  /**
	   * Set last successful request params in controller object.
	   * @name NotificationCenterController#updateExternalParams
	   * @inner
	   * @param {Object} params Last successful params
	   * @type {Function}
	   * @returns {Object} A controller object
	   */
	  var updateExternalParams = function updateExternalParams(params) {
	    return Object.assign($ctrl, {
	      // In BE services pagination starts from 0 page, but in paginator component it's 1
	      currentPage: params.from ? params.from + 1 : 1
	    });
	  };
	
	  /**
	   * Merges new notifications with existing notifications
	   * @name NotificationCenterController#append
	   * @inner
	   * @type {Function}
	   * @returns {module:data-bb-notifications-http-ng.NotificationsData.NotificationItem[]}
	   * Merged array of old and new notifications
	   */
	  var append = function append(newItems, existingItems) {
	    return [].concat(_toConsumableArray(existingItems), _toConsumableArray(newItems));
	  };
	
	  /**
	   * Replaces existing notifications with new notifications
	   * @name NotificationCenterController#replace
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
	   * @name NotificationCenterController#loadNotifications
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
	    var merge = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : replace;
	    var applyParams = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
	
	    var filterParamKeys = ['fromDate', 'toDate', 'read', 'levels'];
	    var currentParams = getRequestParams(params);
	
	    $ctrl.isNotificationsLoading = true;
	    $ctrl.isFilterApplied = !!Object.keys(params).find(function (key) {
	      return params[key] && filterParamKeys.indexOf(key) !== -1;
	    });
	
	    return model.load(currentParams).then(function (raw) {
	      $ctrl.isNotificationsLoading = false;
	      $ctrl.notifications = merge(raw.data, $ctrl.notifications);
	      cursor = raw.cursor || null;
	
	      if (applyParams) {
	        updateExternalParams(currentParams);
	        $ctrl.totalItems = raw.totalCount || 0;
	        lastParams = currentParams;
	      }
	    }).catch(function (error) {
	      updateExternalParams(lastParams);
	      $ctrl.isNotificationsLoading = false;
	      $ctrl.status = uiError(ErrorMessage, error);
	
	      throw error;
	    });
	  };
	
	  /**
	   * Loads next notification.
	   * @name NotificationCenterController#loadNextNotification
	   * @inner
	   * @type {Function}
	   * @returns {null|Promise.<loadResponse, module:lib-bb-model-errors.ModelError>} Returns void if
	   * there is no next notification or whether a Promise that resolves data of {@link loadResponse}
	   * on success or rejects with data of {@link module:lib-bb-model-errors.ModelError}
	   */
	  var loadNextNotification = function loadNextNotification() {
	    return cursor ? loadNotifications({ cursor: cursor, size: 1 }, append, false) : null;
	  };
	
	  /**
	   * Gets notifications by ID.
	   * @name NotificationCenterController#getNotificationById
	   * @inner
	   * @type {Function}
	   * @param {String} id Notification ID
	   * @returns {module:data-bb-notifications-http-ng.NotificationsData.NotificationItem}
	   * A notification
	   */
	  var getNotificationById = function getNotificationById(id) {
	    return $ctrl.notifications.find(function (item) {
	      return item.id === id;
	    });
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
	    if ($ctrl.isNotificationsLoading) {
	      return null;
	    }
	
	    return loadNotifications({ cursor: cursor }, append).then(done).catch(done);
	  };
	
	  /**
	   * Changes page of displayed notifications.
	   * @name NotificationCenterController#changePage
	   * @type {Function}
	   * @param {Object} params Pagination params.
	   * @returns {Promise.<loadResponse, module:lib-bb-model-errors.ModelError>} Resolves data of
	   * {@link loadResponse} on success or rejects with data of
	   * {@link module:lib-bb-model-errors.ModelError}
	   */
	  var changePage = function changePage() {
	    var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	    return loadNotifications(params);
	  };
	
	  /**
	   * Filters notifications.
	   * @name NotificationCenterController#filter
	   * @type {Function}
	   * @param {Object} params Filter params.
	   * @returns {Promise.<loadResponse, module:lib-bb-model-errors.ModelError>} Resolves data of
	   * {@link loadResponse} on success or rejects with data of
	   * {@link module:lib-bb-model-errors.ModelError}
	   */
	  var filter = function filter() {
	    var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	
	    var requestParams = Object.assign(params, { from: 0, cursor: null });
	
	    return loadNotifications(requestParams);
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
	   * @fires bb.event.notification.change.read.status
	   */
	  var markNotification = function markNotification(id, read) {
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
	      $ctrl.status = uiError(ErrorMessage, error);
	      notification.isUpdating = false;
	    });
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
	    var index = $ctrl.notifications.indexOf(item);
	    if (index !== -1) {
	      $ctrl.notifications.splice(index, 1);
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
	      $ctrl.status = { message: _constants.MessageKey.NOTIFICATION_DELETED, class: _constants.StatusClass.SUCCESS };
	
	      if (!notification.read) {
	        eventBus.publish(_constants.Event.NUMBER_OF_UNREAD_CHANGED, -1);
	      }
	
	      removeNotification(notification);
	      $ctrl.totalItems -= 1;
	
	      // change page if notification the last or current page not the first
	      if ($ctrl.notifications.length === 0 && $ctrl.currentPage !== 1) {
	        $ctrl.currentPage -= 1;
	      }
	    }).then(function () {
	      return loadNextNotification();
	    }).catch(function (error) {
	      $ctrl.status = uiError(ErrorMessage, error);
	      notification.isUpdating = false;
	    });
	  };
	
	  /**
	   * Widget initialization logic - called automatically in the angular cycle.
	   * @name NotificationsBadgeController#$onInit
	   * @type {Function}
	   */
	  var $onInit = function $onInit() {
	    return loadNotifications().then(function () {
	      $ctrl.isInitialLoading = false;
	
	      eventBus.subscribe(_constants.Event.NOTIFICATION_CHANGE_READ_STATUS, function (response) {
	        var notification = getNotificationById(response.id);
	
	        if (notification) {
	          notification.read = response.read;
	        }
	      });
	
	      eventBus.subscribe(_constants.Event.NOTIFICATION_DELETED, function (response) {
	        var notification = getNotificationById(response.id);
	
	        if (notification) {
	          $ctrl.totalItems -= 1;
	          removeNotification(notification);
	          loadNextNotification();
	        }
	      });
	    }).catch(function (error) {
	      $ctrl.isInitialLoading = false;
	      $ctrl.initialError = uiError(ErrorMessage, error).message;
	    });
	  };
	
	  Object.assign($ctrl, {
	    /**
	     * Current page for pagination directive.
	     * @name NotificationCenterController#currentPage
	     * @type {Number}
	     */
	    currentPage: 1,
	    /**
	     * The number of total available notifications.
	     * @name NotificationCenterController#totalItems
	     * @type {Number}
	     */
	    totalItems: 0,
	    /**
	     * The array of notifications. Empty if no notifications were received.
	     * @name NotificationCenterController#notifications
	     * @type {module:data-bb-notifications-http-ng.NotificationsData.NotificationItem[]}
	     */
	    notifications: [],
	    /**
	     * True if notifications is loading.
	     * @name NotificationCenterController#isNotificationsLoading
	     * @type {Boolean}
	     */
	    isNotificationsLoading: false,
	    /**
	     * True if widget is loading.
	     * @name NotificationCenterController#isInitialLoading
	     * @type {Boolean}
	     */
	    isInitialLoading: true,
	    /**
	     * Object with error text after initial.
	     * @name NotificationCenterController#initialError
	     * @type {String}
	     */
	    initialError: '',
	    /**
	     * Status message object of Notification Center.
	     * @name NotificationCenterController#status
	     * @type {Object}
	     */
	    status: null,
	    /**
	     * True is filter is applied
	     * @name NotificationCenterController#isFilterApplied
	     * @type {Boolean}
	     */
	    isFilterApplied: false,
	    /**
	     * Checks the list of notifications is empty or not.
	     * @name NotificationCenterController#hasNotifications
	     * @type {Function}
	     * @returns {Boolean} False if notifications list is empty
	     */
	    hasNotifications: function hasNotifications() {
	      return !!$ctrl.notifications.length;
	    },
	
	    /**
	     * Checks if server has more notification to load
	     * @name NotificationCenterController#hasMore
	     * @type {Function}
	     * @returns {Boolean} true if has more notifications to load
	     */
	    hasMore: function hasMore() {
	      return !!cursor;
	    },
	
	    /**
	     * Time for dismiss status messages from server
	     * @name NotificationCenterController#dismissTime
	     * @type {Number}
	     */
	    dismissTime: preferences.dismissMessageTime,
	
	    /**
	     * Notifications per page
	     * @name NotificationCenterController#pageSize
	     * @type {Number}
	     */
	    pageSize: pageSize,
	
	    /**
	     * Notifications per page
	     * @deprecated Deprecated in favor of pageSize property
	     * @name NotificationCenterController#itemsPerPage
	     * @type {Number}
	     */
	    itemsPerPage: pageSize,
	
	    /**
	     * Maximum number of displayed pages in pagination component
	     * @name NotificationCenterController#maxNavPages
	     * @type {Number}
	     */
	    maxNavPages: preferences.maxNavPages || DEFAULT_MAX_NAV_PAGES,
	
	    /**
	     * Type of displayed pagination component
	     * @name NotificationCenterController#paginationType
	     * @type {Number}
	     */
	    paginationType: preferences.paginationType || DEFAULT_PAGINATION_TYPE,
	    markNotification: markNotification,
	    deleteNotification: deleteNotification,
	    loadMore: loadMore,
	    changePage: changePage,
	    filter: filter,
	    /* Lifecycle hooks */
	    $onInit: $onInit
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

/***/ }),

/***/ 58:
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
	  NOTIFICATION_DELETED: 'bb.event.notification.deleted'
	};
	
	/**
	 * List of css-classes to be used for status notification
	 * @name StatusClass
	 * @type {Object}
	 */
	var StatusClass = exports.StatusClass = {
	  SUCCESS: 'success',
	  ERROR: 'warning'
	};
	
	/**
	 * Widget static messages for the template
	 * @name Message
	 * @type {Object}
	 */
	var MessageKey = exports.MessageKey = {
	  NOTIFICATION_DELETED: 'notification.message.deleted',
	  ERROR_AUTH: 'message.error.auth',
	  ERROR_CONNECTION: 'message.error.connection',
	  ERROR_UNEXPECTED: 'message.error.unexpected',
	  ERROR_USER: 'message.error.user'
	};

/***/ })

/******/ })
});
;
//# sourceMappingURL=widget-bb-notification-center-ng.js.map