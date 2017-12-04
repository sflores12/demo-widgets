(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vendor-bb-angular"), require("lib-bbm-plugins"));
	else if(typeof define === 'function' && define.amd)
		define("ui-bbm-dropdown-ng", ["vendor-bb-angular", "lib-bbm-plugins"], factory);
	else if(typeof exports === 'object')
		exports["ui-bbm-dropdown-ng"] = factory(require("vendor-bb-angular"), require("lib-bbm-plugins"));
	else
		root["ui-bbm-dropdown-ng"] = factory(root["vendor-bb-angular"], root["lib-bbm-plugins"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_145__) {
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

	module.exports = __webpack_require__(151);

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

/***/ 145:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_145__;

/***/ }),

/***/ 151:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _vendorBbAngular = __webpack_require__(2);
	
	var _vendorBbAngular2 = _interopRequireDefault(_vendorBbAngular);
	
	var _controller = __webpack_require__(152);
	
	var _controller2 = _interopRequireDefault(_controller);
	
	var _component = __webpack_require__(153);
	
	var _component2 = _interopRequireDefault(_component);
	
	var _constants = __webpack_require__(154);
	
	__webpack_require__(155);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * @name default
	 * @type {string}
	 * @description The angular module name
	 */
	exports.default = _vendorBbAngular2.default.module(_constants.MODULE_KEY, []).controller(_constants.CONTROLLER_KEY, ['$element', _controller2.default]).component(_constants.COMPONENT_KEY, _component2.default).name; /**
	                                                                                                                                                                                                                        * @module ui-bbm-dropdown-ng
	                                                                                                                                                                                                                        * @description
	                                                                                                                                                                                                                        * Mobile Dropdown UI component
	                                                                                                                                                                                                                        *
	                                                                                                                                                                                                                        * @example
	                                                                                                                                                                                                                        * // In an extension:
	                                                                                                                                                                                                                        * // file: scripts/index.js
	                                                                                                                                                                                                                        * import uiBbmDropdownNgKey from 'ui-bbm-dropdown-ng';
	                                                                                                                                                                                                                        *
	                                                                                                                                                                                                                        * export const dependencyKeys = [
	                                                                                                                                                                                                                        *   uiBbmDropdownNgKey,
	                                                                                                                                                                                                                        * ];
	                                                                                                                                                                                                                        *
	                                                                                                                                                                                                                        * // file: templates/template.ng.html
	                                                                                                                                                                                                                        * <ui-bbm-dropdown-ng
	                                                                                                                                                                                                                        *   data-label="'Frequency'"
	                                                                                                                                                                                                                        *   data-title="'Select frequency'"
	                                                                                                                                                                                                                        *   data-ng-model="$ctrl.frequency"
	                                                                                                                                                                                                                        *   data-options="$ctrl.frequencies">
	                                                                                                                                                                                                                        * </ui-bbm-dropdown-ng>
	                                                                                                                                                                                                                        */

/***/ }),

/***/ 152:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = DropdownController;
	
	var _libBbmPlugins = __webpack_require__(145);
	
	var _libBbmPlugins2 = _interopRequireDefault(_libBbmPlugins);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function DropdownController($element) {
	  var ctrl = this;
	
	  var ngModelCtrl = $element.controller('ngModel');
	
	  ctrl.displayValue = '';
	
	  ctrl.opened = false;
	
	  /**
	   * @description
	   * Returns the list of items, that needs to be displayed in the dropdown.
	   *
	   * @name getPluginItems
	   * @type {function}
	   *
	   * @returns {Array.<string>}
	   * @inner
	   */
	  var getPluginItems = function getPluginItems() {
	    return ctrl.options.map(function (option) {
	      return option.text;
	    });
	  };
	
	  /**
	   * @description
	   * Returns the index of the selected option.
	   *
	   * @name getSelectedOptionIndex
	   * @type {function}
	   *
	   * @returns {number}
	   * @inner
	   */
	  var getSelectedOptionIndex = function getSelectedOptionIndex() {
	    return ctrl.options.findIndex(function (_ref) {
	      var id = _ref.id;
	      return id === ctrl.ngModel;
	    });
	  };
	
	  /**
	   * @description
	   * Returns params for the dropdown plugin.
	   *
	   * @name getPluginParams
	   * @type {function}
	   *
	   * @returns {DropdownParams}
	   * @inner
	   */
	  var getPluginParams = function getPluginParams() {
	    return {
	      title: ctrl.title || '',
	      selectedIndex: getSelectedOptionIndex(),
	      items: getPluginItems()
	    };
	  };
	
	  /**
	   * @description
	   * Returns the selected option.
	   *
	   * @name getSelectedOption
	   * @type {function}
	   *
	   * @returns {DropdownOption}
	   * @inner
	   */
	  var getSelectedOption = function getSelectedOption() {
	    return ctrl.options[getSelectedOptionIndex()];
	  };
	
	  /**
	   * @description
	   * Sets the given option as the selected one.
	   *
	   * @name selectOption
	   * @type {function}
	   *
	   * @param {?DropdownOption} option
	   * @inner
	   */
	  var selectOption = function selectOption(option) {
	    if (option) {
	      ngModelCtrl.$setViewValue(option.id);
	    }
	  };
	
	  /**
	   * @description
	   * Opens a dropdown.
	   *
	   * @name openDropdown
	   * @type {function}
	   *
	   * @inner
	   */
	  var openDropdown = function openDropdown() {
	    if (!ctrl.opened) {
	      _libBbmPlugins2.default.Dropdown().show(getPluginParams()).then(function (_ref2) {
	        var item = _ref2.item;
	
	        ctrl.opened = false;
	        selectOption(ctrl.options[item]);
	      }).catch(function () {
	        ctrl.opened = false;
	      });
	
	      ctrl.opened = true;
	    }
	  };
	
	  /**
	   * @description
	   * Updates the display value.
	   *
	   * @name updateDisplayValue
	   * @type {function}
	   *
	   * @inner
	   */
	  var updateDisplayValue = function updateDisplayValue() {
	    return ctrl.displayValue = getSelectedOption() ? getSelectedOption().text : '';
	  };
	
	  /**
	   * @description
	   * Angular hook to handle changes.
	   *
	   * @name $onChanges
	   * @type {function}
	   *
	   * @param {Object} changes
	   * @inner
	   */
	  var $onChanges = function $onChanges(_ref3) {
	    var ngModel = _ref3.ngModel,
	        options = _ref3.options;
	
	    if (ngModel || options) {
	      updateDisplayValue();
	    }
	  };
	
	  Object.assign(ctrl, {
	    $onChanges: $onChanges,
	    openDropdown: openDropdown
	  });
	}
	
	/**
	 * @typedef {Object} DropdownParams
	 * @property {string} title Dropdown title
	 * @property {number} selectedIndex Index of the selected option
	 * @property {Array.<DropdownOption>} items List of options
	 * @inner
	 */
	// Temporary disable capsInNew until it fixed in lib-bbm-plugins
	/* eslint new-cap: ["error", { "capIsNew": false }] */

/***/ }),

/***/ 153:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _constants = __webpack_require__(154);
	
	/**
	 * @name uiBbmDropdownNg
	 * @type {object}
	 *
	 * @property {string} label Text label
	 * @property {string} title Dropdown title
	 * @property {string} ngModel Selected option
	 * @property {Array.<DropdownOption>} options List of dropdown options
	 */
	exports.default = {
	  bindings: {
	    label: '<',
	    title: '<',
	    options: '<',
	    ngModel: '<'
	  },
	  controller: _constants.CONTROLLER_KEY,
	  restrict: 'E',
	  template: '\n    <div class="bbm-dropdown" data-ng-click="$ctrl.openDropdown()">\n      <div\n        data-ng-class="{\'bbm-form-control-active\': $ctrl.opened }"\n        class="bbm-form-control">\n        <div\n          class="bbm-form-control-label"\n          data-role="dropdown-label"\n          data-ng-bind="$ctrl.label">\n        </div>\n        <div class="bbm-form-control-value">\n          <span\n            class="prevent-ios-click"\n            data-role="dropdown-value"\n            data-ng-bind="$ctrl.displayValue">\n          </span>\n        </div>\n      </div>\n    </div>\n  '
	};
	
	/**
	 * @typedef {Object} DropdownOption
	 * @property {string} id Identifier of the option
	 * @property {string} text Text of the option, that will be displayed in a dropdown
	 */

/***/ }),

/***/ 154:
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var MODULE_KEY = exports.MODULE_KEY = 'ui-bbm-dropdown-ng';
	
	var CONTROLLER_KEY = exports.CONTROLLER_KEY = MODULE_KEY + ':controller';
	
	var COMPONENT_KEY = exports.COMPONENT_KEY = 'uiBbmDropdownNg';

/***/ }),

/***/ 155:
/***/ (function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(156);
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

/***/ 156:
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(15)();
	// imports
	
	
	// module
	exports.push([module.id, "ui-bbm-dropdown-ng {\n  display: block;\n}\n", ""]);
	
	// exports


/***/ })

/******/ })
});
;
//# sourceMappingURL=ui-bbm-dropdown-ng.js.map