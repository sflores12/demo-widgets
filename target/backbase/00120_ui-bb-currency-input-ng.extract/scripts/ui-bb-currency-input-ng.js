(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vendor-bb-angular"), require("ui-bb-dropdown-select"), require("lib-bb-currency-ng"));
	else if(typeof define === 'function' && define.amd)
		define("ui-bb-currency-input-ng", ["vendor-bb-angular", "ui-bb-dropdown-select", "lib-bb-currency-ng"], factory);
	else if(typeof exports === 'object')
		exports["ui-bb-currency-input-ng"] = factory(require("vendor-bb-angular"), require("ui-bb-dropdown-select"), require("lib-bb-currency-ng"));
	else
		root["ui-bb-currency-input-ng"] = factory(root["vendor-bb-angular"], root["ui-bb-dropdown-select"], root["lib-bb-currency-ng"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_7__, __WEBPACK_EXTERNAL_MODULE_53__) {
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

	module.exports = __webpack_require__(52);

/***/ }),

/***/ 2:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ }),

/***/ 7:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_7__;

/***/ }),

/***/ 52:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _vendorBbAngular = __webpack_require__(2);
	
	var _vendorBbAngular2 = _interopRequireDefault(_vendorBbAngular);
	
	var _uiBbDropdownSelect = __webpack_require__(7);
	
	var _uiBbDropdownSelect2 = _interopRequireDefault(_uiBbDropdownSelect);
	
	var _libBbCurrencyNg = __webpack_require__(53);
	
	var _libBbCurrencyNg2 = _interopRequireDefault(_libBbCurrencyNg);
	
	var _currencyInput = __webpack_require__(54);
	
	var _currencyInput2 = _interopRequireDefault(_currencyInput);
	
	var _currencyFormatting = __webpack_require__(55);
	
	var _currencyFormatting2 = _interopRequireDefault(_currencyFormatting);
	
	var _decimalsFormatting = __webpack_require__(57);
	
	var _decimalsFormatting2 = _interopRequireDefault(_decimalsFormatting);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * @module ui-bb-currency-input-ng
	 * @description
	 * Currency input UI component
	 *
	 * @example
	 * // In an extension:
	 * // file: scripts/index.js
	 * import uiBbCurrencyInputNgKey from 'ui-bb-currency-input-ng';
	 *
	 * export const dependencyKeys = [
	 *   uiBbCurrencyInputNgKey,
	 * ];
	 *
	 * // file: templates/template.ng.html
	 * <ui-bb-currency-input-ng
	 *   data-max-length="6"
	 *   data-decimal-max-length="2"
	 *   data-placeholder="000,000"
	 *   data-ng-model="$ctrl.payment.amount"
	 *   data-currencies="$ctrl.currencies"
	 *   data-integer>
	 * </ui-bb-currency-input-ng>
	 */
	var dependencyKeys = [_libBbCurrencyNg2.default, _uiBbDropdownSelect2.default];
	
	/**
	 * @name default
	 * @type {string}
	 * @description The angular module name
	 */
	exports.default = _vendorBbAngular2.default.module('ui-bb-currency-input-ng', dependencyKeys).directive('currencyFormatting', ['$filter', '$locale', _currencyFormatting2.default]).directive('decimalsFormatting', _decimalsFormatting2.default).directive('uiBbCurrencyInputNg', ['$locale', 'currencyAttr', _currencyInput2.default]).factory('currencyAttr', [_libBbCurrencyNg.bbCurrencyRuleKey, function (getRule) {
	  return {
	    decimalDigits: function decimalDigits(currencyCode) {
	      return (getRule(currencyCode) || {
	        decimalDigits: 2
	      }).decimalDigits;
	    }
	  };
	}]).name;

/***/ }),

/***/ 53:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_53__;

/***/ }),

/***/ 54:
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();
	
	/**
	 * @name uiBbCurrencyInputNg
	 * @type {object}
	 *
	 * @property {string} placeholder Text to display for input's placeholder
	 * @property {string} max-length Maximum number of digits allowed in whole part
	 * @property {string} decimal-max-length Maximum number of digits allowed in decimal part
	 * @property {array} currencies List of available currencies
	 * @property {object} ng-model Currency input model
	 * @property {object} messages Localized messages
	 * @property {void} integer If attribute is present, decimal places input will be hidden
	 */
	
	var template = '\n  <div class="currency" data-ng-show="currencies !== undefined">\n    <div data-ng-if="!currencies || currencies.length === 0">\n      <!-- placeholder: not to change ngModel currency value -->\n      <div class="form-control" disabled="disabled">{{ placeholderCurrency }}</div>\n    </div>\n    <div data-ng-if="currencies.length === 1">\n      <div class="form-control">{{ currency }}</div>\n    </div>\n    <ui-bb-dropdown-select\n      data-ng-model="currency"\n      data-ng-show="currencies.length > 1"\n      data-ng-change="onCurrencyChange({ currency: $item });"\n      data-selected-as="$option"\n      data-role="ui-bb-currency-input-ng-currency">\n      <ui-bb-dropdown-option\n        data-option="currency.name"\n        data-ng-repeat="currency in currencies"\n        class="list-group-item-text"\n        aria-label="{{:: messages[\'label.currency\'] }}"\n      >\n        <a href="#">{{:: $option }}</a>\n      </ui-bb-dropdown-option>\n    </ui-bb-dropdown-select>\n  </div>\n  <div class="amount"\n    data-ng-class="{ \'no-currency\': currencies === undefined, \'no-decimals\': isInteger }"\n  >\n    <input\n      data-currency-formatting\n      class="form-control"\n      maxlength="{{maxLength}}"\n      placeholder="{{placeholder}}"\n      data-ng-model="whole"\n      aria-label="{{:: messages[\'label.amount\'] }}"\n      data-role="ui-bb-currency-input-ng-amount"\n    />\n  </div>\n  <div class="seperator" data-ng-show="!isInteger">\n    <span data-role="ui-bb-currency-input-ng-seperator">{{seperator}}</span>\n  </div>\n  <div class="decimals" data-ng-show="!isInteger">\n    <input\n      data-decimals-formatting\n      placeholder="{{decimalPlaceholder}}"\n      maxlength="{{decimalMaxLength}}"\n      class="form-control"\n      data-ng-model="decimals"\n      aria-label="{{:: messages[\'label.decimals\'] }}"\n      data-ng-disabled="decimalMaxLength === 0"\n      data-role="ui-bb-currency-input-ng-decimals"\n    />\n  </div>\n';
	
	exports.default = function ($locale, currencyAttr) {
	  return {
	    restrict: 'E',
	    link: function link(scope, element, attrs, ngModelCtrl) {
	      var setDecimalAttrs = function setDecimalAttrs(decimalLength) {
	        Object.assign(scope, {
	          decimalMaxLength: decimalLength,
	          decimalPlaceholder: Array(decimalLength + 1).join('0')
	        });
	      };
	      // set default decimal field attributes
	      setDecimalAttrs(2);
	
	      Object.assign(scope, {
	        seperator: $locale.NUMBER_FORMATS.DECIMAL_SEP,
	        isInteger: attrs.integer !== undefined,
	        placeholderCurrency: 'EUR'
	      });
	
	      var preSelectOnlyCurrency = function preSelectOnlyCurrency() {
	        if (scope.currencies && scope.currencies.length === 1) {
	          Object.assign(scope, {
	            currency: scope.currencies[0].name
	          });
	        }
	      };
	      // Preselect the currency if there is only 1
	      preSelectOnlyCurrency();
	
	      var decimalInput = element[0].querySelector('.decimals input');
	
	      var validate = function validate(amount) {
	        var isValid = amount && parseFloat(amount.value) > 0;
	        ngModelCtrl.$setValidity('invalidAmount', isValid);
	      };
	
	      var fixDecimals = function fixDecimals(decimals) {
	        if (decimals === '' || scope.decimalMaxLength === 0) {
	          return undefined;
	        }
	        if (decimals && decimals.length < scope.decimalMaxLength) {
	          return decimals + '0'.repeat(scope.decimalMaxLength - decimals.length);
	        }
	        if (decimals && decimals.length > scope.decimalMaxLength) {
	          return decimals.substr(0, scope.decimalMaxLength);
	        }
	        return decimals;
	      };
	
	      var parse = function parse(amount) {
	        var _ref = amount && amount.value ? amount.value.toString().split('.') : [],
	            _ref2 = _slicedToArray(_ref, 2),
	            whole = _ref2[0],
	            decimals = _ref2[1];
	
	        return {
	          whole: whole,
	          decimals: fixDecimals(decimals)
	        };
	      };
	
	      if (!scope.isInteger) {
	        element.find('input').on('keypress', function (e) {
	          // if ',' or '.' was pressed move focus to decimal field
	          if (e.key === ',' || e.key === '.') {
	            decimalInput.focus();
	          }
	        });
	      }
	
	      var dropdownSelectCtrl = void 0;
	      ngModelCtrl.$formatters.push(function (amount) {
	        if (amount && amount.currency) {
	          Object.assign(scope, {
	            currency: amount.currency || scope.currencies[0]
	          });
	          setDecimalAttrs(currencyAttr.decimalDigits(scope.currency));
	        }
	
	        Object.assign(scope, parse(amount));
	        validate(amount);
	
	        dropdownSelectCtrl = dropdownSelectCtrl || element.find('ui-bb-dropdown-select').controller('uiBbDropdownSelect');
	
	        // when amount changes externally
	        // update dropdown model
	        if (amount && amount.currency) {
	          dropdownSelectCtrl.select(amount.currency);
	        }
	
	        return amount;
	      });
	
	      ngModelCtrl.$parsers.push(function (amount) {
	        validate(amount);
	
	        return amount;
	      });
	
	      scope.$watch('currency + whole + decimals', function () {
	        setDecimalAttrs(currencyAttr.decimalDigits(scope.currency));
	        if (scope.decimals && scope.decimals.length > scope.decimalMaxLength) {
	          Object.assign(scope, { decimals: scope.decimals.substr(0, scope.decimalMaxLength) });
	        }
	
	        var value = null;
	        if (scope.whole || scope.decimals) {
	          var decLength = scope.decimals ? scope.decimals.length : 0;
	          var decimals = (scope.decimalMaxLength > 0 ? '.' : '') + (scope.decimals || '') + Array(scope.decimalMaxLength - decLength + 1).join('0');
	          value = '' + (scope.whole || '0') + decimals;
	        }
	
	        var amount = {
	          value: value,
	          whole: scope.whole,
	          decimals: scope.decimals,
	          currency: scope.currency
	        };
	
	        ngModelCtrl.$setViewValue(amount);
	      });
	    },
	    require: 'ngModel',
	    template: template,
	    scope: {
	      onCurrencyChange: '&',
	      placeholder: '@',
	      maxLength: '<',
	      currencies: '<',
	      /**
	       * @description
	       * List of messages to be shown by component
	       *
	       * @name uiBbCurrencyInputNg#messages
	       * @type {object} messages
	       */
	      messages: '<'
	    }
	  };
	};

/***/ }),

/***/ 55:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _formattingUtils = __webpack_require__(56);
	
	var _formattingUtils2 = _interopRequireDefault(_formattingUtils);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var currencyFormatting = function currencyFormatting($filter, $locale) {
	  return {
	    require: 'ngModel',
	    restrict: 'A',
	    link: function link(scope, element, attrs, ngModel) {
	      var inputMaxLength = scope.maxLength;
	      var invalidChars = /[a-zA-Z!?>:;|<@#%^&*)(+/\\={}[\]_]/g;
	
	      // manually trigger the $formatters pipeline
	      function triggerRender() {
	        ngModel.$setViewValue(ngModel.$formatters.reduce(function (value, fn) {
	          return fn(value);
	        }, ngModel.$modelValue));
	      }
	
	      var filter = $filter('number');
	
	      // extend input max length by adding number of special characters (like ',')
	      var updateMaxLength = function updateMaxLength(number) {
	        return Object.assign(scope, {
	          maxLength: inputMaxLength + _formattingUtils2.default.specialCharsCount(number, filter(number, 0))
	        });
	      };
	
	      scope.$watch(function () {
	        return scope.$eval(attrs.currencyFilter);
	      }, function (f) {
	        filter = f ? $filter(f) : $filter('number');
	        triggerRender();
	      });
	
	      ngModel.$formatters.push(function (value) {
	        updateMaxLength(value);
	        return filter(value, 0);
	      });
	
	      ngModel.$parsers.push(function (value) {
	        if (value === '') {
	          return value;
	        }
	
	        var numericChars = void 0;
	        // ignore non-numeric characters
	        if (ngModel.$modelValue >= 0) {
	          numericChars = value.replace(invalidChars, '');
	        } else {
	          numericChars = value.replace(invalidChars, 0);
	        }
	
	        var decimalPosition = numericChars.indexOf($locale.NUMBER_FORMATS.DECIMAL_SEP);
	        var groupSeparator = $locale.NUMBER_FORMATS.GROUP_SEP.replace(/[.]/g, '\\$&');
	
	        var number = _formattingUtils2.default.toFloat(numericChars.replace(new RegExp(groupSeparator, 'g'), '').substring(0, decimalPosition !== -1 ? decimalPosition : numericChars.length)).toFixed();
	
	        if (!isNaN(number)) {
	          // in case when value is pasted, it can take advantage of
	          // extended max length (special character) and exceed input limits
	          // make sure that this doesn't happen
	          number = _formattingUtils2.default.truncateNumber(_formattingUtils2.default.toFloat(number), inputMaxLength).toFixed();
	
	          var formatted = filter(number, 0);
	          updateMaxLength(number);
	
	          // did we add a comma or currency symbol?
	          var specialCharactersCountChange = [numericChars, formatted].map(function (string) {
	            return _formattingUtils2.default.occurrences(string, _formattingUtils2.default.diffChars(numericChars, formatted));
	          }).reduce(function (prev, cur) {
	            return cur - prev;
	          });
	
	          // compute the new selection range, correcting for
	          // formatting introduced by the number or currency $filter
	          var selectionRange = [element[0].selectionStart, element[0].selectionEnd].map(function (position) {
	            return position + specialCharactersCountChange;
	          });
	
	          // set the formatted value in the view
	          ngModel.$setViewValue(formatted);
	          ngModel.$render();
	
	          // set the cursor back to its expected position
	          // (since $render resets the cursor the the end)
	          element[0].setSelectionRange(selectionRange[0], selectionRange[1]);
	        } else {
	          ngModel.$setViewValue(number.replace(invalidChars, 0));
	          ngModel.$render();
	
	          // reset input max length to default value
	          Object.assign(scope, { maxLength: inputMaxLength });
	        }
	        return number;
	      });
	    }
	  };
	};
	
	exports.default = currencyFormatting;

/***/ }),

/***/ 56:
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var utils = {
	  // (haystack: String, needles: Array<String>) => Number
	  // eg. ('foo', ['o']) => 2
	  occurrences: function occurrences(haystack, needles) {
	    return needles
	    // get counts
	    .map(function (needle) {
	      var matches = needle.replace(/\[/g, '\\[').replace(/]/g, '\\]');
	      return (haystack.match(new RegExp('[' + matches + ']', 'g')) || []).length;
	    })
	    // sum counts
	    .reduce(function (prev, cur) {
	      return prev + cur;
	    }, 0);
	  },
	
	  // (currencyString: String) => Number
	  // eg. "$123.00" => 123.00, "EUR123.00" => 123.00
	  toFloat: function toFloat(currencyString) {
	    return parseFloat(currencyString.replace(/[^0-9.]/g, ''), 10);
	  },
	
	  // (array: Array) => Array
	  // eg. [1,2,2] => [1,2]
	  uniq: function uniq(array) {
	    return array.reduce(function (prev, cur) {
	      return prev.indexOf(cur) > -1 ? prev : prev.concat(cur);
	    }, []);
	  },
	
	  // (a: String, b: String) => Array<String>
	  // eg. "1,323.00", "$123.00" => ["$", ","]
	  uniqueChars: function uniqueChars(a, b) {
	    return utils.uniq(b.split('').filter(function (char) {
	      return !~a.indexOf(char);
	    }).concat(a.split('').filter(function (char) {
	      return !~b.indexOf(char);
	    })));
	  },
	
	  // (a: String, b: String) => Array<String>
	  // eg. "1,234,000.00", "1,234000.00" => [","]
	  diffChars: function diffChars(a, b) {
	    var aChars = a.match(/\D/g) || [];
	    var bChars = b.match(/\D/g) || [];
	
	    var calc = function calc(list) {
	      var res = {};
	      list.forEach(function (item) {
	        if (res[item]) {
	          res[item]++;
	        } else {
	          res[item] = 1;
	        }
	      });
	      return res;
	    };
	
	    var diff = function diff(l1, l2) {
	      var res = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
	
	      Object.keys(l1).forEach(function (i) {
	        if (i in l2 && l1[i] > l2[i] || !l2[i]) {
	          res.push(i);
	        }
	      });
	      return res;
	    };
	
	    var aMatch = calc(aChars);
	    var bMatch = calc(bChars);
	
	    return diff(aMatch, bMatch, diff(bMatch, aMatch));
	  },
	
	  // (number: Number, limit: Number) => Number
	  // eg. (1234, 6) => 1234, (1234, 3) => 123
	  truncateNumber: function truncateNumber(number, limit) {
	    var truncatedNumber = number;
	    while (Math.log10(truncatedNumber) >= limit) {
	      truncatedNumber = Math.floor(truncatedNumber / 10);
	    }
	    return truncatedNumber;
	  },
	
	  // (number: Number, formatted: String) => Number
	  // eg. (1234, "1,234") => 1, (123, "123") => 0
	  specialCharsCount: function specialCharsCount(number, formatted) {
	    if (!number || !formatted) {
	      return 0;
	    }
	    var specialCharacters = utils.uniqueChars(number, formatted);
	    return utils.occurrences(formatted, specialCharacters);
	  }
	};
	
	exports.default = utils;

/***/ }),

/***/ 57:
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var decimalsFormatting = function decimalsFormatting() {
	  return {
	    require: 'ngModel',
	    link: function link(scope, element, attrs, ngModelCtrl) {
	      ngModelCtrl.$parsers.push(function (value) {
	        ngModelCtrl.$setViewValue(value.replace(/[^0-9]/g, ''));
	        ngModelCtrl.$render();
	
	        return value;
	      });
	    }
	  };
	};
	
	exports.default = decimalsFormatting;

/***/ })

/******/ })
});
;
//# sourceMappingURL=ui-bb-currency-input-ng.js.map