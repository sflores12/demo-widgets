(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vendor-bb-angular-ng-aria"), require("ui-bb-i18n-ng"), require("ui-bb-substitute-error-ng"), require("ui-bb-format-amount"), require("ui-bb-chartjs-chart-bar-ng"), require("ui-bb-empty-state-ng"), require("lib-bb-styles"), require("ui-bb-dropdown-select"));
	else if(typeof define === 'function' && define.amd)
		define("ext-bb-turnovers-ng", ["vendor-bb-angular-ng-aria", "ui-bb-i18n-ng", "ui-bb-substitute-error-ng", "ui-bb-format-amount", "ui-bb-chartjs-chart-bar-ng", "ui-bb-empty-state-ng", "lib-bb-styles", "ui-bb-dropdown-select"], factory);
	else if(typeof exports === 'object')
		exports["ext-bb-turnovers-ng"] = factory(require("vendor-bb-angular-ng-aria"), require("ui-bb-i18n-ng"), require("ui-bb-substitute-error-ng"), require("ui-bb-format-amount"), require("ui-bb-chartjs-chart-bar-ng"), require("ui-bb-empty-state-ng"), require("lib-bb-styles"), require("ui-bb-dropdown-select"));
	else
		root["ext-bb-turnovers-ng"] = factory(root["vendor-bb-angular-ng-aria"], root["ui-bb-i18n-ng"], root["ui-bb-substitute-error-ng"], root["ui-bb-format-amount"], root["ui-bb-chartjs-chart-bar-ng"], root["ui-bb-empty-state-ng"], root["lib-bb-styles"], root["ui-bb-dropdown-select"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_3__, __WEBPACK_EXTERNAL_MODULE_4__, __WEBPACK_EXTERNAL_MODULE_5__, __WEBPACK_EXTERNAL_MODULE_7__, __WEBPACK_EXTERNAL_MODULE_8__, __WEBPACK_EXTERNAL_MODULE_12__, __WEBPACK_EXTERNAL_MODULE_16__) {
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

	module.exports = __webpack_require__(15);

/***/ }),
/* 1 */,
/* 2 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ }),
/* 3 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/***/ }),
/* 4 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_4__;

/***/ }),
/* 5 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_5__;

/***/ }),
/* 6 */,
/* 7 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_7__;

/***/ }),
/* 8 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_8__;

/***/ }),
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
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.events = exports.helpers = exports.hooks = exports.dependencyKeys = undefined;
	
	var _vendorBbAngularNgAria = __webpack_require__(2);
	
	var _vendorBbAngularNgAria2 = _interopRequireDefault(_vendorBbAngularNgAria);
	
	var _uiBbI18nNg = __webpack_require__(3);
	
	var _uiBbI18nNg2 = _interopRequireDefault(_uiBbI18nNg);
	
	var _uiBbSubstituteErrorNg = __webpack_require__(4);
	
	var _uiBbSubstituteErrorNg2 = _interopRequireDefault(_uiBbSubstituteErrorNg);
	
	var _uiBbDropdownSelect = __webpack_require__(16);
	
	var _uiBbDropdownSelect2 = _interopRequireDefault(_uiBbDropdownSelect);
	
	var _uiBbFormatAmount = __webpack_require__(5);
	
	var _uiBbFormatAmount2 = _interopRequireDefault(_uiBbFormatAmount);
	
	var _uiBbChartjsChartBarNg = __webpack_require__(7);
	
	var _uiBbChartjsChartBarNg2 = _interopRequireDefault(_uiBbChartjsChartBarNg);
	
	var _uiBbEmptyStateNg = __webpack_require__(8);
	
	var _uiBbEmptyStateNg2 = _interopRequireDefault(_uiBbEmptyStateNg);
	
	var _hooks = __webpack_require__(17);
	
	var _hooks2 = _interopRequireDefault(_hooks);
	
	var _helpers = __webpack_require__(18);
	
	var _helpers2 = _interopRequireDefault(_helpers);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var dependencyKeys = exports.dependencyKeys = [_uiBbI18nNg2.default, _vendorBbAngularNgAria2.default, _uiBbSubstituteErrorNg2.default, _uiBbDropdownSelect2.default, _uiBbFormatAmount2.default, _uiBbChartjsChartBarNg2.default, _uiBbEmptyStateNg2.default]; /**
	                                                                                                                                                                                                                                                                * @module ext-bb-turnovers-ng
	                                                                                                                                                                                                                                                                *
	                                                                                                                                                                                                                                                                * @description
	                                                                                                                                                                                                                                                                * Default extension for widget-bb-turnovers-ng
	                                                                                                                                                                                                                                                                *
	                                                                                                                                                                                                                                                                * @requires vendor-bb-angular-ng-aria
	                                                                                                                                                                                                                                                                * @requires ui-bb-i18n-ng
	                                                                                                                                                                                                                                                                * @requires ui-bb-substitute-error-ng
	                                                                                                                                                                                                                                                                * @requires ui-bb-dropdown-select
	                                                                                                                                                                                                                                                                * @requires ui-bb-format-amount
	                                                                                                                                                                                                                                                                * @requires ui-bb-chartjs-chart-bar-ng
	                                                                                                                                                                                                                                                                * @requires ui-bb-empty-state-ng
	                                                                                                                                                                                                                                                                */
	var hooks = exports.hooks = _hooks2.default;
	var helpers = exports.helpers = _helpers2.default;
	var events = exports.events = {};
	
	/**
	 * Turnovers specific BBSeries object
	 * @typedef {object} TurnoversBBSeries
	 * @property {string[]} labels Array of x axis labels
	 * @property {TurnoversDataset[]} datasets Array of all y axis value datasets
	 * @property {module:model-bb-turnovers-ng.Turnover} original Original turnover object
	 * @property {boolean} updated Flag that signals that series are processed by hook
	 */
	
	/**
	 * Turnovers specific dataset object for y axis
	 * @typedef {object} TurnoversDataset
	 * @extends module:model-bb-turnovers-ng.Dataset
	 * @property {string} backgroundColor Background color of bars that represent this dataset
	 * @property {string} hoverBackgroundColor Hover color of bars that represent this dataset
	 */
	
	/**
	 * Settings object with options available for bar chart.
	 * More info {@link http://www.chartjs.org/docs/latest/charts/bar.html}
	 * @typedef {object} ChartjsSettings
	 */

/***/ }),
/* 16 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_16__;

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _libBbStyles = __webpack_require__(12);
	
	var _libBbStyles2 = _interopRequireDefault(_libBbStyles);
	
	var _helpers = __webpack_require__(18);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * @name defaultPeriodStart
	 * @type {function}
	 *
	 * @description
	 * Sets period start property on init
	 *
	 * @returns {string} Start period string in format yyyy-mm-dd
	 */
	var defaultPeriodStart = function defaultPeriodStart() {
	  return (0, _helpers.periodToDate)((0, _helpers.getDefaultPeriod)());
	};
	
	/**
	 * @name defaultInterval
	 * @type {function}
	 *
	 * @description
	 * Sets interval property on init
	 *
	 * @param {module:widget-bb-turnovers-ng.Interval} interval Available intervals
	 * @returns {string} One of the available intervals
	 */
	var defaultInterval = function defaultInterval(interval) {
	  return interval.MONTH;
	};
	
	/**
	 * @name onTurnoversUpdate
	 * @type {function}
	 *
	 * @description
	 * Process parameters before they are sent to the model's load method
	 *
	 * @param {object} params to process
	 * @returns {object} processed params
	 */
	var onTurnoversUpdate = function onTurnoversUpdate(params) {
	  // make sure that period start date covers the whole month at the beginning
	  // other intervals are not covered because extension doesn't have them as an option
	  var startDate = new Date(params.periodStartDate);
	  startDate.setDate(params.intervalStartDay);
	  Object.assign(params, {
	    periodStartDate: startDate.toISOString().slice(0, 10)
	  });
	
	  return params;
	};
	
	/**
	 * @name processTurnoverSeries
	 * @type {function}
	 *
	 * @description
	 * Default hook for turnovers chart series object post processing
	 *
	 * @param {module:model-bb-turnovers-ng.BBSeries} series chart series data
	 * @param {module:model-bb-turnovers-ng.Turnover} data original turnover object
	 * @returns {TurnoversBBSeries} processed series
	 */
	var processTurnoverSeries = function processTurnoverSeries(series, data) {
	  series.datasets.forEach(function (dataset, index) {
	    var datasetColor = (0, _libBbStyles2.default)('.chart-bar-dataset-' + index, 'color');
	    Object.assign(dataset, {
	      backgroundColor: datasetColor,
	      hoverBackgroundColor: datasetColor
	    });
	  });
	
	  return Object.assign(series, {
	    datasets: series.datasets.reverse(),
	    original: data,
	    updated: true
	  });
	};
	
	/**
	 * @name processLoadError
	 * @type {function}
	 *
	 * @description
	 * Overwrite the default hook and don't return passed error
	 *
	 * @param {error} The error passed
	 * @returns {string} The actual error
	 */
	var processLoadError = function processLoadError(err) {
	  return err;
	};
	
	exports.default = {
	  defaultPeriodStart: defaultPeriodStart,
	  defaultInterval: defaultInterval,
	  onTurnoversUpdate: onTurnoversUpdate,
	  processTurnoverSeries: processTurnoverSeries,
	  processLoadError: processLoadError
	};

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.getDefaultPeriod = exports.periodToDate = exports.getPeriods = undefined;
	
	var _libBbStyles = __webpack_require__(12);
	
	var _libBbStyles2 = _interopRequireDefault(_libBbStyles);
	
	var _constants = __webpack_require__(19);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * @description
	 * Retrieves list of all periods
	 *
	 * @name getPeriods
	 * @type {function}
	 * @returns {Period[]} List of all available periods
	 */
	/* eslint no-underscore-dangle: [2, { "allow": ["_model"] }]*/
	/* global angular, window, document */
	var getPeriods = exports.getPeriods = function getPeriods() {
	  return _constants.PERIODS;
	};
	
	/**
	 * @description
	 * Checks period object and converts it into format needed
	 * for request (yyyy-mm-dd)
	 *
	 * @name periodToDate
	 * @type {function}
	 * @param {Period} period
	 * @returns {string} Formatted date
	 */
	var periodToDate = exports.periodToDate = function periodToDate(period) {
	  var date = new Date();
	  // current date already covers one period
	  var intervalCount = period.duration - 1;
	  switch (period.interval) {
	    case 'DAY':
	      date.setDate(date.getDate() - intervalCount);
	      break;
	    case 'WEEK':
	      date.setDate(date.getDate() - intervalCount * 7);
	      break;
	    case 'YEAR':
	      date.setFullYear(date.getFullYear() - intervalCount);
	      break;
	    case 'MONTH':
	    default:
	      date.setMonth(date.getMonth() - intervalCount);
	      break;
	  }
	
	  return date.toISOString().slice(0, 10);
	};
	
	/**
	 * @description
	 * Finds default period from period list
	 *
	 * @name getDefaultPeriod
	 * @type {function}
	 * @returns {Period} Period marked as default
	 */
	var getDefaultPeriod = exports.getDefaultPeriod = function getDefaultPeriod() {
	  var periods = getPeriods();
	  var index = Math.max(periods.map(function (item) {
	    return item.default;
	  }).indexOf(true), 0);
	  return periods[index];
	};
	
	var helpers = function helpers(context) {
	  var dateFilter = context.$filter('date');
	  var currencyFilter = context.$filter('currency');
	  var i18nFilter = context.$filter('i18n');
	  var getSymbol = function getSymbol(code) {
	    return context.getRule(code).symbol || code;
	  };
	
	  /**
	   * @description
	   * Keeps state of last screen mode
	   *
	   * @name helpers#onSmallScreen
	   * @type {boolean}
	   * @inner
	   */
	  var onSmallScreen = false;
	
	  /**
	   * @description
	   * Keeps state of initial bar percentage
	   * This value gets increased for small screens and reverted back
	   * on resize
	   *
	   * @name helpers#initialBarPercentage
	   * @type {number}
	   * @inner
	   */
	  var initialBarPercentage = 0;
	
	  /**
	   * @description
	   * To lower impact on performance, tooltip content will be stored in cache array once
	   * it is compiled. Both datasets present the same tooltip for same point index, so
	   * having cache per index is enough.
	   *
	   * @name helpers#tooltipContentCache
	   * @type {string[]}
	   * @inner
	   */
	  var tooltipContentCache = [];
	
	  /**
	   * @description
	   * Checks if screen mode has changed from last time it was checked
	   *
	   * @name helpers#isScreenChanged
	   * @type {function}
	   * @inner
	   * @param {boolean} smallScreen
	   * @returns {boolean}
	   */
	  var isScreenChanged = function isScreenChanged(smallScreen) {
	    var changed = smallScreen !== onSmallScreen;
	    if (changed) {
	      onSmallScreen = smallScreen;
	    }
	
	    return changed;
	  };
	
	  /**
	   * @description
	   * Builds HTML content of the tooltip
	   *
	   * @name helpers#buildTooltipContent
	   * @type {function}
	   * @inner
	   * @param {module:model-bb-turnovers-ng.TurnoverItem} item Selected item
	   * @returns {string}
	   */
	  var buildTooltipContent = function buildTooltipContent(item) {
	    return '\n    <div class="row">\n      <span class="col-xs-4">\n        ' + i18nFilter('turnovers.label.incoming') + '\n      </span>\n      <span class="col-xs-8 text-right">\n        <ui-bb-format-amount class="amount-regular-color"\n          data-amount="' + item.creditAmount.amount + '"\n          data-currency="\'' + item.creditAmount.currencyCode + '\'"\n          data-wrap\n          data-show-plus-sign>\n        </ui-bb-format-amount>\n      </span>\n    </div>\n    <div class="row">\n      <span class="col-xs-4">\n        ' + i18nFilter('turnovers.label.outgoing') + '\n      </span>\n      <span class="col-xs-8 text-right">\n        <ui-bb-format-amount class="amount-regular-color"\n          data-amount="' + item.debitAmount.amount * -1 + '"\n          data-currency="\'' + item.debitAmount.currencyCode + '\'"\n          data-wrap>\n        </ui-bb-format-amount>\n      </span>\n    </div>\n    <hr class="chart-tooltip-divider">\n    <div class="row">\n      <span class="col-xs-4">\n        <strong>' + i18nFilter('turnovers.label.difference') + '</strong>\n      </span>\n      <span class="col-xs-8 text-right text-' + (item.balance.amount < 0 ? 'danger' : 'success') + '">\n        <ui-bb-format-amount class="amount-regular-color"\n          data-amount="' + item.balance.amount + '"\n          data-currency="\'' + item.balance.currencyCode + '\'"\n          data-wrap>\n        </ui-bb-format-amount>\n      </span>\n    </div>\n  ';
	  };
	
	  /**
	   * @description
	   * Tries to get breaking point between small and medium screen width
	   * Returns 0 if selector is not correct
	   *
	   * @name helpers#getBreakingPoint
	   * @type {function}
	   * @inner
	   * @returns {number}
	   */
	  var getBreakingPoint = function getBreakingPoint() {
	    return parseFloat((0, _libBbStyles2.default)(_constants.CSS_SELECTORS.layoutBreak, 'width') || 0);
	  };
	
	  /**
	   * @description
	   * Tries to get height of the tooltip arrow
	   * Returns 0 if selector is not correct
	   *
	   * @name helpers#getTooltipArrowHeight
	   * @type {function}
	   * @inner
	   * @returns {number}
	   */
	  var getTooltipArrowHeight = function getTooltipArrowHeight() {
	    return parseFloat((0, _libBbStyles2.default)(_constants.CSS_SELECTORS.arrowOuter, 'borderWidth')) || 0;
	  };
	
	  /**
	   * @description
	   * Tries to get Y axis label padding
	   * Returns 0 if selector is not correct
	   *
	   * @name helpers#getYAxisLabelPadding
	   * @type {function}
	   * @inner
	   * @returns {number}
	   */
	  var getYAxisLabelPadding = function getYAxisLabelPadding() {
	    return parseFloat((0, _libBbStyles2.default)(_constants.CSS_SELECTORS.axisY, 'padding')) || 0;
	  };
	
	  /**
	   * @description
	   * Checks if current window width is lower than small screen break point
	   *
	   * @name helpers#isSmallScreen
	   * @type {function}
	   * @inner
	   * @returns {boolean}
	   */
	  var isSmallScreen = function isSmallScreen() {
	    return window.innerWidth <= getBreakingPoint();
	  };
	
	  /**
	   * @description
	   * Calculates absolute position of the tooltip, based on
	   * bar height and chart dimensions and assigns them to the
	   * tooltip DOM element
	   *
	   * @name helpers#setTooltipPosition
	   * @type {function}
	   * @inner
	   * @param {object} element in DOM
	   * @param {object} tooltip object containing tooltip related data like
	   * positions, current data point, styling from chart options, etc.
	   * @param {object} chart instance
	   * @returns {string} CSS class that needs to be appended to tooltip's arrow
	   */
	  var setTooltipPosition = function setTooltipPosition(element, tooltip, chart) {
	    var dataPoint = tooltip.dataPoints[0];
	    var barWidth = chart.getDatasetMeta(dataPoint.datasetIndex).data[dataPoint.index]._model.width;
	    var positionX = chart.canvas.offsetLeft + Math.floor(dataPoint.x) + Math.floor((dataPoint.datasetIndex === 0 ? 1 : -1) * (barWidth / 2)) - Math.ceil(element.clientWidth / 2);
	    var positionY = tooltip.caretY - getTooltipArrowHeight() - element.clientHeight;
	
	    // in case when tooltip is outside chart area, it needs to be moved inside
	    var adjustmentClass = '';
	    if (positionX < chart.chartArea.left) {
	      adjustmentClass = _constants.CSS_SELECTORS.arrowNear;
	      positionX += element.clientWidth / 4;
	    } else if (positionX + element.clientWidth > chart.chartArea.right) {
	      adjustmentClass = _constants.CSS_SELECTORS.arrowFar;
	      positionX -= element.clientWidth / 4;
	    }
	
	    Object.assign(element.style, {
	      left: positionX + 'px',
	      top: Math.max(0, positionY) + 'px'
	    });
	
	    return adjustmentClass;
	  };
	
	  /**
	   * @description
	   * Post processing of tooltip's content
	   *
	   * @name helpers#afterContentReady
	   * @type {function}
	   * @inner
	   * @param {object} element in DOM
	   * @param {object} tooltip object containing tooltip related data like
	   * positions, current data point, styling from chart options, etc.
	   * @param {object} chart instance
	   * @param {string} classes Default CSS classes of tooltip element
	   */
	  var afterContentReady = function afterContentReady(element, tooltip, chart, classes) {
	    // calculate element's position and determine if some additional CSS class is needed
	    var additionalClass = setTooltipPosition(element, tooltip, chart);
	    Object.assign(element, { className: classes + ' ' + additionalClass });
	    Object.assign(element.style, { opacity: 1 });
	  };
	
	  return {
	    periodToDate: periodToDate,
	    getPeriods: getPeriods,
	    getDefaultPeriod: getDefaultPeriod,
	
	    /**
	     * @description
	     * Callback on period value change. This function makes sure
	     * that controller properties are updated accordingly and calls
	     * controller's onPeriodChanged listener
	     *
	     * @name helpers#onPeriodChange
	     * @type {function}
	     * @param {TurnoversController} ctrl
	     */
	    onPeriodChange: function onPeriodChange(ctrl) {
	      Object.assign(ctrl, { periodStartDate: periodToDate(ctrl.currentPeriod) });
	      Object.assign(ctrl, { periodEndDate: new Date().toISOString().slice(0, 10) });
	      ctrl.onPeriodStartDateChanged();
	    },
	
	    /**
	     * @description
	     * Array of plugins used to transform Chart.js rendering in the extension
	     *
	     * @name chartPlugins
	     * @type {array}
	     */
	    chartPlugins: [{
	      afterInit: function afterInit(chartInstance) {
	        // append dataset labels
	        chartInstance.config.data.datasets.forEach(function (dataset, index) {
	          Object.assign(dataset, {
	            label: i18nFilter(_constants.DATASET_LABELS[index])
	          });
	        });
	
	        var legendEl = document.createElement('div');
	        legendEl.className = _constants.CSS_SELECTORS.legend;
	        legendEl.innerHTML = chartInstance.generateLegend();
	        chartInstance.canvas.parentNode.appendChild(legendEl);
	      },
	      beforeUpdate: function beforeUpdate(chartInstance) {
	        tooltipContentCache = [];
	        var scales = chartInstance.config.options.scales;
	        if (!initialBarPercentage) {
	          initialBarPercentage = scales.xAxes[0].categoryPercentage;
	        }
	
	        var smallScreen = isSmallScreen();
	        var data = chartInstance.config.data;
	        var count = data && data.labels ? data.labels.length : 0;
	        var smallScreenBarPercentage = Math.min(1, count >= _constants.BAR_COUNT_BREAK_POINT ? initialBarPercentage + 0.2 : initialBarPercentage + 0.1);
	
	        if (isScreenChanged(smallScreen)) {
	          chartInstance.config.data.datasets.reverse();
	        } else if (chartInstance.config.data.updated && smallScreen) {
	          // after data reload, we need immediate reverse for small screens
	          chartInstance.config.data.datasets.reverse();
	        }
	
	        scales.yAxes[0].display = !smallScreen;
	        scales.xAxes[0].categoryPercentage = smallScreen ? smallScreenBarPercentage : initialBarPercentage;
	        data.updated = false;
	      },
	      afterUpdate: function afterUpdate(chartInstance) {
	        if (!isSmallScreen()) {
	          return;
	        }
	
	        var makeOffset = function makeOffset(datasetIndex, x, w) {
	          var meta = chartInstance.getDatasetMeta(datasetIndex);
	          if (!meta) {
	            return;
	          }
	
	          var metaData = meta.data;
	          for (var i = 0; i < metaData.length; i++) {
	            var model = metaData[i]._model;
	            model.x += model.width * x;
	            model.width *= w;
	          }
	        };
	
	        makeOffset(0, 0.5, 1.43);
	        makeOffset(1, -0.5, 2);
	      }
	    }],
	
	    /**
	     * @description
	     * Creates custom tooltip content and places tooltip element on top
	     * of the currently active bar
	     *
	     * @name customizeTooltip
	     * @type {function}
	     *
	     * @param {object} tooltip object containing tooltip related data like
	     * positions, current data point, styling from chart options, etc.
	     * @param {object} element in DOM
	     * @param {TurnoversBBSeries} data array of data used to draw the chart
	     * @param {object} chart instance
	     */
	    customizeTooltip: function customizeTooltip(tooltip, element, data, chart) {
	      var pointIndex = tooltip.dataPoints[0].index;
	      var defaultClasses = 'chart-tooltip chart-tooltip-wide chart-tooltip-default bb-arrow-bottom hidden-xs';
	      Object.assign(element, { className: defaultClasses });
	      // do not show element until it's content is ready
	      Object.assign(element.style, { opacity: 0 });
	
	      // if content is cached skip building and compilation and go straight to post processing
	      if (tooltipContentCache[pointIndex]) {
	        Object.assign(element, { innerHTML: tooltipContentCache[pointIndex] });
	        afterContentReady(element, tooltip, chart, defaultClasses);
	        return;
	      }
	
	      // get data object for active point
	      var item = data.original.turnovers[tooltip.dataPoints[0].index];
	      Object.assign(element, { innerHTML: buildTooltipContent(item) });
	      // compile tooltip's content
	      context.$compile(angular.element(element).contents())(chart.$scope);
	      // use timeout to get real element dimensions once ui component is compiled
	      setTimeout(function () {
	        afterContentReady(element, tooltip, chart, defaultClasses);
	        // cache the content
	        tooltipContentCache[pointIndex] = element.innerHTML;
	      }, 0);
	    },
	
	    /**
	     * @description
	     * X axis tick formatter
	     *
	     * @name formatX
	     * @type {function}
	     *
	     * @param {array} ticks Array of scale ticks
	     * @param {TurnoversBBSeries} data Chart series
	     * @returns {array} Formatted array of ticks
	     */
	    formatX: function formatX(ticks) {
	      return ticks.map(function (tick) {
	        return dateFilter(tick, 'MMM');
	      });
	    },
	
	    /**
	     * @description
	     * Y axis tick formatter
	     *
	     * @name formatY
	     * @type {function}
	     *
	     * @param {array} ticks Array of scale ticks
	     * @param {TurnoversBBSeries} data Chart series
	     * @returns {array} Formatted array of ticks
	     */
	    formatY: function formatY(ticks, data) {
	      if (!data) {
	        return [];
	      }
	
	      // the same currency is being used for all ticks
	      var currencyCode = data.original.turnovers[0].balance.currencyCode;
	      return ticks.map(function (tick) {
	        if (parseFloat(tick) === 0) {
	          return null;
	        }
	        return currencyFilter(tick, getSymbol(currencyCode), 0);
	      });
	    },
	
	    /**
	     * @description
	     * Object with chart options that need to be overriden
	     *
	     * @name chartOptions
	     * @type {ChartjsSettings}
	     */
	    chartOptions: {
	      scales: {
	        xAxes: [{
	          ticks: {
	            fontColor: (0, _libBbStyles2.default)(_constants.CSS_SELECTORS.axisX, 'color'),
	            fontFamily: (0, _libBbStyles2.default)(_constants.CSS_SELECTORS.axisBase, 'fontFamily')
	          }
	        }],
	        yAxes: [{
	          gridLines: {
	            display: true,
	            drawBorder: false,
	            tickMarkLength: 0
	          },
	          ticks: {
	            min: 0,
	            maxTicksLimit: _constants.MAX_Y_TICKS,
	            padding: getYAxisLabelPadding(),
	            fontColor: (0, _libBbStyles2.default)(_constants.CSS_SELECTORS.axisY, 'color'),
	            fontFamily: (0, _libBbStyles2.default)(_constants.CSS_SELECTORS.axisBase, 'fontFamily')
	          }
	        }]
	      }
	    },
	
	    /**
	     * @description
	     * Checks chart series object to see if there are actual chart points to draw
	     *
	     * @name hasDataToDraw
	     * @type {function}
	     *
	     * @param {TurnoversBBSeries} series Chart series
	     * @returns {boolean}
	     */
	    hasDataToDraw: function hasDataToDraw(series) {
	      return series && series.datasets && series.datasets[0] && series.datasets[0].data && series.datasets[0].data.length;
	    }
	  };
	};
	
	exports.default = helpers;

/***/ }),
/* 19 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/* eslint-disable import/prefer-default-export */
	/**
	 * @name PERIODS
	 * @description
	 * Periods definition array
	 * @type {Period[]}
	 */
	var PERIODS = exports.PERIODS = [{
	  interval: 'MONTH',
	  duration: 6,
	  label: 'turnovers.label.duration.month.six',
	  default: true
	}, {
	  interval: 'MONTH',
	  duration: 12,
	  label: 'turnovers.label.duration.month.twelve'
	}];
	
	/**
	 * @name DATASET_LABELS
	 * @description
	 * Array of dataset labels
	 * @type {string[]}
	 */
	var DATASET_LABELS = exports.DATASET_LABELS = ['turnovers.label.incoming', 'turnovers.label.outgoing'];
	
	/**
	 * @name BAR_COUNT_BREAK_POINT
	 * @description
	 * Number of bars from which they should be put closer together
	 * @type {number}
	 */
	var BAR_COUNT_BREAK_POINT = exports.BAR_COUNT_BREAK_POINT = 10;
	
	/**
	 * @name MAX_Y_TICKS
	 * @description
	 * Maximum number of ticks on Y axis
	 * @type {number}
	 */
	var MAX_Y_TICKS = exports.MAX_Y_TICKS = 7;
	
	/**
	 * @name CSS_SELECTORS
	 * @description
	 * Object with all selectors needed for correct styling of canvas parts
	 * @type {CSS}
	 */
	var CSS_SELECTORS = exports.CSS_SELECTORS = {
	  axisBase: '.chart-bar-axis',
	  axisX: '.chart-bar-axis-x',
	  axisY: '.chart-bar-axis-y',
	  arrowOuter: '.chart-tooltip-default.bb-arrow-bottom::before',
	  layoutBreak: '.chart-layout-change',
	  arrowNear: 'bb-arrow-near',
	  arrowFar: 'bb-arrow-far',
	  legend: 'chart-bar-legend'
	};
	
	/**
	 * @typedef {object} CSS
	 * @description
	 * Object that containes all CSS selectors needed to style canvas parts
	 *
	 * @property {string} axisBase Axis CSS selector prefix
	 * @property {string} axisX X axis CSS selector
	 * @property {string} axisY Y axis CSS selector
	 * @property {string} arrowOuter Chart's tooltip arrow CSS selector (outer)
	 * @property {string} layoutBreak Selector for getting breaking point between
	 * small and medium screen
	 * @property {string} arrowNear CSS class for tooltip's arrow moved to the front
	 * @property {string} arrowFar CSS class for tooltip's arrow moved to the back
	 * @property {string} legend CSS class for legend wrapper
	 */
	
	/**
	 * @typedef {object} Period
	 * @description
	 * Object used to create list of period options
	 *
	 * @property {string} interval Interval name
	 * @property {number} duration Number of intervals
	 * (for creation period of multiple days, weeks, months...)
	 * @property {string} label Key used to generate localized title for the option
	 * @property {?boolean} default Optional flag to mark default period.
	 * If there is no default, first period will be shown
	 */

/***/ })
/******/ ])
});
;
//# sourceMappingURL=ext-bb-turnovers-ng.js.map