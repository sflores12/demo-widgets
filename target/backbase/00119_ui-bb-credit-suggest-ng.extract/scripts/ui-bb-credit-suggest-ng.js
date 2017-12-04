(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("ui-bb-i18n-ng"), require("ui-bb-iban-ng"), require("ui-bb-avatar-ng"), require("vendor-bb-angular"), require("ui-bb-autocomplete-search-ng"), require("vendor-bb-uib-debounce"), require("vendor-bb-uib-position"), require("vendor-bb-uib-typeahead"), require("lib-bb-iban"));
	else if(typeof define === 'function' && define.amd)
		define("ui-bb-credit-suggest-ng", ["ui-bb-i18n-ng", "ui-bb-iban-ng", "ui-bb-avatar-ng", "vendor-bb-angular", "ui-bb-autocomplete-search-ng", "vendor-bb-uib-debounce", "vendor-bb-uib-position", "vendor-bb-uib-typeahead", "lib-bb-iban"], factory);
	else if(typeof exports === 'object')
		exports["ui-bb-credit-suggest-ng"] = factory(require("ui-bb-i18n-ng"), require("ui-bb-iban-ng"), require("ui-bb-avatar-ng"), require("vendor-bb-angular"), require("ui-bb-autocomplete-search-ng"), require("vendor-bb-uib-debounce"), require("vendor-bb-uib-position"), require("vendor-bb-uib-typeahead"), require("lib-bb-iban"));
	else
		root["ui-bb-credit-suggest-ng"] = factory(root["ui-bb-i18n-ng"], root["ui-bb-iban-ng"], root["ui-bb-avatar-ng"], root["vendor-bb-angular"], root["ui-bb-autocomplete-search-ng"], root["vendor-bb-uib-debounce"], root["vendor-bb-uib-position"], root["vendor-bb-uib-typeahead"], root["lib-bb-iban"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_8__, __WEBPACK_EXTERNAL_MODULE_38__, __WEBPACK_EXTERNAL_MODULE_57__, __WEBPACK_EXTERNAL_MODULE_88__, __WEBPACK_EXTERNAL_MODULE_99__, __WEBPACK_EXTERNAL_MODULE_100__, __WEBPACK_EXTERNAL_MODULE_101__, __WEBPACK_EXTERNAL_MODULE_102__, __WEBPACK_EXTERNAL_MODULE_106__) {
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

	module.exports = __webpack_require__(98);

/***/ }),

/***/ 8:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_8__;

/***/ }),

/***/ 38:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_38__;

/***/ }),

/***/ 57:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_57__;

/***/ }),

/***/ 88:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_88__;

/***/ }),

/***/ 98:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _vendorBbAngular = __webpack_require__(88);
	
	var _vendorBbAngular2 = _interopRequireDefault(_vendorBbAngular);
	
	var _uiBbIbanNg = __webpack_require__(38);
	
	var _uiBbIbanNg2 = _interopRequireDefault(_uiBbIbanNg);
	
	var _uiBbAutocompleteSearchNg = __webpack_require__(99);
	
	var _uiBbAutocompleteSearchNg2 = _interopRequireDefault(_uiBbAutocompleteSearchNg);
	
	var _vendorBbUibDebounce = __webpack_require__(100);
	
	var _vendorBbUibDebounce2 = _interopRequireDefault(_vendorBbUibDebounce);
	
	var _vendorBbUibPosition = __webpack_require__(101);
	
	var _vendorBbUibPosition2 = _interopRequireDefault(_vendorBbUibPosition);
	
	var _vendorBbUibTypeahead = __webpack_require__(102);
	
	var _vendorBbUibTypeahead2 = _interopRequireDefault(_vendorBbUibTypeahead);
	
	var _uiBbAvatarNg = __webpack_require__(57);
	
	var _uiBbAvatarNg2 = _interopRequireDefault(_uiBbAvatarNg);
	
	var _uiBbI18nNg = __webpack_require__(8);
	
	var _uiBbI18nNg2 = _interopRequireDefault(_uiBbI18nNg);
	
	var _component = __webpack_require__(103);
	
	var _component2 = _interopRequireDefault(_component);
	
	var _controller = __webpack_require__(105);
	
	var _controller2 = _interopRequireDefault(_controller);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * @module ui-bb-credit-suggest-ng
	 * @description
	 * Credit suggest input UI component
	 *
	 * @example
	 * // In an extension:
	 * // file: scripts/index.js
	 * import uiBbCreditSuggestKey from 'ui-bb-credit-suggest-ng';
	 *
	 * export const dependencyKeys = [
	 *   uiBbCreditSuggestKey,
	 * ];
	 *
	 * // file: templates/template.ng.html
	 * <ui-bb-credit-suggest-ng
	 *   name="credit"
	 *   data-ng-model="$ctrl.payment.to"
	 *   data-accounts="$ctrl.accountsTo"
	 *   data-iban-validation-classes
	 *   required
	 * ></ui-bb-credit-suggest-ng>
	 */
	
	exports.default = _vendorBbAngular2.default.module('ui-bb-credit-suggest-ng', [_vendorBbUibDebounce2.default, _vendorBbUibPosition2.default, _vendorBbUibTypeahead2.default, _uiBbI18nNg2.default, _uiBbIbanNg2.default, _uiBbAutocompleteSearchNg2.default, _uiBbAvatarNg2.default]).component('uiBbCreditSuggestNg', _component2.default).controller('uiBBCreditSuggestNgController', ['$element', '$attrs', '$filter', '$templateCache', '$timeout', _controller2.default]).name;

/***/ }),

/***/ 99:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_99__;

/***/ }),

/***/ 100:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_100__;

/***/ }),

/***/ 101:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_101__;

/***/ }),

/***/ 102:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_102__;

/***/ }),

/***/ 103:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _constants = __webpack_require__(104);
	
	var _constants2 = _interopRequireDefault(_constants);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * @name uiBBCreditSuggest
	 * @type {object}
	 *
	 * @property {object[]} accounts List of accounts to filter and select with user input
	 * @property {object} messages Localized messages
	 * @property {string} custom-template-id Template ID (or URL)
	 * which will be rendered as an option in dropdown
	 * @property {boolean} allow-external Are external accounts included in list.
	 * If not, IBAN field stays disabled
	 * @property {boolean} hide-account-number
	 * Hides account number (bban) and searching by bban functionality
	 * @property {function} get-accounts
	 * External method for transform accounts array into custom structure
	 * Can be defined in extensions helpers
	 * @property {void} iban-validation-classes Append has-success and has-error classes
	 * to IBAN field on validation
	 * @property {?String} formatAmountTemplateUrl Custom template url for popup element.
	 */
	var component = {
	  bindings: {
	    accounts: '<',
	    /**
	     * @description
	     * List of messages to be shown by component
	     *
	     * @name uiBBCreditSuggest#messages
	     * @type {object} messages
	     */
	    messages: '<',
	    /**
	     * @description
	     * Template ID (or URL) which will be rendered
	     * as an option in dropdown
	     *
	     * @name uiBBCreditSuggest#customTemplateId
	     * @type {string} customTemplateId
	     */
	    customTemplateId: '@',
	    allowExternal: '<',
	    getAccounts: '&',
	    formatAmountTemplateUrl: '@?',
	    hideAccountNumber: '<?'
	  },
	  controller: 'uiBBCreditSuggestNgController',
	  template: '\n    <div class="credit-suggest has-feedback">\n      <div class="form-group">\n        <label data-i18n-key="form.label.name"></label>\n        <div class="input-group col-xs-12">\n         \n          <ui-bb-autocomplete-search-ng\n            data-ng-required="true"\n            data-label-key="name"\n            data-ng-focus="$ctrl.validateIban(\'blur\')"\n            data-ng-model="$ctrl.searchModel.name"\n            data-load-result="$ctrl.filterAccounts(options, \'name\')"\n            data-ng-model-options="{\n              getterSetter: true,\n              allowInvalid: true\n            }"\n            data-ng-focus="$ctrl.validateIban()"\n            data-on-select="$ctrl.selectedSetter($model)"\n            data-on-clear="$ctrl.clearSelected()"\n            data-search-box-config="{\n              labels: { placeholder: $ctrl.messages.filterPlaceholder }\n            }"\n            data-match-template-url="ui-bb-credit-suggest-ng/autocomplete_match_custom.html"\n            data-messages="{\n                result: $ctrl.messages.oneResultFound,\n                results: $ctrl.messages.resultsFound\n              }">\n          </ui-bb-autocomplete-search-ng>\n        </div>\n      </div>\n      <div class="form-group">\n        <label data-i18n-key="form.label.iban"></label>      \n        <ui-bb-autocomplete-search-ng\n            data-ng-required="!$ctrl.searchModel.BBAN"\n            data-label-key="IBAN"\n            data-disabled="$ctrl.searchModel.BBAN"\n            data-ng-model="$ctrl.searchModel.IBAN"\n            data-ng-blur="$ctrl.validateIban(\'blur\')"\n            data-ng-model-options="{\n              getterSetter: true,\n              allowInvalid: false\n            }"\n            data-load-result="$ctrl.filterAccounts(options, \'iban\')"\n            data-on-select="$ctrl.selectedSetter($model)"\n            data-on-clear="$ctrl.clearSelected()"\n            data-search-box-config="{\n               showIcon : false,\n               hideButton : true,\n               labels: { placeholder: $ctrl.messages.accountPlaceholder },\n             }"\n            data-match-template-url="ui-bb-credit-suggest-ng/autocomplete_match_custom.html"\n            data-messages="{\n                result: $ctrl.messages.oneResultFound,\n                results: $ctrl.messages.resultsFound\n              }">\n        </ui-bb-autocomplete-search-ng>\n      </div>\n      <div class="form-group"\n        data-ng-if="!$ctrl.hideAccountNumber">\n        <label data-i18n-key="form.label.accountnumber"></label>\n        <ui-bb-autocomplete-search-ng\n          data-ng-required="!$ctrl.searchModel.IBAN"\n          data-disabled="$ctrl.searchModel.IBAN"\n          data-label-key="BBAN"\n          data-ng-model="$ctrl.searchModel.BBAN"\n          data-ng-model-options="{\n            getterSetter: true,\n            allowInvalid: true\n          }"\n          data-load-result="$ctrl.filterAccounts(options, \'bban\')"\n          data-on-select="$ctrl.selectedSetter($model)"\n          data-on-clear="$ctrl.clearSelected()"\n          data-search-box-config="{\n               showIcon : false,\n               hideButton : true,\n               labels: { placeholder: $ctrl.messages.accountnumberPlaceholder },\n             }"\n            data-match-template-url="ui-bb-credit-suggest-ng/autocomplete_match_custom.html"\n            data-messages="{\n                result: $ctrl.messages.oneResultFound,\n                results: $ctrl.messages.resultsFound\n              }">\n        </ui-bb-autocomplete-search-ng>\n      </div>\n    </div>\n    \n    <script type="text/ng-template" id="ui-bb-credit-suggest-ng/autocomplete_match_custom.html">\n      <div class="search-result-header px-2 py-3"\n        data-ng-if="match.model.group" data-ng-bind-html="match.model.group" />\n        <a href>\n          <div class="row">\n            <div class="col-xs-8">\n              <div ng-if="match.model.accountName" data-ng-bind="match.model.accountName" />\n              <div ng-if="match.model.name && !match.model.accountName"\n                data-ng-bind-html="match.model.filteredBy == \'name\' ? \n                (match.model.name | uibTypeaheadHighlight:query) : match.model.name" />\n              <div data-ng-bind-html="match.model.filteredBy == \'iban\' \n                || match.model.filteredBy == \'bban\' ? \n                (match.model.identifier | uibTypeaheadHighlight:query) : match.model.identifier" />\n            </div>\n            <div class="col-xs-4" data-ng-if="match.model.amount" >\n              <div data-ng-include="\'' + _constants2.default + '\'" \n                data-ng-init="$option=match.model"></div>\n            </div>\n          </div>\n        </a>\n    </script>\n    \n    <script type="text/ng-template" id="' + _constants2.default + '">\n      <ui-bb-format-amount\n        class="pull-right search-result-ammount"\n        data-amount="$option.amount"\n        data-currency="$option.currency"\n        data-wrap>\n      </ui-bb-format-amount>\n    </script>\n  '
	};
	
	exports.default = component;

/***/ }),

/***/ 104:
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var FORMAT_AMOUNT_TEMPLATE_URL = 'ui-bb-credit-suggest-ng/format-amount-template.html';
	
	exports.default = FORMAT_AMOUNT_TEMPLATE_URL;

/***/ }),

/***/ 105:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	exports.default = controller;
	
	var _libBbIban = __webpack_require__(106);
	
	var _constants = __webpack_require__(104);
	
	var _constants2 = _interopRequireDefault(_constants);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	/**
	 * @name uiBbCreditSuggestController
	 * @ngkey uiBbCreditSuggestController
	 * @type {object}
	 * @description
	 * Credit suggest component controller.
	 */
	function controller($element, $attrs, $filter, $templateCache, $timeout) {
	  var i18nFilter = $filter('i18n');
	
	  var GroupName = {
	    INTERNAL: i18nFilter('ui-bb-credit-suggest-ng.group.internal'),
	    EXTERNAL: i18nFilter('ui-bb-credit-suggest-ng.group.external')
	  };
	
	  var ctrl = {};
	
	  var EMPTY_VALUE = {
	    name: '',
	    bban: '',
	    iban: '',
	    isNew: true
	  };
	
	  var ngModelCtrl = $element.controller('ngModel');
	  var ibanInput = $element.find('input').eq(1);
	
	  ibanInput[0].onblur = function () {
	    ctrl.validateIban(ctrl.searchModel.IBAN);
	    ctrl.$doCheck();
	  };
	
	  /**
	   * @description
	   * Called after this controller's element and its children have been linked
	   * Initialize necessary functionality
	   *
	   * @name uiBbCreditSuggestController#$postLink
	   * @type {function} $postLink
	   */
	  var $postLink = function $postLink() {
	    if (ctrl.formatAmountTemplateUrl) {
	      var formatAmountTemplate = $templateCache.get(ctrl.formatAmountTemplateUrl);
	      $templateCache.put(_constants2.default, formatAmountTemplate);
	    }
	
	    // Restore previous selection (if any)
	    $timeout(function () {
	      if (ctrl.selected) {
	        ctrl.selectedSetter(ctrl.selected);
	      }
	    });
	  };
	
	  var isMyAccount = function isMyAccount(identifier) {
	    return ctrl.accounts && !!ctrl.accounts.find(function (acc) {
	      return !acc.external && acc.identifier === identifier;
	    });
	  };
	
	  /**
	  * @description
	  * Checks if iban should be validated, and if so, sets the result on model.
	  *
	  * @name uiBbCreditSuggestController#validateIban
	  * @inner
	  * @param {string} iban to be validated
	  * @type {function} validateIban
	  */
	  var validateIban = function validateIban(iban) {
	    var isIbanFocused = $element[0].querySelector('input:focus') === ibanInput[0];
	
	    var isValid = !iban || isIbanFocused || isMyAccount(iban) || (0, _libBbIban.isValidIBAN)(iban);
	
	    ngModelCtrl.$setValidity('iban', isValid);
	    return isValid;
	  };
	
	  var filterByAccountOrContactName = function filterByAccountOrContactName(list, search) {
	    return list.filter(function (item) {
	      return item.name && item.name.toLowerCase().indexOf(search) !== -1 || item.contactPerson && item.contactPerson.toLowerCase().indexOf(search) !== -1;
	    });
	  };
	
	  var filterByIban = function filterByIban(list, search) {
	    return list.filter(function (item) {
	      return item.IBAN && item.IBAN.toLowerCase().replace(' ', '').indexOf(search.replace(' ', '')) !== -1;
	    });
	  };
	
	  var filterByBban = function filterByBban(list, search) {
	    return list.filter(function (item) {
	      return !item.IBAN && item.BBAN && item.BBAN.toLowerCase().replace(' ', '').indexOf(search.replace(' ', '')) !== -1;
	    });
	  };
	
	  /**
	   * @description
	   * Adds a group property to a list of accounts for the first occurence of a contactPerson.
	   * Internal accounts will be in one seperate group.
	   *
	   * So: (cp = contactPerson, all with external prop):
	   *  [{cp: 'Joost', id:'1', external: true},
	   *  {cp: 'Karel', id:'2', external: true},
	   *  {cp: 'SomeInternal', id:'3'},
	   *  {cp: 'Joost', id:'4', external: true}]
	   *
	   * Will be:
	   *  [{cp: 'SomeInternal', id:'3', group: [GroupName.INTERNAL]},
	   *  {cp: 'Joost', id:'1', group: 'Joost'},
	   *  {cp: 'Joost', id:'4'},
	   *  {cp: 'Karel', id:'2', group: Karel}]
	   *
	   * @name uiBbCreditSuggestController#addGroupHeaders
	   * @inner
	   * @param {array} normalisedAccounts
	   * @type {function} addGroupHeaders
	   */
	  var addGroupHeaders = function addGroupHeaders(normalisedAccounts) {
	    var internalGroup = normalisedAccounts.filter(function (account) {
	      return !account.external;
	    });
	
	    if (internalGroup.length > 0) {
	      // eslint-disable-next-line no-param-reassign
	      internalGroup.forEach(function (i) {
	        return delete i.group;
	      });
	      Object.assign(internalGroup[0], { group: GroupName.INTERNAL });
	    }
	
	    var externalGroup = normalisedAccounts.filter(function (account) {
	      return account.external;
	    });
	    // sort on contactPerson then within that on name. Two statements for readability
	    externalGroup.sort(function (a, b) {
	      return a.contactPerson < b.contactPerson ? -1 : 1;
	    });
	    externalGroup.sort(function (a, b) {
	      if (a.contactPerson === b.contactPerson) {
	        if (a.name < b.name) return -1;
	        return 1;
	      }
	      return 0;
	    });
	
	    var previousContactName = void 0;
	    var _iteratorNormalCompletion = true;
	    var _didIteratorError = false;
	    var _iteratorError = undefined;
	
	    try {
	      for (var _iterator = externalGroup[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	        var externalAccount = _step.value;
	
	        if (externalAccount.contactPerson !== previousContactName) {
	          externalAccount.group = externalAccount.contactPerson;
	        }
	        previousContactName = externalAccount.contactPerson;
	      }
	    } catch (err) {
	      _didIteratorError = true;
	      _iteratorError = err;
	    } finally {
	      try {
	        if (!_iteratorNormalCompletion && _iterator.return) {
	          _iterator.return();
	        }
	      } finally {
	        if (_didIteratorError) {
	          throw _iteratorError;
	        }
	      }
	    }
	
	    return [].concat(_toConsumableArray(internalGroup), _toConsumableArray(externalGroup));
	  };
	
	  /**
	   * @description
	   * Filters accounts by name
	   * Called by the uiBBAutocomplete load-result - uses as a data composer for accounts
	   *
	   * @name uiBbCreditSuggestController#filterAccounts
	   * @type {function}
	   * @param {object} options as provided by uiBBAutocomplete, we only use searchQuery prop
	   * @param {string} filterBy specifies which field triggers filtering (name, iban or bban).
	   */
	  var filterAccounts = function filterAccounts(options, filterBy) {
	    if (options && options.searchQuery) {
	      var normalisedAccounts = ctrl.getAccounts({ accounts: ctrl.accounts }) || ctrl.accounts;
	      var normalizedSearch = options.searchQuery.toLowerCase();
	
	      var filteredAccounts = void 0;
	      if (filterBy === 'iban') {
	        filteredAccounts = filterByIban(normalisedAccounts, normalizedSearch);
	      } else if (filterBy === 'bban') {
	        filteredAccounts = filterByBban(normalisedAccounts, normalizedSearch);
	      } else {
	        filteredAccounts = filterByAccountOrContactName(normalisedAccounts, normalizedSearch);
	      }
	
	      filteredAccounts.forEach(function (item) {
	        return Object.assign(item, { filteredBy: filterBy });
	      });
	      return Promise.resolve({
	        totalItems: filteredAccounts.length,
	        data: addGroupHeaders(filteredAccounts)
	      });
	      // eslint-disable-next-line no-else-return
	    } else {
	      var _normalisedAccounts = ctrl.getAccounts({ accounts: ctrl.accounts }) || ctrl.accounts;
	      return Promise.resolve({
	        totalItems: _normalisedAccounts.length,
	        data: addGroupHeaders(_normalisedAccounts)
	      });
	    }
	  };
	
	  /**
	  * @description
	  * Clears the selected beneficiary account
	  *
	  * @name uiBbCreditSuggestController#$clearSelected
	  * @inner
	  * @type {function} clearSelected
	  */
	  var clearSelected = function clearSelected() {
	    ctrl.selected = Object.assign({}, EMPTY_VALUE);
	    ctrl.searchModel = {};
	  };
	
	  /**
	   * @description
	   * Default angular function running on digest cycle
	   * Applies selected credit to model.
	   *
	   * @name uiBbCreditSuggestController#$doCheck
	   * @type {function} $doCheck
	   */
	  var $doCheck = function $doCheck() {
	    var selected = ctrl.selected;
	
	    if (!selected) {
	      ngModelCtrl.$setPristine();
	      clearSelected();
	    } else if (validateIban(ctrl.searchModel.IBAN)) {
	      selected.IBAN = selected.identifier;
	      selected.identifier = ctrl.searchModel.IBAN || ctrl.searchModel.BBAN || selected.identifier;
	      ctrl.selected.name = ctrl.searchModel.name || selected.name;
	    }
	
	    ngModelCtrl.$setViewValue(selected);
	  };
	
	  /**
	   * @description
	   * Sets the beneficiary account
	   *
	   * @name uiBbCreditSuggestController#$selectedSetter
	   * @type {function} selectedSetter
	   */
	  var selectedSetter = function selectedSetter(newValue) {
	    if (newValue || (typeof newValue === 'undefined' ? 'undefined' : _typeof(newValue)) === 'object') {
	      ctrl.selected = Object.assign({}, newValue);
	
	      if (newValue.IBAN || ctrl.hideAccountNumber) {
	        ctrl.searchModel.IBAN = newValue.IBAN;
	        ctrl.searchModel.BBAN = '';
	      } else {
	        ctrl.searchModel.BBAN = newValue.BBAN;
	        ctrl.searchModel.IBAN = '';
	      }
	      ctrl.searchModel.name = newValue.name;
	    }
	
	    return ctrl.selected;
	  };
	
	  ngModelCtrl.$formatters.push(function (credit) {
	    ctrl.selected = credit;
	  });
	
	  Object.assign(ctrl, {
	    // models
	    /**
	     * @name uiBbCreditSuggestController#selected
	     * @type {AccountView} selected
	     */
	    selected: undefined,
	    searchModel: {},
	    selectedSetter: selectedSetter,
	
	    // methods
	    $postLink: $postLink,
	    $doCheck: $doCheck,
	    filterAccounts: filterAccounts,
	    validateIban: validateIban,
	    clearSelected: clearSelected,
	
	    // flags
	    filterInFocus: false,
	    ibanInFocus: false,
	    markIbanStatus: false
	  });
	
	  return ctrl;
	}

/***/ }),

/***/ 106:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_106__;

/***/ })

/******/ })
});
;
//# sourceMappingURL=ui-bb-credit-suggest-ng.js.map