(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vendor-bb-angular"));
	else if(typeof define === 'function' && define.amd)
		define("data-bb-transactions-http-ng", ["vendor-bb-angular"], factory);
	else if(typeof exports === 'object')
		exports["data-bb-transactions-http-ng"] = factory(require("vendor-bb-angular"));
	else
		root["data-bb-transactions-http-ng"] = factory(root["vendor-bb-angular"]);
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
	exports.transactionsDataKey = undefined;
	
	var _vendorBbAngular = __webpack_require__(2);
	
	var _vendorBbAngular2 = _interopRequireDefault(_vendorBbAngular);
	
	var _dataBbTransactionsHttp = __webpack_require__(3);
	
	var _dataBbTransactionsHttp2 = _interopRequireDefault(_dataBbTransactionsHttp);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/* eslint-disable */
	/**
	 * @module data-bb-transactions-http-ng
	 *
	 * @description A data module for accessing the Transactions REST API.
	 *
	 * @returns {String} `data-bb-transactions-http-ng`
	 * @example
	 * import transactionsDataModuleKey, {
	 *   transactionsDataKey,
	 * } from 'data-bb-transactions-http-ng';
	 */
	
	var transactionsDataModuleKey = 'data-bb-transactions-http-ng';
	/**
	 * @name transactionsDataKey
	 * @type {string}
	 * @description Angular dependency injection key for the TransactionsData service
	 */
	var transactionsDataKey = exports.transactionsDataKey = 'data-bb-transactions-http-ng:transactionsData';
	/**
	 * @name default
	 * @type {string}
	 * @description Angular dependency injection module key
	 */
	exports.default = _vendorBbAngular2.default.module(transactionsDataModuleKey, [])
	
	/**
	 * @constructor TransactionsData
	 * @type {object}
	 *
	 * @description Public api for data-bb-transactions-http-ng service
	 *
	 */
	.provider(transactionsDataKey, [function () {
	  var config = {
	    baseUri: '/'
	  };
	
	  /**
	   * @name TransactionsDataProvider
	   * @type {object}
	   * @ngkey data-bb-transactions-http-ng:transactionsDataProvider
	   * @description
	   * Data service that can be configured with custom base URI.
	   *
	   * @example
	   * // Configuring in an angular app:
	   * angular.module(...)
	   *   .config(['data-bb-transactions-http-ng:transactionsDataProvider',
	   *     (dataProvider) => {
	   *       dataProvider.setBaseUri('http://my-service.com/');
	   *       });
	   *
	   * // Configuring With config-bb-providers-ng:
	   * export default [
	   *   ['data-bb-transactions-http-ng:transactionsDataProvider', (dataProvider) => {
	   *       dataProvider.setBaseUri('http://my-service.com/');
	   *   }]
	   * ];
	   */
	  return {
	    /**
	     * @name TransactionsDataProvider#setBaseUri
	     * @type {function}
	     * @param {string} baseUri Base URI which will be the prefix for all HTTP requests
	     */
	    setBaseUri: function setBaseUri(baseUri) {
	      config.baseUri = baseUri;
	    },
	
	    /**
	     * @name TransactionsDataProvider#$get
	     * @type {function}
	     * @return {object} An instance of the service
	     */
	    $get: ['$http', '$httpParamSerializer',
	    /* into */
	    (0, _dataBbTransactionsHttp2.default)(config)]
	  };
	}]).name;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ }),
/* 3 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	/* eslint-disable */
	exports.default = function (conf) {
	  return function (httpClient, serializeParams) {
	    // Base param constants
	    var baseUri = conf.baseUri || '';
	
	    var version = 'v2';
	
	    /**
	     * The root defined types from the RAML.
	     * @private
	     */
	    var definedTypes = {};
	
	    definedTypes['TransactionsData.TransactionsGet'] = { "type": "array", "items": { "properties": { "id": { "type": "string", "maxLength": 50, "required": true }, "arrangementId": { "type": "string", "maxLength": 50, "required": true }, "externalId": { "type": "string", "maxLength": 50, "required": false }, "externalArrangementId": { "type": "string", "maxLength": 50, "required": true }, "productId": { "type": "string", "maxLength": 50, "required": true }, "reference": { "type": "string", "maxLength": 36, "required": true }, "description": { "type": "string", "maxLength": 128, "required": true }, "typeGroup": { "type": "string", "enum": ["Payment", "Withdrawal", "Loans", "Fees"], "required": true }, "type": { "type": "string", "enum": ["SEPA CT", "SEPA DD", "BACS (UK)", "Faster payment (UK)", "CHAPS (UK)", "International payment", "Loan redemption", "Interest settlement"], "required": true }, "category": { "type": "string", "maxLength": 50, "required": false }, "bookingDate": { "type": "string", "format": "date-time", "required": true }, "valueDate": { "type": "string", "format": "date-time", "required": false }, "amount": { "type": "number", "required": true }, "currency": { "enum": ["AED", "AFN", "ALL", "AMD", "ANG", "AOA", "ARS", "AUD", "AWG", "AZN", "BAM", "BBD", "BDT", "BGN", "BHD", "BIF", "BMD", "BND", "BOB", "BOV", "BRL", "BSD", "BTN", "BWP", "BYN", "BZD", "CAD", "CDF", "CHE", "CHW", "CLF", "CLP", "CNY", "COP", "COU", "CRC", "CUC", "CUP", "CVE", "CZK", "DJF", "DKK", "DOP", "DZD", "EGP", "ERN", "ETB", "EUR", "FJD", "FKP", "GBP", "GEL", "GHS", "GIP", "GMD", "GNF", "GTQ", "GYD", "HKD", "HNL", "HRK", "HTG", "HUF", "IDR", "ILS", "INR", "IQD", "IRR", "ISK", "JMD", "JOD", "JPY", "KES", "KGS", "KHR", "KMF", "KPW", "KWD", "KYD", "KZT", "LAK", "LBP", "LKR", "LRD", "LSL", "LYD", "MAD", "MDL", "MGA", "MKD", "MMK", "MNT", "MOP", "MRO", "MUR", "MVR", "MWK", "MXN", "MXV", "MYR", "MZN", "NAD", "NGN", "NIO", "NOK", "NPR", "NZD", "OMR", "PAB", "PEN", "PGK", "PHP", "PKR", "PLN", "PYG", "QAR", "RON", "RSD", "RUB", "RWF", "SAR", "SBD", "SCR", "SDG", "SEK", "SGD", "SHP", "SLL", "SOS", "SRD", "SSP", "STD", "SVC", "SYP", "SZL", "THB", "TJS", "TMT", "TND", "TOP", "TRY", "TTD", "TWD", "TZS", "UAH", "UGX", "USD", "USN", "UYI", "UYU", "UZS", "VEF", "VND", "VUV", "WST", "YER", "ZAR", "ZMW", "ZWL"], "required": true }, "creditDebitIndicator": { "type": "string", "enum": ["CRDT", "DBIT"], "required": true }, "instructedAmount": { "type": "number", "required": false }, "instructedCurrency": { "enum": ["AED", "AFN", "ALL", "AMD", "ANG", "AOA", "ARS", "AUD", "AWG", "AZN", "BAM", "BBD", "BDT", "BGN", "BHD", "BIF", "BMD", "BND", "BOB", "BOV", "BRL", "BSD", "BTN", "BWP", "BYN", "BZD", "CAD", "CDF", "CHE", "CHW", "CLF", "CLP", "CNY", "COP", "COU", "CRC", "CUC", "CUP", "CVE", "CZK", "DJF", "DKK", "DOP", "DZD", "EGP", "ERN", "ETB", "EUR", "FJD", "FKP", "GBP", "GEL", "GHS", "GIP", "GMD", "GNF", "GTQ", "GYD", "HKD", "HNL", "HRK", "HTG", "HUF", "IDR", "ILS", "INR", "IQD", "IRR", "ISK", "JMD", "JOD", "JPY", "KES", "KGS", "KHR", "KMF", "KPW", "KWD", "KYD", "KZT", "LAK", "LBP", "LKR", "LRD", "LSL", "LYD", "MAD", "MDL", "MGA", "MKD", "MMK", "MNT", "MOP", "MRO", "MUR", "MVR", "MWK", "MXN", "MXV", "MYR", "MZN", "NAD", "NGN", "NIO", "NOK", "NPR", "NZD", "OMR", "PAB", "PEN", "PGK", "PHP", "PKR", "PLN", "PYG", "QAR", "RON", "RSD", "RUB", "RWF", "SAR", "SBD", "SCR", "SDG", "SEK", "SGD", "SHP", "SLL", "SOS", "SRD", "SSP", "STD", "SVC", "SYP", "SZL", "THB", "TJS", "TMT", "TND", "TOP", "TRY", "TTD", "TWD", "TZS", "UAH", "UGX", "USD", "USN", "UYI", "UYU", "UZS", "VEF", "VND", "VUV", "WST", "YER", "ZAR", "ZMW", "ZWL"], "required": false }, "currencyExchangeRate": { "type": "number", "required": false }, "counterPartyName": { "type": "string", "maxLength": 128, "required": true }, "counterPartyAccountNumber": { "type": "string", "maxLength": 36, "required": false }, "counterPartyBIC": { "type": "string", "maxLength": 11, "required": false }, "counterPartyCountry": { "type": "string", "minLength": 2, "maxLength": 2, "required": false }, "counterPartyBankName": { "type": "string", "maxLength": 128, "required": false }, "creditorId": { "type": "string", "maxLength": 19, "required": false }, "mandateReference": { "type": "string", "maxLength": 128, "required": false } } } };
	
	    definedTypes['TransactionsData.TransactionsPost'] = { "properties": { "arrangementId": { "type": "string", "maxLength": 36, "required": false }, "externalId": { "type": "string", "maxLength": 50, "required": true }, "externalArrangementId": { "type": "string", "maxLength": 50, "required": true }, "reference": { "type": "string", "maxLength": 36, "required": true }, "description": { "type": "string", "maxLength": 128, "required": true }, "typeGroup": { "type": "string", "enum": ["Payment", "Withdrawal", "Loans", "Fees"], "required": true }, "type": { "type": "string", "enum": ["SEPA CT", "SEPA DD", "BACS (UK)", "Faster payment (UK)", "CHAPS (UK)", "International payment", "Loan redemption", "Interest settlement"], "required": true }, "category": { "type": "string", "maxLength": 50, "required": false }, "bookingDate": { "type": "string", "format": "date-time", "required": true }, "valueDate": { "type": "string", "format": "date-time", "required": false }, "amount": { "type": "number", "required": true }, "currency": { "enum": ["AED", "AFN", "ALL", "AMD", "ANG", "AOA", "ARS", "AUD", "AWG", "AZN", "BAM", "BBD", "BDT", "BGN", "BHD", "BIF", "BMD", "BND", "BOB", "BOV", "BRL", "BSD", "BTN", "BWP", "BYN", "BZD", "CAD", "CDF", "CHE", "CHW", "CLF", "CLP", "CNY", "COP", "COU", "CRC", "CUC", "CUP", "CVE", "CZK", "DJF", "DKK", "DOP", "DZD", "EGP", "ERN", "ETB", "EUR", "FJD", "FKP", "GBP", "GEL", "GHS", "GIP", "GMD", "GNF", "GTQ", "GYD", "HKD", "HNL", "HRK", "HTG", "HUF", "IDR", "ILS", "INR", "IQD", "IRR", "ISK", "JMD", "JOD", "JPY", "KES", "KGS", "KHR", "KMF", "KPW", "KWD", "KYD", "KZT", "LAK", "LBP", "LKR", "LRD", "LSL", "LYD", "MAD", "MDL", "MGA", "MKD", "MMK", "MNT", "MOP", "MRO", "MUR", "MVR", "MWK", "MXN", "MXV", "MYR", "MZN", "NAD", "NGN", "NIO", "NOK", "NPR", "NZD", "OMR", "PAB", "PEN", "PGK", "PHP", "PKR", "PLN", "PYG", "QAR", "RON", "RSD", "RUB", "RWF", "SAR", "SBD", "SCR", "SDG", "SEK", "SGD", "SHP", "SLL", "SOS", "SRD", "SSP", "STD", "SVC", "SYP", "SZL", "THB", "TJS", "TMT", "TND", "TOP", "TRY", "TTD", "TWD", "TZS", "UAH", "UGX", "USD", "USN", "UYI", "UYU", "UZS", "VEF", "VND", "VUV", "WST", "YER", "ZAR", "ZMW", "ZWL"], "required": true }, "creditDebitIndicator": { "type": "string", "enum": ["CRDT", "DBIT"], "required": true }, "instructedAmount": { "type": "number", "required": false }, "instructedCurrency": { "enum": ["AED", "AFN", "ALL", "AMD", "ANG", "AOA", "ARS", "AUD", "AWG", "AZN", "BAM", "BBD", "BDT", "BGN", "BHD", "BIF", "BMD", "BND", "BOB", "BOV", "BRL", "BSD", "BTN", "BWP", "BYN", "BZD", "CAD", "CDF", "CHE", "CHW", "CLF", "CLP", "CNY", "COP", "COU", "CRC", "CUC", "CUP", "CVE", "CZK", "DJF", "DKK", "DOP", "DZD", "EGP", "ERN", "ETB", "EUR", "FJD", "FKP", "GBP", "GEL", "GHS", "GIP", "GMD", "GNF", "GTQ", "GYD", "HKD", "HNL", "HRK", "HTG", "HUF", "IDR", "ILS", "INR", "IQD", "IRR", "ISK", "JMD", "JOD", "JPY", "KES", "KGS", "KHR", "KMF", "KPW", "KWD", "KYD", "KZT", "LAK", "LBP", "LKR", "LRD", "LSL", "LYD", "MAD", "MDL", "MGA", "MKD", "MMK", "MNT", "MOP", "MRO", "MUR", "MVR", "MWK", "MXN", "MXV", "MYR", "MZN", "NAD", "NGN", "NIO", "NOK", "NPR", "NZD", "OMR", "PAB", "PEN", "PGK", "PHP", "PKR", "PLN", "PYG", "QAR", "RON", "RSD", "RUB", "RWF", "SAR", "SBD", "SCR", "SDG", "SEK", "SGD", "SHP", "SLL", "SOS", "SRD", "SSP", "STD", "SVC", "SYP", "SZL", "THB", "TJS", "TMT", "TND", "TOP", "TRY", "TTD", "TWD", "TZS", "UAH", "UGX", "USD", "USN", "UYI", "UYU", "UZS", "VEF", "VND", "VUV", "WST", "YER", "ZAR", "ZMW", "ZWL"], "required": false }, "currencyExchangeRate": { "type": "number", "required": false }, "counterPartyName": { "type": "string", "maxLength": 128, "required": true }, "counterPartyAccountNumber": { "type": "string", "maxLength": 36, "required": false }, "counterPartyBIC": { "type": "string", "maxLength": 11, "required": false }, "counterPartyCountry": { "type": "string", "minLength": 2, "maxLength": 2, "required": false }, "counterPartyBankName": { "type": "string", "maxLength": 128, "required": false }, "creditorId": { "type": "string", "maxLength": 19, "required": false }, "mandateReference": { "type": "string", "maxLength": 128, "required": false } } };
	
	    definedTypes['TransactionsData.TransactionItem'] = { "properties": { "id": { "type": "string", "maxLength": 50, "required": true }, "arrangementId": { "type": "string", "maxLength": 50, "required": true }, "externalId": { "type": "string", "maxLength": 50, "required": false }, "externalArrangementId": { "type": "string", "maxLength": 50, "required": true }, "productId": { "type": "string", "maxLength": 50, "required": true }, "reference": { "type": "string", "maxLength": 36, "required": true }, "description": { "type": "string", "maxLength": 128, "required": true }, "typeGroup": { "type": "string", "enum": ["Payment", "Withdrawal", "Loans", "Fees"], "required": true }, "type": { "type": "string", "enum": ["SEPA CT", "SEPA DD", "BACS (UK)", "Faster payment (UK)", "CHAPS (UK)", "International payment", "Loan redemption", "Interest settlement"], "required": true }, "category": { "type": "string", "maxLength": 50, "required": false }, "bookingDate": { "type": "string", "format": "date-time", "required": true }, "valueDate": { "type": "string", "format": "date-time", "required": false }, "amount": { "type": "number", "required": true }, "currency": { "enum": ["AED", "AFN", "ALL", "AMD", "ANG", "AOA", "ARS", "AUD", "AWG", "AZN", "BAM", "BBD", "BDT", "BGN", "BHD", "BIF", "BMD", "BND", "BOB", "BOV", "BRL", "BSD", "BTN", "BWP", "BYN", "BZD", "CAD", "CDF", "CHE", "CHW", "CLF", "CLP", "CNY", "COP", "COU", "CRC", "CUC", "CUP", "CVE", "CZK", "DJF", "DKK", "DOP", "DZD", "EGP", "ERN", "ETB", "EUR", "FJD", "FKP", "GBP", "GEL", "GHS", "GIP", "GMD", "GNF", "GTQ", "GYD", "HKD", "HNL", "HRK", "HTG", "HUF", "IDR", "ILS", "INR", "IQD", "IRR", "ISK", "JMD", "JOD", "JPY", "KES", "KGS", "KHR", "KMF", "KPW", "KWD", "KYD", "KZT", "LAK", "LBP", "LKR", "LRD", "LSL", "LYD", "MAD", "MDL", "MGA", "MKD", "MMK", "MNT", "MOP", "MRO", "MUR", "MVR", "MWK", "MXN", "MXV", "MYR", "MZN", "NAD", "NGN", "NIO", "NOK", "NPR", "NZD", "OMR", "PAB", "PEN", "PGK", "PHP", "PKR", "PLN", "PYG", "QAR", "RON", "RSD", "RUB", "RWF", "SAR", "SBD", "SCR", "SDG", "SEK", "SGD", "SHP", "SLL", "SOS", "SRD", "SSP", "STD", "SVC", "SYP", "SZL", "THB", "TJS", "TMT", "TND", "TOP", "TRY", "TTD", "TWD", "TZS", "UAH", "UGX", "USD", "USN", "UYI", "UYU", "UZS", "VEF", "VND", "VUV", "WST", "YER", "ZAR", "ZMW", "ZWL"], "required": true }, "creditDebitIndicator": { "type": "string", "enum": ["CRDT", "DBIT"], "required": true }, "instructedAmount": { "type": "number", "required": false }, "instructedCurrency": { "enum": ["AED", "AFN", "ALL", "AMD", "ANG", "AOA", "ARS", "AUD", "AWG", "AZN", "BAM", "BBD", "BDT", "BGN", "BHD", "BIF", "BMD", "BND", "BOB", "BOV", "BRL", "BSD", "BTN", "BWP", "BYN", "BZD", "CAD", "CDF", "CHE", "CHW", "CLF", "CLP", "CNY", "COP", "COU", "CRC", "CUC", "CUP", "CVE", "CZK", "DJF", "DKK", "DOP", "DZD", "EGP", "ERN", "ETB", "EUR", "FJD", "FKP", "GBP", "GEL", "GHS", "GIP", "GMD", "GNF", "GTQ", "GYD", "HKD", "HNL", "HRK", "HTG", "HUF", "IDR", "ILS", "INR", "IQD", "IRR", "ISK", "JMD", "JOD", "JPY", "KES", "KGS", "KHR", "KMF", "KPW", "KWD", "KYD", "KZT", "LAK", "LBP", "LKR", "LRD", "LSL", "LYD", "MAD", "MDL", "MGA", "MKD", "MMK", "MNT", "MOP", "MRO", "MUR", "MVR", "MWK", "MXN", "MXV", "MYR", "MZN", "NAD", "NGN", "NIO", "NOK", "NPR", "NZD", "OMR", "PAB", "PEN", "PGK", "PHP", "PKR", "PLN", "PYG", "QAR", "RON", "RSD", "RUB", "RWF", "SAR", "SBD", "SCR", "SDG", "SEK", "SGD", "SHP", "SLL", "SOS", "SRD", "SSP", "STD", "SVC", "SYP", "SZL", "THB", "TJS", "TMT", "TND", "TOP", "TRY", "TTD", "TWD", "TZS", "UAH", "UGX", "USD", "USN", "UYI", "UYU", "UZS", "VEF", "VND", "VUV", "WST", "YER", "ZAR", "ZMW", "ZWL"], "required": false }, "currencyExchangeRate": { "type": "number", "required": false }, "counterPartyName": { "type": "string", "maxLength": 128, "required": true }, "counterPartyAccountNumber": { "type": "string", "maxLength": 36, "required": false }, "counterPartyBIC": { "type": "string", "maxLength": 11, "required": false }, "counterPartyCountry": { "type": "string", "minLength": 2, "maxLength": 2, "required": false }, "counterPartyBankName": { "type": "string", "maxLength": 128, "required": false }, "creditorId": { "type": "string", "maxLength": 19, "required": false }, "mandateReference": { "type": "string", "maxLength": 128, "required": false } } };
	
	    definedTypes['TransactionsData.TransactionsId'] = { "properties": { "id": { "type": "string", "required": true } } };
	
	    definedTypes['TransactionsData.TurnoversGet'] = { "properties": { "arrangementIds": { "type": "array", "items": { "properties": {} }, "required": false }, "intervalDuration": { "enum": ["DAY", "WEEK", "MONTH", "YEAR"], "required": false }, "turnovers": { "type": "array", "items": { "properties": { "intervalStartDate": { "type": "string", "format": "date-time", "required": true }, "creditAmount": { "type": "object", "properties": { "amount": { "type": "string", "required": true }, "currencyCode": { "type": "string", "pattern": "^[A-Z]{3}$", "required": true } }, "required": true }, "debitAmount": { "type": "object", "properties": { "amount": { "type": "string", "required": true }, "currencyCode": { "type": "string", "pattern": "^[A-Z]{3}$", "required": true } }, "required": true }, "balance": { "type": "object", "properties": { "amount": { "type": "string", "required": true }, "currencyCode": { "type": "string", "pattern": "^[A-Z]{3}$", "required": true } }, "required": true } } }, "required": false } } };
	
	    definedTypes['TransactionsData.CategoryTotalsGet'] = { "properties": { "total": { "type": "object", "properties": { "amount": { "type": "string", "required": true }, "currencyCode": { "type": "string", "pattern": "^[A-Z]{3}$", "required": true } }, "required": false }, "items": { "type": "array", "items": { "properties": { "category": { "type": "string", "required": true }, "totalAmount": { "type": "object", "properties": { "amount": { "type": "string", "required": true }, "currencyCode": { "type": "string", "pattern": "^[A-Z]{3}$", "required": true } }, "required": true }, "trend": { "type": "number", "required": true }, "portion": { "type": "number", "required": true } } }, "required": false } } };
	
	    definedTypes['TransactionsData.InternalServerError'] = { "properties": { "status": { "type": "integer", "default": "500", "required": false }, "message": { "type": "string", "required": true } } };
	
	    /**
	     * @typedef TransactionsData.CategoryTotalsGet
	     * @type {Object}
	     * @property {?TransactionsData.Currency} total The aggregate amount of all returned categories
	     * @property {?Array.<TransactionsData.CategoryTotalsItem>} items
	     * @property {?Object} additions Container object for custom API extensions
	     */
	
	    /**
	     * @typedef TransactionsData.CategoryTotalsItem
	     * @type {Object}
	     * @property {String} category Transactions category
	     * @property {TransactionsData.Currency} totalAmount The total amount of the aggregated transactions by category
	     * @property {Number} trend Percentage value of the trend
	     * @property {Number} portion What percentage of the total amount for a given period is this amount
	     * @property {?Object} additions Container object for custom API extensions
	     */
	
	    /**
	     * @typedef TransactionsData.Currency
	     * @type {Object}
	     * @property {String} amount The amount in the specified currency
	     * @property {String} currencyCode The alpha-3 code (complying with ISO 4217) of the currency that qualifies the amount
	     * @property {?Object} additions Container object for custom API extensions
	     */
	
	    /**
	     * @typedef TransactionsData.InternalServerError
	     * @type {Object}
	     * @property {?Integer} status HTTP Status Code
	     * @property {String} message Further Information
	     * @property {?Object} additions Container object for custom API extensions
	     */
	
	    /**
	     * @typedef TransactionsData.TransactionItem
	     * @type {Object}
	     * @property {String} id Internally used unique identification of the transaction
	     * @property {String} arrangementId Reference to the product to which the transaction belongs
	     * @property {?String} externalId Internally used unique external identification of the transaction
	     * @property {String} externalArrangementId External reference to the product to which the transaction belongs
	     * @property {String} productId Reference to the product to which the transaction belongs
	     * @property {String} reference A tag/label issued by the initiator of the transaction in order to be able to refer to the respective transaction
	     * @property {String} description
	     * @property {String} typeGroup One of "Payment", "Withdrawal", "Loans", "Fees"
	     * @property {String} type One of "SEPA CT", "SEPA DD", "BACS (UK)", "Faster payment (UK)", "CHAPS (UK)", "International payment", "Loan redemption", "Interest settlement"
	     * @property {?String} category Transaction category
	     * @property {String} bookingDate The date the amount is posted to the balance of an account from a book keeping perspective.
	     * @property {?String} valueDate The date on which an amount posted to an account becomes interest bearing
	     * @property {Number} amount The amount of the transaction
	     * @property {String} currency
	     * @property {String} creditDebitIndicator
	     * @property {?Number} instructedAmount Only present if the transaction currency<>account currency
	     * @property {?String} instructedCurrency
	     * @property {?Number} currencyExchangeRate The exchange rate (between both account and transaction currency) that was used for the conversion. To be used if those currencies are not the same
	     * @property {String} counterPartyName The name of the counterparty
	     * @property {?String} counterPartyAccountNumber The International Bank Account Number of the counterparty
	     * @property {?String} counterPartyBIC The BIC of the counterparty
	     * @property {?String} counterPartyCountry ISO Country code
	     * @property {?String} counterPartyBankName The bank name of the counterparty
	     * @property {?String} creditorId Id of the creditor (Only for SEPA DD)
	     * @property {?String} mandateReference Mandate Reference (Only for SEPA DD)
	     * @property {?Object} additions Container object for custom API extensions
	     */
	
	    /**
	     * @typedef TransactionsData.TransactionsGet
	     * @type {Array.<TransactionsData.TransactionItem>}
	     */
	
	    /**
	     * @typedef TransactionsData.TransactionsId
	     * @type {Object}
	     * @property {String} id Internally used unique identification
	     * @property {?Object} additions Container object for custom API extensions
	     */
	
	    /**
	     * @typedef TransactionsData.TransactionsPost
	     * @type {Object}
	     * @property {?String} arrangementId Reference to the product to which the transaction belongs
	     * @property {String} externalId Internally used unique external identification of the transaction
	     * @property {String} externalArrangementId External reference to the product to which the transaction belongs
	     * @property {String} reference A tag/label issued by the initiator of the transaction in order to be able to refer to the respective transaction
	     * @property {String} description
	     * @property {String} typeGroup One of "Payment", "Withdrawal", "Loans", "Fees"
	     * @property {String} type One of "SEPA CT", "SEPA DD", "BACS (UK)", "Faster payment (UK)", "CHAPS (UK)", "International payment", "Loan redemption", "Interest settlement"
	     * @property {?String} category Transaction category
	     * @property {String} bookingDate The date the amount is posted to the balance of an account from a book keeping perspective.
	     * @property {?String} valueDate The date on which an amount posted to an account becomes interest bearing
	     * @property {Number} amount The amount of the transaction
	     * @property {String} currency
	     * @property {String} creditDebitIndicator
	     * @property {?Number} instructedAmount Only present if the transaction currency<>account currency
	     * @property {?String} instructedCurrency
	     * @property {?Number} currencyExchangeRate The exchange rate (between both account and transaction currency) that was used for the conversion. To be used if those currencies are not the same
	     * @property {String} counterPartyName The name of the counterparty
	     * @property {?String} counterPartyAccountNumber The International Bank Account Number of the counterparty
	     * @property {?String} counterPartyBIC The BIC of the counterparty
	     * @property {?String} counterPartyCountry ISO Country code
	     * @property {?String} counterPartyBankName The bank name of the counterparty
	     * @property {?String} creditorId Id of the creditor (Only for SEPA DD)
	     * @property {?String} mandateReference Mandate Reference (Only for SEPA DD)
	     * @property {?Object} additions Container object for custom API extensions
	     */
	
	    /**
	     * @typedef TransactionsData.TurnoverItem
	     * @type {Object}
	     * @property {String} intervalStartDate Datetime of starting point for interval
	     * @property {TransactionsData.Currency} creditAmount Aggregated amount of the deposit transactions for the interval
	     * @property {TransactionsData.Currency} debitAmount Aggregated amount of the withdrawal transactions for the interval
	     * @property {TransactionsData.Currency} balance Resulted balance for the interval
	     * @property {?Object} additions Container object for custom API extensions
	     */
	
	    /**
	     * @typedef TransactionsData.TurnoversGet
	     * @type {Object}
	     * @property {?Array.<String>} arrangementIds Reference to the arrangements to which the periodic balances belong
	     * @property {?String} intervalDuration
	     * @property {?Array.<TransactionsData.TurnoverItem>} turnovers
	     * @property {?Object} additions Container object for custom API extensions
	     */
	
	    /*
	     * @name parse
	     * @type {Function}
	     * @private
	     * @description Should be overwritten by transformResponse on a project level
	     */
	    function parse(res) {
	      return {
	        data: res.data,
	        headers: res.headers,
	        status: res.status,
	        statusText: res.statusText
	      };
	    }
	
	    /**
	     * @name TransactionsData#getTransactions
	     * @type {Function}
	     * @description Retrieves a list of pages limited in size and number by the page selection parameters, sorted and filtered
	     
	     * @param {?Object} params Map of query parameters.
	       
	     * @param {?number} params.amountGreaterThan Amount greater than. Eg: 5.
	       
	     * @param {?number} params.amountLessThan Amount less than. Eg: 5.
	       
	     * @param {?string} params.bookingDateGreaterThan Booking date greater than. Eg: 2016-05-16.
	       
	     * @param {?string} params.bookingDateLessThan Booking date less than. Eg: 2016-05-16.
	       
	     * @param {?string} params.arrangementId The arrangement id. Eg: 11-22-33.
	       
	     * @param {?string} params.productId The product id.
	       
	     * @param {?string} params.type Type category. Eg: International payment.
	       
	     * @param {?string} params.description The description of transaction. Eg: description.
	       
	     * @param {?string} params.reference reference. Eg: reference.
	       
	     * @param {?string} params.typeGroup The type group. Eg: Payment.
	       
	     * @param {?string} params.counterPartyName The name of the counterparty. Eg: counterPartyName.
	       
	     * @param {?string} params.counterPartyAccountNumber The International Bank Account Number of the counterparty. Eg: counterPartyAccountNumber.
	       
	     * @param {?string} params.creditDebitIndicator Indicates whether the amount is credited or debited. Eg: CRDT.
	       
	     * @param {?string} params.query The search term used to search for transactions.
	       
	     * @param {?string} params.category Category of the transactions. Eg: Transportation.
	       
	     * @param {?string} params.billingStatus Billing status of the transaction. Eg: BILLED.
	       
	     * @param {?string} params.currency Transaction currency. Eg: EUR.
	       
	     * @param {?number} params.from Page Number. Skip over pages of elements by specifying a start value for the query. Eg: 20. (defaults to 0)
	       
	     * @param {?string} params.cursor Record UUID. As an alternative for specifying 'from' this allows to point to the record to start the selection from. Eg: 76d5be8b-e80d-4842-8ce6-ea67519e8f74. (defaults to "")
	       
	     * @param {?number} params.size Limit the number of elements on the response. When used in combination with cursor, the value
	    is allowed to be a negative number to indicate requesting records upwards from the starting point indicated
	    by the cursor. Eg: 80. (defaults to 10)
	       
	     * @param {?string} params.orderBy Order by field: description, bookingDate, arrangementId, externalId, externalArrangementId, productId, reference, typeGroup, type, category, valueDate, amount, currency, creditDebitIndicator, instructedAmount, instructedCurrency, currencyExchangeRate, counterPartyName, counterPartyAccountNumber.
	       
	     * @param {?string} params.direction Direction. (defaults to DESC)
	       
	     
	     * @param {?Object} headers Map of custom header attributes.
	       
	     
	     * @returns {Promise.<Response>} Resolves data value as {@link TransactionsData.TransactionsGet} on success  or rejects with data of {@link TransactionsData.InternalServerError} on error
	     *
	     * @example
	     * transactionsData
	     *  .getTransactions(params, headers)
	     *  .then(function(result){
	     *    console.log('headers', result.headers)
	     *    console.log('data', result.data);
	     *  });
	     */
	    function getTransactions(params, headers) {
	      var url = '' + baseUri + version + '/transactions';
	
	      return httpClient({
	        method: 'GET',
	        url: url,
	
	        params: params || {},
	
	        headers: headers || {}
	      }).then(parse).catch(function (err) {
	        throw parse(err);
	      });
	    }

            function getTransactionsUri() {
              var path = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

              return '' + baseUri + version + '/transactions/' + path;
            }
	
	    /**
	     * @name TransactionsData#postTransactionsRecord
	     * @type {Function}
	     * @description # Transaction
	    This EndPoint allows creating/retrieving of Business/Retail banking transactions for a particular arrangement
	     
	     * @param {TransactionsData.TransactionsPost} data Data to be sent as the request message data.
	       
	     
	     * @param {?Object} headers Map of custom header attributes.
	       
	     
	     * @returns {Promise.<Response>} Resolves data value as {@link TransactionsData.TransactionsId} on success  or rejects with data of {@link TransactionsData.InternalServerError} on error
	     *
	     * @example
	     * transactionsData
	     *  .postTransactionsRecord(data, headers)
	     *  .then(function(result){
	     *    console.log('headers', result.headers)
	     *    console.log('data', result.data);
	     *  });
	     */
	    function postTransactionsRecord(data, headers) {
	      var url = '' + baseUri + version + '/transactions';
	
	      return httpClient({
	        method: 'POST',
	        url: url,
	
	        data: data || {},
	
	        headers: headers || {}
	      }).then(parse).catch(function (err) {
	        throw parse(err);
	      });
	    }
	
	    /**
	     * @name TransactionsData#putTransactionsRecord
	     * @type {Function}
	     * @description put request
	     
	     * @param {string} transactionId 
	       
	     
	     * @param {TransactionsData.TransactionItem} data Data to be sent as the request message data.
	       
	     
	     * @param {?Object} headers Map of custom header attributes.
	       
	     
	     * @returns {Promise.<Response>} Resolves data value as {@link TransactionsData.TransactionItem} on success  or rejects with data of {@link TransactionsData.InternalServerError} on error
	     *
	     * @example
	     * transactionsData
	     *  .putTransactionsRecord(transactionId, data, headers)
	     *  .then(function(result){
	     *    console.log('headers', result.headers)
	     *    console.log('data', result.data);
	     *  });
	     */
	    function putTransactionsRecord(transactionId, data, headers) {
	      var url = '' + baseUri + version + '/transactions/' + transactionId;
	
	      return httpClient({
	        method: 'PUT',
	        url: url,
	
	        data: data || {},
	
	        headers: headers || {}
	      }).then(parse).catch(function (err) {
	        throw parse(err);
	      });
	    }
	
	    /**
	     * @name TransactionsData#getTransactionsTurnovers
	     * @type {Function}
	     * @description get request
	     
	     * @param {Object} params Map of query parameters.
	       
	     * @param {string} params.arrangementIds Reference to the arrangements to which the periodic balances belong.
	       
	     * @param {string} params.periodStartDate Date of the turnovers evaluation period start. Eg: 2016-12-31.
	       
	     * @param {string} params.periodEndDate Date of a turnovers evaluation period end. Eg: 2017-04-30.
	       
	     * @param {string} params.intervalDuration Length of each periodic interval. Eg: MONTH.
	       
	     * @param {?number} params.intervalStartDay Day of a month to start turnover interval. Eg: 1.
	       
	     
	     * @param {?Object} headers Map of custom header attributes.
	       
	     
	     * @returns {Promise.<Response>} Resolves data value as {@link TransactionsData.TurnoversGet} on success  or rejects with data of {@link TransactionsData.InternalServerError} on error
	     *
	     * @example
	     * transactionsData
	     *  .getTransactionsTurnovers(params, headers)
	     *  .then(function(result){
	     *    console.log('headers', result.headers)
	     *    console.log('data', result.data);
	     *  });
	     */
	    function getTransactionsTurnovers(params, headers) {
	      var url = '' + baseUri + version + '/transactions/turnovers';
	
	      return httpClient({
	        method: 'GET',
	        url: url,
	
	        params: params || {},
	
	        headers: headers || {}
	      }).then(parse).catch(function (err) {
	        throw parse(err);
	      });
	    }
	
	    /**
	     * @name TransactionsData#getTransactionsCategorytotals
	     * @type {Function}
	     * @description get request
	     
	     * @param {Object} params Map of query parameters.
	       
	     * @param {string} params.creditDebitIndicator Flag to determine if credit or debit transactions will be aggregated.
	       
	     * @param {string} params.arrangementIds Reference to the arrangements to which the income/spending analysis belong.
	       
	     * @param {string} params.periodStartDate Date of the income/spending evaluation period start. Eg: 2016-12-31.
	       
	     * @param {string} params.periodEndDate Date of a income/spending evaluation period end. Eg: 2017-04-30.
	       
	     * @param {?string} params.intervalDuration Length of each periodic interval. (defaults to MONTH)
	       
	     
	     * @param {?Object} headers Map of custom header attributes.
	       
	     
	     * @returns {Promise.<Response>} Resolves data value as {@link TransactionsData.CategoryTotalsGet} on success  or rejects with data of {@link TransactionsData.InternalServerError} on error
	     *
	     * @example
	     * transactionsData
	     *  .getTransactionsCategorytotals(params, headers)
	     *  .then(function(result){
	     *    console.log('headers', result.headers)
	     *    console.log('data', result.data);
	     *  });
	     */
	    function getTransactionsCategorytotals(params, headers) {
	      var url = '' + baseUri + version + '/transactions/categorytotals';
	
	      return httpClient({
	        method: 'GET',
	        url: url,
	
	        params: params || {},
	
	        headers: headers || {}
	      }).then(parse).catch(function (err) {
	        throw parse(err);
	      });
	    }
	
	    /**
	     * @name TransactionsData#putTransactionsCategoryRecord
	     * @type {Function}
	     * @description put request
	     
	     * @param {string} transactionId 
	       
	     
	     * @param {?Object} data Data to be sent as the request message data.
	       
	     
	     * @param {?Object} headers Map of custom header attributes.
	       
	     
	     * @returns {Promise.<Response>} Resolves data value as {@link TransactionsData.TransactionItem} on success  or rejects with data of {@link TransactionsData.InternalServerError} on error
	     *
	     * @example
	     * transactionsData
	     *  .putTransactionsCategoryRecord(transactionId, data, headers)
	     *  .then(function(result){
	     *    console.log('headers', result.headers)
	     *    console.log('data', result.data);
	     *  });
	     */
	    function putTransactionsCategoryRecord(transactionId, data, headers) {
	      var url = '' + baseUri + version + '/transactions/' + transactionId + '/category';
	
	      return httpClient({
	        method: 'PUT',
	        url: url,
	
	        data: data || {},
	
	        headers: headers || {}
	      }).then(parse).catch(function (err) {
	        throw parse(err);
	      });
	    }
	
	    /**
	     * @description
	     * Schema data. Keys of the object are names of the POST and PUT methods
	     *
	     * Note: The schema is not strictly a JSON schema. It is a whitelisted set of
	     * keys for each object property. The keys that are exposed are meant for validation
	     * purposes.
	     *
	     * The full list of *possible* keys for each property is:
	     * type, minimum, maximum, minLength, maxLength, pattern, enum, format, default,
	     * properties, items, minItems, maxItems, uniqueItems and required.
	     *
	     * See http://json-schema.org/latest/json-schema-validation.html for more details
	     * on the meaning of these keys.
	     *
	     * The "required" array from JSON schema is tranformed into a "required" boolean
	     * on each property. This is for ease of use.
	     *
	     * @name TransactionsData#schemas
	     * @type {Object}
	     */
	    var schemas = {};
	
	    /**
	     * @description
	     * An object describing the JSON schema for the postTransactionsRecord method
	     *
	     * @name TransactionsData#schemas.postTransactionsRecord
	     * @type {Object}
	     * @example
	     * {
	    "properties": {
	      "arrangementId": {
	        "type": "string",
	        "maxLength": 36,
	        "required": false
	      },
	      "externalId": {
	        "type": "string",
	        "maxLength": 50,
	        "required": true
	      },
	      "externalArrangementId": {
	        "type": "string",
	        "maxLength": 50,
	        "required": true
	      },
	      "reference": {
	        "type": "string",
	        "maxLength": 36,
	        "required": true
	      },
	      "description": {
	        "type": "string",
	        "maxLength": 128,
	        "required": true
	      },
	      "typeGroup": {
	        "type": "string",
	        "enum": [
	          "Payment",
	          "Withdrawal",
	          "Loans",
	          "Fees"
	        ],
	        "required": true
	      },
	      "type": {
	        "type": "string",
	        "enum": [
	          "SEPA CT",
	          "SEPA DD",
	          "BACS (UK)",
	          "Faster payment (UK)",
	          "CHAPS (UK)",
	          "International payment",
	          "Loan redemption",
	          "Interest settlement"
	        ],
	        "required": true
	      },
	      "category": {
	        "type": "string",
	        "maxLength": 50,
	        "required": false
	      },
	      "bookingDate": {
	        "type": "string",
	        "format": "date-time",
	        "required": true
	      },
	      "valueDate": {
	        "type": "string",
	        "format": "date-time",
	        "required": false
	      },
	      "amount": {
	        "type": "number",
	        "required": true
	      },
	      "currency": {
	        "enum": [
	          "AED",
	          "AFN",
	          "ALL",
	          "AMD",
	          "ANG",
	          "AOA",
	          "ARS",
	          "AUD",
	          "AWG",
	          "AZN",
	          "BAM",
	          "BBD",
	          "BDT",
	          "BGN",
	          "BHD",
	          "BIF",
	          "BMD",
	          "BND",
	          "BOB",
	          "BOV",
	          "BRL",
	          "BSD",
	          "BTN",
	          "BWP",
	          "BYN",
	          "BZD",
	          "CAD",
	          "CDF",
	          "CHE",
	          "CHW",
	          "CLF",
	          "CLP",
	          "CNY",
	          "COP",
	          "COU",
	          "CRC",
	          "CUC",
	          "CUP",
	          "CVE",
	          "CZK",
	          "DJF",
	          "DKK",
	          "DOP",
	          "DZD",
	          "EGP",
	          "ERN",
	          "ETB",
	          "EUR",
	          "FJD",
	          "FKP",
	          "GBP",
	          "GEL",
	          "GHS",
	          "GIP",
	          "GMD",
	          "GNF",
	          "GTQ",
	          "GYD",
	          "HKD",
	          "HNL",
	          "HRK",
	          "HTG",
	          "HUF",
	          "IDR",
	          "ILS",
	          "INR",
	          "IQD",
	          "IRR",
	          "ISK",
	          "JMD",
	          "JOD",
	          "JPY",
	          "KES",
	          "KGS",
	          "KHR",
	          "KMF",
	          "KPW",
	          "KWD",
	          "KYD",
	          "KZT",
	          "LAK",
	          "LBP",
	          "LKR",
	          "LRD",
	          "LSL",
	          "LYD",
	          "MAD",
	          "MDL",
	          "MGA",
	          "MKD",
	          "MMK",
	          "MNT",
	          "MOP",
	          "MRO",
	          "MUR",
	          "MVR",
	          "MWK",
	          "MXN",
	          "MXV",
	          "MYR",
	          "MZN",
	          "NAD",
	          "NGN",
	          "NIO",
	          "NOK",
	          "NPR",
	          "NZD",
	          "OMR",
	          "PAB",
	          "PEN",
	          "PGK",
	          "PHP",
	          "PKR",
	          "PLN",
	          "PYG",
	          "QAR",
	          "RON",
	          "RSD",
	          "RUB",
	          "RWF",
	          "SAR",
	          "SBD",
	          "SCR",
	          "SDG",
	          "SEK",
	          "SGD",
	          "SHP",
	          "SLL",
	          "SOS",
	          "SRD",
	          "SSP",
	          "STD",
	          "SVC",
	          "SYP",
	          "SZL",
	          "THB",
	          "TJS",
	          "TMT",
	          "TND",
	          "TOP",
	          "TRY",
	          "TTD",
	          "TWD",
	          "TZS",
	          "UAH",
	          "UGX",
	          "USD",
	          "USN",
	          "UYI",
	          "UYU",
	          "UZS",
	          "VEF",
	          "VND",
	          "VUV",
	          "WST",
	          "YER",
	          "ZAR",
	          "ZMW",
	          "ZWL"
	        ],
	        "required": true
	      },
	      "creditDebitIndicator": {
	        "type": "string",
	        "enum": [
	          "CRDT",
	          "DBIT"
	        ],
	        "required": true
	      },
	      "instructedAmount": {
	        "type": "number",
	        "required": false
	      },
	      "instructedCurrency": {
	        "enum": [
	          "AED",
	          "AFN",
	          "ALL",
	          "AMD",
	          "ANG",
	          "AOA",
	          "ARS",
	          "AUD",
	          "AWG",
	          "AZN",
	          "BAM",
	          "BBD",
	          "BDT",
	          "BGN",
	          "BHD",
	          "BIF",
	          "BMD",
	          "BND",
	          "BOB",
	          "BOV",
	          "BRL",
	          "BSD",
	          "BTN",
	          "BWP",
	          "BYN",
	          "BZD",
	          "CAD",
	          "CDF",
	          "CHE",
	          "CHW",
	          "CLF",
	          "CLP",
	          "CNY",
	          "COP",
	          "COU",
	          "CRC",
	          "CUC",
	          "CUP",
	          "CVE",
	          "CZK",
	          "DJF",
	          "DKK",
	          "DOP",
	          "DZD",
	          "EGP",
	          "ERN",
	          "ETB",
	          "EUR",
	          "FJD",
	          "FKP",
	          "GBP",
	          "GEL",
	          "GHS",
	          "GIP",
	          "GMD",
	          "GNF",
	          "GTQ",
	          "GYD",
	          "HKD",
	          "HNL",
	          "HRK",
	          "HTG",
	          "HUF",
	          "IDR",
	          "ILS",
	          "INR",
	          "IQD",
	          "IRR",
	          "ISK",
	          "JMD",
	          "JOD",
	          "JPY",
	          "KES",
	          "KGS",
	          "KHR",
	          "KMF",
	          "KPW",
	          "KWD",
	          "KYD",
	          "KZT",
	          "LAK",
	          "LBP",
	          "LKR",
	          "LRD",
	          "LSL",
	          "LYD",
	          "MAD",
	          "MDL",
	          "MGA",
	          "MKD",
	          "MMK",
	          "MNT",
	          "MOP",
	          "MRO",
	          "MUR",
	          "MVR",
	          "MWK",
	          "MXN",
	          "MXV",
	          "MYR",
	          "MZN",
	          "NAD",
	          "NGN",
	          "NIO",
	          "NOK",
	          "NPR",
	          "NZD",
	          "OMR",
	          "PAB",
	          "PEN",
	          "PGK",
	          "PHP",
	          "PKR",
	          "PLN",
	          "PYG",
	          "QAR",
	          "RON",
	          "RSD",
	          "RUB",
	          "RWF",
	          "SAR",
	          "SBD",
	          "SCR",
	          "SDG",
	          "SEK",
	          "SGD",
	          "SHP",
	          "SLL",
	          "SOS",
	          "SRD",
	          "SSP",
	          "STD",
	          "SVC",
	          "SYP",
	          "SZL",
	          "THB",
	          "TJS",
	          "TMT",
	          "TND",
	          "TOP",
	          "TRY",
	          "TTD",
	          "TWD",
	          "TZS",
	          "UAH",
	          "UGX",
	          "USD",
	          "USN",
	          "UYI",
	          "UYU",
	          "UZS",
	          "VEF",
	          "VND",
	          "VUV",
	          "WST",
	          "YER",
	          "ZAR",
	          "ZMW",
	          "ZWL"
	        ],
	        "required": false
	      },
	      "currencyExchangeRate": {
	        "type": "number",
	        "required": false
	      },
	      "counterPartyName": {
	        "type": "string",
	        "maxLength": 128,
	        "required": true
	      },
	      "counterPartyAccountNumber": {
	        "type": "string",
	        "maxLength": 36,
	        "required": false
	      },
	      "counterPartyBIC": {
	        "type": "string",
	        "maxLength": 11,
	        "required": false
	      },
	      "counterPartyCountry": {
	        "type": "string",
	        "minLength": 2,
	        "maxLength": 2,
	        "required": false
	      },
	      "counterPartyBankName": {
	        "type": "string",
	        "maxLength": 128,
	        "required": false
	      },
	      "creditorId": {
	        "type": "string",
	        "maxLength": 19,
	        "required": false
	      },
	      "mandateReference": {
	        "type": "string",
	        "maxLength": 128,
	        "required": false
	      }
	    }
	    }
	     */
	
	    schemas.postTransactionsRecord = definedTypes['TransactionsData.TransactionsPost'];
	
	    /**
	     * @description
	     * An object describing the JSON schema for the putTransactionsRecord method
	     *
	     * @name TransactionsData#schemas.putTransactionsRecord
	     * @type {Object}
	     * @example
	     * {
	    "properties": {
	      "id": {
	        "type": "string",
	        "maxLength": 50,
	        "required": true
	      },
	      "arrangementId": {
	        "type": "string",
	        "maxLength": 50,
	        "required": true
	      },
	      "externalId": {
	        "type": "string",
	        "maxLength": 50,
	        "required": false
	      },
	      "externalArrangementId": {
	        "type": "string",
	        "maxLength": 50,
	        "required": true
	      },
	      "productId": {
	        "type": "string",
	        "maxLength": 50,
	        "required": true
	      },
	      "reference": {
	        "type": "string",
	        "maxLength": 36,
	        "required": true
	      },
	      "description": {
	        "type": "string",
	        "maxLength": 128,
	        "required": true
	      },
	      "typeGroup": {
	        "type": "string",
	        "enum": [
	          "Payment",
	          "Withdrawal",
	          "Loans",
	          "Fees"
	        ],
	        "required": true
	      },
	      "type": {
	        "type": "string",
	        "enum": [
	          "SEPA CT",
	          "SEPA DD",
	          "BACS (UK)",
	          "Faster payment (UK)",
	          "CHAPS (UK)",
	          "International payment",
	          "Loan redemption",
	          "Interest settlement"
	        ],
	        "required": true
	      },
	      "category": {
	        "type": "string",
	        "maxLength": 50,
	        "required": false
	      },
	      "bookingDate": {
	        "type": "string",
	        "format": "date-time",
	        "required": true
	      },
	      "valueDate": {
	        "type": "string",
	        "format": "date-time",
	        "required": false
	      },
	      "amount": {
	        "type": "number",
	        "required": true
	      },
	      "currency": {
	        "enum": [
	          "AED",
	          "AFN",
	          "ALL",
	          "AMD",
	          "ANG",
	          "AOA",
	          "ARS",
	          "AUD",
	          "AWG",
	          "AZN",
	          "BAM",
	          "BBD",
	          "BDT",
	          "BGN",
	          "BHD",
	          "BIF",
	          "BMD",
	          "BND",
	          "BOB",
	          "BOV",
	          "BRL",
	          "BSD",
	          "BTN",
	          "BWP",
	          "BYN",
	          "BZD",
	          "CAD",
	          "CDF",
	          "CHE",
	          "CHW",
	          "CLF",
	          "CLP",
	          "CNY",
	          "COP",
	          "COU",
	          "CRC",
	          "CUC",
	          "CUP",
	          "CVE",
	          "CZK",
	          "DJF",
	          "DKK",
	          "DOP",
	          "DZD",
	          "EGP",
	          "ERN",
	          "ETB",
	          "EUR",
	          "FJD",
	          "FKP",
	          "GBP",
	          "GEL",
	          "GHS",
	          "GIP",
	          "GMD",
	          "GNF",
	          "GTQ",
	          "GYD",
	          "HKD",
	          "HNL",
	          "HRK",
	          "HTG",
	          "HUF",
	          "IDR",
	          "ILS",
	          "INR",
	          "IQD",
	          "IRR",
	          "ISK",
	          "JMD",
	          "JOD",
	          "JPY",
	          "KES",
	          "KGS",
	          "KHR",
	          "KMF",
	          "KPW",
	          "KWD",
	          "KYD",
	          "KZT",
	          "LAK",
	          "LBP",
	          "LKR",
	          "LRD",
	          "LSL",
	          "LYD",
	          "MAD",
	          "MDL",
	          "MGA",
	          "MKD",
	          "MMK",
	          "MNT",
	          "MOP",
	          "MRO",
	          "MUR",
	          "MVR",
	          "MWK",
	          "MXN",
	          "MXV",
	          "MYR",
	          "MZN",
	          "NAD",
	          "NGN",
	          "NIO",
	          "NOK",
	          "NPR",
	          "NZD",
	          "OMR",
	          "PAB",
	          "PEN",
	          "PGK",
	          "PHP",
	          "PKR",
	          "PLN",
	          "PYG",
	          "QAR",
	          "RON",
	          "RSD",
	          "RUB",
	          "RWF",
	          "SAR",
	          "SBD",
	          "SCR",
	          "SDG",
	          "SEK",
	          "SGD",
	          "SHP",
	          "SLL",
	          "SOS",
	          "SRD",
	          "SSP",
	          "STD",
	          "SVC",
	          "SYP",
	          "SZL",
	          "THB",
	          "TJS",
	          "TMT",
	          "TND",
	          "TOP",
	          "TRY",
	          "TTD",
	          "TWD",
	          "TZS",
	          "UAH",
	          "UGX",
	          "USD",
	          "USN",
	          "UYI",
	          "UYU",
	          "UZS",
	          "VEF",
	          "VND",
	          "VUV",
	          "WST",
	          "YER",
	          "ZAR",
	          "ZMW",
	          "ZWL"
	        ],
	        "required": true
	      },
	      "creditDebitIndicator": {
	        "type": "string",
	        "enum": [
	          "CRDT",
	          "DBIT"
	        ],
	        "required": true
	      },
	      "instructedAmount": {
	        "type": "number",
	        "required": false
	      },
	      "instructedCurrency": {
	        "enum": [
	          "AED",
	          "AFN",
	          "ALL",
	          "AMD",
	          "ANG",
	          "AOA",
	          "ARS",
	          "AUD",
	          "AWG",
	          "AZN",
	          "BAM",
	          "BBD",
	          "BDT",
	          "BGN",
	          "BHD",
	          "BIF",
	          "BMD",
	          "BND",
	          "BOB",
	          "BOV",
	          "BRL",
	          "BSD",
	          "BTN",
	          "BWP",
	          "BYN",
	          "BZD",
	          "CAD",
	          "CDF",
	          "CHE",
	          "CHW",
	          "CLF",
	          "CLP",
	          "CNY",
	          "COP",
	          "COU",
	          "CRC",
	          "CUC",
	          "CUP",
	          "CVE",
	          "CZK",
	          "DJF",
	          "DKK",
	          "DOP",
	          "DZD",
	          "EGP",
	          "ERN",
	          "ETB",
	          "EUR",
	          "FJD",
	          "FKP",
	          "GBP",
	          "GEL",
	          "GHS",
	          "GIP",
	          "GMD",
	          "GNF",
	          "GTQ",
	          "GYD",
	          "HKD",
	          "HNL",
	          "HRK",
	          "HTG",
	          "HUF",
	          "IDR",
	          "ILS",
	          "INR",
	          "IQD",
	          "IRR",
	          "ISK",
	          "JMD",
	          "JOD",
	          "JPY",
	          "KES",
	          "KGS",
	          "KHR",
	          "KMF",
	          "KPW",
	          "KWD",
	          "KYD",
	          "KZT",
	          "LAK",
	          "LBP",
	          "LKR",
	          "LRD",
	          "LSL",
	          "LYD",
	          "MAD",
	          "MDL",
	          "MGA",
	          "MKD",
	          "MMK",
	          "MNT",
	          "MOP",
	          "MRO",
	          "MUR",
	          "MVR",
	          "MWK",
	          "MXN",
	          "MXV",
	          "MYR",
	          "MZN",
	          "NAD",
	          "NGN",
	          "NIO",
	          "NOK",
	          "NPR",
	          "NZD",
	          "OMR",
	          "PAB",
	          "PEN",
	          "PGK",
	          "PHP",
	          "PKR",
	          "PLN",
	          "PYG",
	          "QAR",
	          "RON",
	          "RSD",
	          "RUB",
	          "RWF",
	          "SAR",
	          "SBD",
	          "SCR",
	          "SDG",
	          "SEK",
	          "SGD",
	          "SHP",
	          "SLL",
	          "SOS",
	          "SRD",
	          "SSP",
	          "STD",
	          "SVC",
	          "SYP",
	          "SZL",
	          "THB",
	          "TJS",
	          "TMT",
	          "TND",
	          "TOP",
	          "TRY",
	          "TTD",
	          "TWD",
	          "TZS",
	          "UAH",
	          "UGX",
	          "USD",
	          "USN",
	          "UYI",
	          "UYU",
	          "UZS",
	          "VEF",
	          "VND",
	          "VUV",
	          "WST",
	          "YER",
	          "ZAR",
	          "ZMW",
	          "ZWL"
	        ],
	        "required": false
	      },
	      "currencyExchangeRate": {
	        "type": "number",
	        "required": false
	      },
	      "counterPartyName": {
	        "type": "string",
	        "maxLength": 128,
	        "required": true
	      },
	      "counterPartyAccountNumber": {
	        "type": "string",
	        "maxLength": 36,
	        "required": false
	      },
	      "counterPartyBIC": {
	        "type": "string",
	        "maxLength": 11,
	        "required": false
	      },
	      "counterPartyCountry": {
	        "type": "string",
	        "minLength": 2,
	        "maxLength": 2,
	        "required": false
	      },
	      "counterPartyBankName": {
	        "type": "string",
	        "maxLength": 128,
	        "required": false
	      },
	      "creditorId": {
	        "type": "string",
	        "maxLength": 19,
	        "required": false
	      },
	      "mandateReference": {
	        "type": "string",
	        "maxLength": 128,
	        "required": false
	      }
	    }
	    }
	     */
	
	    schemas.putTransactionsRecord = definedTypes['TransactionsData.TransactionItem'];
	
	    /**
	     * @typedef Response
	     * @type {Object}
	     * @property {Object} data See method descriptions for possible return types
	     * @property {Function} headers Getter headers function
	     * @property {Number} status HTTP status code of the response.
	     * @property {String} statusText HTTP status text of the response.
	     */
	
	    return {
	
	      getTransactions: getTransactions,

              getTransactionsUri: getTransactionsUri,
	
	      postTransactionsRecord: postTransactionsRecord,
	
	      putTransactionsRecord: putTransactionsRecord,
	
	      getTransactionsTurnovers: getTransactionsTurnovers,
	
	      getTransactionsCategorytotals: getTransactionsCategorytotals,
	
	      putTransactionsCategoryRecord: putTransactionsCategoryRecord,
	
	      schemas: schemas
	    };
	  };
	};

/***/ })
/******/ ])
});
;
//# sourceMappingURL=data-bb-transactions-http-ng.js.map
