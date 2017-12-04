(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vendor-bb-angular"));
	else if(typeof define === 'function' && define.amd)
		define("vendor-bb-uib-rating", ["vendor-bb-angular"], factory);
	else if(typeof exports === 'object')
		exports["vendor-bb-uib-rating"] = factory(require("vendor-bb-angular"));
	else
		root["vendor-bb-uib-rating"] = factory(root["vendor-bb-angular"]);
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
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(77);

/***/ },

/***/ 2:
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ },

/***/ 77:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(2);
	__webpack_require__(78);
	__webpack_require__(79);
	
	var MODULE_NAME = 'vendor-bb-uib-rating';
	
	angular.module(MODULE_NAME, ['ui.bootstrap.rating', 'uib/template/rating/rating.html']);
	
	module.exports = MODULE_NAME;

/***/ },

/***/ 78:
/***/ function(module, exports) {

	"use strict";
	
	angular.module("uib/template/rating/rating.html", []).run(["$templateCache", function ($templateCache) {
	  $templateCache.put("uib/template/rating/rating.html", "<span ng-mouseleave=\"reset()\" ng-keydown=\"onKeydown($event)\" tabindex=\"0\" role=\"slider\" aria-valuemin=\"0\" aria-valuemax=\"{{range.length}}\" aria-valuenow=\"{{value}}\" aria-valuetext=\"{{title}}\">\n" + "    <span ng-repeat-start=\"r in range track by $index\" class=\"sr-only\">({{ $index < value ? '*' : ' ' }})</span>\n" + "    <i ng-repeat-end ng-mouseenter=\"enter($index + 1)\" ng-click=\"rate($index + 1)\" class=\"glyphicon\" ng-class=\"$index < value && (r.stateOn || 'glyphicon-star') || (r.stateOff || 'glyphicon-star-empty')\" ng-attr-title=\"{{r.title}}\"></i>\n" + "</span>\n" + "");
	}]);

/***/ },

/***/ 79:
/***/ function(module, exports) {

	'use strict';
	
	angular.module('ui.bootstrap.rating', []).constant('uibRatingConfig', {
	  max: 5,
	  stateOn: null,
	  stateOff: null,
	  enableReset: true,
	  titles: ['one', 'two', 'three', 'four', 'five']
	}).controller('UibRatingController', ['$scope', '$attrs', 'uibRatingConfig', function ($scope, $attrs, ratingConfig) {
	  var ngModelCtrl = { $setViewValue: angular.noop },
	      self = this;
	
	  this.init = function (ngModelCtrl_) {
	    ngModelCtrl = ngModelCtrl_;
	    ngModelCtrl.$render = this.render;
	
	    ngModelCtrl.$formatters.push(function (value) {
	      if (angular.isNumber(value) && value << 0 !== value) {
	        value = Math.round(value);
	      }
	
	      return value;
	    });
	
	    this.stateOn = angular.isDefined($attrs.stateOn) ? $scope.$parent.$eval($attrs.stateOn) : ratingConfig.stateOn;
	    this.stateOff = angular.isDefined($attrs.stateOff) ? $scope.$parent.$eval($attrs.stateOff) : ratingConfig.stateOff;
	    this.enableReset = angular.isDefined($attrs.enableReset) ? $scope.$parent.$eval($attrs.enableReset) : ratingConfig.enableReset;
	    var tmpTitles = angular.isDefined($attrs.titles) ? $scope.$parent.$eval($attrs.titles) : ratingConfig.titles;
	    this.titles = angular.isArray(tmpTitles) && tmpTitles.length > 0 ? tmpTitles : ratingConfig.titles;
	
	    var ratingStates = angular.isDefined($attrs.ratingStates) ? $scope.$parent.$eval($attrs.ratingStates) : new Array(angular.isDefined($attrs.max) ? $scope.$parent.$eval($attrs.max) : ratingConfig.max);
	    $scope.range = this.buildTemplateObjects(ratingStates);
	  };
	
	  this.buildTemplateObjects = function (states) {
	    for (var i = 0, n = states.length; i < n; i++) {
	      states[i] = angular.extend({ index: i }, { stateOn: this.stateOn, stateOff: this.stateOff, title: this.getTitle(i) }, states[i]);
	    }
	    return states;
	  };
	
	  this.getTitle = function (index) {
	    if (index >= this.titles.length) {
	      return index + 1;
	    }
	
	    return this.titles[index];
	  };
	
	  $scope.rate = function (value) {
	    if (!$scope.readonly && value >= 0 && value <= $scope.range.length) {
	      var newViewValue = self.enableReset && ngModelCtrl.$viewValue === value ? 0 : value;
	      ngModelCtrl.$setViewValue(newViewValue);
	      ngModelCtrl.$render();
	    }
	  };
	
	  $scope.enter = function (value) {
	    if (!$scope.readonly) {
	      $scope.value = value;
	    }
	    $scope.onHover({ value: value });
	  };
	
	  $scope.reset = function () {
	    $scope.value = ngModelCtrl.$viewValue;
	    $scope.onLeave();
	  };
	
	  $scope.onKeydown = function (evt) {
	    if (/(37|38|39|40)/.test(evt.which)) {
	      evt.preventDefault();
	      evt.stopPropagation();
	      $scope.rate($scope.value + (evt.which === 38 || evt.which === 39 ? 1 : -1));
	    }
	  };
	
	  this.render = function () {
	    $scope.value = ngModelCtrl.$viewValue;
	    $scope.title = self.getTitle($scope.value - 1);
	  };
	}]).directive('uibRating', function () {
	  return {
	    require: ['uibRating', 'ngModel'],
	    scope: {
	      readonly: '=?readOnly',
	      onHover: '&',
	      onLeave: '&'
	    },
	    controller: 'UibRatingController',
	    templateUrl: 'uib/template/rating/rating.html',
	    replace: true,
	    link: function link(scope, element, attrs, ctrls) {
	      var ratingCtrl = ctrls[0],
	          ngModelCtrl = ctrls[1];
	      ratingCtrl.init(ngModelCtrl);
	    }
	  };
	});

/***/ }

/******/ })
});
;
//# sourceMappingURL=vendor-bb-uib-rating.js.map