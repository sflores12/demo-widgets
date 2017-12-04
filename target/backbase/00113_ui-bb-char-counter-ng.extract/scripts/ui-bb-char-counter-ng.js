(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vendor-bb-angular"));
	else if(typeof define === 'function' && define.amd)
		define("ui-bb-char-counter-ng", ["vendor-bb-angular"], factory);
	else if(typeof exports === 'object')
		exports["ui-bb-char-counter-ng"] = factory(require("vendor-bb-angular"));
	else
		root["ui-bb-char-counter-ng"] = factory(root["vendor-bb-angular"]);
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

	module.exports = __webpack_require__(31);

/***/ }),

/***/ 2:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ }),

/***/ 31:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _vendorBbAngular = __webpack_require__(2);
	
	var _vendorBbAngular2 = _interopRequireDefault(_vendorBbAngular);
	
	var _component = __webpack_require__(32);
	
	var _component2 = _interopRequireDefault(_component);
	
	var _controller = __webpack_require__(33);
	
	var _controller2 = _interopRequireDefault(_controller);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = _vendorBbAngular2.default.module('ui-bb-char-counter-ng', []).component('uiBbCharCounterNg', _component2.default).controller('controller', ['$scope', '$document', _controller2.default]).name; /**
	                                                                                                                                                                                                                   * @module ui-bb-char-counter-ng
	                                                                                                                                                                                                                   * @description
	                                                                                                                                                                                                                   * UI component for displaying chars counter.
	                                                                                                                                                                                                                   *
	                                                                                                                                                                                                                   * @example
	                                                                                                                                                                                                                   * // In an extension:
	                                                                                                                                                                                                                   * // file: scripts/index.js
	                                                                                                                                                                                                                   * import uiBbCharCounterNg from 'ui-bb-char-counter-ng';
	                                                                                                                                                                                                                   *
	                                                                                                                                                                                                                   * export const dependencyKeys = [
	                                                                                                                                                                                                                   *   uiBbCharCounterNg,
	                                                                                                                                                                                                                   * ];
	                                                                                                                                                                                                                   *
	                                                                                                                                                                                                                   * // file: templates/template.ng.html
	                                                                                                                                                                                                                   * <textarea name="description"></textarea>
	                                                                                                                                                                                                                   * <ui-bb-char-counter-ng
	                                                                                                                                                                                                                   *   data-state="stateTextarea"
	                                                                                                                                                                                                                   *   data-text-el="$ctrl.textElTextarea"
	                                                                                                                                                                                                                   *   data-config="$ctrl.configTextarea">
	                                                                                                                                                                                                                   * </ui-bb-char-counter-ng>
	                                                                                                                                                                                                                   */

/***/ }),

/***/ 32:
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * @name uiBbCharCounterNg
	 * @type {object}
	 *
	 * @property {HTMLElement} textEl Text input DOM element
	 * @property {string} textElQuery for searching element by query
	 * @property {config} config Component configuration
	 * @property {state} state Component state
	 */
	var component = {
	  bindings: {
	    textEl: '<',
	    textElQuery: '@',
	    config: '<',
	    state: '=?'
	  },
	  controller: 'controller',
	  template: '\n  <div\n    data-ng-if="$ctrl.isTextEl"\n    class="{{ $ctrl.config.initStyling }}"\n    data-ng-class="{ \'text-danger\': !$ctrl.state.isValid }">\n    {{ $ctrl.state.counter }}/{{ $ctrl.config.maxChars }}\n  </div>\n  '
	};
	
	exports.default = component;
	
	/**
	 * @typedef {Object} config
	 * @property {?number} maxChars Maximum chars allowed (140)
	 * @property {?string} initStyling CSS classes to be added on init ("text-left" - default)
	 * @property {?boolean} blockTyping If true, user prevented to input when limit reached (false)
	 */
	
	/**
	 * @typedef {Object} state
	 * @property {?number} counter Chars count
	 * @property {?boolean} isValid Flag is true if limit is not reached and false otherwise
	 */

/***/ }),

/***/ 33:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = controller;
	
	var _constants = __webpack_require__(34);
	
	function controller($scope, $document) {
	  var ctrl = this;
	
	  /**
	   * @name updateCounterState
	   * @type {function}
	   * @inner
	   *
	   * @description
	   * Applies changes of attached input element into component's state object
	   */
	  var updateCounterState = function updateCounterState() {
	    var counter = ctrl.textEl.value.length;
	    $scope.$apply(function () {
	      ctrl.state = {
	        counter: counter,
	        isValid: counter <= ctrl.config.maxChars
	      };
	    });
	  };
	
	  /**
	   * @name preventInput
	   * @type {function}
	   *
	   * @description
	   * Prevent from further input in case of respective config property is true
	   * and the input limit is reached
	   *
	   * @param {KeyboardEvent} event
	   */
	  var preventInput = function preventInput(event) {
	    var isDeleting = !event || event && (event.keyCode === _constants.KeyboardKeys.BackSpace || event.keyCode === _constants.KeyboardKeys.Delete);
	
	    if (ctrl.textEl.value.length >= ctrl.config.maxChars && !isDeleting) {
	      event.preventDefault();
	    }
	  };
	
	  /**
	   * @name $onInit
	   * @type {function}
	   *
	   * @description
	   * Init hook - initialize component model
	   */
	  function $onInit() {
	    if (!ctrl.textEl && ctrl.textElQuery) {
	      ctrl.textEl = $document[0].querySelector(ctrl.textElQuery);
	    }
	
	    // Should be native element
	    ctrl.isTextEl = ctrl.textEl && ctrl.textEl.tagName && _constants.ValidElementsList.indexOf(ctrl.textEl.tagName.toUpperCase()) !== -1;
	
	    if (!ctrl.isTextEl) {
	      return;
	    }
	
	    // Init state
	    ctrl.state = Object.assign({}, _constants.InitialState, ctrl.state);
	
	    // Init configuration
	    ctrl.config = Object.assign({}, _constants.InitialConfig, ctrl.config);
	
	    // Add keypress listener to text input (to prevent input if needed)
	    if (ctrl.config.blockTyping) {
	      ctrl.textEl.addEventListener('keypress', preventInput, false);
	    }
	
	    // Add keyup listener to text input (to check input limits)
	    ctrl.textEl.addEventListener('keyup', updateCounterState, false);
	  }
	
	  Object.assign(ctrl, {
	    $onInit: $onInit
	  });
	}

/***/ }),

/***/ 34:
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var InitialConfig = exports.InitialConfig = {
	  maxChars: 140,
	  initStyling: 'text-left',
	  blockTyping: false
	};
	
	var InitialState = exports.InitialState = {
	  counter: 0,
	  isValid: true
	};
	
	var ValidElementsList = exports.ValidElementsList = ['TEXTAREA', 'INPUT'];
	
	var KeyboardKeys = exports.KeyboardKeys = {
	  BackSpace: 8,
	  Delete: 46
	};

/***/ })

/******/ })
});
;
//# sourceMappingURL=ui-bb-char-counter-ng.js.map