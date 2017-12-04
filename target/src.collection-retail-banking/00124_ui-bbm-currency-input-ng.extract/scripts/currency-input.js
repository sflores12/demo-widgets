/* global document */
import * as utils from './utils';

const template = `
  <div class="bbm-amount-field" ng-class="{'bbm-amount-field-active': focused}">
    <div class="bbm-amount-field-currency">
      <div
        class="bbm-amount-currency"
        data-ng-bind="currency">
      </div>
    </div>
    <div class="bbm-amount-field-integer">
      <div class="bbm-text-field">
        <label class="bbm-text-field-control bbm-form-control">
          <input
            numeric-max-length
            class="bbm-text-field-input bbm-form-control-value"
            max-length="maxLength"
            placeholder="0"
            type="number"
            min="0"
            pattern="[0-9]*"
            step="1"
            data-ng-focus="onFocus()"
            data-ng-value="integer"
            data-role="currency-input-integer-field"
            autocomplete="off"
            autocorrect="off"
            autocapitalize="off">
          </input>
        </label>
      </div>
    </div>
    <div class="bbm-amount-field-fractional">
      <div class="bbm-text-field">
        <label class="bbm-text-field-control bbm-form-control">
          <input
            numeric-max-length
            class="bbm-text-field-input bbm-form-control-value"
            placeholder="{{::decimalPlaceholder}}"
            max-length="decimalMaxLength"
            class="bbm-form-control-value"
            type="number"
            pattern="[0-9]*"
            min="0"
            step="1"
            ng-focus="onFocus()"
            data-ng-value="decimal"
            data-role="currency-input-decimal-field"
            autocomplete="off"
            autocorrect="off"
            autocapitalize="off">
          </input>
        </label>
      </div>
    </div>
    <div class="bbm-amount-decimal-mark">
      <span
        class="bbm-amount-decimal-mark-symbol"
        data-ng-bind="decimalMark">
      </span>
    </div>
    <div
      class="bbm-amount-field-value"      
      data-ng-bind="formattedAmount"
      aria-hidden="true">
    </div>
  </div>
`;

/**
 * @name uiBbmCurrencyInputNg
 * @type {object}
 *
 * @property {string} max-length Maximum number of digits allowed in integer part
 * @property {string} decimal-max-length Maximum number of digits allowed in decimal part
 * @property {object} ng-model Currency input model
 */
export default ($timeout) => ({
  restrict: 'E',
  require: 'ngModel',
  template,
  scope: {
    maxLength: '<',
    decimalMaxLength: '<',
  },
  link: (scope, element, attrs, ngModelCtrl) => {
    let amount = 0;
    let currency;

    const inputs = element.find('input');

    const integerInput = inputs.eq(0);
    const decimalInput = inputs.eq(1);

    /**
     * Applies changes to the model
     * @inner
     */
    const applyChanges = () => {
      ngModelCtrl.$setViewValue(ngModelCtrl.$modelValue);
    };

    /**
     * Returns formatted integer and decimal
     * @param {object} parts
     * @inner
     */
    const format = (parts) => {
      let { integer, decimal } = parts;

      // "0.00" => "."
      if (amount === 0) {
        integer = '';
        decimal = '';
      }

      // ".25" => "0.25"
      if (amount > 0) {
        integer = utils.padRight(integer, 1, '0');
        decimal = utils.padRight(decimal, scope.decimalMaxLength, '0');
      }

      return { integer, decimal };
    };

    /**
     * @return {boolean}
     * @inner
     */
    const hasFocus = () => {
      const activeEl = document.activeElement;
      return activeEl && (activeEl === integerInput[0] || activeEl === decimalInput[0]);
    };

    /**
     * @inner
     */
    const onFocus = () => {
      Object.assign(scope, {
        focused: true,
      });
    };

    /**
     * Renders changes
     * @inner
     */
    const render = () => {
      utils.setInputValue(integerInput, scope.integer);
      utils.setInputValue(decimalInput, scope.decimal);
    };

    /**
     * @param {number} value
     * @inner
     */
    const setAmount = (value) => {
      amount = parseFloat(value, 10);
      Object.assign(scope, {
        formattedAmount: utils.formatAmount(amount, scope.decimalMaxLength),
      });
    };

    /**
     * @param {object} newCurrency
     * @inner
     */
    const setCurrency = (newCurrency) => {
      currency = newCurrency;
      Object.assign(scope, {
        currencySymbol: utils.getCurrencySymbol(currency),
        currency,
      });
    };

    /**
     * Sets the given integer and decimal to the scope
     * @param {object} parts
     * @inner
     */
    const setIntegerDecimal = (parts) => {
      Object.assign(scope, parts);

      applyChanges();
      render();
    };

    /**
     * @param {string} amountStr
     * @return {object}
     * @inner
     */
    const splitAmount = (amountStr) => (
      utils.splitAmount(amountStr, scope.maxLength, scope.decimalMaxLength)
    );

    /**
     * @inner
     */
    const validate = () => {
      ngModelCtrl.$setValidity('required', typeof amount === 'number' && amount > 0);
    };

    // Convert the amount value from a string to a number
    ngModelCtrl.$parsers.push((modelValue) => {
      setAmount(utils.parseAmount(modelValue.value));
      return {
        currency: modelValue.currency,
        value: amount,
      };
    });

    // Format on blur
    element.on('focusout', () => {
      $timeout(() => {
        if (!hasFocus()) {
          const { integer, decimal } = scope;
          const formatted = format({ integer, decimal });

          setIntegerDecimal(formatted);
          ngModelCtrl.$setTouched();

          Object.assign(scope, {
            focused: false,
          });
        }
      }, 0);
    });

    // Normalize the integer on a user input
    integerInput.on('input', () => {
      const val = integerInput.val();
      const normalizedVal = utils.stripLeadingZeros(val);

      utils.setInputValue(integerInput, normalizedVal);
    });

    // Update the scope on a user input
    inputs.on('input', () => {
      const integer = integerInput.val();
      const decimal = decimalInput.val();

      setIntegerDecimal({ integer, decimal });
    });

    // NOTE: Eventually this event is supposed to be replaced with "beforeInput" event
    // See https://bugs.chromium.org/p/chromium/issues/detail?id=382814 for details
    inputs.on('textInput', (evt) => {
      const input = evt.data;
      const isPaste = input.length > 1;

      // Handle cases when there is no amount,
      // and the user pastes an amount, that has a decimal part
      if (amount === 0 && isPaste && utils.isInputValid(input, true)) {
        evt.preventDefault();
        setIntegerDecimal(splitAmount(input));
      }

      // Otherwise just disable an invalid input
      if (!utils.isInputValid(input)) {
        evt.preventDefault();
      }
    });

    // Move the focus to the decimal input when period is entered
    integerInput.on('textInput', (evt) => {
      if (evt.data === '.') {
        decimalInput[0].focus();
      }
    });

    // Split the model value into an integer and a decimal parts on every value change
    scope.$watch(() => ngModelCtrl.$modelValue, modelValue => {
      if (modelValue) {
        const value = modelValue.value || 0;

        validate();
        setCurrency(modelValue.currency);

        if (value !== amount) {
          setAmount(value);
          setIntegerDecimal(splitAmount(amount));
        }
      }
    });

    // Update the model on integer or decimal change
    scope.$watch('integer + decimal', () => {
      const { integer, decimal } = scope;
      if (integer !== undefined || decimal !== undefined) {
        ngModelCtrl.$setViewValue({
          value: `${integer || ''}.${decimal || ''}`,
          currency,
        });
      }
    });

    Object.assign(scope, {
      formattedAmount: utils.formatAmount(amount, scope.decimalMaxLength),
      decimalMark: utils.getDecimalMark(),
      decimalPlaceholder: utils.padRight('', scope.decimalMaxLength, '0'),
      focused: false,
      onFocus,
    });
  },
});
