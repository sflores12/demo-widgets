(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vendor-bb-angular"), require("lib-bb-widget-extension-ng"), require("model-bb-personal-profile-ng"), require("lib-bb-widget-ng"), require("lib-bb-event-bus-ng"), require("lib-bb-intent-ng"));
	else if(typeof define === 'function' && define.amd)
		define("widget-bb-personal-profile-ng", ["vendor-bb-angular", "lib-bb-widget-extension-ng", "model-bb-personal-profile-ng", "lib-bb-widget-ng", "lib-bb-event-bus-ng", "lib-bb-intent-ng"], factory);
	else if(typeof exports === 'object')
		exports["widget-bb-personal-profile-ng"] = factory(require("vendor-bb-angular"), require("lib-bb-widget-extension-ng"), require("model-bb-personal-profile-ng"), require("lib-bb-widget-ng"), require("lib-bb-event-bus-ng"), require("lib-bb-intent-ng"));
	else
		root["widget-bb-personal-profile-ng"] = factory(root["vendor-bb-angular"], root["lib-bb-widget-extension-ng"], root["model-bb-personal-profile-ng"], root["lib-bb-widget-ng"], root["lib-bb-event-bus-ng"], root["lib-bb-intent-ng"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_19__, __WEBPACK_EXTERNAL_MODULE_24__, __WEBPACK_EXTERNAL_MODULE_25__, __WEBPACK_EXTERNAL_MODULE_26__, __WEBPACK_EXTERNAL_MODULE_27__, __WEBPACK_EXTERNAL_MODULE_28__) {
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

	module.exports = __webpack_require__(23);

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
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _vendorBbAngular = __webpack_require__(19);
	
	var _vendorBbAngular2 = _interopRequireDefault(_vendorBbAngular);
	
	var _libBbWidgetExtensionNg = __webpack_require__(24);
	
	var _libBbWidgetExtensionNg2 = _interopRequireDefault(_libBbWidgetExtensionNg);
	
	var _modelBbPersonalProfileNg = __webpack_require__(25);
	
	var _modelBbPersonalProfileNg2 = _interopRequireDefault(_modelBbPersonalProfileNg);
	
	var _libBbWidgetNg = __webpack_require__(26);
	
	var _libBbWidgetNg2 = _interopRequireDefault(_libBbWidgetNg);
	
	var _libBbEventBusNg = __webpack_require__(27);
	
	var _libBbEventBusNg2 = _interopRequireDefault(_libBbEventBusNg);
	
	var _libBbIntentNg = __webpack_require__(28);
	
	var _libBbIntentNg2 = _interopRequireDefault(_libBbIntentNg);
	
	var _controller = __webpack_require__(29);
	
	var _controller2 = _interopRequireDefault(_controller);
	
	var _defaultHooks = __webpack_require__(30);
	
	var defaultHooks = _interopRequireWildcard(_defaultHooks);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * @module widget-bb-personal-profile-ng
	 *
	 * @description
	 * Personal Profile widget.
	 *
	 * @borrows module:model-bb-personal-profile-ng.User as User
	 * @borrows module:lib-bb-model-errors.ModelError as ModelError
	 *
	 * @example
	 *  <div ng-controller="PersonalProfileController as $ctrl">
	 *    <ul>
	 *       <li>{{ $ctrl.state.user.firstName }}</li>
	 *    </ul>
	 *  </div>
	 */
	
	var hooksKey = 'widget-bb-contact-ng:hooks';
	
	/**
	 * @name default
	 * @type {string}
	 *
	 * @description
	 * Personal Profile Widget
	 */
	exports.default = _vendorBbAngular2.default.module('widget-bb-personal-profile-ng', [_modelBbPersonalProfileNg2.default, _libBbWidgetNg2.default, _libBbEventBusNg2.default, _libBbIntentNg2.default]).factory(hooksKey, (0, _libBbWidgetExtensionNg2.default)(defaultHooks)).controller('PersonalProfileController', [
	// dependencies to inject
	_modelBbPersonalProfileNg.modelPersonalProfileKey, hooksKey, _libBbEventBusNg.eventBusKey, _libBbWidgetNg.widgetKey, '$q',
	/* into */
	_controller2.default]).run([_libBbIntentNg.bbIntentKey, function (bbIntent) {
	  bbIntent.init();
	}]).name;

/***/ }),
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
/* 29 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = PersonalProfileController;
	function PersonalProfileController(model, hooks, bus, widget) {
	  /**
	   * @name PersonalProfileController
	   * @ngkey PersonalProfileController
	   *
	   * @type {object}
	   *
	   * @description
	   * Personal Profile controller.
	   */
	  // @TODO: rewrite controller to user $ctrl with Object.assing($ctrl, {})
	  // const $ctrl = this;
	
	  /**
	   * @description State of the personal profile controller
	   * @type {object} state
	   */
	  var state = {
	    user: {
	      data: null,
	      loading: false,
	      error: null
	    }
	  };
	
	  /**
	   * @name PersonalProfileController#load
	   *
	   * @description
	   * Loads the data for the user that is currently logged in
	   *
	   * @type {function}
	   * @returns {Promise<User>}
	   * @inner
	   */
	  function load() {
	    state.user.loading = true;
	    return model.load().then(function (user) {
	      state.user.loading = false;
	      return user;
	    }).then(hooks.processUser).then(function (user) {
	      state.user.data = user;
	    }).catch(function (error) {
	      state.user.error = error;
	      state.user.loading = false;
	    });
	  }
	
	  var $onInit = function $onInit() {
	    /**
	     * This event (cxp.item.loaded) is deprecated in Mobile SDK version > 3.0
	     * and will be removed with the update to widget collection 3 (WC3)
	     */
	    bus.publish('cxp.item.loaded', {
	      id: widget.getId()
	    });
	
	    bus.publish('bb.item.loaded', {
	      id: widget.getId()
	    });
	
	    return load();
	  };
	
	  return {
	    state: state,
	
	    /* Lifecycle hooks */
	    $onInit: $onInit
	  };
	}
	
	/**
	 * @typedef {Object} User
	 * @property {string} bbid - Internal Backbase identifier
	 * @property {string} exid - External bank identifier
	 * @property {string} entityId - External entity identifier
	 * @property {string} id - Internally used unique identification of the user
	 * @property {string} imageAvatar - Base64 encoded picture of the user
	 * @property {string} firstName - The given name of a user
	 * @property {string} lastName - The given family name of a user
	 * @property {string} dateOfBirth - The date the user was born in format "DD-MM-YYYY"
	 * @property {string} street - Street name (part of the address)
	 * @property {string} houseNumber - House number (part of the address)
	 * @property {string} postalCode - Postal code (part of the address)
	 * @property {string} area - Area (part of the address)
	 * @property {string} city - City (part of the address)
	 * @property {string} citizenship - Country where the user is citizen of
	 * @property {string} email - The primary e-mail address of the user
	 * @property {array} phone - The phone numbers where the user can be reached
	 */

/***/ }),
/* 30 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = processUser;
	/**
	 * @name Hooks
	 * @type {object}
	 *
	 * @description
	 * Default hooks for widget-bb-personal-profile-ng
	 */
	
	/**
	 * @name Hooks#processUser
	 * @type {function}
	 *
	 * @description
	 * Hook for processing the user
	 *
	 * @param {User} user - User object from the controller
	 * @returns {object} user
	 */
	function processUser(user) {
	  return user;
	}

/***/ })
/******/ ])
});
;
//# sourceMappingURL=widget-bb-personal-profile-ng.js.map