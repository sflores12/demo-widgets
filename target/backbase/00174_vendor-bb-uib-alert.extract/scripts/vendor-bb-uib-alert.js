(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vendor-bb-angular"));
	else if(typeof define === 'function' && define.amd)
		define("vendor-bb-uib-alert", ["vendor-bb-angular"], factory);
	else if(typeof exports === 'object')
		exports["vendor-bb-uib-alert"] = factory(require("vendor-bb-angular"));
	else
		root["vendor-bb-uib-alert"] = factory(root["vendor-bb-angular"]);
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
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(7);

/***/ },
/* 1 */,
/* 2 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ },
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(2);
	__webpack_require__(8);
	__webpack_require__(9);
	
	var MODULE_NAME = 'vendor-bb-uib-alert';
	
	angular.module(MODULE_NAME, ['ui.bootstrap.alert', 'uib/template/alert/alert.html']);
	
	module.exports = MODULE_NAME;

/***/ },
/* 8 */
/***/ function(module, exports) {

	"use strict";
	
	angular.module("uib/template/alert/alert.html", []).run(["$templateCache", function ($templateCache) {
	  $templateCache.put("uib/template/alert/alert.html", "<div class=\"alert\" ng-class=\"['alert-' + (type || 'warning'), closeable ? 'alert-dismissible' : null]\" role=\"alert\">\n" + "    <button ng-show=\"closeable\" type=\"button\" class=\"close\" ng-click=\"close({$event: $event})\">\n" + "        <span aria-hidden=\"true\">&times;</span>\n" + "        <span class=\"sr-only\">Close</span>\n" + "    </button>\n" + "    <div ng-transclude></div>\n" + "</div>\n" + "");
	}]);

/***/ },
/* 9 */
/***/ function(module, exports) {

	'use strict';
	
	angular.module('ui.bootstrap.alert', []).controller('UibAlertController', ['$scope', '$attrs', '$interpolate', '$timeout', function ($scope, $attrs, $interpolate, $timeout) {
	  $scope.closeable = !!$attrs.close;
	
	  var dismissOnTimeout = angular.isDefined($attrs.dismissOnTimeout) ? $interpolate($attrs.dismissOnTimeout)($scope.$parent) : null;
	
	  if (dismissOnTimeout) {
	    $timeout(function () {
	      $scope.close();
	    }, parseInt(dismissOnTimeout, 10));
	  }
	}]).directive('uibAlert', function () {
	  return {
	    controller: 'UibAlertController',
	    controllerAs: 'alert',
	    templateUrl: function templateUrl(element, attrs) {
	      return attrs.templateUrl || 'uib/template/alert/alert.html';
	    },
	    transclude: true,
	    replace: true,
	    scope: {
	      type: '@',
	      close: '&'
	    }
	  };
	});

/***/ }
/******/ ])
});
;
//# sourceMappingURL=vendor-bb-uib-alert.js.map