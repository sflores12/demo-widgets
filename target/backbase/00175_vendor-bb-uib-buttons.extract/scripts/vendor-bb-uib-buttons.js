(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vendor-bb-angular"));
	else if(typeof define === 'function' && define.amd)
		define("vendor-bb-uib-buttons", ["vendor-bb-angular"], factory);
	else if(typeof exports === 'object')
		exports["vendor-bb-uib-buttons"] = factory(require("vendor-bb-angular"));
	else
		root["vendor-bb-uib-buttons"] = factory(root["vendor-bb-angular"]);
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

	module.exports = __webpack_require__(10);

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
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(2);
	__webpack_require__(11);
	
	var MODULE_NAME = 'vendor-bb-uib-buttons';
	
	angular.module(MODULE_NAME, ['ui.bootstrap.buttons']);
	
	module.exports = MODULE_NAME;

/***/ },
/* 11 */
/***/ function(module, exports) {

	'use strict';
	
	angular.module('ui.bootstrap.buttons', []).constant('uibButtonConfig', {
	  activeClass: 'active',
	  toggleEvent: 'click'
	}).controller('UibButtonsController', ['uibButtonConfig', function (buttonConfig) {
	  this.activeClass = buttonConfig.activeClass || 'active';
	  this.toggleEvent = buttonConfig.toggleEvent || 'click';
	}]).directive('uibBtnRadio', ['$parse', function ($parse) {
	  return {
	    require: ['uibBtnRadio', 'ngModel'],
	    controller: 'UibButtonsController',
	    controllerAs: 'buttons',
	    link: function link(scope, element, attrs, ctrls) {
	      var buttonsCtrl = ctrls[0],
	          ngModelCtrl = ctrls[1];
	      var uncheckableExpr = $parse(attrs.uibUncheckable);
	
	      element.find('input').css({ display: 'none' });
	
	      //model -> UI
	      ngModelCtrl.$render = function () {
	        element.toggleClass(buttonsCtrl.activeClass, angular.equals(ngModelCtrl.$modelValue, scope.$eval(attrs.uibBtnRadio)));
	      };
	
	      //ui->model
	      element.on(buttonsCtrl.toggleEvent, function () {
	        if (attrs.disabled) {
	          return;
	        }
	
	        var isActive = element.hasClass(buttonsCtrl.activeClass);
	
	        if (!isActive || angular.isDefined(attrs.uncheckable)) {
	          scope.$apply(function () {
	            ngModelCtrl.$setViewValue(isActive ? null : scope.$eval(attrs.uibBtnRadio));
	            ngModelCtrl.$render();
	          });
	        }
	      });
	
	      if (attrs.uibUncheckable) {
	        scope.$watch(uncheckableExpr, function (uncheckable) {
	          attrs.$set('uncheckable', uncheckable ? '' : undefined);
	        });
	      }
	    }
	  };
	}]).directive('uibBtnCheckbox', function () {
	  return {
	    require: ['uibBtnCheckbox', 'ngModel'],
	    controller: 'UibButtonsController',
	    controllerAs: 'button',
	    link: function link(scope, element, attrs, ctrls) {
	      var buttonsCtrl = ctrls[0],
	          ngModelCtrl = ctrls[1];
	
	      element.find('input').css({ display: 'none' });
	
	      function getTrueValue() {
	        return getCheckboxValue(attrs.btnCheckboxTrue, true);
	      }
	
	      function getFalseValue() {
	        return getCheckboxValue(attrs.btnCheckboxFalse, false);
	      }
	
	      function getCheckboxValue(attribute, defaultValue) {
	        return angular.isDefined(attribute) ? scope.$eval(attribute) : defaultValue;
	      }
	
	      //model -> UI
	      ngModelCtrl.$render = function () {
	        element.toggleClass(buttonsCtrl.activeClass, angular.equals(ngModelCtrl.$modelValue, getTrueValue()));
	      };
	
	      //ui->model
	      element.on(buttonsCtrl.toggleEvent, function () {
	        if (attrs.disabled) {
	          return;
	        }
	
	        scope.$apply(function () {
	          ngModelCtrl.$setViewValue(element.hasClass(buttonsCtrl.activeClass) ? getFalseValue() : getTrueValue());
	          ngModelCtrl.$render();
	        });
	      });
	    }
	  };
	});

/***/ }
/******/ ])
});
;
//# sourceMappingURL=vendor-bb-uib-buttons.js.map