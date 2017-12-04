(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vendor-bb-angular"), require("lib-bb-storage"));
	else if(typeof define === 'function' && define.amd)
		define("lib-bb-storage-ng", ["vendor-bb-angular", "lib-bb-storage"], factory);
	else if(typeof exports === 'object')
		exports["lib-bb-storage-ng"] = factory(require("vendor-bb-angular"), require("lib-bb-storage"));
	else
		root["lib-bb-storage-ng"] = factory(root["vendor-bb-angular"], root["lib-bb-storage"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_5__, __WEBPACK_EXTERNAL_MODULE_57__) {
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

	module.exports = __webpack_require__(73);

/***/ }),

/***/ 5:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_5__;

/***/ }),

/***/ 57:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_57__;

/***/ }),

/***/ 73:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.bbStorageServiceKey = undefined;
	
	var _vendorBbAngular = __webpack_require__(5);
	
	var _vendorBbAngular2 = _interopRequireDefault(_vendorBbAngular);
	
	var _libBbStorage = __webpack_require__(57);
	
	var _libBbStorage2 = _interopRequireDefault(_libBbStorage);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * @module lib-bb-storage-ng
	 * @description
	 * Provides a cross-platform interface for temporary storage or data between widget/page instances.
	 * It provides a key-value store that is persisted between Page loads in the browser and between
	 * WebViews on mobile.
	 *
	 * @example
	 * import bbStorageModuleKey, { bbStorageServiceKey } from 'lib-bb-storage-ng';
	 *
	 * angular
	 *   .module('ExampleModule', [
	 *     bbStorageModuleKey,
	 *   ])
	 *   .controller('MyController', [
	 *     bbStorageServiceKey,
	 *     // into //
	 *     (bbStorage) => {
	 *       const $ctrl = this;
	 *       let unsubscribe = () => {};
	 *
	 *       const counterStorage = 'counter';
	 *
	 *       $ctrl.$onInit = () => {
	 *         unsubscribe = bbStorage.subscribe(counterStorage, (newValue) => {
	 *           // called whenever the value in the storage is set
	 *           $ctrl.counter = newValue;
	 *         });
	 *       };
	 *
	 *       $ctrl.$onDestroy = () => {
	 *         unsubscribe();
	 *       };
	 *
	 *       $ctrl.increment = () =>
	 *         bbStorage.getItem(counterStorage)
	 *         .then((oldValue = 0) => bbStorage.setItem(counterStorage, oldValue + 1));
	 *     },
	 *   ]);
	 */
	var moduleKey = 'lib-bb-storage';
	
	/**
	 * @name bbStorageServiceKey
	 * @type {string}
	 * @description Injector name for a [bbStorageService](#bbStorageService)
	 */
	var bbStorageServiceKey = exports.bbStorageServiceKey = moduleKey + ':bbStorageService';
	
	/**
	 * @name default
	 * @type {string}
	 * @description The angular module name
	 */
	exports.default = _vendorBbAngular2.default.module(moduleKey, [])
	
	/**
	 * The {@link module:lib-bb-storage.StorageService} factory.
	 * Creates a new storage service by detecting the best storage mechanism available in the
	 * current environment.
	 *
	 * @name bbStorageService
	 * @ngkey lib-bb-storage-ng:bbStorageService
	 * @type {function}
	 * @return {module:lib-bb-storage.StorageService} Storage API
	 */
	.factory(bbStorageServiceKey, ['$q', '$rootScope', function ($q, $rootScope) {
	  var noop = function noop() {};
	  var afterPublish = function afterPublish() {
	    return $rootScope.$evalAsync(noop);
	  };
	  return (0, _libBbStorage2.default)($q, afterPublish);
	}]).name;

/***/ })

/******/ })
});
;
//# sourceMappingURL=lib-bb-storage-ng.js.map