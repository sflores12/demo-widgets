(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vendor-bb-angular"), require("vendor-bb-uib-tooltip"));
	else if(typeof define === 'function' && define.amd)
		define("vendor-bb-uib-popover", ["vendor-bb-angular", "vendor-bb-uib-tooltip"], factory);
	else if(typeof exports === 'object')
		exports["vendor-bb-uib-popover"] = factory(require("vendor-bb-angular"), require("vendor-bb-uib-tooltip"));
	else
		root["vendor-bb-uib-popover"] = factory(root["vendor-bb-angular"], root["vendor-bb-uib-tooltip"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_62__) {
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
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(61);

/***/ },

/***/ 2:
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ },

/***/ 61:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(2);__webpack_require__(62);
	module.exports = __webpack_require__(63);

/***/ },

/***/ 62:
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_62__;

/***/ },

/***/ 63:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(2);__webpack_require__(62);
	__webpack_require__(64);
	__webpack_require__(65);
	__webpack_require__(66);
	__webpack_require__(67);
	
	var MODULE_NAME = 'vendor-bb-uib-popover';
	
	angular.module(MODULE_NAME, ['ui.bootstrap.popover', 'uib/template/popover/popover.html', 'uib/template/popover/popover-html.html', 'uib/template/popover/popover-template.html']);
	
	module.exports = MODULE_NAME;

/***/ },

/***/ 64:
/***/ function(module, exports) {

	"use strict";
	
	angular.module("uib/template/popover/popover.html", []).run(["$templateCache", function ($templateCache) {
	  $templateCache.put("uib/template/popover/popover.html", "<div class=\"popover\"\n" + "  tooltip-animation-class=\"fade\"\n" + "  uib-tooltip-classes\n" + "  ng-class=\"{ in: isOpen() }\">\n" + "  <div class=\"arrow\"></div>\n" + "\n" + "  <div class=\"popover-inner\">\n" + "      <h3 class=\"popover-title\" ng-bind=\"uibTitle\" ng-if=\"uibTitle\"></h3>\n" + "      <div class=\"popover-content\" ng-bind=\"content\"></div>\n" + "  </div>\n" + "</div>\n" + "");
	}]);

/***/ },

/***/ 65:
/***/ function(module, exports) {

	"use strict";
	
	angular.module("uib/template/popover/popover-html.html", []).run(["$templateCache", function ($templateCache) {
	  $templateCache.put("uib/template/popover/popover-html.html", "<div class=\"popover\"\n" + "  tooltip-animation-class=\"fade\"\n" + "  uib-tooltip-classes\n" + "  ng-class=\"{ in: isOpen() }\">\n" + "  <div class=\"arrow\"></div>\n" + "\n" + "  <div class=\"popover-inner\">\n" + "      <h3 class=\"popover-title\" ng-bind=\"uibTitle\" ng-if=\"uibTitle\"></h3>\n" + "      <div class=\"popover-content\" ng-bind-html=\"contentExp()\"></div>\n" + "  </div>\n" + "</div>\n" + "");
	}]);

/***/ },

/***/ 66:
/***/ function(module, exports) {

	"use strict";
	
	angular.module("uib/template/popover/popover-template.html", []).run(["$templateCache", function ($templateCache) {
	  $templateCache.put("uib/template/popover/popover-template.html", "<div class=\"popover\"\n" + "  tooltip-animation-class=\"fade\"\n" + "  uib-tooltip-classes\n" + "  ng-class=\"{ in: isOpen() }\">\n" + "  <div class=\"arrow\"></div>\n" + "\n" + "  <div class=\"popover-inner\">\n" + "      <h3 class=\"popover-title\" ng-bind=\"uibTitle\" ng-if=\"uibTitle\"></h3>\n" + "      <div class=\"popover-content\"\n" + "        uib-tooltip-template-transclude=\"contentExp()\"\n" + "        tooltip-template-transclude-scope=\"originScope()\"></div>\n" + "  </div>\n" + "</div>\n" + "");
	}]);

/***/ },

/***/ 67:
/***/ function(module, exports) {

	'use strict';
	
	/**
	 * The following features are still outstanding: popup delay, animation as a
	 * function, placement as a function, inside, support for more triggers than
	 * just mouse enter/leave, and selector delegatation.
	 */
	angular.module('ui.bootstrap.popover', ['ui.bootstrap.tooltip']).directive('uibPopoverTemplatePopup', function () {
	  return {
	    replace: true,
	    scope: { uibTitle: '@', contentExp: '&', placement: '@', popupClass: '@', animation: '&', isOpen: '&',
	      originScope: '&' },
	    templateUrl: 'uib/template/popover/popover-template.html'
	  };
	}).directive('uibPopoverTemplate', ['$uibTooltip', function ($uibTooltip) {
	  return $uibTooltip('uibPopoverTemplate', 'popover', 'click', {
	    useContentExp: true
	  });
	}]).directive('uibPopoverHtmlPopup', function () {
	  return {
	    replace: true,
	    scope: { contentExp: '&', uibTitle: '@', placement: '@', popupClass: '@', animation: '&', isOpen: '&' },
	    templateUrl: 'uib/template/popover/popover-html.html'
	  };
	}).directive('uibPopoverHtml', ['$uibTooltip', function ($uibTooltip) {
	  return $uibTooltip('uibPopoverHtml', 'popover', 'click', {
	    useContentExp: true
	  });
	}]).directive('uibPopoverPopup', function () {
	  return {
	    replace: true,
	    scope: { uibTitle: '@', content: '@', placement: '@', popupClass: '@', animation: '&', isOpen: '&' },
	    templateUrl: 'uib/template/popover/popover.html'
	  };
	}).directive('uibPopover', ['$uibTooltip', function ($uibTooltip) {
	  return $uibTooltip('uibPopover', 'popover', 'click');
	}]);

/***/ }

/******/ })
});
;
//# sourceMappingURL=vendor-bb-uib-popover.js.map