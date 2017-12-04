(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vendor-bb-angular"), require("lib-bb-widget-ng"), require("data-bb-places-http-ng"), require("lib-bb-model-errors"));
	else if(typeof define === 'function' && define.amd)
		define("model-bb-places-ng", ["vendor-bb-angular", "lib-bb-widget-ng", "data-bb-places-http-ng", "lib-bb-model-errors"], factory);
	else if(typeof exports === 'object')
		exports["model-bb-places-ng"] = factory(require("vendor-bb-angular"), require("lib-bb-widget-ng"), require("data-bb-places-http-ng"), require("lib-bb-model-errors"));
	else
		root["model-bb-places-ng"] = factory(root["vendor-bb-angular"], root["lib-bb-widget-ng"], root["data-bb-places-http-ng"], root["lib-bb-model-errors"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_19__, __WEBPACK_EXTERNAL_MODULE_24__, __WEBPACK_EXTERNAL_MODULE_25__, __WEBPACK_EXTERNAL_MODULE_27__) {
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
	exports.modelPlacesKey = exports.moduleKey = undefined;
	
	var _vendorBbAngular = __webpack_require__(19);
	
	var _vendorBbAngular2 = _interopRequireDefault(_vendorBbAngular);
	
	var _libBbWidgetNg = __webpack_require__(24);
	
	var _libBbWidgetNg2 = _interopRequireDefault(_libBbWidgetNg);
	
	var _dataBbPlacesHttpNg = __webpack_require__(25);
	
	var _dataBbPlacesHttpNg2 = _interopRequireDefault(_dataBbPlacesHttpNg);
	
	var _places = __webpack_require__(26);
	
	var _places2 = _interopRequireDefault(_places);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * @module model-bb-places-ng
	 *
	 * @description
	 * Model for widget-bb-places-ng
	 *
	 * @example
	 * import modelPlacesModuleKey, { modelPlacesKey } from 'model-bb-places-ng';
	 *
	 * angular
	 *   .module('ExampleModule', [
	 *     modelPlacesModuleKey,
	 *   ])
	 *   .factory('someFactory', [
	 *     modelPlacesKey,
	 *     // into
	 *     function someFactory(placesModel) {
	 *       // ...
	 *     },
	 *   ]);
	 */
	var moduleKey = exports.moduleKey = 'model-bb-places-ng';
	var modelPlacesKey = exports.modelPlacesKey = moduleKey + ':model';
	
	exports.default = _vendorBbAngular2.default.module(moduleKey, [_libBbWidgetNg2.default, _dataBbPlacesHttpNg2.default]).factory(modelPlacesKey, ['$q', _libBbWidgetNg.widgetKey, _dataBbPlacesHttpNg.placesDataKey,
	/* into */
	_places2.default]).name;
	
	/**
	 * @typedef {Object} PlacesWidgetPreferences
	 * @property {number} latitude
	 * @property {number} longitude
	 * @property {number} mapZoom
	 * @property {number} placesFilterRadius
	 * @property {string} apiKey
	 * @property {string} mapApiUrl
	 */

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
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = placesModel;
	
	var _libBbModelErrors = __webpack_require__(27);
	
	var _constants = __webpack_require__(28);
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	/**
	 * Model factory for model-bb-places-ng
	 *
	 * @inner
	 * @type {function}
	 *
	 * @return {object}
	 */
	function placesModel(Promise, widget, placesData) {
	  /**
	   * @name placesModel#getPlaces
	   * @type {function}
	   *
	   * @description
	   * Loads places collection from server
	   *
	   * @returns {promise}
	   */
	  var getPlaces = function getPlaces(params) {
	    return placesData.getPlaces(params).then(function (response) {
	      return response.data;
	    }).catch(function (httpErrorResponse) {
	      throw (0, _libBbModelErrors.fromHttpError)(httpErrorResponse);
	    });
	  };
	
	  /**
	   * @name placesModel#getPlacesPreferences
	   * @type {function}
	   *
	   * @description
	   * Get required preferences from widget
	   *
	   * @returns {PlacesWidgetPreferences} preferences
	   */
	  var getPlacesPreferences = function getPlacesPreferences() {
	    var _ref;
	
	    return _ref = {}, _defineProperty(_ref, _constants.Preference.LAT, widget.getDoublePreference(_constants.Preference.LAT)), _defineProperty(_ref, _constants.Preference.LNG, widget.getDoublePreference(_constants.Preference.LNG)), _defineProperty(_ref, _constants.Preference.ZOOM, widget.getDoublePreference(_constants.Preference.ZOOM)), _defineProperty(_ref, _constants.Preference.RADIUS, widget.getDoublePreference(_constants.Preference.RADIUS)), _defineProperty(_ref, _constants.Preference.KEY, widget.getStringPreference(_constants.Preference.KEY)), _defineProperty(_ref, _constants.Preference.API, widget.getStringPreference(_constants.Preference.API)), _defineProperty(_ref, _constants.Preference.LIMIT, widget.getLongPreference(_constants.Preference.LIMIT)), _ref;
	  };
	
	  /**
	   * @name placesModel
	   * @type {object}
	   */
	  return {
	    getPlaces: getPlaces,
	    getPlacesPreferences: getPlacesPreferences
	  };
	}

/***/ }),
/* 27 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_27__;

/***/ }),
/* 28 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * Widget preferences enum
	 * @type {object}
	 */
	var Preference = exports.Preference = {
	  KEY: 'apiKey',
	  API: 'mapApiUrl',
	  ZOOM: 'mapZoom',
	  LAT: 'latitude',
	  LNG: 'longitude',
	  RADIUS: 'placesFilterRadius',
	  LIMIT: 'limitList'
	};
	
	var Events = exports.Events = {};

/***/ })
/******/ ])
});
;
//# sourceMappingURL=model-bb-places-ng.js.map