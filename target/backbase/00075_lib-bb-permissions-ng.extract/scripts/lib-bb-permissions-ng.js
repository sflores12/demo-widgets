(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vendor-bb-angular"), require("lib-bb-storage-ng"), require("data-bb-accessgroups-http-ng"), require("lib-bb-model-errors"));
	else if(typeof define === 'function' && define.amd)
		define("lib-bb-permissions-ng", ["vendor-bb-angular", "lib-bb-storage-ng", "data-bb-accessgroups-http-ng", "lib-bb-model-errors"], factory);
	else if(typeof exports === 'object')
		exports["lib-bb-permissions-ng"] = factory(require("vendor-bb-angular"), require("lib-bb-storage-ng"), require("data-bb-accessgroups-http-ng"), require("lib-bb-model-errors"));
	else
		root["lib-bb-permissions-ng"] = factory(root["vendor-bb-angular"], root["lib-bb-storage-ng"], root["data-bb-accessgroups-http-ng"], root["lib-bb-model-errors"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_40__, __WEBPACK_EXTERNAL_MODULE_41__, __WEBPACK_EXTERNAL_MODULE_42__, __WEBPACK_EXTERNAL_MODULE_44__) {
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

	module.exports = __webpack_require__(39);

/***/ }),

/***/ 39:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.bbPermissionsKey = undefined;
	
	var _vendorBbAngular = __webpack_require__(40);
	
	var _vendorBbAngular2 = _interopRequireDefault(_vendorBbAngular);
	
	var _libBbStorageNg = __webpack_require__(41);
	
	var _libBbStorageNg2 = _interopRequireDefault(_libBbStorageNg);
	
	var _dataBbAccessgroupsHttpNg = __webpack_require__(42);
	
	var _dataBbAccessgroupsHttpNg2 = _interopRequireDefault(_dataBbAccessgroupsHttpNg);
	
	var _permissions = __webpack_require__(43);
	
	var _permissions2 = _interopRequireDefault(_permissions);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * @module lib-bb-permissions-ng
	 *
	 * @description
	 * Library to download and filter available user permissions by specified set of privileges.
	 * By default permissions will be downloaded from the server for a check and chached.
	 *
	 * @example
	 * import bbPermissionsModuleKey, { bbPermissionsKey } from 'lib-bb-permissions-ng';
	 *
	 * // General usage:
	 * angular
	 *   .module('ExampleModule', [
	 *     bbPermissionsModuleKey,
	 *   ])
	 *   .config([`${bbPermissionsKey}Provider`,
	 *     (permissionsProvider) => {
	 *       permissionsProvider.setCacheEnabled(false);
	 *       permissionsProvider.setPermissionsCheckEnabled(true);
	 *     }
	 *   ])
	 *   .controller('DemoController', [bbPermissionsKey,
	 *     (permissions) => {
	 *       const privileges = [{
	 *         resource: 'Contacts',
	 *         function: 'Contacts',
	 *         privileges: ['read', 'delete'],
	 *       }];
	 *
	 *       // This is more general approach to get permissions for specified privileges
	 *       permissions.getPermissions(privileges)
	 *         .then(data => {
	 *           this.permissions = data;
	 *           this.canDeleteContacts = data.Contacts.Contacts.delete;
	 *         });
	 *
	 *       // This is simplified approach to get permission for a single privilege
	 *       permissions.isPermitted('Contacts.Contacts.delete')
	 *         .then(isPermitted => {
	 *           this.canDeleteContacts = isPermitted;
	 *         });
	 *     }
	 *   ]);
	 */
	
	var moduleKey = 'lib-bb-permissions-ng';
	
	/**
	 * @name bbPermissionsKey
	 * @type {string}
	 * @description Injector name of [PermissionsLibrary](#PermissionsLibrary) instance
	 */
	var bbPermissionsKey = exports.bbPermissionsKey = moduleKey + ':bbPermissions';
	
	exports.default = _vendorBbAngular2.default.module(moduleKey, [_libBbStorageNg2.default, _dataBbAccessgroupsHttpNg2.default]).provider(bbPermissionsKey, function () {
	  var cacheDisabled = false;
	  var permissionsCheckDisabled = false;
	  var downloadOnInitDisabled = true;
	
	  /**
	   * @name setCacheEnabled
	   * @type {function}
	   * @description
	   * Sets a flag to enable or disable library caching
	   * @param {boolean} value Is cache enabled
	   */
	  var setCacheEnabled = function setCacheEnabled(value) {
	    cacheDisabled = !value;
	  };
	
	  /**
	   * @name setPermissionsCheckEnabled
	   * @type {function}
	   * @description
	   * Sets a flag to enable or disable library permissions check at all.
	   * @param {boolean} value Is permissions checks enabled
	   */
	  var setPermissionsCheckEnabled = function setPermissionsCheckEnabled(value) {
	    permissionsCheckDisabled = !value;
	  };
	
	  /**
	   * @name enableDownloadOnInit
	   * @type {function}
	   * @description
	   * Sets flag to enable or disable permissions download on library initialisation.
	   * @param {boolean} value Is permissions download on init enabled
	   */
	  var enableDownloadOnInit = function enableDownloadOnInit(value) {
	    downloadOnInitDisabled = !value;
	  };
	
	  return {
	    setCacheEnabled: setCacheEnabled,
	    setPermissionsCheckEnabled: setPermissionsCheckEnabled,
	    enableDownloadOnInit: enableDownloadOnInit,
	    $get: ['$q', _dataBbAccessgroupsHttpNg.accessGroupsDataKey, _libBbStorageNg.bbStorageServiceKey,
	
	    /* into */
	    function (Promise, accessGroupData, bbStorage) {
	      return (0, _permissions2.default)(Promise, accessGroupData, bbStorage, cacheDisabled, permissionsCheckDisabled, downloadOnInitDisabled);
	    }]
	  };
	}).name;

/***/ }),

/***/ 40:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_40__;

/***/ }),

/***/ 41:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_41__;

/***/ }),

/***/ 42:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_42__;

/***/ }),

/***/ 43:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();
	
	var _libBbModelErrors = __webpack_require__(44);
	
	var storageKey = 'lib.bb.permissions.data';
	
	/**
	 * @name loadingPromise
	 * @type {Promise}
	 * @inner
	 * @description
	 * Preserves Promise reference for active permissions
	 * network requests. Will be reset when Promise fulfilled.
	 */
	var loadingPromise = void 0;
	
	/**
	 * @name PermissionsLibrary
	 * @type {function}
	 *
	 * @description
	 * Library responsible for downloading permissions for the widgets,
	 * and caching them in the bbStorage.
	 */
	var permissionsFactory = function permissionsFactory(Promise, accessGroupData, bbStorage, cacheDisabled, permissionsCheckDisabled, downloadOnInitDisabled) {
	  /**
	   * @name getCachedPermissions
	   * @type {function}
	   * @inner
	   * @description
	   * Returns cached permissions if cache is enabled, null otherwise.
	   * @returns {Promise} A Promise with permissions.
	   */
	  var getCachedPermissions = function getCachedPermissions() {
	    return cacheDisabled ? Promise.resolve(null) : bbStorage.getItem(storageKey);
	  };
	
	  /**
	   * @name loadPermissions
	   * @type {function}
	   * @inner
	   * @description
	   * Loads permissions for the server and stores them in the cache
	   * if cache is enabled.
	   * @returns {Promise.<object[]>} A Promise for permissions network request
	   */
	  var loadPermissions = function loadPermissions() {
	    // If permissions are loading already – return existing promise
	    if (loadingPromise) {
	      return loadingPromise;
	    }
	
	    loadingPromise = accessGroupData.getAccessgroupsUsersPermissionsSummary().then(function (_ref) {
	      var data = _ref.data;
	      return data;
	    }).then(function (permissions) {
	      if (!cacheDisabled) {
	        bbStorage.setItem(storageKey, permissions);
	      }
	      loadingPromise = null;
	      return permissions;
	    }).catch(function (error) {
	      loadingPromise = null;
	      throw (0, _libBbModelErrors.fromHttpError)(error);
	    });
	
	    return loadingPromise;
	  };
	
	  /**
	   * @name getAllPermissions
	   * @type {function}
	   * @inner
	   * @description
	   * Returns either cached permissions or permissions from the server.
	   * If permissions check is disabled, it will return null.
	   * @returns {Promise} A Promise with permissions.
	   */
	  var getAllPermissions = function getAllPermissions() {
	    // Return resolved Promise immediately if permissions check is disabled
	    if (permissionsCheckDisabled) {
	      return Promise.resolve(null);
	    }
	
	    return getCachedPermissions().then(function (permissions) {
	      return permissions || loadPermissions();
	    });
	  };
	
	  /**
	   * @name getPrivilegeValue
	   * @type {function}
	   * @inner
	   * @description
	   * Returns value for the privilege with specified resource and business function name.
	   * By default will return true if permissions check is disabled.
	   * @param {object[]} permissions An array of available user permissions
	   * @param {string} resource A privilege resource name
	   * @param {string} fn A privilege business function name
	   * @param {string} privilege A privilege name
	   * @returns {boolean} Permission value.
	   */
	  var getPrivilegeValue = function getPrivilegeValue(permissions, resource, fn, privilege) {
	    return permissionsCheckDisabled || permissions.findIndex(function (permission) {
	      return permission.resource === resource && permission.function === fn && !!permission.permissions[privilege];
	    }) !== -1;
	  };
	
	  /**
	   * @name getObjProperty
	   * @type {function}
	   * @inner
	   * @description
	   * This function will return object's property by name.
	   * If property not specified, it will be created with empty object value.
	   * @param {object} obj Object with properties
	   * @param {string} propertyName Property name
	   * @returns {object} Object's property value
	   */
	  var getObjProperty = function getObjProperty(obj, propertyName) {
	    if (!Object.prototype.hasOwnProperty.call(obj, propertyName)) {
	      // eslint-disable-next-line no-param-reassign
	      obj[propertyName] = {};
	    }
	    return obj[propertyName];
	  };
	
	  /**
	   * @name getPermissionsForPrivileges
	   * @type {function}
	   * @inner
	   * @description
	   * Evaluates permission values for requested privileges set.
	   * @param {object[]} permissions=[] Available user permissions
	   * @param {object[]} privileges Requested privileges set
	   * @returns {object} Evaluated permissions object.
	   */
	  var getPermissionsForPrivileges = function getPermissionsForPrivileges() {
	    var permissions = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
	    var privileges = arguments[1];
	    return privileges.reduce(function (permissionsObj, _ref2) {
	      var resource = _ref2.resource,
	          fn = _ref2.function,
	          privilegesArray = _ref2.privileges;
	
	      var obj = Object.assign({}, permissionsObj);
	      var resourceObj = getObjProperty(obj, resource);
	      var fnObj = getObjProperty(resourceObj, fn);
	
	      privilegesArray.forEach(function (privilege) {
	        fnObj[privilege] = getPrivilegeValue(permissions, resource, fn, privilege);
	      });
	
	      return obj;
	    }, {});
	  };
	
	  /**
	   * @name getPermissions
	   * @type {function}
	   * @description
	   * Retrieves available permissions and filters them by specified privileges set.
	   * @param {object[]} privileges=[] A set of requests privileges
	   * @returns {Promise.<object>} A Promise with permissions object
	   */
	  var getPermissions = function getPermissions() {
	    var privileges = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
	    return getAllPermissions().then(function (permissions) {
	      return getPermissionsForPrivileges(permissions, privileges);
	    });
	  };
	
	  /**
	   * @name isPermitted
	   * @type {function}
	   * @description
	   * Checks user permissions for single privelege. Takes only one string parameter,
	   * which have to be formatted in a special way – string should contain of three parts
	   * separated with dot.
	   * First part is Resource name, second part – Business Function name,
	   * third part – privilege to check.
	   *
	   * @example
	   * permissionsService.isPermitted('Contacts.Contacts.read')
	   *   .then(isPermitted => { console.log(isPermitted) })
	   *   .catch(error => { console.error('Unable to check permissions') });
	   *
	   * @param {string} privilege String which describes single privilege to check.
	   * @returns {Promise.<boolean>} A Promise with boolean permission check result.
	   */
	  var isPermitted = function isPermitted(privilege) {
	    var partials = String(privilege).split('.');
	    var isFormatValid = partials.length === 3;
	
	    if (!isFormatValid) {
	      // eslint-disable-next-line
	      console.warn('Privilege "' + privilege + '" format is not valid.' + 'It should be string with two dots-separators. For example "Contacts.Contact.edit".');
	      return Promise.resolve(false);
	    }
	
	    var _partials = _slicedToArray(partials, 3),
	        resource = _partials[0],
	        fn = _partials[1],
	        priv = _partials[2];
	
	    var privileges = [{
	      resource: resource,
	      function: fn,
	      privileges: [priv]
	    }];
	
	    return getPermissions(privileges).then(function (permissions) {
	      return permissions[resource][fn][priv];
	    });
	  };
	
	  /* Initialisation */
	  var downloadAndCacheOnInit = !downloadOnInitDisabled && !permissionsCheckDisabled && !cacheDisabled;
	
	  if (downloadAndCacheOnInit) {
	    loadPermissions();
	  }
	
	  return {
	    getPermissions: getPermissions,
	    isPermitted: isPermitted,
	
	    /**
	     * @name enabled
	     * @type {boolean}
	     * @description
	     * Indicates is permissions check disabled.
	     */
	    get enabled() {
	      return !permissionsCheckDisabled;
	    },
	
	    /**
	     * @name loading
	     * @type {boolean}
	     * @description
	     * Indicates is library currently loading permissions from the server.
	     */
	    get loading() {
	      return !!loadingPromise;
	    }
	  };
	};
	
	exports.default = permissionsFactory;

/***/ }),

/***/ 44:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_44__;

/***/ })

/******/ })
});
;
//# sourceMappingURL=lib-bb-permissions-ng.js.map