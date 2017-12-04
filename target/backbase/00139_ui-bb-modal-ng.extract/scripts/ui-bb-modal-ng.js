(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vendor-bb-angular"), require("vendor-bb-uib-modal"));
	else if(typeof define === 'function' && define.amd)
		define("ui-bb-modal-ng", ["vendor-bb-angular", "vendor-bb-uib-modal"], factory);
	else if(typeof exports === 'object')
		exports["ui-bb-modal-ng"] = factory(require("vendor-bb-angular"), require("vendor-bb-uib-modal"));
	else
		root["ui-bb-modal-ng"] = factory(root["vendor-bb-angular"], root["vendor-bb-uib-modal"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_99__) {
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

	module.exports = __webpack_require__(98);

/***/ }),

/***/ 2:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ }),

/***/ 98:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _vendorBbAngular = __webpack_require__(2);
	
	var _vendorBbAngular2 = _interopRequireDefault(_vendorBbAngular);
	
	var _vendorBbUibModal = __webpack_require__(99);
	
	var _vendorBbUibModal2 = _interopRequireDefault(_vendorBbUibModal);
	
	var _directive = __webpack_require__(100);
	
	var _directive2 = _interopRequireDefault(_directive);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * @name uiBbModalNg
	 * @description
	 * @type {object}
	 * AngularUI Modal component
	 */
	exports.default = _vendorBbAngular2.default.module('ui-bb-modal-ng', [_vendorBbUibModal2.default]).directive('uiBbModal', _directive2.default).name; /**
	                                                                                                                                                      * @module ui-bb-modal-ng
	                                                                                                                                                      * @description
	                                                                                                                                                      * UI component for displaying the custom modal.
	                                                                                                                                                      *
	                                                                                                                                                      * To open modal dialog define "is-open" attribute with scope property
	                                                                                                                                                      * as value. Modal dialog can be opened by changing value of scope property to "true".
	                                                                                                                                                      * "is-open" has two-way data binding, so when modal dialog is closed, scope property
	                                                                                                                                                      * value will change to "false".
	                                                                                                                                                      *
	                                                                                                                                                      * @example
	                                                                                                                                                      * // In an extension:
	                                                                                                                                                      * // file: scripts/index.js
	                                                                                                                                                      *
	                                                                                                                                                      * import uiBbModalKey from 'ui-bb-modal-ng';
	                                                                                                                                                      *
	                                                                                                                                                      * export const dependencyKeys = [
	                                                                                                                                                      *   uiBbModalKey,
	                                                                                                                                                      * ]
	                                                                                                                                                      *
	                                                                                                                                                      * // file: templates/template.ng.html
	                                                                                                                                                      * <button data-ng-click="ext.isModalOpen = true">Open Modal</button>
	                                                                                                                                                      *
	                                                                                                                                                      * <ui-bb-modal
	                                                                                                                                                      *   data-is-open="ext.isModalOpen"
	                                                                                                                                                      *   data-animation="true"
	                                                                                                                                                      *   data-size="'sm'"
	                                                                                                                                                      *   data-backdrop="'static'"
	                                                                                                                                                      *   data-keyboard="true"
	                                                                                                                                                      *   data-on-open="$ctrl.someAction()"
	                                                                                                                                                      *   data-on-close="$ctrl.dismissAction()">
	                                                                                                                                                      *   <div data-ng-include="'#template.ng.html'"></div>
	                                                                                                                                                      * </ui-bb-modal>
	                                                                                                                                                      */

/***/ }),

/***/ 99:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_99__;

/***/ }),

/***/ 100:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _modal = __webpack_require__(101);
	
	var _modal2 = _interopRequireDefault(_modal);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * @name uiBbModalNg
	 * @type  {object}
	 *
	 * @description
	 * Generic modal component with template transclution
	 *
	 * @property {boolean} is-open Modal open state
	 * @property {boolean} animation Defines whether the modal should be animated
	 * @property {string} size Defines size of the modal dialog (ex. 'sm', 'lg')
	 * @property {boolean} keyboard Indicates whether the dialog should be closable by
	 * hitting the ESC key.
	 * @property {boolean|string} backdrop Controls presence of a backdrop. Allowed values:
	 * true (default), false (no backdrop), 'static' (disables modal closing by click on the backdrop).
	 * @property {function} on-open Function to be invoked on opening the modal
	 * @property {function} on-close Function to be invoked on closing the modal
	 */
	var uiBbModalDirective = function uiBbModalDirective() {
	  return {
	    restrict: 'E',
	    controller: ['$uibModal', '$scope', '$timeout', _modal2.default],
	    controllerAs: 'modalCtrl',
	    bindToController: {
	      isOpen: '=',
	      animation: '<',
	      size: '<',
	      keyboard: '<',
	      backdrop: '<',
	      onOpen: '&',
	      onClose: '&'
	    },
	    scope: true,
	
	    compile: function compile(element) {
	      var template = element.html();
	      // Clear element's inner html, so it will be rendered only in modal dialog
	      element.empty();
	
	      return {
	        post: function post(scope, elem, attrs, ctrl) {
	          // eslint-disable-next-line no-param-reassign
	          ctrl.modalTemplate = template;
	        }
	      };
	    }
	  };
	};
	
	exports.default = uiBbModalDirective;

/***/ }),

/***/ 101:
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = uiBbModalController;
	/**
	 * @name uiBbModalController
	 * @type {function}
	 *
	 * @description
	 * Modal instance controller
	 *
	 * @param {object} $uibModal AngularUI modal provider
	 * @param {object} $scope Directive scope
	 */
	function uiBbModalController($uibModal, $scope, $timeout) {
	  var $ctrl = this;
	  var modalInstance = void 0;
	
	  /**
	   * Open modal dialog callback
	   * @name uiBbModalController#onModalOpen
	   * @type {function}
	   * @inner
	   */
	  var onModalOpen = function onModalOpen() {
	    if ($ctrl.onOpen) {
	      $ctrl.onOpen();
	    }
	  };
	
	  /**
	   * Close modal dialog callback
	   * @name uiBbModalController#onModalClose
	   * @type {function}
	   * @inner
	   */
	  var onModalClose = function onModalClose() {
	    modalInstance = null;
	
	    $ctrl.isOpen = false;
	
	    if ($ctrl.onClose) {
	      // Call handler in separate thread because component
	      // might get destroyed as a result of handler execution
	      $timeout($ctrl.onClose);
	    }
	  };
	
	  /**
	   * @name uiBbModalController#getModalOptions
	   * @description
	   * Returns options to open modal dialog.
	   * @type {function}
	   * @inner
	   */
	  var getModalOptions = function getModalOptions() {
	    var options = {
	      template: $ctrl.modalTemplate,
	      scope: $scope.$parent
	    };
	
	    if ($ctrl.backdrop !== undefined) {
	      options.backdrop = $ctrl.backdrop;
	    }
	
	    if ($ctrl.keyboard !== undefined) {
	      options.keyboard = $ctrl.keyboard;
	    }
	
	    if ($ctrl.size !== undefined) {
	      options.size = $ctrl.size;
	    }
	
	    if ($ctrl.animation !== undefined) {
	      options.animation = $ctrl.animation;
	    }
	
	    return options;
	  };
	
	  /**
	   * @name uiBbModalController#openModal
	   * @description
	   * Opens modal dialog
	   * @type {function}
	   * @inner
	   */
	  var openModal = function openModal() {
	    modalInstance = $uibModal.open(getModalOptions());
	
	    modalInstance.opened.then(onModalOpen);
	    modalInstance.closed.then(onModalClose);
	  };
	
	  /**
	   * @name uiBbModalController#closeModal
	   * @description
	   * Closes modal dialog
	   * @type {function}
	   * @inner
	   */
	  var closeModal = function closeModal() {
	    if (modalInstance) {
	      modalInstance.close();
	      modalInstance = null;
	    }
	  };
	
	  /**
	   * AngularJS Lifecycle hook used to initialize the controller
	   *
	   * @name uiBbModalController#$onInit
	   * @type {function}
	   * @returns {void}
	   */
	  var $onInit = function $onInit() {
	    $scope.$watch(function () {
	      return $ctrl.isOpen;
	    }, function (isOpen) {
	      if (isOpen) {
	        openModal();
	      } else {
	        closeModal();
	      }
	    });
	  };
	
	  /**
	   * AngularJS Lifecycle hook used to destroy the controller
	   *
	   * @name uiBbModalController#$onDestroy
	   * @type {function}
	   * @returns {void}
	   */
	  var $onDestroy = function $onDestroy() {
	    closeModal();
	  };
	
	  Object.assign($ctrl, {
	    $onInit: $onInit,
	    $onDestroy: $onDestroy
	  });
	}

/***/ })

/******/ })
});
;
//# sourceMappingURL=ui-bb-modal-ng.js.map