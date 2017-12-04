(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vendor-bb-angular"), require("lib-bb-model-errors"), require("lib-bb-widget-ng"), require("lib-bb-event-bus-ng"), require("lib-bb-widget-extension-ng"), require("model-bb-transaction-categories-ng"), require("lib-bb-intent-ng"));
	else if(typeof define === 'function' && define.amd)
		define("widget-bb-transaction-categories-ng", ["vendor-bb-angular", "lib-bb-model-errors", "lib-bb-widget-ng", "lib-bb-event-bus-ng", "lib-bb-widget-extension-ng", "model-bb-transaction-categories-ng", "lib-bb-intent-ng"], factory);
	else if(typeof exports === 'object')
		exports["widget-bb-transaction-categories-ng"] = factory(require("vendor-bb-angular"), require("lib-bb-model-errors"), require("lib-bb-widget-ng"), require("lib-bb-event-bus-ng"), require("lib-bb-widget-extension-ng"), require("model-bb-transaction-categories-ng"), require("lib-bb-intent-ng"));
	else
		root["widget-bb-transaction-categories-ng"] = factory(root["vendor-bb-angular"], root["lib-bb-model-errors"], root["lib-bb-widget-ng"], root["lib-bb-event-bus-ng"], root["lib-bb-widget-extension-ng"], root["model-bb-transaction-categories-ng"], root["lib-bb-intent-ng"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_11__, __WEBPACK_EXTERNAL_MODULE_15__, __WEBPACK_EXTERNAL_MODULE_18__, __WEBPACK_EXTERNAL_MODULE_19__, __WEBPACK_EXTERNAL_MODULE_20__, __WEBPACK_EXTERNAL_MODULE_21__, __WEBPACK_EXTERNAL_MODULE_22__) {
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

	module.exports = __webpack_require__(17);

/***/ }),
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_11__;

/***/ }),
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_15__;

/***/ }),
/* 16 */,
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _vendorBbAngular = __webpack_require__(11);
	
	var _vendorBbAngular2 = _interopRequireDefault(_vendorBbAngular);
	
	var _libBbWidgetNg = __webpack_require__(18);
	
	var _libBbWidgetNg2 = _interopRequireDefault(_libBbWidgetNg);
	
	var _libBbEventBusNg = __webpack_require__(19);
	
	var _libBbEventBusNg2 = _interopRequireDefault(_libBbEventBusNg);
	
	var _libBbWidgetExtensionNg = __webpack_require__(20);
	
	var _libBbWidgetExtensionNg2 = _interopRequireDefault(_libBbWidgetExtensionNg);
	
	var _modelBbTransactionCategoriesNg = __webpack_require__(21);
	
	var _modelBbTransactionCategoriesNg2 = _interopRequireDefault(_modelBbTransactionCategoriesNg);
	
	var _libBbIntentNg = __webpack_require__(22);
	
	var _libBbIntentNg2 = _interopRequireDefault(_libBbIntentNg);
	
	var _controller = __webpack_require__(23);
	
	var _controller2 = _interopRequireDefault(_controller);
	
	var _defaultHooks = __webpack_require__(25);
	
	var _defaultHooks2 = _interopRequireDefault(_defaultHooks);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * @module widget-bb-transaction-categories-ng
	 *
	 * @description
	 * Transaction categories
	 */
	var moduleKey = 'widget-bb-transaction-categories-ng';
	var hooksKey = moduleKey + ':hooks';
	
	exports.default = _vendorBbAngular2.default.module(moduleKey, [_libBbWidgetNg2.default, _libBbEventBusNg2.default, _modelBbTransactionCategoriesNg2.default, _libBbIntentNg2.default]).factory(hooksKey, (0, _libBbWidgetExtensionNg2.default)(_defaultHooks2.default)).controller('TransactionCategoriesController', [
	// dependencies to inject
	_libBbEventBusNg.eventBusKey, hooksKey, _libBbWidgetNg.widgetKey, _modelBbTransactionCategoriesNg.modelTransactionCategoriesKey, _libBbIntentNg.bbIntentKey,
	/* into */
	_controller2.default])
	
	// Initialize intent library
	.run([_libBbIntentNg.bbIntentKey, function (intents) {
	  intents.init();
	}]).name;

/***/ }),
/* 18 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_18__;

/***/ }),
/* 19 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_19__;

/***/ }),
/* 20 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_20__;

/***/ }),
/* 21 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_21__;

/***/ }),
/* 22 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_22__;

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = TransactionCategoriesController;
	
	var _libBbModelErrors = __webpack_require__(15);
	
	var _constants = __webpack_require__(24);
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; } /**
	                                                                                                                                                                                                                   * @module widget-bb-transaction-categories-ng
	                                                                                                                                                                                                                   * @name TransactionCategoriesController
	                                                                                                                                                                                                                   *
	                                                                                                                                                                                                                   * @description
	                                                                                                                                                                                                                   * Transaction categories
	                                                                                                                                                                                                                   */
	
	var errorMessage = function errorMessage(code) {
	  var _E_AUTH$E_CONNECTIVIT;
	
	  return (_E_AUTH$E_CONNECTIVIT = {}, _defineProperty(_E_AUTH$E_CONNECTIVIT, _libBbModelErrors.E_AUTH, 'error.load.auth'), _defineProperty(_E_AUTH$E_CONNECTIVIT, _libBbModelErrors.E_CONNECTIVITY, 'error.load.connectivity'), _E_AUTH$E_CONNECTIVIT)[code] || 'error.load.unexpected';
	};
	
	function TransactionCategoriesController(bus, hooks, widget, model, bbIntent) {
	  var $ctrl = this;
	  var intentResolve = void 0;
	  var selectedTransaction = void 0;
	  var intentPreferencesArray = widget.getStringPreference(_constants.PreferencesKeys.INTENTS_LIST).split(',');
	
	  /**
	   * AngularJS Lifecycle hook used to initialize the controller
	   *
	   * @name TransactionCategoriesController#$onInit
	   * @type {function}
	   * @returns {void}
	   */
	  var $onInit = function $onInit() {
	    $ctrl.isLoading = true;
	
	    return model.getCategories().then(function (loaded) {
	      $ctrl.items = hooks.afterCategoriesLoad(loaded);
	    }).then(function () {
	      $ctrl.isLoading = false;
	
	      bus.publish(_constants.Event.CXP_ITEM_LOADED, {
	        id: widget.getId()
	      });
	
	      bus.publish(_constants.Event.BB_ITEM_LOADED, {
	        id: widget.getId()
	      });
	
	      if (intentPreferencesArray.indexOf(_constants.Intent.SHOW_CATEGORIES) > -1) {
	        bbIntent.handle(_constants.Intent.SHOW_CATEGORIES, function (passedData, respond) {
	          $ctrl.selectedTransaction = hooks.selectedTransactionObject(passedData);
	          $ctrl.isModalOpen = true;
	          $ctrl.intentResolve = respond;
	        });
	      }
	    }).catch(function (error) {
	      $ctrl.error = errorMessage(error.code);
	      bus.publish('widget-bb-transaction-categories-ng.load.failed', { error: error });
	    });
	  };
	
	  Object.assign($ctrl, {
	    $onInit: $onInit,
	
	    /**
	     * @description
	     * The value returned from {@link Hooks.processItems} hook.
	     * null if the items aren't loaded.
	     *
	     * @name TransactionCategoriesController#items
	     * @type {any}
	     */
	    items: null,
	
	    /**
	     * @description
	     * Loading status
	     *
	     * @name TransactionCategoriesController#isLoading
	     * @type {boolean}
	     */
	    isLoading: false,
	
	    /**
	     * @description
	     * The error encountered when attempting to fetch from the model
	     *
	     * @name TransactionCategoriesController#error
	     * @type {ModelError}
	     */
	    error: null,
	
	    intentResolve: intentResolve,
	
	    selectedTransaction: selectedTransaction
	  });
	}

/***/ }),
/* 24 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * @name Event
	 * @description
	 * Widget events enum
	 * @type {object}
	 */
	var Event = exports.Event = {
	  CXP_ITEM_LOADED: 'cxp.item.loaded',
	  BB_ITEM_LOADED: 'bb.item.loaded'
	};
	
	/**
	 * @name Intent
	 * @description
	 * Widget intent enum
	 * @type {object}
	 */
	var Intent = exports.Intent = {
	  SHOW_CATEGORIES: 'intent.rb.categories.management.list.view'
	};
	
	/**
	 * @name PreferencesKeys
	 * @description
	 * Preferences keys enum
	 * @type {object}
	 */
	var PreferencesKeys = exports.PreferencesKeys = {
	  INTENTS_LIST: 'intents'
	};

/***/ }),
/* 25 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var identity = function identity(a) {
	  return a;
	};
	
	exports.default = {
	  /**
	   * @name afterCategoriesLoad
	   * @type {function}
	   * @description
	   * Default hook for setting the passed items from the model
	   *
	   * @param {array} items
	   * @returns {array}
	   */
	  afterCategoriesLoad: identity,
	
	  /**
	   * @name selectedTransactionObject
	   * @type {function}
	   * @description
	   * Default hook for setting the passed items from the model
	   *
	   * @param {object} transaction
	   * @returns {object}
	   */
	  selectedTransactionObject: identity
	};

/***/ })
/******/ ])
});
;
//# sourceMappingURL=widget-bb-transaction-categories-ng.js.map