(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vendor-bb-angular"), require("lib-bb-widget-ng"), require("lib-bb-event-bus-ng"), require("lib-bb-notifications-ng"), require("lib-bb-widget-extension-ng"), require("lib-bb-extension-intents-ng"), require("lib-bb-view-model-ng"), require("lib-bb-state-container-ng"));
	else if(typeof define === 'function' && define.amd)
		define("lib-bb-extension-events-ng", ["vendor-bb-angular", "lib-bb-widget-ng", "lib-bb-event-bus-ng", "lib-bb-notifications-ng", "lib-bb-widget-extension-ng", "lib-bb-extension-intents-ng", "lib-bb-view-model-ng", "lib-bb-state-container-ng"], factory);
	else if(typeof exports === 'object')
		exports["lib-bb-extension-events-ng"] = factory(require("vendor-bb-angular"), require("lib-bb-widget-ng"), require("lib-bb-event-bus-ng"), require("lib-bb-notifications-ng"), require("lib-bb-widget-extension-ng"), require("lib-bb-extension-intents-ng"), require("lib-bb-view-model-ng"), require("lib-bb-state-container-ng"));
	else
		root["lib-bb-extension-events-ng"] = factory(root["vendor-bb-angular"], root["lib-bb-widget-ng"], root["lib-bb-event-bus-ng"], root["lib-bb-notifications-ng"], root["lib-bb-widget-extension-ng"], root["lib-bb-extension-intents-ng"], root["lib-bb-view-model-ng"], root["lib-bb-state-container-ng"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_5__, __WEBPACK_EXTERNAL_MODULE_12__, __WEBPACK_EXTERNAL_MODULE_13__, __WEBPACK_EXTERNAL_MODULE_14__, __WEBPACK_EXTERNAL_MODULE_15__, __WEBPACK_EXTERNAL_MODULE_16__, __WEBPACK_EXTERNAL_MODULE_17__, __WEBPACK_EXTERNAL_MODULE_18__) {
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

	module.exports = __webpack_require__(11);

/***/ }),
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_5__;

/***/ }),
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.extensionEventsDefaultContextKey = exports.extensionEventsContextKey = undefined;
	
	var _vendorBbAngular = __webpack_require__(5);
	
	var _vendorBbAngular2 = _interopRequireDefault(_vendorBbAngular);
	
	var _libBbWidgetNg = __webpack_require__(12);
	
	var _libBbWidgetNg2 = _interopRequireDefault(_libBbWidgetNg);
	
	var _libBbEventBusNg = __webpack_require__(13);
	
	var _libBbEventBusNg2 = _interopRequireDefault(_libBbEventBusNg);
	
	var _libBbNotificationsNg = __webpack_require__(14);
	
	var _libBbNotificationsNg2 = _interopRequireDefault(_libBbNotificationsNg);
	
	var _libBbWidgetExtensionNg = __webpack_require__(15);
	
	var _libBbExtensionIntentsNg = __webpack_require__(16);
	
	var _libBbExtensionIntentsNg2 = _interopRequireDefault(_libBbExtensionIntentsNg);
	
	var _libBbViewModelNg = __webpack_require__(17);
	
	var _libBbViewModelNg2 = _interopRequireDefault(_libBbViewModelNg);
	
	var _libBbStateContainerNg = __webpack_require__(18);
	
	var _libBbStateContainerNg2 = _interopRequireDefault(_libBbStateContainerNg);
	
	var _nativeSubscribe = __webpack_require__(19);
	
	var _nativeSubscribe2 = _interopRequireDefault(_nativeSubscribe);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; } /**
	                                                                                                                                                                                                                   * @module lib-bb-extension-events-ng
	                                                                                                                                                                                                                   *
	                                                                                                                                                                                                                   * @description Allows extensions to define 'events' (see
	                                                                                                                                                                                                                   * {@link module:lib-bb-event-bus-ng.lib-bb-event-bus-ng}) to subscribe to.
	                                                                                                                                                                                                                   *
	                                                                                                                                                                                                                   * Event subscriptions are created from the exported `events` of the extension module.
	                                                                                                                                                                                                                   *
	                                                                                                                                                                                                                   * Events can either be exported as an object, or a function which returns an
	                                                                                                                                                                                                                   * {@link EventHandlers} object.
	                                                                                                                                                                                                                   *
	                                                                                                                                                                                                                   * If the `events` is a function it will receive an {@link EventContext} object.
	                                                                                                                                                                                                                   *
	                                                                                                                                                                                                                   * The object returned should be a map of event name to callback (see example below).
	                                                                                                                                                                                                                   *
	                                                                                                                                                                                                                   * To subscribe to native mobile events, you can use the {@link withNativeEvents} helper to
	                                                                                                                                                                                                                   * create your {@link EventHandlers}.
	                                                                                                                                                                                                                   *
	                                                                                                                                                                                                                   * @example
	                                                                                                                                                                                                                   * // My "TODO" widget extension:
	                                                                                                                                                                                                                   * export const events = ({ notifications, $filter }) => ({
	                                                                                                                                                                                                                   *   // subscribes to 'model-bb-todo.load-list.failed' event
	                                                                                                                                                                                                                   *   'model-bb-todo.load-list.failed': () => {
	                                                                                                                                                                                                                   *     notifications.notifyAlert($filter('i18n')('notification.load-list.failed'));
	                                                                                                                                                                                                                   *   },
	                                                                                                                                                                                                                   * });
	                                                                                                                                                                                                                   */
	
	/**
	 * The default context passed to the `events` function of the extension. This context can be
	 * extended by individual widgets, so consult the widget docs for additional context properties.
	 * @typedef EventContext
	 * @type {Object}
	 * @property {Object} $filter Angular's $filter service.
	 *   See {@link https://docs.angularjs.org/api/ng/service/$filter}
	 * @property {module:lib-bb-widget.BBWidget} widget The widget instance
	 * @property {module:lib-bb-notifications-ng.Notifications} notifications The notifications service
	 * @property {module:lib-bb-event-bus-ng.publish} publish The publish function of the event bus
	 * @property {Object} intents The extension intents object created by
	 *   {@link module:lib-bb-extension-intents-ng}
	 * @property {module:lib-bb-state-container.StateContainer} viewModel View model state container
	 *   created by {@link module:lib-bb-view-model-ng}
	 *   (deprecated since Building Blocks 2.6.0)
	 * @property {module:lib-bb-state-container.StateContainer} stateContainer Widget state container
	 *   created by {@link module:lib-bb-state-container-ng}
	 * @property {withNativeEvents} withNativeEvents Use this function to include native events in
	 *   the exported events. See {@link withNativeEvents}
	 */
	
	
	var moduleKey = 'lib-bb-extension-events-ng';
	var nativeSubscribeKey = 'lib-bb-extension-events-ng:native-subscribe';
	
	/**
	 * @name extensionEventsContextKey
	 * @type {string}
	 * @description
	 * The injector key to be used to provide an alternative context to the extension module's events
	 *
	 * @example
	 * // "TODO" Widget index.js
	 *
	 * import bbExtensionEventsModuleKey, {
	 *   extensionEventsContextKey,
	 * } from 'lib-bb-extension-events-ng';
	 *
	 * import todoModelModuleKey, { modelTodoKey } from 'model-bb-todo-ng';
	 *
	 * // Add TODO `model` to the `context` provided to the extension `events` key
	 * export default angular.module(..., [
	 *   ...,
	 *   extensionEventsContextKey,
	 *   todoModelModuleKey,
	 * ])
	 * .factory(extensionEventsContextKey, [
	 *   modelTodoKey,
	 *   (model) => ({
	 *     model,
	 *   }),
	 * ])
	 */
	var extensionEventsContextKey = exports.extensionEventsContextKey = moduleKey + ':context';
	var extensionEventsDefaultContextKey = exports.extensionEventsDefaultContextKey = moduleKey + ':default-context';
	
	var BUS_EVENTS = Symbol('BUS_EVENTS');
	var NATIVE_EVENTS = Symbol('NATIVE_EVENTS');
	
	var parseEvents = function parseEvents(events) {
	  if (!events[NATIVE_EVENTS]) {
	    return { busEvents: events, nativeEvents: {} };
	  }
	  return {
	    busEvents: events[BUS_EVENTS] || {},
	    nativeEvents: events[NATIVE_EVENTS] || {}
	  };
	};
	
	var withNativeEvents = function withNativeEvents(nativeEvents, busEvents) {
	  var _ref;
	
	  return _ref = {}, _defineProperty(_ref, BUS_EVENTS, busEvents), _defineProperty(_ref, NATIVE_EVENTS, nativeEvents), _ref;
	};
	
	/**
	 * Checks the current phase before executing the function
	 * @inner
	 * @param scope - angular scope
	 * @returns {function(*=)}
	 */
	var makeSafeApply = function makeSafeApply(scope) {
	  return function (fn) {
	    var phase = scope.$root.$$phase;
	    if (phase === '$apply' || phase === '$digest') {
	      if (fn && typeof fn === 'function') {
	        fn();
	      }
	    } else {
	      scope.$apply(fn);
	    }
	  };
	};
	
	exports.default = _vendorBbAngular2.default.module(moduleKey, [_libBbWidgetExtensionNg.bbWidgetExtensionModuleKey, _libBbWidgetNg2.default, _libBbEventBusNg2.default, _libBbNotificationsNg2.default, _libBbExtensionIntentsNg2.default, _libBbViewModelNg2.default, _libBbStateContainerNg2.default]).value(extensionEventsContextKey, {}).factory(extensionEventsDefaultContextKey, ['$filter', _libBbEventBusNg.eventBusKey, _libBbWidgetNg.widgetKey, _libBbNotificationsNg.notificationsKey, _libBbExtensionIntentsNg.extensionIntentsKey, _libBbViewModelNg.bbViewModelKey, _libBbStateContainerNg.bbStateContainerKey, function ($filter, eventBus, widget, notifications, intents, viewModel, stateContainer) {
	  return {
	    $filter: $filter,
	    widget: widget,
	    notifications: notifications,
	    publish: eventBus.publish,
	    withNativeEvents: withNativeEvents,
	    intents: intents,
	    viewModel: viewModel,
	    stateContainer: stateContainer
	  };
	}]).factory(nativeSubscribeKey, ['$rootScope', function ($rootScope) {
	  return (0, _nativeSubscribe2.default)(makeSafeApply($rootScope));
	}]).run([_libBbWidgetExtensionNg.bbWidgetExtensionKey, _libBbEventBusNg.eventBusKey, extensionEventsDefaultContextKey, _libBbWidgetExtensionNg.extensionContextKey, extensionEventsContextKey, nativeSubscribeKey, function (ext, eventBus, defaultContext, extensionContext, customContext, subscribeNative) {
	  // Attach event listeners
	  var events = typeof ext.events === 'function' ? ext.events(Object.assign({}, defaultContext, extensionContext, customContext)) : ext.events || {};
	
	  var _parseEvents = parseEvents(events),
	      busEvents = _parseEvents.busEvents,
	      nativeEvents = _parseEvents.nativeEvents;
	
	  Object.keys(busEvents).forEach(function (event) {
	    eventBus.subscribe(event, busEvents[event]);
	  });
	  Object.keys(nativeEvents).forEach(function (event) {
	    subscribeNative(event, nativeEvents[event]);
	  });
	}]).name;
	
	/**
	 * @typedef withNativeEvents
	 * @type {Function}
	 * @param {EventHandlers} nativeEvents The native event handlers
	 * @param {EventHandlers} busEvents The event-bus event handlers
	 * @returns {EventHandlers} The event defintion for the extension, including native events
	 * @example
	 *
	 * // "TODO" Widget index.js
	 * export const events = ({ intents, viewModel, withNativeEvents })
	 *   => withNativeEvents(
	 *       {
	 *         'bb.action.contact.edit': () => {
	 *           intents.editContact({
	 *             id: viewModel.getState().contact.data.id,
	 *           });
	 *         },
	 *       },
	 *       {
	 *         // normal bus events here...
	 *       }
	 *   );
	 */
	
	/**
	 * @typedef EventHandlers
	 * @description Object hash of 'event-name': subscription
	 * @type {object<module:lib-bb-event-bus-ng.Subscription>}
	 */
	
	/**
	 * @typedef EventHandlersFactory
	 * @type {function}
	 * @param {EventContext} context
	 * @return {EventHandlers}
	 */
	
	/**
	 * @typedef ExtensionEvents
	 * @type {EventHandlers|EventHandlersFactory}
	 */

/***/ }),
/* 12 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_12__;

/***/ }),
/* 13 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_13__;

/***/ }),
/* 14 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_14__;

/***/ }),
/* 15 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_15__;

/***/ }),
/* 16 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_16__;

/***/ }),
/* 17 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_17__;

/***/ }),
/* 18 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_18__;

/***/ }),
/* 19 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	/* global window */
	
	exports.default = function (safeApply) {
	  /**
	   * @inner
	   * @name nativeSubscribe
	   * @description Subscribe to be notified when an event on the same topic event is `publish`ed
	   *   by a native mobile app.
	   *
	   * The callback will trigger an angular digest.
	   * @type {Function}
	   * @param {String} topic
	   * @param {Subscription} callback To be called when an event is published on the same topic
	   * @return {void}
	   *
	   * @example
	   * nativeSubcribe('test', (payload) => console.log('called with payload:', payload));
	   */
	  var nativeSubscribe = function nativeSubscribe(topic, callback) {
	    var wrappedCallback = function wrappedCallback() {
	      for (var _len = arguments.length, internalArgs = Array(_len), _key = 0; _key < _len; _key++) {
	        internalArgs[_key] = arguments[_key];
	      }
	
	      safeApply(callback.bind.apply(callback, [null].concat(internalArgs)));
	    };
	    window.addEventListener(topic, wrappedCallback);
	  };
	
	  return nativeSubscribe;
	};
	
	/**
	 * @inner
	 * @typedef Subscription
	 * @type {function}
	 * @param {any} payload The data payload that was `publish`ed with the event
	 * @returns {void}
	 */

/***/ })
/******/ ])
});
;
//# sourceMappingURL=lib-bb-extension-events-ng.js.map