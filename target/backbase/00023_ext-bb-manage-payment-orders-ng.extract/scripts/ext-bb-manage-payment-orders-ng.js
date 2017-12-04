(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vendor-bb-angular-ng-aria"), require("ui-bb-substitute-error-ng"), require("ui-bb-i18n-ng"), require("ui-bb-loading-overlay-ng"), require("ui-bb-loading-indicator-ng"), require("ui-bb-load-more-ng"), require("ui-bb-empty-state-ng"), require("ui-bb-date-label-filter-ng"));
	else if(typeof define === 'function' && define.amd)
		define("ext-bb-manage-payment-orders-ng", ["vendor-bb-angular-ng-aria", "ui-bb-substitute-error-ng", "ui-bb-i18n-ng", "ui-bb-loading-overlay-ng", "ui-bb-loading-indicator-ng", "ui-bb-load-more-ng", "ui-bb-empty-state-ng", "ui-bb-date-label-filter-ng"], factory);
	else if(typeof exports === 'object')
		exports["ext-bb-manage-payment-orders-ng"] = factory(require("vendor-bb-angular-ng-aria"), require("ui-bb-substitute-error-ng"), require("ui-bb-i18n-ng"), require("ui-bb-loading-overlay-ng"), require("ui-bb-loading-indicator-ng"), require("ui-bb-load-more-ng"), require("ui-bb-empty-state-ng"), require("ui-bb-date-label-filter-ng"));
	else
		root["ext-bb-manage-payment-orders-ng"] = factory(root["vendor-bb-angular-ng-aria"], root["ui-bb-substitute-error-ng"], root["ui-bb-i18n-ng"], root["ui-bb-loading-overlay-ng"], root["ui-bb-loading-indicator-ng"], root["ui-bb-load-more-ng"], root["ui-bb-empty-state-ng"], root["ui-bb-date-label-filter-ng"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_7__, __WEBPACK_EXTERNAL_MODULE_8__, __WEBPACK_EXTERNAL_MODULE_19__, __WEBPACK_EXTERNAL_MODULE_29__, __WEBPACK_EXTERNAL_MODULE_30__, __WEBPACK_EXTERNAL_MODULE_31__, __WEBPACK_EXTERNAL_MODULE_32__) {
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

	module.exports = __webpack_require__(28);

/***/ }),
/* 1 */,
/* 2 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ }),
/* 3 */,
/* 4 */,
/* 5 */,
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
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_19__;

/***/ }),
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.events = exports.hooks = exports.helpers = exports.dependencyKeys = undefined;
	
	var _vendorBbAngularNgAria = __webpack_require__(2);
	
	var _vendorBbAngularNgAria2 = _interopRequireDefault(_vendorBbAngularNgAria);
	
	var _uiBbI18nNg = __webpack_require__(8);
	
	var _uiBbI18nNg2 = _interopRequireDefault(_uiBbI18nNg);
	
	var _uiBbLoadingIndicatorNg = __webpack_require__(29);
	
	var _uiBbLoadingIndicatorNg2 = _interopRequireDefault(_uiBbLoadingIndicatorNg);
	
	var _uiBbSubstituteErrorNg = __webpack_require__(7);
	
	var _uiBbSubstituteErrorNg2 = _interopRequireDefault(_uiBbSubstituteErrorNg);
	
	var _uiBbLoadMoreNg = __webpack_require__(30);
	
	var _uiBbLoadMoreNg2 = _interopRequireDefault(_uiBbLoadMoreNg);
	
	var _uiBbLoadingOverlayNg = __webpack_require__(19);
	
	var _uiBbLoadingOverlayNg2 = _interopRequireDefault(_uiBbLoadingOverlayNg);
	
	var _uiBbEmptyStateNg = __webpack_require__(31);
	
	var _uiBbEmptyStateNg2 = _interopRequireDefault(_uiBbEmptyStateNg);
	
	var _uiBbDateLabelFilterNg = __webpack_require__(32);
	
	var _uiBbDateLabelFilterNg2 = _interopRequireDefault(_uiBbDateLabelFilterNg);
	
	var _hooks = __webpack_require__(33);
	
	var extHooks = _interopRequireWildcard(_hooks);
	
	var _helpers = __webpack_require__(35);
	
	var _helpers2 = _interopRequireDefault(_helpers);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * @module ext-bb-manage-payment-orders-ng
	 *
	 * @description
	 * Payment order overview extension.
	 *
	 * @example
	 * <!-- payment order widget model.xml -->
	 * <property name="extension" viewHint="text-input,admin">
	 *  <value type="string">ext-bb-manage-payment-orders-ng</value>
	 * </property>
	 *
	 */
	var dependencyKeys = exports.dependencyKeys = [_vendorBbAngularNgAria2.default, _uiBbI18nNg2.default, _uiBbLoadingIndicatorNg2.default, _uiBbSubstituteErrorNg2.default, _uiBbLoadMoreNg2.default, _uiBbLoadingOverlayNg2.default, _uiBbEmptyStateNg2.default, _uiBbDateLabelFilterNg2.default];
	
	var helpers = exports.helpers = _helpers2.default;
	
	var hooks = exports.hooks = extHooks;
	
	var events = exports.events = {};

/***/ }),
/* 29 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_29__;

/***/ }),
/* 30 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_30__;

/***/ }),
/* 31 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_31__;

/***/ }),
/* 32 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_32__;

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.processRequestParams = exports.processPaymentOrders = undefined;
	
	var _constants = __webpack_require__(34);
	
	var processPaymentOrders = exports.processPaymentOrders = function processPaymentOrders(paymentOrders) {
	  return paymentOrders.filter(function (paymentOrder) {
	    return _constants.Statuses.indexOf(paymentOrder.status) >= 0;
	  }).map(function (paymentOrder) {
	    return Object.assign({}, paymentOrder, { transactionInformation: paymentOrder.creditTransferTransactionInformation[0] });
	  }).reduce(function (groupedByDate, paymentOrder) {
	    var datesObject = groupedByDate;
	    // get only date part
	    var bookingDateObj = new Date(paymentOrder.requestedExecutionDate);
	    var date = bookingDateObj.toISOString().slice(0, 10);
	
	    if (datesObject[date]) {
	      var clearToAdd = true;
	
	      datesObject[date].forEach(function (element) {
	        if (element.id === paymentOrder.id) {
	          clearToAdd = false;
	        }
	      });
	
	      if (clearToAdd) {
	        datesObject[date].push(paymentOrder);
	      }
	    } else {
	      datesObject[date] = [paymentOrder];
	    }
	
	    return datesObject;
	  }, {});
	}; /* eslint-disable import/prefer-default-export */
	var processRequestParams = exports.processRequestParams = function processRequestParams(params) {
	  return Object.assign({}, params, {
	    orderBy: 'requestedExecutionDate'
	  });
	};

/***/ }),
/* 34 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	/**
	 * @description
	 * Date Format
	 *
	 * @name dateFormat
	 * @type {string}
	 */
	var dateFormat = exports.dateFormat = 'mediumDate';
	
	/**
	 * @description
	 * Date labels enum
	 *
	 * @name TimePeriod
	 * @type {object}
	 */
	var TimePeriod = exports.TimePeriod = {
	  now: 'date.label.now',
	  today: 'date.label.today',
	  yesterday: 'date.label.yesterday'
	};
	
	/**
	 * @description
	 * An array with the statuses, payments with which should be displayed.
	 *
	 * @name Statuses
	 * @type {Array}
	 */
	var Statuses = exports.Statuses = ['ENTERED', 'READY', 'ACCEPTED'];

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _constants = __webpack_require__(34);
	
	var helpers = function helpers(context) {
	  var i18nFilter = context.$filter('i18n');
	
	  var statusLabel = {
	    SINGLE: i18nFilter('payment.status.single'),
	    RECURRING: i18nFilter('payment.status.recurring')
	  };
	
	  return {
	    /**
	     * @description
	     * Returns either label like now, today or yesterday or the actual date
	     *
	     * @name dateLabel
	     * @type {function}
	     * @param {string} label date
	     *
	     * @returns {string}
	     */
	    dateLabel: function dateLabel(label) {
	      return i18nFilter(_constants.TimePeriod[label]) || label;
	    },
	    /**
	     * @description
	     * Contains translated strings of payment modes
	     *
	     * @name statusLabel
	     * @type {Object}
	     *
	     * @returns {string}
	     */
	    statusLabel: statusLabel
	  };
	};
	
	exports.default = helpers;

/***/ })
/******/ ])
});
;
//# sourceMappingURL=ext-bb-manage-payment-orders-ng.js.map