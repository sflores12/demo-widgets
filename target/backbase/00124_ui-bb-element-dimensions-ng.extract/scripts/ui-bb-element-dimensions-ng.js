(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vendor-bb-angular"));
	else if(typeof define === 'function' && define.amd)
		define("ui-bb-element-dimensions-ng", ["vendor-bb-angular"], factory);
	else if(typeof exports === 'object')
		exports["ui-bb-element-dimensions-ng"] = factory(require("vendor-bb-angular"));
	else
		root["ui-bb-element-dimensions-ng"] = factory(root["vendor-bb-angular"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_79__) {
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

	module.exports = __webpack_require__(91);

/***/ }),

/***/ 79:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_79__;

/***/ }),

/***/ 91:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _vendorBbAngular = __webpack_require__(79);
	
	var _vendorBbAngular2 = _interopRequireDefault(_vendorBbAngular);
	
	var _directive = __webpack_require__(92);
	
	var _directive2 = _interopRequireDefault(_directive);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * @description The angular module name
	 * @name default
	 * @type {string}
	 */
	/**
	 * @module ui-bb-element-dimensions-ng
	 *
	 * @example
	 * <div ng-class="{'my-xs-col': dims.width < 200}" element-dimensions="dims"></div>
	 *
	 */
	exports.default = _vendorBbAngular2.default.module('ui-bb-element-dimensions-ng', []).directive('elementDimensions', _directive2.default).name;

/***/ }),

/***/ 92:
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function () {
	  return {
	    link: function link(scope, element, attrs) {
	      // get exposing scope property name
	      var prop = attrs.elementDimensions || 'elDims';
	      var $scope = scope;
	      function checkElementDimensions() {
	        var dimensions = element[0].getBoundingClientRect();
	        // is the element's width changed since last digest?
	        if (checkElementDimensions.lastWidth !== dimensions.width) {
	          // expose element's dimensions as an object
	          // {left, top, right, bottom, x, y, width, height}
	          $scope[prop] = dimensions;
	
	          // remember last width changed
	          checkElementDimensions.lastWidth = dimensions.width;
	        }
	      }
	      $scope.$watch(checkElementDimensions);
	    }
	  };
	};

/***/ })

/******/ })
});
;
//# sourceMappingURL=ui-bb-element-dimensions-ng.js.map