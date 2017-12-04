(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vendor-bb-angular"), require("lib-bb-widget-ng"), require("lib-bb-event-bus-ng"), require("lib-bb-notifications-ng"), require("lib-bb-widget-extension-ng"), require("lib-bb-extension-intents-ng"), require("lib-bb-view-model-ng"), require("lib-bb-state-container-ng"));
	else if(typeof define === 'function' && define.amd)
		define("lib-bb-extension-helpers-ng", ["vendor-bb-angular", "lib-bb-widget-ng", "lib-bb-event-bus-ng", "lib-bb-notifications-ng", "lib-bb-widget-extension-ng", "lib-bb-extension-intents-ng", "lib-bb-view-model-ng", "lib-bb-state-container-ng"], factory);
	else if(typeof exports === 'object')
		exports["lib-bb-extension-helpers-ng"] = factory(require("vendor-bb-angular"), require("lib-bb-widget-ng"), require("lib-bb-event-bus-ng"), require("lib-bb-notifications-ng"), require("lib-bb-widget-extension-ng"), require("lib-bb-extension-intents-ng"), require("lib-bb-view-model-ng"), require("lib-bb-state-container-ng"));
	else
		root["lib-bb-extension-helpers-ng"] = factory(root["vendor-bb-angular"], root["lib-bb-widget-ng"], root["lib-bb-event-bus-ng"], root["lib-bb-notifications-ng"], root["lib-bb-widget-extension-ng"], root["lib-bb-extension-intents-ng"], root["lib-bb-view-model-ng"], root["lib-bb-state-container-ng"]);
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

	module.exports = __webpack_require__(20);

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
/* 19 */,
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.extensionHelpersDefaultContextKey = exports.extensionHelpersContextKey = undefined;
	
	var _vendorBbAngular = __webpack_require__(5);
	
	var _vendorBbAngular2 = _interopRequireDefault(_vendorBbAngular);
	
	var _libBbWidgetNg = __webpack_require__(12);
	
	var _libBbWidgetNg2 = _interopRequireDefault(_libBbWidgetNg);
	
	var _libBbViewModelNg = __webpack_require__(17);
	
	var _libBbViewModelNg2 = _interopRequireDefault(_libBbViewModelNg);
	
	var _libBbStateContainerNg = __webpack_require__(18);
	
	var _libBbStateContainerNg2 = _interopRequireDefault(_libBbStateContainerNg);
	
	var _libBbEventBusNg = __webpack_require__(13);
	
	var _libBbEventBusNg2 = _interopRequireDefault(_libBbEventBusNg);
	
	var _libBbNotificationsNg = __webpack_require__(14);
	
	var _libBbNotificationsNg2 = _interopRequireDefault(_libBbNotificationsNg);
	
	var _libBbExtensionIntentsNg = __webpack_require__(16);
	
	var _libBbExtensionIntentsNg2 = _interopRequireDefault(_libBbExtensionIntentsNg);
	
	var _libBbWidgetExtensionNg = __webpack_require__(15);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * @module lib-bb-extension-helpers-ng
	 *
	 * @description Allows extensions to define additional view helpers, which will be automatically
	 * added to the widget's scope.
	 *
	 * Sometimes you need to have some extra logic in your view that isn't part of the controller
	 * interface. One way to do this, is to create a UI component and put all that logic into the UI's
	 * controller. But you can also use extension helpers for moving view logic out of the template.
	 *
	 * View helpers are created from the exported `helpers` of the extension module.
	 *
	 * View helpers can either be exported as an object, or a function which returns an object.
	 *
	 * If the `helpers` is a function it will receive an {@link HelperContext} object.
	 *
	 * The object returned should be a map of helper name to function (see example below).
	 *
	 * The helpers are made available on the root scope on ext.helpers.<helper-name>.
	 *
	 * @example
	 * // My "TODO" widget extension:
	 * export const helpers = ({ widget }) => ({
	 *   isLowBalance: (product) => product.balance < widget.getLongPreference('lowBalanceThreshold'),
	 * });
	 *
	 * <!-- My "TODO" widget extension template -->
	 * <span ng-class="{low-balance: ext.helpers.isLowBalance(vm.product)">
	 *   {{product.name}}
	 * </span>
	 */
	
	/**
	 * The default context passed to the `helpers` factory function of the extension. This context can
	 * be extended by individual widgets, so consult the widget docs for additional context properties.
	 * @typedef HelperContext
	 * @type {Object}
	 * @property {Object} $filter Angular's $filter service.
	 * See {@link https://docs.angularjs.org/api/ng/service/$filter}
	 * @property {module:lib-bb-widget.BBWidget} widget The widget instance
	 * @property {module:lib-bb-notifications-ng.Notifications} notifications The notifications service
	 * @property {module:lib-bb-event-bus-ng.publish} publish The publish function of the event bus
	 * @property {Object} intents The extension intents created by
	 * {@link module:lib-bb-extension-intents-ng.lib-bb-extension-intents-ng}
	 * @property {module:lib-bb-state-container.StateContainer} viewModel View model state container
	 *   (deprecated since Building Blocks 2.6.0)
	 * @property {module:lib-bb-state-container.StateContainer} stateContainer Widget state container
	 */
	var moduleKey = 'lib-bb-extension-helpers-ng';
	
	/**
	 * @name extensionHelpersContextKey
	 * @type {string}
	 * @description
	 * The injector key to be used to provide an alternative context to the extension module's
	 * helpers
	 *
	 * @example
	 * // "TODO" Widget index.js
	 *
	 * import bbExtensionHelpersModuleKey, {
	 *   extensionHelpersContextKey,
	 * } from 'lib-bb-extension-helpers-ng';
	 *
	 * import todoModelModuleKey, { modelTodoKey } from 'model-bb-todo-ng';
	 *
	 * // Add TODO `model` to the `context` provided to the extension `helpers` key
	 * export default angular.module(..., [
	 *   ...,
	 *   extensionHelpersContextKey,
	 *   todoModelModuleKey,
	 * ])
	 * .factory(extensionHelpersContextKey, [
	 *   modelTodoKey,
	 *   (model) => ({
	 *     model,
	 *   }),
	 * ])
	 */
	var extensionHelpersContextKey = exports.extensionHelpersContextKey = moduleKey + ':context';
	var extensionHelpersDefaultContextKey = exports.extensionHelpersDefaultContextKey = moduleKey + ':default-context';
	
	exports.default = _vendorBbAngular2.default.module(moduleKey, [_libBbWidgetExtensionNg.bbWidgetExtensionModuleKey, _libBbWidgetNg2.default, _libBbViewModelNg2.default, _libBbStateContainerNg2.default, _libBbEventBusNg2.default, _libBbNotificationsNg2.default, _libBbExtensionIntentsNg2.default]).value(extensionHelpersContextKey, {}).factory(extensionHelpersDefaultContextKey, ['$filter', _libBbViewModelNg.bbViewModelKey, _libBbStateContainerNg.bbStateContainerKey, _libBbEventBusNg.eventBusKey, _libBbWidgetNg.widgetKey, _libBbNotificationsNg.notificationsKey, _libBbExtensionIntentsNg.extensionIntentsKey, function ($filter, viewModel, stateContainer, eventBus, widget, notifications, intents) {
	  return {
	    $filter: $filter,
	    widget: widget,
	    notifications: notifications,
	    intents: intents,
	    viewModel: viewModel,
	    stateContainer: stateContainer,
	    publish: eventBus.publish
	  };
	}]).run(['$rootScope', extensionHelpersDefaultContextKey, _libBbWidgetExtensionNg.extensionContextKey, extensionHelpersContextKey, _libBbWidgetExtensionNg.bbWidgetExtensionKey, function (scope, defaultContext, extensionContext, customContext, extension) {
	  // Make extension view helpers available to the template
	  var helpers = typeof extension.helpers === 'function' ? extension.helpers(Object.assign({}, defaultContext, extensionContext, customContext)) : extension.helpers || {};
	  scope.ext = { helpers: helpers }; // eslint-disable-line no-param-reassign
	}]).name;
	
	/**
	 * @typedef Helpers
	 * @type {object<function>}
	 * @description
	 * Arbitrary view helper functions. Can be used to avoid multi-statement expressions being
	 * written inline in templates.
	 */
	
	/**
	 * @typedef HelpersFactory
	 * @type {function}
	 * @param {HelperContext} context
	 * @return {Helpers}
	 */
	
	/**
	 * @typedef ExtensionHelpers
	 * @type {Helpers|HelpersFactory}
	 * @description
	 *
	 * The helpers will be made available to the view scope as `ext.helpers`.
	 */

/***/ })
/******/ ])
});
;
//# sourceMappingURL=lib-bb-extension-helpers-ng.js.map