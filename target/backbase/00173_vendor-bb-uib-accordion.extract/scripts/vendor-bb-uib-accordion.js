(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vendor-bb-angular"), require("vendor-bb-uib-collapse"));
	else if(typeof define === 'function' && define.amd)
		define("vendor-bb-uib-accordion", ["vendor-bb-angular", "vendor-bb-uib-collapse"], factory);
	else if(typeof exports === 'object')
		exports["vendor-bb-uib-accordion"] = factory(require("vendor-bb-angular"), require("vendor-bb-uib-collapse"));
	else
		root["vendor-bb-uib-accordion"] = factory(root["vendor-bb-angular"], root["vendor-bb-uib-collapse"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_3__) {
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

	module.exports = __webpack_require__(1);

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(2);__webpack_require__(3);
	__webpack_require__(4);
	__webpack_require__(5);
	__webpack_require__(6);
	
	var MODULE_NAME = 'vendor-bb-uib-accordion';
	
	angular.module(MODULE_NAME, ['ui.bootstrap.accordion', 'uib/template/accordion/accordion.html', 'uib/template/accordion/accordion-group.html']);
	
	module.exports = MODULE_NAME;

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/***/ },
/* 4 */
/***/ function(module, exports) {

	"use strict";
	
	angular.module("uib/template/accordion/accordion-group.html", []).run(["$templateCache", function ($templateCache) {
	  $templateCache.put("uib/template/accordion/accordion-group.html", "<div class=\"panel\" ng-class=\"panelClass || 'panel-default'\">\n" + "  <div role=\"tab\" id=\"{{::headingId}}\" aria-selected=\"{{isOpen}}\" class=\"panel-heading\" ng-keypress=\"toggleOpen($event)\">\n" + "    <h4 class=\"panel-title\">\n" + "      <a role=\"button\" data-toggle=\"collapse\" href aria-expanded=\"{{isOpen}}\" aria-controls=\"{{::panelId}}\" tabindex=\"0\" class=\"accordion-toggle\" ng-click=\"toggleOpen()\" uib-accordion-transclude=\"heading\"><span uib-accordion-header ng-class=\"{'text-muted': isDisabled}\">{{heading}}</span></a>\n" + "    </h4>\n" + "  </div>\n" + "  <div id=\"{{::panelId}}\" aria-labelledby=\"{{::headingId}}\" aria-hidden=\"{{!isOpen}}\" role=\"tabpanel\" class=\"panel-collapse collapse\" uib-collapse=\"!isOpen\">\n" + "    <div class=\"panel-body\" ng-transclude></div>\n" + "  </div>\n" + "</div>\n" + "");
	}]);

/***/ },
/* 5 */
/***/ function(module, exports) {

	"use strict";
	
	angular.module("uib/template/accordion/accordion.html", []).run(["$templateCache", function ($templateCache) {
	  $templateCache.put("uib/template/accordion/accordion.html", "<div role=\"tablist\" class=\"panel-group\" ng-transclude></div>");
	}]);

/***/ },
/* 6 */
/***/ function(module, exports) {

	'use strict';
	
	angular.module('ui.bootstrap.accordion', ['ui.bootstrap.collapse']).constant('uibAccordionConfig', {
	  closeOthers: true
	}).controller('UibAccordionController', ['$scope', '$attrs', 'uibAccordionConfig', function ($scope, $attrs, accordionConfig) {
	  // This array keeps track of the accordion groups
	  this.groups = [];
	
	  // Ensure that all the groups in this accordion are closed, unless close-others explicitly says not to
	  this.closeOthers = function (openGroup) {
	    var closeOthers = angular.isDefined($attrs.closeOthers) ? $scope.$eval($attrs.closeOthers) : accordionConfig.closeOthers;
	    if (closeOthers) {
	      angular.forEach(this.groups, function (group) {
	        if (group !== openGroup) {
	          group.isOpen = false;
	        }
	      });
	    }
	  };
	
	  // This is called from the accordion-group directive to add itself to the accordion
	  this.addGroup = function (groupScope) {
	    var that = this;
	    this.groups.push(groupScope);
	
	    groupScope.$on('$destroy', function (event) {
	      that.removeGroup(groupScope);
	    });
	  };
	
	  // This is called from the accordion-group directive when to remove itself
	  this.removeGroup = function (group) {
	    var index = this.groups.indexOf(group);
	    if (index !== -1) {
	      this.groups.splice(index, 1);
	    }
	  };
	}])
	
	// The accordion directive simply sets up the directive controller
	// and adds an accordion CSS class to itself element.
	.directive('uibAccordion', function () {
	  return {
	    controller: 'UibAccordionController',
	    controllerAs: 'accordion',
	    transclude: true,
	    templateUrl: function templateUrl(element, attrs) {
	      return attrs.templateUrl || 'uib/template/accordion/accordion.html';
	    }
	  };
	})
	
	// The accordion-group directive indicates a block of html that will expand and collapse in an accordion
	.directive('uibAccordionGroup', function () {
	  return {
	    require: '^uibAccordion', // We need this directive to be inside an accordion
	    transclude: true, // It transcludes the contents of the directive into the template
	    replace: true, // The element containing the directive will be replaced with the template
	    templateUrl: function templateUrl(element, attrs) {
	      return attrs.templateUrl || 'uib/template/accordion/accordion-group.html';
	    },
	    scope: {
	      heading: '@', // Interpolate the heading attribute onto this scope
	      panelClass: '@?', // Ditto with panelClass
	      isOpen: '=?',
	      isDisabled: '=?'
	    },
	    controller: function controller() {
	      this.setHeading = function (element) {
	        this.heading = element;
	      };
	    },
	    link: function link(scope, element, attrs, accordionCtrl) {
	      accordionCtrl.addGroup(scope);
	
	      scope.openClass = attrs.openClass || 'panel-open';
	      scope.panelClass = attrs.panelClass || 'panel-default';
	      scope.$watch('isOpen', function (value) {
	        element.toggleClass(scope.openClass, !!value);
	        if (value) {
	          accordionCtrl.closeOthers(scope);
	        }
	      });
	
	      scope.toggleOpen = function ($event) {
	        if (!scope.isDisabled) {
	          if (!$event || $event.which === 32) {
	            scope.isOpen = !scope.isOpen;
	          }
	        }
	      };
	
	      var id = 'accordiongroup-' + scope.$id + '-' + Math.floor(Math.random() * 10000);
	      scope.headingId = id + '-tab';
	      scope.panelId = id + '-panel';
	    }
	  };
	})
	
	// Use accordion-heading below an accordion-group to provide a heading containing HTML
	.directive('uibAccordionHeading', function () {
	  return {
	    transclude: true, // Grab the contents to be used as the heading
	    template: '', // In effect remove this element!
	    replace: true,
	    require: '^uibAccordionGroup',
	    link: function link(scope, element, attrs, accordionGroupCtrl, transclude) {
	      // Pass the heading to the accordion-group controller
	      // so that it can be transcluded into the right place in the template
	      // [The second parameter to transclude causes the elements to be cloned so that they work in ng-repeat]
	      accordionGroupCtrl.setHeading(transclude(scope, angular.noop));
	    }
	  };
	})
	
	// Use in the accordion-group template to indicate where you want the heading to be transcluded
	// You must provide the property on the accordion-group controller that will hold the transcluded element
	.directive('uibAccordionTransclude', function () {
	  return {
	    require: '^uibAccordionGroup',
	    link: function link(scope, element, attrs, controller) {
	      scope.$watch(function () {
	        return controller[attrs.uibAccordionTransclude];
	      }, function (heading) {
	        if (heading) {
	          var elem = angular.element(element[0].querySelector(getHeaderSelectors()));
	          elem.html('');
	          elem.append(heading);
	        }
	      });
	    }
	  };
	
	  function getHeaderSelectors() {
	    return 'uib-accordion-header,' + 'data-uib-accordion-header,' + 'x-uib-accordion-header,' + 'uib\\:accordion-header,' + '[uib-accordion-header],' + '[data-uib-accordion-header],' + '[x-uib-accordion-header]';
	  }
	});

/***/ }
/******/ ])
});
;
//# sourceMappingURL=vendor-bb-uib-accordion.js.map