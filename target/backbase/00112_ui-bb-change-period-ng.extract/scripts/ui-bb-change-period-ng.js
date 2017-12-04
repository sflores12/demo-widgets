(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vendor-bb-angular"));
	else if(typeof define === 'function' && define.amd)
		define("ui-bb-change-period-ng", ["vendor-bb-angular"], factory);
	else if(typeof exports === 'object')
		exports["ui-bb-change-period-ng"] = factory(require("vendor-bb-angular"));
	else
		root["ui-bb-change-period-ng"] = factory(root["vendor-bb-angular"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_22__) {
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

	module.exports = __webpack_require__(33);

/***/ }),

/***/ 22:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_22__;

/***/ }),

/***/ 33:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _vendorBbAngular = __webpack_require__(22);
	
	var _vendorBbAngular2 = _interopRequireDefault(_vendorBbAngular);
	
	var _component = __webpack_require__(34);
	
	var _component2 = _interopRequireDefault(_component);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * @module ui-bb-change-period-ng
	 *
	 * @example
	 * // In an extension:
	 * // file: scripts/index.js
	 * import uiBbChangePeriodKey from 'ui-bb-change-period-ng';
	 *
	 * export const dependencyKeys = [
	 *   uiBbChangePeriodKey,
	 * ];
	 *
	 * // file: templates/template.ng.html
	 * <ui-bb-change-period-ng
	 *  data-period-start="2017-06-01"
	 *  data-period-end="2017-06-31"
	 *  data-change-period="ext.helpers.onPeriodChange()"
	 * ></ui-bb-change-period-ng>
	 */
	exports.default = _vendorBbAngular2.default.module('ui-bb-change-period-ng', []).component('uiBbChangePeriodNg', _component2.default).name;

/***/ }),

/***/ 34:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _controller = __webpack_require__(35);
	
	var _controller2 = _interopRequireDefault(_controller);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * @name uiBbChangePeriodNg
	 * @type {object}
	 * @description
	 * Component used to change the date period.
	 *
	 * @property {string} periodStart Start date as a ISO string
	 * @property {string} periodEnd End date as a ISO string
	 * @property {number} periodStep Monthly interval
	 * @property {?function} onPeriodStartChange Callback triggered after the period start is changed
	 * @property {?function} onPeriodEndChange Callback triggered after the period end is changed
	 * @property {?function} periodFormatter
	 *  [Deprecated] Method called to format period start and end date labels
	 * @property {?function} periodStartFormatter Method called to format period start date label
	 * @property {?function} periodEndFormatter Method called to format period end date label
	 */
	var component = {
	  controller: ['$locale', '$filter', _controller2.default],
	  bindings: {
	    periodStart: '<',
	    periodEnd: '<',
	    periodStep: '<',
	    onPeriodStartChange: '&',
	    onPeriodEndChange: '&',
	    periodFormatter: '&',
	    periodStartFormatter: '&',
	    periodEndFormatter: '&'
	  },
	  template: ['$attrs', function (attrs) {
	    // Deprecation message for period-formatter attribute
	    // This attribute should be removed in version 2.0.0
	    if ('periodFormatter' in attrs) {
	      // eslint-disable-next-line max-len, no-console
	      console.warn('DEPRECATED - [ui-bb-change-period-ng] period-formatter attribute will be ignored in the next component major release. Use \'period-start-formatter and period-end-formatter\' attributes instead.');
	    }
	
	    return '\n      <div class="row">\n        <div class="col-xs-2 col-sm-4 text-right double-line">\n          <i class="fa fa-chevron-left text-muted btn"\n            aria-hidden="true"\n            data-ng-click="$ctrl.changePeriod(-$ctrl.periodStep)"\n          ></i>\n        </div>\n\n        <div class="col-xs-8 col-sm-4 text-center">\n          <div><strong>{{ $ctrl.monthName }}</strong></div>\n\n          <div class="current-period text-muted small">\n            {{ $ctrl.formatPeriodLabel($ctrl.firstDayOfMonth, $ctrl.periodStartFormatter) }}\n            -\n            {{ $ctrl.formatPeriodLabel($ctrl.lastDayOfMonth, $ctrl.periodEndFormatter) }}\n          </div>\n        </div>\n\n        <div class="col-xs-2 col-sm-4 text-left double-line">\n          <i class="fa fa-chevron-right text-muted btn"\n            aria-hidden="true"\n            data-ng-class="{\n              disabled: $ctrl.isButtonDisabled($ctrl.monthNumber, $ctrl.selectedYear)\n            }"\n            data-ng-click=" $ctrl.isButtonDisabled($ctrl.monthNumber, $ctrl.selectedYear) ?\n              null : $ctrl.changePeriod($ctrl.periodStep)"\n          ></i>\n        </div>\n      </div>\n    ';
	  }]
	};
	
	exports.default = component;

/***/ }),

/***/ 35:
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = uiBbChangePeriodController;
	/**
	 * @module ui-bb-change-period-ng
	 * @name uiBbChangePeriodController
	 *
	 * @description
	 * Main functionality for the component used to change the date period.
	 */
	function uiBbChangePeriodController($locale, $filter) {
	  var $ctrl = this;
	
	  var MONTHS_LOCALE = $locale.DATETIME_FORMATS.MONTH;
	  var START_DATE = new Date($ctrl.periodStart);
	  var END_DATE = new Date($ctrl.periodEnd);
	
	  var INITIAL_MONTH = START_DATE.getMonth();
	  var INITIAL_YEAR = START_DATE.getFullYear();
	
	  /**
	   * AngularJS Lifecycle hook used to initialize the controller
	   *
	   * @type {function}
	   * @name Controller#$onInit
	   * @returns {void}
	   */
	  var $onInit = function $onInit() {
	    $ctrl.monthNumber = INITIAL_MONTH;
	    $ctrl.firstDayOfMonth = START_DATE.getDate();
	    $ctrl.lastDayOfMonth = END_DATE.getDate();
	    $ctrl.monthName = MONTHS_LOCALE[INITIAL_MONTH];
	    $ctrl.selectedYear = INITIAL_YEAR;
	  };
	
	  /**
	   * Period label formatter method. It uses provided custom formatter
	   * or formats date in format d MMM yyyy
	   *
	   * @name formatPeriodLabel
	   * @type {function}
	   * @param {number} day Period's day
	   * @param {function} formattingFn Formatting function
	   * @returns {string}
	   */
	  var formatPeriodLabel = function formatPeriodLabel(day, formattingFn) {
	    var date = new Date($ctrl.selectedYear + '/' + ($ctrl.monthNumber + 1) + '/' + day);
	    // Backwards compatibility. Property periodFormatter is deprecated.
	    var fn = formattingFn() || $ctrl.periodFormatter();
	
	    return fn ? fn(date) : $filter('date')(date, 'd MMM yyyy');
	  };
	
	  /**
	   * Checks if a button is disabled
	   *
	   * @name isButtonDisabled
	   * @type {function}
	   * @param {any} month - Number of the month
	   * @returns {boolean}
	   */
	  var isButtonDisabled = function isButtonDisabled(month, year) {
	    return month === INITIAL_MONTH && year === INITIAL_YEAR;
	  };
	
	  /**
	   * Changes the to previous or next one based on a month number passed to it
	   *
	   * @name changePeriod
	   * @type {function}
	   * @param {any} period - Change period step
	   * @returns {void}
	   */
	  var changePeriod = function changePeriod(period) {
	    $ctrl.monthNumber = $ctrl.monthNumber + period;
	
	    var now = new Date();
	    var newStartDateObj = new Date($ctrl.selectedYear, $ctrl.monthNumber, 1);
	    var newEndDateObj = new Date(newStartDateObj.getFullYear(), newStartDateObj.getMonth() + 1, 0);
	
	    // don't allow future date
	    if (newEndDateObj > now) {
	      newEndDateObj = now;
	    }
	
	    $ctrl.lastDayOfMonth = newEndDateObj.getDate();
	    $ctrl.monthName = MONTHS_LOCALE[newStartDateObj.getMonth()];
	    $ctrl.selectedYear = newStartDateObj.getFullYear();
	
	    if ($ctrl.monthNumber < 0) {
	      $ctrl.monthNumber = 11;
	    } else if ($ctrl.monthNumber > 11) {
	      $ctrl.monthNumber = 0;
	    }
	
	    if ($ctrl.onPeriodStartChange()) {
	      $ctrl.onPeriodStartChange()(newStartDateObj);
	    }
	
	    if ($ctrl.onPeriodEndChange()) {
	      $ctrl.onPeriodEndChange()(newEndDateObj);
	    }
	  };
	
	  Object.assign($ctrl, {
	    $onInit: $onInit,
	
	    /**
	     * Changes the to previous or next one based on a month number passed to it
	     *
	     * @name uiBbChangePeriodController#changePeriod
	     * @type {function}
	     */
	    changePeriod: changePeriod,
	
	    /**
	     * Checks if a button is disabled
	     *
	     * @name uiBbChangePeriodController#isButtonDisabled
	     * @type {function}
	     */
	    isButtonDisabled: isButtonDisabled,
	
	    /**
	     * Period label formatter method. It uses provided custom formatter
	     * or formats date in format d MMM yyyy
	     *
	     * @name uiBbChangePeriodController#formatPeriodLabel
	     * @type {function}
	     */
	    formatPeriodLabel: formatPeriodLabel,
	
	    /**
	     * @description
	     * Holds the value of the selected month
	     *
	     * @name uiBbChangePeriodController#monthNumber
	     * @type {number}
	     */
	    monthNumber: null,
	
	    /**
	     * @description
	     * Holds the value of the selected month name
	     *
	     * @name uiBbChangePeriodController#monthName
	     * @type {string}
	     */
	    monthName: '',
	
	    /**
	     * @description
	     * Holds the value of the selected year
	     *
	     * @name uiBbChangePeriodController#selectedYear
	     * @type {number}
	     */
	    selectedYear: null,
	
	    /**
	     * @description
	     * Holds the value of the first day in the selected month
	     *
	     * @name uiBbChangePeriodController#firstDayOfMonth
	     * @type {number}
	     */
	    firstDayOfMonth: null,
	
	    /**
	     * @description
	     * Holds the value of the last day in the selected month
	     *
	     * @name uiBbChangePeriodController#lastDayOfMonth
	     * @type {number}
	     */
	    lastDayOfMonth: null
	
	  });
	}

/***/ })

/******/ })
});
;
//# sourceMappingURL=ui-bb-change-period-ng.js.map