(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vendor-bb-angular-ng-aria"), require("vendor-bb-angular-ng-messages"), require("vendor-bb-uib-popover"), require("vendor-bb-angular-sanitize"), require("vendor-bb-uib-alert"), require("ui-bb-substitute-error-ng"), require("ui-bb-i18n-ng"), require("ui-bb-account-selector"), require("ui-bb-currency-input-ng"), require("ui-bb-parent-responsiveness-ng"), require("ui-bb-credit-suggest-ng"), require("ui-bb-switcher-ng"), require("ui-bb-expandable-ng"), require("ui-bb-calendar-popup-ng"), require("ui-bb-number-input-ng"), require("ui-bb-account-card"), require("ui-bb-confirm-ng"), require("ui-bb-loading-overlay-ng"), require("ui-bb-char-counter-ng"));
	else if(typeof define === 'function' && define.amd)
		define("ext-bb-initiate-payment-ng", ["vendor-bb-angular-ng-aria", "vendor-bb-angular-ng-messages", "vendor-bb-uib-popover", "vendor-bb-angular-sanitize", "vendor-bb-uib-alert", "ui-bb-substitute-error-ng", "ui-bb-i18n-ng", "ui-bb-account-selector", "ui-bb-currency-input-ng", "ui-bb-parent-responsiveness-ng", "ui-bb-credit-suggest-ng", "ui-bb-switcher-ng", "ui-bb-expandable-ng", "ui-bb-calendar-popup-ng", "ui-bb-number-input-ng", "ui-bb-account-card", "ui-bb-confirm-ng", "ui-bb-loading-overlay-ng", "ui-bb-char-counter-ng"], factory);
	else if(typeof exports === 'object')
		exports["ext-bb-initiate-payment-ng"] = factory(require("vendor-bb-angular-ng-aria"), require("vendor-bb-angular-ng-messages"), require("vendor-bb-uib-popover"), require("vendor-bb-angular-sanitize"), require("vendor-bb-uib-alert"), require("ui-bb-substitute-error-ng"), require("ui-bb-i18n-ng"), require("ui-bb-account-selector"), require("ui-bb-currency-input-ng"), require("ui-bb-parent-responsiveness-ng"), require("ui-bb-credit-suggest-ng"), require("ui-bb-switcher-ng"), require("ui-bb-expandable-ng"), require("ui-bb-calendar-popup-ng"), require("ui-bb-number-input-ng"), require("ui-bb-account-card"), require("ui-bb-confirm-ng"), require("ui-bb-loading-overlay-ng"), require("ui-bb-char-counter-ng"));
	else
		root["ext-bb-initiate-payment-ng"] = factory(root["vendor-bb-angular-ng-aria"], root["vendor-bb-angular-ng-messages"], root["vendor-bb-uib-popover"], root["vendor-bb-angular-sanitize"], root["vendor-bb-uib-alert"], root["ui-bb-substitute-error-ng"], root["ui-bb-i18n-ng"], root["ui-bb-account-selector"], root["ui-bb-currency-input-ng"], root["ui-bb-parent-responsiveness-ng"], root["ui-bb-credit-suggest-ng"], root["ui-bb-switcher-ng"], root["ui-bb-expandable-ng"], root["ui-bb-calendar-popup-ng"], root["ui-bb-number-input-ng"], root["ui-bb-account-card"], root["ui-bb-confirm-ng"], root["ui-bb-loading-overlay-ng"], root["ui-bb-char-counter-ng"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_3__, __WEBPACK_EXTERNAL_MODULE_4__, __WEBPACK_EXTERNAL_MODULE_5__, __WEBPACK_EXTERNAL_MODULE_6__, __WEBPACK_EXTERNAL_MODULE_7__, __WEBPACK_EXTERNAL_MODULE_8__, __WEBPACK_EXTERNAL_MODULE_9__, __WEBPACK_EXTERNAL_MODULE_10__, __WEBPACK_EXTERNAL_MODULE_11__, __WEBPACK_EXTERNAL_MODULE_12__, __WEBPACK_EXTERNAL_MODULE_13__, __WEBPACK_EXTERNAL_MODULE_14__, __WEBPACK_EXTERNAL_MODULE_15__, __WEBPACK_EXTERNAL_MODULE_16__, __WEBPACK_EXTERNAL_MODULE_17__, __WEBPACK_EXTERNAL_MODULE_18__, __WEBPACK_EXTERNAL_MODULE_19__, __WEBPACK_EXTERNAL_MODULE_20__) {
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

	module.exports = __webpack_require__(1);

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.events = exports.helpers = exports.hooks = exports.dependencyKeys = undefined;
	
	var _vendorBbAngularNgAria = __webpack_require__(2);
	
	var _vendorBbAngularNgAria2 = _interopRequireDefault(_vendorBbAngularNgAria);
	
	var _vendorBbAngularNgMessages = __webpack_require__(3);
	
	var _vendorBbAngularNgMessages2 = _interopRequireDefault(_vendorBbAngularNgMessages);
	
	var _vendorBbUibPopover = __webpack_require__(4);
	
	var _vendorBbUibPopover2 = _interopRequireDefault(_vendorBbUibPopover);
	
	var _vendorBbAngularSanitize = __webpack_require__(5);
	
	var _vendorBbAngularSanitize2 = _interopRequireDefault(_vendorBbAngularSanitize);
	
	var _vendorBbUibAlert = __webpack_require__(6);
	
	var _vendorBbUibAlert2 = _interopRequireDefault(_vendorBbUibAlert);
	
	var _uiBbSubstituteErrorNg = __webpack_require__(7);
	
	var _uiBbSubstituteErrorNg2 = _interopRequireDefault(_uiBbSubstituteErrorNg);
	
	var _uiBbI18nNg = __webpack_require__(8);
	
	var _uiBbI18nNg2 = _interopRequireDefault(_uiBbI18nNg);
	
	var _uiBbAccountSelector = __webpack_require__(9);
	
	var _uiBbAccountSelector2 = _interopRequireDefault(_uiBbAccountSelector);
	
	var _uiBbCurrencyInputNg = __webpack_require__(10);
	
	var _uiBbCurrencyInputNg2 = _interopRequireDefault(_uiBbCurrencyInputNg);
	
	var _uiBbParentResponsivenessNg = __webpack_require__(11);
	
	var _uiBbParentResponsivenessNg2 = _interopRequireDefault(_uiBbParentResponsivenessNg);
	
	var _uiBbCreditSuggestNg = __webpack_require__(12);
	
	var _uiBbCreditSuggestNg2 = _interopRequireDefault(_uiBbCreditSuggestNg);
	
	var _uiBbSwitcherNg = __webpack_require__(13);
	
	var _uiBbSwitcherNg2 = _interopRequireDefault(_uiBbSwitcherNg);
	
	var _uiBbExpandableNg = __webpack_require__(14);
	
	var _uiBbExpandableNg2 = _interopRequireDefault(_uiBbExpandableNg);
	
	var _uiBbCalendarPopupNg = __webpack_require__(15);
	
	var _uiBbCalendarPopupNg2 = _interopRequireDefault(_uiBbCalendarPopupNg);
	
	var _uiBbNumberInputNg = __webpack_require__(16);
	
	var _uiBbNumberInputNg2 = _interopRequireDefault(_uiBbNumberInputNg);
	
	var _uiBbAccountCard = __webpack_require__(17);
	
	var _uiBbAccountCard2 = _interopRequireDefault(_uiBbAccountCard);
	
	var _uiBbConfirmNg = __webpack_require__(18);
	
	var _uiBbConfirmNg2 = _interopRequireDefault(_uiBbConfirmNg);
	
	var _uiBbLoadingOverlayNg = __webpack_require__(19);
	
	var _uiBbLoadingOverlayNg2 = _interopRequireDefault(_uiBbLoadingOverlayNg);
	
	var _uiBbCharCounterNg = __webpack_require__(20);
	
	var _uiBbCharCounterNg2 = _interopRequireDefault(_uiBbCharCounterNg);
	
	var _hooks = __webpack_require__(21);
	
	var extHooks = _interopRequireWildcard(_hooks);
	
	var _helpers = __webpack_require__(22);
	
	var _helpers2 = _interopRequireDefault(_helpers);
	
	__webpack_require__(24);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * @module ext-bb-initiate-payment-ng
	 *
	 * @description
	 * Default extension for widget-bb-initiate-payment-ng
	 */
	var dependencyKeys = exports.dependencyKeys = [_vendorBbAngularNgAria2.default, _vendorBbAngularNgMessages2.default, _vendorBbUibPopover2.default, _vendorBbAngularSanitize2.default, _vendorBbUibAlert2.default, _uiBbSubstituteErrorNg2.default, _uiBbI18nNg2.default, _uiBbAccountSelector2.default, _uiBbCurrencyInputNg2.default, _uiBbParentResponsivenessNg2.default, _uiBbCreditSuggestNg2.default, _uiBbSwitcherNg2.default, _uiBbExpandableNg2.default, _uiBbCalendarPopupNg2.default, _uiBbNumberInputNg2.default, _uiBbAccountCard2.default, _uiBbConfirmNg2.default, _uiBbLoadingOverlayNg2.default, _uiBbCharCounterNg2.default];
	
	var hooks = exports.hooks = extHooks;
	
	var helpers = exports.helpers = _helpers2.default;
	
	var events = exports.events = {};

/***/ }),
/* 2 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ }),
/* 3 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/***/ }),
/* 4 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_4__;

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
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_16__;

/***/ }),
/* 17 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_17__;

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
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_20__;

/***/ }),
/* 21 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * @name Hooks#processAccountsTo
	 * @type {function}
	 *
	 * @description
	 * Hook for processing account list in 'to' field (credit).
	 * Assigned to $ctrl.accountsTo.
	 *
	 * @param {object} debitAccount Selected debit account (can be null).
	 * @param {function} getCreditAccounts Function to retrieve all credit accounts
	 * @param {function} getExternalContacts Function to retrieve all external contacts
	 * formatted like Product kind
	 * @returns {Promise.<any[]>} Promise that retrieves array of accounts.
	 */
	var processAccountsTo = exports.processAccountsTo = function processAccountsTo(debitAccount, getCreditAccounts, getExternalAccounts) {
	  return getCreditAccounts(debitAccount.id || null).then(function (accounts) {
	    if (!debitAccount.id || debitAccount.externalTransferAllowed) {
	      return getExternalAccounts().then(function (contacts) {
	        return accounts.concat(contacts);
	      });
	    }
	    return accounts;
	  });
	};
	
	/**
	 * @name Hooks#getRecurringTransactionDay
	 * @type {function}
	 *
	 * @description
	 * Denotes day on which transfer should be executed.
	 * For weekly it will be 1..7 indicating weekday.
	 * For monthly it will be 1..31 indicating day of month.
	 * For yearly it will be 1..12 indicating month of the year
	 *
	 * @param {object} schedule Recurring payment schedule object
	 * @returns {number} Recurring transaction day
	 */
	var getRecurringTransactionDay = exports.getRecurringTransactionDay = function getRecurringTransactionDay(schedule) {
	  switch (schedule.transferFrequency.value) {
	    case 'YEARLY':
	      return schedule.startDate.getMonth() + 1;
	    case 'MONTHLY':
	      return schedule.startDate.getDate();
	    default:
	      return schedule.startDate.getDay() + 1;
	  }
	};

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _constants = __webpack_require__(23);
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	var crossCurrencyMessages = { 'cross-currency': true };
	var minOccurrences = 2;
	var maxOccurences = 200;
	var maxDigits = 13;
	var expanded = {};
	var descriptionCharCounterConfig = {
	  blockTyping: true
	};
	
	/**
	 * @description
	 * Returns cross currency messages if they should be shown
	 *
	 * @name showCrossCurrencyMessage
	 * @type {function}
	 * @param {object} controller Widget controller
	 * @returns {object} Cross currency messages
	 */
	var showCrossCurrencyMessage = function showCrossCurrencyMessage($ctrl) {
	  var isRateVisible = $ctrl.paymentPreferences.showExchangeRate && $ctrl.rate && $ctrl.payment.from && parseFloat($ctrl.payment.amount.value);
	  var isDifferentCurrencies = $ctrl.payment.amount.currency !== ($ctrl.payment.from ? $ctrl.payment.from.currency : $ctrl.payment.amount.currency);
	
	  return isRateVisible && isDifferentCurrencies ? crossCurrencyMessages : null;
	};
	
	/**
	 * @description
	 * Checks if layout should show 'Urgent payment' switcher
	 *
	 * @name canSelectUrgentPayment
	 * @type {function}
	 * @param {object} $ctrl Widget controller
	 * @returns {boolean} True if urget payment switchet should be shown, false otherwise
	 */
	var canSelectUrgentPayment = function canSelectUrgentPayment($ctrl) {
	  var debitAccount = $ctrl.payment.from || {};
	  return !!($ctrl.paymentPreferences.urgent && debitAccount && debitAccount.urgentTransferAllowed);
	};
	
	/**
	 * @description
	 * Resets payment order
	 *
	 * @name resetPayment
	 * @type {function}
	 * @param {object} $ctrl Widget controller
	 * @param {object} scope Template scope
	 *
	 * @returns {Promise<any>}
	 */
	var resetPayment = function resetPayment($ctrl, scope) {
	  return $ctrl.resetPayment().then(function () {
	    Object.assign(scope, { step: 'form' });
	  });
	};
	
	/**
	 * @description
	 * Makes new payment request and changes step on success
	 *
	 * @name makePayment
	 * @type {function}
	 * @param {object} $ctrl Payment controller
	 * @param {object} scope Parent ng scope
	 * @returns {object} Payment request Promise
	 */
	var makePayment = function makePayment($ctrl, scope) {
	  return $ctrl.makePayment($ctrl.payment).then(function () {
	    Object.assign(scope, { step: 'confirmation' });
	    // eslint-disable-next-line no-undef
	    window.scrollTo(0, 0);
	  }).catch(function () {});
	}; // Intentional empty catch block to prevent uncaught reject error
	
	/**
	 * @description
	 * Handler for Account From change action
	 *
	 * @name onAccountChange
	 * @type {function}
	 * @param {object} $ctrl Payment controller
	 * @param {object} selectedAccount
	 * @returns {object} A Promise object
	 */
	var onAccountChange = function onAccountChange($ctrl, selectedAccount) {
	  // eslint-disable-next-line no-param-reassign
	  $ctrl.payment.from = Object.assign({}, selectedAccount);
	  return $ctrl.onAccountFromChange();
	};
	
	/**
	 * @description
	 * Toggle group in credit suggest component
	 *
	 * @name toggleCreditSuggestGroup
	 * @type {function}
	 * @param {object} event Event object
	 * @param {object} model
	 * @param {object} ctrl Widget's controller
	 */
	var toggleCreditSuggestGroup = function toggleCreditSuggestGroup(event, model, ctrl) {
	  // Prevent suggestion list to be closed
	  event.stopPropagation();
	
	  expanded[model.more || model.less] = !!model.more;
	
	  ctrl.open();
	};
	
	/**
	 * @name reviewPayment
	 * @type {function}
	 *
	 * @description
	 * Called when submitting payment for review, it actually calls a hook that
	 * can be customized with all the validations needed by the specific project.
	 *
	 * @param {object} ctrl Payment controller
	 * @param {object} scope Parent ng scope
	 */
	var reviewPayment = function reviewPayment($ctrl, scope) {
	  return $ctrl.reviewPayment($ctrl.payment).then(function () {
	    $ctrl.clearPaymentError();
	    Object.assign(scope, { step: 'review' });
	    // eslint-disable-next-line no-undef
	    window.scrollTo(0, 0);
	  });
	};
	
	var helpers = function helpers(context) {
	  var i18nFilter = context.$filter('i18n');
	  var dateFilter = context.$filter('date');
	
	  /**
	   * @description
	   * Transforms provided accounts to custom structure. External contacts account list will be
	   * flattened to be molded to same structure as internal accounts
	   * (identifier=IBAN/BBAN, name=contactperson).
	   *
	   * @name getAccounts
	   * @type {function}
	   * @param {array<object>} accounts
	   * @returns {array<object>} View accounts
	   */
	  var normalizeAccounts = function normalizeAccounts(accounts) {
	    if (!accounts) {
	      return [].concat(accounts || []);
	    }
	
	    var internalAccountView = accounts.filter(function (account) {
	      return !account.external;
	    });
	
	    var externalAccountView = [];
	
	    // add group names per contact for externals
	    accounts.filter(function (account) {
	      return account.external;
	    }).forEach(function (contact) {
	      var contactAccounts = [];
	      if (contact.accounts) {
	        var _iteratorNormalCompletion = true;
	        var _didIteratorError = false;
	        var _iteratorError = undefined;
	
	        try {
	          for (var _iterator = contact.accounts[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	            var account = _step.value;
	
	            Object.assign(account, contact, {
	              identifier: account.IBAN || account.accountNumber,
	              accountName: account.bankName || account.name,
	              name: contact.name,
	              contactPerson: contact.contactPerson || contact.name
	            });
	            contactAccounts.push(account);
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
	      }
	      externalAccountView = externalAccountView.concat(contactAccounts);
	    });
	
	    return [].concat(_toConsumableArray(internalAccountView), _toConsumableArray(externalAccountView));
	  };
	
	  /**
	   * @description
	   * Compiles the scheduling description out of payment object params.
	   *
	   * In this process, following translation keys are being used:
	   *
	   * form.schedule.starting, for word "Starting"
	   *
	   * form.schedule.today, for word "Today"
	   *
	   * form.schedule.on, for word "On" (used before date to form "on 01.01.2017")
	   *
	   * form.schedule.until, for word "until" (used before date to form "until 01.01.2017")
	   *
	   * form.schedule.repeat.count, for word "times" (used after repeat count to form "5 times")
	   *
	   * and name of the transfer frequency set in constants file
	   *
	   * @name getScheduleText
	   * @type {function}
	   * @param {object} $ctrl Widget controller
	   * @returns {string} Compiled text that can be used as scheduling value in views
	   */
	  var getScheduleText = function getScheduleText($ctrl) {
	    var payment = $ctrl.payment,
	        EndingType = $ctrl.EndingType,
	        singleTransfer = $ctrl.singleTransfer;
	
	    var words = [];
	    var today = new Date().setHours(0, 0, 0, 0);
	    var startDate = new Date(payment.schedule.startDate);
	    var isToday = startDate.setHours(0, 0, 0, 0) === today;
	    var multipleOccurrences = payment.schedule.transferFrequency.value !== singleTransfer.value;
	    var hasEnd = payment.endingType !== EndingType.NEVER;
	
	    // add frequency
	    words.push(i18nFilter(payment.schedule.transferFrequency.name));
	    words.push('-');
	
	    // if there are multiple occurrences, add word starting
	    if (multipleOccurrences) {
	      words.push(i18nFilter('form.schedule.starting'));
	    }
	
	    // if start date is today use word instead of date
	    if (isToday) {
	      var todayString = i18nFilter('form.schedule.today');
	      // for multiple occurrences, there is a prefix word, so this on should be lowercase
	      if (multipleOccurrences) {
	        todayString = todayString.toLowerCase();
	      }
	
	      words.push(todayString);
	    }
	
	    // for single transfer in the future, we need prefix word on
	    if (!multipleOccurrences && !isToday) {
	      words.push(i18nFilter('form.schedule.on').toLowerCase());
	    }
	
	    if (!isToday) {
	      words.push(dateFilter(payment.schedule.startDate));
	    }
	
	    var hasLimitedOccurences = hasEnd && multipleOccurrences;
	    var isMinOccurences = !payment.schedule.repeat || payment.schedule.repeat < minOccurrences;
	
	    // if there are limited number of occurrences,
	    // add comma for the last word, so that there is no space between them
	    if (hasLimitedOccurences && !(payment.endingType === EndingType.AFTER && isMinOccurences)) {
	      words[words.length - 1] += ',';
	    }
	
	    if (hasEnd && multipleOccurrences) {
	      // there is an end for this schedule
	      // based on the type of ending construct words differently
	      if (payment.endingType === EndingType.ON) {
	        words.push(i18nFilter('form.schedule.until'));
	        words.push(dateFilter(payment.schedule.endDate));
	      } else if (payment.schedule.repeat >= minOccurrences) {
	        words.push(payment.schedule.repeat);
	        words.push(payment.schedule.repeat ? i18nFilter('form.schedule.repeat.count') : '');
	      }
	    }
	
	    // output everything together
	    return words.join(' ');
	  };
	
	  /**
	   * @description
	   * Returns frequencies for payment depending on occurences number
	   *
	   * @name getFrequencies
	   * @type {function}
	   * @param {object} $ctrl Widget controller
	   * @returns {array<object>} Array of transfer frequencies
	   */
	  var getFrequencies = function getFrequencies($ctrl) {
	    return [$ctrl.singleTransfer].concat($ctrl.paymentPreferences.recurring ? _constants.transferFrequencies : []);
	  };
	
	  /**
	   * @name getMinDate
	   * @type {function}
	   * @description
	   * Get the minimum available date for specific frequency
	   *
	   * @param {date} startDate
	   * @param {object} transferFrequency
	   * @return {date}
	   */
	  var getMinDate = function getMinDate(startDate) {
	    var transferFrequency = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	
	    var minDate = void 0;
	
	    var daysInMonth = function daysInMonth(month, year) {
	      return new Date(year, month + 1, 0).getDate();
	    };
	    var addDays = function addDays(toDate, days) {
	      return new Date(toDate.getTime() + days * 24 * 60 * 60 * 1000);
	    };
	    var addWeeks = function addWeeks(toDate, weeks) {
	      return addDays(toDate, weeks * 7);
	    };
	    var addYears = function addYears(toDate, years) {
	      return new Date(toDate.getFullYear() + years, toDate.getMonth(), toDate.getDate() > daysInMonth(toDate.getMonth(), toDate.getFullYear()) ? daysInMonth(toDate.getMonth(), toDate.getFullYear()) : toDate.getDate());
	    };
	    var addMonths = function addMonths(toDate, months) {
	      var newMonth = toDate.getMonth() + months + 1 > 12 ? (toDate.getMonth() + months + 1) % 12 - 1 : toDate.getMonth() + months;
	      var newYear = toDate.getMonth() + months + 1 > 12 ? addYears(toDate, 1).getFullYear() : toDate.getFullYear();
	      var newDay = toDate.getDate() > daysInMonth(newMonth, newYear) ? daysInMonth(newMonth, newYear) : toDate.getDate();
	      return new Date(newYear, newMonth, newDay);
	    };
	
	    switch (transferFrequency.value) {
	      case 'DAILY':
	        minDate = addDays(startDate, transferFrequency.every);
	        break;
	      case 'WEEKLY':
	        minDate = addWeeks(startDate, transferFrequency.every);
	        break;
	      case 'MONTHLY':
	        minDate = addMonths(startDate, transferFrequency.every);
	        break;
	      case 'QUARTERLY':
	        minDate = addMonths(startDate, transferFrequency.every * 3);
	        break;
	      case 'YEARLY':
	        minDate = addYears(startDate, transferFrequency.every);
	        break;
	      default:
	        minDate = startDate;
	    }
	
	    return minDate;
	  };
	
	  return {
	    minOccurrences: minOccurrences,
	    maxOccurences: maxOccurences,
	    maxDigits: maxDigits,
	    descriptionCharCounterConfig: descriptionCharCounterConfig,
	    showCrossCurrencyMessage: showCrossCurrencyMessage,
	    normalizeAccounts: normalizeAccounts,
	    canSelectUrgentPayment: canSelectUrgentPayment,
	    getScheduleText: getScheduleText,
	    getFrequencies: getFrequencies,
	    resetPayment: resetPayment,
	    makePayment: makePayment,
	    reviewPayment: reviewPayment,
	    toggleCreditSuggestGroup: toggleCreditSuggestGroup,
	    onAccountChange: onAccountChange,
	    getMinDate: getMinDate
	  };
	};
	
	exports.default = helpers;

/***/ }),
/* 23 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * @description
	 * Array of recurring frequency objects with the following properties (all mandatory)
	 *
	 * @property {string} object.name Translation key of the label
	 * that will be displayed to the end user
	 * @property {string} object.value Denotes frequency type of transfer.
	 * Possible values: DAILY/WEEKLY/MONTHLY/YEARLY
	 * @property {number} object.every Indicates skip interval of transfer.
	 * 1 would mean execute every time, 2 - every other time
	 *
	 * @example
	 * {
	 *   name: 'form.schedule.frequency.weekly',
	 *   value: 'WEEKLY',
	 *   every: 1,
	 * },
	 * {
	 *   name: 'form.schedule.frequency.bi.weekly',
	 *   value: 'WEEKLY',
	 *   every: 2,
	 * }
	 *
	 * @name transferFrequencies
	 * @type {array}
	 */
	// eslint-disable-next-line import/prefer-default-export
	var transferFrequencies = exports.transferFrequencies = [{
	  name: 'form.schedule.frequency.daily',
	  value: 'DAILY',
	  every: 1
	}, {
	  name: 'form.schedule.frequency.weekly',
	  value: 'WEEKLY',
	  every: 1
	}, {
	  name: 'form.schedule.frequency.monthly',
	  value: 'MONTHLY',
	  every: 1
	}, {
	  name: 'form.schedule.frequency.quarterly',
	  value: 'QUARTERLY',
	  every: 1
	}, {
	  name: 'form.schedule.frequency.annually',
	  value: 'YEARLY',
	  every: 1
	}];

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(25);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(27)(content, {});
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
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(26)();
	// imports
	
	
	// module
	exports.push([module.id, ".ext-bb-initiate-payment-ng textarea {\n  resize: none;\n}\n\n.ext-bb-initiate-payment-ng .occurence-field {\n  display: inline;\n}\n\n.ext-bb-initiate-payment-ng .amount-block {\n  float: none;\n  display: table;\n}\n\n.ext-bb-initiate-payment-ng .cross-currency-info > span {\n  display: inline-block;\n}\n", ""]);
	
	// exports


/***/ }),
/* 26 */
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
/* 27 */
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
//# sourceMappingURL=ext-bb-initiate-payment-ng.js.map