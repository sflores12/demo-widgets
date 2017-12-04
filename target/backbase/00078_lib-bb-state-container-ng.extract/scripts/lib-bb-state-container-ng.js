(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vendor-bb-angular"), require("lib-bb-widget-ng"), require("lib-bb-storage-ng"), require("lib-bb-state-container"));
	else if(typeof define === 'function' && define.amd)
		define("lib-bb-state-container-ng", ["vendor-bb-angular", "lib-bb-widget-ng", "lib-bb-storage-ng", "lib-bb-state-container"], factory);
	else if(typeof exports === 'object')
		exports["lib-bb-state-container-ng"] = factory(require("vendor-bb-angular"), require("lib-bb-widget-ng"), require("lib-bb-storage-ng"), require("lib-bb-state-container"));
	else
		root["lib-bb-state-container-ng"] = factory(root["vendor-bb-angular"], root["lib-bb-widget-ng"], root["lib-bb-storage-ng"], root["lib-bb-state-container"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_5__, __WEBPACK_EXTERNAL_MODULE_12__, __WEBPACK_EXTERNAL_MODULE_26__, __WEBPACK_EXTERNAL_MODULE_65__) {
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

	module.exports = __webpack_require__(64);

/***/ }),

/***/ 5:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_5__;

/***/ }),

/***/ 12:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_12__;

/***/ }),

/***/ 26:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_26__;

/***/ }),

/***/ 64:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.bbStateContainerKey = undefined;
	
	var _vendorBbAngular = __webpack_require__(5);
	
	var _vendorBbAngular2 = _interopRequireDefault(_vendorBbAngular);
	
	var _libBbStateContainer = __webpack_require__(65);
	
	var _libBbStateContainer2 = _interopRequireDefault(_libBbStateContainer);
	
	var _libBbStorageNg = __webpack_require__(26);
	
	var _libBbStorageNg2 = _interopRequireDefault(_libBbStorageNg);
	
	var _libBbWidgetNg = __webpack_require__(12);
	
	var _libBbWidgetNg2 = _interopRequireDefault(_libBbWidgetNg);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * @module lib-bb-state-container-ng
	 *
	 * @description Adds a state container (See
	 * {@link module:lib-bb-state-container.lib-bb-state-container}) to the widget's
	 * scope as `state`.
	 *
	 * The state container is also added to the context for extension intents and helpers, See also:
	 *  - Extension {@link module:lib-bb-extension-intents-ng.IntentContext}
	 *  - Extension {@link module:lib-bb-extension-helpers-ng.HelperContext}
	 *  - Extension {@link module:lib-bb-extension-events-ng.EventContext}
	 *
	 * This library can also be configured to enable sharing of state within multiple "widget
	 * instances" on mobile.
	 *
	 * Sharing state is enabled by adding a new preference to a widget called "widget-sync-id". Any
	 * widgets that share the same value for "widget-sync-id" will automatically have their state
	 * shared (via {@link module:lib-bb-storage-ng.lib-bb-storage-ng}). This is a feature to be used
	 * on the *hybrid mobile widgets* so that multiple instances of the same widget (usually with a
	 * different extension) automatically share a single state.
	 *
	 * To use this feature it's important that the widget doesn't have any state which is
	 * derived from extension hooks (eg: the result a processData hook should never be saved
	 * directly to the state object). Instead, these hooks can be implemented as state selectors (see
	 * {@link module:lib-bb-state-container.StateContainer#SelectorCreator}).
	 *
	 *
	 * @example
	 * <!-- Extension template: Use `state` on the scope -->
	 * <h2>Todo</h2>
	 * <div>
	 *   <ul><li ng-repeat="todo in state.todos track by todo.id">{{todo.title}}</li></ul>
	 * </div>
	 */
	
	var moduleKey = 'lib-bb-state-container-ng';
	
	/**
	 * @name bbStateContainerKey
	 * @type {string}
	 * @description The injector key to be used to provide the state container instance
	 */
	var bbStateContainerKey = exports.bbStateContainerKey = moduleKey + ':stateContainer';
	
	exports.default = _vendorBbAngular2.default.module(moduleKey, [_libBbStorageNg2.default, _libBbWidgetNg2.default])
	
	/**
	 * A provider that allows configuration of the initial state of the container.
	 *
	 *
	 * @name bbStateContainerProvider
	 * @ngkey lib-bb-state-container-ng:bbStateContainerProvider
	 * @type {object}
	 * @example
	 * angular.module(...)
	 *   .config([
	 *     `${bbStateContainerKey}Provider`,
	 *     (provider) => {
	 *       provider.setInitialState(...);
	 *     },
	 *   ]);
	 */
	.provider(bbStateContainerKey, function () {
	  var initialState = undefined;
	  return {
	    setInitialState: function setInitialState(state) {
	      initialState = state;
	    },
	    $get: function $get() {
	      return (0, _libBbStateContainer2.default)(initialState);
	    }
	  };
	}).run([bbStateContainerKey, _libBbStorageNg.bbStorageServiceKey, _libBbWidgetNg.widgetKey, function (stateContainer, storage, widget) {
	  var widgetId = widget.getId();
	  // @FIXME Duplicated in lib-bb-start-ng
	  var storageKey = widget.getStringPreference('widget-sync-id');
	
	  if (storageKey == null) return;
	
	  stateContainer.subscribe(function (state, fromStorage) {
	    if (fromStorage) return;
	
	    // Only store changes originating from myself.
	    storage.setItem(storageKey, { origin: widgetId, state: state });
	  });
	
	  storage.subscribe(storageKey, function (_ref) {
	    var origin = _ref.origin,
	        state = _ref.state;
	
	    if (origin === widgetId) return;
	
	    // Set ViewState without notifying subscribers - prevent infinite update loop
	    stateContainer.setState(state, true);
	  });
	}]).run(['$rootScope', bbStateContainerKey, function ($scope, stateContainer) {
	  Object.defineProperty($scope, 'state', {
	    get: function get() {
	      return stateContainer.getState();
	    }
	  });
	}]).name;

/***/ }),

/***/ 65:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_65__;

/***/ })

/******/ })
});
;
//# sourceMappingURL=lib-bb-state-container-ng.js.map