(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vendor-bb-angular"), require("data-bb-notifications-http-ng"), require("lib-bb-widget-ng"), require("lib-bb-event-bus-ng"), require("lib-bb-model-errors"));
	else if(typeof define === 'function' && define.amd)
		define("model-bb-notifications-ng", ["vendor-bb-angular", "data-bb-notifications-http-ng", "lib-bb-widget-ng", "lib-bb-event-bus-ng", "lib-bb-model-errors"], factory);
	else if(typeof exports === 'object')
		exports["model-bb-notifications-ng"] = factory(require("vendor-bb-angular"), require("data-bb-notifications-http-ng"), require("lib-bb-widget-ng"), require("lib-bb-event-bus-ng"), require("lib-bb-model-errors"));
	else
		root["model-bb-notifications-ng"] = factory(root["vendor-bb-angular"], root["data-bb-notifications-http-ng"], root["lib-bb-widget-ng"], root["lib-bb-event-bus-ng"], root["lib-bb-model-errors"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_36__, __WEBPACK_EXTERNAL_MODULE_37__, __WEBPACK_EXTERNAL_MODULE_38__, __WEBPACK_EXTERNAL_MODULE_39__, __WEBPACK_EXTERNAL_MODULE_41__) {
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

	module.exports = __webpack_require__(35);

/***/ }),

/***/ 35:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.modelNotificationsKey = exports.PollingType = undefined;
	
	var _vendorBbAngular = __webpack_require__(36);
	
	var _vendorBbAngular2 = _interopRequireDefault(_vendorBbAngular);
	
	var _dataBbNotificationsHttpNg = __webpack_require__(37);
	
	var _dataBbNotificationsHttpNg2 = _interopRequireDefault(_dataBbNotificationsHttpNg);
	
	var _libBbWidgetNg = __webpack_require__(38);
	
	var _libBbWidgetNg2 = _interopRequireDefault(_libBbWidgetNg);
	
	var _libBbEventBusNg = __webpack_require__(39);
	
	var _libBbEventBusNg2 = _interopRequireDefault(_libBbEventBusNg);
	
	var _notifications = __webpack_require__(40);
	
	var _notifications2 = _interopRequireDefault(_notifications);
	
	var _constants = __webpack_require__(42);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * Object with polling types
	 * @name PollingType
	 * @type {Object}
	 */
	/**
	 * @module model-bb-notifications-ng
	 *
	 * @description
	 * Notification widgets model.
	 *
	 * @example
	 * import modelNotificationsModuleKey, { modelNotificationsKey } from 'model-bb-notifications-ng';
	 *
	 * angular
	 *   .module('ExampleModule', [
	 *     modelNotificationsModuleKey,
	 *   ])
	 *   .factory('someFactory', [
	 *     modelNotificationsKey,
	 *     // into
	 *     function someFactory(notificationsModel) {
	 *       // ...
	 *     },
	 *   ]);
	 */
	exports.PollingType = _constants.PollingType;
	var modelNotificationsKey = exports.modelNotificationsKey = 'model-bb-notifications-ng:model';
	
	exports.default = _vendorBbAngular2.default.module('model-bb-notifications-ng', [_dataBbNotificationsHttpNg2.default, _libBbWidgetNg2.default, _libBbEventBusNg2.default]).factory(modelNotificationsKey, [_dataBbNotificationsHttpNg.notificationsDataKey, _libBbWidgetNg.widgetKey, _libBbEventBusNg.eventBusKey, '$timeout', _notifications2.default]).name;

/***/ }),

/***/ 36:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_36__;

/***/ }),

/***/ 37:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_37__;

/***/ }),

/***/ 38:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_38__;

/***/ }),

/***/ 39:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_39__;

/***/ }),

/***/ 40:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = Model;
	
	var _libBbModelErrors = __webpack_require__(41);
	
	var _constants = __webpack_require__(42);
	
	/**
	 * Defines the minimum polling interval time as defined in the widget model.xml
	 * @inner
	 * @type {Number}
	 */
	var MIN_POLLING_INTERVAL_VALUE = 999;
	
	/**
	 * @inner
	 * @type {Function}
	 * @param {module:data-bb-notifications-http-ng.NotificationsData} notificationsData
	 * @param {Object} widget
	 * @param {Object} eventBus
	 * @param {Function} $timeout
	 * @return {Object}
	 */
	function Model(notificationsData, widget, eventBus, $timeout) {
	  /**
	   * Load notifications.
	   * @name NotificationModel#load
	   * @type {Function}
	   * @param {?object} params Optional configuration object.
	   * @returns {Promise.<loadResponse, module:lib-bb-model-errors.ModelError>} Resolves data of
	   * {@link loadResponse} on success or rejects with data of
	   * {@link module:lib-bb-model-errors.ModelError}
	   */
	  function load() {
	    var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	
	    return notificationsData.getNotifications(params).then(function (raw) {
	      return {
	        data: raw.data,
	        totalCount: parseInt(raw.headers('x-total-count'), 10) || 0,
	        cursor: parseInt(raw.headers('x-cursor'), 10)
	      };
	    }).catch(function (e) {
	      throw (0, _libBbModelErrors.fromHttpError)(e);
	    });
	  }
	
	  /**
	   * Load notifications stream.
	   * @name NotificationModel#loadStream
	   * @type {Function}
	   * @param {?object} params Optional configuration object.
	   * @returns {Promise.<loadStreamResponse, module:lib-bb-model-errors.ModelError>} Resolves data of
	   * {@link loadStreamResponse} on success or rejects with data of
	   * {@link module:lib-bb-model-errors.ModelError}
	   */
	  function loadStream() {
	    var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	
	    return notificationsData.getNotificationsStream(params).catch(function (e) {
	      throw (0, _libBbModelErrors.fromHttpError)(e);
	    });
	  }
	
	  /**
	   * Create notification.
	   * See {@link module:data-bb-notifications-http-ng.NotificationsData.CreateNotificationsCommand}
	   * to get information about configuration object
	   * @name NotificationModel#create
	   * @type {Function}
	   * @param {Object} params Configuration object to create notification
	   * @returns {Promise.<DefaultResponse, module:lib-bb-model-errors.ModelError>} Resolves data of
	   * {@link DefaultResponse} on success or rejects with data of
	   * {@link module:lib-bb-model-errors.ModelError}
	   */
	  function create() {
	    var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	
	    return notificationsData.postNotificationsRecord(params).catch(function (e) {
	      throw (0, _libBbModelErrors.fromHttpError)(e);
	    });
	  }
	
	  /**
	   * Load unread count of notifications.
	   * @name NotificationModel#loadUnreadCount
	   * @type {Function}
	   * @returns {Promise.<loadUnreadCountResponse, module:lib-bb-model-errors.ModelError>} Resolves
	   * data of {@link loadUnreadCountResponse} on success or rejects with data of
	   * {@link module:lib-bb-model-errors.ModelError}
	   */
	  function loadUnreadCount() {
	    return notificationsData.getNotificationsUnreadCount().catch(function (e) {
	      throw (0, _libBbModelErrors.fromHttpError)(e);
	    });
	  }
	
	  /**
	   * Set read/unread status of notification.
	   * See {@link module:data-bb-notifications-http-ng.NotificationsData.ChangeAcknowledgementCommand}
	   * to get information about configuration object
	   * @name NotificationModel#putReadRecord
	   * @type {Function}
	   * @param {String} notificationID Notification ID
	   * @param {Object} data Object with new read status
	   * @returns {Promise.<DefaultResponse, module:lib-bb-model-errors.ModelError>} Resolves data of
	   * {@link DefaultResponse} on success or rejects with data of
	   * {@link module:lib-bb-model-errors.ModelError}
	   */
	  function putReadRecord(notificationID) {
	    var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	
	    return notificationsData.putNotificationsReadRecord(notificationID, data).catch(function (e) {
	      throw (0, _libBbModelErrors.fromHttpError)(e);
	    });
	  }
	
	  /**
	   * Delete notification.
	   * @name NotificationModel#DefaultResponse
	   * @type {Function}
	   * @param {String} notificationID Notification ID
	   * @returns {Promise.<DefaultResponse, module:lib-bb-model-errors.ModelError>} Resolves data of
	   * {@link DefaultResponse} on success or rejects with data of
	   * {@link module:lib-bb-model-errors.ModelError}
	   */
	  function deleteRecord(notificationID) {
	    return notificationsData.deleteNotificationsRecord(notificationID).catch(function (e) {
	      throw (0, _libBbModelErrors.fromHttpError)(e);
	    });
	  }
	
	  /**
	   * Getting notifications preferences from widget. Usage of "itemsPerPage" is deprecated
	   * in favor of "pageSize"
	   * @name NotificationModel#getNotificationPreferences
	   * @type {Function}
	   * @returns {Object} Preferences object
	   */
	  var getNotificationPreferences = function getNotificationPreferences() {
	    return {
	      pollingInterval: widget.getLongPreference(_constants.Preference.NOTIFICATION_POLLING_INTERVAL),
	      badgeCounter: widget.getBooleanPreference(_constants.Preference.NOTIFICATION_BADGE_COUNTER),
	      pageSize: widget.getLongPreference(_constants.Preference.NOTIFICATION_PAGE_SIZE) || 10,
	      itemsPerPage: widget.getLongPreference(_constants.Preference.NOTIFICATION_ITEMS_PER_PAGE),
	      maxNavPages: widget.getLongPreference(_constants.Preference.NOTIFICATION_MAX_NAV_PAGES),
	      paginationType: widget.getStringPreference(_constants.Preference.NOTIFICATION_PAGINATION_TYPE),
	      dismissSticky: widget.getBooleanPreference(_constants.Preference.NOTIFICATION_DISMISS_STICKY),
	      listenFeNotify: widget.getBooleanPreference(_constants.Preference.NOTIFICATION_LISTEN_FE_NOTIFY),
	      dismissMessageTime: widget.getLongPreference(_constants.Preference.NOTIFICATION_DISMISS_MESSAGE_TIME) || 5,
	      dismissAlertTime: widget.getLongPreference(_constants.Preference.NOTIFICATION_DISMISS_ALERT_TIME) || 0,
	      dismissWarningTime: widget.getLongPreference(_constants.Preference.NOTIFICATION_DISMISS_WARNING_TIME) || 0,
	      dismissInfoTime: widget.getLongPreference(_constants.Preference.NOTIFICATION_DISMISS_INFO_TIME) || 0,
	      dismissSuccessTime: widget.getLongPreference(_constants.Preference.NOTIFICATION_DISMISS_SUCCESS_TIME) || 0
	    };
	  };
	
	  /**
	   * Start polling.
	   * @name NotificationModel#startPolling
	   * @inner
	   * @type {Function}
	   * @param {Number} interval Interval period duration
	   * @param {Function} callback Polling function
	   */
	  var startPolling = function startPolling(interval, callback) {
	    $timeout(function (ref) {
	      callback(ref);
	      startPolling(interval, callback);
	    }, interval);
	  };
	
	  /**
	   * Stop polling.
	   * @name NotificationModel#stopPolling
	   * @type {Function}
	   * @param {String} ref Polling (interval) reference
	   */
	  var stopPolling = function stopPolling(ref) {
	    if (ref) {
	      $timeout.cancel(ref);
	    }
	  };
	
	  var publishOnStreamSuccess = function publishOnStreamSuccess(ref, data) {
	    eventBus.publish(_constants.Event.NOTIFICATION_STREAM_SUCCESS, { ref: ref, data: data });
	  };
	
	  var publishOnStreamError = function publishOnStreamError(e) {
	    eventBus.publish(_constants.Event.NOTIFICATION_STREAM_ERROR, e);
	  };
	
	  var publishOnUnreadCountSuccess = function publishOnUnreadCountSuccess(ref, data) {
	    eventBus.publish(_constants.Event.NOTIFICATION_STREAM_SUCCESS, { ref: ref, data: data });
	  };
	
	  var publishOnUnreadCountError = function publishOnUnreadCountError(e) {
	    eventBus.publish(_constants.Event.NOTIFICATION_STREAM_ERROR, e);
	  };
	
	  /**
	   * Subscribe to stream notifications loading.
	   * @name NotificationModel#initPolling
	   * @type {Function}
	   * @param {PollingOptions} options Subscribe options
	   * @returns {String} Polling (interval) reference
	   */
	  var initPolling = function initPolling(options) {
	    var polling = {
	      interval: options.pollingInterval || 0,
	      method: null,
	      onSuccess: null,
	      onError: null
	    };
	
	    var requestParams = Object.assign({ interval: polling.interval }, options.params);
	
	    switch (options.type) {
	      case _constants.PollingType.UNREAD_COUNT:
	        polling.method = loadUnreadCount.bind(null, requestParams);
	        polling.onSuccess = publishOnUnreadCountSuccess;
	        polling.onError = publishOnUnreadCountError;
	        break;
	
	      default:
	        polling.method = loadStream.bind(null, requestParams);
	        polling.onSuccess = publishOnStreamSuccess;
	        polling.onError = publishOnStreamError;
	    }
	
	    var callback = function callback() {
	      var ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
	
	      polling.method().then(function (raw) {
	        return polling.onSuccess(ref, raw.data);
	      }).catch(polling.onError);
	    };
	
	    if (polling.interval > MIN_POLLING_INTERVAL_VALUE) {
	      startPolling(polling.interval, callback);
	    }
	  };
	
	  /**
	   * Model factory for widget-bb-notification-center-ng, widget-bb-notification-badge-ng,
	   * widget-bb-notification-popups-ng, widget-bbm-notification-center-ng
	   * @name NotificationModel
	   * @type {Object}
	   */
	  return {
	    load: load,
	    loadStream: loadStream,
	    create: create,
	    loadUnreadCount: loadUnreadCount,
	    putReadRecord: putReadRecord,
	    deleteRecord: deleteRecord,
	    getNotificationPreferences: getNotificationPreferences,
	    initPolling: initPolling,
	    stopPolling: stopPolling
	  };
	}
	
	/**
	 * @typedef {Object} PollingOptions
	 * @property {String} type Polling type
	 * @property {Number} pollingInterval Polling interval time
	 * @property {?Object} params Optional parameters that apply to polling method
	 */
	
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
	 * @typedef {Object} loadStreamResponse
	 * @property {module:data-bb-notifications-http-ng.NotificationsData.NotificationItem[]} data Array
	 * of notifications
	 */
	
	/**
	 * @typedef {Object} loadUnreadCountResponse
	 * @property {Number} unread Total count of unread notifications
	 */

/***/ }),

/***/ 41:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_41__;

/***/ }),

/***/ 42:
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * Enum for preferences.
	 * Usage of "itemsPerPage" is deprecated in favor of "pageSize"
	 * @name Preference
	 * @type {Object}
	 */
	var Preference = exports.Preference = {
	  NOTIFICATION_POLLING_INTERVAL: 'pollingInterval',
	  NOTIFICATION_BADGE_COUNTER: 'badgeCounter',
	  NOTIFICATION_PAGE_SIZE: 'bb.notification.pageSize',
	  NOTIFICATION_ITEMS_PER_PAGE: 'itemsPerPage',
	  NOTIFICATION_MAX_NAV_PAGES: 'bb.notification.maxNavPages',
	  NOTIFICATION_PAGINATION_TYPE: 'bb.notification.paginationType',
	  NOTIFICATION_DISMISS_STICKY: 'dismissSticky',
	  NOTIFICATION_LISTEN_FE_NOTIFY: 'feNotifications',
	  NOTIFICATION_DISMISS_ALERT_TIME: 'alertHidingTimeout',
	  NOTIFICATION_DISMISS_WARNING_TIME: 'warningHidingTimeout',
	  NOTIFICATION_DISMISS_INFO_TIME: 'infoHidingTimeout',
	  NOTIFICATION_DISMISS_SUCCESS_TIME: 'successHidingTimeout',
	  NOTIFICATION_DISMISS_MESSAGE_TIME: 'dismissMessageTime'
	};
	
	/**
	 * Enum for events
	 * @name Event
	 * @type {Object}
	 */
	var Event = exports.Event = {
	  NOTIFICATION_STREAM_SUCCESS: 'bb.event.notifications.stream.success',
	  NOTIFICATION_STREAM_ERROR: 'bb.event.notifications.stream.error',
	  NOTIFICATION_UNREAD_COUNT_SUCCESS: 'bb.event.notifications.unread.count.success',
	  NOTIFICATION_UNREAD_COUNT_ERROR: 'bb.event.notifications.unread.count.error'
	};
	
	/**
	 * Enum for polling types
	 * @name PollingType
	 * @type {Object}
	 */
	var PollingType = exports.PollingType = {
	  STREAM: 'loadStream',
	  UNREAD_COUNT: 'loadUnreadCount'
	};

/***/ })

/******/ })
});
;
//# sourceMappingURL=model-bb-notifications-ng.js.map