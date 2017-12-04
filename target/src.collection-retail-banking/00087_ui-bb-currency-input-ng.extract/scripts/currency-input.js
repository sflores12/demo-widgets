/**
 * @name uiBbCurrencyInputNg
 * @type {object}
 *
 * @property {string} placeholder Text to display for input's placeholder
 * @property {string} max-length Maximum number of digits allowed in whole part
 * @property {string} decimal-max-length Maximum number of digits allowed in decimal part
 * @property {array} currencies List of available currencies
 * @property {object} ng-model Currency input model
 * @property {object} messages Localized messages
 * @property {void} integer If attribute is present, decimal places input will be hidden
 */

const template = `
  <div class="currency" data-ng-show="currencies !== undefined">
    <div data-ng-if="!currencies || currencies.length === 0">
      <!-- placeholder: not to change ngModel currency value -->
      <div class="form-control" disabled="disabled">{{ placeholderCurrency }}</div>
    </div>
    <div data-ng-if="currencies.length === 1">
      <div class="form-control">{{ currency }}</div>
    </div>
    <ui-bb-dropdown-select
      data-ng-model="currency"
      data-ng-show="currencies.length > 1"
      data-ng-change="onCurrencyChange({ currency: $item });"
      data-selected-as="$option"
      data-role="ui-bb-currency-input-ng-currency">
      <ui-bb-dropdown-option
        data-option="currency.name"
        data-ng-repeat="currency in currencies"
        class="list-group-item-text"
        aria-label="{{:: messages['label.currency'] }}"
      >
        <a href="#">{{:: $option }}</a>
      </ui-bb-dropdown-option>
    </ui-bb-dropdown-select>
  </div>
  <div class="amount"
    data-ng-class="{ 'no-currency': currencies === undefined, 'no-decimals': isInteger }"
  >
    <input
      data-currency-formatting
      class="form-control"
      maxlength="{{maxLength}}"
      placeholder="{{placeholder}}"
      data-ng-model="whole"
      aria-label="{{:: messages['label.amount'] }}"
      data-role="ui-bb-currency-input-ng-amount"
    />
  </div>
  <div class="seperator" data-ng-show="!isInteger">
    <span data-role="ui-bb-currency-input-ng-seperator">{{seperator}}</span>
  </div>
  <div class="decimals" data-ng-show="!isInteger">
    <input
      data-decimals-formatting
      placeholder="{{decimalPlaceholder}}"
      maxlength="{{decimalMaxLength}}"
      class="form-control"
      data-ng-model="decimals"
      aria-label="{{:: messages['label.decimals'] }}"
      data-ng-disabled="decimalMaxLength === 0"
      data-role="ui-bb-currency-input-ng-decimals"
    />
  </div>
`;

export default ($locale, currencyAttr) => ({
  restrict: 'E',
  link: (scope, element, attrs, ngModelCtrl) => {
    const setDecimalAttrs = (decimalLength) => {
      Object.assign(scope, {
        decimalMaxLength: decimalLength,
        decimalPlaceholder: Array(decimalLength + 1).join('0'),
      });
    };
    // set default decimal field attributes
    setDecimalAttrs(2);

    Object.assign(scope, {
      seperator: $locale.NUMBER_FORMATS.DECIMAL_SEP,
      isInteger: attrs.integer !== undefined,
      placeholderCurrency: 'EUR',
    });

    const preSelectOnlyCurrency = () => {
      if (scope.currencies && scope.currencies.length === 1) {
        Object.assign(scope, {
          currency: scope.currencies[0].name,
        });
      }
    };
    // Preselect the currency if there is only 1
    preSelectOnlyCurrency();

    const decimalInput = element[0].querySelector('.decimals input');

    const validate = (amount) => {
      const isValid = amount && parseFloat(amount.value) > 0;
      ngModelCtrl.$setValidity('invalidAmount', isValid);
    };

    const fixDecimals = (decimals) => {
      if (decimals === '' || scope.decimalMaxLength === 0) {
        return undefined;
      }
      if (decimals && decimals.length < scope.decimalMaxLength) {
        return decimals + '0'.repeat(scope.decimalMaxLength - decimals.length);
      }
      if (decimals && decimals.length > scope.decimalMaxLength) {
        return decimals.substr(0, scope.decimalMaxLength);
      }
      return decimals;
    };

    const parse = (amount) => {
      const [whole, decimals] = amount && amount.value ? amount.value.toString().split('.') : [];
      return ({
        whole,
        decimals: fixDecimals(decimals),
      });
    };

    if (!scope.isInteger) {
      element
        .find('input')
        .on('keypress', (e) => {
          // if ',' or '.' was pressed move focus to decimal field
          if (e.key === ',' || e.key === '.') {
            decimalInput.focus();
          }
        });
    }

    let dropdownSelectCtrl;
    ngModelCtrl.$formatters.push((amount) => {
      if (amount && amount.currency) {
        Object.assign(scope, {
          currency: amount.currency || scope.currencies[0],
        });
        setDecimalAttrs(currencyAttr.decimalDigits(scope.currency));
      }

      Object.assign(scope, parse(amount));
      validate(amount);

      dropdownSelectCtrl = dropdownSelectCtrl || element
        .find('ui-bb-dropdown-select')
        .controller('uiBbDropdownSelect');

      // when amount changes externally
      // update dropdown model
      if (amount && amount.currency) {
        dropdownSelectCtrl.select(amount.currency);
      }

      return amount;
    });

    ngModelCtrl.$parsers.push((amount) => {
      validate(amount);

      return amount;
    });

    scope.$watch('currency + whole + decimals', () => {
      setDecimalAttrs(currencyAttr.decimalDigits(scope.currency));
      if (scope.decimals && scope.decimals.length > scope.decimalMaxLength) {
        Object.assign(scope, { decimals: scope.decimals.substr(0, scope.decimalMaxLength) });
      }

      let value = null;
      if (scope.whole || scope.decimals) {
        const decLength = scope.decimals ? scope.decimals.length : 0;
        const decimals = (scope.decimalMaxLength > 0 ? '.' : '') +
          (scope.decimals || '') + Array((scope.decimalMaxLength - decLength) + 1).join('0');
        value = `${scope.whole || '0'}${decimals}`;
      }

      const amount = {
        value,
        whole: scope.whole,
        decimals: scope.decimals,
        currency: scope.currency,
      };

      ngModelCtrl.$setViewValue(amount);
    });
  },
  require: 'ngModel',
  template,
  scope: {
    onCurrencyChange: '&',
    placeholder: '@',
    maxLength: '<',
    currencies: '<',
    /**
     * @description
     * List of messages to be shown by component
     *
     * @name uiBbCurrencyInputNg#messages
     * @type {object} messages
     */
    messages: '<',
  },
});
