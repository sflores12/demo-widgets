(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vendor-bb-angular"));
	else if(typeof define === 'function' && define.amd)
		define("ui-bb-search-box-ng", ["vendor-bb-angular"], factory);
	else if(typeof exports === 'object')
		exports["ui-bb-search-box-ng"] = factory(require("vendor-bb-angular"));
	else
		root["ui-bb-search-box-ng"] = factory(root["vendor-bb-angular"]);
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

	module.exports = __webpack_require__(118);

/***/ }),

/***/ 2:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ }),

/***/ 118:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _vendorBbAngular = __webpack_require__(2);
	
	var _vendorBbAngular2 = _interopRequireDefault(_vendorBbAngular);
	
	var _component = __webpack_require__(119);
	
	var _component2 = _interopRequireDefault(_component);
	
	var _controller = __webpack_require__(121);
	
	var _controller2 = _interopRequireDefault(_controller);
	
	var _constants = __webpack_require__(120);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * The angular module name
	 * @name default
	 * @type {string}
	 */
	/**
	 * @module ui-bb-search-box-ng
	 *
	 * @description
	 * Search box component supporting typeahead and submit search,
	 * including clear text button
	 *
	 * @example
	 * // In an extension:
	 * // file: scripts/index.js
	 * import uiBbSearchBoxNgKey from 'ui-bb-search-box-ng';
	 *
	 * export const dependencyKeys = [
	 *   uiBbSearchBoxNgKey,
	 * ];
	 *
	 * // file: templates/template.ng.html
	 * <ui-bb-search-box-ng
	 *   config="{
	 *     labels: {
	 *       title: 'Search',
	 *       placeholder: 'Enter search text...',
	 *       clear: 'Clear text',
	 *       submit: 'Submit search',
	 *     }
	 *   }"
	 *   on-change="(search) => {}"
	 *   on-submit="(search) => {}">
	 * </ui-bb-search-box-ng>
	 */
	
	exports.default = _vendorBbAngular2.default.module(_constants.MODULE_KEY, []).component(_constants.COMPONENT_KEY, _component2.default).controller(_constants.CONTROLLER_KEY, ['$element',
	/* Into */
	_controller2.default]).name;

/***/ }),

/***/ 119:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _constants = __webpack_require__(120);
	
	/**
	 * @name uiBBSearchBoxComponent
	 * @type {object}
	 *
	 * @property {Config}    config         Configuration object
	 * @property {?Boolean}  disabled       Enables/disabled component
	 * @property {String}    ngModel        Component model value
	 * @property {?Function} onChange       Function to attach to on change event,
	 *                                      it will be called every time user adds
	 *                                      text to component
	 * @property {?Function} onSubmit       Function to attach to on submit event,
	 *                                      the component will be submitted
	 *                                      after user pressed enter and it
	 *                                      has a value
	 * @property {?Function} onClear        Function to attach to on clear event,
	 *                                      when clicking clear button event will be fired.
	 * @property {boolean}   isLoading      Controls whether or not loading indicator is visible
	 * @property {boolean}   forcedSubmit   Controls whether or not onSubmit callback
	 *                                      should be triggered regardless to state of ngModel
	 *
	 */
	
	/**
	 * Config type definition
	 * @typedef {Object} Config
	 * @property {String}   id              Id of the input
	 * @property {String}   name            Name of the input
	 * @property {?Number}  debounce        Time in ms to start search after writting,
	 *                                      0 to start search immediately after writing
	 * @property {?Boolean} hideButton      Controls whether or not should hide action button
	 * @property {?Boolean} showIcon        Controls whether or not should show search icon
	 * @property {?String}  iconClasses     String with css-classes for button icon
	 * @property {Labels}   Labels          Texts used in component
	 */
	
	/**
	 * Labels type definition
	 * @typedef {Object} Labels
	*  @property {String} title             Accessibility label for component
	 * @property {String} placeholder       Placeholder label for the search input
	 * @property {String} clear             Accesibility label for clear button
	 * @property {String} button            Accesibility label for main button
	 */
	var component = {
	  bindings: {
	    config: '<',
	    disabled: '<',
	    ngModel: '<',
	    onChange: '&',
	    onSubmit: '&',
	    onClear: '&',
	    isLoading: '<',
	    forcedSubmit: '<'
	  },
	  controller: _constants.CONTROLLER_KEY,
	  template: '\n    <div class="bb-search-box"\n      data-ng-class="{\n        empty: !$ctrl.hasValue(),\n        disabled: $ctrl.disabled\n      }">\n      <label for="bb-search-box-{{ $ctrl.config.id }}"\n        class="sr-only"\n        data-ng-bind="$ctrl.config.labels.title">\n      </label>\n      <span class="bb-search-box-icon text-center"\n        data-ng-if="::$ctrl.config.showIcon">\n        <i aria-hidden="true" class="fa fa-search"></i>\n      </span>\n      <button type="button"\n        class="close bb-search-box-clear"\n        data-ng-class="{ \'shift-right\': $ctrl.config.hideButton }"\n        data-role="search-clear-button"\n        data-ng-attr-aria-label="{{ $ctrl.config.labels.clear }}"\n        data-ng-disabled="$ctrl.disabled"\n        data-ng-click="$ctrl.clear()"\n        data-ng-show="$ctrl.hasValue() && !$ctrl.state.isLoading">\n        <span aria-hidden="true">&times;</span>\n      </button>\n      <span class="bb-search-box-spinner"\n        data-ng-class="{ \'shift-right\': $ctrl.config.hideButton }"\n        data-ng-attr-aria-label="{{ $ctrl.config.labels.loading }}"\n        data-ng-show="$ctrl.state.isLoading">\n      </span>\n      <div class="bb-search-box-wrapper"\n        data-ng-class="{ \'input-group\': !$ctrl.config.hideButton }">\n        <input type="search"\n          id="bb-search-box-{{ $ctrl.config.id }}"\n          name="{{ $ctrl.config.name }}"\n          autocomplete="off"\n          class="form-control bb-search-box-input"\n          data-role="search-input"\n          placeholder="{{ $ctrl.config.labels.placeholder }}"\n          data-ng-disabled="$ctrl.disabled"\n          data-ng-change="$ctrl.setValue()"\n          data-ng-keyup="$ctrl.onKeyup($event)"\n          data-ng-model="$ctrl.state.value"\n          data-ng-class="{ \'pl-7\': $ctrl.config.showIcon }"\n          data-ng-model-options="{ debounce: $ctrl.config.debounce || 0 }">\n        <span class="input-group-btn" data-ng-if="!$ctrl.config.hideButton">\n          <button type="button"\n            class="btn btn-default"\n            data-role="search-button"\n            data-ng-attr-aria-label="{{ $ctrl.config.labels.submit }}"\n            data-ng-disabled="$ctrl.disabled"\n            data-ng-click="$ctrl.submitSearch()">\n            <i aria-hidden="true" data-ng-class="$ctrl.config.iconClasses || \'fa fa-search\'"></i>\n          </button>\n        </span>\n      </div>\n    </div>\n  '
	};
	
	exports.default = component;

/***/ }),

/***/ 120:
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var MODULE_KEY = exports.MODULE_KEY = 'ui-bb-search-box-ng';
	
	var CONTROLLER_KEY = exports.CONTROLLER_KEY = MODULE_KEY + ':controller';
	
	var COMPONENT_KEY = exports.COMPONENT_KEY = 'uiBbSearchBoxNg';

/***/ }),

/***/ 121:
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = controller;
	function controller(element) {
	  var ctrl = this;
	
	  var ngModelCtrl = element.controller('ngModel');
	  var input = element.find('input').eq(0);
	
	  var state = {};
	
	  var KeyCodes = {
	    ENTER: 13
	  };
	
	  var getSearchValue = function getSearchValue() {
	    return { search: state.value };
	  };
	
	  var hasValue = function hasValue() {
	    return Boolean(ctrl.state.value && ctrl.state.value.trim());
	  };
	
	  var allowRequest = function allowRequest() {
	    return ctrl.state.valueChanged || ctrl.forcedSubmit;
	  };
	
	  var setFocus = function setFocus() {
	    input[0].focus();
	  };
	
	  var setValue = function setValue() {
	    ngModelCtrl.$setViewValue(state.value);
	  };
	
	  var submitSearch = function submitSearch() {
	    if (allowRequest()) {
	      ctrl.state.valueChanged = false;
	      ctrl.onSubmit(getSearchValue());
	    }
	  };
	
	  var onStateChange = function onStateChange(search) {
	    state.value = search;
	    ctrl.onChange(getSearchValue());
	
	    if (state.resetSearch) {
	      state.resetSearch = false;
	      ctrl.onClear();
	      setFocus();
	    }
	  };
	
	  var clear = function clear() {
	    state.resetSearch = true;
	    state.value = null;
	    setValue();
	  };
	
	  var onKeyup = function onKeyup(event) {
	    if (event.keyCode === KeyCodes.ENTER && allowRequest()) {
	      ctrl.state.valueChanged = false;
	      ctrl.onSubmit(getSearchValue());
	    }
	  };
	
	  var $onChanges = function $onChanges(_ref) {
	    var ngModel = _ref.ngModel,
	        isLoading = _ref.isLoading;
	
	    if (ngModel && ngModel.currentValue !== ngModel.previousValue) {
	      if (!ngModel.isFirstChange()) {
	        ctrl.state.valueChanged = true;
	      }
	      onStateChange(ngModel.currentValue);
	    }
	
	    if (isLoading && isLoading.currentValue !== isLoading.previousValue) {
	      state.isLoading = isLoading.currentValue;
	    }
	  };
	
	  Object.assign(ctrl, {
	    $onChanges: $onChanges,
	
	    state: state,
	    setValue: setValue,
	    clear: clear,
	    hasValue: hasValue,
	    onKeyup: onKeyup,
	    submitSearch: submitSearch
	  });
	}

/***/ })

/******/ })
});
;
//# sourceMappingURL=ui-bb-search-box-ng.js.map