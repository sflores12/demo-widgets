(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vendor-bb-angular"), require("data-bb-budgeting-http-ng"), require("lib-bb-model-errors"));
	else if(typeof define === 'function' && define.amd)
		define("model-bb-budget-ng", ["vendor-bb-angular", "data-bb-budgeting-http-ng", "lib-bb-model-errors"], factory);
	else if(typeof exports === 'object')
		exports["model-bb-budget-ng"] = factory(require("vendor-bb-angular"), require("data-bb-budgeting-http-ng"), require("lib-bb-model-errors"));
	else
		root["model-bb-budget-ng"] = factory(root["vendor-bb-angular"], root["data-bb-budgeting-http-ng"], root["lib-bb-model-errors"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_17__, __WEBPACK_EXTERNAL_MODULE_18__, __WEBPACK_EXTERNAL_MODULE_20__) {
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

	module.exports = __webpack_require__(16);

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
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.modelBudgetKey = undefined;
	
	var _vendorBbAngular = __webpack_require__(17);
	
	var _vendorBbAngular2 = _interopRequireDefault(_vendorBbAngular);
	
	var _dataBbBudgetingHttpNg = __webpack_require__(18);
	
	var _dataBbBudgetingHttpNg2 = _interopRequireDefault(_dataBbBudgetingHttpNg);
	
	var _budget = __webpack_require__(19);
	
	var _budget2 = _interopRequireDefault(_budget);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var moduleKey = 'model-bb-budget-ng'; /**
	                                       * @module model-bb-budget-ng
	                                       *
	                                       * @description
	                                       * Budget widget model
	                                       *
	                                       * @example
	                                       * import modelBudgetModuleKey, { modelBudgetKey } from 'model-bb-budget-ng';
	                                       */
	var modelBudgetKey = exports.modelBudgetKey = moduleKey + ':model';
	
	exports.default = _vendorBbAngular2.default.module(moduleKey, [_dataBbBudgetingHttpNg2.default]).factory(modelBudgetKey, ['$q', _dataBbBudgetingHttpNg.budgetingDataKey, _budget2.default]).name;

/***/ }),
/* 17 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_17__;

/***/ }),
/* 18 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_18__;

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = budgetModel;
	
	var _libBbModelErrors = __webpack_require__(20);
	
	/**
	 * @inner
	 * @type {function}
	 * @param {object} Promise An ES2015 compatible `Promise` object.
	 * @param {object} budgetingData budgeting data module
	 * @param {object} widget widget item
	 *
	 * @return {object} model object
	 */
	function budgetModel(Promise, budgetingData) {
	  var defaultErrorHandler = function defaultErrorHandler(httpErrorResponse) {
	    throw (0, _libBbModelErrors.fromHttpError)(httpErrorResponse);
	  };
	
	  /**
	   * @name budgetModel#getBudgetSchema
	   * @type {function}
	   *
	   * @description
	   * Gets the budgeting item schema from the data (RAML)
	   *
	   * @returns {BudgetingSchema}
	   */
	  var getBudgetSchema = function getBudgetSchema() {
	    return budgetingData.schemas.postBudgetsRecord.properties;
	  };
	
	  /**
	  * @name budgetModel#getBudgets
	  * @type {function}
	  *
	  * @description
	  * Gets the list of budgets
	  *
	  * @param {object} params Parameters to be passed.
	  * @returns {Promise.<BudgetingResponse>} A Promise with an array of budgets
	  */
	  var getBudgets = function getBudgets() {
	    var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	    return budgetingData.getBudgets(params).then(function (response) {
	      return {
	        items: response.data
	      };
	    }).catch(defaultErrorHandler);
	  };
	
	  /**
	   * @name budgetModel#createBudget
	   * @type {function}
	   *
	   * @description
	   * Creates a new budget
	   *
	   * @param {object} budget Budget data
	   * @returns {Promise} A Promise with response data
	   */
	  var createBudget = function createBudget(budget) {
	    return budgetingData.postBudgetsRecord(budget).catch(defaultErrorHandler);
	  };
	  /**
	   * @name budgetModel#updateBudget
	   * @type {function}
	   *
	   * @description
	   * Updates an existing budget
	   *
	   * @param {string} budgetId Budget id
	   * @param {object} budget budget object
	   * @returns {Promise} A Promise with response data
	   */
	  var updateBudget = function updateBudget(budgetId, budget) {
	    return budgetingData.putBudgetsRecord(budgetId, budget).catch(defaultErrorHandler);
	  };
	
	  /**
	   * @name budgetModel#deleteBudget
	   * @type {function}
	   *
	   * @description
	   * Deletes a budget
	   *
	   * @param {string} budgetId Budget id
	   * @param {object} budget Budget data
	   * @returns {Promise} A Promise with response data
	   */
	  var deleteBudget = function deleteBudget(budgetId, budget) {
	    return budgetingData.deleteBudgetsRecord(budgetId, budget).catch(defaultErrorHandler);
	  };
	
	  /**
	   * @name budgetModel
	   * @type {Object}
	   */
	  return {
	    getBudgetSchema: getBudgetSchema,
	    getBudgets: getBudgets,
	    createBudget: createBudget,
	    updateBudget: updateBudget,
	    deleteBudget: deleteBudget
	  };
	}
	
	/**
	 * @typedef {object} BudgetingResponse
	 * @property {Array.<BudgetingItem>} data
	 */
	
	/**
	 * @typedef {object} BudgetingItem
	 * @extends module:data-bb-budgeting-http-ng.BudgetingData
	 */
	
	/**
	 * @typedef {object} BudgetingSchema
	 * @extends module:data-bb-budgeting-http-ng.schemas
	 */

/***/ }),
/* 20 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_20__;

/***/ })
/******/ ])
});
;
//# sourceMappingURL=model-bb-budget-ng.js.map