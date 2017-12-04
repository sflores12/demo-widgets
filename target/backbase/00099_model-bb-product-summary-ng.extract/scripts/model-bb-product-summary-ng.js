(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vendor-bb-angular"), require("lib-bb-storage-ng"), require("data-bb-product-summary-http-ng"), require("data-bb-arrangements-http-ng"), require("lib-bb-widget-ng"), require("lib-bb-model-errors"));
	else if(typeof define === 'function' && define.amd)
		define("model-bb-product-summary-ng", ["vendor-bb-angular", "lib-bb-storage-ng", "data-bb-product-summary-http-ng", "data-bb-arrangements-http-ng", "lib-bb-widget-ng", "lib-bb-model-errors"], factory);
	else if(typeof exports === 'object')
		exports["model-bb-product-summary-ng"] = factory(require("vendor-bb-angular"), require("lib-bb-storage-ng"), require("data-bb-product-summary-http-ng"), require("data-bb-arrangements-http-ng"), require("lib-bb-widget-ng"), require("lib-bb-model-errors"));
	else
		root["model-bb-product-summary-ng"] = factory(root["vendor-bb-angular"], root["lib-bb-storage-ng"], root["data-bb-product-summary-http-ng"], root["data-bb-arrangements-http-ng"], root["lib-bb-widget-ng"], root["lib-bb-model-errors"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_79__, __WEBPACK_EXTERNAL_MODULE_84__, __WEBPACK_EXTERNAL_MODULE_85__, __WEBPACK_EXTERNAL_MODULE_86__, __WEBPACK_EXTERNAL_MODULE_87__, __WEBPACK_EXTERNAL_MODULE_89__) {
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

	module.exports = __webpack_require__(83);

/***/ }),

/***/ 79:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_79__;

/***/ }),

/***/ 83:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.modelProductSummaryKey = undefined;
	
	var _vendorBbAngular = __webpack_require__(79);
	
	var _vendorBbAngular2 = _interopRequireDefault(_vendorBbAngular);
	
	var _libBbStorageNg = __webpack_require__(84);
	
	var _libBbStorageNg2 = _interopRequireDefault(_libBbStorageNg);
	
	var _dataBbProductSummaryHttpNg = __webpack_require__(85);
	
	var _dataBbProductSummaryHttpNg2 = _interopRequireDefault(_dataBbProductSummaryHttpNg);
	
	var _dataBbArrangementsHttpNg = __webpack_require__(86);
	
	var _dataBbArrangementsHttpNg2 = _interopRequireDefault(_dataBbArrangementsHttpNg);
	
	var _libBbWidgetNg = __webpack_require__(87);
	
	var _libBbWidgetNg2 = _interopRequireDefault(_libBbWidgetNg);
	
	var _productSummary = __webpack_require__(88);
	
	var _productSummary2 = _interopRequireDefault(_productSummary);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * Injector name of the model service
	 * @name modelProductSummaryKey
	 * @type {string}
	 */
	/**
	 * @module model-bb-product-summary-ng
	 *
	 * @description
	 * Product summary widget model.
	 *
	 * @usage
	 * import modelProductSummaryModuleKey, {
	 *   modelProductSummaryKey,
	 * } from 'model-bb-product-summary-ng';
	 *
	 * angular.module('widget-bb-product-summary-ng', [
	 *   modelProductSummaryModuleKey,
	 * ])
	 * .controller('ProductSummaryController', [
	 *   modelProductSummaryKey,
	 *   ...,
	 * ])
	 */
	
	var modelProductSummaryKey = exports.modelProductSummaryKey = 'model-bb-product-summary-ng:model';
	
	exports.default = _vendorBbAngular2.default.module('model-bb-product-summary-ng', [_dataBbProductSummaryHttpNg2.default, _dataBbArrangementsHttpNg2.default, _libBbStorageNg2.default, _libBbWidgetNg2.default]).factory(modelProductSummaryKey, [_dataBbProductSummaryHttpNg.productSummaryDataKey, _dataBbArrangementsHttpNg.arrangementsDataKey, _libBbStorageNg.bbStorageServiceKey, '$q', _libBbWidgetNg.widgetKey,
	/* into */
	_productSummary2.default]).name;

/***/ }),

/***/ 84:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_84__;

/***/ }),

/***/ 85:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_85__;

/***/ }),

/***/ 86:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_86__;

/***/ }),

/***/ 87:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_87__;

/***/ }),

/***/ 88:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = productSummaryModel;
	
	var _libBbModelErrors = __webpack_require__(89);
	
	var _constants = __webpack_require__(90);
	
	/**
	 * Method to normalize data
	 * @private
	 * @param rawData {Object} http data response
	 * @returns {ProductKind[]}
	 */
	function convertToArray(rawData) {
	  return Object.keys(rawData).filter(function (kind) {
	    return rawData[kind].products && rawData[kind].products.length > 0;
	  }).map(function (kind) {
	    var rawKind = rawData[kind];
	    var products = rawKind.products.map(function (product) {
	      return Object.assign({ kind: kind }, product);
	    });
	
	    return Object.assign({}, rawKind, { id: kind, products: products });
	  });
	}
	
	/**
	 * Product summary model service
	 * @name ProductSummaryModel
	 * @param {ProductSummaryData} productSummaryData
	 *   A Data module to allow access to product summary data.
	 * @param {ArrangementsData} arrangementsData
	 *   A Data module to allow access to arrangements data.
	 * @param {Object} bbStorage storage instance
	 * @param {object} Promise An ES2015 compatible `Promise` object.
	 * @return {ProductSummaryModel}
	 * @inner
	 */
	function productSummaryModel(productSummaryData, arrangementsData, bbStorage, Promise, widget) {
	  /**
	   * @description
	   * Processed Product Summary data
	   * @type {ProductKinds}
	   */
	  var processedSummaryData = void 0;
	
	  /**
	   * @name ProductSummaryModel#patchArrangement
	   * @type {function}
	   * @description Perform Patch request for arrangement
	   * @param {ArrangementsData.ArrangementPatch} arrangement
	   * Arrangement data to be sent as the request message data.
	   * @returns {Promise.<Response>}
	   */
	  var patchArrangement = function patchArrangement(arrangement) {
	    return arrangementsData.patchArrangementsRecord(arrangement).catch(function (e) {
	      throw (0, _libBbModelErrors.fromHttpError)(e);
	    });
	  };
	
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
	   * @name ProductSummaryModel#load
	   * @type {function}
	   *
	   * @description
	   * Load Product Summary data.
	   *
	   * @param {object} forceLoad True if should always load data from server
	   * @returns {Promise.<ProductKinds, module:lib-bb-model-errors.ModelError>}
	   * A Promise resolving to object with ProductsKinds and TotalBalance.
	   */
	  var load = function load() {
	    var forceLoad = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
	    return bbStorage.getItem(_constants.BbStorageKeys.PRODUCT_SUMMARY).then(function (data) {
	      return !forceLoad && data || loadProductSummary();
	    }).then(function (data) {
	      var aggregatedBalance = data.aggregatedBalance;
	
	      processedSummaryData = {
	        productKinds: convertToArray(data),
	        total: aggregatedBalance
	      };
	      return processedSummaryData;
	    });
	  };
	
	  /**
	   * @name ProductSummaryModel#getProductSelectedId
	   * @inner
	   * @type {function}
	   *
	   * @description
	   * Tries to read selected product id from storage.
	   *
	   * @returns {Promise<?string>} a Promise with ID
	   */
	  var getProductSelectedId = function getProductSelectedId() {
	    return bbStorage.getItem(_constants.BbStorageKeys.PRODUCT_SELECTED);
	  };
	
	  /**
	   * @name ProductSummaryModel#findProductById
	   * @inner
	   * @type {function}
	   *
	   * @description
	   * Get product by ID.
	   *
	   * @param {object} id Product ID
	   * @param {ProductKind[]} data Products list
	   * @returns {Promise.<Product|null, module:lib-bb-model-errors.ModelError>}
	   * A Promise resolving to object with default Product or null.
	   */
	  var findProductById = function findProductById(id, data) {
	    var idx = data.length;
	
	    while (idx--) {
	      var kind = data[idx];
	      var foundProduct = kind.products.find(function (product) {
	        return product.id === id;
	      });
	
	      if (foundProduct) {
	        return foundProduct;
	      }
	    }
	
	    return null;
	  };
	
	  /**
	   * @name ProductSummaryModel#getProductFromList
	   * @inner
	   * @type {function}
	   *
	   * @description
	   * Get product from list.
	   *
	   * @param {object} id Product ID
	   * @param {boolean} getFirstInstead True if should return first product if does not have selected
	   * @returns {Promise.<?Product, module:lib-bb-model-errors.ModelError>}
	   * A Promise resolving to object with Product or null.
	   */
	  var getProductFromList = function getProductFromList(id, getFirstInstead) {
	    return Promise.resolve(processedSummaryData || load(false)).then(function (_ref2) {
	      var productKinds = _ref2.productKinds;
	
	      var defaultProduct = getFirstInstead && productKinds[0] ? productKinds[0].products[0] : null;
	      return id ? findProductById(id, productKinds) || defaultProduct : defaultProduct;
	    });
	  };
	
	  /**
	   * @name ProductSummaryModel#getProductsFromList
	   * @inner
	   * @type {function}
	   *
	   * @description
	   * Get products from list
	   *
	   * @param {string[]} ids Product ID array
	   * @param {boolean} getFirstInstead True if should return first product if does not have selected
	   * @returns {Promise.<?Product[], module:lib-bb-model-errors.ModelError>}
	   * A Promise resolving to an array with Products or null
	   */
	  var getProductsFromList = function getProductsFromList(ids, getFirstInstead) {
	    return Promise.resolve(processedSummaryData || load(false)).then(function (_ref3) {
	      var productKinds = _ref3.productKinds;
	
	      var defaultProduct = [];
	      if (getFirstInstead && productKinds[0]) {
	        defaultProduct.push(productKinds[0].products[0]);
	      }
	
	      if (!ids || !ids.length) {
	        return defaultProduct;
	      }
	
	      return ids.map(function (id) {
	        return findProductById(id, productKinds) || defaultProduct;
	      });
	    });
	  };
	
	  /**
	   * @name ProductSummaryModel#getProductSelected
	   * @type {function}
	   *
	   * @description
	   * Temporary. Get current selected product
	   *
	   * @param {?Boolean} getFirstInstead Get first product if there is no
	   * product selected in the storage (default true)
	   * @returns {Promise.<Product>} A Promise resolving to Product.
	   */
	  var getProductSelected = function getProductSelected() {
	    var getFirstInstead = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
	    return getProductSelectedId().then(function (id) {
	      return getProductFromList(id, getFirstInstead);
	    });
	  };
	
	  /**
	   * @name ProductSummaryModel#getProductsSelected
	   * @type {function}
	   *
	   * @description
	   * Get currently selected products array
	   *
	   * @param {?Boolean} getFirstInstead Get first product if there are no
	   * products selected in the storage (default true)
	   * @returns {Promise.<Product[]>} A Promise resolving to Product array
	   */
	  var getProductsSelected = function getProductsSelected() {
	    var getFirstInstead = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
	    return bbStorage.getItem(_constants.BbStorageKeys.PRODUCTS_SELECTED).then(function (items) {
	      return getProductsFromList(items, getFirstInstead);
	    });
	  };
	
	  /**
	   * @name ProductSummaryModel#setProductSelected
	   * @type {function}
	   *
	   * @description
	   * Set current selected product
	   *
	   * @param {Product} product A product to select
	   */
	  var setProductSelected = function setProductSelected(product) {
	    if (product) {
	      bbStorage.setItem(_constants.BbStorageKeys.PRODUCT_SELECTED, product.id);
	    } else {
	      bbStorage.removeItem(_constants.BbStorageKeys.PRODUCT_SELECTED);
	    }
	  };
	
	  /**
	   * @name ProductSummaryModel#setProductsSelected
	   * @type {function}
	   *
	   * @description
	   * Set currently selected products array
	   *
	   * @param {Product[]} products Array of products to select
	   */
	  var setProductsSelected = function setProductsSelected(products) {
	    if (products && products.length) {
	      bbStorage.setItem(_constants.BbStorageKeys.PRODUCTS_SELECTED, products.map(function (product) {
	        return product.id;
	      }).filter(function (id) {
	        return id;
	      }));
	    } else {
	      bbStorage.removeItem(_constants.BbStorageKeys.PRODUCTS_SELECTED);
	    }
	  };
	
	  /**
	   * @name ProductSummaryModel#loadByLegalEntityId
	   * @type {function}
	   *
	   * @description
	   * Load some data.
	   *
	   * @param {?object} params - optional configuration object
	   * @returns {Promise.<Products, module:lib-bb-model-errors.ModelError>}
	   * A Promise resolving to object with Accounts by legalEntityId.
	   */
	  var loadByLegalEntityId = function loadByLegalEntityId(params) {
	    return productSummaryData.getProductsummaryArrangements(params).then(function (raw) {
	      return {
	        data: raw.data,
	        totalCount: parseInt(raw.headers('x-total-count'), 10)
	      };
	    }).catch(function (e) {
	      throw (0, _libBbModelErrors.fromHttpError)(e);
	    });
	  };
	
	  /**
	   * @name ProductSummaryModel#loadContextArrangements
	   * @type {function}
	   *
	   * @description
	   * Load arrangements collection for a given context
	   *
	   * @param {?object} params - optional configuration object
	   * @returns {Promise.<Products, module:lib-bb-model-errors.ModelError>} A Promise resolving to
	   *   a collection containing products.
	   */
	  var loadContextArrangements = function loadContextArrangements(params) {
	    return productSummaryData.getProductsummaryContextArrangements(params).then(function (raw) {
	      return {
	        data: raw.data,
	        totalCount: parseInt(raw.headers('x-total-count'), 10)
	      };
	    }).catch(function (e) {
	      throw (0, _libBbModelErrors.fromHttpError)(e);
	    });
	  };
	
	  /**
	   * @name ProductSummaryModel#getProductDetails
	   * @type {function}
	   *
	   * @description
	   * Get all the details of a product.
	   *
	   * @param {string} productId Id of the requested product
	   * @returns {Promise.<ProductDetails, module:lib-bb-model-errors.ModelError>}
	   * A Promise resolving to object with Account details.
	   */
	  var getProductDetails = function getProductDetails(productId) {
	    return arrangementsData.getArrangementsRecord(productId).then(function (raw) {
	      return raw.data;
	    }).catch(function (e) {
	      throw (0, _libBbModelErrors.fromHttpError)(e);
	    });
	  };
	
	  /**
	   * @name ProductSummaryModel#getAccountsOverviewPreferences
	   * @type {function}
	   *
	   * @description
	   * Getting accounts preferences from widget
	   *
	   * @returns {Object} Preferences object
	   */
	  function getAccountsOverviewPreferences() {
	    var accountsOverviewPreferences = {};
	
	    accountsOverviewPreferences.pageSize = widget.getLongPreference(_constants.Preference.ACCOUNTS_PAGE_SIZE);
	    accountsOverviewPreferences.maxNavPages = widget.getLongPreference(_constants.Preference.ACCOUNTS_MAX_NAV_PAGES);
	    accountsOverviewPreferences.paginationType = widget.getStringPreference(_constants.Preference.ACCOUNTS_PAGINATION_TYPE);
	    accountsOverviewPreferences.dissmissMessageTime = widget.getLongPreference(_constants.Preference.ACCOUNTS_DISSMISS_MESSAGE_TIME) || 5;
	    accountsOverviewPreferences.sortableColumn = widget.getStringPreference(_constants.Preference.ACCOUNTS_SORTABLE_COLUMN);
	    accountsOverviewPreferences.productKindName = _constants.SupportedProductKinds.includes(widget.getStringPreference(_constants.Preference.PRODUCT_KIND_NAME)) ? widget.getStringPreference(_constants.Preference.PRODUCT_KIND_NAME) : '';
	
	    return accountsOverviewPreferences;
	  }
	
	  /**
	   * @name ProductSummaryModel
	   * @type {Object}
	   *
	   * @description
	   * Product Summary model service
	   */
	  return {
	    load: load,
	    getProductSelected: getProductSelected,
	    setProductSelected: setProductSelected,
	    getProductsSelected: getProductsSelected,
	    setProductsSelected: setProductsSelected,
	
	    // TODO: Remove this deprecated method when component version will be bumped to v2.0.0
	    getSelectedAccount: function getSelectedAccount() {
	      // eslint-disable-next-line max-len, no-console
	      console.warn('DEPRECATED - This method will removed in next major update. Use getProductSelected instead.');
	      return getProductSelected();
	    },
	
	    // TODO: Remove this deprecated method when component version will be bumped to v2.0.0
	    setSelectedAccount: function setSelectedAccount(account) {
	      // eslint-disable-next-line max-len, no-console
	      console.warn('DEPRECATED - This method will removed in next major update. Use setProductSelected instead.');
	      return setProductSelected(account);
	    },
	    //
	    loadByLegalEntityId: loadByLegalEntityId,
	    getProductDetails: getProductDetails,
	    getAccountsOverviewPreferences: getAccountsOverviewPreferences,
	    patchArrangement: patchArrangement,
	
	    loadContextArrangements: loadContextArrangements
	  };
	}
	
	/**
	 * ProductKind type definition
	 * @typedef {Object} ProductKinds
	 * @property {TotalBalance}   total               - total balance of products
	 * @property {ProductKind[]}  productKinds        - array of Products Kinds
	 */
	
	/**
	 * ProductKind type definition
	 * @typedef {Object} ProductKind
	 * @property {!string}    id                      - id of the ProductKind
	 * (currentAccounts, savingsAccounts, termDeposits, creditCards, debitCards, loans,
	 *  investmentAccounts)
	 * @property {!string}    name                    - name of the ProductKind
	 * @property {string}     aggregatedBalance       - aggregated balance
	 * @property {string}     currency                - currency code
	 * @property {Product[]}  products                - array of Products
	 */
	
	/**
	 * ProductKind type definition
	 * @typedef {Object} Products
	 * @property {number}     totalCount              - total number of products
	 * @property {Product[]}  products                - array of Products
	 */
	
	/**
	 * Product type definition
	 * @typedef {Object} Product
	 * @property {!string}    id                      - id of the Product
	 * @property {!string}    name                    - name of the Product
	 * @property {!string}    kind                    - id of the ProductKind
	 * @property {string}     alias                   - alias of the Product
	 * @property {string}     IBAN                    - International Bank Account Number
	 * @property {string}     BBAN                    - Basic Bank Account Number
	 * @property {string}     currency                - currency code
	 * @property {string}     PANSuffix               - Primary Account Number Suffix
	 * @property {string}     bookedBalance           - booked balance
	 * @property {string}     availableBalance        - available balance
	 * @property {string}     creditLimit             - credit limit
	 * @property {string}     currentInvestmentValue  - current investment value
	 * @property {string}     principalAmount         - principal amount
	 * @property {string}     accruedInterest         - accrued interest
	 */
	
	/**
	 * @typedef {Object} TotalBalance
	 * @property {string} aggregatedBalance - aggregated balance
	 * @property {string} currency - currency code
	 */
	
	/**
	 * Product details definition
	 * @typedef {Object} ProductDetails
	 * @property {!string}     externalArrangementId      - id of the external arrangement
	 * @property {!string}     externalLegalEntityId      - id of the external legal entity
	 * @property {!string}     externalProductId          - id of the external product
	 * @property {string}      name                       - name of the account
	 * @property {string}      alias                      - alias of the account
	 * @property {number}      bookedBalance              - booked balance
	 * @property {number}      availableBalance           - available balance
	 * @property {number}      creditLimit                - credit limit
	 * @property {string}      IBAN                       - International Bank Account Number
	 * @property {string}      BBAN                       - Basic Bank Account Number
	 * @property {string}      currency                   - 3 characteres currency code
	 * @property {boolean}     externalTransferAllowed    - is external transfer allowed
	 * @property {boolean}     urgentTransferAllowed      - is urgent transfer allowed
	 * @property {string}      accruedInterest            - accrued interest
	 * @property {string}      number                     - number
	 * @property {number}      principalAmount            - principal amount
	 * @property {number}      currentInvestmentValue     - current investment value
	 * @property {!string}     legalEntityId              - id of the legal entity
	 * @property {!string}     productId                  - id of the product
	 * @property {string}      productNumber              - number of the product
	 * @property {string}      accountOpeningDate         - date when account was opened
	 * @property {number}      accountInterestRate        - account interest rate
	 * @property {number}      valueDateBalance           - value date balance
	 * @property {number}      overdraftAmount            - overdraft amount
	 * @property {number}      overdraftInterestRate      - overdraft interest rate
	 * @property {number}      overdraftExpiryDate        - overdraft expiry date
	 * @property {number}      overdraftLimit             - overdraft limit
	 * @property {string}      bankBranchCode             - bank branch code
	 * @property {date}        startDate                  - start date
	 * @property {string}      term                       - term
	 * @property {date}        maturityDate               - maturity date
	 * @property {number}      maturityAmount             - maturity amount
	 * @property {boolean}     autoRenevalIndicator       - is auto renewal enabled
	 * @property {string}      interestPaymentFrequency   - interest payment frequency
	 * @property {string}      interestSettlementAccount  - interest settlement account
	 * @property {number}      outstandingPrincipal       - outstanding principal
	 * @property {number}      monthlyInstalmentAmount    - monthly instalment amount
	 * @property {number}      minimumRequiredBalance     - minimum required balance
	 * @property {string}      creditCardAccountNumber    - credit card account number
	 * @property {date}        validThru                  - credit card validity through date
	 * @property {number}      applicableInterestRate     - applicable interest rate
	 * @property {number}      remainingCredit            - remaining credit
	 * @property {number}      outstandingPayment         - outstanding payment
	 * @property {number}      minimunPayment             - minimum payment
	 * @property {date}        minimunPaymentDueDate      - minimum payment due date
	 * @property {number}      totalInvestmentValue       - total investment value
	 * @property {DebitCard[]} debitCard                  - debit card collection
	 */
	
	/**
	 * @typedef {Object} DebitCard
	 * @property {string} number      - debit card number
	 * @property {date}   expiryDate  - debit card expiry date
	 */
	
	/**
	 * @typedef ArrangementsData.ArrangementPatch
	 * @type {Object}
	 * @property {string} id Internally used unique identification of arrangement
	 * @property {?string} alias User specific naming for an arrangement
	 * @property {?boolean} visible User specific visibility for an arrangement
	 * @property {?Object} additions Container object for custom API extensions
	 */
	
	/**
	 * @typedef Response
	 * @type {Object}
	 * @property {Object} data See method descriptions for possible return types
	 * @property {function} headers Getter headers function
	 * @property {number} status HTTP status code of the response.
	 * @property {string} statusText HTTP status text of the response.
	 */

/***/ }),

/***/ 89:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_89__;

/***/ }),

/***/ 90:
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * Widget preferences enum
	 * @type {object}
	 */
	var Preference = exports.Preference = {
	  ACCOUNTS_PAGE_SIZE: 'bb.accountsOverview.pageSize',
	  ACCOUNTS_MAX_NAV_PAGES: 'bb.accountsOverview.maxNavPages',
	  ACCOUNTS_PAGINATION_TYPE: 'bb.accountsOverview.paginationType',
	  ACCOUNTS_SORTABLE_COLUMN: 'bb.accountsOverview.defaultSortableColumn',
	  ACCOUNTS_DISSMISS_MESSAGE_TIME: 'bb.accountsOverview.dismissMessageTime',
	  PRODUCT_KIND_NAME: 'bb.accountsOverview.productKindName'
	};
	
	/**
	 * bbStorage keys enum
	 * @type {object}
	 */
	var BbStorageKeys = exports.BbStorageKeys = {
	  PRODUCT_SELECTED: 'bb.product.selected',
	  PRODUCTS_SELECTED: 'bb.products.selected',
	  PRODUCT_SUMMARY: 'bb.product.summary.data'
	};
	
	/**
	 * Supported account types
	 * @type {array<string>}
	 */
	var SupportedProductKinds = exports.SupportedProductKinds = ['Aggregated Balance', 'Current Account', 'Savings Account', 'Term Deposit', 'Loan', 'Credit Card', 'Debit Card', 'Investment Account'];

/***/ })

/******/ })
});
;
//# sourceMappingURL=model-bb-product-summary-ng.js.map