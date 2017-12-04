(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vendor-bb-angular"), require("data-bb-categories-management-http-ng"), require("lib-bb-storage-ng"), require("lib-bb-model-errors"));
	else if(typeof define === 'function' && define.amd)
		define("model-bb-transaction-categories-ng", ["vendor-bb-angular", "data-bb-categories-management-http-ng", "lib-bb-storage-ng", "lib-bb-model-errors"], factory);
	else if(typeof exports === 'object')
		exports["model-bb-transaction-categories-ng"] = factory(require("vendor-bb-angular"), require("data-bb-categories-management-http-ng"), require("lib-bb-storage-ng"), require("lib-bb-model-errors"));
	else
		root["model-bb-transaction-categories-ng"] = factory(root["vendor-bb-angular"], root["data-bb-categories-management-http-ng"], root["lib-bb-storage-ng"], root["lib-bb-model-errors"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_11__, __WEBPACK_EXTERNAL_MODULE_12__, __WEBPACK_EXTERNAL_MODULE_13__, __WEBPACK_EXTERNAL_MODULE_15__) {
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

	module.exports = __webpack_require__(10);

/***/ }),
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.modelTransactionCategoriesKey = undefined;
	
	var _vendorBbAngular = __webpack_require__(11);
	
	var _vendorBbAngular2 = _interopRequireDefault(_vendorBbAngular);
	
	var _dataBbCategoriesManagementHttpNg = __webpack_require__(12);
	
	var _dataBbCategoriesManagementHttpNg2 = _interopRequireDefault(_dataBbCategoriesManagementHttpNg);
	
	var _libBbStorageNg = __webpack_require__(13);
	
	var _libBbStorageNg2 = _interopRequireDefault(_libBbStorageNg);
	
	var _transactionCategories = __webpack_require__(14);
	
	var _transactionCategories2 = _interopRequireDefault(_transactionCategories);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * @module model-bb-transaction-categories-ng
	 *
	 * @description
	 * Model for widget-bb-transaction-categories-ng
	 *
	 * @example
	 * import modelTransactionCategoriesModuleKey, {
	 *  modelTransactionCategoriesKey
	 * } from 'model-bb-transaction-categories-ng';
	 *
	 * angular
	 *   .module('ExampleModule', [
	 *     modelTransactionCategoriesModuleKey,
	 *   ])
	 *   .factory('someFactory', [
	 *     modelTransactionCategoriesKey,
	 *     // into
	 *     function someFactory(transactionCategoriesModel) {
	 *       // ...
	 *     },
	 *   ]);
	 */
	var moduleKey = 'model-bb-transaction-categories-ng';
	
	var modelTransactionCategoriesKey = exports.modelTransactionCategoriesKey = moduleKey + ':model';
	
	exports.default = _vendorBbAngular2.default.module(moduleKey, [_dataBbCategoriesManagementHttpNg2.default, _libBbStorageNg2.default]).factory(modelTransactionCategoriesKey, [_dataBbCategoriesManagementHttpNg.categoriesManagementDataKey, _libBbStorageNg.bbStorageServiceKey,
	/* into */
	_transactionCategories2.default]).name;

/***/ }),
/* 11 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_11__;

/***/ }),
/* 12 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_12__;

/***/ }),
/* 13 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_13__;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = transactionCategoriesModel;
	
	var _libBbModelErrors = __webpack_require__(15);
	
	var _constants = __webpack_require__(16);
	
	var _constants2 = _interopRequireDefault(_constants);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * Model factory for model-bb-transaction-categories-ng
	 *
	 * @inner
	 * @type {function}
	 * @param {Object} Promise An ES2015 compatible `Promise` object.
	 *
	 * @return {Object}
	 */
	function transactionCategoriesModel(transactionCategoriesData, bbStorage) {
	  /**
	   * @name transactionCategoriesModel#loadCategories
	   * @type {function}
	   *
	   * @description
	   * Load the availabe categories.
	   *
	   * @returns {Promise.<Object>} A Promise with all of the availabe categories.
	   */
	  var loadCategories = function loadCategories() {
	    return transactionCategoriesData.getCategories().then(function (data) {
	      bbStorage.setItem(_constants2.default.TRANSACTION_CATEGORIES_LIST, data);
	      return data;
	    }).catch(function (e) {
	      throw (0, _libBbModelErrors.fromHttpError)(e);
	    });
	  };
	
	  /**
	   * @name transactionCategoriesModel#getCategories
	   * @type {function}
	   *
	   * @description
	   * Load the availabe categories from server or storage.
	   *
	   * @returns {Promise.<Object>} A Promise with all of the availabe categories.
	   */
	  var getCategories = function getCategories() {
	    return bbStorage.getItem(_constants2.default.TRANSACTION_CATEGORIES_LIST).then(function (data) {
	      return data || loadCategories();
	    });
	  };
	
	  /**
	   * @name transactionCategoriesModel
	   * @type {Object}
	   */
	  return {
	    getCategories: getCategories
	  };
	}

/***/ }),
/* 15 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_15__;

/***/ }),
/* 16 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * @name bbStorageKeys
	 * @description
	 * bbStorage keys enum
	 * @type {object}
	 */
	var bbStorageKeys = {
	  TRANSACTION_CATEGORIES_LIST: 'bb.transaction.categories.list'
	};
	
	exports.default = bbStorageKeys;

/***/ })
/******/ ])
});
;
//# sourceMappingURL=model-bb-transaction-categories-ng.js.map