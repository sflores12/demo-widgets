(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vendor-bb-angular"), require("lib-bb-widget-ng"));
	else if(typeof define === 'function' && define.amd)
		define("lib-bb-widget-extension-ng", ["vendor-bb-angular", "lib-bb-widget-ng"], factory);
	else if(typeof exports === 'object')
		exports["lib-bb-widget-extension-ng"] = factory(require("vendor-bb-angular"), require("lib-bb-widget-ng"));
	else
		root["lib-bb-widget-extension-ng"] = factory(root["vendor-bb-angular"], root["lib-bb-widget-ng"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_5__, __WEBPACK_EXTERNAL_MODULE_12__) {
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

	module.exports = __webpack_require__(82);

/***/ }),

/***/ 5:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_5__;

/***/ }),

/***/ 12:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_12__;

/***/ }),

/***/ 82:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.createExtensionModule = exports.extensionHelpersContextKey = exports.extensionEventsContextKey = exports.extensionContextKey = exports.extensionHooksKey = exports.bbWidgetExtensionKey = exports.bbWidgetExtensionModuleKey = undefined;
	
	var _extension = __webpack_require__(83);
	
	Object.defineProperty(exports, 'bbWidgetExtensionModuleKey', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_extension).default;
	  }
	});
	Object.defineProperty(exports, 'bbWidgetExtensionKey', {
	  enumerable: true,
	  get: function get() {
	    return _extension.bbWidgetExtensionKey;
	  }
	});
	
	var _hooks = __webpack_require__(84);
	
	Object.defineProperty(exports, 'extensionHooksKey', {
	  enumerable: true,
	  get: function get() {
	    return _hooks.extensionHooksKey;
	  }
	});
	
	var _vendorBbAngular = __webpack_require__(5);
	
	var _vendorBbAngular2 = _interopRequireDefault(_vendorBbAngular);
	
	var _libBbWidgetNg = __webpack_require__(12);
	
	var _widgetExtension = __webpack_require__(85);
	
	var _widgetExtension2 = _interopRequireDefault(_widgetExtension);
	
	var _hooks2 = _interopRequireDefault(_hooks);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } } /**
	                                                                                                                                                                                                     * @module lib-bb-widget-extension-ng
	                                                                                                                                                                                                     *
	                                                                                                                                                                                                     * @description
	                                                                                                                                                                                                     * Provides a helper function that creates an angular injectable, which works in conjunction
	                                                                                                                                                                                                     * with `lib-bb-start-ng` to:
	                                                                                                                                                                                                     *  1. merge the custom hooks from the widgets extension with the defaults provided by the widget.
	                                                                                                                                                                                                     *  2. provide the hooks with limited access to contextually useful services.
	                                                                                                                                                                                                     *
	                                                                                                                                                                                                     * Extensible widgets should use this library to create hooks that can be consumed by a widget
	                                                                                                                                                                                                     * extension.
	                                                                                                                                                                                                     *
	                                                                                                                                                                                                     * @example
	                                                                                                                                                                                                     * // extension exports hooks, file: ext-bb-example-ng/scripts/index.js
	                                                                                                                                                                                                     *
	                                                                                                                                                                                                     * export const hooks = ({ widget }) => ({
	                                                                                                                                                                                                     *   prepareData: (data) => widget.getPreference('reverse') ? data.reverse() : data,
	                                                                                                                                                                                                     * });
	                                                                                                                                                                                                     *
	                                                                                                                                                                                                     * // widget consumes extension hook implementation, file: widget-bb-example-ng/scripts/index.js
	                                                                                                                                                                                                     * import extendHooks from 'lib-bb-widget-extension-ng';
	                                                                                                                                                                                                     *
	                                                                                                                                                                                                     * import * as defaultHooks from './default-hooks';
	                                                                                                                                                                                                     *
	                                                                                                                                                                                                     * angular.module(...)
	                                                                                                                                                                                                     *   .factory('my-widget:hooks', extendHooks(defaultHooks));
	                                                                                                                                                                                                     *
	                                                                                                                                                                                                     */
	
	
	/**
	 * @name extensionContextKey
	 * @type {string}
	 * @description
	 * The injector key to be used to provide an extra context to the extension module's intents,
	 * helpers, and event handlers.
	 *
	 * The value provided by this key is added to the context before the individual services context
	 * customization. i.e. In the case of collisions, the order of priority (ascending) is;
	 *
	 *  - The default context for the service
	 *  - This customization
	 *  - The service specific customization (e.g.
	 * {@link module:lib-bb-extension-intents-ng.extensionIntentsContextKey})
	 *
	 * @example
	 * // "TODO" Widget index.js
	 *
	 * import {
	 *   extensionContextKey,
	 * } from 'lib-bb-widget-extension-ng';
	 *
	 * import todoModelModuleKey, { modelTodoKey } from 'model-bb-todo-ng';
	 *
	 * // Add TODO `model` to the `context` provided to the extension contexts
	 * export default angular.module(..., [
	 *   ...,
	 *   todoModelModuleKey,
	 * ])
	 * .factory(extensionContextKey, [
	 *   modelTodoKey,
	 *   (model) => ({
	 *     model,
	 *   }),
	 * ])
	 */
	var extensionContextKey = exports.extensionContextKey = 'lib-bb-widget-extension-ng:context';
	
	/**
	 * @deprecated Re-exported only for compatability - use values from the original modules.
	 * n.b. The values are re-defined here instead of re-exported to avoid circular dependency.
	 */
	var extensionEventsContextKey = exports.extensionEventsContextKey = 'lib-bb-extension-events-ng:context';
	var extensionHelpersContextKey = exports.extensionHelpersContextKey = 'lib-bb-extension-helpers-ng:context';
	
	/**
	 * Create an Angular Module to expose the widgets Extension Module
	 *
	 * @inner
	 * @param {string} moduleName The name of the module to create
	 * @param {Object} extension
	 * @param {?Array.<string>} extension.dependencyKeys Angular Module that the extension depends upon
	 * @param {?Object.<string, function>} extension.hooks Function hooks that the extension overrides
	 * @returns {!string} The Angular Module Key for the Extension Module
	 */
	var createExtensionModule = exports.createExtensionModule = function createExtensionModule(moduleName, extensionModule) {
	  return _vendorBbAngular2.default.module(moduleName, [_hooks2.default].concat(_toConsumableArray(extensionModule.dependencyKeys || []))).config([_extension.bbWidgetExtensionKey + 'Provider', function (extensionProvider) {
	    extensionProvider.setExtensionModule(extensionModule);
	  }]).value(extensionContextKey, {}).name;
	};
	
	/**
	 * @name default
	 * @type {function}
	 * @description
	 * Create an angular injectable to help merge the widgets extension hooks with the default hooks
	 * provided by the widget.
	 * @param {Hooks} defaultHooks The default hook implementation
	 * @returns {NgInjectedFunction}
	 */
	
	exports.default = function (defaultHooks) {
	  return [_hooks.extensionHooksKey, _libBbWidgetNg.widgetKey,
	  /* into */
	  function (extensionHooks, widget) {
	    return (0, _widgetExtension2.default)(defaultHooks, extensionHooks, {
	      widget: widget
	    });
	  }];
	};
	
	/**
	 * @typedef Extension
	 * @type {object}
	 * @property {module:lib-bb-extension-intents-ng.ExtensionIntents} intents
	 * @property {module:lib-bb-extension-events-ng.ExtensionEvents} events
	 * @property {module:lib-bb-extension-helpers-ng.ExtensionHelpers} helpers
	 * @property {ExtensionHooks} hooks
	 */

/***/ }),

/***/ 83:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.bbWidgetExtensionKey = undefined;
	
	var _vendorBbAngular = __webpack_require__(5);
	
	var _vendorBbAngular2 = _interopRequireDefault(_vendorBbAngular);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var moduleKey = 'lib-bb-widget-extension-ng';
	
	var bbWidgetExtensionKey = exports.bbWidgetExtensionKey = moduleKey + ':extension';
	
	exports.default = _vendorBbAngular2.default.module(moduleKey, []).provider(bbWidgetExtensionKey, function () {
	  var extension = {};
	  return {
	    setExtensionModule: function setExtensionModule(module) {
	      extension = module;
	    },
	    $get: [function () {
	      return extension;
	    }]
	  };
	}).name;

/***/ }),

/***/ 84:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.extensionHooksKey = undefined;
	
	var _vendorBbAngular = __webpack_require__(5);
	
	var _vendorBbAngular2 = _interopRequireDefault(_vendorBbAngular);
	
	var _extension = __webpack_require__(83);
	
	var _extension2 = _interopRequireDefault(_extension);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var moduleKey = 'lib-bb-widget-extension-ng:ext:hooks';
	
	/**
	 * @name extensionHooksKey
	 * @type {string}
	 * @description
	 * The injector key to be used to access the extension hooks module
	 */
	var extensionHooksKey = exports.extensionHooksKey = 'widget-ext:hooks';
	
	exports.default = _vendorBbAngular2.default.module(moduleKey, [_extension2.default]).factory(extensionHooksKey, [_extension.bbWidgetExtensionKey, function (extension) {
	  return extension.hooks || {};
	}]).name;

/***/ }),

/***/ 85:
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	/**
	 * @private
	 * Extend the default hooks with the hooks from the extension module.
	 *
	 * @param {Hooks} defaultHooks The default hook implementations
	 * @param {Hooks|HooksFactory} extensionHooks The hooks to override
	 * @param {HooksContext} context Additional context that may be useful for the hooks implementations
	 */
	exports.default = function (defaultHooks, extensionHooks, context) {
	  return Object.assign({}, defaultHooks, typeof extensionHooks === 'function' ? extensionHooks(context) : extensionHooks);
	};
	
	/**
	 * @typedef Hooks
	 * @type {object.<function>}
	 */
	
	/**
	 * @typedef HooksFactory
	 * @type {function}
	 * @param {HooksContext} context
	 * @returns {Hooks}
	 */
	
	/**
	 * @typedef HooksContext
	 * @type {object}
	 * @property {module:lib-bb-widget-ng.widget} widget
	 */
	
	/**
	 * @typedef ExtensionHooks
	 * @type {Hooks|HooksFactory}
	 */

/***/ })

/******/ })
});
;
//# sourceMappingURL=lib-bb-widget-extension-ng.js.map