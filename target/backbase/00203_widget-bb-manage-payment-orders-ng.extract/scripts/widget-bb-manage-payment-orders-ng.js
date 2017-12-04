(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vendor-bb-angular"), require("lib-bb-widget-ng"), require("lib-bb-model-errors"), require("lib-bb-widget-extension-ng"), require("model-bb-payment-orders-ng"), require("lib-bb-state-container-ng"));
	else if(typeof define === 'function' && define.amd)
		define("widget-bb-manage-payment-orders-ng", ["vendor-bb-angular", "lib-bb-widget-ng", "lib-bb-model-errors", "lib-bb-widget-extension-ng", "model-bb-payment-orders-ng", "lib-bb-state-container-ng"], factory);
	else if(typeof exports === 'object')
		exports["widget-bb-manage-payment-orders-ng"] = factory(require("vendor-bb-angular"), require("lib-bb-widget-ng"), require("lib-bb-model-errors"), require("lib-bb-widget-extension-ng"), require("model-bb-payment-orders-ng"), require("lib-bb-state-container-ng"));
	else
		root["widget-bb-manage-payment-orders-ng"] = factory(root["vendor-bb-angular"], root["lib-bb-widget-ng"], root["lib-bb-model-errors"], root["lib-bb-widget-extension-ng"], root["model-bb-payment-orders-ng"], root["lib-bb-state-container-ng"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_88__, __WEBPACK_EXTERNAL_MODULE_89__, __WEBPACK_EXTERNAL_MODULE_95__, __WEBPACK_EXTERNAL_MODULE_121__, __WEBPACK_EXTERNAL_MODULE_123__, __WEBPACK_EXTERNAL_MODULE_129__) {
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

	module.exports = __webpack_require__(128);

/***/ }),

/***/ 88:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_88__;

/***/ }),

/***/ 89:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_89__;

/***/ }),

/***/ 95:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_95__;

/***/ }),

/***/ 121:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_121__;

/***/ }),

/***/ 123:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_123__;

/***/ }),

/***/ 128:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _vendorBbAngular = __webpack_require__(88);
	
	var _vendorBbAngular2 = _interopRequireDefault(_vendorBbAngular);
	
	var _libBbWidgetExtensionNg = __webpack_require__(121);
	
	var _libBbWidgetExtensionNg2 = _interopRequireDefault(_libBbWidgetExtensionNg);
	
	var _libBbStateContainerNg = __webpack_require__(129);
	
	var _libBbStateContainerNg2 = _interopRequireDefault(_libBbStateContainerNg);
	
	var _libBbWidgetNg = __webpack_require__(89);
	
	var _libBbWidgetNg2 = _interopRequireDefault(_libBbWidgetNg);
	
	var _modelBbPaymentOrdersNg = __webpack_require__(123);
	
	var _modelBbPaymentOrdersNg2 = _interopRequireDefault(_modelBbPaymentOrdersNg);
	
	var _controller = __webpack_require__(130);
	
	var _controller2 = _interopRequireDefault(_controller);
	
	var _defaultHooks = __webpack_require__(131);
	
	var defaultHooks = _interopRequireWildcard(_defaultHooks);
	
	var _service = __webpack_require__(132);
	
	var _service2 = _interopRequireDefault(_service);
	
	var _index = __webpack_require__(133);
	
	var _index2 = _interopRequireDefault(_index);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var hooksKey = 'widget-bb-manage-payment-orders-ng:hooks'; /**
	                                                            * @module widget-bb-manage-payment-orders-ng
	                                                            *
	                                                            * @description
	                                                            * Widget to manage payment orders
	                                                            */
	
	var serviceKey = 'widget-bb-manage-payment-orders-ng:service';
	var viewModelKey = 'widget-bb-manage-payment-orders-ng:viewModel';
	
	exports.default = _vendorBbAngular2.default.module('widget-bb-manage-payment-orders-ng', [_modelBbPaymentOrdersNg2.default, _libBbWidgetNg2.default, _libBbStateContainerNg2.default]).factory(hooksKey, (0, _libBbWidgetExtensionNg2.default)(defaultHooks)).factory(serviceKey, [_modelBbPaymentOrdersNg.modelPaymentOrdersKey, viewModelKey, hooksKey,
	/* into */
	_service2.default]).factory(viewModelKey, [_libBbStateContainerNg.bbStateContainerKey, _libBbWidgetNg.widgetKey, hooksKey,
	/* into */
	_index2.default]).controller('ManagePaymentOrderController', [_libBbWidgetNg.widgetKey, hooksKey, viewModelKey, serviceKey, _libBbStateContainerNg.bbStateContainerKey,
	/* into */
	_controller2.default]).run([viewModelKey, function (viewModel) {
	  viewModel.init();
	}]).name;

/***/ }),

/***/ 129:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_129__;

/***/ }),

/***/ 130:
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = ManagePaymentOrderController;
	/**
	 * @name ManagePaymentOrderController
	 * @type {object}
	 * @description
	 * Controller for managing payment order
	 *
	 * @usage
	 * <div ng-controller="ManagePaymentOrderController as $ctrl">
	 *   <!-- ... -->
	 * </div>
	 */
	function ManagePaymentOrderController(widget, hooks, viewModel, service) {
	  var $ctrl = this;
	
	  var getLoadParams = function getLoadParams() {
	    var combiningParams = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	
	    var params = Object.assign(viewModel.getState().paymentOrders.requestParams, combiningParams);
	
	    return hooks.processRequestParams(params);
	  };
	
	  /**
	   * @description
	   * Handles loading payment orders
	   *
	   * @public
	   * @name PortfolioSummaryController#load
	   * @type {function}
	   * @param {number} params
	   * @returns {promise.<array>}
	   */
	  var load = function load() {
	    var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	    return service.load(getLoadParams(params));
	  };
	
	  /**
	   * @description
	   * Handles loading more payment orders
	   *
	   * @public
	   * @name PortfolioSummaryController#load
	   * @type {function}
	   * @param {number} doneFn - load more callback
	   * Load portfolios
	   * @returns {promise.<array>}
	   */
	  var loadMore = function loadMore() {
	    var doneFn = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function () {};
	
	    load({ from: viewModel.getState().paymentOrders.requestParams.from + 1 }).catch(doneFn()).then(doneFn());
	  };
	
	  /**
	   * AngularJS Lifecycle hook used to initialize the controller
	   *
	   * @name ManagePaymentOrderController#$onInit
	   * @type {function}
	   * @returns
	   *  {Promise.<module:model-bb-payment-orders-ng.Payments, module:lib-bb-model-errors.ModelError>}
	   *  A promise
	   */
	  var $onInit = function $onInit() {
	    return load().then(function () {
	      return viewModel.initList.afterLoadDone();
	    }).catch(function () {
	      return viewModel.initList.afterLoadDone();
	    });
	  };
	
	  Object.assign($ctrl, {
	    get state() {
	      return viewModel.getState();
	    },
	    loadMore: loadMore,
	
	    $onInit: $onInit
	  });
	}

/***/ }),

/***/ 131:
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * @name Hooks
	 * @type {object}
	 *
	 * @description
	 * Hooks for widget-bb-manage-payment-orders-ng
	 */
	
	/**
	 * @name Hooks#processPaymentOrders
	 * @type {function}
	 *
	 * @description
	 * Hook for processing payment orders.
	 *
	 * @param {array} paymentOrders Paument orders to process
	 * @returns {array} Processed payments orders
	 */
	var processPaymentOrders = exports.processPaymentOrders = function processPaymentOrders(paymentOrders) {
	  return paymentOrders;
	};
	
	/**
	 * @name Hooks#processRequestParams
	 * @type {function}
	 *
	 * @description
	 * Hook for processing payment orders.
	 *
	 * @param {array} requestParams Request params
	 * @returns {array} Processed request params
	 */
	var processRequestParams = exports.processRequestParams = function processRequestParams(requestParams) {
	  return requestParams;
	};

/***/ }),

/***/ 132:
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function (model, viewModel, hooks) {
	  return {
	    /**
	     * @name TransactionsService#load
	     * @type {function}
	     * @description
	     * Fetch a `page` of `transactions` from the model and
	     * update the {@link ViewState} to display them.
	     * @param {LoadRequestParams} params Request params
	     * @return {Promise.<void>}
	     */
	    load: function load(params) {
	      viewModel.list.beforeLoad();
	
	      return model.getPaymentOrders(params).then(function (raw) {
	        viewModel.list.afterLoadSuccess({
	          rawData: raw.data,
	          data: hooks.processPaymentOrders(raw.data),
	          totalCount: raw.totalCount,
	          requestParams: params
	        });
	      }).catch(function (error) {
	        viewModel.list.afterLoadError(error);
	
	        throw error;
	      });
	    }
	  };
	};

/***/ }),

/***/ 133:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _initialState = __webpack_require__(134);
	
	var _initialState2 = _interopRequireDefault(_initialState);
	
	var _init = __webpack_require__(135);
	
	var _init2 = _interopRequireDefault(_init);
	
	var _list = __webpack_require__(136);
	
	var _list2 = _interopRequireDefault(_list);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * Defines the default page size for the transactions page
	 * @type {number}
	 * @inner
	 */
	var DEFAULT_PAGE_SIZE = 50; // Combine state reducers
	
	exports.default = function (stateContainer, widget, hooks) {
	  var stateParams = {
	    pageSize: widget.getLongPreference('bb.paymentOrders.pageSize') || DEFAULT_PAGE_SIZE
	  };
	  var initialState = (0, _initialState2.default)(stateParams);
	
	  /**
	   * @name ViewModel
	   * @type {object}
	   * @ngkey widget-bb-manage-payment-orders-ng:viewModel
	   * @inner
	   */
	  return {
	    /**
	     * @name ViewModel#init
	     * @description Initialises view model with initial state
	     * @type {function}
	     * @inner
	     * @return {ViewState}
	     */
	    init: stateContainer.createAction(function () {
	      var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
	      return state;
	    }),
	    /**
	     * @name ViewModel#getState
	     * @description Returns view state
	     * @type {function}
	     * @inner
	     * @return {ViewState}
	     */
	    getState: stateContainer.getState,
	    /**
	     * @name ViewModel#initList
	     * @description
	     * Actions for updating the parts of the `ViewState` related to initial loading
	     * @type {ViewModelInitActions}
	     * @inner
	     */
	    initList: (0, _init2.default)(stateContainer),
	    /**
	     * @name ViewModel#list
	     * @description
	     * Actions for updating the parts of the `ViewState` related to payment orders list
	     * @type {ViewModelListActions}
	     * @inner
	     */
	    list: (0, _list2.default)(stateContainer, hooks)
	  };
	};

/***/ }),

/***/ 134:
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function (params) {
	  return {
	    initialLoading: true,
	    error: null,
	    paymentOrders: {
	      rawData: null,
	      data: null,
	      loading: false,
	      loadedAll: false,
	      totalCount: 0,
	      requestParams: {
	        from: 0,
	        size: params.pageSize
	      }
	    }
	  };
	};

/***/ }),

/***/ 135:
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function (stateContainer) {
	  return {
	    /**
	     * @name ViewModelInitActions
	     * @type {object}
	     * @inner
	     */
	
	    /**
	     * @name ViewModelInitActions#afterLoadDone
	     * @description Update the `ViewState` after initial loading is done,
	     * successfully or unsuccessfully
	     * @type {function}
	     * @inner
	     * @return {void}
	     */
	    afterLoadDone: stateContainer.createAction(function (state) {
	      return Object.assign({}, state, {
	        initialLoading: false
	      });
	    })
	  };
	};

/***/ }),

/***/ 136:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _helpers = __webpack_require__(137);
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	exports.default = function (stateContainer, hooks) {
	  return {
	    /**
	     * @name ViewModelListActions
	     * @type {object}
	     * @inner
	     */
	
	    /**
	     * @name ViewModelListActions#beforeLoad
	     * @description Update the `ViewState` before loading payments orders
	     * @type {function}
	     * @inner
	     * @return {void}
	     */
	    beforeLoad: stateContainer.createAction(function (state) {
	      return Object.assign({}, state, {
	        error: null,
	        paymentOrders: Object.assign({}, state.paymentOrders, {
	          loading: true
	        })
	      });
	    }),
	
	    /**
	     * @name ViewModelListActions#afterLoadSuccess
	     * @description Update the `ViewState` after successfully loading payments orders
	     * @type {function}
	     * @inner
	     * @param {PaymentOrdersResponse} response Payment orders load response
	     * @return {void}
	     */
	    afterLoadSuccess: stateContainer.createAction(function (state, response) {
	      var rawData = [].concat(_toConsumableArray(state.paymentOrders.rawData || []), _toConsumableArray(response.rawData));
	
	      return Object.assign({}, state, {
	        paymentOrders: Object.assign({}, state.paymentOrders, {
	          rawData: rawData,
	          data: hooks.processPaymentOrders(rawData),
	          loading: false,
	          loadedAll: response.rawData.length < state.paymentOrders.requestParams.size,
	          totalCount: response.totalCount,
	          requestParams: response.requestParams
	        })
	      });
	    }),
	
	    /**
	     * @name ViewModelListActions#afterLoadError
	     * @description Update the `ViewState` after unsuccessful payment orders load
	     * @type {function}
	     * @inner
	     * @param {module:lib-bb-model-errors.ModelError} error Response error
	     * @return {void}
	     */
	    afterLoadError: stateContainer.createAction(function (state, error) {
	      return Object.assign({}, state, {
	        error: (0, _helpers.uiError)(error),
	        paymentOrders: Object.assign({}, state.paymentOrders, {
	          loading: false
	        })
	      });
	    })
	  };
	};
	
	/**
	 * @typedef {object} PaymentOrdersResponse
	 * @property {object[]} rawData Loaded transactions array
	 * @property {number} totalCount Total number of transactions
	 * @property {LoadRequestParams} requestParams Request parameters object
	 */
	
	/**
	 * @typedef {object} LoadRequestParams
	 * @property {number} from Page number to load
	 * @property {number} size Page size to load
	 */

/***/ }),

/***/ 137:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.uiError = undefined;
	
	var _errorMessages;
	
	var _libBbModelErrors = __webpack_require__(95);
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; } /* eslint-disable import/prefer-default-export */
	
	
	var errorMessages = (_errorMessages = {}, _defineProperty(_errorMessages, _libBbModelErrors.E_AUTH, 'model.error.auth'), _defineProperty(_errorMessages, _libBbModelErrors.E_CONNECTIVITY, 'model.error.connectivity'), _defineProperty(_errorMessages, _libBbModelErrors.E_USER, 'model.error.user'), _defineProperty(_errorMessages, _libBbModelErrors.E_UNEXPECTED, 'model.error.unexpected'), _errorMessages);
	
	var uiError = exports.uiError = function uiError(error) {
	  return {
	    message: errorMessages[error.code]
	  };
	};

/***/ })

/******/ })
});
;
//# sourceMappingURL=widget-bb-manage-payment-orders-ng.js.map