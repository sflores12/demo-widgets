(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vendor-bb-angular-ng-aria"), require("ui-bb-i18n-ng"), require("ui-bb-avatar-ng"));
	else if(typeof define === 'function' && define.amd)
		define("ext-bb-user-menu-ng", ["vendor-bb-angular-ng-aria", "ui-bb-i18n-ng", "ui-bb-avatar-ng"], factory);
	else if(typeof exports === 'object')
		exports["ext-bb-user-menu-ng"] = factory(require("vendor-bb-angular-ng-aria"), require("ui-bb-i18n-ng"), require("ui-bb-avatar-ng"));
	else
		root["ext-bb-user-menu-ng"] = factory(root["vendor-bb-angular-ng-aria"], root["ui-bb-i18n-ng"], root["ui-bb-avatar-ng"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_6__, __WEBPACK_EXTERNAL_MODULE_7__, __WEBPACK_EXTERNAL_MODULE_15__) {
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

	module.exports = __webpack_require__(21);

/***/ }),

/***/ 6:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_6__;

/***/ }),

/***/ 7:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_7__;

/***/ }),

/***/ 15:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_15__;

/***/ }),

/***/ 21:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.hooks = exports.dependencyKeys = undefined;
	
	var _uiBbAvatarNg = __webpack_require__(15);
	
	var _uiBbAvatarNg2 = _interopRequireDefault(_uiBbAvatarNg);
	
	var _uiBbI18nNg = __webpack_require__(7);
	
	var _uiBbI18nNg2 = _interopRequireDefault(_uiBbI18nNg);
	
	var _vendorBbAngularNgAria = __webpack_require__(6);
	
	var _vendorBbAngularNgAria2 = _interopRequireDefault(_vendorBbAngularNgAria);
	
	var _hooks = __webpack_require__(22);
	
	var _hooks2 = _interopRequireDefault(_hooks);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * @module ext-bb-user-menu-ng
	 *
	 * @description
	 * Default extension for User Menu widget.
	 *
	 * @requires ui-bb-avatar-ng
	 * @requires ui-bb-i18n-ng
	 * @requires vendor-bb-angular-ng-aria
	 *
	 * @example
	 * <!-- User Menu widget model.xml -->
	 * <property name="extension" viewHint="text-input,admin">
	 *  <value type="string">ext-bb-user-menu-ng</value>
	 * </property>
	 */
	var dependencyKeys = exports.dependencyKeys = [_uiBbAvatarNg2.default, _uiBbI18nNg2.default, _vendorBbAngularNgAria2.default];
	
	var hooks = exports.hooks = _hooks2.default;
	exports.default = dependencyKeys;
	
	/**
	 * @typedef {object} User
	 * @property {string} name Name that should be displayed on page
	 * @property {?string} username Internal user identifier
	 */
	
	/**
	 * @typedef {object} Portal
	 * @property {string} loggedInUserId Internally used unique identification of the user
	 */

/***/ }),

/***/ 22:
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * @name hooks#processProfileData
	 * @type {function}
	 *
	 * @description
	 * Processes user data retrieved from user profile endpoint
	 *
	 * @param {User} user User data
	 * @returns {User} Processed data
	 */
	var processProfileData = function processProfileData(user) {
	  return Object.assign(user, { name: user.username });
	};
	
	exports.default = {
	  processProfileData: processProfileData
	};

/***/ })

/******/ })
});
;
//# sourceMappingURL=ext-bb-user-menu-ng.js.map