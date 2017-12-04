(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("ui-bb-i18n-ng"), require("ui-bb-format-amount"), require("lib-bbm-plugins"));
	else if(typeof define === 'function' && define.amd)
		define("ext-bbm-initiate-payment-review-ng", ["ui-bb-i18n-ng", "ui-bb-format-amount", "lib-bbm-plugins"], factory);
	else if(typeof exports === 'object')
		exports["ext-bbm-initiate-payment-review-ng"] = factory(require("ui-bb-i18n-ng"), require("ui-bb-format-amount"), require("lib-bbm-plugins"));
	else
		root["ext-bbm-initiate-payment-review-ng"] = factory(root["ui-bb-i18n-ng"], root["ui-bb-format-amount"], root["lib-bbm-plugins"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_8__, __WEBPACK_EXTERNAL_MODULE_37__, __WEBPACK_EXTERNAL_MODULE_45__) {
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

	module.exports = __webpack_require__(49);

/***/ }),

/***/ 8:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_8__;

/***/ }),

/***/ 37:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_37__;

/***/ }),

/***/ 45:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_45__;

/***/ }),

/***/ 49:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.dependencyKeys = exports.hooks = exports.helpers = exports.events = undefined;
	
	var _uiBbFormatAmount = __webpack_require__(37);
	
	var _uiBbFormatAmount2 = _interopRequireDefault(_uiBbFormatAmount);
	
	var _uiBbI18nNg = __webpack_require__(8);
	
	var _uiBbI18nNg2 = _interopRequireDefault(_uiBbI18nNg);
	
	var _events = __webpack_require__(50);
	
	var _events2 = _interopRequireDefault(_events);
	
	var _helpers = __webpack_require__(51);
	
	var _helpers2 = _interopRequireDefault(_helpers);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * @module ext-bbm-initiate-payment-review-ng
	 *
	 * @description
	 * Mobile extension for a payment review step in the Mobile initiate payment widget.
	 *
	 * @example
	 * <!-- Contact widget model.xml -->
	 * <property name="extension" viewHint="text-input,admin">
	 *   <value type="string">ext-bbm-initiate-payment-review-ng</value>
	 * </property>
	 */
	var events = exports.events = _events2.default;
	var helpers = exports.helpers = _helpers2.default;
	var hooks = exports.hooks = {};
	
	var dependencyKeys = exports.dependencyKeys = [_uiBbI18nNg2.default, _uiBbFormatAmount2.default];

/***/ }),

/***/ 50:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _libBbmPlugins = __webpack_require__(45);
	
	var _libBbmPlugins2 = _interopRequireDefault(_libBbmPlugins);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; } // Temporary disable capsInNew until it fixed in lib-bbm-plugins
	/* eslint new-cap: ["error", { "capIsNew": false }] */
	
	
	/**
	 * @description
	 * Events that the extension subscribes to.
	 *
	 * @name Event
	 * @type {Object}
	 * @inner
	 */
	var Event = {
	  PAYMENT_DONE: 'bb.event.payment.done',
	  PAYMENT_FAILED: 'bb.event.payment.failed',
	  PAYMENT_START: 'bb.event.payment.started'
	};
	
	/**
	 * @name Preference
	 * @type {Object}
	 * @inner
	 */
	var Preference = {
	  PAYMENT_REVIEW_STEP: 'bb.payment.review.step'
	};
	
	exports.default = function (_ref) {
	  var $filter = _ref.$filter,
	      widget = _ref.widget;
	
	  var i18n = $filter('i18n');
	  var hasReviewStep = widget.getBooleanPreference(Preference.PAYMENT_REVIEW_STEP);
	  var events = {};
	
	  if (hasReviewStep) {
	    var _Object$assign;
	
	    Object.assign(events, (_Object$assign = {}, _defineProperty(_Object$assign, Event.PAYMENT_START, function () {
	      _libBbmPlugins2.default.ActivityIndicator().show(i18n('message.payment.start'));
	    }), _defineProperty(_Object$assign, Event.PAYMENT_DONE, function () {
	      _libBbmPlugins2.default.ActivityIndicator().hide();
	      _libBbmPlugins2.default.Snackbar().success(i18n('message.payment.done'));
	    }), _defineProperty(_Object$assign, Event.PAYMENT_FAILED, function () {
	      _libBbmPlugins2.default.ActivityIndicator().hide();
	      _libBbmPlugins2.default.Snackbar().error(i18n('message.payment.failed'));
	    }), _Object$assign));
	  }
	
	  return events;
	};

/***/ }),

/***/ 51:
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _TransferFrequencyMes;
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
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
	
	var TransferFrequencyMessage = (_TransferFrequencyMes = {}, _defineProperty(_TransferFrequencyMes, TransferFrequency.ONCE, 'message.payment.schedule.frequency.once'), _defineProperty(_TransferFrequencyMes, TransferFrequency.DAILY, 'message.payment.schedule.frequency.daily'), _defineProperty(_TransferFrequencyMes, TransferFrequency.WEEKLY, 'message.payment.schedule.frequency.weekly'), _defineProperty(_TransferFrequencyMes, TransferFrequency.MONTHLY, 'message.payment.schedule.frequency.monthly'), _defineProperty(_TransferFrequencyMes, TransferFrequency.QUARTERLY, 'message.payment.schedule.frequency.quarterly'), _defineProperty(_TransferFrequencyMes, TransferFrequency.YEARLY, 'message.payment.schedule.frequency.yearly'), _TransferFrequencyMes);
	
	var isToday = function isToday(dateStr) {
	  var date = new Date(dateStr);
	  var today = new Date();
	
	  return date.getDate() === today.getDate() && date.getMonth() === today.getMonth() && date.getFullYear() === today.getFullYear();
	};
	
	/**
	 * @description
	 * Helpers for ext-bbm-initiate-payment-form-ng
	 *
	 * @name Helpers
	 * @type {Object}
	 */
	
	exports.default = function (_ref) {
	  var _RecurrenceEndingStri;
	
	  var $filter = _ref.$filter;
	
	  var dateFilter = $filter('date');
	  var i18n = $filter('i18n');
	
	  var RecurrenceEndingString = (_RecurrenceEndingStri = {}, _defineProperty(_RecurrenceEndingStri, RecurrenceEnding.NEVER, function () {
	    return i18n('message.payment.schedule.frequency.end.never');
	  }), _defineProperty(_RecurrenceEndingStri, RecurrenceEnding.AFTER, function (schedule) {
	    return schedule.repeat + ' ' + i18n('message.payment.schedule.frequency.end.after');
	  }), _defineProperty(_RecurrenceEndingStri, RecurrenceEnding.ON, function (schedule) {
	    var endDate = dateFilter(schedule.endDate, 'mediumDate');
	    return i18n('message.payment.schedule.frequency.end.on') + ' ' + endDate;
	  }), _RecurrenceEndingStri);
	
	  var getScheduleFrequencyString = function getScheduleFrequencyString(schedule) {
	    return i18n(TransferFrequencyMessage[schedule.transferFrequency]);
	  };
	
	  var getScheduleEndingString = function getScheduleEndingString(schedule) {
	    return RecurrenceEndingString[schedule.end](schedule);
	  };
	
	  var getScheduleStartDateString = function getScheduleStartDateString(schedule) {
	    return isToday(schedule.startDate) ? i18n('message.payment.schedule.today') : 'on ' + dateFilter(schedule.startDate, 'mediumDate');
	  };
	
	  var isRecurring = function isRecurring(schedule) {
	    return schedule.transferFrequency !== TransferFrequency.ONCE;
	  };
	
	  return {
	    /**
	     * @description
	     * Returns the amount of the given account that should be displayed.
	     *
	     * @name Helpers#getAccountDisplayAmount
	     * @type {function}
	     *
	     * @param {module:widget-bbm-initiate-payment-ng.AccountView} account Account to display
	     * @returns {string}
	     */
	    getAccountDisplayAmount: function getAccountDisplayAmount(account) {
	      return account.primaryValue || account.amount;
	    },
	
	    /**
	     * @description
	     * Returns a summary of the given payment schedule as a string.
	     *
	     * @name Helpers#getScheduleSummary
	     * @type {function}
	     *
	     * @param {Schedule} schedule
	     * @returns {string}
	     */
	    getScheduleSummary: function getScheduleSummary(schedule) {
	      if (!schedule) return '';
	
	      var startingFrom = i18n('message.payment.schedule.startingFrom');
	
	      var startDate = getScheduleStartDateString(schedule);
	      var frequency = getScheduleFrequencyString(schedule);
	      var ending = getScheduleEndingString(schedule);
	
	      return isRecurring(schedule) ? frequency + ', ' + startingFrom + ' ' + startDate + ', ' + ending : frequency + ', ' + startDate;
	    }
	  };
	};

/***/ })

/******/ })
});
;
//# sourceMappingURL=ext-bbm-initiate-payment-review-ng.js.map