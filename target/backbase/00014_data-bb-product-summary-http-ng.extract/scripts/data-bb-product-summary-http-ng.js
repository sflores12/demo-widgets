(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vendor-bb-angular"));
	else if(typeof define === 'function' && define.amd)
		define("data-bb-product-summary-http-ng", ["vendor-bb-angular"], factory);
	else if(typeof exports === 'object')
		exports["data-bb-product-summary-http-ng"] = factory(require("vendor-bb-angular"));
	else
		root["data-bb-product-summary-http-ng"] = factory(root["vendor-bb-angular"]);
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
	exports.productSummaryDataKey = undefined;
	
	var _vendorBbAngular = __webpack_require__(2);
	
	var _vendorBbAngular2 = _interopRequireDefault(_vendorBbAngular);
	
	var _dataBbProductSummaryHttp = __webpack_require__(3);
	
	var _dataBbProductSummaryHttp2 = _interopRequireDefault(_dataBbProductSummaryHttp);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/* eslint-disable */
	/**
	 * @module data-bb-product-summary-http-ng
	 *
	 * @description A data module for accessing the Product Summary REST API.
	 *
	 * @returns {String} `data-bb-product-summary-http-ng`
	 * @example
	 * import productSummaryDataModuleKey, {
	 *   productSummaryDataKey,
	 * } from 'data-bb-product-summary-http-ng';
	 */
	
	var productSummaryDataModuleKey = 'data-bb-product-summary-http-ng';
	/**
	 * @name productSummaryDataKey
	 * @type {string}
	 * @description Angular dependency injection key for the ProductSummaryData service
	 */
	var productSummaryDataKey = exports.productSummaryDataKey = 'data-bb-product-summary-http-ng:productSummaryData';
	/**
	 * @name default
	 * @type {string}
	 * @description Angular dependency injection module key
	 */
	exports.default = _vendorBbAngular2.default.module(productSummaryDataModuleKey, [])
	
	/**
	 * @constructor ProductSummaryData
	 * @type {object}
	 *
	 * @description Public api for data-bb-product-summary-http-ng service
	 *
	 */
	.provider(productSummaryDataKey, [function () {
	  var config = {
	    baseUri: '/'
	  };
	
	  /**
	   * @name ProductSummaryDataProvider
	   * @type {object}
	   * @ngkey data-bb-product-summary-http-ng:productSummaryDataProvider
	   * @description
	   * Data service that can be configured with custom base URI.
	   *
	   * @example
	   * // Configuring in an angular app:
	   * angular.module(...)
	   *   .config(['data-bb-product-summary-http-ng:productSummaryDataProvider',
	   *     (dataProvider) => {
	   *       dataProvider.setBaseUri('http://my-service.com/');
	   *       });
	   *
	   * // Configuring With config-bb-providers-ng:
	   * export default [
	   *   ['data-bb-product-summary-http-ng:productSummaryDataProvider', (dataProvider) => {
	   *       dataProvider.setBaseUri('http://my-service.com/');
	   *   }]
	   * ];
	   */
	  return {
	    /**
	     * @name ProductSummaryDataProvider#setBaseUri
	     * @type {function}
	     * @param {string} baseUri Base URI which will be the prefix for all HTTP requests
	     */
	    setBaseUri: function setBaseUri(baseUri) {
	      config.baseUri = baseUri;
	    },
	
	    /**
	     * @name ProductSummaryDataProvider#$get
	     * @type {function}
	     * @return {object} An instance of the service
	     */
	    $get: ['$http',
	    /* into */
	    (0, _dataBbProductSummaryHttp2.default)(config)]
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
	  return function (httpClient) {
	    // Base param constants
	    var baseUri = conf.baseUri || '';
	
	    var version = 'v2';
	
	    /**
	     * The root defined types from the RAML.
	     * @private
	     */
	    var definedTypes = {};
	
	    definedTypes['ProductSummaryData.Productsummary-GET'] = { "properties": { "aggregatedBalance": { "type": "object", "properties": { "currency": { "type": "string", "required": false }, "value": { "type": "string", "required": false } }, "required": false }, "currentAccounts": { "type": "object", "properties": { "name": { "type": "string", "required": false }, "products": { "type": "array", "items": { "properties": { "bookedBalance": { "type": "string", "required": false }, "availableBalance": { "type": "string", "required": false }, "creditLimit": { "type": "string", "required": false }, "IBAN": { "type": "string", "pattern": "^[A-Z]{2}\\d{2}[A-Z\\d]{0,30}$", "required": false }, "BBAN": { "type": "string", "required": false }, "currency": { "type": "string", "required": false }, "urgentTransferAllowed": { "type": "boolean", "required": false }, "BIC": { "type": "string", "required": false }, "bankBranchCode": { "type": "string", "required": false }, "accountInterestRate": { "type": "number", "required": false }, "valueDateBalance": { "type": "number", "required": false }, "creditLimitUsage": { "type": "number", "required": false }, "creditLimitInterestRate": { "type": "number", "required": false }, "creditLimitExpiryDate": { "type": "string", "format": "date-time", "required": false }, "accruedInterest": { "type": "number", "required": false }, "debitCardsItems": { "type": "array", "items": { "properties": { "number": { "type": "string", "maxLength": 4, "required": false }, "expiryDate": { "type": "string", "required": false } } }, "uniqueItems": true, "required": false }, "accountHolderName": { "type": "string", "maxLength": 256, "required": false }, "startDate": { "type": "string", "format": "date-time", "required": false }, "minimumRequiredBalance": { "type": "number", "required": false }, "accountHolderAddressLine1": { "type": "string", "maxLength": 70, "required": false }, "accountHolderAddressLine2": { "type": "string", "maxLength": 70, "required": false }, "accountHolderAddressLine3": { "type": "string", "maxLength": 70, "required": false }, "accountHolderAddressLine4": { "type": "string", "maxLength": 70, "required": false }, "creditAccount": { "type": "boolean", "required": false }, "debitAccount": { "type": "boolean", "required": false }, "accountHolderCountry": { "enum": ["AF", "AL", "DZ", "AS", "AD", "AO", "AI", "AQ", "AG", "AR", "AM", "AW", "AU", "AT", "AZ", "BS", "BH", "BD", "BB", "BY", "BE", "BZ", "BJ", "BM", "BT", "BO", "BQ", "BA", "BW", "BV", "BR", "IO", "BN", "BG", "BF", "BI", "KH", "CM", "CA", "CV", "KY", "CF", "TD", "CL", "CN", "CX", "CC", "CO", "KM", "CG", "CD", "CK", "CR", "HR", "CU", "CW", "CY", "CZ", "CI", "DK", "DJ", "DM", "DO", "EC", "EG", "SV", "GQ", "ER", "EE", "ET", "FK", "FO", "FJ", "FI", "FR", "GF", "PF", "TF", "GA", "GM", "GE", "DE", "GH", "GI", "GR", "GL", "GD", "GP", "GU", "GT", "GG", "GN", "GW", "GY", "HT", "HM", "VA", "HN", "HK", "HU", "IS", "IN", "ID", "IR", "IQ", "IE", "IM", "IL", "IT", "JM", "JP", "JE", "JO", "KZ", "KE", "KI", "KP", "KR", "KW", "KG", "LA", "LV", "LB", "LS", "LR", "LY", "LI", "LT", "LU", "MO", "MK", "MG", "MW", "MY", "MV", "ML", "MT", "MH", "MQ", "MR", "MU", "YT", "MX", "FM", "MD", "MC", "MN", "ME", "MS", "MA", "MZ", "MM", "NA", "NR", "NP", "NL", "NC", "NZ", "NI", "NE", "NG", "NU", "NF", "MP", "NO", "OM", "PK", "PW", "PS", "PA", "PG", "PY", "PE", "PH", "PN", "PL", "PT", "PR", "QA", "RO", "RU", "RW", "RE", "BL", "SH", "KN", "LC", "MF", "PM", "VC", "WS", "SM", "ST", "SA", "SN", "RS", "SC", "SL", "SG", "SX", "SK", "SI", "SB", "SO", "ZA", "GS", "SS", "ES", "LK", "SD", "SR", "SJ", "SZ", "SE", "CH", "SY", "TW", "TJ", "TZ", "TH", "TL", "TG", "TK", "TO", "TT", "TN", "TR", "TM", "TC", "TV", "UG", "UA", "AE", "GB", "US", "UM", "UY", "UZ", "VU", "VE", "VN", "VG", "VI", "WF", "EH", "YE", "ZM", "ZW"], "required": false } } }, "required": false }, "aggregatedBalance": { "type": "object", "properties": { "currency": { "type": "string", "required": false }, "value": { "type": "string", "required": false } }, "required": false } }, "required": false }, "savingsAccounts": { "type": "object", "properties": { "name": { "type": "string", "required": false }, "products": { "type": "array", "items": { "properties": { "bookedBalance": { "type": "string", "required": false }, "accruedInterest": { "type": "number", "required": false }, "IBAN": { "type": "string", "pattern": "^[A-Z]{2}\\d{2}[A-Z\\d]{0,30}$", "required": false }, "BBAN": { "type": "string", "required": false }, "currency": { "type": "string", "required": false }, "urgentTransferAllowed": { "type": "boolean", "required": false }, "BIC": { "type": "string", "required": false }, "bankBranchCode": { "type": "string", "required": false }, "accountInterestRate": { "type": "number", "required": false }, "minimumRequiredBalance": { "type": "number", "required": false }, "startDate": { "type": "string", "format": "date-time", "required": false }, "termUnit": { "enum": ["D", "W", "M", "Y"], "required": false }, "termNumber": { "type": "number", "required": false }, "maturityDate": { "type": "string", "format": "date-time", "required": false }, "maturityAmount": { "type": "number", "required": false }, "autoRenewalIndicator": { "type": "boolean", "required": false }, "interestPaymentFrequencyUnit": { "enum": ["D", "W", "M", "Y"], "required": false }, "interestPaymentFrequencyNumber": { "type": "number", "required": false }, "principalAmount": { "type": "number", "required": false }, "interestSettlementAccount": { "type": "string", "required": false }, "accountHolderName": { "type": "string", "maxLength": 256, "required": false }, "valueDateBalance": { "type": "number", "required": false }, "accountHolderAddressLine1": { "type": "string", "maxLength": 70, "required": false }, "accountHolderAddressLine2": { "type": "string", "maxLength": 70, "required": false }, "accountHolderAddressLine3": { "type": "string", "maxLength": 70, "required": false }, "accountHolderAddressLine4": { "type": "string", "maxLength": 70, "required": false }, "accountHolderCountry": { "enum": ["AF", "AL", "DZ", "AS", "AD", "AO", "AI", "AQ", "AG", "AR", "AM", "AW", "AU", "AT", "AZ", "BS", "BH", "BD", "BB", "BY", "BE", "BZ", "BJ", "BM", "BT", "BO", "BQ", "BA", "BW", "BV", "BR", "IO", "BN", "BG", "BF", "BI", "KH", "CM", "CA", "CV", "KY", "CF", "TD", "CL", "CN", "CX", "CC", "CO", "KM", "CG", "CD", "CK", "CR", "HR", "CU", "CW", "CY", "CZ", "CI", "DK", "DJ", "DM", "DO", "EC", "EG", "SV", "GQ", "ER", "EE", "ET", "FK", "FO", "FJ", "FI", "FR", "GF", "PF", "TF", "GA", "GM", "GE", "DE", "GH", "GI", "GR", "GL", "GD", "GP", "GU", "GT", "GG", "GN", "GW", "GY", "HT", "HM", "VA", "HN", "HK", "HU", "IS", "IN", "ID", "IR", "IQ", "IE", "IM", "IL", "IT", "JM", "JP", "JE", "JO", "KZ", "KE", "KI", "KP", "KR", "KW", "KG", "LA", "LV", "LB", "LS", "LR", "LY", "LI", "LT", "LU", "MO", "MK", "MG", "MW", "MY", "MV", "ML", "MT", "MH", "MQ", "MR", "MU", "YT", "MX", "FM", "MD", "MC", "MN", "ME", "MS", "MA", "MZ", "MM", "NA", "NR", "NP", "NL", "NC", "NZ", "NI", "NE", "NG", "NU", "NF", "MP", "NO", "OM", "PK", "PW", "PS", "PA", "PG", "PY", "PE", "PH", "PN", "PL", "PT", "PR", "QA", "RO", "RU", "RW", "RE", "BL", "SH", "KN", "LC", "MF", "PM", "VC", "WS", "SM", "ST", "SA", "SN", "RS", "SC", "SL", "SG", "SX", "SK", "SI", "SB", "SO", "ZA", "GS", "SS", "ES", "LK", "SD", "SR", "SJ", "SZ", "SE", "CH", "SY", "TW", "TJ", "TZ", "TH", "TL", "TG", "TK", "TO", "TT", "TN", "TR", "TM", "TC", "TV", "UG", "UA", "AE", "GB", "US", "UM", "UY", "UZ", "VU", "VE", "VN", "VG", "VI", "WF", "EH", "YE", "ZM", "ZW"], "required": false }, "creditAccount": { "type": "boolean", "required": false }, "debitAccount": { "type": "boolean", "required": false } } }, "required": false }, "aggregatedBalance": { "type": "object", "properties": { "currency": { "type": "string", "required": false }, "value": { "type": "string", "required": false } }, "required": false } }, "required": false }, "termDeposits": { "type": "object", "properties": { "name": { "type": "string", "required": false }, "products": { "type": "array", "items": { "properties": { "bookedBalance": { "type": "string", "required": false }, "principalAmount": { "type": "string", "required": false }, "accruedInterest": { "type": "number", "required": false }, "IBAN": { "type": "string", "pattern": "^[A-Z]{2}\\d{2}[A-Z\\d]{0,30}$", "required": false }, "currency": { "type": "string", "required": false }, "urgentTransferAllowed": { "type": "boolean", "required": false }, "productNumber": { "type": "string", "required": false }, "accountInterestRate": { "type": "number", "required": false }, "startDate": { "type": "string", "format": "date-time", "required": false }, "termUnit": { "enum": ["D", "W", "M", "Y"], "required": false }, "termNumber": { "type": "number", "required": false }, "maturityDate": { "type": "string", "format": "date-time", "required": false }, "maturityAmount": { "type": "number", "required": false }, "autoRenewalIndicator": { "type": "boolean", "required": false }, "interestPaymentFrequencyUnit": { "enum": ["D", "W", "M", "Y"], "required": false }, "interestPaymentFrequencyNumber": { "type": "number", "required": false }, "interestSettlementAccount": { "type": "string", "required": false }, "valueDateBalance": { "type": "number", "required": false }, "accountHolderName": { "type": "string", "maxLength": 256, "required": false }, "outstandingPrincipalAmount": { "type": "number", "required": false }, "creditAccount": { "type": "boolean", "required": false }, "debitAccount": { "type": "boolean", "required": false }, "minimumRequiredBalance": { "type": "number", "required": false } } }, "required": false }, "aggregatedBalance": { "type": "object", "properties": { "currency": { "type": "string", "required": false }, "value": { "type": "string", "required": false } }, "required": false } }, "required": false }, "loans": { "type": "object", "properties": { "name": { "type": "string", "required": false }, "products": { "type": "array", "items": { "properties": { "bookedBalance": { "type": "string", "required": false }, "principalAmount": { "type": "string", "required": false }, "currency": { "type": "string", "required": false }, "urgentTransferAllowed": { "type": "boolean", "required": false }, "productNumber": { "type": "string", "required": false }, "accountInterestRate": { "type": "number", "required": false }, "termUnit": { "enum": ["D", "W", "M", "Y"], "required": false }, "termNumber": { "type": "number", "required": false }, "outstandingPrincipalAmount": { "type": "number", "required": false }, "monthlyInstalmentAmount": { "type": "number", "required": false }, "amountInArrear": { "type": "number", "required": false }, "interestSettlementAccount": { "type": "string", "required": false }, "accruedInterest": { "type": "number", "required": false }, "accountHolderName": { "type": "string", "maxLength": 256, "required": false }, "maturityDate": { "type": "string", "format": "date-time", "required": false }, "valueDateBalance": { "type": "number", "required": false }, "creditAccount": { "type": "boolean", "required": false }, "debitAccount": { "type": "boolean", "required": false } } }, "required": false }, "aggregatedBalance": { "type": "object", "properties": { "currency": { "type": "string", "required": false }, "value": { "type": "string", "required": false } }, "required": false } }, "required": false }, "creditCards": { "type": "object", "properties": { "name": { "type": "string", "required": false }, "products": { "type": "array", "items": { "properties": { "bookedBalance": { "type": "string", "required": false }, "availableBalance": { "type": "string", "required": false }, "creditLimit": { "type": "string", "required": false }, "number": { "type": "string", "maxLength": 4, "required": false }, "currency": { "type": "string", "required": false }, "urgentTransferAllowed": { "type": "boolean", "required": false }, "cardNumber": { "type": "number", "required": false }, "creditCardAccountNumber": { "type": "string", "maxLength": 32, "required": false }, "validThru": { "type": "string", "format": "date-time", "required": false }, "applicableInterestRate": { "type": "number", "required": false }, "remainingCredit": { "type": "number", "required": false }, "outstandingPayment": { "type": "number", "required": false }, "minimumPayment": { "type": "number", "required": false }, "minimumPaymentDueDate": { "type": "string", "format": "date-time", "required": false }, "accountInterestRate": { "type": "number", "required": false }, "accountHolderName": { "type": "string", "maxLength": 256, "required": false }, "creditLimitUsage": { "type": "number", "required": false }, "creditLimitInterestRate": { "type": "number", "required": false }, "accruedInterest": { "type": "number", "required": false } } }, "required": false }, "aggregatedBalance": { "type": "object", "properties": { "currency": { "type": "string", "required": false }, "value": { "type": "string", "required": false } }, "required": false } }, "required": false }, "debitCards": { "type": "object", "properties": { "name": { "type": "string", "required": false }, "products": { "type": "array", "items": { "properties": { "number": { "type": "string", "maxLength": 4, "required": false }, "urgentTransferAllowed": { "type": "boolean", "required": false }, "cardNumber": { "type": "number", "required": false }, "accountInterestRate": { "type": "number", "required": false }, "accountHolderName": { "type": "string", "maxLength": 256, "required": false }, "debitCardsItems": { "type": "array", "items": { "properties": { "number": { "type": "string", "maxLength": 4, "required": false }, "expiryDate": { "type": "string", "required": false } } }, "uniqueItems": true, "required": false }, "startDate": { "type": "string", "format": "date-time", "required": false }, "validThru": { "type": "string", "format": "date-time", "required": false } } }, "required": false }, "aggregatedBalance": { "type": "object", "properties": { "currency": { "type": "string", "required": false }, "value": { "type": "string", "required": false } }, "required": false } }, "required": false }, "investmentAccounts": { "type": "object", "properties": { "name": { "type": "string", "required": false }, "products": { "type": "array", "items": { "properties": { "currentInvestmentValue": { "type": "string", "required": false }, "currency": { "type": "string", "required": false }, "urgentTransferAllowed": { "type": "boolean", "required": false }, "productNumber": { "type": "string", "required": false } } }, "required": false }, "aggregatedBalance": { "type": "object", "properties": { "currency": { "type": "string", "required": false }, "value": { "type": "string", "required": false } }, "required": false } }, "required": false } } };
	
	    definedTypes['ProductSummaryData.Productsummary-EXAMPLE'] = { "properties": {} };
	
	    definedTypes['ProductSummaryData.ProductsummaryFlatStructure-GET'] = { "type": "array", "items": { "properties": { "id": { "type": "string", "required": true }, "externalArrangementId": { "type": "string", "required": true }, "externalLegalEntityId": { "type": "string", "required": true }, "externalProductId": { "type": "string", "required": true }, "name": { "type": "string", "required": false }, "alias": { "type": "string", "required": false }, "bookedBalance": { "type": "number", "required": false }, "availableBalance": { "type": "number", "required": false }, "creditLimit": { "type": "number", "required": false }, "IBAN": { "type": "string", "maxLength": 34, "pattern": "^(AF|AX|AL|DZ|AS|AD|AO|AI|AQ|AG|AR|AM|AW|AU|AT|AZ|BS|BH|BD|BB|BY|BE|BZ|BJ|BM|BT|BO|BQ|BA|BW|BV|BR|IO|BN|BG|BF|BI|KH|CM|CA|CV|KY|CF|TD|CL|CN|CX|CC|CO|KM|CG|CD|CK|CR|CI|HR|CU|CW|CY|CZ|DK|DJ|DM|DO|EC|EG|SV|GQ|ER|EE|ET|FK|FO|FJ|FI|FR|GF|PF|TF|GA|GM|GE|DE|GH|GI|GR|GL|GD|GP|GU|GT|GG|GN|GW|GY|HT|HM|VA|HN|HK|HU|IS|IN|ID|IR|IQ|IE|IM|IL|IT|JM|JP|JE|JO|KZ|KE|KI|KP|KR|KW|KG|LA|LV|LB|LS|LR|LY|LI|LT|LU|MO|MK|MG|MW|MY|MV|ML|MT|MH|MQ|MR|MU|YT|MX|FM|MD|MC|MN|ME|MS|MA|MZ|MM|NA|NR|NP|NL|NC|NZ|NI|NE|NG|NU|NF|MP|NO|OM|PK|PW|PS|PA|PG|PY|PE|PH|PN|PL|PT|PR|QA|RE|RO|RU|RW|BL|SH|KN|LC|MF|PM|VC|WS|SM|ST|SA|SN|RS|SC|SL|SG|SX|SK|SI|SB|SO|ZA|GS|SS|ES|LK|SD|SR|SJ|SZ|SE|CH|SY|TW|TJ|TZ|TH|TL|TG|TK|TO|TT|TN|TR|TM|TC|TV|UG|UA|AE|GB|US|UM|UY|UZ|VU|VE|VN|VG|VI|WF|EH|YE|ZM|ZW).*", "required": false }, "BBAN": { "type": "string", "maxLength": 30, "required": false }, "currency": { "enum": ["AED", "AFN", "ALL", "AMD", "ANG", "AOA", "ARS", "AUD", "AWG", "AZN", "BAM", "BBD", "BDT", "BGN", "BHD", "BIF", "BMD", "BND", "BOB", "BOV", "BRL", "BSD", "BTN", "BWP", "BYN", "BZD", "CAD", "CDF", "CHE", "CHW", "CLF", "CLP", "CNY", "COP", "COU", "CRC", "CUC", "CUP", "CVE", "CZK", "DJF", "DKK", "DOP", "DZD", "EGP", "ERN", "ETB", "EUR", "FJD", "FKP", "GBP", "GEL", "GHS", "GIP", "GMD", "GNF", "GTQ", "GYD", "HKD", "HNL", "HRK", "HTG", "HUF", "IDR", "ILS", "INR", "IQD", "IRR", "ISK", "JMD", "JOD", "JPY", "KES", "KGS", "KHR", "KMF", "KPW", "KWD", "KYD", "KZT", "LAK", "LBP", "LKR", "LRD", "LSL", "LYD", "MAD", "MDL", "MGA", "MKD", "MMK", "MNT", "MOP", "MRO", "MUR", "MVR", "MWK", "MXN", "MXV", "MYR", "MZN", "NAD", "NGN", "NIO", "NOK", "NPR", "NZD", "OMR", "PAB", "PEN", "PGK", "PHP", "PKR", "PLN", "PYG", "QAR", "RON", "RSD", "RUB", "RWF", "SAR", "SBD", "SCR", "SDG", "SEK", "SGD", "SHP", "SLL", "SOS", "SRD", "SSP", "STD", "SVC", "SYP", "SZL", "THB", "TJS", "TMT", "TND", "TOP", "TRY", "TTD", "TWD", "TZS", "UAH", "UGX", "USD", "USN", "UYI", "UYU", "UZS", "VEF", "VND", "VUV", "WST", "YER", "ZAR", "ZMW", "ZWL"], "required": false }, "externalTransferAllowed": { "type": "boolean", "required": false }, "urgentTransferAllowed": { "type": "boolean", "required": false }, "accruedInterest": { "type": "number", "required": false }, "number": { "type": "string", "maxLength": 4, "required": false }, "principalAmount": { "type": "number", "required": false }, "currentInvestmentValue": { "type": "number", "minimum": 0, "required": false }, "legalEntityId": { "type": "string", "required": false }, "productId": { "type": "string", "required": false }, "productNumber": { "type": "string", "required": false }, "productKindName": { "type": "string", "required": false }, "productTypeName": { "type": "string", "required": false }, "BIC": { "type": "string", "required": false }, "bankBranchCode": { "type": "string", "required": false }, "visible": { "type": "boolean", "required": false }, "accountOpeningDate": { "type": "string", "format": "date-time", "required": false }, "accountInterestRate": { "type": "number", "required": false }, "valueDateBalance": { "type": "number", "required": false }, "creditLimitUsage": { "type": "number", "required": false }, "creditLimitInterestRate": { "type": "number", "required": false }, "creditLimitExpiryDate": { "type": "string", "format": "date-time", "required": false }, "startDate": { "type": "string", "format": "date-time", "required": false }, "termUnit": { "enum": ["D", "W", "M", "Y"], "required": false }, "termNumber": { "type": "number", "required": false }, "interestPaymentFrequencyUnit": { "enum": ["D", "W", "M", "Y"], "required": false }, "interestPaymentFrequencyNumber": { "type": "number", "required": false }, "maturityDate": { "type": "string", "format": "date-time", "required": false }, "maturityAmount": { "type": "number", "required": false }, "autoRenewalIndicator": { "type": "boolean", "required": false }, "interestSettlementAccount": { "type": "string", "required": false }, "outstandingPrincipalAmount": { "type": "number", "required": false }, "monthlyInstalmentAmount": { "type": "number", "required": false }, "amountInArrear": { "type": "number", "required": false }, "minimumRequiredBalance": { "type": "number", "required": false }, "creditCardAccountNumber": { "type": "string", "maxLength": 32, "required": false }, "validThru": { "type": "string", "format": "date-time", "required": false }, "applicableInterestRate": { "type": "number", "required": false }, "remainingCredit": { "type": "number", "required": false }, "outstandingPayment": { "type": "number", "required": false }, "minimumPayment": { "type": "number", "required": false }, "minimumPaymentDueDate": { "type": "string", "format": "date-time", "required": false }, "totalInvestmentValue": { "type": "number", "required": false }, "debitCards": { "type": "array", "items": { "properties": { "number": { "type": "string", "maxLength": 4, "required": false }, "expiryDate": { "type": "string", "required": false } } }, "uniqueItems": true, "required": false }, "accountHolderAddressLine1": { "type": "string", "maxLength": 70, "required": false }, "accountHolderAddressLine2": { "type": "string", "maxLength": 70, "required": false }, "accountHolderAddressLine3": { "type": "string", "maxLength": 70, "required": false }, "accountHolderAddressLine4": { "type": "string", "maxLength": 70, "required": false }, "accountHolderName": { "type": "string", "maxLength": 256, "required": false }, "accountHolderCountry": { "enum": ["AF", "AL", "DZ", "AS", "AD", "AO", "AI", "AQ", "AG", "AR", "AM", "AW", "AU", "AT", "AZ", "BS", "BH", "BD", "BB", "BY", "BE", "BZ", "BJ", "BM", "BT", "BO", "BQ", "BA", "BW", "BV", "BR", "IO", "BN", "BG", "BF", "BI", "KH", "CM", "CA", "CV", "KY", "CF", "TD", "CL", "CN", "CX", "CC", "CO", "KM", "CG", "CD", "CK", "CR", "HR", "CU", "CW", "CY", "CZ", "CI", "DK", "DJ", "DM", "DO", "EC", "EG", "SV", "GQ", "ER", "EE", "ET", "FK", "FO", "FJ", "FI", "FR", "GF", "PF", "TF", "GA", "GM", "GE", "DE", "GH", "GI", "GR", "GL", "GD", "GP", "GU", "GT", "GG", "GN", "GW", "GY", "HT", "HM", "VA", "HN", "HK", "HU", "IS", "IN", "ID", "IR", "IQ", "IE", "IM", "IL", "IT", "JM", "JP", "JE", "JO", "KZ", "KE", "KI", "KP", "KR", "KW", "KG", "LA", "LV", "LB", "LS", "LR", "LY", "LI", "LT", "LU", "MO", "MK", "MG", "MW", "MY", "MV", "ML", "MT", "MH", "MQ", "MR", "MU", "YT", "MX", "FM", "MD", "MC", "MN", "ME", "MS", "MA", "MZ", "MM", "NA", "NR", "NP", "NL", "NC", "NZ", "NI", "NE", "NG", "NU", "NF", "MP", "NO", "OM", "PK", "PW", "PS", "PA", "PG", "PY", "PE", "PH", "PN", "PL", "PT", "PR", "QA", "RO", "RU", "RW", "RE", "BL", "SH", "KN", "LC", "MF", "PM", "VC", "WS", "SM", "ST", "SA", "SN", "RS", "SC", "SL", "SG", "SX", "SK", "SI", "SB", "SO", "ZA", "GS", "SS", "ES", "LK", "SD", "SR", "SJ", "SZ", "SE", "CH", "SY", "TW", "TJ", "TZ", "TH", "TL", "TG", "TK", "TO", "TT", "TN", "TR", "TM", "TC", "TV", "UG", "UA", "AE", "GB", "US", "UM", "UY", "UZ", "VU", "VE", "VN", "VG", "VI", "WF", "EH", "YE", "ZM", "ZW"], "required": false }, "creditAccount": { "type": "boolean", "required": false }, "debitAccount": { "type": "boolean", "required": false } } } };
	
	    /**
	     * @typedef ProductSummaryData.AggregatedBalance
	     * @type {Object}
	     * @property {?String} currency
	     * @property {?String} value
	     * @property {?Object} additions Container object for custom API extensions
	     */
	
	    /**
	     * @typedef ProductSummaryData.CreditCard
	     * @type {Object}
	     * @property {?String} bookedBalance
	     * @property {?String} availableBalance
	     * @property {?String} creditLimit
	     * @property {?String} number
	     * @property {?String} currency
	     * @property {?Boolean} urgentTransferAllowed
	     * @property {?Number} cardNumber
	     * @property {?String} creditCardAccountNumber
	     * @property {?String} validThru
	     * @property {?Number} applicableInterestRate
	     * @property {?Number} remainingCredit
	     * @property {?Number} outstandingPayment
	     * @property {?Number} minimumPayment
	     * @property {?String} minimumPaymentDueDate
	     * @property {?Number} accountInterestRate
	     * @property {?String} accountHolderName
	     * @property {?Number} creditLimitUsage
	     * @property {?Number} creditLimitInterestRate
	     * @property {?Number} accruedInterest
	     * @property {?Object} additions Container object for custom API extensions
	     */
	
	    /**
	     * @typedef ProductSummaryData.CurrentAccount
	     * @type {Object}
	     * @property {?String} bookedBalance
	     * @property {?String} availableBalance
	     * @property {?String} creditLimit
	     * @property {?String} IBAN
	     * @property {?String} BBAN
	     * @property {?String} currency
	     * @property {?Boolean} urgentTransferAllowed
	     * @property {?String} BIC
	     * @property {?String} bankBranchCode
	     * @property {?Number} accountInterestRate
	     * @property {?Number} valueDateBalance
	     * @property {?Number} creditLimitUsage
	     * @property {?Number} creditLimitInterestRate
	     * @property {?String} creditLimitExpiryDate
	     * @property {?Number} accruedInterest
	     * @property {?Array.<ProductSummaryData.DebitCardItem>} debitCardsItems
	     * @property {?String} accountHolderName
	     * @property {?String} startDate
	     * @property {?Number} minimumRequiredBalance
	     * @property {?String} accountHolderAddressLine1
	     * @property {?String} accountHolderAddressLine2
	     * @property {?String} accountHolderAddressLine3
	     * @property {?String} accountHolderAddressLine4
	     * @property {?Boolean} creditAccount
	     * @property {?Boolean} debitAccount
	     * @property {?String} accountHolderCountry
	     * @property {?Object} additions Container object for custom API extensions
	     */
	
	    /**
	     * @typedef ProductSummaryData.DebitCard
	     * @type {Object}
	     * @property {?String} number
	     * @property {?Boolean} urgentTransferAllowed
	     * @property {?Number} cardNumber
	     * @property {?Number} accountInterestRate
	     * @property {?String} accountHolderName
	     * @property {?Array.<ProductSummaryData.DebitCardItem>} debitCardsItems
	     * @property {?String} startDate
	     * @property {?String} validThru
	     * @property {?Object} additions Container object for custom API extensions
	     */
	
	    /**
	     * @typedef ProductSummaryData.DebitCardItem
	     * @type {Object}
	     * @property {?String} number
	     * @property {?String} expiryDate
	     * @property {?Object} additions Container object for custom API extensions
	     */
	
	    /**
	     * @typedef ProductSummaryData.InvestmentAccount
	     * @type {Object}
	     * @property {?String} currentInvestmentValue
	     * @property {?String} currency
	     * @property {?Boolean} urgentTransferAllowed
	     * @property {?String} productNumber
	     * @property {?Object} additions Container object for custom API extensions
	     */
	
	    /**
	     * @typedef ProductSummaryData.Loan
	     * @type {Object}
	     * @property {?String} bookedBalance
	     * @property {?String} principalAmount
	     * @property {?String} currency
	     * @property {?Boolean} urgentTransferAllowed
	     * @property {?String} productNumber
	     * @property {?Number} accountInterestRate
	     * @property {?String} termUnit
	     * @property {?Number} termNumber
	     * @property {?Number} outstandingPrincipalAmount
	     * @property {?Number} monthlyInstalmentAmount
	     * @property {?Number} amountInArrear
	     * @property {?String} interestSettlementAccount
	     * @property {?Number} accruedInterest
	     * @property {?String} accountHolderName
	     * @property {?String} maturityDate
	     * @property {?Number} valueDateBalance
	     * @property {?Boolean} creditAccount
	     * @property {?Boolean} debitAccount
	     * @property {?Object} additions Container object for custom API extensions
	     */
	
	    /**
	     * @typedef ProductSummaryData.Productsummary-EXAMPLE
	     * @type {*}
	     */
	
	    /**
	     * @typedef ProductSummaryData.Productsummary-GET
	     * @type {Object}
	     * @property {?ProductSummaryData.AggregatedBalance} aggregatedBalance
	     * @property {?ProductSummaryData.currentAccounts} currentAccounts
	     * @property {?ProductSummaryData.savingsAccounts} savingsAccounts
	     * @property {?ProductSummaryData.termDeposits} termDeposits
	     * @property {?ProductSummaryData.loans} loans
	     * @property {?ProductSummaryData.creditCards} creditCards
	     * @property {?ProductSummaryData.debitCards} debitCards
	     * @property {?ProductSummaryData.investmentAccounts} investmentAccounts
	     * @property {?Object} additions Container object for custom API extensions
	     */
	
	    /**
	     * @typedef ProductSummaryData.ProductsummaryFlatStructure-GET
	     * @type {Array.<ProductSummaryData.ProductsummaryItem>}
	     */
	
	    /**
	     * @typedef ProductSummaryData.ProductsummaryItem
	     * @type {Object}
	     * @property {String} id
	     * @property {String} externalArrangementId
	     * @property {String} externalLegalEntityId
	     * @property {String} externalProductId
	     * @property {?String} name
	     * @property {?String} alias
	     * @property {?Number} bookedBalance
	     * @property {?Number} availableBalance
	     * @property {?Number} creditLimit
	     * @property {?String} IBAN
	     * @property {?String} BBAN
	     * @property {?String} currency
	     * @property {?Boolean} externalTransferAllowed
	     * @property {?Boolean} urgentTransferAllowed
	     * @property {?Number} accruedInterest
	     * @property {?String} number
	     * @property {?Number} principalAmount
	     * @property {?Number} currentInvestmentValue
	     * @property {?String} legalEntityId
	     * @property {?String} productId
	     * @property {?String} productNumber
	     * @property {?String} productKindName
	     * @property {?String} productTypeName
	     * @property {?String} BIC
	     * @property {?String} bankBranchCode
	     * @property {?Boolean} visible User specific visibility for an arrangement
	     * @property {?String} accountOpeningDate
	     * @property {?Number} accountInterestRate
	     * @property {?Number} valueDateBalance
	     * @property {?Number} creditLimitUsage
	     * @property {?Number} creditLimitInterestRate
	     * @property {?String} creditLimitExpiryDate
	     * @property {?String} startDate
	     * @property {?String} termUnit
	     * @property {?Number} termNumber
	     * @property {?String} interestPaymentFrequencyUnit
	     * @property {?Number} interestPaymentFrequencyNumber
	     * @property {?String} maturityDate
	     * @property {?Number} maturityAmount
	     * @property {?Boolean} autoRenewalIndicator
	     * @property {?String} interestSettlementAccount
	     * @property {?Number} outstandingPrincipalAmount
	     * @property {?Number} monthlyInstalmentAmount
	     * @property {?Number} amountInArrear
	     * @property {?Number} minimumRequiredBalance
	     * @property {?String} creditCardAccountNumber
	     * @property {?String} validThru
	     * @property {?Number} applicableInterestRate
	     * @property {?Number} remainingCredit
	     * @property {?Number} outstandingPayment
	     * @property {?Number} minimumPayment
	     * @property {?String} minimumPaymentDueDate
	     * @property {?Number} totalInvestmentValue
	     * @property {?Array.<ProductSummaryData.DebitCardItem>} debitCards
	     * @property {?String} accountHolderAddressLine1
	     * @property {?String} accountHolderAddressLine2
	     * @property {?String} accountHolderAddressLine3
	     * @property {?String} accountHolderAddressLine4
	     * @property {?String} accountHolderName
	     * @property {?String} accountHolderCountry
	     * @property {?Boolean} creditAccount
	     * @property {?Boolean} debitAccount
	     * @property {?Object} additions Container object for custom API extensions
	     */
	
	    /**
	     * @typedef ProductSummaryData.SavingsAccount
	     * @type {Object}
	     * @property {?String} bookedBalance
	     * @property {?Number} accruedInterest
	     * @property {?String} IBAN
	     * @property {?String} BBAN
	     * @property {?String} currency
	     * @property {?Boolean} urgentTransferAllowed
	     * @property {?String} BIC
	     * @property {?String} bankBranchCode
	     * @property {?Number} accountInterestRate
	     * @property {?Number} minimumRequiredBalance
	     * @property {?String} startDate
	     * @property {?String} termUnit
	     * @property {?Number} termNumber
	     * @property {?String} maturityDate
	     * @property {?Number} maturityAmount
	     * @property {?Boolean} autoRenewalIndicator
	     * @property {?String} interestPaymentFrequencyUnit
	     * @property {?Number} interestPaymentFrequencyNumber
	     * @property {?Number} principalAmount
	     * @property {?String} interestSettlementAccount
	     * @property {?String} accountHolderName
	     * @property {?Number} valueDateBalance
	     * @property {?String} accountHolderAddressLine1
	     * @property {?String} accountHolderAddressLine2
	     * @property {?String} accountHolderAddressLine3
	     * @property {?String} accountHolderAddressLine4
	     * @property {?String} accountHolderCountry
	     * @property {?Boolean} creditAccount
	     * @property {?Boolean} debitAccount
	     * @property {?Object} additions Container object for custom API extensions
	     */
	
	    /**
	     * @typedef ProductSummaryData.TermDeposit
	     * @type {Object}
	     * @property {?String} bookedBalance
	     * @property {?String} principalAmount
	     * @property {?Number} accruedInterest
	     * @property {?String} IBAN
	     * @property {?String} currency
	     * @property {?Boolean} urgentTransferAllowed
	     * @property {?String} productNumber
	     * @property {?Number} accountInterestRate
	     * @property {?String} startDate
	     * @property {?String} termUnit
	     * @property {?Number} termNumber
	     * @property {?String} maturityDate
	     * @property {?Number} maturityAmount
	     * @property {?Boolean} autoRenewalIndicator
	     * @property {?String} interestPaymentFrequencyUnit
	     * @property {?Number} interestPaymentFrequencyNumber
	     * @property {?String} interestSettlementAccount
	     * @property {?Number} valueDateBalance
	     * @property {?String} accountHolderName
	     * @property {?Number} outstandingPrincipalAmount
	     * @property {?Boolean} creditAccount
	     * @property {?Boolean} debitAccount
	     * @property {?Number} minimumRequiredBalance
	     * @property {?Object} additions Container object for custom API extensions
	     */
	
	    /**
	     * @typedef ProductSummaryData.creditCards
	     * @type {Object}
	     * @property {?String} name
	     * @property {?Array.<ProductSummaryData.CreditCard>} products
	     * @property {?ProductSummaryData.AggregatedBalance} aggregatedBalance
	     * @property {?Object} additions Container object for custom API extensions
	     */
	
	    /**
	     * @typedef ProductSummaryData.currentAccounts
	     * @type {Object}
	     * @property {?String} name
	     * @property {?Array.<ProductSummaryData.CurrentAccount>} products
	     * @property {?ProductSummaryData.AggregatedBalance} aggregatedBalance
	     * @property {?Object} additions Container object for custom API extensions
	     */
	
	    /**
	     * @typedef ProductSummaryData.debitCards
	     * @type {Object}
	     * @property {?String} name
	     * @property {?Array.<ProductSummaryData.DebitCard>} products
	     * @property {?ProductSummaryData.AggregatedBalance} aggregatedBalance
	     * @property {?Object} additions Container object for custom API extensions
	     */
	
	    /**
	     * @typedef ProductSummaryData.investmentAccounts
	     * @type {Object}
	     * @property {?String} name
	     * @property {?Array.<ProductSummaryData.InvestmentAccount>} products
	     * @property {?ProductSummaryData.AggregatedBalance} aggregatedBalance
	     * @property {?Object} additions Container object for custom API extensions
	     */
	
	    /**
	     * @typedef ProductSummaryData.loans
	     * @type {Object}
	     * @property {?String} name
	     * @property {?Array.<ProductSummaryData.Loan>} products
	     * @property {?ProductSummaryData.AggregatedBalance} aggregatedBalance
	     * @property {?Object} additions Container object for custom API extensions
	     */
	
	    /**
	     * @typedef ProductSummaryData.savingsAccounts
	     * @type {Object}
	     * @property {?String} name
	     * @property {?Array.<ProductSummaryData.SavingsAccount>} products
	     * @property {?ProductSummaryData.AggregatedBalance} aggregatedBalance
	     * @property {?Object} additions Container object for custom API extensions
	     */
	
	    /**
	     * @typedef ProductSummaryData.termDeposits
	     * @type {Object}
	     * @property {?String} name
	     * @property {?Array.<ProductSummaryData.TermDeposit>} products
	     * @property {?ProductSummaryData.AggregatedBalance} aggregatedBalance
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
	    * @name ProductSummaryData#getProductsummary
	    * @type {Function}
	    * @description Retrieve list of products summaries.
	    
	    * @param {?Object} params Map of query parameters.
	      
	    
	    * @param {?Object} headers Map of custom header attributes.
	      
	    
	    * @returns {Promise.<Response>} Resolves data value as {@link ProductSummaryData.Productsummary-GET} on success 
	    *
	    * @example
	    * productSummaryData
	    *  .getProductsummary(params, headers)
	    *  .then(function(result){
	    *    console.log('headers', result.headers)
	    *    console.log('data', result.data);
	    *  });
	    */
	    function getProductsummary(params, headers) {
	      var url = '' + baseUri + version + '/productsummary';
	
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
	    * @name ProductSummaryData#getProductsummaryDebitaccounts
	    * @type {Function}
	    * @description All accounts available to transfer from
	    
	    * @param {?Object} params Map of query parameters.
	      
	    
	    * @param {?Object} headers Map of custom header attributes.
	      
	    
	    * @returns {Promise.<Response>} Resolves data value as {@link ProductSummaryData.Productsummary-GET} on success 
	    *
	    * @example
	    * productSummaryData
	    *  .getProductsummaryDebitaccounts(params, headers)
	    *  .then(function(result){
	    *    console.log('headers', result.headers)
	    *    console.log('data', result.data);
	    *  });
	    */
	    function getProductsummaryDebitaccounts(params, headers) {
	      var url = '' + baseUri + version + '/productsummary/debitaccounts';
	
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
	    * @name ProductSummaryData#getProductsummaryCreditaccounts
	    * @type {Function}
	    * @description All accounts available for transfer to
	    
	    * @param {?Object} params Map of query parameters.
	      
	    
	    * @param {?Object} headers Map of custom header attributes.
	      
	    
	    * @returns {Promise.<Response>} Resolves data value as {@link ProductSummaryData.Productsummary-GET} on success 
	    *
	    * @example
	    * productSummaryData
	    *  .getProductsummaryCreditaccounts(params, headers)
	    *  .then(function(result){
	    *    console.log('headers', result.headers)
	    *    console.log('data', result.data);
	    *  });
	    */
	    function getProductsummaryCreditaccounts(params, headers) {
	      var url = '' + baseUri + version + '/productsummary/creditaccounts';
	
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
	    * @name ProductSummaryData#getProductsummaryArrangements
	    * @type {Function}
	    * @description Retrieve list of products summaries, flat structure.
	    
	    * @param {?Object} params Map of query parameters.
	      
	    * @param {?string} params.legalEntityId legalEntityId. Eg: id9876543210.
	      
	    * @param {?string} params.productKindName Product kind name. Eg: Current Account.
	      
	    * @param {?number} params.from Page Number. Skip over pages of elements by specifying a start value for the query. Eg: 20. (defaults to 0)
	      
	    * @param {?string} params.cursor Record UUID. As an alternative for specifying 'from' this allows to point to the record to start the selection from. Eg: 76d5be8b-e80d-4842-8ce6-ea67519e8f74. (defaults to "")
	      
	    * @param {?number} params.size Limit the number of elements on the response. When used in combination with cursor, the value
	    is allowed to be a negative number to indicate requesting records upwards from the starting point indicated
	    by the cursor. Eg: 80. (defaults to 10)
	      
	    * @param {?string} params.orderBy Order by field: "name", "externalArrangementId", "externalLegalEntityId", "externalProductId", "alias", "bookedBalance", "availableBalance", "creditLimit", "IBAN", "BBAN", "BIC", "currency", "externalTransferAllowed", "urgentTransferAllowed", "accruedInterest", "Number", "principalAmount", "currentInvestmentValue", "legalEntityId", "productId", "productNumber", "accountOpeningDate", "accountInterestRate", "valueDateBalance", "creditLimitUsage", "creditLimitInterestRate", "creditLimitExpiryDate", "debitCards", "startDate", "termUnit", "termNumber", "maturityDate", "maturityAmount", "autoRenewalIndicator", "interestPaymentFrequencyUnit", "interestPaymentFrequencyNumber", "interestSettlementAccount", "outstandingPrincipalAmount", "monthlyInstalmentAmount", "amountInArrear", "minimumRequiredBalance", "creditCardAccountNumber", "validThru", "applicableInterestRate", "remainingCredit", "outstandingPayment", "minimumPayment", "minimumPaymentDueDate", "totalInvestmentValue", "accountHolderAddressLine1", "accountHolderAddressLine2", "accountHolderAddressLine3", "accountHolderAddressLine4", "accountHolderCountry", "creditAccount", "debitAccount".
	      
	    * @param {?string} params.direction Direction. (defaults to DESC)
	      
	    
	    * @param {?Object} headers Map of custom header attributes.
	      
	    
	    * @returns {Promise.<Response>} Resolves data value as {@link ProductSummaryData.ProductsummaryFlatStructure-GET} on success 
	    *
	    * @example
	    * productSummaryData
	    *  .getProductsummaryArrangements(params, headers)
	    *  .then(function(result){
	    *    console.log('headers', result.headers)
	    *    console.log('data', result.data);
	    *  });
	    */
	    function getProductsummaryArrangements(params, headers) {
	      var url = '' + baseUri + version + '/productsummary/arrangements';
	
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
	    * @name ProductSummaryData#getProductsummaryConfigurationRecord
	    * @type {Function}
	    * @description Retrieve list of products summaries, flat structure.
	    
	    * @param {string} legalEntityId 
	      
	    
	    * @param {?Object} params Map of query parameters.
	      
	    * @param {?number} params.from Page Number. Skip over pages of elements by specifying a start value for the query. Eg: 20. (defaults to 0)
	      
	    * @param {?string} params.cursor Record UUID. As an alternative for specifying 'from' this allows to point to the record to start the selection from. Eg: 76d5be8b-e80d-4842-8ce6-ea67519e8f74. (defaults to "")
	      
	    * @param {?number} params.size Limit the number of elements on the response. When used in combination with cursor, the value
	    is allowed to be a negative number to indicate requesting records upwards from the starting point indicated
	    by the cursor. Eg: 80. (defaults to 10)
	      
	    * @param {?string} params.orderBy Order by field: "name", "externalArrangementId", "externalLegalEntityId", "externalProductId", "alias", "bookedBalance", "availableBalance", "creditLimit", "IBAN", "BBAN", "BIC", "currency", "externalTransferAllowed", "urgentTransferAllowed", "accruedInterest", "Number", "principalAmount", "currentInvestmentValue", "legalEntityId", "productId", "productNumber", "accountOpeningDate", "accountInterestRate", "valueDateBalance", "creditLimitUsage", "creditLimitInterestRate", "creditLimitExpiryDate", "debitCards", "startDate", "termUnit", "termNumber", "maturityDate", "maturityAmount", "autoRenewalIndicator", "interestPaymentFrequencyUnit", "interestPaymentFrequencyNumber", "interestSettlementAccount", "outstandingPrincipalAmount", "monthlyInstalmentAmount", "amountInArrear", "minimumRequiredBalance", "creditCardAccountNumber", "validThru", "applicableInterestRate", "remainingCredit", "outstandingPayment", "minimumPayment", "minimumPaymentDueDate", "totalInvestmentValue", "accountHolderAddressLine1", "accountHolderAddressLine2", "accountHolderAddressLine3", "accountHolderAddressLine4", "accountHolderCountry", "creditAccount", "debitAccount".
	      
	    * @param {?string} params.direction Direction. (defaults to DESC)
	      
	    
	    * @param {?Object} headers Map of custom header attributes.
	      
	    
	    * @returns {Promise.<Response>} Resolves data value as {@link ProductSummaryData.ProductsummaryFlatStructure-GET} on success 
	    *
	    * @example
	    * productSummaryData
	    *  .getProductsummaryConfigurationRecord(legalEntityId, params, headers)
	    *  .then(function(result){
	    *    console.log('headers', result.headers)
	    *    console.log('data', result.data);
	    *  });
	    */
	    function getProductsummaryConfigurationRecord(legalEntityId, params, headers) {
	      var url = '' + baseUri + version + '/productsummary/configuration/' + legalEntityId;
	
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
	    * @name ProductSummaryData#getProductsummaryContextArrangements
	    * @type {Function}
	    * @description Get a list of arrangements according to a given business function
	    
	    * @param {Object} params Map of query parameters.
	      
	    * @param {string} params.businessFunction Provide the context for retrieving arrangements. Eg: Product Summary.
	      
	    * @param {string} params.resourceName Provide the resource for retrieving arrangements. Eg: Product Summary.
	      
	    * @param {string} params.privilege Privilege for the arrangements. Eg: view.
	      
	    * @param {?string} params.externalTransferAllowed Privilege for external transfers. Eg: false.
	      
	    * @param {?string} params.creditAccount Type of account. Eg: true.
	      
	    * @param {?string} params.debitAccount Type of account. Eg: true.
	      
	    * @param {?string} params.productKindName Product Kind Name. Eg: Current Account.
	      
	    * @param {?string} params.searchTerm Full text search. Eg: Account X.
	      
	    * @param {?number} params.from Page Number. Skip over pages of elements by specifying a start value for the query. Eg: 20. (defaults to 0)
	      
	    * @param {?string} params.cursor Record UUID. As an alternative for specifying 'from' this allows to point to the record to start the selection from. Eg: 76d5be8b-e80d-4842-8ce6-ea67519e8f74. (defaults to "")
	      
	    * @param {?number} params.size Limit the number of elements on the response. When used in combination with cursor, the value
	    is allowed to be a negative number to indicate requesting records upwards from the starting point indicated
	    by the cursor. Eg: 80. (defaults to 10)
	      
	    * @param {?string} params.orderBy Order by field: "name", "externalArrangementId", "externalLegalEntityId", "externalProductId", "alias", "bookedBalance", "availableBalance", "creditLimit", "IBAN", "BBAN", "BIC", "currency", "externalTransferAllowed", "urgentTransferAllowed", "accruedInterest", "Number", "principalAmount", "currentInvestmentValue", "legalEntityId", "productId", "productNumber", "accountOpeningDate", "accountInterestRate", "valueDateBalance", "creditLimitUsage", "creditLimitInterestRate", "creditLimitExpiryDate", "debitCards", "startDate", "termUnit", "termNumber", "maturityDate", "maturityAmount", "autoRenewalIndicator", "interestPaymentFrequencyUnit", "interestPaymentFrequencyNumber", "interestSettlementAccount", "outstandingPrincipalAmount", "monthlyInstalmentAmount", "amountInArrear", "minimumRequiredBalance", "creditCardAccountNumber", "validThru", "applicableInterestRate", "remainingCredit", "outstandingPayment", "minimumPayment", "minimumPaymentDueDate", "totalInvestmentValue", "accountHolderAddressLine1", "accountHolderAddressLine2", "accountHolderAddressLine3", "accountHolderAddressLine4", "accountHolderCountry", "creditAccount", "debitAccount".
	      
	    * @param {?string} params.direction Direction. (defaults to DESC)
	      
	    
	    * @param {?Object} headers Map of custom header attributes.
	      
	    
	    * @returns {Promise.<Response>} Resolves data value as {@link ProductSummaryData.ProductsummaryFlatStructure-GET} on success 
	    *
	    * @example
	    * productSummaryData
	    *  .getProductsummaryContextArrangements(params, headers)
	    *  .then(function(result){
	    *    console.log('headers', result.headers)
	    *    console.log('data', result.data);
	    *  });
	    */
	    function getProductsummaryContextArrangements(params, headers) {
	      var url = '' + baseUri + version + '/productsummary/context/arrangements';
	
	      return httpClient({
	        method: 'GET',
	        url: url,
	
	        params: params || {},
	
	        headers: headers || {}
	      }).then(parse).catch(function (err) {
	        throw parse(err);
	      });
	    }
	
	    var schemas = {};
	
	    /**
	     * @typedef Response
	     * @type {Object}
	     * @property {Object} data See method descriptions for possible return types
	     * @property {Function} headers Getter headers function
	     * @property {Number} status HTTP status code of the response.
	     * @property {String} statusText HTTP status text of the response.
	     */
	
	    return {
	
	      getProductsummary: getProductsummary,
	
	      getProductsummaryDebitaccounts: getProductsummaryDebitaccounts,
	
	      getProductsummaryCreditaccounts: getProductsummaryCreditaccounts,
	
	      getProductsummaryArrangements: getProductsummaryArrangements,
	
	      getProductsummaryConfigurationRecord: getProductsummaryConfigurationRecord,
	
	      getProductsummaryContextArrangements: getProductsummaryContextArrangements,
	
	      schemas: schemas
	    };
	  };
	};

/***/ })
/******/ ])
});
;
//# sourceMappingURL=data-bb-product-summary-http-ng.js.map