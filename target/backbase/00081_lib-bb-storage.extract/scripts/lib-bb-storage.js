(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("lib-bb-storage", [], factory);
	else if(typeof exports === 'object')
		exports["lib-bb-storage"] = factory();
	else
		root["lib-bb-storage"] = factory();
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

	module.exports = __webpack_require__(67);

/***/ }),

/***/ 67:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _storage = __webpack_require__(68);
	
	var _storage2 = _interopRequireDefault(_storage);
	
	var _mobileSdk = __webpack_require__(69);
	
	var _mobileSdk2 = _interopRequireDefault(_mobileSdk);
	
	var _memory = __webpack_require__(70);
	
	var _memory2 = _interopRequireDefault(_memory);
	
	var _web = __webpack_require__(71);
	
	var _web2 = _interopRequireDefault(_web);
	
	var _subscriptions = __webpack_require__(72);
	
	var _subscriptions2 = _interopRequireDefault(_subscriptions);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// This creates a subscriptions collection that is shared across
	// storage adapter instances. This is so that state change
	// notifications can be propagated between widgets.
	var subscriptions = (0, _subscriptions2.default)();
	
	/**
	 * Detect if session storage is available
	 * @see https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API#Testing_for_support_vs_availability
	 * @inner
	 * @type {function}
	 * @return {bool} True if session storage is available
	 */
	/* global window */
	/**
	 * @module lib-bb-storage
	 * @description
	 * Provides a cross-platform interface for temporary storage or data between widget/page instances.
	 * It provides a key-value store that is persisted between Page loads in the browser and between
	 * WebViews on mobile.
	 *
	 * @example
	 * import bbStorageFactory from 'lib-bb-storage';
	 * const bbStorage = bbStorageFactory(Promise);
	 *
	 * const counterStorage = 'counter';
	 *
	 * let counter;
	 *
	 * const unsubscribe = bbStorage.subscribe(counterStorage, (newValue) => {
	 *   // called whenever the value in the storage is set
	 *   counter = newValue;
	 * });
	 *
	 * const increment = () =>
	 *   bbStorage.getItem(counterStorage)
	 *     .then((oldValue = 0) => bbStorage.setItem(counterStorage, oldValue + 1));
	 */
	
	var sessionStorageAvailable = function sessionStorageAvailable() {
	  try {
	    var storage = window.sessionStorage;
	    var x = '__storage_test__';
	    storage.setItem(x, x);
	    storage.removeItem(x);
	    return true;
	  } catch (e) {
	    return false;
	  }
	};
	
	/**
	 * Attempt to choose the correct storage adapter
	 *
	 * @name detectStorage
	 * @inner
	 * @type {function}
	 * @param {Promise} Promise A promise constructor
	 * @return {StorageAdapter} The adapter suitable for the current environment
	 */
	var detectStorage = function detectStorage(Promise) {
	  if (window.cxp && window.cxp.mobile && window.cxp.mobile.plugins && window.cxp.mobile.plugins.InMemoryStorage) {
	    return (0, _mobileSdk2.default)(Promise, window.cxp.mobile.plugins.InMemoryStorage);
	  }
	
	  if (sessionStorageAvailable()) {
	    return (0, _web2.default)(Promise, subscriptions, window.sessionStorage);
	  }
	  return (0, _web2.default)(Promise, subscriptions, (0, _memory2.default)());
	};
	
	var noop = function noop() {};
	
	exports.default = function () {
	  var promise = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : Promise;
	  var afterPublish = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : noop;
	  return (0, _storage2.default)(detectStorage(promise), afterPublish);
	};
	
	/**
	 * @typedef StorageAdapter
	 * @inner
	 * @type {object}
	 */
	/**
	 * @typedef StorageAdapter#getItem
	 * @inner
	 * @type {function}
	 * @param {string} key The key to fetch
	 * @return {Promise.<?string>} The serialized value stored in the key, if any
	 */
	/**
	 * @typedef StorageAdapter#setItem
	 * @inner
	 * @type {function}
	 * @param {string} key The key to set
	 * @param {string} value The value to store - should be serialized JSON
	 * @return {Promise.<void>}
	 */
	/**
	 * @typedef StorageAdapter#removeItem
	 * @inner
	 * @type {function}
	 * @param {string} key The key to remove
	 * @return {Promise.<void>}
	 */
	/**
	 * @typedef StorageAdapter#subscribe
	 * @inner
	 * @type {function}
	 * @param {string} key The key to subscribe to
	 * @param {AdapterSubscription} callback The callback for when the value changes
	 * @return {AdapterUnsubscribe}
	 */
	/**
	 * @typedef AdapterUnsubscribe
	 * @inner
	 * @description Unsubscribe from notifications
	 * @type {function}
	 * @return {void}
	 */
	/**
	 * @typedef AdapterSubscription
	 * @inner
	 * @type {function}
	 * @param {string} key The key that changed
	 * @param {string} oldValue The previous value attached to the key
	 * @param {string} newValue The new value attached to the key
	 * @return {void}
	 */

/***/ }),

/***/ 68:
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	/**
	 * @name default
	 * @inner
	 * @type {function}
	 * @param {StorageAdapter} adapter An adapter for the underlying storage mechanism
	 * @return {StorageService}
	 */
	
	var serdes = function () {
	  var KEY = '__TYPE__';
	
	  var lizers = {
	    Date: {
	      serialize: function serialize(obj) {
	        return obj.toISOString();
	      },
	      deserialize: function deserialize(serialized) {
	        return new Date(serialized);
	      }
	    }
	  };
	
	  var replacer = function replacer(_key, value) {
	    var _ref;
	
	    if (value == null) return value;
	
	    var type = value.constructor.name;
	    var lizer = lizers[type];
	    if (!lizer) return value;
	    return _ref = {}, _defineProperty(_ref, KEY, type), _defineProperty(_ref, 'value', lizer.serialize(value)), _ref;
	  };
	
	  var reviver = function reviver(_key, value) {
	    if (value == null) return value;
	
	    var type = value[KEY];
	    var lizer = lizers[type];
	    if (!lizer) return value;
	    return lizer.deserialize(value.value);
	  };
	
	  var serialize = function serialize(obj) {
	    var dateToJson = Date.prototype.toJSON;
	    delete Date.prototype.toJSON;
	    var result = JSON.stringify(obj, replacer);
	    Date.prototype.toJSON = dateToJson; // eslint-disable-line no-extend-native
	
	    return result;
	  };
	
	  var deserialize = function deserialize(str) {
	    return JSON.parse(str, reviver);
	  };
	
	  return { serialize: serialize, deserialize: deserialize };
	}();
	
	/**
	 * Attempt to parse a JSON value
	 * @name parseValue
	 * @inner
	 * @type {function}
	 * @param {string} value The JSON encoded value
	 * @return {any|null} The parsed value, or null if parsing fails
	 */
	var parseValue = function parseValue(value) {
	  try {
	    return serdes.deserialize(value);
	  } catch (e) {
	    // eslint-disable-next-line no-console
	    console.warn('Could not deserialize value from storage - is it serialized as JSON?\n' + '`lib-bb-storage-ng` automatically serializes values. If you are trying to ' + '`get` a value stored by another source, ensure it is properly serialized.');
	    return null;
	  }
	};
	
	/**
	 * A service that provides a consistent interface allowing setting and getting persistent data
	 * via some underlying (platform specific) storage mechanism
	 *
	 * @name StorageService
	 * @type {object}
	 */
	
	exports.default = function (adapter, afterPublish) {
	  return {
	    /**
	     * @name StorageService#setItem
	     * @type {function}
	     * @param {string} key The key to set
	     * @param {any} value The value to store - must be serializable to JSON
	     * @return {Promise.<void>}
	     */
	    setItem: function setItem(key, value) {
	      return adapter.setItem(key, serdes.serialize(value));
	    },
	
	    /**
	     * @name StorageService#getItem
	     * @type {function}
	     * @param {string} key The key to fetch
	     * @return {Promise.<any>} The value stored in the key, if any (null if key holds invalid JSON)
	     */
	    getItem: function getItem(key) {
	      return adapter.getItem(key).then(parseValue);
	    },
	
	    /**
	     * @name StorageService#removeItem
	     * @type {function}
	     * @param {string} key The key to remove
	     * @return {Promise.<void>}
	     */
	    removeItem: function removeItem(key) {
	      return adapter.removeItem(key);
	    },
	
	    /**
	     * @name StorageService#subscribe
	     * @type {function}
	     * @param {string} key The key to subscribe to
	     * @param {Subscription} callback The callback to be called with the new value of the key
	     * @return {Unsubscribe}
	     */
	    subscribe: function subscribe(key, callback) {
	      return adapter.subscribe(key, function (changedKey, oldValue, newValue) {
	        if (key === changedKey && oldValue !== newValue) {
	          callback(parseValue(newValue));
	          afterPublish();
	        }
	      });
	    }
	  };
	};
	
	/**
	 * @typedef Unsubscribe
	 * @description Unsubscribe from notifications
	 * @type {function}
	 * @return {void}
	 */
	/**
	 * @typedef Subscription
	 * @type {function}
	 * @param {any} newValue The new value attached to the key
	 * @return {void}
	 */

/***/ }),

/***/ 69:
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	/**
	 * @name mobileSdkAdapter
	 * @inner
	 * @see https://my.backbase.com/docs/product-documentation/documentation//mobile-sdk/latest/in_memory_storage.html
	 * @type {function}
	 * @param {Promise} Promise A Promise constructor
	 * @param {object} plugin An instance of the CXP Mobile SDK Storage plugin
	 * @return {StorageAdapter}
	 */
	exports.default = function (Promise, plugin) {
	  return {
	    setItem: function setItem(key, value) {
	      return new Promise(function (resolve, reject) {
	        plugin.setItem(function () {
	          resolve();
	        }, reject, key, value);
	      });
	    },
	
	    getItem: function getItem(key) {
	      return new Promise(function (resolve, reject) {
	        plugin.getItem(function (item) {
	          resolve(item);
	        }, reject, key);
	      });
	    },
	
	    removeItem: function removeItem(key) {
	      return new Promise(function (resolve, reject) {
	        plugin.removeItem(function () {
	          resolve();
	        }, reject, key);
	      });
	    },
	
	    subscribe: function subscribe(key, callback) {
	      var wrapped = function wrapped(_ref) {
	        var changedKey = _ref.key,
	            oldValue = _ref.oldValue,
	            newValue = _ref.newValue;
	
	        if (changedKey === key) {
	          callback(key, oldValue, newValue);
	        }
	      };
	      plugin.subscribe(wrapped);
	      return function () {
	        plugin.unsubscribe(wrapped);
	      };
	    }
	  };
	};

/***/ }),

/***/ 70:
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	/**
	 * @name memoryAdapter
	 * @inner
	 * @type {function}
	 * @return {SynchronousDataAdapter}
	 */
	exports.default = function () {
	  var data = {};
	  return {
	    getItem: function getItem(key) {
	      return Object.prototype.hasOwnProperty.call(data, key) ? data[key] : null;
	    },
	    setItem: function setItem(key, value) {
	      data[key] = value;
	    },
	    removeItem: function removeItem(key) {
	      delete data[key];
	    }
	  };
	};

/***/ }),

/***/ 71:
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	/**
	 * @name webStorageAdapter
	 * @inner
	 * @type {function}
	 * @param {Promise} Promise A Promise constructor
	 * @param {SynchronousDataAdapter} data A data adapter
	 * @return {StorageAdapter}
	 */
	exports.default = function (Promise, subscriptions, data) {
	  return {
	    setItem: function setItem(key, newValue) {
	      return new Promise(function (resolve) {
	        var oldValue = data.getItem(key);
	        data.setItem(key, newValue);
	        subscriptions.notify(key, oldValue, newValue);
	        resolve();
	      });
	    },
	
	    getItem: function getItem(key) {
	      return Promise.resolve(data.getItem(key));
	    },
	
	    removeItem: function removeItem(key) {
	      return new Promise(function (resolve) {
	        var oldValue = data.getItem(key);
	        data.removeItem(key);
	        subscriptions.notify(key, oldValue, null);
	        resolve();
	      });
	    },
	
	    subscribe: subscriptions.subscribe
	  };
	};
	
	/**
	 * @typedef SynchronousDataAdapter
	 * @inner
	 * @type {object}
	 */
	/**
	 * @typedef SynchronousDataAdapter#getItem
	 * @inner
	 * @type {function}
	 * @param {string} key The key to fetch
	 * @return {?string} The serialized value stored in the key, if any
	 */
	/**
	 * @typedef SynchronousDataAdapter#setItem
	 * @inner
	 * @type {function}
	 * @param {string} key The key to set
	 * @param {string} value The value to store - should be serialized JSON
	 * @return {void}
	 */
	/**
	 * @typedef SynchronousDataAdapter#removeItem
	 * @inner
	 * @type {function}
	 * @param {string} key The key to remove
	 * @return {void}
	 */

/***/ }),

/***/ 72:
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	exports.default = function () {
	  var subscriptions = {};
	
	  var subscriptionsFor = function subscriptionsFor(key) {
	    return subscriptions[key] || [];
	  };
	
	  var notify = function notify(key, oldValue, newValue) {
	    subscriptionsFor(key).forEach(function (callback) {
	      callback(key, oldValue, newValue);
	    });
	  };
	
	  var subscribe = function subscribe(key, callback) {
	    subscriptions[key] = [].concat(_toConsumableArray(subscriptionsFor(key)), [callback]);
	    return function () {
	      subscriptions[key] = subscriptionsFor(key).filter(function (fn) {
	        return fn !== callback;
	      });
	    };
	  };
	
	  return {
	    subscribe: subscribe,
	    notify: notify
	  };
	};

/***/ })

/******/ })
});
;
//# sourceMappingURL=lib-bb-storage.js.map