/**
 * @name uiBbFormatAmountComponent
 * @type {object}
 * @description
 * Format Amount Component Object
 *
 * @property {string} amount Amount string
 * @property {string} currency Currency string
 * @property {string} wrapWholeNumber Condition to wrap amount sign (if present)
 * and the whole part of number in HTML wrapper (deprecated)
 * @property {string} wrapDecimals
 * Condition to wrap decimal point and number decimals in HTML wrapper (deprecated)
 * @property {string} wrapCurrency Condition to wrap currency sign or code in
 * HTML wrapper (deprecated)
 * @property {void} wrap Condition to wrap amount sign (if present), currency sign or code,
 * whole part of the number, decimal point and number decimals in separate HTML wrappers
 * @property {void} noMap Condition to stop looking for currency mapping in the currency-map
 * @property {void} showPlusSign Condition to prepend plus sign for positive amounts
 */
const uiBbFormatAmountComponent = {
  bindings: {
    amount: '<',
    currency: '<',
  },
  template: ['$attrs', function template(attrs) {
    // output deprecation messages for old wrap attributes
    // these attributes should be removed in version 2.0.0
    if ('wrapWholeNumber' in attrs) {
      // eslint-disable-next-line max-len, no-console
      console.warn('DEPRECATED - wrap-whole-number attribute will be ignored in the next component major release. Use \'wrap\' attribute instead.');
    }
    if ('wrapDecimals' in attrs) {
      // eslint-disable-next-line max-len, no-console
      console.warn('DEPRECATED - wrap-decimals attribute will be ignored in the next component major release. Use \'wrap\' attribute instead.');
    }
    if ('wrapCurrency' in attrs) {
      // eslint-disable-next-line max-len, no-console
      console.warn('DEPRECATED - wrap-currency attribute will be ignored in the next component major release. Use \'wrap\' attribute instead.');
    }

    const wrap = 'wrap' in attrs;
    const wrapWholeNumber = wrap || 'wrapWholeNumber' in attrs;
    const wrapDecimals = wrap || 'wrapDecimals' in attrs;
    const wrapCurrency = wrap || 'wrapCurrency' in attrs;

    const wrapingEnabled = wrapWholeNumber || wrapDecimals || wrapCurrency;
    const bindMode = wrapingEnabled ? 'ng-bind-html' : 'ng-bind';
    const wrapParams = [wrapWholeNumber, wrapDecimals, wrapCurrency].join(':');
    const wrapFilter = wrapingEnabled ? ` | wrap: ${wrapParams}` : '';

    return `
      <span class="amount"
        data-role="amount"
        ng-class="$ctrl.amount < 0 ? 'amount-negative' : 'amount-positive'"
        ${bindMode}="$ctrl.amount | 
          sign: $ctrl.format.symbol:$ctrl.format.decimalDigits:${'showPlusSign' in attrs}
          ${wrapFilter}">
      </span>
    `;
  }],
  controller: ['$attrs', 'currencyRules', function controller($attrs, currencyRules) {
    const $ctrl = this;
    const $onChanges = () => {
      const format = {
        symbol: $ctrl.currency || '',
      };

      if (!('noMap' in $attrs) && $ctrl.currency) {
        Object.assign(format, currencyRules.getRule($ctrl.currency));
      }

      Object.assign($ctrl, { format });
    };

    Object.assign($ctrl, {
      $onChanges,
    });
  }],
};

export default uiBbFormatAmountComponent;
