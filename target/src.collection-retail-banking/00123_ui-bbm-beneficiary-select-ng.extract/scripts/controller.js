import {
  createSearchIndex,
  isNewBeneficiary,
  matches,
  safeApply,
} from './utils';

/**
 * Field names enumeration
 * @type {Object}
 */
const FieldName = {
  NAME: 'name',
  IDENTIFIER: 'identifier',
};

const IBAN_VALIDATOR_KEY = 'uiBbIban';
const SAME_ACCOUNT_VALIDATOR_KEY = 'sameUiBbIban';

/**
 * Component controller
 */
export default function controller($element, $scope, $timeout, $document) {
  const ctrl = this;

  const applyScope = safeApply($scope);

  const nameTextfield = $element.find('ui-bbm-textfield-ng').eq(0);
  const identifierTextfield = $element.find('ui-bbm-textfield-ng').eq(1);

  const nameInput = nameTextfield.find('input').eq(0);
  const identifierInput = identifierTextfield.find('input').eq(0);

  let searchIndex = [];

  let blurTimeout;
  let hasFocus = false;

  let ibanValidator;

  /**
   * ------------------------------------------------------------------------------------
   * Public state
   * ------------------------------------------------------------------------------------
   */

  /**
   * UI state
   * @type {Object}
   */
  const state = {};

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

  const closeList = () => {
    state.isListOpened = false;
  };

  const getActiveFieldValue = () => {
    let value = '';

    if (hasFocus) {
      value = (state.activeField === FieldName.NAME)
        ? ctrl.nameModelCtrl.$viewValue
        : ctrl.identifierModelCtrl.$viewValue;
    }

    return value || '';
  };

  const createBeneficiary = name => ({
    name,
    identifier: '',
    isNew: true,
  });

  const openList = () => {
    state.isListOpened = true;
  };

  const setBeneficiary = beneficiaryToSet => {
    state.beneficiary = beneficiaryToSet;
    ctrl.modelCtrl.$setViewValue(beneficiaryToSet);
  };

  const convertToNewBeneficiary = () => {
    setBeneficiary(createBeneficiary(ctrl.nameModelCtrl.$viewValue));
  };

  const convertToNewBeneficiaryIfNeeded = () => {
    if (ctrl.ngModel && !ctrl.ngModel.isNew) {
      convertToNewBeneficiary();
    }
  };

  const selectAccount = account => {
    setBeneficiary(Object.assign({}, account));
  };

  const setUntouched = () => {
    ctrl.nameModelCtrl.$setUntouched();
    ctrl.identifierModelCtrl.$setUntouched();
  };

  const scrollToTop = () => {
    /* eslint-disable no-param-reassign */
    $document[0].body.scrollTop = 0;
  };

  const setFocus = fieldName => {
    state.activeField = fieldName;
    hasFocus = true;
  };

  const isButtonHidden = () => (
    state.activeField === FieldName.NAME && ctrl.nameModelCtrl.$viewValue.length > 0
  );

  const isExternalAccount = () => Boolean(
    ctrl.ngModel && (ctrl.ngModel.external || ctrl.ngModel.isNew)
  );

  const isOwnAccount = () => !isExternalAccount();

  const isIbanDisabled = () => isOwnAccount();

  const isSameAccount = value => (
    ctrl.debitAccount && ctrl.debitAccount.IBAN === value
  );

  const validateIban = () => {
    const value = ctrl.identifierModelCtrl.$modelValue;
    const isValid = isIbanDisabled() || ibanValidator(value);

    ctrl.modelCtrl.$setValidity(IBAN_VALIDATOR_KEY, isValid);

    return isValid;
  };

  const validateSameIban = () => {
    const value = ctrl.identifierModelCtrl.$modelValue;
    const isValid = !isSameAccount(value);

    ctrl.modelCtrl.$setValidity(SAME_ACCOUNT_VALIDATOR_KEY, isValid);

    return isValid;
  };

  const unsetFocus = () => {
    state.activeField = '';
    hasFocus = false;
  };

  const updateListState = () => {
    if (getActiveFieldValue()) {
      openList();
    } else {
      closeList();
    }
  };

  const updateSuggestions = () => {
    const query = getActiveFieldValue();
    const searchQuery = query.toLowerCase().trim();
    const accounts = ctrl.accounts || [];

    state.suggestions = accounts.filter((account, idx) => (
      matches(searchQuery, searchIndex[idx])
    ));

    updateListState();
  };

  const validate = () => {
    const isReady = Boolean(ctrl.accounts && state.beneficiary);
    if (isReady) {
      const isNew = isNewBeneficiary(ctrl.accounts, state.beneficiary);
      const isSet = Boolean(state.beneficiary.identifier);

      let createBeneficiaryValidity = true;

      if (isSet && isNew && !ctrl.allowCreate) {
        createBeneficiaryValidity = false;
      }

      ctrl.modelCtrl.$setValidity('createBeneficiary', createBeneficiaryValidity);
      ctrl.identifierModelCtrl.$setValidity('createBeneficiary', createBeneficiaryValidity);
    }
  };

  const $onChanges = ({ accounts, allowCreate, ngModel }) => {
    if (accounts && accounts.currentValue) {
      searchIndex = createSearchIndex(ctrl.accounts);
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

  const attachValidator = (key, validatorFn) => {
    ctrl.identifierModelCtrl.$validators[key] = validatorFn;
  };

  const overrideIbanValidator = () => {
    ibanValidator = ctrl.identifierModelCtrl.$validators[IBAN_VALIDATOR_KEY];
    attachValidator(IBAN_VALIDATOR_KEY, validateIban);
  };

  const bindDomEvents = () => {
    const onBlur = () => {
      // Zero timeout is used in order to prevent closing the list too early,
      // when a user taps a suggestion from the dropdown list
      blurTimeout = $timeout(() => {
        validate();
        unsetFocus();
        closeList();
      }, 100);
    };

    nameInput.on('focus', () => applyScope(() => {
      $timeout.cancel(blurTimeout);

      setFocus(FieldName.NAME);
      scrollToTop();
      updateSuggestions();
    }));

    identifierInput.on('focus', () => applyScope(() => {
      $timeout.cancel(blurTimeout);

      setFocus(FieldName.IDENTIFIER);
      scrollToTop();
      updateSuggestions();
    }));

    nameInput.on('blur', onBlur);
    identifierInput.on('blur', onBlur);
  };

  const $postLink = () => {
    ctrl.modelCtrl = $element.controller('ngModel');
    ctrl.nameModelCtrl = nameTextfield.controller('ngModel');
    ctrl.identifierModelCtrl = identifierTextfield.controller('ngModel');

    ctrl.nameModelCtrl.$viewChangeListeners.push(
      convertToNewBeneficiaryIfNeeded,
      updateSuggestions
    );

    ctrl.identifierModelCtrl.$viewChangeListeners.push(
      updateSuggestions
    );

    overrideIbanValidator();
    attachValidator(SAME_ACCOUNT_VALIDATOR_KEY, validateSameIban);
    bindDomEvents();
  };

  const onAccountClick = (account) => {
    selectAccount(account);
    closeList();
  };

  /**
   * ------------------------------------------------------------------------------------
   * Public API
   * ------------------------------------------------------------------------------------
   */

  Object.assign(ctrl, {
    $onChanges,
    $postLink,
    isButtonHidden,
    isExternalAccount,
    isIbanDisabled,
    onAccountClick,
    state,
  });
}
