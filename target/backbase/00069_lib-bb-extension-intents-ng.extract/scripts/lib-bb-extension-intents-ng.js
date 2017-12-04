(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vendor-bb-angular"), require("lib-bb-widget-ng"), require("lib-bb-widget-extension-ng"), require("lib-bb-view-model-ng"), require("lib-bb-state-container-ng"), require("lib-bb-intent-ng"));
	else if(typeof define === 'function' && define.amd)
		define("lib-bb-extension-intents-ng", ["vendor-bb-angular", "lib-bb-widget-ng", "lib-bb-widget-extension-ng", "lib-bb-view-model-ng", "lib-bb-state-container-ng", "lib-bb-intent-ng"], factory);
	else if(typeof exports === 'object')
		exports["lib-bb-extension-intents-ng"] = factory(require("vendor-bb-angular"), require("lib-bb-widget-ng"), require("lib-bb-widget-extension-ng"), require("lib-bb-view-model-ng"), require("lib-bb-state-container-ng"), require("lib-bb-intent-ng"));
	else
		root["lib-bb-extension-intents-ng"] = factory(root["vendor-bb-angular"], root["lib-bb-widget-ng"], root["lib-bb-widget-extension-ng"], root["lib-bb-view-model-ng"], root["lib-bb-state-container-ng"], root["lib-bb-intent-ng"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_5__, __WEBPACK_EXTERNAL_MODULE_12__, __WEBPACK_EXTERNAL_MODULE_15__, __WEBPACK_EXTERNAL_MODULE_17__, __WEBPACK_EXTERNAL_MODULE_18__, __WEBPACK_EXTERNAL_MODULE_22__) {
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

	module.exports = __webpack_require__(21);

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
/* 13 */,
/* 14 */,
/* 15 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_15__;

/***/ }),
/* 16 */,
/* 17 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_17__;

/***/ }),
/* 18 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_18__;

/***/ }),
/* 19 */,
/* 20 */,
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.extensionIntentsDefaultContextKey = exports.extensionIntentsContextKey = exports.extensionIntentsKey = undefined;
	
	var _vendorBbAngular = __webpack_require__(5);
	
	var _vendorBbAngular2 = _interopRequireDefault(_vendorBbAngular);
	
	var _libBbWidgetNg = __webpack_require__(12);
	
	var _libBbWidgetNg2 = _interopRequireDefault(_libBbWidgetNg);
	
	var _libBbViewModelNg = __webpack_require__(17);
	
	var _libBbViewModelNg2 = _interopRequireDefault(_libBbViewModelNg);
	
	var _libBbStateContainerNg = __webpack_require__(18);
	
	var _libBbStateContainerNg2 = _interopRequireDefault(_libBbStateContainerNg);
	
	var _libBbIntentNg = __webpack_require__(22);
	
	var _libBbIntentNg2 = _interopRequireDefault(_libBbIntentNg);
	
	var _libBbWidgetExtensionNg = __webpack_require__(15);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * @module lib-bb-extension-intents-ng
	 *
	 * @description Allows extensions to define 'intents' (see
	 * {@link module:lib-bb-intent-ng.lib-bb-intent-ng}). Also allows a
	 * function to be called when the widget is initialised (and no intent has been requested).
	 *
	 * Intents are created from the exported `intents` of the extension module.
	 *
	 * Intents can either be exported as an object, or a function which returns an object.
	 *
	 * If the `intents` is a function it will receive an {@link IntentContext} object.
	 *
	 * As well as registering the intents, the intents will be added to the extension's scope
	 * as `intents.<intentName>`.
	 *
	 * @example
	 * // My "TODO" widget extension:
	 * export const intents = ({
	 *   createRequest,
	 *   handleResponse,
	 *   handleRequest,
	 *   stateContainer,
	 * }) => ({
	 *   // Define a simple incoming intent.
	 *   viewList: handleRequest('todo.list', stateContainer.createAction(state => ({
	 *     ...state,
	 *     page: 'list',
	 *   }))),
	 *
	 *   // Define an intent to be handled in an external widget (and not return)
	 *   userProfile: createRequest('user.profile.view'),
	 *
	 *   // Use handleResponse helper to define an intent that will route somewhere else to handle
	 *   // it, and once handled will call the helper with the payload response.
	 *   selectPriority: handleResponse('priority.select', stateContainer.createAction(
	 *     (state, { priority }) => ({
	 *       ...state,
	 *       page: 'form',
	 *       todo: {
	 *         priority,
	 *       },
	 *     })
	 *   )),
	 * });
	 *
	 * // My "TODO" Widget template:
	 * <button ng-click="intents.viewList()">List</button>
	 * <button ng-click="intents.userProfile(state.profileId);">View Profile</button>
	 */
	
	/**
	 * The default context passed to the `intents` function of the extension. This context can be
	 * extended by individual widgets, so consult the widget docs for additional context properties.
	 * @typedef IntentContext
	 * @type {Object}
	 * @property {module:lib-bb-widget.BBWidget} widget The widget instance
	 * @property {module:lib-bb-state-container.StateContainer} viewModel View model state container
	 *   (deprecated since Building Blocks 2.6.0)
	 * @property {module:lib-bb-state-container.StateContainer} stateContainer Widget's state container
	 * @property {ResponseHelper} handleResponse Helper function to create intent request/response
	 * @property {RequestHandlerHelper} handleRequest Helper function to create intent request handlers
	 * @property {RequestHelper} createRequest Helper function to create an intent request
	 */
	
	/**
	 * @typedef ResponseHelper
	 * @type {Function}
	 * @param {String} intent The string identifying the user intent
	 * @param {Function} handler The handler that will be called when the intent response is resolved
	 * @return {IntentDefinition}
	 */
	
	/**
	 * @typedef RequestHandlerHelper
	 * @type {Function}
	 * @param {String} intent The string identifying the user intent
	 * @param {Function} handler The handler that will be called when the intent is triggered
	 * @return {IntentDefinition}
	 */
	
	/**
	 * @typedef RequestHelper
	 * @type {Function}
	 * @param {String} intent The string identifying the intent to fire
	 * @return {IntentDefinition}
	 */
	
	var moduleKey = 'lib-bb-extension-intents-ng';
	
	/**
	 * @name extensionIntentsKey
	 * @type {string}
	 * @description
	 * The injector key to be used to access the extension intents
	 */
	var extensionIntentsKey = exports.extensionIntentsKey = moduleKey + ':intents';
	
	/**
	 * @name extensionIntentsContextKey
	 * @type {string}
	 * @description
	 * The injector key to be used to provide an alternative context to the extension module's intents
	 *
	 * @example
	 * // "TODO" Widget index.js
	 *
	 * import bbExtensionIntentsModuleKey, {
	 *   extensionIntentsContextKey,
	 * } from 'lib-bb-extension-intents-ng';
	 *
	 * import todoModelModuleKey, { modelTodoKey } from 'model-bb-todo-ng';
	 *
	 * // Add TODO `model` to the `context` provided to the extension `intents` key
	 * export default angular.module(..., [
	 *   ...,
	 *   extensionIntentsContextKey,
	 *   todoModelModuleKey,
	 * ])
	 * .factory(extensionIntentsContextKey, [
	 *   modelTodoKey,
	 *   (model) => ({
	 *     model,
	 *   }),
	 * ])
	 */
	var extensionIntentsContextKey = exports.extensionIntentsContextKey = extensionIntentsKey + ':context';
	var extensionIntentsDefaultContextKey = exports.extensionIntentsDefaultContextKey = extensionIntentsKey + ':default-context';
	
	exports.default = _vendorBbAngular2.default.module(moduleKey, [_libBbWidgetNg2.default, _libBbWidgetExtensionNg.bbWidgetExtensionModuleKey, _libBbIntentNg2.default, _libBbViewModelNg2.default, _libBbStateContainerNg2.default]).value(extensionIntentsContextKey, {}).factory(extensionIntentsDefaultContextKey, [_libBbWidgetNg.widgetKey, _libBbViewModelNg.bbViewModelKey, _libBbStateContainerNg.bbStateContainerKey, function (widget, viewModel, stateContainer) {
	  return {
	    widget: widget,
	    viewModel: viewModel,
	    stateContainer: stateContainer,
	    handleResponse: function handleResponse(event, callback) {
	      return {
	        event: event,
	        responseHandler: function responseHandler(payload) {
	          callback(payload);
	        }
	      };
	    },
	    handleRequest: function handleRequest(event, callback) {
	      return {
	        event: event,
	        requestHandler: function requestHandler(payload) {
	          callback(payload);
	        }
	      };
	    },
	    createRequest: function createRequest(event) {
	      return {
	        event: event
	      };
	    }
	  };
	}]).factory(extensionIntentsKey, [_libBbIntentNg.bbIntentKey, extensionIntentsDefaultContextKey, _libBbWidgetExtensionNg.extensionContextKey, extensionIntentsContextKey, _libBbWidgetExtensionNg.bbWidgetExtensionKey, '$rootScope', function (bbIntent, defaultContext, extensionContext, customContext, extension, $rootScope) {
	  // Create intents from definitions in the extension
	  var intentDefinitions = typeof extension.intents === 'function' ? extension.intents(Object.assign({}, defaultContext, extensionContext, customContext)) : extension.intents || {};
	
	  var intents = Object.keys(intentDefinitions).filter(function (name) {
	    return name !== 'INIT';
	  }).reduce(function (acc, intentName) {
	    var intentDefinition = intentDefinitions[intentName];
	
	    // eslint-disable-next-line no-param-reassign
	    acc[intentName] = bbIntent.create(intentDefinition.event, intentDefinition.responseHandler);
	
	    if (intentDefinition.requestHandler) {
	      bbIntent.handle(intentDefinition.event, function () {
	        var result = intentDefinition.requestHandler.apply(intentDefinition, arguments);
	        // @fixme Shouldn't need to apply/digest here
	        // - should by handled by intents lib?
	        if ($rootScope.$$phase !== '$apply' && $rootScope.$$phase !== '$digest') {
	          $rootScope.$digest();
	        }
	        return result;
	      });
	    }
	
	    return acc;
	  }, {});
	
	  if (intentDefinitions.INIT) {
	    bbIntent.initHandler(intentDefinitions.INIT);
	  }
	
	  return intents;
	}]).run(['$rootScope', extensionIntentsKey, function ($scope, intents) {
	  Object.assign($scope, { intents: intents });
	}]).name;
	
	/**
	 * @typedef IntentDefinition
	 * @type {object}
	 * @prop {string} event The intent name
	 * @prop {?function} requestHandler The callback to handle the incoming request
	 * @prop {?function} responseHandler A callback to provide the result of the handled intent
	 */
	
	/**
	 * @typedef IntentDefinitions
	 * @description
	 * Intents that can be fired and/or handled by the extension.
	 *
	 * @type {object<IntentDefinition>}
	 */
	
	/**
	 * @typedef IntentDefinitionsFactory
	 * @type {function}
	 * @param {IntentContext} context
	 * @return {IntentDefinitions}
	 */
	
	/**
	 * @typedef ExtensionIntents
	 * @description
	 * The keys from the definitions will be made available as functions on the view scope as `intents`.
	 * @type {IntentDefinitions|IntentDefinitionsFactory}
	 */

/***/ }),
/* 22 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_22__;

/***/ })
/******/ ])
});
;
//# sourceMappingURL=lib-bb-extension-intents-ng.js.map