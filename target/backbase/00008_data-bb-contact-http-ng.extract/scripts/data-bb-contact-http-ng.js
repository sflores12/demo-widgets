(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vendor-bb-angular"), require("lib-bb-challenge-ng"));
	else if(typeof define === 'function' && define.amd)
		define("data-bb-contact-http-ng", ["vendor-bb-angular", "lib-bb-challenge-ng"], factory);
	else if(typeof exports === 'object')
		exports["data-bb-contact-http-ng"] = factory(require("vendor-bb-angular"), require("lib-bb-challenge-ng"));
	else
		root["data-bb-contact-http-ng"] = factory(root["vendor-bb-angular"], root["lib-bb-challenge-ng"]);
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
	exports.contactDataKey = undefined;
	
	var _vendorBbAngular = __webpack_require__(2);
	
	var _vendorBbAngular2 = _interopRequireDefault(_vendorBbAngular);
	
	var _libBbChallengeNg = __webpack_require__(3);
	
	var _libBbChallengeNg2 = _interopRequireDefault(_libBbChallengeNg);
	
	var _dataBbContactHttp = __webpack_require__(4);
	
	var _dataBbContactHttp2 = _interopRequireDefault(_dataBbContactHttp);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var contactDataModuleKey = 'data-bb-contact-http-ng';
	/**
	 * @name contactDataKey
	 * @type {string}
	 * @description Angular dependency injection key for the ContactData service
	 */
	/* eslint-disable */
	/**
	 * @module data-bb-contact-http-ng
	 *
	 * @description A data module for accessing the Contact REST API.
	 *
	 * @returns {String} `data-bb-contact-http-ng`
	 * @example
	 * import contactDataModuleKey, {
	 *   contactDataKey,
	 * } from 'data-bb-contact-http-ng';
	 */
	
	var contactDataKey = exports.contactDataKey = 'data-bb-contact-http-ng:contactData';
	/**
	 * @name default
	 * @type {string}
	 * @description Angular dependency injection module key
	 */
	exports.default = _vendorBbAngular2.default.module(contactDataModuleKey, [_libBbChallengeNg2.default]).config(['$httpProvider', function ($httpProvider) {
	  $httpProvider.interceptors.push(_libBbChallengeNg.bbChallengeKey);
	}])
	
	/**
	 * @constructor ContactData
	 * @type {object}
	 *
	 * @description Public api for data-bb-contact-http-ng service
	 *
	 */
	.provider(contactDataKey, [function () {
	  var config = {
	    baseUri: '/'
	  };
	
	  /**
	   * @name ContactDataProvider
	   * @type {object}
	   * @ngkey data-bb-contact-http-ng:contactDataProvider
	   * @description
	   * Data service that can be configured with custom base URI.
	   *
	   * @example
	   * // Configuring in an angular app:
	   * angular.module(...)
	   *   .config(['data-bb-contact-http-ng:contactDataProvider',
	   *     (dataProvider) => {
	   *       dataProvider.setBaseUri('http://my-service.com/');
	   *       });
	   *
	   * // Configuring With config-bb-providers-ng:
	   * export default [
	   *   ['data-bb-contact-http-ng:contactDataProvider', (dataProvider) => {
	   *       dataProvider.setBaseUri('http://my-service.com/');
	   *   }]
	   * ];
	   */
	  return {
	    /**
	     * @name ContactDataProvider#setBaseUri
	     * @type {function}
	     * @param {string} baseUri Base URI which will be the prefix for all HTTP requests
	     */
	    setBaseUri: function setBaseUri(baseUri) {
	      config.baseUri = baseUri;
	    },
	
	    /**
	     * @name ContactDataProvider#$get
	     * @type {function}
	     * @return {object} An instance of the service
	     */
	    $get: ['$http', '$httpParamSerializer',
	    /* into */
	    (0, _dataBbContactHttp2.default)(config)]
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
	     * @name ContactData#getContacts
	     * @type {Function}
	     * @description Retrieve list of all contacts.
	     
	     * @param {?Object} params Map of query parameters.
	       
	     * @param {?string} params.saId The service agreement id that the user is acting in. Will be overriden by a claim in the JWT when available. Eg: 54d4c741-51d1-415a-8523-d0d25141d7b2.
	       
	     * @param {?string} params.leId The legal entity id that the user is acting in. Will be overriden by a claim in the JWT when available. Eg: 5ea2659b-e2e7-4935-b686-190fa75d3f96.
	       
	     * @param {?string} params.cursor Record UUID. As an alternative for specifying 'from' this allows to point to the record to start the selection from. Eg: 76d5be8b-e80d-4842-8ce6-ea67519e8f74. (defaults to "")
	       
	     * @param {?number} params.from Page Number. Skip over pages of elements by specifying a start value for the query. Eg: 20. (defaults to 0)
	       
	     * @param {?number} params.size Limit the number of elements on the response. When used in combination with cursor, the value
	    is allowed to be a negative number to indicate requesting records upwards from the starting point indicated
	    by the cursor. Eg: 80. (defaults to 10)
	       
	     * @param {?string} params.query The search term used to search for contacts by their name. Eg: john.
	       
	     
	     * @param {?Object} headers Map of custom header attributes.
	       
	     
	     * @returns {Promise.<Response>}
	     *
	     * @example
	     * contactData
	     *  .getContacts(params, headers)
	     *  .then(function(result){
	     *    console.log('headers', result.headers)
	     *    console.log('data', result.data);
	     *  });
	     */
	    function getContacts(params, headers) {
	      var url = '' + baseUri + version + '/contacts';
	
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
	     * @name ContactData#postContactsRecord
	     * @type {Function}
	     * @description Create a new contact
	     
	     * @param {?Object} data Data to be sent as the request message data.
	       
	     
	     * @param {?Object} headers Map of custom header attributes.
	       
	     * @param {?string} headers.X-MFA Challenge payload response. Eg: sms challenge="123456789".
	       
	     
	     * @returns {Promise.<Response>}
	     *
	     * @example
	     * contactData
	     *  .postContactsRecord(data, headers)
	     *  .then(function(result){
	     *    console.log('headers', result.headers)
	     *    console.log('data', result.data);
	     *  });
	     */
	    function postContactsRecord(data, headers) {
	      var url = '' + baseUri + version + '/contacts';
	
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
	     * @name ContactData#getApprovals
	     * @type {Function}
	     * @description Retrieve list of all approvals.
	     
	     * @param {?Object} params Map of query parameters.
	       
	     
	     * @param {?Object} headers Map of custom header attributes.
	       
	     
	     * @returns {Promise.<Response>}
	     *
	     * @example
	     * contactData
	     *  .getApprovals(params, headers)
	     *  .then(function(result){
	     *    console.log('headers', result.headers)
	     *    console.log('data', result.data);
	     *  });
	     */
	    function getApprovals(params, headers) {
	      var url = '' + baseUri + version + '/approvals';
	
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
	     * @name ContactData#getContactsRecord
	     * @type {Function}
	     * @description Get a single contact by ID
	     
	     * @param {string} contactId 
	       
	     
	     * @param {?Object} params Map of query parameters.
	       
	     
	     * @param {?Object} headers Map of custom header attributes.
	       
	     
	     * @returns {Promise.<Response>}
	     *
	     * @example
	     * contactData
	     *  .getContactsRecord(contactId, params, headers)
	     *  .then(function(result){
	     *    console.log('headers', result.headers)
	     *    console.log('data', result.data);
	     *  });
	     */
	    function getContactsRecord(contactId, params, headers) {
	      var url = '' + baseUri + version + '/contacts/' + contactId;
	
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
	     * @name ContactData#putContactsRecord
	     * @type {Function}
	     * @description Update a single contact by ID
	     
	     * @param {string} contactId 
	       
	     
	     * @param {?Object} data Data to be sent as the request message data.
	       
	     
	     * @param {?Object} headers Map of custom header attributes.
	       
	     * @param {?string} headers.X-MFA Challenge payload response. Eg: sms challenge="123456789".
	       
	     
	     * @returns {Promise.<Response>}
	     *
	     * @example
	     * contactData
	     *  .putContactsRecord(contactId, data, headers)
	     *  .then(function(result){
	     *    console.log('headers', result.headers)
	     *    console.log('data', result.data);
	     *  });
	     */
	    function putContactsRecord(contactId, data, headers) {
	      var url = '' + baseUri + version + '/contacts/' + contactId;
	
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
	     * @name ContactData#deleteContactsRecord
	     * @type {Function}
	     * @description Delete a single contact by ID
	     
	     * @param {string} contactId 
	       
	     
	     * @param {?Object} data Data to be sent as the request message data.
	       
	     
	     * @param {?Object} headers Map of custom header attributes.
	       
	     
	     * @returns {Promise.<Response>}
	     *
	     * @example
	     * contactData
	     *  .deleteContactsRecord(contactId, data, headers)
	     *  .then(function(result){
	     *    console.log('headers', result.headers)
	     *    console.log('data', result.data);
	     *  });
	     */
	    function deleteContactsRecord(contactId, data, headers) {
	      var url = '' + baseUri + version + '/contacts/' + contactId;
	
	      return httpClient({
	        method: 'DELETE',
	        url: url,
	
	        data: data || {},
	
	        headers: headers || {}
	      }).then(parse).catch(function (err) {
	        throw parse(err);
	      });
	    }
	
	    /**
	     * @name ContactData#postApprovalsApprovalRecordsRecord
	     * @type {Function}
	     * @description Entrypoint for approving a draft. Given an approval request is created, a user can approve an approval enquiry that is pointed towards his/her user-group.
	     
	     * @param {string} requestId 
	       
	     
	     * @param {?Object} data Data to be sent as the request message data.
	       
	     
	     * @param {?Object} headers Map of custom header attributes.
	       
	     
	     * @returns {Promise.<Response>}
	     *
	     * @example
	     * contactData
	     *  .postApprovalsApprovalRecordsRecord(requestId, data, headers)
	     *  .then(function(result){
	     *    console.log('headers', result.headers)
	     *    console.log('data', result.data);
	     *  });
	     */
	    function postApprovalsApprovalRecordsRecord(requestId, data, headers) {
	      var url = '' + baseUri + version + '/approvals/' + requestId + '/approvalRecords';
	
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
	     * @name ContactData#postApprovalsRejectionRecordsRecord
	     * @type {Function}
	     * @description End point for rejecting a draft. Given an approval request is created, a user can reject an approval enquiry that is pointed towards his/her user-group.
	     
	     * @param {string} requestId 
	       
	     
	     * @param {?Object} data Data to be sent as the request message data.
	       
	     
	     * @param {?Object} headers Map of custom header attributes.
	       
	     
	     * @returns {Promise.<Response>}
	     *
	     * @example
	     * contactData
	     *  .postApprovalsRejectionRecordsRecord(requestId, data, headers)
	     *  .then(function(result){
	     *    console.log('headers', result.headers)
	     *    console.log('data', result.data);
	     *  });
	     */
	    function postApprovalsRejectionRecordsRecord(requestId, data, headers) {
	      var url = '' + baseUri + version + '/approvals/' + requestId + '/rejectionRecords';
	
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
	     * @name ContactData#getApprovalsMe
	     * @type {Function}
	     * @description Retrieve list of approvals created by me.
	     
	     * @param {?Object} params Map of query parameters.
	       
	     
	     * @param {?Object} headers Map of custom header attributes.
	       
	     
	     * @returns {Promise.<Response>}
	     *
	     * @example
	     * contactData
	     *  .getApprovalsMe(params, headers)
	     *  .then(function(result){
	     *    console.log('headers', result.headers)
	     *    console.log('data', result.data);
	     *  });
	     */
	    function getApprovalsMe(params, headers) {
	      var url = '' + baseUri + version + '/approvals/me';
	
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
	     * @name ContactData#schemas
	     * @type {Object}
	     */
	    var schemas = {};
	
	    /**
	     * @description
	     * An object describing the JSON schema for the postContactsRecord method
	     *
	     * @name ContactData#schemas.postContactsRecord
	     * @type {Object}
	     * @example
	     * {
	    "properties": {
	      "accessContext": {
	        "type": "object",
	        "properties": {
	          "legalEntityId": {
	            "type": "string",
	            "maxLength": 36,
	            "required": false
	          },
	          "serviceAgreementId": {
	            "type": "string",
	            "maxLength": 36,
	            "required": false
	          }
	        },
	        "required": false
	      }
	    }
	    }
	     */
	
	    schemas.postContactsRecord = { "properties": { "accessContext": { "type": "object", "properties": { "legalEntityId": { "type": "string", "maxLength": 36, "required": false }, "serviceAgreementId": { "type": "string", "maxLength": 36, "required": false } }, "required": false } } };
	
	    /**
	     * @description
	     * An object describing the JSON schema for the putContactsRecord method
	     *
	     * @name ContactData#schemas.putContactsRecord
	     * @type {Object}
	     * @example
	     * {
	    "properties": {
	      "name": {
	        "type": "string",
	        "maxLength": 70,
	        "required": true
	      },
	      "alias": {
	        "type": "string",
	        "maxLength": 70,
	        "required": false
	      },
	      "category": {
	        "type": "string",
	        "required": false
	      },
	      "contactPerson": {
	        "type": "string",
	        "maxLength": 70,
	        "required": false
	      },
	      "phoneNumber": {
	        "type": "string",
	        "required": false
	      },
	      "emailId": {
	        "type": "string",
	        "format": "email",
	        "required": false
	      },
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
	      "town": {
	        "type": "string",
	        "maxLength": 35,
	        "required": false
	      },
	      "postCode": {
	        "type": "string",
	        "maxLength": 16,
	        "required": false
	      },
	      "countrySubDivision": {
	        "type": "string",
	        "maxLength": 35,
	        "required": false
	      },
	      "country": {
	        "type": "string",
	        "minLength": 2,
	        "maxLength": 2,
	        "required": false
	      },
	      "accounts": {
	        "type": "array",
	        "items": {
	          "properties": {
	            "name": {
	              "type": "string",
	              "maxLength": 70,
	              "required": false
	            },
	            "alias": {
	              "type": "string",
	              "maxLength": 70,
	              "required": false
	            },
	            "accountNumber": {
	              "type": "string",
	              "required": false
	            },
	            "IBAN": {
	              "type": "string",
	              "required": false
	            },
	            "BIC": {
	              "type": "string",
	              "required": false
	            },
	            "bankCode": {
	              "type": "string",
	              "required": false
	            },
	            "bankName": {
	              "type": "string",
	              "required": false
	            },
	            "bankAddressLine1": {
	              "type": "string",
	              "maxLength": 70,
	              "required": false
	            },
	            "bankAddressLine2": {
	              "type": "string",
	              "maxLength": 70,
	              "required": false
	            },
	            "bankStreetName": {
	              "type": "string",
	              "maxLength": 70,
	              "required": false
	            },
	            "bankTown": {
	              "type": "string",
	              "maxLength": 35,
	              "required": false
	            },
	            "bankPostCode": {
	              "type": "string",
	              "maxLength": 16,
	              "required": false
	            },
	            "bankCountrySubDivision": {
	              "type": "string",
	              "maxLength": 35,
	              "required": false
	            },
	            "bankCountry": {
	              "type": "string",
	              "minLength": 2,
	              "maxLength": 2,
	              "required": false
	            },
	            "accountHolderAddressLine1": {
	              "type": "string",
	              "maxLength": 70,
	              "required": false
	            },
	            "accountHolderAddressLine2": {
	              "type": "string",
	              "maxLength": 70,
	              "required": false
	            },
	            "accountHolderStreetName": {
	              "type": "string",
	              "maxLength": 70,
	              "required": false
	            },
	            "accountHolderTown": {
	              "type": "string",
	              "maxLength": 35,
	              "required": false
	            },
	            "accountHolderPostCode": {
	              "type": "string",
	              "maxLength": 16,
	              "required": false
	            },
	            "accountHolderCountrySubDivision": {
	              "type": "string",
	              "maxLength": 35,
	              "required": false
	            },
	            "accountHolderCountry": {
	              "type": "string",
	              "minLength": 2,
	              "maxLength": 2,
	              "required": false
	            }
	          }
	        },
	        "minItems": 1,
	        "required": true
	      },
	      "accessContextScope": {
	        "type": "string",
	        "enum": [
	          "SA",
	          "LE",
	          "USER"
	        ],
	        "default": "USER",
	        "required": false
	      }
	    }
	    }
	     */
	
	    schemas.putContactsRecord = { "properties": { "name": { "type": "string", "maxLength": 70, "required": true }, "alias": { "type": "string", "maxLength": 70, "required": false }, "category": { "type": "string", "required": false }, "contactPerson": { "type": "string", "maxLength": 70, "required": false }, "phoneNumber": { "type": "string", "required": false }, "emailId": { "type": "string", "format": "email", "required": false }, "addressLine1": { "type": "string", "maxLength": 70, "required": false }, "addressLine2": { "type": "string", "maxLength": 70, "required": false }, "streetName": { "type": "string", "maxLength": 70, "required": false }, "town": { "type": "string", "maxLength": 35, "required": false }, "postCode": { "type": "string", "maxLength": 16, "required": false }, "countrySubDivision": { "type": "string", "maxLength": 35, "required": false }, "country": { "type": "string", "minLength": 2, "maxLength": 2, "required": false }, "accounts": { "type": "array", "items": { "properties": { "name": { "type": "string", "maxLength": 70, "required": false }, "alias": { "type": "string", "maxLength": 70, "required": false }, "accountNumber": { "type": "string", "required": false }, "IBAN": { "type": "string", "required": false }, "BIC": { "type": "string", "required": false }, "bankCode": { "type": "string", "required": false }, "bankName": { "type": "string", "required": false }, "bankAddressLine1": { "type": "string", "maxLength": 70, "required": false }, "bankAddressLine2": { "type": "string", "maxLength": 70, "required": false }, "bankStreetName": { "type": "string", "maxLength": 70, "required": false }, "bankTown": { "type": "string", "maxLength": 35, "required": false }, "bankPostCode": { "type": "string", "maxLength": 16, "required": false }, "bankCountrySubDivision": { "type": "string", "maxLength": 35, "required": false }, "bankCountry": { "type": "string", "minLength": 2, "maxLength": 2, "required": false }, "accountHolderAddressLine1": { "type": "string", "maxLength": 70, "required": false }, "accountHolderAddressLine2": { "type": "string", "maxLength": 70, "required": false }, "accountHolderStreetName": { "type": "string", "maxLength": 70, "required": false }, "accountHolderTown": { "type": "string", "maxLength": 35, "required": false }, "accountHolderPostCode": { "type": "string", "maxLength": 16, "required": false }, "accountHolderCountrySubDivision": { "type": "string", "maxLength": 35, "required": false }, "accountHolderCountry": { "type": "string", "minLength": 2, "maxLength": 2, "required": false } } }, "minItems": 1, "required": true }, "accessContextScope": { "type": "string", "enum": ["SA", "LE", "USER"], "default": "USER", "required": false } } };
	
	    /**
	     * @typedef Response
	     * @type {Object}
	     * @property {Object} data See method descriptions for possible return types
	     * @property {Function} headers Getter headers function
	     * @property {Number} status HTTP status code of the response.
	     * @property {String} statusText HTTP status text of the response.
	     */
	
	    return {
	
	      getContacts: getContacts,
	
	      postContactsRecord: postContactsRecord,
	
	      getApprovals: getApprovals,
	
	      getContactsRecord: getContactsRecord,
	
	      putContactsRecord: putContactsRecord,
	
	      deleteContactsRecord: deleteContactsRecord,
	
	      postApprovalsApprovalRecordsRecord: postApprovalsApprovalRecordsRecord,
	
	      postApprovalsRejectionRecordsRecord: postApprovalsRejectionRecordsRecord,
	
	      getApprovalsMe: getApprovalsMe,
	
	      schemas: schemas
	    };
	  };
	};

/***/ })
/******/ ])
});
;
//# sourceMappingURL=data-bb-contact-http-ng.js.map