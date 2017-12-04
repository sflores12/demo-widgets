(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vendor-bb-angular"));
	else if(typeof define === 'function' && define.amd)
		define("vendor-bb-uib-tabs", ["vendor-bb-angular"], factory);
	else if(typeof exports === 'object')
		exports["vendor-bb-uib-tabs"] = factory(require("vendor-bb-angular"));
	else
		root["vendor-bb-uib-tabs"] = factory(root["vendor-bb-angular"]);
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

	module.exports = __webpack_require__(82);

/***/ },

/***/ 2:
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ },

/***/ 82:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(2);
	__webpack_require__(83);
	__webpack_require__(84);
	__webpack_require__(85);
	
	var MODULE_NAME = 'vendor-bb-uib-tabs';
	
	angular.module(MODULE_NAME, ['ui.bootstrap.tabs', 'uib/template/tabs/tab.html', 'uib/template/tabs/tabset.html']);
	
	module.exports = MODULE_NAME;

/***/ },

/***/ 83:
/***/ function(module, exports) {

	"use strict";
	
	angular.module("uib/template/tabs/tab.html", []).run(["$templateCache", function ($templateCache) {
	  $templateCache.put("uib/template/tabs/tab.html", "<li ng-class=\"[{active: active, disabled: disabled}, classes]\" class=\"uib-tab nav-item\">\n" + "  <a href ng-click=\"select($event)\" class=\"nav-link\" uib-tab-heading-transclude>{{heading}}</a>\n" + "</li>\n" + "");
	}]);

/***/ },

/***/ 84:
/***/ function(module, exports) {

	"use strict";
	
	angular.module("uib/template/tabs/tabset.html", []).run(["$templateCache", function ($templateCache) {
	  $templateCache.put("uib/template/tabs/tabset.html", "<div>\n" + "  <ul class=\"nav nav-{{tabset.type || 'tabs'}}\" ng-class=\"{'nav-stacked': vertical, 'nav-justified': justified}\" ng-transclude></ul>\n" + "  <div class=\"tab-content\">\n" + "    <div class=\"tab-pane\"\n" + "         ng-repeat=\"tab in tabset.tabs\"\n" + "         ng-class=\"{active: tabset.active === tab.index}\"\n" + "         uib-tab-content-transclude=\"tab\">\n" + "    </div>\n" + "  </div>\n" + "</div>\n" + "");
	}]);

/***/ },

/***/ 85:
/***/ function(module, exports) {

	'use strict';
	
	angular.module('ui.bootstrap.tabs', []).controller('UibTabsetController', ['$scope', function ($scope) {
	  var ctrl = this,
	      oldIndex;
	  ctrl.tabs = [];
	
	  ctrl.select = function (index, evt) {
	    if (!destroyed) {
	      var previousIndex = findTabIndex(oldIndex);
	      var previousSelected = ctrl.tabs[previousIndex];
	      if (previousSelected) {
	        previousSelected.tab.onDeselect({
	          $event: evt,
	          $selectedIndex: index
	        });
	        if (evt && evt.isDefaultPrevented()) {
	          return;
	        }
	        previousSelected.tab.active = false;
	      }
	
	      var selected = ctrl.tabs[index];
	      if (selected) {
	        selected.tab.onSelect({
	          $event: evt
	        });
	        selected.tab.active = true;
	        ctrl.active = selected.index;
	        oldIndex = selected.index;
	      } else if (!selected && angular.isDefined(oldIndex)) {
	        ctrl.active = null;
	        oldIndex = null;
	      }
	    }
	  };
	
	  ctrl.addTab = function addTab(tab) {
	    ctrl.tabs.push({
	      tab: tab,
	      index: tab.index
	    });
	    ctrl.tabs.sort(function (t1, t2) {
	      if (t1.index > t2.index) {
	        return 1;
	      }
	
	      if (t1.index < t2.index) {
	        return -1;
	      }
	
	      return 0;
	    });
	
	    if (tab.index === ctrl.active || !angular.isDefined(ctrl.active) && ctrl.tabs.length === 1) {
	      var newActiveIndex = findTabIndex(tab.index);
	      ctrl.select(newActiveIndex);
	    }
	  };
	
	  ctrl.removeTab = function removeTab(tab) {
	    var index;
	    for (var i = 0; i < ctrl.tabs.length; i++) {
	      if (ctrl.tabs[i].tab === tab) {
	        index = i;
	        break;
	      }
	    }
	
	    if (ctrl.tabs[index].index === ctrl.active) {
	      var newActiveTabIndex = index === ctrl.tabs.length - 1 ? index - 1 : index + 1 % ctrl.tabs.length;
	      ctrl.select(newActiveTabIndex);
	    }
	
	    ctrl.tabs.splice(index, 1);
	  };
	
	  $scope.$watch('tabset.active', function (val) {
	    if (angular.isDefined(val) && val !== oldIndex) {
	      ctrl.select(findTabIndex(val));
	    }
	  });
	
	  var destroyed;
	  $scope.$on('$destroy', function () {
	    destroyed = true;
	  });
	
	  function findTabIndex(index) {
	    for (var i = 0; i < ctrl.tabs.length; i++) {
	      if (ctrl.tabs[i].index === index) {
	        return i;
	      }
	    }
	  }
	}]).directive('uibTabset', function () {
	  return {
	    transclude: true,
	    replace: true,
	    scope: {},
	    bindToController: {
	      active: '=?',
	      type: '@'
	    },
	    controller: 'UibTabsetController',
	    controllerAs: 'tabset',
	    templateUrl: function templateUrl(element, attrs) {
	      return attrs.templateUrl || 'uib/template/tabs/tabset.html';
	    },
	    link: function link(scope, element, attrs) {
	      scope.vertical = angular.isDefined(attrs.vertical) ? scope.$parent.$eval(attrs.vertical) : false;
	      scope.justified = angular.isDefined(attrs.justified) ? scope.$parent.$eval(attrs.justified) : false;
	    }
	  };
	}).directive('uibTab', ['$parse', function ($parse) {
	  return {
	    require: '^uibTabset',
	    replace: true,
	    templateUrl: function templateUrl(element, attrs) {
	      return attrs.templateUrl || 'uib/template/tabs/tab.html';
	    },
	    transclude: true,
	    scope: {
	      heading: '@',
	      index: '=?',
	      classes: '@?',
	      onSelect: '&select', //This callback is called in contentHeadingTransclude
	      //once it inserts the tab's content into the dom
	      onDeselect: '&deselect'
	    },
	    controller: function controller() {
	      //Empty controller so other directives can require being 'under' a tab
	    },
	    controllerAs: 'tab',
	    link: function link(scope, elm, attrs, tabsetCtrl, transclude) {
	      scope.disabled = false;
	      if (attrs.disable) {
	        scope.$parent.$watch($parse(attrs.disable), function (value) {
	          scope.disabled = !!value;
	        });
	      }
	
	      if (angular.isUndefined(attrs.index)) {
	        if (tabsetCtrl.tabs && tabsetCtrl.tabs.length) {
	          scope.index = Math.max.apply(null, tabsetCtrl.tabs.map(function (t) {
	            return t.index;
	          })) + 1;
	        } else {
	          scope.index = 0;
	        }
	      }
	
	      if (angular.isUndefined(attrs.classes)) {
	        scope.classes = '';
	      }
	
	      scope.select = function (evt) {
	        if (!scope.disabled) {
	          var index;
	          for (var i = 0; i < tabsetCtrl.tabs.length; i++) {
	            if (tabsetCtrl.tabs[i].tab === scope) {
	              index = i;
	              break;
	            }
	          }
	
	          tabsetCtrl.select(index, evt);
	        }
	      };
	
	      tabsetCtrl.addTab(scope);
	      scope.$on('$destroy', function () {
	        tabsetCtrl.removeTab(scope);
	      });
	
	      //We need to transclude later, once the content container is ready.
	      //when this link happens, we're inside a tab heading.
	      scope.$transcludeFn = transclude;
	    }
	  };
	}]).directive('uibTabHeadingTransclude', function () {
	  return {
	    restrict: 'A',
	    require: '^uibTab',
	    link: function link(scope, elm) {
	      scope.$watch('headingElement', function updateHeadingElement(heading) {
	        if (heading) {
	          elm.html('');
	          elm.append(heading);
	        }
	      });
	    }
	  };
	}).directive('uibTabContentTransclude', function () {
	  return {
	    restrict: 'A',
	    require: '^uibTabset',
	    link: function link(scope, elm, attrs) {
	      var tab = scope.$eval(attrs.uibTabContentTransclude).tab;
	
	      //Now our tab is ready to be transcluded: both the tab heading area
	      //and the tab content area are loaded.  Transclude 'em both.
	      tab.$transcludeFn(tab.$parent, function (contents) {
	        angular.forEach(contents, function (node) {
	          if (isTabHeading(node)) {
	            //Let tabHeadingTransclude know.
	            tab.headingElement = node;
	          } else {
	            elm.append(node);
	          }
	        });
	      });
	    }
	  };
	
	  function isTabHeading(node) {
	    return node.tagName && (node.hasAttribute('uib-tab-heading') || node.hasAttribute('data-uib-tab-heading') || node.hasAttribute('x-uib-tab-heading') || node.tagName.toLowerCase() === 'uib-tab-heading' || node.tagName.toLowerCase() === 'data-uib-tab-heading' || node.tagName.toLowerCase() === 'x-uib-tab-heading' || node.tagName.toLowerCase() === 'uib:tab-heading');
	  }
	});

/***/ }

/******/ })
});
;
//# sourceMappingURL=vendor-bb-uib-tabs.js.map