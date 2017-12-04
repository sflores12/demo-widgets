(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vendor-bb-angular"), require("lib-bb-widget-ng"), require("lib-bb-model-errors"), require("lib-bb-event-bus-ng"), require("lib-bb-currency-ng"), require("model-bb-turnovers-ng"), require("lib-bb-widget-extension-ng"), require("lib-bb-extension-helpers-ng"), require("lib-bb-intent-ng"));
	else if(typeof define === 'function' && define.amd)
		define("widget-bb-turnovers-ng", ["vendor-bb-angular", "lib-bb-widget-ng", "lib-bb-model-errors", "lib-bb-event-bus-ng", "lib-bb-currency-ng", "model-bb-turnovers-ng", "lib-bb-widget-extension-ng", "lib-bb-extension-helpers-ng", "lib-bb-intent-ng"], factory);
	else if(typeof exports === 'object')
		exports["widget-bb-turnovers-ng"] = factory(require("vendor-bb-angular"), require("lib-bb-widget-ng"), require("lib-bb-model-errors"), require("lib-bb-event-bus-ng"), require("lib-bb-currency-ng"), require("model-bb-turnovers-ng"), require("lib-bb-widget-extension-ng"), require("lib-bb-extension-helpers-ng"), require("lib-bb-intent-ng"));
	else
		root["widget-bb-turnovers-ng"] = factory(root["vendor-bb-angular"], root["lib-bb-widget-ng"], root["lib-bb-model-errors"], root["lib-bb-event-bus-ng"], root["lib-bb-currency-ng"], root["model-bb-turnovers-ng"], root["lib-bb-widget-extension-ng"], root["lib-bb-extension-helpers-ng"], root["lib-bb-intent-ng"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_22__, __WEBPACK_EXTERNAL_MODULE_26__, __WEBPACK_EXTERNAL_MODULE_28__, __WEBPACK_EXTERNAL_MODULE_37__, __WEBPACK_EXTERNAL_MODULE_38__, __WEBPACK_EXTERNAL_MODULE_40__, __WEBPACK_EXTERNAL_MODULE_41__, __WEBPACK_EXTERNAL_MODULE_42__, __WEBPACK_EXTERNAL_MODULE_43__) {
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

	module.exports = __webpack_require__(49);

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
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_22__;

/***/ }),
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_26__;

/***/ }),
/* 27 */,
/* 28 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_28__;

/***/ }),
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_37__;

/***/ }),
/* 38 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_38__;

/***/ }),
/* 39 */,
/* 40 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_40__;

/***/ }),
/* 41 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_41__;

/***/ }),
/* 42 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_42__;

/***/ }),
/* 43 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_43__;

/***/ }),
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _vendorBbAngular = __webpack_require__(22);
	
	var _vendorBbAngular2 = _interopRequireDefault(_vendorBbAngular);
	
	var _libBbWidgetExtensionNg = __webpack_require__(41);
	
	var _libBbWidgetExtensionNg2 = _interopRequireDefault(_libBbWidgetExtensionNg);
	
	var _libBbWidgetNg = __webpack_require__(26);
	
	var _libBbWidgetNg2 = _interopRequireDefault(_libBbWidgetNg);
	
	var _libBbEventBusNg = __webpack_require__(37);
	
	var _libBbEventBusNg2 = _interopRequireDefault(_libBbEventBusNg);
	
	var _libBbIntentNg = __webpack_require__(43);
	
	var _libBbIntentNg2 = _interopRequireDefault(_libBbIntentNg);
	
	var _modelBbTurnoversNg = __webpack_require__(40);
	
	var _modelBbTurnoversNg2 = _interopRequireDefault(_modelBbTurnoversNg);
	
	var _libBbExtensionHelpersNg = __webpack_require__(42);
	
	var _libBbExtensionHelpersNg2 = _interopRequireDefault(_libBbExtensionHelpersNg);
	
	var _libBbCurrencyNg = __webpack_require__(38);
	
	var _libBbCurrencyNg2 = _interopRequireDefault(_libBbCurrencyNg);
	
	var _helpers = __webpack_require__(50);
	
	var _helpers2 = _interopRequireDefault(_helpers);
	
	var _defaultHooks = __webpack_require__(51);
	
	var _defaultHooks2 = _interopRequireDefault(_defaultHooks);
	
	var _controller = __webpack_require__(53);
	
	var _controller2 = _interopRequireDefault(_controller);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var moduleKey = 'widget-bb-turnovers-ng'; /**
	                                           * @module widget-bb-turnovers-ng
	                                           *
	                                           * @description
	                                           * Turnovers
	                                           */
	
	var hooksKey = moduleKey + ':hooks';
	var helpersKey = moduleKey + ':helpers';
	
	exports.default = _vendorBbAngular2.default.module(moduleKey, [_libBbWidgetNg2.default, _libBbEventBusNg2.default, _modelBbTurnoversNg2.default, _libBbExtensionHelpersNg2.default, _libBbCurrencyNg2.default, _libBbIntentNg2.default]).factory(hooksKey, (0, _libBbWidgetExtensionNg2.default)(_defaultHooks2.default)).factory(_libBbExtensionHelpersNg.extensionHelpersContextKey, ['$compile', _libBbCurrencyNg.bbCurrencyRuleKey, function ($compile, getRule) {
	  return {
	    $compile: $compile,
	    getRule: getRule
	  };
	}]).factory(helpersKey, ['$timeout', _helpers2.default]).controller('TurnoversController', [
	// dependencies to inject
	_libBbEventBusNg.eventBusKey, hooksKey, helpersKey, _modelBbTurnoversNg.modelTurnoversKey, _libBbWidgetNg.widgetKey,
	/* into */
	_controller2.default]).run([_libBbEventBusNg.eventBusKey, _libBbWidgetNg.widgetKey, _libBbIntentNg.bbIntentKey, function (bus, widget, bbIntent) {
	  bus.publish('cxp.item.loaded', {
	    id: widget.getId()
	  });
	  bbIntent.init();
	}]).name;

/***/ }),
/* 50 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * @name helpers
	 * @description Controller helpers
	 * @type {Object}
	 *
	 * @property {function} debounce Executes a callback after some time
	 */
	var helpers = function helpers($timeout) {
	  /**
	   * @name current
	   * @description Keeps current timeout identifier for debounce helper
	   * @inner
	   * @type {any}
	   */
	  var current = null;
	
	  return {
	    debounce: function debounce(callback, time) {
	      if (current) {
	        $timeout.cancel(current);
	      }
	
	      current = $timeout(callback, time);
	    }
	  };
	};
	
	exports.default = helpers;

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _constants = __webpack_require__(52);
	
	/**
	 * @name default-hooks#processTurnoverResponse
	 * @type {function}
	 *
	 * @description
	 * Default hook for turnovers response object post processing
	 *
	 * @param {module:model-bb-turnovers-ng.Turnover} data turnover object to process
	 * @returns {module:model-bb-turnovers-ng.Turnover} turnover response object
	 */
	var processTurnoverResponse = function processTurnoverResponse(data) {
	  return data;
	};
	
	/**
	 * @name default-hooks#processTurnoverSeries
	 * @type {function}
	 *
	 * @description
	 * Default hook for turnovers chart series object post processing
	 *
	 * @param {module:model-bb-turnovers-ng.BBSeries} series chart series data
	 * @param {module:model-bb-turnovers-ng.Turnover} data original turnover object
	 * @returns {object} processed series
	 */
	/* eslint no-unused-vars: ["error", { "args": "none" }] */
	/**
	 * @name Default Hooks
	 * @type {object}
	 *
	 * @description
	 * Default hooks for widget-bb-turnovers-ng
	 */
	
	var processTurnoverSeries = function processTurnoverSeries(series, data) {
	  return series;
	};
	
	/**
	 * @name default-hooks#processSelectedProducts
	 * @type {function}
	 *
	 * @description
	 * Default hook to process products when selection is changed
	 * @param {module:model-bb-product-summary-ng.Product[]} product which is selected
	 * @returns {module:model-bb-product-summary-ng.Product[]} product after processing
	 */
	var processSelectedProducts = function processSelectedProducts(selectedProducts) {
	  return selectedProducts;
	};
	
	/**
	 * @name default-hooks#processProductsList
	 * @type {function}
	 *
	 * @description
	 * Process passed products list before passing it to the view.
	 *
	 * @param {module:model-bb-product-summary-ng.ProductKinds} products to process
	 * @returns {module:model-bb-product-summary-ng.ProductKinds} processed products
	 */
	var processProductsList = function processProductsList(products) {
	  return products;
	};
	
	/**
	 * @name default-hooks#onTurnoversUpdate
	 * @type {function}
	 *
	 * @description
	 * Process parameters before they are sent to the model's load method
	 *
	 * @param {object} params to process
	 * @returns {object} processed params
	 */
	var onTurnoversUpdate = function onTurnoversUpdate(params) {
	  return params;
	};
	
	/**
	 * @name default-hooks#defaultPeriodStart
	 * @type {function}
	 *
	 * @description
	 * Sets period start property on init
	 *
	 * @returns {string} Start period string in format yyyy-mm-dd
	 */
	var defaultPeriodStart = function defaultPeriodStart() {
	  var date = new Date();
	  date.setMonth(date.getMonth() - _constants.DEFAULT_DURATION);
	  return date.toISOString().slice(0, 10);
	};
	
	/**
	 * @name default-hooks#defaultPeriodEnd
	 * @type {function}
	 *
	 * @description
	 * Sets period end property on init
	 *
	 * @returns {string} End period string in format yyyy-mm-dd
	 */
	var defaultPeriodEnd = function defaultPeriodEnd() {
	  return new Date().toISOString().slice(0, 10);
	};
	
	/**
	 * @name default-hooks#defaultInterval
	 * @type {function}
	 *
	 * @description
	 * Sets interval property on init
	 *
	 * @param {Interval} interval Available intervals
	 * @returns {string} One of the available intervals
	 */
	var defaultInterval = function defaultInterval(interval) {
	  return _constants.DEFAULT_INTERVAL;
	};
	
	/**
	 * @name default-hooks#defaultStartDay
	 * @type {function}
	 *
	 * @description
	 * Sets monthly interval start day on init
	 *
	 * @returns {string} One of the available intervals
	 */
	var defaultStartDay = function defaultStartDay() {
	  return _constants.DEFAULT_START_DAY;
	};
	
	/**
	 * @name default-hooks#accountSelectionDebounce
	 * @type {function}
	 *
	 * @description
	 * Used when multiple account selection is active. Defines account selection change
	 * silence interval after which widget should send a new request and refresh
	 *
	 * @returns {number} Time in ms
	 */
	var accountSelectionDebounce = function accountSelectionDebounce() {
	  return _constants.ACCOUNT_CHANGE_DEBOUNCE;
	};
	
	/**
	 * @name default-hooks#processLoadError
	 * @type {function}
	 *
	 * @description
	 * Sets the error for missing parameters in the turnovers request
	 *
	 * @param {error} The error passed
	 * @returns {error} The actual error
	 */
	var processLoadError = function processLoadError(error) {
	  return error;
	};
	
	exports.default = {
	  processTurnoverResponse: processTurnoverResponse,
	  processTurnoverSeries: processTurnoverSeries,
	  processProductsList: processProductsList,
	  processSelectedProducts: processSelectedProducts,
	  onTurnoversUpdate: onTurnoversUpdate,
	  defaultPeriodStart: defaultPeriodStart,
	  defaultPeriodEnd: defaultPeriodEnd,
	  defaultInterval: defaultInterval,
	  defaultStartDay: defaultStartDay,
	  accountSelectionDebounce: accountSelectionDebounce,
	  processLoadError: processLoadError
	};

/***/ }),
/* 52 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * Available intervals
	 * @name INTERVAL
	 * @type {Interval}
	 */
	var INTERVAL = exports.INTERVAL = {
	  DAY: 'DAY',
	  WEEK: 'WEEK',
	  MONTH: 'MONTH',
	  YEAR: 'YEAR'
	};
	
	/**
	 * Default load interval
	 * @name DEFAULT_INTERVAL
	 * @type {string}
	 */
	var DEFAULT_INTERVAL = exports.DEFAULT_INTERVAL = INTERVAL.MONTH;
	
	/**
	 * Default load duration
	 * @name DEFAULT_DURATION
	 * @type {number}
	 */
	var DEFAULT_DURATION = exports.DEFAULT_DURATION = 6;
	
	/**
	 * Default start day for monthly interval
	 * @name DEFAULT_START_DAY
	 * @type {number}
	 */
	var DEFAULT_START_DAY = exports.DEFAULT_START_DAY = 1;
	
	/**
	 * Delay for account selection change callback execution
	 * @name ACCOUNT_CHANGE_DEBOUNCE
	 * @type {number}
	 */
	var ACCOUNT_CHANGE_DEBOUNCE = exports.ACCOUNT_CHANGE_DEBOUNCE = 0;
	
	/**
	 * Interval object
	 * @typedef {object} Interval
	 * @property {string} DAY Daily interval
	 * @property {string} WEEK Weekly interval
	 * @property {string} MONTH Monthly interval
	 * @property {string} YEAR Yearly interval
	 */

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = TurnoversController;
	
	var _libBbModelErrors = __webpack_require__(28);
	
	var _message = __webpack_require__(54);
	
	var _message2 = _interopRequireDefault(_message);
	
	var _constants = __webpack_require__(52);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; } /**
	                                                                                                                                                                                                                   * @module widget-bb-turnovers-ng
	                                                                                                                                                                                                                   * @name TurnoversController
	                                                                                                                                                                                                                   *
	                                                                                                                                                                                                                   * @description
	                                                                                                                                                                                                                   * Turnovers
	                                                                                                                                                                                                                   */
	
	var PRODUCT_SELECTED = _message2.default.PRODUCT_SELECTED,
	    PRODUCTS_SELECTED = _message2.default.PRODUCTS_SELECTED,
	    PERIOD_START_CHANGED = _message2.default.PERIOD_START_CHANGED,
	    PERIOD_END_CHANGED = _message2.default.PERIOD_END_CHANGED,
	    TURNOVERS_LOAD_FAILED = _message2.default.TURNOVERS_LOAD_FAILED;
	function TurnoversController(bus, hooks, helpers, model) {
	  var $ctrl = this;
	
	  /**
	   * Converts error code to error message translation key
	   *
	   * @inner
	   * @name errorMessage
	   * @type {function}
	   * @param {string} code Error code
	   * @returns {string} Error message translation key
	   */
	  var errorMessage = function errorMessage(code) {
	    var _E_AUTH$E_CONNECTIVIT;
	
	    return (_E_AUTH$E_CONNECTIVIT = {}, _defineProperty(_E_AUTH$E_CONNECTIVIT, _libBbModelErrors.E_AUTH, 'error.load.auth'), _defineProperty(_E_AUTH$E_CONNECTIVIT, _libBbModelErrors.E_CONNECTIVITY, 'error.load.connectivity'), _defineProperty(_E_AUTH$E_CONNECTIVIT, _libBbModelErrors.E_USER, 'error.load.user'), _defineProperty(_E_AUTH$E_CONNECTIVIT, model.E_PARAMS, model.E_PARAMS), _E_AUTH$E_CONNECTIVIT)[code] || 'error.load.unexpected';
	  };
	
	  /**
	   * Updates turnovers list based on selected product
	   *
	   * @inner
	   * @name updateTurnovers
	   * @type {function}
	   * @returns {Promise.<void>}
	   */
	  var updateTurnovers = function updateTurnovers() {
	    return model.validateTurnoversParameters(hooks.onTurnoversUpdate({
	      arrangementIds: $ctrl.selectedProducts.map(function (product) {
	        return product.id;
	      }),
	      periodStartDate: $ctrl.periodStartDate,
	      periodEndDate: $ctrl.periodEndDate,
	      intervalDuration: $ctrl.intervalDuration,
	      intervalStartDay: $ctrl.intervalStartDay
	    })).then(model.loadTurnovers).then(function (loaded) {
	      $ctrl.error = null;
	      $ctrl.data = hooks.processTurnoverResponse(loaded);
	      $ctrl.series = hooks.processTurnoverSeries(model.transformToSeries(loaded), loaded);
	    }).catch(function (error) {
	      $ctrl.error = hooks.processLoadError(errorMessage(error.code));
	      bus.publish(TURNOVERS_LOAD_FAILED, { error: error });
	    });
	  };
	
	  /**
	   * Updates the products list for the ui-bb-account-selector.
	   *
	   * @inner
	   * @name updateProductsList
	   * @type {function}
	   * @returns {Promise.<void>}
	   */
	  var updateProductsList = function updateProductsList(getFromStorage) {
	    return model.getProductsArray(getFromStorage).then(function (products) {
	      $ctrl.error = null;
	      $ctrl.products = hooks.processProductsList(products);
	      return $ctrl.products;
	    }).catch(function (error) {
	      $ctrl.error = errorMessage(error.code);
	      bus.publish(TURNOVERS_LOAD_FAILED, { error: error });
	    });
	  };
	
	  /**
	   * Updates selected product
	   *
	   * @inner
	   * @name updateProductsSelected
	   * @type {function}
	   * @param {module:model-bb-product-summary-ng.Product[]} selectedProducts Products to select
	   */
	  var updateProductsSelected = function updateProductsSelected(selectedProducts) {
	    $ctrl.selectedProducts = hooks.processSelectedProducts(selectedProducts);
	    // if this widget doesn't do the change in selection there is no need to update storage
	    if (!model.isFirstProductDefault()) {
	      return;
	    }
	
	    if (model.isMultipleAccount()) {
	      model.setSelectedProducts($ctrl.selectedProducts);
	    } else {
	      model.setSelectedProduct($ctrl.selectedProducts[0]);
	    }
	  };
	
	  /**
	   * @description
	   * Handler to be called on period start date change
	   *
	   * @name onPeriodStartDateChanged
	   * @type {function}
	   * @returns {void}
	   */
	  var onPeriodStartDateChanged = function onPeriodStartDateChanged() {
	    bus.publish(PERIOD_START_CHANGED, $ctrl.periodStartDate);
	  };
	
	  /**
	   * @description
	   * Handler to be called on period end date change
	   *
	   * @name onPeriodEndDateChanged
	   * @type {function}
	   * @returns {void}
	   */
	  var onPeriodEndDateChanged = function onPeriodEndDateChanged() {
	    bus.publish(PERIOD_END_CHANGED, $ctrl.periodEndDate);
	  };
	
	  /**
	   * @description
	   * Handler to be used on product selection, is using first item
	   * returned from {@link Hooks.processSelectedProducts} hook
	   *
	   * @name onProductSelected
	   * @type {function}
	   * @returns {void}
	   */
	  var onProductSelected = function onProductSelected() {
	    bus.publish(PRODUCT_SELECTED, {
	      product: $ctrl.selectedProducts[0]
	    });
	  };
	
	  /**
	   * @description
	   * Handler to be used on products selection, is using
	   * selected products value from {@link Hooks.processSelectedProducts} hook
	   *
	   * @name onProductsSelected
	   * @type {function}
	   * @returns {void}
	   */
	  var onProductsSelected = function onProductsSelected() {
	    bus.publish(PRODUCTS_SELECTED, {
	      products: $ctrl.selectedProducts
	    });
	  };
	
	  /**
	   * Reads product selection from storage
	   *
	   * @inner
	   * @name initProductSelection
	   * @type {function}
	   */
	  var initProductSelection = function initProductSelection() {
	    if (model.isMultipleAccount()) {
	      return model.getSelectedProducts().then(updateProductsSelected).then(function () {
	        if (model.isFirstProductDefault()) {
	          onProductsSelected();
	        }
	      });
	    }
	
	    return model.getSelectedProduct().then(function (selected) {
	      return updateProductsSelected([selected]);
	    });
	  };
	
	  /**
	   * Initializes period data via hooks
	   *
	   * @inner
	   * @name initPeriodData
	   * @type {function}
	   */
	  var initPeriodData = function initPeriodData() {
	    $ctrl.periodStartDate = hooks.defaultPeriodStart();
	    $ctrl.periodEndDate = hooks.defaultPeriodEnd();
	    $ctrl.intervalDuration = hooks.defaultInterval(_constants.INTERVAL);
	    $ctrl.intervalStartDay = hooks.defaultStartDay();
	  };
	
	  /**
	   * Adds subscriptions to bus events
	   * @inner
	   * @name bindEvents
	   * @type {function}
	   */
	  function bindEvents() {
	    bus.subscribe(PRODUCT_SELECTED, function (selection) {
	      updateProductsSelected([selection.product]);
	      updateTurnovers();
	    });
	    bus.subscribe(PRODUCTS_SELECTED, function (selection) {
	      helpers.debounce(function () {
	        updateProductsSelected(selection.products);
	        updateTurnovers();
	      }, hooks.accountSelectionDebounce());
	    });
	    bus.subscribe(PERIOD_START_CHANGED, updateTurnovers);
	    bus.subscribe(PERIOD_END_CHANGED, updateTurnovers);
	  }
	
	  /**
	   * AngularJS Lifecycle hook used to initialize the controller
	   *
	   * @name $onInit
	   * @type {function}
	   * @returns {Promise.<void>}
	   */
	  var $onInit = function $onInit() {
	    $ctrl.isLoading = true;
	    return updateProductsList().then(initProductSelection).then(initPeriodData).then(updateTurnovers).then(bindEvents).then(function () {
	      $ctrl.isLoading = false;
	    });
	  };
	
	  Object.assign($ctrl, {
	    $onInit: $onInit,
	
	    /**
	     * @description
	     * The value returned from {@link Hooks.processTurnoverResponse} hook.
	     * null if the data isn't loaded.
	     *
	     * @name data
	     * @type {module:model-bb-turnovers-ng.Turnover}
	     */
	    data: null,
	
	    /**
	     * @description
	     * The value returned from {@link Hooks.processTurnoverSeries} hook.
	     * Formatted for use within chart UI component.
	     * null if the data isn't loaded
	     *
	     * @name series
	     * @type {module:model-bb-turnovers-ng.BBSeries}
	     */
	    series: null,
	
	    /**
	     * @description
	     * The product selection for turnovers evaluation
	     *
	     * @name selectedProducts
	     * @type {module:model-bb-product-summary-ng.Product[]}
	     */
	    selectedProducts: [],
	
	    /**
	     * @description
	     * List of products to be used by account selector for turnovers evaluation.
	     * Is recieved from {@link Hooks.processProductsList}
	     *
	     * @name products
	     * @type {module:model-bb-product-summary-ng.Product[]}
	     */
	    products: [],
	    onProductSelected: onProductSelected,
	    onProductsSelected: onProductsSelected,
	    onPeriodStartDateChanged: onPeriodStartDateChanged,
	    onPeriodEndDateChanged: onPeriodEndDateChanged,
	
	    /**
	     * @description
	     * Date of the turnovers evaluation period start
	     *
	     * @name periodStartDate
	     * @type {string}
	     */
	    periodStartDate: null,
	
	    /**
	     * @description
	     * Date of the turnovers evaluation period end
	     *
	     * @name periodEndDate
	     * @type {string}
	     */
	    periodEndDate: null,
	
	    /**
	     * @description
	     * Length of each periodic interval
	     *
	     * @name intervalDuration
	     * @type {string}
	     */
	    intervalDuration: null,
	
	    /**
	     * @description
	     * Day of a month to start turnover interval
	     *
	     * @name intervalStartDay
	     * @type {number}
	     */
	    intervalStartDay: null,
	
	    /**
	     * @description
	     * Loading status
	     *
	     * @name isLoading
	     * @type {boolean}
	     */
	    isLoading: false,
	
	    /**
	     * @description
	     * Object containing all available intervals as key:value pairs
	     *
	     * @name interval
	     * @type {Interval}
	     */
	    interval: _constants.INTERVAL,
	
	    /**
	     * @description
	     * The error encountered when attempting to fetch from the model
	     *
	     * @name error
	     * @type {module:lib-bb-model-errors.ModelError}
	     */
	    error: null
	  });
	}

/***/ }),
/* 54 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  /**
	   * Triggered when product is selected.
	   * @event bb.event.product.selected
	   * @type {any}
	   */
	  PRODUCT_SELECTED: 'bb.event.product.selected',
	  /**
	   * Triggered when products selection has changed
	   * @event bb.event.products.selected
	   * @type {any}
	   */
	  PRODUCTS_SELECTED: 'bb.event.products.selected',
	  /**
	   * Triggered when period start date is changed.
	   * @event bb.event.turnovers.period.start.date.changed
	   * @type {any}
	   */
	  PERIOD_START_CHANGED: 'bb.event.turnovers.period.start.date.changed',
	  /**
	   * Triggered when period end date is changed.
	   * @event bb.event.turnovers.period.end.date.changed
	   * @type {any}
	   */
	  PERIOD_END_CHANGED: 'bb.event.turnovers.period.end.date.changed',
	  /**
	   * Triggered when turnovers widget fails to load.
	   * @event widget-bb-turnovers-ng.load.failed
	   * @type {any}
	   */
	  TURNOVERS_LOAD_FAILED: 'widget-bb-turnovers-ng.load.failed'
	};

/***/ })
/******/ ])
});
;
//# sourceMappingURL=widget-bb-turnovers-ng.js.map