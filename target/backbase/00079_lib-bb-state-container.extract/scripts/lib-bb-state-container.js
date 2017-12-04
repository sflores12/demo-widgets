(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("lib-bb-state-container", [], factory);
	else if(typeof exports === 'object')
		exports["lib-bb-state-container"] = factory();
	else
		root["lib-bb-state-container"] = factory();
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
/******/ ({

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(63);

/***/ }),

/***/ 63:
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function (initialState) {
	  // Checking `arguments` to allow explicit `undefined` value to be passed
	  // @sig state
	  var state = arguments.length > 0 ? initialState : {};
	
	  // @sig Array (state → ())
	  var subscriptions = [];
	
	  // @sig ∀ 𝛼. {state, Array (state → ())} → ((𝛼, state) → state) → 𝛼 → ()
	  var createAction = function createAction() {
	    var reducer = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function (oldState) {
	      return oldState;
	    };
	    return function (data) {
	      state = reducer(state, data);
	      subscriptions.forEach(function (subscriber) {
	        subscriber(state);
	      });
	    };
	  };
	
	  // @sig () → state
	  var getState = function getState() {
	    return state;
	  };
	
	  // @sig state → ()
	  var setState = function setState(newState, fromStorage) {
	    state = newState;
	    subscriptions.forEach(function (subscriber) {
	      subscriber(state, fromStorage);
	    });
	  };
	
	  // @sig (state → ()) → (() → ())
	  var subscribe = function subscribe(cb) {
	    subscriptions = [].concat(_toConsumableArray(subscriptions), [cb]);
	    return function () {
	      subscriptions = subscriptions.filter(function (subscription) {
	        return subscription !== cb;
	      });
	    };
	  };
	
	  var createSelector = function createSelector(cb) {
	    var lastSelection = void 0;
	    var oldState = void 0;
	    return function () {
	      if (oldState !== state) {
	        oldState = state;
	        lastSelection = cb(state);
	      }
	      return lastSelection;
	    };
	  };
	
	  return {
	    createAction: createAction,
	    createSelector: createSelector,
	    subscribe: subscribe,
	    setState: setState,
	    getState: getState
	  };
	};
	
	/**
	 * @typedef StateContainer
	 * @type {Object}
	 * @property {StateContainer#ActionCreator} createAction Helper function to create an action to
	 *   accept the payload and modify the state. When the state is modified, all subscribers will be
	 *   notified.
	 * @property {StateContainer#SelectorCreator} createSelector Creates a function that can
	 * compute derived data from the state.
	 * @property {StateContainer#Subscribe} subscribe Subscribes to state changes
	 * @property {StateContainer#GetState} getState Get the current state
	 * @property {StateContainer#SetState} setState Replace the state object
	 */
	
	/**
	 * @typedef StateContainer#ActionCreator
	 * @description Helper function to create a new callback that accepts a payload and modifies the
	 * state. When the state is modified, all subscribers will be notified.
	 * @type {Function}
	 * @param {Reducer} reducer Function to accept the old state and a payload, and return a new state
	 * @return {ActionDispatcher} A function that when called, dispatches the action to the associated
	 * reducer function with the given payload and saves the new state. All subscribers to the state
	 * will be notified of the state.
	 * @example
	 * import createStateContainer from 'lib-bb-state-container';
	 * const myState = createStateContainer({ count: 1});
	 * myState.subscribe(state => { console.log(state.count) });
	 * const add = myState.createAction((oldState, n) => ({ count: oldState.count + n }));
	 * add(2); // logs 3
	 * add(7); // logs 10
	 */
	
	/**
	 * @typedef Reducer
	 * @description Custom callback which accepts a payload and the current (old) state, and should
	 * return the new state based on the payload.
	 * @type {Function}
	 * @param {Object} oldState The current (old) state
	 * @param {*} payload Optional payload that can be sent with the {@link ActionDispatcher}
	 * @return {Object} The new state
	 */
	
	/**
	 * @typedef ActionDispatcher
	 * @description A function that when called, dispatches the action to the associated reducer
	 * function with the given payload and saves the new state. All subscribers to the state will be
	 * notified of the state
	 * change.
	 * @type {Function}
	 * @param {*} payload An optional payload that can be sent to the reducer
	 * @return {void}
	 */
	
	/**
	 * @typedef StateContainer#SelectorCreator
	 * @description Create a function that takes the current state and returns computed derived data.
	 *
	 * Selectors are memoized, so the computation is only recalculated when the state changes. This
	 * means state must remain immutable for selectors to work properly.
	 *
	 * @type {Function}
	 * @param {Selector} selector Function to accept the state and compute derived data
	 * @return {Function} A function that will call the selector with the current state (memoized)
	 *
	 * @example
	 * import createStateContainer from 'lib-bb-state-container';
	 * const myState = createStateContainer({ items: [1, 2, 3] });
	 * const sum = myState.createSelector(state => state.items.reduce((acc, a) => acc + a, 0));
	 * sum(); // 6
	 */
	
	/**
	 * @typedef Selector
	 * @description A custom function that takes the current state and computes and returns some
	 * derived data.
	 * @type {Function}
	 * @param {Object} state The current state
	 * @return {*} Computed data
	 */
	
	/**
	 * @typedef StateContainer#Subscribe
	 * @description Subscribes to state changes
	 * @type {Function}
	 * @param {StateContainer#Subscriber} subscriber Callback function to call when state changes
	 * @return {Function} Unsubscribe function
	 */
	
	/**
	 * @typedef StateContainer#Subscriber
	 * @description Callback function to call when state changes
	 * @type {Function}
	 * @param {Object} state The current state
	 * @returns {void}
	 */
	
	/**
	 * @typedef StateContainer#GetState
	 * @type {Function}
	 * @returns {Object} The current state
	 */
	
	/**
	 * @typedef StateContainer#SetState
	 * @type {Function}
	 * @param {Object} newState The state to set to
	 * @returns {void}
	 */
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } } /**
	                                                                                                                                                                                                     * @module lib-bb-state-container
	                                                                                                                                                                                                     *
	                                                                                                                                                                                                     * @description Holds a state tree in memory.
	                                                                                                                                                                                                     *
	                                                                                                                                                                                                     * By convention, the top-level state is an object or some other key-value collection like a Map,
	                                                                                                                                                                                                     * but technically it can be any type. Still, you should do your best to keep the state
	                                                                                                                                                                                                     * serializable. Don't put anything inside it that you can't easily turn into JSON.
	                                                                                                                                                                                                     */
	
	/**
	  * @name default
	  * @type {Function}
	  * @description State container factory method
	  * @param {?object} initialState The initial value to set the state to
	  * @returns {StateContainer}
	  */

/***/ })

/******/ })
});
;
//# sourceMappingURL=lib-bb-state-container.js.map