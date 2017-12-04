import angular from 'vendor-bb-angular';
import 'angular-mocks';

import uiBbmCurrencyInputNg from './index';

describe('ui-bbm-currency-input-ng', () => {
  let scope;
  let compile;
  let element;

  const createElement = (attrs) => {
    const defaults = {
      maxLength: 6,
      decimalMaxLength: 2,
      required: true,
    };

    attrs = Object.assign({}, defaults, attrs);

    const compiled = compile(`
      <ui-bbm-currency-input-ng
        name="amount"
        max-length="${attrs.maxLength}"
        decimal-max-length="${attrs.decimalMaxLength}"
        ng-model="amount"
        ${attrs.required ? 'required="true"' : ''} 
      />
    `)(scope);

    scope.$digest();

    return compiled;
  };

  const findElement = (selector) => {
    return element[0].querySelector(selector);
  };

  const findIntegerInput = () => {
    return findElement('.bbm-amount-field-integer input');
  };

  const findCurrency = () => {
    return findElement('.bbm-amount-field-currency');
  };

  const findDecimalInput = () => {
    return findElement('.bbm-amount-field-fractional input');
  };

  const typeValue = (input, data) => {
    const $input = angular.element(input);
    const preventDefault = jasmine.createSpy('preventDefault');

    $input.triggerHandler({
      data,
      preventDefault,
      type: 'textInput'
    });

    if (preventDefault.calls.count() === 0) {
      $input.val($input.val() + data);

      $input.triggerHandler('input', {
        type: 'input',
      });
    }
  };

  beforeEach(angular.mock.module(uiBbmCurrencyInputNg));

  beforeEach(angular.mock.inject(($rootScope, $compile) => {
    scope = $rootScope.$new();
    compile = $compile;
  }));

  describe('Render', () => {
    beforeEach(() => {
      scope.amount = {
        currency: 'EUR',
        value: 123.45,
      };

      element = createElement({
        maxLength: 6,
        decimalMaxLength: 2,
        required: true,
      });
    });

    it('should render inputs for integer and fractional parts', () => {
      expect(findIntegerInput().value).toBe('123');
      expect(findDecimalInput().value).toBe('45');

      expect(findIntegerInput().getAttribute('type')).toBe('number');
      expect(findDecimalInput().getAttribute('type')).toBe('number');
    });

    it('should render placeholders depending on a given max length', () => {
      // 0.00
      element = createElement();

      expect(findIntegerInput().getAttribute('placeholder')).toBe('0');
      expect(findDecimalInput().getAttribute('placeholder')).toBe('00');

      // 0.0000
      element = createElement({
        decimalMaxLength: 4,
      });

      expect(findIntegerInput().getAttribute('placeholder')).toBe('0');
      expect(findDecimalInput().getAttribute('placeholder')).toBe('0000');
    });

    it('should render empty inputs if amount is 0', () => {
      scope.amount = {
        currency: 'EUR',
        value: 0,
      };

      element = createElement();

      expect(findIntegerInput().value).toBe('');
      expect(findDecimalInput().value).toBe('');
    });

    it('should render empty inputs if amount is not set', () => {
      scope.amount = {
        currency: 'EUR',
        value: null,
      };

      element = createElement();

      expect(findIntegerInput().value).toBe('');
      expect(findDecimalInput().value).toBe('');

      scope.amount = {
        currency: 'EUR',
      };

      element = createElement();

      expect(findIntegerInput().value).toBe('');
      expect(findDecimalInput().value).toBe('');
    });

    it('should render currency code', () => {
      scope.amount = {
        currency: 'USD',
        value: 0,
      };

      element = createElement();

      expect(findCurrency().textContent.trim()).toBe('USD');
    });
  });

  describe('User events', () => {
    describe('Input', () => {
      it('should update model on input', () => {
        scope.amount = {
          currency: 'EUR',
          value: 12.45,
        };

        element = createElement();

        expect(findIntegerInput().value).toBe('12');

        typeValue(findIntegerInput(), '3');

        expect(findIntegerInput().value).toBe('123');
        expect(findDecimalInput().value).toBe('45');

        expect(scope.amount).toEqual({
          currency: 'EUR',
          value: 123.45,
        });
      });

      it('should disallow invalid input', () => {
        scope.amount = {
          currency: 'EUR',
          value: 12.45,
        };

        element = createElement();

        expect(findIntegerInput().value).toBe('12');

        typeValue(findIntegerInput(), 'a');

        expect(findIntegerInput().value).toBe('12');
        expect(findDecimalInput().value).toBe('45');
      });
    });

    describe('Paste', () => {
      it('should apply pasted value', () => {
        scope.amount = {
          currency: 'EUR',
          value: 0,
        };

        element = createElement();

        expect(findIntegerInput().value).toBe('');
        expect(findDecimalInput().value).toBe('');

        typeValue(findIntegerInput(), '123.45');

        expect(findIntegerInput().value).toBe('123');
        expect(findDecimalInput().value).toBe('45');
      });
    });
  });

  describe('Model changes', () => {
    it('should update input values on model value change', () => {
      scope.amount = {
        currency: 'EUR',
        value: 123.45,
      };

      element = createElement();

      expect(findIntegerInput().value).toBe('123');
      expect(findDecimalInput().value).toBe('45');

      scope.amount = {
        currency: 'EUR',
        value: 678.9,
      };

      scope.$digest();

      expect(findIntegerInput().value).toBe('678');
      expect(findDecimalInput().value).toBe('90');

      scope.amount = {
        currency: 'EUR',
        value: 0,
      };

      scope.$digest();

      expect(findIntegerInput().value).toBe('');
      expect(findDecimalInput().value).toBe('');
    });

    it('should update currency on model currency change', () => {
      scope.amount = {
        currency: 'EUR',
        value: 123.45,
      };

      element = createElement();

      expect(findCurrency().textContent.trim()).toBe('EUR');

      scope.amount = {
        currency: 'USD',
        value: 123.45,
      };

      scope.$digest();

      expect(findCurrency().textContent.trim()).toBe('USD');
    });
  });

  describe('Validation', () => {
    it('should set model as invalid when amount is 0', () => {
      scope.amount = {
        currency: 'EUR',
        value: 0,
      };

      element = createElement();

      const ngModelCtrl = element.controller('ngModel');

      expect(ngModelCtrl.$valid).toBe(false);

      typeValue(findIntegerInput(), '1');

      expect(ngModelCtrl.$valid).toBe(true);

      scope.amount = {
        currency: 'USD',
      };
      scope.$digest();

      expect(ngModelCtrl.$valid).toBe(false);
    });
  });
});
