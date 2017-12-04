(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vendor-bb-angular"), require("ui-bbm-maxlength-ng"));
	else if(typeof define === 'function' && define.amd)
		define("ui-bbm-textfield-ng", ["vendor-bb-angular", "ui-bbm-maxlength-ng"], factory);
	else if(typeof exports === 'object')
		exports["ui-bbm-textfield-ng"] = factory(require("vendor-bb-angular"), require("ui-bbm-maxlength-ng"));
	else
		root["ui-bbm-textfield-ng"] = factory(root["vendor-bb-angular"], root["ui-bbm-maxlength-ng"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_180__) {
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

	module.exports = __webpack_require__(179);

/***/ }),

/***/ 2:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ }),

/***/ 179:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _vendorBbAngular = __webpack_require__(2);
	
	var _vendorBbAngular2 = _interopRequireDefault(_vendorBbAngular);
	
	var _uiBbmMaxlengthNg = __webpack_require__(180);
	
	var _uiBbmMaxlengthNg2 = _interopRequireDefault(_uiBbmMaxlengthNg);
	
	var _component = __webpack_require__(181);
	
	var _component2 = _interopRequireDefault(_component);
	
	var _controller = __webpack_require__(183);
	
	var _controller2 = _interopRequireDefault(_controller);
	
	var _constants = __webpack_require__(182);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * The angular module name
	 * @name default
	 * @type {string}
	 */
	exports.default = _vendorBbAngular2.default.module(_constants.MODULE_KEY, [_uiBbmMaxlengthNg2.default]).component(_constants.COMPONENT_KEY, _component2.default).controller(_constants.CONTROLLER_KEY, ['$element', '$timeout',
	/* Into */
	_controller2.default]).name; /**
	                              * @module ui-bbm-textfield-ng
	                              *
	                              * @description
	                              * Mobile specific textfield component with extra features such as highlighting
	                              * the label and a clear button
	                              *
	                              * @example
	                              * // In an extension:
	                              * // file: scripts/index.js
	                              * import uiBbmTextfieldNgKey from 'ui-bbm-textfield-ng';
	                              *
	                              * export const dependencyKeys = [
	                              *   uiBbmTextfieldNgKey,
	                              * ];
	                              *
	                              * // file: templates/template.ng.html
	                              * <ui-bbm-textfield-ng
	                              *  type="text"
	                              *  name="name"
	                              *  label="{{ 'Name' | i18n }}"
	                              *  placeholder="{{ 'Name' | i18n }}"
	                              *  role="name-field"
	                              *  ng-model="$ctrl.state.name"
	                              *  disabled="false"
	                              *  required="true"
	                              *  max-length="10"
	                              *  autofocus="true"
	                              *  autocomplete="off"
	                              *  autocorrect="off"
	                              *  autocapitalize="off"
	                              *  clear-button="true">
	                              *
	                              *  <ng-messages
	                              *    for="form.name.$error"
	                              *    ng-show="form.name.$touched && form.name.$dirty && form.name.$error.required"
	                              *    data-role="alert">
	                              *    <ng-message when="required" i18n-key="errors.requiredName"></ng-message>
	                              *  </ng-messages>
	                              *
	                              * </ui-bbm-textfield-ng>
	                              */

/***/ }),

/***/ 180:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_180__;

/***/ }),

/***/ 181:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _constants = __webpack_require__(182);
	
	/**
	 * @name uiBBmTextfield
	 * @type {object}
	 *
	 * @property {string} name: the name of the input field
	 * @property {string} type: the type of the input field
	 * @property {string} label: the title of the textfield component
	 * @property {string} placeholder: the placeholder of the input field
	 * @property {object} ngModel: the model of the textfield compenent
	 * @property {?string} role: the role of the input field
	 * @property {?boolean} disabled: determines if the input field is disabled
	 * @property {?boolean} required: determines if the input field is required
	 * @property {?boolean} autofocus: determines if the input field should autofocus
	 * @property {?string} autocomplete: determines if the input field should autocomplete
	 * @property {?string} autocorrect: determines if the input field should autocorrect
	 * @property {?string} autocapitalize: determines if the input field should autocapitalize
	 * @property {?boolean} clearButton: determines if the input field should show a clear button
	 * @property {?number} maxLength: the max number of symbols that is allowed
	 */
	var component = {
	  bindings: {
	    name: '<',
	    type: '@',
	    label: '@',
	    placeholder: '@',
	    ngModel: '<',
	    role: '@',
	    disabled: '<',
	    required: '<',
	    autofocus: '<',
	    autocomplete: '<',
	    autocorrect: '<',
	    autocapitalize: '<',
	    clearButton: '<',
	    maxLength: '<'
	  },
	  transclude: true,
	  controller: _constants.CONTROLLER_KEY,
	  template: '\n    <div class="bbm-text-field">\n      <label \n        class="bbm-text-field-control bbm-form-control"\n        ng-class="{\n          \'bbm-form-control-has-clear\': $ctrl.clearButton,\n          \'bbm-form-control-has-label\': $ctrl.label,\n          \'bbm-form-control-active\':    $ctrl.state.isActive,\n          \'bbm-form-control-empty\':     $ctrl.isEmpty(),\n          \'bbm-form-control-disabled\':  $ctrl.disabled,\n          \'bbm-form-control-error\' :    $ctrl.ngModelCtrl.$dirty && \n                                        $ctrl.ngModelCtrl.$touched && \n                                        $ctrl.ngModelCtrl.$invalid,\n        }">\n        <span\n          class="bbm-text-field-label bbm-form-control-label"\n          ng-bind="$ctrl.label">  \n        </span>\n        <input\n          class="bbm-text-field-input bbm-form-control-value"\n          type="{{ $ctrl.type || \'text\' }}"\n          name="{{ $ctrl.name }}" \n          placeholder="{{ $ctrl.placeholder }}"\n          data-ng-model="$ctrl.state.value"\n          aria-label="{{ $ctrl.label }}"\n          data-role="{{ $ctrl.role }}"\n          data-ng-focus="$ctrl.setFocus()"\n          data-ng-blur="$ctrl.unsetFocus()"\n          data-ng-change="$ctrl.updateModel()"\n          data-ng-disabled="$ctrl.disabled"\n          data-ng-required="{{ $ctrl.required || false }}"\n          data-ng-attr-pattern="{{ $ctrl.isNumeric() ? \'[0-9]*\' : undefined }}"\n          data-ng-attr-step="{{ $ctrl.isNumeric() ? 1 : undefined }}"\n          data-ng-attr-autofocus="{{ $ctrl.autofocus || undefined }}"\n          data-ng-trim="false"\n          autocomplete="{{ $ctrl.autocomplete || \'off\' }}"\n          autocorrect="{{ $ctrl.autocorrect || \'off\' }}"\n          autocapitalize="{{ $ctrl.autocapitalize || \'off\' }}"\n          ui-bbm-maxlength="{{ $ctrl.maxLength >= 0 ? $ctrl.maxLength : -1 }}">\n        </input>\n        <span\n          class="bbm-text-field-value prevent-ios-click"\n          aria-hidden="true">\n          <span\n            class="bbm-text-field-value-text"\n            data-ng-bind="$ctrl.state.value">\n          </span>\n        </span>\n        <span\n          data-ng-if="$ctrl.clearButton"\n          class="bbm-text-field-clear bbm-form-control-clear"\n          data-action="clear-field">\n        </span>\n        <div class="bbm-text-field-message bbm-form-control-message">\n          <ng-transclude></ng-transclude>\n        </div>\n      </label>\n    </div>\n  '
	};
	
	exports.default = component;

/***/ }),

/***/ 182:
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var MODULE_KEY = exports.MODULE_KEY = 'ui-bbm-textfield-ng';
	
	var CONTROLLER_KEY = exports.CONTROLLER_KEY = MODULE_KEY + ':controller';
	
	var COMPONENT_KEY = exports.COMPONENT_KEY = 'uiBbmTextfieldNg';
	
	var TextfieldType = exports.TextfieldType = {
	  TEXT: 'text',
	  NUMBER: 'number'
	};

/***/ }),

/***/ 183:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = controller;
	
	var _constants = __webpack_require__(182);
	
	var _numeric = __webpack_require__(184);
	
	var _numeric2 = _interopRequireDefault(_numeric);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function controller($element, $timeout) {
	  var ctrl = this;
	
	  var ngModelCtrl = $element.controller('ngModel');
	  var input = $element.find('input').eq(0);
	
	  var initialValue = void 0;
	
	  /**
	   * ------------------------------------------------------------------------------------
	   * Public state
	   * ------------------------------------------------------------------------------------
	   */
	
	  /**
	   * UI state
	   * @type {object}
	   */
	  var state = {
	    /**
	     * Flag that indicates if the input field is active
	     * @type {boolean}
	     */
	    isActive: false,
	    /**
	     * Input value
	     * @type {string|number}
	     */
	    value: ''
	  };
	
	  /**
	   * ------------------------------------------------------------------------------------
	   * Inner functions
	   * ------------------------------------------------------------------------------------
	   */
	
	  var isNumeric = function isNumeric() {
	    return ctrl.type === _constants.TextfieldType.NUMBER;
	  };
	
	  var setInputValue = function setInputValue(value) {
	    state.value = value;
	  };
	
	  var normilizeValue = function normilizeValue(value) {
	    var newValue = value === undefined || Number.isNaN(value) ? '' : value;
	
	    return isNumeric() ? Number(newValue) : String(newValue);
	  };
	
	  var setInitialValue = function setInitialValue(value) {
	    initialValue = normilizeValue(value);
	  };
	
	  var resetTextfieldIfNeeded = function resetTextfieldIfNeeded() {
	    var value = normilizeValue(ctrl.ngModel);
	
	    if (value === initialValue) {
	      ngModelCtrl.$setPristine();
	      ngModelCtrl.$setUntouched();
	    }
	  };
	
	  /**
	   * ------------------------------------------------------------------------------------
	   * Public functions
	   * ------------------------------------------------------------------------------------
	   */
	
	  var setFocus = function setFocus() {
	    state.isActive = true;
	    input[0].focus();
	    resetTextfieldIfNeeded();
	  };
	
	  var unsetFocus = function unsetFocus() {
	    state.isActive = false;
	    ngModelCtrl.$setTouched();
	  };
	
	  var updateModel = function updateModel() {
	    ngModelCtrl.$setViewValue(state.value);
	  };
	
	  var clearField = function clearField() {
	    setInputValue('');
	    updateModel();
	    setFocus();
	  };
	
	  var hasInput = function hasInput() {
	    return Boolean(state.value && state.value.length > 0);
	  };
	
	  var isEmpty = function isEmpty() {
	    return !hasInput();
	  };
	
	  /**
	   * ------------------------------------------------------------------------------------
	   * Angular component lifecycle hooks
	   * ------------------------------------------------------------------------------------
	   */
	
	  var $onInit = function $onInit() {
	    setInputValue(ctrl.ngModel || '');
	    $timeout(function () {
	      setInitialValue(ngModelCtrl.$viewValue);
	    }, 0);
	  };
	
	  var $onChanges = function $onChanges(_ref) {
	    var ngModelChange = _ref.ngModel;
	
	    if (ngModelChange) {
	      setInputValue(ctrl.ngModel);
	      resetTextfieldIfNeeded();
	    }
	  };
	
	  var $postLink = function $postLink() {
	    if (isNumeric()) {
	      (0, _numeric2.default)(input);
	    }
	  };
	
	  $element.on('touchstart', function (event) {
	    var target = event.target || event.srcElement;
	    if (target === $element[0].querySelector('[data-action="clear-field"]')) {
	      event.preventDefault();
	      clearField();
	    }
	  });
	
	  /**
	   * ------------------------------------------------------------------------------------
	   * Public API
	   * ------------------------------------------------------------------------------------
	   */
	
	  Object.assign(ctrl, {
	    $onInit: $onInit,
	    $onChanges: $onChanges,
	    $postLink: $postLink,
	    setFocus: setFocus,
	    unsetFocus: unsetFocus,
	    updateModel: updateModel,
	    clearField: clearField,
	    isNumeric: isNumeric,
	    isEmpty: isEmpty,
	    ngModelCtrl: ngModelCtrl,
	    state: state
	  });
	}

/***/ }),

/***/ 184:
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var isValidNumber = function isValidNumber(str) {
	  return (/^\d+$/.test(str)
	  );
	};
	
	var stripLeadingZeros = function stripLeadingZeros(value) {
	  return value.replace(/^0+/, '');
	};
	
	exports.default = function (input) {
	  // NOTE: Eventually this event is supposed to be replaced with "beforeInput" event
	  // See https://bugs.chromium.org/p/chromium/issues/detail?id=382814 for details
	  input.on('textInput', function (evt) {
	    if (!isValidNumber(evt.data)) {
	      evt.preventDefault();
	    }
	  });
	
	  input.on('input', function () {
	    var currentValue = input.val();
	    var newValue = stripLeadingZeros(currentValue);
	
	    // Change the input value only when it is needed to keep the position of a text caret
	    if (newValue !== currentValue) {
	      input.val(newValue);
	    }
	  });
	};

/***/ })

/******/ })
});
;
//# sourceMappingURL=ui-bbm-textfield-ng.js.map