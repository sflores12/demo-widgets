(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vendor-bb-angular"), require("lib-bb-currency-ng"));
	else if(typeof define === 'function' && define.amd)
		define("ui-bb-format-amount", ["vendor-bb-angular", "lib-bb-currency-ng"], factory);
	else if(typeof exports === 'object')
		exports["ui-bb-format-amount"] = factory(require("vendor-bb-angular"), require("lib-bb-currency-ng"));
	else
		root["ui-bb-format-amount"] = factory(root["vendor-bb-angular"], root["lib-bb-currency-ng"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_53__) {
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

	module.exports = __webpack_require__(76);

/***/ }),

/***/ 2:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ }),

/***/ 53:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_53__;

/***/ }),

/***/ 76:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _vendorBbAngular = __webpack_require__(2);
	
	var _vendorBbAngular2 = _interopRequireDefault(_vendorBbAngular);
	
	var _libBbCurrencyNg = __webpack_require__(53);
	
	var _libBbCurrencyNg2 = _interopRequireDefault(_libBbCurrencyNg);
	
	var _formatAmount = __webpack_require__(77);
	
	var _formatAmount2 = _interopRequireDefault(_formatAmount);
	
	var _wrap = __webpack_require__(78);
	
	var _wrap2 = _interopRequireDefault(_wrap);
	
	var _sign = __webpack_require__(79);
	
	var _sign2 = _interopRequireDefault(_sign);
	
	var _rule = __webpack_require__(80);
	
	var _rule2 = _interopRequireDefault(_rule);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	* @description The angular module name
	* @name default
	* @type {string}
	*/
	/**
	 * @module ui-bb-format-amount
	 *
	 * @example
	 * // In an extension:
	 * // file: scripts/index.js
	 * import uiBbFormatAmountKey from 'ui-bb-format-amount';
	 *
	 * export const dependencyKeys = [
	 *   uiBbFormatAmountKey,
	 * ];
	 *
	 * // file: templates/template.ng.html
	 * <ui-bb-format-amount
	 * amount="$option.amount"
	 * currency="$option.currency"
	 * wrap-whole-number
	 * wrap-decimals
	 * wrap-currency
	 * wrap
	 * no-map
	 * show-plus-sign
	 * ></ui-bb-format-amount>
	 *
	 * Note:
	 * wrap-whole-number, wrap-decimals and wrap-currency attributes are deprecated. Use wrap instead
	 */
	exports.default = _vendorBbAngular2.default.module('ui-bb-format-amount', [_libBbCurrencyNg2.default]).component('uiBbFormatAmount', _formatAmount2.default).factory('currencyRules', [_libBbCurrencyNg.bbCurrencyRuleKey, _rule2.default])
	/**
	 * Wraps whole number part in <span class="amount-whole-number">
	 * Wraps decimals in <span class="amount-decimals">
	 * Wraps decimal point in <span class="amount-decimal-point">
	 * Wraps currency in <span class="amount-currency">
	 *
	 * @name wrap
	 * @type {function}
	 * @param {object} $locale Localization service
	 * @param {object} $sce SCE Service
	 * @returns {string} Figures wrapped in <span> elements
	 */
	.filter('wrap', ['$locale', '$sce', _wrap2.default])
	/**
	 * @type {function}
	 * @name signFilter
	 * @description
	 * Filter for currency formatting with an option to add + sign for positive values
	 *
	 * @returns {string}
	 */
	.filter('sign', ['$locale', '$filter', _sign2.default]).name;

/***/ }),

/***/ 77:
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * @name uiBbFormatAmountComponent
	 * @type {object}
	 * @description
	 * Format Amount Component Object
	 *
	 * @property {string} amount Amount string
	 * @property {string} currency Currency string
	 * @property {string} wrapWholeNumber Condition to wrap amount sign (if present)
	 * and the whole part of number in HTML wrapper (deprecated)
	 * @property {string} wrapDecimals
	 * Condition to wrap decimal point and number decimals in HTML wrapper (deprecated)
	 * @property {string} wrapCurrency Condition to wrap currency sign or code in
	 * HTML wrapper (deprecated)
	 * @property {void} wrap Condition to wrap amount sign (if present), currency sign or code,
	 * whole part of the number, decimal point and number decimals in separate HTML wrappers
	 * @property {void} noMap Condition to stop looking for currency mapping in the currency-map
	 * @property {void} showPlusSign Condition to prepend plus sign for positive amounts
	 */
	var uiBbFormatAmountComponent = {
	  bindings: {
	    amount: '<',
	    currency: '<'
	  },
	  template: ['$attrs', function template(attrs) {
	    // output deprecation messages for old wrap attributes
	    // these attributes should be removed in version 2.0.0
	    if ('wrapWholeNumber' in attrs) {
	      // eslint-disable-next-line max-len, no-console
	      console.warn('DEPRECATED - wrap-whole-number attribute will be ignored in the next component major release. Use \'wrap\' attribute instead.');
	    }
	    if ('wrapDecimals' in attrs) {
	      // eslint-disable-next-line max-len, no-console
	      console.warn('DEPRECATED - wrap-decimals attribute will be ignored in the next component major release. Use \'wrap\' attribute instead.');
	    }
	    if ('wrapCurrency' in attrs) {
	      // eslint-disable-next-line max-len, no-console
	      console.warn('DEPRECATED - wrap-currency attribute will be ignored in the next component major release. Use \'wrap\' attribute instead.');
	    }
	
	    var wrap = 'wrap' in attrs;
	    var wrapWholeNumber = wrap || 'wrapWholeNumber' in attrs;
	    var wrapDecimals = wrap || 'wrapDecimals' in attrs;
	    var wrapCurrency = wrap || 'wrapCurrency' in attrs;
	
	    var wrapingEnabled = wrapWholeNumber || wrapDecimals || wrapCurrency;
	    var bindMode = wrapingEnabled ? 'ng-bind-html' : 'ng-bind';
	    var wrapParams = [wrapWholeNumber, wrapDecimals, wrapCurrency].join(':');
	    var wrapFilter = wrapingEnabled ? ' | wrap: ' + wrapParams : '';
	
	    return '\n      <span class="amount"\n        data-role="amount"\n        ng-class="$ctrl.amount < 0 ? \'amount-negative\' : \'amount-positive\'"\n        ' + bindMode + '="$ctrl.amount | \n          sign: $ctrl.format.symbol:$ctrl.format.decimalDigits:' + ('showPlusSign' in attrs) + '\n          ' + wrapFilter + '">\n      </span>\n    ';
	  }],
	  controller: ['$attrs', 'currencyRules', function controller($attrs, currencyRules) {
	    var $ctrl = this;
	    var $onChanges = function $onChanges() {
	      var format = {
	        symbol: $ctrl.currency || ''
	      };
	
	      if (!('noMap' in $attrs) && $ctrl.currency) {
	        Object.assign(format, currencyRules.getRule($ctrl.currency));
	      }
	
	      Object.assign($ctrl, { format: format });
	    };
	
	    Object.assign($ctrl, {
	      $onChanges: $onChanges
	    });
	  }]
	};
	
	exports.default = uiBbFormatAmountComponent;

/***/ }),

/***/ 78:
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = wrapFilter;
	/**
	 * @type {function}
	 * @name wrapFilter
	 * @description
	 * Filter used to wrap numbers (whole and decimal part) and decimal point in HTML wrappers.
	 *
	 * @param {object} $locale Localization service
	 * @param {object} $sce SCE Service
	 * @returns {function} Function that is used to wrap the value
	 */
	function wrapFilter($locale, $sce) {
	  var CLASS_SIGN = 'amount-sign';
	  var CLASS_WHOLE = 'amount-whole-number';
	  var CLASS_POINTS = 'amount-decimal-points';
	  var CLASS_DECIMALS = 'amount-decimals';
	  var CLASS_CURRENCY = 'amount-currency';
	  // . is special sign, we need to prefix it with \\ if it is a decimal point
	  var groupPrefix = $locale.NUMBER_FORMATS.GROUP_SEP === '.' ? '\\' : '';
	  var pointPrefix = $locale.NUMBER_FORMATS.DECIMAL_SEP === '.' ? '\\' : '';
	  var groupRegExp = '' + groupPrefix + $locale.NUMBER_FORMATS.GROUP_SEP;
	  var decimalRegExp = '' + pointPrefix + $locale.NUMBER_FORMATS.DECIMAL_SEP;
	  // construct search RegExp
	  var exp = '(\\+|-)?([^0-9]+)?([\\d|' + groupRegExp + ']+)(' + decimalRegExp + ')(\\d+)(.+)?';
	  var search = new RegExp(exp);
	
	  /**
	   * @type {function}
	   * @inner
	   * @name wrapRegExpGroup
	   * @description
	   * RegExp replace string builder
	   *
	   * @param {number} groupIndex Replace index
	   * @param {boolean} wrapRequested Is wrapping for this group requested
	   * @param {string} wrapClass CSS class of the wrapper
	   */
	  var wrapRegExpGroup = function wrapRegExpGroup(groupIndex, wrapRequested, wrapClass) {
	    if (wrapRequested) {
	      return '<span class="' + wrapClass + '">$' + groupIndex + '</span>';
	    }
	
	    return '$' + groupIndex;
	  };
	
	  return function (value, whole, decimals, currency) {
	    if (value) {
	      // wrap configuration array containing object with flag for wrapping
	      // and wrapping class that should be used if wrapping is requested
	      var wrapConfig = [{ requested: whole, cssClass: CLASS_SIGN }, { requested: currency, cssClass: CLASS_CURRENCY }, { requested: whole, cssClass: CLASS_WHOLE }, { requested: decimals, cssClass: CLASS_POINTS }, { requested: decimals, cssClass: CLASS_DECIMALS }, { requested: currency, cssClass: CLASS_CURRENCY }];
	
	      var replace = '';
	      for (var i = 0; i < wrapConfig.length; i++) {
	        replace += wrapRegExpGroup(i + 1, wrapConfig[i].requested, wrapConfig[i].cssClass);
	      }
	      // wrap it up
	      var wrapped = value.replace(search, replace);
	      // clear empty span elements
	      var cleaned = wrapped.replace(new RegExp('<span[^<>]+><\\/span>', 'g'), '');
	      return $sce.trustAsHtml(cleaned);
	    }
	
	    return '';
	  };
	}

/***/ }),

/***/ 79:
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = signFilter;
	/**
	 * @type {function}
	 * @name signFilter
	 * @description
	 * Filter for currency formatting with an option to add + sign for positive values
	 *
	 * @param {object} $locale Localization service
	 * @param {function} $filter Filter service
	 * @returns {function} Function that is used to filter
	 */
	function signFilter($locale, $filter) {
	  return function (value, symbol, decimals, sign) {
	    if (!sign) {
	      return $filter('currency')(value, symbol, decimals);
	    }
	
	    var patterns = $locale.NUMBER_FORMATS.PATTERNS[1];
	    var posPre = patterns.posPre,
	        posSuf = patterns.posSuf;
	
	
	    patterns.posPre = patterns.negPre.replace('-', '+');
	    patterns.posSuf = patterns.negSuf.replace('-', '+');
	
	    var formatted = $filter('currency')(value, symbol, decimals);
	    Object.assign(patterns, { posPre: posPre, posSuf: posSuf });
	    return formatted;
	  };
	}

/***/ }),

/***/ 80:
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	/**
	 * @type {function}
	 * @description
	 * A factory to get a function that returns currency's symbol based on ISO code
	 *
	 * @param {function} getRule Library's method to get currency related format rules
	 * @returns {function}
	 */
	exports.default = function (getRule) {
	  return { getRule: getRule };
	};

/***/ })

/******/ })
});
;
//# sourceMappingURL=ui-bb-format-amount.js.map