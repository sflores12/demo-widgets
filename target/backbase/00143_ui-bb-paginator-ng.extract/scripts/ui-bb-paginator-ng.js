(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vendor-bb-angular"), require("vendor-bb-uib-pagination"));
	else if(typeof define === 'function' && define.amd)
		define("ui-bb-paginator-ng", ["vendor-bb-angular", "vendor-bb-uib-pagination"], factory);
	else if(typeof exports === 'object')
		exports["ui-bb-paginator-ng"] = factory(require("vendor-bb-angular"), require("vendor-bb-uib-pagination"));
	else
		root["ui-bb-paginator-ng"] = factory(root["vendor-bb-angular"], root["vendor-bb-uib-pagination"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_79__, __WEBPACK_EXTERNAL_MODULE_94__) {
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
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(93);

/***/ }),

/***/ 79:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_79__;

/***/ }),

/***/ 93:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _vendorBbAngular = __webpack_require__(79);
	
	var _vendorBbAngular2 = _interopRequireDefault(_vendorBbAngular);
	
	var _vendorBbUibPagination = __webpack_require__(94);
	
	var _vendorBbUibPagination2 = _interopRequireDefault(_vendorBbUibPagination);
	
	var _directive = __webpack_require__(95);
	
	var _directive2 = _interopRequireDefault(_directive);
	
	var _controller = __webpack_require__(96);
	
	var _controller2 = _interopRequireDefault(_controller);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * @name default
	 * @type {string}
	 * @description Pagination directive
	 */
	exports.default = _vendorBbAngular2.default.module('ui-bb-paginator-ng', [_vendorBbUibPagination2.default]).directive('uiBbPaginatorNg', _directive2.default).controller('uiBbPaginatorControllerNg', ['$scope', _controller2.default]).name;

/***/ }),

/***/ 94:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_94__;

/***/ }),

/***/ 95:
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = uiBbPaginatorDirective;
	var template = '\n    <nav\n      data-ng-hide="+itemsPerPage >= +totalItems"\n      class="bb-pagination text-center"\n      aria-label="{{ pageNavigationText }}">\n      <ul uib-pagination\n        data-boundary-link-numbers="true"\n        data-boundary-links="true"\n        data-first-text="{{ firstText }}"\n        data-last-text="{{ lastText }}"\n        data-next-text="{{ nextText }}"\n        data-previous-text="{{ previousText }}"\n\n        data-total-items="totalItems"\n        data-items-per-page="itemsPerPage"\n        data-max-size="maxNavPages"\n        data-ng-model="ngModel"\n        data-ng-disabled="ngDisabled"\n        data-ng-change="$ctrl.pageChanged()"\n        data-template-url="pagination.tpl.html">\n      </ul>\n      <script id="pagination.tpl.html" type="text/ng-template">\n        <ul class="pagination">\n          <li\n            data-ng-if="boundaryLinks"\n            data-ng-class="{disabled: noPrevious() || ngDisabled}">\n            <a href\n              data-ng-click="selectPage(1)"\n              data-role="first-page"\n              title="{{ firstText }}"\n              ><span class="fa fa-angle-double-left fa-lg" aria-hidden="true"></span></a>\n          </li>\n          <li\n            data-ng-if="directionLinks"\n            data-ng-class="{disabled: noPrevious() || ngDisabled}">\n            <a href\n              data-ng-click="selectPage(page - 1)"\n              data-role="previous-page"\n              title="{{ previousText }}"\n              ><span class="fa fa-angle-left fa-lg" aria-hidden="true"></span></a>\n          </li>\n          <li\n            data-ng-repeat="page in pages track by $index"\n            data-ng-class="{\n              active : page.active,\n              \'page-range\' : page.text == \'...\',\n              disabled : page.text == \'...\' || ngDisabled\n            }">\n            <a href\n              data-ng-click="page.text == \'...\' || selectPage(page.number)"\n              data-role="paginator-page-{{page.text}}">{{page.text}}</a>\n          </li>\n          <li\n            data-ng-if="directionLinks"\n            data-ng-class="{disabled: noNext() || ngDisabled}">\n            <a href\n              data-ng-click="selectPage(page + 1)"\n              data-role="next-page"\n              title="{{ nextText }}"\n              ><span class="fa fa-angle-right fa-lg" aria-hidden="true"></span></a>\n          </li>\n          <li\n            data-ng-if="boundaryLinks"\n            data-ng-class="{disabled: noNext() || ngDisabled}">\n            <a href\n              data-ng-click="selectPage(totalPages)"\n              data-role="last-page"\n              title="{{ lastText }}"\n              ><span class="fa fa-angle-double-right fa-lg" aria-hidden="true"></span></a>\n          </li>\n        </ul>\n      </script>\n    </nav>\n  ';
	
	function uiBbPaginatorDirective() {
	  return {
	    controllerAs: '$ctrl',
	    controller: 'uiBbPaginatorControllerNg',
	    scope: {
	      pageNavigationText: '@',
	      firstText: '@',
	      lastText: '@',
	      nextText: '@',
	      previousText: '@',
	
	      totalItems: '@',
	      itemsPerPage: '@',
	      maxNavPages: '@',
	      ngModel: '@currentPage',
	      ngDisabled: '=',
	
	      changePage: '&'
	    },
	    template: template
	  };
	}

/***/ }),

/***/ 96:
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = UiBbPaginatorController;
	/**
	 * @name UiBbPaginatorController
	 * @type {function}
	 * @description Paginator directive's controller
	 */
	function UiBbPaginatorController($scope) {
	  /**
	   * Helper inner ngModelController.
	   */
	  this.pageChanged = function () {
	    if (!$scope.ngDisabled) {
	      var params = { currentPage: $scope.ngModel };
	      $scope.changePage({ params: params });
	    }
	  };
	}

/***/ })

/******/ })
});
;
//# sourceMappingURL=ui-bb-paginator-ng.js.map