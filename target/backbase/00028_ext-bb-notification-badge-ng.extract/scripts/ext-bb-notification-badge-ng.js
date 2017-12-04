(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vendor-bb-uib-popover"), require("vendor-bb-angular-ng-aria"), require("ui-bb-i18n-ng"), require("ui-bb-date-label-filter-ng"), require("ui-bb-message-ng"), require("ui-bb-load-more-ng"), require("ui-bb-substitute-error-ng"), require("ui-bb-loading-overlay-ng"), require("ui-bb-confirm-ng"));
	else if(typeof define === 'function' && define.amd)
		define("ext-bb-notification-badge-ng", ["vendor-bb-uib-popover", "vendor-bb-angular-ng-aria", "ui-bb-i18n-ng", "ui-bb-date-label-filter-ng", "ui-bb-message-ng", "ui-bb-load-more-ng", "ui-bb-substitute-error-ng", "ui-bb-loading-overlay-ng", "ui-bb-confirm-ng"], factory);
	else if(typeof exports === 'object')
		exports["ext-bb-notification-badge-ng"] = factory(require("vendor-bb-uib-popover"), require("vendor-bb-angular-ng-aria"), require("ui-bb-i18n-ng"), require("ui-bb-date-label-filter-ng"), require("ui-bb-message-ng"), require("ui-bb-load-more-ng"), require("ui-bb-substitute-error-ng"), require("ui-bb-loading-overlay-ng"), require("ui-bb-confirm-ng"));
	else
		root["ext-bb-notification-badge-ng"] = factory(root["vendor-bb-uib-popover"], root["vendor-bb-angular-ng-aria"], root["ui-bb-i18n-ng"], root["ui-bb-date-label-filter-ng"], root["ui-bb-message-ng"], root["ui-bb-load-more-ng"], root["ui-bb-substitute-error-ng"], root["ui-bb-loading-overlay-ng"], root["ui-bb-confirm-ng"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_3__, __WEBPACK_EXTERNAL_MODULE_4__, __WEBPACK_EXTERNAL_MODULE_5__, __WEBPACK_EXTERNAL_MODULE_6__, __WEBPACK_EXTERNAL_MODULE_7__, __WEBPACK_EXTERNAL_MODULE_8__, __WEBPACK_EXTERNAL_MODULE_9__, __WEBPACK_EXTERNAL_MODULE_10__) {
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
	exports.dependencyKeys = exports.helpers = exports.hooks = undefined;
	
	var _vendorBbUibPopover = __webpack_require__(2);
	
	var _vendorBbUibPopover2 = _interopRequireDefault(_vendorBbUibPopover);
	
	var _vendorBbAngularNgAria = __webpack_require__(3);
	
	var _vendorBbAngularNgAria2 = _interopRequireDefault(_vendorBbAngularNgAria);
	
	var _uiBbI18nNg = __webpack_require__(4);
	
	var _uiBbI18nNg2 = _interopRequireDefault(_uiBbI18nNg);
	
	var _uiBbDateLabelFilterNg = __webpack_require__(5);
	
	var _uiBbDateLabelFilterNg2 = _interopRequireDefault(_uiBbDateLabelFilterNg);
	
	var _uiBbMessageNg = __webpack_require__(6);
	
	var _uiBbMessageNg2 = _interopRequireDefault(_uiBbMessageNg);
	
	var _uiBbLoadMoreNg = __webpack_require__(7);
	
	var _uiBbLoadMoreNg2 = _interopRequireDefault(_uiBbLoadMoreNg);
	
	var _uiBbSubstituteErrorNg = __webpack_require__(8);
	
	var _uiBbSubstituteErrorNg2 = _interopRequireDefault(_uiBbSubstituteErrorNg);
	
	var _uiBbLoadingOverlayNg = __webpack_require__(9);
	
	var _uiBbLoadingOverlayNg2 = _interopRequireDefault(_uiBbLoadingOverlayNg);
	
	var _uiBbConfirmNg = __webpack_require__(10);
	
	var _uiBbConfirmNg2 = _interopRequireDefault(_uiBbConfirmNg);
	
	var _helpers = __webpack_require__(11);
	
	var _helpers2 = _interopRequireDefault(_helpers);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * @module ext-bb-notification-badge-ng
	 *
	 * @description
	 * Default extension for notifications badge.
	 *
	 * @example
	 * <!-- widget's model.xml -->
	 * <property name="extension" viewHint="text-input,admin">
	 *  <value type="string">ext-bb-notification-badge-ng</value>
	 * </property>
	 */
	var hooks = exports.hooks = {};
	var helpers = exports.helpers = _helpers2.default;
	
	var dependencyKeys = exports.dependencyKeys = [_vendorBbUibPopover2.default, _uiBbI18nNg2.default, _uiBbDateLabelFilterNg2.default, _uiBbMessageNg2.default, _uiBbLoadingOverlayNg2.default, _uiBbLoadMoreNg2.default, _uiBbSubstituteErrorNg2.default, _vendorBbAngularNgAria2.default, _uiBbConfirmNg2.default];

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
	
	var _DateLabelKey;
	
	var _uiBbDateLabelFilterNg = __webpack_require__(5);
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	/**
	 * @description
	 * Date label enum
	 *
	 * @name DateLabelKey
	 * @enum {string}
	 */
	var DateLabelKey = (_DateLabelKey = {}, _defineProperty(_DateLabelKey, _uiBbDateLabelFilterNg.TimePeriod.NOW, 'calendar.label.now'), _defineProperty(_DateLabelKey, _uiBbDateLabelFilterNg.TimePeriod.TODAY, 'calendar.label.today'), _defineProperty(_DateLabelKey, _uiBbDateLabelFilterNg.TimePeriod.YESTERDAY, 'calendar.label.yesterday'), _DateLabelKey);
	
	/**
	 * @description
	 * Level objects enum
	 *
	 * @name Level
	 * @enum {object}
	 */
	var Level = {
	  ALERT: {
	    icon: 'fa-exclamation-circle text-danger',
	    suffix: 'alert'
	  },
	  WARNING: {
	    icon: 'fa-exclamation-triangle text-warning',
	    suffix: 'warning'
	  },
	  INFO: {
	    icon: 'fa-info-circle text-info',
	    suffix: 'info'
	  },
	  SUCCESS: {
	    icon: 'fa-check-circle text-success',
	    suffix: 'success'
	  }
	};
	
	/**
	 * @description
	 * Lines length enum
	 *
	 * @name LinesLength
	 * @enum {number}
	 */
	var LinesLength = {
	  HAS_TITLE: 1,
	  HAS_NOT_TITLE: 2
	};
	
	exports.default = function (_ref) {
	  var $filter = _ref.$filter;
	
	  var dateFilter = $filter('date');
	  var dateLabelFilter = $filter('dateLabel');
	  var i18nFilter = $filter('i18n');
	
	  /**
	   * @name getLevelIcon
	   * @type {function}
	   *
	   * @description
	   * Helper to get severity level icon
	   *
	   * @param {string} level severity level
	   *
	   * @returns {string} Severity level icon class
	   */
	  var getLevelIcon = function getLevelIcon(level) {
	    return Level[level].icon;
	  };
	
	  /**
	   * @name getDateLabel
	   * @type {function}
	   *
	   * @description
	   * Helper to get date label
	   *
	   * @param {object} item Notification object
	   * @param {?object} format Date format
	   *
	   * @returns {string} Date label
	   */
	  var getDateLabel = function getDateLabel(item) {
	    var format = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'shortDate';
	
	    var date = item.validFrom || item.createdOn;
	    var labelKey = DateLabelKey[dateLabelFilter(date)];
	
	    return labelKey ? i18nFilter(labelKey) : dateFilter(date, format);
	  };
	
	  /**
	   * @name getFormattedDate
	   * @type {function}
	   *
	   * @description
	   * Helper to get date string
	   *
	   * @param {object} item Notification object
	   * @param {?object} format Date format
	   *
	   * @returns {string} Date string
	   */
	  var getFormattedDate = function getFormattedDate(item) {
	    var date = item.validFrom || item.createdOn;
	
	    return dateFilter(date, 'shortDate');
	  };
	
	  /**
	   * @name getLevelTitle
	   * @type {function}
	   *
	   * @description
	   * Helper to get severity level title
	   *
	   * @param {string} level severity level
	   *
	   * @returns {string} Severity level title
	   */
	  var getLevelTitle = function getLevelTitle(level) {
	    return i18nFilter('notification.level.' + Level[level].suffix + '.title');
	  };
	
	  /**
	   * @description
	   * Helper to get visible lines length
	   *
	   * @public
	   * @name getVisibleLinesLength
	   * @type {function}
	   * @param {object} item Notification object
	   *
	   * @returns {number} Visible lines length
	   */
	  var getVisibleLinesLength = function getVisibleLinesLength(item) {
	    return item.title ? LinesLength.HAS_TITLE : LinesLength.HAS_NOT_TITLE;
	  };
	
	  return {
	    getLevelIcon: getLevelIcon,
	    getDateLabel: getDateLabel,
	    getFormattedDate: getFormattedDate,
	    getLevelTitle: getLevelTitle,
	    getVisibleLinesLength: getVisibleLinesLength
	  };
	};

/***/ })
/******/ ])
});
;
//# sourceMappingURL=ext-bb-notification-badge-ng.js.map