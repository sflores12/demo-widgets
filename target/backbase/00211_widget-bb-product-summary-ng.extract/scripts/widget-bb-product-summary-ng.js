(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vendor-bb-angular"), require("lib-bb-widget-ng"), require("lib-bb-model-errors"), require("lib-bb-widget-extension-ng"), require("model-bb-product-summary-ng"), require("lib-bb-intent-ng"), require("lib-bb-event-bus-ng"));
	else if(typeof define === 'function' && define.amd)
		define("widget-bb-product-summary-ng", ["vendor-bb-angular", "lib-bb-widget-ng", "lib-bb-model-errors", "lib-bb-widget-extension-ng", "model-bb-product-summary-ng", "lib-bb-intent-ng", "lib-bb-event-bus-ng"], factory);
	else if(typeof exports === 'object')
		exports["widget-bb-product-summary-ng"] = factory(require("vendor-bb-angular"), require("lib-bb-widget-ng"), require("lib-bb-model-errors"), require("lib-bb-widget-extension-ng"), require("model-bb-product-summary-ng"), require("lib-bb-intent-ng"), require("lib-bb-event-bus-ng"));
	else
		root["widget-bb-product-summary-ng"] = factory(root["vendor-bb-angular"], root["lib-bb-widget-ng"], root["lib-bb-model-errors"], root["lib-bb-widget-extension-ng"], root["model-bb-product-summary-ng"], root["lib-bb-intent-ng"], root["lib-bb-event-bus-ng"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_79__, __WEBPACK_EXTERNAL_MODULE_87__, __WEBPACK_EXTERNAL_MODULE_89__, __WEBPACK_EXTERNAL_MODULE_107__, __WEBPACK_EXTERNAL_MODULE_108__, __WEBPACK_EXTERNAL_MODULE_109__, __WEBPACK_EXTERNAL_MODULE_111__) {
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

	module.exports = __webpack_require__(119);

/***/ }),

/***/ 79:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_79__;

/***/ }),

/***/ 87:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_87__;

/***/ }),

/***/ 89:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_89__;

/***/ }),

/***/ 107:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_107__;

/***/ }),

/***/ 108:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_108__;

/***/ }),

/***/ 109:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_109__;

/***/ }),

/***/ 111:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_111__;

/***/ }),

/***/ 119:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _vendorBbAngular = __webpack_require__(79);
	
	var _vendorBbAngular2 = _interopRequireDefault(_vendorBbAngular);
	
	var _libBbWidgetExtensionNg = __webpack_require__(107);
	
	var _libBbWidgetExtensionNg2 = _interopRequireDefault(_libBbWidgetExtensionNg);
	
	var _libBbWidgetNg = __webpack_require__(87);
	
	var _libBbWidgetNg2 = _interopRequireDefault(_libBbWidgetNg);
	
	var _modelBbProductSummaryNg = __webpack_require__(108);
	
	var _modelBbProductSummaryNg2 = _interopRequireDefault(_modelBbProductSummaryNg);
	
	var _libBbEventBusNg = __webpack_require__(111);
	
	var _libBbEventBusNg2 = _interopRequireDefault(_libBbEventBusNg);
	
	var _libBbIntentNg = __webpack_require__(109);
	
	var _libBbIntentNg2 = _interopRequireDefault(_libBbIntentNg);
	
	var _controller = __webpack_require__(120);
	
	var _controller2 = _interopRequireDefault(_controller);
	
	var _defaultHooks = __webpack_require__(123);
	
	var defaultHooks = _interopRequireWildcard(_defaultHooks);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * @module widget-bb-product-summary-ng
	 *
	 * @description
	 * Product summary.
	 *
	 * @borrows module:model-bb-product-summary-ng.Product as Product
	 * @borrows module:model-bb-product-summary-ng.ProductKind as ProductKind
	 * @borrows module:lib-bb-model-errors.ModelError as ModelError
	 *
	 * @example
	 *  <div ng-controller="ProductSummaryController as $ctrl">
	 *    <ul>
	 *       <li ng-repeat="product in $ctrl.products">{{product.id}}</li>
	 *    </ul>
	 *  </div>
	 */
	var hooksKey = 'widget-bb-product-summary-ng:hooks';
	
	/**
	 * @name default
	 * @type {string}
	 * @description Angular module name
	 */
	exports.default = _vendorBbAngular2.default.module('widget-bb-product-summary-ng', [_modelBbProductSummaryNg2.default, _libBbEventBusNg2.default, _libBbWidgetNg2.default, _libBbIntentNg2.default]).factory(hooksKey, (0, _libBbWidgetExtensionNg2.default)(defaultHooks)).controller('ProductSummaryController', [_modelBbProductSummaryNg.modelProductSummaryKey, hooksKey, _libBbEventBusNg.eventBusKey, _libBbWidgetNg.widgetKey, _libBbIntentNg.bbIntentKey,
	/* into */
	_controller2.default]).run([_libBbEventBusNg.eventBusKey, _libBbWidgetNg.widgetKey, _libBbIntentNg.bbIntentKey, function (bus, widget, bbIntent) {
	  bus.publish('cxp.item.loaded', {
	    id: widget.getId()
	  });
	  bbIntent.init();
	}]).name;

/***/ }),

/***/ 120:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = ProductSummaryController;
	
	var _constants = __webpack_require__(121);
	
	var _message = __webpack_require__(122);
	
	var _message2 = _interopRequireDefault(_message);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var PRODUCT_SELECTED = _message2.default.PRODUCT_SELECTED,
	    PRODUCTS_SELECTED = _message2.default.PRODUCTS_SELECTED,
	    REFLOW_TRIGGERED = _message2.default.REFLOW_TRIGGERED;
	
	/**
	 * @name uiError
	 *
	 * @description
	 * Creates UI error message.
	 *
	 * @type {function}
	 *
	 * @param {object} messageMap object with error message keys
	 * @param {object} modelError the error object
	 *
	 * @returns {{message: string}}
	 */
	
	var uiError = function uiError(messageMap, modelError) {
	  return {
	    message: messageMap[modelError.code]
	  };
	};
	
	function ProductSummaryController(model, hooks, eventBus, widget, bbIntent) {
	  /**
	   * @name ProductSummaryController
	   * @ngkey ProductSummaryController
	   * @type {object}
	   * @description
	   * Product summary controller.
	   *
	   */
	  var $ctrl = this;
	
	  /**
	   * @description
	   * A set of intents that the controller uses or handles.
	   *
	   * @name intents
	   * @type {Object}
	   * @inner
	   */
	  var intents = {};
	
	  /**
	   * @description
	   * Sets the alternate workflow when a user selects a Product from the overview.
	   *
	   * @name ProductSummaryController#selectProduct
	   * @type {function}
	   * @param {Product} product Product to select.
	   * @fires bb.event.product.selected
	   * @fires bb.event.product.selected.[product-kind]
	   */
	  var selectProduct = function selectProduct(product) {
	    model.setProductSelected(product);
	    eventBus.publish(PRODUCT_SELECTED, { product: product });
	    // for all accounts selection, do not send per kind event
	    if (product && product.kind) {
	      eventBus.publish(PRODUCT_SELECTED + '.' + product.kind, { product: product });
	    }
	  };
	
	  /**
	   * @description
	   * Sets the alternate workflow when a user selects multiple Products from the overview or selector
	   *
	   * @name ProductSummaryController#selectProducts
	   * @type {function}
	   * @param {Product[]} products Array of Products to select
	   * @fires bb.event.products.selected
	   */
	  var selectProducts = function selectProducts(products) {
	    model.setProductsSelected(products);
	    eventBus.publish(PRODUCTS_SELECTED, { products: products });
	  };
	
	  /**
	   * @description
	   * Check if value is defined, not null and not empty
	   * @inner
	   * @name hasValue
	   * @type {function}
	   * @param  {*} value  The value to check
	   * @return {boolean}
	   */
	  var hasValue = function hasValue(value) {
	    return typeof value !== 'undefined' && value !== null && value !== '';
	  };
	
	  /**
	   * @description
	   * Loading extended parameters for a given product
	   *
	   * @inner
	   * @name ProductSummaryController#loadProductDetails
	   * @type {function}
	   *
	   * @returns {Promise.<void>}
	   */
	  var loadProductDetails = function loadProductDetails(product) {
	    model.getProductDetails(product.id).then(function (extendedProduct) {
	      if (!hasValue(extendedProduct.productKindName)) {
	        Object.assign(extendedProduct, {
	          productKindName: product.productKindName
	        });
	      }
	      Object.assign(extendedProduct, {
	        productTypeName: product.productKindName
	      });
	      $ctrl.extendedProduct = hooks.processExtendedProduct(extendedProduct);
	    }).catch(function (error) {
	      $ctrl.productKindsError = uiError(_constants.errorMessages, error);
	    });
	  };
	
	  /**
	   * @description
	   * Handles product select
	   *
	   * @name ProductSummaryController#updateProductSelected
	   * @type {function}
	   *
	   * @returns {Promise.<void>}
	   */
	  function updateProductSelected() {
	    model.getProductSelected().then(function (productSelected) {
	      $ctrl.productSelected = hooks.processProductSelected(productSelected);
	      if (productSelected !== null) {
	        loadProductDetails(productSelected);
	      }
	    }).catch(function (error) {
	      $ctrl.productKindsError = uiError(_constants.errorMessages, error);
	    });
	  }
	
	  /**
	   * @description
	   * Handles multiple product selection
	   *
	   * @name ProductSummaryController#updateProductsSelected
	   * @type {function}
	   *
	   * @returns {Promise.<void>}
	   */
	  function updateProductsSelected() {
	    model.getProductsSelected(false).then(function (productsSelected) {
	      $ctrl.productsSelected = hooks.processProductsSelected(productsSelected);
	    });
	  }
	
	  /**
	   * @description
	   * Products loading logic
	   *
	   * @name ProductSummaryController#loadProducts
	   * @type {function}
	   *
	   * @returns {Promise.<void>}
	   */
	  var loadProducts = function loadProducts() {
	    var forceLoad = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
	
	    $ctrl.isProductLoading = true;
	
	    return model.load(forceLoad).then(function (_ref) {
	      var productKinds = _ref.productKinds,
	          total = _ref.total;
	
	      $ctrl.isProductLoading = false;
	
	      $ctrl.total = total;
	      $ctrl.productKinds = hooks.processKinds(productKinds);
	    }).then(updateProductSelected).then(updateProductsSelected).catch(function (error) {
	      $ctrl.isProductLoading = false;
	      $ctrl.productKindsError = uiError(_constants.errorMessages, error);
	    });
	  };
	
	  /**
	   * @description
	   * Adds subscriptions to bus events
	   *
	   * @name ProductSummaryController#bindEvents
	   * @type {function}
	   */
	  function bindEvents() {
	    eventBus.subscribe(PRODUCT_SELECTED, updateProductSelected);
	    eventBus.subscribe(PRODUCTS_SELECTED, updateProductsSelected);
	    eventBus.subscribe(REFLOW_TRIGGERED, loadProducts);
	  }
	
	  /**
	   * @description
	   * Handles the intent to switch the view to product summary
	   *
	   * @type {function}
	   * @name ProductSummary#viewManageProducts
	   */
	  var viewManageProducts = function viewManageProducts() {
	    if (intents.viewManageProducts) {
	      intents.viewManageProducts();
	    }
	  };
	
	  /**
	   * @description
	   * Inits the bbIntent and adds intent handlers.
	   *
	   * @inner
	   * @name ManageProductsController#initIntent
	   * @type {function}
	   */
	  var initIntent = function initIntent() {
	    intents.viewManageProducts = bbIntent.create(_constants.Intent.VIEW_MANAGE_PRODUCTS);
	
	    bbIntent.handle(_constants.Intent.VIEW_PRODUCT_SUMMARY, function () {
	      loadProducts();
	    });
	  };
	
	  /*
	   * Widget initialization logic.
	   */
	  var $onInit = function $onInit() {
	    /**
	     * This event (cxp.item.loaded) is deprecated in Mobile SDK version > 3.0
	     * and will be removed with the update to widget collection 3 (WC3)
	     */
	    eventBus.publish('cxp.item.loaded', {
	      id: widget.getId()
	    });
	
	    eventBus.publish('bb.item.loaded', {
	      id: widget.getId()
	    });
	
	    return loadProducts().then(bindEvents).then(initIntent);
	  };
	
	  Object.assign($ctrl, {
	    /**
	     * @description
	     * The selected product.
	     * The value returned from {@link Hooks.processProductSelected} hook
	     *
	     * @name ProductSummaryController#productSelected
	     * @type {any}
	     */
	    productSelected: null,
	    /**
	     * @description
	     * Array of selected products.
	     * The value returned from {@link Hooks.processProductsSelected} hook
	     *
	     * @name ProductSummaryController#productsSelected
	     * @type {array}
	     */
	    productsSelected: [],
	    /**
	     * @description
	     * The selected product extended with arrangement details.
	     *
	     * @name ProductSummaryController#extendedProduct
	     * @type {any}
	     */
	    extendedProduct: null,
	    /**
	     * @description
	     * The value returned from {@link Hooks.processKinds} hook.
	     * null if the products aren't loaded.
	     *
	     * @name ProductSummaryController#productKinds
	     * @type {any}
	     */
	    productKinds: null,
	    /**
	     * @description
	     * Loading status of the products
	     *
	     * @name ProductSummaryController#isProductLoading
	     * @type {boolean}
	     */
	    isProductLoading: false,
	    /**
	     * @description
	     * The error encountered when attempting to fetch the products from the model
	     *
	     * @name ProductSummaryController#productKindsError
	     * @type {ModelError}
	     */
	    productKindsError: null,
	    /**
	     * @description
	     * Checks the list is empty or not
	     *
	     * @name ProductSummaryController#hasProducts
	     * @type {function}
	     * @returns {boolean} false if product list is empty
	     */
	    hasProducts: function hasProducts() {
	      return !!$ctrl.productKinds.length;
	    },
	    /**
	     * @description
	     * The total balance for the products
	     *
	     * @name ProductSummaryController#total
	     * @type {TotalBalance}
	     */
	    total: null,
	    selectProduct: selectProduct,
	    selectProducts: selectProducts,
	    $onInit: $onInit,
	    viewManageProducts: viewManageProducts
	  });
	}
	
	/**
	 * @typedef {Object} TotalBalance
	 * @property {string} aggregatedBalance - aggregated balance
	 * @property {string} currency - currency code
	 */

/***/ }),

/***/ 121:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Intent = exports.errorMessages = undefined;
	
	var _errorMessages;
	
	var _libBbModelErrors = __webpack_require__(89);
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	/**
	 * @name errorMessages
	 *
	 * @description
	 * Error messages keys for connectivity, user, auth and unexpected errors.
	 *
	 * @type {object}
	 */
	var errorMessages = exports.errorMessages = (_errorMessages = {}, _defineProperty(_errorMessages, _libBbModelErrors.E_AUTH, 'model.error.auth'), _defineProperty(_errorMessages, _libBbModelErrors.E_CONNECTIVITY, 'model.error.connectivity'), _defineProperty(_errorMessages, _libBbModelErrors.E_USER, 'model.error.user'), _defineProperty(_errorMessages, _libBbModelErrors.E_UNEXPECTED, 'model.error.unexpected'), _errorMessages);
	
	/**
	 * Widget intent enum
	 * @type {object}
	 */
	var Intent = exports.Intent = {
	  VIEW_PRODUCT_SUMMARY: 'intent.bb.product.summary.view',
	  VIEW_MANAGE_PRODUCTS: 'intent.bb.manage.products.view'
	};

/***/ }),

/***/ 122:
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  /**
	   * Triggered when product is selected.
	   * @event bb.event.product.selected
	   * @type {Product}
	   */
	  PRODUCT_SELECTED: 'bb.event.product.selected',
	  /**
	   * Triggered when multiple products are selected.
	   * @event bb.event.products.selected
	   * @type {Product[]}
	   */
	  PRODUCTS_SELECTED: 'bb.event.products.selected',
	  REFLOW_TRIGGERED: 'bb.event.product.accounts.reflow'
	};

/***/ }),

/***/ 123:
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.processKinds = processKinds;
	exports.processProductSelected = processProductSelected;
	exports.processProductsSelected = processProductsSelected;
	exports.processExtendedProduct = processExtendedProduct;
	// There is only 1 hook, otherwise there would be more named exports
	/* eslint-disable import/prefer-default-export */
	
	/**
	 * @name Hooks
	 * @type {object}
	 *
	 * @description
	 * Hooks for widget-bb-product-summary-ng
	 */
	
	/**
	 * @name Hooks#processKinds
	 * @type {function}
	 *
	 * @description
	 * Hook for processing product kinds after initialization.
	 * Assigned to [$ctrl.productKinds]{@link ProductSummaryController#productKinds}
	 *
	 * @param kinds {ProductKind[]} ProductKinds to process
	 * @returns {any} Depends on hook implementation.
	 */
	function processKinds(kinds) {
	  return kinds;
	}
	
	/**
	 * @name Hooks#processProductSelected
	 * @type {function}
	 *
	 * @description
	 * Hook for processing selected product after selection update
	 * Assigned to [$ctrl.productSelected]{@link ProductSummaryController#productSelected}
	 *
	 * @param product {Product} Product to process
	 * @returns {any} Depends on hook implementation.
	 */
	function processProductSelected(product) {
	  return product;
	}
	
	/**
	 * @name Hooks#processProductsSelected
	 * @type {function}
	 *
	 * @description
	 * Hook for processing selected array of products after selection update
	 * Assigned to [$ctrl.productsSelected]{@link ProductSummaryController#productsSelected}
	 *
	 * @param products {Product[]} Products to process
	 * @returns {any} Depends on hook implementation.
	 */
	function processProductsSelected(products) {
	  return products;
	}
	
	/**
	 * @name Hooks#processExtendedProduct
	 * @type {function}
	 *
	 * @description
	 * Hook for processing extended product after selection update
	 * Assigned to [$ctrl.extendedProduct]{@link ProductSummaryController#extendedProduct}
	 *
	 * @param product {Product} Product to process
	 * @returns {any} Depends on hook implementation.
	 */
	function processExtendedProduct(product) {
	  return product;
	}

/***/ })

/******/ })
});
;
//# sourceMappingURL=widget-bb-product-summary-ng.js.map