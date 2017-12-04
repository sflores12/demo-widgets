(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vendor-bb-angular"));
	else if(typeof define === 'function' && define.amd)
		define("ui-bb-number-input-ng", ["vendor-bb-angular"], factory);
	else if(typeof exports === 'object')
		exports["ui-bb-number-input-ng"] = factory(require("vendor-bb-angular"));
	else
		root["ui-bb-number-input-ng"] = factory(root["vendor-bb-angular"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__) {
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

	module.exports = __webpack_require__(113);

/***/ }),

/***/ 2:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ }),

/***/ 113:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _vendorBbAngular = __webpack_require__(2);
	
	var _vendorBbAngular2 = _interopRequireDefault(_vendorBbAngular);
	
	var _component = __webpack_require__(114);
	
	var _component2 = _interopRequireDefault(_component);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	* @module ui-bb-number-input-ng
	* @description
	* UI number input component
	* The idea of this component is to have an input(numeric) element
	* which simply does not allow the user to select an invalid number
	* instead of invalidating the form with ng-min and ng-max. The browser's
	* native min and max only denies the user to select invalid values with the
	* input field's controls or arrow keys(user can still manually enter
	* an invalid value).
	*
	* @example
	* // In an extension:
	* // file: scripts/index.js
	* import uiBbNumberInputKey from 'ui-bb-number-input-ng';
	*
	* export const dependencyKeys = [
	*   uiBbNumberInputKey,
	* ];
	*
	* // file: templates/template.ng.html
	* <ui-bb-number-input class="form-control occurence-field"
	*   name="repeat"
	*   ng-model="$ctrl.repeat"
	*   min-value="$ctrl.repeatMin"
	*   max-value="$ctrl.repeatMax">
	* </ui-bb-number-input>
	*/
	
	exports.default = _vendorBbAngular2.default.module('ui-bb-number-input-ng', []).directive('uiBbNumberInput', _component2.default).name;

/***/ }),

/***/ 114:
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/* eslint no-param-reassign: ["error", {"props": false}] */
	
	/**
	 * @name uiBbNumberInput
	 * @type {object}
	 * @description
	 * Number input directive
	 *
	 * @property {number} ng-model Input value
	 * @property {number} min-value Minimum value allowed
	 * @property {number} max-value Maximum value allowed
	 */
	var clamp = function clamp(value, min, max) {
	  if (min != null && value < min) {
	    return min;
	  }
	  if (max != null && value > max) {
	    return max;
	  }
	  return value != null ? value : min;
	};
	
	exports.default = function () {
	  return {
	    restrict: 'E',
	    link: function link(scope, element) {
	      scope.value = clamp(scope.value, scope.min || 0);
	
	      scope.$watch('value', function (newValue) {
	        var min = scope.min != null ? scope.min : newValue;
	        var max = scope.max != null ? scope.max : newValue;
	
	        if (newValue != null) {
	          scope.value = Math.min(newValue, max);
	        }
	
	        if (min >= 0 && scope.value < 0) {
	          scope.value = min;
	        }
	
	        if (min < 0 && scope.value < min) {
	          scope.value = min;
	        }
	      });
	
	      scope.$watch('min + max', function () {
	        scope.value = clamp(scope.value, scope.min, scope.max);
	      });
	
	      element.bind('blur', function () {
	        scope.$apply(function () {
	          scope.value = clamp(scope.value, scope.min, scope.max);
	        });
	      });
	    },
	    require: 'ngModel',
	    template: '<input type="number" min="{{ min }}">',
	    replace: true,
	    scope: {
	      value: '=ngModel',
	      min: '=?minValue',
	      max: '=?maxValue'
	    }
	  };
	};

/***/ })

/******/ })
});
;
//# sourceMappingURL=ui-bb-number-input-ng.js.map