(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vendor-bb-angular"), require("vendor-bb-angular-sanitize"), require("ui-bb-rich-text-editor-ng"));
	else if(typeof define === 'function' && define.amd)
		define("ui-bb-conversation-view-ng", ["vendor-bb-angular", "vendor-bb-angular-sanitize", "ui-bb-rich-text-editor-ng"], factory);
	else if(typeof exports === 'object')
		exports["ui-bb-conversation-view-ng"] = factory(require("vendor-bb-angular"), require("vendor-bb-angular-sanitize"), require("ui-bb-rich-text-editor-ng"));
	else
		root["ui-bb-conversation-view-ng"] = factory(root["vendor-bb-angular"], root["vendor-bb-angular-sanitize"], root["ui-bb-rich-text-editor-ng"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_28__, __WEBPACK_EXTERNAL_MODULE_37__, __WEBPACK_EXTERNAL_MODULE_38__) {
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

	module.exports = __webpack_require__(36);

/***/ }),

/***/ 28:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_28__;

/***/ }),

/***/ 36:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _vendorBbAngular = __webpack_require__(28);
	
	var _vendorBbAngular2 = _interopRequireDefault(_vendorBbAngular);
	
	var _vendorBbAngularSanitize = __webpack_require__(37);
	
	var _vendorBbAngularSanitize2 = _interopRequireDefault(_vendorBbAngularSanitize);
	
	var _uiBbRichTextEditorNg = __webpack_require__(38);
	
	var _uiBbRichTextEditorNg2 = _interopRequireDefault(_uiBbRichTextEditorNg);
	
	var _component = __webpack_require__(39);
	
	var _component2 = _interopRequireDefault(_component);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * @module ui-bb-conversation-view-ng
	 */
	exports.default = _vendorBbAngular2.default.module('ui-bb-conversation-view-ng', [_vendorBbAngularSanitize2.default, _uiBbRichTextEditorNg2.default]).component('uiBbConversationViewNg', _component2.default).name;

/***/ }),

/***/ 37:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_37__;

/***/ }),

/***/ 38:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_38__;

/***/ }),

/***/ 39:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _controller = __webpack_require__(40);
	
	var _controller2 = _interopRequireDefault(_controller);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * @name uiBbConversationViewNg
	 * @type {object}
	 * @description
	 * Conversation view directive which can be used to display a list of messages in conversation.
	 *
	 * @property {object} conversation conversation to show
	 * @property {object} messages messages belonging to the conversation.
	 * @property {Array<Topic>} list of topics
	 * @property {object} draft optional draft object to be displayed in response field
	 * @property {function} on-close function to be called when the view is closed
	 * @property {function} on-reply-send function to be called to send a response draft
	 * @example
	 *
	 * <ui-bb-conversation-view-ng
	 *   data-on-click="$conversationViewCtrl.viewConversation(conversation)"
	 *   data-conversation="$conversationViewCtrl.conversation"
	 *   data-messages="$conversationViewCtrl.messages"
	 *   data-topics="$ctrl.topics"
	 *   data-draft="$conversationViewCtrl.draft"
	 *   data-on-close="$conversationViewCtrl.close()"
	 *   data-on-reply-send="$conversationViewCtrl.sendReply(draft)"
	 *   data-labels="{
	 *     labelClose: ('ui-bb-conversation-view-ng.label.close' | i18n),
	 *     labelSend: ('ui-bb-conversation-view-ng.label.send' | i18n),
	 *   }"></ui-bb-conversation-view-ng>
	 *
	 */
	var component = {
	  bindings: {
	    conversation: '<',
	    messages: '<',
	    topics: '<',
	    draft: '<',
	    onClose: '&',
	    onReplySend: '&',
	    labels: '<'
	  },
	  controller: _controller2.default,
	  transclude: true,
	  template: '\n    <div class="panel panel-default">\n      <div class="panel-heading container-fluid">\n        <div class="row">\n          <div class="col-sm-8 col-xs-5 conversation-info">\n            <span class="list-group-item-heading subject">{{ $ctrl.conversation.subject }}</span>\n          </div>\n          <div class="col-sm-2 col-xs-2 category">\n            <span class="label label-default" data-ng-class="{{ $ctrl.conversation.category }}">\n              {{ $ctrl.getTopicTitle() }}\n            </span>\n          </div>\n          <div class="col-sm-2 col-xs-5 date text-right">\n            {{ $ctrl.conversation.timestamp | date: \'shortDate\' }}\n          </div>\n        </div>\n      </div>\n\n      <ul class="list-group" data-ng-if="!$ctrl.isLoading()">\n        <li class="list-group-item" data-ng-repeat="$message in $ctrl.messages">\n          <b>{{ $message.senderName }}</b><br/>\n          <div class="message-header">\n            {{ $message.deliveredOn | date: \'shortDate\' }}\n            <div class="pull-right">\n              <i class="fa fa-clock-o" aria-hidden="true"></i>\n              {{ $message.deliveredOn | date: \'shortTime\' }}\n            </div>\n          </div>\n          <div class="message-body">\n            <div data-ng-bind-html="$message.body"></div>\n          </div>\n        </li>\n      </ul>\n\n      <div class="loading-panel text-center" data-ng-if="$ctrl.isLoading()">\n        <div class="h4" data-i18n-key="label.message.loading"></div>\n      </div>\n\n      <div class="panel-footer" data-ng-if="!$ctrl.isLoading()">\n        <form name="replyMessageForm">\n          <ui-bb-rich-text-editor-ng\n            class="form-control"\n            data-ng-model="$ctrl.draft.body">\n          </ui-bb-rich-text-editor-ng>\n        </form>\n        <p>\n          <div class="btn-group" role="group">\n            <button type="button" class="btn btn-default" data-ng-click="$ctrl.close()"\n              aria-label="{{ $ctrl.labels.labelClose }}">\n              <i class="fa fa-arrow-left" aria-hidden="true"></i>\n            </button>\n          </div>\n          <div class="pull-right">\n            <button type="submit" class="pull-left btn btn-primary"\n              data-ng-disabled="!replyMessageForm.$valid"\n              data-ng-click="$ctrl.sendReply($ctrl.draft)"\n              data-i18n-key="label.send"\n              aria-label="{{ $ctrl.labels.labelSend }}">\n            </button>\n          </div>\n        </p>\n      </div>\n    </div>\n  '
	};
	
	exports.default = component;
	
	/**
	 * @typedef {Object} Topic
	 * @property {string} id
	 * @property {string} code
	 * @property {string} name
	 */

/***/ }),

/***/ 40:
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = controller;
	function controller() {
	  var $ctrl = this;
	
	  function $onInit() {}
	
	  function isLoading() {
	    return ($ctrl.messages == null || $ctrl.messages.length === 0) && $ctrl.topics == null;
	  }
	
	  function getTopicTitle() {
	    var category = ($ctrl.conversation || {}).category;
	    return (($ctrl.topics || []).find(function (topic) {
	      return topic.code === category;
	    }) || {}).name || category;
	  }
	
	  function close() {
	    $ctrl.onClose();
	  }
	
	  function sendReply(draft) {
	    return $ctrl.onReplySend({
	      conversationId: $ctrl.conversation.id,
	      draft: Object.assign({}, draft)
	    });
	  }
	
	  Object.assign(this, {
	    $onInit: $onInit,
	    isLoading: isLoading,
	    getTopicTitle: getTopicTitle,
	    close: close,
	    sendReply: sendReply
	  });
	}

/***/ })

/******/ })
});
;
//# sourceMappingURL=ui-bb-conversation-view-ng.js.map