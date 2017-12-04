(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vendor-bb-angular"));
	else if(typeof define === 'function' && define.amd)
		define("ui-bb-load-more-ng", ["vendor-bb-angular"], factory);
	else if(typeof exports === 'object')
		exports["ui-bb-load-more-ng"] = factory(require("vendor-bb-angular"));
	else
		root["ui-bb-load-more-ng"] = factory(root["vendor-bb-angular"]);
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
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(90);

/***/ }),

/***/ 2:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ }),

/***/ 90:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _vendorBbAngular = __webpack_require__(2);
	
	var _vendorBbAngular2 = _interopRequireDefault(_vendorBbAngular);
	
	var _component = __webpack_require__(91);
	
	var _component2 = _interopRequireDefault(_component);
	
	var _controller = __webpack_require__(92);
	
	var _controller2 = _interopRequireDefault(_controller);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * @description The angular module name
	 * @name default
	 * @type {string}
	 */
	exports.default = _vendorBbAngular2.default.module('ui-bb-load-more-ng', []).component('uiBbLoadMoreNg', _component2.default).controller('controller', ['$timeout', _controller2.default]).name; /**
	                                                                                                                                                                                                  * @module ui-bb-load-more-ng
	                                                                                                                                                                                                  *
	                                                                                                                                                                                                  * @example
	                                                                                                                                                                                                  * // In an extension:
	                                                                                                                                                                                                  * // file: scripts/index.js
	                                                                                                                                                                                                  * import uiBbLoadMoreNgKey from 'ui-bb-load-more-ng';
	                                                                                                                                                                                                  *
	                                                                                                                                                                                                  * export const dependencyKeys = [
	                                                                                                                                                                                                  *   uiBbLoadMoreNgKey,
	                                                                                                                                                                                                  * ];
	                                                                                                                                                                                                  *
	                                                                                                                                                                                                  * // file: templates/template.ng.html
	                                                                                                                                                                                                  * <ui-bb-load-more-ng
	                                                                                                                                                                                                  *   ng-show="$ctrl.hasMore"
	                                                                                                                                                                                                  *   label="Load more"
	                                                                                                                                                                                                  *   on-load-more="$ctrl.loadMore(done)"
	                                                                                                                                                                                                  * ></ui-bb-load-more-ng>
	                                                                                                                                                                                                  */

/***/ }),

/***/ 91:
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * @name uiBbLoadMoreComponent
	 * @type {object}
	 * @description
	 * Load More Component Object
	 *
	 * @property {string} label Text to display
	 * @property {function} onLoadMore Callback to call when clicking button
	 */
	var component = {
	  bindings: {
	    label: '@',
	    onLoadMore: '&'
	  },
	  controller: 'controller',
	  template: '\n    <nav class="text-center" data-ng-class="{ disabled: $ctrl.loadingMore }">\n      <button class="btn btn-default"\n        data-ng-click="$ctrl.onClickLoadMore()"\n      >\n        {{ $ctrl.label }}\n      </button>\n    </nav>\n  '
	};
	
	exports.default = component;

/***/ }),

/***/ 92:
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = controller;
	/* global document */
	function controller($timeout) {
	  var $ctrl = this;
	  var scrollTop = void 0;
	
	  $ctrl.loadingMore = false;
	
	  var done = function done() {
	    $ctrl.loadingMore = false;
	    $timeout(function () {
	      document.body.scrollTop = scrollTop;
	    });
	  };
	
	  var onClickLoadMore = function onClickLoadMore() {
	    if ($ctrl.loadingMore) {
	      return;
	    }
	    scrollTop = document.body.scrollTop;
	    $ctrl.loadingMore = true;
	    $ctrl.onLoadMore({ done: done });
	  };
	
	  Object.assign($ctrl, {
	    onClickLoadMore: onClickLoadMore,
	    done: done
	  });
	}

/***/ })

/******/ })
});
;
//# sourceMappingURL=ui-bb-load-more-ng.js.map