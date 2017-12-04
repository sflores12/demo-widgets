(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vendor-bb-angular"), require("lib-bb-model-errors"), require("lib-bb-widget-ng"), require("lib-bb-event-bus-ng"), require("lib-bb-widget-extension-ng"), require("lib-bb-intent-ng"), require("model-bb-action-recipes-ng"));
	else if(typeof define === 'function' && define.amd)
		define("widget-bb-action-recipes-ng", ["vendor-bb-angular", "lib-bb-model-errors", "lib-bb-widget-ng", "lib-bb-event-bus-ng", "lib-bb-widget-extension-ng", "lib-bb-intent-ng", "model-bb-action-recipes-ng"], factory);
	else if(typeof exports === 'object')
		exports["widget-bb-action-recipes-ng"] = factory(require("vendor-bb-angular"), require("lib-bb-model-errors"), require("lib-bb-widget-ng"), require("lib-bb-event-bus-ng"), require("lib-bb-widget-extension-ng"), require("lib-bb-intent-ng"), require("model-bb-action-recipes-ng"));
	else
		root["widget-bb-action-recipes-ng"] = factory(root["vendor-bb-angular"], root["lib-bb-model-errors"], root["lib-bb-widget-ng"], root["lib-bb-event-bus-ng"], root["lib-bb-widget-extension-ng"], root["lib-bb-intent-ng"], root["model-bb-action-recipes-ng"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_23__, __WEBPACK_EXTERNAL_MODULE_27__, __WEBPACK_EXTERNAL_MODULE_30__, __WEBPACK_EXTERNAL_MODULE_31__, __WEBPACK_EXTERNAL_MODULE_32__, __WEBPACK_EXTERNAL_MODULE_33__, __WEBPACK_EXTERNAL_MODULE_34__) {
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

	module.exports = __webpack_require__(29);

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
/* 21 */,
/* 22 */,
/* 23 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_23__;

/***/ }),
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_27__;

/***/ }),
/* 28 */,
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _vendorBbAngular = __webpack_require__(23);
	
	var _vendorBbAngular2 = _interopRequireDefault(_vendorBbAngular);
	
	var _libBbWidgetNg = __webpack_require__(30);
	
	var _libBbWidgetNg2 = _interopRequireDefault(_libBbWidgetNg);
	
	var _libBbEventBusNg = __webpack_require__(31);
	
	var _libBbEventBusNg2 = _interopRequireDefault(_libBbEventBusNg);
	
	var _libBbWidgetExtensionNg = __webpack_require__(32);
	
	var _libBbWidgetExtensionNg2 = _interopRequireDefault(_libBbWidgetExtensionNg);
	
	var _libBbIntentNg = __webpack_require__(33);
	
	var _libBbIntentNg2 = _interopRequireDefault(_libBbIntentNg);
	
	var _modelBbActionRecipesNg = __webpack_require__(34);
	
	var _modelBbActionRecipesNg2 = _interopRequireDefault(_modelBbActionRecipesNg);
	
	var _controller = __webpack_require__(35);
	
	var _controller2 = _interopRequireDefault(_controller);
	
	var _defaultHooks = __webpack_require__(38);
	
	var defaultHooks = _interopRequireWildcard(_defaultHooks);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * @module widget-bb-action-recipes-ng
	 *
	 * @description
	 * Action Recipes Widget
	 */
	var hooksKey = 'widget-bb-action-recipes-ng:hooks';
	
	exports.default = _vendorBbAngular2.default.module('widget-bb-action-recipes-ng', [_libBbWidgetNg2.default, _libBbEventBusNg2.default, _modelBbActionRecipesNg2.default, _libBbIntentNg2.default]).factory(hooksKey, (0, _libBbWidgetExtensionNg2.default)(defaultHooks)).controller('ActionRecipesController', [
	// dependencies to inject
	_libBbWidgetNg.widgetKey, _libBbEventBusNg.eventBusKey, _modelBbActionRecipesNg.modelActionRecipesKey, hooksKey,
	
	/* into */
	_controller2.default]).run([_libBbEventBusNg.eventBusKey, _libBbWidgetNg.widgetKey, _libBbIntentNg.bbIntentKey, function (bus, widget, bbIntent) {
	  bus.publish('cxp.item.loaded', {
	    id: widget.getId()
	  });
	  bbIntent.init();
	}]).name;

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
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = ActionRecipesController;
	
	var _constants = __webpack_require__(36);
	
	var _mappings = __webpack_require__(37);
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	function ActionRecipesController(widget, bus, model, hooks) {
	  /**
	   * @name ActionRecipesController
	   * @ngkey ActionRecipesController
	   * @type {object}
	   * @description Action recipes widget controller
	   */
	  var $ctrl = this;
	
	  var createRecipeFilter = function createRecipeFilter(specification, apiTrigger, accounts) {
	    var filter = hooks.createRecipeFilter(specification, apiTrigger, accounts);
	
	    if (!filter) {
	      throw new Error('No filter mapping defined for specification type \'' + specification.type + '\'.' + 'Make sure you have extended "selectRecipeFilter" hook to support this specification type');
	    }
	
	    if (!(filter.toApiModel instanceof Function)) {
	      throw new Error('Filter mapping for specification type \'' + specification.type + '\' does not ' + 'have method "toApiModel". This method must be present.');
	    }
	
	    return filter;
	  };
	
	  var convertToRecipeModel = function convertToRecipeModel(apiRecipe, specifications, accounts) {
	    var specification = specifications.find(function (spec) {
	      return spec.id === apiRecipe.specificationId;
	    });
	    var action = new _mappings.RecipeAction(apiRecipe.actions, hooks.getAvailableChannels(), true);
	    return new _mappings.RecipeModel(apiRecipe, specification, createRecipeFilter(specification, apiRecipe.trigger, accounts), action);
	  };
	
	  var onLoad = function onLoad() {
	    $ctrl.state.loading = true;
	    model.load().then(function (res) {
	      $ctrl.state.specifications = res.specifications;
	      $ctrl.state.accounts = res.accounts;
	      $ctrl.state.recipes = res.recipes.map(function (recipe) {
	        return convertToRecipeModel(recipe, res.specifications, res.accounts);
	      });
	
	      $ctrl.state.loading = false;
	    }).catch(function (err) {
	      $ctrl.state.error = _constants.httpErrorMessages[err.code];
	      $ctrl.state.loading = false;
	    });
	  };
	
	  /**
	   * @description
	   * AngularJS Lifecycle hook used to initialize the controller
	   *
	   * @name ActionRecipesController#$onInit
	   * @type {function}
	   * @return {void}
	   */
	  var $onInit = function $onInit() {
	    bus.publish('cxp.item.loaded', {
	      id: widget.getId()
	    });
	    onLoad();
	  };
	
	  /**
	   * @description
	   * Returns current view, used by the template to identify in
	   * which state the widget is in
	   *
	   * @name currentView
	   * @type {function}
	   * @return {View}
	   */
	  var currentView = function currentView() {
	    return $ctrl.state.view;
	  };
	
	  /**
	   * @description
	   * Used to switch the view in the template
	    * @name navigateTo
	   * @param {View} view New view to switch to
	   * @type {function}
	   * @return {void}
	   */
	  var navigateTo = function navigateTo(view) {
	    $ctrl.state.view = view;
	  };
	
	  /**
	   * @description
	   * Creates a new action recipe from the given specification.
	   * - Stores composed action object in state.
	   * - Changes view to recipe view
	   *
	   * @name onCreate
	   * @param {Specification} sepcification Action specification which is used
	   * as a template to create new action recipe
	   * @type {function}
	   * @return {void}
	   */
	  var onCreate = function onCreate(specification) {
	    $ctrl.state.newAction = new _mappings.RecipeModel(null, specification, createRecipeFilter(specification), new _mappings.RecipeAction(specification.actions, hooks.getAvailableChannels(), false));
	    $ctrl.navigateTo(_constants.View.CREATE);
	  };
	
	  /**
	   * @description
	   * Starts a process to edit a given recipe
	   *
	   * @name onEdit
	   * @param {Recipe} recipe recipe to be editted
	   * @type {function}
	   * @return {void}
	   */
	  var onEdit = function onEdit(recipe) {
	    $ctrl.state.newAction = recipe;
	    $ctrl.navigateTo(_constants.View.EDIT);
	  };
	
	  /**
	   * @description
	   * Saves given action recipe. Additionally stores new action in state,
	   * recipe list and changes the view to list
	   *
	   * @name onSave
	   * @param {Recipe} recipe Action recipe to be saved
	   * @type {function}
	   * @return {void}
	   */
	  var onSave = function onSave(recipe) {
	    if (recipe.id) {
	      model.update(recipe.toApiModel()).then(function () {
	        $ctrl.onCreateDismiss();
	      });
	    } else {
	      model.save(recipe.toApiModel()).then(function (apiRecipe) {
	        $ctrl.state.recipes = [Object.assign(recipe, { id: apiRecipe.id })].concat(_toConsumableArray($ctrl.state.recipes));
	        $ctrl.onCreateDismiss();
	      });
	    }
	  };
	
	  /**
	   * @description
	   * Saves given action recipe. Additionally stores new action in state,
	   * recipe list and changes the view to list
	   *
	   * @name onSave
	   * @param {Recipe} recipe Action recipe to be saved
	   * @type {function}
	   * @return {void}
	   */
	  var onRemove = function onRemove(recipe) {
	    model.remove(recipe).then(function () {
	      $ctrl.state.recipes.splice($ctrl.state.recipes.indexOf(recipe), 1);
	      $ctrl.onCreateDismiss();
	    });
	  };
	
	  /**
	   * @description
	   * Dismiss action recipe creation.
	   * - Clears action being created from controller state
	   * - Changes view to list
	   *
	   * @name onCreateDismiss
	   * @type {function}
	   * @return {void}
	   */
	  var onCreateDismiss = function onCreateDismiss() {
	    $ctrl.navigateTo(_constants.View.LIST);
	    $ctrl.state.newAction = null;
	  };
	
	  /**
	   * @description
	   * Activates given action recipe.
	   * If activation fails, 'active' property of given recipe is set to false.
	   *
	   * @name onActivate
	   * @type {Function}
	   * @param {RecipeModel} recipe to activate
	   * @return {Promise}
	   * @fires bb.event.actionrecipe.activate.failed
	   */
	  var onActivate = function onActivate(recipe) {
	    Object.assign(recipe, { changingStatus: true });
	    return model.activate(recipe).catch(function () {
	      Object.assign(recipe, { active: false });
	      bus.publish(_constants.Event.ACTION_RECIPE_ACTIVATION_FAILED, recipe);
	    }).then(function () {
	      return Object.assign(recipe, { changingStatus: false });
	    });
	  };
	
	  /**
	   * @description
	   * Deactivates given action recipe.
	   * If deactivation fails, 'active' property of given recipe is set to true.
	   *
	   * @name onDeactivate
	   * @type {Function}
	   * @param {RecipeModel} recipe to deactivate
	   * @return {Promise}
	   * @fires bb.event.actionrecipe.deactivate.failed
	   */
	  var onDeactivate = function onDeactivate(recipe) {
	    Object.assign(recipe, { changingStatus: true });
	    return model.deactivate(recipe).catch(function () {
	      Object.assign(recipe, { active: true });
	      bus.publish(_constants.Event.ACTION_RECIPE_DEACTIVATION_FAILED, recipe);
	    }).then(function () {
	      return Object.assign(recipe, { changingStatus: false });
	    });
	  };
	
	  Object.assign($ctrl, {
	    /**
	     *  Holds static data of controller.
	     *  @name ActionRecipesController#statics
	     *  @type {ActionRecipesControllerStatics}
	     */
	    static: {
	      labels: _constants.labels,
	      View: _constants.View
	    },
	
	    /**
	     * @description Keeps state related data
	     * @name ActionRecipesController#state
	     * @type {ActionRecipesControllerState}
	     */
	    state: {
	      loading: false,
	      view: _constants.View.LIST,
	      error: null,
	      recipes: [],
	      specifications: [],
	      accounts: [],
	      newAction: null
	    },
	
	    $onInit: $onInit,
	    navigateTo: navigateTo,
	    currentView: currentView,
	    onCreate: onCreate,
	    onCreateDismiss: onCreateDismiss,
	    onEdit: onEdit,
	    onSave: onSave,
	    onRemove: onRemove,
	    onActivate: onActivate,
	    onDeactivate: onDeactivate
	  });
	}
	
	/**
	 * @typedef {Object} ActionRecipesControllerStatics
	 * @property {Views} views views supported by controller
	 */
	
	/**
	 * @typedef {Object} ActionRecipesControllerState State of the controller
	 * @property {boolean} loading loading indicator.
	 * @property {View} view tracks the view the user is in
	 * @property {Object} error http error code, if any
	 * @property {Array<Recipe>} recipes array of users recipes
	 * @property {Array<Specification>} specifications array of available action specifications
	 * @property {Array<Account>} accounts array of users accounts
	 * @property {Recipe} newAction object used to hold recipe data when new recipe
	 * is being created, if any
	 */

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Event = exports.httpErrorMessages = exports.View = exports.labels = undefined;
	
	var _httpErrorMessages;
	
	var _libBbModelErrors = __webpack_require__(27);
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	/**
	 * @description
	 * Recipe data to labels mapper
	 *
	 * @name
	 * @type {object}
	 */
	var labels = exports.labels = {
	  recipeType: {
	    newTransaction: 'label.list.recipe.type.newTransaction'
	  },
	  condition: {
	    lt: 'label.list.recipe.condition.less',
	    gt: 'label.list.recipe.condition.more',
	    eq: 'label.list.recipe.condition.equal',
	    gte: 'label.list.recipe.condition.moreOrEqual',
	    lte: 'label.list.recipe.condition.lessOrEqual'
	  }
	};
	
	/**
	 * @description
	 * Available views for the widget
	 *
	 * @name View
	 * @type {object}
	 */
	var View = exports.View = {
	  LIST: 'list',
	  SPECIFICATIONS: 'select-specification',
	  CREATE: 'create-recipe',
	  EDIT: 'edit-recipe'
	};
	
	/**
	 * @description
	 * Http error codes. Used to identify what error has occured
	 *
	 * @name httpErrorMessages
	 * @type {object}
	 */
	var httpErrorMessages = exports.httpErrorMessages = (_httpErrorMessages = {}, _defineProperty(_httpErrorMessages, _libBbModelErrors.E_AUTH, 'error.auth'), _defineProperty(_httpErrorMessages, _libBbModelErrors.E_CONNECTIVITY, 'error.connectivity'), _defineProperty(_httpErrorMessages, _libBbModelErrors.E_USER, 'error.user'), _defineProperty(_httpErrorMessages, _libBbModelErrors.E_UNEXPECTED, 'error.unexpected'), _httpErrorMessages);
	
	var Event = exports.Event = {
	  /**
	   * @event bb.event.actionrecipe.activate.failed
	   * @description Event fired when activation of action recipe has failed
	   * @type {string}
	   */
	  ACTION_RECIPE_ACTIVATION_FAILED: 'bb.event.actionrecipe.activate.failed',
	  /**
	   * @event bb.event.actionrecipe.deactivate.failed
	   * @description Event fired when deactivation of action recipe has failed
	   * @type {string}
	   */
	  ACTION_RECIPE_DEACTIVATION_FAILED: 'bb.event.actionrecipe.deactivate.failed'
	};

/***/ }),
/* 37 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var RecipeModel = exports.RecipeModel = function () {
	  function RecipeModel(o, specification, filter, actions) {
	    _classCallCheck(this, RecipeModel);
	
	    this.id = o ? o.id : null;
	    this.active = o ? o.active : true;
	    this.specificationId = o ? o.specificationId : specification.id;
	    this.specification = specification;
	    this.filter = filter;
	    this.actions = actions;
	  }
	
	  _createClass(RecipeModel, [{
	    key: "toApiModel",
	    value: function toApiModel() {
	      return {
	        id: this.id,
	        name: this.specification.name,
	        active: this.active,
	        specificationId: this.specificationId,
	        trigger: this.filter.toApiModel(),
	        actions: this.actions.toApiModel()
	      };
	    }
	  }]);
	
	  return RecipeModel;
	}();
	
	var RecipeAction = exports.RecipeAction = function () {
	  function RecipeAction(actions, channels, defaultValue) {
	    var _this = this;
	
	    _classCallCheck(this, RecipeAction);
	
	    this.channelsConfig = channels;
	    Object.keys(channels).forEach(function (channelKey) {
	      _this[channelKey] = _this.parseAction(actions, channels[channelKey], defaultValue);
	    });
	  }
	
	  /**
	   * Constructs individual channel object
	   * @inner
	   */
	
	
	  _createClass(RecipeAction, [{
	    key: "parseAction",
	    value: function parseAction(actions, channel, defaultValue) {
	      var action = actions.find(function (item) {
	        return item.type === channel;
	      });
	      if (action) {
	        return {
	          type: action.type,
	          value: defaultValue
	        };
	      }
	      return null;
	    }
	
	    /*
	     * Checks if at least one action is selected
	     */
	
	  }, {
	    key: "isSelected",
	    value: function isSelected() {
	      var _this2 = this;
	
	      return Object.keys(this.channelsConfig).some(function (key) {
	        return _this2[key] && _this2[key].value;
	      });
	    }
	  }, {
	    key: "toApiModel",
	    value: function toApiModel() {
	      var _this3 = this;
	
	      var actions = [];
	      Object.keys(this.channelsConfig).forEach(function (key) {
	        if (_this3[key] && _this3[key].value) {
	          actions.push({ type: _this3[key].type });
	        }
	      });
	      return actions;
	    }
	  }]);

	  return RecipeAction;
	}();

/***/ }),
/* 38 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.createRecipeFilter = createRecipeFilter;
	exports.getAvailableChannels = getAvailableChannels;
	
	/**
	 * @name Hooks
	 * @type {object}
	 *
	 * @description
	 * Hooks for widget-bb-action-recipes-ng
	 */
	
	/**
	 * @name Hooks#createRecipeFilter
	 * @type {function}
	 * @description
	 * This hook function should return a model of recipe's filter. The returned model is likely to be
	 * different for each specification type. The returned object will be assigned to 'filter' field
	 * of the recipe and it will be accessible from the templates.
	 * The returned object must implement 'toApiModel()' method. This method must convert the filter
	 * back to API representation of a trigger (i.e. 'selectors' and 'filter' fields must be present).
	 * Here's an example of an object returned by 'toApiModel()':
	 * {
	 *   selectors: [{
	 *     path: 'accountId',
	 *     value: '123456789'
	 *   }],
	 *   filter: {
	 *     gte: [{ 'pathValue': 'transaction.amount' }, 1000]
	 *   }
	 * }
	 *
	 * @param {object} specification specification used by the recipe
	 * @param {object} trigger trigger in backen format from which filter model should be created
	 * @param {array} accounts list of accounts which are available for the user
	 * @returns {object} view model of recipe filter
	 */
	function createRecipeFilter() {
	  return null;
	}
	
	/**
	 * @name Hooks#getAvailableChannels
	 * @type {function}
	 * @description
	 * This hook returns an object which contains mapping from template channel to backend channel
	 * code. Only the channels defined here will be mapped when loading or sending data to/from backend.
	 *
	 * @returns {object} mapping from template channel name to backend channel name
	 */
	function getAvailableChannels() {
	  return {
	    browser: 'notification',
	    sms: 'sms',
	    email: 'email'
	  };
	}

/***/ })
/******/ ])
});
;
//# sourceMappingURL=widget-bb-action-recipes-ng.js.map