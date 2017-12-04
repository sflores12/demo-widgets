(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vendor-bb-angular"));
	else if(typeof define === 'function' && define.amd)
		define("ui-bb-conversation-list-ng", ["vendor-bb-angular"], factory);
	else if(typeof exports === 'object')
		exports["ui-bb-conversation-list-ng"] = factory(require("vendor-bb-angular"));
	else
		root["ui-bb-conversation-list-ng"] = factory(root["vendor-bb-angular"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_28__) {
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

	module.exports = __webpack_require__(33);

/***/ }),

/***/ 28:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_28__;

/***/ }),

/***/ 33:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _vendorBbAngular = __webpack_require__(28);
	
	var _vendorBbAngular2 = _interopRequireDefault(_vendorBbAngular);
	
	var _component = __webpack_require__(34);
	
	var _component2 = _interopRequireDefault(_component);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * @name default
	 * @type {string}
	 * @description Angular module name
	 */
	/**
	 * @module ui-bb-conversation-list-ng
	 *
	 * @description Conversation list view component
	 *
	 * @example
	 *
	 *    <ui-bb-conversation-list-ng conversations="$ctrl.state.currentFolder.items"
	 *                                on-select="$ctrl.onItemSelected(conversation)"
	 *                                on-deselect="$ctrl.onItemDeselected(conversation)"
	 *                                on-click="$ctrl.openItem(conversation)">
	 *    </ui-bb-conversation-list-ng>
	 */
	
	exports.default = _vendorBbAngular2.default.module('ui-bb-conversation-list-ng', []).component('uiBbConversationListNg', _component2.default).name;

/***/ }),

/***/ 34:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _controller = __webpack_require__(35);
	
	var _controller2 = _interopRequireDefault(_controller);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * @name uiBbConversationListNg
	 * @type {Object}
	
	 * @property {Array<Conversation>} conversations list of conversations to display
	 * @property {Array<Topic>} list of topics
	 * @property {Function} onSelect function to be called when a conversation is selected
	 * @property {Function} onDeselect function to be called when a conversation is deselected
	 * @property {Function} onClick function to be called when a conversation is clicked
	 */
	
	var component = {
	  bindings: {
	    conversations: '=',
	    topics: '<',
	    onSelect: '&',
	    onDeselect: '&',
	    onClick: '&'
	  },
	  controller: _controller2.default,
	  transclude: true,
	  template: '\n    <div class="list-group conversation-list">\n      <div class="conversation list-group-item"\n        data-ng-repeat="conversation in $ctrl.conversations track by conversation.id"\n        data-ng-hide="conversation.deleteInProgress"\n        data-ng-class="{\n          unread: conversation.containsUnread,\n          active: conversation.selected,\n        }"\n        data-ng-click="$ctrl.onClick({ conversation: conversation } )">\n\n        <div class="row">\n          <div class="col-xs-1">\n            <div>\n              <input type="checkbox"\n                data-ng-model="conversation.selected"\n                data-ng-change="$ctrl.onSelectionChange(conversation)"\n                data-ng-click="$event.stopPropagation()"/>\n            </div>\n          </div>\n          <div class="col-xs-8 col-sm-6 col-md-7 conversation-info">\n            <div class="subject">\n              <span class="list-group-item-heading subject">\n               {{ conversation.subject }}\n              </span>\n            </div>\n            <div class="sender">\n              {{ conversation.sender }}\n            </div>\n          </div>\n          <div class="hidden-xs col-sm-2 category">\n            <span class="label label-default" data-ng-class="conversation.category">\n              {{ $ctrl.getTopicTitle(conversation.category) }}\n            </span>\n          </div>\n          <div class="col-xs-1 col-sm-1 conversation-icon">\n            <i data-ng-if="conversation.numberOfMessages > 1"\n              class="fa fa-exchange"\n              aria-hidden="true"></i>\n          </div>\n          <div class="col-xs-2 col-sm-2 col-md-1 date">\n            {{ conversation.timestamp | date: \'shortDate\' }}\n          </div>\n        </div>\n      </div>\n    </div>\n  '
	};
	
	exports.default = component;
	
	/**
	 * @typedef {Object} Conversation
	 * @property {string} id
	 * @property {boolean} containsUnread flag indicating whether conversation has unread messages
	 * @property {boolean} selected
	 * @property {string} subject
	 * @property {string} sender name of the conversation sender
	 * @property {string} body
	 * @property {string} category
	 * @property {number} numberOfMessages number of messages in the conversation
	 * @property {string} timestamp timestamp of last message in conversation
	 */
	
	/**
	 * @typedef {Object} Topic
	 * @property {string} id
	 * @property {string} code
	 * @property {string} name
	*/

/***/ }),

/***/ 35:
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = controller;
	function controller() {
	  var $ctrl = this;
	
	  function generateProfilePic() {
	    return '';
	  }
	
	  function getTopicTitle(category) {
	    return (($ctrl.topics || []).find(function (topic) {
	      return topic.code === category;
	    }) || {}).name || category;
	  }
	
	  function onSelectionChange(conversation) {
	    if (conversation.selected) {
	      $ctrl.onSelect({ conversation: conversation });
	    } else {
	      $ctrl.onDeselect({ conversation: conversation });
	    }
	  }
	
	  Object.assign(this, {
	    generateProfilePic: generateProfilePic,
	    getTopicTitle: getTopicTitle,
	    onSelectionChange: onSelectionChange
	  });
	}

/***/ })

/******/ })
});
;
//# sourceMappingURL=ui-bb-conversation-list-ng.js.map