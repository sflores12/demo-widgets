(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("ui-bb-i18n-ng"), require("ui-bb-avatar-ng"), require("ui-bbm-scroll-ng"));
	else if(typeof define === 'function' && define.amd)
		define("ext-bbm-contact-list-ng", ["ui-bb-i18n-ng", "ui-bb-avatar-ng", "ui-bbm-scroll-ng"], factory);
	else if(typeof exports === 'object')
		exports["ext-bbm-contact-list-ng"] = factory(require("ui-bb-i18n-ng"), require("ui-bb-avatar-ng"), require("ui-bbm-scroll-ng"));
	else
		root["ext-bbm-contact-list-ng"] = factory(root["ui-bb-i18n-ng"], root["ui-bb-avatar-ng"], root["ui-bbm-scroll-ng"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_8__, __WEBPACK_EXTERNAL_MODULE_20__, __WEBPACK_EXTERNAL_MODULE_28__) {
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

	module.exports = __webpack_require__(27);

/***/ }),
/* 1 */,
/* 2 */,
/* 3 */,
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
/* 20 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_20__;

/***/ }),
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.dependencyKeys = exports.hooks = exports.helpers = undefined;
	
	var _uiBbAvatarNg = __webpack_require__(20);
	
	var _uiBbAvatarNg2 = _interopRequireDefault(_uiBbAvatarNg);
	
	var _uiBbmScrollNg = __webpack_require__(28);
	
	var _uiBbmScrollNg2 = _interopRequireDefault(_uiBbmScrollNg);
	
	var _uiBbI18nNg = __webpack_require__(8);
	
	var _uiBbI18nNg2 = _interopRequireDefault(_uiBbI18nNg);
	
	__webpack_require__(29);
	
	var _hooks = __webpack_require__(33);
	
	var extHooks = _interopRequireWildcard(_hooks);
	
	var _helpers = __webpack_require__(34);
	
	var _helpers2 = _interopRequireDefault(_helpers);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * @module ext-bbm-contact-list-ng
	 *
	 * @description
	 * Mobile extension for a contact list in the Contacts widget.
	 *
	 * @example
	 * <!-- Contact widget model.xml -->
	 * <property name="extension" viewHint="text-input,admin">
	 *   <value type="string">ext-bbm-contact-list-ng</value>
	 * </property>
	 */
	var helpers = exports.helpers = _helpers2.default;
	
	var hooks = exports.hooks = extHooks;
	
	var dependencyKeys = exports.dependencyKeys = [_uiBbAvatarNg2.default, _uiBbI18nNg2.default, _uiBbmScrollNg2.default];

/***/ }),
/* 28 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_28__;

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(30);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(32)(content, {});
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
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(31)();
	// imports
	
	
	// module
	exports.push([module.id, "/**\n * Quick fix until the front-end building blocks get updated.\n * Please check pull request RBM2-416 on:\n * https://stash.backbase.com/projects/FBB/repos/themes/pull-requests/14/overview\n *\n * This fix will probably be available in the next release of the\n * building blocks (2.4.0)\n */\nhtml {\n  min-height: 100%;\n}\n", ""]);
	
	// exports


/***/ }),
/* 31 */
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
/* 32 */
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
/* 33 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.processContacts = processContacts;
	exports.selectPrevContact = selectPrevContact;
	/* eslint import/prefer-default-export: "off" */
	
	/**
	 * @name Hooks
	 * @type {object}
	 *
	 * @description
	 * Hooks for widget-bb-contact-ng
	 */
	
	/**
	 * @param {string} strA
	 * @param {string} strB
	 * @returns {number}
	 * @inner
	 */
	function compareStr(strA, strB) {
	  if (strA > strB) {
	    return 1;
	  } else if (strA < strB) {
	    return -1;
	  }
	  return 0;
	}
	
	/**
	 * @param {object} contact
	 * @returns {string}
	 * @private
	 */
	function getContactSortStr(contact) {
	  return contact.name.toLowerCase();
	}
	
	/**
	 * Returns first letter of the Contact's name, uppercased
	 * @param  {object} contact Contact object
	 * @return {string} Contact's first letter
	 * @inner
	 */
	function getContactNameChar(contact) {
	  return contact.name ? contact.name.charAt(0).toUpperCase() : null;
	}
	
	/**
	 * @param {array<object>} contacts
	 * @returns {object}
	 * @inner
	 */
	function groupContacts(contacts) {
	  return contacts.reduce(function (result, contact) {
	    var char = getContactNameChar(contact);
	
	    if (!result[char]) {
	      // Allow mutation of a local empty object
	      // See: https://github.com/airbnb/javascript/issues/719
	      /* eslint-disable no-param-reassign */
	      result[char] = [];
	      /* eslint-enable no-param-reassign */
	    }
	
	    result[char].push(contact);
	
	    return result;
	  }, {});
	}
	
	/**
	 * @description
	 * Hook for processing the list of contacts
	 *
	 * @name Hooks#processContacts
	 * @type {function}
	 * @param {array<object>} contacts Original list of contacts
	 * @returns {array<object>} Processed the list of contacts
	 */
	function processContacts() {
	  var contacts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
	
	  var groups = groupContacts(contacts);
	
	  return Object.keys(groups).sort(compareStr).map(function (char) {
	    return {
	      contacts: groups[char].sort(function (contactA, contactB) {
	        return compareStr(getContactSortStr(contactA), getContactSortStr(contactB));
	      }),
	      char: char
	    };
	  });
	}
	
	/**
	 * @name selectPrevContact
	 *
	 * @description
	 * Returns previous (or the first) contact based
	 * on the currently selected item id or item index (deprecated).
	 *
	 * @param {*} contacts Processed contacts
	 * @param {number} [index=0] Currently selected contact index (deprecated)
	 * @param {object} [contact] Currently selected contact
	 * @type {function}
	 * @returns {object} Previous or the first contact from the contacts
	 */
	function selectPrevContact(contacts) {
	  var index = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
	  var contact = arguments[2];
	
	  var data = contacts || [];
	  var firstContact = data && data[0] && data[0].contacts[0] || null;
	
	  if (!contact) {
	    return firstContact;
	  }
	
	  var char = getContactNameChar(contact);
	  var groupIndex = data.findIndex(function (contactGroup) {
	    return contactGroup.char === char;
	  });
	
	  if (groupIndex === -1) {
	    return firstContact;
	  }
	
	  var contactIndex = data[groupIndex].contacts.findIndex(function (item) {
	    return item.id === contact.id;
	  });
	
	  if (contactIndex > 0) {
	    // If contact is not first in the group => return previous contact
	    return data[groupIndex].contacts[contactIndex - 1];
	  } else if (contactIndex === 0 && groupIndex > 0) {
	    // If contact is first, but his group is not first => return last contact from previous group
	    var contactsArray = data[groupIndex - 1].contacts;
	    return contactsArray[contactsArray.length - 1];
	  }
	
	  return firstContact;
	}

/***/ }),
/* 34 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	/**
	 * @description
	 * Helpers for ext-bbm-contact-list-ng
	 *
	 * @name Helpers
	 * @type {Object}
	 */
	exports.default = function () {
	  /**
	   * @description
	   * Checks for the contacts presence.
	   *
	   * @name Helpers#hasContacts
	   * @type {function}
	   *
	   * @param {module:widget-bb-contact-ng.ContactController} ctrl
	   * @return {boolean}
	   */
	  var hasContacts = function hasContacts(ctrl) {
	    return Boolean(ctrl.state.contacts.data && ctrl.state.contacts.data.length);
	  };
	
	  /**
	   * @description
	   * Checks for the searched contacts presence.
	   *
	   * @name Helpers#hasSearchContacts
	   * @type {function}
	   *
	   * @param {module:widget-bb-contact-ng.ContactController} ctrl
	   * @return {boolean}
	   */
	  var hasSearchContacts = function hasSearchContacts(ctrl) {
	    return Boolean(ctrl.state.contactsSearch.data && ctrl.state.contactsSearch.data.length);
	  };
	
	  /**
	  * @description
	  * Checks for the loading state of the contacts.
	  *
	  * @name Helpers#showLoadingState
	  * @type {function}
	  *
	  * @param {module:widget-bb-contact-ng.ContactController} ctrl
	  * @return {boolean}
	  */
	  var showLoadingState = function showLoadingState(ctrl) {
	    return ctrl.state.contacts.loading && !hasContacts(ctrl);
	  };
	
	  /**
	  * @description
	  * Checks for the loading state of the contacts search.
	  *
	  * @name Helpers#showSearchLoadingState
	  * @type {function}
	  *
	  * @param {module:widget-bb-contact-ng.ContactController} ctrl
	  * @return {boolean}
	  */
	  var showSearchLoadingState = function showSearchLoadingState(ctrl) {
	    return ctrl.state.contactsSearch.loading && !hasSearchContacts(ctrl);
	  };
	
	  /**
	   * @description
	   * Checks if the searching has been failed.
	   *
	   * @name Helpers#showSearchErrorState
	   * @type {function}
	   *
	   * @param {module:widget-bb-contact-ng.ContactController} ctrl
	   * @return {boolean}
	   */
	  var showSearchErrorState = function showSearchErrorState(ctrl) {
	    return ctrl.state.contactsSearch.error && !ctrl.state.contactsSearch.loading && !hasSearchContacts(ctrl);
	  };
	
	  /**
	   * @description
	   * Checks if there are no search results.
	   *
	   * @name Helpers#showSearchEmptyState
	   * @type {function}
	   *
	   * @param {module:widget-bb-contact-ng.ContactController} ctrl
	   * @return {boolean}
	   */
	  var showSearchEmptyState = function showSearchEmptyState(ctrl) {
	    return Boolean(ctrl.state.contactsSearch.data && !ctrl.state.contactsSearch.data.length) && !ctrl.state.contactsSearch.error && !ctrl.state.contactsSearch.loading;
	  };
	
	  /**
	   * @description
	   * Checks if there are no contacts.
	   *
	   * @name Helpers#showEmptyState
	   * @type {function}
	   *
	   * @param {module:widget-bb-contact-ng.ContactController} ctrl
	   * @return {boolean}
	   */
	  var showEmptyState = function showEmptyState(ctrl) {
	    return Boolean(ctrl.state.contacts.data && !ctrl.state.contacts.data.length) && !ctrl.state.contacts.error && !ctrl.state.contacts.loading;
	  };
	
	  /**
	   * @description
	   * Checks if the loading request has been failed.
	   *
	   * @name Helpers#showErrorState
	   * @type {function}
	   *
	   * @param {module:widget-bb-contact-ng.ContactController} ctrl
	   * @return {boolean}
	   */
	  var showErrorState = function showErrorState(ctrl) {
	    return ctrl.state.contacts.error && !hasContacts(ctrl);
	  };
	
	  /**
	  * @description
	  * Checks for the search load's more loading state.
	  *
	  * @name Helpers#showSearchLoadMoreLoading
	  * @type {function}
	  *
	  * @param {module:widget-bb-contact-ng.ContactController} ctrl
	  * @return {boolean}
	  */
	  var showSearchLoadMoreLoading = function showSearchLoadMoreLoading(ctrl) {
	    return ctrl.state.contactsSearch.loading && hasSearchContacts(ctrl);
	  };
	
	  /**
	  * @description
	  * Checks for the load's more loading state.
	  *
	  * @name Helpers#showLoadMoreLoading
	  * @type {function}
	  *
	  * @param {module:widget-bb-contact-ng.ContactController} ctrl
	  * @return {boolean}
	  */
	  var showLoadMoreLoading = function showLoadMoreLoading(ctrl) {
	    return ctrl.state.contacts.loading && hasContacts(ctrl);
	  };
	
	  /**
	  * @description
	  * Checks for the search load more states.
	  *
	  * @name Helpers#showSearchLoadMore
	  * @type {function}
	  *
	  * @param {module:widget-bb-contact-ng.ContactController} ctrl
	  * @return {boolean}
	  */
	  var showSearchLoadMore = function showSearchLoadMore(ctrl) {
	    return showSearchLoadMoreLoading(ctrl);
	  };
	
	  /**
	  * @description
	  * Checks for the load more states.
	  *
	  * @name Helpers#showLoadMore
	  * @type {function}
	  *
	  * @param {module:widget-bb-contact-ng.ContactController} ctrl
	  * @return {boolean}
	  */
	  var showLoadMore = function showLoadMore(ctrl) {
	    return showLoadMoreLoading(ctrl);
	  };
	
	  return {
	    hasContacts: hasContacts,
	    hasSearchContacts: hasSearchContacts,
	    showLoadingState: showLoadingState,
	    showSearchLoadingState: showSearchLoadingState,
	    showErrorState: showErrorState,
	    showSearchErrorState: showSearchErrorState,
	    showEmptyState: showEmptyState,
	    showSearchEmptyState: showSearchEmptyState,
	    showLoadMore: showLoadMore,
	    showSearchLoadMore: showSearchLoadMore,
	    showLoadMoreLoading: showLoadMoreLoading,
	    showSearchLoadMoreLoading: showSearchLoadMoreLoading
	  };
	};

/***/ })
/******/ ])
});
;
//# sourceMappingURL=ext-bbm-contact-list-ng.js.map