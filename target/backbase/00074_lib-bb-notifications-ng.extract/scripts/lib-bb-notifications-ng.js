(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vendor-bb-angular"), require("lib-bb-event-bus-ng"));
	else if(typeof define === 'function' && define.amd)
		define("lib-bb-notifications-ng", ["vendor-bb-angular", "lib-bb-event-bus-ng"], factory);
	else if(typeof exports === 'object')
		exports["lib-bb-notifications-ng"] = factory(require("vendor-bb-angular"), require("lib-bb-event-bus-ng"));
	else
		root["lib-bb-notifications-ng"] = factory(root["vendor-bb-angular"], root["lib-bb-event-bus-ng"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_5__, __WEBPACK_EXTERNAL_MODULE_13__) {
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

	module.exports = __webpack_require__(30);

/***/ }),

/***/ 5:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_5__;

/***/ }),

/***/ 13:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_13__;

/***/ }),

/***/ 30:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.notificationsKey = undefined;
	
	var _vendorBbAngular = __webpack_require__(5);
	
	var _vendorBbAngular2 = _interopRequireDefault(_vendorBbAngular);
	
	var _libBbEventBusNg = __webpack_require__(13);
	
	var _libBbEventBusNg2 = _interopRequireDefault(_libBbEventBusNg);
	
	var _notifications = __webpack_require__(31);
	
	var _notifications2 = _interopRequireDefault(_notifications);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var moduleKey = 'lib-bb-notifications-ng';
	
	/**
	 * @name notificationsKey
	 * @type {string}
	 * @description Injector name of [Notifications](#Notifications) instance
	 */
	/**
	 * @module lib-bb-notifications-ng
	 *
	 * @description
	 * Library for publishing notifications intended to be displayed to the user.
	 *
	 * @example
	 *
	 * // Widget 1 (My Widget)
	 * import angular from 'vendor-bb-angular';
	 * import bbNotificationsModuleKey, { notificationsKey } from 'lib-bb-notifications-ng';
	 * import myModelModuleKey, { myModelKey } from 'lib-bb-my-model-ng';
	 * import bbEventBusModuleKey, { eventBusKey } from 'lib-bb-event-bus-ng';
	 *
	 * angular.module('MyWidget', [bbNotificationsModuleKey, myModelModuleKey, bbEventBusModuleKey])
	 *   .controller('MyWidgetController', [
	 *     notificationsKey, myModelKey, (notifications, myModel, bbEventBus) => ({
	 *     $onInit: () => {
	 *       myModel.load()
	 *         .then(() => {
	 *           // This shows the how to manually inject and call the notification service, but this
	 *           // is *not* recommended usage, as the message cannot be translated.
	 *           notifications.notifyInfo('My Widget data was successfully loaded');
	 *         })
	 *         .catch(() => {
	 *           // Publish a widget-specific event that the extension can choose to handle
	 *           bbEventBus.publish('my-widget.load.failed');
	 *         });
	 *     },
	 *   })]);
	 *
	 * // Widget 1 - Extension (ext-my-widget-ng)
	 * export const events = ({ notifications, $filter }) => ({
	 *   // subscribe to widget load failure event
	 *   'my-widget.load.failed': () => {
	 *     // publish translated notification to inform the user
	 *     notifications.notifyAlert($filter('i18n')('notification.load.fail'));
	 *   },
	 * });
	 *
	 * // Module 2 (Notification Module)
	 * import angular from 'vendor-bb-angular';
	 * import bbEventBusModuleKey, { eventBusKey } from 'lib-bb-event-bus-ng';
	 *
	 * angular.module('NotificationModule', [bbEventBusModuleKey])
	 *   .controller('NotificationController', [eventBusKey, '$window', (eventBus, $window) => ({
	 *     $onInit: () => {
	 *       eventBus.subscribe('bb.event.notifications.notify', ({ level, message }) => {
	 *         // display the notification to the user, if appropriate
	 *         if (level === 'ALERT') {
	 *           $window.alert(message);
	 *         }
	 *       });
	 *     },
	 *   })]);
	 */
	
	var notificationsKey = exports.notificationsKey = 'lib-bb-notifications-ng:notifications';
	
	exports.default = _vendorBbAngular2.default.module(moduleKey, [_libBbEventBusNg2.default]).factory(notificationsKey, [_libBbEventBusNg.eventBusKey, _notifications2.default]).name;

/***/ }),

/***/ 31:
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = Notifications;
	var NOTIFICATION_EVENT = 'bb.event.notifications.notify';
	
	var Level = exports.Level = {
	  ALERT: 'ALERT',
	  WARNING: 'WARNING',
	  SUCCESS: 'SUCCESS',
	  INFO: 'INFO'
	};
	
	/**
	 * @name Notifications
	 * @type {object}
	 */
	function Notifications(eventBus) {
	  var notify = function notify(message, level) {
	    eventBus.publish(NOTIFICATION_EVENT, {
	      message: message,
	      level: level
	    });
	  };
	
	  /**
	   * @description
	   * Publish a notification to alert the user to a probably unexpected situation
	   *
	   * @name Notifications#notifyAlert
	   * @type {function}
	   * @param {string} message The message to display to the user
	   * @fires bb.event.notifications.notify
	   */
	  var notifyAlert = function notifyAlert(message) {
	    return notify(message, Level.ALERT);
	  };
	
	  /**
	   * @description
	   * Publish a notification to warn the user about a possibly unexpected situation
	   *
	   * @name Notifications#notifyWarning
	   * @type {function}
	   * @param {string} message The message to display to the user
	   * @fires bb.event.notifications.notify
	   */
	  var notifyWarning = function notifyWarning(message) {
	    return notify(message, Level.WARNING);
	  };
	
	  /**
	   * @description
	   * Publish a notification to tell the user their action was successful
	   *
	   * @name Notifications#notifySuccess
	   * @type {function}
	   * @param {string} message The message to display to the user
	   * @fires bb.event.notifications.notify
	   */
	  var notifySuccess = function notifySuccess(message) {
	    return notify(message, Level.SUCCESS);
	  };
	
	  /**
	   * @description
	   * Publish a notification to inform the user about something
	   *
	   * @name Notifications#notifyInfo
	   * @type {function}
	   * @param {string} message The message to display to the user
	   * @fires bb.event.notifications.notify
	   */
	  var notifyInfo = function notifyInfo(message) {
	    return notify(message, Level.INFO);
	  };
	
	  return {
	    notifyInfo: notifyInfo,
	    notifyAlert: notifyAlert,
	    notifyWarning: notifyWarning,
	    notifySuccess: notifySuccess
	  };
	}

/***/ })

/******/ })
});
;
//# sourceMappingURL=lib-bb-notifications-ng.js.map