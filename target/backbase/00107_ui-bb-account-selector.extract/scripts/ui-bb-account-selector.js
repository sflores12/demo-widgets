(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vendor-bb-angular"), require("ui-bb-format-amount"), require("ui-bb-dropdown-select"), require("ui-bb-search-box-ng"), require("ui-bb-list-ng"));
	else if(typeof define === 'function' && define.amd)
		define("ui-bb-account-selector", ["vendor-bb-angular", "ui-bb-format-amount", "ui-bb-dropdown-select", "ui-bb-search-box-ng", "ui-bb-list-ng"], factory);
	else if(typeof exports === 'object')
		exports["ui-bb-account-selector"] = factory(require("vendor-bb-angular"), require("ui-bb-format-amount"), require("ui-bb-dropdown-select"), require("ui-bb-search-box-ng"), require("ui-bb-list-ng"));
	else
		root["ui-bb-account-selector"] = factory(root["vendor-bb-angular"], root["ui-bb-format-amount"], root["ui-bb-dropdown-select"], root["ui-bb-search-box-ng"], root["ui-bb-list-ng"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_4__, __WEBPACK_EXTERNAL_MODULE_7__, __WEBPACK_EXTERNAL_MODULE_8__, __WEBPACK_EXTERNAL_MODULE_9__) {
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

	module.exports = __webpack_require__(6);

/***/ }),
/* 1 */,
/* 2 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ }),
/* 3 */,
/* 4 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_4__;

/***/ }),
/* 5 */,
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _vendorBbAngular = __webpack_require__(2);
	
	var _vendorBbAngular2 = _interopRequireDefault(_vendorBbAngular);
	
	var _uiBbDropdownSelect = __webpack_require__(7);
	
	var _uiBbDropdownSelect2 = _interopRequireDefault(_uiBbDropdownSelect);
	
	var _uiBbFormatAmount = __webpack_require__(4);
	
	var _uiBbFormatAmount2 = _interopRequireDefault(_uiBbFormatAmount);
	
	var _uiBbSearchBoxNg = __webpack_require__(8);
	
	var _uiBbSearchBoxNg2 = _interopRequireDefault(_uiBbSearchBoxNg);
	
	var _uiBbListNg = __webpack_require__(9);
	
	var _uiBbListNg2 = _interopRequireDefault(_uiBbListNg);
	
	var _selector = __webpack_require__(10);
	
	var _selector2 = _interopRequireDefault(_selector);
	
	__webpack_require__(13);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * @name default
	 * @type {string}
	 * @description The angular module name
	 */
	exports.default = _vendorBbAngular2.default.module('ui-bb-account-selector', [_uiBbDropdownSelect2.default, _uiBbFormatAmount2.default, _uiBbSearchBoxNg2.default, _uiBbListNg2.default]).component('uiBbAccountSelector', _selector2.default).name; /**
	                                                                                                                                                                                                                                                      * @module ui-bb-account-selector
	                                                                                                                                                                                                                                                      * @description
	                                                                                                                                                                                                                                                      * UI component for selecting user account.
	                                                                                                                                                                                                                                                      *
	                                                                                                                                                                                                                                                      * @example
	                                                                                                                                                                                                                                                      * // In an extension:
	                                                                                                                                                                                                                                                      * // file: scripts/index.js
	                                                                                                                                                                                                                                                      * import uiBbAccountSelector from 'ui-bb-account-selector';
	                                                                                                                                                                                                                                                      *
	                                                                                                                                                                                                                                                      * export const dependencyKeys = [
	                                                                                                                                                                                                                                                      *   uiBbAccountSelector,
	                                                                                                                                                                                                                                                      * ];
	                                                                                                                                                                                                                                                      *
	                                                                                                                                                                                                                                                      * // file: templates/template.ng.html
	                                                                                                                                                                                                                                                      * <ui-bb-account-selector
	                                                                                                                                                                                                                                                      *   ng-model="$ctrl.payment.from"
	                                                                                                                                                                                                                                                      *   accounts="$ctrl.accountsList"
	                                                                                                                                                                                                                                                      *   ng-change="$ctrl.onAccountChange()">
	                                                                                                                                                                                                                                                      * </ui-bb-account-selector>
	                                                                                                                                                                                                                                                      *
	                                                                                                                                                                                                                                                      * // multiple selection
	                                                                                                                                                                                                                                                      * <ui-bb-account-selector
	                                                                                                                                                                                                                                                      *   ng-model="$ctrl.accounts.selected"
	                                                                                                                                                                                                                                                      *   accounts="$ctrl.accounts.list"
	                                                                                                                                                                                                                                                      *   multiple="true"
	                                                                                                                                                                                                                                                      *   ng-change="$ctrl.onAccountChange($item)"
	                                                                                                                                                                                                                                                      *   labels="{
	                                                                                                                                                                                                                                                      *     noAccounts: ('account.select.label.no.accounts' | i18n),
	                                                                                                                                                                                                                                                      *     account: ('account.select.label.account' | i18n),
	                                                                                                                                                                                                                                                      *     accounts: ('account.select.label.accounts' | i18n),
	                                                                                                                                                                                                                                                      *     allAccounts: ('account.select.label.all.accounts' | i18n),
	                                                                                                                                                                                                                                                      *     selectedAccounts: ('account.select.label.selected.accounts' | i18n),
	                                                                                                                                                                                                                                                      *   }">
	                                                                                                                                                                                                                                                      * </ui-bb-account-selector>
	                                                                                                                                                                                                                                                      */

/***/ }),
/* 7 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_7__;

/***/ }),
/* 8 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_8__;

/***/ }),
/* 9 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_9__;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _constants = __webpack_require__(11);
	
	var _constants2 = _interopRequireDefault(_constants);
	
	var _selector = __webpack_require__(12);
	
	var _selector2 = _interopRequireDefault(_selector);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * @name uiBbAccountSelector
	 * @type {Object}
	 *
	 * @property {Object} ngModel Account selector model
	 * @property {Array} accounts List of accounts
	 * @property {Function} ngChange Callback function triggered when account is selected
	 * @property {?Boolean} selectAll True if select all option is enabled (false by default)
	 * @property {?Boolean} multiple True if multiple selection is enabled (false by default)
	 * @property {?Boolean} multicurrency True if multiple currency selection is enabled
	 * (true by default). If set to false, Select all option will be hidden if more than one
	 * currency is listed. Also, once an item is selected, all items with different currency
	 * will become disabled. This property has an effect only if multiple is set to true
	 * @property {Labels} labels Object with labels
	 * @property {?String} selectAllTemplateId Enables select all option and contains template id
	 * @property {?String} customTemplateId Id of the template that will be used for rendering
	 * instead of default ui-bb-account-selector/option-template.html template
	 * @property {?Function} onAccountsLoad Function to retrieve filtered accounts. It should
	 * update accounts assigns to `accounts` property and number of accounts in `totalItems` property
	 * @property {?Function} onClear Function to be called once the search input is cleared
	 * @property {?Number} totalItems Total items in the list. Used internally for select all item
	 * @property {?SearchBox} searchBox Object contains minLength of search
	 * string and config object of searchBox
	 * @property {?String} formatAmountTemplateUrl Custom template url for popup element.
	 */
	var uiBbAccountSelector = {
	  bindings: {
	    model: '<ngModel',
	    ngChange: '&',
	    accounts: '<',
	    selectAll: '<',
	    multiple: '<',
	    multicurrency: '<',
	    labels: '<',
	    customTemplateId: '@',
	    selectAllTemplateId: '@',
	    onAccountsLoad: '&',
	    onClear: '&',
	    totalItems: '=',
	    searchBox: '<',
	    formatAmountTemplateUrl: '@?'
	  },
	  template: ['$attrs', function (attrs) {
	    return '\n    <div class="bb-account-selector">\n      <ui-bb-dropdown-select class="bb-account-selector-toggle drop-shadow"\n        data-ng-model="$ctrl.state.accounts.selected"\n        data-ng-change="$ctrl.onChange({ $item: $item.isSelectAll ? null : $item })"\n        data-template-url="ui-bb-account-selector/selected-template.html"\n        data-is-open="$ctrl.state.isOpen"\n        data-multiple="$ctrl.multiple"\n        data-labels="$ctrl.labels"\n        data-placeholder="' + attrs.placeholder + '">\n        <li class="dropdown-option p-3"\n          data-ng-if="::$ctrl.searchBox">\n          <ui-bb-search-box-ng class="d-block"\n            data-ng-model="$ctrl.state.search.value"\n            data-config="$ctrl.state.search.config"\n            data-ng-click="$ctrl.onSearchBoxClick($event)"\n            data-on-change="$ctrl.onSearch(search)"\n            data-on-submit="$ctrl.onSearch(search)"\n            data-is-loading="$ctrl.state.accounts.isSearching">\n          </ui-bb-search-box-ng>\n        </li>\n        <li class="dropdown-option p-3"\n          data-ng-show="!$ctrl.state.accounts.data.length"\n          data-ng-bind="$ctrl.labels.noAccounts">\n        </li>\n        <ui-bb-list data-on-scroll-to-end="$ctrl.onLoadMore()"\n          class="d-block bb-account-selector-scrollable-area">\n          <ui-bb-dropdown-option data-ng-if="$ctrl.selectAll"\n            data-option="$ctrl.state.allAccountsOption"\n            data-selected="$ctrl.totalItems === ($ctrl.state.accounts.selected || {}).length"\n            data-template-url="ui-bb-account-selector/option-template.html">\n          </ui-bb-dropdown-option>\n          <ui-bb-dropdown-option data-ng-repeat="account in $ctrl.state.accounts.data"\n            data-option="account"\n            data-ng-disabled="account.disabled"\n            data-template-url="ui-bb-account-selector/option-template.html">\n          </ui-bb-dropdown-option>\n          <li class="dropdown-option p-3"\n            data-ng-show="$ctrl.state.accounts.isLoadingMore">\n            <span class="bb-account-selector-spinner center-block"></span>\n          </li>\n        </ui-bb-list>\n      </ui-bb-dropdown-select>\n    </div>\n    <script type="text/ng-template" id="ui-bb-account-selector/selected-template.html">\n      <a href\n        tabindex="0"\n        class="d-block pl-3 py-4 pr-10 bb-account-selector-option"\n        data-ng-include="$ctrl.multiple\n          ? \'ui-bb-account-selector/option-multiple-selected-template.html\'\n          : \'ui-bb-account-selector/option-content-template.html\'"\n      >\n      </a>\n    </script>\n    <script type="text/ng-template" id="ui-bb-account-selector/option-template.html">\n      <a href\n        tabindex="{{ $option.disabled ? -1 : 0 }}"\n        class="d-block pl-3 py-3 pr-7 bb-account-selector-option"\n        data-ng-disabled="$option.disabled"\n        data-ng-class="{active: $ctrl.isSelected()}"\n        data-ng-include="\'ui-bb-account-selector/option-content-template.html\'">\n      </a>\n    </script>\n    <script type="text/ng-template" id="ui-bb-account-selector/option-content-template.html">\n      <div class="absolute-center-y" data-ng-if="' + attrs.multiple + '">\n        <input type="checkbox"\n          value="{{ $option.id }}"\n          tabindex="-1"\n          data-ng-click="$ctrl.select();$event.stopPropagation()"\n          data-ng-checked="$ctrl.isSelected()"\n          data-ng-disabled="$option.disabled"\n        />\n      </div>\n      <div data-ng-if="$option.isSelectAll"\n        data-ng-class="{ \'ml-6\': ' + attrs.multiple + ' }"\n        class="d-flex flex-column flex-sm-row align-items-sm-center justify-content-sm-between\n          bb-account-selector-option-content">\n        <div class="d-inline-block" data-ng-bind="$option.label"></div>\n        <div class="d-inline-block" data-ng-bind="$option.quantity"></div>\n      </div>\n      <div data-ng-hide="$option.isSelectAll"\n        data-ng-class="{ \'ml-6\': ' + attrs.multiple + ' }"\n        class="d-flex flex-column flex-sm-row align-items-sm-center justify-content-sm-between\n          bb-account-selector-option-content">\n        <div class="d-inline-block">\n          <div><strong data-ng-bind="$option.name"></strong></div>\n          <div data-ng-bind="$option.identifier"></div>\n        </div>\n        <div class="d-inline-block" data-ng-hide="$option.hideAmounts">\n          <div data-ng-include="\'' + _constants2.default + '\'"></div>\n        </div>\n      </div>\n    </script>\n\n    <script type="text/ng-template"\n      id="ui-bb-account-selector/option-multiple-selected-template.html"\n    >\n      <div class="d-flex flex-column flex-sm-row align-items-sm-center justify-content-sm-between\n          bb-account-selector-option-content row-fluid">\n        <div class="d-inline-block col-xs-12 pl-0">\n          <div class="col-xs-12 p-0">\n            <strong data-ng-if="$option.length === 1" data-ng-bind="$option[0].name"></strong>\n            <strong data-ng-if="$option.length > 1">\n              {{ $option.length }} {{ $ctrl.labels.selectedAccounts }}\n            </strong>\n          </div>\n          <div class="col-xs-12 col-sm-6 bb-ellipsis p-0">\n            <span data-ng-if="$option.length === 1" data-ng-bind="$option[0].identifier"></span>\n            <span data-ng-if="$option.length > 1" data-ng-repeat="account in $option">\n              {{ account.name }}{{$last ? \'\' : \', \'}}\n            </span>\n          </div>\n        </div>\n        <div class="d-inline-block" data-ng-hide="$option.length > 1 || $option[0].hideAmounts">\n          <div data-ng-include="\'' + _constants2.default + '\'"></div>\n        </div>\n      </div>\n    </script>\n    \n    <script type="text/ng-template" id="' + _constants2.default + '">\n      <ui-bb-format-amount \n        data-amount="$option.length ? $option[0].amount : $option.amount"\n        data-currency="$option.length ? $option[0].currency : $option.currency"\n        data-wrap>\n      </ui-bb-format-amount>\n    </script>\n  ';
	  }],
	  controller: ['$templateCache', '$element', '$attrs', '$scope', _selector2.default]
	};
	
	exports.default = uiBbAccountSelector;
	
	/**
	 * Labels type definition
	 * @typedef {Object} Labels
	 * @property {String} allAccounts Label for all accounts
	 * @property {String} accounts Label for plural accounts
	 * @property {String} account Label for single accounts
	 * @property {String} noAccounts Label for no accounts
	 * @property {String} selectedAccounts Label for selected accounts
	 */
	
	/**
	 * Labels type definition
	 * @typedef {Object} SearchBox
	 * @property {String}  minLength Minimum length of search string to apply search
	 * @property {Object}  config SearchBox config object
	 */

/***/ }),
/* 11 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var FORMAT_AMOUNT_TEMPLATE_URL = 'ui-bb-account-selector/format-amount-template.html';
	
	exports.default = FORMAT_AMOUNT_TEMPLATE_URL;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = controller;
	
	var _constants = __webpack_require__(11);
	
	var _constants2 = _interopRequireDefault(_constants);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * @name uiBbAccountSelector
	 * @type {function}
	 *
	 * @description
	 * Account selector controller
	 *
	 * @param {object} templateCache
	 * @param {object} element
	 * @param {object} attrs
	 * @param {object} scope
	 */
	function controller(templateCache, element, attrs, scope) {
	  var ctrl = this;
	
	  var dropdown = element.find('ui-bb-dropdown-select').children();
	
	  var optionTemplateName = 'ui-bb-account-selector/option-template.html';
	  var selectAllTemplateName = 'ui-bb-account-selector/select-all-template.html';
	
	  var state = {
	    isOpen: false,
	    accounts: {
	      data: [],
	      get totalItems() {
	        return ctrl.totalItems || state.accounts.data.length;
	      },
	      get hasMore() {
	        return state.accounts.data.length < state.accounts.totalItems;
	      },
	      hasMultipleCurrencies: false,
	      isLoading: false,
	      isLoadingMore: false,
	      selected: ctrl.multiple ? [] : null
	    },
	    search: {
	      value: '',
	      minLength: 3,
	      config: {
	        showIcon: true,
	        hideButton: true
	      }
	    },
	    allAccountsOption: false
	  };
	
	  var getQuantityMessage = function getQuantityMessage(quantity) {
	    return quantity + ' ' + ctrl.labels[quantity > 1 ? 'accounts' : 'account'];
	  };
	
	  var getAllAccountsOption = function getAllAccountsOption() {
	    return {
	      isSelectAll: true,
	      label: ctrl.labels.allAccounts,
	      get quantity() {
	        return getQuantityMessage(state.accounts.totalItems);
	      }
	    };
	  };
	
	  var normalizeSearchValue = function normalizeSearchValue(value) {
	    return value && value.trim() || '';
	  };
	
	  var updateModelValue = function updateModelValue(newValue) {
	    if (ctrl.multiple && newValue && newValue.$item && newValue.$item.some(function (item) {
	      return item.isSelectAll === true;
	    })) {
	      Object.assign(ctrl.model, {
	        $item: newValue.$item.length > state.accounts.data.length ? [] : state.accounts.data
	      });
	    } else {
	      ctrl.model = newValue;
	    }
	
	    return ctrl.model;
	  };
	
	  var updateAccounts = function updateAccounts(newValue) {
	    Object.assign(state.accounts, {
	      data: newValue,
	      hasMultipleCurrencies: newValue ? newValue.map(function (product) {
	        return product.currency;
	      }).filter(function (val, i, arr) {
	        return arr.indexOf(val) === i;
	      }).length > 1 : false,
	      isLoading: false,
	      isLoadingMore: false,
	      isSearching: false,
	      isLoaded: true
	    });
	  };
	
	  var throwModelValue = function throwModelValue(value) {
	    var selection = value;
	    if (ctrl.multiple && !Array.isArray(selection)) {
	      selection = selection ? [selection] : [];
	    }
	    state.accounts.selected = selection || (ctrl.selectAll ? state.allAccountsOption : null);
	  };
	
	  var loadAccounts = function loadAccounts() {
	    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	
	    state.accounts.isLoaded = false;
	    state.accounts.isLoading = true;
	    Object.assign(options, {
	      searchQuery: normalizeSearchValue(state.search.value)
	    });
	    ctrl.onAccountsLoad({ options: options });
	  };
	
	  var setupFocusOnSearch = function setupFocusOnSearch() {
	    scope.$watch(function () {
	      return dropdown.hasClass('open');
	    }, function (newValue) {
	      if (newValue) {
	        dropdown.find('ui-bb-search-box-ng').find('input')[0].focus();
	
	        if (!state.accounts.isLoaded) {
	          loadAccounts();
	        }
	      }
	    });
	  };
	
	  /**
	   * @name uiBbAccountSelector#onChange
	   *
	   * @description
	   * Calls when account was selected
	   *
	   * @type {Function}
	   * @param {Object} item Selected account
	   */
	  var onChange = function onChange(item) {
	    state.search.value = '';
	    state.accounts.isLoaded = false;
	    ctrl.ngChange(updateModelValue(item));
	  };
	
	  /**
	   * @name uiBbAccountSelector#onSearch
	   *
	   * @description
	   * Search callback
	   *
	   * @type {Function}
	   */
	  var onSearch = function onSearch() {
	    if (state.search.value && state.search.value.length >= state.search.minLength) {
	      state.accounts.isSearching = true;
	      loadAccounts();
	    }
	
	    // Avoid infinite spinner issue
	    if (state.search.value && state.search.value.length <= state.search.minLength) {
	      state.accounts.isSearching = false;
	    }
	
	    // Search is cleared
	    if (state.search.value === '' || state.search.value === null) {
	      ctrl.onClear();
	    }
	  };
	
	  /**
	   * @name uiBbAccountSelector#onLoadMore
	   *
	   * @description
	   * LoadMore callback
	   *
	   * @type {Function}
	   */
	  var onLoadMore = function onLoadMore() {
	    if (!state.accounts.isLoading && !state.accounts.isLoadingMore && state.accounts.hasMore) {
	      state.accounts.isLoadingMore = true;
	      loadAccounts({ isLoadMore: true });
	    }
	  };
	
	  /**
	   * @name uiBbAccountSelector#onSearchBoxClick
	   *
	   * @description
	   * Calls on search box click
	   *
	   * @type {Function}
	   * @param {Object} event fired event
	   */
	  var onSearchBoxClick = function onSearchBoxClick(event) {
	    event.stopPropagation();
	  };
	
	  /**
	   * @name uiBbAutocompleteSearchController#$onChanges
	   *
	   * @description
	   * Angular $onChanges lifecycle hook
	   *
	   * @type {Function}
	   */
	  var $onChanges = function $onChanges(_ref) {
	    var model = _ref.model,
	        accounts = _ref.accounts;
	
	    if (accounts) {
	      updateAccounts(accounts.currentValue);
	    }
	    if (model) {
	      throwModelValue(model.currentValue);
	    }
	
	    if (ctrl.multiple && (model || accounts)) {
	      Object.assign(ctrl, {
	        selectAll: ctrl.multicurrency !== false || !state.accounts.hasMultipleCurrencies
	      });
	
	      var selectedCurrency = ((state.accounts.selected || [])[0] || {}).currency;
	      state.accounts.data = (state.accounts.data || []).map(function (item) {
	        return Object.assign(item, {
	          disabled: !ctrl.selectAll && (!item.currency || selectedCurrency && item.currency !== selectedCurrency)
	        });
	      });
	    }
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
	    Object.assign(ctrl, {
	      selectAll: ctrl.selectAll || ctrl.multiple
	    });
	
	    if (ctrl.customTemplateId) {
	      var optionTemplate = templateCache.get(ctrl.customTemplateId);
	      templateCache.put(optionTemplateName, optionTemplate);
	    }
	
	    if (ctrl.formatAmountTemplateUrl) {
	      var formatAmountTemplate = templateCache.get(ctrl.formatAmountTemplateUrl);
	      templateCache.put(_constants2.default, formatAmountTemplate);
	    }
	
	    if (ctrl.selectAll) {
	      state.allAccountsOption = getAllAccountsOption();
	
	      if (ctrl.selectAllTemplateId) {
	        var selectAllTemplate = templateCache.get(ctrl.selectAllTemplateId);
	        templateCache.put(selectAllTemplateName, selectAllTemplate);
	      }
	    }
	
	    if (ctrl.searchBox) {
	      setupFocusOnSearch();
	
	      if (ctrl.searchBox.minLength) {
	        state.search.minLength = ctrl.searchBox.minLength;
	      }
	
	      if (ctrl.searchBox.config) {
	        Object.assign(state.search.config, ctrl.searchBox.config);
	      }
	    }
	
	    throwModelValue(ctrl.model);
	  };
	
	  Object.assign(ctrl, {
	    state: state,
	    onChange: onChange,
	    onSearch: onSearch,
	    onLoadMore: onLoadMore,
	    onSearchBoxClick: onSearchBoxClick,
	    /* lifecycle hooks */
	    $onChanges: $onChanges,
	    $onInit: $onInit
	  });
	}

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(14);
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
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(15)();
	// imports
	
	
	// module
	exports.push([module.id, "ui-bb-account-selector {\n\tdisplay: block;\n}\n", ""]);
	
	// exports


/***/ }),
/* 15 */
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
/* 16 */
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


/***/ })
/******/ ])
});
;
//# sourceMappingURL=ui-bb-account-selector.js.map