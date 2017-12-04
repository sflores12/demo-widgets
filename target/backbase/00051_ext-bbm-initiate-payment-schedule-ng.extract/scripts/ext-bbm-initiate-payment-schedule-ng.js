(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("ui-bb-i18n-ng"), require("ui-bb-date-label-filter-ng"), require("ui-bbm-textfield-ng"), require("lib-bbm-plugins"), require("ui-bbm-datepicker-ng"), require("ui-bbm-dropdown-ng"));
	else if(typeof define === 'function' && define.amd)
		define("ext-bbm-initiate-payment-schedule-ng", ["ui-bb-i18n-ng", "ui-bb-date-label-filter-ng", "ui-bbm-textfield-ng", "lib-bbm-plugins", "ui-bbm-datepicker-ng", "ui-bbm-dropdown-ng"], factory);
	else if(typeof exports === 'object')
		exports["ext-bbm-initiate-payment-schedule-ng"] = factory(require("ui-bb-i18n-ng"), require("ui-bb-date-label-filter-ng"), require("ui-bbm-textfield-ng"), require("lib-bbm-plugins"), require("ui-bbm-datepicker-ng"), require("ui-bbm-dropdown-ng"));
	else
		root["ext-bbm-initiate-payment-schedule-ng"] = factory(root["ui-bb-i18n-ng"], root["ui-bb-date-label-filter-ng"], root["ui-bbm-textfield-ng"], root["lib-bbm-plugins"], root["ui-bbm-datepicker-ng"], root["ui-bbm-dropdown-ng"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_8__, __WEBPACK_EXTERNAL_MODULE_32__, __WEBPACK_EXTERNAL_MODULE_42__, __WEBPACK_EXTERNAL_MODULE_45__, __WEBPACK_EXTERNAL_MODULE_53__, __WEBPACK_EXTERNAL_MODULE_54__) {
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

	module.exports = __webpack_require__(52);

/***/ }),

/***/ 8:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_8__;

/***/ }),

/***/ 32:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_32__;

/***/ }),

/***/ 42:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_42__;

/***/ }),

/***/ 45:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_45__;

/***/ }),

/***/ 52:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.dependencyKeys = exports.helpers = undefined;
	
	var _uiBbI18nNg = __webpack_require__(8);
	
	var _uiBbI18nNg2 = _interopRequireDefault(_uiBbI18nNg);
	
	var _uiBbmDatepickerNg = __webpack_require__(53);
	
	var _uiBbmDatepickerNg2 = _interopRequireDefault(_uiBbmDatepickerNg);
	
	var _uiBbmDropdownNg = __webpack_require__(54);
	
	var _uiBbmDropdownNg2 = _interopRequireDefault(_uiBbmDropdownNg);
	
	var _uiBbmTextfieldNg = __webpack_require__(42);
	
	var _uiBbmTextfieldNg2 = _interopRequireDefault(_uiBbmTextfieldNg);
	
	var _helpers = __webpack_require__(55);
	
	var _helpers2 = _interopRequireDefault(_helpers);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var helpers = exports.helpers = _helpers2.default; /**
	                                                    * @module ext-bbm-initiate-payment-schedule-ng
	                                                    *
	                                                    * @description
	                                                    * Mobile extension for the payment schedule view in the Mobile initiate payment widget.
	                                                    *
	                                                    * @example
	                                                    * <!-- File model.xml of widget-bbm-initiate-payment-ng -->
	                                                    * <property name="extension" viewHint="text-input,admin">
	                                                    *   <value type="string">ext-bbm-initiate-payment-schedule-ng</value>
	                                                    * </property>
	                                                    */
	var dependencyKeys = exports.dependencyKeys = [_uiBbI18nNg2.default, _uiBbmDatepickerNg2.default, _uiBbmDropdownNg2.default, _uiBbmTextfieldNg2.default];

/***/ }),

/***/ 53:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_53__;

/***/ }),

/***/ 54:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_54__;

/***/ }),

/***/ 55:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _libBbmPlugins = __webpack_require__(45);
	
	var _libBbmPlugins2 = _interopRequireDefault(_libBbmPlugins);
	
	var _uiBbDateLabelFilterNg = __webpack_require__(32);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; } // Temporary disable capsInNew until it fixed in lib-bbm-plugins
	/* eslint new-cap: ["error", { "capIsNew": false }] */
	
	
	var RecurrenceEnding = {
	  NEVER: 'NEVER',
	  ON: 'ON',
	  AFTER: 'AFTER'
	};
	
	var TransferFrequency = {
	  ONCE: 'ONCE',
	  DAILY: 'DAILY',
	  WEEKLY: 'WEEKLY',
	  MONTHLY: 'MONTHLY',
	  QUARTERLY: 'QUARTERLY',
	  YEARLY: 'YEARLY'
	};
	
	/**
	 * @description
	 * Helpers for ext-bbm-initiate-payment-schedule-ng
	 *
	 * @name Helpers
	 * @type {Object}
	 */
	
	exports.default = function (_ref) {
	  var $filter = _ref.$filter;
	
	  var date = $filter('date');
	  var i18n = $filter('i18n');
	
	  var frequencyOptions = [{ id: TransferFrequency.ONCE, text: i18n('message.payment.schedule.frequency.once') }, { id: TransferFrequency.DAILY, text: i18n('message.payment.schedule.frequency.daily') }, { id: TransferFrequency.WEEKLY, text: i18n('message.payment.schedule.frequency.weekly') }, { id: TransferFrequency.MONTHLY, text: i18n('message.payment.schedule.frequency.monthly') }, { id: TransferFrequency.QUARTERLY, text: i18n('message.payment.schedule.frequency.quarterly') }, { id: TransferFrequency.YEARLY, text: i18n('message.payment.schedule.frequency.yearly') }];
	
	  var recurrenceEndingOptions = [{ id: RecurrenceEnding.NEVER, text: i18n('recurrence.ending.never') }, { id: RecurrenceEnding.ON, text: i18n('recurrence.ending.on') }, { id: RecurrenceEnding.AFTER, text: i18n('recurrence.ending.after') }];
	
	  var getPaymentSchedule = function getPaymentSchedule(ctrl) {
	    return ctrl.state.payment.data.schedule;
	  };
	
	  var getToday = function getToday() {
	    return date(Date.now(), 'yyyy-MM-ddTHH:mm:ssZ');
	  };
	
	  var getDayStart = function getDayStart(dateStr) {
	    return new Date(dateStr).setHours(0, 0, 0, 0);
	  };
	
	  var isPaymentRecurring = function isPaymentRecurring(ctrl) {
	    return getPaymentSchedule(ctrl).transferFrequency !== TransferFrequency.ONCE;
	  };
	
	  var isEndDateValid = function isEndDateValid(_ref2) {
	    var endDate = _ref2.endDate,
	        startDate = _ref2.startDate;
	    return getDayStart(startDate) <= getDayStart(endDate);
	  };
	
	  var isRepeatValid = function isRepeatValid(_ref3) {
	    var repeat = _ref3.repeat;
	    return repeat > 0 && repeat <= 99;
	  };
	
	  var checkValidity = function checkValidity(ctrl) {
	    if (isPaymentRecurring(ctrl)) {
	      var schedule = getPaymentSchedule(ctrl);
	
	      // End date is not entered
	      if (schedule.end === RecurrenceEnding.ON && !schedule.endDate) {
	        _libBbmPlugins2.default.Snackbar().error(i18n('errors.payment.schedule.endDate.required'));
	        return false;
	      }
	
	      // End date is not valid
	      if (schedule.end === RecurrenceEnding.ON && !isEndDateValid(schedule)) {
	        _libBbmPlugins2.default.Snackbar().error(i18n('errors.payment.schedule.endDate.invalid'));
	        return false;
	      }
	
	      // Repeat is not valid
	      if (schedule.end === RecurrenceEnding.AFTER && !isRepeatValid(schedule)) {
	        _libBbmPlugins2.default.Snackbar().error(i18n('errors.payment.schedule.repeat.invalid'));
	        return false;
	      }
	    }
	    return true;
	  };
	
	  return {
	    /**
	     * @description
	     * Returns a list of frequency options.
	     *
	     * @name Helpers#getFrequencyOptions
	     * @type {function}
	     *
	     * @returns {Array.<PaymentFrequency>}
	     */
	    getFrequencyOptions: function getFrequencyOptions() {
	      return frequencyOptions;
	    },
	
	    /**
	     * @description
	     * Returns a minimum allowed date to start a recurring payment.
	     *
	     * @name Helpers#getMinimumRecurrenceEndDate
	     * @type {function}
	     *
	     * @returns {string}
	     */
	    getMinimumRecurrenceEndDate: function getMinimumRecurrenceEndDate(ctrl) {
	      return getPaymentSchedule(ctrl).startDate;
	    },
	
	    /**
	     * @description
	     * Returns a minimum allowed date to make a payment.
	     *
	     * @name Helpers#getMinimumExecutionDate
	     * @type {function}
	     *
	     * @returns {string}
	     */
	    getMinimumExecutionDate: function getMinimumExecutionDate() {
	      return getToday();
	    },
	
	    /**
	     * @description
	     * Returns a minimum allowed date to start a recurring payment.
	     *
	     * @name Helpers#getMinimumStartDate
	     * @type {function}
	     *
	     * @returns {string}
	     */
	    getMinimumRecurrenceStartDate: function getMinimumRecurrenceStartDate() {
	      return getToday();
	    },
	
	    /**
	     * @description
	     * Returns a list of possible recurring payment endings.
	     *
	     * @name Helpers#getRecurrenceEndingOptions
	     * @type {function}
	     *
	     * @returns {Array.<RecurrenceEnding>}
	     */
	    getRecurrenceEndingOptions: function getRecurrenceEndingOptions() {
	      return recurrenceEndingOptions;
	    },
	
	    /**
	     * @description
	     * Returns the label of the start date field.
	     *
	     * @name Helpers#getStartDateLabel
	     * @type {function}
	     *
	     * @param {ScheduleController} ctrl Instance of the controller
	     * @returns {string}
	     */
	    getStartDateLabel: function getStartDateLabel(ctrl) {
	      return isPaymentRecurring(ctrl) ? i18n('form.label.startDate') : i18n('form.label.executionDate');
	    },
	
	    /**
	     * @description
	     * Returns the title of the start date datepicker.
	     *
	     * @name Helpers#getStartDateTitle
	     * @type {function}
	     *
	     * @param {ScheduleController} ctrl Instance of the controller
	     * @returns {string}
	     */
	    getStartDateTitle: function getStartDateTitle(ctrl) {
	      return isPaymentRecurring(ctrl) ? i18n('form.title.selectStartDate') : i18n('form.title.selectExecutionDate');
	    },
	
	    /**
	     * @description
	     * Checks whether the payment is recurring.
	     * Returns true, if the payment is recurring, false otherwise.
	     *
	     * @name Helpers#isPaymentRecurring
	     * @type {function}
	     *
	     * @param {ScheduleController} ctrl
	     * @returns {boolean}
	     */
	    isPaymentRecurring: isPaymentRecurring,
	
	    /**
	     * @description
	     * Defines whether the recurrence repeat field should be visible.
	     *
	     * @name Helpers#isRecurrenceRepeatVisible
	     * @type {function}
	     *
	     * @param {ScheduleController} ctrl
	     * @returns {boolean}
	     */
	    isRecurrenceRepeatVisible: function isRecurrenceRepeatVisible(ctrl) {
	      return isPaymentRecurring(ctrl) && getPaymentSchedule(ctrl).end === RecurrenceEnding.AFTER;
	    },
	
	    /**
	     * @description
	     * Defines whether the recurrence end date field should be visible.
	     *
	     * @name Helpers#isRecurrenceEndDateVisible
	     * @type {function}
	     *
	     * @param {ScheduleController} ctrl
	     * @returns {boolean}
	     */
	    isRecurrenceEndDateVisible: function isRecurrenceEndDateVisible(ctrl) {
	      return isPaymentRecurring(ctrl) && getPaymentSchedule(ctrl).end === RecurrenceEnding.ON;
	    },
	
	    /**
	     * @description
	     * Handles submit of the schedule payment form.
	     *
	     * @name Helpers#onScheduleFormSubmit
	     * @type {function}
	     *
	     * @param {ScheduleController} ctrl Instance of the controller
	     * @returns {string}
	     */
	    onScheduleFormSubmit: function onScheduleFormSubmit(ctrl) {
	      if (checkValidity(ctrl)) {
	        ctrl.submitSchedule();
	      }
	    },
	    dateLabels: _defineProperty({}, _uiBbDateLabelFilterNg.TimePeriod.TODAY, i18n('calendar.label.today'))
	  };
	};
	
	/**
	 * @typedef {Object} PaymentFrequency
	 * @property {string} id Frequency identifier
	 * @property {string} text Frequency as a text to be displayed
	 */

/***/ })

/******/ })
});
;
//# sourceMappingURL=ext-bbm-initiate-payment-schedule-ng.js.map