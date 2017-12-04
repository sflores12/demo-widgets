(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vendor-bb-angular"));
	else if(typeof define === 'function' && define.amd)
		define("ui-bb-date-label-filter-ng", ["vendor-bb-angular"], factory);
	else if(typeof exports === 'object')
		exports["ui-bb-date-label-filter-ng"] = factory(require("vendor-bb-angular"));
	else
		root["ui-bb-date-label-filter-ng"] = factory(root["vendor-bb-angular"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__) {
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

	module.exports = __webpack_require__(58);

/***/ }),

/***/ 2:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ }),

/***/ 58:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.TimePeriod = undefined;
	
	var _constants = __webpack_require__(59);
	
	Object.defineProperty(exports, 'TimePeriod', {
	  enumerable: true,
	  get: function get() {
	    return _constants.TimePeriod;
	  }
	});
	
	var _vendorBbAngular = __webpack_require__(2);
	
	var _vendorBbAngular2 = _interopRequireDefault(_vendorBbAngular);
	
	var _dateLabelFilter = __webpack_require__(60);
	
	var _dateLabelFilter2 = _interopRequireDefault(_dateLabelFilter);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = _vendorBbAngular2.default.module('ui-bb-date-label-filter-ng', [])
	
	/**
	 * Converts valid date(any valid value for Date constructor) to date label string like:
	 * "now", "today", "yesterday"
	 *
	 * @name dateLabelFilter
	 *
	 * @example
	 * // file: controller.js
	 * function MyController() {
	 *   const $ctrl = this;
	 *   $ctrl.createdOn = Date.now();
	 * }
	 *
	 * // file: template.ng.html
	 * <div ng-controller="MyController as $ctrl">
	 *   <p>Created: {{ $ctrl.createdOn | dateLabel }}</p>
	 * </div>
	 *
	 * // Result:
	 * <div>
	 *   <p>Created: now</p>
	 * </div>
	 *
	 * @type {function}
	 * @param date {string|number|Date} any valid value for Date constructor
	 * @returns {?string} Date label string, or null if unable to convert
	 */
	.filter('dateLabel', function () {
	  return _dateLabelFilter2.default;
	}).name;

/***/ }),

/***/ 59:
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/* eslint import/prefer-default-export: "off" */
	/**
	 * @description
	 * date labels enum
	 *
	 * @name TimePeriod
	 * @type {object}
	 */
	var TimePeriod = exports.TimePeriod = {
	  NOW: 'now',
	  TODAY: 'today',
	  YESTERDAY: 'yesterday'
	};

/***/ }),

/***/ 60:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _constants = __webpack_require__(59);
	
	var getLabels = function getLabels() {
	  var NOW_OFFSET = -1000 * 60 * 15; // 15 minutes
	  var yesterday = new Date();
	
	  yesterday.setDate(yesterday.getDate() - 1);
	  yesterday.setHours(0, 0, 0, 0);
	
	  return [{
	    label: _constants.TimePeriod.NOW,
	    date: new Date().setMilliseconds(NOW_OFFSET)
	  }, {
	    label: _constants.TimePeriod.TODAY,
	    date: new Date().setHours(0, 0, 0, 0)
	  }, {
	    label: _constants.TimePeriod.YESTERDAY,
	    date: yesterday.getTime()
	  }];
	};
	
	/**
	 * Convert valid date to date label
	 *
	 * @name ui-bb-date-label-filter-ng.dateLabelFilter
	 * @type {function}
	 * @param date {string|number|Date} Date string or timestamp
	 * @returns {string} Date label or date that was passed initially
	 */
	var dateLabelFilter = function dateLabelFilter(date) {
	  var parsed = Number.isInteger(date) ? date : Date.parse(date);
	  if (isNaN(parsed) || parsed > Date.now()) {
	    return date;
	  }
	
	  var labels = getLabels();
	  var dateLabel = labels.find(function (label) {
	    return parsed >= label.date;
	  });
	  return dateLabel ? dateLabel.label : date;
	};
	
	exports.default = dateLabelFilter;

/***/ })

/******/ })
});
;
//# sourceMappingURL=ui-bb-date-label-filter-ng.js.map