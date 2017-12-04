(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("ui-bb-account-card"), require("ui-bb-inline-status-ng"), require("ui-bb-confirm-ng"), require("ui-bb-substitute-error-ng"), require("ui-bb-notification-stripe-ng"), require("ui-bb-iban-ng"), require("ui-bb-i18n-ng"), require("ui-bb-load-more-ng"), require("ui-bb-loading-indicator-ng"), require("ui-bb-track-form-changes-ng"), require("vendor-bb-angular-ng-messages"), require("vendor-bb-angular-ng-aria"), require("ui-bb-search-box-ng"), require("ui-bb-loading-overlay-ng"), require("ui-bb-empty-state-ng"));
	else if(typeof define === 'function' && define.amd)
		define("ext-bb-contact-list-ng", ["ui-bb-account-card", "ui-bb-inline-status-ng", "ui-bb-confirm-ng", "ui-bb-substitute-error-ng", "ui-bb-notification-stripe-ng", "ui-bb-iban-ng", "ui-bb-i18n-ng", "ui-bb-load-more-ng", "ui-bb-loading-indicator-ng", "ui-bb-track-form-changes-ng", "vendor-bb-angular-ng-messages", "vendor-bb-angular-ng-aria", "ui-bb-search-box-ng", "ui-bb-loading-overlay-ng", "ui-bb-empty-state-ng"], factory);
	else if(typeof exports === 'object')
		exports["ext-bb-contact-list-ng"] = factory(require("ui-bb-account-card"), require("ui-bb-inline-status-ng"), require("ui-bb-confirm-ng"), require("ui-bb-substitute-error-ng"), require("ui-bb-notification-stripe-ng"), require("ui-bb-iban-ng"), require("ui-bb-i18n-ng"), require("ui-bb-load-more-ng"), require("ui-bb-loading-indicator-ng"), require("ui-bb-track-form-changes-ng"), require("vendor-bb-angular-ng-messages"), require("vendor-bb-angular-ng-aria"), require("ui-bb-search-box-ng"), require("ui-bb-loading-overlay-ng"), require("ui-bb-empty-state-ng"));
	else
		root["ext-bb-contact-list-ng"] = factory(root["ui-bb-account-card"], root["ui-bb-inline-status-ng"], root["ui-bb-confirm-ng"], root["ui-bb-substitute-error-ng"], root["ui-bb-notification-stripe-ng"], root["ui-bb-iban-ng"], root["ui-bb-i18n-ng"], root["ui-bb-load-more-ng"], root["ui-bb-loading-indicator-ng"], root["ui-bb-track-form-changes-ng"], root["vendor-bb-angular-ng-messages"], root["vendor-bb-angular-ng-aria"], root["ui-bb-search-box-ng"], root["ui-bb-loading-overlay-ng"], root["ui-bb-empty-state-ng"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_3__, __WEBPACK_EXTERNAL_MODULE_4__, __WEBPACK_EXTERNAL_MODULE_5__, __WEBPACK_EXTERNAL_MODULE_6__, __WEBPACK_EXTERNAL_MODULE_7__, __WEBPACK_EXTERNAL_MODULE_8__, __WEBPACK_EXTERNAL_MODULE_9__, __WEBPACK_EXTERNAL_MODULE_10__, __WEBPACK_EXTERNAL_MODULE_11__, __WEBPACK_EXTERNAL_MODULE_12__, __WEBPACK_EXTERNAL_MODULE_13__, __WEBPACK_EXTERNAL_MODULE_14__, __WEBPACK_EXTERNAL_MODULE_15__, __WEBPACK_EXTERNAL_MODULE_16__) {
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
	
	var _uiBbAccountCard = __webpack_require__(2);
	
	var _uiBbAccountCard2 = _interopRequireDefault(_uiBbAccountCard);
	
	var _uiBbInlineStatusNg = __webpack_require__(3);
	
	var _uiBbInlineStatusNg2 = _interopRequireDefault(_uiBbInlineStatusNg);
	
	var _uiBbConfirmNg = __webpack_require__(4);
	
	var _uiBbConfirmNg2 = _interopRequireDefault(_uiBbConfirmNg);
	
	var _uiBbSubstituteErrorNg = __webpack_require__(5);
	
	var _uiBbSubstituteErrorNg2 = _interopRequireDefault(_uiBbSubstituteErrorNg);
	
	var _uiBbNotificationStripeNg = __webpack_require__(6);
	
	var _uiBbNotificationStripeNg2 = _interopRequireDefault(_uiBbNotificationStripeNg);
	
	var _uiBbIbanNg = __webpack_require__(7);
	
	var _uiBbIbanNg2 = _interopRequireDefault(_uiBbIbanNg);
	
	var _uiBbI18nNg = __webpack_require__(8);
	
	var _uiBbI18nNg2 = _interopRequireDefault(_uiBbI18nNg);
	
	var _uiBbLoadMoreNg = __webpack_require__(9);
	
	var _uiBbLoadMoreNg2 = _interopRequireDefault(_uiBbLoadMoreNg);
	
	var _uiBbLoadingIndicatorNg = __webpack_require__(10);
	
	var _uiBbLoadingIndicatorNg2 = _interopRequireDefault(_uiBbLoadingIndicatorNg);
	
	var _uiBbTrackFormChangesNg = __webpack_require__(11);
	
	var _uiBbTrackFormChangesNg2 = _interopRequireDefault(_uiBbTrackFormChangesNg);
	
	var _vendorBbAngularNgMessages = __webpack_require__(12);
	
	var _vendorBbAngularNgMessages2 = _interopRequireDefault(_vendorBbAngularNgMessages);
	
	var _vendorBbAngularNgAria = __webpack_require__(13);
	
	var _vendorBbAngularNgAria2 = _interopRequireDefault(_vendorBbAngularNgAria);
	
	var _uiBbSearchBoxNg = __webpack_require__(14);
	
	var _uiBbSearchBoxNg2 = _interopRequireDefault(_uiBbSearchBoxNg);
	
	var _uiBbLoadingOverlayNg = __webpack_require__(15);
	
	var _uiBbLoadingOverlayNg2 = _interopRequireDefault(_uiBbLoadingOverlayNg);
	
	var _uiBbEmptyStateNg = __webpack_require__(16);
	
	var _uiBbEmptyStateNg2 = _interopRequireDefault(_uiBbEmptyStateNg);
	
	var _hooks = __webpack_require__(17);
	
	var extHooks = _interopRequireWildcard(_hooks);
	
	var _helpers = __webpack_require__(18);
	
	var _helpers2 = _interopRequireDefault(_helpers);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var hooks = exports.hooks = extHooks; /**
	                                       * @module ext-bb-contact-list-ng
	                                       *
	                                       * @description
	                                       * Default extension for contact widget.
	                                       *
	                                       * @requires ui-bb-account-card
	                                       *
	                                       * @example
	                                       * <!-- payment widget model.xml -->
	                                       * <property name="extension" viewHint="text-input,admin">
	                                       *  <value type="string">ext-bb-contact-list-ng</value>
	                                       * </property>
	                                       *
	                                       * Usage of ui-bb-account-card component in template
	                                       *
	                                       * <ui-bb-account-card
	                                       *   account-name="contact.name"
	                                       *   account-image="contact.image
	                                       *   account-number="contact.IBAN"
	                                       *   show-avatar="true">
	                                       * </ui-bb-account-card>
	                                       */
	var helpers = exports.helpers = _helpers2.default;
	
	var dependencyKeys = exports.dependencyKeys = [_uiBbAccountCard2.default, _uiBbInlineStatusNg2.default, _uiBbConfirmNg2.default, _uiBbSubstituteErrorNg2.default, _uiBbNotificationStripeNg2.default, _uiBbIbanNg2.default, _uiBbI18nNg2.default, _uiBbLoadMoreNg2.default, _uiBbLoadingIndicatorNg2.default, _vendorBbAngularNgMessages2.default, _vendorBbAngularNgAria2.default, _uiBbTrackFormChangesNg2.default, _uiBbSearchBoxNg2.default, _uiBbLoadingOverlayNg2.default, _uiBbEmptyStateNg2.default];

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
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_11__;

/***/ }),
/* 12 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_12__;

/***/ }),
/* 13 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_13__;

/***/ }),
/* 14 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_14__;

/***/ }),
/* 15 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_15__;

/***/ }),
/* 16 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_16__;

/***/ }),
/* 17 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.deleteContact = deleteContact;
	exports.processContacts = processContacts;
	exports.getSelectedContact = getSelectedContact;
	/**
	 * @name deleteContact
	 *
	 * @description
	 * Delete contact action handler
	 *
	 * @param {object} contact Contact object
	 * @type {function}
	 * @param {function} confirm Called to confirm delete action
	 */
	function deleteContact(contact, confirm) {
	  confirm();
	}
	
	/**
	 * @name processContacts
	 *
	 * @description
	 * Extension hook for pre-processing contacts
	 *
	 * @param {array} contacts
	 * @type {function}
	 * @returns {array} contacts Array of contacts
	 */
	function processContacts() {
	  var contacts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
	
	  return contacts;
	}
	
	/**
	 * @name getSelectedContact
	 *
	 * @description
	 * Selects the contact from contacts by id
	 * Or returns null if nothing is found
	 *
	 * @param {array} contacts Array of contacts
	 * @param {object} contact Contact object
	 * @type {function}
	 * @returns {object|null} Returns found contact or null
	 */
	function getSelectedContact() {
	  var contacts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
	  var contact = arguments[1];
	
	  // decoupling original contact list from selected contact
	  var firstContact = contacts[0] ? Object.assign({}, contacts[0]) : null;
	  if (!contact) {
	    return firstContact;
	  }
	
	  var foundContact = contacts.find(function (item) {
	    return item.id === contact.id;
	  });
	  return foundContact ? Object.assign({}, foundContact) : firstContact;
	}

/***/ }),
/* 18 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _EmptyStateConfig;
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	var NO_ITEMS = Symbol('NO_ITEMS');
	var NO_ITEMS_CREATE = Symbol('NO_ITEMS_CREATE');
	var SEARCH = Symbol('SEARCH');
	
	var EmptyStateConfig = (_EmptyStateConfig = {}, _defineProperty(_EmptyStateConfig, NO_ITEMS, {
	  // @TODO: use underneath commented line when theme upgrades FontAwesome Icons to 4.7,
	  // current is: 4.6.1
	  // iconClassName: 'fa-address-book-o',
	  iconClassName: 'fa-users',
	  title: 'contacts.empty.title',
	  description: 'contacts.empty.message.noContact'
	}), _defineProperty(_EmptyStateConfig, NO_ITEMS_CREATE, {
	  // @TODO: use underneath commented line when theme upgrades FontAwesome Icons to 4.7,
	  // current is: 4.6.1
	  // iconClassName: 'fa-address-book-o',
	  iconClassName: 'fa-users',
	  title: 'contacts.empty.title',
	  description: 'contacts.empty.message.create.noContact'
	}), _defineProperty(_EmptyStateConfig, SEARCH, {
	  iconClassName: 'fa-search',
	  title: 'contacts.loadMore.emptySearch',
	  description: 'contacts.loadMore.emptySearchMessage'
	}), _EmptyStateConfig);
	
	var isCreating = function isCreating($ctrl) {
	  return $ctrl.state.page === 'new';
	};
	
	/**
	 * @name Helpers#getEmptyStateConfig
	 * @type {function}
	 *
	 * @description
	 * Returns emptyState configuration depending on current state (search/create)
	 *
	 * @param {Object.<module:widget-bb-contact-ng.ContactController>} $ctrl Current controller
	 * @returns {Object} emptyState configuration
	 */
	var getEmptyStateConfig = function getEmptyStateConfig($ctrl) {
	  var emptyState = void 0;
	  if ($ctrl.state.searching) {
	    emptyState = SEARCH;
	  } else {
	    emptyState = isCreating($ctrl) ? NO_ITEMS_CREATE : NO_ITEMS;
	  }
	  return EmptyStateConfig[emptyState];
	};
	
	var resetFormState = function resetFormState(form) {
	  if (form) {
	    form.$setUntouched();
	    form.$setPristine();
	  }
	};
	
	var isFormPristine = function isFormPristine(form) {
	  return !form || form.$pristine;
	};
	
	var cancelEditForm = function cancelEditForm(ext, $ctrl) {
	  if (ext.contactForm) {
	    resetFormState(ext.contactForm);
	    Object.assign(ext, { contactForm: null });
	  }
	
	  if (ext.contactToSelect) {
	    $ctrl.selectContact(ext.contactToSelect);
	    Object.assign(ext, { contactToSelect: null });
	  } else {
	    $ctrl.cancelContactForm();
	  }
	};
	
	var tryToCancelEditForm = function tryToCancelEditForm(ext, $ctrl) {
	  if (isFormPristine(ext.contactForm)) {
	    cancelEditForm(ext, $ctrl);
	  } else {
	    Object.assign(ext, { cancelFormConfirmOpened: true });
	  }
	};
	
	var saveContact = function saveContact($ctrl, form) {
	  var contact = $ctrl.state.contact.data;
	  return $ctrl.saveContact(contact).then(function () {
	    return resetFormState(form);
	  });
	};
	
	/**
	 * @name Helpers#searchContact
	 * @description
	 * Search a contact if search query is defined
	 * @type {function}
	 * @param {Object.<module:widget-bb-contact-ng.ContactController>} $ctrl Current controller
	 */
	var searchContact = function searchContact($ctrl) {
	  var queryString = $ctrl.state.contactsSearch.query;
	  if (queryString) {
	    $ctrl.search(queryString, undefined, { from: 0 });
	  } else {
	    $ctrl.cancelSearch();
	  }
	};
	
	/**
	 * @name Helpers#getListData
	 * @description
	 * Get contacts from default or searching list
	 * @type {function}
	 * @param {Object.<module:widget-bb-contact-ng.ContactController>} $ctrl Current controller
	 * @return {Array.<Object>} A list of contacts
	 */
	var getListData = function getListData($ctrl) {
	  return $ctrl.state.searching && $ctrl.state.contactsSearch.data ? $ctrl.state.contactsSearch.data : $ctrl.state.contacts.data;
	};
	
	/**
	 * @name Helpers#isSearching
	 * @description
	 * Check if the search action is in progress
	 * @type {function}
	 * @param {Object.<module:widget-bb-contact-ng.ContactController>} $ctrl Current controller
	 * @return {boolean} Flag indicating search status
	 */
	var isSearching = function isSearching($ctrl) {
	  return $ctrl.state.contactsSearch.loading;
	};
	
	/**
	 * @description
	 * Checks if there is any account loaded in the list, regardless if it is searching or not
	 *
	 * @name Helpers#isContactListEmpty
	 * @type {function}
	 * @param {Object.<module:widget-bb-contact-ng.ContactController>} $ctrl Current controller
	 * @returns {boolean}
	 */
	var isContactListEmpty = function isContactListEmpty($ctrl) {
	  if ($ctrl.state.searching) {
	    return !$ctrl.state.contactsSearch.loading && !$ctrl.hasSearchContacts();
	  }
	
	  return !$ctrl.state.contacts.loading && !$ctrl.hasContacts();
	};
	
	/**
	 * @description
	 * Returns the empty state icon classes
	 *
	 * @name Helpers#getEmptyIconClasses
	 * @type {function}
	 * @param {Object.<module:widget-bb-contact-ng.ContactController>} $ctrl Current controller
	 * @returns {string}
	 */
	var getEmptyIconClasses = function getEmptyIconClasses($ctrl) {
	  return 'fa fa-4x ' + getEmptyStateConfig($ctrl).iconClassName + ' text-muted';
	};
	
	var helpers = function helpers(context) {
	  var i18n = context.$filter('i18n');
	
	  return {
	    cancelEditForm: cancelEditForm,
	    tryToCancelEditForm: tryToCancelEditForm,
	    saveContact: saveContact,
	    searchContact: searchContact,
	    getListData: getListData,
	    isSearching: isSearching,
	    isContactListEmpty: isContactListEmpty,
	    getEmptyIconClasses: getEmptyIconClasses,
	
	    notificationMessage: function notificationMessage(statusObject) {
	      var message = statusObject.text || '';
	      if (statusObject.i18n) {
	        message = i18n(statusObject.i18n);
	      }
	      return message;
	    },
	
	    getEmptyTitle: function getEmptyTitle($ctrl) {
	      return i18n(getEmptyStateConfig($ctrl).title);
	    },
	    getEmptyDescription: function getEmptyDescription($ctrl) {
	      return i18n(getEmptyStateConfig($ctrl).description);
	    }
	  };
	};
	
	exports.default = helpers;

/***/ })
/******/ ])
});
;
//# sourceMappingURL=ext-bb-contact-list-ng.js.map