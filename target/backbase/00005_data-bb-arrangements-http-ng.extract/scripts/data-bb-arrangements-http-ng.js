(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vendor-bb-angular"));
	else if(typeof define === 'function' && define.amd)
		define("data-bb-arrangements-http-ng", ["vendor-bb-angular"], factory);
	else if(typeof exports === 'object')
		exports["data-bb-arrangements-http-ng"] = factory(require("vendor-bb-angular"));
	else
		root["data-bb-arrangements-http-ng"] = factory(root["vendor-bb-angular"]);
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
	exports.arrangementsDataKey = undefined;
	
	var _vendorBbAngular = __webpack_require__(2);
	
	var _vendorBbAngular2 = _interopRequireDefault(_vendorBbAngular);
	
	var _dataBbArrangementsHttp = __webpack_require__(3);
	
	var _dataBbArrangementsHttp2 = _interopRequireDefault(_dataBbArrangementsHttp);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/* eslint-disable */
	/**
	 * @module data-bb-arrangements-http-ng
	 *
	 * @description A data module for accessing the Arrangements REST API.
	 *
	 * @returns {String} `data-bb-arrangements-http-ng`
	 * @example
	 * import arrangementsDataModuleKey, {
	 *   arrangementsDataKey,
	 * } from 'data-bb-arrangements-http-ng';
	 */
	
	var arrangementsDataModuleKey = 'data-bb-arrangements-http-ng';
	/**
	 * @name arrangementsDataKey
	 * @type {string}
	 * @description Angular dependency injection key for the ArrangementsData service
	 */
	var arrangementsDataKey = exports.arrangementsDataKey = 'data-bb-arrangements-http-ng:arrangementsData';
	/**
	 * @name default
	 * @type {string}
	 * @description Angular dependency injection module key
	 */
	exports.default = _vendorBbAngular2.default.module(arrangementsDataModuleKey, [])
	
	/**
	 * @constructor ArrangementsData
	 * @type {object}
	 *
	 * @description Public api for data-bb-arrangements-http-ng service
	 *
	 */
	.provider(arrangementsDataKey, [function () {
	  var config = {
	    baseUri: '/'
	  };
	
	  /**
	   * @name ArrangementsDataProvider
	   * @type {object}
	   * @ngkey data-bb-arrangements-http-ng:arrangementsDataProvider
	   * @description
	   * Data service that can be configured with custom base URI.
	   *
	   * @example
	   * // Configuring in an angular app:
	   * angular.module(...)
	   *   .config(['data-bb-arrangements-http-ng:arrangementsDataProvider',
	   *     (dataProvider) => {
	   *       dataProvider.setBaseUri('http://my-service.com/');
	   *       });
	   *
	   * // Configuring With config-bb-providers-ng:
	   * export default [
	   *   ['data-bb-arrangements-http-ng:arrangementsDataProvider', (dataProvider) => {
	   *       dataProvider.setBaseUri('http://my-service.com/');
	   *   }]
	   * ];
	   */
	  return {
	    /**
	     * @name ArrangementsDataProvider#setBaseUri
	     * @type {function}
	     * @param {string} baseUri Base URI which will be the prefix for all HTTP requests
	     */
	    setBaseUri: function setBaseUri(baseUri) {
	      config.baseUri = baseUri;
	    },
	
	    /**
	     * @name ArrangementsDataProvider#$get
	     * @type {function}
	     * @return {object} An instance of the service
	     */
	    $get: ['$http',
	    /* into */
	    (0, _dataBbArrangementsHttp2.default)(config)]
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
	
	    definedTypes['ArrangementsData.ArrangementItemPost'] = { "properties": { "externalLegalEntityId": { "type": "string", "pattern": "^[a-zA-Z0-9_.-]*$", "required": true }, "externalProductId": { "type": "string", "pattern": "^[a-zA-Z0-9_.-]*$", "required": true }, "alias": { "type": "string", "maxLength": 64, "required": false }, "legalEntityId": { "type": "string", "pattern": "^[a-zA-Z0-9_.-]*$", "required": true }, "productId": { "type": "string", "pattern": "^[a-zA-Z0-9_.-]*$", "required": false } } };
	
	    definedTypes['ArrangementsData.ArrangemenItemUpdateBank'] = { "properties": { "name": { "type": "string", "pattern": "^[a-zA-Z0-9 _.-]*$", "required": false }, "bookedBalance": { "type": "number", "required": false }, "availableBalance": { "type": "number", "required": false }, "creditLimit": { "type": "number", "required": false }, "IBAN": { "type": "string", "maxLength": 34, "pattern": "^(AF|AX|AL|DZ|AS|AD|AO|AI|AQ|AG|AR|AM|AW|AU|AT|AZ|BS|BH|BD|BB|BY|BE|BZ|BJ|BM|BT|BO|BQ|BA|BW|BV|BR|IO|BN|BG|BF|BI|KH|CM|CA|CV|KY|CF|TD|CL|CN|CX|CC|CO|KM|CG|CD|CK|CR|CI|HR|CU|CW|CY|CZ|DK|DJ|DM|DO|EC|EG|SV|GQ|ER|EE|ET|FK|FO|FJ|FI|FR|GF|PF|TF|GA|GM|GE|DE|GH|GI|GR|GL|GD|GP|GU|GT|GG|GN|GW|GY|HT|HM|VA|HN|HK|HU|IS|IN|ID|IR|IQ|IE|IM|IL|IT|JM|JP|JE|JO|KZ|KE|KI|KP|KR|KW|KG|LA|LV|LB|LS|LR|LY|LI|LT|LU|MO|MK|MG|MW|MY|MV|ML|MT|MH|MQ|MR|MU|YT|MX|FM|MD|MC|MN|ME|MS|MA|MZ|MM|NA|NR|NP|NL|NC|NZ|NI|NE|NG|NU|NF|MP|NO|OM|PK|PW|PS|PA|PG|PY|PE|PH|PN|PL|PT|PR|QA|RE|RO|RU|RW|BL|SH|KN|LC|MF|PM|VC|WS|SM|ST|SA|SN|RS|SC|SL|SG|SX|SK|SI|SB|SO|ZA|GS|SS|ES|LK|SD|SR|SJ|SZ|SE|CH|SY|TW|TJ|TZ|TH|TL|TG|TK|TO|TT|TN|TR|TM|TC|TV|UG|UA|AE|GB|US|UM|UY|UZ|VU|VE|VN|VG|VI|WF|EH|YE|ZM|ZW)[a-zA-Z0-9_.-]*", "required": false }, "BBAN": { "type": "string", "maxLength": 30, "required": false }, "currency": { "enum": ["AED", "AFN", "ALL", "AMD", "ANG", "AOA", "ARS", "AUD", "AWG", "AZN", "BAM", "BBD", "BDT", "BGN", "BHD", "BIF", "BMD", "BND", "BOB", "BOV", "BRL", "BSD", "BTN", "BWP", "BYN", "BZD", "CAD", "CDF", "CHE", "CHW", "CLF", "CLP", "CNY", "COP", "COU", "CRC", "CUC", "CUP", "CVE", "CZK", "DJF", "DKK", "DOP", "DZD", "EGP", "ERN", "ETB", "EUR", "FJD", "FKP", "GBP", "GEL", "GHS", "GIP", "GMD", "GNF", "GTQ", "GYD", "HKD", "HNL", "HRK", "HTG", "HUF", "IDR", "ILS", "INR", "IQD", "IRR", "ISK", "JMD", "JOD", "JPY", "KES", "KGS", "KHR", "KMF", "KPW", "KWD", "KYD", "KZT", "LAK", "LBP", "LKR", "LRD", "LSL", "LYD", "MAD", "MDL", "MGA", "MKD", "MMK", "MNT", "MOP", "MRO", "MUR", "MVR", "MWK", "MXN", "MXV", "MYR", "MZN", "NAD", "NGN", "NIO", "NOK", "NPR", "NZD", "OMR", "PAB", "PEN", "PGK", "PHP", "PKR", "PLN", "PYG", "QAR", "RON", "RSD", "RUB", "RWF", "SAR", "SBD", "SCR", "SDG", "SEK", "SGD", "SHP", "SLL", "SOS", "SRD", "SSP", "STD", "SVC", "SYP", "SZL", "THB", "TJS", "TMT", "TND", "TOP", "TRY", "TTD", "TWD", "TZS", "UAH", "UGX", "USD", "USN", "UYI", "UYU", "UZS", "VEF", "VND", "VUV", "WST", "YER", "ZAR", "ZMW", "ZWL"], "required": true }, "externalTransferAllowed": { "type": "boolean", "required": false }, "urgentTransferAllowed": { "type": "boolean", "required": false }, "accruedInterest": { "type": "number", "required": false }, "number": { "type": "string", "maxLength": 4, "required": false }, "principalAmount": { "type": "number", "required": false }, "currentInvestmentValue": { "type": "number", "minimum": 0, "required": false }, "productNumber": { "type": "string", "required": false }, "BIC": { "type": "string", "required": false }, "bankBranchCode": { "type": "string", "required": false }, "externalArrangementId": { "type": "string", "pattern": "^[a-zA-Z0-9_.-]*$", "required": true } } };
	
	    definedTypes['ArrangementsData.ArrangementItemWithDetails'] = { "properties": { "externalArrangementId": { "type": "string", "pattern": "^[a-zA-Z0-9_.-]*$", "required": true }, "externalLegalEntityId": { "type": "string", "pattern": "^[a-zA-Z0-9_.-]*$", "required": true }, "externalProductId": { "type": "string", "pattern": "^[a-zA-Z0-9_.-]*$", "required": true }, "name": { "type": "string", "pattern": "^[a-zA-Z0-9 _.-]*$", "required": false }, "alias": { "type": "string", "required": false }, "bookedBalance": { "type": "number", "required": false }, "availableBalance": { "type": "number", "required": false }, "creditLimit": { "type": "number", "required": false }, "IBAN": { "type": "string", "maxLength": 34, "pattern": "^(AF|AX|AL|DZ|AS|AD|AO|AI|AQ|AG|AR|AM|AW|AU|AT|AZ|BS|BH|BD|BB|BY|BE|BZ|BJ|BM|BT|BO|BQ|BA|BW|BV|BR|IO|BN|BG|BF|BI|KH|CM|CA|CV|KY|CF|TD|CL|CN|CX|CC|CO|KM|CG|CD|CK|CR|CI|HR|CU|CW|CY|CZ|DK|DJ|DM|DO|EC|EG|SV|GQ|ER|EE|ET|FK|FO|FJ|FI|FR|GF|PF|TF|GA|GM|GE|DE|GH|GI|GR|GL|GD|GP|GU|GT|GG|GN|GW|GY|HT|HM|VA|HN|HK|HU|IS|IN|ID|IR|IQ|IE|IM|IL|IT|JM|JP|JE|JO|KZ|KE|KI|KP|KR|KW|KG|LA|LV|LB|LS|LR|LY|LI|LT|LU|MO|MK|MG|MW|MY|MV|ML|MT|MH|MQ|MR|MU|YT|MX|FM|MD|MC|MN|ME|MS|MA|MZ|MM|NA|NR|NP|NL|NC|NZ|NI|NE|NG|NU|NF|MP|NO|OM|PK|PW|PS|PA|PG|PY|PE|PH|PN|PL|PT|PR|QA|RE|RO|RU|RW|BL|SH|KN|LC|MF|PM|VC|WS|SM|ST|SA|SN|RS|SC|SL|SG|SX|SK|SI|SB|SO|ZA|GS|SS|ES|LK|SD|SR|SJ|SZ|SE|CH|SY|TW|TJ|TZ|TH|TL|TG|TK|TO|TT|TN|TR|TM|TC|TV|UG|UA|AE|GB|US|UM|UY|UZ|VU|VE|VN|VG|VI|WF|EH|YE|ZM|ZW)[a-zA-Z0-9_.-]*", "required": false }, "BBAN": { "type": "string", "maxLength": 30, "required": false }, "currency": { "enum": ["AED", "AFN", "ALL", "AMD", "ANG", "AOA", "ARS", "AUD", "AWG", "AZN", "BAM", "BBD", "BDT", "BGN", "BHD", "BIF", "BMD", "BND", "BOB", "BOV", "BRL", "BSD", "BTN", "BWP", "BYN", "BZD", "CAD", "CDF", "CHE", "CHW", "CLF", "CLP", "CNY", "COP", "COU", "CRC", "CUC", "CUP", "CVE", "CZK", "DJF", "DKK", "DOP", "DZD", "EGP", "ERN", "ETB", "EUR", "FJD", "FKP", "GBP", "GEL", "GHS", "GIP", "GMD", "GNF", "GTQ", "GYD", "HKD", "HNL", "HRK", "HTG", "HUF", "IDR", "ILS", "INR", "IQD", "IRR", "ISK", "JMD", "JOD", "JPY", "KES", "KGS", "KHR", "KMF", "KPW", "KWD", "KYD", "KZT", "LAK", "LBP", "LKR", "LRD", "LSL", "LYD", "MAD", "MDL", "MGA", "MKD", "MMK", "MNT", "MOP", "MRO", "MUR", "MVR", "MWK", "MXN", "MXV", "MYR", "MZN", "NAD", "NGN", "NIO", "NOK", "NPR", "NZD", "OMR", "PAB", "PEN", "PGK", "PHP", "PKR", "PLN", "PYG", "QAR", "RON", "RSD", "RUB", "RWF", "SAR", "SBD", "SCR", "SDG", "SEK", "SGD", "SHP", "SLL", "SOS", "SRD", "SSP", "STD", "SVC", "SYP", "SZL", "THB", "TJS", "TMT", "TND", "TOP", "TRY", "TTD", "TWD", "TZS", "UAH", "UGX", "USD", "USN", "UYI", "UYU", "UZS", "VEF", "VND", "VUV", "WST", "YER", "ZAR", "ZMW", "ZWL"], "required": false }, "externalTransferAllowed": { "type": "boolean", "required": false }, "urgentTransferAllowed": { "type": "boolean", "required": false }, "accruedInterest": { "type": "number", "required": false }, "number": { "type": "string", "maxLength": 4, "required": false }, "principalAmount": { "type": "number", "required": false }, "currentInvestmentValue": { "type": "number", "required": false }, "legalEntityId": { "type": "string", "pattern": "^[a-zA-Z0-9_.-]*$", "required": true }, "productId": { "type": "string", "pattern": "^[a-zA-Z0-9_.-]*$", "required": true }, "productNumber": { "type": "string", "required": false }, "accountOpeningDate": { "type": "string", "required": false }, "accountInterestRate": { "type": "number", "required": false }, "valueDateBalance": { "type": "number", "required": false }, "overdraftAmount": { "type": "number", "required": false }, "overdraftInterestRate": { "type": "number", "required": false }, "overdraftExpiryDate": { "type": "string", "format": "date-time", "required": false }, "overdraftLimit": { "type": "number", "required": false }, "BIC": { "type": "string", "required": false }, "bankBranchCode": { "type": "string", "required": false }, "startDate": { "type": "string", "format": "date-time", "required": false }, "term": { "type": "string", "required": false }, "maturityDate": { "type": "string", "format": "date-time", "required": false }, "maturityAmount": { "type": "number", "required": false }, "autoRenevalIndicator": { "type": "boolean", "required": false }, "interestPaymentFrequency": { "type": "number", "required": false }, "interestSettlementAccount": { "type": "string", "required": false }, "outstandingPrincipal": { "type": "number", "required": false }, "monthlyInstalmentAmount": { "type": "number", "required": false }, "amountInArrear": { "type": "number", "required": false }, "minimumRequiredBalance": { "type": "number", "required": false }, "creditCardAccountNumber": { "type": "string", "maxLength": 19, "required": false }, "validThru": { "type": "string", "format": "date-time", "required": false }, "applicableInterestRate": { "type": "number", "required": false }, "remainingCredit": { "type": "number", "required": false }, "outstandingPayment": { "type": "number", "required": false }, "minimumPayment": { "type": "number", "required": false }, "minimumPaymentDueDate": { "type": "string", "format": "date-time", "required": false }, "totalInvestmentValue": { "type": "number", "required": false }, "debitCard": { "type": "array", "items": { "properties": { "number": { "type": "string", "maxLength": 4, "required": false }, "expiryDate": { "type": "string", "required": false } } }, "uniqueItems": true, "required": false }, "visible": { "type": "boolean", "required": false } } };
	
	    definedTypes['ArrangementsData.BalanceItem'] = { "type": "array", "items": { "properties": { "arrangementId": { "type": "string", "pattern": "^[a-zA-Z0-9_.-]*$", "required": true }, "bookedBalance": { "type": "number", "required": true }, "availableBalance": { "type": "number", "required": true } } } };
	
	    definedTypes['ArrangementsData.ArrangementAddedResponse'] = { "properties": { "id": { "type": "string", "required": true } } };
	
	    definedTypes['ArrangementsData.ArrangementPatch'] = { "properties": { "id": { "type": "string", "required": true }, "alias": { "type": "string", "maxLength": 64, "required": false }, "visible": { "type": "boolean", "required": false } } };
	
	    /**
	     * @typedef ArrangementsData.ArrangemenItemUpdateBank
	     * @type {Object}
	     * @property {?String} name
	     * @property {?Number} bookedBalance
	     * @property {?Number} availableBalance
	     * @property {?Number} creditLimit
	     * @property {?String} IBAN
	     * @property {?String} BBAN
	     * @property {String} currency
	     * @property {?Boolean} externalTransferAllowed
	     * @property {?Boolean} urgentTransferAllowed
	     * @property {?Number} accruedInterest
	     * @property {?String} number
	     * @property {?Number} principalAmount
	     * @property {?Number} currentInvestmentValue
	     * @property {?String} productNumber
	     * @property {?String} BIC
	     * @property {?String} bankBranchCode
	     * @property {String} externalArrangementId
	     * @property {?Object} additions Container object for custom API extensions
	     */
	
	    /**
	     * @typedef ArrangementsData.ArrangementAddedResponse
	     * @type {Object}
	     * @property {String} id Internally used unique identification
	     * @property {?Object} additions Container object for custom API extensions
	     */
	
	    /**
	     * @typedef ArrangementsData.ArrangementItemPost
	     * @type {Object}
	     * @property {String} externalLegalEntityId
	     * @property {String} externalProductId
	     * @property {?String} alias
	     * @property {String} legalEntityId
	     * @property {?String} productId
	     * @property {?Object} additions Container object for custom API extensions
	     */
	
	    /**
	     * @typedef ArrangementsData.ArrangementItemWithDetails
	     * @type {Object}
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
	     * @property {String} legalEntityId
	     * @property {String} productId
	     * @property {?String} productNumber
	     * @property {?String} accountOpeningDate
	     * @property {?Number} accountInterestRate
	     * @property {?Number} valueDateBalance
	     * @property {?Number} overdraftAmount
	     * @property {?Number} overdraftInterestRate
	     * @property {?String} overdraftExpiryDate
	     * @property {?Number} overdraftLimit
	     * @property {?String} BIC
	     * @property {?String} bankBranchCode
	     * @property {?String} startDate
	     * @property {?String} term
	     * @property {?String} maturityDate
	     * @property {?Number} maturityAmount
	     * @property {?Boolean} autoRenevalIndicator
	     * @property {?Number} interestPaymentFrequency
	     * @property {?String} interestSettlementAccount
	     * @property {?Number} outstandingPrincipal
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
	     * @property {?Array.<ArrangementsData.DebitCardItem>} debitCard
	     * @property {?Boolean} visible User specific visibility for an arrangement
	     * @property {?Object} additions Container object for custom API extensions
	     */
	
	    /**
	     * @typedef ArrangementsData.ArrangementPatch
	     * @type {Object}
	     * @property {String} id Internally used unique identification of arrangement
	     * @property {?String} alias User specific naming for an arrangement
	     * @property {?Boolean} visible User specific visibility for an arrangement
	     * @property {?Object} additions Container object for custom API extensions
	     */
	
	    /**
	     * @typedef ArrangementsData.BalanceItem
	     * @type {Array.<ArrangementsData.BalanceItem>}
	     */
	
	    /**
	     * @typedef ArrangementsData.DebitCardItem
	     * @type {Object}
	     * @property {?String} number
	     * @property {?String} expiryDate
	     * @property {?Object} additions Container object for custom API extensions
	     */
	
	    /*
	     * @name parse
	     * @type {Function}
	     * @private
	     * @description Should be overitten by transformRespone on a project level
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
	    * @name ArrangementsData#postArrangementsRecord
	    * @type {Function}
	    * @description Create arrangement
	    
	    * @param {ArrangementsData.ArrangementItemPost} data Data to be sent as the request message data.
	      
	    
	    * @returns {Promise.<Response>} Resolves data value as {@link ArrangementsData.ArrangementAddedResponse} on success 
	    *
	    * @example
	    * arrangementsData
	    *  .postArrangementsRecord(data)
	    *  .then(function(result){
	    *    console.log('headers', result.headers)
	    *    console.log('data', result.data);
	    *  });
	    */
	    function postArrangementsRecord(data) {
	      var url = '' + baseUri + version + '/arrangements';
	
	      return httpClient({
	        method: 'POST',
	        url: url,
	
	        data: data
	
	      }).then(parse).catch(function (err) {
	        throw parse(err);
	      });
	    }
	
	    /**
	    * @name ArrangementsData#putArrangementsRecord
	    * @type {Function}
	    * @description Update arrangement by an arrangement id
	    
	    * @param {ArrangementsData.ArrangemenItemUpdateBank} data Data to be sent as the request message data.
	      
	    
	    * @returns {Promise.<Response>}
	    *
	    * @example
	    * arrangementsData
	    *  .putArrangementsRecord(data)
	    *  .then(function(result){
	    *    console.log('headers', result.headers)
	    *    console.log('data', result.data);
	    *  });
	    */
	    function putArrangementsRecord(data) {
	      var url = '' + baseUri + version + '/arrangements';
	
	      return httpClient({
	        method: 'PUT',
	        url: url,
	
	        data: data
	
	      }).then(parse).catch(function (err) {
	        throw parse(err);
	      });
	    }
	
	    /**
	    * @name ArrangementsData#patchArrangementsRecord
	    * @type {Function}
	    * @description Updates limited set of fields for an arrangement by an arrangement id
	    
	    * @param {ArrangementsData.ArrangementPatch} data Data to be sent as the request message data.
	      
	    
	    * @returns {Promise.<Response>}
	    *
	    * @example
	    * arrangementsData
	    *  .patchArrangementsRecord(data)
	    *  .then(function(result){
	    *    console.log('headers', result.headers)
	    *    console.log('data', result.data);
	    *  });
	    */
	    function patchArrangementsRecord(data) {
	      var url = '' + baseUri + version + '/arrangements';
	
	      return httpClient({
	        method: 'PATCH',
	        url: url,
	
	        data: data
	
	      }).then(parse).catch(function (err) {
	        throw parse(err);
	      });
	    }
	
	    /**
	    * @name ArrangementsData#getArrangementsInternalRecord
	    * @type {Function}
	    * @description Retrieve Internal Arrangement Id for External Id.
	    
	    * @param {string} externalId 
	      
	    
	    * @param {Object} params Map of query parameters.
	      
	    
	    * @returns {Promise.<Response>}
	    *
	    * @example
	    * arrangementsData
	    *  .getArrangementsInternalRecord(externalId, params)
	    *  .then(function(result){
	    *    console.log('headers', result.headers)
	    *    console.log('data', result.data);
	    *  });
	    */
	    function getArrangementsInternalRecord(externalId, params) {
	      var url = '' + baseUri + version + '/arrangements/internal/' + externalId;
	
	      return httpClient({
	        method: 'GET',
	        url: url,
	
	        params: params
	
	      }).then(parse).catch(function (err) {
	        throw parse(err);
	      });
	    }
	
	    /**
	    * @name ArrangementsData#getArrangementsRecord
	    * @type {Function}
	    * @description Retrieve a single arrangement with details.
	    
	    * @param {string} id 
	      
	    
	    * @param {Object} params Map of query parameters.
	      
	    
	    * @returns {Promise.<Response>} Resolves data value as {@link ArrangementsData.ArrangementItemWithDetails} on success 
	    *
	    * @example
	    * arrangementsData
	    *  .getArrangementsRecord(id, params)
	    *  .then(function(result){
	    *    console.log('headers', result.headers)
	    *    console.log('data', result.data);
	    *  });
	    */
	    function getArrangementsRecord(id, params) {
	      var url = '' + baseUri + version + '/arrangements/' + id;
	
	      return httpClient({
	        method: 'GET',
	        url: url,
	
	        params: params
	
	      }).then(parse).catch(function (err) {
	        throw parse(err);
	      });
	    }
	
	    /**
	    * @name ArrangementsData#getAccountsBalance
	    * @type {Function}
	    * @description Retrieve balance by ArrangementIds
	    
	    * @param {Object} params Map of query parameters.
	      
	    * @param {string} params.arrangementIds arrangementIds.
	      
	    
	    * @returns {Promise.<Response>} Resolves data value as {@link ArrangementsData.BalanceItem} on success 
	    *
	    * @example
	    * arrangementsData
	    *  .getAccountsBalance(params)
	    *  .then(function(result){
	    *    console.log('headers', result.headers)
	    *    console.log('data', result.data);
	    *  });
	    */
	    function getAccountsBalance(params) {
	      var url = '' + baseUri + version + '/accounts/balance';
	
	      return httpClient({
	        method: 'GET',
	        url: url,
	
	        params: params
	
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
	     * @name ArrangementsData#schemas
	     * @type {Object}
	     */
	    var schemas = {};
	
	    /**
	     * @description
	     * An object describing the JSON schema for the postArrangementsRecord method
	     *
	     * @name ArrangementsData#schemas.postArrangementsRecord
	     * @type {Object}
	     * @example
	     * {
	    "properties": {
	      "externalLegalEntityId": {
	        "type": "string",
	        "pattern": "^[a-zA-Z0-9_.-]*$",
	        "required": true
	      },
	      "externalProductId": {
	        "type": "string",
	        "pattern": "^[a-zA-Z0-9_.-]*$",
	        "required": true
	      },
	      "alias": {
	        "type": "string",
	        "maxLength": 64,
	        "required": false
	      },
	      "legalEntityId": {
	        "type": "string",
	        "pattern": "^[a-zA-Z0-9_.-]*$",
	        "required": true
	      },
	      "productId": {
	        "type": "string",
	        "pattern": "^[a-zA-Z0-9_.-]*$",
	        "required": false
	      }
	    }
	    }
	     */
	
	    schemas.postArrangementsRecord = definedTypes['ArrangementsData.ArrangementItemPost'];
	
	    /**
	     * @description
	     * An object describing the JSON schema for the putArrangementsRecord method
	     *
	     * @name ArrangementsData#schemas.putArrangementsRecord
	     * @type {Object}
	     * @example
	     * {
	    "properties": {
	      "name": {
	        "type": "string",
	        "pattern": "^[a-zA-Z0-9 _.-]*$",
	        "required": false
	      },
	      "bookedBalance": {
	        "type": "number",
	        "required": false
	      },
	      "availableBalance": {
	        "type": "number",
	        "required": false
	      },
	      "creditLimit": {
	        "type": "number",
	        "required": false
	      },
	      "IBAN": {
	        "type": "string",
	        "maxLength": 34,
	        "pattern": "^(AF|AX|AL|DZ|AS|AD|AO|AI|AQ|AG|AR|AM|AW|AU|AT|AZ|BS|BH|BD|BB|BY|BE|BZ|BJ|BM|BT|BO|BQ|BA|BW|BV|BR|IO|BN|BG|BF|BI|KH|CM|CA|CV|KY|CF|TD|CL|CN|CX|CC|CO|KM|CG|CD|CK|CR|CI|HR|CU|CW|CY|CZ|DK|DJ|DM|DO|EC|EG|SV|GQ|ER|EE|ET|FK|FO|FJ|FI|FR|GF|PF|TF|GA|GM|GE|DE|GH|GI|GR|GL|GD|GP|GU|GT|GG|GN|GW|GY|HT|HM|VA|HN|HK|HU|IS|IN|ID|IR|IQ|IE|IM|IL|IT|JM|JP|JE|JO|KZ|KE|KI|KP|KR|KW|KG|LA|LV|LB|LS|LR|LY|LI|LT|LU|MO|MK|MG|MW|MY|MV|ML|MT|MH|MQ|MR|MU|YT|MX|FM|MD|MC|MN|ME|MS|MA|MZ|MM|NA|NR|NP|NL|NC|NZ|NI|NE|NG|NU|NF|MP|NO|OM|PK|PW|PS|PA|PG|PY|PE|PH|PN|PL|PT|PR|QA|RE|RO|RU|RW|BL|SH|KN|LC|MF|PM|VC|WS|SM|ST|SA|SN|RS|SC|SL|SG|SX|SK|SI|SB|SO|ZA|GS|SS|ES|LK|SD|SR|SJ|SZ|SE|CH|SY|TW|TJ|TZ|TH|TL|TG|TK|TO|TT|TN|TR|TM|TC|TV|UG|UA|AE|GB|US|UM|UY|UZ|VU|VE|VN|VG|VI|WF|EH|YE|ZM|ZW)[a-zA-Z0-9_.-]*",
	        "required": false
	      },
	      "BBAN": {
	        "type": "string",
	        "maxLength": 30,
	        "required": false
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
	      "externalTransferAllowed": {
	        "type": "boolean",
	        "required": false
	      },
	      "urgentTransferAllowed": {
	        "type": "boolean",
	        "required": false
	      },
	      "accruedInterest": {
	        "type": "number",
	        "required": false
	      },
	      "number": {
	        "type": "string",
	        "maxLength": 4,
	        "required": false
	      },
	      "principalAmount": {
	        "type": "number",
	        "required": false
	      },
	      "currentInvestmentValue": {
	        "type": "number",
	        "minimum": 0,
	        "required": false
	      },
	      "productNumber": {
	        "type": "string",
	        "required": false
	      },
	      "BIC": {
	        "type": "string",
	        "required": false
	      },
	      "bankBranchCode": {
	        "type": "string",
	        "required": false
	      },
	      "externalArrangementId": {
	        "type": "string",
	        "pattern": "^[a-zA-Z0-9_.-]*$",
	        "required": true
	      }
	    }
	    }
	     */
	
	    schemas.putArrangementsRecord = definedTypes['ArrangementsData.ArrangemenItemUpdateBank'];
	
	    /**
	     * @typedef Response
	     * @type {Object}
	     * @property {Object} data See method descriptions for possible return types
	     * @property {Function} headers Getter headers function
	     * @property {Number} status HTTP status code of the response.
	     * @property {String} statusText HTTP status text of the response.
	     */
	
	    return {
	
	      postArrangementsRecord: postArrangementsRecord,
	
	      putArrangementsRecord: putArrangementsRecord,
	
	      patchArrangementsRecord: patchArrangementsRecord,
	
	      getArrangementsInternalRecord: getArrangementsInternalRecord,
	
	      getArrangementsRecord: getArrangementsRecord,
	
	      getAccountsBalance: getAccountsBalance,
	
	      schemas: schemas
	    };
	  };
	};

/***/ })
/******/ ])
});
;
//# sourceMappingURL=data-bb-arrangements-http-ng.js.map