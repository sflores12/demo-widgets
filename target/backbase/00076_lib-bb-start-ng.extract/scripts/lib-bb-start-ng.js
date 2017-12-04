(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vendor-bb-angular"), require("lib-bb-widget-ng"), require("lib-bb-event-bus-ng"), require("lib-bb-widget-extension-ng"), require("lib-bb-state-container-ng"), require("lib-bb-storage"), require("lib-bb-widget"), require("lib-bb-i18n-ng"), require("config-bb-locale"), require("lib-bb-extension-helpers-ng"), require("lib-bb-extension-events-ng"));
	else if(typeof define === 'function' && define.amd)
		define("lib-bb-start-ng", ["vendor-bb-angular", "lib-bb-widget-ng", "lib-bb-event-bus-ng", "lib-bb-widget-extension-ng", "lib-bb-state-container-ng", "lib-bb-storage", "lib-bb-widget", "lib-bb-i18n-ng", "config-bb-locale", "lib-bb-extension-helpers-ng", "lib-bb-extension-events-ng"], factory);
	else if(typeof exports === 'object')
		exports["lib-bb-start-ng"] = factory(require("vendor-bb-angular"), require("lib-bb-widget-ng"), require("lib-bb-event-bus-ng"), require("lib-bb-widget-extension-ng"), require("lib-bb-state-container-ng"), require("lib-bb-storage"), require("lib-bb-widget"), require("lib-bb-i18n-ng"), require("config-bb-locale"), require("lib-bb-extension-helpers-ng"), require("lib-bb-extension-events-ng"));
	else
		root["lib-bb-start-ng"] = factory(root["vendor-bb-angular"], root["lib-bb-widget-ng"], root["lib-bb-event-bus-ng"], root["lib-bb-widget-extension-ng"], root["lib-bb-state-container-ng"], root["lib-bb-storage"], root["lib-bb-widget"], root["lib-bb-i18n-ng"], root["config-bb-locale"], root["lib-bb-extension-helpers-ng"], root["lib-bb-extension-events-ng"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_5__, __WEBPACK_EXTERNAL_MODULE_12__, __WEBPACK_EXTERNAL_MODULE_13__, __WEBPACK_EXTERNAL_MODULE_15__, __WEBPACK_EXTERNAL_MODULE_18__, __WEBPACK_EXTERNAL_MODULE_57__, __WEBPACK_EXTERNAL_MODULE_58__, __WEBPACK_EXTERNAL_MODULE_59__, __WEBPACK_EXTERNAL_MODULE_60__, __WEBPACK_EXTERNAL_MODULE_61__, __WEBPACK_EXTERNAL_MODULE_62__) {
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

	module.exports = __webpack_require__(56);

/***/ }),

/***/ 5:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_5__;

/***/ }),

/***/ 12:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_12__;

/***/ }),

/***/ 13:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_13__;

/***/ }),

/***/ 15:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_15__;

/***/ }),

/***/ 18:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_18__;

/***/ }),

/***/ 56:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();
	
	exports.default = start;
	
	var _vendorBbAngular = __webpack_require__(5);
	
	var _vendorBbAngular2 = _interopRequireDefault(_vendorBbAngular);
	
	var _libBbEventBusNg = __webpack_require__(13);
	
	var _libBbEventBusNg2 = _interopRequireDefault(_libBbEventBusNg);
	
	var _libBbWidgetNg = __webpack_require__(12);
	
	var _libBbWidgetNg2 = _interopRequireDefault(_libBbWidgetNg);
	
	var _libBbStorage = __webpack_require__(57);
	
	var _libBbStorage2 = _interopRequireDefault(_libBbStorage);
	
	var _libBbWidget = __webpack_require__(58);
	
	var _libBbWidget2 = _interopRequireDefault(_libBbWidget);
	
	var _libBbI18nNg = __webpack_require__(59);
	
	var _libBbI18nNg2 = _interopRequireDefault(_libBbI18nNg);
	
	var _libBbStateContainerNg = __webpack_require__(18);
	
	var _libBbStateContainerNg2 = _interopRequireDefault(_libBbStateContainerNg);
	
	var _configBbLocale = __webpack_require__(60);
	
	var _libBbWidgetExtensionNg = __webpack_require__(15);
	
	var _libBbExtensionHelpersNg = __webpack_require__(61);
	
	var _libBbExtensionHelpersNg2 = _interopRequireDefault(_libBbExtensionHelpersNg);
	
	var _libBbExtensionEventsNg = __webpack_require__(62);
	
	var _libBbExtensionEventsNg2 = _interopRequireDefault(_libBbExtensionEventsNg);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } } /**
	                                                                                                                                                                                                     * @module lib-bb-start-ng
	                                                                                                                                                                                                     *
	                                                                                                                                                                                                     * @description Start module for angular apps. Initialises the widget instance, extensions,
	                                                                                                                                                                                                     * locales, and translation messages.
	                                                                                                                                                                                                     *
	                                                                                                                                                                                                     * Usually this module shouldn't be called directly. It will be called by
	                                                                                                                                                                                                     * {@link module:lib-bb-start.lib-bb-start}.
	                                                                                                                                                                                                     *
	                                                                                                                                                                                                     * Bootstrapping involves the following features:
	                                                                                                                                                                                                     *  - Initialises {@link module:lib-bb-widget.BBWidget} instance from CXP
	                                                                                                                                                                                                     *  {@link module:lib-bb-start.WidgetInstance}
	                                                                                                                                                                                                     *  - Loads the locale settings from {@link module:config-bb-locale.config-bb-locale}
	                                                                                                                                                                                                     *  - Loads messages file (set from config-bb-locale's
	                                                                                                                                                                                                     *  {@link module:config-bb-locale.messageBundleModule} function
	                                                                                                                                                                                                     *  - Provides messages to lib-bb-i18n-ng
	                                                                                                                                                                                                     *  {@link module:lib-bb-i18n-ng.bbTranslateProvider#setMessages}
	                                                                                                                                                                                                     *  - Restores the widget state into
	                                                                                                                                                                                                     *  {@link module:lib-bb-state-container-ng.bbStateContainerProvider#setInitialState}
	                                                                                                                                                                                                     *  - Provides context to widget extensions (helpers, events, intents) with:
	                                                                                                                                                                                                     *    - {@link module:lib-bb-extension-events-ng.lib-bb-extension-events-ng}
	                                                                                                                                                                                                     *    - {@link module:lib-bb-extension-helpers-ng.lib-bb-extension-helpers-ng}
	                                                                                                                                                                                                     *    - {@link module:lib-bb-extension-intents-ng.lib-bb-extension-intents-ng}
	                                                                                                                                                                                                     *  - Makes the extension hooks available to the widget instance via
	                                                                                                                                                                                                     *  {@link module:lib-bb-widget-extension-ng.lib-bb-widget-extension-ng}
	                                                                                                                                                                                                     *  - Loads the widget's JS with the modules looader (configured by
	                                                                                                                                                                                                     *  {@link module:config-bb-module-loader.config-bb-module-loader})
	                                                                                                                                                                                                     *  - Bootstraps the angular application
	                                                                                                                                                                                                     */
	
	// Calculate "Provider" keys
	var widgetKeyProvider = _libBbWidgetNg.widgetKey + 'Provider';
	var eventBusKeyProvider = _libBbEventBusNg.eventBusKey + 'Provider';
	var translateProvider = _libBbI18nNg.bbTranslateKey + 'Provider';
	var stateContainerProvider = _libBbStateContainerNg.bbStateContainerKey + 'Provider';
	
	/**
	 * Create an Angular Module to combine the Widget, Extension and "common" modules
	 *
	 * Angular modules don't provide proper namespacing. We use this to merge the injectables
	 * of the widget, the extension, and any other angular modules. This module also allows
	 * configuration of common services that are used by widgets (eg. anything that requires the
	 * CXP "__WIDGET__" object).
	 *
	 * @inner
	 * @param {string} widgetName The name of the widget
	 * @param {WidgetInstance} widgetInstance An instance of the CXP Widget object (__WIDGET__)
	 * @param {string[]} dependencyKeys Angular Module Keys this app depends on
	 * @param {Array.<NgInjectedFunction>} configs Functions to configure angular providers
	 * @param {object.<object.<string>>} messages A map of locale code and translation keys to messages
	 * @returns {!string} The Angular Module Key for the App Module
	 */
	function createAppModule(widgetName, widgetInstance, dependencyKeys, configs, messages, locale, storedState) {
	  // Generate an NG Module key including the widget ID to avoid namespace collisions on a page
	  var moduleKey = widgetName + ':' + widgetInstance.id;
	
	  return _vendorBbAngular2.default.module(moduleKey, [_libBbWidgetNg2.default, _libBbEventBusNg2.default, _libBbI18nNg2.default, _libBbStateContainerNg2.default].concat(_toConsumableArray(dependencyKeys)))
	
	  // configure the translation service with the current language/locale
	  .config([translateProvider, function (translate) {
	    if (!messages) return;
	    if (!messages[locale]) {
	      // eslint-disable-next-line no-console
	      console.warn('No translations found for locale: "' + locale + '"');
	      if (messages['en-US']) {
	        // eslint-disable-next-line no-console
	        console.warn('DEPRECATED - Falling back to "en-US" translations.\n' + 'This fallback is deprecated and you should ensure you have translations ' + 'for the configured locale.');
	        translate.setMessages(messages['en-US']);
	      }
	      return;
	    }
	    translate.setMessages(messages[locale]);
	  }])
	
	  // Configure the `widget` with the current `widgetInstance`
	  .config([widgetKeyProvider, function (widgetProvider) {
	    widgetProvider.config(widgetInstance);
	  }])
	
	  // Configure the `eventBus` with the current `widgetInstance`
	  .config([eventBusKeyProvider, function (eventBusProvider) {
	    eventBusProvider.setWidget(widgetInstance);
	  }]).config([stateContainerProvider, function (container) {
	    container.setInitialState(storedState);
	  }])
	
	  // Add a function to configure the angular providers
	  .config(['$injector', function ($injector) {
	    configs.forEach(function (c) {
	      // extract the dependencies from the injectable declaration
	      var providers = $injector.annotate(c);
	      // only config the module if the provider exists
	      if (providers.every($injector.has)) {
	        $injector.invoke(c);
	      }
	    });
	  }]).name;
	}
	
	/**
	 * Extract the widget enterprise catalog name from the instance name
	 *
	 * This is used because there does not appear to be a consistent way to get the
	 * widget name (as specified in the source model.xml/enterprise catalog) from the
	 * wiget instance object.
	 *
	 * Assumes the format "<name>_<hash>" or "<name>-<numbers>"
	 *
	 * @inner
	 * @param {string} instanceName The name of the widget instance object
	 * @returns {string} The name of the widget in the enterprise catalog
	 */
	function extractWidgetName(instanceName) {
	  // eslint-disable-next-line no-console
	  console.warn('DEPRECATED', 'Determining the widgets JS module path based on the widget name is deprecated.' + ' You should specify the module to bootstrap via a `path` property in your model.xml.');
	  var separatorIndex = instanceName.lastIndexOf('_');
	  if (separatorIndex === -1) {
	    return instanceName.replace(/-\d+$/, '');
	  }
	  return instanceName.slice(0, separatorIndex);
	}
	
	function getLocale(widgetInstance) {
	  if (_configBbLocale.currentLocale) {
	    // eslint-disable-next-line no-console
	    console.warn('DEPRECATED', '`config-bb-locale.currentLocale` is deprecated in favor of `config-bb-locale.locale');
	    return (0, _configBbLocale.currentLocale)(widgetInstance);
	  }
	  return (0, _configBbLocale.locale)(widgetInstance.locale);
	}
	
	function getMessageBundleModule(widgetInstance, widget) {
	  if (_configBbLocale.messageBundleModuleName) {
	    // eslint-disable-next-line no-console
	    console.warn('DEPRECATED', '`config-bb-locale.messageBundleModuleName` is deprecated' + ' in favor of `config-bb-locale.messageBundleModule');
	    return (0, _configBbLocale.messageBundleModuleName)(widgetInstance);
	  }
	  return (0, _configBbLocale.messageBundleModule)(widget);
	}
	
	/**
	 * @name start
	 * @type {function}
	 * @description Start an Angular Based Widget
	 *
	 * @param {function} require Used to dynamically load modules
	 * @param {WidgetInstance} widgetInstance An instance of the CXP Widget Object (__WIDGET__)
	 * @returns {void}
	 */
	function start(require, widgetInstance) {
	  var widgetInstanceName = widgetInstance.name || widgetInstance.model.extendedItemName;
	  var widget = (0, _libBbWidget2.default)(widgetInstance, Promise);
	
	  var widgetModuleName = widget.getStringPreference('path') || extractWidgetName(widgetInstanceName);
	  var extensionModuleName = widget.getStringPreference('extension');
	  var locale = getLocale(widgetInstance);
	
	  // Collect the names of the JS modules that are needed to start the widget
	  // { dependencyName: jsModuleName }
	  var requiredModules = {
	    widgetModule: widgetModuleName,
	    configProvidersModule: 'config-bb-providers-ng', // TODO: configurable name
	    extensionModule: extensionModuleName,
	    messageBundleModule: getMessageBundleModule(widgetInstance, widget),
	    localeModule: (0, _configBbLocale.localeModuleName)(locale)
	  };
	
	  // Partition the dependencies map into keys/values (this is the inverse of `_.zipObject`)
	  // eg. { 'a': 1, 'b', 2 } -> [['a', 'b'], [1, 2]]
	  // This is so we can pass the array of jsModuleNames into `require` and build the
	  // { dependencyName: jsModule } mapping once the modules are loaded
	
	  var _Object$keys$filter$r = Object.keys(requiredModules).filter(function (key) {
	    return !!requiredModules[key];
	  }).reduce(function (_ref, key) {
	    var _ref2 = _slicedToArray(_ref, 2),
	        ks = _ref2[0],
	        vs = _ref2[1];
	
	    return [ks.concat([key]), vs.concat([requiredModules[key]])];
	  }, [[], []]),
	      _Object$keys$filter$r2 = _slicedToArray(_Object$keys$filter$r, 2),
	      dependencyNames = _Object$keys$filter$r2[0],
	      jsModuleNames = _Object$keys$filter$r2[1];
	
	  require(jsModuleNames, function () {
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    // Build a { dependencyName: jsModule } mapping from the loaded modules (in the args array)
	    var modules = args.reduce(function (acc, module, index) {
	      acc[dependencyNames[index]] = module; // eslint-disable-line no-param-reassign
	      return acc;
	    }, {});
	
	    // Collect the NG Module keys
	    // `extensionModule` may not be loaded if not in the model
	    var dependencyKeys = !!modules.extensionModule ? [_libBbWidgetExtensionNg.bbWidgetExtensionModuleKey, _libBbExtensionHelpersNg2.default, _libBbExtensionEventsNg2.default, (0, _libBbWidgetExtensionNg.createExtensionModule)(extensionModuleName, modules.extensionModule)] : [];
	
	    // @FIXME Duplicated in lib-bb-state-container-ng
	    var storageKey = widget.getStringPreference('widget-sync-id');
	    var storedStatePromise = storageKey == null ? Promise.resolve() : (0, _libBbStorage2.default)().getItem(storageKey);
	
	    var widgetModulePromise = typeof modules.widgetModule.default === 'function' ? modules.widgetModule.default(widget) : modules.widgetModule.default;
	
	    Promise.all([widgetModulePromise, storedStatePromise]).then(function (_ref3) {
	      var _ref4 = _slicedToArray(_ref3, 2),
	          widgetModuleKey = _ref4[0],
	          storedState = _ref4[1];
	
	      // add widget last to allow overriding injectables
	      dependencyKeys.push(widgetModuleKey);
	
	      var appModuleKey = createAppModule(widgetInstanceName, widgetInstance, dependencyKeys, modules.configProvidersModule.default, modules.messageBundleModule, locale, storedState);
	
	      // Bootstrap Angular with the Angular App
	      _vendorBbAngular2.default.bootstrap(widgetInstance.body, [appModuleKey]);
	    });
	  });
	}
	
	/**
	 * An AngularJS compatible injectable. Annotated with one of the three available
	 * methods described in https://docs.angularjs.org/api/auto/service/$injector.
	 * NB. "inline" annotation is preferred.
	 *
	 * @private
	 * @typedef NgInjectedFunction
	 * @type {array}
	 */

/***/ }),

/***/ 57:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_57__;

/***/ }),

/***/ 58:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_58__;

/***/ }),

/***/ 59:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_59__;

/***/ }),

/***/ 60:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_60__;

/***/ }),

/***/ 61:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_61__;

/***/ }),

/***/ 62:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_62__;

/***/ })

/******/ })
});
;
//# sourceMappingURL=lib-bb-start-ng.js.map