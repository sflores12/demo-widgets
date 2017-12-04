(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vendor-bb-angular"));
	else if(typeof define === 'function' && define.amd)
		define("vendor-bb-uib-progressbar", ["vendor-bb-angular"], factory);
	else if(typeof exports === 'object')
		exports["vendor-bb-uib-progressbar"] = factory(require("vendor-bb-angular"));
	else
		root["vendor-bb-uib-progressbar"] = factory(root["vendor-bb-angular"]);
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

	module.exports = __webpack_require__(72);

/***/ },

/***/ 2:
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ },

/***/ 72:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(2);
	__webpack_require__(73);
	__webpack_require__(74);
	__webpack_require__(75);
	__webpack_require__(76);
	
	var MODULE_NAME = 'vendor-bb-uib-progressbar';
	
	angular.module(MODULE_NAME, ['ui.bootstrap.progressbar', 'uib/template/progressbar/progressbar.html', 'uib/template/progressbar/progress.html', 'uib/template/progressbar/bar.html']);
	
	module.exports = MODULE_NAME;

/***/ },

/***/ 73:
/***/ function(module, exports) {

	"use strict";
	
	angular.module("uib/template/progressbar/progressbar.html", []).run(["$templateCache", function ($templateCache) {
	  $templateCache.put("uib/template/progressbar/progressbar.html", "<div class=\"progress\">\n" + "  <div class=\"progress-bar\" ng-class=\"type && 'progress-bar-' + type\" role=\"progressbar\" aria-valuenow=\"{{value}}\" aria-valuemin=\"0\" aria-valuemax=\"{{max}}\" ng-style=\"{width: (percent < 100 ? percent : 100) + '%'}\" aria-valuetext=\"{{percent | number:0}}%\" aria-labelledby=\"{{::title}}\" ng-transclude></div>\n" + "</div>\n" + "");
	}]);

/***/ },

/***/ 74:
/***/ function(module, exports) {

	"use strict";
	
	angular.module("uib/template/progressbar/progress.html", []).run(["$templateCache", function ($templateCache) {
	  $templateCache.put("uib/template/progressbar/progress.html", "<div class=\"progress\" ng-transclude aria-labelledby=\"{{::title}}\"></div>");
	}]);

/***/ },

/***/ 75:
/***/ function(module, exports) {

	"use strict";
	
	angular.module("uib/template/progressbar/bar.html", []).run(["$templateCache", function ($templateCache) {
	  $templateCache.put("uib/template/progressbar/bar.html", "<div class=\"progress-bar\" ng-class=\"type && 'progress-bar-' + type\" role=\"progressbar\" aria-valuenow=\"{{value}}\" aria-valuemin=\"0\" aria-valuemax=\"{{max}}\" ng-style=\"{width: (percent < 100 ? percent : 100) + '%'}\" aria-valuetext=\"{{percent | number:0}}%\" aria-labelledby=\"{{::title}}\" ng-transclude></div>\n" + "");
	}]);

/***/ },

/***/ 76:
/***/ function(module, exports) {

	'use strict';
	
	angular.module('ui.bootstrap.progressbar', []).constant('uibProgressConfig', {
	  animate: true,
	  max: 100
	}).controller('UibProgressController', ['$scope', '$attrs', 'uibProgressConfig', function ($scope, $attrs, progressConfig) {
	  var self = this,
	      animate = angular.isDefined($attrs.animate) ? $scope.$parent.$eval($attrs.animate) : progressConfig.animate;
	
	  this.bars = [];
	  $scope.max = getMaxOrDefault();
	
	  this.addBar = function (bar, element, attrs) {
	    if (!animate) {
	      element.css({ 'transition': 'none' });
	    }
	
	    this.bars.push(bar);
	
	    bar.max = getMaxOrDefault();
	    bar.title = attrs && angular.isDefined(attrs.title) ? attrs.title : 'progressbar';
	
	    bar.$watch('value', function (value) {
	      bar.recalculatePercentage();
	    });
	
	    bar.recalculatePercentage = function () {
	      var totalPercentage = self.bars.reduce(function (total, bar) {
	        bar.percent = +(100 * bar.value / bar.max).toFixed(2);
	        return total + bar.percent;
	      }, 0);
	
	      if (totalPercentage > 100) {
	        bar.percent -= totalPercentage - 100;
	      }
	    };
	
	    bar.$on('$destroy', function () {
	      element = null;
	      self.removeBar(bar);
	    });
	  };
	
	  this.removeBar = function (bar) {
	    this.bars.splice(this.bars.indexOf(bar), 1);
	    this.bars.forEach(function (bar) {
	      bar.recalculatePercentage();
	    });
	  };
	
	  //$attrs.$observe('maxParam', function(maxParam) {
	  $scope.$watch('maxParam', function (maxParam) {
	    self.bars.forEach(function (bar) {
	      bar.max = getMaxOrDefault();
	      bar.recalculatePercentage();
	    });
	  });
	
	  function getMaxOrDefault() {
	    return angular.isDefined($scope.maxParam) ? $scope.maxParam : progressConfig.max;
	  }
	}]).directive('uibProgress', function () {
	  return {
	    replace: true,
	    transclude: true,
	    controller: 'UibProgressController',
	    require: 'uibProgress',
	    scope: {
	      maxParam: '=?max'
	    },
	    templateUrl: 'uib/template/progressbar/progress.html'
	  };
	}).directive('uibBar', function () {
	  return {
	    replace: true,
	    transclude: true,
	    require: '^uibProgress',
	    scope: {
	      value: '=',
	      type: '@'
	    },
	    templateUrl: 'uib/template/progressbar/bar.html',
	    link: function link(scope, element, attrs, progressCtrl) {
	      progressCtrl.addBar(scope, element, attrs);
	    }
	  };
	}).directive('uibProgressbar', function () {
	  return {
	    replace: true,
	    transclude: true,
	    controller: 'UibProgressController',
	    scope: {
	      value: '=',
	      maxParam: '=?max',
	      type: '@'
	    },
	    templateUrl: 'uib/template/progressbar/progressbar.html',
	    link: function link(scope, element, attrs, progressCtrl) {
	      progressCtrl.addBar(scope, angular.element(element.children()[0]), { title: attrs.title });
	    }
	  };
	});

/***/ }

/******/ })
});
;
//# sourceMappingURL=vendor-bb-uib-progressbar.js.map