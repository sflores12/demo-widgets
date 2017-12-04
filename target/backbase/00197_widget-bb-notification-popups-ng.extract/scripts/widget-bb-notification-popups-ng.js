(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vendor-bb-angular"), require("lib-bb-event-bus-ng"), require("model-bb-notifications-ng"), require("lib-bb-intent-ng"));
	else if(typeof define === 'function' && define.amd)
		define("widget-bb-notification-popups-ng", ["vendor-bb-angular", "lib-bb-event-bus-ng", "model-bb-notifications-ng", "lib-bb-intent-ng"], factory);
	else if(typeof exports === 'object')
		exports["widget-bb-notification-popups-ng"] = factory(require("vendor-bb-angular"), require("lib-bb-event-bus-ng"), require("model-bb-notifications-ng"), require("lib-bb-intent-ng"));
	else
		root["widget-bb-notification-popups-ng"] = factory(root["vendor-bb-angular"], root["lib-bb-event-bus-ng"], root["model-bb-notifications-ng"], root["lib-bb-intent-ng"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_36__, __WEBPACK_EXTERNAL_MODULE_39__, __WEBPACK_EXTERNAL_MODULE_52__, __WEBPACK_EXTERNAL_MODULE_53__) {
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

	module.exports = __webpack_require__(59);

/***/ }),

/***/ 36:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_36__;

/***/ }),

/***/ 39:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_39__;

/***/ }),

/***/ 52:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_52__;

/***/ }),

/***/ 53:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_53__;

/***/ }),

/***/ 59:
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
	
	var _controller = __webpack_require__(60);
	
	var _controller2 = _interopRequireDefault(_controller);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = _vendorBbAngular2.default.module('widget-bb-notification-popups-ng', [_modelBbNotificationsNg2.default, _libBbEventBusNg2.default, _libBbIntentNg2.default]).controller('NotificationsPopupsController', [_modelBbNotificationsNg.modelNotificationsKey, _libBbEventBusNg.eventBusKey, '$timeout', _controller2.default]).run([_libBbIntentNg.bbIntentKey, function (bbIntent) {
	  bbIntent.init();
	}]).name; /**
	           * @module widget-bb-notification-popups-ng
	           *
	           * @description
	           * Notification popups.
	           *
	           * @example
	           * <div ng-controller="NotificationsPopupsController as $ctrl">
	           *  <ul ng-repeat="notification in $ctrl.notifications">
	           *    <li>{{notification.id}}</li>
	           *  </ul>
	           * </div>
	           */

/***/ }),

/***/ 60:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = NotificationsPopupsController;
	
	var _modelBbNotificationsNg = __webpack_require__(52);
	
	var _constants = __webpack_require__(61);
	
	var LOCAL_NOTIFICATION_ID_PREFIX = 'LOCAL_NOTIFICATION:';
	
	function NotificationsPopupsController(model, eventBus, $timeout) {
	  /**
	   * Notification Popups controller.
	   * @name NotificationsPopupsController
	   * @ngkey NotificationsPopupsController
	   * @type {Object}
	   */
	  var $ctrl = this;
	
	  var preferences = model.getNotificationPreferences();
	  var isFeNotificationsEnabled = preferences.listenFeNotify;
	  var pollingInterval = preferences.pollingInterval;
	
	  var HIDING_TIMEOUTS = {
	    ALERT: preferences.dismissAlertTime,
	    WARNING: preferences.dismissWarningTime,
	    INFO: preferences.dismissInfoTime,
	    SUCCESS: preferences.dismissSuccessTime
	  };
	
	  var hidingIntervalRef = null;
	  var pollingRef = null;
	
	  /**
	   * Get notifications by ID.
	   * @name getNotificationById
	   * @inner
	   * @type {Function}
	   * @param {String} id Notification ID
	   * @param {module:data-bb-notifications-http-ng.NotificationsData.NotificationItem[]} list
	   * Array of notifications
	   * @returns {module:data-bb-notifications-http-ng.NotificationsData.NotificationItem}
	   * A notification
	   */
	  var getNotificationById = function getNotificationById(id) {
	    var list = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : $ctrl.notifications;
	    return list.find(function (item) {
	      return item.id === id;
	    });
	  };
	
	  /**
	   * Remove notification from array.
	   * @name removeNotification
	   * @inner
	   * @type {Function}
	   * @param {module:data-bb-notifications-http-ng.NotificationsData.NotificationItem} item
	   * A notification
	   * @param {module:data-bb-notifications-http-ng.NotificationsData.NotificationItem[]} list
	   * Array of notifications
	   */
	  var removeNotification = function removeNotification(item) {
	    var list = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : $ctrl.notifications;
	
	    var index = list.indexOf(item);
	    if (index !== -1) {
	      list.splice(index, 1);
	    }
	  };
	
	  /**
	   * Start polling for hiding notifications.
	   * @name startHideNotificationPolling
	   * @inner
	   * @type {Function}
	   */
	  var startHideNotificationPolling = function startHideNotificationPolling() {
	    var notificationToHide = $ctrl.notifications.find(function (item) {
	      return HIDING_TIMEOUTS[item.level] > 0;
	    });
	    if (notificationToHide) {
	      $timeout.cancel(hidingIntervalRef);
	      hidingIntervalRef = $timeout(function () {
	        removeNotification(notificationToHide);
	        startHideNotificationPolling();
	      }, HIDING_TIMEOUTS[notificationToHide.level]);
	    }
	  };
	
	  /**
	   * return notification type for ui.bootstrap.alert directive according to notifications level:
	   * ALERT: alert-danger
	   * INFO: alert-info
	   * WARNING: alert-warning
	   * SUCCESS: alert-success
	   * @name NotificationsPopupsController#getNotificationType
	   * @type {Function}
	   * @param {Object} notification A notification object
	   * @returns {Promise.<string>} A Promise with result of marking
	   */
	  var getNotificationType = function getNotificationType(notification) {
	    return _constants.NotificationType[notification.level];
	  };
	
	  /**
	   * removes notification from list.
	   * @name NotificationsPopupsController#closeNotification
	   * @type {Function}
	   * @param {String} id Notification ID
	   * @param {Boolean} sticky Type of notification for closing
	   * @fires bb.event.number.of.unread.changed
	   */
	  var closeNotification = function closeNotification(id) {
	    var sticky = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
	
	    var listOfNotifications = sticky ? $ctrl.stickyNotifications : $ctrl.notifications;
	    var notification = getNotificationById(id, listOfNotifications);
	    if (notification) {
	      removeNotification(notification, listOfNotifications);
	      if (!notification.local) {
	        model.putReadRecord(notification.id, { read: true }).then(function () {
	          if (!sticky) {
	            notification.read = true;
	            eventBus.publish(_constants.Event.NOTIFICATION_CHANGE_READ_STATUS, notification);
	          }
	        });
	      }
	    }
	  };
	
	  /**
	   * Add notification from pub-sub
	   * @name NotificationsPopupsController#addLocalNotification
	   * @inner
	   * @type {Function}
	   * @param {module:data-bb-notifications-http-ng.NotificationsData.NotificationItem} item
	   * A Notification
	   */
	  var addLocalNotification = function addLocalNotification(item) {
	    $ctrl.notifications.push(Object.assign({}, item, {
	      id: LOCAL_NOTIFICATION_ID_PREFIX + Math.random(),
	      local: true
	    }));
	
	    startHideNotificationPolling();
	  };
	
	  /**
	   * Funtcion that performs when load stream iteration was successful
	   * @name onLoadStreamSuccess
	   * @inner
	   * @type {Function}
	   * @param {loadStreamResponse} raw Array of notifications
	   * @fires bb.event.number.of.unread.changed
	   */
	  var onLoadStreamSuccess = function onLoadStreamSuccess(raw) {
	    var newNonStickyNotifications = raw.data.filter(function (item) {
	      return !item.expiresOn;
	    });
	
	    eventBus.publish(_constants.Event.NUMBER_OF_UNREAD_CHANGED, newNonStickyNotifications.length);
	
	    // always update sticky notification, but concat regular ones
	    $ctrl.notifications = $ctrl.notifications.concat(newNonStickyNotifications);
	    $ctrl.stickyNotifications = raw.data.filter(function (item) {
	      return item.expiresOn;
	    });
	
	    pollingRef = raw.ref;
	
	    startHideNotificationPolling();
	  };
	
	  /**
	   * Function that performs when error occurs in load stream iteration.
	   * @name NotificationsPopupsController#onLoadUnreadCountError
	   * @inner
	   * @type {Function}
	   */
	  var stopPolling = function stopPolling() {
	    return model.stopPolling(pollingRef);
	  };
	
	  /**
	   * Init stream polling.
	   * @name NotificationsPopupsController#initPolling
	   * @inner
	   * @type {Function}
	   */
	  var initPolling = function initPolling() {
	    var pollingOptions = {
	      type: _modelBbNotificationsNg.PollingType.STREAM,
	      pollingInterval: pollingInterval
	    };
	
	    pollingRef = model.initPolling(pollingOptions);
	
	    eventBus.subscribe(_constants.Event.NOTIFICATION_STREAM_SUCCESS, onLoadStreamSuccess);
	    eventBus.subscribe(_constants.Event.NOTIFICATION_STREAM_ERROR, stopPolling);
	  };
	
	  /**
	   * Widget initialization logic - called automatically in the angular cycle.
	   * @name NotificationsPopupsController#$onInit
	   * @type {Function}
	   */
	  var $onInit = function $onInit() {
	    if (isFeNotificationsEnabled) {
	      eventBus.subscribe(_constants.Event.NOTIFICATION_CREATE_LOCAL, addLocalNotification);
	    }
	
	    initPolling();
	  };
	
	  /**
	   * Widget destroy logic - called automatically in the angular cycle.
	   * @name NotificationsPopupsController#$onDestroy
	   * @type {Function}
	   */
	  var $onDestroy = function $onDestroy() {
	    return stopPolling();
	  };
	
	  Object.assign($ctrl, {
	    /**
	     * @description
	     * The array of notifications. Empty if no notifications were received.
	     *
	     * @name NotificationsPopupsController#notifications
	     * @type {module:data-bb-notifications-http-ng.NotificationsData.NotificationItem[]}
	     */
	    notifications: [],
	    /**
	     * @description
	     * The array of sticky notifications. Empty if no sticky notifications were received.
	     *
	     * @name NotificationsPopupsController#stickyNotifications
	     * @type {module:data-bb-notifications-http-ng.NotificationsData.NotificationItem[]}
	     */
	    stickyNotifications: [],
	    /**
	     * @description
	     * True if notifications is loading
	     *
	     * @name NotificationsPopupsController#isNotificationsLoading
	     * @type {Boolean}
	     */
	    isNotificationsLoading: false,
	    /**
	     * @description
	     * Checks the list of notifications is empty or not
	     *
	     * @name NotificationsPopupsController#hasNotifications
	     * @type {Function}
	     * @returns {Boolean} false if notifications list is empty
	     */
	    hasNotifications: function hasNotifications() {
	      return !!$ctrl.notifications.length;
	    },
	    /**
	     * @description
	     * True if sticky notifications can be dismissing
	     *
	     * @name NotificationsPopupsController#dismissSticky
	     * @type {Boolean}
	     */
	    dismissSticky: preferences.dismissSticky,
	
	    getNotificationType: getNotificationType,
	    closeNotification: closeNotification,
	    /* Lifecycle hooks */
	    $onInit: $onInit,
	    $onDestroy: $onDestroy
	  });
	}
	
	/**
	 * @typedef {Object} loadStreamResponse
	 * @property {module:data-bb-notifications-http-ng.NotificationsData.NotificationItem[]} data Array
	 * of notifications
	 */

/***/ }),

/***/ 61:
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
	  NOTIFICATION_CREATE_LOCAL: 'bb.event.notifications.notify',
	  NOTIFICATION_STREAM_SUCCESS: 'bb.event.notifications.stream.success',
	  NOTIFICATION_STREAM_ERROR: 'bb.event.notifications.stream.error'
	};
	
	/**
	 * List of css-classes to be used for detect notification type
	 * @name NotificationType
	 * @type {Object}
	 */
	var NotificationType = exports.NotificationType = {
	  ALERT: 'danger',
	  WARNING: 'warning',
	  INFO: 'info',
	  SUCCESS: 'success'
	};

/***/ })

/******/ })
});
;
//# sourceMappingURL=widget-bb-notification-popups-ng.js.map