(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vendor-bb-angular"), require("lib-bb-challenge-ng"));
	else if(typeof define === 'function' && define.amd)
		define("data-bb-payment-orders-http-ng", ["vendor-bb-angular", "lib-bb-challenge-ng"], factory);
	else if(typeof exports === 'object')
		exports["data-bb-payment-orders-http-ng"] = factory(require("vendor-bb-angular"), require("lib-bb-challenge-ng"));
	else
		root["data-bb-payment-orders-http-ng"] = factory(root["vendor-bb-angular"], root["lib-bb-challenge-ng"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_3__) {
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
	exports.paymentOrdersDataKey = undefined;
	
	var _vendorBbAngular = __webpack_require__(2);
	
	var _vendorBbAngular2 = _interopRequireDefault(_vendorBbAngular);
	
	var _libBbChallengeNg = __webpack_require__(3);
	
	var _libBbChallengeNg2 = _interopRequireDefault(_libBbChallengeNg);
	
	var _dataBbPaymentOrdersHttp = __webpack_require__(4);
	
	var _dataBbPaymentOrdersHttp2 = _interopRequireDefault(_dataBbPaymentOrdersHttp);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var paymentOrdersDataModuleKey = 'data-bb-payment-orders-http-ng';
	/**
	 * @name paymentOrdersDataKey
	 * @type {string}
	 * @description Angular dependency injection key for the PaymentOrdersData service
	 */
	/* eslint-disable */
	/**
	 * @module data-bb-payment-orders-http-ng
	 *
	 * @description A data module for accessing the Payment Orders REST API.
	 *
	 * @returns {String} `data-bb-payment-orders-http-ng`
	 * @example
	 * import paymentOrdersDataModuleKey, {
	 *   paymentOrdersDataKey,
	 * } from 'data-bb-payment-orders-http-ng';
	 */
	
	var paymentOrdersDataKey = exports.paymentOrdersDataKey = 'data-bb-payment-orders-http-ng:paymentOrdersData';
	/**
	 * @name default
	 * @type {string}
	 * @description Angular dependency injection module key
	 */
	exports.default = _vendorBbAngular2.default.module(paymentOrdersDataModuleKey, [_libBbChallengeNg2.default]).config(['$httpProvider', function ($httpProvider) {
	  $httpProvider.interceptors.push(_libBbChallengeNg.bbChallengeKey);
	}])
	
	/**
	 * @constructor PaymentOrdersData
	 * @type {object}
	 *
	 * @description Public api for data-bb-payment-orders-http-ng service
	 *
	 */
	.provider(paymentOrdersDataKey, [function () {
	  var config = {
	    baseUri: '/'
	  };
	
	  /**
	   * @name PaymentOrdersDataProvider
	   * @type {object}
	   * @ngkey data-bb-payment-orders-http-ng:paymentOrdersDataProvider
	   * @description
	   * Data service that can be configured with custom base URI.
	   *
	   * @example
	   * // Configuring in an angular app:
	   * angular.module(...)
	   *   .config(['data-bb-payment-orders-http-ng:paymentOrdersDataProvider',
	   *     (dataProvider) => {
	   *       dataProvider.setBaseUri('http://my-service.com/');
	   *       });
	   *
	   * // Configuring With config-bb-providers-ng:
	   * export default [
	   *   ['data-bb-payment-orders-http-ng:paymentOrdersDataProvider', (dataProvider) => {
	   *       dataProvider.setBaseUri('http://my-service.com/');
	   *   }]
	   * ];
	   */
	  return {
	    /**
	     * @name PaymentOrdersDataProvider#setBaseUri
	     * @type {function}
	     * @param {string} baseUri Base URI which will be the prefix for all HTTP requests
	     */
	    setBaseUri: function setBaseUri(baseUri) {
	      config.baseUri = baseUri;
	    },
	
	    /**
	     * @name PaymentOrdersDataProvider#$get
	     * @type {function}
	     * @return {object} An instance of the service
	     */
	    $get: ['$http', '$httpParamSerializer',
	    /* into */
	    (0, _dataBbPaymentOrdersHttp2.default)(config)]
	  };
	}]).name;

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
	
	    definedTypes['PaymentOrdersData.PaymentOrders-POST'] = { "properties": { "debtorAccount": { "type": "object", "properties": { "identification": { "type": "object", "properties": { "identification": { "type": "string", "maxLength": 36, "required": true }, "schemeName": { "type": "string", "enum": ["IBAN", "BBAN", "ID"], "required": true } }, "required": true }, "name": { "type": "string", "maxLength": 140, "required": false } }, "required": true }, "batchBooking": { "type": "boolean", "default": false, "required": false }, "instructionPriority": { "type": "string", "enum": ["NORM", "HIGH"], "default": "NORM", "required": false }, "requestedExecutionDate": { "type": "string", "format": "date-time", "required": true }, "paymentMode": { "type": "string", "enum": ["SINGLE", "RECURRING"], "default": "SINGLE", "required": false }, "schedule": { "type": "object", "properties": { "nonWorkingDayExecutionStrategy": { "type": "string", "enum": ["BEFORE", "AFTER", "NONE"], "required": false }, "transferFrequency": { "type": "string", "enum": ["ONCE", "DAILY", "WEEKLY", "MONTHLY", "QUARTERLY", "YEARLY"], "required": true }, "on": { "type": "integer", "required": true }, "startDate": { "type": "string", "format": "date-time", "required": true }, "endDate": { "type": "string", "format": "date-time", "required": false }, "repeat": { "type": "integer", "required": false }, "every": { "type": "integer", "enum": [1, 2], "required": true }, "nextExecutionDate": { "type": "string", "format": "date-time", "required": false } }, "required": false }, "creditTransferTransactionInformation": { "type": "array", "items": { "properties": { "instructedAmount": { "type": "object", "properties": { "amount": { "type": "string", "required": true }, "currencyCode": { "type": "string", "pattern": "^[A-Z]{3}$", "required": true } }, "required": true }, "creditor": { "type": "object", "properties": { "name": { "type": "string", "maxLength": 140, "required": true }, "postalAddress": { "type": "object", "properties": { "addressLine1": { "type": "string", "maxLength": 70, "required": false }, "addressLine2": { "type": "string", "maxLength": 70, "required": false }, "streetName": { "type": "string", "maxLength": 70, "required": false }, "postCode": { "type": "string", "maxLength": 16, "required": false }, "town": { "type": "string", "maxLength": 35, "required": false }, "countrySubDivision": { "type": "string", "maxLength": 35, "required": false }, "country": { "type": "string", "maxLength": 2, "required": false } }, "required": false } }, "required": true }, "creditorAccount": { "type": "object", "properties": { "identification": { "type": "object", "properties": { "identification": { "type": "string", "maxLength": 36, "required": true }, "schemeName": { "type": "string", "enum": ["IBAN", "BBAN", "ID"], "required": true } }, "required": true }, "name": { "type": "string", "maxLength": 140, "required": false } }, "required": true }, "remittanceInformation": { "type": "string", "maxLength": 140, "required": false }, "endToEndIdentification": { "type": "string", "maxLength": 35, "required": false } } }, "minItems": 1, "maxItems": 1, "required": true } } };
	
	    definedTypes['PaymentOrdersData.PaymentOrders-POST-Response'] = { "properties": { "id": { "type": "string", "required": true }, "status": { "type": "string", "enum": ["ENTERED", "READY", "ACCEPTED", "PROCESSED", "REJECTED"], "required": true } } };
	
	    definedTypes['PaymentOrdersData.PaymentOrder-GET'] = { "properties": {} };
	
	    definedTypes['PaymentOrdersData.PaymentOrders-GET'] = { "type": "array", "items": { "properties": { "id": { "type": "string", "pattern": "^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-5][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}$", "required": true }, "paymentSetupId": { "type": "string", "maxLength": 128, "required": false }, "paymentSubmissionId": { "type": "string", "maxLength": 128, "required": false }, "debtor": { "type": "object", "properties": { "name": { "type": "string", "maxLength": 140, "required": true }, "postalAddress": { "type": "object", "properties": { "addressLine1": { "type": "string", "maxLength": 70, "required": false }, "addressLine2": { "type": "string", "maxLength": 70, "required": false }, "streetName": { "type": "string", "maxLength": 70, "required": false }, "postCode": { "type": "string", "maxLength": 16, "required": false }, "town": { "type": "string", "maxLength": 35, "required": false }, "countrySubDivision": { "type": "string", "maxLength": 35, "required": false }, "country": { "type": "string", "maxLength": 2, "required": false } }, "required": false } }, "required": false }, "debtorAccount": { "type": "object", "properties": { "arrangementId": { "type": "string", "minLength": 1, "maxLength": 36, "required": true } }, "required": true }, "batchBooking": { "type": "boolean", "default": false, "required": false }, "instructionPriority": { "type": "string", "enum": ["NORM", "HIGH"], "default": "NORM", "required": false }, "requestedExecutionDate": { "type": "string", "format": "date-time", "required": true }, "paymentMode": { "type": "string", "enum": ["SINGLE", "RECURRING"], "default": "SINGLE", "required": false }, "schedule": { "type": "object", "properties": { "nonWorkingDayExecutionStrategy": { "type": "string", "enum": ["BEFORE", "AFTER", "NONE"], "required": false }, "transferFrequency": { "type": "string", "enum": ["ONCE", "DAILY", "WEEKLY", "MONTHLY", "QUARTERLY", "YEARLY"], "required": true }, "on": { "type": "integer", "required": true }, "startDate": { "type": "string", "format": "date-time", "required": true }, "endDate": { "type": "string", "format": "date-time", "required": false }, "repeat": { "type": "integer", "required": false }, "every": { "type": "integer", "enum": [1, 2], "required": true }, "nextExecutionDate": { "type": "string", "format": "date-time", "required": false } }, "required": false }, "creditTransferTransactionInformation": { "type": "array", "items": { "properties": { "instructedAmount": { "type": "object", "properties": { "amount": { "type": "string", "required": true }, "currencyCode": { "type": "string", "pattern": "^[A-Z]{3}$", "required": true } }, "required": true }, "creditor": { "type": "object", "properties": { "name": { "type": "string", "maxLength": 140, "required": true }, "postalAddress": { "type": "object", "properties": { "addressLine1": { "type": "string", "maxLength": 70, "required": false }, "addressLine2": { "type": "string", "maxLength": 70, "required": false }, "streetName": { "type": "string", "maxLength": 70, "required": false }, "postCode": { "type": "string", "maxLength": 16, "required": false }, "town": { "type": "string", "maxLength": 35, "required": false }, "countrySubDivision": { "type": "string", "maxLength": 35, "required": false }, "country": { "type": "string", "maxLength": 2, "required": false } }, "required": false } }, "required": true }, "creditorAccount": { "type": "object", "properties": {}, "required": true }, "remittanceInformation": { "type": "object", "properties": { "type": { "type": "string", "enum": ["STRUCTURED", "UNSTRUCTURED"], "default": "UNSTRUCTURED", "required": true }, "content": { "type": "string", "maxLength": 140, "required": true } }, "required": false }, "endToEndIdentification": { "type": "string", "maxLength": 35, "required": false } } }, "minItems": 1, "maxItems": 1, "required": true }, "totalAmount": { "type": "object", "properties": { "amount": { "type": "string", "required": true }, "currencyCode": { "type": "string", "pattern": "^[A-Z]{3}$", "required": true } }, "required": false }, "status": { "type": "string", "enum": ["ENTERED", "READY", "ACCEPTED", "PROCESSED", "REJECTED"], "required": true }, "bankStatus": { "type": "string", "maxLength": 35, "required": false }, "reasonCode": { "type": "string", "maxLength": 4, "required": false }, "reasonText": { "type": "string", "maxLength": 35, "required": false }, "errorDescription": { "type": "string", "maxLength": 105, "required": false }, "createdBy": { "type": "string", "maxLength": 128, "required": false }, "createdAt": { "type": "string", "format": "date-time", "required": false } } } };
	
	    definedTypes['PaymentOrdersData.UpdateStatus-PUT'] = { "properties": { "bankReferenceId": { "type": "string", "maxLength": 64, "required": true }, "status": { "type": "string", "enum": ["ENTERED", "READY", "ACCEPTED", "PROCESSED", "REJECTED"], "required": true }, "bankStatus": { "type": "string", "maxLength": 35, "required": true }, "reasonCode": { "type": "string", "maxLength": 4, "required": false }, "reasonText": { "type": "string", "maxLength": 35, "required": false }, "errorDescription": { "type": "string", "maxLength": 105, "required": false }, "paymentSetupId": { "type": "string", "maxLength": 128, "required": false }, "paymentSubmissionId": { "type": "string", "maxLength": 128, "required": false } } };
	
	    definedTypes['PaymentOrdersData.RetryOrdersRequest'] = { "properties": { "selectionMaxSize": { "type": "number", "required": false }, "untilDate": { "type": "string", "format": "date-time", "required": false } } };
	
	    definedTypes['PaymentOrdersData.RetryOrdersResponse'] = { "properties": { "successCount": { "type": "number", "required": false }, "failCount": { "type": "number", "required": false } } };
	
	    definedTypes['PaymentOrdersData.Currencies-GET'] = { "type": "array", "items": { "properties": { "code": { "type": "string", "pattern": "^[A-Z]{3}$", "required": true } } } };
	
	    definedTypes['PaymentOrdersData.Rate-GET'] = { "properties": { "rate": { "type": "number", "required": true } } };
	
	    definedTypes['PaymentOrdersData.BreachReportError'] = { "properties": { "message": { "type": "string", "required": true }, "payment": { "type": "object", "properties": { "id": { "type": "string", "pattern": "^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-5][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}$", "required": true }, "paymentSetupId": { "type": "string", "maxLength": 128, "required": false }, "paymentSubmissionId": { "type": "string", "maxLength": 128, "required": false }, "debtor": { "type": "object", "properties": { "name": { "type": "string", "maxLength": 140, "required": true }, "postalAddress": { "type": "object", "properties": { "addressLine1": { "type": "string", "maxLength": 70, "required": false }, "addressLine2": { "type": "string", "maxLength": 70, "required": false }, "streetName": { "type": "string", "maxLength": 70, "required": false }, "postCode": { "type": "string", "maxLength": 16, "required": false }, "town": { "type": "string", "maxLength": 35, "required": false }, "countrySubDivision": { "type": "string", "maxLength": 35, "required": false }, "country": { "type": "string", "maxLength": 2, "required": false } }, "required": false } }, "required": false }, "debtorAccount": { "type": "object", "properties": { "arrangementId": { "type": "string", "minLength": 1, "maxLength": 36, "required": true } }, "required": true }, "batchBooking": { "type": "boolean", "default": false, "required": false }, "instructionPriority": { "type": "string", "enum": ["NORM", "HIGH"], "default": "NORM", "required": false }, "requestedExecutionDate": { "type": "string", "format": "date-time", "required": true }, "paymentMode": { "type": "string", "enum": ["SINGLE", "RECURRING"], "default": "SINGLE", "required": false }, "schedule": { "type": "object", "properties": { "nonWorkingDayExecutionStrategy": { "type": "string", "enum": ["BEFORE", "AFTER", "NONE"], "required": false }, "transferFrequency": { "type": "string", "enum": ["ONCE", "DAILY", "WEEKLY", "MONTHLY", "QUARTERLY", "YEARLY"], "required": true }, "on": { "type": "integer", "required": true }, "startDate": { "type": "string", "format": "date-time", "required": true }, "endDate": { "type": "string", "format": "date-time", "required": false }, "repeat": { "type": "integer", "required": false }, "every": { "type": "integer", "enum": [1, 2], "required": true }, "nextExecutionDate": { "type": "string", "format": "date-time", "required": false } }, "required": false }, "creditTransferTransactionInformation": { "type": "array", "items": { "properties": { "instructedAmount": { "type": "object", "properties": { "amount": { "type": "string", "required": true }, "currencyCode": { "type": "string", "pattern": "^[A-Z]{3}$", "required": true } }, "required": true }, "creditor": { "type": "object", "properties": { "name": { "type": "string", "maxLength": 140, "required": true }, "postalAddress": { "type": "object", "properties": { "addressLine1": { "type": "string", "maxLength": 70, "required": false }, "addressLine2": { "type": "string", "maxLength": 70, "required": false }, "streetName": { "type": "string", "maxLength": 70, "required": false }, "postCode": { "type": "string", "maxLength": 16, "required": false }, "town": { "type": "string", "maxLength": 35, "required": false }, "countrySubDivision": { "type": "string", "maxLength": 35, "required": false }, "country": { "type": "string", "maxLength": 2, "required": false } }, "required": false } }, "required": true }, "creditorAccount": { "type": "object", "properties": {}, "required": true }, "remittanceInformation": { "type": "object", "properties": { "type": { "type": "string", "enum": ["STRUCTURED", "UNSTRUCTURED"], "default": "UNSTRUCTURED", "required": true }, "content": { "type": "string", "maxLength": 140, "required": true } }, "required": false }, "endToEndIdentification": { "type": "string", "maxLength": 35, "required": false } } }, "minItems": 1, "maxItems": 1, "required": true }, "totalAmount": { "type": "object", "properties": { "amount": { "type": "string", "required": true }, "currencyCode": { "type": "string", "pattern": "^[A-Z]{3}$", "required": true } }, "required": false }, "status": { "type": "string", "enum": ["ENTERED", "READY", "ACCEPTED", "PROCESSED", "REJECTED"], "required": true }, "bankStatus": { "type": "string", "maxLength": 35, "required": false }, "reasonCode": { "type": "string", "maxLength": 4, "required": false }, "reasonText": { "type": "string", "maxLength": 35, "required": false }, "errorDescription": { "type": "string", "maxLength": 105, "required": false }, "createdBy": { "type": "string", "maxLength": 128, "required": false }, "createdAt": { "type": "string", "format": "date-time", "required": false } }, "required": false }, "checkTime": { "type": "string", "format": "date-time", "required": false }, "breachReport": { "type": "array", "items": { "properties": { "limitedEntity": { "type": "array", "items": { "properties": { "ref": { "type": "string", "required": true }, "type": { "type": "string", "required": true }, "description": { "type": "string", "required": true } } }, "required": false }, "shadow": { "type": "boolean", "required": false }, "currency": { "type": "string", "required": false }, "user-BBID": { "type": "string", "required": false }, "breachInfo": { "type": "array", "items": { "properties": { "breachType": { "type": "string", "enum": ["THRESHOLD", "CONSUMPTION"], "required": true }, "timeframe": { "type": "object", "properties": { "period": { "type": "string", "required": true }, "startTime": { "type": "string", "format": "date-time", "required": true }, "endTime": { "type": "string", "format": "date-time", "required": true } }, "required": true }, "currentConsumption": { "type": "string", "required": true }, "currentThreshold": { "type": "string", "required": true } } }, "required": true } } }, "required": false } } };
	
	    definedTypes['PaymentOrdersData.Unauthorized-Error'] = { "properties": { "message": { "type": "string", "required": true } } };
	
	    /**
	     * @typedef PaymentOrdersData.AccountIdentification
	     * @type {Object}
	     * @property {PaymentOrdersData.identification} identification
	     * @property {?String} name This is the name of the account, and not the name of the account holder.
	     * @property {?Object} additions Container object for custom API extensions
	     */
	
	    /**
	     * @typedef PaymentOrdersData.BreachReportError
	     * @type {Object}
	     * @property {String} message
	     * @property {?PaymentOrdersData.IdentifiedPaymentOrder} payment
	     * @property {?String} checkTime
	     * @property {?Array.<PaymentOrdersData.BreachReportItem>} breachReport
	     * @property {?Object} additions Container object for custom API extensions
	     */
	
	    /**
	     * @typedef PaymentOrdersData.BreachReportItem
	     * @type {Object}
	     * @property {?Array.<PaymentOrdersData.Definitions/EntityDescription>} limitedEntity When not set, user-BBID must be set
	     * @property {?Boolean} shadow Shadow limit flag. Applicable for certain entity-types
	     * @property {?String} currency Currency code
	     * @property {?String} user-BBID BBID of the user for whom the personal limit is assigned
	     * @property {Array.<PaymentOrdersData.Definitions/BreachInfo>} breachInfo List of breached periodic limits related to a particular limitable entity
	     * @property {?Object} additions Container object for custom API extensions
	     */
	
	    /**
	     * @typedef PaymentOrdersData.Currencies-GET
	     * @type {Array.<PaymentOrdersData.Currency>}
	     */
	
	    /**
	     * @typedef PaymentOrdersData.Currency
	     * @type {Object}
	     * @property {String} amount The amount in the specified currency
	     * @property {String} currencyCode The alpha-3 code (complying with ISO 4217) of the currency that qualifies the amount
	     * @property {?Object} additions Container object for custom API extensions
	     */
	
	    /**
	     * @typedef PaymentOrdersData.DebtorAccount
	     * @type {Object}
	     * @property {String} arrangementId
	     * @property {?Object} additions Container object for custom API extensions
	     */
	
	    /**
	     * @typedef PaymentOrdersData.Definitions/BreachInfo
	     * @type {Object}
	     * @property {String} breachType One of "THRESHOLD", "CONSUMPTION"
	     * @property {PaymentOrdersData.Definitions/TimeFrame} timeframe
	     * @property {String} currentConsumption
	     * @property {String} currentThreshold
	     * @property {?Object} additions Container object for custom API extensions
	     */
	
	    /**
	     * @typedef PaymentOrdersData.Definitions/EntityDescription
	     * @type {Object}
	     * @property {String} ref
	     * @property {String} type
	     * @property {String} description
	     * @property {?Object} additions Container object for custom API extensions
	     */
	
	    /**
	     * @typedef PaymentOrdersData.Definitions/TimeFrame
	     * @type {Object}
	     * @property {String} period
	     * @property {String} startTime
	     * @property {String} endTime
	     * @property {?Object} additions Container object for custom API extensions
	     */
	
	    /**
	     * @typedef PaymentOrdersData.Definitions/remittanceInformation
	     * @type {Object}
	     * @property {String} type One of "STRUCTURED", "UNSTRUCTURED"
	     * @property {String} content The content of the remittance information.
	     * @property {?Object} additions Container object for custom API extensions
	     */
	
	    /**
	     * @typedef PaymentOrdersData.IdentifiedCreditTransaction
	     * @type {Object}
	     * @property {PaymentOrdersData.Currency} instructedAmount
	     * @property {PaymentOrdersData.InvolvedParty} creditor
	     * @property {Object} creditorAccount The identified creditor account with arrangement id when applicable.
	     * @property {?PaymentOrdersData.Definitions/remittanceInformation} remittanceInformation
	     * @property {?String} endToEndIdentification
	     * @property {?Object} additions Container object for custom API extensions
	     */
	
	    /**
	     * @typedef PaymentOrdersData.IdentifiedPaymentOrder
	     * @type {Object}
	     * @property {String} id
	     * @property {?String} paymentSetupId
	     * @property {?String} paymentSubmissionId
	     * @property {?PaymentOrdersData.InvolvedParty} debtor The identification of the debtor party
	     * @property {PaymentOrdersData.DebtorAccount} debtorAccount This identified debtor account with arrangement id.
	     * @property {?Boolean} batchBooking
	     * @property {?String} instructionPriority
	     * @property {String} requestedExecutionDate
	     * @property {?String} paymentMode
	     * @property {?PaymentOrdersData.StandingOrderSchedule} schedule
	     * @property {Array.<PaymentOrdersData.IdentifiedCreditTransaction>} creditTransferTransactionInformation A array of transactions. Currently we only support single SEPA payments so the limit is temporarily set to 1.
	     * @property {?PaymentOrdersData.Currency} totalAmount
	     * @property {String} status
	     * @property {?String} bankStatus Internal status of the payment order in the core banking system.
	     * @property {?String} reasonCode Reason code the core banking system accepted/rejected the payment.
	     * @property {?String} reasonText Human readable reason the core banking system accepted/rejected the payment.
	     * @property {?String} errorDescription Additional information from the core banking system on why the payment was refused.
	     * @property {?String} createdBy Creator user info.
	     * @property {?String} createdAt Date and time indicating when the payment was created
	     * @property {?Object} additions Container object for custom API extensions
	     */
	
	    /**
	     * @typedef PaymentOrdersData.InitiateCreditTransaction
	     * @type {Object}
	     * @property {PaymentOrdersData.Currency} instructedAmount
	     * @property {PaymentOrdersData.InvolvedParty} creditor
	     * @property {PaymentOrdersData.AccountIdentification} creditorAccount
	     * @property {?String} remittanceInformation The remittance info for manually initiated credit transfers. Does not have a type since it will always default to UNSTRUCTURED.
	     * @property {?String} endToEndIdentification
	     * @property {?Object} additions Container object for custom API extensions
	     */
	
	    /**
	     * @typedef PaymentOrdersData.InvolvedParty
	     * @type {Object}
	     * @property {String} name
	     * @property {?PaymentOrdersData.postalAddress} postalAddress
	     * @property {?Object} additions Container object for custom API extensions
	     */
	
	    /**
	     * @typedef PaymentOrdersData.PaymentOrder-GET
	     * @type {Object}
	     */
	
	    /**
	     * @typedef PaymentOrdersData.PaymentOrders-GET
	     * @type {Array.<PaymentOrdersData.IdentifiedPaymentOrder>}
	     */
	
	    /**
	     * @typedef PaymentOrdersData.PaymentOrders-POST
	     * @type {Object}
	     * @property {PaymentOrdersData.AccountIdentification} debtorAccount
	     * @property {?Boolean} batchBooking
	     * @property {?String} instructionPriority
	     * @property {String} requestedExecutionDate
	     * @property {?String} paymentMode
	     * @property {?PaymentOrdersData.StandingOrderSchedule} schedule
	     * @property {Array.<PaymentOrdersData.InitiateCreditTransaction>} creditTransferTransactionInformation A array of transactions. Currently we only support single SEPA payments so the limit is temporarily set to 1.
	     * @property {?Object} additions Container object for custom API extensions
	     */
	
	    /**
	     * @typedef PaymentOrdersData.PaymentOrders-POST-Response
	     * @type {Object}
	     * @property {String} id
	     * @property {String} status
	     * @property {?Object} additions Container object for custom API extensions
	     */
	
	    /**
	     * @typedef PaymentOrdersData.Rate-GET
	     * @type {Object}
	     * @property {Number} rate Rate for given currencies
	     * @property {?Object} additions Container object for custom API extensions
	     */
	
	    /**
	     * @typedef PaymentOrdersData.RetryOrdersRequest
	     * @type {Object}
	     * @property {?Number} selectionMaxSize The maximum number of payment orders to attempt to process in this request. Optional, when not specified all eligible payment orders will be retried.
	     * @property {?String} untilDate The date used when selecting the payment orders with execution date on or before specified date. Optional, when not specified the system date is used.
	     * @property {?Object} additions Container object for custom API extensions
	     */
	
	    /**
	     * @typedef PaymentOrdersData.RetryOrdersResponse
	     * @type {Object}
	     * @property {?Number} successCount The number of payment orders processed successfully.
	     * @property {?Number} failCount The number of payment orders that failed processing.
	     * @property {?Object} additions Container object for custom API extensions
	     */
	
	    /**
	     * @typedef PaymentOrdersData.StandingOrderSchedule
	     * @type {Object}
	     * @property {?String} nonWorkingDayExecutionStrategy One of "BEFORE", "AFTER", "NONE"
	     * @property {String} transferFrequency One of "ONCE", "DAILY", "WEEKLY", "MONTHLY", "QUARTERLY", "YEARLY"
	     * @property {Integer} on Denotes day on which transfer should be executed. For weekly it will be 1..7 indicating weekday. For monthly it will be 1..31 indicating day of month. For yearly it will be 1..12 indicating month of the year
	     * @property {String} startDate When to start executing the schedule. First transfer will be executed on first calculated date by schedule after this date
	     * @property {?String} endDate When to stop transfers. Transfers will not be executed after this date. Only one of endDate and repeat is possible. If neither repeat nor endDate is provided transfer will be executed until canceled
	     * @property {?Integer} repeat Number of transfer to be executed. Only one of endDate and repeat is possible. If neither repeat nor endDate is provided transfer will be executed until canceled
	     * @property {Number} every One of 1, 2
	     * @property {?String} nextExecutionDate Date when the next payment will be executed, taking in consideration bank holidays and cut-off times. It will be only retrieved when getting payments, it will be dismissed when creating or updating.
	     * @property {?Object} additions Container object for custom API extensions
	     */
	
	    /**
	     * @typedef PaymentOrdersData.Unauthorized-Error
	     * @type {Object}
	     * @property {String} message
	     * @property {?Object} additions Container object for custom API extensions
	     */
	
	    /**
	     * @typedef PaymentOrdersData.UpdateStatus-PUT
	     * @type {Object}
	     * @property {String} bankReferenceId This is the internal identifier from the bank that represents the payment order
	     * @property {String} status
	     * @property {String} bankStatus Internal status of the payment order in the core banking system.
	     * @property {?String} reasonCode Reason code the core banking system accepted/rejected the payment
	     * @property {?String} reasonText Human readable reason the core banking system accepted/rejected the payment
	     * @property {?String} errorDescription Additional information from the core banking system on why the payment was refused
	     * @property {?String} paymentSetupId
	     * @property {?String} paymentSubmissionId
	     * @property {?Object} additions Container object for custom API extensions
	     */
	
	    /**
	     * @typedef PaymentOrdersData.identification
	     * @type {Object}
	     * @property {String} identification The identifier of the account. Can be a regular account number, or an ID.
	     * @property {String} schemeName Specifies the kind of the account identifier
	     * @property {?Object} additions Container object for custom API extensions
	     */
	
	    /**
	     * @typedef PaymentOrdersData.postalAddress
	     * @type {Object}
	     * @property {?String} addressLine1
	     * @property {?String} addressLine2
	     * @property {?String} streetName
	     * @property {?String} postCode
	     * @property {?String} town
	     * @property {?String} countrySubDivision
	     * @property {?String} country
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
	     * @name PaymentOrdersData#getPaymentOrders
	     * @type {Function}
	     * @description Retrieve list of payments orders
	     
	     * @param {Object} params Map of query parameters.
	       
	     * @param {string} params.status status.
	       
	     * @param {?number} params.from Page Number. Skip over pages of elements by specifying a start value for the query. Eg: 20. (defaults to 0)
	       
	     * @param {?string} params.cursor Record UUID. As an alternative for specifying 'from' this allows to point to the record to start the selection from. Eg: 76d5be8b-e80d-4842-8ce6-ea67519e8f74. (defaults to "")
	       
	     * @param {?number} params.size Limit the number of elements on the response. When used in combination with cursor, the value
	    is allowed to be a negative number to indicate requesting records upwards from the starting point indicated
	    by the cursor. Eg: 80. (defaults to 10)
	       
	     * @param {?string} params.orderBy Order by field: status, debtorName, debtorAccount, creditorName, creditorAccount, currency, amount, requestedExecutionDate.
	       
	     * @param {?string} params.direction Direction. (defaults to DESC)
	       
	     
	     * @param {?Object} headers Map of custom header attributes.
	       
	     
	     * @returns {Promise.<Response>} Resolves data value as {@link PaymentOrdersData.PaymentOrders-GET} on success 
	     *
	     * @example
	     * paymentOrdersData
	     *  .getPaymentOrders(params, headers)
	     *  .then(function(result){
	     *    console.log('headers', result.headers)
	     *    console.log('data', result.data);
	     *  });
	     */
	    function getPaymentOrders(params, headers) {
	      var url = '' + baseUri + version + '/payment-orders';
	
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
	     * @name PaymentOrdersData#postPaymentOrdersRecord
	     * @type {Function}
	     * @description Start a new Payment Order initiation process
	     
	     * @param {PaymentOrdersData.PaymentOrders-POST} data Data to be sent as the request message data.
	       
	     
	     * @param {?Object} headers Map of custom header attributes.
	       
	     * @param {?string} headers.X-MFA Challenge payload response. Eg: sms challenge="123456789".
	       
	     
	     * @returns {Promise.<Response>} Resolves data value as {@link PaymentOrdersData.PaymentOrders-POST-Response}, {@link PaymentOrdersData.PaymentOrders-POST-Response} on success  or rejects with data of {@link PaymentOrdersData.Unauthorized-Error}, {@link PaymentOrdersData.BreachReportError} on error
	     *
	     * @example
	     * paymentOrdersData
	     *  .postPaymentOrdersRecord(data, headers)
	     *  .then(function(result){
	     *    console.log('headers', result.headers)
	     *    console.log('data', result.data);
	     *  });
	     */
	    function postPaymentOrdersRecord(data, headers) {
	      var url = '' + baseUri + version + '/payment-orders';
	
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
	     * @name PaymentOrdersData#getPaymentOrdersRecord
	     * @type {Function}
	     * @description Retrieve the single payment order
	     
	     * @param {string} paymentOrderId 
	       
	     
	     * @param {?Object} params Map of query parameters.
	       
	     
	     * @param {?Object} headers Map of custom header attributes.
	       
	     
	     * @returns {Promise.<Response>} Resolves data value as {@link PaymentOrdersData.PaymentOrder-GET} on success 
	     *
	     * @example
	     * paymentOrdersData
	     *  .getPaymentOrdersRecord(paymentOrderId, params, headers)
	     *  .then(function(result){
	     *    console.log('headers', result.headers)
	     *    console.log('data', result.data);
	     *  });
	     */
	    function getPaymentOrdersRecord(paymentOrderId, params, headers) {
	      var url = '' + baseUri + version + '/payment-orders/' + paymentOrderId;
	
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
	     * @name PaymentOrdersData#putPaymentOrdersUpdateStatusRecord
	     * @type {Function}
	     * @description Update payment order status
	     
	     * @param {PaymentOrdersData.UpdateStatus-PUT} data Data to be sent as the request message data.
	       
	     
	     * @param {?Object} headers Map of custom header attributes.
	       
	     
	     * @returns {Promise.<Response>} Resolves data value as {@link PaymentOrdersData.UpdateStatus-PUT} on success 
	     *
	     * @example
	     * paymentOrdersData
	     *  .putPaymentOrdersUpdateStatusRecord(data, headers)
	     *  .then(function(result){
	     *    console.log('headers', result.headers)
	     *    console.log('data', result.data);
	     *  });
	     */
	    function putPaymentOrdersUpdateStatusRecord(data, headers) {
	      var url = '' + baseUri + version + '/payment-orders/update-status';
	
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
	     * @name PaymentOrdersData#putPaymentOrdersRetryOrdersRecord
	     * @type {Function}
	     * @description Update payment order status
	     
	     * @param {PaymentOrdersData.RetryOrdersRequest} data Data to be sent as the request message data.
	       
	     
	     * @param {?Object} headers Map of custom header attributes.
	       
	     
	     * @returns {Promise.<Response>} Resolves data value as {@link PaymentOrdersData.RetryOrdersResponse} on success 
	     *
	     * @example
	     * paymentOrdersData
	     *  .putPaymentOrdersRetryOrdersRecord(data, headers)
	     *  .then(function(result){
	     *    console.log('headers', result.headers)
	     *    console.log('data', result.data);
	     *  });
	     */
	    function putPaymentOrdersRetryOrdersRecord(data, headers) {
	      var url = '' + baseUri + version + '/payment-orders/retry-orders';
	
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
	     * @name PaymentOrdersData#getPaymentOrdersCurrencies
	     * @type {Function}
	     * @description Get currencies available for payment
	     
	     * @param {?Object} params Map of query parameters.
	       
	     
	     * @param {?Object} headers Map of custom header attributes.
	       
	     
	     * @returns {Promise.<Response>} Resolves data value as {@link PaymentOrdersData.Currencies-GET} on success 
	     *
	     * @example
	     * paymentOrdersData
	     *  .getPaymentOrdersCurrencies(params, headers)
	     *  .then(function(result){
	     *    console.log('headers', result.headers)
	     *    console.log('data', result.data);
	     *  });
	     */
	    function getPaymentOrdersCurrencies(params, headers) {
	      var url = '' + baseUri + version + '/payment-orders/currencies';
	
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
	     * @name PaymentOrdersData#getPaymentOrdersRate
	     * @type {Function}
	     * @description Get available rate for currencies
	     
	     * @param {Object} params Map of query parameters.
	       
	     * @param {string} params.currencyFrom Currency transfer from. Eg: EUR.
	       
	     * @param {string} params.currencyTo Currency transfer to. Eg: USD.
	       
	     
	     * @param {?Object} headers Map of custom header attributes.
	       
	     
	     * @returns {Promise.<Response>} Resolves data value as {@link PaymentOrdersData.Rate-GET} on success 
	     *
	     * @example
	     * paymentOrdersData
	     *  .getPaymentOrdersRate(params, headers)
	     *  .then(function(result){
	     *    console.log('headers', result.headers)
	     *    console.log('data', result.data);
	     *  });
	     */
	    function getPaymentOrdersRate(params, headers) {
	      var url = '' + baseUri + version + '/payment-orders/rate';
	
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
	     * @name PaymentOrdersData#schemas
	     * @type {Object}
	     */
	    var schemas = {};
	
	    /**
	     * @description
	     * An object describing the JSON schema for the postPaymentOrdersRecord method
	     *
	     * @name PaymentOrdersData#schemas.postPaymentOrdersRecord
	     * @type {Object}
	     * @example
	     * {
	    "properties": {
	      "debtorAccount": {
	        "type": "object",
	        "properties": {
	          "identification": {
	            "type": "object",
	            "properties": {
	              "identification": {
	                "type": "string",
	                "maxLength": 36,
	                "required": true
	              },
	              "schemeName": {
	                "type": "string",
	                "enum": [
	                  "IBAN",
	                  "BBAN",
	                  "ID"
	                ],
	                "required": true
	              }
	            },
	            "required": true
	          },
	          "name": {
	            "type": "string",
	            "maxLength": 140,
	            "required": false
	          }
	        },
	        "required": true
	      },
	      "batchBooking": {
	        "type": "boolean",
	        "default": false,
	        "required": false
	      },
	      "instructionPriority": {
	        "type": "string",
	        "enum": [
	          "NORM",
	          "HIGH"
	        ],
	        "default": "NORM",
	        "required": false
	      },
	      "requestedExecutionDate": {
	        "type": "string",
	        "format": "date-time",
	        "required": true
	      },
	      "paymentMode": {
	        "type": "string",
	        "enum": [
	          "SINGLE",
	          "RECURRING"
	        ],
	        "default": "SINGLE",
	        "required": false
	      },
	      "schedule": {
	        "type": "object",
	        "properties": {
	          "nonWorkingDayExecutionStrategy": {
	            "type": "string",
	            "enum": [
	              "BEFORE",
	              "AFTER",
	              "NONE"
	            ],
	            "required": false
	          },
	          "transferFrequency": {
	            "type": "string",
	            "enum": [
	              "ONCE",
	              "DAILY",
	              "WEEKLY",
	              "MONTHLY",
	              "QUARTERLY",
	              "YEARLY"
	            ],
	            "required": true
	          },
	          "on": {
	            "type": "integer",
	            "required": true
	          },
	          "startDate": {
	            "type": "string",
	            "format": "date-time",
	            "required": true
	          },
	          "endDate": {
	            "type": "string",
	            "format": "date-time",
	            "required": false
	          },
	          "repeat": {
	            "type": "integer",
	            "required": false
	          },
	          "every": {
	            "type": "integer",
	            "enum": [
	              1,
	              2
	            ],
	            "required": true
	          },
	          "nextExecutionDate": {
	            "type": "string",
	            "format": "date-time",
	            "required": false
	          }
	        },
	        "required": false
	      },
	      "creditTransferTransactionInformation": {
	        "type": "array",
	        "items": {
	          "properties": {
	            "instructedAmount": {
	              "type": "object",
	              "properties": {
	                "amount": {
	                  "type": "string",
	                  "required": true
	                },
	                "currencyCode": {
	                  "type": "string",
	                  "pattern": "^[A-Z]{3}$",
	                  "required": true
	                }
	              },
	              "required": true
	            },
	            "creditor": {
	              "type": "object",
	              "properties": {
	                "name": {
	                  "type": "string",
	                  "maxLength": 140,
	                  "required": true
	                },
	                "postalAddress": {
	                  "type": "object",
	                  "properties": {
	                    "addressLine1": {
	                      "type": "string",
	                      "maxLength": 70,
	                      "required": false
	                    },
	                    "addressLine2": {
	                      "type": "string",
	                      "maxLength": 70,
	                      "required": false
	                    },
	                    "streetName": {
	                      "type": "string",
	                      "maxLength": 70,
	                      "required": false
	                    },
	                    "postCode": {
	                      "type": "string",
	                      "maxLength": 16,
	                      "required": false
	                    },
	                    "town": {
	                      "type": "string",
	                      "maxLength": 35,
	                      "required": false
	                    },
	                    "countrySubDivision": {
	                      "type": "string",
	                      "maxLength": 35,
	                      "required": false
	                    },
	                    "country": {
	                      "type": "string",
	                      "maxLength": 2,
	                      "required": false
	                    }
	                  },
	                  "required": false
	                }
	              },
	              "required": true
	            },
	            "creditorAccount": {
	              "type": "object",
	              "properties": {
	                "identification": {
	                  "type": "object",
	                  "properties": {
	                    "identification": {
	                      "type": "string",
	                      "maxLength": 36,
	                      "required": true
	                    },
	                    "schemeName": {
	                      "type": "string",
	                      "enum": [
	                        "IBAN",
	                        "BBAN",
	                        "ID"
	                      ],
	                      "required": true
	                    }
	                  },
	                  "required": true
	                },
	                "name": {
	                  "type": "string",
	                  "maxLength": 140,
	                  "required": false
	                }
	              },
	              "required": true
	            },
	            "remittanceInformation": {
	              "type": "string",
	              "maxLength": 140,
	              "required": false
	            },
	            "endToEndIdentification": {
	              "type": "string",
	              "maxLength": 35,
	              "required": false
	            }
	          }
	        },
	        "minItems": 1,
	        "maxItems": 1,
	        "required": true
	      }
	    }
	    }
	     */
	
	    schemas.postPaymentOrdersRecord = definedTypes['PaymentOrdersData.PaymentOrders-POST'];
	
	    /**
	     * @description
	     * An object describing the JSON schema for the putPaymentOrdersUpdateStatusRecord method
	     *
	     * @name PaymentOrdersData#schemas.putPaymentOrdersUpdateStatusRecord
	     * @type {Object}
	     * @example
	     * {
	    "properties": {
	      "bankReferenceId": {
	        "type": "string",
	        "maxLength": 64,
	        "required": true
	      },
	      "status": {
	        "type": "string",
	        "enum": [
	          "ENTERED",
	          "READY",
	          "ACCEPTED",
	          "PROCESSED",
	          "REJECTED"
	        ],
	        "required": true
	      },
	      "bankStatus": {
	        "type": "string",
	        "maxLength": 35,
	        "required": true
	      },
	      "reasonCode": {
	        "type": "string",
	        "maxLength": 4,
	        "required": false
	      },
	      "reasonText": {
	        "type": "string",
	        "maxLength": 35,
	        "required": false
	      },
	      "errorDescription": {
	        "type": "string",
	        "maxLength": 105,
	        "required": false
	      },
	      "paymentSetupId": {
	        "type": "string",
	        "maxLength": 128,
	        "required": false
	      },
	      "paymentSubmissionId": {
	        "type": "string",
	        "maxLength": 128,
	        "required": false
	      }
	    }
	    }
	     */
	
	    schemas.putPaymentOrdersUpdateStatusRecord = definedTypes['PaymentOrdersData.UpdateStatus-PUT'];
	
	    /**
	     * @description
	     * An object describing the JSON schema for the putPaymentOrdersRetryOrdersRecord method
	     *
	     * @name PaymentOrdersData#schemas.putPaymentOrdersRetryOrdersRecord
	     * @type {Object}
	     * @example
	     * {
	    "properties": {
	      "selectionMaxSize": {
	        "type": "number",
	        "required": false
	      },
	      "untilDate": {
	        "type": "string",
	        "format": "date-time",
	        "required": false
	      }
	    }
	    }
	     */
	
	    schemas.putPaymentOrdersRetryOrdersRecord = definedTypes['PaymentOrdersData.RetryOrdersRequest'];
	
	    /**
	     * @typedef Response
	     * @type {Object}
	     * @property {Object} data See method descriptions for possible return types
	     * @property {Function} headers Getter headers function
	     * @property {Number} status HTTP status code of the response.
	     * @property {String} statusText HTTP status text of the response.
	     */
	
	    return {
	
	      getPaymentOrders: getPaymentOrders,
	
	      postPaymentOrdersRecord: postPaymentOrdersRecord,
	
	      getPaymentOrdersRecord: getPaymentOrdersRecord,
	
	      putPaymentOrdersUpdateStatusRecord: putPaymentOrdersUpdateStatusRecord,
	
	      putPaymentOrdersRetryOrdersRecord: putPaymentOrdersRetryOrdersRecord,
	
	      getPaymentOrdersCurrencies: getPaymentOrdersCurrencies,
	
	      getPaymentOrdersRate: getPaymentOrdersRate,
	
	      schemas: schemas
	    };
	  };
	};

/***/ })
/******/ ])
});
;
//# sourceMappingURL=data-bb-payment-orders-http-ng.js.map