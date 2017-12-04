(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vendor-bb-angular-ng-aria"), require("ui-bb-i18n-ng"), require("ui-bb-date-label-filter-ng"), require("ui-bb-message-ng"), require("vendor-bb-uib-alert"));
	else if(typeof define === 'function' && define.amd)
		define("ext-bb-notification-popups-ng", ["vendor-bb-angular-ng-aria", "ui-bb-i18n-ng", "ui-bb-date-label-filter-ng", "ui-bb-message-ng", "vendor-bb-uib-alert"], factory);
	else if(typeof exports === 'object')
		exports["ext-bb-notification-popups-ng"] = factory(require("vendor-bb-angular-ng-aria"), require("ui-bb-i18n-ng"), require("ui-bb-date-label-filter-ng"), require("ui-bb-message-ng"), require("vendor-bb-uib-alert"));
	else
		root["ext-bb-notification-popups-ng"] = factory(root["vendor-bb-angular-ng-aria"], root["ui-bb-i18n-ng"], root["ui-bb-date-label-filter-ng"], root["ui-bb-message-ng"], root["vendor-bb-uib-alert"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_3__, __WEBPACK_EXTERNAL_MODULE_4__, __WEBPACK_EXTERNAL_MODULE_5__, __WEBPACK_EXTERNAL_MODULE_6__, __WEBPACK_EXTERNAL_MODULE_22__) {
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
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.dependencyKeys = exports.helpers = exports.hooks = undefined;
	
	var _vendorBbUibAlert = __webpack_require__(22);
	
	var _vendorBbUibAlert2 = _interopRequireDefault(_vendorBbUibAlert);
	
	var _vendorBbAngularNgAria = __webpack_require__(3);
	
	var _vendorBbAngularNgAria2 = _interopRequireDefault(_vendorBbAngularNgAria);
	
	var _uiBbMessageNg = __webpack_require__(6);
	
	var _uiBbMessageNg2 = _interopRequireDefault(_uiBbMessageNg);
	
	var _uiBbDateLabelFilterNg = __webpack_require__(5);
	
	var _uiBbDateLabelFilterNg2 = _interopRequireDefault(_uiBbDateLabelFilterNg);
	
	var _uiBbI18nNg = __webpack_require__(4);
	
	var _uiBbI18nNg2 = _interopRequireDefault(_uiBbI18nNg);
	
	var _helpers = __webpack_require__(23);
	
	var _helpers2 = _interopRequireDefault(_helpers);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * @module ext-bb-notification-popups-ng
	 *
	 * @description
	 * Default extension for notification popups.
	 *
	 * @example
	 * <!-- widget's model.xml -->
	 * <property name="extension" viewHint="text-input,admin">
	 *  <value type="string">ext-bb-notification-popups-ng</value>
	 * </property>
	 */
	var hooks = exports.hooks = {};
	
	var helpers = exports.helpers = _helpers2.default;
	
	var dependencyKeys = exports.dependencyKeys = [_vendorBbAngularNgAria2.default, _uiBbI18nNg2.default, _vendorBbUibAlert2.default, _uiBbMessageNg2.default, _uiBbDateLabelFilterNg2.default];

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
	
	var _dateLabelKeys;
	
	var _uiBbDateLabelFilterNg = __webpack_require__(5);
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	/**
	 * @description
	 * Date label enum
	 *
	 * @name DateLabelKey
	 * @enum {string}
	 */
	var dateLabelKeys = (_dateLabelKeys = {}, _defineProperty(_dateLabelKeys, _uiBbDateLabelFilterNg.TimePeriod.NOW, 'calendar.label.now'), _defineProperty(_dateLabelKeys, _uiBbDateLabelFilterNg.TimePeriod.TODAY, 'calendar.label.today'), _defineProperty(_dateLabelKeys, _uiBbDateLabelFilterNg.TimePeriod.YESTERDAY, 'calendar.label.yesterday'), _dateLabelKeys);
	
	/**
	 * @description
	 * Level classes enum
	 *
	 * @name levelIconClass
	 * @enum {string}
	 */
	var levelIconClass = {
	  ALERT: 'fa-exclamation-circle text-danger',
	  WARNING: 'fa-exclamation-triangle text-warning',
	  INFO: 'fa-info-circle text-info',
	  SUCCESS: 'fa-check-circle text-success'
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
	  return {
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
	    getLevelIcon: function getLevelIcon(level) {
	      return levelIconClass[level];
	    },
	    /**
	     * @name getDateLabel
	     * @type {function}
	     *
	     * @description
	     * Helper to get date label
	     *
	     * @param {object} item Notification object
	     *
	     * @returns {string} Date label
	     */
	    getDateLabel: function getDateLabel(item) {
	      var date = item.validFrom || item.createdOn;
	      var labelKey = void 0;
	      if (!item.isOpen) {
	        labelKey = dateLabelKeys[$filter('dateLabel')(date)];
	      }
	      return labelKey ? $filter('i18n')(labelKey) : $filter('date')(date, 'dd.MM.yyyy');
	    },
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
	    getVisibleLinesLength: function getVisibleLinesLength(item) {
	      return item.title ? LinesLength.HAS_TITLE : LinesLength.HAS_NOT_TITLE;
	    }
	  };
	};

/***/ })
/******/ ])
});
;
//# sourceMappingURL=ext-bb-notification-popups-ng.js.map