(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("ui-bb-i18n-ng"), require("ui-bb-date-label-filter-ng"), require("ui-bb-list-ng"), require("lib-bbm-plugins"));
	else if(typeof define === 'function' && define.amd)
		define("ext-bbm-notification-center-details-ng", ["ui-bb-i18n-ng", "ui-bb-date-label-filter-ng", "ui-bb-list-ng", "lib-bbm-plugins"], factory);
	else if(typeof exports === 'object')
		exports["ext-bbm-notification-center-details-ng"] = factory(require("ui-bb-i18n-ng"), require("ui-bb-date-label-filter-ng"), require("ui-bb-list-ng"), require("lib-bbm-plugins"));
	else
		root["ext-bbm-notification-center-details-ng"] = factory(root["ui-bb-i18n-ng"], root["ui-bb-date-label-filter-ng"], root["ui-bb-list-ng"], root["lib-bbm-plugins"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_4__, __WEBPACK_EXTERNAL_MODULE_5__, __WEBPACK_EXTERNAL_MODULE_25__, __WEBPACK_EXTERNAL_MODULE_27__) {
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

	module.exports = __webpack_require__(24);

/***/ }),

/***/ 4:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_4__;

/***/ }),

/***/ 5:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_5__;

/***/ }),

/***/ 24:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.dependencyKeys = exports.helpers = exports.events = undefined;
	
	var _uiBbI18nNg = __webpack_require__(4);
	
	var _uiBbI18nNg2 = _interopRequireDefault(_uiBbI18nNg);
	
	var _uiBbDateLabelFilterNg = __webpack_require__(5);
	
	var _uiBbDateLabelFilterNg2 = _interopRequireDefault(_uiBbDateLabelFilterNg);
	
	var _uiBbListNg = __webpack_require__(25);
	
	var _uiBbListNg2 = _interopRequireDefault(_uiBbListNg);
	
	var _events = __webpack_require__(26);
	
	var _events2 = _interopRequireDefault(_events);
	
	var _helpers = __webpack_require__(28);
	
	var _helpers2 = _interopRequireDefault(_helpers);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var events = exports.events = _events2.default; /**
	                                                 * @module ext-bbm-notification-center-details-ng
	                                                 *
	                                                 * @description
	                                                 * Mobile extension for a notiication center details.
	                                                 *
	                                                 * @example
	                                                 * <!-- Contact widget model.xml -->
	                                                 * <property name="extension" viewHint="text-input,admin">
	                                                 *   <value type="string">ext-bbm-notification-details-ng</value>
	                                                 * </property>
	                                                 */
	var helpers = exports.helpers = _helpers2.default;
	
	var dependencyKeys = exports.dependencyKeys = [_uiBbI18nNg2.default, _uiBbDateLabelFilterNg2.default, _uiBbListNg2.default];

/***/ }),

/***/ 25:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_25__;

/***/ }),

/***/ 26:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _libBbmPlugins = __webpack_require__(27);
	
	var _libBbmPlugins2 = _interopRequireDefault(_libBbmPlugins);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; } // Temporary disable capsInNew until it fixed in lib-bbm-plugins
	/* eslint new-cap: ["error", { "capIsNew": false }] */
	
	
	var Event = {
	  NOTIFICATION_DELETE_START: 'bb.event.notification.delete.start',
	  NOTIFICATION_DELETE_DONE: 'bb.event.notification.delete.done',
	  NOTIFICATION_DELETE_FAILED: 'bb.event.notification.delete.failed'
	};
	
	exports.default = function (_ref) {
	  var _ref2;
	
	  var $filter = _ref.$filter;
	
	  var i18n = $filter('i18n');
	
	  return _ref2 = {}, _defineProperty(_ref2, Event.NOTIFICATION_DELETE_START, function () {
	    _libBbmPlugins2.default.ActivityIndicator().show(i18n('message.notification.delete.start'));
	  }), _defineProperty(_ref2, Event.NOTIFICATION_DELETE_DONE, function () {
	    _libBbmPlugins2.default.ActivityIndicator().hide();
	    _libBbmPlugins2.default.Snackbar().success(i18n('message.notification.delete.done'));
	  }), _defineProperty(_ref2, Event.NOTIFICATION_DELETE_FAILED, function () {
	    _libBbmPlugins2.default.ActivityIndicator().hide();
	    _libBbmPlugins2.default.Snackbar().error(i18n('message.notification.delete.failed'));
	  }), _ref2;
	};

/***/ }),

/***/ 27:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_27__;

/***/ }),

/***/ 28:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _dateLabelKeys;
	
	var _uiBbDateLabelFilterNg = __webpack_require__(5);
	
	var _libBbmPlugins = __webpack_require__(27);
	
	var _libBbmPlugins2 = _interopRequireDefault(_libBbmPlugins);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; } // Temporary disable capsInNew until it fixed in lib-bbm-plugins
	/* eslint new-cap: ["error", { "capIsNew": false }] */
	/* global window */
	
	/**
	 * @description
	 * Helpers for ext-bbm-notification-center-details-ng
	 *
	 * @name Helpers
	 * @type {Object}
	 */
	
	var levelIconClass = {
	  ALERT: 'fa-exclamation-circle',
	  WARNING: 'fa-exclamation-triangle',
	  INFO: 'fa-info-circle',
	  SUCCESS: 'fa-check-circle'
	};
	
	var dateLabelKeys = (_dateLabelKeys = {}, _defineProperty(_dateLabelKeys, _uiBbDateLabelFilterNg.TimePeriod.NOW, 'calendar.label.now'), _defineProperty(_dateLabelKeys, _uiBbDateLabelFilterNg.TimePeriod.TODAY, 'calendar.label.today'), _defineProperty(_dateLabelKeys, _uiBbDateLabelFilterNg.TimePeriod.YESTERDAY, 'calendar.label.yesterday'), _dateLabelKeys);
	
	var ToolbarButtonEvent = {
	  DELETE: 'bb.action.notification.delete',
	  CHANGE_READ: 'bb.action.notification.read.change'
	};
	
	/**
	 * Confirm dialog button types
	 * TODO: Read them from the plugin
	 * @type {Object}
	 */
	var ButtonType = {
	  POSITIVE: 'POSITIVE',
	  NEGATIVE: 'NEGATIVE'
	};
	
	/**
	 * Confirm dialog actions
	 * @type {Object}
	 */
	var ConfirmAction = {
	  CANCEL: 'cancel',
	  CONFIRM: 'confirm'
	};
	
	exports.default = function (_ref) {
	  var $filter = _ref.$filter;
	
	  var i18n = $filter('i18n');
	  /**
	   * The standard ISO-8601 supports the following formats for time offsets:
	   * ±[hh]:[mm], ±[hh][mm], or ±[hh]
	   * However iOS does support only ±[hh]:[mm] format.
	   * Thus we make sure that the given date string has the following
	   * variation of the ISO-8601 standard:
	   * "YYYY-MM-DDThh:mm:ss.SSS±hh:mm"
	   * @name normalizeDate
	   * @inner
	   * @param dateStr
	   */
	  var normalizeDate = function normalizeDate(dateStr) {
	    var filteredDate = $filter('date')(dateStr, 'yyyy-MM-ddTHH:mm:ss.sssZ');
	    return filteredDate.replace(/(\d{2}):?(\d{2})$/, '$1:$2');
	  };
	
	  return {
	    /**
	     * @description
	     * Returns CSS class for icon according to the given level.
	     *
	     * @name Helpers#getLevelIcon
	     * @type {function}
	     *
	     * @param {string} level Notification level
	     * @returns {string}
	     */
	    getLevelIcon: function getLevelIcon(level) {
	      return levelIconClass[level];
	    },
	
	    /**
	     * @description
	     * Returns a date label for the given notification.
	     *
	     * @name Helpers#getDateLabel
	     * @type {function}
	     *
	     * @param {module:model-bb-notifications-ng.Notification} notification Notification
	     * @returns {string}
	     */
	    getDateLabel: function getDateLabel(notification) {
	      if (!notification) {
	        return '';
	      }
	
	      var date = normalizeDate(notification.createdOn);
	
	      var labelKey = void 0;
	      var resultDateLabel = void 0;
	
	      if (!notification.isOpen) {
	        var dateType = $filter('dateLabel')(date);
	        labelKey = dateLabelKeys[dateType];
	      }
	
	      resultDateLabel = labelKey ? $filter('i18n')(labelKey) : $filter('date')(date, 'd MMMM yyyy');
	
	      if (labelKey !== dateLabelKeys[_uiBbDateLabelFilterNg.TimePeriod.NOW]) {
	        resultDateLabel += $filter('i18n')('calendar.label.at') + $filter('date')(date, 'hh:mm');
	      }
	
	      return resultDateLabel;
	    },
	
	    /**
	     * @description
	     * Init lifecycle hook. Adds event listeners for native toolbar buttons.
	     *
	     * @name Helpers#onInit
	     * @type {function}
	     *
	     * @param {module:widget-bbm-notification-center-ng.DetailsController} ctrl
	     *   DetailsController instance.
	     */
	    onInit: function onInit(ctrl) {
	      window.addEventListener(ToolbarButtonEvent.CHANGE_READ, function () {
	        var notificationId = ctrl.state.selectedNotification.id;
	        ctrl.changeNotificationRead(notificationId);
	      });
	
	      window.addEventListener(ToolbarButtonEvent.DELETE, function () {
	        var confirmOptions = {
	          title: i18n('message.notification.delete.confirm.title'),
	          message: i18n('message.notification.delete.confirm.message'),
	          buttons: [{
	            type: ButtonType.POSITIVE,
	            text: i18n('message.notification.delete.confirm.button.ok'),
	            callbackFn: ConfirmAction.CONFIRM
	          }, {
	            type: ButtonType.NEGATIVE,
	            text: i18n('message.notification.delete.confirm.button.cancel'),
	            callbackFn: ConfirmAction.CANCEL
	          }]
	        };
	
	        _libBbmPlugins2.default.AlertDialog().show(confirmOptions).then(function (response) {
	          return response.callback === ConfirmAction.CONFIRM;
	        }).then(function (isConfirmed) {
	          if (isConfirmed) {
	            ctrl.deleteNotification();
	          }
	        });
	      });
	    }
	  };
	};

/***/ })

/******/ })
});
;
//# sourceMappingURL=ext-bbm-notification-center-details-ng.js.map