(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vendor-bb-angular"), require("data-bb-transactions-http-ng"), require("data-bb-product-summary-http-ng"), require("lib-bb-storage-ng"), require("lib-bb-widget-ng"), require("lib-bb-model-errors"));
	else if(typeof define === 'function' && define.amd)
		define("model-bb-income-spending-analysis-category-ng", ["vendor-bb-angular", "data-bb-transactions-http-ng", "data-bb-product-summary-http-ng", "lib-bb-storage-ng", "lib-bb-widget-ng", "lib-bb-model-errors"], factory);
	else if(typeof exports === 'object')
		exports["model-bb-income-spending-analysis-category-ng"] = factory(require("vendor-bb-angular"), require("data-bb-transactions-http-ng"), require("data-bb-product-summary-http-ng"), require("lib-bb-storage-ng"), require("lib-bb-widget-ng"), require("lib-bb-model-errors"));
	else
		root["model-bb-income-spending-analysis-category-ng"] = factory(root["vendor-bb-angular"], root["data-bb-transactions-http-ng"], root["data-bb-product-summary-http-ng"], root["lib-bb-storage-ng"], root["lib-bb-widget-ng"], root["lib-bb-model-errors"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_22__, __WEBPACK_EXTERNAL_MODULE_23__, __WEBPACK_EXTERNAL_MODULE_24__, __WEBPACK_EXTERNAL_MODULE_25__, __WEBPACK_EXTERNAL_MODULE_26__, __WEBPACK_EXTERNAL_MODULE_28__) {
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

	module.exports = __webpack_require__(21);

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
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.modelIncomeSpendingAnalysisCategoryKey = undefined;
	
	var _vendorBbAngular = __webpack_require__(22);
	
	var _vendorBbAngular2 = _interopRequireDefault(_vendorBbAngular);
	
	var _dataBbTransactionsHttpNg = __webpack_require__(23);
	
	var _dataBbTransactionsHttpNg2 = _interopRequireDefault(_dataBbTransactionsHttpNg);
	
	var _dataBbProductSummaryHttpNg = __webpack_require__(24);
	
	var _dataBbProductSummaryHttpNg2 = _interopRequireDefault(_dataBbProductSummaryHttpNg);
	
	var _libBbStorageNg = __webpack_require__(25);
	
	var _libBbStorageNg2 = _interopRequireDefault(_libBbStorageNg);
	
	var _libBbWidgetNg = __webpack_require__(26);
	
	var _libBbWidgetNg2 = _interopRequireDefault(_libBbWidgetNg);
	
	var _incomeSpendingAnalysisCategory = __webpack_require__(27);
	
	var _incomeSpendingAnalysisCategory2 = _interopRequireDefault(_incomeSpendingAnalysisCategory);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * @module model-bb-income-spending-analysis-category-ng
	 *
	 * @description
	 * Model for widget-bb-income-spending-analysis-category-ng
	 *
	 * @example
	 * import modelIncomeSpendingAnalysisCategoryModuleKey, {
	 *  modelIncomeSpendingAnalysisCategoryKey
	 * } from 'model-bb-income-spending-analysis-category-ng';
	 *
	 * angular
	 *   .module('ExampleModule', [
	 *     modelAnalysisCategoryModuleKey,
	 *   ])
	 *   .factory('someFactory', [
	 *     modelAnalysisCategoryKey,
	 *     // into
	 *     function someFactory(analysisCategoryModel) {
	 *       // ...
	 *     },
	 *   ]);
	 */
	var moduleKey = 'model-bb-income-spending-analysis-category-ng';
	var modelIncomeSpendingAnalysisCategoryKey = exports.modelIncomeSpendingAnalysisCategoryKey = moduleKey + ':model';
	
	exports.default = _vendorBbAngular2.default.module(moduleKey, [_dataBbTransactionsHttpNg2.default, _dataBbProductSummaryHttpNg2.default, _libBbStorageNg2.default, _libBbWidgetNg2.default]).factory(modelIncomeSpendingAnalysisCategoryKey, ['$q', _dataBbTransactionsHttpNg.transactionsDataKey, _dataBbProductSummaryHttpNg.productSummaryDataKey, _libBbStorageNg.bbStorageServiceKey, _libBbWidgetNg.widgetKey,
	/* into */
	_incomeSpendingAnalysisCategory2.default]).name;
	
	/**
	 * Amount object
	 * @typedef {object} Amount
	 * @property {string} currencyCode Currency code (ISO)
	 * @property {number} value
	 */
	
	/**
	 * Income/Spending analysis category response object
	 * @typedef {object} AnalysisCategoryData
	 * @property {Amount} total Total amount for all categories retrieved for selected period
	 * @property {AnalysisCategory[]} items Array of income/spending items
	 */
	
	/**
	 * Income/Spending category item
	 * @typedef {object} AnalysisCategory
	 * @property {string} category Transactions category
	 * @property {Amount} totalAmount Total amount of aggregated transactions by category
	 * @property {number} trend Percentage value of the trend
	 * @property {number} portion Percentage of the total amount for a given period
	 */
	
	/**
	 * BBSeries data object used to draw charts
	 * @typedef {object} BBSeries
	 * @property {string[]} labels Array of x axis labels
	 * @property {Dataset[]} datasets Array of all y axis value datasets
	 */
	
	/**
	 * Dataset object for y axis data
	 * @typedef {object} Dataset
	 * @property {number[]} data Array of data points to be drawn for each label
	 */

/***/ }),
/* 22 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_22__;

/***/ }),
/* 23 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_23__;

/***/ }),
/* 24 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_24__;

/***/ }),
/* 25 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_25__;

/***/ }),
/* 26 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_26__;

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = analysisCategoryModel;
	
	var _libBbModelErrors = __webpack_require__(28);
	
	var _constants = __webpack_require__(29);
	
	/**
	 * Model factory for model-bb-income-spending-analysis-category-ng
	 *
	 * @inner
	 * @type {function}
	 * @param {Object} Promise An ES2015 compatible `Promise` object.
	 *
	 * @return {Object}
	 */
	/* eslint max-len: ["error", 100, { "ignoreComments": true }]*/
	function analysisCategoryModel(Promise, incomeSpendingData, productSummaryData, bbStorage, widgetInstance) {
	  /**
	   * @name analysisCategoryModel#FROM_STORAGE
	   * @inner
	   * @type {boolean}
	   *
	   * @description
	   * Defines if products are recieved from bb-storage or from API always
	   */
	  var FROM_STORAGE = widgetInstance.getBooleanPreference(_constants.preferencesKeys.IS_PRODUCTS_LIST_FROM_STORAGE);
	
	  /**
	   * @name analysisCategoryModel#GET_FIRST_AS_DEFAULT
	   * @inner
	   * @type {boolean}
	   *
	   * @description
	   * Defines if the first product is selected by default
	   */
	  var GET_FIRST_AS_DEFAULT = widgetInstance.getBooleanPreference(_constants.preferencesKeys.IS_FIRST_PRODUCT_DEFAULT);
	
	  /**
	   * @name analysisCategoryModel#IS_MULTIPLE_ACCOUNTS
	   * @inner
	   * @type {boolean}
	   *
	   * @description
	   * Defines if the widget is combined with multiple account selector
	   */
	  var IS_MULTIPLE_ACCOUNTS = widgetInstance.getBooleanPreference(_constants.preferencesKeys.IS_MULTIPLE_ACCOUNTS);
	
	  /**
	   * @name analysisCategoryModel#productKindHasProducts
	   * @inner
	   * @type {function}
	   *
	   * @description
	   * Checks if product kind has any products
	   *
	   * @param {module:model-bb-product-summary-ng.ProductKind} productKind Product kind object
	   * @return {boolean} Has at least one product products
	   */
	  var productKindHasProducts = function productKindHasProducts(productKind) {
	    return productKind.products && productKind.products.length;
	  };
	
	  /**
	   * @name analysisCategoryModel#validateAnalysisParameters
	   * @type {function}
	   *
	   * @description
	   * Checks if all required parameters are set
	   *
	   * @param {object} params
	   * @returns {Promise.<object>}
	   * A Promise resolving to object with parameters.
	   */
	  var validateAnalysisParameters = function validateAnalysisParameters(params) {
	    if (params.creditDebitIndicator && params.arrangementIds && Array.isArray(params.arrangementIds) && params.periodStartDate && params.periodEndDate) {
	      return Promise.resolve(params);
	    }
	
	    return Promise.reject({
	      code: _constants.E_PARAMS
	    });
	  };
	
	  /**
	   * @name analysisCategoryModel#loadAnalysisData
	   * @type {function}
	   *
	   * @description
	   * Load income/spending analysis data by category
	   *
	   * @param {object} params Request parameters
	   * @returns {Promise.<AnalysisCategoryData, module:lib-bb-model-errors.ModelError>} A Promise with spending or error data
	   */
	  var loadAnalysisData = function loadAnalysisData(params) {
	    return incomeSpendingData.getTransactionsCategorytotals(params).then(function (response) {
	      return response.data;
	    }).catch(function (e) {
	      throw (0, _libBbModelErrors.fromHttpError)(e);
	    });
	  };
	
	  /**
	   * @name analysisCategoryModel#loadProducts
	   * @inner
	   * @type {function}
	   *
	   * @description
	   * Load products from API.
	   *
	   * @returns {Promise.<module:model-bb-product-summary-ng.ProductKinds, module:lib-bb-model-errors.ModelError>}
	   * A Promise resolving to object with ProductsKinds and TotalBalance.
	   */
	  var loadProducts = function loadProducts() {
	    return productSummaryData.getProductsummary().then(function (_ref) {
	      var data = _ref.data;
	
	      bbStorage.setItem(_constants.bbStorageKeys.PRODUCT_SUMMARY, data);
	      return data;
	    }).catch(function (e) {
	      throw (0, _libBbModelErrors.fromHttpError)(e);
	    });
	  };
	
	  /**
	   * @name analysisCategoryModel#getProducts
	   * @type {function}
	   *
	   * @description
	   * Get products either from storage or from the service
	   *
	   * @returns {Promise.<module:model-bb-product-summary-ng.ProductKinds, module:lib-bb-model-errors.ModelError>}
	   * A Promise resolving to object with ProductsKinds and TotalBalance.
	   */
	  var getProducts = function getProducts() {
	    return bbStorage.getItem(_constants.bbStorageKeys.PRODUCT_SUMMARY).then(function (data) {
	      return FROM_STORAGE && data ? data : loadProducts();
	    });
	  };
	
	  /**
	   * @name analysisCategoryModel#getProductsArray
	   * @type {function}
	   *
	   * @description
	   * Get products.
	   *
	   * @param {boolean} keepEmptyProducts defines if empty product kinds should be passed.
	   *
	   * @returns {Promise.<module:model-bb-product-summary-ng.Product[], module:lib-bb-model-errors.ModelError>}
	   * A Promise resolving to array with Products.
	   */
	  var getProductsArray = function getProductsArray() {
	    var keepEmptyProducts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
	    return getProducts().then(function (data) {
	      return Object.keys(data).filter(function (kind) {
	        return keepEmptyProducts || productKindHasProducts(data[kind]);
	      }).reduce(function (products, kind) {
	        var extendedProducts = data[kind].products.map(function (product) {
	          return Object.assign(product, { kind: kind });
	        });
	        return products.concat(extendedProducts);
	      }, []);
	    });
	  };
	
	  /**
	   * @name analysisCategoryModel#getProductByID
	   * @inner
	   * @type {function}
	   *
	   * @description
	   * Retrieves a product object with an ID provided
	   *
	   * @param {string} productId product ID to get a stored product record
	   *
	   * @returns {Promise.<module:model-bb-product-summary-ng.Product, module:lib-bb-model-errors.ModelError>}
	   * A Promise resolving to object with ProductsKinds and TotalBalance.
	   */
	  var getProductByID = function getProductByID(productId) {
	    return getProductsArray().then(function (products) {
	      var defaultProduct = GET_FIRST_AS_DEFAULT && products[0] ? products[0] : null;
	      return productId ? products.find(function (product) {
	        return product.id === productId;
	      }) : defaultProduct;
	    });
	  };
	
	  /**
	   * @name analysisCategoryModel#getProductsFromList
	   * @inner
	   * @type {function}
	   *
	   * @description
	   * Get products from list
	   *
	   * @param {string[]} ids Product ID array
	   * @returns {Promise.<module:model-bb-product-summary-ng.Product[], module:lib-bb-model-errors.ModelError>}
	   * A Promise resolving to an array with Products or null
	   */
	  var getProductsFromList = function getProductsFromList(ids) {
	    return getProductsArray().then(function (products) {
	      var defaultProduct = [];
	      if (GET_FIRST_AS_DEFAULT && products[0]) {
	        defaultProduct.push(products[0]);
	      }
	
	      if (!ids || !ids.length) {
	        return defaultProduct;
	      }
	
	      return ids.map(function (id) {
	        return products.find(function (product) {
	          return product.id === id;
	        }) || defaultProduct;
	      });
	    });
	  };
	
	  /**
	   * @name analysisCategoryModel#getSelectedProduct
	   * @type {function}
	   *
	   * @description
	   * Get current selected product.
	   *
	   * @returns {Promise.<module:model-bb-product-summary-ng.Product, module:lib-bb-model-errors.ModelError>}
	   * A Promise resolving to a selected product object.
	   */
	  var getSelectedProduct = function getSelectedProduct() {
	    return bbStorage.getItem(_constants.bbStorageKeys.PRODUCT_SELECTED).then(function (id) {
	      return getProductByID(id);
	    });
	  };
	
	  /**
	   * @name analysisCategoryModel#getSelectedProducts
	   * @type {function}
	   *
	   * @description
	   * Get currently selected products array
	   *
	   * @returns {Promise.<module:model-bb-product-summary-ng.Product[], module:lib-bb-model-errors.ModelError>}
	   * A Promise resolving to Product array
	   */
	  var getSelectedProducts = function getSelectedProducts() {
	    return bbStorage.getItem(_constants.bbStorageKeys.PRODUCTS_SELECTED).then(function (ids) {
	      return getProductsFromList(ids);
	    });
	  };
	
	  /**
	   * @name analysisCategoryModel#setSelectedProduct
	   * @type {function}
	   *
	   * @description
	   * Set selected product to the sorage
	   *
	   * @param {module:model-bb-product-summary-ng.Product} selectedProduct The selected product value
	   */
	  var setSelectedProduct = function setSelectedProduct(selectedProduct) {
	    if (selectedProduct) {
	      bbStorage.setItem(_constants.bbStorageKeys.PRODUCT_SELECTED, selectedProduct.id);
	    } else {
	      bbStorage.removeItem(_constants.bbStorageKeys.PRODUCT_SELECTED);
	    }
	  };
	
	  /**
	   * @name analysisCategoryModel#setSelectedProducts
	   * @type {function}
	   *
	   * @description
	   * Set currently selected products array
	   *
	   * @param {module:model-bb-product-summary-ng.Product[]} products Array of products to select
	   */
	  var setSelectedProducts = function setSelectedProducts(products) {
	    if (products && products.length) {
	      bbStorage.setItem(_constants.bbStorageKeys.PRODUCTS_SELECTED, products.map(function (product) {
	        return product.id;
	      }).filter(function (id) {
	        return id;
	      }));
	    } else {
	      bbStorage.removeItem(_constants.bbStorageKeys.PRODUCTS_SELECTED);
	    }
	  };
	
	  /**
	   * @name analysisCategoryModel#transformToSeries
	   * @type {function}
	   *
	   * @description
	   * Transforms data into format suitable for chart UI components
	   *
	   * @param {AnalysisCategoryData} analysisCategoryData Income/Spending category data
	   * @returns {BBSeries} Data in format suitable for chart UI components
	   */
	  var transformToSeries = function transformToSeries(analysisCategoryData) {
	    analysisCategoryData.items.sort(function (a, b) {
	      return b.portion - a.portion;
	    });
	    return {
	      datasets: [{
	        data: analysisCategoryData.items.map(function (item) {
	          return item.portion;
	        })
	      }],
	      labels: analysisCategoryData.items.map(function (item) {
	        return item.category;
	      })
	    };
	  };
	
	  /**
	   * @name analysisCategoryModel#isFirstProductDefault
	   * @type {function}
	   *
	   * @description
	   * Defines if the first product is selected by default
	   *
	   * @returns {boolean} GET_FIRST_AS_DEFAULT
	   */
	  var isFirstProductDefault = function isFirstProductDefault() {
	    return GET_FIRST_AS_DEFAULT;
	  };
	
	  /**
	   * @name analysisCategoryModel#isMultipleAccount
	   * @type {function}
	   *
	   * @description
	   * Defines if the widget is combined with multiple account selector
	   *
	   * @returns {boolean} IS_MULTIPLE_ACCOUNTS
	   */
	  var isMultipleAccount = function isMultipleAccount() {
	    return IS_MULTIPLE_ACCOUNTS;
	  };
	
	  /**
	   * @name analysisCategoryModel
	   * @type {Object}
	   */
	  return {
	    E_PARAMS: _constants.E_PARAMS,
	    validateAnalysisParameters: validateAnalysisParameters,
	    loadAnalysisData: loadAnalysisData,
	    getProducts: getProducts,
	    getProductsArray: getProductsArray,
	    getSelectedProduct: getSelectedProduct,
	    getSelectedProducts: getSelectedProducts,
	    setSelectedProduct: setSelectedProduct,
	    setSelectedProducts: setSelectedProducts,
	    transformToSeries: transformToSeries,
	    isFirstProductDefault: isFirstProductDefault,
	    isMultipleAccount: isMultipleAccount
	  };
	}

/***/ }),
/* 28 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_28__;

/***/ }),
/* 29 */
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
	var bbStorageKeys = exports.bbStorageKeys = {
	  PRODUCT_SELECTED: 'bb.product.selected',
	  PRODUCTS_SELECTED: 'bb.products.selected',
	  PRODUCT_SUMMARY: 'bb.product.summary.data'
	};
	
	/**
	 * @name preferencesKeys
	 * @description
	 * Preferences keys enum
	 * @type {object}
	 */
	var preferencesKeys = exports.preferencesKeys = {
	  IS_FIRST_PRODUCT_DEFAULT: 'useFirstProductAsDefault',
	  IS_PRODUCTS_LIST_FROM_STORAGE: 'getProductsFromStorage',
	  IS_MULTIPLE_ACCOUNTS: 'multipleAccounts'
	};
	
	/**
	 * @name E_PARAMS
	 * @description
	 * Additional model error in case required parameters are missing
	 * @type {string}
	 */
	var E_PARAMS = exports.E_PARAMS = 'error.load.params';

/***/ })
/******/ ])
});
;
//# sourceMappingURL=model-bb-income-spending-analysis-category-ng.js.map