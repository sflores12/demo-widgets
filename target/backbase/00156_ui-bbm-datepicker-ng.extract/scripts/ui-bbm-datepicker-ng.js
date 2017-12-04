(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vendor-bb-angular"), require("ui-bb-date-label-filter-ng"), require("lib-bbm-plugins"));
	else if(typeof define === 'function' && define.amd)
		define("ui-bbm-datepicker-ng", ["vendor-bb-angular", "ui-bb-date-label-filter-ng", "lib-bbm-plugins"], factory);
	else if(typeof exports === 'object')
		exports["ui-bbm-datepicker-ng"] = factory(require("vendor-bb-angular"), require("ui-bb-date-label-filter-ng"), require("lib-bbm-plugins"));
	else
		root["ui-bbm-datepicker-ng"] = factory(root["vendor-bb-angular"], root["ui-bb-date-label-filter-ng"], root["lib-bbm-plugins"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_143__, __WEBPACK_EXTERNAL_MODULE_145__) {
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

	module.exports = __webpack_require__(142);

/***/ }),

/***/ 2:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ }),

/***/ 15:
/***/ (function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];
	
		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};
	
		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ }),

/***/ 16:
/***/ (function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(self.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];
	
	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}
	
		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();
	
		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";
	
		var styles = listToStyles(list);
		addStylesToDom(styles, options);
	
		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}
	
	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}
	
	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}
	
	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}
	
	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}
	
	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}
	
	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}
	
	function addStyle(obj, options) {
		var styleElement, update, remove;
	
		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}
	
		update(obj);
	
		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}
	
	var replaceText = (function () {
		var textStore = [];
	
		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();
	
	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;
	
		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}
	
	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
	
		if(media) {
			styleElement.setAttribute("media", media)
		}
	
		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}
	
	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;
	
		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}
	
		var blob = new Blob([css], { type: "text/css" });
	
		var oldSrc = linkElement.href;
	
		linkElement.href = URL.createObjectURL(blob);
	
		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ }),

/***/ 142:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _vendorBbAngular = __webpack_require__(2);
	
	var _vendorBbAngular2 = _interopRequireDefault(_vendorBbAngular);
	
	var _uiBbDateLabelFilterNg = __webpack_require__(143);
	
	var _uiBbDateLabelFilterNg2 = _interopRequireDefault(_uiBbDateLabelFilterNg);
	
	var _controller = __webpack_require__(144);
	
	var _controller2 = _interopRequireDefault(_controller);
	
	var _component = __webpack_require__(147);
	
	var _component2 = _interopRequireDefault(_component);
	
	var _dateDecorator = __webpack_require__(148);
	
	var _dateDecorator2 = _interopRequireDefault(_dateDecorator);
	
	var _constants = __webpack_require__(146);
	
	__webpack_require__(149);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * @name default
	 * @type {string}
	 * @description The angular module name
	 */
	exports.default = _vendorBbAngular2.default.module(_constants.MODULE_KEY, [_uiBbDateLabelFilterNg2.default]).controller(_constants.CONTROLLER_KEY, ['$element', '$filter', _controller2.default]).component(_constants.COMPONENT_KEY, _component2.default).filter('dateDecorator', ['$filter', _dateDecorator2.default]).name; /**
	                                                                                                                                                                                                                                                                                                                                * @module ui-bbm-datepicker-ng
	                                                                                                                                                                                                                                                                                                                                * @description
	                                                                                                                                                                                                                                                                                                                                * Mobile DatePicker UI component
	                                                                                                                                                                                                                                                                                                                                *
	                                                                                                                                                                                                                                                                                                                                * @example
	                                                                                                                                                                                                                                                                                                                                * // In an extension:
	                                                                                                                                                                                                                                                                                                                                * // file: scripts/index.js
	                                                                                                                                                                                                                                                                                                                                * import uiBbmDatepickerNgKey from 'ui-bbm-datepicker-ng';
	                                                                                                                                                                                                                                                                                                                                *
	                                                                                                                                                                                                                                                                                                                                * export const dependencyKeys = [
	                                                                                                                                                                                                                                                                                                                                *   uiBbmDatepickerNgKey,
	                                                                                                                                                                                                                                                                                                                                * ];
	                                                                                                                                                                                                                                                                                                                                *
	                                                                                                                                                                                                                                                                                                                                * // file: templates/template.ng.html
	                                                                                                                                                                                                                                                                                                                                * <ui-bbm-datepicker-ng
	                                                                                                                                                                                                                                                                                                                                *   data-label="'Start date'"
	                                                                                                                                                                                                                                                                                                                                *   data-title="'Select a start date'"
	                                                                                                                                                                                                                                                                                                                                *   data-ng-model="$ctrl.startDate"
	                                                                                                                                                                                                                                                                                                                                *   data-min-date="'2017-05-10T14:00:00+0200'">
	                                                                                                                                                                                                                                                                                                                                *   data-max-date="'2018-01-01T14:00:00+0200'"
	                                                                                                                                                                                                                                                                                                                                *   data-date-labels="ext.helpers.dateLabels">
	                                                                                                                                                                                                                                                                                                                                * </ui-bbm-datepicker-ng>
	                                                                                                                                                                                                                                                                                                                                */

/***/ }),

/***/ 143:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_143__;

/***/ }),

/***/ 144:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = DatepickerController;
	
	var _libBbmPlugins = __webpack_require__(145);
	
	var _libBbmPlugins2 = _interopRequireDefault(_libBbmPlugins);
	
	var _constants = __webpack_require__(146);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// Temporary disable capsInNew until it fixed in lib-bbm-plugins
	/* eslint new-cap: ["error", { "capIsNew": false }] */
	function DatepickerController($element, $filter) {
	  var dateFilter = $filter('date');
	  var ctrl = this;
	
	  var ngModelCtrl = $element.controller('ngModel');
	
	  ctrl.opened = false;
	
	  /**
	   * @description
	   * Formats the given date, so it can be passed to the datepicker plugin as a parameter.
	   *
	   * @name getPluginDateParam
	   * @type {function}
	   *
	   * @param {?string} date
	   * @returns {string}
	   * @inner
	   */
	  var getPluginDateParam = function getPluginDateParam(date) {
	    return date ? dateFilter(date, _constants.DATEPICKER_INTERNAL_DATE_FORMAT) : null;
	  };
	
	  /**
	   * @description
	   * Returns params for a datepicker plugin.
	   *
	   * @name getDatepickerParams
	   * @type {function}
	   *
	   * @returns {DatepickerParams}
	   * @inner
	   */
	  var getDatepickerParams = function getDatepickerParams() {
	    return {
	      title: ctrl.title || '',
	      minDate: getPluginDateParam(ctrl.minDate),
	      maxDate: getPluginDateParam(ctrl.maxDate)
	    };
	  };
	
	  /**
	   * @description
	   * Applies the given option as a selected one.
	   *
	   * @name selectDate
	   * @type {function}
	   *
	   * @param {?string} date
	   * @inner
	   */
	  var selectDate = function selectDate(date) {
	    if (date) {
	      ngModelCtrl.$setViewValue(date);
	    }
	  };
	
	  /**
	   * @description
	   * Opens a datepicker.
	   *
	   * @name openDatepicker
	   * @type {function}
	   * @inner
	   */
	  var openDatepicker = function openDatepicker() {
	    if (!ctrl.opened) {
	      _libBbmPlugins2.default.DatePicker().show(getDatepickerParams()).then(function (_ref) {
	        var date = _ref.date;
	
	        ctrl.opened = false;
	        selectDate(date);
	      }).catch(function () {
	        ctrl.opened = false;
	      });
	
	      ctrl.opened = true;
	    }
	  };
	
	  Object.assign(ctrl, {
	    openDatepicker: openDatepicker
	  });
	}
	
	/**
	 * @typedef {Object} DatepickerParams
	 * @property {?string} title Datepicker title
	 * @property {?string} minDate Minimum allowed date
	 * @property {?string} maxDate Maximum allowed date
	 * @inner
	 */

/***/ }),

/***/ 145:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_145__;

/***/ }),

/***/ 146:
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var MODULE_KEY = exports.MODULE_KEY = 'ui-bbm-datepicker-ng';
	
	var CONTROLLER_KEY = exports.CONTROLLER_KEY = MODULE_KEY + ':controller';
	
	var COMPONENT_KEY = exports.COMPONENT_KEY = 'uiBbmDatepickerNg';
	
	var DATEPICKER_INTERNAL_DATE_FORMAT = exports.DATEPICKER_INTERNAL_DATE_FORMAT = 'yyyy-MM-ddTHH:mm:ssZ';

/***/ }),

/***/ 147:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _constants = __webpack_require__(146);
	
	/**
	 * @name uiBbmDatepickerNg
	 * @type {Object}
	 *
	 * @property {string} label Text label
	 * @property {?string} title Title for the DatePicker plugin
	 * @property {?string} placeholder Placeholder text which is displayed
	 *   when there is no selected date yet
	 * @property {string} ngModel Selected date
	 * @property {?string} minDate Minimum allowed date
	 * @property {?string} maxDate Maximum allowed date
	 * @property {?object} dateLabels Labels for decorating dates
	 */
	exports.default = {
	  bindings: {
	    label: '<',
	    title: '<',
	    placeholder: '<',
	    minDate: '<',
	    mDate: '<',
	    ngModel: '<',
	    dateLabels: '<'
	  },
	  controller: _constants.CONTROLLER_KEY,
	  restrict: 'E',
	  template: '\n    <div\n      class="bbm-datepicker"\n      data-role="datepicker"\n      data-ng-click="$ctrl.openDatepicker()">\n      <div\n        class="bbm-form-control"\n        data-ng-class="{\'bbm-form-control-active\': $ctrl.opened }">\n        <div\n          class="bbm-form-control-label"\n          data-role="datepicker-label"\n          data-ng-bind="$ctrl.label">\n        </div>\n        <div\n          class="bbm-form-control-value"\n          data-ng-if="$ctrl.ngModel">\n          <span\n            class="prevent-ios-click"\n            data-role="datepicker-value"\n            data-ng-bind="$ctrl.ngModel | date | dateDecorator : $ctrl.dateLabels">\n          </span>\n        </div>\n        <div\n          class="bbm-form-control-placeholder"\n          data-role="datepicker-placeholder"\n          data-ng-if="!$ctrl.ngModel"\n          data-ng-bind="$ctrl.placeholder">\n        </div>\n      </div>\n    </div>\n  '
	};

/***/ }),

/***/ 148:
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = dateDecoratorFilter;
	/**
	 * @type {function}
	 * @name dateDecoratorFilter
	 * @description
	 * Filter for decorating date based on the date labels.
	 *
	 * @param {function} $filter Filter service
	 * @returns {function} Function that is used to filter
	 */
	function dateDecoratorFilter($filter) {
	  return function (date, dateLabels) {
	    if (!dateLabels) {
	      return date;
	    }
	    var labelKey = $filter('dateLabel')(date);
	
	    return dateLabels[labelKey] || date;
	  };
	}

/***/ }),

/***/ 149:
/***/ (function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(150);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(16)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../../node_modules/css-loader/index.js!./index.css", function() {
				var newContent = require("!!../../node_modules/css-loader/index.js!./index.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ }),

/***/ 150:
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(15)();
	// imports
	
	
	// module
	exports.push([module.id, "ui-bbm-datepicker-ng {\n  display: block;\n}\n", ""]);
	
	// exports


/***/ })

/******/ })
});
;
//# sourceMappingURL=ui-bbm-datepicker-ng.js.map