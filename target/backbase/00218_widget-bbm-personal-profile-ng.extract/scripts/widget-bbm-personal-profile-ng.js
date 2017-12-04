(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vendor-bb-angular"), require("lib-bb-widget-extension-ng"), require("model-bb-personal-profile-ng"), require("lib-bb-widget-ng"), require("lib-bb-event-bus-ng"), require("lib-bb-intent-ng"), require("lib-bb-storage-ng"));
	else if(typeof define === 'function' && define.amd)
		define("widget-bbm-personal-profile-ng", ["vendor-bb-angular", "lib-bb-widget-extension-ng", "model-bb-personal-profile-ng", "lib-bb-widget-ng", "lib-bb-event-bus-ng", "lib-bb-intent-ng", "lib-bb-storage-ng"], factory);
	else if(typeof exports === 'object')
		exports["widget-bbm-personal-profile-ng"] = factory(require("vendor-bb-angular"), require("lib-bb-widget-extension-ng"), require("model-bb-personal-profile-ng"), require("lib-bb-widget-ng"), require("lib-bb-event-bus-ng"), require("lib-bb-intent-ng"), require("lib-bb-storage-ng"));
	else
		root["widget-bbm-personal-profile-ng"] = factory(root["vendor-bb-angular"], root["lib-bb-widget-extension-ng"], root["model-bb-personal-profile-ng"], root["lib-bb-widget-ng"], root["lib-bb-event-bus-ng"], root["lib-bb-intent-ng"], root["lib-bb-storage-ng"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_19__, __WEBPACK_EXTERNAL_MODULE_24__, __WEBPACK_EXTERNAL_MODULE_25__, __WEBPACK_EXTERNAL_MODULE_26__, __WEBPACK_EXTERNAL_MODULE_27__, __WEBPACK_EXTERNAL_MODULE_28__, __WEBPACK_EXTERNAL_MODULE_32__) {
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

	module.exports = __webpack_require__(31);

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
/* 19 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_19__;

/***/ }),
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
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
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_27__;

/***/ }),
/* 28 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_28__;

/***/ }),
/* 29 */,
/* 30 */,
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _vendorBbAngular = __webpack_require__(19);
	
	var _vendorBbAngular2 = _interopRequireDefault(_vendorBbAngular);
	
	var _libBbWidgetExtensionNg = __webpack_require__(24);
	
	var _libBbWidgetExtensionNg2 = _interopRequireDefault(_libBbWidgetExtensionNg);
	
	var _libBbWidgetNg = __webpack_require__(26);
	
	var _libBbWidgetNg2 = _interopRequireDefault(_libBbWidgetNg);
	
	var _libBbEventBusNg = __webpack_require__(27);
	
	var _libBbEventBusNg2 = _interopRequireDefault(_libBbEventBusNg);
	
	var _libBbStorageNg = __webpack_require__(32);
	
	var _libBbStorageNg2 = _interopRequireDefault(_libBbStorageNg);
	
	var _libBbIntentNg = __webpack_require__(28);
	
	var _libBbIntentNg2 = _interopRequireDefault(_libBbIntentNg);
	
	var _modelBbPersonalProfileNg = __webpack_require__(25);
	
	var _modelBbPersonalProfileNg2 = _interopRequireDefault(_modelBbPersonalProfileNg);
	
	var _details = __webpack_require__(33);
	
	var _details2 = _interopRequireDefault(_details);
	
	var _form = __webpack_require__(35);
	
	var _form2 = _interopRequireDefault(_form);
	
	var _constants = __webpack_require__(34);
	
	var _viewModel = __webpack_require__(36);
	
	var _viewModel2 = _interopRequireDefault(_viewModel);
	
	var _defaultHooks = __webpack_require__(37);
	
	var defaultHooks = _interopRequireWildcard(_defaultHooks);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * @module widget-bbm-personal-profile-ng
	 *
	 * @description
	 * Mobile Personal Profile widget.
	 *
	 * @borrows module:model-bb-personal-profile-ng.User as User
	 * @borrows module:lib-bb-model-errors.ModelError as ModelError
	 *
	 * @example
	 *  <div ng-controller="DetailsController as $ctrl">
	 *    <ul>
	 *       <li>{{ $ctrl.state.user.firstName }}</li>
	 *    </ul>
	 *  </div>
	 */
	
	var viewModelKey = _constants.MODULE_KEY + ':viewModel';
	var hooksKey = _constants.MODULE_KEY + ':hooks';
	
	exports.default = _vendorBbAngular2.default.module(_constants.MODULE_KEY, [_modelBbPersonalProfileNg2.default, _libBbWidgetNg2.default, _libBbEventBusNg2.default, _libBbStorageNg2.default, _libBbIntentNg2.default]).factory(viewModelKey, [
	// dependencies to inject
	
	// dependencies to inject
	
	// dependencies to inject
	_modelBbPersonalProfileNg.modelPersonalProfileKey, _libBbStorageNg.bbStorageServiceKey,
	
	/* into */
	_viewModel2.default]).factory(hooksKey, (0, _libBbWidgetExtensionNg2.default)(defaultHooks)).controller(_constants.DETAILS_CONTROLLER_KEY, [_modelBbPersonalProfileNg.modelPersonalProfileKey, hooksKey, _libBbEventBusNg.eventBusKey, _libBbWidgetNg.widgetKey, _libBbIntentNg.bbIntentKey, viewModelKey,
	
	/* into */
	_details2.default]).controller(_constants.FORM_CONTROLLER_KEY, [_modelBbPersonalProfileNg.modelPersonalProfileKey, hooksKey, _libBbEventBusNg.eventBusKey, _libBbWidgetNg.widgetKey, _libBbIntentNg.bbIntentKey, viewModelKey,
	
	/* into */
	_form2.default]).name;

/***/ }),
/* 32 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_32__;

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = DetailsController;
	
	var _constants = __webpack_require__(34);
	
	function DetailsController(model, hooks, bus, widget, bbIntent, viewModel) {
	  /**
	   * @name DetailsController
	   * @ngkey DetailsController
	   *
	   * @description
	   * Mobile personal profile details controller.
	   *
	   * @type {Object}
	   */
	  var ctrl = this;
	
	  /**
	   * @description
	   * A set of intents that the Details controller uses or handles.
	   *
	   * @name intents
	   * @type {Object}
	   * @inner
	   */
	  var intents = {};
	
	  /**
	   * @description
	   * Handles the intent to show the form to add a phone
	   *
	   * @name DetailsController#showAddPhoneForm
	   * @type {function}
	   */
	  var showAddPhoneForm = function showAddPhoneForm() {
	    viewModel.save().then(function () {
	      intents.showAddPhoneForm();
	    });
	  };
	
	  /**
	   * @description
	   * Handles the intent to show the form to add an email
	   *
	   * @name DetailsController#showAddEmailForm
	   * @type {function}
	   */
	  var showAddEmailForm = function showAddEmailForm() {
	    viewModel.save().then(function () {
	      intents.showAddEmailForm();
	    });
	  };
	
	  /**
	   * @description
	   * Handles the intent to show the form to edit a phone
	   *
	   * @name DetailsController#showEditPhoneForm
	   * @type {function}
	   * @param {number} index - position of a phone in the user phone's list
	   */
	  var showEditPhoneForm = function showEditPhoneForm(index) {
	    viewModel.selectPhoneByIndex(index);
	    viewModel.save().then(function () {
	      intents.showEditPhoneForm();
	    });
	  };
	
	  /**
	   * @description
	   * Handles the intent to show the form to edit an email
	   *
	   * @name DetailsController#showEditEmailForm
	   * @type {function}
	   * @param {number} index - position of an email in the user email's list
	   */
	  var showEditEmailForm = function showEditEmailForm(index) {
	    viewModel.selectEmailByIndex(index);
	    viewModel.save().then(function () {
	      intents.showEditEmailForm();
	    });
	  };
	
	  /**
	   * @description
	   * Loads the user profile.
	   *
	   * @name DetailsController#loadUser
	   * @type {function}
	   *
	   * @returns {Promise<module:model-bb-personal-profile-ng.UserProfile>}
	   */
	  var loadUser = function loadUser() {
	    viewModel.setUserLoading(true);
	
	    return model.loadUsersProfile().then(hooks.processUser).then(function (user) {
	      viewModel.setUserLoading(false);
	      viewModel.setUserError(null);
	      viewModel.setUser(user);
	
	      return user;
	    }).catch(function (error) {
	      viewModel.setUserError(error);
	      viewModel.setUserLoading(false);
	
	      throw error;
	    });
	  };
	
	  /**
	   * @description
	   * AngularJS Lifecycle hook used to initialize the controller.
	   *
	   * @name DetailsController#$onInit
	   * @type {function}
	   *
	   * @fires cxp.item.loaded
	   * @fires bb.item.loaded
	   */
	  var $onInit = function $onInit() {
	    bus.publish(_constants.Event.CXP_ITEM_LOADED, {
	      id: widget.getId()
	    });
	
	    bus.publish(_constants.Event.BB_ITEM_LOADED, {
	      id: widget.getId()
	    });
	
	    return loadUser();
	  };
	
	  /**
	   * @description
	   * The intent to show the personal profile form to add an email.
	   *
	   * @name intents#showAddEmailForm
	   * @type {function}
	   * @inner
	   */
	  intents.showAddEmailForm = bbIntent.create(_constants.Intent.SHOW_ADD_EMAIL_FORM);
	
	  /**
	   * @description
	   * The intent to show the personal profile form to add a phone.
	   *
	   * @name intents#showAddPhoneForm
	   * @type {function}
	   * @inner
	   */
	  intents.showAddPhoneForm = bbIntent.create(_constants.Intent.SHOW_ADD_PHONE_FORM);
	
	  /**
	   * @description
	   * The intent to show the personal profile form to edit an email.
	   *
	   * @name intents#showEditEmailForm
	   * @type {function}
	   * @inner
	   */
	  intents.showEditEmailForm = bbIntent.create(_constants.Intent.SHOW_EDIT_EMAIL_FORM);
	
	  /**
	   * @description
	   * The intent to show the personal profile from of editting a phone.
	   *
	   * @name intents#showEditPhoneForm
	   * @type {function}
	   * @inner
	   */
	  intents.showEditPhoneForm = bbIntent.create(_constants.Intent.SHOW_EDIT_PHONE_FORM);
	
	  bbIntent.handle(_constants.Intent.SHOW_PERSONAL_PROFILE_DETAILS, function () {
	    viewModel.fetch();
	  });
	
	  bbIntent.init(function () {});
	
	  Object.defineProperty(ctrl, 'state', {
	    get: function get() {
	      return viewModel.state;
	    }
	  });
	
	  Object.assign(ctrl, {
	    $onInit: $onInit,
	    loadUser: loadUser,
	    showAddEmailForm: showAddEmailForm,
	    showAddPhoneForm: showAddPhoneForm,
	    showEditEmailForm: showEditEmailForm,
	    showEditPhoneForm: showEditPhoneForm
	  });
	}

/***/ }),
/* 34 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var MODULE_KEY = exports.MODULE_KEY = 'widget-bbm-personal-profile-ng';
	
	var DETAILS_CONTROLLER_KEY = exports.DETAILS_CONTROLLER_KEY = 'DetailsController';
	var FORM_CONTROLLER_KEY = exports.FORM_CONTROLLER_KEY = 'FormController';
	
	/**
	 * Storage keys
	 * @type {Object}
	 */
	var StorageKey = exports.StorageKey = {
	  PERSONAL_PROFILE_STATE: 'widget-bbm-personal-profile-ng:state'
	};
	
	/**
	 * Pubsub events
	 * @type {Object}
	 */
	var Event = exports.Event = {
	  CXP_ITEM_LOADED: 'cxp.item.loaded',
	  BB_ITEM_LOADED: 'bb.item.loaded',
	
	  PHONE_DELETE_START: 'bb.event.personalProfile.phone.delete.start',
	  PHONE_DELETE_DONE: 'bb.event.personalProfile.phone.delete.done',
	  PHONE_DELETE_FAILED: 'bb.event.personalProfile.phone.delete.failed',
	
	  PHONE_CREATE_START: 'bb.event.personalProfile.phone.create.start',
	  PHONE_CREATE_DONE: 'bb.event.personalProfile.phone.create.done',
	  PHONE_CREATE_FAILED: 'bb.event.personalProfile.phone.create.failed',
	
	  PHONE_EDIT_START: 'bb.event.personalProfile.phone.edit.start',
	  PHONE_EDIT_DONE: 'bb.event.personalProfile.phone.edit.done',
	  PHONE_EDIT_FAILED: 'bb.event.personalProfile.phone.edit.failed',
	
	  EMAIL_DELETE_START: 'bb.event.personalProfile.email.delete.start',
	  EMAIL_DELETE_DONE: 'bb.event.personalProfile.email.delete.done',
	  EMAIL_DELETE_FAILED: 'bb.event.personalProfile.email.delete.failed',
	
	  EMAIL_CREATE_START: 'bb.event.personalProfile.email.create.start',
	  EMAIL_CREATE_DONE: 'bb.event.personalProfile.email.create.done',
	  EMAIL_CREATE_FAILED: 'bb.event.personalProfile.email.create.failed',
	
	  EMAIL_EDIT_START: 'bb.event.personalProfile.email.edit.start',
	  EMAIL_EDIT_DONE: 'bb.event.personalProfile.email.edit.done',
	  EMAIL_EDIT_FAILED: 'bb.event.personalProfile.email.edit.failed'
	};
	
	/**
	 * Intent
	 * @type {Object}
	 */
	var Intent = exports.Intent = {
	  SHOW_PERSONAL_PROFILE_DETAILS: 'intent.bb.personalProfile.details.show',
	  SHOW_EDIT_PHONE_FORM: 'intent.bb.personalProfile.phone.edit',
	  SHOW_EDIT_EMAIL_FORM: 'intent.bb.personalProfile.email.edit',
	  SHOW_ADD_PHONE_FORM: 'intent.bb.personalProfile.phone.add',
	  SHOW_ADD_EMAIL_FORM: 'intent.bb.personalProfile.email.add'
	};

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = FormController;
	
	var _constants = __webpack_require__(34);
	
	function FormController(model, hooks, bus, widget, bbIntent, viewModel) {
	  /**
	   * @name FormController
	   * @ngkey FormController
	   *
	   * @description
	   * Mobile personal profile form controller.
	   *
	   * @type {Object}
	   */
	  var ctrl = this;
	
	  /**
	   * @description
	   * A set of the intents that the Form controller uses or handles.
	   *
	   * @name intents
	   * @type {Object}
	   * @inner
	   */
	  var intents = {};
	
	  /**
	   * @description
	   * Initializes the form for creating a phone.
	   *
	   * @name FormController#initializeAddPhoneFormState
	   * @type {function}
	   * @inner
	   */
	  var initializeAddPhoneFormState = function initializeAddPhoneFormState() {
	    var phone = {
	      value: null,
	      primary: false
	    };
	
	    viewModel.setFormPhoneState(phone);
	  };
	
	  /**
	   * @description
	   * Initializes the form from creating an email.
	   *
	   * @name FormController#initializeAddEmailFormState
	   * @type {function}
	   * @inner
	   */
	  var initializeAddEmailFormState = function initializeAddEmailFormState() {
	    var email = {
	      value: null,
	      primary: false
	    };
	
	    viewModel.setFormEmailState(email);
	  };
	
	  /**
	   * @description
	   * Sets up the form for editig a phone.
	   *
	   * @name FormController#setupEditPhoneFormState
	   * @type {function}
	   * @inner
	   */
	  var setupEditPhoneFormState = function setupEditPhoneFormState() {
	    var _viewModel$getSelecte = viewModel.getSelectedPhone(),
	        index = _viewModel$getSelecte.index;
	
	    var user = viewModel.getUserData();
	    var phone = angular.copy(user.phones[index]);
	
	    viewModel.setFormPhoneState(Object.assign({}, phone));
	  };
	
	  /**
	   * @description
	   * Sets up the form for editin an email.
	   *
	   * @name FormController#setupEditEmailFormState
	   * @type {function}
	   * @inner
	   */
	  var setupEditEmailFormState = function setupEditEmailFormState() {
	    var _viewModel$getSelecte2 = viewModel.getSelectedEmail(),
	        index = _viewModel$getSelecte2.index;
	
	    var user = viewModel.getUserData();
	    var email = angular.copy(user.emails[index]);
	
	    viewModel.setFormEmailState(Object.assign({}, email));
	  };
	
	  /**
	   * @description
	   * Resets the selected phone if exists
	   *
	   * @name FormController#resetSelectedPhoneIfNeeded
	   * @type {function}
	   * @inner
	   */
	  var resetSelectedPhoneIfNeeded = function resetSelectedPhoneIfNeeded() {
	    if (viewModel.isPhoneSelected()) {
	      viewModel.resetSelectedPhone();
	    }
	  };
	
	  /**
	   * @description
	   * Resets the selected email if exists
	   *
	   * @name FormController#resetSelectedEmailIfNeeded
	   * @type {function}
	   * @inner
	   */
	  var resetSelectedEmailIfNeeded = function resetSelectedEmailIfNeeded() {
	    if (viewModel.isEmailSelected()) {
	      viewModel.resetSelectedEmail();
	    }
	  };
	
	  /**
	   * @description
	   * Updates a user
	   *
	   * @name FormController#updateUser
	   * @type {function}
	   * @param {module:model-bb-personal-profile-ng.UserProfile} user
	   *
	   * @returns {Promise<module:model-bb-personal-profile-ng.UserProfile>}
	   * @inner
	   */
	  var updateUser = function updateUser(user) {
	    viewModel.setFormLoading(true);
	
	    return model.updateUsersProfile(user).then(function (updatedUser) {
	      viewModel.setUser(updatedUser);
	      viewModel.setFormLoading(false);
	      viewModel.setFormError(null);
	
	      return updatedUser;
	    }).catch(function (error) {
	      viewModel.setFormLoading(false);
	      viewModel.setFormError(error);
	
	      throw error;
	    });
	  };
	
	  /**
	   * @description
	   * Creates a user email
	   *
	   * @name FormController#createEmail
	   * @type {function}
	   * @param {module:model-bb-personal-profile-ng.Email} email
	   *
	   * @returns {Promise<module:model-bb-personal-profile-ng.UserProfile>}
	   * @inner
	   */
	  var createEmail = function createEmail(email) {
	    var user = angular.copy(viewModel.getUserData());
	    user.emails.push(email);
	
	    bus.publish(_constants.Event.EMAIL_CREATE_START);
	
	    return updateUser(user).then(function (updatedUser) {
	      bus.publish(_constants.Event.EMAIL_CREATE_DONE, { updatedUser: updatedUser });
	
	      viewModel.save().then(function () {
	        intents.showPersonalProfileDetails();
	      });
	    }).catch(function (error) {
	      bus.publish(_constants.Event.EMAIL_CREATE_FAILED, { error: error });
	
	      throw error;
	    });
	  };
	
	  /**
	   * @description
	   * Edits user's emails
	   *
	   * @name FormController#editEmail
	   * @type {function}
	   * @param {module:model-bb-personal-profile-ng.Email} email
	   *
	   * @returns {Promise<module:model-bb-personal-profile-ng.UserProfile>}
	   * @inner
	   */
	  var editEmail = function editEmail(email) {
	    var user = angular.copy(viewModel.getUserData());
	
	    var _viewModel$getSelecte3 = viewModel.getSelectedEmail(),
	        index = _viewModel$getSelecte3.index;
	
	    user.emails.splice(index, 1, email);
	
	    bus.publish(_constants.Event.EMAIL_EDIT_START);
	
	    return updateUser(user).then(function (updatedUser) {
	      bus.publish(_constants.Event.EMAIL_EDIT_DONE, { updatedUser: updatedUser });
	
	      viewModel.save().then(function () {
	        intents.showPersonalProfileDetails();
	      });
	    }).catch(function (error) {
	      bus.publish(_constants.Event.EMAIL_EDIT_FAILED, { error: error });
	
	      throw error;
	    });
	  };
	
	  /**
	   * @description
	   * Updates user's emails
	   *
	   * @name FormController#updateUserEmail
	   * @type {function}
	   */
	  var updateUserEmail = function updateUserEmail() {
	    var _viewModel$getFormDat = viewModel.getFormData(),
	        email = _viewModel$getFormDat.email;
	
	    return viewModel.isEmailSelected() ? editEmail(email) : createEmail(email);
	  };
	
	  /**
	   * @description
	   * Creates a user phone
	   *
	   * @name FormController#createPhone
	   * @type {function}
	   * @param {module:model-bb-personal-profile-ng.Phone} phone
	   *
	   * @returns {Promise<module:model-bb-personal-profile-ng.UserProfile>}
	   * @inner
	   */
	  var createPhone = function createPhone(phone) {
	    var user = angular.copy(viewModel.getUserData());
	    user.phones.push(phone);
	
	    bus.publish(_constants.Event.PHONE_CREATE_START);
	
	    return updateUser(user).then(function (updatedUser) {
	      bus.publish(_constants.Event.PHONE_CREATE_DONE, { updatedUser: updatedUser });
	
	      viewModel.save().then(function () {
	        intents.showPersonalProfileDetails();
	      });
	    }).catch(function (error) {
	      bus.publish(_constants.Event.PHONE_CREATE_FAILED, { error: error });
	
	      throw error;
	    });
	  };
	
	  /**
	   * @description
	   * Edits user's phones
	   *
	   * @name FormController#editPhone
	   * @type {function}
	   * @param {module:model-bb-personal-profile-ng.Phone} phone
	   *
	   * @returns {Promise<module:model-bb-personal-profile-ng.UserProfile>}
	   * @inner
	   */
	  var editPhone = function editPhone(phone) {
	    var user = angular.copy(viewModel.getUserData());
	
	    var _viewModel$getSelecte4 = viewModel.getSelectedPhone(),
	        index = _viewModel$getSelecte4.index;
	
	    user.phones.splice(index, 1, phone);
	
	    bus.publish(_constants.Event.PHONE_EDIT_START);
	
	    return updateUser(user).then(function (updatedUser) {
	      bus.publish(_constants.Event.PHONE_EDIT_DONE, { updatedUser: updatedUser });
	
	      viewModel.save().then(function () {
	        intents.showPersonalProfileDetails();
	      });
	    }).catch(function (error) {
	      bus.publish(_constants.Event.PHONE_EDIT_FAILED, { error: error });
	
	      throw error;
	    });
	  };
	
	  /**
	   * @description
	   * Updates user's phones
	   *
	   * @name FormController#updateUserPhone
	   * @type {function}
	   */
	  var updateUserPhone = function updateUserPhone() {
	    var _viewModel$getFormDat2 = viewModel.getFormData(),
	        phone = _viewModel$getFormDat2.phone;
	
	    return viewModel.isPhoneSelected() ? editPhone(phone) : createPhone(phone);
	  };
	
	  /**
	   * @description
	   * Deletes a user phone
	   *
	   * @name FormController#deleteUserPhone
	   * @type {function}
	   *
	   * @returns {Promise<module:model-bb-personal-profile-ng.UserProfile>}
	   */
	  var deleteUserPhone = function deleteUserPhone() {
	    var _viewModel$getSelecte5 = viewModel.getSelectedPhone(),
	        index = _viewModel$getSelecte5.index;
	
	    var user = angular.copy(viewModel.getUserData());
	    user.phones.splice(index, 1);
	
	    bus.publish(_constants.Event.PHONE_DELETE_START);
	
	    return updateUser(user).then(function (updatedUser) {
	      bus.publish(_constants.Event.PHONE_DELETE_DONE, { updatedUser: updatedUser });
	
	      viewModel.save().then(function () {
	        intents.showPersonalProfileDetails();
	      });
	    }).catch(function (error) {
	      bus.publish(_constants.Event.PHONE_DELETE_FAILED, { error: error });
	
	      throw error;
	    });
	  };
	
	  /**
	   * @description
	   * Deletes a user email
	   *
	   * @name FormController#deleteUserEmail
	   * @type {function}
	   *
	   * @returns {Promise<module:model-bb-personal-profile-ng.UserProfile>}
	   */
	  var deleteUserEmail = function deleteUserEmail() {
	    var _viewModel$getSelecte6 = viewModel.getSelectedEmail(),
	        index = _viewModel$getSelecte6.index;
	
	    var user = angular.copy(viewModel.getUserData());
	    user.emails.splice(index, 1);
	
	    bus.publish(_constants.Event.EMAIL_DELETE_START);
	
	    return updateUser(user).then(function (updatedUser) {
	      bus.publish(_constants.Event.EMAIL_DELETE_DONE, { updatedUser: updatedUser });
	
	      viewModel.save().then(function () {
	        intents.showPersonalProfileDetails();
	      });
	    }).catch(function (error) {
	      bus.publish(_constants.Event.EMAIL_DELETE_FAILED, { error: error });
	
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
	   * The intent to show the personal profile details.
	   *
	   * @name intents#showPersonalProfileDetails
	   * @type {function}
	   * @inner
	   */
	  intents.showPersonalProfileDetails = bbIntent.create(_constants.Intent.SHOW_PERSONAL_PROFILE_DETAILS);
	
	  bbIntent.handle(_constants.Intent.SHOW_ADD_PHONE_FORM, function () {
	    viewModel.fetch().then(function () {
	      resetSelectedPhoneIfNeeded();
	      initializeAddPhoneFormState();
	    });
	  });
	
	  bbIntent.handle(_constants.Intent.SHOW_ADD_EMAIL_FORM, function () {
	    viewModel.fetch().then(function () {
	      resetSelectedEmailIfNeeded();
	      initializeAddEmailFormState();
	    });
	  });
	
	  bbIntent.handle(_constants.Intent.SHOW_EDIT_PHONE_FORM, function () {
	    viewModel.fetch().then(function () {
	      setupEditPhoneFormState();
	    });
	  });
	
	  bbIntent.handle(_constants.Intent.SHOW_EDIT_EMAIL_FORM, function () {
	    viewModel.fetch().then(function () {
	      setupEditEmailFormState();
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
	    updateUserEmail: updateUserEmail,
	    updateUserPhone: updateUserPhone,
	    deleteUserEmail: deleteUserEmail,
	    deleteUserPhone: deleteUserPhone
	  });
	} /* global angular */

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _constants = __webpack_require__(34);
	
	exports.default = function (model, bbStorage) {
	  var viewModel = {};
	
	  /**
	   * @description
	   * Returns the initial state of the view model.
	   *
	   * @name getInitialState
	   * @type {function}
	   *
	   * @returns {PersonalProfileView}
	   * @inner
	   */
	  var getInitialState = function getInitialState() {
	    return {
	      user: {
	        data: null,
	        loading: false,
	        error: null
	      },
	      form: {
	        data: {
	          phone: {
	            value: null,
	            primary: false
	          },
	          email: {
	            value: null,
	            primary: false
	          }
	        },
	        loading: false,
	        error: null
	      },
	      selectedPhone: {
	        index: null
	      },
	      selectedEmail: {
	        index: null
	      }
	    };
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
	   * Sets the loading state of the user.
	   *
	   * @name setUserLoading
	   * @type {function}
	   *
	   * @param {boolean} loading
	   * @inner
	   */
	  var setUserLoading = function setUserLoading(loading) {
	    setLoading(viewModel.state.user, loading);
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
	   * Sets an error state to the user with the given error.
	   *
	   * @name setUserError
	   * @type {function}
	   *
	   * @param {Error} error
	   * @inner
	   */
	  var setUserError = function setUserError(error) {
	    setError(viewModel.state.user, error);
	  };
	
	  /**
	   * @description
	   * Sets an error state to the form with the given error.
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
	   * Returns the user data.
	   *
	   * @name getUserData
	   * @type {function}
	   *
	   * @returns {module:model-bb-personal-profile-ng.UserProfile}
	   * @inner
	   */
	  var getUserData = function getUserData() {
	    return viewModel.state.user.data;
	  };
	
	  /**
	   * @description
	   * Returns the form data.
	   *
	   * @name getFormData
	   * @type {function}
	   *
	   * @returns {FormData}
	   * @inner
	   */
	  var getFormData = function getFormData() {
	    return viewModel.state.form.data;
	  };
	
	  /**
	   * @description
	   * Sets the user.
	   *
	   * @name setUser
	   * @type {function}
	   *
	   * @param {module:model-bb-personal-profile-ng.UserProfile} user
	   * @inner
	   */
	  var setUser = function setUser(user) {
	    Object.assign(viewModel.state.user, {
	      data: user
	    });
	  };
	
	  /**
	   * @description
	   * Sets the data to the phone's form.
	   *
	   * @name setFormPhoneState
	   * @type {function}
	   *
	   * @param {module:model-bb-personal-profile-ng.Phone} phone
	   * @inner
	   */
	  var setFormPhoneState = function setFormPhoneState(_ref) {
	    var value = _ref.value,
	        primary = _ref.primary;
	
	    Object.assign(viewModel.state.form.data.phone, {
	      value: value,
	      primary: primary
	    });
	  };
	
	  /**
	   * @description
	   * Sets the data to the email's form.
	   *
	   * @name setFormEmailState
	   * @type {function}
	   *
	   * @param {module:model-bb-personal-profile-ng.Email} email
	   * @inner
	   */
	  var setFormEmailState = function setFormEmailState(_ref2) {
	    var value = _ref2.value,
	        primary = _ref2.primary;
	
	    Object.assign(viewModel.state.form.data.email, {
	      value: value,
	      primary: primary
	    });
	  };
	
	  /**
	   * @description
	   * Selects the user's phone by index.
	   *
	   * @name selectPhoneByIndex
	   * @type {function}
	   *
	   * @param {number} index
	   * @inner
	   */
	  var selectPhoneByIndex = function selectPhoneByIndex(index) {
	    Object.assign(viewModel.state.selectedPhone, { index: index });
	  };
	
	  /**
	   * @description
	   * Selects the user's email by index.
	   *
	   * @name selectEmailByIndex
	   * @type {function}
	   *
	   * @param {number} index
	   * @inner
	   */
	  var selectEmailByIndex = function selectEmailByIndex(index) {
	    Object.assign(viewModel.state.selectedEmail, { index: index });
	  };
	
	  /**
	   * @description
	   * Resets the selected email.
	   *
	   * @name resetSelectedEmail
	   * @type {function}
	   * @inner
	   */
	  var resetSelectedEmail = function resetSelectedEmail() {
	    Object.assign(viewModel.state.selectedEmail, { index: null });
	  };
	
	  /**
	   * @description
	   * Resets the selected phone.
	   *
	   * @name resetSelectedPhone
	   * @type {function}
	   * @inner
	   */
	  var resetSelectedPhone = function resetSelectedPhone() {
	    Object.assign(viewModel.state.selectedPhone, { index: null });
	  };
	
	  /**
	   * @description
	   * Checks if the user phone is selected.
	   *
	   * @name isPhoneSelected
	   * @type {function}
	   *
	   * @returns {boolean}
	   * @inner
	   */
	  var isPhoneSelected = function isPhoneSelected() {
	    return viewModel.state.selectedPhone.index !== null;
	  };
	
	  /**
	   * @description
	   * Checks if the user email is selected.
	   *
	   * @name isEmailSelected
	   * @type {function}
	   *
	   * @returns {boolean}
	   * @inner
	   */
	  var isEmailSelected = function isEmailSelected() {
	    return viewModel.state.selectedEmail.index !== null;
	  };
	
	  /**
	   * @description
	   * Returns the selected email.
	   *
	   * @name getSelectedEmail
	   * @type {function}
	   *
	   * @returns {SelectedEmail}
	   * @inner
	   */
	  var getSelectedEmail = function getSelectedEmail() {
	    return viewModel.state.selectedEmail;
	  };
	
	  /**
	   * @description
	   * Returns the selected email.
	   *
	   * @name getSelectedPhone
	   * @type {function}
	   *
	   * @returns {SelectedPhone}
	   * @inner
	   */
	  var getSelectedPhone = function getSelectedPhone() {
	    return viewModel.state.selectedPhone;
	  };
	
	  /**
	   * @description
	   * Fetches the state from the storage.
	   *
	   * @name fetch
	   * @type {function}
	   * @inner
	   */
	  var fetch = function fetch() {
	    return bbStorage.getItem(_constants.StorageKey.PERSONAL_PROFILE_STATE).then(function (state) {
	      if (state) {
	        viewModel.state = state;
	      }
	    });
	  };
	
	  /**
	   * @description
	   * Saves the state to the storage.
	   *
	   * @name save
	   * @type {function}
	   * @inner
	   */
	  var save = function save() {
	    return bbStorage.setItem(_constants.StorageKey.PERSONAL_PROFILE_STATE, viewModel.state);
	  };
	
	  Object.assign(viewModel, {
	    state: getInitialState(),
	
	    getUserData: getUserData,
	    getFormData: getFormData,
	
	    setUser: setUser,
	    setFormEmailState: setFormEmailState,
	    setFormPhoneState: setFormPhoneState,
	    setUserLoading: setUserLoading,
	    setUserError: setUserError,
	    setFormLoading: setFormLoading,
	    setFormError: setFormError,
	
	    selectEmailByIndex: selectEmailByIndex,
	    selectPhoneByIndex: selectPhoneByIndex,
	    getSelectedEmail: getSelectedEmail,
	    getSelectedPhone: getSelectedPhone,
	    resetSelectedEmail: resetSelectedEmail,
	    resetSelectedPhone: resetSelectedPhone,
	    isPhoneSelected: isPhoneSelected,
	    isEmailSelected: isEmailSelected,
	
	    fetch: fetch,
	    save: save
	  });
	
	  return viewModel;
	};
	
	/**
	 * @typedef {Object} SelectedPhone
	 * @property {number} index - position of a phone in the user's phone list
	 */
	
	/**
	* @typedef {Object} SelectedEmail
	* @property {number} index - position of an email in the user's email list
	*/
	
	/**
	* @typedef {Object} FormData
	* @property {Phone} phone - phone data
	* @property {Email} email - email data
	*/

/***/ }),
/* 37 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * @name Hooks
	 * @type {Object}
	 *
	 * @description
	 * Default hooks for widget-bbm-personal-profile-ng
	 */
	
	/**
	 * @name Hooks#processUser
	 * @type {function}
	 *
	 * @description
	 * Hook for processing the user
	 *
	 * @param {User} user - User object from the controller
	 * @returns {Object} user
	 */
	
	var processUser = function processUser(user) {
	  return user;
	};
	
	exports.default = {
	  processUser: processUser
	};

/***/ })
/******/ ])
});
;
//# sourceMappingURL=widget-bbm-personal-profile-ng.js.map