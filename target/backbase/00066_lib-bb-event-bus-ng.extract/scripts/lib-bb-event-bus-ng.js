(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vendor-bb-angular"));
	else if(typeof define === 'function' && define.amd)
		define("lib-bb-event-bus-ng", ["vendor-bb-angular"], factory);
	else if(typeof exports === 'object')
		exports["lib-bb-event-bus-ng"] = factory(require("vendor-bb-angular"));
	else
		root["lib-bb-event-bus-ng"] = factory(root["vendor-bb-angular"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_5__) {
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

	module.exports = __webpack_require__(8);

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
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.eventBusKey = undefined;
	
	var _vendorBbAngular = __webpack_require__(5);
	
	var _vendorBbAngular2 = _interopRequireDefault(_vendorBbAngular);
	
	var _eventBus = __webpack_require__(9);
	
	var _eventBus2 = _interopRequireDefault(_eventBus);
	
	var _detectBus = __webpack_require__(10);
	
	var _detectBus2 = _interopRequireDefault(_detectBus);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var moduleKey = 'lib-bb-event-bus';
	/**
	 * @name eventBusKey
	 * @type {string}
	 * @description Injector name of [EventBus](#EventBus) instance
	 */
	/**
	 * @module lib-bb-event-bus-ng
	 *
	 * @description Event bus module, angular wrapper around CXP's gadgets.pubsub.
	 *
	 * @example
	 * import bbEventBusModuleKey, { eventBusKey } from 'lib-bb-event-bus-ng';
	 *
	 * angular.module('MyModule', [bbEventBusModuleKey])
	 *   .controller('Controller1', [eventBusKey, (eventBus) => ({
	 *     $onInit: () => {
	 *       eventBus.publish('example.event', { msg: 'Hello' });
	 *     },
	 *   })])
	 *   .controller('Controller2', [eventBusKey, (eventBus) => ({
	 *     $onInit: () => {
	 *       eventBus.subscribe('example.event', ({ msg }) => {
	 *         console.log(`Controller 1 says ${msg}`);
	 *       });
	 *     },
	 *   })])
	 */
	
	var eventBusKey = exports.eventBusKey = 'lib-bb-event-bus:eventBus';
	
	/**
	 * Checks the current phase before executing the function
	 * @inner
	 * @param scope - angular scope
	 * @returns {function(*=)}
	 */
	function safeApply(scope) {
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
	}
	
	/**
	 * @name default
	 * @type {string}
	 * @description Angular module name
	 */
	exports.default = _vendorBbAngular2.default.module(moduleKey, [])
	
	/**
	 * @name EventBusProvider
	 * @type {object}
	 */
	.provider(eventBusKey, [function () {
	  var widget = undefined;
	
	  return {
	    /**
	     * @name EventBusProvider#setWidget
	     * @type {function}
	     * @param {Object} portalWidget portal client widget instance (a.k.a __WIDGET__)
	     * @return {void}
	     */
	    setWidget: function setWidget(widgetInstance) {
	      widget = widgetInstance;
	    },
	
	    /**
	     * @name EventBusProvider#$get
	     * @type {function}
	     * @return {EventBus} An [EventBus](#EventBus) service
	     */
	    $get: ['$rootScope', function ($rootScope) {
	      /* global window */
	      var instance = (0, _detectBus2.default)(window, widget);
	      if (!instance) {
	        throw new Error('pubsub is not available.');
	      }
	      return (0, _eventBus2.default)(instance, safeApply($rootScope));
	    }]
	  };
	}]).name;

/***/ }),
/* 9 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function (events, safeApply) {
	  /**
	   * @name EventBus
	   * @type {object}
	   * @description
	   */
	  var eventBus = {
	    /**
	     * @name EventBus#publish
	     * @type {function}
	     * @description Publish an event to the bus. Any subscribers should be notified
	     * @param {string} topic The name of the event, this value is needed to subscribe
	     * @param {any} payload The data payload to provide additional context to the event
	     *
	     * @example
	     * bbEventBus
	     *  .publish('test', {})
	     */
	    publish: function publish(topic, payload) {
	      return events.publish(topic, payload);
	    },
	
	    /**
	     * @name EventBus#subscribe
	     * @type {function}
	     * @description Subscribe to be notified when an event on the same topic event is `publish`ed.
	     * The callback will trigger an angular digest.
	     * @param {string} topic
	     * @param {Subscription} callback To be called when an event is published on the same topic
	     * @return {void}
	     *
	     * @example
	     * bbEventBus
	     *  .subscribe('test', function(){
	     *    console.log('event')
	     *  })
	     */
	    subscribe: function subscribe(topic, callback) {
	      var wrappedCallback = function wrappedCallback() {
	        for (var _len = arguments.length, internalArgs = Array(_len), _key = 0; _key < _len; _key++) {
	          internalArgs[_key] = arguments[_key];
	        }
	
	        safeApply(callback.bind.apply(callback, [null].concat(internalArgs)));
	      };
	
	      return events.subscribe(topic, wrappedCallback);
	    }
	  };
	  return eventBus;
	};
	
	/**
	 * @typedef Subscription
	 * @type {function}
	 * @param {any} payload The data payload that was `publish`ed with the event
	 * @returns {void}
	 */

/***/ }),
/* 10 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function (global, widget) {
	  return widget && widget.features && widget.features.pubsub || global && global.gadgets && global.gadgets.pubsub;
	};

/***/ })
/******/ ])
});
;
//# sourceMappingURL=lib-bb-event-bus-ng.js.map