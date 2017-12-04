(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vendor-bb-angular"));
	else if(typeof define === 'function' && define.amd)
		define("ui-bb-sortable-column-ng", ["vendor-bb-angular"], factory);
	else if(typeof exports === 'object')
		exports["ui-bb-sortable-column-ng"] = factory(require("vendor-bb-angular"));
	else
		root["ui-bb-sortable-column-ng"] = factory(root["vendor-bb-angular"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_23__) {
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

	module.exports = __webpack_require__(34);

/***/ }),

/***/ 23:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_23__;

/***/ }),

/***/ 34:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _vendorBbAngular = __webpack_require__(23);
	
	var _vendorBbAngular2 = _interopRequireDefault(_vendorBbAngular);
	
	var _sortable = __webpack_require__(35);
	
	var _sortable2 = _interopRequireDefault(_sortable);
	
	var _sortDirection = __webpack_require__(36);
	
	var _sortDirection2 = _interopRequireDefault(_sortDirection);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * @name default
	 * @type {string}
	 * @description The angular module name
	 */
	exports.default = _vendorBbAngular2.default.module('ui-bb-sortable-column-ng', []).constant('sortDirection', _sortDirection2.default).directive('uiBbSortableColumnNg', ['sortDirection', _sortable2.default]).name; /**
	                                                                                                                                                                                                                      * @module ui-bb-sortable-column-ng
	                                                                                                                                                                                                                      * @description
	                                                                                                                                                                                                                      * UI component to add sortable behavior to a table header column.
	                                                                                                                                                                                                                      *
	                                                                                                                                                                                                                      * @example
	                                                                                                                                                                                                                      * // In an extension:
	                                                                                                                                                                                                                      * // file: scripts/index.js
	                                                                                                                                                                                                                      * import uiBbSortableColumnNg from 'ui-bb-sortable-column-ng';
	                                                                                                                                                                                                                      *
	                                                                                                                                                                                                                      * export const dependencyKeys = [
	                                                                                                                                                                                                                      *   uiBbSortableColumnNg,
	                                                                                                                                                                                                                      * ];
	                                                                                                                                                                                                                      *
	                                                                                                                                                                                                                      * // file: templates/template.ng.html
	                                                                                                                                                                                                                      * <th
	                                                                                                                                                                                                                      *   ui-bb-sortable-column-ng
	                                                                                                                                                                                                                      *   options="columnOptions"
	                                                                                                                                                                                                                      *   active="columnActive"
	                                                                                                                                                                                                                      *   on-sort="$ctrl.onSort(key, direction)">
	                                                                                                                                                                                                                      *   <span i18n-key="label.status"></span>
	                                                                                                                                                                                                                      * </th>
	                                                                                                                                                                                                                      */

/***/ }),

/***/ 35:
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/* eslint max-len: ["error", { "ignoreComments": true }] */
	
	/**
	 * @name uiBbSortableColumnDirective
	 * @type {object}
	 *
	 * @property {object} options
	 * @property {object} options.key The column key to sort
	 * @property {object} options.direction Default direction to sort, ascending or descending
	 * @property {boolean} active Show or hide sort caret
	 * @property {function} onSort Callback called when clicked on the column header. It is called with `key` and `direction` arguments
	 */
	var directive = function uiBbSortableColumnDirective(sortDirection) {
	  return {
	    restrict: 'A',
	    transclude: true,
	    scope: {
	      options: '=',
	      active: '=',
	      onSort: '&'
	    },
	    template: '\n      <ng-transclude data-ng-if="!options"></ng-transclude>\n      <span data-ng-click="toggleDirection()"\n        data-role="sort-{{key}}"\n        data-ng-if="options"\n        data-ng-class="{ \'bb-sortable\': key }"\n        data-ng-mouseenter="hover = true"\n        data-ng-mouseleave="hover = false">\n        <ng-transclude></ng-transclude>\n        <i data-ng-if="key"\n          aria-hidden="true"\n          class="fa bb-sortable-icon"\n          data-ng-class="{\n            invisible: !active && !hover,\n            \'fa-caret-down bb-sortable-icon-down\':\n              direction === \'' + sortDirection.DESCENDING + '\',\n            \'fa-caret-up bb-sortable-icon-up\':\n              direction === \'' + sortDirection.ASCENDING + '\'\n          }"\n        >\n        </i>\n      </span>\n    ',
	    link: function link(scope) {
	      if (!scope.options) {
	        return;
	      }
	
	      Object.assign(scope, {
	        direction: scope.options.direction === sortDirection.ASCENDING ? sortDirection.ASCENDING : sortDirection.DESCENDING,
	
	        key: scope.options.key,
	
	        /**
	         * @name toggleDirection
	         * @description
	         * If the component is active it will toggle the sort direction. Then it will call `onSort` callback.
	         * If `key` is not provided in the options it will bypass and do nothing.
	         * @type {function}
	         * @inner
	         */
	        toggleDirection: function toggleDirection() {
	          if (!scope.key) {
	            return;
	          }
	          if (scope.active) {
	            Object.assign(scope, {
	              direction: scope.direction === sortDirection.DESCENDING ? sortDirection.ASCENDING : sortDirection.DESCENDING
	            });
	          }
	          scope.onSort({ key: scope.key, direction: scope.direction });
	        }
	      });
	    }
	  };
	};
	
	exports.default = directive;

/***/ }),

/***/ 36:
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * @name sortDirection
	 * @description
	 * Enum type to describe sort direction
	 *
	 * @type {object}
	 */
	var sortDirection = {
	  ASCENDING: 'ASC',
	  DESCENDING: 'DESC'
	};
	
	exports.default = sortDirection;

/***/ })

/******/ })
});
;
//# sourceMappingURL=ui-bb-sortable-column-ng.js.map