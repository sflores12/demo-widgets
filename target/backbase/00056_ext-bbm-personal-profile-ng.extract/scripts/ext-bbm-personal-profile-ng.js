(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("ui-bb-avatar-ng"), require("ui-bb-i18n-ng"));
	else if(typeof define === 'function' && define.amd)
		define("ext-bbm-personal-profile-ng", ["ui-bb-avatar-ng", "ui-bb-i18n-ng"], factory);
	else if(typeof exports === 'object')
		exports["ext-bbm-personal-profile-ng"] = factory(require("ui-bb-avatar-ng"), require("ui-bb-i18n-ng"));
	else
		root["ext-bbm-personal-profile-ng"] = factory(root["ui-bb-avatar-ng"], root["ui-bb-i18n-ng"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_5__) {
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

	module.exports = __webpack_require__(12);

/***/ }),
/* 1 */,
/* 2 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ }),
/* 3 */,
/* 4 */,
/* 5 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_5__;

/***/ }),
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.dependencyKeys = exports.helpers = undefined;
	
	var _uiBbAvatarNg = __webpack_require__(2);
	
	var _uiBbAvatarNg2 = _interopRequireDefault(_uiBbAvatarNg);
	
	var _uiBbI18nNg = __webpack_require__(5);
	
	var _uiBbI18nNg2 = _interopRequireDefault(_uiBbI18nNg);
	
	var _helpers = __webpack_require__(13);
	
	var _helpers2 = _interopRequireDefault(_helpers);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var helpers = exports.helpers = _helpers2.default; /**
	                                                    * @module ext-bbm-personal-profile-ng
	                                                    *
	                                                    * @description
	                                                    * Mobile extension for personal profile widget.
	                                                    *
	                                                    * @example
	                                                    * <!-- personal profile widget model.xml -->
	                                                    * <property name="extension" viewHint="text-input,admin">
	                                                    *  <value type="string">ext-bbm-personal-profile-ng</value>
	                                                    * </property>
	                                                    */
	var dependencyKeys = exports.dependencyKeys = [_uiBbAvatarNg2.default, _uiBbI18nNg2.default];

/***/ }),
/* 13 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	/**
	 * @description
	 * Helpers for ext-bbm-personal-profile-ng
	 *
	 * @name Helpers
	 * @type {Object}
	 */
	exports.default = function () {
	  /**
	   * @description
	   * Checks for the loading.
	   *
	   * @name Helpers#showLoadingState
	   * @type {function}
	   *
	   * @param {module:widget-bbm-personal-profile-ng.DetailsController} ctrl
	   * @returns {boolean}
	   */
	  var showLoadingState = function showLoadingState(ctrl) {
	    return ctrl.state.user.loading && !ctrl.state.user.data;
	  };
	
	  /**
	   * @description
	   * Checks for the error state.
	   *
	   * @name Helpers#showErrorState
	   * @type {function}
	   *
	   * @param {module:widget-bbm-personal-profile-ng.DetailsController} ctrl
	   * @returns {boolean}
	   */
	  var showErrorState = function showErrorState(ctrl) {
	    return ctrl.state.user.error && !ctrl.state.user.loading;
	  };
	
	  return {
	    showLoadingState: showLoadingState,
	    showErrorState: showErrorState
	  };
	};

/***/ })
/******/ ])
});
;
//# sourceMappingURL=ext-bbm-personal-profile-ng.js.map