(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vendor-bb-angular"), require("vendor-bb-angular-sanitize"), require("ui-bb-modal-ng"));
	else if(typeof define === 'function' && define.amd)
		define("ui-bb-confirm-ng", ["vendor-bb-angular", "vendor-bb-angular-sanitize", "ui-bb-modal-ng"], factory);
	else if(typeof exports === 'object')
		exports["ui-bb-confirm-ng"] = factory(require("vendor-bb-angular"), require("vendor-bb-angular-sanitize"), require("ui-bb-modal-ng"));
	else
		root["ui-bb-confirm-ng"] = factory(root["vendor-bb-angular"], root["vendor-bb-angular-sanitize"], root["ui-bb-modal-ng"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_18__, __WEBPACK_EXTERNAL_MODULE_49__) {
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

	module.exports = __webpack_require__(48);

/***/ }),

/***/ 2:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ }),

/***/ 18:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_18__;

/***/ }),

/***/ 48:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _vendorBbAngular = __webpack_require__(2);
	
	var _vendorBbAngular2 = _interopRequireDefault(_vendorBbAngular);
	
	var _vendorBbAngularSanitize = __webpack_require__(18);
	
	var _vendorBbAngularSanitize2 = _interopRequireDefault(_vendorBbAngularSanitize);
	
	var _uiBbModalNg = __webpack_require__(49);
	
	var _uiBbModalNg2 = _interopRequireDefault(_uiBbModalNg);
	
	var _component = __webpack_require__(50);
	
	var _component2 = _interopRequireDefault(_component);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * @name default
	 * @type {string}
	 * @description The angular module name
	 */
	/**
	 * @module ui-bb-confirm-ng
	 * @description
	 * UI component for displaying the confirmation modal dialog.
	 *
	 * @example
	 * // In an extension:
	 * // file: scripts/index.js
	 * import uiBbConfirmKey from 'ui-bb-confirm-ng';
	 *
	 * export const dependencyKeys = [
	 *   uiBbConfirmKey,
	 * ];
	 *
	 * // file: templates/template.ng.html
	 * <button data-ng-click="isConfirmationOpen = true">Open confirmation</button>
	 *
	 * <!-- Large dialog, opened without animation -->
	 * <ui-bb-confirm
	 *   data-is-open="isConfirmationOpen"
	 *   data-labels="{
	 *     heading: 'Are you sure?',
	 *     bodyText: 'Are you sure you want to perform this action?',
	 *     cancel: 'Cancel',
	 *     confirm: 'Ok',
	 *   }"
	 *   data-size="'lg'"
	 *   data-animation="false"
	 *   data-onCancel="$ctrl.onCancel()"
	 *   data-onConfirm="$ctrl.doAction()">
	 * </ui-bb-confirm>
	 *
	 * <!-- Dialog with red confirm button which can't be dismissed and centered buttons -->
	 * <ui-bb-confirm
	 *   data-is-open="isConfirmationOpen"
	 *   data-labels="{
	 *     heading: 'Are you sure?',
	 *     bodyText: 'Are you sure you want to delete this item?',
	 *     cancel: 'No',
	 *     confirm: 'Delete',
	 *   }"
	 *   data-confirm-btn-class="'btn-danger'"
	 *   data-is-dismissible="false"
	 *   data-footer-class="'text-centered'"
	 *   data-onClose="$ctrl.onClose()"
	 *   data-onConfirm="$ctrl.doAction()">
	 * </ui-bb-confirm>
	 */
	exports.default = _vendorBbAngular2.default.module('ui-bb-confirm-ng', [_vendorBbAngularSanitize2.default, _uiBbModalNg2.default]).component('uiBbConfirm', _component2.default).name;

/***/ }),

/***/ 49:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_49__;

/***/ }),

/***/ 50:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _controller = __webpack_require__(51);
	
	var _controller2 = _interopRequireDefault(_controller);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * @name uiBbConfirmComponent
	 * @type {object}
	 * @description
	 * Confirmation modal component
	 *
	 * @property {boolean} isOpen Flag which indicates dialog's open state
	 * @property {object} labels Object with string labels for component
	 * @property {boolean} isDismissible Flag which indicates can component be dismissed
	 * by keyboard or mouse click. Default is true.
	 * @property {string} confirmBtnClass Class name for confirmation button
	 * @property {string} footerClass Class name for the footer section
	 * @property {string} size Confirmation modal dialog size
	 * @property {boolean} animation Flag which indicates will dialog be
	 * open/hidden with animation. Default is true.
	 * @property {function} onConfirm Confirm callback function
	 * @property {function} onCancel Cancel callback function
	 * @property {function} onClose Dialog close callback function
	 */
	var component = {
	  controller: ['$timeout', _controller2.default],
	  bindings: {
	    isOpen: '=',
	    labels: '<',
	    isDismissible: '<',
	    confirmBtnClass: '<',
	    footerClass: '<',
	    size: '<',
	    animation: '<',
	    onConfirm: '&',
	    onCancel: '&',
	    onClose: '&'
	  },
	  template: '\n    <ui-bb-modal data-is-open="$ctrl.isOpen"\n      data-on-close="$ctrl.onClose()"\n      data-keyboard="$ctrl.isDismissible"\n      data-backdrop="$ctrl.isDismissible || \'static\'"\n      data-size="$ctrl.size"\n      data-animation="$ctrl.animation">\n\n      <div class="modal-header text-center">\n        <h3 class="modal-title"\n          data-ng-bind="$ctrl.labels.heading"\n          data-role="ui-bb-confirm-ng-header"></h3>\n      </div>\n\n      <div class="modal-body text-center break-word"\n        data-ng-if="!$ctrl.labels.bodyHtml"\n        data-ng-bind="$ctrl.labels.bodyText"\n        data-role="ui-bb-confirm-ng-body-text">\n      </div>\n      <div class="modal-body text-center break-word"\n        data-ng-if="$ctrl.labels.bodyHtml"\n        data-ng-bind-html="$ctrl.labels.bodyHtml"\n        data-role="ui-bb-confirm-ng-body-text">\n      </div>\n\n      <div class="modal-footer" data-ng-class="$ctrl.footerClass">\n        <button type="button"\n          class="btn btn-default"\n          data-ng-bind="$ctrl.labels.cancel"\n          data-ng-click="$ctrl.cancel()"\n          data-role="ui-bb-confirm-ng-cancel-button">\n        </button>\n        <button type="button"\n          class="btn"\n          data-ng-class="$ctrl.confirmBtnClass || \'btn-primary\'"\n          data-ng-bind="$ctrl.labels.confirm"\n          data-ng-click="$ctrl.confirm()"\n          data-role="ui-bb-confirm-ng-confirm-button">\n        </button>\n      </div>\n\n    </ui-bb-modal>\n  '
	};
	
	exports.default = component;

/***/ }),

/***/ 51:
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = Controller;
	/**
	 * @name uiBbConfirmController
	 * @type {function}
	 *
	 * @description
	 * Confirmation modal controller
	 */
	function Controller($timeout) {
	  var $ctrl = this;
	
	  /**
	   * AngularJS Lifecycle hook used to initialize the controller
	   *
	   * @name Controller#$onInit
	   * @type {function}
	   * @returns {void}
	   */
	  var $onInit = function $onInit() {
	    $ctrl.isDismissible = $ctrl.isDismissible === undefined ? true : $ctrl.isDismissible;
	  };
	
	  /**
	   * Calls component callback handler in separate thread because component
	   * might get destroyed as a result of handler execution.
	   *
	   * @name callHandler
	   * @type {function}
	   * @inner
	   * @param {function} fn Callback handler function
	   */
	  var callHandler = function callHandler(fn) {
	    if (fn) {
	      $timeout(fn);
	    }
	  };
	
	  /**
	   * Cancel action for dialog
	   * @name Controller#cancel
	   * @type {function}
	   * @returns {void}
	   */
	  var cancel = function cancel() {
	    $ctrl.isOpen = false;
	    callHandler($ctrl.onCancel);
	  };
	
	  /**
	   * Confirmation action for dialog
	   * @name Controller#confirm
	   * @type {function}
	   * @returns {void}
	   */
	  var confirm = function confirm() {
	    $ctrl.isOpen = false;
	    callHandler($ctrl.onConfirm);
	  };
	
	  Object.assign($ctrl, {
	    $onInit: $onInit,
	    cancel: cancel,
	    confirm: confirm
	  });
	}

/***/ })

/******/ })
});
;
//# sourceMappingURL=ui-bb-confirm-ng.js.map