(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vendor-bb-angular"), require("lib-bb-widget-ng"), require("lib-bb-event-bus-ng"), require("lib-bb-storage-ng"));
	else if(typeof define === 'function' && define.amd)
		define("lib-bb-intent-ng", ["vendor-bb-angular", "lib-bb-widget-ng", "lib-bb-event-bus-ng", "lib-bb-storage-ng"], factory);
	else if(typeof exports === 'object')
		exports["lib-bb-intent-ng"] = factory(require("vendor-bb-angular"), require("lib-bb-widget-ng"), require("lib-bb-event-bus-ng"), require("lib-bb-storage-ng"));
	else
		root["lib-bb-intent-ng"] = factory(root["vendor-bb-angular"], root["lib-bb-widget-ng"], root["lib-bb-event-bus-ng"], root["lib-bb-storage-ng"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_5__, __WEBPACK_EXTERNAL_MODULE_12__, __WEBPACK_EXTERNAL_MODULE_13__, __WEBPACK_EXTERNAL_MODULE_26__) {
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

	module.exports = __webpack_require__(25);

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
/* 11 */,
/* 12 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_12__;

/***/ }),
/* 13 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_13__;

/***/ }),
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.bbIntentKey = undefined;
	
	var _vendorBbAngular = __webpack_require__(5);
	
	var _vendorBbAngular2 = _interopRequireDefault(_vendorBbAngular);
	
	var _libBbWidgetNg = __webpack_require__(12);
	
	var _libBbWidgetNg2 = _interopRequireDefault(_libBbWidgetNg);
	
	var _libBbEventBusNg = __webpack_require__(13);
	
	var _libBbEventBusNg2 = _interopRequireDefault(_libBbEventBusNg);
	
	var _libBbStorageNg = __webpack_require__(26);
	
	var _libBbStorageNg2 = _interopRequireDefault(_libBbStorageNg);
	
	var _bbIntent = __webpack_require__(27);
	
	var _bbIntent2 = _interopRequireDefault(_bbIntent);
	
	var _navigator = __webpack_require__(28);
	
	var _navigator2 = _interopRequireDefault(_navigator);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * @module lib-bb-intent-ng
	 *
	 * @description Provides API for inter and intra widget navigation.
	 *
	 * @example
	 * import angular from 'vendor-bb-angular';
	 * import intentModuleKey, { bbIntentKey } from 'lib-bb-intent-ng';
	 *
	 * angular.module('example-module', [intentModuleKey])
	 *   .controller('MyController', [bbIntentKey, MyController]);
	 *
	 * // MyController
	 *
	 * export default (bbIntents) => {
	 *   const someIntent = bbIntents.create('do.something');
	 *
	 *   const doSomething = () => {
	 *     someIntent({ pass: 'something' });
	 *   };
	 *
	 *   const $onInit = () => {
	 *     bbIntents.handle('handle.some.intent', (passedData) => {
	 *       // code for intent handling
	 *     });
	 *   };
	 * };
	 *
	 */
	
	var moduleKey = 'lib-bb-intent-ng';
	
	/**
	 * The dependency injection key for the BbIntent Service
	 * @name bbIntentKey
	 * @type {string}
	 */
	var bbIntentKey = exports.bbIntentKey = moduleKey + ':intent';
	
	/**
	 * @name default
	 * @type {string}
	 * @description Angular module name
	 */
	exports.default = _vendorBbAngular2.default.module(moduleKey, [_libBbWidgetNg2.default, _libBbEventBusNg2.default, _libBbStorageNg2.default])
	
	/**
	 * A provider that allows configuration of the intent routes and adapter.
	 *
	 * @name BbIntentProvider
	 * @ngkey lib-bb-intent-ng:intentProvider
	 * @type {object}
	 * @example
	 * // General usage:
	 * angular.module(...)
	 *   .config([
	 *     `${bbIntentKey}Provider`,
	 *     (intentProvider) => {
	 *       intentProvider.setRoutes(...);
	 *     }
	 *   ]);
	 *
	 * // Using {@link config-bb-providers-ng.config-bb-providers-ng}:
	 * export default [
	 *   ['lib-bb-intent-ng:intentProvider', (intents) => {
	 *     intents.setRoutes({
	 *       'something.do': '/gateway/api/sudoku/other',
	 *       'something.ask': '/gateway/api/sudoku/other',
	 *     });
	 *   }],
	 * ];
	 */
	.provider(bbIntentKey, function () {
	  var configuredRoutes = {};
	  var configuredAdapter = null;
	
	  return {
	    /**
	     * @name BbIntentProvider#setRoutes
	     * @type {function}
	     * @param {object.<string>} routes A map of intent keys to routes
	     */
	    setRoutes: function setRoutes(routes) {
	      configuredRoutes = routes;
	    },
	
	    /**
	     * @name BbIntentProvider#setNavigationAdapter
	     * @type {function}
	     * @param {NavigationAdapter} adapter A navigation adapter
	     */
	    setNavigationAdapter: function setNavigationAdapter(adapter) {
	      configuredAdapter = adapter;
	    },
	
	    /**
	     * @name BbIntentProvider#$get
	     * @type {function}
	     * @returns {BbIntent} Intent service
	     */
	    $get: ['$log', _libBbWidgetNg.widgetKey, _libBbEventBusNg.eventBusKey, _libBbStorageNg.bbStorageServiceKey,
	    /* into */
	    function (log, widget, eventBus, storage) {
	      var adapter = configuredAdapter || (0, _navigator2.default)(widget, eventBus);
	      return (0, _bbIntent2.default)(log, widget, eventBus, storage, adapter, configuredRoutes);
	    }]
	  };
	}).name;
	
	/**
	 * @typedef NavigationAdapter
	 * @type {object}
	 * @property {CurrentLocator} current Returns current route
	 * @property {ShouldNavigate} shouldNavigate Returns true if current route is not valid
	 * @property {Navigate} navigate Navigates to desired route
	 */
	
	/**
	 * @typedef NavigationAdapter#CurrentLocator
	 * @type {function}
	 * @returns {string} Current route
	 */
	
	/**
	 * @typedef NavigationAdapter#ShouldNavigate
	 * @type {function}
	 * @param {string} route Current route
	 * @returns {boolean} False if current route is valid
	 */
	
	/**
	 * @typedef NavigationAdapter#Navigate
	 * @type {function}
	 * @param {string} route Route to navigate to
	 * @returns {void}
	 */

/***/ }),
/* 26 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_26__;

/***/ }),
/* 27 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	var STORE_KEY = 'lib-bb-intent:navigated-intent';
	var INTENT_EVENT = 'lib-bb-intent:intent';
	var PREFERENCE_KEY = 'intents';
	
	var noop = function noop() {};
	
	/**
	 * @name BbIntent
	 * @type {object}
	 */
	
	exports.default = function (log, widgetInstance, eventBus, storage, navigationAdapter, routesConf) {
	  var responseHandlers = {};
	  var requestHandlers = {};
	  var _initHandler = noop;
	  var persistHandlers = [];
	  var initCalled = false;
	
	  /**
	   * Add a persist/restore handler
	   *
	   * Used to retain additional information along with the intent that
	   * is not part of the intent, but is only used by the current widget
	   * to restore its own internal state.
	   *
	   * @name BbIntent#persist
	   * @sig (Unit -> state, state -> Unit) -> Unit
	   * @type {function}
	   * @param {GetState} getStateToPersist A function that provides the state to persist
	   * @param {RestoreState} restorePersistedState A function to restore the persisted state
	   * @return {void}
	   */
	  var persist = function persist(getStateToPersist, restorePersistedState) {
	    persistHandlers = [].concat(_toConsumableArray(persistHandlers), [{
	      get: getStateToPersist,
	      set: restorePersistedState
	    }]);
	  };
	
	  /**
	   * Determine if the extra state from the intent should be restored in this widget instance
	   * @name BbIntent~shouldRestoreState
	   * @inner
	   * @sig Intent -> Bool
	   * @type {function}
	   * @param {Intent} intent
	   * @return {bool}
	   */
	  var shouldRestoreState = function shouldRestoreState(intent) {
	    return intent.persisted && intent.initiator && intent.initiator.group === widgetInstance.getStringPreference('path');
	  };
	
	  var restorePersistedState = function restorePersistedState(intent) {
	    if (!shouldRestoreState(intent)) return;
	    persistHandlers.forEach(function (_ref, i) {
	      var set = _ref.set;
	      return set(intent.persisted[i]);
	    });
	  };
	
	  var getStateToPersist = function getStateToPersist() {
	    return persistHandlers.map(function (_ref2) {
	      var get = _ref2.get;
	      return get();
	    });
	  };
	
	  /**
	   * Navigate to the given location
	   * @name BbIntent~navigate
	   * @inner
	   * @sig (Unit -> Unit, String) -> Unit
	   * @type {function}
	   * @param {function} storeIntent Persist the intent to be fetched after navigation
	   * @param {string} target The target to navigate to (values depends on the navigationAdapter)
	   * @return {void}
	   */
	  var navigate = function navigate(storeIntent, target) {
	    if (!target) {
	      return;
	    }
	    if (navigationAdapter.shouldStore(target)) {
	      storeIntent();
	    }
	    navigationAdapter.navigate(target);
	  };
	
	  /**
	   * Dispatch the intent to the specified target
	   * @name BbIntent~dispatch
	   * @inner
	   * @sig Intent -> Unit
	   * @type {function}
	   * @param {Intent} intent The intent (request or response) to be dispatched
	   * @param {string} target The target to navigate to (values depends on the navigationAdapter)
	   * @return {void}
	   */
	  var dispatch = function dispatch(intent, target) {
	    // mutually recursive definition
	    // eslint-disable-next-line no-use-before-define
	    if (handleIntent(intent)) {
	      return;
	    }
	    navigate(function () {
	      storage.setItem(STORE_KEY, intent);
	    }, target);
	    eventBus.publish(INTENT_EVENT, intent);
	  };
	
	  /**
	   * Consult the routing configuration to determine where the intent should be directed
	   * @name BbIntent~routeRequest
	   * @inner
	   * @sig Intent -> Promise String
	   * @type {function}
	   * @param {Intent} intent The intent to route
	   * @return {Promise.<string>} The target location to which the intent should be directed
	   */
	  var routeRequest = function routeRequest(intent) {
	    return Promise.resolve(routesConf).then(function (routes) {
	      var target = routes[intent.name];
	      if (!target) {
	        throw new Error('No widget found that is able to handle intent - ' + intent.name);
	      }
	      return target;
	    });
	  };
	
	  var isResponse = function isResponse(intent) {
	    return intent.result != null;
	  };
	  var isRequest = function isRequest(intent) {
	    return intent.result == null;
	  };
	
	  /**
	   * Determine if the intent response should be handled by this widget instance
	   * @name BbIntent~shouldHandleResponse
	   * @inner
	   * @sig Intent -> Bool
	   * @type {function}
	   * @param {Intent} intent
	   * @return {bool} If this widget is configured to handle this response
	   */
	  var shouldHandleResponse = function shouldHandleResponse(intent) {
	    return isResponse(intent) && intent.result && intent.initiator && intent.initiator.id === widgetInstance.getId();
	  };
	
	  /**
	   * Handle an intent as a response
	   * @name BbIntent~handleResponse
	   * @inner
	   * @sig (Map String (Object, Object -> Bool), Intent) -> Bool
	   * @type {function}
	   * @param {ResponseHandlers} handlers A collection of available response handlers
	   * @param {Intent} intent The intent to be handled
	   * @return {bool} Whether a suitable handler was found for the intent
	   */
	  var handleResponse = function handleResponse(handlers, intent) {
	    if (!shouldHandleResponse(intent)) {
	      return false;
	    }
	    if (!handlers[intent.name]) {
	      log.warn('Failed to handle intent response (' + intent.name + ').');
	      return false;
	    }
	    restorePersistedState(intent);
	    handlers[intent.name](intent.result);
	    return true;
	  };
	
	  /**
	   * Determine if the intent should be handled by this widget instance
	   * @name BbIntent~shouldHandleRequest
	   * @inner
	   * @sig Intent -> Bool
	   * @type {function}
	   * @param {Intent} intent
	   * @return {bool} If this widget is configured to handle this request
	   */
	  var shouldHandleRequest = function shouldHandleRequest(intent) {
	    return isRequest(intent) && (widgetInstance.getStringArrayPreference(PREFERENCE_KEY) || []).includes(intent.name);
	  };
	
	  /**
	   * Handle an intent as a request
	   * @name BbIntent~handleRequest
	   * @inner
	   * @sig (Map String (Object, Object -> Bool), Intent) -> Bool
	   * @type {function}
	   * @param {RequestHandlers} handlers A collection of available request handlers
	   * @param {Intent} intent The intent to be handled
	   * @return {bool} Whether a suitable handler was found for the intent
	   */
	  var handleRequest = function handleRequest(handlers, intent) {
	    if (!shouldHandleRequest(intent)) {
	      return false;
	    }
	    if (!handlers[intent.name]) {
	      log.warn('Failed to handle intent (' + intent.name + ').');
	      return false;
	    }
	    restorePersistedState(intent);
	    handlers[intent.name](intent.parameters, function (result) {
	      var response = {
	        name: intent.name,
	        parameters: intent.parameters,
	        initiator: intent.initiator,
	        persisted: intent.persisted,
	        result: result
	      };
	      if (!intent.initiator.location) {
	        throw new Error('The return route for the ' + intent.name + ' intent is not set - maybe you ' + 'forgot to configure the "intents.response" preference on widget ' + ('"' + intent.initiator.id + '"'));
	      }
	      dispatch(response, intent.initiator.location);
	    });
	    return true;
	  };
	
	  /**
	   * Handle intents (requests or responses) by delegating to the configured handler
	   *
	   * @name BbIntent~handleIntent
	   * @inner
	   * @sig (Map String (Object, Object -> Bool), Intent) -> Bool
	   * @type {function}
	   * @param {Intent} intent The intent to handle
	   * @return {bool} Whether a suitable handler was found for the intent
	   */
	  var handleIntent = function handleIntent(intent) {
	    return handleResponse(responseHandlers, intent) || handleRequest(requestHandlers, intent);
	  };
	
	  /**
	   * Set an intent handler for the given intent name.
	   *
	   * The handler is registered so that (when initialized) the bbIntent instance can handle the
	   * intent request from another widget.
	   *
	   * @name BbIntent#handle
	   * @sig (Map String (Object, Object -> Bool), Unit -> Unit) -> Promise Unit
	   * @type {function}
	   * @param {string} name The name of the intent
	   * @param {function} requestHandler Callback to handle the intent
	   * @return {void}
	   */
	  var handle = function handle(name, requestHandler) {
	    if (requestHandlers[name]) {
	      throw new Error('Multiple intent handlers registered for intent - ' + name);
	    }
	    requestHandlers[name] = requestHandler;
	  };
	
	  /**
	   * Create an intent that can later be triggered (as a request).
	   *
	   * The (optional) handler is registered so that (when initialized) the bbIntent instance can
	   * handle the response to the request.
	   *
	   * @name BbIntent#create
	   * @sig (String, Response -> Unit) -> Object -> Unit
	   * @type {function}
	   * @param {string} name The name of the intent, used to determine the target widget & handlers
	   * @param {?function} responseHandler A callback to return the result of the handled intent
	   * @return {RequestIntent} A function to trigger the intent
	   */
	  var create = function create(name) {
	    var responseHandler = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : noop;
	
	    if (responseHandlers[name]) {
	      throw new Error('Multiple intents created with the same name - ' + name);
	    }
	    responseHandlers[name] = responseHandler;
	    return function (parameters) {
	      var request = {
	        name: name,
	        parameters: parameters,
	        initiator: {
	          location: navigationAdapter.current(),
	          group: widgetInstance.getStringPreference('path'),
	          id: widgetInstance.getId()
	        },
	        persisted: getStateToPersist()
	      };
	      return routeRequest(request).then(function (target) {
	        return dispatch(request, target);
	      }).catch(function (error) {
	        log.error(error);
	      });
	    };
	  };
	
	  /**
	   * Handle intents (requests or responses) from storage or (future) events.
	   *
	   * Like the cxp.ready event, this method should only be called *once per widget*, after
	   * all then intent handlers have been registered.
	   *
	   * @name BbIntent#init
	   * @sig (Unit -> Unit) -> Promise Unit
	   * @type {function}
	   * @param {?function} notHandled Callback for when the intent (if there is one) is not handled
	   *                              by this widget
	   * @return {Promise.<void>}
	   */
	  var init = function init() {
	    var notHandled = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : noop;
	
	    if (initCalled) {
	      throw new Error('Intent init should only be called once');
	    }
	
	    initCalled = true;
	
	    eventBus.subscribe(INTENT_EVENT, handleIntent);
	    return storage.getItem(STORE_KEY).then(function (stored) {
	      if (stored && handleIntent(stored)) {
	        storage.removeItem(STORE_KEY);
	      } else {
	        _initHandler();
	        notHandled();
	      }
	    });
	  };
	
	  return {
	    handle: handle,
	    create: create,
	    initHandler: function initHandler(handler) {
	      _initHandler = handler;
	    },
	    init: init,
	    persist: persist
	  };
	};
	
	/**
	 * @typedef RequestIntent
	 * @type {function}
	 * @param {Object} parameters The parameters to be sent along with the intent request
	 * @return {Promise<void>}
	 */
	
	/**
	 * @typedef Intent
	 * @inner
	 * @type {function}
	 * @property {string} name
	 * @property {Object} parameters An arbitrary hash of parameters to be passed along with the intent
	 * @property {Object} initiator The widget that initiated the intent
	 * @property {string} initiator.location The location of the widget instance
	 * @property {string} initiator.id The id of the widget
	 * @property {?any} result The result of responding to the intent
	 */
	
	/**
	 * @typedef GetState
	 * @type {function}
	 * @description The function to call to get the state
	 * @return {Object} state
	 */
	
	/**
	 * @typedef RestoreState
	 * @type {function}
	 * @description The function to call when restoring the state
	 * @param {Object} state
	 * @return {void}
	 */

/***/ }),
/* 28 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/* global window */
	var PREFERENCE_RESPONSE_KEY = 'intents.response';
	
	var browserLocationAdapter = exports.browserLocationAdapter = function browserLocationAdapter() {
	  return {
	    current: function current() {
	      return window.location.pathname;
	    },
	    shouldStore: function shouldStore(route) {
	      return window.location.pathname !== route;
	    },
	    navigate: function navigate(route) {
	      if (window.location.pathname === route) return;
	      window.location = route;
	    }
	  };
	};
	
	var navigationEventAdapter = exports.navigationEventAdapter = function navigationEventAdapter(widget, eventBus) {
	  return {
	    current: function current() {
	      return widget.getStringPreference(PREFERENCE_RESPONSE_KEY);
	    },
	    shouldStore: function shouldStore() {
	      return false;
	    }, // allow mobile SDK cached events to pass the data
	    navigate: function navigate(route) {
	      eventBus.publish(route);
	    }
	  };
	};
	
	exports.default = function (widget, eventBus) {
	  // This is unfortunately browser/environment detection instead of feature detection but
	  // there is no specific *feature* being used.
	  if (window.cxp && window.cxp.mobile) {
	    return navigationEventAdapter(widget, eventBus);
	  }
	  return browserLocationAdapter();
	};

/***/ })
/******/ ])
});
;
//# sourceMappingURL=lib-bb-intent-ng.js.map