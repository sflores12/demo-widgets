(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vendor-bb-angular"), require("lib-bb-widget-ng"), require("lib-bb-model-errors"), require("lib-bb-widget-extension-ng"), require("model-bb-contact-ng"), require("lib-bb-event-bus-ng"), require("lib-bb-intent-ng"), require("lib-bb-permissions-ng"));
	else if(typeof define === 'function' && define.amd)
		define("widget-bb-contact-ng", ["vendor-bb-angular", "lib-bb-widget-ng", "lib-bb-model-errors", "lib-bb-widget-extension-ng", "model-bb-contact-ng", "lib-bb-event-bus-ng", "lib-bb-intent-ng", "lib-bb-permissions-ng"], factory);
	else if(typeof exports === 'object')
		exports["widget-bb-contact-ng"] = factory(require("vendor-bb-angular"), require("lib-bb-widget-ng"), require("lib-bb-model-errors"), require("lib-bb-widget-extension-ng"), require("model-bb-contact-ng"), require("lib-bb-event-bus-ng"), require("lib-bb-intent-ng"), require("lib-bb-permissions-ng"));
	else
		root["widget-bb-contact-ng"] = factory(root["vendor-bb-angular"], root["lib-bb-widget-ng"], root["lib-bb-model-errors"], root["lib-bb-widget-extension-ng"], root["model-bb-contact-ng"], root["lib-bb-event-bus-ng"], root["lib-bb-intent-ng"], root["lib-bb-permissions-ng"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_47__, __WEBPACK_EXTERNAL_MODULE_59__, __WEBPACK_EXTERNAL_MODULE_63__, __WEBPACK_EXTERNAL_MODULE_74__, __WEBPACK_EXTERNAL_MODULE_75__, __WEBPACK_EXTERNAL_MODULE_76__, __WEBPACK_EXTERNAL_MODULE_77__, __WEBPACK_EXTERNAL_MODULE_78__) {
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

	module.exports = __webpack_require__(73);

/***/ }),

/***/ 47:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_47__;

/***/ }),

/***/ 59:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_59__;

/***/ }),

/***/ 63:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_63__;

/***/ }),

/***/ 73:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _vendorBbAngular = __webpack_require__(47);
	
	var _vendorBbAngular2 = _interopRequireDefault(_vendorBbAngular);
	
	var _libBbWidgetExtensionNg = __webpack_require__(74);
	
	var _libBbWidgetExtensionNg2 = _interopRequireDefault(_libBbWidgetExtensionNg);
	
	var _modelBbContactNg = __webpack_require__(75);
	
	var _modelBbContactNg2 = _interopRequireDefault(_modelBbContactNg);
	
	var _libBbWidgetNg = __webpack_require__(59);
	
	var _libBbWidgetNg2 = _interopRequireDefault(_libBbWidgetNg);
	
	var _libBbEventBusNg = __webpack_require__(76);
	
	var _libBbEventBusNg2 = _interopRequireDefault(_libBbEventBusNg);
	
	var _libBbIntentNg = __webpack_require__(77);
	
	var _libBbIntentNg2 = _interopRequireDefault(_libBbIntentNg);
	
	var _libBbPermissionsNg = __webpack_require__(78);
	
	var _libBbPermissionsNg2 = _interopRequireDefault(_libBbPermissionsNg);
	
	var _controller = __webpack_require__(79);
	
	var _controller2 = _interopRequireDefault(_controller);
	
	var _defaultHooks = __webpack_require__(81);
	
	var defaultHooks = _interopRequireWildcard(_defaultHooks);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var hooksKey = 'widget-bb-contact-ng:hooks';
	
	/**
	 * @name default
	 * @type {string}
	 * @description Angular module name
	 */
	/* global window */
	/**
	 * @module widget-bb-contact-ng
	 *
	 * @description
	 * Contact widget
	 *
	 * @example
	 *  <div data-ng-controller="ContactController as $ctrl">
	 *    <ul>
	 *       <li data-ng-repeat="contact in $ctrl.state.contacts.data">{{contact.id}}</li>
	 *    </ul>
	 *  </div>
	 */
	exports.default = _vendorBbAngular2.default.module('widget-bb-contact-ng', [_modelBbContactNg2.default, _libBbEventBusNg2.default, _libBbWidgetNg2.default, _libBbIntentNg2.default, _libBbPermissionsNg2.default]).factory(hooksKey, (0, _libBbWidgetExtensionNg2.default)(defaultHooks)).config([_libBbPermissionsNg.bbPermissionsKey + 'Provider', function (permissionsProvider) {
	  permissionsProvider.enableDownloadOnInit(true);
	  permissionsProvider.setCacheEnabled(false);
	}]).controller('ContactController', [_modelBbContactNg.modelContactKey, hooksKey, _libBbEventBusNg.eventBusKey, '$q', '$scope', '$window', _libBbWidgetNg.widgetKey, _libBbIntentNg.bbIntentKey,
	/* into */
	_controller2.default]).name;

/***/ }),

/***/ 74:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_74__;

/***/ }),

/***/ 75:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_75__;

/***/ }),

/***/ 76:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_76__;

/***/ }),

/***/ 77:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_77__;

/***/ }),

/***/ 78:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_78__;

/***/ }),

/***/ 79:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _errorMessages;
	
	var _vendorBbAngular = __webpack_require__(47);
	
	var _vendorBbAngular2 = _interopRequireDefault(_vendorBbAngular);
	
	var _libBbModelErrors = __webpack_require__(63);
	
	var _constants = __webpack_require__(80);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; } /* global window */
	
	
	var errorMessages = (_errorMessages = {}, _defineProperty(_errorMessages, _libBbModelErrors.E_AUTH, 'contact.model.error.auth'), _defineProperty(_errorMessages, _libBbModelErrors.E_CONNECTIVITY, 'contact.model.error.connectivity'), _defineProperty(_errorMessages, _libBbModelErrors.E_USER, 'contact.model.error.user'), _defineProperty(_errorMessages, _libBbModelErrors.E_UNEXPECTED, 'contact.model.error.unexpected'), _errorMessages);
	
	/**
	 * Defines the default pageSize for the contact page
	 * which is 50, as defined in the widget model.xml
	 * @inner
	 * @type {number}
	 */
	var DEFAULT_PAGE_SIZE = 50;
	
	/**
	 * Defines the default maxNavPages for the accounts page
	 * as defined in the widget model.xml
	 * @inner
	 * @type {number}
	 */
	var DEFAULT_MAX_NAV_PAGES = 3;
	
	/**
	 * Defines the default paginationType for the accounts page
	 * as defined in the widget model.xml
	 * @inner
	 * @type {string}
	 */
	var DEFAULT_PAGINATION_TYPE = 'load-more';
	
	/**
	 * @description
	 * Defines default time in seconds after which
	 * notification dismisses
	 * @inner
	 * @type {number}
	 */
	var DEFAULT_DISMISS_TIME = 3;
	
	/**
	 * Defines the min length for the search query
	 * @inner
	 * @type {number}
	 */
	var SEARCH_MIN_QUERY = 2;
	
	/**
	 * Defines the debouncing time for a search to happen (in ms)
	 * @inner
	 * @type {number}
	 */
	var SEARCH_INPUT_THRESHOLD = 1000;
	
	/**
	 * Defines widget search action enumeration
	 * @inner
	 * @enum {string}
	 * @type {object}
	 */
	var searchActions = {
	  CANCEL: 'cancel',
	  INPUT: 'input'
	};
	
	/**
	 * Defines widget page enumeration
	 * @inner
	 * @enum {string}
	 * @type {object}
	 */
	var Page = {
	  DETAILS: 'details',
	  EDIT: 'edit',
	  NEW: 'new',
	  LIST: 'list'
	};
	
	/**
	 * @description
	 * Creates an error object for template
	 *
	 * @name uiError
	 *
	 * @inner
	 * @param {object} modelError Error object
	 * @type {function}
	 * @returns {{message: string}}
	 */
	var uiError = function uiError(modelError) {
	  var message = '';
	
	  if (modelError && modelError.code) {
	    message = errorMessages[modelError.code];
	  }
	
	  return { message: message };
	};
	
	/**
	 * @description
	 * Creates an success status object for template
	 *
	 * @name uiStatusSuccess
	 *
	 * @inner
	 * @param {string} key Translation keys
	 * @type {function}
	 * @returns {{i18n: string, class: string, isError: boolean}}
	 */
	var uiStatusSuccess = function uiStatusSuccess(key) {
	  return {
	    i18n: key,
	    class: _constants.StatusClasses.SUCCESS,
	    isError: false
	  };
	};
	
	/**
	 * @description
	 * Creates an error status object for template
	 *
	 * @name uiStatusError
	 *
	 * @inner
	 * @param {object} error Error object
	 * @type {function}
	 * @returns {{i18n: string, class: string, isError: boolean}}
	 */
	var uiStatusError = function uiStatusError(error) {
	  return {
	    i18n: uiError(error).message,
	    class: _constants.StatusClasses.ERROR,
	    isError: true
	  };
	};
	
	/**
	 * @description
	 * Throttles some action by a given delay (threshold)
	 *
	 * @name throttle
	 *
	 * @inner
	 * @param {function} fn - function to execute
	 * @param {int} threshold - delay in execution (in ms)
	 * @type {function}
	 * @returns {function}
	 */
	var throttle = function throttle(fn, threshold) {
	  var last = void 0;
	  var timeout = void 0;
	
	  return function throttledFn() {
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    var context = this;
	    var now = Date.now();
	    var timeDifference = now - last;
	
	    if (last && timeDifference < threshold) {
	      clearTimeout(timeout);
	      timeout = setTimeout(function () {
	        last = now;
	        fn.apply(context, args);
	      }, threshold - timeDifference);
	    } else {
	      last = now;
	      fn.apply(context, args);
	    }
	  };
	};
	
	/**
	 * @name ContactController
	 *
	 * @description
	 * Contact widget controller
	 *
	 * @type {function}
	 */
	function ContactController(model, hooks, bus, Promise, scope, window, widget, bbIntents) {
	  var ctrl = this;
	  var preferences = model.getContactPreferences();
	  var pageSize = preferences.pageSize || DEFAULT_PAGE_SIZE;
	  var maxNavPages = preferences.maxNavPages || DEFAULT_MAX_NAV_PAGES;
	  var paginationType = preferences.paginationType || DEFAULT_PAGINATION_TYPE;
	  var dismissTime = preferences.notificationDismissTime || DEFAULT_DISMISS_TIME;
	  var CONTACT_SELECTED = preferences.groupName ? _constants.Message.CONTACT_SELECTED + '.' + preferences.groupName : _constants.Message.CONTACT_SELECTED;
	
	  var contacts = {
	    rawItems: [],
	    params: {
	      from: 0,
	      size: pageSize
	    }
	  };
	
	  var contactsSearch = {
	    rawItems: [],
	    activeSearches: 0,
	    params: {
	      from: 0,
	      size: pageSize,
	      maxNavPages: maxNavPages,
	      paginationType: paginationType,
	      query: null
	    }
	  };
	
	  var contactToBeSelectedNext = void 0;
	
	  /**
	   * @description
	   * Holds current controller state made by
	   * previous method executions
	   *
	   * @name state
	   *
	   * @type {object}
	   */
	  var state = {
	    contact: {
	      data: null,
	      schema: null,
	      deleting: false,
	      updating: false,
	      accountsChanged: false
	    },
	    contacts: {
	      data: null,
	      loading: false,
	      error: null,
	      hasMore: false,
	      dirty: false
	    },
	    contactsSearch: {
	      data: null,
	      loading: false,
	      error: null,
	      hasMore: false,
	      totalCount: 0,
	      query: ''
	    },
	    status: null,
	    initialLoading: true,
	    error: null,
	    showAvatar: preferences.showAvatar,
	    editing: false,
	    searching: false,
	    page: preferences.contactNew ? Page.NEW : Page.LIST,
	    pageParams: contactsSearch.params,
	    notifications: []
	  };
	
	  /**
	   * @name navigateTo
	   * @description Changes current page in widget
	   * @type {function}
	   * @inner
	   * @param {string} page Page to navigate to
	   */
	  function navigateTo(page) {
	    state.contact.accountsChanged = false;
	    state.page = page;
	  }
	
	  /**
	   * @name closeContactDetails
	   *
	   * @description
	   * Handles click on Back button on Contact details page.
	   * Navigates the user to the Contact list view.
	   *
	   * @type {function}
	   */
	  function closeContactDetails() {
	    navigateTo(Page.LIST);
	  }
	
	  /**
	   * Returns deep copy of currently selected contact
	   *
	   * @inner
	   * @param {object} defaultValue Default value to return
	   * @returns {object} Selected contact
	   */
	  function getSelectedContact(defaultValue) {
	    return _vendorBbAngular2.default.copy(hooks.getSelectedContact(state.contacts.data, defaultValue));
	  }
	
	  /**
	   * @name restoreSelection
	   * @description Restores previously selected contact in selection
	   * @type {function}
	   * @inner
	   */
	  function restoreSelection() {
	    model.getCurrentContact().then(function (contact) {
	      state.contact.data = getSelectedContact(contact);
	    });
	  }
	
	  /**
	   * @name cancelContactForm
	   *
	   * @description
	   * Handles click on Back/Cancel button on Contact form page.
	   * Restores selected contact, and navigates the user to the Contact list view.
	   *
	   * @type {function}
	   */
	  function cancelContactForm() {
	    restoreSelection();
	    navigateTo(Page.LIST);
	  }
	
	  /**
	   * @name showNewContactForm
	   *
	   * @description
	   * Handles click on Create new contact button.
	   * Navigates the user to the Create new contact view.
	   *
	   * @type {function}
	   */
	  function showNewContactForm() {
	    if (state.page !== Page.NEW) {
	      state.status = null;
	      state.contact.data = _vendorBbAngular2.default.copy(hooks.getNewContactObject(model.getNewContactObject()));
	      navigateTo(Page.NEW);
	    }
	  }
	
	  /**
	   * @name showEditContactForm
	   *
	   * @description
	   * Handles click on Edit button on contact details.
	   * Navigates the user to the Create new contact view.
	   *
	   * @type {function}
	   */
	  function showEditContactForm() {
	    if (state.page !== Page.EDIT) {
	      state.status = null;
	      navigateTo(Page.EDIT);
	    }
	  }
	
	  /**
	   * @name hasContacts
	   * @description
	   * if contacts found returns true else false
	   *
	   * @type {function}
	   * @returns {boolean}
	   */
	  function hasContacts() {
	    return Boolean(state.contacts.data && state.contacts.data.length);
	  }
	
	  /**
	   * @name hasSearchContacts
	   * @description
	   * if contacts found returns true else false
	   *
	   * @type {function}
	   * @returns {boolean}
	   */
	  function hasSearchContacts() {
	    return Boolean(state.contactsSearch.data && state.contactsSearch.data.length);
	  }
	
	  /**
	   * @name selectContact
	   * @description
	   * Handles clicks on contact in the list.
	   * Navigates the user to the details view.
	   *
	   * @param {object} contact Contact object
	   * @type {function}
	   * @fires bb.event.contact.selected
	   */
	  function selectContact(contact) {
	    state.contact.data = _vendorBbAngular2.default.copy(contact);
	    state.status = null;
	
	    navigateTo(Page.DETAILS);
	    model.storeContactAsCurrent(_vendorBbAngular2.default.copy(contact));
	
	    bus.publish(CONTACT_SELECTED, {
	      contact: state.contact.data
	    });
	  }
	
	  /**
	   * @name onContactSelect
	   *
	   * @description
	   * Handles contact select
	   *
	   * @inner
	   * @param {object} data Contact data
	   * @type {function}
	   */
	  function onContactSelect(data) {
	    state.contact.data = _vendorBbAngular2.default.copy(data.contact);
	  }
	
	  /**
	   * Merges new items with existing items
	   *
	   * @inner
	   * @name append
	   * @type {function}
	   * @returns {array} merged array of old and new items
	   */
	  function append(newItems, existingItems) {
	    return [].concat(_toConsumableArray(existingItems), _toConsumableArray(newItems));
	  }
	
	  /**
	   * Replaces existing items with new items
	   *
	   * @inner
	   * @name replace
	   * @type {function}
	   * @returns {array} new items
	   */
	  function replace(items) {
	    return items;
	  }
	
	  /**
	   * @name load
	   *
	   * @description
	   * Loads contacts data, called from $onInit
	   *
	   * @see $onInit
	   *
	   * @type {function}
	   * @param {object} params Request params
	   * @param {number} params.from Page number
	   * @param {number} params.size Page size
	   * @param {function} merge Function to merge loaded contacts to the previous ones
	   * @returns {Promise} Promise which is resolved once contacts are loaded and processed,
	   *   or rejected in case of errors
	   */
	  function load(params) {
	    var merge = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : replace;
	
	    var requestParams = hooks.processRequestParams(contacts.params, params);
	
	    state.contacts.loading = true;
	
	    return model.getContacts(requestParams).then(function (raw) {
	      contacts.rawItems = merge(raw.data, contacts.rawItems);
	      state.contacts.hasMore = contacts.rawItems.length < raw.totalCount;
	      state.pageParams.totalItems = raw.totalCount || 0;
	      state.pageParams.currentPage = requestParams.currentPage;
	      return contacts.rawItems;
	    }).then(hooks.processContacts).then(function (processedContacts) {
	      state.contacts.data = processedContacts;
	      state.contacts.loading = false;
	      state.contacts.error = null;
	    }).catch(function (error) {
	      state.error = uiError(error);
	      state.contacts.error = uiError(error);
	      state.contacts.loading = false;
	      bus.publish(_constants.Message.CONTACT_SERVER_ERROR, error);
	    });
	  }
	
	  /**
	   * @name changeSearchingState
	   *
	   * @description
	   * Change "loading" state of the contactsSearch
	   *
	   * @type {function}
	   * @inner
	   */
	  function changeSearchingState() {
	    // Set "contactsSearch.loading" will only be set to false,
	    // when there are no more active search processes
	    state.contactsSearch.loading = !! --contactsSearch.activeSearches;
	  }
	
	  /**
	   * @name search
	   *
	   * @description
	   * Searches contacts data, called when searching and query length is big enough
	   *
	   * @type {function}
	   * @param {string} query - query to search on
	   * @param {function} merge Function to merge loaded contacts to the previous ones
	   * @returns {Promise} Promise which is resolved once contacts are loaded and processed,
	   *   or rejected in case of errors
	   */
	  function search(query) {
	    var merge = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : replace;
	    var params = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
	
	    state.searching = state.contactsSearch.loading = true;
	    contactsSearch.params.query = query;
	    contactsSearch.activeSearches++;
	
	    var requestParams = hooks.processSearchRequestParams(contactsSearch.params, params);
	    return model.getContacts(requestParams).then(function (raw) {
	      contactsSearch.rawItems = merge(raw.data, contactsSearch.rawItems);
	      state.contactsSearch.hasMore = contactsSearch.rawItems.length < raw.totalCount;
	      state.contactsSearch.totalCount = raw.totalCount;
	      return contactsSearch.rawItems;
	    }).then(hooks.processSearchContacts).then(function (processedSearchContacts) {
	      state.contactsSearch.data = processedSearchContacts;
	      state.contactsSearch.error = null;
	
	      // Select first found contact
	      if (state.contactsSearch.data.length && state.contactsSearch.data[0].contacts) {
	        state.contact.data = getSelectedContact(state.contactsSearch.data[0].contacts[0]);
	      }
	      changeSearchingState();
	    }).catch(function (error) {
	      state.error = uiError(error);
	      state.contactsSearch.error = uiError(error);
	      changeSearchingState();
	      bus.publish(_constants.Message.CONTACT_SERVER_ERROR, error);
	      return Promise.reject(state.error);
	    });
	  }
	
	  /**
	   * @description
	   * Get params for request.
	   *
	   * @name ContactController#getRequestParams
	   *
	   * @inner
	   * @param {Object} params Custom params
	   * @type {function}
	   * @returns {Object} A request params
	   */
	  var getRequestParams = function getRequestParams(params) {
	    return Object.assign({}, contactsSearch.params, {
	      // In BE services pagination starts from 0 page, but in bootstrap directive it's 1
	      from: params.currentPage - 1
	    }, params);
	  };
	
	  /**
	   * @description
	   * Change page of displayed contacts.
	   *
	   * @name ContactController#changePage
	   * @type {function}
	   * @returns {Promise.<module:model-bb-contact-ng.Contacts, ModelError>}
	   * A Promise with loaded contacts
	   */
	  var changePage = function changePage() {
	    var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	
	    var currentParams = getRequestParams(params);
	
	    return load(currentParams);
	  };
	
	  /**
	   * @name reload
	   *
	   * @description
	   * Reloads the entire list of stored contacts
	   *
	   * @inner
	   * @type {function}
	   * @param {function} cb Callback to be called on page reload
	   *
	   * @return {Promise}
	   */
	  function reload() {
	    var cb = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function () {};
	
	    var from = 0;
	    var pagesCount = contacts.params.from + 1;
	    var size = pagesCount * contacts.params.size;
	    var result = void 0;
	
	    if (state.searching) {
	      result = search(contactsSearch.params.query, replace, { from: from, size: size });
	      state.contacts.dirty = true;
	    } else {
	      result = load({ from: from, size: size }, replace);
	      state.contacts.dirty = false;
	    }
	
	    return result.then(cb);
	  }
	
	  /**
	   * @name loadMore
	   *
	   * @description
	   * Loads more contacts if they are available.
	   *
	   * @type {function}
	   * @param {function} done callback to stop loading more
	   * @returns {Promise}
	   */
	  function loadMore(done) {
	    if (!state.contacts.hasMore) {
	      return Promise.resolve();
	    }
	
	    if (state.contacts.loading) {
	      return Promise.resolve();
	    }
	
	    contacts.params.from++;
	
	    return load({}, append).then(done).catch(function () {
	      contacts.params.from--;
	      done();
	    });
	  }
	
	  /**
	   * @name searchMore
	   *
	   * @description
	   * Searches more contacts if they are available.
	   *
	   * @type {function}
	   * @param {function} done callback to stop loading more
	   * @returns {Promise}
	   */
	  function searchMore(done) {
	    if (!state.contactsSearch.hasMore) {
	      return Promise.resolve();
	    }
	
	    if (state.contactsSearch.loading) {
	      return Promise.resolve();
	    }
	
	    contactsSearch.params.from++;
	
	    return search(contactsSearch.params.query, append).then(done).catch(function (error) {
	      contactsSearch.params.from--;
	      done();
	      return Promise.reject(error);
	    });
	  }
	
	  /**
	   * @name selectActiveContact
	   * @type {function}
	   * @inner
	   * @description
	   * Selects a new contact if previous does not exist in a contacts group anymore
	   */
	  function selectActiveContact() {
	    contactToBeSelectedNext = hooks.returnContactIfExists(state.contacts.data, state.contact.data);
	
	    if (!contactToBeSelectedNext) {
	      var index = (state.contacts.data || []).findIndex(function (item) {
	        return item.id === state.contact.data.id;
	      });
	
	      contactToBeSelectedNext = hooks.selectPrevContact(state.contacts.data, index, state.contact.data);
	    }
	
	    state.contact.data = _vendorBbAngular2.default.copy(contactToBeSelectedNext);
	  }
	
	  /**
	   * @name onContactCreateStart
	   *
	   * @description
	   * Handles contact create start
	   *
	   * @inner
	   * @param {object} contact Contact object
	   * @type {function}
	   * @returns {*}
	   */
	  function onContactCreateStart() {
	    state.contact.updating = true;
	    bus.publish(_constants.Message.CONTACT_CREATE_START);
	  }
	
	  /**
	   * @name onContactCreateDone
	   *
	   * @description
	   * Handles contact create done
	   *
	   * @inner
	   * @param {object} response Contact delete response object
	   * @type {function}
	   */
	  function onContactCreateDone(response) {
	    state.contact.updating = false;
	
	    var key = response.isApprovalRequired ? _constants.TranslationKeys.CONTACT_CREATE_ACCEPTED : _constants.TranslationKeys.CONTACT_CREATE_SUCCESS;
	    state.status = uiStatusSuccess(key);
	
	    if (!response.isApprovalRequired) {
	      state.contact.data = _vendorBbAngular2.default.copy(response.data);
	
	      navigateTo(Page.DETAILS);
	      bus.publish(_constants.Message.CONTACT_CREATE_DONE);
	    } else {
	      cancelContactForm();
	    }
	  }
	
	  /**
	   * @name onContactCreateFail
	   *
	   * @description
	   * Handles contact create fail
	   *
	   * @inner
	   * @param {object} err Error object
	   * @type {function}
	   */
	  function onContactCreateFail(error) {
	    state.contact.updating = false;
	    state.status = uiStatusError(error);
	
	    bus.publish(_constants.Message.CONTACT_CREATE_FAILED, { error: error });
	    return Promise.reject(error);
	  }
	
	  /**
	   * @name onContactDeleteStart
	   *
	   * @description
	   * Handles preparations for contact delete
	   *
	   * @inner
	   * @type {function}
	   */
	  function onContactDeleteStart() {
	    state.status = null;
	    state.contact.deleting = true;
	  }
	
	  /**
	   * @name onContactDeleteDone
	   *
	   * @description
	   * Handles contact delete
	   *
	   * @inner
	   * @param {object} response Contact delete response object
	   * @type {function}
	   */
	  function onContactDeleteDone(response) {
	    state.contact.deleting = false;
	
	    var key = response.isApprovalRequired ? _constants.TranslationKeys.CONTACT_DELETE_ACCEPTED : _constants.TranslationKeys.CONTACT_DELETE_SUCCESS;
	    state.status = uiStatusSuccess(key);
	
	    if (!response.isApprovalRequired) {
	      navigateTo(Page.LIST);
	
	      // Pass a callback to the reload function
	      bus.publish(_constants.Message.CONTACT_DELETE_DONE);
	    }
	    contactToBeSelectedNext = null;
	  }
	
	  /**
	   * @name onContactDeleteFail
	   *
	   * @description
	   * Handles contact delete failed
	   *
	   * @inner
	   * @param {object} err Error object
	   * @type {function}
	   */
	  function onContactDeleteFail(error) {
	    state.contact.deleting = false;
	    state.status = uiStatusError(error);
	
	    bus.publish(_constants.Message.CONTACT_DELETE_FAILED, { error: error });
	  }
	
	  /**
	   * @name onContactUpdateStart
	   *
	   * @description
	   * Handles contact update start
	   *
	   * @inner
	   * @type {function}
	   */
	  function onContactUpdateStart() {
	    state.contact.updating = true;
	    bus.publish(_constants.Message.CONTACT_UPDATE_START);
	  }
	
	  /**
	   * @name onContactUpdateDone
	   *
	   * @description
	   * Response handler for successful Contact update request
	   *
	   * @inner
	   * @param {object} response Contact update response object
	   * @type {function}
	   */
	  function onContactUpdateDone(response) {
	    state.contact.updating = false;
	
	    var key = response.isApprovalRequired ? _constants.TranslationKeys.CONTACT_UPDATE_ACCEPTED : _constants.TranslationKeys.CONTACT_UPDATE_SUCCESS;
	    state.status = uiStatusSuccess(key);
	
	    var contact = response.isApprovalRequired ? null : state.contact.data;
	    bus.publish(_constants.Message.CONTACT_UPDATE_DONE, { contact: contact });
	
	    navigateTo(Page.DETAILS);
	  }
	
	  /**
	   * @name onContactUpdateFail
	   *
	   * @description
	   * Handles contact update fail
	   *
	   * @inner
	   * @param {object} error Error object
	   * @type {function}
	   */
	  function onContactUpdateFail(error) {
	    state.contact.updating = false;
	
	    state.status = uiStatusError(error);
	    bus.publish(_constants.Message.CONTACT_UPDATE_FAILED, { error: error });
	    return Promise.reject(error);
	  }
	
	  /**
	   * @name applyUpdatedContact
	   *
	   * @description
	   * Applies the updated contact to the state
	   *
	   * @inner
	   * @param {object} contact data
	   * @type {function}
	   */
	  function applyUpdatedContact(_ref) {
	    var contact = _ref.contact;
	
	    state.contact.data = _vendorBbAngular2.default.copy(contact);
	    model.storeContactAsCurrent(contact);
	  }
	
	  /**
	   * @name updateContact
	   *
	   * @description
	   * Updates a contact
	   *
	   * @inner
	   * @param {object} form Contact form object
	   * @type {function}
	   * @return {Promise}
	   */
	  function updateContact(contact) {
	    if (!contact) {
	      return Promise.reject('[Contacts] Current contact is not defined');
	    }
	
	    return Promise.resolve(contact).then(onContactUpdateStart).then(function () {
	      return model.updateContact(contact);
	    }).then(onContactUpdateDone).catch(function (error) {
	      return onContactUpdateFail(error);
	    });
	  }
	
	  /**
	   * @name createContact
	   *
	   * @description
	   * create a new contact
	   *
	   * @inner
	   * @param {object} form Contact form object
	   * @type {function}
	   * @return {Promise}
	   */
	  function createContact(contact) {
	    onContactCreateStart();
	
	    return model.createContact(contact).then(onContactCreateDone).catch(function (error) {
	      return onContactCreateFail(error);
	    });
	  }
	
	  /**
	   * @name saveContact
	   *
	   * @description
	   * Save new or update existing contact
	   *
	   * @param {object} contact Contact form data
	   * @type {function}
	   * @return {Promise} Promise which is resolved once the contact is created or updated
	   */
	  function saveContact(contact) {
	    var processedContact = hooks.processContactBeforeSave(contact);
	    return state.page === Page.NEW ? createContact(processedContact) : updateContact(processedContact);
	  }
	
	  /**
	   * @name ContactController#getAccount
	   * @type {function}
	   *
	   * @description
	   * Return account by its index, return empty object if it does not exist
	   *
	   * @param {number} accountIndex Account index in list of accounts
	   * @return {Object}
	   */
	  function getAccount(accountIndex) {
	    return state.contact.data && state.contact.data.accounts[accountIndex] ? Object.assign({}, state.contact.data.accounts[accountIndex]) : null;
	  }
	
	  /**
	   * @name ContactController#addAccount
	   * @type {function}
	   *
	   * @description
	   * Add account to contact
	   *
	   * @param {Object} account Account data object
	   */
	  function addAccount(account) {
	    if (state.contact.data) {
	      state.contact.data.accounts.push(account);
	      state.contact.accountsChanged = true;
	    }
	  }
	
	  /**
	   * @name ContactController#updateAccount
	   * @type {function}
	   *
	   * @description
	   * Update existing account by accountIndex
	   *
	   * @param {Object} account Account data object
	   * @param {number} accountIndex Account index in list of accounts
	   */
	  function updateAccount(account, accountIndex) {
	    if (getAccount(accountIndex)) {
	      state.contact.data.accounts[accountIndex] = account;
	      state.contact.accountsChanged = true;
	    }
	  }
	
	  /**
	   * ContactController@delectContactAccount
	   * @type {function}
	   *
	   * @description
	   * Remove account from accounts list of contact by index
	   *
	   * @param {number} accountIndex Account index in list of accounts
	   */
	  function deleteContactAccount(accountIndex) {
	    if (getAccount(accountIndex)) {
	      state.contact.data.accounts.splice(accountIndex, 1);
	      state.contact.accountsChanged = true;
	    }
	  }
	
	  /**
	   * @name onContactDeleteConfirm
	   *
	   * @description
	   * Handles delete confirmed
	   *
	   * @inner
	   * @type {function}
	   * @return {Promise} Promise for delete contact model action
	   */
	  function onContactDeleteConfirm() {
	    var contact = state.contact.data;
	
	    if (!contact) {
	      throw new Error('[Contacts] Current contact is not defined');
	    }
	
	    bus.publish(_constants.Message.CONTACT_DELETE_START);
	    onContactDeleteStart();
	
	    return model.deleteContact(contact).then(onContactDeleteDone).catch(onContactDeleteFail);
	  }
	
	  /**
	   * @name deleteContact
	   *
	   * @description
	   * Deletes a contact by calling the `deleteContact` hook.
	   *
	   * @type {function}
	   */
	  function deleteContact() {
	    if (!state.contact.deleting) {
	      hooks.deleteContact(state.contact.data, onContactDeleteConfirm);
	    }
	  }
	
	  /**
	   * @name onContactDeleteAction
	   *
	   * @description
	   * Handles contact delete action
	   *
	   * @inner
	   * @type {function}
	   */
	  function onContactDeleteAction() {
	    deleteContact();
	  }
	
	  /**
	   * @name setupContact
	   *
	   * @description
	   * Sets the current contact or create a new contact
	   *
	   * @inner
	   * @type {function}
	   */
	  function setupContact() {
	    if (state.page === Page.NEW) {
	      state.contact.data = _vendorBbAngular2.default.copy(hooks.getNewContactObject(model.getNewContactObject()));
	    } else {
	      model.getCurrentContact().then(function (contact) {
	        state.contact.data = _vendorBbAngular2.default.copy(contact);
	      });
	    }
	  }
	
	  /**
	   * @description
	   * Sets the contact schema for validating the contact
	   *
	   * @inner
	   *
	   * @name setupContactSchema
	   * @type {function}
	   */
	  function setupContactSchema() {
	    state.contact.schema = model.getContactSchema();
	  }
	
	  /**
	   * Resets search
	   *
	   * @public
	   * @name cancelSearch
	   * @type {function}
	   */
	  function cancelSearch() {
	    Object.assign(contactsSearch, {
	      rawItems: [],
	      params: {
	        from: 0,
	        size: pageSize,
	        query: null
	      }
	    });
	
	    Object.assign(state, {
	      searching: false,
	      contactsSearch: {
	        data: null,
	        loading: false,
	        hasMore: false,
	        totalCount: 0,
	        query: ''
	      }
	    });
	
	    if (state.contacts.dirty) {
	      reload().then(selectActiveContact);
	    }
	  }
	
	  /**
	   * Handles search field input
	   *
	   * @see search
	   *
	   * @inner
	   * @name onContactsSearchInput
	   */
	  var onContactsSearchInput = throttle(function (value) {
	    if (value.length >= SEARCH_MIN_QUERY) {
	      ctrl.search(value, replace, { from: 0 });
	    }
	  }, SEARCH_INPUT_THRESHOLD);
	
	  /**
	   * Handles search cancel
	   *
	   * @see cancelSearch
	   *
	   * @inner
	   * @name onContactsSearchCancel
	   */
	  function onContactsSearchCancel() {
	    ctrl.cancelSearch();
	  }
	
	  var onContactUpdate = function onContactUpdate(data) {
	    if (data && data.contact) {
	      applyUpdatedContact(data);
	      reload();
	    } else {
	      restoreSelection();
	    }
	  };
	
	  /**
	   * @name bindEvents
	   *
	   * @description
	   * Adds subscriptions to bus events
	   *
	   * @inner
	   * @type {function}
	   */
	  function bindEvents() {
	    window.addEventListener(_constants.Message.CONTACT_DELETE, onContactDeleteAction);
	
	    window.addEventListener(_constants.Message.CONTACT_CREATE, function () {
	      bus.publish(_constants.Message.CONTACT_CREATE);
	    });
	
	    window.addEventListener(_constants.Message.CONTACT_EDIT, function () {
	      bus.publish(_constants.Message.CONTACT_EDIT);
	    });
	
	    bus.subscribe(_constants.Message.CONTACT_UPDATE_DONE, onContactUpdate);
	
	    // Reload the list on any change
	    bus.subscribe(_constants.Message.CONTACT_CREATE_DONE, function () {
	      return reload(selectActiveContact);
	    });
	
	    bus.subscribe(_constants.Message.CONTACT_DELETE_DONE, function () {
	      return reload(selectActiveContact);
	    });
	
	    if (state.page !== Page.NEW) {
	      bus.subscribe(CONTACT_SELECTED, onContactSelect);
	    }
	
	    window.addEventListener(_constants.Message.CONTACT_SEARCH, function (_ref2) {
	      var detail = _ref2.detail;
	
	      if (detail.action === searchActions.INPUT) {
	        onContactsSearchInput(detail.text);
	      } else if (detail.action === searchActions.CANCEL) {
	        onContactsSearchCancel();
	      }
	      scope.$digest();
	    });
	
	    bus.subscribe(_constants.Message.NOTIFICATION_EVENT, function (notification) {
	      state.notifications.push(notification);
	    });
	  }
	
	  /**
	   * @name ContactController#$onInit
	   *
	   * @description
	   * AngularJS Lifecycle hook used to initialize the controller
	   *
	   * @type {function}
	   * @returns {Promise.<void>} Promise which is resolved once contoller is initialized,
	   *   or rejected in case of errors
	   */
	  function $onInit() {
	    var loadRequest = load().then(function () {
	      // Update default contact data only if it's loaded initially
	      state.contact.data = getSelectedContact(state.contact.data);
	      state.initialLoading = false;
	    }).then(function () {
	      bbIntents.handle(_constants.IntentsKeys.CONTACT_CREATE, showNewContactForm);
	      bbIntents.init();
	    });
	
	    setupContactSchema();
	    setupContact();
	    bindEvents();
	
	    /**
	     * This event (cxp.item.loaded) is deprecated in Mobile SDK version > 3.0
	     * and will be removed with the update to widget collection 3 (WC3)
	     */
	    bus.publish(_constants.Message.CXP_ITEM_LOADED, {
	      id: widget.getId()
	    });
	
	    bus.publish(_constants.Message.BB_ITEM_LOADED, {
	      id: widget.getId()
	    });
	
	    return loadRequest;
	  }
	
	  Object.assign(ctrl, {
	    state: state,
	    dismissTime: dismissTime,
	    selectContact: selectContact,
	    deleteContact: deleteContact,
	    hasContacts: hasContacts,
	    hasSearchContacts: hasSearchContacts,
	    loadMore: loadMore,
	    saveContact: saveContact,
	    showNewContactForm: showNewContactForm,
	    showEditContactForm: showEditContactForm,
	    closeContactDetails: closeContactDetails,
	    cancelContactForm: cancelContactForm,
	    search: search,
	    searchMore: searchMore,
	    cancelSearch: cancelSearch,
	    /* Lifecycle hooks */
	    $onInit: $onInit,
	    changePage: changePage,
	    getAccount: getAccount,
	    addAccount: addAccount,
	    updateAccount: updateAccount,
	    deleteContactAccount: deleteContactAccount
	  });
	}
	
	exports.default = ContactController;

/***/ }),

/***/ 80:
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * @description
	 * Widget events enum (events generated by the widget)
	 *
	 * @name Event
	 * @type {object}
	 */
	var Event = {
	  CONTACT_CREATE_START: 'bb.event.contact.create.start',
	  CONTACT_CREATE_DONE: 'bb.event.contact.create.done',
	  CONTACT_CREATE_FAILED: 'bb.event.contact.create.failed',
	  CONTACT_DELETE_START: 'bb.event.contact.delete.start',
	  CONTACT_DELETE_DONE: 'bb.event.contact.delete.done',
	  CONTACT_DELETE_FAILED: 'bb.event.contact.delete.failed',
	  CONTACT_SELECTED: 'bb.event.contact.selected',
	  CONTACT_UPDATE_START: 'bb.event.contact.update.start',
	  CONTACT_UPDATE_DONE: 'bb.event.contact.update.done',
	  CONTACT_UPDATE_FAILED: 'bb.event.contact.update.failed',
	  CONTACT_SEARCH: 'bb.event.contact.search',
	
	  CONTACT_SERVER_ERROR: 'bb.event.contact.server.error',
	  NOTIFICATION_EVENT: 'bb.event.notifications.notify',
	
	  CXP_ITEM_LOADED: 'cxp.item.loaded',
	  BB_ITEM_LOADED: 'bb.item.loaded'
	};
	
	/**
	 * @description
	 * Widget actions enum
	 *
	 * @name Action
	 * @type {object}
	 */
	var Action = {
	  CONTACT_CREATE: 'bb.action.contact.create',
	  CONTACT_EDIT: 'bb.action.contact.edit',
	  CONTACT_DELETE: 'bb.action.contact.delete'
	};
	
	/**
	 * @description
	 * Widget messages enum
	 *
	 * @name Message
	 * @type {object}
	 */
	var Message = exports.Message = Object.assign({}, Action, Event);
	
	/**
	 * @deprecated since version 2.2
	 * Use state's isError flag to determine if message is success or error
	 *
	 * @description
	 * List of css-classes to be used for notification
	 *
	 * @name StatusClasses
	 * @type {object}
	 */
	var StatusClasses = exports.StatusClasses = {
	  SUCCESS: 'success',
	  ERROR: 'warning'
	};
	
	/**
	 * @description
	 * Widget translation keys for notification messages
	 *
	 * @name TranslationKeys
	 * @type {object}
	 */
	var TranslationKeys = exports.TranslationKeys = {
	  CONTACT_CREATE_SUCCESS: 'contact.notification.created.success',
	  CONTACT_CREATE_ACCEPTED: 'contact.notification.create.accepted',
	  CONTACT_UPDATE_SUCCESS: 'contact.notification.updated.success',
	  CONTACT_UPDATE_ACCEPTED: 'contact.notification.update.accepted',
	  CONTACT_DELETE_SUCCESS: 'contact.notification.deleted.success',
	  CONTACT_DELETE_ACCEPTED: 'contact.notification.delete.accepted',
	  CONTACT_UNEXPECTED: 'contact.model.error.unexpected'
	};
	
	/**
	 * @description
	 * Widget intents to be handled
	 *
	 * @name IntentsKeys
	 * @type {object}
	 */
	var IntentsKeys = exports.IntentsKeys = {
	  CONTACT_CREATE: 'go.contact.create'
	};

/***/ }),

/***/ 81:
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.deleteContact = deleteContact;
	exports.getSelectedContact = getSelectedContact;
	exports.selectPrevContact = selectPrevContact;
	exports.returnContactIfExists = returnContactIfExists;
	exports.processContacts = processContacts;
	exports.processSearchContacts = processSearchContacts;
	exports.processRequestParams = processRequestParams;
	exports.processSearchRequestParams = processSearchRequestParams;
	exports.getNewContactObject = getNewContactObject;
	exports.processContactBeforeSave = processContactBeforeSave;
	/**
	 * @name Hooks
	 * @type {object}
	 *
	 * @description
	 * Hooks for widget-bb-contact-ng
	 */
	
	/**
	 * @name deleteContact
	 *
	 * @description
	 * deleteContact default hook
	 *
	 * @param {object} contact Contact object
	 * @param {function} confirm Function to confirm delete
	 * @type {function}
	 */
	function deleteContact(contact, confirm) {
	  confirm();
	}
	
	/**
	 * @name getSelectedContact
	 *
	 * @description
	 * getSelectedContact default hook
	 *
	 * @param {object} contacts Contacts list
	 * @param {object} selectedContact Selected contact
	 * @type {function}
	 * @returns {object} selectedContact
	 */
	function getSelectedContact(contacts, selectedContact) {
	  return selectedContact;
	}
	
	/**
	 * @name selectPrevContact
	 *
	 * @description
	 * Returns previous (or the first) contact based
	 * on the currently selected item id or item index (deprecated).
	 *
	 * @param {array.<object>} contacts Processed contacts
	 * @param {number} [index=0] Currently selected contact index (deprecated)
	 * @param {object} [contact] Currently selected contact
	 * @type {function}
	 * @returns {object} Previous or the first contact from the contacts
	 */
	function selectPrevContact(contacts) {
	  var index = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
	  var contact = arguments[2];
	
	  var contactIndex = (contacts || []).findIndex(function (item) {
	    return item.id === contact.id;
	  });
	  var firstContact = contacts ? contacts[0] : null;
	  return contactIndex > 0 ? contacts[contactIndex - 1] : firstContact;
	}
	
	/**
	 * @name returnContactIfExists
	 *
	 * @description
	 * Returns contact if it exists in contacts group, otherwise returns false result
	 *
	 * @param contacts Array of contacts
	 * @param contact Contact object
	 * @type {function}
	 * @return {*} Specifies if contact exists in the array
	 */
	function returnContactIfExists(contacts, contact) {
	  if (!Array.isArray(contacts)) {
	    return false;
	  }
	
	  var index = contacts.findIndex(function (item) {
	    return item.id === contact.id;
	  });
	  if (index >= 0) {
	    return contacts[index];
	  }
	
	  return false;
	}
	
	/**
	 * @name processContacts
	 *
	 * @description
	 * processContacts default hook
	 *
	 * @param {array.<object>} contacts
	 * @type {function}
	 * @returns {array.<object>} contacts
	 */
	function processContacts(contacts) {
	  return contacts;
	}
	
	/**
	 * @description
	 * processSearchContacts default hook
	 *
	 * @name processSearchContacts
	 * @type {function}
	 * @param {array.<object>} contacts Original list of searched contacts
	 * @returns {array.<object>} Processed the list of searched contacts
	 */
	function processSearchContacts() {
	  var contacts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
	
	  return contacts;
	}
	
	/**
	 * @name processRequestParams
	 *
	 * @description
	 * processRequestParams default hook
	 *
	 * @param {object} defaultParams
	 * @param {object} params
	 * @type {function}
	 * @returns {object} processed request parameters
	 */
	function processRequestParams(defaultParams, params) {
	  return Object.assign({}, defaultParams, params);
	}
	
	/**
	 * @name processSearchRequestParams
	 *
	 * @description
	 * processSearchRequestParams default hook
	 *
	 * @param {object} defaultParams
	 * @param {object} params
	 * @type {function}
	 * @returns {object} processed request parameters
	 */
	function processSearchRequestParams(defaultParams, params) {
	  return Object.assign({}, defaultParams, params);
	}
	
	/**
	 * @name getNewContactObject
	 *
	 * @description
	 * getNewContactObject default hook
	 *
	 * @param {object} contact New Contact object
	 * @type {function}
	 * @returns {object} Processed new Contact object
	 */
	function getNewContactObject(contact) {
	  return contact;
	}
	
	/**
	 * @name processContactBeforeSave
	 *
	 * @description
	 * processContactBeforeSave default hook
	 *
	 * @param {object} contact Contact object to be created/updated
	 * @type {function}
	 * @returns {object} Processed Contact object
	 */
	function processContactBeforeSave(contact) {
	  return contact;
	}

/***/ })

/******/ })
});
;
//# sourceMappingURL=widget-bb-contact-ng.js.map