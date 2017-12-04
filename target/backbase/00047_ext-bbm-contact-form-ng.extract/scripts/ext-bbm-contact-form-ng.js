(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("ui-bb-iban-ng"), require("ui-bb-i18n-ng"), require("vendor-bb-angular-ng-messages"), require("ui-bbm-textfield-ng"), require("lib-bbm-plugins"));
	else if(typeof define === 'function' && define.amd)
		define("ext-bbm-contact-form-ng", ["ui-bb-iban-ng", "ui-bb-i18n-ng", "vendor-bb-angular-ng-messages", "ui-bbm-textfield-ng", "lib-bbm-plugins"], factory);
	else if(typeof exports === 'object')
		exports["ext-bbm-contact-form-ng"] = factory(require("ui-bb-iban-ng"), require("ui-bb-i18n-ng"), require("vendor-bb-angular-ng-messages"), require("ui-bbm-textfield-ng"), require("lib-bbm-plugins"));
	else
		root["ext-bbm-contact-form-ng"] = factory(root["ui-bb-iban-ng"], root["ui-bb-i18n-ng"], root["vendor-bb-angular-ng-messages"], root["ui-bbm-textfield-ng"], root["lib-bbm-plugins"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_7__, __WEBPACK_EXTERNAL_MODULE_8__, __WEBPACK_EXTERNAL_MODULE_12__, __WEBPACK_EXTERNAL_MODULE_22__, __WEBPACK_EXTERNAL_MODULE_24__) {
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
/* 12 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_12__;

/***/ }),
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
	exports.dependencyKeys = exports.helpers = exports.events = exports.hooks = undefined;
	
	var _uiBbIbanNg = __webpack_require__(7);
	
	var _uiBbIbanNg2 = _interopRequireDefault(_uiBbIbanNg);
	
	var _uiBbI18nNg = __webpack_require__(8);
	
	var _uiBbI18nNg2 = _interopRequireDefault(_uiBbI18nNg);
	
	var _vendorBbAngularNgMessages = __webpack_require__(12);
	
	var _vendorBbAngularNgMessages2 = _interopRequireDefault(_vendorBbAngularNgMessages);
	
	var _uiBbmTextfieldNg = __webpack_require__(22);
	
	var _uiBbmTextfieldNg2 = _interopRequireDefault(_uiBbmTextfieldNg);
	
	var _hooks = __webpack_require__(23);
	
	var extHooks = _interopRequireWildcard(_hooks);
	
	var _events = __webpack_require__(25);
	
	var _events2 = _interopRequireDefault(_events);
	
	var _helpers = __webpack_require__(26);
	
	var _helpers2 = _interopRequireDefault(_helpers);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var hooks = exports.hooks = extHooks; /**
	                                       * @module ext-bbm-contact-form-ng
	                                       *
	                                       * @description
	                                       * Mobile extension for a contact form in the Contacts widget.
	                                       *
	                                       * @example
	                                       * <!-- Contact widget model.xml -->
	                                       * <property name="extension" viewHint="text-input,admin">
	                                       *   <value type="string">ext-bbm-contact-form-ng</value>
	                                       * </property>
	                                       */
	var events = exports.events = _events2.default;
	var helpers = exports.helpers = _helpers2.default;
	
	var dependencyKeys = exports.dependencyKeys = [_uiBbIbanNg2.default, _uiBbI18nNg2.default, _vendorBbAngularNgMessages2.default, _uiBbmTextfieldNg2.default];

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
	exports.deleteContact = deleteContact;
	
	var _libBbmPlugins = __webpack_require__(24);
	
	var _libBbmPlugins2 = _interopRequireDefault(_libBbmPlugins);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * @name Hooks
	 * @type {object}
	 *
	 * @description
	 * Hooks for widget-bb-contact-ng
	 */
	
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
	// Temporary disable capsInNew until it fixed in lib-bbm-plugins
	/* eslint new-cap: ["error", { "capIsNew": false }] */
	var ConfirmAction = {
	  CANCEL: 'cancel',
	  CONFIRM: 'confirm'
	};
	
	/**
	 * Confirm dialog options
	 * @type {Object}
	 */
	var confirmOptions = {
	  title: 'Delete contact?',
	  message: 'Contact will be deleted from your address book',
	  buttons: [{
	    type: ButtonType.POSITIVE,
	    text: 'Delete',
	    callbackFn: ConfirmAction.CONFIRM
	  }, {
	    type: ButtonType.NEGATIVE,
	    text: 'Cancel',
	    callbackFn: ConfirmAction.CANCEL
	  }]
	};
	
	/**
	 * Shows delete confirm dialog
	 * @private
	 */
	function confirmDelete() {
	  return _libBbmPlugins2.default.AlertDialog().show(confirmOptions).then(function (response) {
	    return response.callback === ConfirmAction.CONFIRM;
	  });
	}
	
	/**
	 * @description
	 * Hook for a handling a confirmation process of a contact deleting.
	 *
	 * @name Hooks#deleteContact
	 * @type {function}
	 * @param {object} contact Contact data
	 * @param {function} confirm Confirms delete
	 * @param {function} cancel Cancels delete
	 * @returns {promise<void>} Promise which gets resolved once contact deleting
	 *   is confirmed or cancelled
	 */
	// eslint-disable-next-line import/prefer-default-export
	function deleteContact(contact, confirm, cancel) {
	  confirmDelete().then(function (isConfirmed) {
	    if (isConfirmed) {
	      confirm();
	    } else {
	      cancel();
	    }
	  }).catch(cancel);
	}

/***/ }),
/* 24 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_24__;

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Event$CONTACT_DELETE;
	
	var _libBbmPlugins = __webpack_require__(24);
	
	var _libBbmPlugins2 = _interopRequireDefault(_libBbmPlugins);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; } // Temporary disable capsInNew until it fixed in lib-bbm-plugins
	/* eslint new-cap: ["error", { "capIsNew": false }] */
	
	
	var Event = {
	  CONTACT_CREATE_START: 'bb.event.contact.create.start',
	  CONTACT_CREATE_DONE: 'bb.event.contact.create.done',
	  CONTACT_CREATE_FAILED: 'bb.event.contact.create.failed',
	  CONTACT_DELETE_START: 'bb.event.contact.delete.start',
	  CONTACT_DELETE_DONE: 'bb.event.contact.delete.done',
	  CONTACT_DELETE_FAILED: 'bb.event.contact.delete.failed',
	  CONTACT_UPDATE_START: 'bb.event.contact.update.start',
	  CONTACT_UPDATE_DONE: 'bb.event.contact.update.done',
	  CONTACT_UPDATE_FAILED: 'bb.event.contact.update.failed'
	};
	
	exports.default = (_Event$CONTACT_DELETE = {}, _defineProperty(_Event$CONTACT_DELETE, Event.CONTACT_DELETE_START, function () {
	  _libBbmPlugins2.default.ActivityIndicator().show('Deleting contact');
	}), _defineProperty(_Event$CONTACT_DELETE, Event.CONTACT_DELETE_DONE, function () {
	  _libBbmPlugins2.default.ActivityIndicator().hide();
	  _libBbmPlugins2.default.Snackbar().success('Contact deleted successfully');
	}), _defineProperty(_Event$CONTACT_DELETE, Event.CONTACT_DELETE_FAILED, function () {
	  _libBbmPlugins2.default.ActivityIndicator().hide();
	  _libBbmPlugins2.default.Snackbar().error('Unable to delete the contact, please try again');
	}), _defineProperty(_Event$CONTACT_DELETE, Event.CONTACT_UPDATE_START, function () {
	  _libBbmPlugins2.default.ActivityIndicator().show('Updating contact');
	}), _defineProperty(_Event$CONTACT_DELETE, Event.CONTACT_UPDATE_DONE, function () {
	  _libBbmPlugins2.default.ActivityIndicator().hide();
	  _libBbmPlugins2.default.Snackbar().success('Contact updated successfully');
	}), _defineProperty(_Event$CONTACT_DELETE, Event.CONTACT_UPDATE_FAILED, function () {
	  _libBbmPlugins2.default.ActivityIndicator().hide();
	  _libBbmPlugins2.default.Snackbar().error('Unable to update the contact, please try again');
	}), _defineProperty(_Event$CONTACT_DELETE, Event.CONTACT_CREATE_START, function () {
	  _libBbmPlugins2.default.ActivityIndicator().show('Creating new contact');
	}), _defineProperty(_Event$CONTACT_DELETE, Event.CONTACT_CREATE_DONE, function () {
	  _libBbmPlugins2.default.ActivityIndicator().hide();
	  _libBbmPlugins2.default.Snackbar().success('Contact created successfully');
	}), _defineProperty(_Event$CONTACT_DELETE, Event.CONTACT_CREATE_FAILED, function () {
	  _libBbmPlugins2.default.ActivityIndicator().hide();
	  _libBbmPlugins2.default.Snackbar().error('Unable to create the contact, please try again');
	}), _Event$CONTACT_DELETE);

/***/ }),
/* 26 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * @name Helpers
	 * @type {object}
	 *
	 * @description
	 * Helpers for ext-bbm-contact-form-ng
	 */
	exports.default = {
	  /**
	   * @description
	   * Helper to save a contact and reset the form
	   *
	   * @name Helpers#saveContact
	   * @type {function}
	   * @param {object} $ctrl Angular controller instance
	   * @param {object} contactForm Angular form instance
	   * @returns {promise<void>} Promise which gets resolved once contact is saved and the form
	   *   is reset, or rejected in case of errors
	   */
	  saveContact: function saveContact($ctrl, contactForm) {
	    var contact = $ctrl.state.contact.data;
	    return $ctrl.saveContact(contact).then(function () {
	      contactForm.$setUntouched();
	      contactForm.$setPristine();
	    });
	  }
	};

/***/ })
/******/ ])
});
;
//# sourceMappingURL=ext-bbm-contact-form-ng.js.map