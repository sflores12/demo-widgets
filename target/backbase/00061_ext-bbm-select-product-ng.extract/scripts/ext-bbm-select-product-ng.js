(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("ui-bb-i18n-ng"), require("ui-bb-avatar-ng"));
	else if(typeof define === 'function' && define.amd)
		define("ext-bbm-select-product-ng", ["ui-bb-i18n-ng", "ui-bb-avatar-ng"], factory);
	else if(typeof exports === 'object')
		exports["ext-bbm-select-product-ng"] = factory(require("ui-bb-i18n-ng"), require("ui-bb-avatar-ng"));
	else
		root["ext-bbm-select-product-ng"] = factory(root["ui-bb-i18n-ng"], root["ui-bb-avatar-ng"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_15__, __WEBPACK_EXTERNAL_MODULE_56__) {
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

	module.exports = __webpack_require__(57);

/***/ }),

/***/ 15:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_15__;

/***/ }),

/***/ 56:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_56__;

/***/ }),

/***/ 57:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.hooks = exports.helpers = exports.dependencyKeys = undefined;
	
	var _uiBbAvatarNg = __webpack_require__(56);
	
	var _uiBbAvatarNg2 = _interopRequireDefault(_uiBbAvatarNg);
	
	var _uiBbI18nNg = __webpack_require__(15);
	
	var _uiBbI18nNg2 = _interopRequireDefault(_uiBbI18nNg);
	
	var _hooks = __webpack_require__(58);
	
	var extHooks = _interopRequireWildcard(_hooks);
	
	var _helpers = __webpack_require__(59);
	
	var _helpers2 = _interopRequireDefault(_helpers);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * @module ext-bbm-select-product-ng
	 *
	 * @description
	 * Mobile extension for a select product step in the Payment widget.
	 *
	 * @example
	 * <!-- Contact widget model.xml -->
	 * <property name="extension" viewHint="text-input,admin">
	 *   <value type="string">ext-bbm-select-product-ng</value>
	 * </property>
	 */
	var dependencyKeys = exports.dependencyKeys = [_uiBbI18nNg2.default, _uiBbAvatarNg2.default];
	
	var helpers = exports.helpers = _helpers2.default;
	var hooks = exports.hooks = extHooks;

/***/ }),

/***/ 58:
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.groupAccountsTo = groupAccountsTo;
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	/* eslint-disable import/prefer-default-export */
	
	/**
	 * @name Hooks
	 * @type {object}
	 *
	 * @description
	 * Hooks for widget-bb-payment-ng
	 */
	
	/**
	 * @name compareStr
	 * @type {function}
	 *
	 * @description
	 * Compare function that defines an alphabetical sort order.
	 *
	 * @param {string} strA
	 * @param {string} strB
	 * @returns {number}
	 * @inner
	 */
	var compareStr = function compareStr(strA, strB) {
	  if (strA > strB) {
	    return 1;
	  } else if (strA < strB) {
	    return -1;
	  }
	  return 0;
	};
	
	/**
	 * @param {array<object>} accounts
	 * @returns {array<object>}
	 * @inner
	 */
	var filterOwnAccounts = function filterOwnAccounts(accounts) {
	  return accounts.filter(function (account) {
	    return !account.external;
	  });
	};
	
	var filterContacts = function filterContacts(accounts) {
	  return accounts.filter(function (account) {
	    return account.external;
	  });
	};
	
	/**
	 * @name getContactSortStr
	 * @type {function}
	 * @param {object} contact
	 * @returns {string}
	 * @inner
	 */
	var getContactSortStr = function getContactSortStr(contact) {
	  return contact.name.toLowerCase();
	};
	
	/**
	 * @name groupContacts
	 * @type {function}
	 *
	 * @param {object[]} contacts
	 * @returns {object}
	 * @inner
	 */
	var groupContacts = function groupContacts(contacts) {
	  return contacts.reduce(function (result, contact) {
	    var char = contact.name.charAt(0).toUpperCase();
	
	    if (!result[char]) {
	      // Allow mutation of a local empty object
	      // See: https://github.com/airbnb/javascript/issues/719
	      /* eslint-disable no-param-reassign */
	      result[char] = [];
	    }
	
	    result[char].push(contact);
	
	    return result;
	  }, {});
	};
	
	/**
	 * @name processContacts
	 * @type {function}
	 *
	 * @param {array<object>} contacts Raw contacts list to process
	 * @returns {array<object>} Processed list of contacts
	 * @inner
	 */
	var processContacts = function processContacts() {
	  var contacts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
	
	  var groups = groupContacts(contacts);
	  return Object.keys(groups).sort().map(function (char) {
	    return {
	      contacts: groups[char].sort(function (contactA, contactB) {
	        return compareStr(getContactSortStr(contactA), getContactSortStr(contactB));
	      }),
	      char: char,
	      external: true
	    };
	  });
	};
	
	/**
	 * @name Hooks#groupAccountsTo
	 * @type {function}
	 *
	 * @description
	 * Hook for grouping accounts. Used only for Mobile.
	 *
	 * @param {array<object>} accountsTo List of beneficiary accounts
	 * @returns {array<object>} List of grouped accounts
	 */
	function groupAccountsTo(accountsTo) {
	  return [].concat(_toConsumableArray(filterOwnAccounts(accountsTo)), _toConsumableArray(processContacts(filterContacts(accountsTo))));
	}

/***/ }),

/***/ 59:
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * @name Helpers
	 * @type {object}
	 *
	 * @description
	 * Helpers for ext-bbm-select-product-ng
	 */
	
	var Event = {
	  PAYMENT_FORM_STEP: 'bb.event.payment.form.step',
	  ACCOUNT_SELECTED: 'bb.event.account.selected'
	};
	
	exports.default = function (_ref) {
	  var publish = _ref.publish;
	  return {
	    /**
	     * @name Helpers#hasExternalAccounts
	     * @type {function}
	     *
	     * @description
	     * Helper to check whether the given list of accounts contains some external accounts
	     *
	     * @param {array<object>} accounts List of accounts
	     * @returns {boolean} True, if there is at least one external account, false otherwise
	     */
	    hasExternalAccounts: function hasExternalAccounts(accounts) {
	      return (accounts || []).some(function (account) {
	        return account.external;
	      });
	    },
	    /**
	     * @name Helpers#onSelectAccount
	     * @type {function}
	     *
	     * @description
	     * Helper to process account select action
	     *
	     * @fires bb.event.payment.form.step
	     * @fires bb.event.account.selected
	     *
	     * @param {object} $ctrl Instance of widget angular controller
	     * @param {object} account Selected account object
	     * @returns {void}
	     */
	    onSelectAccount: function onSelectAccount($ctrl, account) {
	      var ctrl = $ctrl;
	      var isAccountsFrom = ctrl.processSelectProductType.isAccountsFrom;
	
	      if (isAccountsFrom) {
	        ctrl.payment.from = account;
	        ctrl.onAccountFromChange();
	      } else {
	        ctrl.payment.to = account;
	      }
	
	      ctrl.storePayment(ctrl.payment);
	
	      publish(Event.ACCOUNT_SELECTED, {
	        isAccountsFrom: isAccountsFrom,
	        account: account
	      });
	
	      publish(Event.PAYMENT_FORM_STEP);
	    }
	  };
	};

/***/ })

/******/ })
});
;
//# sourceMappingURL=ext-bbm-select-product-ng.js.map