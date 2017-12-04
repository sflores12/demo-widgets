(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("ui-bb-i18n-ng"), require("ui-bbm-switch-ng"), require("ui-bbm-textfield-ng"), require("lib-bbm-plugins"));
	else if(typeof define === 'function' && define.amd)
		define("ext-bbm-personal-profile-email-form-ng", ["ui-bb-i18n-ng", "ui-bbm-switch-ng", "ui-bbm-textfield-ng", "lib-bbm-plugins"], factory);
	else if(typeof exports === 'object')
		exports["ext-bbm-personal-profile-email-form-ng"] = factory(require("ui-bb-i18n-ng"), require("ui-bbm-switch-ng"), require("ui-bbm-textfield-ng"), require("lib-bbm-plugins"));
	else
		root["ext-bbm-personal-profile-email-form-ng"] = factory(root["ui-bb-i18n-ng"], root["ui-bbm-switch-ng"], root["ui-bbm-textfield-ng"], root["lib-bbm-plugins"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_5__, __WEBPACK_EXTERNAL_MODULE_6__, __WEBPACK_EXTERNAL_MODULE_7__, __WEBPACK_EXTERNAL_MODULE_9__) {
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

	module.exports = __webpack_require__(4);

/***/ }),
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.dependencyKeys = exports.helpers = exports.events = undefined;
	
	var _uiBbI18nNg = __webpack_require__(5);
	
	var _uiBbI18nNg2 = _interopRequireDefault(_uiBbI18nNg);
	
	var _uiBbmSwitchNg = __webpack_require__(6);
	
	var _uiBbmSwitchNg2 = _interopRequireDefault(_uiBbmSwitchNg);
	
	var _uiBbmTextfieldNg = __webpack_require__(7);
	
	var _uiBbmTextfieldNg2 = _interopRequireDefault(_uiBbmTextfieldNg);
	
	var _events = __webpack_require__(8);
	
	var _events2 = _interopRequireDefault(_events);
	
	var _helpers = __webpack_require__(11);
	
	var _helpers2 = _interopRequireDefault(_helpers);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var events = exports.events = _events2.default; /**
	                                                 * @module ext-bbm-personal-profile-email-form-ng
	                                                 *
	                                                 * @description
	                                                 * Mobile extension for a personal profile email form in the Mobile Personal Profile widget.
	                                                 *
	                                                 * @example
	                                                 * <!-- Mobile Personal Profile widget model.xml -->
	                                                 * <property name="extension" viewHint="text-input,admin">
	                                                 *   <value type="string">ext-bbm-personal-profile-email-form-ng</value>
	                                                 * </property>
	                                                 */
	var helpers = exports.helpers = _helpers2.default;
	
	var dependencyKeys = exports.dependencyKeys = [_uiBbI18nNg2.default, _uiBbmSwitchNg2.default, _uiBbmTextfieldNg2.default];

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
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _libBbmPlugins = __webpack_require__(9);
	
	var _libBbmPlugins2 = _interopRequireDefault(_libBbmPlugins);
	
	var _constants = __webpack_require__(10);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; } // Temporary disable capsInNew until it fixed in lib-bbm-plugins
	/* eslint new-cap: ["error", { "capIsNew": false }] */
	
	
	exports.default = function (_ref) {
	  var _ref2;
	
	  var $filter = _ref.$filter;
	
	  var i18n = $filter('i18n');
	
	  return _ref2 = {}, _defineProperty(_ref2, _constants.Event.EMAIL_DELETE_START, function () {
	    _libBbmPlugins2.default.ActivityIndicator().show(i18n('message.personalProfile.email.delete.start'));
	  }), _defineProperty(_ref2, _constants.Event.EMAIL_DELETE_DONE, function () {
	    _libBbmPlugins2.default.ActivityIndicator().hide();
	    _libBbmPlugins2.default.Snackbar().success(i18n('message.personalProfile.email.delete.done'));
	  }), _defineProperty(_ref2, _constants.Event.EMAIL_DELETE_FAILED, function () {
	    _libBbmPlugins2.default.ActivityIndicator().hide();
	    _libBbmPlugins2.default.Snackbar().error(i18n('message.personalProfile.email.delete.failed'));
	  }), _defineProperty(_ref2, _constants.Event.EMAIL_CREATE_START, function () {
	    _libBbmPlugins2.default.ActivityIndicator().show(i18n('message.personalProfile.email.create.start'));
	  }), _defineProperty(_ref2, _constants.Event.EMAIL_CREATE_DONE, function () {
	    _libBbmPlugins2.default.ActivityIndicator().hide();
	    _libBbmPlugins2.default.Snackbar().success(i18n('message.personalProfile.email.create.done'));
	  }), _defineProperty(_ref2, _constants.Event.EMAIL_CREATE_FAILED, function () {
	    _libBbmPlugins2.default.ActivityIndicator().hide();
	    _libBbmPlugins2.default.Snackbar().error(i18n('message.personalProfile.email.create.failed'));
	  }), _defineProperty(_ref2, _constants.Event.EMAIL_EDIT_START, function () {
	    _libBbmPlugins2.default.ActivityIndicator().show(i18n('message.personalProfile.email.edit.start'));
	  }), _defineProperty(_ref2, _constants.Event.EMAIL_EDIT_DONE, function () {
	    _libBbmPlugins2.default.ActivityIndicator().hide();
	    _libBbmPlugins2.default.Snackbar().success(i18n('message.personalProfile.email.edit.done'));
	  }), _defineProperty(_ref2, _constants.Event.EMAIL_EDIT_FAILED, function () {
	    _libBbmPlugins2.default.ActivityIndicator().hide();
	    _libBbmPlugins2.default.Snackbar().error(i18n('message.personalProfile.email.edit.failed'));
	  }), _ref2;
	};

/***/ }),
/* 9 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_9__;

/***/ }),
/* 10 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var ToolbarButtonEvent = exports.ToolbarButtonEvent = {
	  DELETE: 'bb.action.personalProfile.email.delete'
	};
	
	/**
	 * Confirm dialog button types
	 * TODO: Read them from the plugin
	 * @type {Object}
	 */
	var ButtonType = exports.ButtonType = {
	  POSITIVE: 'POSITIVE',
	  NEGATIVE: 'NEGATIVE'
	};
	
	/**
	 * Confirm dialog actions
	 * @type {Object}
	 */
	var ConfirmAction = exports.ConfirmAction = {
	  CANCEL: 'cancel',
	  CONFIRM: 'confirm'
	};
	
	/**
	 * Pubsub events
	 * @type {Object}
	 */
	var Event = exports.Event = {
	  EMAIL_DELETE_START: 'bb.event.personalProfile.email.delete.start',
	  EMAIL_DELETE_DONE: 'bb.event.personalProfile.email.delete.done',
	  EMAIL_DELETE_FAILED: 'bb.event.personalProfile.email.delete.failed',
	
	  EMAIL_CREATE_START: 'bb.event.personalProfile.email.create.start',
	  EMAIL_CREATE_DONE: 'bb.event.personalProfile.email.create.done',
	  EMAIL_CREATE_FAILED: 'bb.event.personalProfile.email.create.failed',
	
	  EMAIL_EDIT_START: 'bb.event.personalProfile.email.edit.start',
	  EMAIL_EDIT_DONE: 'bb.event.personalProfile.email.edit.done',
	  EMAIL_EDIT_FAILED: 'bb.event.personalProfile.email.edit.failed'
	};

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _libBbmPlugins = __webpack_require__(9);
	
	var _libBbmPlugins2 = _interopRequireDefault(_libBbmPlugins);
	
	var _constants = __webpack_require__(10);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * @name Helpers
	 * @type {Object}
	 *
	 * @description
	 * Helpers for ext-bbm-personal-profile-email-form-ng
	 */
	
	// Temporary disable capsInNew until it fixed in lib-bbm-plugins
	/* eslint new-cap: ["error", { "capIsNew": false }] */
	/* global window */
	exports.default = function (_ref) {
	  var $filter = _ref.$filter;
	
	  var i18n = $filter('i18n');
	
	  return {
	    /**
	     * @description
	     * Helper which adds event listener on delete.
	     *
	     * @name Helpers#onInit
	     * @type {function}
	     * @param {module:widget-bbm-personal-profile-ng.FormController} ctrl
	     *  FormController instance.
	     */
	    onInit: function onInit(ctrl) {
	      window.addEventListener(_constants.ToolbarButtonEvent.DELETE, function () {
	        var confirmOptions = {
	          title: i18n('message.personalProfile.email.delete.confirm.title'),
	          message: i18n('message.personalProfile.email.delete.confirm.message'),
	          buttons: [{
	            type: _constants.ButtonType.POSITIVE,
	            text: i18n('message.personalProfile.email.delete.confirm.button.ok'),
	            callbackFn: _constants.ConfirmAction.CONFIRM
	          }, {
	            type: _constants.ButtonType.NEGATIVE,
	            text: i18n('message.personalProfile.email.delete.confirm.button.cancel'),
	            callbackFn: _constants.ConfirmAction.CANCEL
	          }]
	        };
	
	        _libBbmPlugins2.default.AlertDialog().show(confirmOptions).then(function (response) {
	          return response.callback === _constants.ConfirmAction.CONFIRM;
	        }).then(function (isConfirmed) {
	          if (isConfirmed) {
	            ctrl.deleteUserEmail();
	          }
	        });
	      });
	    },
	    /**
	     * @description
	     * Helper to get the form validation status.
	     *
	     * @name Helpers#isFormValid
	     * @type {function}
	     * @param {Object} form
	     *
	     * @return {boolean} validation status.
	     */
	    isFormValid: function isFormValid(form) {
	      return Boolean(form.$valid && form.$dirty);
	    }
	  };
	};

/***/ })
/******/ ])
});
;
//# sourceMappingURL=ext-bbm-personal-profile-email-form-ng.js.map