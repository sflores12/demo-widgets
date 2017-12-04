(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("ui-bb-i18n-ng"), require("ui-bb-iban-ng"), require("ui-bbm-textfield-ng"), require("vendor-bb-angular"));
	else if(typeof define === 'function' && define.amd)
		define("ui-bbm-beneficiary-select-ng", ["ui-bb-i18n-ng", "ui-bb-iban-ng", "ui-bbm-textfield-ng", "vendor-bb-angular"], factory);
	else if(typeof exports === 'object')
		exports["ui-bbm-beneficiary-select-ng"] = factory(require("ui-bb-i18n-ng"), require("ui-bb-iban-ng"), require("ui-bbm-textfield-ng"), require("vendor-bb-angular"));
	else
		root["ui-bbm-beneficiary-select-ng"] = factory(root["ui-bb-i18n-ng"], root["ui-bb-iban-ng"], root["ui-bbm-textfield-ng"], root["vendor-bb-angular"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_8__, __WEBPACK_EXTERNAL_MODULE_38__, __WEBPACK_EXTERNAL_MODULE_42__, __WEBPACK_EXTERNAL_MODULE_88__) {
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

	module.exports = __webpack_require__(107);

/***/ }),

/***/ 8:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_8__;

/***/ }),

/***/ 38:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_38__;

/***/ }),

/***/ 42:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_42__;

/***/ }),

/***/ 88:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_88__;

/***/ }),

/***/ 107:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _vendorBbAngular = __webpack_require__(88);
	
	var _vendorBbAngular2 = _interopRequireDefault(_vendorBbAngular);
	
	var _uiBbI18nNg = __webpack_require__(8);
	
	var _uiBbI18nNg2 = _interopRequireDefault(_uiBbI18nNg);
	
	var _uiBbIbanNg = __webpack_require__(38);
	
	var _uiBbIbanNg2 = _interopRequireDefault(_uiBbIbanNg);
	
	var _uiBbmTextfieldNg = __webpack_require__(42);
	
	var _uiBbmTextfieldNg2 = _interopRequireDefault(_uiBbmTextfieldNg);
	
	var _component = __webpack_require__(108);
	
	var _component2 = _interopRequireDefault(_component);
	
	var _controller = __webpack_require__(109);
	
	var _controller2 = _interopRequireDefault(_controller);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * @module ui-bbm-beneficiary-select-ng
	 * @description
	 * Credit suggest input mobile UI component
	 *
	 * @example
	 * // In an extension:
	 * // file: scripts/index.js
	 * import uiBbmBeneficiarySelectKey from 'ui-bbm-beneficiary-select-ng';
	 *
	 * export const dependencyKeys = [
	 *   uiBbmBeneficiarySelectKey,
	 * ];
	 *
	 * // file: templates/template.ng.html
	 * <ui-bbm-beneficiary-select-ng
	 *   name="beneficiary"
	 *   ng-model="$ctrl.payment.to"
	 *   accounts="$ctrl.accountsTo"
	 *   debit-account="$ctrl.payment.to.debitAccount"
	 *   allowCreate="!$ctrl.payment.from || $ctrl.payment.from.externalTransferAllowed"
	 *   on-button-click="ext.helpers.onPaymentToAccountsClick($ctrl)"
	 *   messages="{
	 *     identifierPlaceholder: ('label.beneficiaryIdentifier' | i18n),
	 *     namePlaceholder: ('label.beneficiaryName' | i18n),
	 *   }">
	 * </ui-bbm-beneficiary-select-ng>
	 */
	
	exports.default = _vendorBbAngular2.default.module('ui-bbm-beneficiary-select-ng', [_uiBbI18nNg2.default, _uiBbIbanNg2.default, _uiBbmTextfieldNg2.default]).component('uiBbmBeneficiarySelectNg', _component2.default).controller('controller', ['$element', '$scope', '$timeout', '$document', _controller2.default]).name;

/***/ }),

/***/ 108:
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * @name uiBBMBeneficiarySelect
	 * @type {Object}
	 *
	 * @property {Array.<AccountsView>} accounts List of accounts to filter and select with user input
	 * @property {boolean} allowCreate Is creating of a new beneficiary allowed
	 * @property {Object} messages Localized messages
	 * @property {Object} debitAccount Debit Account
	 * @property {Object} ngModel Beneficiary object
	 * @property {function} onButtonClick Handler for button clicks
	 */
	var component = {
	  bindings: {
	    allowCreate: '<',
	    debitAccount: '<',
	    accounts: '<',
	    messages: '<',
	    ngModel: '<',
	    onButtonClick: '&'
	  },
	  controller: 'controller',
	  template: '\n    <div \n      class="bbm-beneficiary-select"\n      data-ng-class="{\n        \'bbm-beneficiary-select-has-focus\': $ctrl.state.activeField,\n        \'bbm-beneficiary-select-has-focus-name\': $ctrl.state.activeField === \'name\',\n        \'bbm-beneficiary-select-has-focus-identifier\': $ctrl.state.activeField === \'identifier\'\n      }"\n      data-role="beneficiary-select">\n      <div class="bbm-beneficiary-select-inner">\n        <div class="bbm-beneficiary-select-name form-group form-group-md">\n          <ui-bbm-textfield-ng\n            data-type="text"\n            data-name="beneficiary-name"\n            data-label="{{ $ctrl.messages.nameLabel }}"\n            data-placeholder="{{ $ctrl.messages.namePlaceholder }}"\n            data-role="beneficiary-select-name"\n            data-ng-model="$ctrl.state.beneficiary.name"\n            data-clear-button="true">\n          </ui-bbm-textfield-ng>\n        </div>\n        <div class="bbm-beneficiary-select-identifier form-group form-group-md">\n          <ui-bbm-textfield-ng\n            data-type="text"\n            data-name="beneficiary-identifier"\n            data-label="{{ $ctrl.messages.identifierLabel }}"\n            data-placeholder="{{ $ctrl.messages.identifierPlaceholder }}"\n            data-role="beneficiary-select-identifier"\n            data-disabled="$ctrl.isIbanDisabled()"\n            data-ng-required="$ctrl.isExternalAccount()"\n            data-ng-model="$ctrl.state.beneficiary.identifier"\n            data-ng-model-options="{ allowInvalid: true }"\n            data-clear-button="true"\n            ui-bb-iban>\n            <ng-messages\n              for="$ctrl.identifierModelCtrl.$error"\n              data-ng-show="$ctrl.identifierModelCtrl.$dirty &&\n                            $ctrl.identifierModelCtrl.$touched &&\n                            $ctrl.identifierModelCtrl.$invalid"\n              role="alert">\n              <ng-message\n                when="uiBbIban"\n                data-i18n-key="errors.invalidAccountIBAN">\n              </ng-message>\n              <ng-message\n                when="required"\n                data-i18n-key="errors.requiredAccountIBAN">\n              </ng-message>\n              <ng-message\n                when="sameUiBbIban"\n                data-i18n-key="errors.sameAccountIBAN">\n              </ng-message>\n              <ng-message\n                when="createBeneficiary"\n                data-i18n-key="errors.createBeneficiary">\n              </ng-message>\n            </ng-messages>\n          </ui-bbm-textfield-ng>\n        </div>\n\n        <div \n          class="bbm-beneficiary-select-list"          \n          data-role="beneficiary-select-list"\n          data-ng-if="$ctrl.state.isListOpened">\n          <div class="bbm-list">\n            <div class="bbm-list-group">\n              <ul class="bbm-list-group-items">\n                <li\n                  class="bbm-list-item"\n                  data-role="beneficiary-select-list-item"\n                  data-ng-repeat="account in $ctrl.state.suggestions track by $index"\n                  data-ng-click="$ctrl.onAccountClick(account)">\n                  <div class="bbm-beneficiary-select-account">\n                    <h4\n                      class="bbm-beneficiary-select-account-name"\n                      data-role="beneficiary-select-account-name"\n                      data-ng-bind="account.name">\n                    </h4>\n                    <div\n                      class="bbm-beneficiary-select-account-identifier"\n                      data-ng-if="account.identifier">\n                      <span\n                        class="prevent-ios-click"\n                        data-role="beneficiary-select-account-identifier"\n                        data-ng-bind="account.identifier">\n                      </span>\n                    </div>\n                  </div>\n                </li>\n              </ul>\n            </div>\n          </div>\n        </div>\n\n        <div class="bbm-beneficiary-select-button">\n          <button\n            class="btn btn-icon"\n            type="button"\n            data-role="beneficiary-select-button"\n            data-ng-click="$ctrl.onButtonClick()"\n            data-ng-hide="$ctrl.isButtonHidden()">\n            <span class="bbm-icon bbm-icon-lg bbm-icon-addressbook fa fa-address-book-o"></span>\n          </button>\n        </div>\n      </div>\n    </div>\n  '
	};
	
	exports.default = component;

/***/ }),

/***/ 109:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = controller;
	
	var _utils = __webpack_require__(110);
	
	/**
	 * Field names enumeration
	 * @type {Object}
	 */
	var FieldName = {
	  NAME: 'name',
	  IDENTIFIER: 'identifier'
	};
	
	var IBAN_VALIDATOR_KEY = 'uiBbIban';
	var SAME_ACCOUNT_VALIDATOR_KEY = 'sameUiBbIban';
	
	/**
	 * Component controller
	 */
	function controller($element, $scope, $timeout, $document) {
	  var ctrl = this;
	
	  var applyScope = (0, _utils.safeApply)($scope);
	
	  var nameTextfield = $element.find('ui-bbm-textfield-ng').eq(0);
	  var identifierTextfield = $element.find('ui-bbm-textfield-ng').eq(1);
	
	  var nameInput = nameTextfield.find('input').eq(0);
	  var identifierInput = identifierTextfield.find('input').eq(0);
	
	  var searchIndex = [];
	
	  var blurTimeout = void 0;
	  var hasFocus = false;
	
	  var ibanValidator = void 0;
	
	  /**
	   * ------------------------------------------------------------------------------------
	   * Public state
	   * ------------------------------------------------------------------------------------
	   */
	
	  /**
	   * UI state
	   * @type {Object}
	   */
	  var state = {};
	
	  /**
	   * Name of the active field, when component has focus.
	   * Possible values are 'name', or 'identifier', or empty string if component doesn't have focus.
	   * @type {FieldName}
	   */
	  state.activeField = '';
	
	  /**
	   * Whether the list is opened
	   * @type {boolean}
	   */
	  state.isListOpened = false;
	
	  /**
	   * Selected beneficiary
	   * @type {Object}
	   */
	  state.beneficiary = {};
	
	  /**
	   * List of matching accounts
	   * @type {Array.<Object>}
	   */
	  state.suggestions = [];
	
	  /**
	   * ------------------------------------------------------------------------------------
	   * Inner functions
	   * ------------------------------------------------------------------------------------
	   */
	
	  var closeList = function closeList() {
	    state.isListOpened = false;
	  };
	
	  var getActiveFieldValue = function getActiveFieldValue() {
	    var value = '';
	
	    if (hasFocus) {
	      value = state.activeField === FieldName.NAME ? ctrl.nameModelCtrl.$viewValue : ctrl.identifierModelCtrl.$viewValue;
	    }
	
	    return value || '';
	  };
	
	  var createBeneficiary = function createBeneficiary(name) {
	    return {
	      name: name,
	      identifier: '',
	      isNew: true
	    };
	  };
	
	  var openList = function openList() {
	    state.isListOpened = true;
	  };
	
	  var setBeneficiary = function setBeneficiary(beneficiaryToSet) {
	    state.beneficiary = beneficiaryToSet;
	    ctrl.modelCtrl.$setViewValue(beneficiaryToSet);
	  };
	
	  var convertToNewBeneficiary = function convertToNewBeneficiary() {
	    setBeneficiary(createBeneficiary(ctrl.nameModelCtrl.$viewValue));
	  };
	
	  var convertToNewBeneficiaryIfNeeded = function convertToNewBeneficiaryIfNeeded() {
	    if (ctrl.ngModel && !ctrl.ngModel.isNew) {
	      convertToNewBeneficiary();
	    }
	  };
	
	  var selectAccount = function selectAccount(account) {
	    setBeneficiary(Object.assign({}, account));
	  };
	
	  var setUntouched = function setUntouched() {
	    ctrl.nameModelCtrl.$setUntouched();
	    ctrl.identifierModelCtrl.$setUntouched();
	  };
	
	  var scrollToTop = function scrollToTop() {
	    /* eslint-disable no-param-reassign */
	    $document[0].body.scrollTop = 0;
	  };
	
	  var setFocus = function setFocus(fieldName) {
	    state.activeField = fieldName;
	    hasFocus = true;
	  };
	
	  var isButtonHidden = function isButtonHidden() {
	    return state.activeField === FieldName.NAME && ctrl.nameModelCtrl.$viewValue.length > 0;
	  };
	
	  var isExternalAccount = function isExternalAccount() {
	    return Boolean(ctrl.ngModel && (ctrl.ngModel.external || ctrl.ngModel.isNew));
	  };
	
	  var isOwnAccount = function isOwnAccount() {
	    return !isExternalAccount();
	  };
	
	  var isIbanDisabled = function isIbanDisabled() {
	    return isOwnAccount();
	  };
	
	  var isSameAccount = function isSameAccount(value) {
	    return ctrl.debitAccount && ctrl.debitAccount.IBAN === value;
	  };
	
	  var validateIban = function validateIban() {
	    var value = ctrl.identifierModelCtrl.$modelValue;
	    var isValid = isIbanDisabled() || ibanValidator(value);
	
	    ctrl.modelCtrl.$setValidity(IBAN_VALIDATOR_KEY, isValid);
	
	    return isValid;
	  };
	
	  var validateSameIban = function validateSameIban() {
	    var value = ctrl.identifierModelCtrl.$modelValue;
	    var isValid = !isSameAccount(value);
	
	    ctrl.modelCtrl.$setValidity(SAME_ACCOUNT_VALIDATOR_KEY, isValid);
	
	    return isValid;
	  };
	
	  var unsetFocus = function unsetFocus() {
	    state.activeField = '';
	    hasFocus = false;
	  };
	
	  var updateListState = function updateListState() {
	    if (getActiveFieldValue()) {
	      openList();
	    } else {
	      closeList();
	    }
	  };
	
	  var updateSuggestions = function updateSuggestions() {
	    var query = getActiveFieldValue();
	    var searchQuery = query.toLowerCase().trim();
	    var accounts = ctrl.accounts || [];
	
	    state.suggestions = accounts.filter(function (account, idx) {
	      return (0, _utils.matches)(searchQuery, searchIndex[idx]);
	    });
	
	    updateListState();
	  };
	
	  var validate = function validate() {
	    var isReady = Boolean(ctrl.accounts && state.beneficiary);
	    if (isReady) {
	      var isNew = (0, _utils.isNewBeneficiary)(ctrl.accounts, state.beneficiary);
	      var isSet = Boolean(state.beneficiary.identifier);
	
	      var createBeneficiaryValidity = true;
	
	      if (isSet && isNew && !ctrl.allowCreate) {
	        createBeneficiaryValidity = false;
	      }
	
	      ctrl.modelCtrl.$setValidity('createBeneficiary', createBeneficiaryValidity);
	      ctrl.identifierModelCtrl.$setValidity('createBeneficiary', createBeneficiaryValidity);
	    }
	  };
	
	  var $onChanges = function $onChanges(_ref) {
	    var accounts = _ref.accounts,
	        allowCreate = _ref.allowCreate,
	        ngModel = _ref.ngModel;
	
	    if (accounts && accounts.currentValue) {
	      searchIndex = (0, _utils.createSearchIndex)(ctrl.accounts);
	    }
	
	    if (ngModel && ctrl.ngModel) {
	      setBeneficiary(ctrl.ngModel);
	      setUntouched();
	      validate();
	    }
	
	    if (allowCreate) {
	      validate();
	    }
	  };
	
	  var attachValidator = function attachValidator(key, validatorFn) {
	    ctrl.identifierModelCtrl.$validators[key] = validatorFn;
	  };
	
	  var overrideIbanValidator = function overrideIbanValidator() {
	    ibanValidator = ctrl.identifierModelCtrl.$validators[IBAN_VALIDATOR_KEY];
	    attachValidator(IBAN_VALIDATOR_KEY, validateIban);
	  };
	
	  var bindDomEvents = function bindDomEvents() {
	    var onBlur = function onBlur() {
	      // Zero timeout is used in order to prevent closing the list too early,
	      // when a user taps a suggestion from the dropdown list
	      blurTimeout = $timeout(function () {
	        validate();
	        unsetFocus();
	        closeList();
	      }, 100);
	    };
	
	    nameInput.on('focus', function () {
	      return applyScope(function () {
	        $timeout.cancel(blurTimeout);
	
	        setFocus(FieldName.NAME);
	        scrollToTop();
	        updateSuggestions();
	      });
	    });
	
	    identifierInput.on('focus', function () {
	      return applyScope(function () {
	        $timeout.cancel(blurTimeout);
	
	        setFocus(FieldName.IDENTIFIER);
	        scrollToTop();
	        updateSuggestions();
	      });
	    });
	
	    nameInput.on('blur', onBlur);
	    identifierInput.on('blur', onBlur);
	  };
	
	  var $postLink = function $postLink() {
	    ctrl.modelCtrl = $element.controller('ngModel');
	    ctrl.nameModelCtrl = nameTextfield.controller('ngModel');
	    ctrl.identifierModelCtrl = identifierTextfield.controller('ngModel');
	
	    ctrl.nameModelCtrl.$viewChangeListeners.push(convertToNewBeneficiaryIfNeeded, updateSuggestions);
	
	    ctrl.identifierModelCtrl.$viewChangeListeners.push(updateSuggestions);
	
	    overrideIbanValidator();
	    attachValidator(SAME_ACCOUNT_VALIDATOR_KEY, validateSameIban);
	    bindDomEvents();
	  };
	
	  var onAccountClick = function onAccountClick(account) {
	    selectAccount(account);
	    closeList();
	  };
	
	  /**
	   * ------------------------------------------------------------------------------------
	   * Public API
	   * ------------------------------------------------------------------------------------
	   */
	
	  Object.assign(ctrl, {
	    $onChanges: $onChanges,
	    $postLink: $postLink,
	    isButtonHidden: isButtonHidden,
	    isExternalAccount: isExternalAccount,
	    isIbanDisabled: isIbanDisabled,
	    onAccountClick: onAccountClick,
	    state: state
	  });
	}

/***/ }),

/***/ 110:
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * Removes whitespaces from a given string
	 * @param {string} str
	 * @returns {string}
	 * @inner
	 */
	var removeWhitespaces = function removeWhitespaces(str) {
	  return str.replace(/\s/g, '');
	};
	
	/**
	 * @param {Object} accountA
	 * @param {Object} accountB
	 * @returns {boolean}
	 * @inner
	 */
	var isSameAccount = function isSameAccount(accountA, accountB) {
	  return Boolean((accountA.name || '').trim() === (accountB.name || '').trim() && (accountA.identifier || '').trim() === (accountB.identifier || '').trim());
	};
	
	/**
	 * Creates a search index for the given list of accounts
	 * @param {Array<object>} accounts
	 * @returns {Array<object>}
	 * @inner
	 */
	var createSearchIndex = exports.createSearchIndex = function createSearchIndex(accounts) {
	  return (accounts || []).map(function (account) {
	    var iban = (account.identifier || '').toLowerCase().trim();
	    var name = (account.name || '').toLowerCase();
	    return [name, iban, removeWhitespaces(iban)];
	  });
	};
	
	/**
	 * @param {Array.<Object>} accounts
	 * @param {Object} account
	 * @returns {boolean}
	 * @inner
	 */
	var isNewBeneficiary = exports.isNewBeneficiary = function isNewBeneficiary(accounts, account) {
	  return !accounts.some(function (item) {
	    return isSameAccount(item, account);
	  });
	};
	
	/**
	 * Returns true, if the name of the given account matches
	 * to the given query string. False otherwise.
	 * @param {string} query
	 * @param {Array<string>} accountSearchStrings
	 * @returns {boolean}
	 * @inner
	 */
	var matches = exports.matches = function matches(query, accountSearchStrings) {
	  return query && accountSearchStrings.some(function (str) {
	    return str.includes(query);
	  });
	};
	
	/*
	 * Safe way of calling $scope.$apply function.
	 * $scope.$apply will only be called if application is not in $apply or $digest phase.
	 *
	 * @param {Object} scope Angular Scope object.
	 * @param {string|Function} [exp] An angular expression to be executed.
	 * @inner
	 */
	var safeApply = exports.safeApply = function safeApply(scope) {
	  return function (exp) {
	    var phase = scope.$root && scope.$root.$$phase;
	    if (phase === '$apply' || phase === '$digest') {
	      scope.$eval(exp);
	    } else {
	      scope.$apply(exp);
	    }
	  };
	};

/***/ })

/******/ })
});
;
//# sourceMappingURL=ui-bbm-beneficiary-select-ng.js.map