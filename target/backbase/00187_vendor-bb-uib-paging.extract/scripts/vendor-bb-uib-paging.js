(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vendor-bb-angular"));
	else if(typeof define === 'function' && define.amd)
		define("vendor-bb-uib-paging", ["vendor-bb-angular"], factory);
	else if(typeof exports === 'object')
		exports["vendor-bb-uib-paging"] = factory(require("vendor-bb-angular"));
	else
		root["vendor-bb-uib-paging"] = factory(root["vendor-bb-angular"]);
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

	module.exports = __webpack_require__(59);

/***/ },

/***/ 2:
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ },

/***/ 59:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(2);
	__webpack_require__(60);
	
	var MODULE_NAME = 'vendor-bb-uib-paging';
	
	angular.module(MODULE_NAME, ['ui.bootstrap.paging']);
	
	module.exports = MODULE_NAME;

/***/ },

/***/ 60:
/***/ function(module, exports) {

	'use strict';
	
	angular.module('ui.bootstrap.paging', [])
	/**
	 * Helper internal service for generating common controller code between the
	 * pager and pagination components
	 */
	.factory('uibPaging', ['$parse', function ($parse) {
	  return {
	    create: function create(ctrl, $scope, $attrs) {
	      ctrl.setNumPages = $attrs.numPages ? $parse($attrs.numPages).assign : angular.noop;
	      ctrl.ngModelCtrl = { $setViewValue: angular.noop }; // nullModelCtrl
	      ctrl._watchers = [];
	
	      ctrl.init = function (ngModelCtrl, config) {
	        ctrl.ngModelCtrl = ngModelCtrl;
	        ctrl.config = config;
	
	        ngModelCtrl.$render = function () {
	          ctrl.render();
	        };
	
	        if ($attrs.itemsPerPage) {
	          ctrl._watchers.push($scope.$parent.$watch($attrs.itemsPerPage, function (value) {
	            ctrl.itemsPerPage = parseInt(value, 10);
	            $scope.totalPages = ctrl.calculateTotalPages();
	            ctrl.updatePage();
	          }));
	        } else {
	          ctrl.itemsPerPage = config.itemsPerPage;
	        }
	
	        $scope.$watch('totalItems', function (newTotal, oldTotal) {
	          if (angular.isDefined(newTotal) || newTotal !== oldTotal) {
	            $scope.totalPages = ctrl.calculateTotalPages();
	            ctrl.updatePage();
	          }
	        });
	      };
	
	      ctrl.calculateTotalPages = function () {
	        var totalPages = ctrl.itemsPerPage < 1 ? 1 : Math.ceil($scope.totalItems / ctrl.itemsPerPage);
	        return Math.max(totalPages || 0, 1);
	      };
	
	      ctrl.render = function () {
	        $scope.page = parseInt(ctrl.ngModelCtrl.$viewValue, 10) || 1;
	      };
	
	      $scope.selectPage = function (page, evt) {
	        if (evt) {
	          evt.preventDefault();
	        }
	
	        var clickAllowed = !$scope.ngDisabled || !evt;
	        if (clickAllowed && $scope.page !== page && page > 0 && page <= $scope.totalPages) {
	          if (evt && evt.target) {
	            evt.target.blur();
	          }
	          ctrl.ngModelCtrl.$setViewValue(page);
	          ctrl.ngModelCtrl.$render();
	        }
	      };
	
	      $scope.getText = function (key) {
	        return $scope[key + 'Text'] || ctrl.config[key + 'Text'];
	      };
	
	      $scope.noPrevious = function () {
	        return $scope.page === 1;
	      };
	
	      $scope.noNext = function () {
	        return $scope.page === $scope.totalPages;
	      };
	
	      ctrl.updatePage = function () {
	        ctrl.setNumPages($scope.$parent, $scope.totalPages); // Readonly variable
	
	        if ($scope.page > $scope.totalPages) {
	          $scope.selectPage($scope.totalPages);
	        } else {
	          ctrl.ngModelCtrl.$render();
	        }
	      };
	
	      $scope.$on('$destroy', function () {
	        while (ctrl._watchers.length) {
	          ctrl._watchers.shift()();
	        }
	      });
	    }
	  };
	}]);

/***/ }

/******/ })
});
;
//# sourceMappingURL=vendor-bb-uib-paging.js.map