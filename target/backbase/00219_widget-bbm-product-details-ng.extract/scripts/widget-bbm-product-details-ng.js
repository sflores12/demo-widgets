(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vendor-bb-angular"), require("lib-bb-storage-ng"), require("lib-bb-widget-ng"), require("lib-bb-widget-extension-ng"), require("model-bb-product-summary-ng"), require("lib-bb-intent-ng"), require("lib-bb-event-bus-ng"));
	else if(typeof define === 'function' && define.amd)
		define("widget-bbm-product-details-ng", ["vendor-bb-angular", "lib-bb-storage-ng", "lib-bb-widget-ng", "lib-bb-widget-extension-ng", "model-bb-product-summary-ng", "lib-bb-intent-ng", "lib-bb-event-bus-ng"], factory);
	else if(typeof exports === 'object')
		exports["widget-bbm-product-details-ng"] = factory(require("vendor-bb-angular"), require("lib-bb-storage-ng"), require("lib-bb-widget-ng"), require("lib-bb-widget-extension-ng"), require("model-bb-product-summary-ng"), require("lib-bb-intent-ng"), require("lib-bb-event-bus-ng"));
	else
		root["widget-bbm-product-details-ng"] = factory(root["vendor-bb-angular"], root["lib-bb-storage-ng"], root["lib-bb-widget-ng"], root["lib-bb-widget-extension-ng"], root["model-bb-product-summary-ng"], root["lib-bb-intent-ng"], root["lib-bb-event-bus-ng"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_79__, __WEBPACK_EXTERNAL_MODULE_84__, __WEBPACK_EXTERNAL_MODULE_87__, __WEBPACK_EXTERNAL_MODULE_107__, __WEBPACK_EXTERNAL_MODULE_108__, __WEBPACK_EXTERNAL_MODULE_109__, __WEBPACK_EXTERNAL_MODULE_111__) {
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

	module.exports = __webpack_require__(124);

/***/ }),

/***/ 79:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_79__;

/***/ }),

/***/ 84:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_84__;

/***/ }),

/***/ 87:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_87__;

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

/***/ 124:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _vendorBbAngular = __webpack_require__(79);
	
	var _vendorBbAngular2 = _interopRequireDefault(_vendorBbAngular);
	
	var _libBbWidgetNg = __webpack_require__(87);
	
	var _libBbWidgetNg2 = _interopRequireDefault(_libBbWidgetNg);
	
	var _libBbEventBusNg = __webpack_require__(111);
	
	var _libBbEventBusNg2 = _interopRequireDefault(_libBbEventBusNg);
	
	var _libBbIntentNg = __webpack_require__(109);
	
	var _libBbIntentNg2 = _interopRequireDefault(_libBbIntentNg);
	
	var _libBbWidgetExtensionNg = __webpack_require__(107);
	
	var _libBbWidgetExtensionNg2 = _interopRequireDefault(_libBbWidgetExtensionNg);
	
	var _modelBbProductSummaryNg = __webpack_require__(108);
	
	var _modelBbProductSummaryNg2 = _interopRequireDefault(_modelBbProductSummaryNg);
	
	var _libBbStorageNg = __webpack_require__(84);
	
	var _libBbStorageNg2 = _interopRequireDefault(_libBbStorageNg);
	
	var _view = __webpack_require__(125);
	
	var _view2 = _interopRequireDefault(_view);
	
	var _form = __webpack_require__(127);
	
	var _form2 = _interopRequireDefault(_form);
	
	var _constants = __webpack_require__(126);
	
	var _viewModel = __webpack_require__(128);
	
	var _viewModel2 = _interopRequireDefault(_viewModel);
	
	var _defaultHooks = __webpack_require__(129);
	
	var defaultHooks = _interopRequireWildcard(_defaultHooks);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * @module widget-bbm-product-details-ng
	 *
	 * @description
	 * Mobile product details widget.
	 *
	 * @example
	 *  <div ng-controller="FormController as $ctrl">
	 *  </div>
	 *
	 *  <div ng-controller="ViewController as $ctrl">
	 *  </div>
	 */
	
	var viewModelKey = _constants.MODULE_KEY + ':viewModel';
	var hooksKey = _constants.MODULE_KEY + ':hooks';
	
	exports.default = _vendorBbAngular2.default.module(_constants.MODULE_KEY, [_libBbStorageNg2.default, _libBbEventBusNg2.default, _libBbIntentNg2.default, _modelBbProductSummaryNg2.default, _libBbWidgetNg2.default]).factory(viewModelKey, [
	// dependencies to inject
	_modelBbProductSummaryNg.modelProductSummaryKey, _libBbStorageNg.bbStorageServiceKey,
	
	// into
	_viewModel2.default]).factory(hooksKey, (0, _libBbWidgetExtensionNg2.default)(defaultHooks)).controller(_constants.VIEW_CONTROLLER_KEY, [
	// dependencies to inject
	
	// dependencies to inject
	_libBbWidgetNg.widgetKey, _modelBbProductSummaryNg.modelProductSummaryKey, viewModelKey, _libBbIntentNg.bbIntentKey, _libBbEventBusNg.eventBusKey, hooksKey,
	
	// into
	_view2.default]).controller(_constants.FORM_CONTROLLER_KEY, [_libBbWidgetNg.widgetKey, _modelBbProductSummaryNg.modelProductSummaryKey, viewModelKey, _libBbIntentNg.bbIntentKey, _libBbEventBusNg.eventBusKey,
	
	// into
	_form2.default]).name;

/***/ }),

/***/ 125:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = ViewController;
	
	var _constants = __webpack_require__(126);
	
	function ViewController(widget, model, viewModel, bbIntent, bus, hooks) {
	  /**
	   * @name ViewController
	   * @ngkey ViewController
	   *
	   * @description
	   * Product details view controller.
	   *
	   * @type {Object}
	   */
	  var ctrl = this;
	
	  /**
	   * @description
	   * A set of intents that the view controller uses or handles.
	   *
	   * @name intents
	   * @type {Object}
	   * @inner
	   */
	  var intents = {};
	
	  /**
	   * @description
	   * Handles the intent to show the form to edit a product alias.
	   *
	   * @name ViewController#showProductAliasEditForm
	   * @type {function}
	   */
	  var showProductAliasEditForm = function showProductAliasEditForm() {
	    return viewModel.store().then(function () {
	      intents.showProductAliasEditForm();
	    });
	  };
	
	  /**
	   * @description
	   * Loads product details.
	   *
	   * @name ViewController#loadProductDetails
	   * @type {function}
	   * @returns {Promise.<module:model-bb-product-summary-ng.ProductDetails>}
	   */
	  var loadProductDetails = function loadProductDetails(productId) {
	    viewModel.setProductLoading(true);
	
	    return model.getProductDetails(productId).then(function (product) {
	      var productDetails = hooks.processProductDetails(product);
	
	      viewModel.setProductError(null);
	      viewModel.setProductLoading(false);
	      viewModel.setSelectedProduct(productDetails);
	
	      return productDetails;
	    }).catch(function (error) {
	      viewModel.setProductLoading(false);
	      viewModel.setProductError(error);
	
	      throw error;
	    });
	  };
	
	  /**
	   * @description
	   * Loads product details if needed.
	   *
	   * @name ViewController#loadProductDetailsIfNeeded
	   * @type {function}
	   * @returns {Promise.<module:model-bb-product-summary-ng.ProductDetails>}
	   * @inner
	   */
	  var loadProductDetailsIfNeeded = function loadProductDetailsIfNeeded(productId) {
	    var selectedProduct = viewModel.getSelectedProduct();
	
	    if (!selectedProduct || selectedProduct.id !== productId) {
	      viewModel.setSelectedProduct(null);
	
	      return loadProductDetails(productId);
	    }
	
	    return Promise.resolve();
	  };
	
	  /**
	   * @description
	   * AngularJS Lifecycle hook used to initialize the controller.
	   *
	   * @name ViewController#$onInit
	   * @type {function}
	   *
	   * @fires cxp.item.loaded
	   * @fires bb.item.loaded
	   */
	  var $onInit = function $onInit() {
	    /**
	     * This event (cxp.item.loaded) is deprecated in Mobile SDK version > 3.0
	     * and will be removed with the update to widget collection 3 (WC3)
	     */
	    bus.publish(_constants.Event.CXP_ITEM_LOADED, {
	      id: widget.getId()
	    });
	
	    bus.publish(_constants.Event.BB_ITEM_LOADED, {
	      id: widget.getId()
	    });
	
	    bus.subscribe(_constants.Event.PRODUCT_ALIAS_EDIT_DONE, function (productDetails) {
	      viewModel.setProductAlias(productDetails.alias);
	    });
	  };
	
	  /**
	   * @description
	   * The intent to show the form to edit a product alias.
	   *
	   * @name intents#showProductAliasEditForm
	   * @type {function}
	   * @inner
	   */
	  intents.showProductAliasEditForm = bbIntent.create(_constants.Intent.SHOW_ALIAS_EDIT_FORM);
	
	  bbIntent.handle(_constants.Intent.SHOW_PRODUCT_DETAILS_VIEW, function (productId) {
	    viewModel.restore().then(function () {
	      loadProductDetailsIfNeeded(productId);
	    });
	  });
	
	  bbIntent.init(function () {});
	
	  Object.defineProperty(ctrl, 'state', {
	    get: function get() {
	      return viewModel.state;
	    }
	  });
	
	  Object.assign(ctrl, {
	    $onInit: $onInit,
	    showProductAliasEditForm: showProductAliasEditForm
	  });
	}

/***/ }),

/***/ 126:
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var MODULE_KEY = exports.MODULE_KEY = 'widget-bbm-product-details-ng';
	var VIEW_CONTROLLER_KEY = exports.VIEW_CONTROLLER_KEY = 'ViewController';
	var FORM_CONTROLLER_KEY = exports.FORM_CONTROLLER_KEY = 'FormController';
	
	/**
	 * Pubsub events
	 * @type {Object}
	 */
	var Event = exports.Event = {
	  CXP_ITEM_LOADED: 'cxp.item.loaded',
	  BB_ITEM_LOADED: 'bb.item.loaded',
	
	  PRODUCT_ALIAS_EDIT_START: 'bb.event.productDetails.alias.edit.start',
	  PRODUCT_ALIAS_EDIT_DONE: 'bb.event.productDetails.alias.edit.done',
	  PRODUCT_ALIAS_EDIT_FAILED: 'bb.event.productDetails.alias.edit.failed'
	};
	
	/**
	 * Intent
	 * @type {Object}
	 */
	var Intent = exports.Intent = {
	  SHOW_PRODUCT_DETAILS_VIEW: 'intent.bb.productDetails.view.show',
	  SHOW_ALIAS_EDIT_FORM: 'intent.bb.productDetails.alias.edit'
	};
	
	/**
	 * Storage keys
	 * @type {Object}
	 */
	var StorageKey = exports.StorageKey = {
	  PRODUCT_DETAILS_STATE: 'widget-bbm-product-details-ng:state'
	};

/***/ }),

/***/ 127:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = FormController;
	
	var _constants = __webpack_require__(126);
	
	function FormController(widget, model, viewModel, bbIntent, bus) {
	  /**
	   * @name FormController
	   * @ngkey FormController
	   *
	   * @description
	   * Product details form controller.
	   *
	   * @type {Object}
	   */
	  var ctrl = this;
	
	  /**
	   * @description
	   * A set of intents that the form controller uses or handles.
	   *
	   * @name intents
	   * @type {Object}
	   * @inner
	   */
	  var intents = {};
	
	  /**
	   * @description
	   * Sets up the the product alias form state.
	   *
	   * @name FormController#setupProductAliasFormState
	   * @type {function}
	   * @inner
	   */
	  var setupProductAliasFormState = function setupProductAliasFormState() {
	    var product = viewModel.getSelectedProduct();
	
	    viewModel.setProductAliasFormState(product.alias);
	  };
	
	  /**
	   * @description
	   * Updates an arrangement.
	   *
	   * @name FormController#updateArrengement
	   * @type {function}
	   * @param {module:model-bb-product-summary-ng.ArrangementsData.ArrangementPatch} arrangement
	   * @returns {Promise}
	   * @inner
	   */
	  var updateArrengement = function updateArrengement(arrangement) {
	    viewModel.setFormLoading(true);
	
	    return model.patchArrangement(arrangement).then(function () {
	      viewModel.setFormLoading(false);
	      viewModel.setFormError(null);
	    }).catch(function (error) {
	      viewModel.setFormLoading(false);
	      viewModel.setFormError(error);
	
	      throw error;
	    });
	  };
	
	  /**
	   * @description
	   * Updates a product alias
	   *
	   * @name FormController#updateProductAlias
	   * @type {function}
	   *
	   * @returns {Promise}
	   */
	  var updateProductAlias = function updateProductAlias() {
	    var _viewModel$getSelecte = viewModel.getSelectedProduct(),
	        id = _viewModel$getSelecte.id;
	
	    var alias = viewModel.getProductAliasFormState();
	    var productDetails = {
	      id: id,
	      alias: alias
	    };
	
	    bus.publish(_constants.Event.PRODUCT_ALIAS_EDIT_START);
	
	    return updateArrengement(productDetails).then(function () {
	      bus.publish(_constants.Event.PRODUCT_ALIAS_EDIT_DONE, productDetails);
	
	      viewModel.setProductAlias(alias);
	      viewModel.setProductAliasFormState(null);
	      viewModel.store().then(function () {
	        intents.showProductDetailsView(id);
	      });
	    }).catch(function (error) {
	      bus.publish(_constants.Event.PRODUCT_ALIAS_EDIT_FAILED, { error: error });
	
	      throw error;
	    });
	  };
	
	  /**
	   * @description
	   * AngularJS Lifecycle hook used to initialize the controller.
	   *
	   * @name FormController#$onInit
	   * @type {function}
	   *
	   * @fires cxp.item.loaded
	   * @fires bb.item.loaded
	   */
	  var $onInit = function $onInit() {
	    /**
	     * This event (cxp.item.loaded) is deprecated in Mobile SDK version > 3.0
	     * and will be removed with the update to widget collection 3 (WC3)
	     */
	    bus.publish(_constants.Event.CXP_ITEM_LOADED, {
	      id: widget.getId()
	    });
	
	    bus.publish(_constants.Event.BB_ITEM_LOADED, {
	      id: widget.getId()
	    });
	  };
	
	  /**
	   * @description
	   * The intent to show the product details.
	   *
	   * @name intents#showProductDetailsView
	   * @type {function}
	   * @inner
	   */
	  intents.showProductDetailsView = bbIntent.create(_constants.Intent.SHOW_PRODUCT_DETAILS_VIEW);
	
	  bbIntent.handle(_constants.Intent.SHOW_ALIAS_EDIT_FORM, function () {
	    viewModel.restore().then(function () {
	      setupProductAliasFormState();
	    });
	  });
	
	  bbIntent.init(function () {});
	
	  Object.defineProperty(ctrl, 'state', {
	    get: function get() {
	      return viewModel.state;
	    }
	  });
	
	  Object.assign(ctrl, {
	    $onInit: $onInit,
	    updateProductAlias: updateProductAlias
	  });
	}

/***/ }),

/***/ 128:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _constants = __webpack_require__(126);
	
	exports.default = function (model, bbStorage) {
	  var viewModel = {
	    state: {
	      product: null,
	      loading: false,
	      error: null,
	      form: {
	        data: {
	          productAlias: null
	        },
	        loading: false,
	        error: null
	      }
	    }
	  };
	
	  /**
	   * @description
	   * Sets the given loading state to the given target.
	   *
	   * @name setLoading
	   * @type {function}
	   *
	   * @param {Object} target
	   * @param {boolean} loading
	   * @inner
	   */
	  var setLoading = function setLoading(target, loading) {
	    Object.assign(target, { loading: loading });
	  };
	
	  /**
	   * @description
	   * Sets the given error to the given target.
	   *
	   * @name setError
	   * @type {function}
	   *
	   * @param {Object} target
	   * @param {Error} error
	   * @inner
	   */
	  var setError = function setError(target, error) {
	    Object.assign(target, { error: error });
	  };
	
	  /**
	   * @description
	   * Sets the loading state of the form.
	   *
	   * @name setFormLoading
	   * @type {function}
	   *
	   * @param {boolean} loading
	   * @inner
	   */
	  var setFormLoading = function setFormLoading(loading) {
	    setLoading(viewModel.state.form, loading);
	  };
	
	  /**
	   * @description
	   * Sets the loading state of the product.
	   *
	   * @name setProductLoading
	   * @type {function}
	   *
	   * @param {boolean} loading
	   * @inner
	   */
	  var setProductLoading = function setProductLoading(loading) {
	    setLoading(viewModel.state, loading);
	  };
	
	  /**
	   * @description
	   * Sets the error state to the form with a given error.
	   *
	   * @name setFormError
	   * @type {function}
	   *
	   * @param {Error} error
	   * @inner
	   */
	  var setFormError = function setFormError(error) {
	    setError(viewModel.state.form, error);
	  };
	
	  /**
	   * @description
	   * Sets the error state of the product.
	   *
	   * @name setProductError
	   * @type {function}
	   *
	   * @param {Error} error
	   * @inner
	   */
	  var setProductError = function setProductError(error) {
	    setError(viewModel.state, error);
	  };
	
	  /**
	   * @description
	   * Sets a product to the state.
	   *
	   * @name setSelectedProduct
	   * @type {function}
	   *
	   * @param {module:model-bb-product-summary-ng.ProductDetails} product
	   * @returns {module:model-bb-product-summary-ng.ProductDetails}
	   * @inner
	   */
	  var setSelectedProduct = function setSelectedProduct(product) {
	    return Object.assign(viewModel.state, {
	      product: product
	    });
	  };
	
	  /**
	   * @description
	   * Returns the selected product.
	   *
	   * @name getSelectedProduct
	   * @type {function}
	   *
	   * @returns {module:model-bb-product-summary-ng.ProductDetails}
	   * @inner
	   */
	  var getSelectedProduct = function getSelectedProduct() {
	    return viewModel.state.product;
	  };
	
	  /**
	   * @description
	   * Sets the state for the product alias form.
	   *
	   * @name setProductAliasFormState
	   * @type {function}
	   *
	   * @param {string} productAlias
	   * @inner
	   */
	  var setProductAliasFormState = function setProductAliasFormState(productAlias) {
	    Object.assign(viewModel.state.form.data, {
	      productAlias: productAlias
	    });
	  };
	
	  /**
	   * @description
	   * Returns the state of the product alias form.
	   *
	   * @name getProductAliasFormState
	   * @type {function}
	   *
	   * @returns {string}
	   * @inner
	   */
	  var getProductAliasFormState = function getProductAliasFormState() {
	    return viewModel.state.form.data.productAlias;
	  };
	
	  /**
	   * @description
	   * Sets a product alias to the product state.
	   *
	   * @name setProductAlias
	   * @type {function}
	   *
	   * @param {string} alias
	   * @inner
	   */
	  var setProductAlias = function setProductAlias(alias) {
	    Object.assign(viewModel.state.product, {
	      alias: alias
	    });
	  };
	
	  /**
	   * @description
	   * Restores the state from the storage.
	   *
	   * @name restore
	   * @type {function}
	   * @inner
	   */
	  var restore = function restore() {
	    return bbStorage.getItem(_constants.StorageKey.PRODUCT_DETAILS_STATE).then(function (state) {
	      if (state) {
	        viewModel.state = state;
	      }
	    });
	  };
	
	  /**
	   * @description
	   * Stores the state to the storage.
	   *
	   * @name store
	   * @type {function}
	   * @inner
	   */
	  var store = function store() {
	    return bbStorage.setItem(_constants.StorageKey.PRODUCT_DETAILS_STATE, viewModel.state);
	  };
	
	  Object.assign(viewModel, {
	    setFormLoading: setFormLoading,
	    setFormError: setFormError,
	    setProductLoading: setProductLoading,
	    setProductError: setProductError,
	
	    setProductAlias: setProductAlias,
	    setProductAliasFormState: setProductAliasFormState,
	    getProductAliasFormState: getProductAliasFormState,
	
	    setSelectedProduct: setSelectedProduct,
	    getSelectedProduct: getSelectedProduct,
	
	    restore: restore,
	    store: store
	  });
	
	  return viewModel;
	};

/***/ }),

/***/ 129:
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/* eslint-disable import/prefer-default-export */
	
	/**
	 * @description
	 * Hooks for widget-bbm-product-details-ng.
	 *
	 * @name Hooks
	 * @type {object}
	 */
	
	/**
	 * @name processProductDetails
	 * @description
	 * Hook for processing product details after initialization.
	 *
	 * @type {function}
	 * @param productDetails {ProductDetails} ProductDetails to process
	 * @returns {ProductDetails}
	 */
	var processProductDetails = exports.processProductDetails = function processProductDetails(productDetails) {
	  return productDetails;
	};

/***/ })

/******/ })
});
;
//# sourceMappingURL=widget-bbm-product-details-ng.js.map