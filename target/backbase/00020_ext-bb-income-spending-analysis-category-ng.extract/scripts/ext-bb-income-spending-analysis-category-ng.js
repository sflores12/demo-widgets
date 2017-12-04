(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vendor-bb-angular-ng-aria"), require("ui-bb-i18n-ng"), require("ui-bb-substitute-error-ng"), require("ui-bb-format-amount"), require("ui-bb-chartjs-chart-donut-ng"), require("ui-bb-chartjs-chart-bar-ng"), require("ui-bb-empty-state-ng"), require("ui-bb-change-period-ng"), require("vendor-bb-uib-buttons"), require("lib-bb-styles"));
	else if(typeof define === 'function' && define.amd)
		define("ext-bb-income-spending-analysis-category-ng", ["vendor-bb-angular-ng-aria", "ui-bb-i18n-ng", "ui-bb-substitute-error-ng", "ui-bb-format-amount", "ui-bb-chartjs-chart-donut-ng", "ui-bb-chartjs-chart-bar-ng", "ui-bb-empty-state-ng", "ui-bb-change-period-ng", "vendor-bb-uib-buttons", "lib-bb-styles"], factory);
	else if(typeof exports === 'object')
		exports["ext-bb-income-spending-analysis-category-ng"] = factory(require("vendor-bb-angular-ng-aria"), require("ui-bb-i18n-ng"), require("ui-bb-substitute-error-ng"), require("ui-bb-format-amount"), require("ui-bb-chartjs-chart-donut-ng"), require("ui-bb-chartjs-chart-bar-ng"), require("ui-bb-empty-state-ng"), require("ui-bb-change-period-ng"), require("vendor-bb-uib-buttons"), require("lib-bb-styles"));
	else
		root["ext-bb-income-spending-analysis-category-ng"] = factory(root["vendor-bb-angular-ng-aria"], root["ui-bb-i18n-ng"], root["ui-bb-substitute-error-ng"], root["ui-bb-format-amount"], root["ui-bb-chartjs-chart-donut-ng"], root["ui-bb-chartjs-chart-bar-ng"], root["ui-bb-empty-state-ng"], root["ui-bb-change-period-ng"], root["vendor-bb-uib-buttons"], root["lib-bb-styles"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_3__, __WEBPACK_EXTERNAL_MODULE_4__, __WEBPACK_EXTERNAL_MODULE_5__, __WEBPACK_EXTERNAL_MODULE_6__, __WEBPACK_EXTERNAL_MODULE_7__, __WEBPACK_EXTERNAL_MODULE_8__, __WEBPACK_EXTERNAL_MODULE_9__, __WEBPACK_EXTERNAL_MODULE_10__, __WEBPACK_EXTERNAL_MODULE_12__) {
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

	module.exports = __webpack_require__(1);

/***/ }),
/* 1 */
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
	
	var _uiBbFormatAmount = __webpack_require__(5);
	
	var _uiBbFormatAmount2 = _interopRequireDefault(_uiBbFormatAmount);
	
	var _uiBbChartjsChartDonutNg = __webpack_require__(6);
	
	var _uiBbChartjsChartDonutNg2 = _interopRequireDefault(_uiBbChartjsChartDonutNg);
	
	var _uiBbChartjsChartBarNg = __webpack_require__(7);
	
	var _uiBbChartjsChartBarNg2 = _interopRequireDefault(_uiBbChartjsChartBarNg);
	
	var _uiBbEmptyStateNg = __webpack_require__(8);
	
	var _uiBbEmptyStateNg2 = _interopRequireDefault(_uiBbEmptyStateNg);
	
	var _uiBbChangePeriodNg = __webpack_require__(9);
	
	var _uiBbChangePeriodNg2 = _interopRequireDefault(_uiBbChangePeriodNg);
	
	var _vendorBbUibButtons = __webpack_require__(10);
	
	var _vendorBbUibButtons2 = _interopRequireDefault(_vendorBbUibButtons);
	
	var _hooks = __webpack_require__(11);
	
	var _hooks2 = _interopRequireDefault(_hooks);
	
	var _helpers = __webpack_require__(13);
	
	var _helpers2 = _interopRequireDefault(_helpers);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var dependencyKeys = exports.dependencyKeys = [_vendorBbAngularNgAria2.default, _uiBbI18nNg2.default, _uiBbSubstituteErrorNg2.default, _uiBbFormatAmount2.default, _uiBbChartjsChartDonutNg2.default, _uiBbChartjsChartBarNg2.default, _uiBbEmptyStateNg2.default, _uiBbChangePeriodNg2.default, _vendorBbUibButtons2.default]; /**
	                                                                                                                                                                                                                                                                                                                                 * @module ext-bb-income-spending-analysis-category-ng
	                                                                                                                                                                                                                                                                                                                                 *
	                                                                                                                                                                                                                                                                                                                                 * @description
	                                                                                                                                                                                                                                                                                                                                 * Default extension for widget-bb-income-spending-analysis-category-ng
	                                                                                                                                                                                                                                                                                                                                 *
	                                                                                                                                                                                                                                                                                                                                 * @requires vendor-bb-angular-ng-aria
	                                                                                                                                                                                                                                                                                                                                 * @requires ui-bb-i18n-ng
	                                                                                                                                                                                                                                                                                                                                 * @requires ui-bb-substitute-error-ng
	                                                                                                                                                                                                                                                                                                                                 * @requires ui-bb-format-amount
	                                                                                                                                                                                                                                                                                                                                 * @requires ui-bb-chartjs-chart-donut-ng
	                                                                                                                                                                                                                                                                                                                                 * @requires ui-bb-empty-state-ng
	                                                                                                                                                                                                                                                                                                                                 */
	var hooks = exports.hooks = _hooks2.default;
	var helpers = exports.helpers = _helpers2.default;
	var events = exports.events = {};
	
	/**
	 * Extended analysis category item
	 * @typedef {object} ExtendedAnalysisCategory
	 * @extends module:model-bb-income-spending-analysis-category-ng.AnalysisCategory
	 * @property {number} totalPortion
	 * Percentage of total income/spending for a given category
	 * and all categories with a higher portion
	 */
	
	/**
	 * Analysis specific BBSeries object
	 * @typedef {object} AnalysisCategoryBBSeries
	 * @property {string[]} labels Array of chart labels
	 * @property {AnalysisCategoryDataset[]} datasets Array of all datasets
	 * @property {ExtendedAnalysisCategory[]} analysisItems Extended spending array
	 */
	
	/**
	 * Spendings specific dataset object for chart
	 * @typedef {object} AnalysisCategoryDataset
	 * @extends module:model-bb-income-spending-analysis-category-ng.Dataset
	 * @property {string} backgroundColor Background color for chart slices
	 * @property {number} borderWidth Border size between slices
	 */

/***/ }),
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
/* 6 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_6__;

/***/ }),
/* 7 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_7__;

/***/ }),
/* 8 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_8__;

/***/ }),
/* 9 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_9__;

/***/ }),
/* 10 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_10__;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _libBbStyles = __webpack_require__(12);
	
	var _libBbStyles2 = _interopRequireDefault(_libBbStyles);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * @name processAnalysisCategorySeries
	 * @type {function}
	 *
	 * @description
	 * Hook for income/spending chart series object post processing
	 *
	 * @param {module:model-bb-income-spending-analysis-category-ng.BBSeries} series chart series data
	 * @param {module:model-bb-income-spending-analysis-category-ng.AnalysisCategoryData} data
	 * @returns {AnalysisCategoryBBSeries} processed series
	 */
	var processAnalysisCategorySeries = function processAnalysisCategorySeries(series, data) {
	  // applies background colors from the theme to chart slices
	  var colors = [];
	  series.labels.forEach(function (categoryName, index) {
	    // convert category name to category class
	    var categoryClass = categoryName.replace(/[^\w]|[\s]/g, '-').replace(/-{2,}/g, '-').toLowerCase();
	
	    colors[index] = (0, _libBbStyles2.default)('.bb-transaction-category-' + categoryClass, 'color');
	  });
	
	  Object.assign(series.datasets[0], {
	    backgroundColor: colors,
	    borderWidth: 0
	  });
	
	  var totalPortion = 0;
	  var analysisItems = data.items.map(function (item) {
	    totalPortion += item.portion;
	    return Object.assign(item, { totalPortion: totalPortion });
	  });
	
	  return Object.assign(series, { analysisItems: analysisItems });
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
	 * @name processLoadError
	 * @type {function}
	 *
	 * @description
	 * Overwrite the default hook and don't return passed error
	 *
	 * @param {error} The error passed
	 * @returns {*} null
	 */
	var processLoadError = function processLoadError() {
	  return null;
	};
	
	exports.default = {
	  processAnalysisCategorySeries: processAnalysisCategorySeries,
	  processTurnoverSeries: processTurnoverSeries,
	  onTurnoversUpdate: onTurnoversUpdate,
	  processLoadError: processLoadError
	};

/***/ }),
/* 12 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_12__;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _libBbStyles = __webpack_require__(12);
	
	var _libBbStyles2 = _interopRequireDefault(_libBbStyles);
	
	var _constants = __webpack_require__(14);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * @description
	 * Parses numeric style to float or returns 0 if not found
	 *
	 * @name parseStyle
	 * @type {function}
	 * @inner
	 * @param {string} selector
	 * @param {string} attr Attribute
	 * @returns {number}
	 */
	/* global angular, document */
	var parseStyle = function parseStyle(selector, attr) {
	  return parseFloat((0, _libBbStyles2.default)(selector, attr)) || 0;
	};
	
	/**
	 * @description
	 * Retrieves inner size of the tooltip arrow
	 *
	 * @name getTooltipArrowInnerSize
	 * @type {function}
	 * @inner
	 * @returns {number}
	 */
	var getTooltipArrowInnerSize = function getTooltipArrowInnerSize() {
	  return parseStyle(_constants.ARROW_INNER_CSS_SELECTOR, 'borderWidth');
	};
	
	/**
	 * @description
	 * Retrieves outer size of the tooltip arrow
	 *
	 * @name getTooltipArrowOutterSize
	 * @type {function}
	 * @inner
	 * @returns {number}
	 */
	var getTooltipArrowOutterSize = function getTooltipArrowOutterSize() {
	  return parseStyle(_constants.ARROW_OUTER_CSS_SELECTOR, 'borderWidth');
	};
	
	/**
	 * @description
	 * Retrieves default line height of the tooltip content
	 *
	 * @name getTooltipLineHeight
	 * @type {function}
	 * @inner
	 * @returns {number}
	 */
	var getTooltipLineHeight = function getTooltipLineHeight() {
	  return parseStyle(_constants.DEFAULT_TOOLTIP_SELECTOR, 'lineHeight');
	};
	
	/**
	 * @description
	 * Converts portion value to angle in RAD
	 *
	 * @name getAngleFromPortion
	 * @type {function}
	 * @inner
	 * @property {number} portion
	 * @returns {number}
	 */
	var getAngleFromPortion = function getAngleFromPortion(portion) {
	  var offset = portion <= 25 ? 25 : 125;
	  return (offset - portion) / 100 * 2 * Math.PI;
	};
	
	/**
	 * @description
	 * Calculates absolute position of an element in chart area
	 *
	 * @name calculatePosition
	 * @type {function}
	 * @inner
	 * @property {number} portion Element's portion
	 * @property {number} center Chart's center distance from the edge
	 * @property {number} radius Distance from the chart's center
	 * @property {?number} xOffset Additional x offset
	 * @property {?number} yOffset Additional y offset
	 * @returns {Position}
	 */
	var calculatePosition = function calculatePosition(portion, center, radius) {
	  var xOffset = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
	  var yOffset = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;
	
	  var angle = getAngleFromPortion(portion);
	  var chartRadius = _constants.CHART_SECTOR_SHIFT_SIZE + radius;
	  var position = {
	    left: Math.cos(angle) * chartRadius + center + _constants.CHART_SECTOR_SHIFT_SIZE,
	    top: -Math.sin(angle) * chartRadius + center + _constants.CHART_SECTOR_SHIFT_SIZE
	  };
	
	  return {
	    left: position.left - xOffset + 'px',
	    top: position.top - yOffset + 'px'
	  };
	};
	
	/**
	 * @description
	 * Calculates absolute position of the tooltip, based on
	 * chart dimensions and assigns them to the tooltip DOM element
	 *
	 * @name setTooltipPosition
	 * @type {function}
	 * @inner
	 * @param {object} element in DOM
	 * @param {object} tooltip object containing tooltip related data like
	 * positions, current data point, styling from chart options, etc.
	 * @param {object} chart instance
	 * @param {ExtendedAnalysisCategory} item Hovered item
	 */
	var setTooltipPosition = function setTooltipPosition(element, tooltip, chart, item) {
	  var circlePosition = item.totalPortion - item.portion / 2;
	  var additionalOffset = item.portion < _constants.CHART_SLICE_LABEL.minimum ? 0 : _constants.CHART_SLICE_LABEL.offset;
	  var arrowOutSize = getTooltipArrowOutterSize();
	  var arrowBorder = arrowOutSize - getTooltipArrowInnerSize();
	
	  var xOffset = circlePosition > 50 ? element.clientWidth + arrowOutSize + additionalOffset / 3 : -arrowOutSize - additionalOffset / 3;
	  var yOffset = (element.clientHeight + getTooltipLineHeight()) / 2 - arrowBorder - (item.portion < _constants.CHART_SLICE_LABEL.minimum ? _constants.CHART_SECTOR_SHIFT_SIZE : 0);
	
	  Object.assign(element.style, calculatePosition(circlePosition, chart.outerRadius, chart.outerRadius + additionalOffset, xOffset, yOffset));
	};
	
	/**
	 * @description
	 * Converts transaction category name into category CSS icon class sufix
	 *
	 * @name categoryToIconClass
	 * @type {function}
	 * @inner
	 * @param {string} transactionCategory Transaction category
	 * @returns {string}
	 */
	var categoryToIconClass = function categoryToIconClass(transactionCategory) {
	  return transactionCategory.toLowerCase().replace(/\W/g, '-').replace(/-{2,}/g, '-');
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
	  return parseFloat((0, _libBbStyles2.default)(_constants.BAR_CHART_CSS_SELECTORS.axisY, 'padding')) || 0;
	};
	
	/**
	 * @description
	 * Creates new Date object based on input date
	 * Returns new Date object
	 *
	 * @name getNewDate
	 * @type {function}
	 * @inner
	 * @param {Date} newDate
	 * @returns {string}
	 */
	var getNewDate = function getNewDate(newDate) {
	  return new Date(newDate.getTime() - newDate.getTimezoneOffset() * _constants.MS_IN_MIN).toISOString().slice(0, 10);
	};
	
	/**
	 * @description
	 * Maps controller's properties into object required for transaction category intent
	 *
	 * @name populateSelectedSectorObject
	 * @type {function}
	 * @inner
	 * @param {object} $ctrl
	 * @param {string} activeSectorName
	 * @returns {object}
	 */
	var populateSelectedSectorObject = function populateSelectedSectorObject($ctrl, activeSectorName) {
	  return {
	    category: activeSectorName,
	    bookingDateGreaterThan: $ctrl.periodStartDate,
	    bookingDateLessThan: $ctrl.periodEndDate,
	    productId: $ctrl.selectedProducts[0].id
	  };
	};
	
	var helpers = function helpers(context) {
	  var i18nFilter = context.$filter('i18n');
	  var dateFilter = context.$filter('date');
	  var currencyFilter = context.$filter('currency');
	  var getSymbol = function getSymbol(code) {
	    return context.getRule(code).symbol || code;
	  };
	
	  /**
	   * @description
	   * Flag that tells us if current analysis type is spending
	   *
	   * @inner
	   * @name isSpending
	   * @type {boolean}
	   */
	  var isSpending = true;
	
	  /**
	   * @description
	   * Chart.js options object to be used by component.
	   * Has higher priority, can be used to override default options
	   * values in a chart.
	   *
	   * @inner
	   * @name chartOptions
	   * @type {object}
	   */
	  var chartOptions = {
	    layout: {
	      padding: {
	        left: _constants.CHART_SECTOR_SHIFT_SIZE,
	        right: _constants.CHART_SECTOR_SHIFT_SIZE,
	        top: _constants.CHART_SECTOR_SHIFT_SIZE,
	        bottom: _constants.CHART_SECTOR_SHIFT_SIZE
	      }
	    },
	    hover: {
	      mode: null
	    }
	  };
	
	  /**
	   * @description
	   * Returns the different icon class based on trend value
	   *
	   * @name getTrendIconClass
	   * @type {function}
	   * @inner
	   * @param {number} trend Trend percentage
	   * @returns {string}
	   */
	  var getTrendIconClass = function getTrendIconClass(trend) {
	    if (trend < -1) {
	      return 'fa-arrow-down';
	    } else if (trend > 1) {
	      return 'fa-arrow-up';
	    }
	
	    return '';
	  };
	
	  /**
	   * @description
	   * Checks if the trend for the previous month
	   * is the same as for the current one
	   *
	   * @name checkTrendValueChanged
	   * @type {function}
	   * @inner
	   * @param {number} trend Trend percentage
	   * @returns {boolean}
	   */
	  var checkTrendValueChanged = function checkTrendValueChanged(trend) {
	    if (Math.abs(trend) <= 1) {
	      return false;
	    }
	
	    return true;
	  };
	
	  /**
	   * @description
	   * Returns the message for the trend label based on trend value
	   *
	   * @name getTrendLabel
	   * @type {function}
	   * @inner
	   * @param {number} trend Trend percentage
	   * @returns {string}
	   */
	  var getTrendLabel = function getTrendLabel(trend) {
	    if (trend < -1) {
	      return 'analysis.tooltip.less.than.previous';
	    } else if (trend > 1) {
	      return 'analysis.tooltip.more.than.previous';
	    }
	
	    return 'analysis.tooltip.same.as.previous';
	  };
	
	  /**
	   * @description
	   * Builds HTML content of the tooltip
	   *
	   * @name buildTooltipContent
	   * @type {function}
	   * @inner
	   * @param {ExtendedAnalysisCategory} item Hovered item
	   * @returns {string}
	   */
	  var buildTooltipContent = function buildTooltipContent(item) {
	    var trendClass = item.trend > 0 ? 'text-danger' : 'text-success';
	    var textClass = isSpending ? trendClass : 'text-muted';
	    var tooltipCategory = '\n      <i class="fa bb-transaction-category-' + categoryToIconClass(item.category) + '"></i>\n    ';
	    var trendValue = '\n      <span>' + Math.abs(item.trend) + '%</span>\n    ';
	    return '\n      <span class="chart-tooltip-analysis-category text-muted">\n        ' + (item.portion < _constants.CHART_SLICE_LABEL.minimum ? '<span class="mr-1 d-inline-block">' + tooltipCategory + '</span>' : '') + '\n        ' + item.category + '\n      </span>\n      <div class="row">\n        <strong>\n          <ui-bb-format-amount\n            class="h4 my-0 mb-05 col-xs-12 chart-tooltip-analysis-amount amount-regular-color"\n            data-amount="' + item.totalAmount.amount + '"\n            data-currency="\'' + item.totalAmount.currencyCode + '\'"\n            data-wrap>\n          </ui-bb-format-amount>\n        </strong>\n      </div>\n      <p class="chart-tooltip-analysis-portion text-muted">\n        ' + item.portion + '% ' + i18nFilter('analysis.tooltip.of.total') + '\n      </p>\n      ' + (item.trend !== undefined ? '\n        <hr class="chart-tooltip-divider">\n        <p class="chart-tooltip-analysis-trend ' + textClass + '">\n          <i\n            class="chart-tooltip-info-icon fa ' + getTrendIconClass(item.trend) + '"\n          ></i>\n          <span class="h4 m-0 d-block">\n            ' + (checkTrendValueChanged(item.trend) ? trendValue : '') + '\n          </span>\n          <span class="chart-tooltip-info-text text-muted">\n            ' + i18nFilter(getTrendLabel(item.trend)) + '\n          </span>\n        </p>\n      ' : '') + '\n    ';
	  };
	
	  /**
	   * @description
	   * Builds the DOM element that contains slice label
	   *
	   * @name getNewSliceLabel
	   * @type {function}
	   * @inner
	   * @param {string} category Category name
	   * @param {object} amount Amount object
	   * @param {string} amount.currencyCode Amount's currency code (ISO)
	   * @param {number} amount.amount Amount's value
	   * @param {boolean} topHalf Is this top half slice
	   * @returns {object}
	   */
	  var getNewSliceLabel = function getNewSliceLabel(category, amount, topHalf) {
	    var wrapper = document.createElement('div');
	    wrapper.setAttribute(_constants.CHART_SLICE_LABEL.dataAttr, '');
	    wrapper.className = 'text-center';
	
	    var icon = document.createElement('i');
	    icon.className = 'fa chart-donut-slice-icon bb-transaction-category-' + categoryToIconClass(category);
	
	    var amountEl = document.createElement('div');
	    amountEl.className = 'chart-donut-slice-amount';
	    amountEl.innerHTML = '\n      <ui-bb-format-amount class="amount-regular-color amount-integer"\n        data-amount="' + amount.amount + '"\n        data-currency="\'' + amount.currencyCode + '\'"\n        data-wrap>\n      </ui-bb-format-amount>';
	
	    // compile UI component
	    context.$compile(angular.element(amountEl).contents())(context.$rootScope);
	
	    wrapper.style.position = 'absolute';
	    // do not show item until it is positioned correctly
	    wrapper.style.opacity = 0;
	    if (!topHalf) {
	      wrapper.appendChild(icon);
	    }
	    wrapper.appendChild(amountEl);
	    if (topHalf) {
	      wrapper.appendChild(icon);
	    }
	
	    return wrapper;
	  };
	
	  /**
	   * @description onClick handler with a visualisation for donut sector
	   *
	   * @name onDonutChartSectorClickAnimation
	   * @type {function}
	   * @param {*} chartInstance - the Chart.js object
	   * @param {*} event - Chart.js click event object with a clicked area
	   * @returns {object} name and isSelected flag of the active sector (category)
	   */
	  var onDonutChartSectorClickAnimation = function onDonutChartSectorClickAnimation(chartInstance, event) {
	    var defaultChartRadius = chartInstance.outerRadius;
	    var activeSectors = chartInstance.getElementsAtEvent(event);
	
	    if (!activeSectors.length) {
	      return null;
	    }
	    /* eslint dot-notation:1 */
	    var isActiveSectorSelected = activeSectors[0]['_model'].outerRadius > defaultChartRadius;
	
	    // clear the chart radius
	    Object.assign(chartInstance, { outerRadius: defaultChartRadius });
	    chartInstance.update();
	
	    // toggle active sector shifting
	    if (!isActiveSectorSelected) {
	      activeSectors[0]['_model'].outerRadius = defaultChartRadius + _constants.CHART_SECTOR_SHIFT_SIZE;
	      chartInstance.render(_constants.RENDERING_ANIMATION_TIME, false);
	    }
	    return { name: activeSectors[0]['_model'].label, selected: !isActiveSectorSelected };
	  };
	
	  /**
	   * @description
	   * Clears all slice labels already present in chart area
	   *
	   * @name clearSliceLabels
	   * @type {function}
	   * @inner
	   * @param {object} container DOM element that contains all labels
	   */
	  var clearSliceLabels = function clearSliceLabels(container) {
	    return angular.element(container.querySelectorAll('div[' + _constants.CHART_SLICE_LABEL.dataAttr + ']')).remove();
	  };
	
	  /**
	   * @description
	   * Renders slice labels
	   *
	   * @name renderSliceLabels
	   * @type {function}
	   * @inner
	   * @param {*} chartInstance - the Chart.js object
	   */
	  var renderSliceLabels = function renderSliceLabels(chartInstance) {
	    // clear any existing icons if any on render
	    clearSliceLabels(chartInstance.canvas.parentNode);
	
	    if (!chartInstance.config.data.analysisItems) {
	      return;
	    }
	
	    chartInstance.config.data.analysisItems.forEach(function (item) {
	      if (item.portion < _constants.CHART_SLICE_LABEL.minimum) {
	        return;
	      }
	
	      var circlePosition = item.totalPortion - item.portion / 2;
	      // top half of the labels has amount on top of the icon, other half on the bottom
	      var topHalf = circlePosition < 25 || circlePosition > 75;
	      var labelOffset = _constants.CHART_SLICE_LABEL.offset;
	      var element = getNewSliceLabel(item.category, item.totalAmount, topHalf);
	      // append element to chart in order to make it possible to measure width and height
	      chartInstance.canvas.parentNode.appendChild(element);
	      // use timeout to get real element dimensions once ui component is compiled
	      setTimeout(function () {
	        // position label correctly
	        var yOffset = labelOffset + element.clientHeight / 2 + (topHalf ? element.clientHeight / 6 : -element.clientHeight / 3);
	
	        var radius = chartInstance.outerRadius + labelOffset;
	        Object.assign(element.style, calculatePosition(circlePosition, radius, radius, labelOffset + element.clientWidth / 2, yOffset), { opacity: 1 });
	      }, 0);
	    });
	  };
	
	  /**
	   * @description
	   * Calculates absolute position of the tooltip, based on
	   * bar height and chart dimensions and assigns them to the
	   * tooltip DOM element
	   *
	   * @name helpers#setTurnoversTooltipPosition
	   * @type {function}
	   * @inner
	   * @param {object} element in DOM
	   * @param {object} tooltip object containing tooltip related data like
	   * positions, current data point, styling from chart options, etc.
	   */
	  var setTurnoversTooltipPosition = function setTurnoversTooltipPosition(element, tooltip) {
	    var positionX = Math.floor(tooltip.caretX) - Math.floor(tooltip.width);
	    var positionY = tooltip.caretY - element.clientHeight;
	
	    Object.assign(element.style, {
	      left: positionX + 'px',
	      top: Math.max(0, positionY) + 'px'
	    });
	  };
	
	  return {
	    /**
	     * @description
	     * Start period label formatter helper. Returns formatted date.
	     *
	     * @name periodStartLabelFormatter
	     * @type {function}
	     * @param {Date} date
	     * @returns {string} Formatted label
	     */
	    periodStartLabelFormatter: function periodStartLabelFormatter(date) {
	      return dateFilter(date, 'd MMM yyyy');
	    },
	
	    /**
	     * @description
	     * End period label formatter helper. In case period is larger than current date
	     * (end date of current month) it returns translation for analysis.label.period.now,
	     * otherwise it returns formatted date
	     *
	     * @name periodEndLabelFormatter
	     * @type {function}
	     * @param {Date} date
	     * @returns {string} Formatted label
	     */
	    periodEndLabelFormatter: function periodEndLabelFormatter(date) {
	      return new Date(new Date().setHours(0, 0, 0, 0)) > date ? dateFilter(date, 'd MMM yyyy') : i18nFilter('analysis.label.period.now');
	    },
	
	    /**
	     * @description
	     * Creates custom tooltip content and places tooltip element on the edge
	     * of currently active portion
	     *
	     * @name customizeTooltip
	     * @type {function}
	     *
	     * @param {object} tooltip object containing tooltip related data like
	     * positions, current data point, styling from chart options, etc.
	     * @param {object} element in DOM
	     * @param {AnalysisCategoryBBSeries} data array of data used to draw the chart
	     * @param {object} chart instance
	     */
	    customizeTooltip: function customizeTooltip(tooltip, element, data, chart) {
	      // get all data for active point
	      var item = data.analysisItems[tooltip.dataPoints[0].index];
	      var arrowClass = item.totalPortion - item.portion / 2 > 50 ? 'bb-arrow-right' : 'bb-arrow-left';
	
	      Object.assign(element, {
	        innerHTML: buildTooltipContent(item),
	        className: 'chart-tooltip chart-tooltip-default hidden-xs ' + arrowClass
	      });
	
	      // compile tooltip's content
	      context.$compile(angular.element(element).contents())(context.$rootScope);
	
	      // calculate element position
	      setTooltipPosition(element, tooltip, chart, item);
	    },
	
	    /**
	     * @description
	     * Creates custom tooltip content and places tooltip element on top
	     * of the currently active bar
	     *
	     * @name customizeTurnoversTooltip
	     * @type {function}
	     *
	     * @param {object} tooltip object containing tooltip related data like
	     * positions, current data point, styling from chart options, etc.
	     * @param {object} element in DOM
	     * @param {TurnoversBBSeries} data array of data used to draw the chart
	     */
	    customizeTurnoversTooltip: function customizeTurnoversTooltip(tooltip, element, data) {
	      // get all data for active point
	      var item = data.original.turnovers[tooltip.dataPoints[0].index];
	      var dataKey = data.datasets[0].dataKey;
	      Object.assign(element, {
	        innerHTML: '\n          <ui-bb-format-amount class="amount-regular-color"\n            data-amount="' + item[dataKey].amount + '"\n            data-currency="\'' + item[dataKey].currencyCode + '\'"\n            data-wrap>\n          </ui-bb-format-amount>\n        ',
	        className: 'chart-tooltip chart-tooltip-default chart-tooltip-small\n            text-center bb-arrow-bottom hidden-xs'
	      });
	
	      // compile tooltip's content
	      context.$compile(angular.element(element).contents())(context.$rootScope);
	
	      // calculate element position
	      setTurnoversTooltipPosition(element, tooltip);
	    },
	
	    /**
	     * @description
	     * Keeps analysis type flag and returns chart options object
	     *
	     * @name donutChartOptions
	     * @type {function}
	     * @returns {object} Donut chart options object
	     */
	    donutChartOptions: function donutChartOptions(ctrl) {
	      isSpending = ctrl.isSpendingAnalysis();
	      return chartOptions;
	    },
	
	    /**
	     * @description
	     * Chart.js options object to be used by bar chart component.
	     * Has higher priority, can be used to override default options
	     * values in a chart.
	     *
	     * @inner
	     * @name barChartOptions
	     * @type {object}
	     */
	
	    barChartOptions: {
	      scales: {
	        xAxes: [{
	          ticks: {
	            fontColor: (0, _libBbStyles2.default)(_constants.BAR_CHART_CSS_SELECTORS.axisX, 'color'),
	            fontFamily: (0, _libBbStyles2.default)(_constants.BAR_CHART_CSS_SELECTORS.axisBase, 'fontFamily')
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
	            fontColor: (0, _libBbStyles2.default)(_constants.BAR_CHART_CSS_SELECTORS.axisY, 'color'),
	            fontFamily: (0, _libBbStyles2.default)(_constants.BAR_CHART_CSS_SELECTORS.axisBase, 'fontFamily')
	          }
	        }]
	      }
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
	        var isInsideContainer = function isInsideContainer(element, idPrefix) {
	          var parent = element.parentNode;
	          if (!parent || !parent.getAttribute) {
	            return false;
	          } else if ((parent.getAttribute('data-pid') || '').indexOf(idPrefix) === 0) {
	            return true;
	          }
	
	          return isInsideContainer(parent, idPrefix);
	        };
	
	        // subscribe to toggle event of any type of container that has this behaviour
	        _constants.CHART_UPDATE_SUBSCRIPTIONS.forEach(function (subscription) {
	          // if canvas is not inside a container, do not subscribe to it's event
	          var containerIdPrefix = 'container-' + subscription.container;
	          if (!isInsideContainer(chartInstance.canvas, containerIdPrefix)) {
	            return;
	          }
	
	          context.bus.subscribe(subscription.event, function (sender) {
	            // sender can be either HTML node or container's object
	            // to conduct a search, node is needed
	            var node = sender.htmlNode ? angular.element(sender.htmlNode) : sender;
	            if (node.find(chartInstance.canvas).length) {
	              renderSliceLabels(chartInstance);
	            }
	          });
	        });
	      },
	      beforeEvent: function beforeEvent(chartInstance, event) {
	        if (event.type === 'click') {
	          Object.assign(chartInstance, { onClickLayoutUpdate: true });
	        }
	      },
	      afterEvent: function afterEvent(chartInstance, event) {
	        if (event.type === 'click') {
	          Object.assign(chartInstance, { onClickLayoutUpdate: false });
	        }
	      },
	      afterDatasetsUpdate: function afterDatasetsUpdate(chartInstance) {
	        if (chartInstance.onClickLayoutUpdate) {
	          return;
	        }
	
	        renderSliceLabels(chartInstance);
	      }
	    }],
	
	    /**
	     * @description
	     * Callback on period start date value change. This function ensures
	     * that controller property is also updated
	     *
	     * @name onPeriodStartChange
	     * @type {function}
	     * @param {IncomeSpendingAnalysisCategoryController} ctrl
	     */
	    onPeriodStartChange: function onPeriodStartChange(ctrl) {
	      return function (newStartDate) {
	        return Object.assign(ctrl, { periodStartDate: getNewDate(newStartDate) });
	      };
	    },
	
	    /**
	     * @description
	     * Callback on period value change. Calls
	     * controller's onPeriodEndChanged listener
	     *
	     * @name onPeriodEndChange
	     * @type {function}
	     * @param {IncomeSpendingAnalysisCategoryController} ctrl
	     */
	    onPeriodEndChange: function onPeriodEndChange(ctrl) {
	      return function (newEndDate) {
	        Object.assign(ctrl, { periodEndDate: getNewDate(newEndDate) });
	        ctrl.updateAnalysisCategories();
	      };
	    },
	
	    updatePeriod: function updatePeriod(ctrl, monthsRange) {
	      var date = new Date();
	      var startDate = monthsRange === 1 ? date.setDate(1) : date.setMonth(date.getMonth() - monthsRange);
	
	      Object.assign(ctrl, {
	        periodStartDate: getNewDate(new Date(startDate)),
	        periodEndDate: getNewDate(new Date())
	      });
	      if (monthsRange > 1) {
	        ctrl.updateTurnovers();
	      }
	
	      ctrl.updateAnalysisCategories();
	    },
	
	    /**
	     * @description
	     * Checks if data for chart is available in series object
	     *
	     * @name isSeriesDataAvailable
	     * @type {function}
	     * @param {AnalysisCategoryBBSeries} series
	     * @returns {boolean} returns true if series data is not empty
	     */
	    isSeriesDataAvailable: function isSeriesDataAvailable(series) {
	      return series ? series.datasets[0].data.length : false;
	    },
	
	    /**
	     * @description
	     * Function to create new handler for the chart click handling
	     *
	     * @name getClickHandler
	     * @type {function}
	     * @param {IncomeSpendingAnalysisCategoryController} $ctrl
	     * @returns {function} chart click handler
	     */
	    getClickHandler: function getClickHandler($ctrl) {
	      return function (clickEvent) {
	        // TODO: remove once multiple account request is supported by transactions enpoint
	        if ($ctrl.selectedProducts.length > 1) {
	          return;
	        }
	        // end of section
	
	        var chartInstance = this;
	        var activeSector = onDonutChartSectorClickAnimation(chartInstance, clickEvent);
	        if (activeSector && activeSector.name) {
	          $ctrl.setSelectedAnalysisItem(activeSector.selected ? populateSelectedSectorObject($ctrl, activeSector.name) : null);
	        }
	      };
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
	    categoryToIconClass: categoryToIconClass
	  };
	};
	
	exports.default = helpers;
	
	/**
	 * Element absolute position object
	 * @typedef {object} Position
	 * @property {number} left Distance from left edge of the area
	 * @property {number} top Distance from the top of area
	 */

/***/ }),
/* 14 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/* eslint-disable import/prefer-default-export */
	/**
	 * @name DEFAULT_TOOLTIP_SELECTOR
	 * @description
	 * Chart's tooltip CSS selector
	 * @type {string}
	 */
	var DEFAULT_TOOLTIP_SELECTOR = exports.DEFAULT_TOOLTIP_SELECTOR = '.chart-tooltip-default';
	
	/**
	 * @name ARROW_INNER_CSS_SELECTOR
	 * @description
	 * Chart tooltip's arrow CSS selector (inner layer)
	 * @type {string}
	 */
	var ARROW_INNER_CSS_SELECTOR = exports.ARROW_INNER_CSS_SELECTOR = DEFAULT_TOOLTIP_SELECTOR + '.bb-arrow-left::after';
	
	/**
	 * @name ARROW_OUTER_CSS_SELECTOR
	 * @description
	 * Chart tooltip's arrow CSS selector (outer layer)
	 * @type {string}
	 */
	var ARROW_OUTER_CSS_SELECTOR = exports.ARROW_OUTER_CSS_SELECTOR = DEFAULT_TOOLTIP_SELECTOR + '.bb-arrow-left::before';
	
	/**
	 * @name BAR_CHART_CSS_SELECTORS
	 * @description
	 * Object with selectors needed for correct styling of bar chart canvas parts
	 * @type {CSS}
	 */
	var BAR_CHART_CSS_SELECTORS = exports.BAR_CHART_CSS_SELECTORS = {
	  axisBase: '.chart-bar-axis',
	  axisX: '.chart-bar-axis-x',
	  axisY: '.chart-bar-axis-y'
	};
	
	/**
	 * @name CHART_SLICE_LABEL
	 * @description
	 * Slice labels configuration
	 * @type {object}
	 * @property {string} dataAttr Data attribute that will be attached to the wrapper
	 * that contains the label
	 * @property {number} offset Icon's offset from the outer edge of the chart
	 * @property {number} minimum Minimum value of portion required to create a label
	 */
	var CHART_SLICE_LABEL = exports.CHART_SLICE_LABEL = {
	  dataAttr: 'data-category-label',
	  offset: 27,
	  minimum: 2
	};
	
	/**
	 * @name CHART_SECTOR_SHIFT_SIZE
	 * @description
	 * Slice shifting size (pixels) and size of the canvas padding (which is
	 * needed to provide a space for the shifting animation). Is also
	 * used for icons offset calculation.
	 * @type {number}
	 */
	var CHART_SECTOR_SHIFT_SIZE = exports.CHART_SECTOR_SHIFT_SIZE = 10; // pixels
	
	/**
	 * @name MS_IN_MIN
	 * @description
	 * Amount of milliseconds in a minute
	 * @type {number}
	 */
	var MS_IN_MIN = exports.MS_IN_MIN = 60000;
	
	/**
	 * @name RENDERING_ANIMATION_TIME
	 * @description
	 * Time in milliseconds to have a donut slice animation on click
	 * @type {number}
	 */
	var RENDERING_ANIMATION_TIME = exports.RENDERING_ANIMATION_TIME = 500; // ms
	
	/**
	 * @name CHART_UPDATE_SUBSCRIPTIONS
	 * @description
	 * List of container names and events that those containers can publish on which
	 * chart needs to be redrawn
	 * @type {UpdateSubscription[]}
	 */
	var CHART_UPDATE_SUBSCRIPTIONS = exports.CHART_UPDATE_SUBSCRIPTIONS = [{
	  container: 'panel',
	  event: 'DeckPanelLoaded'
	}, {
	  container: 'carousel',
	  event: 'CarouselSlideLoaded'
	}, {
	  container: 'lightbox',
	  event: 'LightboxOpened'
	}];
	
	/**
	 * @typedef {object} UpdateSubscription
	 * @description
	 * Object containing container name and event that that container can publish
	 * @property {string} container Container name
	 * @property {string} event Event that can be expected from a container
	 */

/***/ })
/******/ ])
});
;
//# sourceMappingURL=ext-bb-income-spending-analysis-category-ng.js.map