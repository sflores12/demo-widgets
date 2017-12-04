(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vendor-bb-angular"));
	else if(typeof define === 'function' && define.amd)
		define("lib-bb-currency-ng", ["vendor-bb-angular"], factory);
	else if(typeof exports === 'object')
		exports["lib-bb-currency-ng"] = factory(require("vendor-bb-angular"));
	else
		root["lib-bb-currency-ng"] = factory(root["vendor-bb-angular"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_5__) {
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

	module.exports = __webpack_require__(11);

/***/ }),
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_5__;

/***/ }),
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.bbCurrencyRuleKey = undefined;
	
	var _vendorBbAngular = __webpack_require__(5);
	
	var _vendorBbAngular2 = _interopRequireDefault(_vendorBbAngular);
	
	var _libBbCurrency = __webpack_require__(12);
	
	var _libBbCurrency2 = _interopRequireDefault(_libBbCurrency);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * @module lib-bb-currency-ng
	 *
	 * @description Provides currency symbol and number of decimal digits.
	 *
	 * @example
	 * import angular from 'vendor-bb-angular';
	 * import libBbCurrencyNgModuleKey, { bbRuleKey } from 'lib-bb-currency-ng';
	 *
	 * angular.module('example-module', [libBbCurrencyNgModuleKey])
	 *   .factory('MyService', [bbRuleKey, (getRule) => ({
	 *       getCurrencyRule: (currencyCode) => getRule(currencyCode) || {
	 *           symbol: '',
	 *           decimalDigits: 2,
	 *         },
	 *     }),
	 *   ]);
	 *
	 */
	
	var moduleKey = 'lib-bb-currency-ng';
	
	/**
	 * The dependency injection key for the getRule Service
	 * @name bbCurrencyRuleKey
	 * @type {string}
	 */
	var bbCurrencyRuleKey = exports.bbCurrencyRuleKey = moduleKey + ':getRule';
	
	/**
	 * @name default
	 * @type {string}
	 * @description Angular module name
	 */
	exports.default = _vendorBbAngular2.default.module(moduleKey, [])
	
	/**
	 * @name getRule
	 * @ngkey lib-bb-currency-ng:getRule
	 * @type {function}
	 * @return {getRule} Function which returns currency symbol
	 * and number of decimal places for given currency.
	 */
	.factory(bbCurrencyRuleKey, [function () {
	  return _libBbCurrency2.default;
	}]).name;
	
	/**
	 * @typedef getRule
	 * @type {function}
	 * @param currencyCode {string} Currency's ISO 4217 code
	 * @returns {CurrencyRule} Rule object or null if not found
	 */
	
	/**
	 * @typedef {Object} CurrencyRule
	 * @property {string} symbol
	 * @property {number} decimalDigits
	 */

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _rules = __webpack_require__(13);
	
	/**
	 * Retrieve currency rule object
	 *
	 * @name lib-bb-currency.getRule
	 * @inner
	 * @type {function}
	 * @param currencyCode {string} Currency's ISO 4217 code
	 * @returns {CurrencyRule} Rule object or null if not found
	 */
	var getRule = function getRule(currencyCode) {
	  return _rules.currencyRules[currencyCode] || null;
	};
	
	exports.default = getRule;

/***/ }),
/* 13 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var currencyRules = exports.currencyRules = {
	  AED: {
	    symbol: 'د.إ.‏',
	    decimalDigits: 2
	  },
	  AFN: {
	    symbol: '؋',
	    decimalDigits: 2
	  },
	  ALL: {
	    symbol: 'Lek',
	    decimalDigits: 2
	  },
	  AMD: {
	    symbol: '֏',
	    decimalDigits: 2
	  },
	  ANG: {
	    symbol: 'ƒ',
	    decimalDigits: 2
	  },
	  AOA: {
	    symbol: 'Kz',
	    decimalDigits: 2
	  },
	  ARS: {
	    symbol: '$',
	    decimalDigits: 2
	  },
	  AUD: {
	    symbol: '$',
	    decimalDigits: 2
	  },
	  AWG: {
	    symbol: 'ƒ',
	    decimalDigits: 2
	  },
	  AZN: {
	    symbol: '₼',
	    decimalDigits: 2
	  },
	  BAM: {
	    symbol: 'КМ',
	    decimalDigits: 2
	  },
	  BBD: {
	    symbol: '$',
	    decimalDigits: 2
	  },
	  BDT: {
	    symbol: '৳',
	    decimalDigits: 0
	  },
	  BGN: {
	    symbol: 'лв.',
	    decimalDigits: 2
	  },
	  BHD: {
	    symbol: 'د.ب.‏',
	    decimalDigits: 3
	  },
	  BIF: {
	    symbol: 'FBu',
	    decimalDigits: 0
	  },
	  BMD: {
	    symbol: '$',
	    decimalDigits: 2
	  },
	  BND: {
	    symbol: '$',
	    decimalDigits: 0
	  },
	  BOB: {
	    symbol: 'Bs',
	    decimalDigits: 2
	  },
	  BRL: {
	    symbol: 'R$',
	    decimalDigits: 2
	  },
	  BSD: {
	    symbol: '$',
	    decimalDigits: 2
	  },
	  BTC: {
	    symbol: 'Ƀ',
	    decimalDigits: 2
	  },
	  BTN: {
	    symbol: 'Nu.',
	    decimalDigits: 1
	  },
	  BWP: {
	    symbol: 'P',
	    decimalDigits: 2
	  },
	  BYR: {
	    symbol: 'р.',
	    decimalDigits: 2
	  },
	  BZD: {
	    symbol: 'BZ$',
	    decimalDigits: 2
	  },
	  CAD: {
	    symbol: '$',
	    decimalDigits: 2
	  },
	  CDF: {
	    symbol: 'FC',
	    decimalDigits: 2
	  },
	  CHF: {
	    symbol: 'CHF',
	    decimalDigits: 2
	  },
	  CLP: {
	    symbol: '$',
	    decimalDigits: 2
	  },
	  CNY: {
	    symbol: '¥',
	    decimalDigits: 2
	  },
	  COP: {
	    symbol: '$',
	    decimalDigits: 2
	  },
	  CRC: {
	    symbol: '₡',
	    decimalDigits: 2
	  },
	  CUC: {
	    symbol: 'CUC',
	    decimalDigits: 2
	  },
	  CUP: {
	    symbol: '$MN',
	    decimalDigits: 2
	  },
	  CVE: {
	    symbol: '$',
	    decimalDigits: 2
	  },
	  CZK: {
	    symbol: 'Kč',
	    decimalDigits: 2
	  },
	  DJF: {
	    symbol: 'Fdj',
	    decimalDigits: 0
	  },
	  DKK: {
	    symbol: 'kr.',
	    decimalDigits: 2
	  },
	  DOP: {
	    symbol: 'RD$',
	    decimalDigits: 2
	  },
	  DZD: {
	    symbol: 'د.ج.‏',
	    decimalDigits: 2
	  },
	  EGP: {
	    symbol: 'ج.م.‏',
	    decimalDigits: 2
	  },
	  ERN: {
	    symbol: 'Nfk',
	    decimalDigits: 2
	  },
	  ETB: {
	    symbol: 'ETB',
	    decimalDigits: 2
	  },
	  EUR: {
	    symbol: '€',
	    decimalDigits: 2
	  },
	  FJD: {
	    symbol: '$',
	    decimalDigits: 2
	  },
	  FKP: {
	    symbol: '£',
	    decimalDigits: 2
	  },
	  GBP: {
	    symbol: '£',
	    decimalDigits: 2
	  },
	  GEL: {
	    symbol: 'Lari',
	    decimalDigits: 2
	  },
	  GHS: {
	    symbol: '₵',
	    decimalDigits: 2
	  },
	  GIP: {
	    symbol: '£',
	    decimalDigits: 2
	  },
	  GMD: {
	    symbol: 'D',
	    decimalDigits: 2
	  },
	  GNF: {
	    symbol: 'FG',
	    decimalDigits: 0
	  },
	  GTQ: {
	    symbol: 'Q',
	    decimalDigits: 2
	  },
	  GYD: {
	    symbol: '$',
	    decimalDigits: 2
	  },
	  HKD: {
	    symbol: 'HK$',
	    decimalDigits: 2
	  },
	  HNL: {
	    symbol: 'L.',
	    decimalDigits: 2
	  },
	  HRK: {
	    symbol: 'kn',
	    decimalDigits: 2
	  },
	  HTG: {
	    symbol: 'G',
	    decimalDigits: 2
	  },
	  HUF: {
	    symbol: 'Ft',
	    decimalDigits: 2
	  },
	  IDR: {
	    symbol: 'Rp',
	    decimalDigits: 0
	  },
	  ILS: {
	    symbol: '₪',
	    decimalDigits: 2
	  },
	  INR: {
	    symbol: '₹',
	    decimalDigits: 2
	  },
	  IQD: {
	    symbol: 'د.ع.‏',
	    decimalDigits: 2
	  },
	  IRR: {
	    symbol: '﷼',
	    decimalDigits: 2
	  },
	  ISK: {
	    symbol: 'kr.',
	    decimalDigits: 0
	  },
	  JMD: {
	    symbol: 'J$',
	    decimalDigits: 2
	  },
	  JOD: {
	    symbol: 'د.ا.‏',
	    decimalDigits: 3
	  },
	  JPY: {
	    symbol: '¥',
	    decimalDigits: 0
	  },
	  KES: {
	    symbol: 'S',
	    decimalDigits: 2
	  },
	  KGS: {
	    symbol: 'сом',
	    decimalDigits: 2
	  },
	  KHR: {
	    symbol: '៛',
	    decimalDigits: 0
	  },
	  KMF: {
	    symbol: 'CF',
	    decimalDigits: 2
	  },
	  KPW: {
	    symbol: '₩',
	    decimalDigits: 0
	  },
	  KRW: {
	    symbol: '₩',
	    decimalDigits: 0
	  },
	  KWD: {
	    symbol: 'د.ك.‏',
	    decimalDigits: 3
	  },
	  KYD: {
	    symbol: '$',
	    decimalDigits: 2
	  },
	  KZT: {
	    symbol: '₸',
	    decimalDigits: 2
	  },
	  LAK: {
	    symbol: '₭',
	    decimalDigits: 0
	  },
	  LBP: {
	    symbol: 'ل.ل.‏',
	    decimalDigits: 2
	  },
	  LKR: {
	    symbol: '₨',
	    decimalDigits: 0
	  },
	  LRD: {
	    symbol: '$',
	    decimalDigits: 2
	  },
	  LSL: {
	    symbol: 'M',
	    decimalDigits: 2
	  },
	  LYD: {
	    symbol: 'د.ل.‏',
	    decimalDigits: 3
	  },
	  MAD: {
	    symbol: 'د.م.‏',
	    decimalDigits: 2
	  },
	  MDL: {
	    symbol: 'lei',
	    decimalDigits: 2
	  },
	  MGA: {
	    symbol: 'Ar',
	    decimalDigits: 0
	  },
	  MKD: {
	    symbol: 'ден.',
	    decimalDigits: 2
	  },
	  MMK: {
	    symbol: 'K',
	    decimalDigits: 2
	  },
	  MNT: {
	    symbol: '₮',
	    decimalDigits: 2
	  },
	  MOP: {
	    symbol: 'MOP$',
	    decimalDigits: 2
	  },
	  MRO: {
	    symbol: 'UM',
	    decimalDigits: 2
	  },
	  MTL: {
	    symbol: '₤',
	    decimalDigits: 2
	  },
	  MUR: {
	    symbol: '₨',
	    decimalDigits: 2
	  },
	  MVR: {
	    symbol: 'MVR',
	    decimalDigits: 1
	  },
	  MWK: {
	    symbol: 'MK',
	    decimalDigits: 2
	  },
	  MXN: {
	    symbol: '$',
	    decimalDigits: 2
	  },
	  MYR: {
	    symbol: 'RM',
	    decimalDigits: 2
	  },
	  MZN: {
	    symbol: 'MT',
	    decimalDigits: 0
	  },
	  NAD: {
	    symbol: '$',
	    decimalDigits: 2
	  },
	  NGN: {
	    symbol: '₦',
	    decimalDigits: 2
	  },
	  NIO: {
	    symbol: 'C$',
	    decimalDigits: 2
	  },
	  NOK: {
	    symbol: 'kr',
	    decimalDigits: 2
	  },
	  NPR: {
	    symbol: '₨',
	    decimalDigits: 2
	  },
	  NZD: {
	    symbol: '$',
	    decimalDigits: 2
	  },
	  OMR: {
	    symbol: '﷼',
	    decimalDigits: 3
	  },
	  PAB: {
	    symbol: 'B/.',
	    decimalDigits: 2
	  },
	  PEN: {
	    symbol: 'S/.',
	    decimalDigits: 2
	  },
	  PGK: {
	    symbol: 'K',
	    decimalDigits: 2
	  },
	  PHP: {
	    symbol: '₱',
	    decimalDigits: 2
	  },
	  PKR: {
	    symbol: '₨',
	    decimalDigits: 2
	  },
	  PLN: {
	    symbol: 'zł',
	    decimalDigits: 2
	  },
	  PYG: {
	    symbol: '₲',
	    decimalDigits: 2
	  },
	  QAR: {
	    symbol: '﷼',
	    decimalDigits: 2
	  },
	  RON: {
	    symbol: 'lei',
	    decimalDigits: 2
	  },
	  RSD: {
	    symbol: 'Дин.',
	    decimalDigits: 2
	  },
	  RUB: {
	    symbol: '₽',
	    decimalDigits: 2
	  },
	  RWF: {
	    symbol: 'RWF',
	    decimalDigits: 2
	  },
	  SAR: {
	    symbol: '﷼',
	    decimalDigits: 2
	  },
	  SBD: {
	    symbol: '$',
	    decimalDigits: 2
	  },
	  SCR: {
	    symbol: '₨',
	    decimalDigits: 2
	  },
	  SDD: {
	    symbol: 'LSd',
	    decimalDigits: 2
	  },
	  SDG: {
	    symbol: '£‏',
	    decimalDigits: 2
	  },
	  SEK: {
	    symbol: 'kr',
	    decimalDigits: 2
	  },
	  SGD: {
	    symbol: '$',
	    decimalDigits: 2
	  },
	  SHP: {
	    symbol: '£',
	    decimalDigits: 2
	  },
	  SLL: {
	    symbol: 'Le',
	    decimalDigits: 2
	  },
	  SOS: {
	    symbol: 'S',
	    decimalDigits: 2
	  },
	  SRD: {
	    symbol: '$',
	    decimalDigits: 2
	  },
	  STD: {
	    symbol: 'Db',
	    decimalDigits: 2
	  },
	  SVC: {
	    symbol: '₡',
	    decimalDigits: 2
	  },
	  SYP: {
	    symbol: '£',
	    decimalDigits: 2
	  },
	  SZL: {
	    symbol: 'E',
	    decimalDigits: 2
	  },
	  THB: {
	    symbol: '฿',
	    decimalDigits: 2
	  },
	  TJS: {
	    symbol: 'TJS',
	    decimalDigits: 2
	  },
	  TMT: {
	    symbol: 'm',
	    decimalDigits: 0
	  },
	  TND: {
	    symbol: 'د.ت.‏',
	    decimalDigits: 3
	  },
	  TOP: {
	    symbol: 'T$',
	    decimalDigits: 2
	  },
	  TRY: {
	    symbol: 'TL',
	    decimalDigits: 2
	  },
	  TTD: {
	    symbol: 'TT$',
	    decimalDigits: 2
	  },
	  TVD: {
	    symbol: '$',
	    decimalDigits: 2
	  },
	  TWD: {
	    symbol: 'NT$',
	    decimalDigits: 2
	  },
	  TZS: {
	    symbol: 'TSh',
	    decimalDigits: 2
	  },
	  UAH: {
	    symbol: '₴',
	    decimalDigits: 2
	  },
	  UGX: {
	    symbol: 'USh',
	    decimalDigits: 2
	  },
	  USD: {
	    symbol: '$',
	    decimalDigits: 2
	  },
	  UYU: {
	    symbol: '$U',
	    decimalDigits: 2
	  },
	  UZS: {
	    symbol: 'сўм',
	    decimalDigits: 2
	  },
	  VEB: {
	    symbol: 'Bs.',
	    decimalDigits: 2
	  },
	  VEF: {
	    symbol: 'Bs. F.',
	    decimalDigits: 2
	  },
	  VND: {
	    symbol: '₫',
	    decimalDigits: 1
	  },
	  VUV: {
	    symbol: 'VT',
	    decimalDigits: 0
	  },
	  WST: {
	    symbol: 'WS$',
	    decimalDigits: 2
	  },
	  XAF: {
	    symbol: 'F',
	    decimalDigits: 2
	  },
	  XCD: {
	    symbol: '$',
	    decimalDigits: 2
	  },
	  XOF: {
	    symbol: 'F',
	    decimalDigits: 2
	  },
	  XPF: {
	    symbol: 'F',
	    decimalDigits: 2
	  },
	  YER: {
	    symbol: '﷼',
	    decimalDigits: 2
	  },
	  ZAR: {
	    symbol: 'R',
	    decimalDigits: 2
	  },
	  ZMW: {
	    symbol: 'ZK',
	    decimalDigits: 2
	  }
	};
	
	exports.default = currencyRules;

/***/ })
/******/ ])
});
;
//# sourceMappingURL=lib-bb-currency-ng.js.map