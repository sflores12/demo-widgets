(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vendor-bb-angular"), require("vendor-bb-uib-paging"));
	else if(typeof define === 'function' && define.amd)
		define("vendor-bb-uib-pager", ["vendor-bb-angular", "vendor-bb-uib-paging"], factory);
	else if(typeof exports === 'object')
		exports["vendor-bb-uib-pager"] = factory(require("vendor-bb-angular"), require("vendor-bb-uib-paging"));
	else
		root["vendor-bb-uib-pager"] = factory(root["vendor-bb-angular"], root["vendor-bb-uib-paging"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_53__) {
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

	module.exports = __webpack_require__(52);

/***/ },

/***/ 2:
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ },

/***/ 52:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(2);__webpack_require__(53);
	__webpack_require__(54);
	__webpack_require__(55);
	
	var MODULE_NAME = 'vendor-bb-uib-pager';
	
	angular.module(MODULE_NAME, ['ui.bootstrap.pager', 'uib/template/pager/pager.html']);
	
	module.exports = MODULE_NAME;

/***/ },

/***/ 53:
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_53__;

/***/ },

/***/ 54:
/***/ function(module, exports) {

	"use strict";
	
	angular.module("uib/template/pager/pager.html", []).run(["$templateCache", function ($templateCache) {
	  $templateCache.put("uib/template/pager/pager.html", "<ul class=\"pager\">\n" + "  <li ng-class=\"{disabled: noPrevious()||ngDisabled, previous: align}\"><a href ng-click=\"selectPage(page - 1, $event)\">{{::getText('previous')}}</a></li>\n" + "  <li ng-class=\"{disabled: noNext()||ngDisabled, next: align}\"><a href ng-click=\"selectPage(page + 1, $event)\">{{::getText('next')}}</a></li>\n" + "</ul>\n" + "");
	}]);

/***/ },

/***/ 55:
/***/ function(module, exports) {

	'use strict';
	
	angular.module('ui.bootstrap.pager', ['ui.bootstrap.paging']).controller('UibPagerController', ['$scope', '$attrs', 'uibPaging', 'uibPagerConfig', function ($scope, $attrs, uibPaging, uibPagerConfig) {
	  $scope.align = angular.isDefined($attrs.align) ? $scope.$parent.$eval($attrs.align) : uibPagerConfig.align;
	
	  uibPaging.create(this, $scope, $attrs);
	}]).constant('uibPagerConfig', {
	  itemsPerPage: 10,
	  previousText: '« Previous',
	  nextText: 'Next »',
	  align: true
	}).directive('uibPager', ['uibPagerConfig', function (uibPagerConfig) {
	  return {
	    scope: {
	      totalItems: '=',
	      previousText: '@',
	      nextText: '@',
	      ngDisabled: '='
	    },
	    require: ['uibPager', '?ngModel'],
	    controller: 'UibPagerController',
	    controllerAs: 'pager',
	    templateUrl: function templateUrl(element, attrs) {
	      return attrs.templateUrl || 'uib/template/pager/pager.html';
	    },
	    replace: true,
	    link: function link(scope, element, attrs, ctrls) {
	      var paginationCtrl = ctrls[0],
	          ngModelCtrl = ctrls[1];
	
	      if (!ngModelCtrl) {
	        return; // do nothing if no ng-model
	      }
	
	      paginationCtrl.init(ngModelCtrl, uibPagerConfig);
	    }
	  };
	}]);

/***/ }

/******/ })
});
;
//# sourceMappingURL=vendor-bb-uib-pager.js.map