(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vendor-bb-angular"), require("ui-bb-rich-text-editor-ng"));
	else if(typeof define === 'function' && define.amd)
		define("ui-bb-draft-edit-ng", ["vendor-bb-angular", "ui-bb-rich-text-editor-ng"], factory);
	else if(typeof exports === 'object')
		exports["ui-bb-draft-edit-ng"] = factory(require("vendor-bb-angular"), require("ui-bb-rich-text-editor-ng"));
	else
		root["ui-bb-draft-edit-ng"] = factory(root["vendor-bb-angular"], root["ui-bb-rich-text-editor-ng"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_28__, __WEBPACK_EXTERNAL_MODULE_38__) {
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

	module.exports = __webpack_require__(41);

/***/ }),

/***/ 17:
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

/***/ 18:
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

/***/ 28:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_28__;

/***/ }),

/***/ 38:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_38__;

/***/ }),

/***/ 41:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _vendorBbAngular = __webpack_require__(28);
	
	var _vendorBbAngular2 = _interopRequireDefault(_vendorBbAngular);
	
	var _uiBbRichTextEditorNg = __webpack_require__(38);
	
	var _uiBbRichTextEditorNg2 = _interopRequireDefault(_uiBbRichTextEditorNg);
	
	var _component = __webpack_require__(42);
	
	var _component2 = _interopRequireDefault(_component);
	
	__webpack_require__(44);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * @module ui-bb-draft-edit-ng
	 */
	exports.default = _vendorBbAngular2.default.module('ui-bb-draft-edit-ng', [_uiBbRichTextEditorNg2.default]).component('uiBbDraftEditNg', _component2.default).name;

/***/ }),

/***/ 42:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _controller = __webpack_require__(43);
	
	var _controller2 = _interopRequireDefault(_controller);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * @name uiBbDraftEditNg
	 * @type {Object}
	 * @property {Array<Topic>} list of topics
	 * @property {UiBbDraftEditNgConfig} config config object
	 * @property {Function} onClose function to call when user closes component
	 * @property {Function} onSend function to call to send the draft
	 * @property {UiBbDraftEditNgMessages} messages object containing localized labels
	 *
	 * @example
	 *  <ui-bb-draft-edit-ng
	 *    data-topics="$ctrl.topics"
	 *    data-config="$draftCtrl.config"
	 *    data-on-close="$draftCtrl.dismiss()"
	 *    data-on-send="$draftCtrl.send(draft)"
	 *    data-messages="{
	 *      labelClose: ('ui-bb-draft-ng.label.close' | i18n),
	 *      labelSend: ('ui-bb-draft-ng.label.send' | i18n),
	 *      labelRemove: ('ui-bb-draft-ng.label.remove' | i18n),
	 *      labelToggleImportance: ('ui-bb-draft-ng.label.toggleImportance' | i18n),
	 *      formHeader: ('ui-bb-draft-ng.form.header' | i18n),
	 *      formSubject: ('ui-bb-draft-ng.form.subject' | i18n),
	 *      formTopic: ('ui-bb-draft-ng.form.topic' | i18n),
	 *      formMessage: ('ui-bb-draft-ng.form.message' | i18n),
	 *      formSend: ('ui-bb-draft-ng.form.send' | i18n),
	 *      errorSend: ('ui-bb-draft-ng.error.send' | i18n),
	 *    }"></ui-bb-draft-edit-ng>
	 */
	var component = {
	  bindings: {
	    topics: '<',
	    config: '<',
	    onClose: '&',
	    onSend: '&',
	    messages: '<'
	  },
	  controller: _controller2.default,
	  template: '\n    <div class="panel panel-default">\n      <div class="panel-body">\n        <button type="button" class="close"\n          aria-label="{{ $ctrl.messages.labelClose }}" data-ng-click="$ctrl.close()">\n          <span aria-hidden="true">&times;</span>\n        </button>\n        <h3>{{ $ctrl.messages.formHeader }}</h3>\n        <form name="newMessageForm">\n          <div class="form-inline">\n            <div class="form-group" data-ng-if="$ctrl.config.subjectMaxLength > 0">\n              <label>{{ $ctrl.messages.formSubject }}:</label>\n              <input type="text" class="form-control" data-ng-model="$ctrl.draft.subject"\n                required maxlength="{{$ctrl.config.subjectMaxLength}}"/>\n            </div>\n            <div class="form-group">\n              <label>{{ $ctrl.messages.formTopic }}:</label>\n              <select class="form-control" data-ng-model="$ctrl.draft.category"\n                data-ng-options="key.code as key.name for key in $ctrl.topics track by key.id"\n                required>\n              </select>\n            </div>\n          </div>\n          <div class="form-group">\n            <label>{{ $ctrl.messages.formMessage }}:</label>\n            <ui-bb-rich-text-editor-ng\n              class="form-control"\n              data-ng-model="$ctrl.draft.body">\n            </ui-bb-rich-text-editor-ng>\n          </div>\n          <div class="bg-danger" data-ng-show="$ctrl.sendMessageError">\n            <p>{{ $ctrl.messages.errorSend }}</p>\n          </div>\n          <div class="pull-right">\n            <button type="submit" class="pull-left btn btn-primary"\n              data-ng-click="$ctrl.send()"\n              data-ng-disabled="!newMessageForm.$valid"\n              aria-label="{{ $ctrl.messages.labelSend }}">\n              {{ $ctrl.messages.formSend }}\n            </button>\n          </div>\n          <div class="btn-group" role="group">\n            <button type="button" class="btn btn-default" data-ng-click="$ctrl.close()"\n              aria-label="{{ $ctrl.messages.labelClose }}">\n              <i class="fa fa-arrow-left" aria-hidden="true"></i>\n            </button>\n            <button type="button" class="btn btn-default" data-ng-click="$ctrl.close()"\n              aria-label="{{ $ctrl.messages.labelRemove }}">\n              <i class="fa fa-trash-o" aria-hidden="true"></i>\n            </button>\n            <button type="button" class="btn btn-default"\n              data-ng-click="$ctrl.draft.important = !$ctrl.draft.important"\n              aria-label="{{ $ctrl.messages.labelToggleImportance }}">\n              <i ng-class="{\'fa-star-o\': !$ctrl.draft.important,\n                \'fa-star active\': $ctrl.draft.important}" class="fa"\n                aria-hidden="true"></i>\n            </button>\n          </div>\n        </form>\n      </div>\n    </div>\n  '
	};
	
	exports.default = component;
	
	/**
	 * @typedef {Object} Topic
	 * @property {string} id
	 * @property {string} code
	 * @property {string} name
	 */
	
	/**
	 * @typedef {Object} UiBbDraftEditNgConfig
	 * @property {number} subjectMaxLength Max allowed length for new draft subject.
	 */
	
	/**
	 * @typedef {Object} UiBbDraftEditNgMessages
	 * @property {string} formHeader text for form heading
	 * @property {string} formTopic label for topic/category/recipient field
	 * @property {string} formSubject label for subject field
	 * @property {string} formMessage label for message body text area
	 * @property {string} formSend label for send button
	 * @property {string} errorSend error to be shown if draft sending fails
	 */

/***/ }),

/***/ 43:
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = controller;
	function controller() {
	  var $ctrl = this;
	
	  function close() {
	    $ctrl.onClose();
	    $ctrl.draft = {};
	  }
	
	  function send() {
	    var draft = Object.assign({}, $ctrl.draft);
	    draft.category = $ctrl.draft.category;
	
	    $ctrl.onSend({ draft: draft }).then(function () {
	      $ctrl.draft = {};
	      return;
	    });
	  }
	
	  Object.assign($ctrl, {
	    close: close,
	    send: send,
	    draft: {}
	  });
	}

/***/ }),

/***/ 44:
/***/ (function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(45);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(18)(content, {});
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

/***/ 45:
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(17)();
	// imports
	
	
	// module
	exports.push([module.id, "", ""]);
	
	// exports


/***/ })

/******/ })
});
;
//# sourceMappingURL=ui-bb-draft-edit-ng.js.map