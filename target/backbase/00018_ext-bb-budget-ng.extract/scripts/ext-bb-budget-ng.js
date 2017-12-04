(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("ui-bb-i18n-ng"), require("vendor-bb-angular-ng-aria"), require("ui-bb-substitute-error-ng"), require("ui-bb-empty-state-ng"), require("ui-bb-loading-indicator-ng"), require("ui-bb-budget-card-ng"), require("ui-bb-notification-stripe-ng"), require("ui-bb-currency-input-ng"), require("ui-bb-modal-ng"), require("ui-bb-stepper-ng"));
	else if(typeof define === 'function' && define.amd)
		define("ext-bb-budget-ng", ["ui-bb-i18n-ng", "vendor-bb-angular-ng-aria", "ui-bb-substitute-error-ng", "ui-bb-empty-state-ng", "ui-bb-loading-indicator-ng", "ui-bb-budget-card-ng", "ui-bb-notification-stripe-ng", "ui-bb-currency-input-ng", "ui-bb-modal-ng", "ui-bb-stepper-ng"], factory);
	else if(typeof exports === 'object')
		exports["ext-bb-budget-ng"] = factory(require("ui-bb-i18n-ng"), require("vendor-bb-angular-ng-aria"), require("ui-bb-substitute-error-ng"), require("ui-bb-empty-state-ng"), require("ui-bb-loading-indicator-ng"), require("ui-bb-budget-card-ng"), require("ui-bb-notification-stripe-ng"), require("ui-bb-currency-input-ng"), require("ui-bb-modal-ng"), require("ui-bb-stepper-ng"));
	else
		root["ext-bb-budget-ng"] = factory(root["ui-bb-i18n-ng"], root["vendor-bb-angular-ng-aria"], root["ui-bb-substitute-error-ng"], root["ui-bb-empty-state-ng"], root["ui-bb-loading-indicator-ng"], root["ui-bb-budget-card-ng"], root["ui-bb-notification-stripe-ng"], root["ui-bb-currency-input-ng"], root["ui-bb-modal-ng"], root["ui-bb-stepper-ng"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_6__, __WEBPACK_EXTERNAL_MODULE_7__, __WEBPACK_EXTERNAL_MODULE_8__, __WEBPACK_EXTERNAL_MODULE_9__, __WEBPACK_EXTERNAL_MODULE_10__, __WEBPACK_EXTERNAL_MODULE_11__, __WEBPACK_EXTERNAL_MODULE_12__, __WEBPACK_EXTERNAL_MODULE_13__, __WEBPACK_EXTERNAL_MODULE_14__, __WEBPACK_EXTERNAL_MODULE_15__) {
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

	module.exports = __webpack_require__(1);

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.events = exports.helpers = exports.intents = exports.dependencyKeys = undefined;
	
	var _intents = __webpack_require__(2);
	
	Object.defineProperty(exports, 'intents', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_intents).default;
	  }
	});
	
	var _helpers = __webpack_require__(3);
	
	Object.defineProperty(exports, 'helpers', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_helpers).default;
	  }
	});
	
	var _events = __webpack_require__(5);
	
	Object.defineProperty(exports, 'events', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_events).default;
	  }
	});
	
	var _uiBbI18nNg = __webpack_require__(6);
	
	var _uiBbI18nNg2 = _interopRequireDefault(_uiBbI18nNg);
	
	var _vendorBbAngularNgAria = __webpack_require__(7);
	
	var _vendorBbAngularNgAria2 = _interopRequireDefault(_vendorBbAngularNgAria);
	
	var _uiBbSubstituteErrorNg = __webpack_require__(8);
	
	var _uiBbSubstituteErrorNg2 = _interopRequireDefault(_uiBbSubstituteErrorNg);
	
	var _uiBbEmptyStateNg = __webpack_require__(9);
	
	var _uiBbEmptyStateNg2 = _interopRequireDefault(_uiBbEmptyStateNg);
	
	var _uiBbLoadingIndicatorNg = __webpack_require__(10);
	
	var _uiBbLoadingIndicatorNg2 = _interopRequireDefault(_uiBbLoadingIndicatorNg);
	
	var _uiBbBudgetCardNg = __webpack_require__(11);
	
	var _uiBbBudgetCardNg2 = _interopRequireDefault(_uiBbBudgetCardNg);
	
	var _uiBbNotificationStripeNg = __webpack_require__(12);
	
	var _uiBbNotificationStripeNg2 = _interopRequireDefault(_uiBbNotificationStripeNg);
	
	var _uiBbCurrencyInputNg = __webpack_require__(13);
	
	var _uiBbCurrencyInputNg2 = _interopRequireDefault(_uiBbCurrencyInputNg);
	
	var _uiBbModalNg = __webpack_require__(14);
	
	var _uiBbModalNg2 = _interopRequireDefault(_uiBbModalNg);
	
	var _uiBbStepperNg = __webpack_require__(15);
	
	var _uiBbStepperNg2 = _interopRequireDefault(_uiBbStepperNg);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * @module ext-bb-budget-ng
	 * @extends module:widget-bb-budget-ng.Extension
	 */
	
	var dependencyKeys = exports.dependencyKeys = [_uiBbI18nNg2.default, _vendorBbAngularNgAria2.default, _uiBbSubstituteErrorNg2.default, _uiBbEmptyStateNg2.default, _uiBbLoadingIndicatorNg2.default, _uiBbBudgetCardNg2.default, _uiBbNotificationStripeNg2.default, _uiBbModalNg2.default, _uiBbStepperNg2.default, _uiBbCurrencyInputNg2.default];
	
	/**
	 * @name intents
	 * @type {module:lib-bb-extension-intents-ng.ExtensionIntents}
	 */

/***/ }),
/* 2 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function () {
	  return {};
	};

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _constants = __webpack_require__(4);
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	var templates = {
	  list: _constants.TemplateIds.LIST_TEMPLATE_ID,
	  formCreate: _constants.TemplateIds.FORM_CREATE_TEMPLATE_ID,
	  formUpdate: _constants.TemplateIds.FORM_UPDATE_TEMPLATE_ID
	};
	
	/**
	 * @description
	 * Converts category name into category CSS icon classes
	 *
	 * @name nameToIconClass
	 * @type {function}
	 * @inner
	 * @param {string} name Category name
	 * @returns {string}
	 */
	var nameToIconClass = function nameToIconClass(name) {
	  return '' + _constants.ClassNames.CATEGORY_CLASSNAME_PREFIX + name.toLowerCase().replace(/\W/g, '-').replace(/-{2,}/g, '-');
	};
	
	/**
	 * @name getIconClass
	 *
	 * @type {function}
	 * @description A helper to transform icon's name
	 * to an actual class name, which is going to be used to show a transactions
	 *
	 * @param {string} iconName name of the icon
	 * @returns {stirng} className to be used within a template
	 */
	var getIconClass = function getIconClass(iconName) {
	  return nameToIconClass(iconName || _constants.ClassNames.UNCATEGORIZED);
	};
	
	/**
	 * @name budgetFromModel
	 *
	 * @type {function}
	 * @inner
	 * @description Function to process budget model item in order
	 * to have it suitable for the usage within the actual template
	 *
	 * @param {object} modelItem item from the state container to be transformed
	 * @returns {object} transformedModelItem item to be used in an extension
	 */
	var budgetFromModel = function budgetFromModel() {
	  var modelItem = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	  return Object.assign({
	    iconClass: getIconClass(modelItem.budgetIcon || modelItem.categoryName)
	  }, modelItem);
	};
	
	/**
	 * @name isDefined
	 *
	 * @type {function}
	 * @inner
	 * @description A helper to check if item is NOT undefined and is NOT a null
	 *
	 * @param {any} value - an item to be assessed
	 * @returns {boolean} true in case an item is not undefined and is not null
	 */
	var isDefined = function isDefined(value) {
	  return value !== undefined && value !== null;
	};
	
	/**
	 * @name isRequired
	 *
	 * @type {function}
	 * @description A helper to check if item is required by the model
	 * @inner
	 * @param {object} valueObj - an item to be assessed
	 * @returns {boolean} true in case an item is not undefined and is not null
	 */
	var isRequired = function isRequired() {
	  var valueObj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	  return valueObj.required === true;
	};
	
	/**
	 * @name hasCurrencyCode
	 *
	 * @type {function}
	 * @description A helper to check if item has currency code property
	 * @inner
	 * @param {object} value - an item to be assessed
	 * @returns {boolean} true in case an item has currency code property
	 */
	var hasCurrencyCode = function hasCurrencyCode() {
	  var item = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	  return isDefined(item.currencyCode);
	};
	
	/**
	 * @name shouldHaveCurrencyCode
	 *
	 * @type {function}
	 * @description A helper to check if according to schema property should
	 * have a currency code defined
	 * @inner
	 * @param {object} schema - a schema item to be used
	 * @param {any} preferenceName - a preference name to be verified
	 * @returns {boolean} true in case an item should have currency code property
	 */
	var shouldHaveCurrencyCode = function shouldHaveCurrencyCode() {
	  var schema = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	  var preferenceName = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
	  return isDefined(schema[preferenceName]) && isDefined(schema[preferenceName].properties) && isDefined(schema[preferenceName].properties.currencyCode);
	};
	
	exports.default = function (_ref) {
	  var widget = _ref.widget,
	      stateContainer = _ref.stateContainer,
	      router = _ref.router,
	      getRule = _ref.getRule;
	
	  var isBudgetFormActive = router.getRoute() === 'form';
	  var isFormDirty = false;
	  var isCancelConfirmationActive = false;
	  var isDeleteConfirmationActive = false;
	  var deleteMethod = null;
	  var selectedBudget = {};
	
	  /**
	   * @name currentBudgets
	   *
	   * @type {function}
	   * @description State selector for current budgets
	   * @returns {Array} budgets transformed for the view
	   */
	  var currentBudgets = stateContainer.createSelector(function (state) {
	    return state.budgets.map(budgetFromModel);
	  });
	
	  /**
	   * @name budgetSchema
	   *
	   * @type {function}
	   * @description State selector for budget schema
	   */
	  var budgetSchema = stateContainer.createSelector(function (state) {
	    return state.schema;
	  });
	
	  /**
	   * @name categoryNamesOutOfSchema
	   *
	   * @type {function}
	   * @description State selector for budget categories enum
	   */
	  var categoryNamesOutOfSchema = stateContainer.createSelector(function (state) {
	    return state.schema.categoryName.enum;
	  });
	
	  /**
	   * @name getNotifications
	   *
	   * @type {function}
	   * @description Selector for notifications from the widget state
	   */
	  var getNotifications = stateContainer.createSelector(function (state) {
	    return state.notifications || [];
	  });
	
	  /**
	   * @name updateNotifications
	   *
	   * @type {function}
	   * @description Function to set notifications in the state
	   * @param {object} notifications notifications object
	   */
	  var updateNotifications = stateContainer.createAction(function (current, notifications) {
	    return Object.assign({}, current, {
	      notifications: notifications
	    });
	  });
	
	  /**
	   * @name preferences
	   *
	   * @inner
	   * @type {object}
	   * @description Set of preferences relevant for extensions (including default values)
	   */
	  var preferences = function () {
	    var fillDirection = widget.getBooleanPreference(_constants.Preferences.BUDGET_CARD_FILL_DIRECTION.key);
	    fillDirection = !isDefined(fillDirection) ? _constants.Preferences.BUDGET_CARD_FILL_DIRECTION.defaultValue : fillDirection;
	
	    var percentage = widget.getBooleanPreference(_constants.Preferences.BUDGET_CARD_VALUES_DISPLAY_TYPE.key);
	    percentage = !isDefined(percentage) ? _constants.Preferences.BUDGET_CARD_VALUES_DISPLAY_TYPE.defaultValue : percentage;
	
	    var safeZoneLimit = widget.getLongPreference(_constants.Preferences.BUDGET_CARD_SAFE_ZONE_LIMIT.key);
	    safeZoneLimit = !isDefined(safeZoneLimit) ? _constants.Preferences.BUDGET_CARD_SAFE_ZONE_LIMIT.defaultValue : safeZoneLimit;
	
	    var defaultCurrency = widget.getStringPreference(_constants.Preferences.BUDGETS_DEFAULT_CURRENCY_CODE);
	    defaultCurrency = !isDefined(defaultCurrency) ? _constants.Preferences.BUDGETS_DEFAULT_CURRENCY_CODE.defaultValue : defaultCurrency;
	
	    var notificationDismissTime = widget.getLongPreference(_constants.Preferences.NOTIFICATION_DISMISS_TIME.key);
	    notificationDismissTime = !isDefined(notificationDismissTime) ? _constants.Preferences.NOTIFICATION_DISMISS_TIME.defaultValue : notificationDismissTime;
	
	    return {
	      fillDirection: fillDirection,
	      percentage: percentage,
	      safeZoneLimit: safeZoneLimit,
	      defaultCurrency: defaultCurrency,
	      notificationDismissTime: notificationDismissTime
	    };
	  }();
	
	  /**
	   * @name pushNotification
	   * @type {function}
	   * @description Helper to push new notification into the list
	   * @inner
	   * @param {object} notification notification to be displayed
	   */
	  var pushNotification = function pushNotification(notification) {
	    if (!isDefined(notification)) {
	      return;
	    }
	    var notifications = getNotifications();
	    notifications.push(notification);
	    updateNotifications(notifications);
	  };
	
	  /**
	   * @name handleExtensionError
	   *
	   * @type {function}
	   * @description Internal for extension UI errors handler
	   * @param {Error} err error code to be transformed to the message
	   */
	  var handleExtensionError = function handleExtensionError(err) {
	    pushNotification({ message: err.message, level: 'danger' });
	    throw err;
	  };
	
	  /**
	   * @name createModelHandlers
	   *
	   * @type {function}
	   * @description Method to create a set of handlers for saving function
	   * This method can be used to add extra fields
	   * @param {object} schema budgetSchema to be used for validation if necessary
	   * @returns {object} set of handlers for form fields
	   * to be transformed and passed to the model
	   */
	  var createModelHandlers = function createModelHandlers() {
	    var schema = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	    return {
	      /**
	       * @name id
	       *
	       * @type {function}
	       * @description Handler for id property of the model
	       * @param {object} formObj form state object
	       * @return {string} id if it's defined
	       */
	      id: function id(formObj) {
	        return formObj.id;
	      },
	
	      /**
	       * @name budgetName
	       *
	       * @type {function}
	       * @description Handler for budgetName property of the model
	       * @param {object} formObj form state object
	       * @return {string} budget name if it's defined, category name if not
	       */
	      budgetName: function budgetName(formObj) {
	        return isRequired(schema.budgetName) && !isDefined(formObj.budgetName) ? formObj.categoryName : formObj.budgetName;
	      },
	
	      /**
	       * @name budgetName
	       *
	       * @type {function}
	       * @description Handler for categoryName property of the model
	       * @throws {Error} if category is not defined
	       * @param {object} formObj form state object
	       * @returns {string} category name from the form state
	       */
	      categoryName: function categoryName(formObj) {
	        if (!isDefined(formObj.categoryName)) {
	          throw new Error(_constants.ErrorCodes.EMPTY_CATEGORY);
	        }
	        return formObj.categoryName;
	      },
	
	      /**
	       * @name period
	       *
	       * @type {function}
	       * @description Handler for period property of the model
	       * @param {object} formObj form state object
	       * @returns {object} period from the form state or
	       * defaultPeriod constant defined in the extension
	       */
	      period: function period(formObj) {
	        return isDefined(formObj.period) ? formObj.period : _constants.DefaultPeriod;
	      },
	
	      /**
	       * @name spendingLimit
	       *
	       * @type {function}
	       * @description Handler for spenidng limit
	       * @throws {Error} if limit is not an integer greater then 0
	       * @param {object} formObj form state object
	       * @returns {object} limit object with an amount and currency
	       * if currecy is not defined default one is used.
	       */
	      spendingLimit: function spendingLimit(formObj) {
	        var limit = formObj.spendingLimit || {};
	        // map form properties into properties expected by currency input
	        Object.assign(limit, {
	          value: limit.amount,
	          currency: limit.currencyCode
	        });
	
	        if (shouldHaveCurrencyCode(schema, 'spendingLimit') && !hasCurrencyCode(limit)) {
	          Object.assign(limit, { currencyCode: preferences.defaultCurrency });
	        }
	
	        // get amount from currency input component object
	        var amount = parseInt(limit.whole, 10);
	        if (!amount || amount <= 0) {
	          throw new Error(_constants.ErrorCodes.INSUFFICIENT_LIMIT);
	        }
	
	        Object.assign(limit, { amount: amount });
	        return { currencyCode: limit.currencyCode, amount: amount };
	      }
	    };
	  };
	
	  /**
	   * @name isStateValid
	   *
	   * @type {function}
	   * @inner
	   * @description Checks validity of the state object
	   * @param {object} formObj form state object
	   * @returns {boolean}
	   */
	  var isStateValid = function isStateValid(formObj) {
	    try {
	      createModelHandlers(budgetSchema()).spendingLimit(formObj);
	      return true;
	    } catch (_) {
	      return false;
	    }
	  };
	
	  return {
	    /**
	     * @name initEditingForm
	     *
	     * @type {function}
	     * @description Sets initial step on form init
	     * @param {object} formObj form state object
	     */
	    initEditingForm: function initEditingForm(formObj) {
	      isFormDirty = false;
	      Object.assign(formObj, { currentStepIndex: 0 });
	    },
	
	    /**
	     * @name cancelConfirmation
	     *
	     * @type {function}
	     * @description Cancels confirmation dialog
	     */
	    cancelConfirmation: function cancelConfirmation() {
	      isCancelConfirmationActive = false;
	      isDeleteConfirmationActive = false;
	    },
	
	    /**
	     * @name cancelEdit
	     *
	     * @type {function}
	     * @description Cancels editing form
	     * @param {?Boolean} force If set to true, check if there were some changes will be skipped.
	     * Default false, which means that, in case there were some changes, another dialog with
	     * cancel confirmation will appear
	     */
	    cancelEdit: function cancelEdit() {
	      var force = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
	
	      // check if additional confirmation is needed
	      if (!force && isFormDirty) {
	        isCancelConfirmationActive = true;
	        return;
	      }
	
	      isCancelConfirmationActive = false;
	      isBudgetFormActive = false;
	    },
	
	    /**
	     * @name onStepChange
	     *
	     * @type {function}
	     * @description Updates for state object on step change in the view
	     * @param {object} formObj form state object
	     */
	    onStepChange: function onStepChange(formObj) {
	      return function (ctrl) {
	        Object.assign(formObj, { currentStepIndex: ctrl.getCurrentIndex() });
	      };
	    },
	
	    /**
	     * @name allowUpdate
	     *
	     * @type {function}
	     * @description Checks if the form is ready (valid) for update
	     * @param {object} formObj form state object
	     * @returns {boolean}
	     */
	    allowUpdate: function allowUpdate(formObj) {
	      // preserve original state
	      var originalLimit = parseInt(formObj.spendingLimit.whole, 10);
	      if (!formObj.originalLimit) {
	        Object.assign(formObj, { originalLimit: originalLimit });
	      }
	
	      isFormDirty = originalLimit !== formObj.originalLimit;
	      return isFormDirty && isStateValid(formObj);
	    },
	
	    /**
	     * @name allowNext
	     *
	     * @type {function}
	     * @description Checks validity of current step
	     * @param {object} formObj form state object
	     * @returns {boolean}
	     */
	    allowNext: function allowNext(formObj) {
	      if ((formObj.currentStepIndex || 0) < 1) {
	        return formObj.categoryName !== undefined;
	      }
	
	      return isStateValid(formObj);
	    },
	
	    /**
	     * @name budgets
	     *
	     * @type {function}
	     * @description Returns budgets array
	     * @returns {array} budget items array
	     */
	    get budgets() {
	      return currentBudgets();
	    },
	
	    /**
	     * @name isEmpty
	     *
	     * @type {function}
	     * @description A getter to define if budgets array is empty
	     * @returns {boolean} true if budgets array is empty
	     */
	    get isEmpty() {
	      return this.budgets && !this.budgets.length;
	    },
	
	    /**
	     * @name defaultCurrency
	     *
	     * @type {function}
	     * @description Returns extension specific preference which
	     * defines default currency
	     * @returns {string} Default currency code
	     */
	    get defaultCurrency() {
	      return preferences.defaultCurrency;
	    },
	
	    /**
	     * @name safeZoneLimit
	     *
	     * @type {function}
	     * @description Returns extension specific preference which
	     * defines at which point budgetCard bar should change a color
	     * @returns {number} 0-100 number defining breakpoint for budget items
	     */
	    get safeZoneLimit() {
	      return preferences.safeZoneLimit;
	    },
	
	    /**
	     * @name isClockwisefillDirection
	     *
	     * @type {function}
	     * @description Returns extension specific preference which
	     * defines if a budget ui component should be filled in or emptied out
	     * @returns {boolean} true in case it's a clockwise direction
	     */
	    get isClockwisefillDirection() {
	      return preferences.fillDirection;
	    },
	
	    /**
	     * @name defaultPeriod
	     *
	     * @type {function}
	     * @description Returns default budget period
	     * @returns {{startDate: Date, endDate:Date}}
	     */
	    get defaultPeriod() {
	      return _constants.DefaultPeriod;
	    },
	
	    /**
	     * @name listTemplate
	     *
	     * @type {function}
	     * @description Returns listTemplate id
	     * @returns {string} returns list template id
	     */
	    get listTemplate() {
	      return templates.list;
	    },
	
	    /**
	     * @name formCreateTemplate
	     *
	     * @type {function}
	     * @description Returns formCreate id
	     * @returns {string} Create form template id
	     */
	    get formCreateTemplate() {
	      return templates.formCreate;
	    },
	
	    /**
	     * @name formLimitTemplate
	     *
	     * @type {function}
	     * @description Returns formUpdate template id
	     * @returns {string} Update form template id
	     */
	    get formUpdateTemplate() {
	      return templates.formUpdate;
	    },
	
	    /**
	     * @name isFormActive
	     *
	     * @type {function}
	     * @description A getter of the modal window state
	     * @returns {boolean} true if form is active
	     */
	    get isFormActive() {
	      return isBudgetFormActive;
	    },
	
	    /**
	     * @name isFormActive
	     *
	     * @type {function}
	     * @description A setter for isFormActive, which is using router
	     * to close the form
	     * @param {boolean} value - new value of the state,
	     * being used to define if we shall navigate to list
	     */
	    set isFormActive(value) {
	      isBudgetFormActive = !!value;
	    },
	
	    /**
	     * @name isFormDirty
	     *
	     * @type {function}
	     * @description A getter of the state of the form
	     * @returns {boolean} true if form is changed
	     */
	    get isFormDirty() {
	      return isFormDirty;
	    },
	
	    /**
	     * @name isFormActive
	     *
	     * @type {function}
	     * @description A setter for form state
	     * @param {boolean} value new value of the state,
	     * being used to define if the form data has been changed
	     */
	    set isFormDirty(value) {
	      isFormDirty = !!value;
	    },
	
	    /**
	     * @name isConfirmationActive
	     *
	     * @type {function}
	     * @description A getter of the confirmation modal window state
	     * @returns {boolean} true if confirmation modal is active
	     */
	    get isConfirmationActive() {
	      return isCancelConfirmationActive;
	    },
	
	    /**
	     * @name isConfirmationActive
	     *
	     * @type {function}
	     * @description A setter for the confirmation modal window state
	     * @param {boolean} value new value of the state,
	     * which will change confirmation modal apperance
	     */
	    set isConfirmationActive(value) {
	      isCancelConfirmationActive = !!value;
	    },
	
	    /**
	     * @name selectedBudget
	     *
	     * @type {function}
	     * @description A getter of the budget item selected to be deleted
	     * @returns {object}
	     */
	    get selectedBudget() {
	      return selectedBudget;
	    },
	
	    /**
	     * @name isDeleteConfirmationActive
	     *
	     * @type {function}
	     * @description A getter of the delete confirmation modal window state
	     * @returns {boolean} true if delete confirmation modal is active
	     */
	    get isDeleteConfirmationActive() {
	      return isDeleteConfirmationActive;
	    },
	
	    /**
	     * @name isDeleteConfirmationActive
	     *
	     * @type {function}
	     * @description A setter for the delete confirmation modal window state
	     * @param {boolean} value new value of the state,
	     * which will change delete confirmation modal apperance
	     */
	    set isDeleteConfirmationActive(value) {
	      isDeleteConfirmationActive = !!value;
	    },
	
	    /**
	     * @name handleChanging
	     *
	     * @type {function}
	     * @description Function to initiate create/edit action
	     * @param {function} changeMethod function to be called
	     * @param {any} item to be passed to the saving function
	     * @returns {any} changing method result
	     */
	    handleChanging: function handleChanging(changeMethod, item) {
	      isBudgetFormActive = true;
	      return changeMethod(item);
	    },
	
	    /**
	     * @name handleSaving
	     *
	     * @type {function}
	     * @description Handler for saving an item
	     * @param {function} saveMethod save method to be called
	     * @param {object} formObj - an item to be transformed and saved
	     * @returns {any} saving method result
	     */
	    handleSaving: function handleSaving(saveMethod, formObj) {
	      isBudgetFormActive = false;
	      return saveMethod(this.formToModelFields(formObj));
	    },
	
	    /**
	     * @name startDelete
	     *
	     * @type {function}
	     * @description Function that prepares everything for budget deletion
	     * and triggers confirmation dialog
	     * @param {function} method function to be called if delete is confirmed
	     * @param {any} item to be passed to the delete function
	     */
	    startDelete: function startDelete(method, item) {
	      isDeleteConfirmationActive = true;
	      selectedBudget = item;
	      deleteMethod = method;
	    },
	
	    /**
	     * @name handleDelete
	     *
	     * @type {function}
	     * @description Function to initiate delete action
	     * @returns {any} delete method result
	     */
	    handleDelete: function handleDelete() {
	      isDeleteConfirmationActive = false;
	      return deleteMethod(selectedBudget);
	    },
	
	    /**
	     * @name transactionsCategoryNames
	     *
	     * @type {function}
	     * @description Returns categories names being provided by data module schema
	     * @returns {Array<string>} categories array
	     */
	    get transactionsCategoryNames() {
	      return categoryNamesOutOfSchema();
	    },
	
	    /**
	     * @name isPersentageUsed
	     *
	     * @type {function}
	     * @description Returns extension specific preference which
	     * defines if a percentage is used to show spent amount
	     * @returns {boolean} true if percentage value is shown
	     */
	    get isPersentageUsed() {
	      return preferences.percentage;
	    },
	
	    /**
	     * @name currentDate
	     *
	     * @type {function}
	     * @description Returns the current date
	     * @returns {object} new Date object
	     */
	    get currentDate() {
	      return new Date();
	    },
	
	    /**
	     * @name notificationDismissTime
	     *
	     * @type {function}
	     * @description Returns notifications dismissing time preference value
	     * @returns {number} time to dismiss notification
	     */
	    get notificationDismissTime() {
	      return preferences.notificationDismissTime;
	    },
	
	    /**
	     * @name setChartColor
	     *
	     * @type {function}
	     * @description A helper method used to map the chart percentage to the
	     * chart color level
	     * @param {number} percentage - percentage of the chart
	     * @returns {string} chart color level
	     */
	    setChartColor: function setChartColor(percentage) {
	      if (percentage < 80 && percentage >= 0) {
	        return _constants.BudgetStatus.SUCCESS;
	      }
	      if (percentage >= 80 && percentage < 100) {
	        return _constants.BudgetStatus.WARNING;
	      }
	      return _constants.BudgetStatus.DANGER;
	    },
	
	    /**
	     * @name categorySelectHandler
	     *
	     * @type {function}
	     * @description A helper method used to handle category selection
	     * by clicking on surrounding wrapper
	     * @param {string} category New category
	     * @param {object} formObj form state object
	     */
	    categorySelectHandler: function categorySelectHandler(category, formObj) {
	      isFormDirty = true;
	      Object.assign(formObj, { categoryName: category });
	    },
	
	    /**
	     * @name formToModelFields
	     *
	     * @type {function}
	     * @description A function to process form object before it gets passed to the model.
	     * @param {object} form - item to be transformed
	     * @returns {object} modelItem
	     */
	    formToModelFields: function formToModelFields() {
	      var form = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	
	      var modelHandlers = createModelHandlers(budgetSchema());
	      try {
	        return Object.keys(modelHandlers).reduce(function (acc, prop) {
	          var transformedValue = modelHandlers[prop](form);
	          return isDefined(transformedValue) ? Object.assign(acc, _defineProperty({}, prop, transformedValue)) : acc;
	        }, {});
	      } catch (err) {
	        handleExtensionError(err);
	        return null;
	      }
	    },
	
	    /**
	     * @name shiftNotification
	     *
	     * @type {function}
	     * @description Helper to remove notification from the list
	     * @param {object} notification
	     * @param {array} notificationsList
	     */
	    shiftNotification: function shiftNotification() {
	      var notifications = getNotifications();
	      notifications.shift();
	      updateNotifications(notifications);
	    },
	
	    /**
	     * @name getSymbol
	     *
	     * @type {function}
	     * @description Converts currency code into currency symbol
	     * @param {string} code
	     * @returns {string}
	     */
	    getSymbol: function getSymbol(code) {
	      return (getRule(code) || {}).symbol || code;
	    },
	    getIconClass: getIconClass
	  };
	};

/***/ }),
/* 4 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * @name Properties
	 *
	 * @type {object}
	 * @description
	 * Set of extension specific properties constants which contains
	 * pairs of key and default values where key is the property
	 * name and the defaultValue is it's value by default
	 */
	var Preferences = exports.Preferences = {
	  /**
	   * @name BUDGET_CARD_FILL_DIRECTION
	   *
	   * @type {object}
	   * @description Property which defines a direction of filling the budgets
	   * ui component (is it clockwise or anti-clockwise)
	   */
	  BUDGET_CARD_FILL_DIRECTION: {
	    key: 'budgetCard.fillDirection',
	    defaultValue: false
	  },
	  /**
	   * @name BUDGET_CARD_VALUES_DISPLAY_TYPE
	   *
	   * @type {object}
	   * @description Property which defines if for spent value persentage
	   * or actual monetary amount is used
	   */
	  BUDGET_CARD_VALUES_DISPLAY_TYPE: {
	    key: 'budgetCard.percentage',
	    defaultValue: false
	  },
	  /**
	   * @name BUDGET_CARD_SAFE_ZONE_LIMIT
	   *
	   * @type {object}
	   * @description Property defines a percentage (0-100) from which the bar of a
	   * budget card changes color (goes out of safe zone and e.g. color
	   * is changed from green to yellow)
	   */
	  BUDGET_CARD_SAFE_ZONE_LIMIT: {
	    key: 'budgetCard.safeZoneLimit',
	    defaultValue: 80
	  },
	
	  /**
	   * @name BUDGETS_DEFAULT_CURRENCY_CODE
	   *
	   * @type {object}
	   * @deprecated
	   * @description Temporary created property to store default currency for budgets create.
	   * Will be replaced by more suitable way of getting it.
	   */
	  BUDGETS_DEFAULT_CURRENCY_CODE: {
	    key: 'budgets.currency.default',
	    defaultValue: 'EUR'
	  },
	  /**
	   * @name BUDGETS_DEFAULT_CURRENCIES_LIST
	   *
	   * @type {object}
	   * @deprecated
	   * @description Temporary created property to store avaliable currencies list.
	   * Will be replaced by more suitable way of getting them.
	   */
	  BUDGETS_DEFAULT_CURRENCIES_LIST: {
	    key: 'budgets.currency.avaliable',
	    defaultValue: ['EUR', 'USD']
	  },
	
	  /**
	   * @name NOTIFICATION_DISMISS_TIME
	   *
	   * @type {object}
	   * @description notifications timeout in seconds
	   */
	  NOTIFICATION_DISMISS_TIME: {
	    key: 'budgets.notifications.dismissAfter',
	    defaultValue: 3
	  }
	};
	
	/**
	 * @name TemplateIds
	 * @description
	 * A set of constants to define used template id`s
	 *
	 * @type {object}
	 */
	var TemplateIds = exports.TemplateIds = {
	  LIST_TEMPLATE_ID: '#widget-bb-budget-ng/list.html',
	  FORM_CREATE_TEMPLATE_ID: '#widget-bb-budget-ng/form-create.html',
	  FORM_UPDATE_TEMPLATE_ID: '#widget-bb-budget-ng/form-update.html'
	};
	
	/**
	 * @name ClassNames
	 * @description
	 * A set of constants which defines class names used
	 * within the extension
	 *
	 * @type {object}
	 */
	var ClassNames = exports.ClassNames = {
	  CATEGORY_CLASSNAME_PREFIX: 'bb-transaction-category bb-transaction-category-',
	  UNCATEGORIZED: 'uncategorized'
	};
	
	/**
	 * @name CURRENT_DATE_OBJECT
	 *
	 * @type {Date}
	 * @description Current date object
	 * @inner
	 */
	var CURRENT_DATE_OBJECT = new Date();
	
	/**
	 * @name CURRENT_YEAR
	 *
	 * @type {number}
	 * @description Current year
	 * @inner
	 */
	var CURRENT_YEAR = CURRENT_DATE_OBJECT.getFullYear();
	
	/**
	 * @name CURRENT_MONTH
	 *
	 * @type {number}
	 * @description Current month
	 * @inner
	 */
	var CURRENT_MONTH = CURRENT_DATE_OBJECT.getMonth();
	
	/**
	 * @name DefaultPeriod
	 *
	 * @type {object}
	 * @description A set of constants for default budgeting period
	 */
	var DefaultPeriod = exports.DefaultPeriod = {
	
	  /**
	   * @name DEFAULT_PERIOD_START
	   *
	   * @type {number}
	   * @description First day in the current month
	   */
	  startDate: new Date(CURRENT_YEAR, CURRENT_MONTH, 1),
	
	  /**
	   * @name DEFAULT_PERIOD_END
	   *
	   * @type {number}
	   * @description Last day in the current month
	   */
	  endDate: new Date(CURRENT_YEAR, CURRENT_MONTH + 1, 0)
	
	};
	
	/**
	 * @name BudgetStatus
	 *
	 * @type {object}
	 * @description A set of constants which defines the color level
	 * of the chart
	 */
	var BudgetStatus = exports.BudgetStatus = {
	  SUCCESS: 'success',
	  WARNING: 'warning',
	  DANGER: 'danger'
	};
	
	/**
	 * @name ErrorCodes
	 *
	 * @type {object}
	 * @description A set of constants which defines ui error codes
	 * of the extension
	 */
	var ErrorCodes = exports.ErrorCodes = {
	  EMPTY_CATEGORY: 'budget.errors.category.empty',
	  INSUFFICIENT_LIMIT: 'budget.errors.limit.insufficient',
	  CREATE_ERROR: 'budget.errors.create.error',
	  EDIT_ERROR: 'budget.errors.edit.error'
	};

/***/ }),
/* 5 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	/**
	 * @name Events
	 * @type {object}
	 *
	 * @description
	 * Event subscribtions object for the extension
	 */
	exports.default = function () {
	  return {};
	};

/***/ }),
/* 6 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_6__;

/***/ }),
/* 7 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_7__;

/***/ }),
/* 8 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_8__;

/***/ }),
/* 9 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_9__;

/***/ }),
/* 10 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_10__;

/***/ }),
/* 11 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_11__;

/***/ }),
/* 12 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_12__;

/***/ }),
/* 13 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_13__;

/***/ }),
/* 14 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_14__;

/***/ }),
/* 15 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_15__;

/***/ })
/******/ ])
});
;
//# sourceMappingURL=ext-bb-budget-ng.js.map