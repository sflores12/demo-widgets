(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vendor-bb-angular"));
	else if(typeof define === 'function' && define.amd)
		define("ui-bbm-amount-field-ng", ["vendor-bb-angular"], factory);
	else if(typeof exports === 'object')
		exports["ui-bbm-amount-field-ng"] = factory(require("vendor-bb-angular"));
	else
		root["ui-bbm-amount-field-ng"] = factory(root["vendor-bb-angular"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__) {
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

	module.exports = __webpack_require__(136);

/***/ }),

/***/ 2:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ }),

/***/ 15:
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

/***/ 16:
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

/***/ 136:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _vendorBbAngular = __webpack_require__(2);
	
	var _vendorBbAngular2 = _interopRequireDefault(_vendorBbAngular);
	
	var _component = __webpack_require__(137);
	
	var _component2 = _interopRequireDefault(_component);
	
	var _numericMaxLength = __webpack_require__(139);
	
	var _numericMaxLength2 = _interopRequireDefault(_numericMaxLength);
	
	__webpack_require__(140);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * @name default
	 * @type {string}
	 * @description The angular module name
	 */
	/**
	 * @module ui-bbm-amount-field-ng
	 * @description
	 * Currency input UI component
	 *
	 * @example
	 * // In an extension:
	 * // file: scripts/index.js
	 * import uiBbmAmountFieldNgKey from 'ui-bbm-amount-field-ng';
	 *
	 * export const dependencyKeys = [
	 *   uiBbmAmountFieldNgKey,
	 * ];
	 *
	 * // file: templates/template.ng.html
	 * <ui-bbm-amount-field-ng
	 *   max-length="6"
	 *   decimal-max-length="2"
	 *   ng-model="$ctrl.payment.amount"
	 *   currency="$ctrl.currency">
	 * </ui-bbm-amount-field-ng>
	 */
	exports.default = _vendorBbAngular2.default.module('ui-bbm-amount-field-ng', []).directive('numericMaxLength', _numericMaxLength2.default).directive('uiBbmAmountFieldNg', ['$timeout', _component2.default]).name;

/***/ }),

/***/ 137:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _utils = __webpack_require__(138);
	
	var utils = _interopRequireWildcard(_utils);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	var template = '\n  <div class="bbm-amount-field" ng-class="{\'bbm-amount-field-active\': focused}">\n    <div class="bbm-amount-field-currency">\n      <div\n        class="bbm-amount-currency"\n        data-ng-bind="currency">\n      </div>\n    </div>\n    <div class="bbm-amount-field-integer">\n      <div class="bbm-text-field">\n        <label\n          class="bbm-amount-field-control bbm-text-field-control bbm-form-control"\n          data-ng-class="{\'bbm-form-control-active\': hasFocusInteger()}">\n          <input\n            numeric-max-length\n            class="bbm-text-field-input bbm-form-control-value"\n            max-length="maxLength"\n            placeholder="0"\n            type="number"\n            min="0"\n            pattern="[0-9]*"\n            step="1"\n            data-ng-focus="onFocus()"\n            data-ng-value="integer"\n            data-role="amount-field-integer-field"\n            autocomplete="off"\n            autocorrect="off"\n            autocapitalize="off">\n          </input>\n        </label>\n      </div>\n    </div>\n    <div class="bbm-amount-field-fractional">\n      <div class="bbm-text-field">\n        <label\n          class="bbm-amount-field-control bbm-text-field-control bbm-form-control"\n          data-ng-class="{\'bbm-form-control-active\': hasFocusDecimal()}">\n          <input\n            numeric-max-length\n            class="bbm-text-field-input bbm-form-control-value"\n            placeholder="{{::decimalPlaceholder}}"\n            max-length="decimalMaxLength"\n            class="bbm-form-control-value"\n            type="number"\n            pattern="[0-9]*"\n            min="0"\n            step="1"\n            ng-focus="onFocus()"\n            data-ng-value="decimal"\n            data-role="amount-field-decimal-field"\n            autocomplete="off"\n            autocorrect="off"\n            autocapitalize="off">\n          </input>\n        </label>\n      </div>\n    </div>\n    <div class="bbm-amount-decimal-mark">\n      <span\n        class="bbm-amount-decimal-mark-symbol"\n        data-ng-bind="decimalMark">\n      </span>\n    </div>\n    <div\n      class="bbm-amount-field-value"      \n      data-ng-bind="formattedAmount"\n      aria-hidden="true">\n    </div>\n  </div>\n';
	
	/**
	 * @name uiBbmAmountFieldNg
	 * @type {object}
	 *
	 * @property {string} max-length Maximum number of digits allowed in integer part
	 * @property {string} decimal-max-length Maximum number of digits allowed in decimal part
	 * @property {object} ng-model Currency input model
	 */
	/* global document */
	
	exports.default = function ($timeout) {
	  return {
	    restrict: 'E',
	    require: 'ngModel',
	    template: template,
	    scope: {
	      maxLength: '<',
	      decimalMaxLength: '<'
	    },
	    link: function link(scope, element, attrs, ngModelCtrl) {
	      var amount = 0;
	      var currency = void 0;
	
	      var inputs = element.find('input');
	
	      var integerInput = inputs.eq(0);
	      var decimalInput = inputs.eq(1);
	
	      /**
	       * Applies changes to the model
	       * @inner
	       */
	      var applyChanges = function applyChanges() {
	        ngModelCtrl.$setViewValue(ngModelCtrl.$modelValue);
	      };
	
	      /**
	       * Returns formatted integer and decimal
	       * @param {object} parts
	       * @inner
	       */
	      var format = function format(parts) {
	        var integer = parts.integer,
	            decimal = parts.decimal;
	
	        // "0.00" => "."
	
	        if (amount === 0) {
	          integer = '';
	          decimal = '';
	        }
	
	        // ".25" => "0.25"
	        if (amount > 0) {
	          integer = utils.padRight(integer, 1, '0');
	          decimal = utils.padRight(decimal, scope.decimalMaxLength, '0');
	        }
	
	        return { integer: integer, decimal: decimal };
	      };
	
	      /**
	       * @return {boolean}
	       * @inner
	       */
	      var hasFocusInteger = function hasFocusInteger() {
	        return document.activeElement === integerInput[0];
	      };
	
	      /**
	       * @return {boolean}
	       * @inner
	       */
	      var hasFocusDecimal = function hasFocusDecimal() {
	        return document.activeElement === decimalInput[0];
	      };
	
	      /**
	       * @return {boolean}
	       * @inner
	       */
	      var hasFocus = function hasFocus() {
	        return hasFocusInteger() || hasFocusDecimal();
	      };
	
	      /**
	       * @inner
	       */
	      var onFocus = function onFocus() {
	        Object.assign(scope, {
	          focused: true
	        });
	      };
	
	      /**
	       * Renders changes
	       * @inner
	       */
	      var render = function render() {
	        utils.setInputValue(integerInput, scope.integer);
	        utils.setInputValue(decimalInput, scope.decimal);
	      };
	
	      /**
	       * @param {number} value
	       * @inner
	       */
	      var setAmount = function setAmount(value) {
	        amount = parseFloat(value, 10);
	        Object.assign(scope, {
	          formattedAmount: utils.formatAmount(amount, scope.decimalMaxLength)
	        });
	      };
	
	      /**
	       * @param {object} newCurrency
	       * @inner
	       */
	      var setCurrency = function setCurrency(newCurrency) {
	        currency = newCurrency;
	        Object.assign(scope, {
	          currencySymbol: utils.getCurrencySymbol(currency),
	          currency: currency
	        });
	      };
	
	      /**
	       * Sets the given integer and decimal to the scope
	       * @param {object} parts
	       * @inner
	       */
	      var setIntegerDecimal = function setIntegerDecimal(parts) {
	        Object.assign(scope, parts);
	
	        applyChanges();
	        render();
	      };
	
	      /**
	       * @param {string} amountStr
	       * @return {object}
	       * @inner
	       */
	      var splitAmount = function splitAmount(amountStr) {
	        return utils.splitAmount(amountStr, scope.maxLength, scope.decimalMaxLength);
	      };
	
	      /**
	       * @inner
	       */
	      var validate = function validate() {
	        ngModelCtrl.$setValidity('required', typeof amount === 'number' && amount > 0);
	      };
	
	      // Convert the amount value from a string to a number
	      ngModelCtrl.$parsers.push(function (modelValue) {
	        setAmount(utils.parseAmount(modelValue.value));
	        return {
	          currency: modelValue.currency,
	          value: amount
	        };
	      });
	
	      // Format on blur
	      element.on('focusout', function () {
	        $timeout(function () {
	          if (!hasFocus()) {
	            var integer = scope.integer,
	                decimal = scope.decimal;
	
	            var formatted = format({ integer: integer, decimal: decimal });
	
	            setIntegerDecimal(formatted);
	            ngModelCtrl.$setTouched();
	
	            Object.assign(scope, {
	              focused: false
	            });
	          }
	        }, 0);
	      });
	
	      // Normalize the integer on a user input
	      integerInput.on('input', function () {
	        var val = integerInput.val();
	        var normalizedVal = utils.stripLeadingZeros(val);
	
	        utils.setInputValue(integerInput, normalizedVal);
	      });
	
	      // Update the scope on a user input
	      inputs.on('input', function () {
	        var integer = integerInput.val();
	        var decimal = decimalInput.val();
	
	        setIntegerDecimal({ integer: integer, decimal: decimal });
	      });
	
	      // NOTE: Eventually this event is supposed to be replaced with "beforeInput" event
	      // See https://bugs.chromium.org/p/chromium/issues/detail?id=382814 for details
	      inputs.on('textInput', function (evt) {
	        var input = evt.data;
	        var isPaste = input.length > 1;
	
	        // Handle cases when there is no amount,
	        // and the user pastes an amount, that has a decimal part
	        if (amount === 0 && isPaste && utils.isInputValid(input, true)) {
	          evt.preventDefault();
	          setIntegerDecimal(splitAmount(input));
	        }
	
	        // Otherwise just disable an invalid input
	        if (!utils.isInputValid(input)) {
	          evt.preventDefault();
	        }
	      });
	
	      // Move the focus to the decimal input when period is entered
	      integerInput.on('textInput', function (evt) {
	        if (evt.data === '.') {
	          decimalInput[0].focus();
	        }
	      });
	
	      // Split the model value into an integer and a decimal parts on every value change
	      scope.$watch(function () {
	        return ngModelCtrl.$modelValue;
	      }, function (modelValue) {
	        if (modelValue) {
	          var value = modelValue.value || 0;
	
	          validate();
	          setCurrency(modelValue.currency);
	
	          if (value !== amount) {
	            setAmount(value);
	            setIntegerDecimal(splitAmount(amount));
	          }
	        }
	      });
	
	      // Update the model on integer or decimal change
	      scope.$watch('integer + decimal', function () {
	        var integer = scope.integer,
	            decimal = scope.decimal;
	
	        if (integer !== undefined || decimal !== undefined) {
	          ngModelCtrl.$setViewValue({
	            value: (integer || '') + '.' + (decimal || ''),
	            currency: currency
	          });
	        }
	      });
	
	      Object.assign(scope, {
	        formattedAmount: utils.formatAmount(amount, scope.decimalMaxLength),
	        decimalMark: utils.getDecimalMark(),
	        decimalPlaceholder: utils.padRight('', scope.decimalMaxLength, '0'),
	        focused: false,
	        onFocus: onFocus,
	        hasFocusInteger: hasFocusInteger,
	        hasFocusDecimal: hasFocusDecimal
	      });
	    }
	  };
	};

/***/ }),

/***/ 138:
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * Currency symbols
	 * @type {object}
	 * @inner
	 */
	var CurrencySymbol = {
	  EUR: '€',
	  GBP: '£',
	  USD: '$'
	};
	
	/**
	 * @param {number} amount
	 * @param {number} decimalLength
	 * @return {string}
	 * @inner
	 */
	var formatAmount = exports.formatAmount = function formatAmount(amount, decimalLength) {
	  return amount.toFixed(decimalLength).replace(/./g, function (char, idx, amountStr) {
	    return idx && char !== '.' && (amountStr.length - idx) % 3 === 0 ? ',' + char : char;
	  });
	};
	
	/**
	 * TODO: Use a currency symbol filter once it is implemented
	 * @param {object} currency
	 * @return {string}
	 * @inner
	 */
	var getCurrencySymbol = exports.getCurrencySymbol = function getCurrencySymbol(currency) {
	  if (currency && {}.hasOwnProperty.call(CurrencySymbol, currency)) {
	    return CurrencySymbol[currency];
	  }
	  return '';
	};
	
	/**
	 * Returns decimal mark
	 * @returns {string}
	 * @inner
	 */
	var getDecimalMark = exports.getDecimalMark = function getDecimalMark() {
	  return ',';
	};
	
	/**
	 * @param {string} str
	 * @param {boolean} [allowPeriod]
	 * @return {boolean}
	 * @inner
	 */
	var isInputValid = exports.isInputValid = function isInputValid(str, allowPeriod) {
	  var reg = allowPeriod ? /^\d+(\.\d+)?$/ : /^\d+$/;
	  return reg.test(str);
	};
	
	/**
	 * @param {string} str
	 * @param {number} len
	 * @param {string} padWith
	 * @inner
	 */
	var padRight = exports.padRight = function padRight(str, len, padWith) {
	  if (str.length < len) {
	    return str + padWith.repeat(len - str.length);
	  }
	  return str;
	};
	
	/**
	 * @param {string} amountStr
	 * @return {number}
	 * @inner
	 */
	var parseAmount = exports.parseAmount = function parseAmount(amountStr) {
	  if (amountStr === '.') {
	    return 0;
	  }
	  return Number(amountStr);
	};
	
	/**
	 * Sets the given value to the given input
	 * without resetting a caret position when possible
	 * @param {Element} input
	 * @param {string} value
	 * @inner
	 */
	var setInputValue = exports.setInputValue = function setInputValue(input, value) {
	  if (input.val() !== value) {
	    input.val(value);
	  }
	};
	
	/**
	 * Removes leading zeros from a given string.
	 * Preserves a single zero when needed.
	 * Examples:
	 *   "000123" => "123"
	 *   "000" => "0"
	 *   "0" => "0"
	 *   "" => ""
	 * @param {string} str
	 * @inner
	 */
	var stripLeadingZeros = exports.stripLeadingZeros = function stripLeadingZeros(str) {
	  if (/^0+$/.test(str)) {
	    return '0';
	  }
	  return str.replace(/^0+/, '');
	};
	
	/**
	 * Splits a given amount to integer and decimal parts.
	 * @param {number} amount
	 * @param {number} integerLength
	 * @param {number} decimalLength
	 * @return {object}
	 * @inner
	 */
	var splitAmount = exports.splitAmount = function splitAmount(amount, integerLength, decimalLength) {
	  var integer = '';
	  var decimal = '';
	
	  if (amount > 0) {
	    var parts = String(amount).split('.');
	
	    integer = (parts[0] || '').substr(0, integerLength);
	    decimal = padRight(parts[1] || '', decimalLength, '0').substr(0, decimalLength);
	  }
	
	  return {
	    integer: integer,
	    decimal: decimal
	  };
	};

/***/ }),

/***/ 139:
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var numericMaxLength = function numericMaxLength() {
	  return {
	    restrict: 'A',
	    scope: {
	      maxLength: '<'
	    },
	    link: function link(scope, element) {
	      element.on('input', function () {
	        if (element.val().length > scope.maxLength) {
	          element.val(element.val().substr(0, scope.maxLength));
	        }
	      });
	    }
	  };
	};
	
	exports.default = numericMaxLength;

/***/ }),

/***/ 140:
/***/ (function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(141);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(16)(content, {});
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

/***/ 141:
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(15)();
	// imports
	
	
	// module
	exports.push([module.id, "ui-bbm-amount-field-ng {\n  display: block;\n}\n", ""]);
	
	// exports


/***/ })

/******/ })
});
;
//# sourceMappingURL=ui-bbm-amount-field-ng.js.map