(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vendor-bb-angular-ng-messages"), require("ui-bb-i18n-ng"), require("ui-bb-format-amount"), require("ui-bb-iban-ng"), require("ui-bbm-amount-field-ng"), require("ui-bbm-beneficiary-select-ng"), require("ui-bbm-switch-ng"), require("ui-bbm-textfield-ng"), require("lib-bbm-plugins"));
	else if(typeof define === 'function' && define.amd)
		define("ext-bbm-initiate-payment-form-ng", ["vendor-bb-angular-ng-messages", "ui-bb-i18n-ng", "ui-bb-format-amount", "ui-bb-iban-ng", "ui-bbm-amount-field-ng", "ui-bbm-beneficiary-select-ng", "ui-bbm-switch-ng", "ui-bbm-textfield-ng", "lib-bbm-plugins"], factory);
	else if(typeof exports === 'object')
		exports["ext-bbm-initiate-payment-form-ng"] = factory(require("vendor-bb-angular-ng-messages"), require("ui-bb-i18n-ng"), require("ui-bb-format-amount"), require("ui-bb-iban-ng"), require("ui-bbm-amount-field-ng"), require("ui-bbm-beneficiary-select-ng"), require("ui-bbm-switch-ng"), require("ui-bbm-textfield-ng"), require("lib-bbm-plugins"));
	else
		root["ext-bbm-initiate-payment-form-ng"] = factory(root["vendor-bb-angular-ng-messages"], root["ui-bb-i18n-ng"], root["ui-bb-format-amount"], root["ui-bb-iban-ng"], root["ui-bbm-amount-field-ng"], root["ui-bbm-beneficiary-select-ng"], root["ui-bbm-switch-ng"], root["ui-bbm-textfield-ng"], root["lib-bbm-plugins"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_3__, __WEBPACK_EXTERNAL_MODULE_8__, __WEBPACK_EXTERNAL_MODULE_37__, __WEBPACK_EXTERNAL_MODULE_38__, __WEBPACK_EXTERNAL_MODULE_39__, __WEBPACK_EXTERNAL_MODULE_40__, __WEBPACK_EXTERNAL_MODULE_41__, __WEBPACK_EXTERNAL_MODULE_42__, __WEBPACK_EXTERNAL_MODULE_45__) {
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

	module.exports = __webpack_require__(36);

/***/ }),
/* 1 */,
/* 2 */,
/* 3 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/***/ }),
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
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
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */
/***/ (function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];
	
		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};
	
		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(self.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];
	
	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}
	
		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();
	
		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";
	
		var styles = listToStyles(list);
		addStylesToDom(styles, options);
	
		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}
	
	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}
	
	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}
	
	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}
	
	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}
	
	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}
	
	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}
	
	function addStyle(obj, options) {
		var styleElement, update, remove;
	
		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}
	
		update(obj);
	
		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}
	
	var replaceText = (function () {
		var textStore = [];
	
		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();
	
	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;
	
		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}
	
	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
	
		if(media) {
			styleElement.setAttribute("media", media)
		}
	
		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}
	
	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;
	
		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}
	
		var blob = new Blob([css], { type: "text/css" });
	
		var oldSrc = linkElement.href;
	
		linkElement.href = URL.createObjectURL(blob);
	
		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ }),
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.dependencyKeys = exports.events = exports.hooks = exports.helpers = undefined;
	
	var _uiBbFormatAmount = __webpack_require__(37);
	
	var _uiBbFormatAmount2 = _interopRequireDefault(_uiBbFormatAmount);
	
	var _uiBbI18nNg = __webpack_require__(8);
	
	var _uiBbI18nNg2 = _interopRequireDefault(_uiBbI18nNg);
	
	var _uiBbIbanNg = __webpack_require__(38);
	
	var _uiBbIbanNg2 = _interopRequireDefault(_uiBbIbanNg);
	
	var _uiBbmAmountFieldNg = __webpack_require__(39);
	
	var _uiBbmAmountFieldNg2 = _interopRequireDefault(_uiBbmAmountFieldNg);
	
	var _uiBbmBeneficiarySelectNg = __webpack_require__(40);
	
	var _uiBbmBeneficiarySelectNg2 = _interopRequireDefault(_uiBbmBeneficiarySelectNg);
	
	var _uiBbmSwitchNg = __webpack_require__(41);
	
	var _uiBbmSwitchNg2 = _interopRequireDefault(_uiBbmSwitchNg);
	
	var _uiBbmTextfieldNg = __webpack_require__(42);
	
	var _uiBbmTextfieldNg2 = _interopRequireDefault(_uiBbmTextfieldNg);
	
	var _vendorBbAngularNgMessages = __webpack_require__(3);
	
	var _vendorBbAngularNgMessages2 = _interopRequireDefault(_vendorBbAngularNgMessages);
	
	var _hooks = __webpack_require__(43);
	
	var extHooks = _interopRequireWildcard(_hooks);
	
	var _helpers = __webpack_require__(44);
	
	var _helpers2 = _interopRequireDefault(_helpers);
	
	var _events = __webpack_require__(46);
	
	var _events2 = _interopRequireDefault(_events);
	
	__webpack_require__(47);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * @module ext-bbm-initiate-payment-form-ng
	 *
	 * @description
	 * Mobile extension for the payment form in the Mobile initiate payment widget.
	 *
	 * @example
	 * <!-- File model.xml of widget-bbm-initiate-payment-ng -->
	 * <property name="extension" viewHint="text-input,admin">
	 *   <value type="string">ext-bbm-initiate-payment-form-ng</value>
	 * </property>
	 */
	var helpers = exports.helpers = _helpers2.default;
	var hooks = exports.hooks = extHooks;
	var events = exports.events = _events2.default;
	
	var dependencyKeys = exports.dependencyKeys = [_uiBbFormatAmount2.default, _uiBbI18nNg2.default, _uiBbIbanNg2.default, _uiBbmAmountFieldNg2.default, _uiBbmBeneficiarySelectNg2.default, _uiBbmSwitchNg2.default, _uiBbmTextfieldNg2.default, _vendorBbAngularNgMessages2.default];

/***/ }),
/* 37 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_37__;

/***/ }),
/* 38 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_38__;

/***/ }),
/* 39 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_39__;

/***/ }),
/* 40 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_40__;

/***/ }),
/* 41 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_41__;

/***/ }),
/* 42 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_42__;

/***/ }),
/* 43 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	/* eslint-disable import/prefer-default-export */
	
	/**
	 * @description
	 * Hooks for widget-bbm-initiate-payment-ng
	 *
	 * @name Hooks
	 * @type {Object}
	 */
	
	/**
	 * @description
	 * Groups the given list of contacts by the first character.
	 *
	 * @name groupContacts
	 * @type {function}
	 *
	 * @param {Array.<Object>} contacts
	 * @returns {Object}
	 * @inner
	 */
	var groupContacts = function groupContacts(contacts) {
	  return contacts.reduce(function (result, contact) {
	    var char = contact.name.charAt(0).toUpperCase();
	
	    if (!result[char]) {
	      // Allow mutation of a local empty object
	      // See: https://github.com/airbnb/javascript/issues/719
	      // eslint-disable-next-line no-param-reassign
	      result[char] = [];
	    }
	
	    result[char].push(contact);
	
	    return result;
	  }, {});
	};
	
	/**
	 * @description
	 * Processes the given list of contacts by grouping them
	 * by the first character of the contact's name.
	 *
	 * @name processContacts
	 * @type {function}
	 *
	 * @param {Array.<AccountView>} contacts Original list of contacts from the model.
	 * @returns {Array.<ContactsGroup>} Groups of contacts.
	 * @inner
	 */
	var processContacts = function processContacts(contacts) {
	  var groups = groupContacts(contacts);
	
	  return Object.keys(groups).sort().map(function (char) {
	    return {
	      contacts: groups[char],
	      char: char
	    };
	  });
	};
	
	/**
	 * @description
	 * Hook for processing the list of all possible beneficiaries.
	 *
	 * @name Hooks#processBeneficiaries
	 * @type {function}
	 *
	 * @param {Array.<AccountView>} creditAccounts
	 * @param {Array.<AccountView>} contacts
	 * @returns {Beneficiaries}
	 */
	var processBeneficiaries = exports.processBeneficiaries = function processBeneficiaries(creditAccounts, contacts) {
	  return {
	    all: [].concat(_toConsumableArray(creditAccounts), _toConsumableArray(contacts)),
	    creditAccounts: creditAccounts,
	    contacts: processContacts(contacts)
	  };
	};
	
	/**
	 * @typedef {Object} AccountView
	 * @property {string} id The internal account identifier
	 * @property {string} name The account's name, suitable for display to users
	 * @property {?string} identifier The identifier of the account from the user's perspective
	 * @property {?string} amount The most important associated value to be displayed
	 * @property {?string} currency Account currency
	 * @property {?boolean} external Whether the account is external
	 */
	
	/**
	 * @typedef {Object} Beneficiaries
	 * @property {Array.<AccountView>} all The list of all beneficiaries.
	 * @property {Array.<AccountView>} creditAccounts The list of credit accounts.
	 * @property {Array.<ContactsGroup>} contacts The list of contacts groups.
	 */
	
	/**
	 * @typedef {Object} ContactsGroup
	 * @property {string} char The first character of a contact name
	 * @property {Array.<AccountView>} contacts The list of contacts
	 */

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _TransferFrequencyMes;
	
	var _libBbmPlugins = __webpack_require__(45);
	
	var _libBbmPlugins2 = _interopRequireDefault(_libBbmPlugins);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	var RecurrenceEnding = {
	  NEVER: 'NEVER',
	  ON: 'ON',
	  AFTER: 'AFTER'
	};
	
	var TransferFrequency = {
	  ONCE: 'ONCE',
	  DAILY: 'DAILY',
	  WEEKLY: 'WEEKLY',
	  MONTHLY: 'MONTHLY',
	  QUARTERLY: 'QUARTERLY',
	  YEARLY: 'YEARLY'
	};
	
	var TransferFrequencyMessage = (_TransferFrequencyMes = {}, _defineProperty(_TransferFrequencyMes, TransferFrequency.ONCE, 'message.payment.schedule.frequency.once'), _defineProperty(_TransferFrequencyMes, TransferFrequency.DAILY, 'message.payment.schedule.frequency.daily'), _defineProperty(_TransferFrequencyMes, TransferFrequency.WEEKLY, 'message.payment.schedule.frequency.weekly'), _defineProperty(_TransferFrequencyMes, TransferFrequency.MONTHLY, 'message.payment.schedule.frequency.monthly'), _defineProperty(_TransferFrequencyMes, TransferFrequency.QUARTERLY, 'message.payment.schedule.frequency.quarterly'), _defineProperty(_TransferFrequencyMes, TransferFrequency.YEARLY, 'message.payment.schedule.frequency.yearly'), _TransferFrequencyMes);
	
	var isToday = function isToday(dateStr) {
	  var date = new Date(dateStr);
	  var today = new Date();
	
	  return date.getDate() === today.getDate() && date.getMonth() === today.getMonth() && date.getFullYear() === today.getFullYear();
	};
	
	/**
	 * @description
	 * Helpers for ext-bbm-initiate-payment-form-ng
	 *
	 * @name Helpers
	 * @type {Object}
	 */
	
	exports.default = function (_ref) {
	  var _RecurrenceEndingStri;
	
	  var $filter = _ref.$filter;
	
	  var dateFilter = $filter('date');
	  var i18n = $filter('i18n');
	
	  var RecurrenceEndingString = (_RecurrenceEndingStri = {}, _defineProperty(_RecurrenceEndingStri, RecurrenceEnding.NEVER, function () {
	    return i18n('message.payment.schedule.frequency.end.never');
	  }), _defineProperty(_RecurrenceEndingStri, RecurrenceEnding.AFTER, function (schedule) {
	    return schedule.repeat + ' ' + i18n('message.payment.schedule.frequency.end.after');
	  }), _defineProperty(_RecurrenceEndingStri, RecurrenceEnding.ON, function (schedule) {
	    var endDate = dateFilter(schedule.endDate, 'mediumDate');
	    return i18n('message.payment.schedule.frequency.end.on') + ' ' + endDate;
	  }), _RecurrenceEndingStri);
	
	  var getScheduleFrequencyString = function getScheduleFrequencyString(schedule) {
	    return i18n(TransferFrequencyMessage[schedule.transferFrequency]);
	  };
	
	  var getScheduleEndingString = function getScheduleEndingString(schedule) {
	    return RecurrenceEndingString[schedule.end](schedule);
	  };
	
	  var getScheduleStartDateString = function getScheduleStartDateString(schedule) {
	    return isToday(schedule.startDate) ? i18n('message.payment.schedule.today') : 'on ' + dateFilter(schedule.startDate, 'mediumDate');
	  };
	
	  var showUrgentPaymentInfo = function showUrgentPaymentInfo() {
	    var alertDialog = _libBbmPlugins2.default.AlertDialog;
	    var infoOptions = {
	      title: i18n('message.payment.urgentPayment.info.title'),
	      message: i18n('message.payment.urgentPayment.info.message'),
	      buttons: [{
	        type: alertDialog().ButtonType.NEUTRAL,
	        text: i18n('message.payment.urgentPayment.info.button.ok'),
	        callbackFn: 'OK'
	      }]
	    };
	
	    return alertDialog().show(infoOptions);
	  };
	
	  var isRecurring = function isRecurring(schedule) {
	    return schedule.transferFrequency !== TransferFrequency.ONCE;
	  };
	
	  return {
	    /**
	     * @description
	     * Decides whether to show the "Save contact" checkbox in UI or not.
	     * Returns true, if the checkbox is visible, and false otherwise.
	     *
	     * If the checkbox is not visible, sets the `saveContact` flag to false.
	     *
	     * @name Helpers#checkSaveContactVisibility
	     * @type {function}
	     *
	     * @param {FormController} ctrl Instance of the Form controller
	     * @param {Object} form Instance of the form
	     * @returns {boolean}
	     */
	    checkSaveContactVisibility: function checkSaveContactVisibility(ctrl, form) {
	      var isVisible = form.beneficiary.$valid && ctrl.canSaveContact();
	
	      if (!isVisible) {
	        ctrl.setSaveContact(false);
	      }
	
	      return isVisible;
	    },
	
	    /**
	     * @description
	     * Returns the amount of the given account that should be displayed.
	     *
	     * @name Helpers#getAccountDisplayAmount
	     * @type {function}
	     *
	     * @param {module:widget-bbm-initiate-payment-ng.AccountView} account Account to display
	     * @returns {string}
	     */
	    getAccountDisplayAmount: function getAccountDisplayAmount(account) {
	      return account.primaryValue || account.amount;
	    },
	
	    /**
	     * @description
	     * Returns a summary of the given payment schedule as a string.
	     *
	     * @name Helpers#getScheduleSummary
	     * @type {function}
	     *
	     * @param {Schedule} schedule
	     * @returns {string}
	     */
	    getScheduleSummary: function getScheduleSummary(schedule) {
	      if (!schedule) return '';
	
	      var startingFrom = i18n('message.payment.schedule.startingFrom');
	
	      var startDate = getScheduleStartDateString(schedule);
	      var frequency = getScheduleFrequencyString(schedule);
	      var ending = getScheduleEndingString(schedule);
	
	      return isRecurring(schedule) ? frequency + ', ' + startingFrom + ' ' + startDate + ', ' + ending : frequency + ', ' + startDate;
	    },
	
	    /**
	     * @description
	     * Checks for the given payment whether it is allowed to create a new beneficiary
	     * instead of selecting an existing one from the list of beneficiaries.
	     *
	     * Returns true, if a user can create a beneficiary, otherwise false.
	     *
	     * @name isCreateBeneficiaryAllowed
	     * @type {function}
	     *
	     * @param {Payment} payment Payment object
	     * @returns {boolean}
	     */
	    isCreateBeneficiaryAllowed: function isCreateBeneficiaryAllowed(payment) {
	      return Boolean(payment && (!payment.debitAccount || payment.debitAccount.externalTransferAllowed));
	    },
	
	    /**
	     * @description
	     * Checks if urgent payment is available for the current transaction.
	     *
	     * Returns true, if beneficiary allows urgent payments, payment is scheduled only for once,
	     * payment is not scheduled for future, otherwise false.
	     *
	     * @name isUrgentVisible
	     * @type {function}
	     *
	     * @param {Payment} payment Payment object
	     * @returns {boolean}
	     */
	    isUrgentVisible: function isUrgentVisible(payment, ctrl) {
	      if (!ctrl.preferences.urgent) {
	        return false;
	      }
	
	      var isAllowed = ctrl.isUrgentPaymentAllowed(payment);
	      if (!isAllowed) {
	        ctrl.setUrgentPayment(false);
	      }
	
	      return isAllowed;
	    },
	
	    /**
	     * @description
	     * Shows information about urgent payment.
	     *
	     * @name onUrgentPaymentInfoClick
	     * @type {function}
	     */
	    onUrgentPaymentInfoClick: showUrgentPaymentInfo,
	
	    /**
	     * @description
	     * Checks whether the form is valid. Returns true, if the form is valid, false otherwise.
	     *
	     * @name isPaymentFormValid
	     * @type {function}
	     *
	     * @param {Payment} payment Payment object
	     * @param {Object} form Instance of the form
	     * @returns {boolean}
	     */
	    isPaymentFormValid: function isPaymentFormValid(payment, form) {
	      return Boolean(payment && payment.beneficiary && payment.debitAccount && form.$valid);
	    },
	
	    /**
	     * @description
	     * Handles the payment form submit.
	     *
	     * @name onPaymentFormSubmit
	     * @type {function}
	     *
	     * @param {FormController} ctrl Form controller instance
	     * @param {Object} form Angular form instance
	     */
	    onPaymentFormSubmit: function onPaymentFormSubmit(ctrl, form) {
	      form.$setUntouched();
	      ctrl.submitPayment();
	    }
	  };
	};

/***/ }),
/* 45 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_45__;

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _libBbmPlugins = __webpack_require__(45);
	
	var _libBbmPlugins2 = _interopRequireDefault(_libBbmPlugins);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; } // Temporary disable capsInNew until it fixed in lib-bbm-plugins
	/* eslint new-cap: ["error", { "capIsNew": false }] */
	
	
	/**
	 * @description
	 * Events that the extension subscribes to.
	 *
	 * @name Event
	 * @type {Object}
	 * @inner
	 */
	var Event = {
	  PAYMENT_DONE: 'bb.event.payment.done',
	  PAYMENT_FAILED: 'bb.event.payment.failed',
	  PAYMENT_START: 'bb.event.payment.started',
	  SELECT_ACCOUNT_LOAD_START: 'bb.event.payment.selectAccount.load.start',
	  SELECT_ACCOUNT_LOAD_DONE: 'bb.event.payment.selectAccount.load.done',
	  SELECT_ACCOUNT_FAILED: 'bb.event.payment.selectAccount.failed'
	};
	
	/**
	 * @name Preference
	 * @type {Object}
	 * @inner
	 */
	var Preference = {
	  PAYMENT_REVIEW_STEP: 'bb.payment.review.step'
	};
	
	/**
	 * @description
	 * Delay in milliseconds before the spinner that indicates loading of accounts gets displayed.
	 *
	 * @name LOAD_ACCOUNTS_SPINNER_DELAY
	 * @type {number}
	 * @inner
	 */
	var LOAD_ACCOUNTS_SPINNER_DELAY = 100;
	
	exports.default = function (_ref) {
	  var _events;
	
	  var $filter = _ref.$filter,
	      widget = _ref.widget;
	
	  var i18n = $filter('i18n');
	  var hasReviewStep = widget.getBooleanPreference(Preference.PAYMENT_REVIEW_STEP);
	
	  var timeoutId = void 0;
	
	  var events = (_events = {}, _defineProperty(_events, Event.SELECT_ACCOUNT_LOAD_START, function (_ref2) {
	    var type = _ref2.type;
	
	    timeoutId = setTimeout(function () {
	      _libBbmPlugins2.default.ActivityIndicator().show(i18n(type === 'debit' ? 'message.payment.debitAccounts.load' : 'message.payment.beneficiaries.load'));
	    }, LOAD_ACCOUNTS_SPINNER_DELAY);
	  }), _defineProperty(_events, Event.SELECT_ACCOUNT_LOAD_DONE, function () {
	    _libBbmPlugins2.default.ActivityIndicator().hide();
	    clearTimeout(timeoutId);
	  }), _defineProperty(_events, Event.SELECT_ACCOUNT_FAILED, function (_ref3) {
	    var type = _ref3.type;
	
	    _libBbmPlugins2.default.ActivityIndicator().hide();
	    clearTimeout(timeoutId);
	
	    _libBbmPlugins2.default.Snackbar().error(i18n(type === 'debit' ? 'message.payment.debitAccounts.load.failed' : 'message.payment.beneficiaries.load.failed'));
	  }), _events);
	
	  if (!hasReviewStep) {
	    var _Object$assign;
	
	    Object.assign(events, (_Object$assign = {}, _defineProperty(_Object$assign, Event.PAYMENT_START, function () {
	      _libBbmPlugins2.default.ActivityIndicator().show(i18n('message.payment.start'));
	    }), _defineProperty(_Object$assign, Event.PAYMENT_DONE, function () {
	      _libBbmPlugins2.default.ActivityIndicator().hide();
	      _libBbmPlugins2.default.Snackbar().success(i18n('message.payment.done'));
	    }), _defineProperty(_Object$assign, Event.PAYMENT_FAILED, function () {
	      _libBbmPlugins2.default.ActivityIndicator().hide();
	      _libBbmPlugins2.default.Snackbar().error(i18n('message.payment.failed'));
	    }), _Object$assign));
	  }
	
	  return events;
	};

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(48);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(27)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../../node_modules/css-loader/index.js!./index.css", function() {
				var newContent = require("!!../../node_modules/css-loader/index.js!./index.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(26)();
	// imports
	
	
	// module
	exports.push([module.id, ".ext-bbm-initiate-payment-form-ng {\n  position: relative;\n}\n", ""]);
	
	// exports


/***/ })
/******/ ])
});
;
//# sourceMappingURL=ext-bbm-initiate-payment-form-ng.js.map