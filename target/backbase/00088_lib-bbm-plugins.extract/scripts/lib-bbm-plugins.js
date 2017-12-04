(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("lib-bbm-plugins", [], factory);
	else if(typeof exports === 'object')
		exports["lib-bbm-plugins"] = factory();
	else
		root["lib-bbm-plugins"] = factory();
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

	module.exports = __webpack_require__(87);

/***/ }),

/***/ 87:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _activityIndicator = __webpack_require__(88);
	
	var _activityIndicator2 = _interopRequireDefault(_activityIndicator);
	
	var _alertDialog = __webpack_require__(90);
	
	var _alertDialog2 = _interopRequireDefault(_alertDialog);
	
	var _datePicker = __webpack_require__(91);
	
	var _datePicker2 = _interopRequireDefault(_datePicker);
	
	var _dropdown = __webpack_require__(92);
	
	var _dropdown2 = _interopRequireDefault(_dropdown);
	
	var _dropdownAccounts = __webpack_require__(93);
	
	var _dropdownAccounts2 = _interopRequireDefault(_dropdownAccounts);
	
	var _snackbar = __webpack_require__(94);
	
	var _snackbar2 = _interopRequireDefault(_snackbar);
	
	var _camera = __webpack_require__(95);
	
	var _camera2 = _interopRequireDefault(_camera);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  ActivityIndicator: _activityIndicator2.default,
	  AlertDialog: _alertDialog2.default,
	  DatePicker: _datePicker2.default,
	  Dropdown: _dropdown2.default,
	  DropdownAccounts: _dropdownAccounts2.default,
	  Snackbar: _snackbar2.default,
	  Camera: _camera2.default
	}; /**
	    * @module lib-bbm-plugins
	    * @description
	    * Provides access to the mobile native plugins with a Promise interface, rather than
	    */

/***/ }),

/***/ 88:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _utils = __webpack_require__(89);
	
	var _utils2 = _interopRequireDefault(_utils);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function ActivityIndicator() {
	  var PLUGIN_NAME = 'ActivityIndicator';
	
	  /**
	   * Uses ActivityIndicator mobile plugin
	   *
	   * @see https://bitbucket.org/backbase/mobile-plugin-activity-indicator
	   *
	   * @name ActivityIndicator
	   * @type {object}
	   */
	  return {
	    /**
	     * Shows activity indicator with given message
	     * @name ActivityIndicator#show
	     * @type {function}
	     * @param {String} [message]
	     * @return {Promise}
	     */
	    show: function show(message) {
	      return new Promise(function (resolve, reject) {
	        _utils2.default.getMobilePlugin(PLUGIN_NAME).show(resolve, reject, message || '');
	      });
	    },
	
	
	    /**
	     * Hides activity indicator
	     * @name ActivityIndicator#hide
	     * @type {function}
	     * @return {Promise}
	     */
	    hide: function hide() {
	      return new Promise(function (resolve, reject) {
	        _utils2.default.getMobilePlugin(PLUGIN_NAME).hide(resolve, reject);
	      });
	    }
	  };
	}
	
	exports.default = ActivityIndicator;

/***/ }),

/***/ 89:
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * Utility to get the mobile plugin
	 *
	 * @name getMobilePlugin
	 * @type {function}
	 * @param {string} name Name of the plugin
	 * @returns {object|undefined} Returns plugin object if available.
	 */
	function getMobilePlugin(name) {
	  var plugin = void 0;
	  try {
	    /* global window */
	    plugin = window.cxp.mobile.plugins[name];
	  } catch (e) {
	    throw new Error("Unable to get " + name + " plugin.");
	  }
	
	  return plugin;
	}
	
	exports.default = {
	  getMobilePlugin: getMobilePlugin
	};

/***/ }),

/***/ 90:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _utils = __webpack_require__(89);
	
	var _utils2 = _interopRequireDefault(_utils);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function AlertDialog() {
	  var PLUGIN_NAME = 'AlertDialog';
	
	  /**
	   * Determines the kind of button to be rendered by the system
	   *
	   * @name AlertDialog#ButtonType
	   * @type {object}
	   * @enum {string}
	   */
	  var ButtonType = {
	    POSITIVE: 'POSITIVE',
	    NEGATIVE: 'NEGATIVE',
	    NEUTRAL: 'NEUTRAL'
	  };
	
	  /**
	   * Uses AlertDialog mobile plugin
	   *
	   * @see https://bitbucket.org/backbase/mobile-plugin-alert-dialog
	   *
	   * @name AlertDialog
	   * @type {Object}
	   */
	  return {
	    ButtonType: ButtonType,
	
	    /**
	     * Method to show the alert dialog
	     * @name AlertDialog#show
	     * @type {function}
	     * @param {object} options
	     * @property {string} options.title Alert title
	     * @property {string} options.message Alert message
	     * @property {Array.<ButtonType>} options.buttons Alert buttons
	     * @return {Promise}
	     */
	    show: function show(options) {
	      return new Promise(function (resolve, reject) {
	        var params = Object.assign({
	          title: '',
	          message: '',
	          buttons: []
	        }, options);
	
	        _utils2.default.getMobilePlugin(PLUGIN_NAME).show(resolve, reject, params.title, params.message, JSON.stringify(params.buttons));
	      });
	    }
	  };
	}
	
	exports.default = AlertDialog;

/***/ }),

/***/ 91:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _utils = __webpack_require__(89);
	
	var _utils2 = _interopRequireDefault(_utils);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function DatePicker() {
	  // ISO-8601 date format represented as Unicode Technical Standard
	  // See https://en.wikipedia.org/wiki/ISO_8601 and http://unicode.org/reports/tr35/tr35-25.html
	  var DEFAULT_DATE_FORMAT = 'yyyy-MM-dd\'T\'HH:mm:ssZZZZZ';
	
	  var PLUGIN_NAME = 'DatePicker';
	
	  /**
	   * The plugin that shows or hides date picker
	   *
	   * @see https://bitbucket.org/backbase/mobile-plugin-date-picker
	   *
	   * @name DatePicker
	   * @type {Object}
	   */
	  return {
	    /**
	     * Shows date picker with given date
	     *
	     * @see http://www.unicode.org/reports/tr35/tr35-19.html#Date_Format_Patterns
	     *
	     * @name DatePicker#show
	     * @type {function}
	     * @param    {Object} options
	     * @property {string} [options.dateFormat] Format of the dates. It will be applied for both
	     *                                         input and output dates. See
	     *                                         http://www.unicode.org/reports/tr35/tr35-19.html#Date_Format_Patterns
	     *                                         for the patterns
	     * @property {string} [options.minDate] Min date accepted by the component. Must comply with
	     *                                      the format specified by dateFormat parameter.
	     * @property {string} [options.maxDate] Max date accepted by the component. The date must
	     *                                      comply with the format specified by dateFormat parameter
	     * @return  {Promise}
	     */
	    show: function show(options) {
	      var params = Object.assign({
	        dateFormat: DEFAULT_DATE_FORMAT,
	        minDate: '',
	        maxDate: ''
	      }, options);
	
	      return new Promise(function (resolve, reject) {
	        _utils2.default.getMobilePlugin(PLUGIN_NAME).show(resolve, reject, params.dateFormat, params.minDate, params.maxDate);
	      });
	    },
	
	
	    /**
	     * Hides date picker
	     *
	     * @name DatePicker#hide
	     * @type {function}
	     * @return {Promise}
	     * @public
	     */
	    hide: function hide() {
	      return new Promise(function (resolve, reject) {
	        _utils2.default.getMobilePlugin(PLUGIN_NAME).hide(resolve, reject);
	      });
	    }
	  };
	}
	
	exports.default = DatePicker;

/***/ }),

/***/ 92:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _utils = __webpack_require__(89);
	
	var _utils2 = _interopRequireDefault(_utils);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function Dropdown() {
	  var PLUGIN_NAME = 'Dropdown';
	
	  /**
	   * Uses dropdown mobile plugin
	   *
	   * @see https://bitbucket.org/backbase/mobile-plugin-dropdown
	   *
	   * @name Dropdown
	   * @type {Object}
	   */
	  return {
	    /**
	     * Method to show the dropdown
	     *
	     * @name Dropdown#show
	     * @type {function}
	     * @param {Object} options
	     * @param {string} options.title Dropdown title
	     * @param {Array} options.items Contains array of dropdown items
	     * @param {?Array} options.selectedIndex Index of the selected item. Optional.
	     * @return {Object} Promise
	     */
	    show: function show(options) {
	      return new Promise(function (resolve, reject) {
	        var params = Object.assign({
	          selectedIndex: 0,
	          title: '',
	          items: []
	        }, options);
	        _utils2.default.getMobilePlugin(PLUGIN_NAME).show(resolve, reject, params.title, JSON.stringify(params.items), params.selectedIndex);
	      });
	    }
	  };
	}
	
	exports.default = Dropdown;

/***/ }),

/***/ 93:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _utils = __webpack_require__(89);
	
	var _utils2 = _interopRequireDefault(_utils);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function DropdownAccounts() {
	  var PLUGIN_NAME = 'DropdownAccounts';
	
	  /**
	   * Uses dropdown accounts mobile plugin
	   *
	   * @name DropdownAccounts
	   * @type {Object}
	   */
	  return {
	    /**
	     * Method to show the dropdown Accounts
	     *
	     * @name DropdownAccounts#show
	     * @type {function}
	     * @param {Object} options
	     * @param {string} options.title - Accounts dropdown title
	     * @param {Array} options.items - Contains array of accounts
	     * @return {Object} Promise
	     */
	    show: function show(options) {
	      return new Promise(function (resolve, reject) {
	        var params = Object.assign({
	          title: '',
	          items: []
	        }, options);
	
	        _utils2.default.getMobilePlugin(PLUGIN_NAME).show(resolve, reject, params.title, JSON.stringify(params.items));
	      });
	    }
	  };
	}
	
	exports.default = DropdownAccounts;

/***/ }),

/***/ 94:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _utils = __webpack_require__(89);
	
	var _utils2 = _interopRequireDefault(_utils);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function Snackbar() {
	  var PLUGIN_NAME = 'Snackbar';
	
	  /**
	   * Uses snackbar mobile plugin
	   *
	   * @see https://bitbucket.org/backbase/mobile-plugin-snackbar
	   *
	   * @name Snackbar
	   * @type {Object}
	   */
	  return {
	    /**
	     * Shows success snackbar with given message
	     *
	     * @name Snackbar#success
	     * @type {function}
	     * @param {string} message Message to be shown
	     * @return {Promise}
	     * @public
	     */
	    success: function success(message) {
	      return new Promise(function (resolve, reject) {
	        _utils2.default.getMobilePlugin(PLUGIN_NAME).success(resolve, reject, message || '');
	      });
	    },
	
	
	    /**
	     * Shows error snackbar with given message
	     *
	     * @name Snackbar#error
	     * @type {function}
	     * @param {String} message - Message to be shown
	     * @return {Promise}
	     */
	    error: function error(message) {
	      return new Promise(function (resolve, reject) {
	        _utils2.default.getMobilePlugin(PLUGIN_NAME).error(resolve, reject, message || '');
	      });
	    },
	
	
	    /**
	     * Shows warning snackbar with given message
	     *
	     * @name Snackbar#warning
	     * @type {function}
	     * @param {String} message - Message to be shown
	     * @return {Promise}
	     */
	    warning: function warning(message) {
	      return new Promise(function (resolve, reject) {
	        _utils2.default.getMobilePlugin(PLUGIN_NAME).warning(resolve, reject, message || '');
	      });
	    },
	
	
	    /**
	     * Shows info snackbar with given message
	     *
	     * @name Snackbar#info
	     * @type {function}
	     * @param {String} message - Message to be shown
	     * @return {Promise}
	     */
	    info: function info(message) {
	      return new Promise(function (resolve, reject) {
	        _utils2.default.getMobilePlugin(PLUGIN_NAME).info(resolve, reject, message || '');
	      });
	    },
	
	
	    /**
	     * Shows noInternet snackbar with given message
	     *
	     * @name Snackbar#noInternet
	     * @type {function}
	     * @param {String} message - Message to be shown
	     * @return {Promise}
	     */
	    noInternet: function noInternet(message) {
	      return new Promise(function (resolve, reject) {
	        _utils2.default.getMobilePlugin(PLUGIN_NAME).noInternet(resolve, reject, message || '');
	      });
	    },
	
	
	    /**
	     * Method to hide the snackbar
	     *
	     * @name Snackbar#hide
	     * @type {function}
	     * @return {Promise}
	     */
	    hide: function hide() {
	      return new Promise(function (resolve, reject) {
	        _utils2.default.getMobilePlugin(PLUGIN_NAME).hide(resolve, reject);
	      });
	    }
	  };
	}
	
	exports.default = Snackbar;

/***/ }),

/***/ 95:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _utils = __webpack_require__(89);
	
	var _utils2 = _interopRequireDefault(_utils);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function Camera() {
	  var PLUGIN_NAME = 'Camera';
	
	  /**
	   * Uses Camera mobile plugin
	   *
	   * @see https://bitbucket.org/backbase/mobile-plugin-camera
	   *
	   * @name Camera
	   * @type {Object}
	   */
	  return {
	    /**
	     * Method to get the image from camera
	     *
	     * @name Camera#getImageFromCamera
	     * @type {function}
	     * @param {number} maxWidth Maximum width
	     * @param {number} maxHeight Maximum height
	     * @return {Promise}
	     */
	    getImageFromCamera: function getImageFromCamera(maxWidth, maxHeight) {
	      return new Promise(function (resolve, reject) {
	        _utils2.default.getMobilePlugin(PLUGIN_NAME).getImageFromCamera(resolve, reject, maxWidth, maxHeight);
	      });
	    },
	
	
	    /**
	     * Method to get the image from gallery
	     *
	     * @name Camera#getImageFromGallery
	     * @type {function}
	     * @param {number} maxWidth Maximum width
	     * @param {number} maxHeight Maximum height
	     * @return {Promise}
	     */
	    getImageFromGallery: function getImageFromGallery(maxWidth, maxHeight) {
	      return new Promise(function (resolve, reject) {
	        _utils2.default.getMobilePlugin(PLUGIN_NAME).getImageFromGallery(resolve, reject, maxWidth, maxHeight);
	      });
	    }
	  };
	}
	
	exports.default = Camera;

/***/ })

/******/ })
});
;
//# sourceMappingURL=lib-bbm-plugins.js.map