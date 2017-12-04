(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vendor-bb-angular"), require("lib-bb-state-container"));
	else if(typeof define === 'function' && define.amd)
		define("lib-bb-view-model-ng", ["vendor-bb-angular", "lib-bb-state-container"], factory);
	else if(typeof exports === 'object')
		exports["lib-bb-view-model-ng"] = factory(require("vendor-bb-angular"), require("lib-bb-state-container"));
	else
		root["lib-bb-view-model-ng"] = factory(root["vendor-bb-angular"], root["lib-bb-state-container"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_5__, __WEBPACK_EXTERNAL_MODULE_65__) {
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

	module.exports = __webpack_require__(76);

/***/ }),

/***/ 5:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_5__;

/***/ }),

/***/ 65:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_65__;

/***/ }),

/***/ 76:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.bbViewModelKey = undefined;
	
	var _vendorBbAngular = __webpack_require__(5);
	
	var _vendorBbAngular2 = _interopRequireDefault(_vendorBbAngular);
	
	var _libBbStateContainer = __webpack_require__(65);
	
	var _libBbStateContainer2 = _interopRequireDefault(_libBbStateContainer);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/* eslint max-len: ["error", 100, { "ignoreComments": true }] */
	
	/**
	 * @module lib-bb-view-model-ng
	 *
	 * @deprecated since version Building Blocks 2.6.0. See {@link module:lib-bb-state-container-ng.lib-bb-state-container-ng} for the new library to support widget state.
	 *
	 * @description Adds a state container (See
	 * {@link module:lib-bb-state-container.lib-bb-state-container}) to the widget's scope as `vm`.
	 *
	 * This can be used to give widget *extensions* ownership over the view model.
	 *
	 * The view model is also added to the context for extension intents and helpers, See also:
	 *  - Extension {@link module:lib-bb-extension-intents-ng.IntentContext}
	 *  - Extension {@link module:lib-bb-extension-helpers-ng.HelperContext}
	 *  - Extension {@link module:lib-bb-extension-events-ng.EventContext}
	 *
	 * @example
	 * // Extension JS: Set a "view state" on the view model when an intent is triggered
	 * export const intents = ({ viewModel: vm }) => ({
	 *   viewList: handleRequest('todos.list', vm.createAction((state) => {
	 *     state.template = '#widget-bb-todo-ng/list.html';
	 *     return state;
	 *   }))
	 * });
	 *
	 * <!-- Extension template: Use `vm` on the scope -->
	 * <h2>Todo</h2>
	 * <div>
	 *   <ng-include src="vm.template"></ng-include>
	 * </div>
	 * <script type="text/ng-template" id="#widget-bb-todo-ng/list.html">
	 *   <ul><li ng-repeat="todo in vm.todos track by todo.id">{{todo.title}}</li></ul>
	 * </script>
	 */
	
	var moduleKey = 'lib-bb-view-model-ng';
	
	/**
	 * @name bbViewModelKey
	 * @type {string}
	 * @description The injector key to be used to provide the view model state container
	 */
	var bbViewModelKey = exports.bbViewModelKey = moduleKey + ':viewModel';
	
	function deprecated() {
	  if (deprecated.warned) return;
	  // eslint-disable-next-line no-console
	  console.warn('DEPRECATED', 'The scope variable `vm` from `lib-bb-view-model-ng` is ' + 'deprecated, you should use `state` from `lib-bb-state-container` instead');
	  deprecated.warned = true;
	}
	
	exports.default = _vendorBbAngular2.default.module(moduleKey, []).provider(bbViewModelKey, function () {
	  var initialState = {};
	  return {
	    setInitialState: function setInitialState(state) {
	      initialState = state;
	    },
	    $get: function $get() {
	      return (0, _libBbStateContainer2.default)(initialState);
	    }
	  };
	}).run(['$rootScope', bbViewModelKey, function ($scope, viewModel) {
	  Object.defineProperty($scope, 'vm', {
	    get: function get() {
	      deprecated();
	      return viewModel.getState();
	    }
	  });
	}]).name;

/***/ })

/******/ })
});
;
//# sourceMappingURL=lib-bb-view-model-ng.js.map