(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vendor-bb-angular"), require("ui-bb-calendar-popup-ng"), require("ui-bb-track-form-changes-ng"));
	else if(typeof define === 'function' && define.amd)
		define("ui-bb-notifications-filter-ng", ["vendor-bb-angular", "ui-bb-calendar-popup-ng", "ui-bb-track-form-changes-ng"], factory);
	else if(typeof exports === 'object')
		exports["ui-bb-notifications-filter-ng"] = factory(require("vendor-bb-angular"), require("ui-bb-calendar-popup-ng"), require("ui-bb-track-form-changes-ng"));
	else
		root["ui-bb-notifications-filter-ng"] = factory(root["vendor-bb-angular"], root["ui-bb-calendar-popup-ng"], root["ui-bb-track-form-changes-ng"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_36__, __WEBPACK_EXTERNAL_MODULE_47__, __WEBPACK_EXTERNAL_MODULE_48__) {
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

	module.exports = __webpack_require__(46);

/***/ }),

/***/ 36:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_36__;

/***/ }),

/***/ 46:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _vendorBbAngular = __webpack_require__(36);
	
	var _vendorBbAngular2 = _interopRequireDefault(_vendorBbAngular);
	
	var _uiBbCalendarPopupNg = __webpack_require__(47);
	
	var _uiBbCalendarPopupNg2 = _interopRequireDefault(_uiBbCalendarPopupNg);
	
	var _uiBbTrackFormChangesNg = __webpack_require__(48);
	
	var _uiBbTrackFormChangesNg2 = _interopRequireDefault(_uiBbTrackFormChangesNg);
	
	var _component = __webpack_require__(49);
	
	var _component2 = _interopRequireDefault(_component);
	
	var _controller = __webpack_require__(50);
	
	var _controller2 = _interopRequireDefault(_controller);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * @name default
	 * @type {string}
	 * @description The angular module name
	 */
	exports.default = _vendorBbAngular2.default.module('ui-bb-notifications-filter-ng', [_uiBbCalendarPopupNg2.default, _uiBbTrackFormChangesNg2.default]).component('uiBbNotificationsFilter', _component2.default).controller('uiBbNotificationsFilterController', ['$scope', _controller2.default]).name; /**
	                                                                                                                                                                                                                                                                                                          * @module ui-bb-notifications-filter-ng
	                                                                                                                                                                                                                                                                                                          * @description
	                                                                                                                                                                                                                                                                                                          * UI notifications filter component
	                                                                                                                                                                                                                                                                                                          *
	                                                                                                                                                                                                                                                                                                          * @example
	                                                                                                                                                                                                                                                                                                          * // In an extension:
	                                                                                                                                                                                                                                                                                                          * // file: scripts/index.js
	                                                                                                                                                                                                                                                                                                          * import uiBbNotificationsFilterKey from 'ui-bb-notifications-filter-ng';
	                                                                                                                                                                                                                                                                                                          *
	                                                                                                                                                                                                                                                                                                          * export const dependencyKeys = [
	                                                                                                                                                                                                                                                                                                          *   uiBbNotificationsFilterKey,
	                                                                                                                                                                                                                                                                                                          * ];
	                                                                                                                                                                                                                                                                                                          *
	                                                                                                                                                                                                                                                                                                          * // file: templates/template.ng.html
	                                                                                                                                                                                                                                                                                                          * <ui-bb-notifications-filter-ng on-filter="$ctrl.filter()"
	                                                                                                                                                                                                                                                                                                          * header-labels="{
	                                                                                                                                                                                                                                                                                                          *  date: 'Date', searchInText: 'Search', searchInType: 'Search in type', level: 'Levels'
	                                                                                                                                                                                                                                                                                                          * }"
	                                                                                                                                                                                                                                                                                                          * level-labels="{ info: 'Info', alert: 'Alert', warning: 'Warning', success: 'Success' }"
	                                                                                                                                                                                                                                                                                                          * status-labels="{ read: 'Read', unread: 'Unread', all: 'All' }"
	                                                                                                                                                                                                                                                                                                          * button-labels="{
	                                                                                                                                                                                                                                                                                                          *  main: 'Filter',
	                                                                                                                                                                                                                                                                                                          *  apply: 'Apply',
	                                                                                                                                                                                                                                                                                                          *  reset: 'Reset',
	                                                                                                                                                                                                                                                                                                          *  clearFromDate: 'Clear "from" date"',
	                                                                                                                                                                                                                                                                                                          *  clearToDate: 'Clear "to" date"',
	                                                                                                                                                                                                                                                                                                          * }"
	                                                                                                                                                                                                                                                                                                          * on-clear-filter="$ctrl.clearFilter">
	                                                                                                                                                                                                                                                                                                          * </ui-bb-notifications-filter-ng>
	                                                                                                                                                                                                                                                                                                          */

/***/ }),

/***/ 47:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_47__;

/***/ }),

/***/ 48:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_48__;

/***/ }),

/***/ 49:
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var uiBbNotificationsFilterComponent = {
	  bindings: {
	    onFilter: '&?',
	    headerLabels: '<',
	    levelLabels: '<',
	    statusLabels: '<',
	    buttonLabels: '<',
	    onClearFilter: '='
	  },
	  controller: 'uiBbNotificationsFilterController',
	  template: '\n    <form data-role="search"\n      name="filterForm"\n      data-ng-submit="$ctrl.onApplyFilter()"\n      data-ui-bb-track-changes="$ctrl.filterParams">\n      <div class="clearfix">\n        <div class="pull-right">\n          <button class="btn btn-default"\n            type="button"\n            data-ng-click="$ctrl.toggleFilter()"\n            title="{{ $ctrl.buttonLabels.main }}">\n            <i class="fa fa-sliders" aria-hidden="true"></i>\n            <span data-ng-bind="$ctrl.buttonLabels.main"></span>\n          </button>\n        </div>\n      </div>\n      <div data-ng-if="$ctrl.isOpen">\n        <div class="form-group row">\n          <div class="col-md-5">\n            <h5 data-ng-bind="$ctrl.headerLabels.date"></h5>\n            <div class="row">\n              <div class="col-sm-6">\n                <ui-bb-calendar-popup data-config="$ctrl.fromDate.config"\n                  data-date="$ctrl.filterParams.fromDate"\n                  data-disabled="false">\n                </ui-bb-calendar-popup>\n              </div>\n              <div class="col-sm-6">\n                <ui-bb-calendar-popup data-config="$ctrl.toDate.config"\n                  data-date="$ctrl.filterParams.toDate"\n                  data-disabled="!$ctrl.filterParams.fromDate">\n                </ui-bb-calendar-popup>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class="form-group">\n          <h5 data-ng-bind="$ctrl.headerLabels.level"></h5>\n          <label class="checkbox-inline"\n            data-ng-repeat="level in $ctrl.levels track by $index">\n            <input type="checkbox"\n              name="{{ $ctrl.levels.name }}"\n              data-ng-value="level.value"\n              data-ng-model="level.checked"\n              data-ng-change="$ctrl.onToggleCheckbox(level, $ctrl.levels)">\n            <span data-ng-bind="$ctrl.levelLabels[level.key]"></span>\n          </label>\n        </div>\n        <div class="form-group">\n          <h5 data-ng-bind="$ctrl.headerLabels.status"></h5>\n          <label class="radio-inline"\n            data-ng-repeat="status in $ctrl.statuses track by $index">\n            <input type="radio"\n              name="{{ $ctrl.statuses.name }}"\n              data-ng-model="$ctrl.filterParams.status"\n              data-ng-checked="status.checked"\n              data-ng-value="status.value">\n            <span data-ng-bind="$ctrl.statusLabels[status.key]"></span>\n          </label>\n        </div>\n        <div class="form-group text-right">\n          <button class="btn btn-default btn-link"\n            type="button"\n            data-ng-if="!$ctrl.isFilterPristine(filterForm)"\n            data-ng-click="$ctrl.onClearFilter(filterForm)"\n            data-ng-bind="$ctrl.buttonLabels.clear">\n          </button>\n          <button class="btn btn-default"\n            type="button"\n            data-ng-click="$ctrl.toggleFilter()"\n            data-ng-bind="$ctrl.buttonLabels.cancel">\n          </button>\n          <button class="btn btn-primary"\n            type="submit"\n            data-ng-bind="$ctrl.buttonLabels.apply">\n          </button>\n        </div>\n      </div>\n    </form>\n  '
	};
	
	/**
	 * @name uiBbNotificationsFilterComponent
	 * @type {object}
	 */
	exports.default = uiBbNotificationsFilterComponent;

/***/ }),

/***/ 50:
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = uiBbNotificationsFilterController;
	function uiBbNotificationsFilterController($scope) {
	  /**
	   * @name uiBbNotificationsFilterController
	   * @ngkey uiBbNotificationsFilterController
	   * @type {object}
	   * @description Notifications filter controller
	   */
	  var $ctrl = this;
	
	  var defaultFilterParams = {
	    levels: [],
	    status: null,
	    fromDate: null,
	    toDate: null
	  };
	
	  /**
	   * @description
	   * `filterParams` parameters object.
	   *
	   * @name uiBbNotificationsFilterController#filterParams
	   * @type {object}
	   */
	  var filterParams = Object.assign({}, defaultFilterParams);
	
	  /**
	   * @description
	   * Array of `Severity levels` parameters objects.
	   *
	   * @name uiBbNotificationsFilterController#levels
	   * @type {array}
	   */
	  var levels = [{ key: 'all', value: '', checked: false, isSelectAll: true }, { key: 'info', value: 'INFO', checked: false }, { key: 'warning', value: 'WARNING', checked: false }, { key: 'alert', value: 'ALERT', checked: false }, { key: 'success', value: 'SUCCESS', checked: false }];
	
	  /**
	   * @description
	   * Array of `Statuses` parameters objects.
	   *
	   * @name uiBbNotificationsFilterController#statuses
	   * @type {array}
	   */
	  var statuses = [{ key: 'all', value: null, checked: false }, { key: 'read', value: true, checked: false }, { key: 'unread', value: false, checked: false }];
	
	  /**
	   * @description
	   * `From date` parameters object.
	   *
	   * @name uiBbNotificationsFilterController#fromDate
	   * @type {object}
	   */
	  var fromDate = {
	    config: { minDate: null, maxDate: new Date(), maxMode: 'year' }
	  };
	
	  /**
	   * @description
	   * `To date` parameters object.
	   *
	   * @name uiBbNotificationsFilterController#toDate
	   * @type {object}
	   */
	  var toDate = {
	    config: { minDate: null, maxDate: new Date(), maxMode: 'year' }
	  };
	
	  /**
	   * @description
	   * Watcher object evaluating current toDate param config.
	   *
	   * @type {object}
	   */
	  $scope.$watch(function () {
	    return filterParams.fromDate;
	  }, function (newVal) {
	    toDate.config = Object.assign({}, toDate.config, {
	      minDate: newVal ? new Date(newVal) : null
	    });
	  });
	
	  /**
	   * @description
	   * Watcher object evaluation current fromDate param config.
	   *
	   * @type {object}
	   */
	  $scope.$watch(function () {
	    return filterParams.toDate;
	  }, function (newVal) {
	    fromDate.config = Object.assign({}, fromDate.config, {
	      maxDate: newVal ? new Date(newVal) : new Date()
	    });
	  });
	
	  /**
	   * @description
	   * Normalize date to required format.
	   *
	   * @inner
	   * @name uiBbNotificationsFilterController#getNormalizedDate
	   * @type {function}
	   * @param {object} date Date string
	   * @param {object} correction Number of miliseconds added to given date
	   * @returns {Date|null} Date object or null
	   */
	  var getNormalizedDate = function getNormalizedDate(date) {
	    var correction = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
	
	    var timeStamp = Date.parse(date) + correction;
	
	    // add timezone to returned date
	    return date ? new Date(timeStamp).toISOString().slice(0, -5) + 'Z' : null;
	  };
	
	  /**
	   * @description
	   * Return Array of checked option values.
	   *
	   * @inner
	   * @name uiBbNotificationsFilterController#getCheckedOptions
	   * @type {function}
	   * @param {array} options Array of checkbox option objects
	   * @returns {array} rray of checked option values
	   */
	  var getCheckedOptions = function getCheckedOptions(options) {
	    return options.reduce(function (result, option) {
	      if (option.checked && !option.isSelectAll) {
	        result.push(option.value);
	      }
	
	      return result;
	    }, []);
	  };
	
	  /**
	   * @description
	   * Update levels value for request according to options.
	   *
	   * @name uiBbNotificationsFilterController#onToggleCheckbox
	   * @type {function}
	   * @param {object} currentOption Checkbox option object
	   * @param {array} options Array of checkbox option objects
	   */
	  var onToggleCheckbox = function onToggleCheckbox(currentOption, options) {
	    if (!currentOption.isSelectAll || !currentOption.checked && currentOption.isSelectAll) {
	      filterParams.levels = getCheckedOptions(options);
	    } else {
	      filterParams.levels = [];
	    }
	  };
	
	  /**
	   * @description
	   * Get all filter params.
	   *
	   * @name uiBbNotificationsFilterController#getParams
	   * @type {function}
	   * @returns {object} Filter params
	   */
	  var getParams = function getParams() {
	    return {
	      levels: filterParams.levels.toString() || null,
	      read: filterParams.status,
	      fromDate: getNormalizedDate(filterParams.fromDate),
	      toDate: getNormalizedDate(filterParams.toDate || filterParams.fromDate, 1000 * 60 * 60 * 24)
	    };
	  };
	
	  /**
	   * @description
	   * Uncheck checkbox input.
	   *
	   * @name uiBbNotificationsFilterController#clearCheckedMapper
	   * @type {function}
	   * @param {object} item Checkbox input object
	   * @returns {object} Processed checkbox input object
	   */
	  var clearCheckedMapper = function clearCheckedMapper(item) {
	    return Object.assign(item, {
	      checked: false
	    });
	  };
	
	  /**
	   * @description
	   * Reset form state method.
	   *
	   * @inner
	   * @name uiBbTransactionSearchFilterController#resetFormState
	   * @param {object} form Angular form object
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
	   * @name uiBbNotificationsFilterController#onApplyFilter
	   * @type {function}
	   * @returns {Promise|null} A Promise that returns from filter method or null if method isn't set
	   */
	  var onApplyFilter = function onApplyFilter() {
	    return $ctrl.onFilter ? $ctrl.onFilter({ params: getParams() }) : null;
	  };
	
	  /**
	   * @description
	   * Reset filter parameters.
	   *
	   * @name uiBbNotificationsFilterController#onClearFilter
	   * @param {object} form Angular form object
	   * @type {function}
	   */
	  var onClearFilter = function onClearFilter(form) {
	    Object.assign(filterParams, defaultFilterParams);
	
	    $ctrl.levels = $ctrl.levels.map(clearCheckedMapper);
	    $ctrl.statuses = $ctrl.statuses.map(clearCheckedMapper);
	
	    resetFormState(form);
	  };
	
	  /**
	   * @description
	   * Toggle filter component.
	   *
	   * @name uiBbNotificationsFilterController#toggleFilter
	   * @type {function}
	   * @returns {boolean} A status of filter component
	   */
	  var toggleFilter = function toggleFilter() {
	    return $ctrl.isOpen = !$ctrl.isOpen;
	  };
	
	  /**
	   * @description
	   * Check if filter is pristine or not.
	   *
	   * @name uiBbNotificationsFilterController#isFilterPristine
	   * @type {function}
	   * @param {object} form Angular form object
	   * @returns {boolean} True if filter is pristine
	   */
	  var isFilterPristine = function isFilterPristine(form) {
	    return form.$pristine;
	  };
	
	  Object.assign($ctrl, {
	    isOpen: false,
	    filterParams: filterParams,
	    levels: levels,
	    statuses: statuses,
	    fromDate: fromDate,
	    toDate: toDate,
	    onToggleCheckbox: onToggleCheckbox,
	    onApplyFilter: onApplyFilter,
	    onClearFilter: onClearFilter,
	    toggleFilter: toggleFilter,
	    isFilterPristine: isFilterPristine
	  });
	}

/***/ })

/******/ })
});
;
//# sourceMappingURL=ui-bb-notifications-filter-ng.js.map