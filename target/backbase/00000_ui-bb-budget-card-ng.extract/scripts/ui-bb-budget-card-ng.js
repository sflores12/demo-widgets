(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vendor-bb-angular"), require("ui-bb-format-amount"));
	else if(typeof define === 'function' && define.amd)
		define("ui-bb-budget-card-ng", ["vendor-bb-angular", "ui-bb-format-amount"], factory);
	else if(typeof exports === 'object')
		exports["ui-bb-budget-card-ng"] = factory(require("vendor-bb-angular"), require("ui-bb-format-amount"));
	else
		root["ui-bb-budget-card-ng"] = factory(root["vendor-bb-angular"], root["ui-bb-format-amount"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_17__, __WEBPACK_EXTERNAL_MODULE_22__) {
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
/* 17 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_17__;

/***/ }),
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _vendorBbAngular = __webpack_require__(17);
	
	var _vendorBbAngular2 = _interopRequireDefault(_vendorBbAngular);
	
	var _uiBbFormatAmount = __webpack_require__(22);
	
	var _uiBbFormatAmount2 = _interopRequireDefault(_uiBbFormatAmount);
	
	var _component = __webpack_require__(23);
	
	var _component2 = _interopRequireDefault(_component);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * @description The angular module name
	 * @name default
	 * @type {string}
	 */
	exports.default = _vendorBbAngular2.default.module('ui-bb-budget-card-ng', [_uiBbFormatAmount2.default]).component('uiBbBudgetCardNg', _component2.default).name; /**
	                                                                                                                                                                   * @module ui-bb-budget-card-ng
	                                                                                                                                                                   *
	                                                                                                                                                                   * @example
	                                                                                                                                                                   * // In an extension:
	                                                                                                                                                                   * // file: scripts/index.js
	                                                                                                                                                                   * import uiBbBudgetCardNg from 'ui-bb-budget-card-ng';
	                                                                                                                                                                   *
	                                                                                                                                                                   * export const dependencyKeys = [
	                                                                                                                                                                   *   uiBbBudgetCardNg,
	                                                                                                                                                                   * ];
	                                                                                                                                                                   *
	                                                                                                                                                                   * // file: templates/template.ng.html
	                                                                                                                                                                   * <ui-bb-budget-card-ng class="col-xs-12"
	                                                                                                                                                                   * />
	                                                                                                                                                                   */

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
	
	var _controller = __webpack_require__(24);
	
	var _controller2 = _interopRequireDefault(_controller);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var uiBbBudgetCardNg = {
	  controller: _controller2.default,
	  bindings: {
	    labels: '=',
	    budgetIcon: '@',
	    chartWrapperClass: '@',
	    chartColorLevel: '@',
	    spent: '=',
	    spendingLimit: '=',
	    spentPercentage: '@',
	    availableAmount: '=',
	    onUpdate: '&?',
	    onDelete: '&?'
	  },
	  template: '\n    <div class="budget-card-container panel">\n      <div class="budget-card-title panel-heading panel-heading-small"\n        data-ng-class="{ \'pr-0\': $ctrl.onUpdate || $ctrl.onDelete }"\n      >\n        <i class="transaction-type-icon budget-card-category-icon"\n          data-ng-class="$ctrl.budgetIcon"\n          aria-hidden="true"\n        ></i>\n\n        <label data-ng-bind="$ctrl.labels.title"></label>\n\n        <div data-ng-if="$ctrl.onUpdate || $ctrl.onDelete"\n          class="pull-right" uib-dropdown keyboard-nav\n        >\n          <button\n            uib-dropdown-toggle\n            class="budget-card-options-btn btn btn-link"\n            data-label="Options"\n          >\n            <i class="fa fa-ellipsis-v" aria-hidden="true" data-role="more-actions"></i>\n          </button>\n          <ul\n            class="dropdown-menu dropdown-menu-right"\n            uib-dropdown-menu role="menu"\n            aria-labelledby="simple-btn-keyboard-nav"\n          >\n            <li data-role="menuitem">\n              <a href="javascript:void(0)"\n                data-ng-if="$ctrl.onUpdate"\n                data-ng-bind="$ctrl.labels.edit"\n                data-ng-click="$ctrl.onUpdate()"\n              ></a>\n              <a href="javascript:void(0)"\n                data-ng-if="$ctrl.onDelete"\n                data-ng-bind="$ctrl.labels.delete"\n                data-ng-click="$ctrl.onDelete()"\n              ></a>\n            </li>\n          </ul>\n        </div>\n      </div>\n\n      <div class="budget-card-body panel-body-small">\n        <div class="budget-card-chart panel-offset progress-indicator donut rotate-anticlockwise"\n          data-ng-class="$ctrl.wrapperClass"\n        >\n          <div class="donut-left-slice"\n            data-ng-class="$ctrl.chartColor"\n          ></div>\n          <div class="donut-right-slice"\n            data-ng-class="$ctrl.chartColor"\n          ></div>\n          <div class="progress-indicator-donut-overlay">\n            <div class="d-table">\n              <div class="d-table-cell"\n                data-ng-class="$ctrl.amountColor"\n              >\n                <h3 class="label-amount-left">\n                  <ui-bb-format-amount class="amount-regular-color amount-integer"\n                    data-amount="$ctrl.animateAvailableAmount"\n                    data-currency="$ctrl.availableAmount.currencyCode"\n                    data-wrap\n                  ></ui-bb-format-amount>\n                </h3>\n\n                <div data-ng-bind="$ctrl.labels.chart"></div>\n              </div>\n            </div>\n          </div>\n        </div>\n\n        <div class="panel-offset">\n          <div class="budget-amount-group"\n            data-ng-class="$ctrl.amountSpentColor"\n          >\n            <span class="budget-amount-label"\n              data-ng-class="$ctrl.amountSpentColor"\n              data-ng-bind="$ctrl.labels.spent"\n            ></span>\n            <ui-bb-format-amount class="budget-amount amount-regular-color amount-integer"\n              data-amount="$ctrl.spent.amount"\n              data-currency="$ctrl.spent.currencyCode"\n              data-wrap\n            ></ui-bb-format-amount>\n          </div>\n\n          <div class="budget-amount-group">\n            <span class="budget-amount-label"\n              data-ng-bind="$ctrl.labels.limit"\n            ></span>\n            <ui-bb-format-amount class="budget-amount amount-regular-color amount-integer"\n              data-amount="$ctrl.spendingLimit.amount"\n              data-currency="$ctrl.spendingLimit.currencyCode"\n              data-wrap\n            ></ui-bb-format-amount>\n          </div>\n        </div>\n      </div>\n    </div>\n  '
	}; /**
	    * @name uiBbBudgetCardNg
	    * @type {object}
	    * @description
	    * Component used to display data using a lightweight chart
	    *
	    * @property {object} labels Contains translated component labels
	    * @property {string} labels.title Title label
	    * @property {string} labels.spent Spent label
	    * @property {string} labels.chart Chart's center label
	    * @property {string} labels.limit Limit label
	    * @property {string} labels.edit Edit button label
	    * @property {string} labels.delete Delete button label
	    * @property {string} budgetIcon Font awesome icon class
	    * @property {string} chartWrapperClass It sets a class on the chart wrapper
	    * @property {string} chartColorLevel Sets the color level of the chart - success, warning, danger
	    * @property {object} spent Amount object that is passed to the format ui component
	    * @property {object} spendingLimit Spending limit object that is passed to the format ui component
	    * @property {number} spentPercentage The percentage of the chart
	    * @property {object} availableAmount Available amount object that is passed
	    * to the format ui component
	    * @property {?function} onUpdate Function to be called after click on Edit button. If not provided,
	    * button will be hidden. If delete handler is also not provided, whole dropdown will be hidden
	    * @property {?function} onDelete Function to be called after click on Delete button.
	    * If not provided, button will be hidden. If edit handler is also not provided,
	    * whole dropdown will be hidden
	    */
	
	exports.default = uiBbBudgetCardNg;

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _constants = __webpack_require__(25);
	
	/* global angular, document */
	/**
	 * @name uiBbBudgetCardController
	 * @ngkey uiBbBudgetCardController
	 * @type {function}
	 *
	 * @description
	 * Card chart controller
	 */
	var uiBbBudgetCardController = function uiBbBudgetCardController($scope, $element, $window, $timeout) {
	  var $ctrl = this;
	
	  /**
	   * @description
	   * Holder for the timestamp
	   *
	   * @inner
	   *
	   * @name animationStart
	   * @type {number}
	   */
	  var animationStart = null;
	
	  /**
	   * @name getRotatingElements
	   * @type {function}
	   *
	   * @description
	   * Returns rotating elements from DOM
	   *
	   * @inner
	   * @returns {object} Object with left and right rotating element
	   */
	  var getRotatingElements = function getRotatingElements() {
	    return {
	      leftElToRotate: $element[0].querySelector('.' + _constants.CHART_SLICE_CLASSES.CLASS_CHART_SLICE_LEFT),
	      rightElToRotate: $element[0].querySelector('.' + _constants.CHART_SLICE_CLASSES.CLASS_CHART_SLICE_RIGHT)
	    };
	  };
	
	  /**
	   * @name checkAmountAnimationDelay
	   * @type {function}
	   *
	   * @description
	   * Helper function used to get the amount animation delay
	   *
	   * @inner
	   *
	   * @param {percentage} percentage of the full circle
	   * @returns {number}
	   */
	  var checkAmountAnimationDelay = function checkAmountAnimationDelay(percentage) {
	    return percentage < 50 ? 300 : 600;
	  };
	
	  /**
	   * @name calculateRotationAngle
	   * @type {function}
	   *
	   * @description
	   * Helper function used to calculate the rotation angle
	   *
	   * @inner
	   *
	   * @param {percentage} percentage of the full circle
	   * @returns {number}
	   */
	  var calculateRotationAngle = function calculateRotationAngle(percentage) {
	    return Math.round(360 * ((percentage < 50 ? percentage : percentage - 50) / 100));
	  };
	
	  /**
	   * @name toggleFullSliceRotation
	   * @type {function}
	   *
	   * @description
	   * Helper function used to tougle the class 'rotate-n-180-deg'
	   *
	   * @inner
	   *
	   * @param {slice} DOM element
	   * @returns {void}
	   */
	  var toggleFullSliceRotation = function toggleFullSliceRotation(slice) {
	    return slice.classList.contains('rotate-n-180-deg') ? slice.classList.remove('rotate-n-180-deg') : slice.classList.add('rotate-n-180-deg');
	  };
	
	  /**
	   * @name styleBudgetChart
	   * @type {function}
	   *
	   * @description
	   * Helper function used to style the budget chart
	   *
	   * @inner
	   *
	   * @returns {void}
	   */
	  var styleBudgetChart = function styleBudgetChart() {
	    switch ($ctrl.chartColorLevel) {
	      case _constants.CHART_LEVEL.WARNING:
	        $ctrl.chartColor = _constants.CARD_COLOR_CLASSES.CLASS_CHART_WARNING;
	        $ctrl.amountColor = _constants.CARD_COLOR_CLASSES.CLASS_LABEL_WARNING;
	        break;
	      case _constants.CHART_LEVEL.DANGER:
	        $ctrl.wrapperClass = $ctrl.chartWrapperClass + ' ' + _constants.CARD_COLOR_CLASSES.CLASS_CHART_DANGER_BRIGHT;
	
	        $ctrl.chartColor = _constants.CARD_COLOR_CLASSES.CLASS_CHART_DANGER;
	        $ctrl.amountColor = _constants.CARD_COLOR_CLASSES.CLASS_LABEL_DANGER;
	        $ctrl.amountSpentColor = _constants.CARD_COLOR_CLASSES.CLASS_LABEL_DANGER;
	        break;
	      default:
	        $ctrl.chartColor = _constants.CARD_COLOR_CLASSES.CLASS_CHART_SUCCESS;
	        $ctrl.amountColor = _constants.CARD_COLOR_CLASSES.CLASS_LABEL_SUCCESS;
	    }
	  };
	
	  /**
	   * @name animateAmountLeft
	   * @type {function}
	   *
	   * @description
	   * Helper function used to animate number counting
	   *
	   * @inner
	   *
	   * @param {timestamp} current timestamp
	   * @returns {void}
	   */
	  var animateAmountLeft = function animateAmountLeft(timestamp) {
	    if (!$ctrl.availableAmount) {
	      return;
	    }
	
	    if (!animationStart) {
	      animationStart = timestamp;
	    }
	
	    var progress = timestamp - animationStart;
	
	    if ($ctrl.animateAvailableAmount <= parseInt($ctrl.availableAmount.amount, 10)) {
	      $ctrl.animateAvailableAmount = $ctrl.availableAmount.amount;
	      return;
	    }
	
	    $ctrl.animateAvailableAmount -= 2;
	    $scope.$digest();
	
	    if (progress < checkAmountAnimationDelay($ctrl.spentPercentage)) {
	      $window.requestAnimationFrame(animateAmountLeft);
	    } else {
	      $ctrl.animateAvailableAmount = $ctrl.availableAmount.amount;
	      $scope.$digest();
	    }
	  };
	
	  /**
	   * @name checkChartAnimationDelay
	   * @type {function}
	   *
	   * @description
	   * Helper function used to get the chart animation delay
	   *
	   * @inner
	   *
	   * @param {percentage} percentage of the full circle
	   * @returns {number}
	   */
	  var checkChartAnimationDelay = function checkChartAnimationDelay(percentage) {
	    return percentage < 50 ? 600 : 300;
	  };
	
	  /**
	   * @name animateChart
	   * @type {function}
	   *
	   * @description
	   * Helper function used to animate donat chart
	   *
	   * @inner
	   *
	   * @returns {void}
	   */
	  var animateChart = function animateChart() {
	    var perc = parseInt($ctrl.spentPercentage, 10);
	    var isRightSide = perc >= 0 && perc < 50;
	
	    var _getRotatingElements = getRotatingElements(),
	        leftElToRotate = _getRotatingElements.leftElToRotate,
	        rightElToRotate = _getRotatingElements.rightElToRotate;
	
	    if (perc === 50) {
	      toggleFullSliceRotation(leftElToRotate);
	    } else if (isRightSide) {
	      leftElToRotate.classList.add('rotate-n-' + calculateRotationAngle(perc) + '-deg', 'transition-base');
	    } else if (!isRightSide || perc > 100) {
	      toggleFullSliceRotation(leftElToRotate);
	      leftElToRotate.classList.add('transition-base');
	
	      $timeout(function () {
	        toggleFullSliceRotation(leftElToRotate);
	        leftElToRotate.classList.add('reset-slice');
	
	        if (perc > 100) {
	          rightElToRotate.classList.add('rotate-n-180-deg', 'transition-base');
	        } else {
	          rightElToRotate.classList.add('rotate-n-' + calculateRotationAngle(perc) + '-deg', 'transition-base');
	        }
	      }, checkChartAnimationDelay(perc));
	    }
	  };
	
	  /**
	   * @description
	   * Resets chart slices classes to initial state
	   *
	   * @name Controller#resetChart
	   * @type {function}
	   * @inner
	   */
	  var resetChart = function resetChart() {
	    $ctrl.amountSpentColor = null;
	    $ctrl.wrapperClass = $ctrl.chartWrapperClass;
	
	    var _getRotatingElements2 = getRotatingElements(),
	        leftElToRotate = _getRotatingElements2.leftElToRotate,
	        rightElToRotate = _getRotatingElements2.rightElToRotate;
	
	    leftElToRotate.classList.value = rightElToRotate.classList.value = '';
	    $timeout(function () {
	      leftElToRotate.classList.add(_constants.CHART_SLICE_CLASSES.CLASS_CHART_SLICE_LEFT);
	      leftElToRotate.classList.add($ctrl.chartColor);
	      rightElToRotate.classList.add(_constants.CHART_SLICE_CLASSES.CLASS_CHART_SLICE_RIGHT);
	      rightElToRotate.classList.add($ctrl.chartColor);
	    });
	  };
	
	  /**
	   * @description
	   * Trigger all chart related animations (circle, amount)
	   * and apply correct color
	   *
	   * @name Controller#doAnimations
	   * @type {function}
	   * @inner
	   */
	  var doAnimations = function doAnimations() {
	    // reset classes if they have been appended already (chart update)
	    resetChart();
	
	    $window.requestAnimationFrame(animateAmountLeft);
	    $timeout(animateChart);
	    styleBudgetChart();
	  };
	
	  /**
	   * AngularJS Lifecycle hook used to initialize the controller
	   *
	   * @name Controller#$onInit
	   * @type {function}
	   * @returns {void}
	   */
	  var $onInit = function $onInit() {
	    $scope.$watch('$ctrl.availableAmount.amount', doAnimations);
	  };
	
	  Object.assign($ctrl, {
	    $onInit: $onInit,
	
	    /**
	     * @description
	     * Animated available amount
	     *
	     * @name animateAvailableAmount
	     * @type {number}
	     */
	    animateAvailableAmount: $ctrl.spendingLimit ? $ctrl.spendingLimit.amount : null,
	
	    /**
	     * @description
	     * Chart color
	     *
	     * @name chartColor
	     * @type {string}
	     */
	    chartColor: '',
	
	    /**
	     * @description
	     * Amount color
	     *
	     * @name amountColor
	     * @type {string}
	     */
	    amountColor: '',
	
	    /**
	     * @description
	     * Amount spent color
	     *
	     * @name amountSpentColor
	     * @type {string}
	     */
	    amountSpentColor: ''
	  });
	};
	
	exports.default = uiBbBudgetCardController;

/***/ }),
/* 25 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * @name ChartLevel
	 * @description
	 * A set of constants which defines the color level
	 * of the chart
	 *
	 * @type {object}
	 */
	var CHART_LEVEL = exports.CHART_LEVEL = {
	  SUCCESS: 'success',
	  WARNING: 'warning',
	  DANGER: 'danger'
	};
	
	/**
	 * @name CHART_SLICE_CLASSES
	 * @description
	 * A set of constants which defines CSS classes of
	 * chart moving slices
	 *
	 * @type {object}
	 */
	var CHART_SLICE_CLASSES = exports.CHART_SLICE_CLASSES = {
	  CLASS_CHART_SLICE_LEFT: 'donut-left-slice',
	  CLASS_CHART_SLICE_RIGHT: 'donut-right-slice'
	};
	
	/**
	 * @name CARD_COLOR_CLASSES
	 * @description
	 * A set of constants which defines the color level
	 * classes used to style the chart
	 *
	 * @type {object}
	 */
	var CARD_COLOR_CLASSES = exports.CARD_COLOR_CLASSES = {
	  CLASS_LABEL_SUCCESS: 'label-color-success',
	  CLASS_CHART_SUCCESS: 'indicator-color-success',
	
	  CLASS_LABEL_WARNING: 'label-color-warning',
	  CLASS_CHART_WARNING: 'indicator-color-warning',
	
	  CLASS_LABEL_DANGER: 'label-color-danger',
	  CLASS_CHART_DANGER: 'indicator-color-danger',
	  CLASS_CHART_DANGER_BRIGHT: 'indicator-color-danger-bright'
	};

/***/ })
/******/ ])
});
;
//# sourceMappingURL=ui-bb-budget-card-ng.js.map