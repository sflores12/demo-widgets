(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vendor-bb-angular-ng-aria"), require("ui-bb-substitute-error-ng"), require("ui-bb-i18n-ng"), require("ui-bb-account-selector"), require("ui-bb-dropdown-select"), require("ui-bb-currency-input-ng"), require("ui-bb-format-amount"), require("ui-bb-loading-indicator-ng"), require("ui-bb-confirm-ng"), require("ui-bb-switcher-ng"));
	else if(typeof define === 'function' && define.amd)
		define("ext-bb-action-recipes-ng", ["vendor-bb-angular-ng-aria", "ui-bb-substitute-error-ng", "ui-bb-i18n-ng", "ui-bb-account-selector", "ui-bb-dropdown-select", "ui-bb-currency-input-ng", "ui-bb-format-amount", "ui-bb-loading-indicator-ng", "ui-bb-confirm-ng", "ui-bb-switcher-ng"], factory);
	else if(typeof exports === 'object')
		exports["ext-bb-action-recipes-ng"] = factory(require("vendor-bb-angular-ng-aria"), require("ui-bb-substitute-error-ng"), require("ui-bb-i18n-ng"), require("ui-bb-account-selector"), require("ui-bb-dropdown-select"), require("ui-bb-currency-input-ng"), require("ui-bb-format-amount"), require("ui-bb-loading-indicator-ng"), require("ui-bb-confirm-ng"), require("ui-bb-switcher-ng"));
	else
		root["ext-bb-action-recipes-ng"] = factory(root["vendor-bb-angular-ng-aria"], root["ui-bb-substitute-error-ng"], root["ui-bb-i18n-ng"], root["ui-bb-account-selector"], root["ui-bb-dropdown-select"], root["ui-bb-currency-input-ng"], root["ui-bb-format-amount"], root["ui-bb-loading-indicator-ng"], root["ui-bb-confirm-ng"], root["ui-bb-switcher-ng"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_3__, __WEBPACK_EXTERNAL_MODULE_4__, __WEBPACK_EXTERNAL_MODULE_5__, __WEBPACK_EXTERNAL_MODULE_6__, __WEBPACK_EXTERNAL_MODULE_7__, __WEBPACK_EXTERNAL_MODULE_8__, __WEBPACK_EXTERNAL_MODULE_9__, __WEBPACK_EXTERNAL_MODULE_10__, __WEBPACK_EXTERNAL_MODULE_11__) {
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
	exports.events = exports.helpers = exports.hooks = exports.dependencyKeys = undefined;
	
	var _vendorBbAngularNgAria = __webpack_require__(2);
	
	var _vendorBbAngularNgAria2 = _interopRequireDefault(_vendorBbAngularNgAria);
	
	var _uiBbSubstituteErrorNg = __webpack_require__(3);
	
	var _uiBbSubstituteErrorNg2 = _interopRequireDefault(_uiBbSubstituteErrorNg);
	
	var _uiBbI18nNg = __webpack_require__(4);
	
	var _uiBbI18nNg2 = _interopRequireDefault(_uiBbI18nNg);
	
	var _uiBbAccountSelector = __webpack_require__(5);
	
	var _uiBbAccountSelector2 = _interopRequireDefault(_uiBbAccountSelector);
	
	var _uiBbDropdownSelect = __webpack_require__(6);
	
	var _uiBbDropdownSelect2 = _interopRequireDefault(_uiBbDropdownSelect);
	
	var _uiBbCurrencyInputNg = __webpack_require__(7);
	
	var _uiBbCurrencyInputNg2 = _interopRequireDefault(_uiBbCurrencyInputNg);
	
	var _uiBbFormatAmount = __webpack_require__(8);
	
	var _uiBbFormatAmount2 = _interopRequireDefault(_uiBbFormatAmount);
	
	var _uiBbLoadingIndicatorNg = __webpack_require__(9);
	
	var _uiBbLoadingIndicatorNg2 = _interopRequireDefault(_uiBbLoadingIndicatorNg);
	
	var _uiBbConfirmNg = __webpack_require__(10);
	
	var _uiBbConfirmNg2 = _interopRequireDefault(_uiBbConfirmNg);
	
	var _uiBbSwitcherNg = __webpack_require__(11);
	
	var _uiBbSwitcherNg2 = _interopRequireDefault(_uiBbSwitcherNg);
	
	var _helpers = __webpack_require__(12);
	
	var _helpers2 = _interopRequireDefault(_helpers);
	
	var _hooks = __webpack_require__(13);
	
	var _hooks2 = _interopRequireDefault(_hooks);
	
	var _events = __webpack_require__(17);
	
	var _events2 = _interopRequireDefault(_events);
	
	__webpack_require__(18);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * @module ext-bb-action-recipes-ng
	 *
	 * @description
	 * Action Recipes default extension.
	 *
	 * @example
	 * <!-- messages widget model.xml -->
	 * <property name="extension" viewHint="text-input,admin">
	 *   <value type="string">ext-bb-action-recipes-ng</value>
	 * </property>
	 */
	
	var dependencyKeys = exports.dependencyKeys = [_vendorBbAngularNgAria2.default, _uiBbSubstituteErrorNg2.default, _uiBbI18nNg2.default, _uiBbAccountSelector2.default, _uiBbDropdownSelect2.default, _uiBbCurrencyInputNg2.default, _uiBbFormatAmount2.default, _uiBbLoadingIndicatorNg2.default, _uiBbConfirmNg2.default, _uiBbSwitcherNg2.default];
	
	var hooks = exports.hooks = _hooks2.default;
	
	var helpers = exports.helpers = _helpers2.default;
	
	var events = exports.events = _events2.default;

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

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var CONDITION_OPTIONS = ['lt', 'gt'];
	
	/**
	 * @description
	 * Validate Recipe data.
	 * @name isValid
	 * @type {function}
	 * @return {boolean} true if recipe passes the validation
	 */
	var isValid = function isValid(recipe) {
	  return recipe.filter.validate() && recipe.actions.isSelected();
	};
	
	exports.default = {
	  conditions: CONDITION_OPTIONS,
	  isValid: isValid
	};

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _creditTransaction = __webpack_require__(14);
	
	exports.default = {
	  createRecipeFilter: function createRecipeFilter(specification, trigger, accounts) {
	    switch (specification.type) {
	      case _creditTransaction.CREDIT_TRANSACTION_TYPE:
	        return new _creditTransaction.CreditTransactionFilter(trigger, accounts);
	      default:
	        return null;
	    }
	  }
	};

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.CreditTransactionFilter = exports.CREDIT_TRANSACTION_TYPE = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _constants = __webpack_require__(15);
	
	var _filterHelpers = __webpack_require__(16);
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var ACCOUNT_ID = 'transaction.arrangementId';
	var TRANSACTION_TYPE_PARAM = 'transaction.creditDebitIndicator';
	var TRANSACTION_TYPE_CREDIT = 'CRDT';
	var TRANSACTION_AMOUNT_PARAM = 'transaction.amount';
	var DEFAULT_AMOUNT = '0';
	var TEMPLATE_ID = 'credit-transaction';
	
	var CREDIT_TRANSACTION_TYPE = exports.CREDIT_TRANSACTION_TYPE = 'newTransaction';
	
	/**
	 * @name CreditTransactionFilter
	 * @type {object}
	 */
	
	var CreditTransactionFilter = exports.CreditTransactionFilter = function () {
	  function CreditTransactionFilter(trigger, accounts) {
	    _classCallCheck(this, CreditTransactionFilter);
	
	    var condition = _constants.Operator.greaterOrEqual;
	    var amount = DEFAULT_AMOUNT;
	
	    // When editing a recipe
	    if (trigger) {
	      var transactionAmountFilter = (0, _filterHelpers.findFilter)(trigger.filter, TRANSACTION_AMOUNT_PARAM);
	      amount = transactionAmountFilter.value.toString();
	      condition = transactionAmountFilter.operator;
	      var accountIdSelector = trigger.selectors.find(function (item) {
	        return item.path === ACCOUNT_ID;
	      });
	
	      if (accounts) {
	        this.account = accounts.find(function (acc) {
	          return acc.id === accountIdSelector.value;
	        });
	      }
	    }
	
	    this.templateId = TEMPLATE_ID;
	    this.amount = { value: amount, currency: 'USD' };
	    this.condition = condition;
	  }
	
	  _createClass(CreditTransactionFilter, [{
	    key: 'validate',
	    value: function validate() {
	      return Boolean(this.account && this.amount && this.amount.value && this.amount.value > 0 && this.condition);
	    }
	
	    /**
	     * @name CreditTransactionFilter#changeAccount
	     * @description Handles change of selected account. Changes the currency of this filter to
	     * the currency of the selected account. Retains the old inputted amount value.
	     * @param {object} account the newly selected account
	     * @type {function} * @typedef CreditTransactionFilter
	     */
	
	  }, {
	    key: 'changeAccount',
	    value: function changeAccount(account) {
	      this.amount = {
	        value: this.amount.value,
	        currency: account.currency
	      };
	      this.account = account;
	    }
	  }, {
	    key: 'toApiModel',
	    value: function toApiModel() {
	      return {
	        selectors: [{
	          path: ACCOUNT_ID,
	          value: this.account.id
	        }],
	        filter: {
	          and: [_defineProperty({}, _constants.Operator.equals, [{ pathValue: [TRANSACTION_TYPE_PARAM] }, TRANSACTION_TYPE_CREDIT]), _defineProperty({}, this.condition, [{ pathValue: [TRANSACTION_AMOUNT_PARAM] }, parseFloat(this.amount.value)])]
	        }
	      };
	    }
	  }]);

	  return CreditTransactionFilter;
	}();

/***/ }),
/* 15 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var Operator = exports.Operator = {
	  greaterThan: 'gt',
	  lessThan: 'lt',
	  equals: 'eq',
	  greaterOrEqual: 'gte',
	  lessOrEqual: 'lte'
	};
	
	exports.default = {
	  Operator: Operator
	};

/***/ }),
/* 16 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var findFilter = exports.findFilter = function findFilter(filterDefinition, searchKey) {
	  var operator = Object.keys(filterDefinition)[0]; // Get function operator
	  var fnParams = filterDefinition[operator];
	  var result = null;
	
	  // Leaf logic
	  if (fnParams[0].pathValue) {
	    if (fnParams[0].pathValue[0] === searchKey) {
	      return {
	        operator: operator,
	        value: fnParams[1]
	      };
	    }
	    return null;
	  }
	
	  // Branch logic
	  for (var i = 0; result == null && i < fnParams.length; i++) {
	    result = findFilter(fnParams[i], searchKey);
	  }
	
	  return result;
	};
	
	exports.default = {
	  findFilter: findFilter
	};

/***/ }),
/* 17 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var events = function events(_ref) {
	  var notifications = _ref.notifications,
	      $filter = _ref.$filter;
	  return {
	    'bb.event.actionrecipe.activate.failed': function bbEventActionrecipeActivateFailed() {
	      notifications.notifyAlert($filter('i18n')('error.recipe.activation.failed'));
	    },
	    'bb.event.actionrecipe.deactivate.failed': function bbEventActionrecipeDeactivateFailed() {
	      notifications.notifyAlert($filter('i18n')('error.recipe.deactivation.failed'));
	    }
	  };
	};
	
	exports.default = events;

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(19);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(21)(content, {});
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
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(20)();
	// imports
	
	
	// module
	exports.push([module.id, ".ext-bb-action-recipes-ng {\n\n}\n", ""]);
	
	// exports


/***/ }),
/* 20 */
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
/* 21 */
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


/***/ })
/******/ ])
});
;
//# sourceMappingURL=ext-bb-action-recipes-ng.js.map