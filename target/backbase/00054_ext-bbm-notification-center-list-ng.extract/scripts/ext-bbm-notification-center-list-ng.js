(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("ui-bb-i18n-ng"), require("ui-bb-date-label-filter-ng"), require("ui-bbm-scroll-ng"));
	else if(typeof define === 'function' && define.amd)
		define("ext-bbm-notification-center-list-ng", ["ui-bb-i18n-ng", "ui-bb-date-label-filter-ng", "ui-bbm-scroll-ng"], factory);
	else if(typeof exports === 'object')
		exports["ext-bbm-notification-center-list-ng"] = factory(require("ui-bb-i18n-ng"), require("ui-bb-date-label-filter-ng"), require("ui-bbm-scroll-ng"));
	else
		root["ext-bbm-notification-center-list-ng"] = factory(root["ui-bb-i18n-ng"], root["ui-bb-date-label-filter-ng"], root["ui-bbm-scroll-ng"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_4__, __WEBPACK_EXTERNAL_MODULE_5__, __WEBPACK_EXTERNAL_MODULE_30__) {
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

	module.exports = __webpack_require__(29);

/***/ }),

/***/ 4:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_4__;

/***/ }),

/***/ 5:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_5__;

/***/ }),

/***/ 29:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.dependencyKeys = exports.helpers = undefined;
	
	var _uiBbI18nNg = __webpack_require__(4);
	
	var _uiBbI18nNg2 = _interopRequireDefault(_uiBbI18nNg);
	
	var _uiBbDateLabelFilterNg = __webpack_require__(5);
	
	var _uiBbDateLabelFilterNg2 = _interopRequireDefault(_uiBbDateLabelFilterNg);
	
	var _uiBbmScrollNg = __webpack_require__(30);
	
	var _uiBbmScrollNg2 = _interopRequireDefault(_uiBbmScrollNg);
	
	var _helpers = __webpack_require__(31);
	
	var _helpers2 = _interopRequireDefault(_helpers);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * @module ext-bbm-notification-center-list-ng
	 *
	 * @description
	 * Mobile extension for a notiication center list.
	 *
	 * @example
	 * <!-- Contact widget model.xml -->
	 * <property name="extension" viewHint="text-input,admin">
	 *   <value type="string">ext-bbm-notification-list-ng</value>
	 * </property>
	 */
	var helpers = exports.helpers = _helpers2.default;
	
	var dependencyKeys = exports.dependencyKeys = [_uiBbI18nNg2.default, _uiBbDateLabelFilterNg2.default, _uiBbmScrollNg2.default];

/***/ }),

/***/ 30:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_30__;

/***/ }),

/***/ 31:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _DateLabelKey;
	
	var _uiBbDateLabelFilterNg = __webpack_require__(5);
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	var LevelIconClass = {
	  ALERT: 'fa-exclamation-circle',
	  WARNING: 'fa-exclamation-triangle',
	  INFO: 'fa-info-circle',
	  SUCCESS: 'fa-check-circle'
	};
	
	var DateLabelKey = (_DateLabelKey = {}, _defineProperty(_DateLabelKey, _uiBbDateLabelFilterNg.TimePeriod.NOW, 'calendar.label.now'), _defineProperty(_DateLabelKey, _uiBbDateLabelFilterNg.TimePeriod.TODAY, 'calendar.label.today'), _defineProperty(_DateLabelKey, _uiBbDateLabelFilterNg.TimePeriod.YESTERDAY, 'calendar.label.yesterday'), _DateLabelKey);
	
	/**
	 * @description
	 * Helpers for ext-bbm-notification-center-list-ng
	 *
	 * @name Helpers
	 * @type {Object}
	 */
	
	exports.default = function (_ref) {
	  var $filter = _ref.$filter;
	
	  /**
	   * The standard ISO-8601 supports the following formats for time offsets:
	   * ±[hh]:[mm], ±[hh][mm], or ±[hh]
	   * However iOS does support only ±[hh]:[mm] format.
	   * Thus we make sure that the given date string has the following
	   * variation of the ISO-8601 standard:
	   * "YYYY-MM-DDThh:mm:ss.SSS±hh:mm"
	   * @name normalizeDate
	   * @type {function}
	   *
	   * @param dateStr
	   * @inner
	   */
	  var normalizeDate = function normalizeDate(dateStr) {
	    var filteredDate = $filter('date')(dateStr, 'yyyy-MM-ddTHH:mm:ss.sssZ');
	    return filteredDate.replace(/(\d{2}):?(\d{2})$/, '$1:$2');
	  };
	
	  /**
	   * @description
	   * Returns CSS class for icon according to the given level.
	   *
	   * @name Helpers#getLevelIcon
	   * @type {function}
	   *
	   * @param {string} level Notification level
	   * @return {string}
	   */
	  var getLevelIcon = function getLevelIcon(level) {
	    return LevelIconClass[level];
	  };
	
	  /**
	   * @description
	   * Returns a date label for the given notification.
	   *
	   * @name Helpers#getDateLabel
	   * @type {function}
	   *
	   * @param {module:model-bb-notifications-ng.Notification} notification
	   * @return {string}
	   */
	  var getDateLabel = function getDateLabel(notification) {
	    var date = normalizeDate(notification.createdOn);
	    var labelKey = void 0;
	    var resultDateLabel = void 0;
	
	    if (!notification.isOpen) {
	      labelKey = DateLabelKey[$filter('dateLabel')(date)];
	      if (labelKey) {
	        if (labelKey === DateLabelKey[_uiBbDateLabelFilterNg.TimePeriod.NOW]) {
	          resultDateLabel = $filter('i18n')(labelKey);
	        } else {
	          resultDateLabel = $filter('i18n')(labelKey) + $filter('i18n')('calendar.label.at') + $filter('date')(date, 'hh:mm');
	        }
	      }
	    }
	
	    return labelKey ? resultDateLabel : $filter('date')(date, 'd MMMM yyyy');
	  };
	
	  /**
	   * @description
	   * Checks if there are notifications.
	   *
	   * @name Helpers#hasNotifications
	   * @type {function}
	   *
	   * @param {module:widget-bbm-notification-center-ng.ListController} ctrl
	   * @return {boolean}
	   */
	  var hasNotifications = function hasNotifications(ctrl) {
	    return Boolean(ctrl.state.notifications.data && ctrl.state.notifications.data.length);
	  };
	
	  /**
	   * @description
	   * Checks for the loading state.
	   *
	   * @name Helpers#showLoadingState
	   * @type {function}
	   *
	   * @param {module:widget-bbm-notification-center-ng.ListController} ctrl
	   * @return {boolean}
	   */
	  var showLoadingState = function showLoadingState(ctrl) {
	    return ctrl.state.notifications.loading && !hasNotifications(ctrl);
	  };
	
	  /**
	   * @description
	   * Checks for the load more's loading state.
	   *
	   * @name Helpers#showLoadMoreLoading
	   * @type {function}
	   *
	   * @param {module:widget-bbm-notification-center-ng.ListController} ctrl
	   * @return {boolean}
	   */
	  var showLoadMoreLoading = function showLoadMoreLoading(ctrl) {
	    return ctrl.state.notifications.loading && hasNotifications(ctrl);
	  };
	
	  /**
	   * @description
	   * Checks for the load more states.
	   *
	   * @name Helpers#showLoadMore
	   * @type {function}
	   *
	   * @param {module:widget-bbm-notification-center-ng.ListController} ctrl
	   * @return {boolean}
	   */
	  var showLoadMore = function showLoadMore(ctrl) {
	    return showLoadMoreLoading(ctrl);
	  };
	
	  /**
	   * @description
	   * Checks for the error state.
	   *
	   * @name Helpers#showErrorState
	   * @type {function}
	   *
	   * @param {module:widget-bbm-notification-center-ng.ListController} ctrl
	   * @return {boolean}
	   */
	  var showErrorState = function showErrorState(ctrl) {
	    return ctrl.state.notifications.error && !ctrl.state.loading && !hasNotifications(ctrl);
	  };
	
	  /**
	   * @description
	   * Checks for the empty state.
	   *
	   * @name Helpers#showEmptyState
	   * @type {function}
	   *
	   * @param {module:widget-bbm-notification-center-ng.ListController} ctrl
	   * @return {boolean}
	   */
	  var showEmptyState = function showEmptyState(ctrl) {
	    return Boolean(ctrl.state.notifications.data && !ctrl.state.notifications.data.length) && !ctrl.state.notifications.error && !ctrl.state.loading;
	  };
	
	  return {
	    getLevelIcon: getLevelIcon,
	    getDateLabel: getDateLabel,
	    hasNotifications: hasNotifications,
	    showLoadingState: showLoadingState,
	    showErrorState: showErrorState,
	    showEmptyState: showEmptyState,
	    showLoadMore: showLoadMore,
	    showLoadMoreLoading: showLoadMoreLoading
	  };
	};

/***/ })

/******/ })
});
;
//# sourceMappingURL=ext-bbm-notification-center-list-ng.js.map