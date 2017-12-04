(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vendor-bb-angular"));
	else if(typeof define === 'function' && define.amd)
		define("ui-bbm-maxlength-ng", ["vendor-bb-angular"], factory);
	else if(typeof exports === 'object')
		exports["ui-bbm-maxlength-ng"] = factory(require("vendor-bb-angular"));
	else
		root["ui-bbm-maxlength-ng"] = factory(root["vendor-bb-angular"]);
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

	module.exports = __webpack_require__(163);

/***/ }),

/***/ 2:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ }),

/***/ 163:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _vendorBbAngular = __webpack_require__(2);
	
	var _vendorBbAngular2 = _interopRequireDefault(_vendorBbAngular);
	
	var _directive = __webpack_require__(164);
	
	var _directive2 = _interopRequireDefault(_directive);
	
	var _constants = __webpack_require__(165);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * @name default
	 * @type {string}
	 * @description Angular module name
	 */
	exports.default = _vendorBbAngular2.default.module(_constants.MODULE_KEY, []).directive(_constants.DIRECTIVE_KEY, _directive2.default).name; /**
	                                                                                                                                              * @module ui-bbm-maxlength-ng
	                                                                                                                                              *
	                                                                                                                                              * @description
	                                                                                                                                              * Directive to prevent typing symbols based on the maxlength value.
	                                                                                                                                              *
	                                                                                                                                              */

/***/ }),

/***/ 164:
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = uiBbmMaxlength;
	/**
	 * @name uiBbmMaxlength
	 * @type {function}
	 * @description
	 * Directive to prevent typing symbols based on the maxlength value.
	 *
	 * @example
	 * <form name="form">
	 *   <input type="text" name="fullName" ui-bbm-maxlength="10">
	 * </form>
	 */
	function uiBbmMaxlength() {
	  return {
	    require: 'ngModel',
	    link: function link(scope, $elem, attrs) {
	      var maxlength = Number(attrs.uiBbmMaxlength);
	      var ngModel = $elem.controller('ngModel');
	
	      if (!Number.isNaN(maxlength) && maxlength >= 0) {
	        $elem.on('input', function (event) {
	          var value = event.target.value;
	
	          if (value.length > maxlength) {
	            ngModel.$setViewValue(value.substr(0, maxlength));
	            ngModel.$render();
	          }
	        });
	      }
	    }
	  };
	}

/***/ }),

/***/ 165:
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var MODULE_KEY = exports.MODULE_KEY = 'ui-bbm-maxlength-ng';
	
	var DIRECTIVE_KEY = exports.DIRECTIVE_KEY = 'uiBbmMaxlength';

/***/ })

/******/ })
});
;
//# sourceMappingURL=ui-bbm-maxlength-ng.js.map