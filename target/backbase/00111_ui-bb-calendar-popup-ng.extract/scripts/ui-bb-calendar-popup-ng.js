(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vendor-bb-angular"), require("vendor-bb-uib-datepicker"), require("vendor-bb-uib-position"), require("vendor-bb-uib-datepicker-popup"));
	else if(typeof define === 'function' && define.amd)
		define("ui-bb-calendar-popup-ng", ["vendor-bb-angular", "vendor-bb-uib-datepicker", "vendor-bb-uib-position", "vendor-bb-uib-datepicker-popup"], factory);
	else if(typeof exports === 'object')
		exports["ui-bb-calendar-popup-ng"] = factory(require("vendor-bb-angular"), require("vendor-bb-uib-datepicker"), require("vendor-bb-uib-position"), require("vendor-bb-uib-datepicker-popup"));
	else
		root["ui-bb-calendar-popup-ng"] = factory(root["vendor-bb-angular"], root["vendor-bb-uib-datepicker"], root["vendor-bb-uib-position"], root["vendor-bb-uib-datepicker-popup"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_26__, __WEBPACK_EXTERNAL_MODULE_27__, __WEBPACK_EXTERNAL_MODULE_28__) {
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

	module.exports = __webpack_require__(25);

/***/ }),

/***/ 2:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ }),

/***/ 25:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _vendorBbAngular = __webpack_require__(2);
	
	var _vendorBbAngular2 = _interopRequireDefault(_vendorBbAngular);
	
	var _vendorBbUibDatepicker = __webpack_require__(26);
	
	var _vendorBbUibDatepicker2 = _interopRequireDefault(_vendorBbUibDatepicker);
	
	var _vendorBbUibPosition = __webpack_require__(27);
	
	var _vendorBbUibPosition2 = _interopRequireDefault(_vendorBbUibPosition);
	
	var _vendorBbUibDatepickerPopup = __webpack_require__(28);
	
	var _vendorBbUibDatepickerPopup2 = _interopRequireDefault(_vendorBbUibDatepickerPopup);
	
	var _calendarPopup = __webpack_require__(29);
	
	var _calendarPopup2 = _interopRequireDefault(_calendarPopup);
	
	var _calendarPopup3 = __webpack_require__(30);
	
	var _calendarPopup4 = _interopRequireDefault(_calendarPopup3);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * @module ui-bb-calendar-popup-ng
	 * @description
	 * UI datepicker popup component
	 *
	 * @example
	 * // In an extension:
	 * // file: scripts/index.js
	 * import uiBbCalendarPopupKey from 'ui-bb-calendar-popup-ng';
	 *
	 * export const dependencyKeys = [
	 *   uiBbCalendarPopupKey,
	 * ];
	 *
	 * // file: templates/template.ng.html
	 * <ui-bb-calendar-popup
	 *   data-date="$ctrl.date"
	 *   data-config="$ctrl.calendarPopupConfig"
	 *   data-disabled="false">
	 * </ui-bb-calendar-popup>
	 */
	
	var dependencyKeys = [_vendorBbUibPosition2.default, _vendorBbUibDatepicker2.default, _vendorBbUibDatepickerPopup2.default];
	
	/**
	 * @name default
	 * @type {string}
	 * @description The angular module name
	 */
	exports.default = _vendorBbAngular2.default.module('ui-bb-calendar-popup-ng', dependencyKeys).controller('uiBbCalendarPopupController', ['$filter', '$locale', '$scope', _calendarPopup2.default]).component('uiBbCalendarPopup', _calendarPopup4.default).name;

/***/ }),

/***/ 26:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_26__;

/***/ }),

/***/ 27:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_27__;

/***/ }),

/***/ 28:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_28__;

/***/ }),

/***/ 29:
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = uiBbCalendarPopupController;
	/**
	 * @description
	 * Css-classes for date-range selection
	 *
	 * @name DateRangeClass
	 * @enum {string}
	 */
	var DateRangeClass = {
	  START_DATE: 'date-range-start',
	  END_DATE: 'date-range-end',
	  CAPTURED_DATE: 'date-range-captured',
	  ONE_DAY_RANGE: 'one-day-range'
	};
	
	function uiBbCalendarPopupController($filter, $locale, $scope) {
	  /**
	   * @description
	   * Calendar popup controller
	   *
	   * @name uiBbCalendarPopupController
	   * @ngkey uiBbCalendarPopupController
	   * @type {Function}
	   */
	  var $ctrl = this;
	  var today = new Date();
	  var dateFormat = 'shortDate';
	
	  /**
	   * @description
	   * Default datepicker config.
	   *
	   * @name uiBbCalendarPopupController#defaultConfig
	   * @inner
	   * @type {Object}
	   */
	  var defaultConfig = {
	    formatDayHeader: 'EEE',
	    formatDayTitle: 'MMM yyyy',
	    formatMonth: 'MMM',
	    maxMode: 'day',
	    minDate: today,
	    maxDate: new Date(today.getFullYear() + 2, today.getMonth(), today.getDate()),
	    showWeeks: false
	  };
	
	  /**
	   * @description
	   * Datepicker config.
	   *
	   * @name uiBbCalendarPopupController#options
	   * @type {Object}
	   */
	  var options = Object.assign(defaultConfig, $ctrl.config);
	
	  /**
	   * @description
	   * Compares given dates
	   *
	   * @name compareDates
	   * @inner
	   * @type {Function}
	   * @param {String} date1 Date string
	   * @param {String} date2 Date string
	   * @returns {Number}
	   * -1 : if a < b
	   *  0 : if a = b
	   *  1 : if a > b
	   */
	  var compareDates = function compareDates(date1, date2) {
	    return (date1 > date2) - (date2 > date1);
	  };
	
	  /**
	   * @description
	   * Gets day difference between two dates
	   *
	   * @name getDayDiff
	   * @inner
	   * @type {Function}
	   * @param {String} date1 Date string
	   * @param {String} date2 Date string
	   * @returns {String}
	   */
	  var getDayDiff = function getDayDiff(date1, date2) {
	    return Math.round((date1 - date2) / (1000 * 60 * 60 * 24));
	  };
	
	  /**
	   * @description
	   * Gets true if dates of date-range are equal
	   *
	   * @name isOneDayRange
	   * @inner
	   * @type {Function}
	   * @returns {Boolean}
	   */
	  var isOneDayRange = function isOneDayRange() {
	    return !!$ctrl.dateRange.endDate && compareDates($ctrl.dateRange.startDate, $ctrl.dateRange.endDate) === 0;
	  };
	
	  /**
	   * @description
	   * Gets true if range is set
	   *
	   * @name isRangeSet
	   * @inner
	   * @type {Function}
	   * @returns {String}
	   */
	  var isRangeSet = function isRangeSet() {
	    return !!$ctrl.dateRange.startDate && !!$ctrl.dateRange.startDate;
	  };
	
	  /**
	   * @description
	   * Gets true if date is included in date range
	   *
	   * @name isDateInRange
	   * @inner
	   * @type {Function}
	   * @param {String} date Date string
	   * @returns {Boolean} True if date is included in date range
	   */
	  var isDateInRange = function isDateInRange(date) {
	    return compareDates(date, $ctrl.dateRange.startDate) === 1 && compareDates(date, $ctrl.dateRange.endDate) === -1;
	  };
	
	  /**
	   * @description
	   * Gets true if date is boundary in date range
	   *
	   * @name isBoundaryDate
	   * @inner
	   * @type {Function}
	   * @param {String} date Date string
	   * @returns {Boolean} True if date is boundary in date range
	   */
	  var isBoundaryDate = function isBoundaryDate(date) {
	    return compareDates(date, $ctrl.dateRange.startDate) === 0 || compareDates(date, $ctrl.dateRange.endDate) === 0;
	  };
	
	  /**
	   * @description
	   * Gets css class for each day in calendar
	   *
	   * @name getDayClass
	   * @inner
	   * @type {Function}
	   * @param {Object} obj Date object
	   * @param {String} obj.date Date string
	   * @param {String} obj.mode Calendar mode
	   * @returns {Boolean} Css class for each day in calendar
	   */
	  var getDayClass = function getDayClass(_ref) {
	    var date = _ref.date,
	        mode = _ref.mode;
	
	    if (mode === 'day') {
	      var formattedDate = new Date(date).setHours(0, 0, 0, 0);
	
	      if (compareDates(formattedDate, $ctrl.dateRange.startDate) === 0) {
	        return isOneDayRange() ? DateRangeClass.ONE_DAY_RANGE : DateRangeClass.START_DATE;
	      } else if (compareDates(formattedDate, $ctrl.dateRange.endDate) === 0) {
	        return DateRangeClass.END_DATE;
	      } else if (isDateInRange(formattedDate)) {
	        return DateRangeClass.CAPTURED_DATE;
	      }
	    }
	
	    return '';
	  };
	
	  /**
	   * @description
	   * Setup date range values
	   *
	   * @name setDateRange
	   * @inner
	   * @type {Function}
	   * @param {String} startDate Start date string
	   * @param {String} endDate End date string
	   */
	  var setDateRange = function setDateRange(startDate, endDate) {
	    $ctrl.dateRange.startDate = startDate;
	    $ctrl.dateRange.endDate = endDate;
	
	    $ctrl.date = null;
	  };
	
	  /**
	   * @description
	   * Method fires when $ctrl.date was changed
	   *
	   * @name onDateChange
	   * @inner
	   * @type {Function}
	   * @param {String} newVal New date value
	   */
	  var onDateChange = function onDateChange(newVal) {
	    if (!newVal) {
	      return;
	    }
	
	    // situation when date range is not set or dates is included in date-range
	    if (!isRangeSet() || isDateInRange(newVal) || isBoundaryDate(newVal)) {
	      setDateRange(newVal, newVal);
	    } else {
	      if (isOneDayRange()) {
	        if (getDayDiff($ctrl.dateRange.startDate, newVal) > 0) {
	          setDateRange(newVal, $ctrl.dateRange.startDate);
	        } else {
	          setDateRange($ctrl.dateRange.startDate, newVal);
	        }
	      } else {
	        // when selected date is after of the range
	        if (compareDates(newVal, $ctrl.dateRange.endDate) === 1) {
	          setDateRange($ctrl.dateRange.startDate, newVal);
	          // when selected date is before of the range
	        } else if (compareDates(newVal, $ctrl.dateRange.startDate) === -1) {
	          setDateRange(newVal, $ctrl.dateRange.endDate);
	        }
	      }
	    }
	  };
	
	  /**
	   * @description
	   * Enables ability to select date-range
	   *
	   * @name enableDateRangePicker
	   * @inner
	   * @type {Function}
	   */
	  var enableDateRangePicker = function enableDateRangePicker() {
	    Object.assign($ctrl.options, { customClass: getDayClass });
	
	    $scope.$watch(function () {
	      return $ctrl.date;
	    }, onDateChange);
	  };
	
	  /**
	   * @description
	   * Gets formatted date value or translation of "calendar.label.today" key or "today" string when
	   * today date is selected
	   *
	   * @name getSingleDateValue
	   * @inner
	   * @type {Function}
	   * @param {String} date Date string
	   * @returns {String}
	   */
	  var getSingleDateValue = function getSingleDateValue(date) {
	    return compareDates(date, today) !== 0 ? $filter('date')(date, dateFormat) : $filter('i18n')('calendar.label.today') || 'today';
	  };
	
	  /**
	   * @description
	   * Displays translation of "calendar.label.today" key or "today" string in the input field
	   * when today date is selected
	   *
	   * @name formatViewValue
	   * @type {Function}
	   * @returns {String}
	   */
	  var formatViewValue = function formatViewValue() {
	    if ($ctrl.dateRange && isRangeSet()) {
	      var startDate = new Date($ctrl.dateRange.startDate);
	      var endDate = new Date($ctrl.dateRange.endDate);
	
	      if (compareDates(startDate, endDate) === 0) {
	        return getSingleDateValue(startDate);
	      }
	
	      return getSingleDateValue(startDate) + ' - ' + getSingleDateValue(endDate);
	    } else if ($ctrl.date) {
	      var date = new Date($ctrl.date);
	
	      return getSingleDateValue(date);
	    }
	
	    return '';
	  };
	
	  /**
	   * @description
	   * Toggling open/close state of the calendar
	   *
	   * @name toggle
	   * @type {Function}
	   */
	  var toggle = function toggle() {
	    $ctrl.opened = !$ctrl.opened;
	  };
	
	  /**
	   * @description
	   * Adjusts selected date, minDate and maxDate of current control
	   * to the value passed through a binding
	   *
	   * @name $onChanges
	   * @type {Function}
	   * @param {Object} changesObject Object containing changes in one-way bindings
	   */
	  var $onChanges = function $onChanges(changesObject) {
	    if (!changesObject.config) {
	      return;
	    }
	
	    var changes = changesObject.config.currentValue;
	
	    if (changes && changes.minDate) {
	      // update minDate setting
	      $ctrl.options.minDate = changes.minDate;
	
	      // update selected date if mindate is later than selected date
	      if ($ctrl.date && $ctrl.date - changes.minDate < 0) {
	        $ctrl.date = changes.minDate;
	      }
	    }
	
	    if (changes && changes.maxDate) {
	      // update maxDate setting
	      $ctrl.options.maxDate = changes.maxDate;
	
	      // update selected date if maxdate is before than selected date
	      if ($ctrl.date && $ctrl.date - changes.maxDate > 0) {
	        $ctrl.date = changes.maxDate;
	      }
	    }
	  };
	
	  /**
	   * @description
	   * Set default value on icon click
	   *
	   * @name $onInit
	   * @type {Function}
	   */
	  var $onInit = function $onInit() {
	    var dateFormatPlaceholder = $locale.DATETIME_FORMATS[dateFormat].toLowerCase();
	
	    $ctrl.onClick = $ctrl.onClick === undefined ? true : $ctrl.onClick;
	
	    if ($ctrl.dateRange) {
	      $ctrl.dateFormatPlaceholder = dateFormatPlaceholder + ' - ' + dateFormatPlaceholder;
	      enableDateRangePicker();
	    } else {
	      $ctrl.dateFormatPlaceholder = dateFormatPlaceholder;
	    }
	  };
	
	  Object.assign($ctrl, {
	    options: options,
	    $onInit: $onInit,
	    $onChanges: $onChanges,
	    formatViewValue: formatViewValue,
	    toggle: toggle
	  });
	}

/***/ }),

/***/ 30:
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * @name uiBbCalendarPopupComponent
	 * @type {Object}
	 *
	 * @property {String} date Date model
	 * @property {DateRange} dateRange Date-range model
	 * @property {Object} config Configuration object
	 * @property {Object} messages Object with translated messages
	 * @property {Boolean} disabled Defines whether or not component is disabled
	 * @property {Boolean} onClick Defines whether or not component is toggled on click
	 * @property {Boolean} onFocus Defines whether or not component is toggled on focus
	 */
	var uiBbCalendarPopupComponent = {
	  bindings: {
	    date: '=?',
	    dateRange: '=?',
	    config: '<',
	    messages: '<',
	    disabled: '<',
	    onClick: '<',
	    onFocus: '<'
	  },
	  template: '<div class="input-group"\n    data-uib-datepicker-popup=""\n    data-close-on-date-selection="!$ctrl.dateRange"\n    data-datepicker-options="$ctrl.options"\n    data-is-open="$ctrl.opened"\n    data-show-button-bar="false"\n    data-ng-model="$ctrl.date"\n    data-ng-disabled="$ctrl.disabled"\n    data-ng-focus="!$ctrl.onFocus || $ctrl.toggle()"\n    data-ng-click="!$ctrl.onClick || $ctrl.toggle()">\n    <input type="text"\n      class="form-control"\n      readonly\n      tabindex="-1"\n      placeholder="{{$ctrl.dateFormatPlaceholder}}"\n      data-ng-value="$ctrl.formatViewValue()"\n      data-ng-disabled="$ctrl.disabled"\n      data-role="ui-bb-calendar-popup-ng-input"/>\n    <span class="input-group-btn">\n      <button type="button"\n        aria-label="{{ $ctrl.messages.calendarBtn }}"\n        class="btn btn-default"\n        tabindex="-1"\n        data-ng-disabled="$ctrl.disabled"\n        data-role="ui-bb-calendar-popup-ng-button">\n        <i class="fa fa-calendar" aria-hidden="true"></i>\n      </button>\n    </span>\n  </div>',
	  controller: 'uiBbCalendarPopupController'
	};
	
	exports.default = uiBbCalendarPopupComponent;
	
	/**
	 * DateRange type definition
	 * @typedef {Object} DateRange
	 * @property {String} startDate Start date of date-range
	 * @property {String} endDate End date of date-range
	 */

/***/ })

/******/ })
});
;
//# sourceMappingURL=ui-bb-calendar-popup-ng.js.map