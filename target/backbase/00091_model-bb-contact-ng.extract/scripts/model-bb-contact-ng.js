(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vendor-bb-angular"), require("lib-bb-widget-ng"), require("data-bb-contact-http-ng"), require("lib-bb-storage-ng"), require("lib-bb-model-errors"));
	else if(typeof define === 'function' && define.amd)
		define("model-bb-contact-ng", ["vendor-bb-angular", "lib-bb-widget-ng", "data-bb-contact-http-ng", "lib-bb-storage-ng", "lib-bb-model-errors"], factory);
	else if(typeof exports === 'object')
		exports["model-bb-contact-ng"] = factory(require("vendor-bb-angular"), require("lib-bb-widget-ng"), require("data-bb-contact-http-ng"), require("lib-bb-storage-ng"), require("lib-bb-model-errors"));
	else
		root["model-bb-contact-ng"] = factory(root["vendor-bb-angular"], root["lib-bb-widget-ng"], root["data-bb-contact-http-ng"], root["lib-bb-storage-ng"], root["lib-bb-model-errors"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_47__, __WEBPACK_EXTERNAL_MODULE_59__, __WEBPACK_EXTERNAL_MODULE_60__, __WEBPACK_EXTERNAL_MODULE_61__, __WEBPACK_EXTERNAL_MODULE_63__) {
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

/***/ 47:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_47__;

/***/ }),

/***/ 58:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.modelContactKey = exports.moduleKey = undefined;
	
	var _vendorBbAngular = __webpack_require__(47);
	
	var _vendorBbAngular2 = _interopRequireDefault(_vendorBbAngular);
	
	var _libBbWidgetNg = __webpack_require__(59);
	
	var _libBbWidgetNg2 = _interopRequireDefault(_libBbWidgetNg);
	
	var _dataBbContactHttpNg = __webpack_require__(60);
	
	var _dataBbContactHttpNg2 = _interopRequireDefault(_dataBbContactHttpNg);
	
	var _libBbStorageNg = __webpack_require__(61);
	
	var _libBbStorageNg2 = _interopRequireDefault(_libBbStorageNg);
	
	var _contact = __webpack_require__(62);
	
	var _contact2 = _interopRequireDefault(_contact);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var moduleKey = exports.moduleKey = 'model-bb-contact-ng'; /**
	                                                            * @module model-bb-contact-ng
	                                                            *
	                                                            * @description
	                                                            * Contact widget model.
	                                                            *
	                                                            * @example
	                                                            * import modelContactModuleKey,
	                                                            *  { modelContactKey } from 'model-bb-contact-ng';
	                                                            */
	var modelContactKey = exports.modelContactKey = 'model-bb-contact-ng:model';
	
	exports.default = _vendorBbAngular2.default.module(moduleKey, [_dataBbContactHttpNg2.default, _libBbWidgetNg2.default, _libBbStorageNg2.default]).factory(modelContactKey, ['$q', _dataBbContactHttpNg.contactDataKey, _libBbWidgetNg.widgetKey, _libBbStorageNg.bbStorageServiceKey,
	/* into */
	_contact2.default]).name;

/***/ }),

/***/ 59:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_59__;

/***/ }),

/***/ 60:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_60__;

/***/ }),

/***/ 61:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_61__;

/***/ }),

/***/ 62:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = contactModel;
	
	var _libBbModelErrors = __webpack_require__(63);
	
	var _constants = __webpack_require__(64);
	
	var CONTACT_SELECTED = 'bb.contact.selected';
	var ACCEPTED = 202;
	
	var toInt = function toInt(value) {
	  return parseInt(value, 10) || 0;
	};
	
	/**
	 * @inner
	 * @type {function}
	 * @param {object} Promise An ES2015 compatible `Promise` object.
	 * @param {object} contactData
	 * @param {object} widget
	 *
	 * @return {object}
	 */
	function contactModel(Promise, contactData, widget, bbStorage) {
	  var groupName = widget.getStringPreference(_constants.Preference.GROUP_NAME);
	  var selectedContactStorageKey = groupName ? CONTACT_SELECTED + '.' + groupName : CONTACT_SELECTED;
	
	  /**
	   * @name contactModel#getNewContactObject
	   * @type {function}
	   *
	   * @description
	   * Returns empty contact object. Used for contact creation.
	   *
	   * @returns {object} New contact object
	   */
	  function getNewContactObject() {
	    return {
	      name: '',
	      accounts: []
	    };
	  }
	
	  /**
	   * @name contactModel#getContactSchema
	   * @type {function}
	   *
	   * @description
	   * Gets the contact schema from the data (RAML)
	   *
	   * @returns {object}
	   */
	  function getContactSchema() {
	    return contactData.schemas.postContactsRecord.properties;
	  }
	
	  var transformReponseWithApproval = function transformReponseWithApproval(response) {
	    return {
	      data: response.data,
	      isApprovalRequired: response.status === ACCEPTED && response.data.status === _constants.ApprovalStatus.REQUIRED
	    };
	  };
	
	  /**
	   * @name contactModel#deleteContact
	   * @type {function}
	   *
	   * @description
	   * Deletes a given contact
	   *
	   * @param {object} contact
	   * @returns {Promise}
	   */
	  var deleteContact = function deleteContact(contact) {
	    return contactData.deleteContactsRecord(contact.id).then(transformReponseWithApproval).catch(function (httpErrorResponse) {
	      throw (0, _libBbModelErrors.fromHttpError)(httpErrorResponse);
	    });
	  };
	
	  /**
	   * @name contactModel#getContacts
	   * @type {function}
	   *
	   * @description
	   * Gets the list of contacts
	   *
	   * @param {object} params Parameters to be passed.
	   * @returns {Promise.<object>} A Promise with an array of contacts
	   * and total number of contacts on the server
	   */
	  var getContacts = function getContacts(params) {
	    return contactData.getContacts(params).then(function (raw) {
	      return {
	        data: raw.data,
	        totalCount: toInt(raw.headers('x-total-count'))
	      };
	    }).catch(function (httpErrorResponse) {
	      throw (0, _libBbModelErrors.fromHttpError)(httpErrorResponse);
	    });
	  };
	
	  /**
	   * @name contactModel#getCurrentContact
	   * @type {function}
	   *
	   * @description
	   * Tries to read the current contact from sync preferences
	   *
	   * @returns {object} Contact data
	   */
	  var getCurrentContact = function getCurrentContact() {
	    return bbStorage.getItem(selectedContactStorageKey);
	  };
	
	  /**
	   * @name contactModel#storeContactAsCurrent
	   * @type {function}
	   *
	   * @description
	   * Stores a given contact as current in sync preferences
	   *
	   * @param {object} contact Contact data
	   */
	  var storeContactAsCurrent = function storeContactAsCurrent(contact) {
	    bbStorage.setItem(selectedContactStorageKey, contact);
	  };
	
	  /**
	   * @name contactModel#updateContact
	   * @type {function}
	   *
	   * @description
	   * Updates a given contact
	   *
	   * @param {object} contact Contact data
	   * @returns {Promise.<object>} A Promise with response data
	   */
	  var updateContact = function updateContact(contact) {
	    var payload = Object.assign({}, contact);
	
	    return contactData.putContactsRecord(contact.id, payload).then(transformReponseWithApproval).catch(function (httpErrorResponse) {
	      throw (0, _libBbModelErrors.fromHttpError)(httpErrorResponse);
	    });
	  };
	
	  /**
	   * @name contactModel#createContact
	   * @type {function}
	   *
	   * @description
	   * Creates a new contact
	   *
	   * @param {object} contact Contact data
	   * @returns {Promise} A Promise with response data
	   */
	  var createContact = function createContact(contact) {
	    return contactData.postContactsRecord(contact).then(transformReponseWithApproval).catch(function (httpErrorResponse) {
	      throw (0, _libBbModelErrors.fromHttpError)(httpErrorResponse);
	    });
	  };
	
	  /**
	   * @name contactModel#getContactPreferences
	   * @type {function}
	   * @description
	   * Read all the available preferences from the widget.
	   * @return {object} Widget preferences object
	   */
	  var getContactPreferences = function getContactPreferences() {
	    var preferences = {};
	
	    preferences.showAvatar = widget.getBooleanPreference(_constants.Preference.SHOW_AVATAR);
	    preferences.contactNew = widget.getBooleanPreference(_constants.Preference.CONTACT_NEW);
	    preferences.pageSize = widget.getLongPreference(_constants.Preference.PAGE_SIZE);
	    preferences.maxNavPages = widget.getLongPreference(_constants.Preference.MAX_NAV_PAGES);
	    preferences.paginationType = widget.getStringPreference(_constants.Preference.PAGINATION_TYPE);
	    preferences.notificationDismissTime = widget.getLongPreference(_constants.Preference.NOTIFICATION_DISMISS_TIME);
	    preferences.groupName = widget.getStringPreference(_constants.Preference.GROUP_NAME);
	
	    return preferences;
	  };
	
	  /**
	   * @name contactModel
	   * @type {object}
	   *
	   * @description
	   * Model factory for widget-bb-contact-ng
	   */
	  return {
	    getNewContactObject: getNewContactObject,
	    getContactSchema: getContactSchema,
	    deleteContact: deleteContact,
	    getContacts: getContacts,
	    getCurrentContact: getCurrentContact,
	    storeContactAsCurrent: storeContactAsCurrent,
	    updateContact: updateContact,
	    createContact: createContact,
	    getContactPreferences: getContactPreferences
	  };
	}

/***/ }),

/***/ 63:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_63__;

/***/ }),

/***/ 64:
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * @name Preference
	 * @type {object}
	 * @description
	 * Widget preferences enum
	 */
	var Preference = exports.Preference = {
	  SHOW_AVATAR: 'showAvatar',
	  CONTACT_NEW: 'bb.ext-bbm-contact-form-ng.newContact',
	  PAGE_SIZE: 'bb.contact.pageSize',
	  MAX_NAV_PAGES: 'bb.contact.maxNavPages',
	  PAGINATION_TYPE: 'bb.contact.paginationType',
	  NOTIFICATION_DISMISS_TIME: 'bb.contact.notificationDismissTime',
	  GROUP_NAME: 'bb.contact.groupName'
	};
	
	var ApprovalStatus = exports.ApprovalStatus = {
	  REQUIRED: 'APPROVAL_REQUIRED',
	  NOT_REQUIRED: 'REQUEST_ACCEPTED'
	};

/***/ })

/******/ })
});
;
//# sourceMappingURL=model-bb-contact-ng.js.map