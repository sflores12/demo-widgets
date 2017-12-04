(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vendor-bb-angular"), require("lib-bb-widget-ng"), require("lib-bb-model-errors"), require("lib-bb-widget-extension-ng"), require("lib-bb-intent-ng"), require("lib-bb-event-bus-ng"), require("lib-bb-state-container-ng"), require("model-bb-transactions-ng"), require("lib-bb-extension-helpers-ng"));
	else if(typeof define === 'function' && define.amd)
		define("widget-bb-transactions-ng", ["vendor-bb-angular", "lib-bb-widget-ng", "lib-bb-model-errors", "lib-bb-widget-extension-ng", "lib-bb-intent-ng", "lib-bb-event-bus-ng", "lib-bb-state-container-ng", "model-bb-transactions-ng", "lib-bb-extension-helpers-ng"], factory);
	else if(typeof exports === 'object')
		exports["widget-bb-transactions-ng"] = factory(require("vendor-bb-angular"), require("lib-bb-widget-ng"), require("lib-bb-model-errors"), require("lib-bb-widget-extension-ng"), require("lib-bb-intent-ng"), require("lib-bb-event-bus-ng"), require("lib-bb-state-container-ng"), require("model-bb-transactions-ng"), require("lib-bb-extension-helpers-ng"));
	else
		root["widget-bb-transactions-ng"] = factory(root["vendor-bb-angular"], root["lib-bb-widget-ng"], root["lib-bb-model-errors"], root["lib-bb-widget-extension-ng"], root["lib-bb-intent-ng"], root["lib-bb-event-bus-ng"], root["lib-bb-state-container-ng"], root["model-bb-transactions-ng"], root["lib-bb-extension-helpers-ng"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_57__, __WEBPACK_EXTERNAL_MODULE_63__, __WEBPACK_EXTERNAL_MODULE_72__, __WEBPACK_EXTERNAL_MODULE_73__, __WEBPACK_EXTERNAL_MODULE_74__, __WEBPACK_EXTERNAL_MODULE_75__, __WEBPACK_EXTERNAL_MODULE_76__, __WEBPACK_EXTERNAL_MODULE_77__) {
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

	module.exports = __webpack_require__(71);

/***/ }),
/* 1 */,
/* 2 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ }),
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
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */,
/* 56 */,
/* 57 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_57__;

/***/ }),
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_63__;

/***/ }),
/* 64 */,
/* 65 */,
/* 66 */,
/* 67 */,
/* 68 */,
/* 69 */,
/* 70 */,
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _vendorBbAngular = __webpack_require__(2);
	
	var _vendorBbAngular2 = _interopRequireDefault(_vendorBbAngular);
	
	var _libBbWidgetExtensionNg = __webpack_require__(72);
	
	var _libBbWidgetExtensionNg2 = _interopRequireDefault(_libBbWidgetExtensionNg);
	
	var _libBbWidgetNg = __webpack_require__(57);
	
	var _libBbWidgetNg2 = _interopRequireDefault(_libBbWidgetNg);
	
	var _libBbIntentNg = __webpack_require__(73);
	
	var _libBbIntentNg2 = _interopRequireDefault(_libBbIntentNg);
	
	var _libBbEventBusNg = __webpack_require__(74);
	
	var _libBbEventBusNg2 = _interopRequireDefault(_libBbEventBusNg);
	
	var _libBbStateContainerNg = __webpack_require__(75);
	
	var _libBbStateContainerNg2 = _interopRequireDefault(_libBbStateContainerNg);
	
	var _modelBbTransactionsNg = __webpack_require__(76);
	
	var _modelBbTransactionsNg2 = _interopRequireDefault(_modelBbTransactionsNg);
	
	var _libBbExtensionHelpersNg = __webpack_require__(77);
	
	var _libBbExtensionHelpersNg2 = _interopRequireDefault(_libBbExtensionHelpersNg);
	
	var _controller = __webpack_require__(78);
	
	var _controller2 = _interopRequireDefault(_controller);
	
	var _defaultHooks = __webpack_require__(80);
	
	var defaultHooks = _interopRequireWildcard(_defaultHooks);
	
	var _index = __webpack_require__(81);
	
	var _index2 = _interopRequireDefault(_index);
	
	var _service = __webpack_require__(92);
	
	var _service2 = _interopRequireDefault(_service);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * @module widget-bb-transactions-ng
	 *
	 * @description
	 * Transactions widget.
	 */
	var hooksKey = 'widget-bb-transactions-ng:hooks';
	var serviceKey = 'widget-bb-transactions-ng:service';
	var viewModelKey = 'widget-bb-transactions-ng:viewModel';
	
	exports.default = _vendorBbAngular2.default.module('widget-bb-transactions-ng', [_modelBbTransactionsNg2.default, _libBbWidgetNg2.default, _libBbEventBusNg2.default, _libBbIntentNg2.default, _libBbStateContainerNg2.default, _libBbExtensionHelpersNg2.default]).factory(hooksKey, (0, _libBbWidgetExtensionNg2.default)(defaultHooks)).factory(viewModelKey, [_libBbStateContainerNg.bbStateContainerKey, _libBbWidgetNg.widgetKey, hooksKey,
	/* into */
	_index2.default]).factory(serviceKey, [_modelBbTransactionsNg.modelTransactionsKey, viewModelKey, '$window',
	/* into */
	_service2.default]).factory(_libBbExtensionHelpersNg.extensionHelpersContextKey, [_libBbIntentNg.bbIntentKey, function (bbIntent) {
	  return { bbIntent: bbIntent };
	}]).controller('TransactionsController', [_modelBbTransactionsNg.modelTransactionsKey, hooksKey, _libBbWidgetNg.widgetKey, _libBbEventBusNg.eventBusKey, _libBbIntentNg.bbIntentKey, '$window', '$scope', viewModelKey, serviceKey, _libBbStateContainerNg.bbStateContainerKey,
	/* into */
	_controller2.default]).run([viewModelKey, function (viewModel) {
	  viewModel.init();
	}]).name;

/***/ }),
/* 72 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_72__;

/***/ }),
/* 73 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_73__;

/***/ }),
/* 74 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_74__;

/***/ }),
/* 75 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_75__;

/***/ }),
/* 76 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_76__;

/***/ }),
/* 77 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_77__;

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = TransactionsController;
	
	var _constants = __webpack_require__(79);
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	var SEARCH_MIN_QUERY = 2;
	var SEARCH_INPUT_DEBOUNCE = 1000;
	
	var searchActions = {
	  CANCEL: 'cancel',
	  INPUT: 'input'
	};
	
	var debounce = function debounce(func, wait, immediate) {
	  var timeout = void 0;
	  return function debouncedFn() {
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    var context = this;
	    var later = function later() {
	      timeout = null;
	      if (!immediate) {
	        func.apply(context, args);
	      }
	    };
	    var callNow = immediate && !timeout;
	    clearTimeout(timeout);
	    timeout = setTimeout(later, wait);
	    if (callNow) {
	      func.apply(context, args);
	    }
	  };
	};
	
	/**
	 * @name DEFAULT_MAX_NAV_PAGES
	 * @description Defines the default maxNavPages for the accounts page
	 * as defined in the widget model.xml
	 * @type {number}
	 * @inner
	 */
	var DEFAULT_MAX_NAV_PAGES = 3;
	
	/**
	 * @name TransactionsController
	 * @ngkey TransactionsController
	 * @type {object}
	 * @description
	 * Transactions widget controller
	 */
	function TransactionsController(model, hooks, widget, eventBus, bbIntent, $window, scope, viewModel, service, stateContainer) {
	  /**
	   * @description
	   * A set of intents that the controller uses or handles.
	   *
	   * @name TransactionsController#intents
	   * @type {object}
	   * @inner
	   */
	  var intents = {};
	
	  /**
	   * @name TransactionsController#maxNavPages
	   * @type {number} maxNaxPages
	   * @inner
	   * @description
	   * Maximum number of navigation pages to display
	   */
	  var maxNavPages = widget.getLongPreference('bb.transaction.maxNavPages') || DEFAULT_MAX_NAV_PAGES;
	
	  /**
	   * @name TransactionsController#dismissTime
	   * @type {number}
	   * @inner
	   *
	   * @description
	   * Number of seconds to dismiss the notification
	   */
	  var dismissTime = Math.abs(widget.getLongPreference('bb.transaction.notificationDismissTime')) || 3;
	
	  /**
	   * @name TransactionsController#loadAllTransactionsInitially
	   * @type {boolean}
	   * @inner
	   *
	   * @description
	   * Defines whether data should be shown if no account is selected
	   */
	  var loadAllTransactionsInitially = widget.getBooleanPreference('bb.transaction.loadAllTransactionsOnInit');
	
	  /**
	   * State selectors
	   * @type {object}
	   * @inner
	   */
	  var selectors = {
	    transactions: stateContainer.createSelector(function (_ref) {
	      var transactions = _ref.transactions;
	      return transactions.rawData === null ? null : hooks.processTransactions(transactions.rawData);
	    }),
	    searchTransactions: stateContainer.createSelector(function (state) {
	      return state.search.rawData === null ? null : hooks.processTransactions(state.search.rawData);
	    }),
	    transaction: stateContainer.createSelector(function (state) {
	      return state.transaction.data;
	    }),
	    searching: stateContainer.createSelector(function (state) {
	      return state.searching;
	    }),
	    initialLoading: stateContainer.createSelector(function (state) {
	      return state.initialLoading;
	    }),
	    loadingTransactions: stateContainer.createSelector(function (state) {
	      return state.transactions.loading;
	    }),
	    searchingTransactions: stateContainer.createSelector(function (state) {
	      return state.search.loading;
	    }),
	    loading: stateContainer.createSelector(function (state) {
	      return state.searching ? state.search.loading : state.transactions.loading;
	    }),
	    loadedAll: stateContainer.createSelector(function (state) {
	      return state.transactions.loadedAll;
	    }),
	    searchedAll: stateContainer.createSelector(function (state) {
	      return state.search.loadedAll;
	    }),
	    category: stateContainer.createSelector(function (state) {
	      return state.search.category;
	    }),
	    totalCount: stateContainer.createSelector(function (state) {
	      return state.searching ? state.search.total : state.transactions.total;
	    }),
	    error: stateContainer.createSelector(function (state) {
	      return state.error;
	    }),
	    product: stateContainer.createSelector(function (state) {
	      return state.product.data;
	    }),
	    productId: stateContainer.createSelector(function (state) {
	      return state.product.data === null ? -1 : state.product.data.id;
	    }),
	    paginationType: stateContainer.createSelector(function (state) {
	      return state.paginationType;
	    }),
	    size: stateContainer.createSelector(function (state) {
	      return state.searching ? state.search.size : state.transactions.size;
	    }),
	    from: stateContainer.createSelector(function (state) {
	      return state.searching ? state.search.from : state.transactions.from;
	    }),
	    loadFrom: stateContainer.createSelector(function (state) {
	      return state.transactions.from;
	    }),
	    searchFrom: stateContainer.createSelector(function (state) {
	      return state.search.from;
	    }),
	    orderBy: stateContainer.createSelector(function (state) {
	      return state.sort.orderBy;
	    }),
	    direction: stateContainer.createSelector(function (state) {
	      return state.sort.direction;
	    }),
	    hasTodayTransactions: stateContainer.createSelector(function (state) {
	      return state.transactions.hasTodayTransactions;
	    }),
	    today: stateContainer.createSelector(function (state) {
	      return state.transactions.today;
	    }),
	    exportFailed: stateContainer.createSelector(function (state) {
	      return state.export.exportFailed;
	    })
	  };
	
	  /**
	   * @name TransactionsController#state
	   * @description State on transactions
	   * @deprecated since 1.10.0. Use `viewModel.getState()` instead.
	   * @type {Object}
	   */
	  var state = {
	    get exportTransactionsFailed() {
	      return selectors.exportFailed();
	    },
	    set exportTransactionsFailed(value) {
	      if (Boolean(value)) {
	        viewModel.export.afterExportError();
	      } else {
	        viewModel.export.beforeExport();
	      }
	    },
	    export: {
	      get hasTodaysTransactions() {
	        return selectors.hasTodayTransactions();
	      },
	      get today() {
	        return selectors.today();
	      }
	    },
	    get transactions() {
	      return selectors.transactions();
	    },
	    sort: {
	      get orderBy() {
	        return selectors.orderBy();
	      },
	      get direction() {
	        return selectors.direction();
	      }
	    },
	    pageParams: {
	      get from() {
	        return selectors.from();
	      },
	      get size() {
	        return selectors.size();
	      },
	      get currentPage() {
	        return selectors.from() + 1;
	      },
	      get totalItems() {
	        return selectors.totalCount();
	      },
	      maxNavPages: maxNavPages,
	      get paginationType() {
	        return selectors.paginationType();
	      }
	    },
	    get initialLoading() {
	      return selectors.initialLoading();
	    }
	  };
	
	  var loadMorePromise = null;
	  var searchMorePromise = null;
	
	  /**
	   * @name TransactionsController#filterNullProperties
	   * @description Filters out properties with `null` value
	   * @type {function}
	   * @inner
	   * @param {object} obj Object to filter out null properties
	   * @return {object} Filtered object
	   */
	  var filterNullProperties = function filterNullProperties(obj) {
	    return Object.keys(obj).reduce(function (acc, prop) {
	      if (obj[prop] !== null) {
	        Object.assign(acc, _defineProperty({}, prop, obj[prop]));
	      }
	      return acc;
	    }, {});
	  };
	
	  /**
	   * @name TransactionsController#getLoadParams
	   * @description Returns request parameters for the list request
	   * @type {function}
	   * @inner
	   * @param {LoadRequestParams} combiningParams Parameters to combine with.
	   * @return {LoadRequestParams} Request parameters
	   */
	  var getLoadParams = function getLoadParams() {
	    var combiningParams = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	
	    var _viewModel$getState = viewModel.getState(),
	        transactions = _viewModel$getState.transactions,
	        sort = _viewModel$getState.sort;
	
	    var params = {
	      from: transactions.from,
	      size: transactions.size,
	      productId: selectors.productId()
	    };
	
	    if (sort.orderBy && sort.direction) {
	      Object.assign(params, {
	        orderBy: sort.orderBy,
	        direction: sort.direction
	      });
	    }
	
	    Object.assign(params, combiningParams);
	
	    return hooks.processRequestParams(params);
	  };
	
	  /**
	   * @name TransactionsController#getSearchParams
	   * @description Returns request parameters for the search request
	   * @type {function}
	   * @inner
	   * @param {SearchRequestParams} combiningParams Parameters to combine with.
	   * @return {SearchRequestParams} Request parameters
	   */
	  var getSearchParams = function getSearchParams() {
	    var combiningParams = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	
	    var _viewModel$getState2 = viewModel.getState(),
	        searchState = _viewModel$getState2.search,
	        sort = _viewModel$getState2.sort;
	
	    var params = {
	      from: searchState.from,
	      size: searchState.size,
	      query: searchState.query,
	      bookingDateLessThan: searchState.bookingDateLessThan,
	      bookingDateGreaterThan: searchState.bookingDateGreaterThan,
	      amountGreaterThan: searchState.amountGreaterThan,
	      amountLessThan: searchState.amountLessThan,
	      creditDebitIndicator: searchState.creditDebitIndicator,
	      category: searchState.category,
	      productId: selectors.productId()
	    };
	
	    if (sort.orderBy && sort.direction) {
	      Object.assign(params, {
	        orderBy: sort.orderBy,
	        direction: sort.direction
	      });
	    }
	
	    Object.assign(params, combiningParams);
	    params = filterNullProperties(params);
	
	    return hooks.processRequestParams(params);
	  };
	
	  /**
	   * @name TransactionsController#isFilterCriteriaEmpty
	   *
	   * @description
	   * Check if search and filter parameters are empty
	   *
	   * @inner
	   *
	   * @type {function}
	   * @param {SearchRequestParams} params Search parameters
	   * @returns {boolean} True if any parameter is set, false if none
	   */
	  var isFilterCriteriaEmpty = function isFilterCriteriaEmpty(params) {
	    return !Boolean(Object.keys(params).filter(function (key) {
	      return params[key];
	    }).length);
	  };
	
	  /**
	   * @description
	   * Searches by a given query
	   *
	   * @public
	   * @name TransactionsController#search
	   * @type {function}
	   * @param {string} query Search query
	   * @returns {Promise.<void>} Promise
	   */
	  function search(query) {
	    return service.search(getSearchParams({ query: query, from: 0 }));
	  }
	
	  /**
	   * @description
	   * Resets search
	   *
	   * @public
	   * @name TransactionsController#cancelSearch
	   * @type {function}
	   * @return {void}
	   */
	  function cancelSearch() {
	    viewModel.search.cancel();
	  }
	
	  /**
	   * @description
	   * Searches by given filter parameters
	   *
	   * @public
	   * @name TransactionsController#applySearchFilter
	   * @type {function}
	   * @param {object} params Search filter params
	   * @returns {Promise.<void>} Promise
	   */
	  function applySearchFilter(params) {
	    if (isFilterCriteriaEmpty(params)) {
	      cancelSearch();
	      return Promise.resolve();
	    }
	
	    return service.search(getSearchParams({
	      from: 0,
	      query: params.query,
	      bookingDateLessThan: params.toDate,
	      bookingDateGreaterThan: params.fromDate,
	      amountGreaterThan: params.amountFrom,
	      amountLessThan: params.amountTo,
	      creditDebitIndicator: params.creditDebitIndicator
	    }));
	  }
	
	  /**
	   * @description
	   * Loads more search results and appends them to the search result.
	   *
	   * @public
	   * @name TransactionsController#searchMore
	   * @type {function}
	   * @returns {null|Promise.<void>} Promise or null if search is finished
	   */
	  function searchMore() {
	    if (selectors.searchingTransactions()) {
	      return searchMorePromise;
	    }
	
	    var params = getSearchParams({ from: selectors.searchFrom() + 1 });
	    searchMorePromise = service.search(params).catch(function () {}).then(function () {
	      searchMorePromise = null;
	    });
	
	    return searchMorePromise;
	  }
	
	  /**
	   * @description
	   * Handles loading or searching transactions
	   *
	   * @inner
	   * @name TransactionsController#loadTransactions
	   * @type {function}
	   * @param {LoadRequestParams|SearchRequestParams} params Request params
	   * @returns {Promise.<void>} Promise
	   */
	  function loadTransactions(params) {
	    if (selectors.searching()) {
	      return service.search(getSearchParams(params));
	    }
	    return service.load(getLoadParams(params));
	  }
	
	  /**
	   * @description
	   * Loads more transactions and append them to the transaction's list
	   *
	   * @public
	   * @name TransactionsController#loadMore
	   * @type {function}
	   * @param {?function} done Callback function for `ui-bb-load-more-ng` component
	   * @returns {null|Promise.<void>} Promise or null if loading is finished
	   */
	  function loadMore(done) {
	    if (selectors.loadingTransactions() || selectors.loadedAll() || selectors.error()) {
	      return loadMorePromise;
	    }
	
	    var doneFn = done || function () {};
	    var params = getLoadParams({ from: selectors.loadFrom() + 1 });
	    params = hooks.extendLoadMoreParams(params);
	
	    loadMorePromise = service.load(params).catch(function () {}).then(function () {
	      loadMorePromise = null;
	      doneFn();
	    });
	
	    return loadMorePromise;
	  }
	
	  /**
	   * @description
	   * Change page of displayed accounts.
	   *
	   * @name TransactionsController#changePage
	   * @type {function}
	   * @param {object} params
	   * @param {number} params.currentPage Transactions page to load
	   * @returns {Promise.<void>} A Promise
	   */
	  var changePage = function changePage(params) {
	    return loadTransactions({ from: params.currentPage - 1 });
	  };
	
	  /**
	   * @description
	   * Handles account select
	   *
	   * @inner
	   * @name TransactionsController#onProductSelect
	   * @param {object} payload Object with selected product
	   * @type {function}
	   */
	  function onProductSelect(payload) {
	    if (payload.product && selectors.productId() === payload.product.id) {
	      return;
	    }
	
	    viewModel.product.afterSelectProductSuccess(payload.product);
	
	    service.load(getLoadParams({ from: 0 }));
	    service.checkTodayTransactions(selectors.productId());
	  }
	
	  /**
	   * @description
	   * Handles transaction select
	   *
	   * @public
	   * @name TransactionsController#onTransactionClick
	   * @type {function}
	   * @param {object} selectedTransaction Object with selected transaction
	   * @fires bb.event.transaction.selected
	   */
	  function onTransactionClick(selectedTransaction) {
	    service.storeCurrentTransaction(selectedTransaction);
	    eventBus.publish(_constants.Message.TRANSACTION_SELECTED, {
	      transaction: selectedTransaction
	    });
	  }
	
	  /**
	   * @description
	   * Handles search field input
	   *
	   * @see search
	   *
	   * @inner
	   * @name TransactionsController#onTransactionSearchInput
	   * @type {function}
	   */
	  var onTransactionSearchInput = debounce(function (query) {
	    if (query.length >= SEARCH_MIN_QUERY) {
	      search(query);
	    }
	  }, SEARCH_INPUT_DEBOUNCE);
	
	  /**
	   * @description
	   * Handles transaction select
	   *
	   * @inner
	   * @name TransactionsController#onTransactionSelect
	   * @param {object} data Selected transaction object
	   * @type {function}
	   */
	  function onTransactionSelect(data) {
	    viewModel.transaction.beforeStore(data.transaction);
	  }
	
	  /**
	   * @description
	   * Handles the intent to show the product details for the given product
	   *
	   * @public
	   * @name TransactionsController#showProductDetails
	   * @type {function}
	   * @param {string} productId The id of the product
	   */
	  var showProductDetails = function showProductDetails(productId) {
	    // Check if intent is available.
	    if (intents.showProductDetails) {
	      intents.showProductDetails(productId);
	    }
	  };
	
	  /**
	   * @description
	   * Handles transaction search input
	   *
	   * @inner
	   * @name TransactionsController#onTransactionSearch
	   * @param {object} detail Search input object
	   * @type {function}
	   */
	  var onTransactionSearch = function onTransactionSearch(detail) {
	    if (detail.action === searchActions.INPUT) {
	      onTransactionSearchInput(detail.text);
	    } else if (detail.action === searchActions.CANCEL) {
	      cancelSearch();
	    }
	    scope.$digest();
	  };
	
	  /**
	   * @name TransactionsController#handleViewCategoryIntent
	   * @description Handles ViewCategory intent
	   * @inner
	   * @type {function}
	   * @param {object} payload ViewCategory intent payload
	   */
	  var handleViewCategoryIntent = function handleViewCategoryIntent(payload) {
	    if (payload && !!payload.category) {
	      var params = {
	        productId: payload.productId || null,
	        category: payload.category || null,
	        bookingDateGreaterThan: payload.bookingDateGreaterThan || null,
	        bookingDateLessThan: payload.bookingDateLessThan || null
	      };
	
	      service.search(getSearchParams(params)).then(function () {
	        service.loadCurrentTransaction();
	      });
	    } else {
	      cancelSearch();
	    }
	  };
	
	  /**
	   * @name TransactionsController#handleChangeTransactionCategoryIntent
	   * @description Handles ChangeTransactionCategory intent
	   * @inner
	   * @type {function}
	   * @param {object} payload ChangeTransactionCategory intent payload
	   */
	  var handleChangeTransactionCategoryIntent = function handleChangeTransactionCategoryIntent(payload) {
	    return service.updateTransactionCategory(payload).then(viewModel.list.afterUpdateSuccess).catch(viewModel.list.afterUpdateError);
	  };
	
	  /**
	   * @name TransactionsController#dismissNotification
	   * @description Helper method to remove a notification from state
	   * @type {function}
	   * @param {number} notificationId Id of the notification that should be dismissed
	   */
	  var dismissNotification = function dismissNotification(notificationId) {
	    return viewModel.notification.removeNotification(notificationId);
	  };
	
	  /**
	   * @description
	   * Trigger change transaction category intent
	   *
	   * @name TransactionsController#changeTransactionCategory
	   * @type {function}
	   * @param {object} transactionObj - The transaction object
	   */
	  var changeTransactionCategory = function changeTransactionCategory(transactionObj) {
	    return intents.changeTransactionCategory(transactionObj);
	  };
	
	  /**
	   * @description
	   * Adds subscriptions to bus events
	   *
	   * @inner
	   * @name TransactionsController#bindEvents
	   * @type {function}
	   */
	  function bindEvents() {
	    eventBus.subscribe(_constants.Message.PRODUCT_SELECTED, onProductSelect);
	    eventBus.subscribe(_constants.Message.TRANSACTION_SELECTED, onTransactionSelect);
	    $window.addEventListener(_constants.Message.SEARCH, function (_ref2) {
	      var detail = _ref2.detail;
	      return onTransactionSearch(detail);
	    });
	  }
	
	  /**
	   * @description
	   * Inits the bbIntent and adds intent handlers.
	   * 'view.account.category.transactions' intent can be used to
	   * update load query params with new productId, category, bookingDateGreaterThan
	   * and bookingDateLessThan params
	   *
	   * @inner
	   * @name TransactionsController#initIntent
	   * @type {function}
	   */
	  function initIntent() {
	    // Deprecated
	    // TODO: remove in 2.10.1
	    bbIntent.handle(_constants.Intent.VIEW_CATEGORY_TRANSACTIONS, handleViewCategoryIntent);
	
	    bbIntent.handle(_constants.Intent.VIEW_CATEGORY_DBIT_TRANSACTIONS, handleViewCategoryIntent);
	    bbIntent.handle(_constants.Intent.VIEW_CATEGORY_CRDT_TRANSACTIONS, handleViewCategoryIntent);
	
	    intents.showProductDetails = bbIntent.create(_constants.Intent.SHOW_PRODUCT_DETAILS);
	    intents.changeTransactionCategory = bbIntent.create(_constants.Intent.CHANGE_TRANSACTION_CATEGORY, handleChangeTransactionCategoryIntent);
	
	    bbIntent.init(function () {});
	  }
	
	  /**
	   * @description
	   * Widget initialization logic - called automatically in the angular cycle.
	   *
	   * @name TransactionsController#$onInit
	   * @type {function}
	   */
	  function $onInit() {
	    if (!viewModel.getState().initialLoading) {
	      return Promise.resolve(bindEvents());
	    }
	
	    return service.setupSelectedProduct(hooks.isDefaultProductFirst()).then(function () {
	      if (selectors.productId() === -1 && !loadAllTransactionsInitially) {
	        return Promise.reject(bindEvents());
	      }
	      return bindEvents();
	    }).then(initIntent).then(function () {
	      /**
	       * This event (cxp.item.loaded) is deprecated in Mobile SDK version > 3.0
	       * and will be removed with the update to widget collection 3 (WC3)
	       */
	      eventBus.publish(_constants.Message.CXP_ITEM_LOADED, {
	        id: widget.getId()
	      });
	
	      eventBus.publish(_constants.Message.BB_ITEM_LOADED, {
	        id: widget.getId()
	      });
	    }).then(function () {
	      return service.load(getLoadParams());
	    })
	    // TODO: Show currencies selector in filter form when search service supports it
	    // then(() => service.getCurrencies())
	    .then(function () {
	      // Don't include these methods in the main init chain
	      service.checkTodayTransactions(selectors.productId());
	      service.loadCurrentTransaction();
	    }).then(function () {
	      return viewModel.initList.afterLoadDone();
	    }).catch(function () {
	      return viewModel.initList.afterLoadDone();
	    });
	  }
	
	  /**
	   * @name TransactionsController#onSort
	   * @type {function}
	   * @description
	   * Loads sorted list of payments
	   * @param {string} orderBy Column key to sort
	   * @param {string} direction Sort direction
	   * @param {object} header Config object reference. Deprecated.
	   */
	  var onSort = function onSort(orderBy, direction, header) {
	    // The following line should be part of the extension
	    Object.assign(header, {
	      sortable: Object.assign({}, header.sortable, {
	        direction: direction
	      })
	    });
	
	    loadTransactions({ orderBy: orderBy, direction: direction });
	  };
	
	  /**
	   * @name TransactionsController#exportToFile
	   * @type {function}
	   *
	   * @description
	   * Exports filtered list of payments to a file in specified format
	   * @param {string} format Specified format (CSV, PDF)
	   */
	  var exportToFile = function exportToFile(format) {
	    var params = {
	      productId: selectors.productId(),
	      exportFormat: format
	    };
	
	    if (selectors.searching()) {
	      if (!selectors.searchTransactions().length) {
	        viewModel.export.afterExportError();
	        return;
	      }
	
	      var _viewModel$getState3 = viewModel.getState(),
	          searchState = _viewModel$getState3.search;
	
	      Object.assign(params, {
	        query: searchState.query,
	        bookingDateLessThan: searchState.bookingDateLessThan,
	        bookingDateGreaterThan: searchState.bookingDateGreaterThan,
	        amountGreaterThan: searchState.amountGreaterThan,
	        amountLessThan: searchState.amountLessThan,
	        creditDebitIndicator: searchState.creditDebitIndicator
	      });
	    } else {
	      if (!selectors.hasTodayTransactions()) {
	        viewModel.export.afterExportError();
	        return;
	      }
	
	      // Export payments for today if no filter applied
	      var today = selectors.today();
	      Object.assign(params, {
	        bookingDateLessThan: today,
	        bookingDateGreaterThan: today
	      });
	    }
	
	    service.export(filterNullProperties(params));
	  };
	
	  return {
	    /**
	     * @description
	     * The list of transactions
	     *
	     * @type {module:data-bb-transactions-ng.TransactionsData.TransactionItemGet[]}
	     * May be empty if the transactions aren't loaded.
	     * @name TransactionsController#transcations
	     * @deprecated since 1.10.0. Use `viewModel.getState().transactions.rawData` instead.
	     */
	    get transactions() {
	      return selectors.transactions();
	    },
	    /**
	     * @description
	     * Selected product info
	     *
	     * @type {module:model-bb-transactions-ng.Product}
	     * @name TransactionsController#product
	     * @deprecated since 1.10.0. Use `viewModel.getState().product.data` instead.
	     */
	    get product() {
	      return selectors.product();
	    },
	    /**
	     * @description
	     * Loading flag which is true while the list of transactions is loading
	     *
	     * @type {boolean}
	     * @name TransactionsController#loading
	     * @deprecated since 1.10.0. Use `viewModel.getState().transactions.loading`
	     * or `viewModel.getState().search.loading` instead.
	     */
	    get loading() {
	      return selectors.loading();
	    },
	    /**
	     * @description
	     * Last occured error
	     *
	     * @type {module:ui-bb-model-errors.ModelError}
	     * @name TransactionsController#loadingError
	     * @deprecated since 1.10.0. Use `viewModel.getState().error` instead.
	     */
	    get loadingError() {
	      return selectors.error();
	    },
	    /**
	     * @description
	     * Flag that indicates whether all the transactions have been loaded
	     *
	     * @type {boolean}
	     * @name TransactionsController#allTransactionsLoaded
	     * @deprecated since 1.10.0. Use `viewModel.getState().transactions.loadedAll`
	     * or `viewModel.getState().search.loadedAll` instead.
	     */
	    get allTransactionsLoaded() {
	      return selectors.loadedAll();
	    },
	    /**
	     * @description
	     * Searching flag which is true while user is searching transactions
	     *
	     * @type {boolean}
	     * @name TransactionsController#searching
	     * @deprecated since 1.10.0. Use `viewModel.getState().searching` instead.
	     */
	    get searching() {
	      return selectors.searching();
	    },
	    /**
	     * @description
	     * Loading flag which is true while the list of transactions is loading
	     *
	     * @type {boolean}
	     * @name TransactionsController#searchLoading
	     * @deprecated since 1.10.0. Use `viewModel.getState().search.loading` instead.
	     */
	    get searchLoading() {
	      return selectors.searchingTransactions();
	    },
	    /**
	     * @description
	     * Search error
	     *
	     * @type {module:ui-bb-model-errors.ModelError}
	     * @name TransactionsController#searchLoadingError
	     * @deprecated since 1.10.0. Use `viewModel.getState().error` instead.
	     */
	    get searchLoadingError() {
	      return selectors.error();
	    },
	    /**
	     * @description
	     * The list of found transactions.
	     *
	     * @type {array.<module:data-bb-transactions-ng.TransactionsData.TransactionItemGet>}
	     * @name TransactionsController#searchTransactions
	     * @deprecated since 1.10.0. Use `viewModel.getState().search.rawData` instead.
	     */
	    get searchTransactions() {
	      return selectors.searchTransactions();
	    },
	    /**
	     * @description
	     * Check is search filter applied
	     *
	     * @type {boolean} search status
	     * @name TransactionsController#searchTransactions
	     * @deprecated since 1.10.0. Use `viewModel.getState().searching` instead.
	     */
	    get isSearching() {
	      return selectors.searching();
	    },
	    /**
	     * @description
	     * Flag that indicates whether all the transactions have been loaded during a search
	     *
	     * @type {boolean}
	     * @name TransactionsController#searchAllTransactionsLoaded
	     * @deprecated since 1.10.0. Use `viewModel.getState().search.loadedAll` instead.
	     */
	    get searchAllTransactionsLoaded() {
	      return selectors.searchedAll();
	    },
	    /**
	     * @description
	     * Selected transaction info
	     *
	     * @type {object}
	     * @name TransactionsController#transcation
	     * @deprecated since 1.10.0. Use `viewModel.getState().transaction.data` instead.
	     */
	    get transaction() {
	      return selectors.transaction();
	    },
	    /**
	     * @description
	     * Show all available transactions
	     *
	     * @type {boolean}
	     * @name TransactionsController#showAllTransactions
	     * @deprecated since 1.10.0. Use `viewModel.getState().search.category` instead.
	     */
	    get showAllTransactions() {
	      return selectors.category() !== null;
	    },
	    /**
	     * @description
	     * Show all available currencies
	     *
	     * @type {Array}
	     * @name TransactionsController#currencies
	     */
	    get currencies() {
	      return viewModel.getState().currencies.data;
	    },
	    cancelSearch: cancelSearch,
	    loadMore: loadMore,
	    search: search,
	    applySearchFilter: applySearchFilter,
	    searchMore: searchMore,
	    eventBus: eventBus,
	    onTransactionClick: onTransactionClick,
	    /**
	     * @description Contains transaction error
	     * @name TransactionsController#errors
	     * @type {object}
	     * @deprecated since 1.10.0. Use `viewModel.getState().error` instead.
	     */
	    errors: {
	      get transactionsError() {
	        return selectors.error();
	      }
	    },
	    state: state,
	    onSort: onSort,
	    changePage: changePage,
	    exportToFile: exportToFile,
	    dismissTime: dismissTime,
	    loadAllTransactionsInitially: loadAllTransactionsInitially,
	    showProductDetails: showProductDetails,
	    changeTransactionCategory: changeTransactionCategory,
	    dismissNotification: dismissNotification,
	    /* Lifecycle hooks */
	    $onInit: $onInit
	  };
	}

/***/ }),
/* 79 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * Widget events enum
	 * @type {object}
	 */
	var Event = {
	  TRANSACTION_SELECTED: 'bb.event.transaction.selected',
	  PRODUCT_SELECTED: 'bb.event.product.selected',
	  SEARCH: 'bb.event.transactions.search',
	
	  CXP_ITEM_LOADED: 'cxp.item.loaded',
	  BB_ITEM_LOADED: 'bb.item.loaded'
	};
	
	/**
	 * Widget actions enum
	 * @type {object}
	 */
	var Action = {};
	
	/**
	 * Widget messages enum
	 * @type {object}
	 */
	var Message = exports.Message = Object.assign({}, Action, Event);
	
	/**
	 * Widget static text
	 * @type {object}
	 */
	var Text = exports.Text = {};
	
	/**
	 * Widget intent enum
	 * @type {object}
	 */
	var Intent = exports.Intent = {
	  // view.account.category.transactions key is deprecated
	  // Remove in 2.10.1
	  VIEW_CATEGORY_TRANSACTIONS: 'view.account.category.transactions',
	  VIEW_CATEGORY_DBIT_TRANSACTIONS: 'intent.rb.transactions.dbit.list.view',
	  VIEW_CATEGORY_CRDT_TRANSACTIONS: 'intent.rb.transactions.crdt.list.view',
	  SHOW_PRODUCT_DETAILS: 'intent.bb.productDetails.view.show',
	  CHANGE_TRANSACTION_CATEGORY: 'intent.rb.categories.management.list.view'
	};

/***/ }),
/* 80 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.processProductSelected = processProductSelected;
	exports.processRequestParams = processRequestParams;
	exports.processTransactions = processTransactions;
	exports.extendLoadMoreParams = extendLoadMoreParams;
	/**
	 * @name defaultHooks
	 * @type {object}
	 *
	 * @description
	 * Default hooks for widget-bb-transactions-ng
	 */
	
	/**
	 * @name defaultHooks#processProductSelected
	 * @type {function}
	 *
	 * @description
	 * Default hook for selected product processing
	 *
	 * @param {module:model-bb-transactions.Product} productSelected Product to process
	 * @returns {Object} Processed product
	 */
	function processProductSelected(productSelected) {
	  return productSelected;
	}
	
	/**
	 * @name defaultHooks#processRequestParams
	 * @type {function}
	 *
	 * @description
	 * Default hook for transactions query params processing/extending
	 *
	 * @param {object} params to process
	 * @param {?number} params.amountGreaterThan Amount greater than
	 * @param {?number} params.amountLessThan Amount less than
	 * @param {?string} params.bookingDateGreaterThan Booking date greater than
	 * @param {?string} params.bookingDateLessThan Booking date less than
	 * @param {?string} params.productId The product id
	 * @param {?string} params.type Type category
	 * @param {?string} params.orderBy The key to order by
	 * @param {?string} params.direction The direction to order by
	 * @param {?number} params.from The page to list from
	 * @param {?number} params.size The number of results per page
	 * @param {?string} params.query The search term used to search for transactions
	 * @returns {Object} Processed params
	 */
	function processRequestParams(params) {
	  return params;
	}
	
	/**
	 * @name defaultHooks#processTransactions
	 * @type {function}
	 *
	 * @description
	 * Default hook for transactions list post processing
	 *
	 * @param {module:data-bb-transactions-ng.TransactionsData.TransactionItemGet[]} transactions
	 * @returns {Array} Processed transactions
	 */
	function processTransactions(transactions) {
	  return transactions;
	}
	
	/**
	 * @name defaultHooks#defaultPaginationType
	 * @type {function}
	 * @description
	 * defaultPaginationType default hook for setting load-more or pagination as default
	 *
	 * @returns {?string}
	 */
	var defaultPaginationType = exports.defaultPaginationType = function defaultPaginationType() {
	  return null;
	};
	
	/**
	 * @name defaultHooks#defaultSortableColumn
	 *
	 * @description
	 * defaultSortableColumn default hook
	 *
	 * @type {function}
	 * @returns {?string}
	 */
	var defaultSortableColumn = exports.defaultSortableColumn = function defaultSortableColumn() {
	  return null;
	};
	
	/**
	 * @name defaultHooks#defaultSortableDirection
	 *
	 * @description
	 * defaultSortableDirection default hook
	 *
	 * @type {function}
	 * @returns {?string}
	 */
	var defaultSortableDirection = exports.defaultSortableDirection = function defaultSortableDirection() {
	  return null;
	};
	
	/**
	 * @name defaultHooks#isDefaultProductFirst
	 *
	 * @description
	 * isDefaultProductFirst default hook
	 *
	 * @type {function}
	 * @returns {boolean}
	 */
	var isDefaultProductFirst = exports.isDefaultProductFirst = function isDefaultProductFirst() {
	  return true;
	};
	
	/**
	 * @name defaultHooks#extendLoadMoreParams
	 * @type {function}
	 *
	 * @description
	 * Default hook for extending loadMore params
	 *
	 * @param {object} params to extend
	 * @param {?number} params.amountGreaterThan Amount greater than
	 * @param {?number} params.amountLessThan Amount less than
	 * @param {?string} params.bookingDateGreaterThan Booking date greater than
	 * @param {?string} params.bookingDateLessThan Booking date less than
	 * @param {?string} params.productId The product id
	 * @param {?string} params.type Type category
	 * @returns {object} Processed params
	 */
	function extendLoadMoreParams(params) {
	  return params;
	}
	
	/**
	 * @name defaultHooks#isTransactionsShown
	 *
	 * @description
	 * Default hook for checking if the transactions should be visible
	 *
	 * @type {function}
	 * @returns {boolean}
	 */
	var isTransactionsShown = exports.isTransactionsShown = function isTransactionsShown() {
	  return true;
	};

/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _initialState = __webpack_require__(82);
	
	var _initialState2 = _interopRequireDefault(_initialState);
	
	var _init = __webpack_require__(83);
	
	var _init2 = _interopRequireDefault(_init);
	
	var _list = __webpack_require__(84);
	
	var _list2 = _interopRequireDefault(_list);
	
	var _product = __webpack_require__(86);
	
	var _product2 = _interopRequireDefault(_product);
	
	var _transaction = __webpack_require__(87);
	
	var _transaction2 = _interopRequireDefault(_transaction);
	
	var _search = __webpack_require__(88);
	
	var _search2 = _interopRequireDefault(_search);
	
	var _export = __webpack_require__(89);
	
	var _export2 = _interopRequireDefault(_export);
	
	var _currencies = __webpack_require__(90);
	
	var _currencies2 = _interopRequireDefault(_currencies);
	
	var _notification = __webpack_require__(91);
	
	var _notification2 = _interopRequireDefault(_notification);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * Defines the default page size for the transactions page
	 * @type {number}
	 * @inner
	 */
	var DEFAULT_PAGE_SIZE = 10;
	
	/**
	 * Defines the default paginationType for the transactions page
	 * as defined in the widget model.xml
	 * @type {string}
	 * @inner
	 */
	// Combine state reducers
	var DEFAULT_PAGINATION_TYPE = 'load-more';
	
	exports.default = function (stateContainer, widget, hooks) {
	  var stateParams = {
	    pageSize: widget.getLongPreference('transactionListSize') || widget.getLongPreference('bb.transaction.pageSize') || DEFAULT_PAGE_SIZE,
	    orderBy: hooks.defaultSortableColumn(),
	    sortDirection: hooks.defaultSortableDirection(),
	    paginationType: hooks.defaultPaginationType() || widget.getStringPreference('bb.transaction.paginationType') || DEFAULT_PAGINATION_TYPE,
	    loadOnInit: widget.getBooleanPreference('bb.transaction.initLoad')
	  };
	  var initialState = (0, _initialState2.default)(stateParams);
	
	  /**
	   * @name ViewModel
	   * @type {object}
	   * @ngkey widget-bb-transactions-ng:viewModel
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
	     * Actions for updating the parts of the `ViewState` related to transactions list
	     * @type {ViewModelListActions}
	     * @inner
	     */
	    list: (0, _list2.default)(stateContainer),
	    /**
	     * @name ViewModel#product
	     * @description
	     * Actions for updating the parts of the `ViewState` related to product state
	     * @type {ViewModelProductActions}
	     * @inner
	     */
	    product: (0, _product2.default)(stateContainer, hooks),
	    /**
	     * @name ViewModel#transaction
	     * @description
	     * Actions for updating the parts of the `ViewState` related to transaction state
	     * @type {ViewModelTransactionActions}
	     * @inner
	     */
	    transaction: (0, _transaction2.default)(stateContainer),
	    /**
	     * @name ViewModel#search
	     * @description
	     * Actions for updating the parts of the `ViewState` related to transactions search
	     * @type {ViewModelSearchActions}
	     * @inner
	     */
	    search: (0, _search2.default)(stateContainer),
	    /**
	     * @name ViewModel#export
	     * @description
	     * Actions for updating the parts of the `ViewState` related to export transactions
	     * @type {ViewModelExportActions}
	     * @inner
	     */
	    export: (0, _export2.default)(stateContainer),
	    /**
	     * @name ViewModel#currencies
	     * @description
	     * Actions for updating the parts of the `ViewState` related to export currencies
	     * @type {ViewModelCurrenciesActions}
	     * @inner
	     */
	    currencies: (0, _currencies2.default)(stateContainer),
	    /**
	     * @name ViewModel#notification
	     * @description
	     * Actions for updating the parts of the `ViewState` related to notifications
	     * @type {ViewModelNotificationActions}
	     * @inner
	     */
	    notification: (0, _notification2.default)(stateContainer)
	  };
	};

/***/ }),
/* 82 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function (params) {
	  return {
	    initialLoading: params.loadOnInit,
	    searching: false,
	    error: null,
	    paginationType: params.paginationType,
	    currencies: [],
	    transactions: {
	      rawData: null,
	      loading: false,
	      loadedAll: false,
	      total: 0,
	      from: 0,
	      size: params.pageSize,
	      today: '',
	      hasTodayTransactions: false
	    },
	    transaction: {
	      data: null
	    },
	    product: {
	      data: null
	    },
	    search: {
	      rawData: null,
	      loading: false,
	      loadedAll: false,
	      total: 0,
	      from: 0,
	      size: params.pageSize,
	      query: null,
	      bookingDateLessThan: null,
	      bookingDateGreaterThan: null,
	      amountGreaterThan: null,
	      amountLessThan: null,
	      creditDebitIndicator: null,
	      category: null
	    },
	    export: {
	      exportFailed: false
	    },
	    notifications: [],
	    sort: {
	      orderBy: params.orderBy,
	      direction: params.sortDirection
	    }
	  };
	};
	
	/**
	 * @typedef {object} ViewState
	 * @description
	 * The current state of the [ViewModel]{@link module:lib-bb-view-model-ng}.
	 *
	 * @property {boolean} initialLoading Indicates wether widget's initial loading is done
	 * @property {boolean} searching Indicates wether transactions search is active at the moment
	 * @property {object} error The last encountered error
	 * @property {string} error.message Error message
	 * @property {string} paginationType Represents current pagination type. 'pagination' or 'load-more'
	 * @property {Array.<module:data-bb-payment-orders-ng.PaymentOrdersData.Currency>}
	 * currencies List of available currencies
	 * @property {object} transactions
	 * @property {object[]} transactions.rawData Collection of transactions
	 * @property {boolean} transactions.loading Indicates wether transactions are loading at the moment
	 * @property {boolean} transactions.loadedAll Indicates wether all transactions are loaded
	 * @property {number} transactions.total Total number of transactions
	 * @property {number} transactions.from The current page (0 indexed)
	 * @property {number} transactions.size The number of transactions in page
	 * @property {string} transactions.today Today date in the `yyyy-MM-dd` format
	 * @property {boolean} transactions.hasTodayTransactions Indicates wether transactions collection
	 * contains today transactions
	 *
	 * @property {object} transaction
	 * @property {boolean} transaction.data Current transaction object
	 *
	 * @property {object} product
	 * @property {boolean} product.data Current product object
	 *
	 * @property {object} search
	 * @property {object[]} search.rawData Collection of search transactions
	 * @property {boolean} search.loading Indicates wether search transactions are loading at the moment
	 * @property {boolean} search.loadedAll Indicates wether all search transactions are loaded
	 * @property {number} search.total Total number of search results
	 * @property {number} search.from The current page (0 indexed)
	 * @property {number} search.size The number of transactions in page
	 * @property {string} search.query Query search parameter
	 * @property {string} search.bookingDateLessThan Maximum booking date search parameter
	 * @property {string} search.bookingDateGreaterThan Minimum booking date search parameter
	 * @property {string} search.amountGreaterThan Minimum amount search parameter
	 * @property {string} search.amountLessThan Maximum amount search parameter
	 * @property {string} search.creditDebitIndicator Credit or debit search parameter
	 * @property {string} search.category Transaction category search parameter
	 *
	 * @property {object} export
	 * @property {boolean} export.exportFailied Indicates wether last transactions export failed
	 *
	 * @property {object[]} notifications Array of notifications to be displayed
	 *
	 * @property {object} sort
	 * @property {string} sort.orderBy Property by which transactions have to be ordered
	 * @property {direction} sort.direction Ordering direction
	 */

/***/ }),
/* 83 */
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
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _helpers = __webpack_require__(85);
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	exports.default = function (stateContainer) {
	  return {
	    /**
	     * @name ViewModelListActions
	     * @type {object}
	     * @inner
	     */
	
	    /**
	     * @name ViewModelListActions#beforeLoad
	     * @description Update the `ViewState` before loading transactions
	     * @type {function}
	     * @inner
	     * @return {void}
	     */
	    beforeLoad: stateContainer.createAction(function (state) {
	      return Object.assign({}, state, {
	        error: null,
	        transactions: Object.assign({}, state.transactions, {
	          loading: true
	        })
	      });
	    }),
	
	    /**
	     * @name ViewModelListActions#afterLoadSuccess
	     * @description Update the `ViewState` after successfully loading transactions
	     * @type {function}
	     * @inner
	     * @param {TransactionsResponse} response Transactions load response
	     * @return {void}
	     */
	    afterLoadSuccess: stateContainer.createAction(function (state, response) {
	      return Object.assign({}, state, {
	        transactions: Object.assign({}, state.transactions, {
	          loading: false,
	          loadedAll: response.rawData.length < state.transactions.size,
	          rawData: state.paginationType === 'load-more' ? [].concat(_toConsumableArray(state.transactions.rawData || []), _toConsumableArray(response.rawData)) : response.rawData,
	          total: response.totalCount,
	          from: response.requestParams.from
	        }),
	        sort: {
	          orderBy: response.requestParams.orderBy || null,
	          direction: response.requestParams.direction || null
	        }
	      });
	    }),
	
	    /**
	     * @name ViewModelListActions#afterLoadError
	     * @description Update the `ViewState` after unsuccessful transactions load
	     * @type {function}
	     * @inner
	     * @param {module:lib-bb-model-errors.ModelError} error Response error
	     * @return {void}
	     */
	    afterLoadError: stateContainer.createAction(function (state, error) {
	      return Object.assign({}, state, {
	        error: (0, _helpers.uiError)(error),
	        transactions: Object.assign({}, state.transactions, {
	          loading: false
	        })
	      });
	    }),
	
	    /**
	     * @name ViewModelListActions#beforeTodayTransactionsLoad
	     * @description Update the `ViewState` before loading today transactions
	     * @type {function}
	     * @inner
	     * @param {string} today Today date in the `yyyy-MM-dd` format
	     * @return {void}
	     */
	    beforeTodayTransactionsLoad: stateContainer.createAction(function (state, today) {
	      return Object.assign({}, state, {
	        transactions: Object.assign({}, state.transactions, {
	          today: today,
	          hasTodayTransactions: false
	        })
	      });
	    }),
	
	    /**
	     * @name ViewModelListActions#afterTodayTransactionsLoadSuccess
	     * @description Update the `ViewState` after successfully loading today transactions
	     * @type {function}
	     * @inner
	     * @param {object[]} data Today transactions
	     * @return {void}
	     */
	    afterTodayTransactionsLoadSuccess: stateContainer.createAction(function (state, data) {
	      return Object.assign({}, state, {
	        transactions: Object.assign({}, state.transactions, {
	          hasTodayTransactions: (0, _helpers.hasTodayTransactions)(data, state.transactions.today)
	        })
	      });
	    }),
	
	    /**
	     * @name ViewModelListActions#afterTodayTransactionsLoadError
	     * @description Update the `ViewState` after unsuccessful today transactions load
	     * @type {function}
	     * @inner
	     * @param {module:lib-bb-model-errors.ModelError} error Response error
	     * @return {void}
	     */
	    afterTodayTransactionsLoadError: stateContainer.createAction(function (state, error) {
	      return Object.assign({}, state, {
	        error: (0, _helpers.uiError)(error)
	      });
	    }),
	
	    /**
	     * @name ViewModelListActions#afterUpdateSuccess
	     * @description Update the `ViewState` after successful transaction item update
	     * @type {function}
	     * @inner
	     * @param {object} item Updated transaction item
	     * @return {void}
	     */
	    afterUpdateSuccess: stateContainer.createAction(function (state, item) {
	      return Object.assign({}, state, {
	        transactions: Object.assign({}, state.transactions, {
	          rawData: state.transactions.rawData.map(function (data) {
	            return data.id === item.id ? item : data;
	          })
	        }),
	        notifications: [].concat(_toConsumableArray(state.notifications), [{
	          id: Date.now(),
	          message: 'notification.transaction.category.change.success',
	          level: 'success'
	        }])
	      });
	    }),
	
	    /**
	     * @name ViewModelListActions#afterUpdateError
	     * @description Update the `ViewState` after unsuccessful transaction item update
	     * @type {function}
	     * @inner
	     * @return {void}
	     */
	    afterUpdateError: stateContainer.createAction(function (state) {
	      return Object.assign({}, state, {
	        notifications: [].concat(_toConsumableArray(state.notifications), [{
	          id: Date.now(),
	          message: 'notification.transaction.category.change.fail',
	          level: 'danger'
	        }])
	      });
	    })
	  };
	};
	
	/**
	 * @typedef {object} TransactionsResponse
	 * @property {object[]} rawData Loaded transactions array
	 * @property {number} totalCount Total number of transactions
	 * @property {LoadRequestParams} requestParams Request parameters object
	 */
	
	/**
	 * @typedef {object} LoadRequestParams
	 * @property {number} from Page number to load
	 * @property {number} size Page size to load
	 * @property {string} productId Product ID of transactions to load
	 * @property {?string} orderBy Order transactions by property
	 * @property {?string} direction Transactions order direction
	 */

/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.hasTodayTransactions = exports.uiError = undefined;
	
	var _errorMessages;
	
	var _libBbModelErrors = __webpack_require__(63);
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	var errorMessages = (_errorMessages = {}, _defineProperty(_errorMessages, _libBbModelErrors.E_AUTH, 'model.error.auth'), _defineProperty(_errorMessages, _libBbModelErrors.E_CONNECTIVITY, 'model.error.connectivity'), _defineProperty(_errorMessages, _libBbModelErrors.E_USER, 'model.error.user'), _defineProperty(_errorMessages, _libBbModelErrors.E_UNEXPECTED, 'model.error.unexpected'), _errorMessages);
	
	var uiError = exports.uiError = function uiError(error) {
	  return {
	    message: errorMessages[error.code]
	  };
	};
	
	/**
	 * @description
	 * Helper function to iterate transaction collection and check for day in bookingDate field
	 *
	 * @name TransactionsController#isSameDay
	 * @type {function}
	 * @inner
	 * @param {string} date String representing the target day
	 * @returns {boolean}
	 */
	var isSameDay = function isSameDay(date) {
	  return function (transaction) {
	    return transaction.bookingDate === date;
	  };
	};
	
	/**
	 * @description
	 * Helper function to check if there are transactions for a specific date
	 *
	 * @name TransactionsController#hasTodayTransactions
	 * @type {function}
	 * @param {object[]} transactions Array of transaction items
	 * @param {string} date String representing the target day
	 * @returns {boolean}
	 */
	var hasTodayTransactions = exports.hasTodayTransactions = function hasTodayTransactions(transactions, date) {
	  return transactions.some(isSameDay(date));
	};

/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _helpers = __webpack_require__(85);
	
	exports.default = function (stateContainer, hooks) {
	  return {
	    /**
	     * @name ViewModelProductActions
	     * @type {object}
	     * @inner
	     */
	
	    /**
	     * @name ViewModelProductActions#afterSelectProductSuccess
	     * @description Update the `ViewState` after new product selected
	     * @type {function}
	     * @inner
	     * @param {object|null} product New Product object
	     * @return {void}
	     */
	    afterSelectProductSuccess: stateContainer.createAction(function (state, product) {
	      return Object.assign({}, state, {
	        error: null,
	        searching: false,
	        product: {
	          data: product ? hooks.processProductSelected(product) : null
	        },
	        currencies: [],
	        transactions: Object.assign({}, state.transactions, {
	          rawData: null,
	          loading: false,
	          loadedAll: false,
	          total: 0,
	          from: 0,
	          today: '',
	          hasTodayTransactions: false
	        }),
	        search: Object.assign({}, state.search, {
	          rawData: null,
	          loading: false,
	          loadedAll: false,
	          total: 0,
	          from: 0,
	          query: null,
	          bookingDateLessThan: null,
	          bookingDateGreaterThan: null,
	          amountGreaterThan: null,
	          amountLessThan: null,
	          creditDebitIndicator: null
	        })
	      });
	    }),
	
	    /**
	     * @name ViewModelProductActions#afterSelectProductError
	     * @description Update the `ViewState` after unsuccessful product selection
	     * @type {function}
	     * @inner
	     * @param {module:lib-bb-model-errors.ModelError} error Response error
	     * @return {void}
	     */
	    afterSelectProductError: stateContainer.createAction(function (state, error) {
	      return Object.assign({}, state, {
	        error: (0, _helpers.uiError)(error)
	      });
	    })
	  };
	};

/***/ }),
/* 87 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function (stateContainer) {
	  return {
	    /**
	     * @name ViewModelTransactionActions
	     * @type {object}
	     * @inner
	     */
	
	    /**
	     * @name ViewModelTransactionActions#afterLoadSuccess
	     * @description Update the `ViewState` after successful transaction load
	     * @type {function}
	     * @inner
	     * @param {object} data Transaction object
	     * @return {void}
	     */
	    afterLoadSuccess: stateContainer.createAction(function (state, data) {
	      return Object.assign({}, state, {
	        transaction: {
	          data: data
	        }
	      });
	    }),
	
	    /**
	     * @name ViewModelTransactionActions#beforeStore
	     * @description Update the `ViewState` before new transaction will be stored
	     * @type {function}
	     * @inner
	     * @param {object} data New transaction object
	     * @return {void}
	     */
	    beforeStore: stateContainer.createAction(function (state, data) {
	      return Object.assign({}, state, {
	        transaction: {
	          data: data
	        }
	      });
	    })
	  };
	};

/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _helpers = __webpack_require__(85);
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	exports.default = function (stateContainer) {
	  return {
	    /**
	     * @name ViewModelSearchActions
	     * @type {object}
	     * @inner
	     */
	
	    /**
	     * @name ViewModelSearchActions#beforeSearch
	     * @description Update the `ViewState` before search transactions
	     * @type {function}
	     * @inner
	     * @param {SearchRequestParams} params Search request parameters
	     * @return {void}
	     */
	    beforeSearch: stateContainer.createAction(function (state, params) {
	      return Object.assign({}, state, {
	        searching: true,
	        error: null,
	        search: Object.assign({}, state.search, {
	          loading: true,
	          query: params.query || null,
	          category: params.category || null
	        })
	      });
	    }),
	
	    /**
	     * @name ViewModelSearchActions#afterSearchSuccess
	     * @description Update the `ViewState` after successful transactions search
	     * @type {function}
	     * @inner
	     * @param {TransactionsSearchResponse} response Search response
	     * @return {void}
	     */
	    afterSearchSuccess: stateContainer.createAction(function (state, response) {
	      var query = response.requestParams.query || null;
	
	      if (!state.searching || state.search.query !== query) {
	        return state;
	      }
	
	      return Object.assign({}, state, {
	        search: Object.assign({}, state.search, {
	          loading: false,
	          loadedAll: response.rawData.length < state.search.size,
	          rawData: state.paginationType === 'load-more' && !!response.requestParams.from ? [].concat(_toConsumableArray(state.search.rawData || []), _toConsumableArray(response.rawData)) : response.rawData,
	          total: response.totalCount,
	          from: response.requestParams.from,
	          bookingDateLessThan: response.requestParams.bookingDateLessThan || null,
	          bookingDateGreaterThan: response.requestParams.bookingDateGreaterThan || null,
	          amountGreaterThan: response.requestParams.amountGreaterThan || null,
	          amountLessThan: response.requestParams.amountLessThan || null,
	          creditDebitIndicator: response.requestParams.creditDebitIndicator || null
	        }),
	        sort: {
	          orderBy: response.requestParams.orderBy || null,
	          direction: response.requestParams.direction || null
	        }
	      });
	    }),
	
	    /**
	     * @name ViewModelSearchActions#afterSearchError
	     * @description Update the `ViewState` after unsuccessful transactions search
	     * @type {function}
	     * @inner
	     * @param {module:lib-bb-model-errors.ModelError} error Response error
	     * @return {void}
	     */
	    afterSearchError: stateContainer.createAction(function (state, error) {
	      return Object.assign({}, state, {
	        error: (0, _helpers.uiError)(error),
	        search: Object.assign({}, state.search, {
	          loading: false
	        })
	      });
	    }),
	
	    /**
	     * @name ViewModelSearchActions#cancel
	     * @description Update the `ViewState` when transactions search canceled
	     * @type {function}
	     * @inner
	     * @return {void}
	     */
	    cancel: stateContainer.createAction(function (state) {
	      return Object.assign({}, state, {
	        error: null,
	        searching: false,
	        search: Object.assign({}, state.search, {
	          rawData: null,
	          loading: false,
	          loadedAll: false,
	          total: 0,
	          from: 0,
	          query: null,
	          bookingDateLessThan: null,
	          bookingDateGreaterThan: null,
	          amountGreaterThan: null,
	          amountLessThan: null,
	          creditDebitIndicator: null,
	          category: null
	        })
	      });
	    })
	  };
	};
	
	/**
	 * @typedef {object} TransactionsSearchResponse
	 * @property {object[]} rawData Search transactions array
	 * @property {number} totalCount Total number of found transactions
	 * @property {SearchRequestParams} requestParams Request parameters object
	 */
	
	/**
	 * @typedef {object} SearchRequestParams
	 * @property {number} from Page number to load
	 * @property {number} size Page size to load
	 * @property {string} productId Product ID of transactions to load
	 * @property {?string} orderBy Order transactions by property
	 * @property {?string} direction Transactions order direction
	 * @property {?string} query Query search parameter
	 * @property {?string} bookingDateLessThan Maximum booking date search parameter
	 * @property {?string} bookingDateGreaterThan Minimum booking date search parameter
	 * @property {?string} amountGreaterThan Minimum amount search parameter
	 * @property {?string} amountLessThan Maximum amount search parameter
	 * @property {?string} creditDebitIndicator Credit or debit search parameter
	 * @property {?string} category Transaction category search parameter
	 */

/***/ }),
/* 89 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function (stateContainer) {
	  return {
	    /**
	     * @name ViewModelExportActions
	     * @type {object}
	     * @inner
	     */
	
	    /**
	     * @name ViewModelExportActions#beforeExport
	     * @description Update the `ViewState` before transactions export
	     * @type {function}
	     * @inner
	     * @return {void}
	     */
	    beforeExport: stateContainer.createAction(function (state) {
	      return Object.assign({}, state, {
	        export: {
	          exportFailed: false
	        }
	      });
	    }),
	
	    /**
	     * @name ViewModelExportActions#afterExportError
	     * @description Update the `ViewState after failed transactions export
	     * @type {function}
	     * @inner
	     * @return {void}
	     */
	    afterExportError: stateContainer.createAction(function (state) {
	      return Object.assign({}, state, {
	        export: {
	          exportFailed: true
	        }
	      });
	    })
	  };
	};

/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _helpers = __webpack_require__(85);
	
	exports.default = function (stateContainer) {
	  return {
	    /**
	     * @name ViewModelCurrenciesActions#beforeLoad
	     * @description Update the `ViewState` before loading currencies
	     * @type {function}
	     * @inner
	     * @return {void}
	     */
	    beforeLoad: stateContainer.createAction(function (state) {
	      return Object.assign({}, state, {
	        error: null,
	        currencies: Object.assign({}, state.currencies, {
	          loading: true
	        })
	      });
	    }),
	
	    /**
	     * @name ViewModelCurrenciesActions#afterLoadSuccess
	     * @description Update the `ViewState` after successful currencies load
	     * @type {function}
	     * @inner
	     * @param {array.<module:data-bb-payment-orders-ng.PaymentOrdersData.Currency>} data
	     * Currencies array
	     * @return {void}
	     */
	    afterLoadSuccess: stateContainer.createAction(function (state, data) {
	      return Object.assign({}, state, {
	        currencies: {
	          loading: false,
	          data: data
	        }
	      });
	    }),
	
	    /**
	     * @name ViewModelCurrenciesActions#afterLoadError
	     * @description Update the `ViewState` after unsuccessful currencies load
	     * @type {function}
	     * @inner
	     * @param {module:lib-bb-model-errors.ModelError} error Response error
	     * @return {void}
	     */
	    afterLoadError: stateContainer.createAction(function (state, error) {
	      return Object.assign({}, state, {
	        error: (0, _helpers.uiError)(error),
	        currencies: {
	          data: [],
	          loading: false
	        }
	      });
	    })
	  };
	};

/***/ }),
/* 91 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function (stateContainer) {
	  return {
	    /**
	     * @name ViewModelNotificationActions
	     * @type {object}
	     * @inner
	     */
	
	    /**
	     * @name ViewModelNotificationActions#removeNotification
	     * @description Update the `ViewState after failed transactions export
	     * @type {function}
	     * @inner
	     * @return {void}
	     */
	    removeNotification: stateContainer.createAction(function (state, payload) {
	      return Object.assign({}, state, {
	        notifications: state.notifications.filter(function (item) {
	          return item.id !== payload;
	        })
	      });
	    })
	  };
	};

/***/ }),
/* 92 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/* global window */
	/**
	 * @name TransactionsService
	 * @type {object}
	 * @ngkey widget-bb-transactions-ng:service
	 * @description
	 * The service encapsulates the core functionality of the Transactions
	 * Widget. It co-ordinates the communication of data from the `Model`
	 * with the communication with the user by updating the {@link ViewState}.
	 *
	 * Asynchronous methods update the {@link ViewState} in 3 potential
	 * stages; "before", "success", and "error", to allow the view to
	 * provide feedback to the user.
	 */
	
	/**
	 * @name padded
	 * @type {function}
	 * @description Adds leading zero to number values less then 10
	 * @inner
	 * @param {number} num Number to add padding
	 * @return {string} Padded number as a string
	 */
	var padded = function padded(num) {
	  return num > 9 ? String(num) : "0" + num;
	};
	
	/**
	 * @name formatDate
	 * @type {function}
	 * @description Formats date to yyyy-MM-dd format
	 * @inner
	 * @param {object} date Date to format
	 * @return {string} Formatted date string
	 */
	var formatDate = function formatDate(date) {
	  return date.getFullYear() + "-" + padded(date.getMonth() + 1) + "-" + padded(date.getDate());
	};
	
	/**
	 * @name createTransactionsService
	 * @inner
	 * @type {function}
	 * @param {module:model-bb-transactions-ng.transactionsModel} model Transactions model
	 * @param {ViewModel} viewModel
	 * @param {module:lib-bb-widget.Widget} widget
	 * @return {TransactionsService}
	 */
	
	exports.default = function (model, viewModel, $window) {
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
	
	      return model.load(params).then(function (raw) {
	        viewModel.list.afterLoadSuccess({
	          rawData: raw.data,
	          totalCount: raw.totalCount,
	          requestParams: params
	        });
	      }).catch(function (error) {
	        viewModel.list.afterLoadError(error);
	        throw error;
	      });
	    },
	
	    /**
	     * @name TransactionsService#search
	     * @type {function}
	     * @description
	     * Fetch a `page` of `transactions` search results from the model and
	     * update the {@link ViewState} to display them.
	     * @param {SearchRequestParams} params Request params
	     * @return {Promise.<void>}
	     */
	    search: function search(params) {
	      viewModel.search.beforeSearch({
	        query: params.query,
	        category: params.category
	      });
	
	      return model.load(params).then(function (raw) {
	        viewModel.search.afterSearchSuccess({
	          rawData: raw.data,
	          totalCount: raw.totalCount,
	          requestParams: params
	        });
	      }).catch(function (error) {
	        viewModel.search.afterSearchError(error);
	        throw error;
	      });
	    },
	
	    /**
	     * @name TransactionsService#export
	     * @type {function}
	     * @description
	     * Download transactions, which satisfy request parameter conditions, in specified format
	     * @param {ExportRequestParams} params Request params
	     * @return {Promise.<void>}
	     */
	    export: function _export(params) {
	      viewModel.export.beforeExport();
	
	      var uri = model.getExportFileResource(params);
	      $window.location.assign(uri);
	    },
	
	    /**
	     * @name TransactionsService#checkTodayTransactions
	     * @type {function}
	     * @description
	     * Fetch one today transaction and update `ViewState` to indicated
	     * are there today transactions present.
	     * @param {string} productId Product ID of transactions to load
	     * @return {Promise.<void>}
	     */
	    checkTodayTransactions: function checkTodayTransactions(productId) {
	      var today = formatDate(new Date());
	      viewModel.list.beforeTodayTransactionsLoad(today);
	
	      var params = {
	        productId: productId,
	        from: 0,
	        size: 1,
	        bookingDateLessThan: today,
	        bookingDateGreaterThan: today
	      };
	
	      return model.load(params).then(function (_ref) {
	        var data = _ref.data;
	        return viewModel.list.afterTodayTransactionsLoadSuccess(data);
	      }).catch(function (error) {
	        viewModel.list.afterTodayTransactionsLoadError(error);
	      });
	    },
	
	    /**
	     * @name TransactionsService#setupSelectedProduct
	     * @type {function}
	     * @description
	     * Fetch selected product and update `ViewState`.
	     * @param {boolean} isDefaultProductFirst Indicates wether default product
	     * should be returned first
	     * @return {Promise.<void>}
	     */
	    setupSelectedProduct: function setupSelectedProduct(isDefaultProductFirst) {
	      return model.getSelectedProduct(isDefaultProductFirst).then(function (selectedProduct) {
	        viewModel.product.afterSelectProductSuccess(selectedProduct);
	      }).catch(function (error) {
	        viewModel.product.afterSelectProductError(error);
	        throw error;
	      });
	    },
	
	    /**
	     * @name TransactionsService#loadCurrentTransaction
	     * @type {function}
	     * @description
	     * Fetch selected transaction and update `ViewState`.
	     * @return {Promise.<void>}
	     */
	    loadCurrentTransaction: function loadCurrentTransaction() {
	      return model.getCurrentTransaction().then(function (data) {
	        return viewModel.transaction.afterLoadSuccess(data);
	      });
	    },
	
	    /**
	     * @name TransactionsService#updateTransactionCategory
	     * @type {function}
	     * @description
	     * Updates transaction's category and `ViewState`.
	     * @return {Promise.<object>} Updated transaction item
	     */
	    updateTransactionCategory: function updateTransactionCategory(payload) {
	      return model.updateTransactionCategory(payload.transactionId, { category: payload.categoryName });
	    },
	
	    /**
	     * @name TransactionsService#storeCurrentTransaction
	     * @type {function}
	     * @description
	     * Stores currently selected transaction and updates `ViewState`.
	     * @param {object} transaction Currently selected transaction
	     * @return {void}
	     */
	    storeCurrentTransaction: function storeCurrentTransaction(transaction) {
	      viewModel.transaction.beforeStore(transaction);
	      model.storeTransactionAsCurrent(transaction);
	    },
	
	    /**
	     * @description
	     * Request currencies list
	     *
	     * @inner
	     * @name TransactionsService#getCurrencies
	     * @type {function}
	     * @returns {Array.<module:data-bb-payment-orders-ng.PaymentOrdersData.Currency>} Currencies array
	     */
	    getCurrencies: function getCurrencies() {
	      return model.getCurrencies().then(function (currencies) {
	        viewModel.currencies.afterLoadSuccess(currencies);
	      }).catch(function (error) {
	        viewModel.currencies.afterLoadError(error);
	        throw error;
	      });
	    }
	
	  };
	};
	
	/**
	 * @typedef {object} ExportRequestParams
	 * @property {string} exportFormat Export format
	 * @property {string} productId Product ID of transactions to load
	 * @property {?string} query Query search parameter
	 * @property {?string} bookingDateLessThan Maximum booking date search parameter
	 * @property {?string} bookingDateGreaterThan Minimum booking date search parameter
	 * @property {?string} amountGreaterThan Minimum amount search parameter
	 * @property {?string} amountLessThan Maximum amount search parameter
	 * @property {?string} creditDebitIndicator Credit or debit search parameter
	 */

/***/ })
/******/ ])
});
;
//# sourceMappingURL=widget-bb-transactions-ng.js.map