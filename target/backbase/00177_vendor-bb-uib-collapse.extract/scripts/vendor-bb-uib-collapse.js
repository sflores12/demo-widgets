(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vendor-bb-angular"));
	else if(typeof define === 'function' && define.amd)
		define("vendor-bb-uib-collapse", ["vendor-bb-angular"], factory);
	else if(typeof exports === 'object')
		exports["vendor-bb-uib-collapse"] = factory(require("vendor-bb-angular"));
	else
		root["vendor-bb-uib-collapse"] = factory(root["vendor-bb-angular"]);
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

	module.exports = __webpack_require__(18);

/***/ },

/***/ 2:
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ },

/***/ 18:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(2);
	__webpack_require__(19);
	
	var MODULE_NAME = 'vendor-bb-uib-collapse';
	
	angular.module(MODULE_NAME, ['ui.bootstrap.collapse']);
	
	module.exports = MODULE_NAME;

/***/ },

/***/ 19:
/***/ function(module, exports) {

	'use strict';
	
	angular.module('ui.bootstrap.collapse', []).directive('uibCollapse', ['$animate', '$q', '$parse', '$injector', function ($animate, $q, $parse, $injector) {
	  var $animateCss = $injector.has('$animateCss') ? $injector.get('$animateCss') : null;
	  return {
	    link: function link(scope, element, attrs) {
	      var expandingExpr = $parse(attrs.expanding),
	          expandedExpr = $parse(attrs.expanded),
	          collapsingExpr = $parse(attrs.collapsing),
	          collapsedExpr = $parse(attrs.collapsed);
	
	      if (!scope.$eval(attrs.uibCollapse)) {
	        element.addClass('in').addClass('collapse').attr('aria-expanded', true).attr('aria-hidden', false).css({ height: 'auto' });
	      }
	
	      function expand() {
	        if (element.hasClass('collapse') && element.hasClass('in')) {
	          return;
	        }
	
	        $q.resolve(expandingExpr(scope)).then(function () {
	          element.removeClass('collapse').addClass('collapsing').attr('aria-expanded', true).attr('aria-hidden', false);
	
	          if ($animateCss) {
	            $animateCss(element, {
	              addClass: 'in',
	              easing: 'ease',
	              to: { height: element[0].scrollHeight + 'px' }
	            }).start()['finally'](expandDone);
	          } else {
	            $animate.addClass(element, 'in', {
	              to: { height: element[0].scrollHeight + 'px' }
	            }).then(expandDone);
	          }
	        });
	      }
	
	      function expandDone() {
	        element.removeClass('collapsing').addClass('collapse').css({ height: 'auto' });
	        expandedExpr(scope);
	      }
	
	      function collapse() {
	        if (!element.hasClass('collapse') && !element.hasClass('in')) {
	          return collapseDone();
	        }
	
	        $q.resolve(collapsingExpr(scope)).then(function () {
	          element
	          // IMPORTANT: The height must be set before adding "collapsing" class.
	          // Otherwise, the browser attempts to animate from height 0 (in
	          // collapsing class) to the given height here.
	          .css({ height: element[0].scrollHeight + 'px' })
	          // initially all panel collapse have the collapse class, this removal
	          // prevents the animation from jumping to collapsed state
	          .removeClass('collapse').addClass('collapsing').attr('aria-expanded', false).attr('aria-hidden', true);
	
	          if ($animateCss) {
	            $animateCss(element, {
	              removeClass: 'in',
	              to: { height: '0' }
	            }).start()['finally'](collapseDone);
	          } else {
	            $animate.removeClass(element, 'in', {
	              to: { height: '0' }
	            }).then(collapseDone);
	          }
	        });
	      }
	
	      function collapseDone() {
	        element.css({ height: '0' }); // Required so that collapse works when animation is disabled
	        element.removeClass('collapsing').addClass('collapse');
	        collapsedExpr(scope);
	      }
	
	      scope.$watch(attrs.uibCollapse, function (shouldCollapse) {
	        if (shouldCollapse) {
	          collapse();
	        } else {
	          expand();
	        }
	      });
	    }
	  };
	}]);

/***/ }

/******/ })
});
;
//# sourceMappingURL=vendor-bb-uib-collapse.js.map