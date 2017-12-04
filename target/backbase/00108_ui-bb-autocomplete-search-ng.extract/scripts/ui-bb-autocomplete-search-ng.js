(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vendor-bb-angular"), require("ui-bb-search-box-ng"), require("ui-bb-list-ng"), require("vendor-bb-angular-sanitize"), require("vendor-bb-uib-typeahead"));
	else if(typeof define === 'function' && define.amd)
		define("ui-bb-autocomplete-search-ng", ["vendor-bb-angular", "ui-bb-search-box-ng", "ui-bb-list-ng", "vendor-bb-angular-sanitize", "vendor-bb-uib-typeahead"], factory);
	else if(typeof exports === 'object')
		exports["ui-bb-autocomplete-search-ng"] = factory(require("vendor-bb-angular"), require("ui-bb-search-box-ng"), require("ui-bb-list-ng"), require("vendor-bb-angular-sanitize"), require("vendor-bb-uib-typeahead"));
	else
		root["ui-bb-autocomplete-search-ng"] = factory(root["vendor-bb-angular"], root["ui-bb-search-box-ng"], root["ui-bb-list-ng"], root["vendor-bb-angular-sanitize"], root["vendor-bb-uib-typeahead"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_8__, __WEBPACK_EXTERNAL_MODULE_9__, __WEBPACK_EXTERNAL_MODULE_18__, __WEBPACK_EXTERNAL_MODULE_19__) {
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
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(17);

/***/ }),
/* 1 */,
/* 2 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ }),
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_8__;

/***/ }),
/* 9 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_9__;

/***/ }),
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _vendorBbAngular = __webpack_require__(2);
	
	var _vendorBbAngular2 = _interopRequireDefault(_vendorBbAngular);
	
	var _vendorBbAngularSanitize = __webpack_require__(18);
	
	var _vendorBbAngularSanitize2 = _interopRequireDefault(_vendorBbAngularSanitize);
	
	var _vendorBbUibTypeahead = __webpack_require__(19);
	
	var _vendorBbUibTypeahead2 = _interopRequireDefault(_vendorBbUibTypeahead);
	
	var _uiBbSearchBoxNg = __webpack_require__(8);
	
	var _uiBbSearchBoxNg2 = _interopRequireDefault(_uiBbSearchBoxNg);
	
	var _uiBbListNg = __webpack_require__(9);
	
	var _uiBbListNg2 = _interopRequireDefault(_uiBbListNg);
	
	var _component = __webpack_require__(20);
	
	var _component2 = _interopRequireDefault(_component);
	
	var _controller = __webpack_require__(22);
	
	var _controller2 = _interopRequireDefault(_controller);
	
	var _constants = __webpack_require__(21);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * The angular module name
	 * @name default
	 * @type {string}
	 */
	/**
	 * @module ui-bb-autocomplete-search-ng
	 *
	 * @description
	 * Autocomplete search component
	 *
	 * @example
	 * // In an extension:
	 * // file: scripts/index.js
	 * import uiBbAutocompleteSearchNgKey from 'ui-bb-autocomplete-search-ng';
	 *
	 * export const dependencyKeys = [
	 *   uiBbAutocompleteSearchNgKey,
	 * ];
	 *
	 * // file: templates/template.ng.html
	 * <ui-bb-autocomplete-search-ng
	 *   searchBoxConfig="{
	 *     labels: {
	 *       title: 'Search',
	 *       placeholder: 'Enter search text...',
	 *       clear: 'Clear text',
	 *       submit: 'Submit search',
	 *     },
	 *     hideButton: true,
	 *     iconClasses: 'fa fa-chevron-down',
	 *   }"
	 *   load-result="(options) => {}"
	 *   on-select="(item, label) => {}"
	 *   label-key="'name'">
	 * </ui-bb-autocomplete-search-ng>
	 */
	
	exports.default = _vendorBbAngular2.default.module(_constants.MODULE_KEY, [_vendorBbAngularSanitize2.default, _vendorBbUibTypeahead2.default, _uiBbSearchBoxNg2.default, _uiBbListNg2.default]).component(_constants.COMPONENT_KEY, _component2.default).controller(_constants.CONTROLLER_KEY, ['$element', '$templateCache', '$timeout', '$q', '$document', _controller2.default]).name;

/***/ }),
/* 18 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_18__;

/***/ }),
/* 19 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_19__;

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _constants = __webpack_require__(21);
	
	/**
	 * @name uiBBAutocompleteSearchComponent
	 * @type {object}
	 *
	 * @property {String} ngModel Component model value
	 * @property {String} disabled Controls whether or not component disabled or not
	 * @property {Object} searchBoxConfig Configuration object for search box component
	 * @property {Number} searchMinLength Minimum search string length for show dropdown result
	 * @property {Function} loadResult Function to retrieve search result. It gets an object with:
	 * - searchValue - Search query string
	 * - isLoadMore - Indicates that Function should load next page of results
	 * Function should return a Promise with object with properties:
	 * - data - array of results
	 * - totalItems - Total count of results
	 * - hasMore - Controls whether or not load service has more results
	 * @property {String} labelKey Property name of result item that will be used for show in search
	 * field after select item
	 * @property {Function} onSelect Function that calls after select result item
	 * @property {Function} onClear Function that calls after input field was cleared
	 * @property {Messages} messages Messages object
	 * @property {String?} popupTemplateUrl Custom template url for popup element.
	 * The referenced template should contain the element with attribute 'data-role="list-wrapper"'
	 * for append matched results to it.
	 * @property {String?} matchTemplateUrl Custom template url for match element
	 */
	
	/**
	 * Labels type definition
	 * @typedef {Object} Messages
	 * @property {String} noResults Translated message when no one results found
	 * @property {String} result Translated message when one result found
	 * @property {String} results Translated prefix for message when more then one result found
	 */
	var component = {
	  bindings: {
	    ngModel: '<',
	    disabled: '=',
	    searchBoxConfig: '<',
	    searchMinLength: '<',
	    loadResult: '&',
	    labelKey: '@',
	    onSelect: '&',
	    onClear: '&',
	    messages: '<',
	    popupTemplateUrl: '@?',
	    matchTemplateUrl: '@?'
	  },
	  controller: _constants.CONTROLLER_KEY,
	  template: '\n    <div class="dropdown open bb-autocomplete-search"\n      data-role="typeahead"\n      data-ng-model="$ctrl.state.result.model"\n      data-uib-typeahead="item as item[$ctrl.labelKey] for item in $ctrl.getResult($viewValue)"\n      data-typeahead-min-length="$ctrl.state.search.minLength"\n      data-typeahead-is-open="$ctrl.state.isOpen"\n      data-typeahead-loading="$ctrl.state.isLoading"\n      data-typeahead-no-results="$ctrl.state.isEmpty"\n      data-typeahead-on-select="$ctrl.onMatchSelect($item, $model, $label, $event)"\n      data-typeahead-popup-template-url="' + _constants.POPUP_TEMPLATE_URL + '"\n      data-typeahead-template-url="' + _constants.MATCH_TEMPLATE_URL + '"\n      data-typeahead-append-to="$ctrl.listWrapper">\n      <ui-bb-search-box-ng class="autocomplete-search-input-box"\n        data-ng-model="$ctrl.state.search.value"\n        data-disabled="$ctrl.disabled"\n        data-config="$ctrl.state.searchBox"\n        data-on-change="$ctrl.onSearch(search)"\n        data-on-submit="$ctrl.onSubmit(search)"\n        data-on-clear="$ctrl.onSearchClear()"\n        data-is-loading="$ctrl.state.isLoading"\n        data-forced-submit="true">\n      </ui-bb-search-box-ng>\n      <div class="bb-autocomplete-search-list-wrapper"\n        data-role="list-wrapper">\n      </div>\n    </div>\n\n    <script type="text/ng-template" id="' + _constants.POPUP_TEMPLATE_URL + '">\n      <ul class="dropdown-menu bb-autocomplete-search-dropdown bb-autocomplete-search-list"\n        data-ng-show="isDisplayed()">\n        <ui-bb-list data-on-scroll-to-end="onLoadMore()"\n          class="list-group m-0 bb-autocomplete-search-list-inner">\n          <li class="list-group-item bb-autocomplete-search-message"\n            data-ng-class="{ big: !matches.length }">\n            <span data-ng-bind="getResultMessage()"></span>\n          </li>\n          <li class="list-group-item bb-autocomplete-search-list-item"\n            data-ng-repeat="match in matches track by $index"\n            data-ng-class="{ active: isActive($index) }"\n            data-ng-mouseenter="selectActive($index)"\n            data-ng-click="selectMatch($index)">\n            <div data-uib-typeahead-match\n              data-index="$index"\n              data-match="match"\n              data-query="query"\n              data-template-url="templateUrl">\n            </div>\n          </li>\n          <li data-ng-show="isLoading()"\n            class="list-group-item bb-autocomplete-search-message">\n            <span class="ui-bb-autocomplete-search-spinner center-block"></span>\n          </li>\n        </ui-bb-list>\n      </ul>\n    </script>\n\n    <script type="text/ng-template" id="' + _constants.MATCH_TEMPLATE_URL + '">\n      <a href\n        tabindex="-1"\n        data-ng-bind-html="match.label | uibTypeaheadHighlight:query"\n        class="px-3">\n      </a>\n    </script>\n  '
	};
	
	exports.default = component;

/***/ }),
/* 21 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var MODULE_KEY = exports.MODULE_KEY = 'ui-bb-autocomplete-search-ng';
	
	var CONTROLLER_KEY = exports.CONTROLLER_KEY = MODULE_KEY + ':controller';
	
	var COMPONENT_KEY = exports.COMPONENT_KEY = 'uiBbAutocompleteSearchNg';
	
	var POPUP_TEMPLATE_URL = exports.POPUP_TEMPLATE_URL = MODULE_KEY + '/popup-template.html';
	
	var MATCH_TEMPLATE_URL = exports.MATCH_TEMPLATE_URL = MODULE_KEY + '/match-template.html';

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = uiBbAutocompleteSearchController;
	
	var _vendorBbAngular = __webpack_require__(2);
	
	var _vendorBbAngular2 = _interopRequireDefault(_vendorBbAngular);
	
	var _constants = __webpack_require__(21);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * @name uiBbAutocompleteSearchController
	 * @type {function}
	 *
	 * @description
	 * Modal instance controller
	 *
	 * @param {object} element Angular element object
	 * @param {object} templateCache Angular template cache service
	 * @param {object} timeout Angular timeout service
	 * @param {object} Promise Angular Promise service
	 */
	function uiBbAutocompleteSearchController(element, templateCache, timeout, Promise, document) {
	  var ctrl = this;
	
	  var ngModelCtrl = element.controller('ngModel');
	  var typeahead = _vendorBbAngular2.default.element(element[0].querySelector('[data-role="typeahead"]'));
	  var listWrapper = _vendorBbAngular2.default.element(element[0].querySelector('[data-role="list-wrapper"]'));
	
	  var searchMinLength = ctrl.searchMinLength !== undefined ? ctrl.searchMinLength : 3;
	
	  var defaultSearchBoxConfig = {
	    iconClasses: 'fa fa-chevron-down',
	    hideButton: false
	  };
	
	  var defaultResultState = {
	    data: [],
	    totalItems: 0,
	    hasMore: false,
	    isLoaded: false,
	    isLoading: false,
	    isLoadingMore: false,
	    ngModel: null
	  };
	
	  /**
	   * @name uiBbAutocompleteSearchController#state
	   *
	   * @description
	   * Component state object
	   *
	   * @type {Object}
	   */
	  var state = {
	    isOpen: false,
	    isFocusLost: false,
	    search: {
	      value: ctrl.ngModel || null,
	      minLength: searchMinLength,
	      isSearchPrevented: true,
	      isSubmitPrevented: false
	    },
	    result: Object.assign({}, defaultResultState),
	    searchBox: Object.assign({}, defaultSearchBoxConfig, ctrl.searchBoxConfig)
	  };
	
	  /**
	   * @name uiBbAutocompleteSearchController#normalizeValue
	   *
	   * @description
	   * Normalizes search value
	   *
	   * @inner
	   * @type {Function}
	   * @param {String} value Dirty search value
	   * @return {String} Normalized search value
	   */
	  var normalizeValue = function normalizeValue(value) {
	    return value && value.trim() || '';
	  };
	
	  /**
	   * @name uiBbAutocompleteSearchController#enableSearchMinLength
	   *
	   * @description
	   * Disables minimun search value length
	   *
	   * @inner
	   * @type {Function}
	   */
	  var disableSearchMinLength = function disableSearchMinLength() {
	    state.search.minLength = 0;
	  };
	
	  /**
	   * @name uiBbAutocompleteSearchController#enableSearchMinLength
	   *
	   * @description
	   * Enables minimun search value length
	   *
	   * @inner
	   * @type {Function}
	   */
	  var enableSearchMinLength = function enableSearchMinLength() {
	    state.search.minLength = searchMinLength;
	  };
	
	  /**
	   * @name uiBbAutocompleteSearchController#updateSearchValue
	   *
	   * @description
	   * Sets component search value
	   *
	   * @inner
	   * @type {Function}
	   * @param {String} searchValue Search value
	   */
	  var updateSearchValue = function updateSearchValue(searchValue) {
	    state.search.value = normalizeValue(searchValue);
	  };
	
	  /**
	   * @name uiBbAutocompleteSearchController#setResultModelValue
	   *
	   * @description
	   * Sets typeahead directive model value
	   *
	   * @inner
	   * @type {Function}
	   * @param {String} searchValue Search value
	   */
	  var updateResultModelValue = function updateResultModelValue(searchValue) {
	    typeahead.controller('ngModel').$setViewValue(searchValue);
	  };
	
	  /**
	   * @name uiBbAutocompleteSearchController#updateModelValue
	   *
	   * @description
	   * Updates component model value
	   *
	   * @inner
	   * @type {Function}
	   * @param {String} searchValue Search value
	   */
	  var updateModelValue = function updateModelValue(searchValue) {
	    ngModelCtrl.$setViewValue(searchValue);
	  };
	
	  /**
	   * @name uiBbAutocompleteSearchController#triggerResultModel
	   *
	   * @description
	   * Triggers result model
	   *
	   * @inner
	   * @type {Function}
	   */
	  var triggerResultModel = function triggerResultModel() {
	    var resultNgModelCtrl = typeahead.controller('ngModel');
	
	    // Those two action will open result popup
	    resultNgModelCtrl.$$lastCommittedViewValue = state.search.value + ' ';
	    resultNgModelCtrl.$setViewValue(state.search.value);
	  };
	
	  /**
	   * @name uiBbAutocompleteSearchController#getPreloadedResult
	   *
	   * @description
	   * Gets existing result data.
	   *
	   * @inner
	   * @type {Function}
	   * @returns {Object} A Promise with current search result
	   */
	  var getPreloadedResult = function getPreloadedResult() {
	    return Promise.resolve(state.result.data);
	  };
	
	  /**
	   * @name uiBbAutocompleteSearchController#requestResult
	   *
	   * @description
	   * Retrieve search result
	   *
	   * @inner
	   * @type {Function}
	   * @param {Object} options Request configuration object
	   * @returns {Promise} A Promise with retrieved data
	   */
	  var requestResult = function requestResult(options) {
	    if (state.result.isLoaded && !options.isLoadMore) {
	      return getPreloadedResult();
	    }
	
	    return ctrl.loadResult({ options: options }).then(function (result) {
	      Object.assign(state.result, result, { isLoaded: true });
	
	      return state.result.data;
	    });
	  };
	
	  /**
	   * @name uiBbAutocompleteSearchController#getResult
	   *
	   * @description
	   * Gets search result data
	   *
	   * @inner
	   * @type {Function}
	   * @param {String} searchValue Search string
	   * @returns {Promise} A Promise with processed data
	   */
	  var getResult = function getResult(searchValue) {
	    return requestResult({ searchQuery: normalizeValue(searchValue) });
	  };
	
	  /**
	   * @name uiBbAutocompleteSearchController#triggerResult
	   *
	   * @description
	   * Trigger result dropdown
	   *
	   * @inner
	   * @type {Function}
	   */
	  var triggerResult = function triggerResult() {
	    disableSearchMinLength();
	
	    timeout(function () {
	      triggerResultModel();
	      enableSearchMinLength();
	    });
	  };
	
	  /**
	   * @name uiBbAutocompleteSearchController#resetResult
	   *
	   * @description
	   * Resets result state
	   *
	   * @inner
	   * @type {Function}
	   */
	  var resetResult = function resetResult() {
	    state.result.isLoaded = false;
	    updateResultModelValue('');
	  };
	
	  /**
	   * @name uiBbAutocompleteSearchController#onLoadMore
	   *
	   * @description
	   * Loads next page of result.
	   *
	   * @inner
	   * @type {Function}
	   */
	  var onLoadMore = function onLoadMore() {
	    if (!state.result.isLoading && !state.result.isLoadingMore && state.result.hasMore) {
	      state.result.isLoadingMore = true;
	      requestResult({ searchQuery: normalizeValue(state.search.value), isLoadMore: true }).then(function () {
	        state.result.isLoadingMore = false;
	        state.isFocusLost = true;
	
	        triggerResult();
	      });
	    }
	  };
	
	  /**
	   * @name uiBbAutocompleteSearchController#onSearch
	   *
	   * @description
	   * Calls when search value was changed
	   *
	   * @type {Function}
	   * @param {String} search Search string
	   */
	  var onSearch = function onSearch(searchValue) {
	    resetResult();
	
	    if (!state.search.isSearchPrevented) {
	      updateResultModelValue(searchValue);
	      updateModelValue(searchValue);
	    }
	  };
	
	  /**
	   * @name uiBbAutocompleteSearchController#onSubmit
	   *
	   * @description
	   * Calls when search value was submitted
	   *
	   * @type {Function}
	   */
	  var onSubmit = function onSubmit() {
	    if (!state.isOpen && !state.search.isSubmitPrevented) {
	      triggerResult();
	    }
	  };
	
	  /**
	   * @name uiBbAutocompleteSearchController#onClear
	   *
	   * @description
	   * Calls when search value was set to empty
	   *
	   * @type {Function}
	   */
	  var onSearchClear = function onSearchClear() {
	    state.search.isSearchPrevented = true;
	    state.search.isSubmitPrevented = true;
	    ctrl.onClear();
	  };
	
	  /**
	   * @name uiBbAutocompleteSearchController#onMatchSelect
	   *
	   * @description
	   * Calls when one of the matches was selected
	   *
	   * @type {Function}
	   * @param {Object} $item Match item object
	   * @param {Object} $model Match item model object
	   * @param {String} $label Match item label
	   * @param {String} $event Event object
	   */
	  var onMatchSelect = function onMatchSelect($item, $model, $label) {
	    state.search.isSearchPrevented = true;
	    state.search.isSubmitPrevented = true;
	    updateSearchValue($label);
	    updateModelValue($label);
	    ctrl.onSelect({ $model: $model, $label: $label });
	  };
	
	  /**
	   * @name uiBbAutocompleteSearchController#getResultMessage
	   *
	   * @description
	   * Gets message string according to result state.
	   *
	   * @inner
	   * @type {Function}
	   * @returns {String} Translated message string
	   */
	  var getResultMessage = function getResultMessage() {
	    if (state.result.data.length === 1) return ctrl.messages.result;
	    if (state.result.data.length > 1) return state.result.totalItems + ' ' + ctrl.messages.results;
	
	    return ctrl.messages.noResults;
	  };
	
	  /**
	   * @name uiBbAutocompleteSearchController#getResultMessage
	   *
	   * @description
	   * Show no results message.
	   *
	   * @inner
	   * @type {Function}
	   * @returns {String} Translated message string
	   */
	  var showEmptyMessage = function showEmptyMessage() {
	    return state.result.isLoaded && state.isEmpty && ctrl.messages.noResults;
	  };
	
	  /**
	   * @name uiBbAutocompleteSearchController#expandResultScope
	   *
	   * @description
	   * Adds missing functionality to uib-typeahead like load more result when scrolling and loading
	   * indicalor.
	   *
	   * @inner
	   * @type {Function}
	   */
	  var expandResultScope = function expandResultScope() {
	    var resultScope = listWrapper.children().isolateScope();
	    var list = listWrapper.find('ui-bb-list');
	
	    resultScope.$watch(function () {
	      return resultScope.active;
	    }, function (newValue, oldValue) {
	      if (state.isFocusLost) {
	        resultScope.active = oldValue;
	        state.isFocusLost = false;
	      }
	
	      if (newValue === 0 && oldValue === -1) {
	        timeout(function () {
	          list[0].scrollTop = 0;
	        });
	      }
	    });
	
	    Object.assign(resultScope, {
	      isDisplayed: function isDisplayed() {
	        return resultScope.isOpen() || showEmptyMessage();
	      },
	      isLoading: function isLoading() {
	        return state.result.isLoading || state.result.isLoadingMore;
	      },
	
	      getResultMessage: getResultMessage,
	      onLoadMore: onLoadMore
	    });
	  };
	
	  /**
	   * @name uiBbAutocompleteSearchController#$onInit
	   *
	   * @description
	   * Angular $onInit lifecycle hook
	   *
	   * @type {Function}
	   */
	  var $onInit = function $onInit() {
	    if (ctrl.popupTemplateUrl) {
	      var popupTemplate = templateCache.get(ctrl.popupTemplateUrl);
	      templateCache.put(_constants.POPUP_TEMPLATE_URL, popupTemplate);
	    }
	
	    if (ctrl.matchTemplateUrl) {
	      var matchTemplate = templateCache.get(ctrl.matchTemplateUrl);
	      templateCache.put(_constants.MATCH_TEMPLATE_URL, matchTemplate);
	    }
	
	    document.on('click keyup', function (event) {
	      if (element[0] !== event.target && !element[0].contains(event.target)) {
	        state.search.isSearchPrevented = true;
	
	        if (state.result.isLoaded) {
	          resetResult();
	        }
	      } else {
	        state.search.isSearchPrevented = false;
	      }
	
	      state.search.isSubmitPrevented = false;
	    });
	  };
	
	  /**
	   * @name uiBbAutocompleteSearchController#$onChanges
	   *
	   * @description
	   * Angular $onChanges lifecycle hook. Checks if new introduced value is different from current
	   * hold value and updates component internal state value.
	   *
	   * @type {Function}
	   */
	  var $onChanges = function $onChanges(_ref) {
	    var ngModel = _ref.ngModel;
	
	    if (ngModel && ngModel.currentValue !== ngModel.previousValue) {
	      updateSearchValue(ngModel.currentValue);
	    }
	  };
	
	  /**
	   * @name uiBbAutocompleteSearchController#$postLink
	   *
	   * @description
	   * Angular $postLink lifecycle hook
	   *
	   * @type {Function}
	   */
	  var $postLink = function $postLink() {
	    timeout(function () {
	      expandResultScope();
	    });
	  };
	
	  Object.assign(ctrl, {
	    state: state,
	    listWrapper: listWrapper,
	    getResult: getResult,
	    onSearch: onSearch,
	    onSubmit: onSubmit,
	    onSearchClear: onSearchClear,
	    onMatchSelect: onMatchSelect,
	    /* lifecycle hooks */
	    $onInit: $onInit,
	    $postLink: $postLink,
	    $onChanges: $onChanges
	  });
	}

/***/ })
/******/ ])
});
;
//# sourceMappingURL=ui-bb-autocomplete-search-ng.js.map