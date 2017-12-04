(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vendor-bb-uib-accordion"), require("ui-bb-format-amount"), require("ui-bb-loading-indicator-ng"), require("ui-bb-i18n-ng"), require("ui-bb-substitute-error-ng"), require("vendor-bb-angular-ng-aria"), require("ui-bb-transaction-search-filter-ng"), require("ui-bb-load-more-ng"), require("ui-bb-sortable-column-ng"), require("ui-bb-paginator-ng"), require("ui-bb-date-label-filter-ng"));
	else if(typeof define === 'function' && define.amd)
		define("ext-bb-transactions-extended-ng", ["vendor-bb-uib-accordion", "ui-bb-format-amount", "ui-bb-loading-indicator-ng", "ui-bb-i18n-ng", "ui-bb-substitute-error-ng", "vendor-bb-angular-ng-aria", "ui-bb-transaction-search-filter-ng", "ui-bb-load-more-ng", "ui-bb-sortable-column-ng", "ui-bb-paginator-ng", "ui-bb-date-label-filter-ng"], factory);
	else if(typeof exports === 'object')
		exports["ext-bb-transactions-extended-ng"] = factory(require("vendor-bb-uib-accordion"), require("ui-bb-format-amount"), require("ui-bb-loading-indicator-ng"), require("ui-bb-i18n-ng"), require("ui-bb-substitute-error-ng"), require("vendor-bb-angular-ng-aria"), require("ui-bb-transaction-search-filter-ng"), require("ui-bb-load-more-ng"), require("ui-bb-sortable-column-ng"), require("ui-bb-paginator-ng"), require("ui-bb-date-label-filter-ng"));
	else
		root["ext-bb-transactions-extended-ng"] = factory(root["vendor-bb-uib-accordion"], root["ui-bb-format-amount"], root["ui-bb-loading-indicator-ng"], root["ui-bb-i18n-ng"], root["ui-bb-substitute-error-ng"], root["vendor-bb-angular-ng-aria"], root["ui-bb-transaction-search-filter-ng"], root["ui-bb-load-more-ng"], root["ui-bb-sortable-column-ng"], root["ui-bb-paginator-ng"], root["ui-bb-date-label-filter-ng"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_5__, __WEBPACK_EXTERNAL_MODULE_6__, __WEBPACK_EXTERNAL_MODULE_7__, __WEBPACK_EXTERNAL_MODULE_8__, __WEBPACK_EXTERNAL_MODULE_9__, __WEBPACK_EXTERNAL_MODULE_10__, __WEBPACK_EXTERNAL_MODULE_11__, __WEBPACK_EXTERNAL_MODULE_12__, __WEBPACK_EXTERNAL_MODULE_13__, __WEBPACK_EXTERNAL_MODULE_14__, __WEBPACK_EXTERNAL_MODULE_15__) {
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

	module.exports = __webpack_require__(4);

/***/ }),
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.dependencyKeys = exports.hooks = exports.helpers = undefined;
	
	var _vendorBbUibAccordion = __webpack_require__(5);
	
	var _vendorBbUibAccordion2 = _interopRequireDefault(_vendorBbUibAccordion);
	
	var _uiBbFormatAmount = __webpack_require__(6);
	
	var _uiBbFormatAmount2 = _interopRequireDefault(_uiBbFormatAmount);
	
	var _uiBbLoadingIndicatorNg = __webpack_require__(7);
	
	var _uiBbLoadingIndicatorNg2 = _interopRequireDefault(_uiBbLoadingIndicatorNg);
	
	var _uiBbI18nNg = __webpack_require__(8);
	
	var _uiBbI18nNg2 = _interopRequireDefault(_uiBbI18nNg);
	
	var _uiBbSubstituteErrorNg = __webpack_require__(9);
	
	var _uiBbSubstituteErrorNg2 = _interopRequireDefault(_uiBbSubstituteErrorNg);
	
	var _vendorBbAngularNgAria = __webpack_require__(10);
	
	var _vendorBbAngularNgAria2 = _interopRequireDefault(_vendorBbAngularNgAria);
	
	var _uiBbTransactionSearchFilterNg = __webpack_require__(11);
	
	var _uiBbTransactionSearchFilterNg2 = _interopRequireDefault(_uiBbTransactionSearchFilterNg);
	
	var _uiBbLoadMoreNg = __webpack_require__(12);
	
	var _uiBbLoadMoreNg2 = _interopRequireDefault(_uiBbLoadMoreNg);
	
	var _uiBbSortableColumnNg = __webpack_require__(13);
	
	var _uiBbSortableColumnNg2 = _interopRequireDefault(_uiBbSortableColumnNg);
	
	var _uiBbPaginatorNg = __webpack_require__(14);
	
	var _uiBbPaginatorNg2 = _interopRequireDefault(_uiBbPaginatorNg);
	
	var _uiBbDateLabelFilterNg = __webpack_require__(15);
	
	var _uiBbDateLabelFilterNg2 = _interopRequireDefault(_uiBbDateLabelFilterNg);
	
	var _helpers = __webpack_require__(16);
	
	var _helpers2 = _interopRequireDefault(_helpers);
	
	var _hooks = __webpack_require__(19);
	
	var extHooks = _interopRequireWildcard(_hooks);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var helpers = exports.helpers = _helpers2.default;
	/**
	 * @name Hooks
	 * @type {object}
	 *
	 * @description
	 * Hooks for widget-bb-transactions-ng
	 */
	/**
	 * @module ext-bb-transactions-extended-ng
	 *
	 * @description
	 * Extended extension for transactions widget.
	 *
	 * @requires vendor-bb-uib-accordion
	 * @requires ui-bb-format-amount
	 *
	 * @example
	 * <!-- payment widget model.xml -->
	 * <property name="extension" viewHint="text-input,admin">
	 *  <value type="string">ext-bb-transactions-extended-ng</value>
	 * </property>
	 */
	var hooks = exports.hooks = extHooks;
	
	var dependencyKeys = exports.dependencyKeys = [_vendorBbUibAccordion2.default, _uiBbFormatAmount2.default, _uiBbLoadingIndicatorNg2.default, _uiBbI18nNg2.default, _uiBbSubstituteErrorNg2.default, _vendorBbAngularNgAria2.default, _uiBbTransactionSearchFilterNg2.default, _uiBbLoadMoreNg2.default, _uiBbSortableColumnNg2.default, _uiBbPaginatorNg2.default, _uiBbDateLabelFilterNg2.default];

/***/ }),
/* 5 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_5__;

/***/ }),
/* 6 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_6__;

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
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_10__;

/***/ }),
/* 11 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_11__;

/***/ }),
/* 12 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_12__;

/***/ }),
/* 13 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_13__;

/***/ }),
/* 14 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_14__;

/***/ }),
/* 15 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_15__;

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _debitCreditSign = __webpack_require__(17);
	
	var _constants = __webpack_require__(18);
	
	var _constants2 = _interopRequireDefault(_constants);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var helpers = function helpers(context) {
	  var i18nFilter = context.$filter('i18n');
	
	  return {
	    /**
	     * @description
	     * Table headers
	     *
	     * @public
	     * @name headers
	     * @type {Object}
	     */
	    headers: [{
	      label: 'details.label.date',
	      class: 'col-sm-1',
	      sortable: {
	        key: 'bookingDate',
	        direction: 'DESC'
	      }
	    }, {
	      label: 'details.label.category',
	      class: 'col-sm-1 text-center',
	      sortable: {
	        key: 'category',
	        direction: 'ASC'
	      }
	    }, {
	      label: 'details.label.description',
	      class: 'col-sm-6',
	      sortable: {
	        key: 'description',
	        direction: 'ASC'
	      }
	    }, {
	      label: 'details.label.creditAmount',
	      class: 'col-sm-2 text-right',
	      sortable: {
	        key: 'amount',
	        direction: 'ASC'
	      }
	    }, {
	      label: 'details.label.debitAmount',
	      class: 'col-sm-2 text-right',
	      sortable: {
	        key: 'amount',
	        direction: 'ASC'
	      }
	    }],
	
	    /**
	     * @description
	     * Transaction types constant
	     *
	     * @public
	     * @name transactionTypes
	     * @type {Types}
	     */
	    transactionTypes: _constants.Types,
	
	    /**
	     * @description
	     * Based on credit/debit indicator, put right sign on the transaction amount
	     *
	     * @name getSignedAmount
	     * @type {function}
	     * @param {object} transaction Transaction object
	     * @returns {number} Signed amount
	     */
	    getSignedAmount: function getSignedAmount(transaction) {
	      return transaction.amount * (transaction.creditDebitIndicator === _debitCreditSign.negativeSignKey ? -1 : 1);
	    },
	
	    /**
	     * @description
	     * Checks sortable header matches current sort state
	     *
	     * @public
	     * @name isSortableActive
	     * @type {function}
	     * @param {object} sortable Sortable header item
	     * @param {object} sort Sort state object of the controller
	     *
	     * @returns {boolean}
	     */
	    isSortableActive: function isSortableActive(sortable, sort) {
	      return sortable.key === sort.orderBy;
	    },
	
	    /**
	     * @description
	     * Checks if actual pagination type matches the one, defined in properties
	     *
	     * @public
	     * @name isPaginationTypeMatch
	     * @type {function}
	     * @param {function} $ctrl      Current controller
	     * @param {string} type         Description of pagination type (pagination, load-more)
	     *
	     * @returns {boolean}
	     */
	    isPaginationTypeMatch: function isPaginationTypeMatch($ctrl, type) {
	      return $ctrl.state.pageParams.paginationType === type;
	    },
	
	    /**
	     * @description
	     * Converts transaction category name into category CSS icon class
	     *
	     * @name getCategoryIconClass
	     * @type {function}
	     * @param {string} transactionCategory Transaction category
	     * @param {?boolean} withPrefix Include class prefix
	     * @returns {string}
	     */
	    getCategoryIconClass: function getCategoryIconClass(transactionCategory) {
	      var withPrefix = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
	      return '' + (withPrefix ? _constants2.default : '') + (transactionCategory.toLowerCase().replace(/\W/g, '-').replace(/-{2,}/g, '-') || _constants.uncategorizedIconClass);
	    },
	
	    /**
	     * @description
	     * Returns either label like now, today or yesterday or the actual date
	     *
	     * @name dateLabel
	     * @type {function}
	     * @param {string} label date
	     *
	     * @returns {string}
	     */
	    dateLabel: function dateLabel(label) {
	      return i18nFilter(_constants.TimePeriod[label]) || label;
	    }
	  };
	};
	
	exports.default = helpers;

/***/ }),
/* 17 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var positiveSignKey = exports.positiveSignKey = 'CRDT';
	var negativeSignKey = exports.negativeSignKey = 'DBIT';
	
	var creditDebitKeysToSign = {};
	creditDebitKeysToSign[positiveSignKey] = '+';
	creditDebitKeysToSign[negativeSignKey] = '-';
	
	/**
	 * @description
	 * Adds debitCreditSign property to transaction object based on debitCreditIndicator key
	 *
	 * @param {Object} transaction Transaction object
	 * @returns {Object} new copy of Transaction object
	 */
	
	exports.default = function (transaction) {
	  return Object.assign({
	    debitCreditSign: creditDebitKeysToSign[transaction.creditDebitIndicator]
	  }, transaction);
	};

/***/ }),
/* 18 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * @description
	 * Category icon CSS class prefix
	 *
	 * @name categoryClassPrefix
	 * @type {string}
	 */
	var categoryClassPrefix = 'bb-transaction-category-';
	
	exports.default = categoryClassPrefix;
	
	/**
	 * @description
	 * Uncategorized CSS icon class
	 *
	 * @name uncategorizedIconClass
	 * @type {string}
	 */
	
	var uncategorizedIconClass = exports.uncategorizedIconClass = 'uncategorized';
	
	/**
	 * @description
	 * Widget custom type preferences
	 *
	 * @name Types
	 * @type {object}
	 */
	var Types = exports.Types = {
	  TYPE_1: 'type1',
	  TYPE_2: 'type2',
	  TYPE_3: 'type3',
	  TYPE_4: 'type4'
	};
	
	/**
	 * @description
	 * Date labels enum
	 *
	 * @name TimePeriod
	 * @type {object}
	 */
	var TimePeriod = exports.TimePeriod = {
	  now: 'date.label.now',
	  today: 'date.label.today',
	  yesterday: 'date.label.yesterday'
	};

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.defaultSortableDirection = exports.defaultSortableColumn = exports.processTransactions = undefined;
	
	var _debitCreditSign = __webpack_require__(17);
	
	var _debitCreditSign2 = _interopRequireDefault(_debitCreditSign);
	
	var _setType = __webpack_require__(20);
	
	var _setType2 = _interopRequireDefault(_setType);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * @name processTransactions
	 * @description
	 * Hook for process transactions
	 *
	 * Add debitCreditSign property to transaction
	 *
	 * Add customType field to transaction
	 *
	 * Sort transactions collection based on valueDate (descending)
	 *
	 * @type {function}
	 * @param {Object[]} transactions The source transactions from the widget controller
	 * @returns {Object} transactions grouped by date and transactions array
	 */
	/* eslint-disable import/prefer-default-export */
	var processTransactions = exports.processTransactions = function processTransactions(transactions) {
	  var transactionsArray = transactions.map(_debitCreditSign2.default).map(_setType2.default);
	  var transactionsGroupedByDate = transactionsArray.reduce(function (groupedByDate, transaction) {
	    var datesObject = groupedByDate;
	    // get only date part
	    var bookingDateObj = new Date(transaction.bookingDate);
	    var date = bookingDateObj.toISOString().slice(0, 10);
	
	    if (datesObject[date]) {
	      var clearToAdd = true;
	
	      datesObject[date].forEach(function (element) {
	        if (element.id === transaction.id) {
	          clearToAdd = false;
	        }
	      });
	
	      if (clearToAdd) {
	        datesObject[date].push(transaction);
	      }
	    } else {
	      datesObject[date] = [transaction];
	    }
	
	    return datesObject;
	  }, {});
	
	  return {
	    transactionsArray: transactionsArray,
	    transactionsGroupedByDate: transactionsGroupedByDate
	  };
	};
	
	/**
	 * @name defaultSortableColumn
	 *
	 * @description
	 * Return the key of the default sort column
	 *
	 * @type {function}
	 * @returns {string|null} Returns column key
	 */
	var defaultSortableColumn = exports.defaultSortableColumn = function defaultSortableColumn() {
	  return 'bookingDate';
	};
	
	/**
	 * @name defaultSortableDirection
	 *
	 * @description
	 * Return the sorting direction of the default sort column
	 *
	 * @type {function}
	 * @returns {string|null} Returns sorting direction
	 */
	var defaultSortableDirection = exports.defaultSortableDirection = function defaultSortableDirection() {
	  return 'DESC';
	};

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _constants = __webpack_require__(18);
	
	/**
	 * @description
	 * Adds "customType" field to transaction item according to custom logic.
	 * This custom type is used to define the rendering layout in template file
	 *
	 * @param {Object} transaction Transaction object
	 */
	exports.default = function (transaction) {
	  if (transaction.counterPartyName && transaction.category) {
	    Object.assign(transaction, { customType: _constants.Types.TYPE_1 });
	  } else if (transaction.counterPartyName) {
	    Object.assign(transaction, { customType: _constants.Types.TYPE_2 });
	  } else if (transaction.description) {
	    Object.assign(transaction, { customType: _constants.Types.TYPE_3 });
	  } else {
	    Object.assign(transaction, { customType: _constants.Types.TYPE_4 });
	  }
	  return transaction;
	};

/***/ })
/******/ ])
});
;
//# sourceMappingURL=ext-bb-transactions-extended-ng.js.map