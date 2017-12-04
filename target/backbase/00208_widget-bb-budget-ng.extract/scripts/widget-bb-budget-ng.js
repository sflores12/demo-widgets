(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vendor-bb-angular"), require("lib-bb-model-errors"), require("lib-bb-widget-extension-ng"), require("lib-bb-event-bus-ng"), require("lib-bb-widget-ng"), require("lib-bb-intent-ng"), require("lib-bb-extension-helpers-ng"), require("model-bb-budget-ng"), require("lib-bb-state-container-ng"), require("lib-bb-currency-ng"));
	else if(typeof define === 'function' && define.amd)
		define("widget-bb-budget-ng", ["vendor-bb-angular", "lib-bb-model-errors", "lib-bb-widget-extension-ng", "lib-bb-event-bus-ng", "lib-bb-widget-ng", "lib-bb-intent-ng", "lib-bb-extension-helpers-ng", "model-bb-budget-ng", "lib-bb-state-container-ng", "lib-bb-currency-ng"], factory);
	else if(typeof exports === 'object')
		exports["widget-bb-budget-ng"] = factory(require("vendor-bb-angular"), require("lib-bb-model-errors"), require("lib-bb-widget-extension-ng"), require("lib-bb-event-bus-ng"), require("lib-bb-widget-ng"), require("lib-bb-intent-ng"), require("lib-bb-extension-helpers-ng"), require("model-bb-budget-ng"), require("lib-bb-state-container-ng"), require("lib-bb-currency-ng"));
	else
		root["widget-bb-budget-ng"] = factory(root["vendor-bb-angular"], root["lib-bb-model-errors"], root["lib-bb-widget-extension-ng"], root["lib-bb-event-bus-ng"], root["lib-bb-widget-ng"], root["lib-bb-intent-ng"], root["lib-bb-extension-helpers-ng"], root["model-bb-budget-ng"], root["lib-bb-state-container-ng"], root["lib-bb-currency-ng"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_17__, __WEBPACK_EXTERNAL_MODULE_20__, __WEBPACK_EXTERNAL_MODULE_27__, __WEBPACK_EXTERNAL_MODULE_28__, __WEBPACK_EXTERNAL_MODULE_29__, __WEBPACK_EXTERNAL_MODULE_30__, __WEBPACK_EXTERNAL_MODULE_31__, __WEBPACK_EXTERNAL_MODULE_32__, __WEBPACK_EXTERNAL_MODULE_33__, __WEBPACK_EXTERNAL_MODULE_34__) {
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

	module.exports = __webpack_require__(26);

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
/* 17 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_17__;

/***/ }),
/* 18 */,
/* 19 */,
/* 20 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_20__;

/***/ }),
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _vendorBbAngular = __webpack_require__(17);
	
	var _vendorBbAngular2 = _interopRequireDefault(_vendorBbAngular);
	
	var _libBbWidgetExtensionNg = __webpack_require__(27);
	
	var _libBbWidgetExtensionNg2 = _interopRequireDefault(_libBbWidgetExtensionNg);
	
	var _libBbEventBusNg = __webpack_require__(28);
	
	var _libBbEventBusNg2 = _interopRequireDefault(_libBbEventBusNg);
	
	var _libBbWidgetNg = __webpack_require__(29);
	
	var _libBbWidgetNg2 = _interopRequireDefault(_libBbWidgetNg);
	
	var _libBbIntentNg = __webpack_require__(30);
	
	var _libBbIntentNg2 = _interopRequireDefault(_libBbIntentNg);
	
	var _libBbExtensionHelpersNg = __webpack_require__(31);
	
	var _libBbExtensionHelpersNg2 = _interopRequireDefault(_libBbExtensionHelpersNg);
	
	var _modelBbBudgetNg = __webpack_require__(32);
	
	var _modelBbBudgetNg2 = _interopRequireDefault(_modelBbBudgetNg);
	
	var _libBbStateContainerNg = __webpack_require__(33);
	
	var _libBbStateContainerNg2 = _interopRequireDefault(_libBbStateContainerNg);
	
	var _libBbCurrencyNg = __webpack_require__(34);
	
	var _libBbCurrencyNg2 = _interopRequireDefault(_libBbCurrencyNg);
	
	var _service = __webpack_require__(35);
	
	var _service2 = _interopRequireDefault(_service);
	
	var _index = __webpack_require__(36);
	
	var _index2 = _interopRequireDefault(_index);
	
	var _router = __webpack_require__(43);
	
	var _router2 = _interopRequireDefault(_router);
	
	var _defaultHooks = __webpack_require__(44);
	
	var _defaultHooks2 = _interopRequireDefault(_defaultHooks);
	
	var _listBudgetsController = __webpack_require__(45);
	
	var _listBudgetsController2 = _interopRequireDefault(_listBudgetsController);
	
	var _budgetFormController = __webpack_require__(46);
	
	var _budgetFormController2 = _interopRequireDefault(_budgetFormController);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/* Controllers */
	var moduleKey = 'widget-bb-budget-ng'; /**
	                                        * @module widget-bb-budget-ng
	                                        *
	                                        * @description
	                                        * Budget
	                                        */
	
	var hooksKey = moduleKey + ':hooks';
	var budgetServiceKey = moduleKey + ':service';
	var viewModelKey = moduleKey + ':view-model';
	var routerKey = moduleKey + ':router';
	
	exports.default = _vendorBbAngular2.default.module(moduleKey, [_libBbEventBusNg2.default, _modelBbBudgetNg2.default, _libBbStateContainerNg2.default, _libBbWidgetNg2.default, _libBbIntentNg2.default, _libBbExtensionHelpersNg2.default, _libBbCurrencyNg2.default]).factory(hooksKey, (0, _libBbWidgetExtensionNg2.default)(_defaultHooks2.default)).factory(viewModelKey, [_libBbStateContainerNg.bbStateContainerKey,
	/* into */
	_index2.default]).factory(budgetServiceKey, [_modelBbBudgetNg.modelBudgetKey, viewModelKey,
	/* into */
	_service2.default]).factory(routerKey, [_libBbStateContainerNg.bbStateContainerKey,
	/* into */
	_router2.default]).controller('ListBudgetsController', [budgetServiceKey, routerKey,
	/* into */
	_listBudgetsController2.default]).controller('BudgetFormController', [budgetServiceKey, routerKey,
	/* into */
	_budgetFormController2.default]).factory(_libBbWidgetExtensionNg.extensionContextKey, [budgetServiceKey, routerKey,
	/* into */
	function (budgetService, router) {
	  return {
	    budgetService: budgetService,
	    router: router
	  };
	}]).factory(_libBbExtensionHelpersNg.extensionHelpersContextKey, [_libBbCurrencyNg.bbCurrencyRuleKey, function (getRule) {
	  return {
	    getRule: getRule
	  };
	}]).run([_libBbIntentNg.bbIntentKey, _libBbStateContainerNg.bbStateContainerKey, viewModelKey, _libBbEventBusNg.eventBusKey, _libBbWidgetNg.widgetKey, function (bbIntent, bbStateContainer, viewModel, eventBus, widget) {
	  viewModel.init();
	
	  bbIntent.persist(bbStateContainer.getState, bbStateContainer.setState);
	
	  bbIntent.init().then(function () {
	    eventBus.publish('cxp.item.loaded', {
	      id: widget.getId()
	    });
	  });
	}]).name;
	
	/**
	 * @typedef {object} BudgetItem
	 * @extends module:model-bb-budget-ng.BudgetItem
	 */
	
	/**
	 * @typedef {object} HelperContext
	 * @extends module:lib-bb-extension-helpers-ng.HelperContext
	 */
	
	/**
	 * @typedef {object} IntentContext
	 * @extends module:lib-bb-extension-intents-ng.IntentContext
	 */
	
	/**
	 * @typedef {object} EventContext
	 * @extends module:lib-bb-extension-events-ng.EventContext
	 * @property {BudgetService} BudgetService
	 */

/***/ }),
/* 27 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_27__;

/***/ }),
/* 28 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_28__;

/***/ }),
/* 29 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_29__;

/***/ }),
/* 30 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_30__;

/***/ }),
/* 31 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_31__;

/***/ }),
/* 32 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_32__;

/***/ }),
/* 33 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_33__;

/***/ }),
/* 34 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_34__;

/***/ }),
/* 35 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	/**
	 * The core functionality of the Budget widget
	 *
	 * The purpose of this module is to provide the main structure of the
	 * widget. Outlining the workflows, connecting the data from the
	 * model to the view via the customizations provided by the extension.
	 *
	 * @constructor BudgetService
	 * @param {BudgetModel} model
	 * @param {ViewModel} viewModel
	 */
	exports.default = function (model, viewModel) {
	  return {
	    /**
	     * @name BudgetService#list
	     *
	     * @description
	     * Update the view with an list of items loaded from the data source
	     *
	     * @type {function}
	     * @param {Object} requestParams paremeters of the BudgetModel.GET request
	     * to be passed to the model
	     * @return {Promise}
	     */
	    list: function list(requestParams) {
	      viewModel.list.beforeList();
	      return model.getBudgets(requestParams).then(function (response) {
	        return viewModel.list.afterListSuccess(Object.assign({}, response));
	      }, viewModel.list.afterListError);
	    },
	
	    /**
	     * @name BudgetService#startEdit
	     *
	     * @description
	     * Prepare the view for editing a budget item
	     *
	     * @type {function}
	     * @param {string} budgetId budget item id to be modified
	     */
	    startEdit: function startEdit(budgetId) {
	      viewModel.edit.beforeStartEdit({ budgetId: budgetId, schema: model.getBudgetSchema() });
	    },
	
	    /**
	     * @name BudgetService#startCreate
	     *
	     * @description
	     * Prepare the view for creating a new budget item
	     *
	     * @type {function}
	     */
	    startCreate: function startCreate() {
	      viewModel.create.beforeStartCreate(model.getBudgetSchema());
	    },
	
	    /**
	     * @name BudgetService#edit
	     *
	     * @description
	     * Updates budget item and triggers view update after it
	     *
	     * @type {function}
	     * @param {module:model-bb-budget-ng.BudgetItem} item budget item to be modified
	     * @return {Promise}
	     */
	    edit: function edit(budget) {
	      viewModel.edit.beforeEdit();
	      return model.updateBudget(budget.id, budget).then(viewModel.edit.afterEditSuccess, viewModel.edit.afterEditError);
	    },
	
	    /**
	     * @name BudgetService#create
	     *
	     * @description
	     * Creates a new budget item and triggers view update after it
	     *
	     * @type {function}
	     * @param {module:model-bb-budget-ng.BudgetItem} item set of data for a new budget to be created
	     * @return {Promise}
	     */
	    create: function create(item) {
	      viewModel.create.beforeCreate();
	      return model.createBudget(item).then(viewModel.create.afterCreateSuccess, viewModel.create.afterCreateError);
	    },
	
	    /**
	     * @name BudgetService#deleteBudget
	     *
	     * @description
	     * Removes budget and triggers view update after it
	     *
	     * @type {function}
	     * @param {module:model-bb-budget-ng.BudgetItem} item budget item to be deleted
	     * @return {Promise}
	     */
	    deleteBudget: function deleteBudget(budget) {
	      viewModel.deleteBudget.beforeDelete();
	      return model.deleteBudget(budget.id, budget).then(viewModel.deleteBudget.afterDeleteSuccess, viewModel.deleteBudget.afterDeleteError);
	    }
	  };
	};

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _list = __webpack_require__(37);
	
	var _list2 = _interopRequireDefault(_list);
	
	var _create = __webpack_require__(40);
	
	var _create2 = _interopRequireDefault(_create);
	
	var _edit = __webpack_require__(41);
	
	var _edit2 = _interopRequireDefault(_edit);
	
	var _delete = __webpack_require__(42);
	
	var _delete2 = _interopRequireDefault(_delete);
	
	var _helpers = __webpack_require__(38);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * @typedef {Object} ViewState
	 * @property {boolean} isLoading
	 * @property {Array<BudgetItem>} budgets
	 * @property {string} template
	 */
	
	/**
	 * @name ViewModel
	 * @type {object}
	 * @ngkey widget-bb-budget-ng:viewModel
	 * @inner
	 */
	exports.default = function (vm) {
	  return {
	    init: vm.createAction(function () {
	      var current = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (0, _helpers.createInitialState)();
	      return current;
	    }),
	    /**
	     * @name ViewModel#list
	     * @description
	     * Actions for updating the parts of the `ViewState` related to budget list
	     * @type {ViewModelListActions}
	     * @inner
	     */
	    list: (0, _list2.default)(vm),
	    /**
	     * @name ViewModel#create
	     * @description
	     * Actions for updating the parts of the `ViewState` related to budget creation
	     * @type {ViewModelCreateActions}
	     * @inner
	     */
	    create: (0, _create2.default)(vm),
	    /**
	     * @name ViewModel#edit
	     * @description
	     * Actions for updating the parts of the `ViewState` related to budget editing
	     * @type {ViewModelEditActions}
	     * @inner
	     */
	    edit: (0, _edit2.default)(vm),
	    /**
	     * @name ViewModel#deleteBudget
	     * @description
	     * Actions for updating the parts of the `ViewState` related to budget deleting
	     * @type {ViewModelDeleteBudgetActions}
	     * @inner
	     */
	    deleteBudget: (0, _delete2.default)(vm)
	  };
	};

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _helpers = __webpack_require__(38);
	
	exports.default = function (vm) {
	  return {
	    /**
	     * @name ViewModelListActions
	     * @type {object}
	     * @inner
	     */
	
	    /**
	     * @name ViewModelListActions#beforeList
	     * @inner
	     * @type {function}
	     * @description Amend the view to inform the user the list is being loaded
	     *
	     * @param {ViewState} current The current state of the view model
	     * @return {ViewState} The new state of the view model
	     */
	    beforeList: vm.createAction(function (current) {
	      return Object.assign({}, current, {
	        isLoading: true
	      });
	    }),
	
	    /**
	     * @name ViewModelListActions#afterListSuccess
	     * @inner
	     * @type {function}
	     * @description Amend the view to display the list of items
	     *
	     * @param {ViewState} current The current state of the view model
	     * @param {object} response
	     * @param {Array<module:model-bb-budget-ng.BudgetItem>} response.items
	     * @return {ViewState} The new state of the view model
	     */
	    afterListSuccess: vm.createAction(function (current) {
	      var response = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	      return Object.assign({}, current, {
	        budgets: response.items ? response.items : [],
	        isLoading: false
	      });
	    }),
	
	    /**
	     * @name ViewModelListActions#afterListError
	     * @inner
	     * @type {function}
	     * @description Amend the view to display the error encountered when loading the list
	     *
	     * @param {ViewState} current The current state of the view model
	     * @param {ModelError} error
	     * @return {ViewState} The new state of the view model
	     */
	    afterListError: vm.createAction(function (current, error) {
	      return Object.assign({}, current, {
	        budgetsError: (0, _helpers.makeUIErrorMessage)(error),
	        isLoading: false
	      });
	    })
	  };
	};

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.findBudgetById = exports.createInitialState = exports.makeUISuccessMessage = exports.makeUIErrorMessage = undefined;
	
	var _constants = __webpack_require__(39);
	
	/**
	 * @name makeUIErrorMessage
	 *
	 * @type {function}
	 * @description Creates an error object for template
	 *
	 * @inner
	 * @param {object} modelError Error object
	 * @returns {{message: string, level: string}} notification
	 */
	var makeUIErrorMessage = exports.makeUIErrorMessage = function makeUIErrorMessage(modelError) {
	  var message = '';
	  var level = _constants.notificationLevels.DANGER;
	
	  if (modelError && modelError.code) {
	    message = _constants.errorMessages[modelError.code];
	  }
	  return { message: message, level: level };
	};
	
	/**
	 * @name makeUISuccessMessage
	 *
	 * @type {function}
	 * @description Creates a success notification for a specific
	 * method of [success, update, delete]
	 *
	 * @inner
	 * @param {string} method
	 * @returns {{message: string, level: string}} notification
	 */
	var makeUISuccessMessage = exports.makeUISuccessMessage = function makeUISuccessMessage(method) {
	  return {
	    message: _constants.successMessages[method],
	    level: _constants.notificationLevels.SUCCESS
	  };
	};
	
	/**
	 * @name createInitialState
	 *
	 * @type {function}
	 * @description Creates an initial state for the budgeting state
	 *
	 * @inner
	 * @return {object}
	 */
	var createInitialState = exports.createInitialState = function createInitialState() {
	  return {
	    isLoading: false,
	    budgets: [],
	    template: '#widget-bb-budget-ng/list.html',
	    route: {
	      name: 'list',
	      params: {}
	    },
	    form: {},
	    notifications: []
	  };
	};
	
	/**
	 * @name findBudgetById
	 *
	 * @type {function}
	 * @description Helper to get an item from the array by a budgetId
	 *
	 * @inner
	 * @param {Array<BudgetItem>} budgets an array of BudgetItems to search in
	 * @param {string} budgetId id to be used for a search
	 * @returns {BudgetItem} search result (single item)
	 */
	var findBudgetById = exports.findBudgetById = function findBudgetById() {
	  var budgets = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
	  var budgetId = arguments[1];
	  return budgets.filter(function (budget) {
	    return budget.id === budgetId;
	  }).pop();
	};

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.successMessages = exports.errorMessages = exports.notificationLevels = undefined;
	
	var _errorMessages;
	
	var _libBbModelErrors = __webpack_require__(20);
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	/**
	 * @name notificationLevels
	 *
	 * @type {object}
	 * @description
	 * enum with levels for ui notifications
	 */
	var notificationLevels = exports.notificationLevels = {
	  DANGER: 'danger',
	  SUCCESS: 'success'
	};
	
	/**
	 * @name errorMessages
	 *
	 * @type {object}
	 * @description
	 * enum with standart model error message keys
	 */
	var errorMessages = exports.errorMessages = (_errorMessages = {}, _defineProperty(_errorMessages, _libBbModelErrors.E_AUTH, 'budget.model.error.auth'), _defineProperty(_errorMessages, _libBbModelErrors.E_CONNECTIVITY, 'budget.model.error.connectivity'), _defineProperty(_errorMessages, _libBbModelErrors.E_USER, 'budget.model.error.user'), _defineProperty(_errorMessages, _libBbModelErrors.E_UNEXPECTED, 'budget.model.error.unexpected'), _errorMessages);
	
	/**
	 * @name successMessages
	 *
	 * @type {object}
	 * @description
	 * enum with success messages keys
	 */
	var successMessages = exports.successMessages = function () {
	  return ['create', 'update', 'delete'].reduce(function (acc, method) {
	    return Object.assign(acc, _defineProperty({}, method, 'budget.model.' + method + '.success'));
	  }, {});
	}();

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _helpers = __webpack_require__(38);
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	exports.default = function (vm) {
	  return {
	    /**
	     * @name ViewModelCreateActions
	     * @type {object}
	     * @inner
	     */
	
	    /**
	     * @name ViewModelCreateActions#beforeStartCreate
	     * @inner
	     * @type {function}
	     * @description Amend the view to inform the user that the create form is being
	     * ready to create a new item
	     *
	     * @param {ViewState} current The current state of the view model
	     * @param {object} schema budget POST schema to be used for validation
	     * @return {ViewState} The new state of the view model
	     */
	    beforeStartCreate: vm.createAction(function (current, schema) {
	      return Object.assign({}, current, {
	        form: {},
	        schema: schema,
	        isLoading: false
	      });
	    }),
	
	    /**
	     * @name ViewModelCreateActions#beforeCreate
	     * @inner
	     * @type {function}
	     * @description Amend the view to inform the user the create operation is being
	     * started
	     *
	     * @param {ViewState} current The current state of the view model
	     * @return {ViewState} The new state of the view model
	     */
	    beforeCreate: vm.createAction(function (current) {
	      return Object.assign({}, current, {
	        isLoading: true
	      });
	    }),
	
	    /**
	     * @name ViewModelCreateActions#afterCreateSuccess
	     * @inner
	     * @type {function}
	     * @description Ammend the view to inform the user that create operation
	     * successfully finished
	     *
	     * @param {ViewState} current The current state of the view model
	     * @returns {ViewState} The new state of the view model
	     */
	    afterCreateSuccess: vm.createAction(function (current) {
	      return Object.assign({}, current, {
	        notifications: [].concat(_toConsumableArray(current.notifications || []), [(0, _helpers.makeUISuccessMessage)('create')]),
	        isLoading: false
	      });
	    }),
	    /**
	     * @name ViewModelCreateActions#afterCreateError
	     * @inner
	     * @type {function}
	     * @description Ammend the view to inform the user that there was
	     * an error during the creation
	     *
	     * @param {ViewState} current The current state of the view model
	     * @param {object} error
	     * @returns {ViewState} The new state of the view model
	     */
	    afterCreateError: vm.createAction(function (current, error) {
	      return Object.assign({}, current, {
	        notifications: [].concat(_toConsumableArray(current.notifications || []), [(0, _helpers.makeUIErrorMessage)(error)]),
	        isLoading: false
	      });
	    }),
	    /**
	     * @name ViewModelCreateActions#cancelCreate
	     * @inner
	     * @type {function}
	     * @description Ammend the view to inform the user that creating
	     * operation is canceled
	     *
	     * @param {ViewState} current The current state of the view model
	     * @returns {ViewState} The new state of the view model
	     */
	    cancelCreate: vm.createAction(function (current) {
	      return Object.assign({}, current, {
	        form: null
	      });
	    })
	  };
	};

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _vendorBbAngular = __webpack_require__(17);
	
	var _vendorBbAngular2 = _interopRequireDefault(_vendorBbAngular);
	
	var _helpers = __webpack_require__(38);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	exports.default = function (vm) {
	  return {
	    /**
	     * @name ViewModelEditActions
	     * @type {object}
	     * @inner
	     */
	
	    /**
	     * @name ViewModelEditActions#beforeStartEdit
	     * @inner
	     * @type {function}
	     * @description Amend the view to inform the user that the edit form is being
	     * ready
	     *
	     * @param {ViewState} current The current state of the view model
	     * @param {{budgetId: string, schema: object}} budget object id and schema to be used for editing
	     * @return {ViewState} The new state of the view model
	     */
	    beforeStartEdit: vm.createAction(function (current, params) {
	      var budgetId = params.budgetId,
	          schema = params.schema;
	
	      return Object.assign({}, current, {
	        form: _vendorBbAngular2.default.copy((0, _helpers.findBudgetById)(current.budgets, budgetId)),
	        schema: schema,
	        isLoading: false
	      });
	    }),
	
	    /**
	     * @name ViewModelEditActions#beforeEdit
	     * @inner
	     * @type {function}
	     * @description Amend the view to inform the user the edit operation is being
	     * started
	     *
	     * @param {ViewState} current The current state of the view model
	     * @return {ViewState} The new state of the view model
	     */
	    beforeEdit: vm.createAction(function (current) {
	      return Object.assign({}, current, {
	        isLoading: true
	      });
	    }),
	
	    /**
	     * @name ViewModelEditActions#afterEditSuccess
	     * @inner
	     * @type {function}
	     * @description Ammend the view to inform the user that edit operation
	     * successfully finished
	     *
	     * @param {ViewState} current The current state of the view model
	     * @returns {ViewState} The new state of the view model
	     */
	    afterEditSuccess: vm.createAction(function (current) {
	      return Object.assign({}, current, {
	        notifications: [].concat(_toConsumableArray(current.notifications || []), [(0, _helpers.makeUISuccessMessage)('update')]),
	        isLoading: false
	      });
	    }),
	    /**
	     * @name ViewModelEditActions#afterEditError
	     * @inner
	     * @type {function}
	     * @description Ammend the view to inform the user that there was
	     * an error during the editing
	     *
	     * @param {ViewState} current The current state of the view model
	     * @param {object} error server error response
	     * @returns {ViewState} The new state of the view model
	     */
	    afterEditError: vm.createAction(function (current, error) {
	      return Object.assign({}, current, {
	        notifications: [].concat(_toConsumableArray(current.notifications || []), [(0, _helpers.makeUIErrorMessage)(error)]),
	        isLoading: false
	      });
	    })
	  };
	};

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _helpers = __webpack_require__(38);
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	exports.default = function (vm) {
	  return {
	    /**
	     * @name ViewModelDeleteBudgetActions
	     * @type {object}
	     * @inner
	     */
	
	    /**
	     * @name ViewModelDeleteBudgetActions#beforeDelete
	     * @inner
	     * @type {function}
	     * @description Amend the view to inform the user that delete operation is being started
	     *
	     * @param {ViewState} current The current state of the view model
	     * @return {ViewState} The new state of the view model
	     */
	    beforeDelete: vm.createAction(function (current) {
	      return Object.assign({}, current, {
	        isLoading: true
	      });
	    }),
	
	    /**
	     * @name ViewModelDeleteBudgetActions#afterDeleteSuccess
	     * @inner
	     * @type {function}
	     * @description Ammend the view to inform the user that delete operation successfully finished
	     *
	     * @param {ViewState} current The current state of the view model
	     * @returns {ViewState} The new state of the view model
	     */
	    afterDeleteSuccess: vm.createAction(function (current) {
	      return Object.assign({}, current, {
	        notifications: [].concat(_toConsumableArray(current.notifications || []), [(0, _helpers.makeUISuccessMessage)('delete')]),
	        isLoading: false
	      });
	    }),
	
	    /**
	     * @name ViewModelDeleteBudgetActions#afterDeleteError
	     * @inner
	     * @type {function}
	     * @description Ammend the view to inform the user that there was
	     * an error during the deleting
	     *
	     * @param {ViewState} current The current state of the view model
	     * @param {object} error server error response
	     * @returns {ViewState} The new state of the view model
	     */
	    afterDeleteError: vm.createAction(function (current, error) {
	      return Object.assign({}, current, {
	        notifications: [].concat(_toConsumableArray(current.notifications || []), [(0, _helpers.makeUIErrorMessage)(error)]),
	        isLoading: false
	      });
	    })
	  };
	};

/***/ }),
/* 43 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	exports.default = function (stateContainer) {
	  var subscribers = [];
	
	  var setRoute = stateContainer.createAction(function (state, _ref) {
	    var name = _ref.name,
	        params = _ref.params;
	    return Object.assign({}, state, {
	      route: {
	        name: name,
	        params: params
	      }
	    });
	  });
	
	  var notifySubscribers = function notifySubscribers(name, params) {
	    subscribers.forEach(function (subscriber) {
	      subscriber(name, params);
	    });
	  };
	
	  return {
	    goto: function goto(name, params) {
	      setRoute({ name: name, params: params });
	      notifySubscribers(name, params);
	    },
	
	    getParams: stateContainer.createSelector(function (state) {
	      return state.route.params;
	    }),
	
	    getRoute: stateContainer.createSelector(function (state) {
	      return state.route.name;
	    }),
	
	    subscribe: function subscribe(callback) {
	      subscribers = [].concat(_toConsumableArray(subscribers), [callback]);
	      return function () {
	        subscribers = subscribers.filter(function (sub) {
	          return sub !== callback;
	        });
	      };
	    }
	  };
	};

/***/ }),
/* 44 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {};

/***/ }),
/* 45 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function (service, router) {
	  var unsubscribe = null;
	
	  /**
	   * @name ListBudgetsController#$onInit
	   *
	   * @description
	   * AngularJS Lifecycle hook used to initialize the controller
	   *
	   * @type {function}
	   * @returns {Promise} Promise which is resolved once contoller is initialized,
	   *   or rejected in case of errors
	   */
	  var $onInit = function $onInit() {
	    var loadItems = function loadItems() {
	      return service.list();
	    };
	    loadItems();
	    unsubscribe = router.subscribe(function (route) {
	      var params = router.getParams() || {};
	      if (route !== 'list' || !params.reload) return;
	      loadItems();
	    });
	  };
	
	  /**
	   * @name ListBudgetsController#$onDestroy
	   *
	   * @description
	   * AngularJS Lifecycle hook used to destroy the controller
	   *
	   * @type {function}
	   */
	  var $onDestroy = function $onDestroy() {
	    if (unsubscribe) unsubscribe();
	  };
	
	  /**
	   * @name ListBudgetsController#edit
	   *
	   * @description
	   * Internal navigation for getting to edit form from the list of items
	   *
	   * @type {function}
	   * @param {string} budgetId identifier of a budget to be changed
	   */
	  var edit = function edit(budgetId) {
	    router.goto('form', budgetId);
	  };
	
	  /**
	   * @name ListBudgetsController#create
	   *
	   * @description
	   * Internal navigation for getting to create form from the list of items
	   *
	   * @type {function}
	   */
	  var create = function create() {
	    router.goto('form');
	  };
	
	  /**
	   * @name ListBudgetsController#deleteBudget
	   *
	   * @description
	   * Controller method to handle deleting of an item
	   *
	   * @type {function}
	   * @param {object} budget Object to be removed
	   * @param {?boolean} thenReload Flag which defines if budget values should be reloaded
	   * from the server after delete operation (default true)
	   */
	  var deleteBudget = function deleteBudget(budget) {
	    var thenReload = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
	    return service.deleteBudget(budget).then(function () {
	      router.goto('list', { reload: thenReload });
	    });
	  };
	
	  return {
	    edit: edit,
	    create: create,
	    deleteBudget: deleteBudget,
	    $onInit: $onInit,
	    $onDestroy: $onDestroy
	  };
	};

/***/ }),
/* 46 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	/**
	 * @name BudgetFormController
	 * @ngkey BudgetFormController
	 * @type {object}
	 * @description
	 * Budget widget form controller
	 */
	exports.default = function (service, router) {
	  return {
	    /**
	     * @name BudgetFormController#$onInit
	     *
	     * @description
	     * AngularJS Lifecycle hook used to initialize the controller
	     *
	     * @type {function}
	     * @returns {Promise} Promise which is resolved once contoller is initialized,
	     *   or rejected in case of errors
	     */
	    $onInit: function $onInit() {
	      var budgetId = router.getParams();
	      if (budgetId) {
	        service.startEdit(budgetId);
	      } else {
	        service.startCreate();
	      }
	    },
	
	
	    /**
	     * @name BudgetFormController#$onDestroy
	     *
	     * @description
	     * AngularJS Lifecycle hook used to destroy the controller
	     *
	     * @type {function}
	     */
	    $onDestroy: function $onDestroy() {
	      router.goto('list');
	    },
	
	
	    /**
	     * @name BudgetFormController#save
	     *
	     * @description
	     * Controller method to handle new/edited item saving
	     * and to initiate state change via routing
	     *
	     * @type {function}
	     * @param {object} value Object to be saved as a budget
	     * @param {?boolean} thenReload Flag which defines if budget values should be reloaded
	     * from the server after update/create operation
	     */
	    save: function save(value) {
	      var thenReload = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
	
	      if (router.getParams()) {
	        service.edit(value).then(function () {
	          router.goto('list', { reload: thenReload });
	        });
	      } else {
	        service.create(value).then(function () {
	          router.goto('list', { reload: thenReload });
	        });
	      }
	    }
	  };
	};

/***/ })
/******/ ])
});
;
//# sourceMappingURL=widget-bb-budget-ng.js.map