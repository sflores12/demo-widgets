(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vendor-bb-angular"), require("lib-bb-widget-ng"), require("lib-bb-model-errors"), require("lib-bb-event-bus-ng"), require("lib-bb-currency-ng"), require("model-bb-income-spending-analysis-category-ng"), require("model-bb-turnovers-ng"), require("lib-bb-widget-extension-ng"), require("lib-bb-extension-helpers-ng"), require("lib-bb-intent-ng"));
	else if(typeof define === 'function' && define.amd)
		define("widget-bb-income-spending-analysis-category-ng", ["vendor-bb-angular", "lib-bb-widget-ng", "lib-bb-model-errors", "lib-bb-event-bus-ng", "lib-bb-currency-ng", "model-bb-income-spending-analysis-category-ng", "model-bb-turnovers-ng", "lib-bb-widget-extension-ng", "lib-bb-extension-helpers-ng", "lib-bb-intent-ng"], factory);
	else if(typeof exports === 'object')
		exports["widget-bb-income-spending-analysis-category-ng"] = factory(require("vendor-bb-angular"), require("lib-bb-widget-ng"), require("lib-bb-model-errors"), require("lib-bb-event-bus-ng"), require("lib-bb-currency-ng"), require("model-bb-income-spending-analysis-category-ng"), require("model-bb-turnovers-ng"), require("lib-bb-widget-extension-ng"), require("lib-bb-extension-helpers-ng"), require("lib-bb-intent-ng"));
	else
		root["widget-bb-income-spending-analysis-category-ng"] = factory(root["vendor-bb-angular"], root["lib-bb-widget-ng"], root["lib-bb-model-errors"], root["lib-bb-event-bus-ng"], root["lib-bb-currency-ng"], root["model-bb-income-spending-analysis-category-ng"], root["model-bb-turnovers-ng"], root["lib-bb-widget-extension-ng"], root["lib-bb-extension-helpers-ng"], root["lib-bb-intent-ng"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_22__, __WEBPACK_EXTERNAL_MODULE_26__, __WEBPACK_EXTERNAL_MODULE_28__, __WEBPACK_EXTERNAL_MODULE_37__, __WEBPACK_EXTERNAL_MODULE_38__, __WEBPACK_EXTERNAL_MODULE_39__, __WEBPACK_EXTERNAL_MODULE_40__, __WEBPACK_EXTERNAL_MODULE_41__, __WEBPACK_EXTERNAL_MODULE_42__, __WEBPACK_EXTERNAL_MODULE_43__) {
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

	module.exports = __webpack_require__(36);

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
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _vendorBbAngular = __webpack_require__(22);
	
	var _vendorBbAngular2 = _interopRequireDefault(_vendorBbAngular);
	
	var _libBbWidgetNg = __webpack_require__(26);
	
	var _libBbWidgetNg2 = _interopRequireDefault(_libBbWidgetNg);
	
	var _libBbEventBusNg = __webpack_require__(37);
	
	var _libBbEventBusNg2 = _interopRequireDefault(_libBbEventBusNg);
	
	var _libBbCurrencyNg = __webpack_require__(38);
	
	var _libBbCurrencyNg2 = _interopRequireDefault(_libBbCurrencyNg);
	
	var _modelBbIncomeSpendingAnalysisCategoryNg = __webpack_require__(39);
	
	var _modelBbIncomeSpendingAnalysisCategoryNg2 = _interopRequireDefault(_modelBbIncomeSpendingAnalysisCategoryNg);
	
	var _modelBbTurnoversNg = __webpack_require__(40);
	
	var _modelBbTurnoversNg2 = _interopRequireDefault(_modelBbTurnoversNg);
	
	var _libBbWidgetExtensionNg = __webpack_require__(41);
	
	var _libBbWidgetExtensionNg2 = _interopRequireDefault(_libBbWidgetExtensionNg);
	
	var _libBbExtensionHelpersNg = __webpack_require__(42);
	
	var _libBbExtensionHelpersNg2 = _interopRequireDefault(_libBbExtensionHelpersNg);
	
	var _libBbIntentNg = __webpack_require__(43);
	
	var _libBbIntentNg2 = _interopRequireDefault(_libBbIntentNg);
	
	var _controller = __webpack_require__(44);
	
	var _controller2 = _interopRequireDefault(_controller);
	
	var _defaultHooks = __webpack_require__(47);
	
	var _defaultHooks2 = _interopRequireDefault(_defaultHooks);
	
	var _helpers = __webpack_require__(48);
	
	var _helpers2 = _interopRequireDefault(_helpers);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * @module widget-bb-income-spending-analysis-category-ng
	 *
	 * @description
	 * Income/Spending analysis by category widget
	 *
	 * @usage
	 * <div ng-controller="IncomeSpendingAnalysisCategoryController as $ctrl">
	 *   <ui-bb-chartjs-chart-donut-ng
	 *     data-series="$ctrl.series"
	 *   ></ui-bb-chartjs-chart-donut-ng>
	 * </div>
	 */
	
	var moduleKey = 'widget-bb-income-spending-analysis-category-ng';
	var hooksKey = moduleKey + ':hooks';
	var helpersKey = moduleKey + ':helpers';
	
	exports.default = _vendorBbAngular2.default.module(moduleKey, [_libBbWidgetNg2.default, _libBbEventBusNg2.default, _libBbIntentNg2.default, _modelBbIncomeSpendingAnalysisCategoryNg2.default, _modelBbTurnoversNg2.default, _libBbCurrencyNg2.default, _libBbExtensionHelpersNg2.default]).factory(_libBbExtensionHelpersNg.extensionHelpersContextKey, ['$compile', '$rootScope',
	// dependencies to inject
	_libBbEventBusNg.eventBusKey, _libBbCurrencyNg.bbCurrencyRuleKey, function ($compile, $rootScope, bus, getRule) {
	  return {
	    $compile: $compile,
	    $rootScope: $rootScope,
	    bus: bus,
	    getRule: getRule
	  };
	}]).factory(hooksKey, (0, _libBbWidgetExtensionNg2.default)(_defaultHooks2.default)).factory(helpersKey, ['$timeout', _helpers2.default]).controller('IncomeSpendingAnalysisCategoryController', [_libBbEventBusNg.eventBusKey, hooksKey, helpersKey, _modelBbIncomeSpendingAnalysisCategoryNg.modelIncomeSpendingAnalysisCategoryKey, _modelBbTurnoversNg.modelTurnoversKey, _libBbIntentNg.bbIntentKey, _libBbWidgetNg.widgetKey,
	/* into */
	_controller2.default]).run([_libBbEventBusNg.eventBusKey, _libBbWidgetNg.widgetKey, function (bus, widget) {
	  bus.publish('cxp.item.loaded', {
	    id: widget.getId()
	  });
	}]).name;

/***/ }),
/* 37 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_37__;

/***/ }),
/* 38 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_38__;

/***/ }),
/* 39 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_39__;

/***/ }),
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
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = IncomeSpendingAnalysisCategoryController;
	
	var _libBbModelErrors = __webpack_require__(28);
	
	var _message = __webpack_require__(45);
	
	var _message2 = _interopRequireDefault(_message);
	
	var _constants = __webpack_require__(46);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; } /**
	                                                                                                                                                                                                                   * @module widget-bb-income-spending-analysis-category-ng
	                                                                                                                                                                                                                   * @name IncomeSpendingAnalysisCategoryController
	                                                                                                                                                                                                                   *
	                                                                                                                                                                                                                   * @description
	                                                                                                                                                                                                                   * Income/Spending analysis by category
	                                                                                                                                                                                                                   */
	
	var PRODUCT_SELECTED = _message2.default.PRODUCT_SELECTED,
	    PRODUCTS_SELECTED = _message2.default.PRODUCTS_SELECTED,
	    ANALYSIS_CATEGORY_LOAD_FAILED = _message2.default.ANALYSIS_CATEGORY_LOAD_FAILED,
	    PERIOD_START_CHANGED = _message2.default.PERIOD_START_CHANGED,
	    PERIOD_END_CHANGED = _message2.default.PERIOD_END_CHANGED;
	function IncomeSpendingAnalysisCategoryController(bus, hooks, helpers, model, turnoversModel, bbIntent, widget) {
	  var $ctrl = this;
	
	  /**
	   * @name analysisIndicator
	   * @type {string}
	   * @inner
	   * @description
	   * Credit/Debit indicator that will be used for analysis
	   */
	  var analysisIndicator = widget.getStringPreference(_constants.ANALYSIS_INDICATOR_PREF, _constants.SPENDING_ANALYSIS_INDICATOR);
	
	  /**
	   * @name isSpendingAnalysis
	   * @type {function}
	   * @description
	   * Is current analysis spending analysis
	   * @returns {boolean}
	   */
	  var isSpendingAnalysis = function isSpendingAnalysis() {
	    return analysisIndicator === _constants.SPENDING_ANALYSIS_INDICATOR;
	  };
	
	  /**
	   * @description
	   * A set of intents that the controller uses or handles
	   *
	   * @name intents
	   * @type {Object}
	   * @inner
	   */
	  var intents = {};
	
	  /**
	   * @description
	   * The intent to select an analysis category item
	   *
	   * @name intents#selectAnalysisCategoryItem
	   * @type {function}
	   * @inner
	   */
	  intents.selectAnalysisCategoryItem = bbIntent.create(_constants.Intent.SELECT_ANALYSIS_ITEM[analysisIndicator]);
	
	  /**
	   * @description
	   * Deprecated intent to select an analysis category item
	   *
	   * @name intents#selectAnalysisCategoryItemDeprecated
	   * @type {function}
	   * @inner
	   */
	  intents.selectAnalysisCategoryItemDeprecated = bbIntent.create(_constants.Intent.SELECT_ANALYSIS_ITEM_DEPRECATED);
	
	  bbIntent.init(function () {});
	
	  /**
	   * @description
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
	   * @description
	   * Setter for the selected analysis category.
	   * It creates an intent 'view.account.category.transactions'
	   * that can be handled by transaction widget
	   *
	   * @name setSelectedAnalysisItem
	   * @param {any} item selected item
	   * @type {function}
	   * @returns {void}
	   */
	  var setSelectedAnalysisItem = function setSelectedAnalysisItem(item) {
	    $ctrl.selectedAnalysisItem = hooks.onSelectedItemChanged(item);
	    intents.selectAnalysisCategoryItem($ctrl.selectedAnalysisItem);
	    intents.selectAnalysisCategoryItemDeprecated($ctrl.selectedAnalysisItem);
	  };
	
	  /**
	   * Updates analysis items list based on selected product
	   *
	   * @name updateAnalysisCategories
	   * @type {function}
	   * @returns {Promise.<void>}
	   */
	  var updateAnalysisCategories = function updateAnalysisCategories() {
	    return model.validateAnalysisParameters(hooks.onAnalysisDataUpdate({
	      creditDebitIndicator: analysisIndicator,
	      arrangementIds: $ctrl.selectedProducts.map(function (product) {
	        return product.id;
	      }),
	      periodStartDate: $ctrl.periodStartDate,
	      periodEndDate: $ctrl.periodEndDate
	    })).then(model.loadAnalysisData).then(function (loaded) {
	      $ctrl.items = hooks.processAnalysisCategoryItems(loaded);
	      $ctrl.series = hooks.processAnalysisCategorySeries(model.transformToSeries(loaded), loaded);
	      setSelectedAnalysisItem(null);
	    }).catch(function (error) {
	      $ctrl.error = hooks.processLoadError(errorMessage(error.code));
	      bus.publish(ANALYSIS_CATEGORY_LOAD_FAILED, { error: error });
	    });
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
	    return turnoversModel.validateTurnoversParameters(hooks.onTurnoversUpdate({
	      arrangementIds: $ctrl.selectedProducts.map(function (product) {
	        return product.id;
	      }),
	      periodStartDate: $ctrl.periodStartDate,
	      periodEndDate: $ctrl.periodEndDate,
	      intervalDuration: $ctrl.intervalDuration || 'MONTH',
	      intervalStartDay: $ctrl.intervalStartDay || 1
	    })).then(turnoversModel.loadTurnovers).then(function (loaded) {
	      $ctrl.error = null;
	      $ctrl.turnoversItems = hooks.processTurnoverResponse(loaded);
	      $ctrl.turnoversSeries = hooks.processTurnoverSeries(turnoversModel.transformToSeries(loaded, _constants.TURNOVERS_DATA_KEY[analysisIndicator]), loaded);
	    }).catch(function (error) {
	      $ctrl.error = hooks.processLoadError(errorMessage(error.code));
	      bus.publish(ANALYSIS_CATEGORY_LOAD_FAILED, { error: error });
	    });
	  };
	
	  /**
	   * @description
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
	   * @param {string} startDate Date as string in format yyyy-mm-dd
	   * @returns {void}
	   */
	  var onPeriodStartDateChanged = function onPeriodStartDateChanged(startDate) {
	    $ctrl.periodStartDate = startDate;
	    bus.publish(PERIOD_START_CHANGED, $ctrl.periodStartDate);
	  };
	
	  /**
	   * @description
	   * Handler to be called on period end date change
	   *
	   * @name onPeriodEndDateChanged
	   * @type {function}
	   * @param {string} endDate Date as string in format yyyy-mm-dd
	   * @returns {void}
	   */
	  var onPeriodEndDateChanged = function onPeriodEndDateChanged(endDate) {
	    $ctrl.periodEndDate = endDate;
	    bus.publish(PERIOD_END_CHANGED, $ctrl.periodEndDate);
	  };
	
	  /**
	   * @description
	   * Handler to be used on product selection, is using
	   * selected product value from {@link Hooks.processSelectedProducts} hook
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
	   * Adds subscriptions to bus events
	   * @inner
	   * @name bindEvents
	   * @type {function}
	   */
	  function bindEvents() {
	    bus.subscribe(PRODUCT_SELECTED, function (selection) {
	      updateProductsSelected([selection.product]);
	      updateAnalysisCategories();
	    });
	    bus.subscribe(PRODUCTS_SELECTED, function (selection) {
	      helpers.debounce(function () {
	        updateProductsSelected(selection.products);
	        updateAnalysisCategories();
	      }, hooks.accountSelectionDebounce());
	    });
	    bus.subscribe(PERIOD_START_CHANGED, function (startDate) {
	      $ctrl.periodStartDate = startDate;
	      updateAnalysisCategories();
	    });
	    bus.subscribe(PERIOD_END_CHANGED, function (endDate) {
	      $ctrl.periodEndDate = endDate;
	      updateAnalysisCategories();
	    });
	  }
	
	  /**
	   * @description
	   * Initializes period data via hooks
	   *
	   * @inner
	   * @name initPeriodData
	   * @type {function}
	   */
	  var initPeriodData = function initPeriodData() {
	    $ctrl.periodStartDate = hooks.defaultPeriodStart();
	    $ctrl.periodEndDate = hooks.defaultPeriodEnd();
	  };
	
	  /**
	   * @description
	   * Updates the products list for the ui-bb-account-selector.
	   *
	   * @inner
	   * @name updateProductsList
	   * @type {function}
	   * @returns {Promise.<void>}
	   */
	  var updateProductsList = function updateProductsList(getFromStorage) {
	    return model.getProductsArray(getFromStorage).then(function (products) {
	      $ctrl.products = hooks.processProductsList(products);
	      return $ctrl.products;
	    }).catch(function (error) {
	      $ctrl.error = errorMessage(error.code);
	      bus.publish(ANALYSIS_CATEGORY_LOAD_FAILED, { error: error });
	    });
	  };
	
	  /**
	   * @description
	   * AngularJS Lifecycle hook used to initialize the controller
	   *
	   * @name $onInit
	   * @type {function}
	   * @returns {Promise.<void>}
	   */
	  var $onInit = function $onInit() {
	    $ctrl.isLoading = true;
	    return updateProductsList().then(initProductSelection).then(initPeriodData).then(updateAnalysisCategories).then(updateTurnovers).then(bindEvents).then(function () {
	      $ctrl.isLoading = false;
	    });
	  };
	
	  Object.assign($ctrl, {
	    $onInit: $onInit,
	
	    /**
	     * @description
	     * The product selection for analysis
	     *
	     * @name selectedProducts
	     * @type {module:model-bb-product-summary-ng.Product[]}
	     */
	    selectedProducts: [],
	
	    /**
	     * @description
	     * List of products to be used by account selector for the analysis.
	     * Is recieved from {@link Hooks.processProductsList}
	     *
	     * @name products
	     * @type {module:model-bb-product-summary-ng.Product[]}
	     */
	    products: [],
	
	    /**
	     * @description
	     * The value returned from {@link Hooks.processAnalysisCategoryItems} hook.
	     * null if the items aren't loaded.
	     *
	     * @name items
	     * @type {module:model-bb-income-spending-analysis-category-ng.AnalysisCategoryData}
	     */
	    items: null,
	
	    /**
	     * @description
	     * The value returned from {@link Hooks.processTurnoverResponse} hook.
	     * null if the data isn't loaded.
	     *
	     * @name turnoversItems
	     * @type {module:model-bb-turnovers-ng.Turnover}
	     */
	    turnoversItems: null,
	
	    /**
	     * @description
	     * The value returned from {@link Hooks.processAnalysisCategorySeries} hook.
	     * Formatted for use within chart UI component.
	     * null if the data isn't loaded
	     *
	     * @name series
	     * @type {object}
	     */
	    series: null,
	
	    /**
	     * @description
	     * The value returned from {@link Hooks.processTurnoverSeries} hook.
	     * Formatted for use within chart UI component.
	     * null if the data isn't loaded
	     *
	     * @name turnoversSeries
	     * @type {module:model-bb-turnovers-ng.BBSeries}
	     */
	    turnoversSeries: null,
	
	    /**
	     * @description
	     * Date of the analysis period start
	     *
	     * @name periodStartDate
	     * @type {string}
	     */
	    periodStartDate: null,
	
	    /**
	     * @description
	     * Date of the analysis period end
	     *
	     * @name periodEndDate
	     * @type {string}
	     */
	    periodEndDate: null,
	
	    /**
	     * @description
	     * selected analysis item
	     *
	     * @name selectedAnalysisItem
	     * @type {any}
	     */
	    selectedAnalysisItem: null,
	    setSelectedAnalysisItem: setSelectedAnalysisItem,
	    isSpendingAnalysis: isSpendingAnalysis,
	
	    /**
	     * @description
	     * Loading status
	     *
	     * @name isLoading
	     * @type {boolean}
	     */
	    isLoading: false,
	    onPeriodStartDateChanged: onPeriodStartDateChanged,
	    onPeriodEndDateChanged: onPeriodEndDateChanged,
	    onProductSelected: onProductSelected,
	    onProductsSelected: onProductsSelected,
	    updateAnalysisCategories: updateAnalysisCategories,
	    updateTurnovers: updateTurnovers,
	
	    /**
	     * @description
	     * The error encountered when attempting to fetch from the model
	     *
	     * @name SpendingController#error
	     * @type {module:lib-bb-model-errors.ModelError}
	     */
	    error: null
	  });
	}

/***/ }),
/* 45 */
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
	   * Triggered when spending widget fails to load.
	   * @event widget-bb-income-spending-analysis-category-ng.load.failed
	   * @type {any}
	   */
	  ANALYSIS_CATEGORY_LOAD_FAILED: 'widget-bb-income-spending-analysis-category-ng.load.failed',
	
	  /**
	   * Triggered when period start date is changed.
	   * @event bb.event.analysis.category.period.start.date.changed
	   * @type {any}
	   */
	  PERIOD_START_CHANGED: 'bb.event.analysis.category.period.start.date.changed',
	
	  /**
	   * Triggered when period end date is changed.
	   * @event bb.event.analysis.category.period.end.date.changed
	   * @type {any}
	   */
	  PERIOD_END_CHANGED: 'bb.event.analysis.category.period.end.date.changed'
	};

/***/ }),
/* 46 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * @name CURRENT_DATE_OBJECT
	 * @description
	 * Current date
	 * Cache the date object to negate possible miss synchronization
	 * @type {object}
	 * @inner
	 */
	var CURRENT_DATE_OBJECT = new Date();
	
	/**
	 * @name CURRENT_YEAR
	 * @description
	 * Current year
	 * @type {number}
	 * @inner
	 */
	var CURRENT_YEAR = CURRENT_DATE_OBJECT.getFullYear();
	
	/**
	 * @name CURRENT_MONTH
	 * @description
	 * Current month
	 * @type {number}
	 * @inner
	 */
	var CURRENT_MONTH = CURRENT_DATE_OBJECT.getMonth();
	
	/**
	 * @name ANALYSIS_INDICATOR_PREF
	 * @description
	 * Name of analysis indicator preference in the model
	 * @type {string}
	 */
	var ANALYSIS_INDICATOR_PREF = exports.ANALYSIS_INDICATOR_PREF = 'analysisIndicator';
	
	/**
	 * @name SPENDING_ANALYSIS_INDICATOR
	 * @description
	 * Analysis indicator value for spending analysis
	 * @type {string}
	 */
	var SPENDING_ANALYSIS_INDICATOR = exports.SPENDING_ANALYSIS_INDICATOR = 'DBIT';
	
	/**
	 * @name MS_IN_MIN
	 * @description
	 * Amount of milliseconds in a minute
	 * @type {number}
	 */
	var MS_IN_MIN = exports.MS_IN_MIN = 60000;
	
	/**
	 * @name DEFAULT_PERIOD_START
	 * @description
	 * First day in the current month
	 * @type {number}
	 */
	var DEFAULT_PERIOD_START = exports.DEFAULT_PERIOD_START = new Date(CURRENT_YEAR, CURRENT_MONTH, 1);
	
	/**
	 * @name DEFAULT_PERIOD_END
	 * @description
	 * Current day
	 * @type {number}
	 */
	var DEFAULT_PERIOD_END = exports.DEFAULT_PERIOD_END = new Date();
	
	/**
	 * Delay for account selection change callback execution
	 * @name ACCOUNT_CHANGE_DEBOUNCE
	 * @type {number}
	 */
	var ACCOUNT_CHANGE_DEBOUNCE = exports.ACCOUNT_CHANGE_DEBOUNCE = 0;
	
	/**
	 * @name Intents
	 * @description
	 * An object with all the intents names
	 * @type {Object}
	 */
	var Intent = exports.Intent = {
	  // view.account.category.transactions key is deprecated
	  // TODO: remove in 2.10.1
	  SELECT_ANALYSIS_ITEM_DEPRECATED: 'view.account.category.transactions',
	  SELECT_ANALYSIS_ITEM: {
	    DBIT: 'intent.rb.transactions.dbit.list.view',
	    CRDT: 'intent.rb.transactions.crdt.list.view'
	  }
	};
	
	var TURNOVERS_DATA_KEY = exports.TURNOVERS_DATA_KEY = {
	  DBIT: 'debitAmount',
	  CRDT: 'creditAmount'
	};

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _constants = __webpack_require__(46);
	
	/**
	 * @name default-hooks#processAnalysisCategoryItems
	 * @type {function}
	 *
	 * @description
	 * Default hook for income/spending analysis by category collection post processing
	 *
	 * @param {module:model-bb-income-spending-analysis-category-ng.AnalysisCategoryData} items
	 * items to process
	 * @returns {module:model-bb-income-spending-analysis-category-ng.AnalysisCategoryData}
	 * processed items
	 */
	var processAnalysisCategoryItems = function processAnalysisCategoryItems(items) {
	  return items || [];
	};
	
	/**
	 * @name default-hooks#processAnalysisCategorySeries
	 * @type {function}
	 *
	 * @description
	 * Default hook for donut chart series object post processing
	 *
	 * @param {module:model-bb-income-spending-analysis-category-ng.BBSeries} series chart series data
	 * @param {module:model-bb-income-spending-analysis-category-ng.AnalysisCategoryData} data
	 * original analysis object
	 * @returns {object} processed series
	 */
	/* eslint no-unused-vars: ["error", { "args": "none" }] */
	/**
	 * @name default-hooks
	 * @type {object}
	 *
	 * @description
	 * Default hooks for widget-bb-income-spending-analysis-category-ng
	 */
	
	var processAnalysisCategorySeries = function processAnalysisCategorySeries(series, data) {
	  return series || {};
	};
	
	/**
	 * @name default-hooks#onAnalysisDataUpdate
	 * @type {function}
	 *
	 * @description
	 * Process parameters before they are sent to the model's load method
	 *
	 * @param {object} params parameters to process
	 * @returns {object} processed params
	 */
	var onAnalysisDataUpdate = function onAnalysisDataUpdate(params) {
	  return params;
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
	var processSelectedProducts = function processSelectedProducts(selectedProduct) {
	  return selectedProduct;
	};
	
	/**
	 * @name default-hooks#processProductsList
	 * @type {function}
	 *
	 * @description
	 * Process passed products list before passing it to the view.
	 *
	 * @param {module:model-bb-product-summary-ng.Product[]} products products to process
	 * @returns {module:model-bb-product-summary-ng.Product[]} processed products
	 */
	var processProductsList = function processProductsList(products) {
	  return products;
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
	  return new Date(_constants.DEFAULT_PERIOD_START.getTime() - _constants.DEFAULT_PERIOD_START.getTimezoneOffset() * _constants.MS_IN_MIN).toISOString().slice(0, 10);
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
	  return new Date(_constants.DEFAULT_PERIOD_END.getTime() - _constants.DEFAULT_PERIOD_END.getTimezoneOffset() * _constants.MS_IN_MIN).toISOString().slice(0, 10);
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
	 * @name default-hooks#onSelectedItemChanged
	 * @type {function}
	 *
	 * @description
	 * Sets a selected analysis item
	 *
	 * @param {any} item selected analysis item
	 * @returns {any} selected analysis item
	 */
	var onSelectedItemChanged = function onSelectedItemChanged(item) {
	  return item;
	};
	
	/**
	 * @name default-hooks#processLoadError
	 * @type {function}
	 *
	 * @description
	 * Sets the error for missing parameters in the income/spending analysis request
	 *
	 * @param {error} error error passed
	 * @returns {error} processed error
	 */
	var processLoadError = function processLoadError(error) {
	  return error;
	};
	
	exports.default = {
	  processAnalysisCategoryItems: processAnalysisCategoryItems,
	  processAnalysisCategorySeries: processAnalysisCategorySeries,
	  onAnalysisDataUpdate: onAnalysisDataUpdate,
	  onTurnoversUpdate: onTurnoversUpdate,
	  processTurnoverResponse: processTurnoverResponse,
	  processTurnoverSeries: processTurnoverSeries,
	  processSelectedProducts: processSelectedProducts,
	  processProductsList: processProductsList,
	  defaultPeriodStart: defaultPeriodStart,
	  defaultPeriodEnd: defaultPeriodEnd,
	  accountSelectionDebounce: accountSelectionDebounce,
	  processLoadError: processLoadError,
	  onSelectedItemChanged: onSelectedItemChanged
	};

/***/ }),
/* 48 */
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

/***/ })
/******/ ])
});
;
//# sourceMappingURL=widget-bb-income-spending-analysis-category-ng.js.map