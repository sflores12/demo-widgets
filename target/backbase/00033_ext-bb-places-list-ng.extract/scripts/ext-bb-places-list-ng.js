(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("ui-bb-i18n-ng"), require("ui-bb-maps-ng"), require("ui-bb-loading-indicator-ng"), require("ui-bb-substitute-error-ng"), require("vendor-bb-angular-ng-aria"));
	else if(typeof define === 'function' && define.amd)
		define("ext-bb-places-list-ng", ["ui-bb-i18n-ng", "ui-bb-maps-ng", "ui-bb-loading-indicator-ng", "ui-bb-substitute-error-ng", "vendor-bb-angular-ng-aria"], factory);
	else if(typeof exports === 'object')
		exports["ext-bb-places-list-ng"] = factory(require("ui-bb-i18n-ng"), require("ui-bb-maps-ng"), require("ui-bb-loading-indicator-ng"), require("ui-bb-substitute-error-ng"), require("vendor-bb-angular-ng-aria"));
	else
		root["ext-bb-places-list-ng"] = factory(root["ui-bb-i18n-ng"], root["ui-bb-maps-ng"], root["ui-bb-loading-indicator-ng"], root["ui-bb-substitute-error-ng"], root["vendor-bb-angular-ng-aria"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_3__, __WEBPACK_EXTERNAL_MODULE_4__, __WEBPACK_EXTERNAL_MODULE_5__, __WEBPACK_EXTERNAL_MODULE_6__) {
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

	module.exports = __webpack_require__(13);

/***/ }),
/* 1 */,
/* 2 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ }),
/* 3 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/***/ }),
/* 4 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_4__;

/***/ }),
/* 5 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_5__;

/***/ }),
/* 6 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_6__;

/***/ }),
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.events = exports.helpers = exports.hooks = exports.dependencyKeys = undefined;
	
	var _uiBbI18nNg = __webpack_require__(2);
	
	var _uiBbI18nNg2 = _interopRequireDefault(_uiBbI18nNg);
	
	var _uiBbMapsNg = __webpack_require__(3);
	
	var _uiBbMapsNg2 = _interopRequireDefault(_uiBbMapsNg);
	
	var _uiBbLoadingIndicatorNg = __webpack_require__(4);
	
	var _uiBbLoadingIndicatorNg2 = _interopRequireDefault(_uiBbLoadingIndicatorNg);
	
	var _uiBbSubstituteErrorNg = __webpack_require__(5);
	
	var _uiBbSubstituteErrorNg2 = _interopRequireDefault(_uiBbSubstituteErrorNg);
	
	var _vendorBbAngularNgAria = __webpack_require__(6);
	
	var _vendorBbAngularNgAria2 = _interopRequireDefault(_vendorBbAngularNgAria);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var dependencyKeys = exports.dependencyKeys = [_uiBbI18nNg2.default, _uiBbMapsNg2.default, _uiBbLoadingIndicatorNg2.default, _uiBbSubstituteErrorNg2.default, _vendorBbAngularNgAria2.default]; /**
	                                                                                                                                                                                                 * @module ext-bb-places-list-ng
	                                                                                                                                                                                                 *
	                                                                                                                                                                                                 * @description
	                                                                                                                                                                                                 * Places widget list extension.
	                                                                                                                                                                                                 *
	                                                                                                                                                                                                 * @requires ui-bb-i18n-ng
	                                                                                                                                                                                                 * @requires ui-bb-maps-ng
	                                                                                                                                                                                                 * @requires ui-bb-substitute-error-ng
	                                                                                                                                                                                                 * @requires ui-bb-loading-indicator-ng
	                                                                                                                                                                                                 * @requires vendor-bb-angular-ng-aria
	                                                                                                                                                                                                 *
	                                                                                                                                                                                                 * @example
	                                                                                                                                                                                                 * <!-- places widget model.xml -->
	                                                                                                                                                                                                 * <property name="extension" viewHint="text-input,admin">
	                                                                                                                                                                                                 *   <value type="string">ext-bb-places-list-ng</value>
	                                                                                                                                                                                                 * </property>
	                                                                                                                                                                                                 *
	                                                                                                                                                                                                 * Usage of ui-bb-maps-ng component in template
	                                                                                                                                                                                                 *
	                                                                                                                                                                                                 * <g-map-api preferences="$ctrl.getPlacesPreferences()" ng-hide="$ctrl.loadingPlaces">
	                                                                                                                                                                                                 *   <place-listn places="$ctrl.loadPlaces"
	                                                                                                                                                                                                 *     messages="{
	                                                                                                                                                                                                 *       list: ('places.message.setup.list' | i18n),
	                                                                                                                                                                                                 *       error: ('places.message.setup.error' | i18n),
	                                                                                                                                                                                                 *       empty: ('places.message.setup.empty' | i18n),
	                                                                                                                                                                                                 *     }"
	                                                                                                                                                                                                 *   >
	                                                                                                                                                                                                 *     <div class="form-group">
	                                                                                                                                                                                                 *       <g-map-search></g-map-search>
	                                                                                                                                                                                                 *       <span class="fa fa-search text-muted form-control-feedback" aria-hidden="true"></span>
	                                                                                                                                                                                                 *       <span class="sr-only" data-i18n-key="places.input.search"></span>
	                                                                                                                                                                                                 *     </div>
	                                                                                                                                                                                                 *   </place-list>
	                                                                                                                                                                                                 * </g-map-api>
	                                                                                                                                                                                                 *
	                                                                                                                                                                                                 * where
	                                                                                                                                                                                                 * places {object[]} Array of map points to be placed on map
	                                                                                                                                                                                                 * places.latitude {number} Latitude of one point
	                                                                                                                                                                                                 * places.longitude {number} Longitude of one point
	                                                                                                                                                                                                 * preferences {object} Preference object containing api key, zoom level, etc.
	                                                                                                                                                                                                 * messages {object} Object with messages that will be shown in various states of the extension
	                                                                                                                                                                                                 * messages.list {string} Message displayed while list is being loaded
	                                                                                                                                                                                                 * and distnaces are being calculated
	                                                                                                                                                                                                 * messages.error {string} Message displayed if error occured
	                                                                                                                                                                                                 * messages.empty {string} Message displayed if there are no items to show
	                                                                                                                                                                                                 */
	var hooks = exports.hooks = {};
	
	var helpers = exports.helpers = {};
	
	var events = exports.events = {};

/***/ })
/******/ ])
});
;
//# sourceMappingURL=ext-bb-places-list-ng.js.map