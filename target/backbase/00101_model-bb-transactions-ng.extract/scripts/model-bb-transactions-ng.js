(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vendor-bb-angular"), require("lib-bb-widget-ng"), require("data-bb-transactions-http-ng"), require("data-bb-product-summary-http-ng"), require("data-bb-payment-orders-http-ng"), require("lib-bb-storage-ng"), require("lib-bb-model-errors"));
	else if(typeof define === 'function' && define.amd)
		define("model-bb-transactions-ng", ["vendor-bb-angular", "lib-bb-widget-ng", "data-bb-transactions-http-ng", "data-bb-product-summary-http-ng", "data-bb-payment-orders-http-ng", "lib-bb-storage-ng", "lib-bb-model-errors"], factory);
	else if(typeof exports === 'object')
		exports["model-bb-transactions-ng"] = factory(require("vendor-bb-angular"), require("lib-bb-widget-ng"), require("data-bb-transactions-http-ng"), require("data-bb-product-summary-http-ng"), require("data-bb-payment-orders-http-ng"), require("lib-bb-storage-ng"), require("lib-bb-model-errors"));
	else
		root["model-bb-transactions-ng"] = factory(root["vendor-bb-angular"], root["lib-bb-widget-ng"], root["data-bb-transactions-http-ng"], root["data-bb-product-summary-http-ng"], root["data-bb-payment-orders-http-ng"], root["lib-bb-storage-ng"], root["lib-bb-model-errors"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_57__, __WEBPACK_EXTERNAL_MODULE_58__, __WEBPACK_EXTERNAL_MODULE_59__, __WEBPACK_EXTERNAL_MODULE_60__, __WEBPACK_EXTERNAL_MODULE_61__, __WEBPACK_EXTERNAL_MODULE_63__) {
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

	module.exports = __webpack_require__(56);

/***/ }),

/***/ 2:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ }),

/***/ 56:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.modelTransactionsKey = exports.modelTransactionsModuleKey = undefined;
	
	var _vendorBbAngular = __webpack_require__(2);
	
	var _vendorBbAngular2 = _interopRequireDefault(_vendorBbAngular);
	
	var _libBbWidgetNg = __webpack_require__(57);
	
	var _libBbWidgetNg2 = _interopRequireDefault(_libBbWidgetNg);
	
	var _dataBbTransactionsHttpNg = __webpack_require__(58);
	
	var _dataBbTransactionsHttpNg2 = _interopRequireDefault(_dataBbTransactionsHttpNg);
	
	var _dataBbProductSummaryHttpNg = __webpack_require__(59);
	
	var _dataBbProductSummaryHttpNg2 = _interopRequireDefault(_dataBbProductSummaryHttpNg);
	
	var _dataBbPaymentOrdersHttpNg = __webpack_require__(60);
	
	var _dataBbPaymentOrdersHttpNg2 = _interopRequireDefault(_dataBbPaymentOrdersHttpNg);
	
	var _libBbStorageNg = __webpack_require__(61);
	
	var _libBbStorageNg2 = _interopRequireDefault(_libBbStorageNg);
	
	var _transactions = __webpack_require__(62);
	
	var _transactions2 = _interopRequireDefault(_transactions);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var modelTransactionsModuleKey = exports.modelTransactionsModuleKey = 'model-bb-transactions-ng'; /**
	                                                                                                   * @module model-bb-transactions-ng
	                                                                                                   *
	                                                                                                   * @description
	                                                                                                   * Transactions model module.
	                                                                                                   *
	                                                                                                   * @usage
	                                                                                                   * import modelTransactionsModuleKey, {
	                                                                                                   *   modelTransactionsKey,
	                                                                                                   * } from 'model-bb-transactions-ng';
	                                                                                                   *
	                                                                                                   * angular.module('widget-bb-transactions-ng', [
	                                                                                                   *   modelTransactionsModuleKey,
	                                                                                                   * ])
	                                                                                                   * .controller('TransactionsController', [
	                                                                                                   *   modelTransactionsKey,
	                                                                                                   *   ...,
	                                                                                                   * ])
	                                                                                                   */
	var modelTransactionsKey = exports.modelTransactionsKey = 'model-bb-transactions-ng:model';
	
	/**
	 * @name default
	 * @type {string}
	 * @description
	 * Transactions Model
	 */
	exports.default = _vendorBbAngular2.default.module(modelTransactionsModuleKey, [_dataBbTransactionsHttpNg2.default, _dataBbProductSummaryHttpNg2.default, _dataBbPaymentOrdersHttpNg2.default, _libBbWidgetNg2.default, _libBbStorageNg2.default]).factory(modelTransactionsKey, [_dataBbTransactionsHttpNg.transactionsDataKey, _dataBbProductSummaryHttpNg.productSummaryDataKey, _dataBbPaymentOrdersHttpNg.paymentOrdersDataKey, _libBbWidgetNg.widgetKey, _libBbStorageNg.bbStorageServiceKey,
	/* into */
	_transactions2.default]).name;

/***/ }),

/***/ 57:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_57__;

/***/ }),

/***/ 58:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_58__;

/***/ }),

/***/ 59:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_59__;

/***/ }),

/***/ 60:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_60__;

/***/ }),

/***/ 61:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_61__;

/***/ }),

/***/ 62:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = transactionsModel;
	
	var _libBbModelErrors = __webpack_require__(63);
	
	var _constants = __webpack_require__(64);
	
	/**
	 * @name transactionsModel
	 * @returns {object}
	 * @inner
	 */
	/* eslint max-len: ["error", 100, { "ignoreComments": true }]*/
	function transactionsModel(transactionsData, productSummaryData, paymentOrdersData, widget, bbStorage) {
	  /**
	   * @name transactionsModel#loadProducts
	   * @inner
	   * @type {function}
	   *
	   * @description
	   * Load products.
	   *
	   * @returns {Promise.<module:model-bb-product-summary-ng.ProductKinds, module:lib-bb-model-errors.ModelError>}
	   * A Promise resolving to object with ProductsKinds and TotalBalance.
	   */
	  var loadProductSummary = function loadProductSummary() {
	    return productSummaryData.getProductsummary().then(function (_ref) {
	      var data = _ref.data;
	
	      bbStorage.setItem(_constants.BbStorageKeys.PRODUCT_SUMMARY, data);
	      return data;
	    }).catch(function (e) {
	      throw (0, _libBbModelErrors.fromHttpError)(e);
	    });
	  };
	
	  /**
	   * @name transactionsModel#getProducts
	   * @inner
	   * @type {function}
	   *
	   * @description
	   * Get product list.
	   *
	   * @returns {Promise.<module:model-bb-product-summary-ng.ProductKinds, module:lib-bb-model-errors.ModelError>}
	   * A Promise resolving to array with products.
	   */
	  var getProducts = function getProducts() {
	    return bbStorage.getItem(_constants.BbStorageKeys.PRODUCT_SUMMARY).then(function (data) {
	      return data || loadProductSummary();
	    }).then(function (data) {
	      return Object.keys(data).filter(function (kind) {
	        return data[kind].products && data[kind].products.length;
	      }).reduce(function (products, kind) {
	        var extendedProducts = data[kind].products.map(function (product) {
	          return Object.assign(product, { kind: kind });
	        });
	        return products.concat(extendedProducts);
	      }, []);
	    });
	  };
	
	  /**
	   * @name transactionsModel#getProductViewModel
	   * @inner
	   * @type {function}
	   *
	   * @description
	   * Get product view model contains product name and product number.
	   *
	   * @param {module:model-bb-product-summary-ng.Product} product Product
	   * @returns {ProductViewModel} product view model
	   */
	  var getProductViewModel = function getProductViewModel(product) {
	    return {
	      accountHolderName: product.accountHolderName || product.name,
	      accountNumber: product.IBAN || product.BBAN || product.number || product.productNumber
	    };
	  };
	
	  /**
	   * @name transactionsModel#processResponse
	   * @inner
	   * @type {function}
	   *
	   * @description
	   * Process response of loading transaction list.
	   *
	   * @param {module:model-bb-product-summary-ng.Product} product Product
	   * @returns {Promise.<Array>} Processed transaction data.
	   */
	  var processResponse = function processResponse(response) {
	    return getProducts().then(function (products) {
	      var data = response.data.map(function (transaction) {
	        var accountOfTransaction = products.find(function (product) {
	          return product.id === transaction.arrangementId;
	        });
	
	        if (accountOfTransaction) {
	          Object.assign(transaction, getProductViewModel(accountOfTransaction));
	        }
	
	        return transaction;
	      });
	
	      return {
	        totalCount: parseInt(response.headers('x-total-count'), 10) || 0,
	        data: data
	      };
	    });
	  };
	
	  /**
	   * @public
	   * @name transactionsModel#load
	   * @type {function}
	   *
	   * @description
	   * Load transactions.
	   *
	   * @param {object} params Request parameters
	   * @returns {Promise.<TransactionItem[]>} List of transactions as a promise.
	   */
	  var load = function load(params) {
	    return transactionsData.getTransactions(params).then(processResponse).catch(function (e) {
	      throw (0, _libBbModelErrors.fromHttpError)(e);
	    });
	  };
	
	  /**
	   * @name transactions@getExportFileResource
	   * @type {function}
	   * @description
	   * Compound URI by data module method and query parameters
	   *
	   * @param {object} params Request parameters
	   */
	  var getExportFileResource = function getExportFileResource(params) {
	    var query = Object.keys(params).reduce(function (array, key) {
	      if (Object.prototype.hasOwnProperty.call(params, key) && params[key]) {
	        array.push(key + '=' + params[key]);
	      }
	
	      return array;
	    }, []).join('&');
	
	    return transactionsData.getTransactionsUri('export?' + query, params);
	  };
	
	  /**
	   * @name transactionsModel#getDefaultProduct
	   * @inner
	   * @type {function}
	   *
	   * @description
	   * Get default product.
	   *
	   * @param {object} id Product ID
	   * @param {Product[]} products Products list
	   * @returns {Promise.<module:model-bb-product-summary-ng.Product|null, module:lib-bb-model-errors.ModelError>}
	   * A Promise resolving to object with default Product or null.
	   */
	  var findProductById = function findProductById(id, products) {
	    return products.find(function (product) {
	      return product.id === id;
	    });
	  };
	
	  /**
	   * @name transactionsModel#getProductFromList
	   * @inner
	   * @type {function}
	   *
	   * @description
	   * Get product from list.
	   *
	   * @param {object} id Product ID
	   * @param {object} getFirstInstead Product ID
	   * @returns {Promise.<module:model-bb-product-summary-ng.Product, module:lib-bb-model-errors.ModelError>}
	   * A Promise resolving to object with Product or null.
	   */
	  var getProductFromList = function getProductFromList(id, getFirstInstead) {
	    return getProducts().then(function (products) {
	      var defaultProduct = getFirstInstead && products[0] ? products[0] : null;
	      return id ? findProductById(id, products) || defaultProduct : defaultProduct;
	    });
	  };
	
	  /**
	   * @public
	   * @name transactionsModel#getSelectedProduct
	   * @type {function}
	   *
	   * @description
	   * Get current selected product
	   *
	   * @returns {Promise.<module:model-bb-product-summary-ng.Product, module:lib-bb-model-errors.ModelError>}
	   * A Promise with Product
	   */
	  var getSelectedProduct = function getSelectedProduct() {
	    var getFirstInstead = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
	    return bbStorage.getItem(_constants.BbStorageKeys.PRODUCT_SELECTED).then(function (id) {
	      return getProductFromList(id, getFirstInstead);
	    });
	  };
	
	  /**
	   * @name transactionsModel#getCurrentTransaction
	   * @type {function}
	   *
	   * @description
	   * Tries to read the current transaction from sync preferences
	   *
	   * @returns {object} Transaction data
	   */
	  var getCurrentTransaction = function getCurrentTransaction() {
	    return bbStorage.getItem(_constants.BbStorageKeys.TRANSACTION_SELECTED);
	  };
	
	  /**
	   * @public
	   * @name transactionsModel#storeTransactionAsCurrent
	   * @type {function}
	   *
	   * @description
	   * Stores a given transaction as current in sync preferences
	   *
	   * @param {object} transaction Transaction data
	   */
	  var storeTransactionAsCurrent = function storeTransactionAsCurrent(transaction) {
	    return bbStorage.setItem(_constants.BbStorageKeys.TRANSACTION_SELECTED, transaction);
	  };
	
	  /**
	   * @name transactionsModel#updateTransactionCategory
	   * @type {function}
	   *
	   * @description
	   * Updates the transaction's category
	   *
	   * @param {string} id Transaction identifier
	   * @param {TransactionUpdate} body Update object
	   * @returns {Promise.<TransactionItem, module:lib-bb-model-errors.ModelError>}
	   * A Promise with Transaction item or error
	   */
	  var updateTransactionCategory = function updateTransactionCategory(id, body) {
	    return transactionsData.putTransactionsCategoryRecord(id, body).then(function (response) {
	      return response.data;
	    }).catch(function (e) {
	      throw (0, _libBbModelErrors.fromHttpError)(e);
	    });
	  };
	
	  /**
	   * @public
	   * @name transactionsModel#getCurrencies
	   * @type {function}
	   *
	   * @description
	   * Get available currencies.
	   *
	   * @returns {Promise.<object[]>} A Promise with response.
	   */
	  var getCurrencies = function getCurrencies() {
	    return paymentOrdersData.getPaymentOrdersCurrencies()
	    // Convert currencies format to the format used in the widgets
	    .then(function (_ref2) {
	      var data = _ref2.data;
	      return data.map(function (_ref3) {
	        var code = _ref3.code;
	        return { name: code };
	      });
	    }).catch(function (httpErrorResponse) {
	      throw (0, _libBbModelErrors.fromHttpError)(httpErrorResponse);
	    });
	  };
	
	  /**
	   * @name transactionsModel
	   * @type {object}
	   */
	  return {
	    load: load,
	    getSelectedProduct: getSelectedProduct,
	    getCurrentTransaction: getCurrentTransaction,
	    storeTransactionAsCurrent: storeTransactionAsCurrent,
	    getCurrencies: getCurrencies,
	    getExportFileResource: getExportFileResource,
	    updateTransactionCategory: updateTransactionCategory
	  };
	}
	
	/**
	 * TransactionUpdate type definition
	 * @typedef {Object} TransactionUpdate
	 * @property {string} categoryName Name of the category
	 */
	
	/**
	 * TransactionItem type definition
	 * @typedef {Object} TransactionItem
	 * @property {string} id Internally used unique identification of the transaction
	 * @property {string} arrangementId Reference to the product to which the transaction belongs
	 * @property {string} externalId Internally used unique external identification of the transaction
	 * @property {string} externalArrangementId External reference to the product to which the transaction belongs
	 * @property {string} productId Reference to the product to which the transaction belongs
	 * @property {string} reference A tag/label issued by the initiator of the transaction in order to be able
	 * to refer to the respective transaction
	 * @property {string} description Transaction description
	 * @property {string} typeGroup Bank specific code of the group the transaaction type belangs to this to be
	 * mapped to in integration
	 * @property {string} type Bank specific code to be mapped to generic type in integration
	 * @property {string} category Transaction category
	 * @property {string} bookingDate The date the amount is posted to the balance of
	 * an account from a book keeping perspective
	 * @property {string} valueDate The date on which an amount posted to an account becomes interest bearing
	 * @property {number} amount The amount of the transaction
	 * @property {string} currency Currency code
	 * @property {string} creditDebitIndicator Indicator if transaction is incoming our outgoing
	 * @property {number} instructedAmount Only present if the transaction currency <> account currency
	 * @property {string} instructedCurrency Currency code of instructed amount
	 * @property {number} currencyExchangeRate The exchange rate (between both account and transaction currency)
	 * that was used for the conversion. To be used if those currencies are not the same
	 * @property {string} counterPartyName The name of the counterparty
	 * @property {string} counterPartyAccountNumber The International Bank Account Number of the counterparty
	 * @property {string} counterPartyBIC The BIC of the counterparty
	 * @property {string} counterPartyCountry ISO Country code
	 * @property {string} counterPartyBankName The bank name of the counterparty
	 * @property {string} creditorId Id of the creditor (Only for SEPA DD)
	 * @property {string} mandateReference Mandate Reference (Only for SEPA DD)
	 */
	
	/**
	 * Product view model type definition
	 * @typedef {Object} ProductViewModel
	 * @property {string} productName name of the Product
	 * @property {string} productNumber number of the Product
	 */

/***/ }),

/***/ 63:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_63__;

/***/ }),

/***/ 64:
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * Widget preferences enum
	 * @type {object}
	 */
	var Preference = exports.Preference = {};
	
	/**
	 * bbStorage keys enum
	 * @type {object}
	 */
	var BbStorageKeys = exports.BbStorageKeys = {
	  PRODUCT_SELECTED: 'bb.product.selected',
	  PRODUCT_SUMMARY: 'bb.product.summary.data',
	  TRANSACTION_SELECTED: 'bb.transaction.selected'
	};

/***/ })

/******/ })
});
;
//# sourceMappingURL=model-bb-transactions-ng.js.map