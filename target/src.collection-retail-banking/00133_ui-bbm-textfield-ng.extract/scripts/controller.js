import { TextfieldType } from './constants';
import applyNumericType from './numeric';

export default function controller($element, $timeout) {
  const ctrl = this;

  const ngModelCtrl = $element.controller('ngModel');
  const input = $element.find('input').eq(0);

  let initialValue;

  /**
   * ------------------------------------------------------------------------------------
   * Public state
   * ------------------------------------------------------------------------------------
   */

  /**
   * UI state
   * @type {object}
   */
  const state = {
    /**
     * Flag that indicates if the input field is active
     * @type {boolean}
     */
    isActive: false,
    /**
     * Input value
     * @type {string|number}
     */
    value: '',
  };

  /**
   * ------------------------------------------------------------------------------------
   * Inner functions
   * ------------------------------------------------------------------------------------
   */

  const isNumeric = () => ctrl.type === TextfieldType.NUMBER;

  const setInputValue = value => {
    state.value = value;
  };

  const normilizeValue = value => {
    const newValue = (value === undefined
      || Number.isNaN(value)) ? '' : value;

    return isNumeric() ? Number(newValue) : String(newValue);
  };

  const setInitialValue = value => {
    initialValue = normilizeValue(value);
  };

  const resetTextfieldIfNeeded = () => {
    const value = normilizeValue(ctrl.ngModel);

    if (value === initialValue) {
      ngModelCtrl.$setPristine();
      ngModelCtrl.$setUntouched();
    }
  };

  /**
   * ------------------------------------------------------------------------------------
   * Public functions
   * ------------------------------------------------------------------------------------
   */

  const setFocus = () => {
    state.isActive = true;
    input[0].focus();
    resetTextfieldIfNeeded();
  };

  const unsetFocus = () => {
    state.isActive = false;
    ngModelCtrl.$setTouched();
  };

  const updateModel = () => {
    ngModelCtrl.$setViewValue(state.value);
  };

  const clearField = () => {
    setInputValue('');
    updateModel();
    setFocus();
  };

  const hasInput = () => Boolean(state.value && state.value.length > 0);

  const isEmpty = () => !hasInput();

  /**
   * ------------------------------------------------------------------------------------
   * Angular component lifecycle hooks
   * ------------------------------------------------------------------------------------
   */

  const $onInit = () => {
    setInputValue(ctrl.ngModel || '');
    $timeout(() => {
      setInitialValue(ngModelCtrl.$viewValue);
    }, 0);
  };

  const $onChanges = ({ ngModel: ngModelChange }) => {
    if (ngModelChange) {
      setInputValue(ctrl.ngModel);
      resetTextfieldIfNeeded();
    }
  };

  const $postLink = () => {
    if (isNumeric()) {
      applyNumericType(input);
    }
  };

  $element.on('touchstart', event => {
    const target = event.target || event.srcElement;
    if (target === $element[0].querySelector('[data-action="clear-field"]')) {
      event.preventDefault();
      clearField();
    }
  });

  /**
   * ------------------------------------------------------------------------------------
   * Public API
   * ------------------------------------------------------------------------------------
   */

  Object.assign(ctrl, {
    $onInit,
    $onChanges,
    $postLink,
    setFocus,
    unsetFocus,
    updateModel,
    clearField,
    isNumeric,
    isEmpty,
    ngModelCtrl,
    state,
  });
}
