(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vendor-bb-angular"));
	else if(typeof define === 'function' && define.amd)
		define("ui-bb-message-ng", ["vendor-bb-angular"], factory);
	else if(typeof exports === 'object')
		exports["ui-bb-message-ng"] = factory(require("vendor-bb-angular"));
	else
		root["ui-bb-message-ng"] = factory(root["vendor-bb-angular"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_36__) {
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

	module.exports = __webpack_require__(43);

/***/ }),

/***/ 36:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_36__;

/***/ }),

/***/ 43:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _vendorBbAngular = __webpack_require__(36);
	
	var _vendorBbAngular2 = _interopRequireDefault(_vendorBbAngular);
	
	var _directive = __webpack_require__(44);
	
	var _directive2 = _interopRequireDefault(_directive);
	
	var _controller = __webpack_require__(45);
	
	var _controller2 = _interopRequireDefault(_controller);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * @description The angular module name
	 * @name default
	 * @type {string}
	 */
	exports.default = _vendorBbAngular2.default.module('ui-bb-message-ng', []).directive('uiBbMessage', ['$compile', '$window', '$timeout', _directive2.default]).controller('uiBbMessageController', ['$scope', _controller2.default]).name; /**
	                                                                                                                                                                                                                                           * @module ui-bb-message-ng
	                                                                                                                                                                                                                                           *
	                                                                                                                                                                                                                                           * @example
	                                                                                                                                                                                                                                           * // In an extension:
	                                                                                                                                                                                                                                           * // file: scripts/index.js
	                                                                                                                                                                                                                                           * import uiBbMessageNgKey from 'ui-bb-message-ng';
	                                                                                                                                                                                                                                           *
	                                                                                                                                                                                                                                           * export const dependencyKeys = [
	                                                                                                                                                                                                                                           *   uiBbMessageNgKey,
	                                                                                                                                                                                                                                           * ];
	                                                                                                                                                                                                                                           *
	                                                                                                                                                                                                                                           * // file: templates/template.ng.html
	                                                                                                                                                                                                                                           * <ui-bb-message
	                                                                                                                                                                                                                                           *  on-link-click="$ctrl.someAction()"
	                                                                                                                                                                                                                                           *  template="item.message"
	                                                                                                                                                                                                                                           *  link="item.link"
	                                                                                                                                                                                                                                           *  preventDefault="true"
	                                                                                                                                                                                                                                           *  truncate-line="1"/>
	                                                                                                                                                                                                                                           */

/***/ }),

/***/ 44:
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * @name  prepareTemplate
	 * @description Prepares message template by sanitizing tags and applying link if needs
	 * @type {function}
	 * @inner
	 * @param  {string} template HTML template
	 * @param  {boolean} hasLink True if the link should apply link
	 *
	 * @return {string}          Prepared message template
	 */
	var prepareTemplate = function prepareTemplate(template, hasLink) {
	  var preparedTemplate = template.replace(/</g, '&lt;').replace(/>/g, '&gt;');
	
	  if (hasLink) {
	    preparedTemplate = preparedTemplate.replace(/\{\{(.+?)\}\}/g, function (str, text) {
	      return '<a target="_blank" href="{{link}}" data-ng-click="$ctrl.onLinkClick($event)">' + text + '</a>';
	    });
	  }
	
	  return preparedTemplate;
	};
	
	/**
	 * @name  prepareElement
	 * @description Prepares element structure and base styles
	 * @type {function}
	 * @inner
	 * @param  {object} elem        Angular element
	 * @param  {number} linesLength Number of visible lines
	 * @param  {object} $window     Window object
	 *
	 * @return {object}             Links to wrapper, content and suffix elements
	 */
	var prepareElement = function prepareElement(elem, linesLength, $window) {
	  var isMultiline = linesLength > 1;
	  var wrapperTemplate = '<span><span></span>' + (isMultiline ? '<span>...</span>' : '') + '</span>';
	  var wrapper = elem.html(wrapperTemplate).children();
	  var content = wrapper.children().eq(0);
	  var suffix = isMultiline ? wrapper.children().eq(1) : null;
	
	  if (!!linesLength) {
	    var styles = $window.getComputedStyle(elem[0]);
	    var lineHeight = parseFloat(styles.getPropertyValue('line-height'));
	
	    elem.addClass(isMultiline ? 'multiline-ellipsis' : 'ellipsis').css('height', isMultiline ? linesLength * lineHeight + 'px' : 'auto');
	  }
	
	  return { wrapper: wrapper, content: content, suffix: suffix };
	};
	
	/**
	 * @name  truncateElement
	 * @description Applies truncating to message
	 * @type {function}
	 * @inner
	 * @param  {object} elem Angular element
	 * @param  {object} wrapper Link to wrapper element
	 * @param  {object} content Link to content element
	 * @param  {object} suffix Link to suffix element
	 */
	var truncateElement = function truncateElement(elem, wrapper, content, suffix) {
	  while (wrapper[0].offsetHeight > elem[0].offsetHeight) {
	    var nodes = content.contents();
	    var lastNode = nodes.eq(nodes.length - 1);
	    var nodeText = lastNode.text();
	    var clippedText = nodeText.replace(/\s*\S*\s*$/, '');
	
	    if (clippedText.length) {
	      lastNode.text(clippedText);
	    } else {
	      lastNode.remove();
	    }
	
	    content.data('is-truncated', true);
	  }
	
	  suffix.css('visibility', content.data('is-truncated') ? 'visible' : 'hidden');
	};
	
	var uiBbMessageDirective = function uiBbMessageDirective($compile, $window, $timeout) {
	  return {
	    restrict: 'E',
	    scope: {
	      link: '<',
	      preventDefault: '=',
	      template: '<',
	      onLinkClick: '&',
	      visibleLinesLength: '<'
	    },
	    transclude: false,
	    link: function link(scope, elem) {
	      var hasLink = !!(scope.link || scope.onLinkClick);
	      var template = prepareTemplate(scope.template, hasLink);
	
	      var _prepareElement = prepareElement(elem, scope.visibleLinesLength, $window),
	          wrapper = _prepareElement.wrapper,
	          content = _prepareElement.content,
	          suffix = _prepareElement.suffix;
	
	      var cachedElemWidth = elem[0].offsetWidth;
	      var resizeRef = null;
	
	      /**
	       * @name  initContent
	       * @description Init message content
	       * @type {function}
	       * @inner
	       */
	      var initContent = function initContent() {
	        content.data('is-truncated', false);
	        content.html(template);
	        $compile(content.contents())(scope);
	      };
	
	      /**
	       * @name  onResize
	       * @description Applies when resize method fired
	       * @type {function}
	       * @inner
	       */
	      var onResize = function onResize() {
	        $timeout.cancel(resizeRef);
	        resizeRef = $timeout(function () {
	          var newElemWidth = elem[0].offsetWidth;
	
	          if (newElemWidth !== cachedElemWidth) {
	            if (newElemWidth > cachedElemWidth) {
	              initContent();
	            }
	
	            cachedElemWidth = newElemWidth;
	            truncateElement(elem, wrapper, content, suffix);
	          }
	        }, 75);
	      };
	
	      initContent();
	
	      if (scope.visibleLinesLength > 1) {
	        truncateElement(elem, wrapper, content, suffix);
	
	        $window.addEventListener('resize', onResize);
	      }
	
	      scope.$on('$destroy', function () {
	        $window.removeEventListener('resize', onResize);
	      });
	    },
	    controller: 'uiBbMessageController',
	    controllerAs: '$ctrl'
	  };
	};
	
	/**
	 * @name uiBbMessageDirective
	 * @type {function}
	 *
	 * @property {string} message Message content
	 * @property {string} link Link that will added in message instead of `{{ link }}`
	 * @property {boolean} preventDefault true if need to prevent default event when click on link
	 * @property {function} onLinkClick callback function when click on link
	 * @property {number} visibleLinesLength Number of lines to be visible. If message has more lines it
	 * will be truncated by ellipsis. If parameter is not set message will not be truncated.
	 */
	exports.default = uiBbMessageDirective;

/***/ }),

/***/ 45:
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var uiBbMessageController = function uiBbMessageController($scope) {
	  var $ctrl = this;
	
	  /**
	   * @description
	   * Call `onLinkClick` event that define in `ui-bb-message` directive if it is set and prevent
	   * default event if need.
	   *
	   * @name uiBbMessageController#onLinkClick
	   * @type {function}
	   * @param {object} event Event object
	   */
	  var onLinkClick = function onLinkClick(event) {
	    if ($scope.onLinkClick) {
	      $scope.onLinkClick();
	    }
	    if ($scope.preventDefault) {
	      event.preventDefault();
	    }
	  };
	
	  Object.assign($ctrl, {
	    onLinkClick: onLinkClick
	  });
	};
	
	/**
	 * @name uiBbMessageController
	 * @type {function}
	 */
	exports.default = uiBbMessageController;

/***/ })

/******/ })
});
;
//# sourceMappingURL=ui-bb-message-ng.js.map