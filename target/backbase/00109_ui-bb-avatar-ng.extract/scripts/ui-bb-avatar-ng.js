(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vendor-bb-angular"));
	else if(typeof define === 'function' && define.amd)
		define("ui-bb-avatar-ng", ["vendor-bb-angular"], factory);
	else if(typeof exports === 'object')
		exports["ui-bb-avatar-ng"] = factory(require("vendor-bb-angular"));
	else
		root["ui-bb-avatar-ng"] = factory(root["vendor-bb-angular"]);
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

	module.exports = __webpack_require__(23);

/***/ }),

/***/ 2:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ }),

/***/ 23:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _vendorBbAngular = __webpack_require__(2);
	
	var _vendorBbAngular2 = _interopRequireDefault(_vendorBbAngular);
	
	var _avatar = __webpack_require__(24);
	
	var _avatar2 = _interopRequireDefault(_avatar);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * @name default
	 * @type {string}
	 * @description The angular module name
	 */
	/**
	 * @module ui-bb-avatar-ng
	 * @description
	 * UI component for creating contact's avatar.
	 * It can display initials based on a name or image.
	 *
	 * @example
	 * // In an extension:
	 * // file: scripts/index.js
	 * import uiBbAvatarKey from 'ui-bb-avatar-ng';
	 *
	 * export const dependencyKeys = [
	 *   uiBbAvatarKey,
	 * ];
	 *
	 * // file: templates/template.ng.html
	 * <ui-bb-avatar
	 *   name="name"
	 *   image="imageAvatar">
	 * </ui-bb-avatar>
	 */
	
	exports.default = _vendorBbAngular2.default.module('ui-bb-avatar-ng', []).component('uiBbAvatar', _avatar2.default).name;

/***/ }),

/***/ 24:
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var MAX_INITIALS_LENGTH = 2;
	
	/**
	 * @name uiBbAvatarComponent
	 * @type {object}
	 *
	 * @property {string} image Image url
	 * @property {string} name Name of the contact
	 */
	var uiBbAvatarComponent = {
	  bindings: {
	    image: '<',
	    name: '<'
	  },
	  template: '\n    <span data-ng-if="!$ctrl.image"\n      data-role="avatar-initials"\n      data-ng-bind="$ctrl.initials"\n      aria-hidden="true">\n    </span>\n    <img class="img-responsive"\n      data-role="avatar-image"\n      data-ng-if="$ctrl.image"\n      data-ng-src="{{$ctrl.image}}"\n      data-ng-cloak="true"\n      aria-hidden="true"\n      alt=""\n    />\n  ',
	  controller: function () {
	    function UiBbAvatarController() {
	      _classCallCheck(this, UiBbAvatarController);
	    }
	
	    _createClass(UiBbAvatarController, [{
	      key: 'initials',
	      get: function get() {
	        return (this.name || '').split(' ').reduce(function (initials, word) {
	          return '' + initials + word.charAt(0);
	        }, '').substr(0, MAX_INITIALS_LENGTH).toUpperCase();
	      }
	    }]);
	
	    return UiBbAvatarController;
	  }()
	};
	
	exports.default = uiBbAvatarComponent;

/***/ })

/******/ })
});
;
//# sourceMappingURL=ui-bb-avatar-ng.js.map