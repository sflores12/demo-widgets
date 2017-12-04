(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vendor-bb-angular"), require("lib-bb-widget-ng"), require("lib-bb-model-errors"), require("lib-bb-widget-extension-ng"), require("model-bb-places-ng"), require("lib-bb-event-bus-ng"), require("lib-bb-intent-ng"));
	else if(typeof define === 'function' && define.amd)
		define("widget-bb-places-ng", ["vendor-bb-angular", "lib-bb-widget-ng", "lib-bb-model-errors", "lib-bb-widget-extension-ng", "model-bb-places-ng", "lib-bb-event-bus-ng", "lib-bb-intent-ng"], factory);
	else if(typeof exports === 'object')
		exports["widget-bb-places-ng"] = factory(require("vendor-bb-angular"), require("lib-bb-widget-ng"), require("lib-bb-model-errors"), require("lib-bb-widget-extension-ng"), require("model-bb-places-ng"), require("lib-bb-event-bus-ng"), require("lib-bb-intent-ng"));
	else
		root["widget-bb-places-ng"] = factory(root["vendor-bb-angular"], root["lib-bb-widget-ng"], root["lib-bb-model-errors"], root["lib-bb-widget-extension-ng"], root["model-bb-places-ng"], root["lib-bb-event-bus-ng"], root["lib-bb-intent-ng"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_19__, __WEBPACK_EXTERNAL_MODULE_24__, __WEBPACK_EXTERNAL_MODULE_27__, __WEBPACK_EXTERNAL_MODULE_37__, __WEBPACK_EXTERNAL_MODULE_38__, __WEBPACK_EXTERNAL_MODULE_39__, __WEBPACK_EXTERNAL_MODULE_40__) {
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

	module.exports = __webpack_require__(36);

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
/* 25 */,
/* 26 */,
/* 27 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_27__;

/***/ }),
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _vendorBbAngular = __webpack_require__(19);
	
	var _vendorBbAngular2 = _interopRequireDefault(_vendorBbAngular);
	
	var _libBbWidgetExtensionNg = __webpack_require__(37);
	
	var _libBbWidgetExtensionNg2 = _interopRequireDefault(_libBbWidgetExtensionNg);
	
	var _modelBbPlacesNg = __webpack_require__(38);
	
	var _modelBbPlacesNg2 = _interopRequireDefault(_modelBbPlacesNg);
	
	var _libBbWidgetNg = __webpack_require__(24);
	
	var _libBbWidgetNg2 = _interopRequireDefault(_libBbWidgetNg);
	
	var _libBbEventBusNg = __webpack_require__(39);
	
	var _libBbEventBusNg2 = _interopRequireDefault(_libBbEventBusNg);
	
	var _libBbIntentNg = __webpack_require__(40);
	
	var _libBbIntentNg2 = _interopRequireDefault(_libBbIntentNg);
	
	var _controller = __webpack_require__(41);
	
	var _controller2 = _interopRequireDefault(_controller);
	
	var _defaultHooks = __webpack_require__(43);
	
	var defaultHooks = _interopRequireWildcard(_defaultHooks);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * @module widget-bb-places-ng
	 *
	 * @description
	 * Places widget
	 *
	 * @usage
	 * <div ng-controller="PlacesController as $ctrl">
	 *   <g-map-api preferences="$ctrl.getPlacesPreferences()">
	 *     <g-map places="$ctrl.loadPlaces"></g-map>
	 *   </g-map-api>
	 * </div>
	 */
	var hooksKey = 'widget-bb-places-ng:hooks';
	
	function run(widget, bus, bbIntent) {
	  bus.publish('cxp.item.loaded', {
	    id: widget.getId()
	  });
	  bbIntent.init();
	}
	
	exports.default = _vendorBbAngular2.default.module('widget-bb-places-ng', [_modelBbPlacesNg2.default, _libBbEventBusNg2.default, _libBbWidgetNg2.default, _libBbIntentNg2.default]).factory(hooksKey, (0, _libBbWidgetExtensionNg2.default)(defaultHooks)).controller('PlacesController', [
	// dependencies to inject
	_modelBbPlacesNg.modelPlacesKey, hooksKey, _libBbEventBusNg.eventBusKey,
	/* into */
	_controller2.default]).run([_libBbWidgetNg.widgetKey, _libBbEventBusNg.eventBusKey, _libBbIntentNg.bbIntentKey, run]).name;
	
	/**
	 * @typedef {Object} PlacesParameters
	 * @property {number} latitude Latitude for current location
	 * @property {number} longitude Longitude for current location
	 * @property {number} radius Search radius
	 * @property {?string} city Search by city name
	 * @property {?string} country Search by country name
	 */
	
	/**
	 * @typedef {Object} Place
	 * @property {string} id The internal place identifier
	 * @property {string} name The place's name, suitable for display to users
	 * @property {string} address.addressLine1 First line of address
	 * @property {?string} address.addressLine2 Second line of address
	 * @property {?string} address.addressLine3 Third line of address
	 * @property {string} address.postalCode Post (ZIP) code of the place
	 * @property {string} address.country Place's country
	 * @property {number} latitude Latitude of the place
	 * @property {number} longitude Longitude of the place
	 * @property {string} placeType Type of the place (atm, branch, ...)
	 */

/***/ }),
/* 37 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_37__;

/***/ }),
/* 38 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_38__;

/***/ }),
/* 39 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_39__;

/***/ }),
/* 40 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_40__;

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _errorMessages;
	
	exports.default = PlacesController;
	
	var _libBbModelErrors = __webpack_require__(27);
	
	var _constants = __webpack_require__(42);
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	var errorMessages = (_errorMessages = {}, _defineProperty(_errorMessages, _libBbModelErrors.E_AUTH, _constants.Text.ERROR_AUTH), _defineProperty(_errorMessages, _libBbModelErrors.E_CONNECTIVITY, _constants.Text.ERROR_CONNECTION), _defineProperty(_errorMessages, _libBbModelErrors.E_UNEXPECTED, _constants.Text.ERROR_UNEXPECTED), _defineProperty(_errorMessages, _libBbModelErrors.E_USER, _constants.Text.ERROR_USER), _errorMessages);
	
	/**
	 * @name PlacesController
	 *
	 * @type {object}
	 * @description
	 * Places widget
	 */
	function PlacesController(model, hooks, bus) {
	  var $ctrl = this;
	
	  /**
	   * @name uiError
	   * @type {function}
	   *
	   * @description
	   * Creates an error object for a template
	   *
	   * @inner
	   * @param {object} modelError object
	   *
	   * @returns {{message: string}}
	   */
	  var uiError = function uiError(modelError) {
	    var error = '';
	
	    if (modelError && modelError.code) {
	      error = errorMessages[modelError.code];
	    }
	
	    return {
	      message: error
	    };
	  };
	
	  /**
	   * @name PlacesController#loadPlaces
	   * @type {function}
	   *
	   * @description
	   * Load places collection
	   *
	   * @param {PlacesParameters} params configuration to call model getPlaces
	   * @return {promise}
	   */
	  var loadPlaces = function loadPlaces(params) {
	    $ctrl.loadingPlaces = true;
	    return model.getPlaces(params).then(function (data) {
	      $ctrl.places = hooks.processPlaces(data);
	      $ctrl.loadingPlaces = false;
	      return $ctrl.places;
	    }).catch(function (error) {
	      $ctrl.error = uiError(error);
	      $ctrl.loadingPlaces = false;
	    });
	  };
	
	  /**
	   * @name PlacesController#getPlacesPreferences
	   * @type {function}
	   *
	   * @description
	   * Returns widget preferences as an enum object
	   * (shorthand to model method)
	   *
	   * @return {object}
	   */
	  var getPlacesPreferences = function getPlacesPreferences() {
	    return model.getPlacesPreferences();
	  };
	
	  /**
	   * @name PlacesController#bindEvents
	   * @type {function}
	   * @inner
	   * @description
	   * Binds event listeners for containers that can show map after user action or timeout
	   *
	   * @return {void}
	   */
	  var bindEvents = function bindEvents() {
	    bus.subscribe('DeckPanelLoaded', function (panel) {
	      return hooks.onContainerToggle(panel.htmlNode);
	    });
	    bus.subscribe('CarouselSlideLoaded', hooks.onContainerToggle);
	    bus.subscribe('LightboxOpened', hooks.onContainerToggle);
	  };
	
	  /**
	   * @name PlacesController#$onInit
	   * @type {function}
	   *
	   * @description
	   * AngularJS Lifecycle hook used to initialize the controller
	   *
	   * @returns {void}
	   */
	  var $onInit = function $onInit() {
	    bindEvents();
	  };
	
	  Object.assign($ctrl, {
	    $onInit: $onInit,
	    loadPlaces: loadPlaces,
	    getPlacesPreferences: getPlacesPreferences
	  });
	}

/***/ }),
/* 42 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var Events = exports.Events = {};
	
	var Text = exports.Text = {
	  ERROR_AUTH: 'places.error.ERROR_AUTH',
	  ERROR_CONNECTION: 'places.error.ERROR_CONNECTION',
	  ERROR_UNEXPECTED: 'places.error.ERROR_UNEXPECTED',
	  ERROR_USER: 'places.error.ERROR_USER'
	};

/***/ }),
/* 43 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/* eslint-disable import/prefer-default-export */
	/* eslint no-unused-vars: ["error", { "args": "none" }] */
	
	/**
	 * @name Hooks
	 * @type {object}
	 *
	 * @description
	 * Hooks for widget-bb-places-ng
	 */
	
	/**
	 * @name Hooks#processPlaces
	 * @type {function}
	 *
	 * @description
	 * Hook for processing places list
	 * Assigned to [$ctrl.loadPlaces]
	 *
	 * @param {Place[]} places Array of places
	 * @returns {Place[]} Processed array of places
	 */
	var processPlaces = exports.processPlaces = function processPlaces(places) {
	  return places || [];
	};
	
	/**
	 * @name Hooks#onContainerToggle
	 * @type {function}
	 *
	 * @description
	 * Hook that is being triggered in case when parent container
	 * that has the ability to show/hide part of it's content (tabs, deck, carousel)
	 * toggles the child element
	 * Assigned to [$ctrl.$onInit]
	 *
	 * @param {object} activatedElement Child element that became visible
	 * @returns {void}
	 */
	var onContainerToggle = exports.onContainerToggle = function onContainerToggle(activatedElement) {};

/***/ })
/******/ ])
});
;
//# sourceMappingURL=widget-bb-places-ng.js.map