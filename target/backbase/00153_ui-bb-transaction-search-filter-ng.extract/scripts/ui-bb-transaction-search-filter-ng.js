(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vendor-bb-angular"), require("ui-bb-calendar-popup-ng"), require("ui-bb-track-form-changes-ng"), require("ui-bb-search-box-ng"));
	else if(typeof define === 'function' && define.amd)
		define("ui-bb-transaction-search-filter-ng", ["vendor-bb-angular", "ui-bb-calendar-popup-ng", "ui-bb-track-form-changes-ng", "ui-bb-search-box-ng"], factory);
	else if(typeof exports === 'object')
		exports["ui-bb-transaction-search-filter-ng"] = factory(require("vendor-bb-angular"), require("ui-bb-calendar-popup-ng"), require("ui-bb-track-form-changes-ng"), require("ui-bb-search-box-ng"));
	else
		root["ui-bb-transaction-search-filter-ng"] = factory(root["vendor-bb-angular"], root["ui-bb-calendar-popup-ng"], root["ui-bb-track-form-changes-ng"], root["ui-bb-search-box-ng"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_66__, __WEBPACK_EXTERNAL_MODULE_67__, __WEBPACK_EXTERNAL_MODULE_68__) {
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

	module.exports = __webpack_require__(65);

/***/ }),

/***/ 2:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ }),

/***/ 65:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _vendorBbAngular = __webpack_require__(2);
	
	var _vendorBbAngular2 = _interopRequireDefault(_vendorBbAngular);
	
	var _uiBbCalendarPopupNg = __webpack_require__(66);
	
	var _uiBbCalendarPopupNg2 = _interopRequireDefault(_uiBbCalendarPopupNg);
	
	var _uiBbTrackFormChangesNg = __webpack_require__(67);
	
	var _uiBbTrackFormChangesNg2 = _interopRequireDefault(_uiBbTrackFormChangesNg);
	
	var _uiBbSearchBoxNg = __webpack_require__(68);
	
	var _uiBbSearchBoxNg2 = _interopRequireDefault(_uiBbSearchBoxNg);
	
	var _component = __webpack_require__(69);
	
	var _component2 = _interopRequireDefault(_component);
	
	var _controller = __webpack_require__(70);
	
	var _controller2 = _interopRequireDefault(_controller);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * @name default
	 * @type {string}
	 * @description The angular module name
	 */
	
	/**
	 * @module ui-bb-transaction-search-filter-ng
	 * @description
	 * UI transaction-search filter component
	 *
	 * @example
	 * // In an extension:
	 * // file: scripts/index.js
	 * import uiBbTransactionSearchFilterKey from 'ui-bb-transaction-search-filter-ng';
	 *
	 * export const dependencyKeys = [
	 *   uiBbTransactionSearchFilterKey,
	 * ];
	 *
	 * // file: templates/template.ng.html
	 * <ui-bb-transaction-search-filter-ng
	 * on-filter="$ctrl.filter()"
	 * button-labels="{
	 *  main: 'Filter',
	 *  apply: 'Apply',
	 *  cancel: 'Cancel',
	 * }"
	 * field-labels="{
	 *  transaction: 'Transaction',
	 *  credit: 'Credit',
	 *  debit: 'Debit',
	 *  dateRange: 'Date range',
	 *  amountRange: 'Amount range',
	 *  amountFrom: 'Amount from',
	 *  amountTo: 'Amount to',
	 * }"
	 * on-clear-filter="$ctrl.clearFilter">
	 * </ui-bb-transaction-search-filter-ng>
	 */
	
	exports.default = _vendorBbAngular2.default.module('ui-bb-transaction-search-filter-ng', [_uiBbCalendarPopupNg2.default, _uiBbTrackFormChangesNg2.default, _uiBbSearchBoxNg2.default]).component('uiBbTransactionSearchFilter', _component2.default).controller('uiBbTransactionSearchFilterController', ['$scope', _controller2.default]).name;

/***/ }),

/***/ 66:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_66__;

/***/ }),

/***/ 67:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_67__;

/***/ }),

/***/ 68:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_68__;

/***/ }),

/***/ 69:
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var uiBbTransactionSearchFilterComponent = {
	  controller: 'uiBbTransactionSearchFilterController',
	  bindings: {
	    onFilter: '&',
	    buttonLabels: '<',
	    fieldLabels: '<',
	    onClearFilter: '=',
	    currencies: '<'
	  },
	  template: '\n    <div class="panel panel-flat">\n      <div class="panel-heading">\n        <div class="input-group">\n          <ui-bb-search-box-ng\n            class="pull-left"\n            data-config="{\n              hideButton: false,\n              showIcon: false,\n              labels: {\n                title: $ctrl.fieldLabels.search,\n                placeholder: $ctrl.fieldLabels.search,\n                clear: $ctrl.fieldLabels.clearSearch,\n                submit: $ctrl.fieldLabels.submitSearch,\n              }\n            }"\n            data-ng-model="$ctrl.filterParams.query"\n            data-on-submit="$ctrl.onApplyFilter(searchFilterForm)"\n            data-on-clear="$ctrl.onApplyFilter(searchFilterForm)">\n          </ui-bb-search-box-ng>\n          <button\n            type="button"\n            data-ng-class="{ \'active\' : $ctrl.state.isFilterOpen }"\n            class="btn btn-default btn-filter pull-left"\n            data-role="filter"\n            data-ng-click="$ctrl.toggleFilter()"\n            title="{{ $ctrl.buttonLabels.main}}">\n            <i class="fa fa-filter" aria-hidden="true"></i>\n            {{ $ctrl.buttonLabels.main }}\n          </button>\n        </div>\n      </div>\n      \n      <form data-role="search"\n        name="searchFilterForm"\n        data-ng-submit="$ctrl.onApplyFilter(searchFilterForm)"\n        data-ui-bb-track-changes="$ctrl.filterParams">\n        \n        <div data-ng-show="$ctrl.state.isFilterOpen">\n          <div class="panel-body panel-body-dark">\n            <div class="row">\n              <div class="col-md-6">\n                <div class="form-group">\n                  <label data-role="credit-debit-indicator-label">\n                    {{ $ctrl.fieldLabels.transaction }}\n                  </label>\n                  <div>\n                    <select class="form-control"\n                      data-ng-model="$ctrl.filterParams.creditDebitIndicator.value"\n                      data-role="select-debit-credit">\n                      <option value="" disabled>{{ $ctrl.fieldLabels.select }}</option>\n                      <option data-role="credit"\n                        value="{{ $ctrl.filterParams.creditDebitIndicator.credit }}">\n                        {{ $ctrl.fieldLabels.credit }}\n                      </option>\n                      <option data-role="debit"\n                        value="{{ $ctrl.filterParams.creditDebitIndicator.debit }}">\n                        {{$ctrl.fieldLabels.debit}}\n                      </option>\n                    </select>\n                  </div>\n                </div>\n              </div>\n              <div class="col-md-6" data-ng-if="$ctrl.currencies">\n                <div class="form-group">\n                  <label data-role="currency-label">{{ $ctrl.fieldLabels.currency }}</label>\n                  <div>\n                    <select class="form-control"\n                      data-ng-model="$ctrl.filterParams.currency"\n                      data-role="select-currency">\n                      <option" value="" disabled>{{ $ctrl.fieldLabels.select }}</option>\n                      <option\n                        data-ng-repeat="currency in $ctrl.currencies"\n                        data-role="currency-{{ currency.name }}"\n                        value="{{ currency.name }}">\n                        {{ currency.name }}\n                      </option>\n                    </select>\n                  </div>\n                </div>\n              </div>\n            </div>\n            \n            <div class="row">\n              <div class="col-md-6">\n                <label data-role="amount-range-label">{{ $ctrl.fieldLabels.amountRange }}</label>\n                <div class="row">\n                  <div class="col-md-6">\n                    <div class="form-group">\n                      <input\n                        type="number"\n                        min="0"\n                        class="amount-range-start form-control"\n                        data-ng-model="$ctrl.filterParams.amountFrom"\n                        data-ng-keypress="$ctrl.validateAmountKeypress($event)"\n                        data-ng-paste="$ctrl.validateAmountPaste($event)"\n                        placeholder="{{ $ctrl.fieldLabels.amountFrom }}"\n                        title="{{ $ctrl.fieldLabels.amountFrom }}"\n                        data-role="amount-from"/>\n                      </div>\n                  </div>\n                  <div class="col-md-6">\n                    <div class="form-group">\n                      <input\n                        type="number"\n                        min="0"\n                        class="amount-range-end form-control"\n                        data-ng-model="$ctrl.filterParams.amountTo"\n                        data-ng-keypress="$ctrl.validateAmountKeypress($event)"\n                        data-ng-paste="$ctrl.validateAmountPaste($event)"\n                        placeholder="{{ $ctrl.fieldLabels.amountTo }}"\n                        title="{{ $ctrl.fieldLabels.amountTo }}"\n                        data-role="amount-to"/>\n                      </div>\n                  </div>\n                </div>\n              </div>\n              <div class="col-md-6">\n                <div class="form-group">\n                  <label data-role="date-range-label">{{ $ctrl.fieldLabels.dateRange }}</label>\n                  <ui-bb-calendar-popup\n                    class="date-range-start"\n                    data-config="$ctrl.calendarPopupConfig"\n                    data-date-range="$ctrl.filterParams.dateRange"\n                    disabled="false"\n                    data-role="from-date">\n                  </ui-bb-calendar-popup>\n                </div>\n              </div>\n            </div>\n          </div>\n          \n          <div class="panel-footer panel-footer-darker">\n            <div class="row">\n              <div class="col-xs-12">\n                <div class="hidden-xs text-right">\n                  <button \n                    type="button"\n                    class="btn btn-link"\n                    data-ng-show="searchFilterForm.$dirty"\n                    data-ng-click="$ctrl.onClearFilter(searchFilterForm)"\n                    title="{{ $ctrl.buttonLabels.clearAll }}"\n                    data-role="clear-all">\n                    {{ $ctrl.buttonLabels.clearAll }}\n                  </button>\n                  <button\n                    type="button" \n                    class="btn btn-default"\n                    data-ng-click="$ctrl.toggleFilter()"\n                    title="{{ $ctrl.buttonLabels.closePanel }}"\n                    data-role="cancel">\n                    {{ $ctrl.buttonLabels.closePanel }}\n                  </button>\n                  <button\n                    data-ng-disabled="$ctrl.isFormValid(searchFilterForm)"\n                    class="btn btn-primary"\n                    title="{{ $ctrl.buttonLabels.apply }}"\n                    data-ng-click="$ctrl.toggleFilter()"\n                    data-role="apply">\n                    {{ $ctrl.buttonLabels.apply }}\n                  </button>\n                </div>\n                <div class="visible-xs">\n                  <button\n                    data-ng-disabled="$ctrl.isFormValid(searchFilterForm)"\n                    class="btn btn-primary btn-block"\n                    title="{{ $ctrl.buttonLabels.apply }}"\n                    data-ng-click="$ctrl.toggleFilter()"\n                    data-role="apply">\n                    {{ $ctrl.buttonLabels.apply }}\n                  </button>\n                  <button\n                    type="button" \n                    class="btn btn-default btn-block"\n                    data-ng-click="$ctrl.toggleFilter()"\n                    title="{{ $ctrl.buttonLabels.closePanel }}"\n                    data-role="cancel">\n                    {{ $ctrl.buttonLabels.closePanel }}\n                  </button>\n                  <button \n                    type="button"\n                    class="btn btn-link btn-block"\n                    data-ng-show="searchFilterForm.$dirty"\n                    data-ng-click="$ctrl.onClearFilter(searchFilterForm)"\n                    title="{{ $ctrl.buttonLabels.clearAll }}"\n                    data-role="clear-all">\n                    {{ $ctrl.buttonLabels.clearAll }}\n                  </button>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </form>\n    </div>\n  '
	};
	
	exports.default = uiBbTransactionSearchFilterComponent;

/***/ }),

/***/ 70:
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = uiBbTransactionSearchFilterController;
	function uiBbTransactionSearchFilterController() {
	  /**
	   * @name uiBbTransactionSearchFilterController
	   * @ngkey uiBbTransactionSearchFilterController
	   * @type {object}
	   * @description TransactionSearch filter controller
	   */
	  var $ctrl = this;
	
	  /**
	  * @description
	  * state object.
	  *
	  * @name uiBbTransactionSearchFilterController#state
	  * @type {object}
	  */
	  var state = {
	    isFilterOpen: false
	  };
	
	  /**
	   * @description
	   * `filterParams` parameters object.
	   *
	   * @name uiBbTransactionSearchFilterController#filterParams
	   * @type {object}
	   */
	  var filterParams = {
	    query: '',
	    amountFrom: null,
	    amountTo: null,
	    currency: null,
	    dateRange: {
	      startDate: null,
	      endDate: null
	    },
	    creditDebitIndicator: {
	      value: null,
	      credit: 'CRDT',
	      debit: 'DBIT'
	    }
	  };
	
	  var calendarPopupConfig = { minDate: null, maxDate: new Date(), maxMode: 'year' };
	
	  /**
	   * @description
	   * Toggle filter component.
	   *
	   * @public
	   * @name uiBbTransactionSearchFilterController#toggleFilter
	   * @type {function}
	   * @returns {boolean} A status of filter component
	   */
	  var toggleFilter = function toggleFilter() {
	    return state.isFilterOpen = !state.isFilterOpen;
	  };
	
	  /**
	   * @description
	   * Normalize date to required format.
	   *
	   * @inner
	   * @name uiBbTransactionSearchFilterController#getNormalizedDate
	   * @type {function}
	   * @returns {Date|null} Date object or null
	   */
	  var getNormalizedDate = function getNormalizedDate(date) {
	    if (date === null || date === undefined) {
	      return null;
	    }
	    var userOffset = date.getTimezoneOffset() * 60000;
	    return '' + new Date(date - userOffset).toISOString().slice(0, 10);
	  };
	
	  /**
	   * @description
	   * Normalize search query param.
	   *
	   * @inner
	   * @name uiBbTransactionSearchFilterController#normalizeQueryParam
	   * @type {function}
	   * @returns {Object|null} Object or null
	   */
	  var normalizeQueryParam = function normalizeQueryParam(param) {
	    return param === '' ? null : param;
	  };
	
	  /**
	   * @description
	   * Get all filter params.
	   *
	   * @inner
	   * @name uiBbTransactionSearchFilterController#getParams
	   * @type {function}
	   * @returns {Promise} A Promise that adds values to a given argument
	   */
	  var getParams = function getParams() {
	    return Object.assign({}, {
	      query: normalizeQueryParam(filterParams.query),
	      fromDate: getNormalizedDate(filterParams.dateRange.startDate),
	      toDate: getNormalizedDate(filterParams.dateRange.endDate),
	      amountFrom: filterParams.amountFrom,
	      amountTo: filterParams.amountTo,
	      currency: filterParams.currency,
	      creditDebitIndicator: filterParams.creditDebitIndicator.value
	    });
	  };
	
	  /**
	   * @description
	   * Reset form state method.
	   *
	   * @inner
	   * @name uiBbTransactionSearchFilterController#resetFormState
	   * @type {function}
	   */
	  var resetFormState = function resetFormState(form) {
	    if (form) {
	      form.$setUntouched();
	      form.$setPristine();
	    }
	  };
	
	  /**
	   * @description
	   * Call filter method.
	   *
	   * @name uiBbTransactionSearchFilterController#onApplyFilter
	   * @type {function}
	   */
	  var onApplyFilter = function onApplyFilter() {
	    $ctrl.onFilter({ params: getParams() });
	  };
	
	  /**
	   * @description
	   * Reset filter parameters.
	   *
	   * @name uiBbTransactionSearchFilterController#onClearFilter
	   * @type {function}
	   */
	  var onClearFilter = function onClearFilter(form) {
	    Object.assign(filterParams, {
	      amountFrom: null,
	      amountTo: null,
	      currency: null,
	      creditDebitIndicator: {
	        value: null,
	        credit: 'CRDT',
	        debit: 'DBIT'
	      },
	      dateRange: {
	        startDate: null,
	        endDate: null
	      }
	    });
	
	    onApplyFilter(form);
	    resetFormState(form);
	  };
	
	  /**
	   * @description
	   * Validates the key pressed in the number input field.
	   * Prevents the event if the key is an invalid one (not a number)
	   * Allows arrow keys
	   *
	   * @public
	   * @name uiBbTransactionSearchFilterController#validateAmountKeypress
	   * @type {function}
	   * @param {KeyboardEvent} event - the browser event
	   */
	  var validateAmountKeypress = function validateAmountKeypress(event) {
	    var validKey = event.metaKey // ctrl/alt/cmd
	    || event.which <= 0 // arrow keys
	    || event.which === 8 // delete key
	    || /[0-9]/.test(String.fromCharCode(event.which)); // numbers
	
	    if (!validKey) {
	      event.preventDefault();
	    }
	  };
	
	  /**
	   * @description
	   * Validates the pasted value in the input field.
	   * Prevents the event if the value is an invalid one (not a number)
	   *
	   * @public
	   * @name uiBbTransactionSearchFilterController#validateAmountPaste
	   * @type {function}
	   * @param {KeyboardEvent} event - the browser event
	   */
	  var validateAmountPaste = function validateAmountPaste(event) {
	    var pasteData = event.clipboardData.getData('text/plain');
	    if (pasteData.match(/[^0-9]/)) {
	      event.preventDefault();
	    }
	  };
	
	  /**
	   * @description
	   * Check if form state is pristine or invalid.
	   *
	   * @public
	   * @name uiBbTransactionSearchFilterController#isFormValid
	   * @type {function}
	   */
	  var isFormValid = function isFormValid(form) {
	    return !form || form.$pristine || form.$invalid;
	  };
	
	  Object.assign($ctrl, {
	    state: state,
	    calendarPopupConfig: calendarPopupConfig,
	    filterParams: filterParams,
	    onApplyFilter: onApplyFilter,
	    onClearFilter: onClearFilter,
	    toggleFilter: toggleFilter,
	    isFormValid: isFormValid,
	    validateAmountKeypress: validateAmountKeypress,
	    validateAmountPaste: validateAmountPaste
	  });
	}

/***/ })

/******/ })
});
;
//# sourceMappingURL=ui-bb-transaction-search-filter-ng.js.map