(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vendor-bb-angular"));
	else if(typeof define === 'function' && define.amd)
		define("ui-bb-parent-responsiveness-ng", ["vendor-bb-angular"], factory);
	else if(typeof exports === 'object')
		exports["ui-bb-parent-responsiveness-ng"] = factory(require("vendor-bb-angular"));
	else
		root["ui-bb-parent-responsiveness-ng"] = factory(root["vendor-bb-angular"]);
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

	module.exports = __webpack_require__(115);

/***/ }),

/***/ 2:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ }),

/***/ 115:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _vendorBbAngular = __webpack_require__(2);
	
	var _vendorBbAngular2 = _interopRequireDefault(_vendorBbAngular);
	
	var _directive = __webpack_require__(116);
	
	var _directive2 = _interopRequireDefault(_directive);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * @module ui-bb-parent-responsiveness-ng
	 * @description
	 * Directive that dynamically toggles bootstrap column
	 * classes based on the width of the parent container, rather
	 * than the width of the whole window
	 *
	 * This directive listens to parentResized event.
	 * Use this event to manually trigger parent size calculation and
	 * class processing
	 *
	 * @example
	 * // in main script
	 * import uiBbParentResponsivenessNg from 'ui-bb-parent-responsiveness-ng';
	 *
	 * export const dependencyKeys = [
	 *   uiBbParentResponsivenessNg,
	 * ];
	 *
	 * // in template file
	 * <div ui-bb-parent-responsiveness-ng class="col-xs-12 col-sm-8 col-md-6">
	 * 	...
	 * </div>
	 *
	 * // dispatch an event to manually trigger size processing
	 * const event = new Event('parentResized');
	 * element.dispatchEvent(event);
	 */
	
	exports.default = _vendorBbAngular2.default.module('ui-bb-parent-responsiveness-ng', []).directive('uiBbParentResponsivenessNg', [_directive2.default]).name;

/***/ }),

/***/ 116:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _constants = __webpack_require__(117);
	
	var _constants2 = _interopRequireDefault(_constants);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * @name parentResponsivenessDirective
	 * @type {function}
	 *
	 * @property {BootstrapSize[]} bootstrapSizes
	 * Override default Bootstrap setup with custom class prefixes and
	 * minimal widths
	 */
	var parentResponsivenessDirective = function parentResponsivenessDirective() {
	  return {
	    restrict: 'A',
	    scope: {
	      bootstrapSizes: '<'
	    },
	    link: function link(scope, element, attrs) {
	      // find out the parent's margins and adjust BootstrapSizes minWidth value
	      var parent = element.parent();
	      var parentWrapSpace = function () {
	        var computedStyles = window.getComputedStyle(parent[0]);
	        return (parseFloat(computedStyles.getPropertyValue('margin-left')) || 0) + (parseFloat(computedStyles.getPropertyValue('margin-right')) || 0);
	      }();
	
	      // check if there is override for BootstrapSizes object
	      var sizes = scope.bootstrapSizes ? scope.bootstrapSizes : _constants2.default;
	
	      // memorize css column classes applied on the element and set minWidth
	      var classes = attrs.class.split(' ');
	      var responsiveData = sizes.map(function (size) {
	        var elementClass = classes.find(function (cssClass) {
	          return cssClass.indexOf(size.classPrefix) > -1;
	        });
	        var minWidth = size.minWidth + parentWrapSpace < 0 ? 0 : size.minWidth + parentWrapSpace;
	        return { elementClass: elementClass, minWidth: minWidth };
	      });
	
	      var updateClasses = function updateClasses() {
	        var parentWidth = parent[0].clientWidth;
	        // keep track of what happened in the next loop
	        // in case we remove all classes, class for the smallest
	        // media query should be re-attached
	        var lastAdded = void 0;
	        var firstRemoved = void 0;
	        var classAction = void 0;
	
	        responsiveData.forEach(function (responsiveItem) {
	          if (!responsiveItem.elementClass) {
	            return;
	          }
	
	          if (responsiveItem.minWidth <= parentWidth) {
	            classAction = 'addClass';
	            lastAdded = responsiveItem.elementClass;
	          } else {
	            classAction = 'removeClass';
	            firstRemoved = firstRemoved || responsiveItem.elementClass;
	          }
	
	          element[classAction](responsiveItem.elementClass);
	        });
	
	        if (!lastAdded && firstRemoved) {
	          element.addClass(firstRemoved);
	        }
	      };
	
	      element.ready(updateClasses);
	      angular.element(window).on('resize', updateClasses);
	      // add custom event listener in order to provide possibility to recalculate
	      // all of this on some other event (dynamic page)
	      element[0].addEventListener('parentResized', updateClasses);
	    }
	  };
	}; /* global window, angular */
	exports.default = parentResponsivenessDirective;

/***/ }),

/***/ 117:
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * @name BootstrapSizes
	 * @type {BootstrapSize[]}
	 *
	 * @description
	 * Array of BootstrapSize objects
	 */
	var BootstrapSizes = [{
	  minWidth: 0,
	  classPrefix: 'col-xs-'
	}, {
	  minWidth: 768,
	  classPrefix: 'col-sm-'
	}, {
	  minWidth: 992,
	  classPrefix: 'col-md-'
	}, {
	  minWidth: 1200,
	  classPrefix: 'col-lg-'
	}];
	
	/**
	 * @typedef
	 * @name BootstrapSize
	 * @type {object}
	 * @property {number} minWidth Minimum width at which class prefix should apply
	 * @property {string} classPrefix Bootstrap class prefix to be used
	 */
	
	exports.default = BootstrapSizes;

/***/ })

/******/ })
});
;
//# sourceMappingURL=ui-bb-parent-responsiveness-ng.js.map