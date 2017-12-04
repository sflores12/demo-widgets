(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("lib-bb-widget", [], factory);
	else if(typeof exports === 'object')
		exports["lib-bb-widget"] = factory();
	else
		root["lib-bb-widget"] = factory();
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

	module.exports = __webpack_require__(77);

/***/ }),

/***/ 77:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _widget = __webpack_require__(78);
	
	var _widget2 = _interopRequireDefault(_widget);
	
	var _adapters = __webpack_require__(80);
	
	var _adapters2 = _interopRequireDefault(_adapters);
	
	var _contextRoot = __webpack_require__(81);
	
	var _contextRoot2 = _interopRequireDefault(_contextRoot);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function (widgetInstance, Promise) {
	  return (0, _widget2.default)((0, _adapters2.default)(widgetInstance, Promise), (0, _contextRoot2.default)(widgetInstance));
	}; /**
	    * @module lib-bb-widget
	    *
	    * @description
	    * Provides access to the details of the instance of the widget in the
	    * portal, such as its ID and preferences.
	    *
	    * @example
	    * // file: index.js
	    * import bbWidget from 'lib-bb-widget';
	    *
	    * const widget = bbWidget(widgetInstance);
	    * widget.getPreference('foo');
	    *
	    */

/***/ }),

/***/ 78:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _parsePreference = __webpack_require__(79);
	
	var Parse = _interopRequireWildcard(_parsePreference);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	/**
	 * @name default
	 * @inner
	 * @type {Object}
	 * @param {WidgetAdapter} widget A widget instance adapter
	 * @param {string} contextRoot The portal context root
	 * @returns {Widget} The widget service
	 */
	exports.default = function (widget, contextRoot) {
	  return {
	    /**
	     * A service that provides access to the instance of the widget in the portal.
	     *
	     * @name Widget
	     * @type {object}
	     */
	
	    /**
	     * Gets a preference from widget configuration (model.xml) and attempts to return it as a string
	     *
	     * *DEPRECATED*
	     * `getPreference` is deprecated in favor of the type specific `get<Type>Preference` methods.
	     * This makes the use of the preferences in the context of a widget more reliable, as they are
	     * parsed/coerced into the expected type in a reliable and consistent way, instead of ad-hoc
	     * whenever a preference is used.
	     *
	     * @name Widget#getPreference
	     * @deprecated 0.2.3
	     * @type {function}
	     * @param {string} name
	     * @returns {?string} The parsed value of the preference
	     */
	    getPreference: function getPreference(name) {
	      console.warn( // eslint-disable-line no-console
	      '`getPreference` is deprecated - use the type specific `get<Type>Preference` method instead.');
	      return widget.getPreference(name);
	    },
	
	    /**
	     * Gets a preference from widget configuration (model.xml) and attempts to return it as a string
	     *
	     * @name Widget#getStringPreference
	     * @type {function}
	     * @param {string} name
	     * @returns {?string} The parsed value of the preference
	     */
	    getStringPreference: function getStringPreference(name) {
	      var str = Parse.toString(widget.getPreference(name));
	      return str === undefined ? str : str.replace('$(contextRoot)', contextRoot);
	    },
	
	    /**
	     * Gets a preference from widget configuration (model.xml) and attempts to return it as a integer
	     * number.
	     *
	     * @name Widget#getLongPreference
	     * @type {function}
	     * @param {string} name
	     * @returns {?number} The parsed value of the preference
	     */
	    getLongPreference: function getLongPreference(name) {
	      return Parse.toLong(widget.getPreference(name));
	    },
	
	    /**
	     * Gets a preference from widget configuration (model.xml) and attempts to return it as a decimal
	     * number.
	     *
	     * @name Widget#getDoublePreference
	     * @type {function}
	     * @param {string} name
	     * @returns {?number} The parsed value of the preference
	     */
	    getDoublePreference: function getDoublePreference(name) {
	      return Parse.toDouble(widget.getPreference(name));
	    },
	
	    /**
	     * Gets a preference from widget configuration (model.xml) and attempts to return it as a boolean.
	     *
	     * @name Widget#getBooleanPreference
	     * @type {function}
	     * @param {string} name
	     * @returns {?boolean} The parsed value of the preference
	     */
	    getBooleanPreference: function getBooleanPreference(name) {
	      return Parse.toBoolean(widget.getPreference(name));
	    },
	
	    /**
	     * Gets a preference from widget configuration (model.xml) and attempts to return it as an array
	     * of strings, split on commas.
	     *
	     * @name Widget#getStringArrayPreference
	     * @type {function}
	     * @param {string} name
	     * @returns {?Array.<string>} The parsed value of the preference
	     */
	    getStringArrayPreference: function getStringArrayPreference(name) {
	      return Parse.toStringArray(widget.getPreference(name));
	    },
	
	    /**
	     * Gets a preference from widget configuration (model.xml) and attempts to return it as an null.
	     *
	     * @name Widget#getNullPreference
	     * @type {function}
	     * @param {string} name
	     * @returns {?null} The parsed value of the preference
	     */
	    getNullPreference: function getNullPreference(name) {
	      return Parse.toNull(widget.getPreference(name));
	    },
	
	    /**
	     * Gets a preference from widget as returned by portal client. This method is provided
	     * as a "escape hatch" when none of the types methods work, but should generally be
	     * avoided in common use due to its reliance on the underlying portal client implementation.
	     *
	     * *N.B.* The return type is dependant on the underlying portal client implementation, and may
	     * change across portal client versions.
	     *
	     * @name Widget#getRawPreference
	     * @type {function}
	     * @param {string} name
	     * @returns {any} The value of the preference directly from the portal client
	     */
	    getRawPreference: function getRawPreference(name) {
	      return widget.getPreference(name);
	    },
	
	    /**
	     * Sets a given value for a given preference
	     *
	     * *DEPRECATED*
	     * `setPreference` is deprecated in favor of `savePreference` which also persists the value to
	     * the portal.
	     *
	     * @name Widget#setPreference
	     * @deprecated 1.1.0
	     * @type {function}
	     * @param {string} name
	     * @param {string} value
	     * @returns {object|string} preference
	     */
	    setPreference: function setPreference(name, value) {
	      console.warn( // eslint-disable-line no-console
	      '`setPreference` is deprecated - use `savePreference` to set and persist the preference');
	      return widget.setPreference(name, value);
	    },
	
	    /**
	     * Sets a given value for a given preference and persists it to the portal.
	     *
	     * @name Widget#savePreference
	     * @since 1.1.0
	     * @type {function}
	     * @param {string} name
	     * @param {string} value
	     * @returns {Promise.<void>}
	     */
	    savePreference: function savePreference(name, value) {
	      return widget.savePreference(name, value);
	    },
	
	    /**
	     * @name Widget#getId
	     * @type {function}
	     * @description Returns the widget's instance ID
	     * @returns {string}
	     */
	    getId: function getId() {
	      return widget.id;
	    },
	
	    /**
	     * @name Widget#onUpdate
	     * @type {function}
	     * @description Registers a callback to run whenever a widget preference is modified
	     * @param {UpdateCallback} callback Function to run when preference is modified
	     * @return {UpdateUnsubscribe} Function to call to unsubscribe UpdateCallback
	     * from listening to preference modified events
	     */
	    onUpdate: function onUpdate(callback) {
	      return widget.onUpdate(callback);
	    },
	
	    /**
	     * @name Widget#render
	     * @type {function}
	     * @description Rerenders the widget
	     * @returns {Promise.<void>}
	     */
	    render: function render() {
	      return widget.render();
	    }
	  };
	};
	
	/**
	 * @typedef UpdateCallback
	 * @type {function}
	 * @param {string} name name of the property
	 * @param {string} value value of the property
	 * @return {void}
	 */
	
	/**
	 * @typedef UpdateUnsubscribe
	 * @type {function}
	 * @return {void}
	 */

/***/ }),

/***/ 79:
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var isString = function isString(str) {
	  return typeof str === 'string' || str instanceof String;
	};
	
	var whenNot = function whenNot(pred) {
	  return function (parser) {
	    return function (input) {
	      return pred(input) ? input : parser(input);
	    };
	  };
	};
	
	var whenNotNull = function whenNotNull(parser) {
	  return function (input) {
	    return input === undefined || input === null ? undefined : parser(input);
	  };
	};
	
	var whenNotInteger = whenNot(Number.isInteger);
	var whenNotBoolean = whenNot(function (input) {
	  return typeof input === 'boolean';
	});
	var whenNotNumber = whenNot(function (input) {
	  return typeof input === 'number';
	});
	var whenNotString = whenNot(isString);
	
	var coerceOrParse = function coerceOrParse(coerce, parse) {
	  return function (input) {
	    return isString(input) ? parse(input) : coerce(input);
	  };
	};
	
	var toBoolean = exports.toBoolean = whenNotNull(whenNotBoolean(coerceOrParse(function (input) {
	  return !!input;
	}, function (input) {
	  if (input.trim() === 'true') {
	    return true;
	  }
	  if (input.trim() === 'false') {
	    // this case isn't needed, the parseInt will catch it, but explicit is better than implicit
	    return false;
	  }
	  return parseInt(input, 10) > 0;
	})));
	
	var toLong = exports.toLong = whenNotNull(whenNotInteger(coerceOrParse(function (input) {
	  return parseInt(Number(input), 10);
	}, function (input) {
	  return parseInt(input, 10);
	})));
	
	var toDouble = exports.toDouble = whenNotNull(whenNotNumber(coerceOrParse(function (input) {
	  return Number(input);
	}, function (input) {
	  return parseFloat(input);
	})));
	
	var toString = exports.toString = whenNotNull(whenNotString(function (input) {
	  return input.toString();
	}));
	
	var toStringArray = exports.toStringArray = whenNotNull(function (input) {
	  return Array.isArray(input) ? input.map(toString) : input.split(',').map(function (item) {
	    return item.trim();
	  });
	});
	
	var toNull = exports.toNull = whenNotNull(function () {
	  return null;
	});

/***/ }),

/***/ 80:
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	/**
	 * @name v5Adapter
	 * @type {function}
	 * @inner
	 * @param {Object} widgetInstance The Portal Widget Instance (a.k.a. `__WIDGET__`)
	 * @return {WidgetAdapter} An adapter for a portal client v5 widget instance
	 */
	var v5Adapter = exports.v5Adapter = function v5Adapter(widgetInstance, Promise) {
	  return {
	    id: widgetInstance.id,
	    getPreference: function getPreference(name) {
	      return widgetInstance.getPreference(name);
	    },
	    setPreference: function setPreference(name, value) {
	      return widgetInstance.setPreference(name, value);
	    },
	    savePreference: function savePreference(name, value) {
	      return new Promise(function (resolve, reject) {
	        widgetInstance.setPreference(name, value);
	        widgetInstance.model.save(resolve, reject);
	      });
	    },
	    onUpdate: function onUpdate(callback) {
	      var listener = function listener(_ref) {
	        var attrName = _ref.attrName,
	            newValue = _ref.newValue;
	        return callback(attrName, newValue);
	      };
	      widgetInstance.model.addEventListener('PrefModified', listener);
	      return function () {
	        return widgetInstance.model.removeEventListener('PrefModified', listener);
	      };
	    },
	    render: function render() {
	      return new Promise(function (resolve, reject) {
	        return widgetInstance.refreshHTML(resolve, reject);
	      });
	    }
	  };
	};
	
	/**
	 * @name v6Adapter
	 * @type {function}
	 * @inner
	 * @param {Object} widgetInstance The Portal Widget Instance (a.k.a. `__WIDGET__`)
	 * @return {WidgetAdapter} An adapter for a portal client v6 widget instance
	 */
	var v6Adapter = exports.v6Adapter = function v6Adapter(widgetInstance) {
	  return {
	    id: widgetInstance.id,
	    getPreference: function getPreference(name) {
	      return widgetInstance.preferences.getItem(name);
	    },
	    setPreference: function setPreference(name, value) {
	      return widgetInstance.preferences.setItem(name, value);
	    },
	    savePreference: function savePreference(name, value) {
	      var modelApi = widgetInstance.features.cxp.model;
	      var item = modelApi.item(widgetInstance.name, widgetInstance.type);
	      return item.get().then(function (model) {
	        var newModel = Object.assign({}, model, {
	          preferences: Object.assign({}, model.preferences, _defineProperty({}, name, Object.assign({}, model.preferences[name], { value: value })))
	        });
	        return item.update(newModel);
	      });
	    },
	    onUpdate: function onUpdate(callback) {
	      var listener = function listener(_ref2) {
	        var key = _ref2.key,
	            newValue = _ref2.newValue;
	        return callback(key, newValue);
	      };
	      widgetInstance.addEventListener('storage', listener);
	      return function () {
	        return widgetInstance.removeEventListener('storage', listener);
	      };
	    },
	    render: function render() {
	      return widgetInstance.features.cxp.render.refresh(widgetInstance);
	    }
	  };
	};
	
	/**
	 * @name adapter
	 * @type {function}
	 * @inner
	 * @param {Object} widgetInstance The Portal Widget Instance (a.k.a. `__WIDGET__`)
	 * @return {WidgetAdapter} An adapter for the detected portal client version
	 */
	
	exports.default = function (widgetInstance, Promise) {
	  return widgetInstance.preferences ? v6Adapter(widgetInstance) : v5Adapter(widgetInstance, Promise);
	};
	
	/**
	 * @inner
	 * @typedef WidgetAdapter
	 * @type {Object}
	 * @property {string} id The widget instance's unique identifier
	 * @property {WidgetAdapter#GetPreference} getPreference Get the named preference
	 * @property {WidgetAdapter#SetPreference} setPreference Set the names preference to value
	 * @property {WidgetAdapter#SavePreference} savePreference Sets and persists the named preference
	 * @property {WidgetAdapter#OnUpdate} onUpdate Set function to be triggered when preference
	 *  is modified
	 * @property {WidgetAdapter#Render} render Rerender item
	 * @property {string} contextRoot The root path of the current portal/experience context
	 */
	
	/**
	 * @inner
	 * @typedef WidgetAdapter#GetPreference
	 * @type {function}
	 * @param {string} name The name of the preference to get
	 * @return {string|undefined} The current value of the requested preference
	 */
	
	/**
	 * @inner
	 * @typedef WidgetAdapter#SetPreference
	 * @type {function}
	 * @param {string} name The name of the preference to set
	 * @param {string} value The value to set the current preference to
	 * @return {Promise.<void>} A promise object
	 */
	
	/**
	 * @inner
	 * @deprecated
	 * @typedef WidgetAdapter#SavePreference
	 * @description Sets and persists the named preference
	 * @type {function}
	 * @param {string} name The name of the preference to set
	 * @param {string} value The value to set the current preference to
	 * @return {Promise.<void>} A promise object
	 */
	
	/**
	 * @inner
	 * @typedef WidgetAdapter#OnUpdate
	 * @type {function}
	 * @param {UpdateCallback} callback Function to run when preference is modified
	 * @return {void}
	 */
	
	/**
	 * @inner
	 * @typedef UpdateCallback
	 * @type {function}
	 * @param {string} name name of the property
	 * @param {string} value value of the property
	 * @return {void}
	 */
	
	/**
	 * @inner
	 * @typedef WidgetAdapter#Render
	 * @type {function}
	 * @return {Promise.<void>} A promise object
	 */

/***/ }),

/***/ 81:
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	      value: true
	});
	var v6ContextRoot = function v6ContextRoot(widgetInstance) {
	      return widgetInstance.features && widgetInstance.features.cxp && widgetInstance.features.cxp.config.get && widgetInstance.features.cxp.config.get('contextRoot');
	};
	
	/* global window */
	var v5ContextRoot = function v5ContextRoot() {
	      return window.b$ && window.b$.portal && window.b$.portal.config && window.b$.portal.config.resourceRoot;
	};
	
	exports.default = function (widgetInstance) {
	      return v6ContextRoot(widgetInstance) || v5ContextRoot();
	};

/***/ })

/******/ })
});
;
//# sourceMappingURL=lib-bb-widget.js.map