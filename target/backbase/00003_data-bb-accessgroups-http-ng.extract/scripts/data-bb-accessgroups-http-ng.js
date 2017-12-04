(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vendor-bb-angular"));
	else if(typeof define === 'function' && define.amd)
		define("data-bb-accessgroups-http-ng", ["vendor-bb-angular"], factory);
	else if(typeof exports === 'object')
		exports["data-bb-accessgroups-http-ng"] = factory(require("vendor-bb-angular"));
	else
		root["data-bb-accessgroups-http-ng"] = factory(root["vendor-bb-angular"]);
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
	exports.accessGroupsDataKey = undefined;
	
	var _vendorBbAngular = __webpack_require__(2);
	
	var _vendorBbAngular2 = _interopRequireDefault(_vendorBbAngular);
	
	var _dataBbAccessgroupsHttp = __webpack_require__(3);
	
	var _dataBbAccessgroupsHttp2 = _interopRequireDefault(_dataBbAccessgroupsHttp);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/* eslint-disable */
	/**
	 * @module data-bb-accessgroups-http-ng
	 *
	 * @description A data module for accessing the AccessGroups REST API.
	 *
	 * @returns {String} `data-bb-accessgroups-http-ng`
	 * @example
	 * import accessGroupsDataModuleKey, {
	 *   accessGroupsDataKey,
	 * } from 'data-bb-accessgroups-http-ng';
	 */
	
	var accessGroupsDataModuleKey = 'data-bb-accessgroups-http-ng';
	/**
	 * @name accessGroupsDataKey
	 * @type {string}
	 * @description Angular dependency injection key for the AccessGroupsData service
	 */
	var accessGroupsDataKey = exports.accessGroupsDataKey = 'data-bb-accessgroups-http-ng:accessGroupsData';
	/**
	 * @name default
	 * @type {string}
	 * @description Angular dependency injection module key
	 */
	exports.default = _vendorBbAngular2.default.module(accessGroupsDataModuleKey, [])
	
	/**
	 * @constructor AccessGroupsData
	 * @type {object}
	 *
	 * @description Public api for data-bb-accessgroups-http-ng service
	 *
	 */
	.provider(accessGroupsDataKey, [function () {
	  var config = {
	    baseUri: '/'
	  };
	
	  /**
	   * @name AccessGroupsDataProvider
	   * @type {object}
	   * @ngkey data-bb-accessgroups-http-ng:accessGroupsDataProvider
	   * @description
	   * Data service that can be configured with custom base URI.
	   *
	   * @example
	   * // Configuring in an angular app:
	   * angular.module(...)
	   *   .config(['data-bb-accessgroups-http-ng:accessGroupsDataProvider',
	   *     (dataProvider) => {
	   *       dataProvider.setBaseUri('http://my-service.com/');
	   *       });
	   *
	   * // Configuring With config-bb-providers-ng:
	   * export default [
	   *   ['data-bb-accessgroups-http-ng:accessGroupsDataProvider', (dataProvider) => {
	   *       dataProvider.setBaseUri('http://my-service.com/');
	   *   }]
	   * ];
	   */
	  return {
	    /**
	     * @name AccessGroupsDataProvider#setBaseUri
	     * @type {function}
	     * @param {string} baseUri Base URI which will be the prefix for all HTTP requests
	     */
	    setBaseUri: function setBaseUri(baseUri) {
	      config.baseUri = baseUri;
	    },
	
	    /**
	     * @name AccessGroupsDataProvider#$get
	     * @type {function}
	     * @return {object} An instance of the service
	     */
	    $get: ['$http', '$httpParamSerializer',
	    /* into */
	    (0, _dataBbAccessgroupsHttp2.default)(config)]
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
	
	    definedTypes['AccessGroupsData.GetDataAccessGroups'] = { "type": "array", "items": { "properties": { "dataAccessGroupId": { "type": "string", "required": true } } } };
	
	    definedTypes['AccessGroupsData.DataAccessGroupItem'] = { "properties": { "dataAccessGroupId": { "type": "string", "required": true } } };
	
	    definedTypes['AccessGroupsData.DataAccessGroupItemBase'] = { "properties": { "name": { "type": "string", "minLength": 1, "pattern": "^\\S(.*(\\S))?$", "required": true }, "description": { "type": "string", "minLength": 1, "pattern": "^\\S(.*(\\S))?$", "required": true }, "legalEntityId": { "type": "string", "minLength": 1, "pattern": "^\\S(.*(\\S))?$", "required": true }, "type": { "type": "string", "required": true }, "items": { "type": "array", "items": { "properties": {} }, "required": true } } };
	
	    definedTypes['AccessGroupsData.GetFunctionAccessGroups'] = { "type": "array", "items": { "properties": { "functionAccessGroupId": { "type": "string", "required": true } } } };
	
	    definedTypes['AccessGroupsData.FunctionAccessGroupItem'] = { "properties": { "functionAccessGroupId": { "type": "string", "required": true } } };
	
	    definedTypes['AccessGroupsData.FunctionAccessGroupItemBase'] = { "properties": { "name": { "type": "string", "minLength": 1, "pattern": "^\\S(.*(\\S))?$", "required": true }, "description": { "type": "string", "minLength": 1, "pattern": "^\\S(.*(\\S))?$", "required": true }, "legalEntityId": { "type": "string", "minLength": 1, "pattern": "^\\S(.*(\\S))?$", "required": true }, "permissions": { "type": "array", "items": { "properties": { "functionId": { "type": "string", "required": true }, "assignedPrivileges": { "type": "array", "items": { "properties": { "privilege": { "type": "string", "required": true }, "limits": { "type": "array", "items": { "properties": { "limitType": { "enum": ["daily", "weekly", "monthly", "upper"], "required": true }, "amount": { "type": "number", "required": false } } }, "required": false } } }, "required": true } } }, "required": false } } };
	
	    definedTypes['AccessGroupsData.GetFunctions'] = { "type": "array", "items": { "properties": { "functionId": { "type": "string", "required": true }, "functionCode": { "type": "string", "required": true }, "resource": { "type": "string", "required": true }, "name": { "type": "string", "required": true }, "privileges": { "type": "array", "items": { "properties": { "privilege": { "type": "string", "required": true }, "limits": { "type": "array", "items": { "properties": { "limitType": { "enum": ["daily", "weekly", "monthly", "upper"], "required": true }, "amount": { "type": "number", "required": false } } }, "required": false } } }, "required": true } } } };
	
	    definedTypes['AccessGroupsData.UserItem'] = { "properties": { "userId": { "type": "string", "minLength": 1, "pattern": "^\\S+$", "required": true }, "serviceAgreementId": { "type": "string", "required": false } } };
	
	    definedTypes['AccessGroupsData.AssignFunctionAccessGroup'] = { "properties": { "functionAccessGroupIds": { "type": "array", "items": { "properties": {} }, "minItems": 1, "required": true }, "revoke": { "type": "boolean", "required": true } } };
	
	    definedTypes['AccessGroupsData.AssignDataAccessGroup'] = { "properties": { "functionAccessGroupId": { "type": "string", "required": true }, "dataAccessGroupIds": { "type": "array", "items": { "properties": {} }, "minItems": 1, "required": true }, "revoke": { "type": "boolean", "required": true } } };
	
	    definedTypes['AccessGroupsData.GetUser'] = { "properties": { "id": { "type": "string", "required": true }, "userId": { "type": "string", "minLength": 1, "pattern": "^\\S+$", "required": true }, "serviceAgreementId": { "type": "string", "required": true }, "dataAccessGroupsByFunctionAccessGroup": { "type": "array", "items": { "properties": { "functionAccessGroupId": { "type": "string", "required": true }, "dataAccessGroupIds": { "type": "array", "items": { "properties": {} }, "required": false } } }, "required": false } } };
	
	    definedTypes['AccessGroupsData.GetUsers'] = { "type": "array", "items": { "properties": { "id": { "type": "string", "required": true }, "userId": { "type": "string", "minLength": 1, "pattern": "^\\S+$", "required": true }, "serviceAgreementId": { "type": "string", "required": true }, "dataAccessGroupsByFunctionAccessGroup": { "type": "array", "items": { "properties": { "functionAccessGroupId": { "type": "string", "required": true }, "dataAccessGroupIds": { "type": "array", "items": { "properties": {} }, "required": false } } }, "required": false } } } };
	
	    definedTypes['AccessGroupsData.GetPrivileges'] = { "type": "array", "items": { "properties": { "privilege": { "type": "string", "required": true } } } };
	
	    definedTypes['AccessGroupsData.ArrangementPrivileges'] = { "type": "array", "items": { "properties": { "arrangementId": { "type": "string", "required": true }, "privileges": { "type": "array", "items": { "properties": { "privilege": { "type": "string", "required": true }, "limits": { "type": "array", "items": { "properties": { "limitType": { "enum": ["daily", "weekly", "monthly", "upper"], "required": true }, "amount": { "type": "number", "required": false } } }, "required": false } } }, "required": true } } } };
	
	    definedTypes['AccessGroupsData.ServiceAgreementPost'] = { "properties": { "name": { "type": "string", "minLength": 1, "pattern": "^\\S(.*(\\S))?$", "required": true }, "description": { "type": "string", "minLength": 1, "pattern": "^\\S(.*(\\S))?$", "required": true }, "providers": { "type": "array", "items": { "properties": {} }, "required": true }, "consumers": { "type": "array", "items": { "properties": {} }, "required": true } } };
	
	    definedTypes['AccessGroupsData.ServiceAgreementPut'] = { "properties": { "name": { "type": "string", "minLength": 1, "maxLength": 128, "pattern": "^\\S(.*(\\S))?$", "required": false }, "description": { "type": "string", "minLength": 1, "maxLength": 255, "pattern": "^\\S(.*(\\S))?$", "required": false }, "externalId": { "type": "string", "minLength": 1, "maxLength": 36, "pattern": "^\\S+$", "required": false } } };
	
	    definedTypes['AccessGroupsData.GetServiceAgreements'] = { "type": "array", "items": { "properties": { "creatorLegalEntity": { "type": "string", "required": true }, "providers": { "type": "array", "items": { "properties": { "id": { "type": "string", "required": false }, "users": { "type": "array", "items": { "properties": {} }, "required": false }, "admins": { "type": "array", "items": { "properties": {} }, "required": false } } }, "required": false }, "consumers": { "type": "array", "items": { "properties": { "id": { "type": "string", "required": false }, "dataAccessGroupFunctionAccessGroupPairs": { "type": "array", "items": { "properties": { "functionAccessGroupId": { "type": "string", "required": true }, "dataAccessGroupId": { "type": "string", "required": true } } }, "required": false }, "admins": { "type": "array", "items": { "properties": {} }, "required": false } } }, "required": false } } } };
	
	    definedTypes['AccessGroupsData.ServiceAgreementItem'] = { "properties": { "creatorLegalEntity": { "type": "string", "required": true }, "providers": { "type": "array", "items": { "properties": { "id": { "type": "string", "required": false }, "users": { "type": "array", "items": { "properties": {} }, "required": false }, "admins": { "type": "array", "items": { "properties": {} }, "required": false } } }, "required": false }, "consumers": { "type": "array", "items": { "properties": { "id": { "type": "string", "required": false }, "dataAccessGroupFunctionAccessGroupPairs": { "type": "array", "items": { "properties": { "functionAccessGroupId": { "type": "string", "required": true }, "dataAccessGroupId": { "type": "string", "required": true } } }, "required": false }, "admins": { "type": "array", "items": { "properties": {} }, "required": false } } }, "required": false } } };
	
	    definedTypes['AccessGroupsData.ServiceAgreementParticipants'] = { "type": "array", "items": { "properties": { "id": { "type": "string", "required": true }, "externalId": { "type": "string", "required": true }, "name": { "type": "string", "required": true }, "roles": { "type": "array", "items": { "properties": {} }, "maxItems": 2, "uniqueItems": true, "required": true } } } };
	
	    definedTypes['AccessGroupsData.GetServiceAgreementRoles'] = { "properties": { "roles": { "type": "array", "items": { "properties": {} }, "required": true } } };
	
	    definedTypes['AccessGroupsData.IdItem'] = { "properties": { "id": { "type": "string", "pattern": "^[0-9a-f]{32}", "required": true } } };
	
	    definedTypes['AccessGroupsData.UpdateAdmins'] = { "properties": { "consumers": { "type": "array", "items": { "properties": { "id": { "type": "string", "required": true }, "admins": { "type": "array", "items": { "properties": {} }, "uniqueItems": true, "required": true } } }, "minItems": 1, "required": false }, "providers": { "type": "array", "items": { "properties": { "id": { "type": "string", "required": true }, "admins": { "type": "array", "items": { "properties": {} }, "uniqueItems": true, "required": true } } }, "minItems": 1, "required": false } } };
	
	    definedTypes['AccessGroupsData.GetServiceAgreementsAdmin'] = { "type": "array", "items": { "properties": { "id": { "type": "string", "minLength": 1, "pattern": "^\\S+$", "required": true }, "externalId": { "type": "string", "minLength": 1, "maxLength": 36, "pattern": "^\\S+$", "required": false }, "name": { "type": "string", "minLength": 1, "pattern": "^\\S(.*(\\S))?$", "required": true }, "description": { "type": "string", "minLength": 1, "pattern": "^\\S(.*(\\S))?$", "required": true }, "isMaster": { "type": "boolean", "default": false, "required": false }, "roles": { "type": "array", "items": { "properties": {} }, "maxItems": 2, "uniqueItems": true, "required": true } } } };
	
	    definedTypes['AccessGroupsData.ServiceAgreementUsers'] = { "type": "array", "items": { "properties": { "id": { "type": "string", "required": true }, "externalId": { "type": "string", "required": true }, "legalEntityId": { "type": "string", "required": true }, "fullName": { "type": "string", "required": true } } } };
	
	    definedTypes['AccessGroupsData.ProviderUserForServiceAgreement'] = { "properties": { "id": { "type": "string", "required": true } } };
	
	    definedTypes['AccessGroupsData.ExposeFunctionAccessGroups'] = { "properties": { "functionAccessGroupIds": { "type": "array", "items": { "properties": {} }, "minItems": 1, "uniqueItems": true, "required": true } } };
	
	    definedTypes['AccessGroupsData.ExposeDataAccessGroups'] = { "properties": { "dataAccessGroupIds": { "type": "array", "items": { "properties": {} }, "minItems": 1, "uniqueItems": true, "required": true } } };
	
	    definedTypes['AccessGroupsData.ServicesAgreementIngest'] = { "properties": { "name": { "type": "string", "minLength": 1, "pattern": "^\\S(.*(\\S))?$", "required": true }, "externalId": { "type": "string", "minLength": 1, "maxLength": 36, "pattern": "^\\S+$", "required": false }, "description": { "type": "string", "minLength": 1, "pattern": "^\\S(.*(\\S))?$", "required": true }, "consumersToIngest": { "type": "array", "items": { "properties": { "users": { "type": "array", "items": { "properties": {} }, "uniqueItems": true, "required": false }, "functionDataGroupPairs": { "type": "array", "items": { "properties": { "functionGroup": { "type": "string", "pattern": "^[0-9a-f]{32}", "required": false }, "dataGroup": { "type": "array", "items": { "properties": {} }, "minItems": 1, "uniqueItems": true, "required": true } } }, "uniqueItems": true, "required": false } } }, "minItems": 1, "uniqueItems": true, "required": true }, "providersToIngest": { "type": "array", "items": { "properties": { "users": { "type": "array", "items": { "properties": {} }, "uniqueItems": true, "required": false } } }, "minItems": 1, "uniqueItems": true, "required": true } } };
	
	    definedTypes['AccessGroupsData.PermissionsSummary'] = { "type": "array", "items": { "properties": { "resource": { "type": "string", "required": true }, "function": { "type": "string", "required": true }, "permissions": { "type": "object", "properties": {}, "required": true } } } };
	
	    definedTypes['AccessGroupsData.UserContextServiceAgreements-GET'] = { "type": "array", "items": { "properties": { "id": { "type": "string", "pattern": "^[0-9a-f]{32}", "required": true }, "externalId": { "type": "string", "minLength": 1, "maxLength": 36, "pattern": "^\\S+$", "required": false }, "name": { "type": "string", "required": true }, "description": { "type": "string", "required": true }, "isMaster": { "type": "boolean", "default": false, "required": true } } } };
	
	    definedTypes['AccessGroupsData.UserContextLegalEntities-GET'] = { "type": "array", "items": { "properties": { "id": { "type": "string", "pattern": "^[0-9a-f]{32}", "required": true }, "name": { "type": "string", "required": true } } } };
	
	    definedTypes['AccessGroupsData.UserContext-POST'] = { "properties": { "serviceAgreementId": { "type": "string", "pattern": "^[0-9a-f]{32}", "required": true }, "legalEntityId": { "type": "string", "pattern": "^[0-9a-f]{32}", "required": true } } };
	
	    /**
	     * @typedef AccessGroupsData.AdminItem
	     * @type {Object}
	     * @property {String} id
	     * @property {Array.<String>} admins
	     * @property {?Object} additions Container object for custom API extensions
	     */
	
	    /**
	     * @typedef AccessGroupsData.ArrangementPrivilegeItem
	     * @type {Object}
	     * @property {String} arrangementId
	     * @property {Array.<AccessGroupsData.PrivilegeItem>} privileges
	     * @property {?Object} additions Container object for custom API extensions
	     */
	
	    /**
	     * @typedef AccessGroupsData.ArrangementPrivileges
	     * @type {Array.<AccessGroupsData.ArrangementPrivilegeItem>}
	     */
	
	    /**
	     * @typedef AccessGroupsData.AssignDataAccessGroup
	     * @type {Object}
	     * @property {String} functionAccessGroupId
	     * @property {Array.<String>} dataAccessGroupIds
	     * @property {Boolean} revoke
	     * @property {?Object} additions Container object for custom API extensions
	     */
	
	    /**
	     * @typedef AccessGroupsData.AssignFunctionAccessGroup
	     * @type {Object}
	     * @property {Array.<String>} functionAccessGroupIds
	     * @property {Boolean} revoke
	     * @property {?Object} additions Container object for custom API extensions
	     */
	
	    /**
	     * @typedef AccessGroupsData.ConsumerItem
	     * @type {Object}
	     * @property {?Array.<String>} users User external ids
	     * @property {?Array.<AccessGroupsData.Definitions/saPairs>} functionDataGroupPairs Function and data group pairs
	     * @property {?Object} additions Container object for custom API extensions
	     */
	
	    /**
	     * @typedef AccessGroupsData.ConsumersItem
	     * @type {Object}
	     * @property {?String} id
	     * @property {?Array.<AccessGroupsData.PairItem>} dataAccessGroupFunctionAccessGroupPairs
	     * @property {?Array.<String>} admins
	     * @property {?Object} additions Container object for custom API extensions
	     */
	
	    /**
	     * @typedef AccessGroupsData.DataAccessGroupItem
	     * @type {Object}
	     * @property {String} dataAccessGroupId Data group id
	     * @property {?Object} additions Container object for custom API extensions
	     */
	
	    /**
	     * @typedef AccessGroupsData.DataAccessGroupItemBase
	     * @type {Object}
	     * @property {String} name Data group name
	     * @property {String} description Data group description
	     * @property {String} legalEntityId Id of Legal Entity on which Data group belongs.
	     * @property {String} type Data group type
	     * @property {Array.<String>} items Data group items
	     * @property {?Object} additions Container object for custom API extensions
	     */
	
	    /**
	     * @typedef AccessGroupsData.DataaccessgroupsforfunctionaccessgroupItem
	     * @type {Object}
	     * @property {String} functionAccessGroupId
	     * @property {?Array.<String>} dataAccessGroupIds
	     * @property {?Object} additions Container object for custom API extensions
	     */
	
	    /**
	     * @typedef AccessGroupsData.Definitions/saPairs
	     * @type {Object}
	     * @property {?String} functionGroup
	     * @property {Array.<String>} dataGroup
	     * @property {?Object} additions Container object for custom API extensions
	     */
	
	    /**
	     * @typedef AccessGroupsData.ExposeDataAccessGroups
	     * @type {Object}
	     * @property {Array.<String>} dataAccessGroupIds
	     * @property {?Object} additions Container object for custom API extensions
	     */
	
	    /**
	     * @typedef AccessGroupsData.ExposeFunctionAccessGroups
	     * @type {Object}
	     * @property {Array.<String>} functionAccessGroupIds
	     * @property {?Object} additions Container object for custom API extensions
	     */
	
	    /**
	     * @typedef AccessGroupsData.FunctionAccessGroupItem
	     * @type {Object}
	     * @property {String} functionAccessGroupId Function group id
	     * @property {?Object} additions Container object for custom API extensions
	     */
	
	    /**
	     * @typedef AccessGroupsData.FunctionAccessGroupItemBase
	     * @type {Object}
	     * @property {String} name Function group name
	     * @property {String} description Function group description
	     * @property {String} legalEntityId Id of Legal Entity on which Function group belongs.
	     * @property {?Array.<AccessGroupsData.PermissionItem>} permissions
	     * @property {?Object} additions Container object for custom API extensions
	     */
	
	    /**
	     * @typedef AccessGroupsData.FunctionsItem
	     * @type {Object}
	     * @property {String} functionId
	     * @property {String} functionCode
	     * @property {String} resource
	     * @property {String} name
	     * @property {Array.<AccessGroupsData.PrivilegeItem>} privileges
	     * @property {?Object} additions Container object for custom API extensions
	     */
	
	    /**
	     * @typedef AccessGroupsData.GetDataAccessGroups
	     * @type {Array.<AccessGroupsData.DataAccessGroupItem>}
	     */
	
	    /**
	     * @typedef AccessGroupsData.GetFunctionAccessGroups
	     * @type {Array.<AccessGroupsData.FunctionAccessGroupItem>}
	     */
	
	    /**
	     * @typedef AccessGroupsData.GetFunctions
	     * @type {Array.<AccessGroupsData.FunctionsItem>}
	     */
	
	    /**
	     * @typedef AccessGroupsData.GetPrivileges
	     * @type {Array.<AccessGroupsData.GetPrivilegesItem>}
	     */
	
	    /**
	     * @typedef AccessGroupsData.GetPrivilegesItem
	     * @type {Object}
	     * @property {String} privilege
	     * @property {?Object} additions Container object for custom API extensions
	     */
	
	    /**
	     * @typedef AccessGroupsData.GetServiceAgreementRoles
	     * @type {Object}
	     * @property {Array.<String>} roles
	     * @property {?Object} additions Container object for custom API extensions
	     */
	
	    /**
	     * @typedef AccessGroupsData.GetServiceAgreements
	     * @type {Array.<AccessGroupsData.ServiceagreementGet>}
	     */
	
	    /**
	     * @typedef AccessGroupsData.GetServiceAgreementsAdmin
	     * @type {Array.<AccessGroupsData.ServiceagreementAdminItem>}
	     */
	
	    /**
	     * @typedef AccessGroupsData.GetUser
	     * @type {Object}
	     * @property {String} id
	     * @property {String} userId
	     * @property {String} serviceAgreementId
	     * @property {?Array.<AccessGroupsData.DataaccessgroupsforfunctionaccessgroupItem>} dataAccessGroupsByFunctionAccessGroup
	     * @property {?Object} additions Container object for custom API extensions
	     */
	
	    /**
	     * @typedef AccessGroupsData.GetUsers
	     * @type {Array.<AccessGroupsData.GetUser>}
	     */
	
	    /**
	     * @typedef AccessGroupsData.IdItem
	     * @type {Object}
	     * @property {String} id
	     * @property {?Object} additions Container object for custom API extensions
	     */
	
	    /**
	     * @typedef AccessGroupsData.LegalEntityItem
	     * @type {Object}
	     * @property {String} id
	     * @property {String} name Legal entity name to display
	     * @property {?Object} additions Container object for custom API extensions
	     */
	
	    /**
	     * @typedef AccessGroupsData.LimitItem
	     * @type {Object}
	     * @property {String} limitType One of "daily", "weekly", "monthly", "upper"
	     * @property {?Number} amount
	     * @property {?Object} additions Container object for custom API extensions
	     */
	
	    /**
	     * @typedef AccessGroupsData.PairItem
	     * @type {Object}
	     * @property {String} functionAccessGroupId
	     * @property {String} dataAccessGroupId
	     * @property {?Object} additions Container object for custom API extensions
	     */
	
	    /**
	     * @typedef AccessGroupsData.PermissionItem
	     * @type {Object}
	     * @property {String} functionId
	     * @property {Array.<AccessGroupsData.PrivilegeItem>} assignedPrivileges
	     * @property {?Object} additions Container object for custom API extensions
	     */
	
	    /**
	     * @typedef AccessGroupsData.PermissionsSummary
	     * @type {Array.<AccessGroupsData.PermissionsSummaryItem>}
	     */
	
	    /**
	     * @typedef AccessGroupsData.PermissionsSummaryItem
	     * @type {Object}
	     * @property {String} resource Resource name
	     * @property {String} function Business function name
	     * @property {AccessGroupsData.permissions} permissions Allowed user permissions
	     * @property {?Object} additions Container object for custom API extensions
	     */
	
	    /**
	     * @typedef AccessGroupsData.PrivilegeItem
	     * @type {Object}
	     * @property {String} privilege
	     * @property {?Array.<AccessGroupsData.LimitItem>} limits
	     * @property {?Object} additions Container object for custom API extensions
	     */
	
	    /**
	     * @typedef AccessGroupsData.ProviderItem
	     * @type {Object}
	     * @property {?Array.<String>} users User external ids
	     * @property {?Object} additions Container object for custom API extensions
	     */
	
	    /**
	     * @typedef AccessGroupsData.ProviderUserForServiceAgreement
	     * @type {Object}
	     * @property {String} id
	     * @property {?Object} additions Container object for custom API extensions
	     */
	
	    /**
	     * @typedef AccessGroupsData.ProvidersItem
	     * @type {Object}
	     * @property {?String} id
	     * @property {?Array.<String>} users
	     * @property {?Array.<String>} admins
	     * @property {?Object} additions Container object for custom API extensions
	     */
	
	    /**
	     * @typedef AccessGroupsData.ServiceAgreementItem
	     * @type {Object}
	     * @property {String} creatorLegalEntity
	     * @property {?Array.<AccessGroupsData.ProvidersItem>} providers
	     * @property {?Array.<AccessGroupsData.ConsumersItem>} consumers
	     * @property {?Object} additions Container object for custom API extensions
	     */
	
	    /**
	     * @typedef AccessGroupsData.ServiceAgreementPartialItem
	     * @type {Object}
	     * @property {String} id
	     * @property {?String} externalId External ID of Service Agreement
	     * @property {String} name Service agreement name to display
	     * @property {String} description Brief text to describe service agreement
	     * @property {Boolean} isMaster Defines default service agreement when none selected, only one can hold true value
	     * @property {?Object} additions Container object for custom API extensions
	     */
	
	    /**
	     * @typedef AccessGroupsData.ServiceAgreementParticipantItem
	     * @type {Object}
	     * @property {String} id Legal Entity Id
	     * @property {String} externalId External id of the Legal Entity
	     * @property {String} name Name of the Legal Entity
	     * @property {Array.<String>} roles The roles into the service agreement for the given user
	     * @property {?Object} additions Container object for custom API extensions
	     */
	
	    /**
	     * @typedef AccessGroupsData.ServiceAgreementParticipants
	     * @type {Array.<AccessGroupsData.ServiceAgreementParticipantItem>}
	     */
	
	    /**
	     * @typedef AccessGroupsData.ServiceAgreementPost
	     * @type {Object}
	     * @property {String} name Service Agreement name
	     * @property {String} description Service Agreement description
	     * @property {Array.<String>} providers Service Agreement providers
	     * @property {Array.<String>} consumers Service Agreement consumers
	     * @property {?Object} additions Container object for custom API extensions
	     */
	
	    /**
	     * @typedef AccessGroupsData.ServiceAgreementPut
	     * @type {Object}
	     * @property {?String} name Service Agreement name
	     * @property {?String} description Service Agreement description
	     * @property {?String} externalId External ID of Service Agreement
	     * @property {?Object} additions Container object for custom API extensions
	     */
	
	    /**
	     * @typedef AccessGroupsData.ServiceAgreementUserGet
	     * @type {Object}
	     * @property {String} id
	     * @property {String} externalId
	     * @property {String} legalEntityId
	     * @property {String} fullName
	     * @property {?Object} additions Container object for custom API extensions
	     */
	
	    /**
	     * @typedef AccessGroupsData.ServiceAgreementUsers
	     * @type {Array.<AccessGroupsData.ServiceAgreementUserGet>}
	     */
	
	    /**
	     * @typedef AccessGroupsData.ServiceagreementAdminItem
	     * @type {Object}
	     * @property {String} id Service agreement id
	     * @property {?String} externalId External ID of Service Agreement
	     * @property {String} name Name of the service agreement
	     * @property {String} description Description of the service agreement
	     * @property {?Boolean} isMaster Defines weather service agreement is master
	     * @property {Array.<String>} roles The roles into the service agreement for the given user
	     * @property {?Object} additions Container object for custom API extensions
	     */
	
	    /**
	     * @typedef AccessGroupsData.ServiceagreementGet
	     * @type {Object}
	     * @property {String} creatorLegalEntity
	     * @property {?Array.<AccessGroupsData.ProvidersItem>} providers
	     * @property {?Array.<AccessGroupsData.ConsumersItem>} consumers
	     * @property {?Object} additions Container object for custom API extensions
	     */
	
	    /**
	     * @typedef AccessGroupsData.ServicesAgreementIngest
	     * @type {Object}
	     * @property {String} name The service agreement name
	     * @property {?String} externalId External ID of Service Agreement
	     * @property {String} description Description
	     * @property {Array.<AccessGroupsData.ConsumerItem>} consumersToIngest Consumers of the service agreement
	     * @property {Array.<AccessGroupsData.ProviderItem>} providersToIngest Providers of the service agreement
	     * @property {?Object} additions Container object for custom API extensions
	     */
	
	    /**
	     * @typedef AccessGroupsData.UpdateAdmins
	     * @type {Object}
	     * @property {?Array.<AccessGroupsData.AdminItem>} consumers
	     * @property {?Array.<AccessGroupsData.AdminItem>} providers
	     * @property {?Object} additions Container object for custom API extensions
	     */
	
	    /**
	     * @typedef AccessGroupsData.UserContext-POST
	     * @type {Object}
	     * @property {String} serviceAgreementId
	     * @property {String} legalEntityId
	     * @property {?Object} additions Container object for custom API extensions
	     */
	
	    /**
	     * @typedef AccessGroupsData.UserContextLegalEntities-GET
	     * @type {Array.<AccessGroupsData.LegalEntityItem>}
	     */
	
	    /**
	     * @typedef AccessGroupsData.UserContextServiceAgreements-GET
	     * @type {Array.<AccessGroupsData.ServiceAgreementPartialItem>}
	     */
	
	    /**
	     * @typedef AccessGroupsData.UserItem
	     * @type {Object}
	     * @property {String} userId
	     * @property {?String} serviceAgreementId
	     * @property {?Object} additions Container object for custom API extensions
	     */
	
	    /**
	     * @typedef AccessGroupsData.permissions
	     * @type {Object}
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
	     * @name AccessGroupsData#getAccessgroupsData
	     * @type {Function}
	     * @description # List Data Groups
	    Provides a list of all data groups for given Legal Entity ID and type.
	     
	     * @param {Object} params Map of query parameters.
	       
	     * @param {string} params.legalEntityId Id of Legal Entity. Eg: 1002.
	       
	     * @param {string} params.type Type od data group. Eg: arrangements.
	       
	     
	     * @param {?Object} headers Map of custom header attributes.
	       
	     
	     * @returns {Promise.<Response>} Resolves data value as {@link AccessGroupsData.GetDataAccessGroups} on success 
	     *
	     * @example
	     * accessGroupsData
	     *  .getAccessgroupsData(params, headers)
	     *  .then(function(result){
	     *    console.log('headers', result.headers)
	     *    console.log('data', result.data);
	     *  });
	     */
	    function getAccessgroupsData(params, headers) {
	      var url = '' + baseUri + version + '/accessgroups/data';
	
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
	     * @name AccessGroupsData#postAccessgroupsDataRecord
	     * @type {Function}
	     * @description # Create Data Group
	    Creates a new data group.
	     
	     * @param {AccessGroupsData.DataAccessGroupItemBase} data Data to be sent as the request message data.
	       
	     
	     * @param {?Object} headers Map of custom header attributes.
	       
	     
	     * @returns {Promise.<Response>} Resolves data value as {@link AccessGroupsData.IdItem} on success 
	     *
	     * @example
	     * accessGroupsData
	     *  .postAccessgroupsDataRecord(data, headers)
	     *  .then(function(result){
	     *    console.log('headers', result.headers)
	     *    console.log('data', result.data);
	     *  });
	     */
	    function postAccessgroupsDataRecord(data, headers) {
	      var url = '' + baseUri + version + '/accessgroups/data';
	
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
	     * @name AccessGroupsData#getAccessgroupsFunction
	     * @type {Function}
	     * @description # List Function Groups
	    Provides a list of all function groups for given Legal Entity ID.
	     
	     * @param {Object} params Map of query parameters.
	       
	     * @param {string} params.legalEntityId Legal Entity ID. Eg: 1002.
	       
	     
	     * @param {?Object} headers Map of custom header attributes.
	       
	     
	     * @returns {Promise.<Response>} Resolves data value as {@link AccessGroupsData.GetFunctionAccessGroups} on success 
	     *
	     * @example
	     * accessGroupsData
	     *  .getAccessgroupsFunction(params, headers)
	     *  .then(function(result){
	     *    console.log('headers', result.headers)
	     *    console.log('data', result.data);
	     *  });
	     */
	    function getAccessgroupsFunction(params, headers) {
	      var url = '' + baseUri + version + '/accessgroups/function';
	
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
	     * @name AccessGroupsData#postAccessgroupsFunctionRecord
	     * @type {Function}
	     * @description # Create Function Group
	    Creates a new function group.
	     
	     * @param {AccessGroupsData.FunctionAccessGroupItemBase} data Data to be sent as the request message data.
	       
	     
	     * @param {?Object} headers Map of custom header attributes.
	       
	     
	     * @returns {Promise.<Response>} Resolves data value as {@link AccessGroupsData.IdItem} on success 
	     *
	     * @example
	     * accessGroupsData
	     *  .postAccessgroupsFunctionRecord(data, headers)
	     *  .then(function(result){
	     *    console.log('headers', result.headers)
	     *    console.log('data', result.data);
	     *  });
	     */
	    function postAccessgroupsFunctionRecord(data, headers) {
	      var url = '' + baseUri + version + '/accessgroups/function';
	
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
	     * @name AccessGroupsData#getAccessgroupsConfigFunctions
	     * @type {Function}
	     * @description # List All Business Functions
	    Provides a list of all available business functions that can be used in setting up Entitlements permissions.
	     
	     * @param {?Object} params Map of query parameters.
	       
	     
	     * @param {?Object} headers Map of custom header attributes.
	       
	     
	     * @returns {Promise.<Response>} Resolves data value as {@link AccessGroupsData.GetFunctions} on success 
	     *
	     * @example
	     * accessGroupsData
	     *  .getAccessgroupsConfigFunctions(params, headers)
	     *  .then(function(result){
	     *    console.log('headers', result.headers)
	     *    console.log('data', result.data);
	     *  });
	     */
	    function getAccessgroupsConfigFunctions(params, headers) {
	      var url = '' + baseUri + version + '/accessgroups/config/functions';
	
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
	     * @name AccessGroupsData#postAccessgroupsUsersRecord
	     * @type {Function}
	     * @description # Create User Access
	    Creates a new user access.
	     
	     * @param {AccessGroupsData.UserItem} data Data to be sent as the request message data.
	       
	     
	     * @param {?Object} headers Map of custom header attributes.
	       
	     
	     * @returns {Promise.<Response>} Resolves data value as {@link AccessGroupsData.IdItem} on success 
	     *
	     * @example
	     * accessGroupsData
	     *  .postAccessgroupsUsersRecord(data, headers)
	     *  .then(function(result){
	     *    console.log('headers', result.headers)
	     *    console.log('data', result.data);
	     *  });
	     */
	    function postAccessgroupsUsersRecord(data, headers) {
	      var url = '' + baseUri + version + '/accessgroups/users';
	
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
	     * @name AccessGroupsData#getAccessgroupsUsers
	     * @type {Function}
	     * @description # List User Accesses
	    Provides all user accesses (optionally can be queried by user ID or service agreement ID).
	     
	     * @param {?Object} params Map of query parameters.
	       
	     * @param {?string} params.userId User ID. Eg: 8a48e2685d788166015d791b0b9f0003.
	       
	     * @param {?string} params.serviceAgreementId Service agreement ID. Eg: 8a48e2685d787f78015d791ab6ad0002.
	       
	     
	     * @param {?Object} headers Map of custom header attributes.
	       
	     
	     * @returns {Promise.<Response>} Resolves data value as {@link AccessGroupsData.GetUsers} on success 
	     *
	     * @example
	     * accessGroupsData
	     *  .getAccessgroupsUsers(params, headers)
	     *  .then(function(result){
	     *    console.log('headers', result.headers)
	     *    console.log('data', result.data);
	     *  });
	     */
	    function getAccessgroupsUsers(params, headers) {
	      var url = '' + baseUri + version + '/accessgroups/users';
	
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
	     * @name AccessGroupsData#postAccessgroupsServiceagreementsRecord
	     * @type {Function}
	     * @description # Create Service Agreement
	    Creates a new Service Agreement with specified providers and consumers.
	     
	     * @param {AccessGroupsData.ServiceAgreementPost} data Data to be sent as the request message data.
	       
	     
	     * @param {?Object} headers Map of custom header attributes.
	       
	     
	     * @returns {Promise.<Response>} Resolves data value as {@link AccessGroupsData.IdItem} on success 
	     *
	     * @example
	     * accessGroupsData
	     *  .postAccessgroupsServiceagreementsRecord(data, headers)
	     *  .then(function(result){
	     *    console.log('headers', result.headers)
	     *    console.log('data', result.data);
	     *  });
	     */
	    function postAccessgroupsServiceagreementsRecord(data, headers) {
	      var url = '' + baseUri + version + '/accessgroups/serviceagreements';
	
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
	     * @name AccessGroupsData#getAccessgroupsServiceagreements
	     * @type {Function}
	     * @description # List Service Agreements
	    Provides a list of all service agreements that have been created by given Legal Entity (creator).
	     
	     * @param {Object} params Map of query parameters.
	       
	     * @param {string} params.creatorId Legal entity ID that created the service agreement.
	       
	     
	     * @param {?Object} headers Map of custom header attributes.
	       
	     
	     * @returns {Promise.<Response>} Resolves data value as {@link AccessGroupsData.GetServiceAgreements} on success 
	     *
	     * @example
	     * accessGroupsData
	     *  .getAccessgroupsServiceagreements(params, headers)
	     *  .then(function(result){
	     *    console.log('headers', result.headers)
	     *    console.log('data', result.data);
	     *  });
	     */
	    function getAccessgroupsServiceagreements(params, headers) {
	      var url = '' + baseUri + version + '/accessgroups/serviceagreements';
	
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
	     * @name AccessGroupsData#postAccessgroupsUsercontextRecord
	     * @type {Function}
	     * @description Create user context for current user
	     
	     * @param {AccessGroupsData.UserContext-POST} data Data to be sent as the request message data.
	       
	     
	     * @param {?Object} headers Map of custom header attributes.
	       
	     
	     * @returns {Promise.<Response>}
	     *
	     * @example
	     * accessGroupsData
	     *  .postAccessgroupsUsercontextRecord(data, headers)
	     *  .then(function(result){
	     *    console.log('headers', result.headers)
	     *    console.log('data', result.data);
	     *  });
	     */
	    function postAccessgroupsUsercontextRecord(data, headers) {
	      var url = '' + baseUri + version + '/accessgroups/usercontext';
	
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
	     * @name AccessGroupsData#getAccessgroupsDataRecord
	     * @type {Function}
	     * @description # Retrieve Data Group details
	    Retrieves details for a specific data group.
	     
	     * @param {string} id 
	       
	     
	     * @param {?Object} params Map of query parameters.
	       
	     
	     * @param {?Object} headers Map of custom header attributes.
	       
	     
	     * @returns {Promise.<Response>} Resolves data value as {@link AccessGroupsData.DataAccessGroupItem} on success 
	     *
	     * @example
	     * accessGroupsData
	     *  .getAccessgroupsDataRecord(id, params, headers)
	     *  .then(function(result){
	     *    console.log('headers', result.headers)
	     *    console.log('data', result.data);
	     *  });
	     */
	    function getAccessgroupsDataRecord(id, params, headers) {
	      var url = '' + baseUri + version + '/accessgroups/data/' + id;
	
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
	     * @name AccessGroupsData#putAccessgroupsDataRecord
	     * @type {Function}
	     * @description # Update Data Group details
	    Updates details for a specific data group.
	     
	     * @param {string} id 
	       
	     
	     * @param {AccessGroupsData.DataAccessGroupItem} data Data to be sent as the request message data.
	       
	     
	     * @param {?Object} headers Map of custom header attributes.
	       
	     
	     * @returns {Promise.<Response>}
	     *
	     * @example
	     * accessGroupsData
	     *  .putAccessgroupsDataRecord(id, data, headers)
	     *  .then(function(result){
	     *    console.log('headers', result.headers)
	     *    console.log('data', result.data);
	     *  });
	     */
	    function putAccessgroupsDataRecord(id, data, headers) {
	      var url = '' + baseUri + version + '/accessgroups/data/' + id;
	
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
	     * @name AccessGroupsData#deleteAccessgroupsDataRecord
	     * @type {Function}
	     * @description # Delete Data Group
	    Deletes the specific data group.
	     
	     * @param {string} id 
	       
	     
	     * @param {?Object} data Data to be sent as the request message data.
	       
	     
	     * @param {?Object} headers Map of custom header attributes.
	       
	     
	     * @returns {Promise.<Response>}
	     *
	     * @example
	     * accessGroupsData
	     *  .deleteAccessgroupsDataRecord(id, data, headers)
	     *  .then(function(result){
	     *    console.log('headers', result.headers)
	     *    console.log('data', result.data);
	     *  });
	     */
	    function deleteAccessgroupsDataRecord(id, data, headers) {
	      var url = '' + baseUri + version + '/accessgroups/data/' + id;
	
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
	     * @name AccessGroupsData#getAccessgroupsFunctionRecord
	     * @type {Function}
	     * @description # Retrieve Function Group details
	    Retrieves details for a specific function group.
	     
	     * @param {string} id 
	       
	     
	     * @param {?Object} params Map of query parameters.
	       
	     
	     * @param {?Object} headers Map of custom header attributes.
	       
	     
	     * @returns {Promise.<Response>} Resolves data value as {@link AccessGroupsData.FunctionAccessGroupItem} on success 
	     *
	     * @example
	     * accessGroupsData
	     *  .getAccessgroupsFunctionRecord(id, params, headers)
	     *  .then(function(result){
	     *    console.log('headers', result.headers)
	     *    console.log('data', result.data);
	     *  });
	     */
	    function getAccessgroupsFunctionRecord(id, params, headers) {
	      var url = '' + baseUri + version + '/accessgroups/function/' + id;
	
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
	     * @name AccessGroupsData#putAccessgroupsFunctionRecord
	     * @type {Function}
	     * @description # Update Function Group details
	    Updates details for a specific function group.
	     
	     * @param {string} id 
	       
	     
	     * @param {AccessGroupsData.FunctionAccessGroupItem} data Data to be sent as the request message data.
	       
	     
	     * @param {?Object} headers Map of custom header attributes.
	       
	     
	     * @returns {Promise.<Response>}
	     *
	     * @example
	     * accessGroupsData
	     *  .putAccessgroupsFunctionRecord(id, data, headers)
	     *  .then(function(result){
	     *    console.log('headers', result.headers)
	     *    console.log('data', result.data);
	     *  });
	     */
	    function putAccessgroupsFunctionRecord(id, data, headers) {
	      var url = '' + baseUri + version + '/accessgroups/function/' + id;
	
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
	     * @name AccessGroupsData#deleteAccessgroupsFunctionRecord
	     * @type {Function}
	     * @description # Delete Function Group
	    Deletes the specific function group.
	     
	     * @param {string} id 
	       
	     
	     * @param {?Object} data Data to be sent as the request message data.
	       
	     
	     * @param {?Object} headers Map of custom header attributes.
	       
	     
	     * @returns {Promise.<Response>}
	     *
	     * @example
	     * accessGroupsData
	     *  .deleteAccessgroupsFunctionRecord(id, data, headers)
	     *  .then(function(result){
	     *    console.log('headers', result.headers)
	     *    console.log('data', result.data);
	     *  });
	     */
	    function deleteAccessgroupsFunctionRecord(id, data, headers) {
	      var url = '' + baseUri + version + '/accessgroups/function/' + id;
	
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
	     * @name AccessGroupsData#getAccessgroupsUsersRecord
	     * @type {Function}
	     * @description # Provides User Access details
	    Provides User Access details such as assigned user id, service agreement id, function groups and data groups.
	     
	     * @param {string} id 
	       
	     
	     * @param {?Object} params Map of query parameters.
	       
	     
	     * @param {?Object} headers Map of custom header attributes.
	       
	     
	     * @returns {Promise.<Response>} Resolves data value as {@link AccessGroupsData.GetUser} on success 
	     *
	     * @example
	     * accessGroupsData
	     *  .getAccessgroupsUsersRecord(id, params, headers)
	     *  .then(function(result){
	     *    console.log('headers', result.headers)
	     *    console.log('data', result.data);
	     *  });
	     */
	    function getAccessgroupsUsersRecord(id, params, headers) {
	      var url = '' + baseUri + version + '/accessgroups/users/' + id;
	
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
	     * @name AccessGroupsData#getAccessgroupsUsersPrivileges
	     * @type {Function}
	     * @description # List User privileges for given Business function
	    Provides a list of user privileges for given business function(eg. Contacts).
	     
	     * @param {Object} params Map of query parameters.
	       
	     * @param {string} params.userId User ID. Eg: 8a48e2685d787f78015d791ab6ad0002.
	       
	     * @param {?string} params.serviceAgreementId Service Agreement Id. Eg: 8a48e2685d788166015d791b0b9f0003.
	       
	     * @param {string} params.functionName Name of Function. Eg: Contacts.
	       
	     * @param {string} params.resourceName Name of Resource. Eg: Contacts.
	       
	     
	     * @param {?Object} headers Map of custom header attributes.
	       
	     
	     * @returns {Promise.<Response>} Resolves data value as {@link AccessGroupsData.GetPrivileges} on success 
	     *
	     * @example
	     * accessGroupsData
	     *  .getAccessgroupsUsersPrivileges(params, headers)
	     *  .then(function(result){
	     *    console.log('headers', result.headers)
	     *    console.log('data', result.data);
	     *  });
	     */
	    function getAccessgroupsUsersPrivileges(params, headers) {
	      var url = '' + baseUri + version + '/accessgroups/users/privileges';
	
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
	     * @name AccessGroupsData#getAccessgroupsUsersPermissions
	     * @type {Function}
	     * @description # Check if User is allowed to perform given action
	    Checks if the user has the specific privileges for given business function.
	      
	     * @param {Object} params Map of query parameters.
	       
	     * @param {string} params.userId User Id. Eg: 8a48e2685d787f78015d791ab6ad0002.
	       
	     * @param {?string} params.serviceAgreementId Service Agreement Id. Eg: 8a48e2685d787f78015d791ab6123456.
	       
	     * @param {string} params.functionName Name of Function. Eg: Contacts.
	       
	     * @param {string} params.resourceName Name of Resource. Eg: Contacts.
	       
	     * @param {string} params.privileges comma-separated privileges. Eg: view,create,execute.
	       
	     
	     * @param {?Object} headers Map of custom header attributes.
	       
	     
	     * @returns {Promise.<Response>}
	     *
	     * @example
	     * accessGroupsData
	     *  .getAccessgroupsUsersPermissions(params, headers)
	     *  .then(function(result){
	     *    console.log('headers', result.headers)
	     *    console.log('data', result.data);
	     *  });
	     */
	    function getAccessgroupsUsersPermissions(params, headers) {
	      var url = '' + baseUri + version + '/accessgroups/users/permissions';
	
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
	     * @name AccessGroupsData#postAccessgroupsUsersFunctionRecord
	     * @type {Function}
	     * @description # Assign/remove Function groups to user access
	    Assigns or removes the specified Function Groups to the given User access.
	     
	     * @param {string} id 
	       
	     
	     * @param {AccessGroupsData.AssignFunctionAccessGroup} data Data to be sent as the request message data.
	       
	     
	     * @param {?Object} headers Map of custom header attributes.
	       
	     
	     * @returns {Promise.<Response>}
	     *
	     * @example
	     * accessGroupsData
	     *  .postAccessgroupsUsersFunctionRecord(id, data, headers)
	     *  .then(function(result){
	     *    console.log('headers', result.headers)
	     *    console.log('data', result.data);
	     *  });
	     */
	    function postAccessgroupsUsersFunctionRecord(id, data, headers) {
	      var url = '' + baseUri + version + '/accessgroups/users/' + id + '/function';
	
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
	     * @name AccessGroupsData#postAccessgroupsUsersDataRecord
	     * @type {Function}
	     * @description # Assign/remove Data groups to user access
	    Assigns or removes specified Data Groups to the given User access/function group.
	      
	     * @param {string} id 
	       
	     
	     * @param {AccessGroupsData.AssignDataAccessGroup} data Data to be sent as the request message data.
	       
	     
	     * @param {?Object} headers Map of custom header attributes.
	       
	     
	     * @returns {Promise.<Response>}
	     *
	     * @example
	     * accessGroupsData
	     *  .postAccessgroupsUsersDataRecord(id, data, headers)
	     *  .then(function(result){
	     *    console.log('headers', result.headers)
	     *    console.log('data', result.data);
	     *  });
	     */
	    function postAccessgroupsUsersDataRecord(id, data, headers) {
	      var url = '' + baseUri + version + '/accessgroups/users/' + id + '/data';
	
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
	     * @name AccessGroupsData#getAccessgroupsUsersPrivilegesArrangements
	     * @type {Function}
	     * @description # List Arrangements that user has access to
	    Provides (retrieve) list of Arrangements along with appropriate privilege(s) that given User has access to.
	     
	     * @param {Object} params Map of query parameters.
	       
	     * @param {string} params.userId User Id. Eg: 8a48e2685d787f78015d791ab6ad0002.
	       
	     * @param {?string} params.serviceAgreementId Service Agreement Id. Eg: 8a48e2685d787f78015d791ab6123456.
	       
	     * @param {string} params.functionName Name of function. Eg: Product Summary.
	       
	     * @param {string} params.resourceName Name of resource. Eg: Product Summary.
	       
	     * @param {?string} params.privilegeName Name of privilege. Eg: view.
	       
	     
	     * @param {?Object} headers Map of custom header attributes.
	       
	     
	     * @returns {Promise.<Response>} Resolves data value as {@link AccessGroupsData.ArrangementPrivileges} on success 
	     *
	     * @example
	     * accessGroupsData
	     *  .getAccessgroupsUsersPrivilegesArrangements(params, headers)
	     *  .then(function(result){
	     *    console.log('headers', result.headers)
	     *    console.log('data', result.data);
	     *  });
	     */
	    function getAccessgroupsUsersPrivilegesArrangements(params, headers) {
	      var url = '' + baseUri + version + '/accessgroups/users/privileges/arrangements';
	
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
	     * @name AccessGroupsData#getAccessgroupsUsersPermissionsSummary
	     * @type {Function}
	     * @description # User Permissions Summary
	    Returns aggregated summary of user permissions.
	    Returned data structure will contain all allowed Resources + Business Functions + Permissions.
	      
	     * @param {?Object} params Map of query parameters.
	       
	     
	     * @param {?Object} headers Map of custom header attributes.
	       
	     
	     * @returns {Promise.<Response>} Resolves data value as {@link AccessGroupsData.PermissionsSummary} on success 
	     *
	     * @example
	     * accessGroupsData
	     *  .getAccessgroupsUsersPermissionsSummary(params, headers)
	     *  .then(function(result){
	     *    console.log('headers', result.headers)
	     *    console.log('data', result.data);
	     *  });
	     */
	    function getAccessgroupsUsersPermissionsSummary(params, headers) {
	      var url = '' + baseUri + version + '/accessgroups/users/permissions/summary';
	
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
	     * @name AccessGroupsData#getAccessgroupsServiceagreementsRecord
	     * @type {Function}
	     * @description # Retrieve Service Agreement details
	    Retrieves Service Agreement details by given ID.
	     
	     * @param {string} serviceAgreementId 
	       
	     
	     * @param {?Object} params Map of query parameters.
	       
	     
	     * @param {?Object} headers Map of custom header attributes.
	       
	     
	     * @returns {Promise.<Response>} Resolves data value as {@link AccessGroupsData.ServiceAgreementItem} on success 
	     *
	     * @example
	     * accessGroupsData
	     *  .getAccessgroupsServiceagreementsRecord(serviceAgreementId, params, headers)
	     *  .then(function(result){
	     *    console.log('headers', result.headers)
	     *    console.log('data', result.data);
	     *  });
	     */
	    function getAccessgroupsServiceagreementsRecord(serviceAgreementId, params, headers) {
	      var url = '' + baseUri + version + '/accessgroups/serviceagreements/' + serviceAgreementId;
	
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
	     * @name AccessGroupsData#putAccessgroupsServiceagreementsRecord
	     * @type {Function}
	     * @description # Update Service Agreement details
	    Updates name, description and external Id for a specific service agreement.
	     
	     * @param {string} serviceAgreementId 
	       
	     
	     * @param {AccessGroupsData.ServiceAgreementPut} data Data to be sent as the request message data.
	       
	     
	     * @param {?Object} headers Map of custom header attributes.
	       
	     
	     * @returns {Promise.<Response>}
	     *
	     * @example
	     * accessGroupsData
	     *  .putAccessgroupsServiceagreementsRecord(serviceAgreementId, data, headers)
	     *  .then(function(result){
	     *    console.log('headers', result.headers)
	     *    console.log('data', result.data);
	     *  });
	     */
	    function putAccessgroupsServiceagreementsRecord(serviceAgreementId, data, headers) {
	      var url = '' + baseUri + version + '/accessgroups/serviceagreements/' + serviceAgreementId;
	
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
	     * @name AccessGroupsData#getAccessgroupsServiceagreementsRoles
	     * @type {Function}
	     * @description # List Service Agreement Roles
	    Provides a list of all service agreement roles.
	     
	     * @param {?Object} params Map of query parameters.
	       
	     
	     * @param {?Object} headers Map of custom header attributes.
	       
	     
	     * @returns {Promise.<Response>} Resolves data value as {@link AccessGroupsData.GetServiceAgreementRoles} on success 
	     *
	     * @example
	     * accessGroupsData
	     *  .getAccessgroupsServiceagreementsRoles(params, headers)
	     *  .then(function(result){
	     *    console.log('headers', result.headers)
	     *    console.log('data', result.data);
	     *  });
	     */
	    function getAccessgroupsServiceagreementsRoles(params, headers) {
	      var url = '' + baseUri + version + '/accessgroups/serviceagreements/roles';
	
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
	     * @name AccessGroupsData#getAccessgroupsServiceagreementsAdminsMe
	     * @type {Function}
	     * @description # List Service Agreements where the User is Admin
	    Provides a list of all Service Agreements where the authenticated User is Admin.
	     
	     * @param {?Object} params Map of query parameters.
	       
	     
	     * @param {?Object} headers Map of custom header attributes.
	       
	     
	     * @returns {Promise.<Response>} Resolves data value as {@link AccessGroupsData.GetServiceAgreementsAdmin} on success 
	     *
	     * @example
	     * accessGroupsData
	     *  .getAccessgroupsServiceagreementsAdminsMe(params, headers)
	     *  .then(function(result){
	     *    console.log('headers', result.headers)
	     *    console.log('data', result.data);
	     *  });
	     */
	    function getAccessgroupsServiceagreementsAdminsMe(params, headers) {
	      var url = '' + baseUri + version + '/accessgroups/serviceagreements/admins/me';
	
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
	     * @name AccessGroupsData#postAccessgroupsServiceagreementsIngestServiceagreementsRecord
	     * @type {Function}
	     * @description # Ingest Service Agreement
	    Creates new Service Agreement (required to provide Legal Entity participants together with Admins).
	     
	     * @param {AccessGroupsData.ServicesAgreementIngest} data Data to be sent as the request message data.
	       
	     
	     * @param {?Object} headers Map of custom header attributes.
	       
	     
	     * @returns {Promise.<Response>} Resolves data value as {@link AccessGroupsData.IdItem} on success 
	     *
	     * @example
	     * accessGroupsData
	     *  .postAccessgroupsServiceagreementsIngestServiceagreementsRecord(data, headers)
	     *  .then(function(result){
	     *    console.log('headers', result.headers)
	     *    console.log('data', result.data);
	     *  });
	     */
	    function postAccessgroupsServiceagreementsIngestServiceagreementsRecord(data, headers) {
	      var url = '' + baseUri + version + '/accessgroups/serviceagreements/ingest/serviceagreements';
	
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
	     * @name AccessGroupsData#getAccessgroupsServiceagreementsParticipants
	     * @type {Function}
	     * @description # Retrieve Service Agreement participants
	    Retrieves Legal Entities that are participants in Service Agreement together with their roles in the Service Agreement.
	     
	     * @param {string} serviceAgreementId 
	       
	     
	     * @param {?Object} params Map of query parameters.
	       
	     
	     * @param {?Object} headers Map of custom header attributes.
	       
	     
	     * @returns {Promise.<Response>} Resolves data value as {@link AccessGroupsData.ServiceAgreementParticipants} on success 
	     *
	     * @example
	     * accessGroupsData
	     *  .getAccessgroupsServiceagreementsParticipants(serviceAgreementId, params, headers)
	     *  .then(function(result){
	     *    console.log('headers', result.headers)
	     *    console.log('data', result.data);
	     *  });
	     */
	    function getAccessgroupsServiceagreementsParticipants(serviceAgreementId, params, headers) {
	      var url = '' + baseUri + version + '/accessgroups/serviceagreements/' + serviceAgreementId + '/participants';
	
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
	     * @name AccessGroupsData#getAccessgroupsServiceagreementsAdmins
	     * @type {Function}
	     * @description # Retrieve Service Agreement admins
	    Retrieves Users that are admins in Service Agreement.
	     
	     * @param {string} serviceAgreementId 
	       
	     
	     * @param {?Object} params Map of query parameters.
	       
	     
	     * @param {?Object} headers Map of custom header attributes.
	       
	     
	     * @returns {Promise.<Response>} Resolves data value as {@link AccessGroupsData.ServiceAgreementUsers} on success 
	     *
	     * @example
	     * accessGroupsData
	     *  .getAccessgroupsServiceagreementsAdmins(serviceAgreementId, params, headers)
	     *  .then(function(result){
	     *    console.log('headers', result.headers)
	     *    console.log('data', result.data);
	     *  });
	     */
	    function getAccessgroupsServiceagreementsAdmins(serviceAgreementId, params, headers) {
	      var url = '' + baseUri + version + '/accessgroups/serviceagreements/' + serviceAgreementId + '/admins';
	
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
	     * @name AccessGroupsData#putAccessgroupsServiceagreementsAdminsRecord
	     * @type {Function}
	     * @description # Add admins in Service Agreement
	    Adds Admins to a given Service Agreement, per role and Legal Entity participant.
	     
	     * @param {string} id 
	       
	     
	     * @param {AccessGroupsData.UpdateAdmins} data Data to be sent as the request message data.
	       
	     
	     * @param {?Object} headers Map of custom header attributes.
	       
	     
	     * @returns {Promise.<Response>}
	     *
	     * @example
	     * accessGroupsData
	     *  .putAccessgroupsServiceagreementsAdminsRecord(id, data, headers)
	     *  .then(function(result){
	     *    console.log('headers', result.headers)
	     *    console.log('data', result.data);
	     *  });
	     */
	    function putAccessgroupsServiceagreementsAdminsRecord(id, data, headers) {
	      var url = '' + baseUri + version + '/accessgroups/serviceagreements/' + id + '/admins';
	
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
	     * @name AccessGroupsData#getAccessgroupsServiceagreementsUsers
	     * @type {Function}
	     * @description # List users in Service Agreement
	    Provides a list of all users that belong to a given Service Agreement.
	     
	     * @param {string} id 
	       
	     
	     * @param {?Object} params Map of query parameters.
	       
	     * @param {?number} params.from Page Number. Skip over pages of elements by specifying a start value for the query. Eg: 20. (defaults to 0)
	       
	     * @param {?number} params.size Limit the number of elements on the response. When used in combination with cursor, the value
	    is allowed to be a negative number to indicate requesting records upwards from the starting point indicated
	    by the cursor. Eg: 80. (defaults to 10)
	       
	     * @param {?string} params.cursor Record UUID. As an alternative for specifying 'from' this allows to point to the record to start the selection from. Eg: 76d5be8b-e80d-4842-8ce6-ea67519e8f74. (defaults to "")
	       
	     * @param {?string} params.query The search term used to search. Eg: backb.
	       
	     
	     * @param {?Object} headers Map of custom header attributes.
	       
	     
	     * @returns {Promise.<Response>} Resolves data value as {@link AccessGroupsData.ServiceAgreementUsers} on success 
	     *
	     * @example
	     * accessGroupsData
	     *  .getAccessgroupsServiceagreementsUsers(id, params, headers)
	     *  .then(function(result){
	     *    console.log('headers', result.headers)
	     *    console.log('data', result.data);
	     *  });
	     */
	    function getAccessgroupsServiceagreementsUsers(id, params, headers) {
	      var url = '' + baseUri + version + '/accessgroups/serviceagreements/' + id + '/users';
	
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
	     * @name AccessGroupsData#putAccessgroupsServiceagreementsUsersRecord
	     * @type {Function}
	     * @description # Add User in a Service Agreement
	    Adds a User in a Service Agreement (Users can be added only from Provider Legal Entity participant).
	     
	     * @param {string} id 
	       
	     
	     * @param {AccessGroupsData.ProviderUserForServiceAgreement} data Data to be sent as the request message data.
	       
	     
	     * @param {?Object} headers Map of custom header attributes.
	       
	     
	     * @returns {Promise.<Response>}
	     *
	     * @example
	     * accessGroupsData
	     *  .putAccessgroupsServiceagreementsUsersRecord(id, data, headers)
	     *  .then(function(result){
	     *    console.log('headers', result.headers)
	     *    console.log('data', result.data);
	     *  });
	     */
	    function putAccessgroupsServiceagreementsUsersRecord(id, data, headers) {
	      var url = '' + baseUri + version + '/accessgroups/serviceagreements/' + id + '/users';
	
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
	     * @name AccessGroupsData#getAccessgroupsServiceagreementsFunctions
	     * @type {Function}
	     * @description # List Exposed Function Groups
	    Provides a list of the exposed Function Groups for every Consumer under the same Service Agreement.
	      
	     * @param {string} id 
	       
	     
	     * @param {?Object} params Map of query parameters.
	       
	     
	     * @param {?Object} headers Map of custom header attributes.
	       
	     
	     * @returns {Promise.<Response>} Resolves data value as {@link AccessGroupsData.GetFunctionAccessGroups} on success 
	     *
	     * @example
	     * accessGroupsData
	     *  .getAccessgroupsServiceagreementsFunctions(id, params, headers)
	     *  .then(function(result){
	     *    console.log('headers', result.headers)
	     *    console.log('data', result.data);
	     *  });
	     */
	    function getAccessgroupsServiceagreementsFunctions(id, params, headers) {
	      var url = '' + baseUri + version + '/accessgroups/serviceagreements/' + id + '/functions';
	
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
	     * @name AccessGroupsData#deleteAccessgroupsServiceagreementsUsersRecord
	     * @type {Function}
	     * @description # Remove User from Service Agreement
	    Removes the specified User from given Service Agreement.
	     
	     * @param {string} id 
	       
	     
	     * @param {string} userId 
	       
	     
	     * @param {?Object} data Data to be sent as the request message data.
	       
	     
	     * @param {?Object} headers Map of custom header attributes.
	       
	     
	     * @returns {Promise.<Response>}
	     *
	     * @example
	     * accessGroupsData
	     *  .deleteAccessgroupsServiceagreementsUsersRecord(id, userId, data, headers)
	     *  .then(function(result){
	     *    console.log('headers', result.headers)
	     *    console.log('data', result.data);
	     *  });
	     */
	    function deleteAccessgroupsServiceagreementsUsersRecord(id, userId, data, headers) {
	      var url = '' + baseUri + version + '/accessgroups/serviceagreements/' + id + '/users/' + userId;
	
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
	     * @name AccessGroupsData#putAccessgroupsServiceagreementsConsumersFunctionsRecord
	     * @type {Function}
	     * @description # Expose Function Groups in Service Agreement
	    Exposes Function Groups to a Service Agreement.
	    The Function Groups can be exposed only by Admin of Consumer Legal Entity participant.
	      
	     * @param {string} id 
	       
	     
	     * @param {string} consumerId 
	       
	     
	     * @param {AccessGroupsData.ExposeFunctionAccessGroups} data Data to be sent as the request message data.
	       
	     
	     * @param {?Object} headers Map of custom header attributes.
	       
	     
	     * @returns {Promise.<Response>}
	     *
	     * @example
	     * accessGroupsData
	     *  .putAccessgroupsServiceagreementsConsumersFunctionsRecord(id, consumerId, data, headers)
	     *  .then(function(result){
	     *    console.log('headers', result.headers)
	     *    console.log('data', result.data);
	     *  });
	     */
	    function putAccessgroupsServiceagreementsConsumersFunctionsRecord(id, consumerId, data, headers) {
	      var url = '' + baseUri + version + '/accessgroups/serviceagreements/' + id + '/consumers/' + consumerId + '/functions';
	
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
	     * @name AccessGroupsData#deleteAccessgroupsServiceagreementsConsumersFunctionsRecord
	     * @type {Function}
	     * @description # Remove Exposed Function Group
	    Removes Function Group from Service Agreement.
	    The Function Group can be removed only by Admin of Consumer Legal Entity participant.
	     
	     * @param {string} id 
	       
	     
	     * @param {string} consumerId 
	       
	     
	     * @param {string} functionAccessGroupId 
	       
	     
	     * @param {?Object} data Data to be sent as the request message data.
	       
	     
	     * @param {?Object} headers Map of custom header attributes.
	       
	     
	     * @returns {Promise.<Response>}
	     *
	     * @example
	     * accessGroupsData
	     *  .deleteAccessgroupsServiceagreementsConsumersFunctionsRecord(id, consumerId, functionAccessGroupId, data, headers)
	     *  .then(function(result){
	     *    console.log('headers', result.headers)
	     *    console.log('data', result.data);
	     *  });
	     */
	    function deleteAccessgroupsServiceagreementsConsumersFunctionsRecord(id, consumerId, functionAccessGroupId, data, headers) {
	      var url = '' + baseUri + version + '/accessgroups/serviceagreements/' + id + '/consumers/' + consumerId + '/functions/' + functionAccessGroupId;
	
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
	     * @name AccessGroupsData#putAccessgroupsServiceagreementsConsumersFunctionsDataRecord
	     * @type {Function}
	     * @description # Expose Data Groups in Service Agreement
	    Exposes Data Groups to a Service Agreement.
	    The Data Groups can be exposed only by Admin of Consumer Legal Entity participant.
	      
	     * @param {string} id 
	       
	     
	     * @param {string} consumerId 
	       
	     
	     * @param {string} functionAccessGroupId 
	       
	     
	     * @param {AccessGroupsData.ExposeDataAccessGroups} data Data to be sent as the request message data.
	       
	     
	     * @param {?Object} headers Map of custom header attributes.
	       
	     
	     * @returns {Promise.<Response>}
	     *
	     * @example
	     * accessGroupsData
	     *  .putAccessgroupsServiceagreementsConsumersFunctionsDataRecord(id, consumerId, functionAccessGroupId, data, headers)
	     *  .then(function(result){
	     *    console.log('headers', result.headers)
	     *    console.log('data', result.data);
	     *  });
	     */
	    function putAccessgroupsServiceagreementsConsumersFunctionsDataRecord(id, consumerId, functionAccessGroupId, data, headers) {
	      var url = '' + baseUri + version + '/accessgroups/serviceagreements/' + id + '/consumers/' + consumerId + '/functions/' + functionAccessGroupId + '/data';
	
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
	     * @name AccessGroupsData#deleteAccessgroupsServiceagreementsConsumersFunctionsDataRecord
	     * @type {Function}
	     * @description # Remove Exposed Data Group
	    Removes Data Group from Service Agreement.
	    The Data Group can be removed only by Admin of Consumer Legal Entity participant.
	     
	     * @param {string} id 
	       
	     
	     * @param {string} consumerId 
	       
	     
	     * @param {string} functionAccessGroupId 
	       
	     
	     * @param {string} dataAccessGroupId 
	       
	     
	     * @param {?Object} data Data to be sent as the request message data.
	       
	     
	     * @param {?Object} headers Map of custom header attributes.
	       
	     
	     * @returns {Promise.<Response>}
	     *
	     * @example
	     * accessGroupsData
	     *  .deleteAccessgroupsServiceagreementsConsumersFunctionsDataRecord(id, consumerId, functionAccessGroupId, dataAccessGroupId, data, headers)
	     *  .then(function(result){
	     *    console.log('headers', result.headers)
	     *    console.log('data', result.data);
	     *  });
	     */
	    function deleteAccessgroupsServiceagreementsConsumersFunctionsDataRecord(id, consumerId, functionAccessGroupId, dataAccessGroupId, data, headers) {
	      var url = '' + baseUri + version + '/accessgroups/serviceagreements/' + id + '/consumers/' + consumerId + '/functions/' + functionAccessGroupId + '/data/' + dataAccessGroupId;
	
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
	     * @name AccessGroupsData#getAccessgroupsServiceagreementsFunctionsData
	     * @type {Function}
	     * @description # List Exposed Data Groups
	    Provides a list of the exposed Data Groups for a specific Function Group under a specific Service Agreement.
	      
	     * @param {string} id 
	       
	     
	     * @param {string} functionAccessGroupId 
	       
	     
	     * @param {?Object} params Map of query parameters.
	       
	     
	     * @param {?Object} headers Map of custom header attributes.
	       
	     
	     * @returns {Promise.<Response>} Resolves data value as {@link AccessGroupsData.GetDataAccessGroups} on success 
	     *
	     * @example
	     * accessGroupsData
	     *  .getAccessgroupsServiceagreementsFunctionsData(id, functionAccessGroupId, params, headers)
	     *  .then(function(result){
	     *    console.log('headers', result.headers)
	     *    console.log('data', result.data);
	     *  });
	     */
	    function getAccessgroupsServiceagreementsFunctionsData(id, functionAccessGroupId, params, headers) {
	      var url = '' + baseUri + version + '/accessgroups/serviceagreements/' + id + '/functions/' + functionAccessGroupId + '/data';
	
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
	     * @name AccessGroupsData#getAccessgroupsUsercontextServiceagreements
	     * @type {Function}
	     * @description Retrieve the list service agreement of the current user
	     
	     * @param {?Object} params Map of query parameters.
	       
	     * @param {?string} params.query The search term used to search. Eg: backb.
	       
	     * @param {?number} params.from Page Number. Skip over pages of elements by specifying a start value for the query. Eg: 20. (defaults to 0)
	       
	     * @param {?string} params.cursor Record UUID. As an alternative for specifying 'from' this allows to point to the record to start the selection from. Eg: 76d5be8b-e80d-4842-8ce6-ea67519e8f74. (defaults to "")
	       
	     * @param {?number} params.size Limit the number of elements on the response. When used in combination with cursor, the value
	    is allowed to be a negative number to indicate requesting records upwards from the starting point indicated
	    by the cursor. Eg: 80. (defaults to 10)
	       
	     
	     * @param {?Object} headers Map of custom header attributes.
	       
	     
	     * @returns {Promise.<Response>} Resolves data value as {@link AccessGroupsData.UserContextServiceAgreements-GET} on success 
	     *
	     * @example
	     * accessGroupsData
	     *  .getAccessgroupsUsercontextServiceagreements(params, headers)
	     *  .then(function(result){
	     *    console.log('headers', result.headers)
	     *    console.log('data', result.data);
	     *  });
	     */
	    function getAccessgroupsUsercontextServiceagreements(params, headers) {
	      var url = '' + baseUri + version + '/accessgroups/usercontext/serviceagreements';
	
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
	     * @name AccessGroupsData#getAccessgroupsUsercontextServiceagreementsLegalentities
	     * @type {Function}
	     * @description Retrieve the list legal entities for a service agreement of the current user
	     
	     * @param {string} serviceAgreementId 
	       
	     
	     * @param {?Object} params Map of query parameters.
	       
	     * @param {?string} params.query The search term used to search. Eg: backb.
	       
	     * @param {?number} params.from Page Number. Skip over pages of elements by specifying a start value for the query. Eg: 20. (defaults to 0)
	       
	     * @param {?string} params.cursor Record UUID. As an alternative for specifying 'from' this allows to point to the record to start the selection from. Eg: 76d5be8b-e80d-4842-8ce6-ea67519e8f74. (defaults to "")
	       
	     * @param {?number} params.size Limit the number of elements on the response. When used in combination with cursor, the value
	    is allowed to be a negative number to indicate requesting records upwards from the starting point indicated
	    by the cursor. Eg: 80. (defaults to 10)
	       
	     
	     * @param {?Object} headers Map of custom header attributes.
	       
	     
	     * @returns {Promise.<Response>} Resolves data value as {@link AccessGroupsData.UserContextLegalEntities-GET} on success 
	     *
	     * @example
	     * accessGroupsData
	     *  .getAccessgroupsUsercontextServiceagreementsLegalentities(serviceAgreementId, params, headers)
	     *  .then(function(result){
	     *    console.log('headers', result.headers)
	     *    console.log('data', result.data);
	     *  });
	     */
	    function getAccessgroupsUsercontextServiceagreementsLegalentities(serviceAgreementId, params, headers) {
	      var url = '' + baseUri + version + '/accessgroups/usercontext/serviceagreements/' + serviceAgreementId + '/legalentities';
	
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
	     * @name AccessGroupsData#schemas
	     * @type {Object}
	     */
	    var schemas = {};
	
	    /**
	     * @description
	     * An object describing the JSON schema for the postAccessgroupsDataRecord method
	     *
	     * @name AccessGroupsData#schemas.postAccessgroupsDataRecord
	     * @type {Object}
	     * @example
	     * {
	    "properties": {
	      "name": {
	        "type": "string",
	        "minLength": 1,
	        "pattern": "^\\S(.*(\\S))?$",
	        "required": true
	      },
	      "description": {
	        "type": "string",
	        "minLength": 1,
	        "pattern": "^\\S(.*(\\S))?$",
	        "required": true
	      },
	      "legalEntityId": {
	        "type": "string",
	        "minLength": 1,
	        "pattern": "^\\S(.*(\\S))?$",
	        "required": true
	      },
	      "type": {
	        "type": "string",
	        "required": true
	      },
	      "items": {
	        "type": "array",
	        "items": {
	          "properties": {}
	        },
	        "required": true
	      }
	    }
	    }
	     */
	
	    schemas.postAccessgroupsDataRecord = definedTypes['AccessGroupsData.DataAccessGroupItemBase'];
	
	    /**
	     * @description
	     * An object describing the JSON schema for the postAccessgroupsFunctionRecord method
	     *
	     * @name AccessGroupsData#schemas.postAccessgroupsFunctionRecord
	     * @type {Object}
	     * @example
	     * {
	    "properties": {
	      "name": {
	        "type": "string",
	        "minLength": 1,
	        "pattern": "^\\S(.*(\\S))?$",
	        "required": true
	      },
	      "description": {
	        "type": "string",
	        "minLength": 1,
	        "pattern": "^\\S(.*(\\S))?$",
	        "required": true
	      },
	      "legalEntityId": {
	        "type": "string",
	        "minLength": 1,
	        "pattern": "^\\S(.*(\\S))?$",
	        "required": true
	      },
	      "permissions": {
	        "type": "array",
	        "items": {
	          "properties": {
	            "functionId": {
	              "type": "string",
	              "required": true
	            },
	            "assignedPrivileges": {
	              "type": "array",
	              "items": {
	                "properties": {
	                  "privilege": {
	                    "type": "string",
	                    "required": true
	                  },
	                  "limits": {
	                    "type": "array",
	                    "items": {
	                      "properties": {
	                        "limitType": {
	                          "enum": [
	                            "daily",
	                            "weekly",
	                            "monthly",
	                            "upper"
	                          ],
	                          "required": true
	                        },
	                        "amount": {
	                          "type": "number",
	                          "required": false
	                        }
	                      }
	                    },
	                    "required": false
	                  }
	                }
	              },
	              "required": true
	            }
	          }
	        },
	        "required": false
	      }
	    }
	    }
	     */
	
	    schemas.postAccessgroupsFunctionRecord = definedTypes['AccessGroupsData.FunctionAccessGroupItemBase'];
	
	    /**
	     * @description
	     * An object describing the JSON schema for the postAccessgroupsUsersRecord method
	     *
	     * @name AccessGroupsData#schemas.postAccessgroupsUsersRecord
	     * @type {Object}
	     * @example
	     * {
	    "properties": {
	      "userId": {
	        "type": "string",
	        "minLength": 1,
	        "pattern": "^\\S+$",
	        "required": true
	      },
	      "serviceAgreementId": {
	        "type": "string",
	        "required": false
	      }
	    }
	    }
	     */
	
	    schemas.postAccessgroupsUsersRecord = definedTypes['AccessGroupsData.UserItem'];
	
	    /**
	     * @description
	     * An object describing the JSON schema for the postAccessgroupsServiceagreementsRecord method
	     *
	     * @name AccessGroupsData#schemas.postAccessgroupsServiceagreementsRecord
	     * @type {Object}
	     * @example
	     * {
	    "properties": {
	      "name": {
	        "type": "string",
	        "minLength": 1,
	        "pattern": "^\\S(.*(\\S))?$",
	        "required": true
	      },
	      "description": {
	        "type": "string",
	        "minLength": 1,
	        "pattern": "^\\S(.*(\\S))?$",
	        "required": true
	      },
	      "providers": {
	        "type": "array",
	        "items": {
	          "properties": {}
	        },
	        "required": true
	      },
	      "consumers": {
	        "type": "array",
	        "items": {
	          "properties": {}
	        },
	        "required": true
	      }
	    }
	    }
	     */
	
	    schemas.postAccessgroupsServiceagreementsRecord = definedTypes['AccessGroupsData.ServiceAgreementPost'];
	
	    /**
	     * @description
	     * An object describing the JSON schema for the postAccessgroupsUsercontextRecord method
	     *
	     * @name AccessGroupsData#schemas.postAccessgroupsUsercontextRecord
	     * @type {Object}
	     * @example
	     * {
	    "properties": {
	      "serviceAgreementId": {
	        "type": "string",
	        "pattern": "^[0-9a-f]{32}",
	        "required": true
	      },
	      "legalEntityId": {
	        "type": "string",
	        "pattern": "^[0-9a-f]{32}",
	        "required": true
	      }
	    }
	    }
	     */
	
	    schemas.postAccessgroupsUsercontextRecord = definedTypes['AccessGroupsData.UserContext-POST'];
	
	    /**
	     * @description
	     * An object describing the JSON schema for the putAccessgroupsDataRecord method
	     *
	     * @name AccessGroupsData#schemas.putAccessgroupsDataRecord
	     * @type {Object}
	     * @example
	     * {
	    "properties": {
	      "dataAccessGroupId": {
	        "type": "string",
	        "required": true
	      }
	    }
	    }
	     */
	
	    schemas.putAccessgroupsDataRecord = definedTypes['AccessGroupsData.DataAccessGroupItem'];
	
	    /**
	     * @description
	     * An object describing the JSON schema for the putAccessgroupsFunctionRecord method
	     *
	     * @name AccessGroupsData#schemas.putAccessgroupsFunctionRecord
	     * @type {Object}
	     * @example
	     * {
	    "properties": {
	      "functionAccessGroupId": {
	        "type": "string",
	        "required": true
	      }
	    }
	    }
	     */
	
	    schemas.putAccessgroupsFunctionRecord = definedTypes['AccessGroupsData.FunctionAccessGroupItem'];
	
	    /**
	     * @description
	     * An object describing the JSON schema for the postAccessgroupsUsersFunctionRecord method
	     *
	     * @name AccessGroupsData#schemas.postAccessgroupsUsersFunctionRecord
	     * @type {Object}
	     * @example
	     * {
	    "properties": {
	      "functionAccessGroupIds": {
	        "type": "array",
	        "items": {
	          "properties": {}
	        },
	        "minItems": 1,
	        "required": true
	      },
	      "revoke": {
	        "type": "boolean",
	        "required": true
	      }
	    }
	    }
	     */
	
	    schemas.postAccessgroupsUsersFunctionRecord = definedTypes['AccessGroupsData.AssignFunctionAccessGroup'];
	
	    /**
	     * @description
	     * An object describing the JSON schema for the postAccessgroupsUsersDataRecord method
	     *
	     * @name AccessGroupsData#schemas.postAccessgroupsUsersDataRecord
	     * @type {Object}
	     * @example
	     * {
	    "properties": {
	      "functionAccessGroupId": {
	        "type": "string",
	        "required": true
	      },
	      "dataAccessGroupIds": {
	        "type": "array",
	        "items": {
	          "properties": {}
	        },
	        "minItems": 1,
	        "required": true
	      },
	      "revoke": {
	        "type": "boolean",
	        "required": true
	      }
	    }
	    }
	     */
	
	    schemas.postAccessgroupsUsersDataRecord = definedTypes['AccessGroupsData.AssignDataAccessGroup'];
	
	    /**
	     * @description
	     * An object describing the JSON schema for the putAccessgroupsServiceagreementsRecord method
	     *
	     * @name AccessGroupsData#schemas.putAccessgroupsServiceagreementsRecord
	     * @type {Object}
	     * @example
	     * {
	    "properties": {
	      "name": {
	        "type": "string",
	        "minLength": 1,
	        "maxLength": 128,
	        "pattern": "^\\S(.*(\\S))?$",
	        "required": false
	      },
	      "description": {
	        "type": "string",
	        "minLength": 1,
	        "maxLength": 255,
	        "pattern": "^\\S(.*(\\S))?$",
	        "required": false
	      },
	      "externalId": {
	        "type": "string",
	        "minLength": 1,
	        "maxLength": 36,
	        "pattern": "^\\S+$",
	        "required": false
	      }
	    }
	    }
	     */
	
	    schemas.putAccessgroupsServiceagreementsRecord = definedTypes['AccessGroupsData.ServiceAgreementPut'];
	
	    /**
	     * @description
	     * An object describing the JSON schema for the postAccessgroupsServiceagreementsIngestServiceagreementsRecord method
	     *
	     * @name AccessGroupsData#schemas.postAccessgroupsServiceagreementsIngestServiceagreementsRecord
	     * @type {Object}
	     * @example
	     * {
	    "properties": {
	      "name": {
	        "type": "string",
	        "minLength": 1,
	        "pattern": "^\\S(.*(\\S))?$",
	        "required": true
	      },
	      "externalId": {
	        "type": "string",
	        "minLength": 1,
	        "maxLength": 36,
	        "pattern": "^\\S+$",
	        "required": false
	      },
	      "description": {
	        "type": "string",
	        "minLength": 1,
	        "pattern": "^\\S(.*(\\S))?$",
	        "required": true
	      },
	      "consumersToIngest": {
	        "type": "array",
	        "items": {
	          "properties": {
	            "users": {
	              "type": "array",
	              "items": {
	                "properties": {}
	              },
	              "uniqueItems": true,
	              "required": false
	            },
	            "functionDataGroupPairs": {
	              "type": "array",
	              "items": {
	                "properties": {
	                  "functionGroup": {
	                    "type": "string",
	                    "pattern": "^[0-9a-f]{32}",
	                    "required": false
	                  },
	                  "dataGroup": {
	                    "type": "array",
	                    "items": {
	                      "properties": {}
	                    },
	                    "minItems": 1,
	                    "uniqueItems": true,
	                    "required": true
	                  }
	                }
	              },
	              "uniqueItems": true,
	              "required": false
	            }
	          }
	        },
	        "minItems": 1,
	        "uniqueItems": true,
	        "required": true
	      },
	      "providersToIngest": {
	        "type": "array",
	        "items": {
	          "properties": {
	            "users": {
	              "type": "array",
	              "items": {
	                "properties": {}
	              },
	              "uniqueItems": true,
	              "required": false
	            }
	          }
	        },
	        "minItems": 1,
	        "uniqueItems": true,
	        "required": true
	      }
	    }
	    }
	     */
	
	    schemas.postAccessgroupsServiceagreementsIngestServiceagreementsRecord = definedTypes['AccessGroupsData.ServicesAgreementIngest'];
	
	    /**
	     * @description
	     * An object describing the JSON schema for the putAccessgroupsServiceagreementsAdminsRecord method
	     *
	     * @name AccessGroupsData#schemas.putAccessgroupsServiceagreementsAdminsRecord
	     * @type {Object}
	     * @example
	     * {
	    "properties": {
	      "consumers": {
	        "type": "array",
	        "items": {
	          "properties": {
	            "id": {
	              "type": "string",
	              "required": true
	            },
	            "admins": {
	              "type": "array",
	              "items": {
	                "properties": {}
	              },
	              "uniqueItems": true,
	              "required": true
	            }
	          }
	        },
	        "minItems": 1,
	        "required": false
	      },
	      "providers": {
	        "type": "array",
	        "items": {
	          "properties": {
	            "id": {
	              "type": "string",
	              "required": true
	            },
	            "admins": {
	              "type": "array",
	              "items": {
	                "properties": {}
	              },
	              "uniqueItems": true,
	              "required": true
	            }
	          }
	        },
	        "minItems": 1,
	        "required": false
	      }
	    }
	    }
	     */
	
	    schemas.putAccessgroupsServiceagreementsAdminsRecord = definedTypes['AccessGroupsData.UpdateAdmins'];
	
	    /**
	     * @description
	     * An object describing the JSON schema for the putAccessgroupsServiceagreementsUsersRecord method
	     *
	     * @name AccessGroupsData#schemas.putAccessgroupsServiceagreementsUsersRecord
	     * @type {Object}
	     * @example
	     * {
	    "properties": {
	      "id": {
	        "type": "string",
	        "required": true
	      }
	    }
	    }
	     */
	
	    schemas.putAccessgroupsServiceagreementsUsersRecord = definedTypes['AccessGroupsData.ProviderUserForServiceAgreement'];
	
	    /**
	     * @description
	     * An object describing the JSON schema for the putAccessgroupsServiceagreementsConsumersFunctionsRecord method
	     *
	     * @name AccessGroupsData#schemas.putAccessgroupsServiceagreementsConsumersFunctionsRecord
	     * @type {Object}
	     * @example
	     * {
	    "properties": {
	      "functionAccessGroupIds": {
	        "type": "array",
	        "items": {
	          "properties": {}
	        },
	        "minItems": 1,
	        "uniqueItems": true,
	        "required": true
	      }
	    }
	    }
	     */
	
	    schemas.putAccessgroupsServiceagreementsConsumersFunctionsRecord = definedTypes['AccessGroupsData.ExposeFunctionAccessGroups'];
	
	    /**
	     * @description
	     * An object describing the JSON schema for the putAccessgroupsServiceagreementsConsumersFunctionsDataRecord method
	     *
	     * @name AccessGroupsData#schemas.putAccessgroupsServiceagreementsConsumersFunctionsDataRecord
	     * @type {Object}
	     * @example
	     * {
	    "properties": {
	      "dataAccessGroupIds": {
	        "type": "array",
	        "items": {
	          "properties": {}
	        },
	        "minItems": 1,
	        "uniqueItems": true,
	        "required": true
	      }
	    }
	    }
	     */
	
	    schemas.putAccessgroupsServiceagreementsConsumersFunctionsDataRecord = definedTypes['AccessGroupsData.ExposeDataAccessGroups'];
	
	    /**
	     * @typedef Response
	     * @type {Object}
	     * @property {Object} data See method descriptions for possible return types
	     * @property {Function} headers Getter headers function
	     * @property {Number} status HTTP status code of the response.
	     * @property {String} statusText HTTP status text of the response.
	     */
	
	    return {
	
	      getAccessgroupsData: getAccessgroupsData,
	
	      postAccessgroupsDataRecord: postAccessgroupsDataRecord,
	
	      getAccessgroupsFunction: getAccessgroupsFunction,
	
	      postAccessgroupsFunctionRecord: postAccessgroupsFunctionRecord,
	
	      getAccessgroupsConfigFunctions: getAccessgroupsConfigFunctions,
	
	      postAccessgroupsUsersRecord: postAccessgroupsUsersRecord,
	
	      getAccessgroupsUsers: getAccessgroupsUsers,
	
	      postAccessgroupsServiceagreementsRecord: postAccessgroupsServiceagreementsRecord,
	
	      getAccessgroupsServiceagreements: getAccessgroupsServiceagreements,
	
	      postAccessgroupsUsercontextRecord: postAccessgroupsUsercontextRecord,
	
	      getAccessgroupsDataRecord: getAccessgroupsDataRecord,
	
	      putAccessgroupsDataRecord: putAccessgroupsDataRecord,
	
	      deleteAccessgroupsDataRecord: deleteAccessgroupsDataRecord,
	
	      getAccessgroupsFunctionRecord: getAccessgroupsFunctionRecord,
	
	      putAccessgroupsFunctionRecord: putAccessgroupsFunctionRecord,
	
	      deleteAccessgroupsFunctionRecord: deleteAccessgroupsFunctionRecord,
	
	      getAccessgroupsUsersRecord: getAccessgroupsUsersRecord,
	
	      getAccessgroupsUsersPrivileges: getAccessgroupsUsersPrivileges,
	
	      getAccessgroupsUsersPermissions: getAccessgroupsUsersPermissions,
	
	      postAccessgroupsUsersFunctionRecord: postAccessgroupsUsersFunctionRecord,
	
	      postAccessgroupsUsersDataRecord: postAccessgroupsUsersDataRecord,
	
	      getAccessgroupsUsersPrivilegesArrangements: getAccessgroupsUsersPrivilegesArrangements,
	
	      getAccessgroupsUsersPermissionsSummary: getAccessgroupsUsersPermissionsSummary,
	
	      getAccessgroupsServiceagreementsRecord: getAccessgroupsServiceagreementsRecord,
	
	      putAccessgroupsServiceagreementsRecord: putAccessgroupsServiceagreementsRecord,
	
	      getAccessgroupsServiceagreementsRoles: getAccessgroupsServiceagreementsRoles,
	
	      getAccessgroupsServiceagreementsAdminsMe: getAccessgroupsServiceagreementsAdminsMe,
	
	      postAccessgroupsServiceagreementsIngestServiceagreementsRecord: postAccessgroupsServiceagreementsIngestServiceagreementsRecord,
	
	      getAccessgroupsServiceagreementsParticipants: getAccessgroupsServiceagreementsParticipants,
	
	      getAccessgroupsServiceagreementsAdmins: getAccessgroupsServiceagreementsAdmins,
	
	      putAccessgroupsServiceagreementsAdminsRecord: putAccessgroupsServiceagreementsAdminsRecord,
	
	      getAccessgroupsServiceagreementsUsers: getAccessgroupsServiceagreementsUsers,
	
	      putAccessgroupsServiceagreementsUsersRecord: putAccessgroupsServiceagreementsUsersRecord,
	
	      getAccessgroupsServiceagreementsFunctions: getAccessgroupsServiceagreementsFunctions,
	
	      deleteAccessgroupsServiceagreementsUsersRecord: deleteAccessgroupsServiceagreementsUsersRecord,
	
	      putAccessgroupsServiceagreementsConsumersFunctionsRecord: putAccessgroupsServiceagreementsConsumersFunctionsRecord,
	
	      deleteAccessgroupsServiceagreementsConsumersFunctionsRecord: deleteAccessgroupsServiceagreementsConsumersFunctionsRecord,
	
	      putAccessgroupsServiceagreementsConsumersFunctionsDataRecord: putAccessgroupsServiceagreementsConsumersFunctionsDataRecord,
	
	      deleteAccessgroupsServiceagreementsConsumersFunctionsDataRecord: deleteAccessgroupsServiceagreementsConsumersFunctionsDataRecord,
	
	      getAccessgroupsServiceagreementsFunctionsData: getAccessgroupsServiceagreementsFunctionsData,
	
	      getAccessgroupsUsercontextServiceagreements: getAccessgroupsUsercontextServiceagreements,
	
	      getAccessgroupsUsercontextServiceagreementsLegalentities: getAccessgroupsUsercontextServiceagreementsLegalentities,
	
	      schemas: schemas
	    };
	  };
	};

/***/ })
/******/ ])
});
;
//# sourceMappingURL=data-bb-accessgroups-http-ng.js.map