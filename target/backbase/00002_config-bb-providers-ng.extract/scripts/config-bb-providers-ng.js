(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("config-bb-providers-ng", [], factory);
	else if(typeof exports === 'object')
		exports["config-bb-providers-ng"] = factory();
	else
		root["config-bb-providers-ng"] = factory();
})(this, function() {
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
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(3);

/***/ }),
/* 1 */,
/* 2 */,
/* 3 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * @module config-bb-providers-ng
	 * @description Project level configuration of modules
	 *
	 * This configuration module is intended to be replaced and overwritten per project. It is used
	 * to configure angular providers during the widget's
	 * [config phase](https://docs.angularjs.org/guide/module#configuration-blocks).
	 *
	 * If you have installed the bb-customize ({link http://npmjs.com/package/@bb-cli/bb-customize}
	 * CLI tool, you can copy the default config-bb-providers-ng into your project with this command:
	 *
	 * ```bash
	 * bb-customize item config-bb-providers-ng --new-name config-bb-providers-ng
	 * ```
	 *
	 * This module must export a single array as the `default` export.
	 *
	 * The array can contain any number of configuration arrays where the first items are the angular
	 * provider injector keys and the final item is the function to run at configuration time.
	 *
	 * ```javascript
	 * // The default export is a nested array in this format:
	 * export default [
	 *   [ <angular provider injector key>, <configuration function> ],
	 *   [ <angular provider injector key>, <configuration function> ],
	 *   ...
	 * ];
	 * ```
	 *
	 * Provider keys should be provided in the documentation of any modules that provide them, but are
	 * constructed by appending the module key with "Provider". e.g.
	 *
	 * ```javascript
	 * import anExampleModuleKey from 'lib-an-example-ng';
	 * const anExampleProviderKey = `${anExampleModuleKey}Provider`;
	 * export default [
	 *   [anExampleProviderKey, (anExampleProvider) => {
	 *     anExampleProvider.setSomeConfig(...);
	 *   }],
	 * ];
	 * ```
	 *
	 * A common use is to configure the data modules to connect to custom services endpoints.
	 *
	 * ```javascript
	 * const contactProviderKey = 'data-bb-contact-http-ng:contactDataProvider';
	 * export default [
	 *   [contactProviderKey, (contactProvider) => {
	 *     contactProvider.setBaseUri('http://example.com/api');
	 *   }],
	 * ];
	 * ```
	 *
	 * However, any angular (`*-ng`) module may expose a provider to allow module specific
	 * configuration. Check the documentation for the module.
	 *
	 * Core AngularJS modules often expose configuration also, the full list is available in [the
	 * AngularJS documentation](https://docs.angularjs.org/api/ng/provider). As an example, the `$http`
	 * service provides [`$httpProvider`](https://docs.angularjs.org/api/ng/provider/$httpProvider),
	 * which can be used to customize XSRF tokens, HTTP headers and "interceptors" for more advanced
	 * request/response handling.
	 *
	 * ```javascript
	 * export default [
	 *   ['$httpProvider', $httpProvider => {
	 *     $httpProvider.defaults.headers.post.Authorization = 'Basic YmVlcDpib29w';
	 *     $httpProvider.interceptors.push('myHttpInterceptor');
	 *   }],
	 * ];
	 * ```
	 *
	 * @example
	 * // Example with multiple blocks
	 * import contactDataModuleKey from 'data-bb-contact-ng';
	 *
	 * // create a provider key from the module key
	 * const contactDataProviderKey = `${contactDataModuleKey}Provider`;
	 *
	 * // define individual config blocks
	 * const myServiceConfig = [ 'my-serviceProvider', function(p) { p.setConfig({a: '1'}) } ];
	 * const vendorServiceConfig = [ 'some-vendorProvider', function(p) { p.setSomething(b, 2) } ];
	 *
	 * // export array of config blocks
	 * export default [
	 *   myServiceConfig,
	 *   vendorServiceConfig
	 *
	 *   // Configure a data module
	 *   [contactDataProviderKey, (contactDataProvider) => {
	 *     contactDataProvider.setBaseUri('http://example.com/api');
	 *   }],
	 * ];
	 */
	
	exports.default = [];

/***/ })
/******/ ])
});
;
//# sourceMappingURL=config-bb-providers-ng.js.map