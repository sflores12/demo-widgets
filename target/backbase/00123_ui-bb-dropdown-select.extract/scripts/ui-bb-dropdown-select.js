(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vendor-bb-angular"), require("vendor-bb-uib-dropdown"));
	else if(typeof define === 'function' && define.amd)
		define("ui-bb-dropdown-select", ["vendor-bb-angular", "vendor-bb-uib-dropdown"], factory);
	else if(typeof exports === 'object')
		exports["ui-bb-dropdown-select"] = factory(require("vendor-bb-angular"), require("vendor-bb-uib-dropdown"));
	else
		root["ui-bb-dropdown-select"] = factory(root["vendor-bb-angular"], root["vendor-bb-uib-dropdown"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_62__) {
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

	module.exports = __webpack_require__(61);

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

/***/ 61:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _vendorBbAngular = __webpack_require__(2);
	
	var _vendorBbAngular2 = _interopRequireDefault(_vendorBbAngular);
	
	var _vendorBbUibDropdown = __webpack_require__(62);
	
	var _vendorBbUibDropdown2 = _interopRequireDefault(_vendorBbUibDropdown);
	
	var _select = __webpack_require__(63);
	
	var _select2 = _interopRequireDefault(_select);
	
	var _selected = __webpack_require__(64);
	
	var _selected2 = _interopRequireDefault(_selected);
	
	var _option = __webpack_require__(65);
	
	var _option2 = _interopRequireDefault(_option);
	
	__webpack_require__(66);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * @name default
	 * @type {string}
	 * @description The angular module name
	 */
	/**
	 * @module ui-bb-dropdown-select
	 * @description
	 * UI dropdown select component
	 *
	 * @example
	 * // In an extension:
	 * // file: scripts/index.js
	 * import uiBbDropdownSelectKey from 'ui-bb-dropdown-select';
	 *
	 * export const dependencyKeys = [
	 *   uiBbDropdownSelectKey,
	 * ];
	 *
	 * // file: templates/template.ng.html
	 * <ui-bb-dropdown-select
	 *   ng-model="item"
	 *   selected-as="$option.name">
	 *   <ui-bb-dropdown-option
	 *     option="item"
	 *     data-arrow-navigation="true"
	 *     ng-repeat="item in items"
	 *     class="list-group-item-text">
	 *       {{:: $option.name }}
	 *   </ui-bb-dropdown-option>
	 * </ui-bb-dropdown-select>
	 */
	
	exports.default = _vendorBbAngular2.default.module('ui-bb-dropdown-select', [_vendorBbUibDropdown2.default]).directive('uiBbDropdownSelect', _select2.default).directive('uiBbDropdownSelected', ['$q', '$compile', '$templateRequest', _selected2.default]).directive('uiBbDropdownOption', ['$templateRequest', '$compile', _option2.default]).name;

/***/ }),

/***/ 62:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_62__;

/***/ }),

/***/ 63:
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = uiBbDropdownSelectDirective;
	/**
	 * @name uiBbDropdownSelectDirective
	 * @type {object}
	 *
	 * @property {boolean} isOpen Defines whether or not the dropdown is open
	 * @property {?boolean} multiple True if multiple selection is enabled (false by default)
	 * @property {boolean} ngDisabled Defines whether or not the dropdown is disabled
	 * @property {object} ngModel Dropdown model
	 * @property {?string} placeholder Placeholder text
	 * @property {function} ngChange Callback function triggered when dropdown item is selected
	 * @property {function} selectedAs Allows to customize selected value
	 * @property {object} labels Object with labels that will be attached to dropdown's scope
	 */
	function UiBbDropdownSelectController($timeout, $attrs, $scope) {
	  var instance = {
	    $onInit: function $onInit() {
	      instance.ngModelController.$render = instance.render.bind(instance);
	    },
	    render: function render() {
	      Object.assign($scope, {
	        $option: instance.ngModelController.$viewValue || instance.ngModelController.$modelValue
	      });
	    }
	  };
	
	  instance.select = function (option) {
	    // different behaviour is needed for single and multiple selection
	    if (instance.multiple) {
	      if (!Array.isArray(instance.model)) {
	        instance.model = [];
	      }
	      var currentIndex = instance.model.indexOf(option);
	      if (currentIndex >= 0) {
	        instance.model.splice(currentIndex, 1);
	      } else {
	        instance.model.push(option);
	      }
	    } else {
	      // make sure list is always closed when item is selected
	      instance.isOpen = false;
	      instance.model = option;
	    }
	
	    instance.ngModelController.$render();
	    $timeout(function () {
	      return instance.ngChange({ $item: instance.model });
	    });
	  };
	
	  instance.isSelected = function isSelected(option) {
	    return instance.multiple ? instance.model.indexOf(option) > -1 : instance.model === option;
	  };
	
	  instance.getSelectedConfig = function () {
	    return {
	      selectedAs: $attrs.selectedAs ? '{{ $ctrl.selectedAs(this) }}' : false,
	      templateUrl: $attrs.templateUrl,
	      clone: false
	    };
	  };
	
	  /**
	   * @description
	   * Close menu if next focused element is outside of container
	   *
	   * @name uiBbDropdownSelectDirective#onBlur
	   * @type {function}
	   * @param {object} event
	   */
	  instance.onBlur = function onBlur(event) {
	    // For some browsers, when clicking on opened dropdown, additionally to
	    // click event, focusin and focusout events are sent. As focusout changes
	    // isOpen state, dropdown closes and opens back really quick. To prevent that,
	    // focusout will be ignored in this case. Only way to recognize this situation is
	    // by inspecting event object and its relatedTarget and target properties
	    if (event.relatedTarget === null && event.target && event.target.tagName === 'BUTTON') {
	      return;
	    }
	
	    if (event.relatedTarget) {
	      var originalParent = this;
	      var relatedParent = event.relatedTarget;
	
	      while (relatedParent) {
	        if (relatedParent === originalParent) {
	          return;
	        }
	
	        relatedParent = relatedParent.parentNode;
	      }
	    }
	
	    instance.isOpen = false;
	    $scope.$digest();
	  };
	
	  /**
	   * @description
	   * Handles clicks on the items in the list
	   *
	   * @name uiBbDropdownSelectDirective#clickHandler
	   * @type {function}
	   * @param {object} event
	   */
	  instance.clickHandler = function (event) {
	    if (instance.multiple) {
	      event.stopPropagation();
	    }
	  };
	
	  return instance;
	}
	
	function uiBbDropdownSelectDirective() {
	  return {
	    require: {
	      ngModelController: 'ngModel',
	      ngDropdownController: 'uiBbDropdownSelect'
	    },
	    transclude: true,
	    bindToController: true,
	    controllerAs: '$ctrl',
	    controller: ['$timeout', '$attrs', '$scope', UiBbDropdownSelectController],
	    template: function template(element, attrs) {
	      return '\n      <div class="dropdown-select"\n        data-ng-class="{selected: $ctrl.multiple ? $ctrl.model.length : $ctrl.model}"\n        uib-dropdown\n        data-keyboard-nav\n        data-is-open="$ctrl.isOpen">\n\n        <button type="button" class="btn btn-default btn-dropdown-toggle ' + attrs.class + '"\n          uib-dropdown-toggle\n          data-ng-disabled="$ctrl.disabled">\n          <span class="dropdown-option dropdown-selected" ui-bb-dropdown-selected></span>\n          <span class="dropdown-option placeholder">' + (attrs.placeholder || '') + '</span>\n          <i class="fa chevron-icon fa-chevron-down chevron-down"\n            data-role="select-account-button">\n          </i>\n        </button>\n\n        <ul class="uib-dropdown-menu ng-transclude-node dropdown-menu"\n          uib-dropdown-menu\n          data-ng-transclude\n          data-ng-click="$ctrl.clickHandler($event)"\n          role="menu"\n          tabindex="-1"\n          aria-labelledby="single-button">\n        </ul>\n      </div>\n\t\t';
	    },
	    scope: {
	      isOpen: '=?',
	      disabled: '=ngDisabled',
	      model: '=ngModel',
	      ngChange: '&',
	      selectedAs: '&',
	      multiple: '<',
	      labels: '<'
	    },
	    link: function uiBbDropdownSelectLink(scope, element, attrs, controller) {
	      element.removeClass(attrs.class);
	      element.on('focusout', controller.ngDropdownController.onBlur);
	    }
	  };
	}

/***/ }),

/***/ 64:
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * @name uiBbDropdownSelectedDirective
	 * @type {object}
	 */
	function uiBbDropdownSelectedDirective($q, $compile, $templateRequest) {
	  return {
	    restrict: 'A',
	    require: '^^uiBbDropdownSelect',
	    link: function link(scope, element, attrs, uiBbDropdownSelectController) {
	      var templateSrc = void 0;
	      var config = uiBbDropdownSelectController.getSelectedConfig();
	
	      if (config.selectedAs) {
	        templateSrc = config.selectedAs;
	      } else if (config.templateUrl) {
	        templateSrc = $templateRequest(config.templateUrl);
	      } else {
	        throw new Error('ui-bb-dropdown-select element expects either selected-as or template-src attribute.');
	      }
	
	      $q.when(templateSrc).then(function (template) {
	        element.html(template).removeAttr('ui-bb-dropdown-selected');
	        $compile(element)(scope);
	      });
	    }
	  };
	}
	
	exports.default = uiBbDropdownSelectedDirective;

/***/ }),

/***/ 65:
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = uiBbDropdownOption;
	/**
	 * @name uiBbDropdownOption
	 * @type {object}
	 */
	function uiBbDropdownOptionController($scope) {
	  var instance = {
	    isSelected: function isSelected() {
	      return this.selected || this.uiBbDropdownSelectController.isSelected(instance.option);
	    },
	    select: function select() {
	      if (!$scope.$ctrl.ngDisabled) {
	        this.uiBbDropdownSelectController.select(instance.option);
	      }
	    },
	    $onInit: function $onInit() {
	      Object.assign($scope, { $option: this.option });
	    }
	  };
	
	  return instance;
	}
	
	function uiBbDropdownOption($templateRequest, $compile) {
	  return {
	    require: {
	      uiBbDropdownSelectController: '^^uiBbDropdownSelect'
	    },
	    transclude: true,
	    replace: true,
	    bindToController: true,
	    controllerAs: '$ctrl',
	    controller: ['$scope', uiBbDropdownOptionController],
	    template: '\n      <li role="menuitem" class="dropdown-option" data-ng-class="{active: $ctrl.isSelected()}"\n        data-ng-click="$ctrl.select()" tabindex="-1">\n        <a class="clearfix cursor-pointer" tabindex="0" href="javascript:void(0)"></a>\n      </li>\n    ',
	    scope: {
	      option: '=',
	      arrowNavigation: '<',
	      selected: '<',
	      ngDisabled: '<'
	    },
	    link: function link(scope, element, attrs, controllers, transclude) {
	      var appendOption = function appendOption(el) {
	        return scope.$ctrl.arrowNavigation === true ? element.children().append(el) : element.empty().append(el);
	      };
	      if (attrs.templateUrl) {
	        $templateRequest(attrs.templateUrl).then(function (tplContent) {
	          $compile(tplContent.trim())(scope, appendOption);
	        });
	      } else {
	        transclude(scope, appendOption);
	      }
	    }
	  };
	}

/***/ }),

/***/ 66:
/***/ (function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(67);
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

/***/ 67:
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(15)();
	// imports
	
	
	// module
	exports.push([module.id, "ui-bb-dropdown-select {\n  display: block;\n}\n", ""]);
	
	// exports


/***/ })

/******/ })
});
;
//# sourceMappingURL=ui-bb-dropdown-select.js.map