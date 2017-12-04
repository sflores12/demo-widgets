import mainComponent from './index';

describe('ui-bb-currency-input-ng', function() {
  let $compile, $componentController, scope, isolatedScope, element, decimalInput;
  const currencies = [
    { name: 'EUR' },
    { name: 'KWD' },
    { name: 'ISK' },
  ];

  var defaultTemplate = `
    <ui-bb-currency-input-ng
      ng-model="amount"
      currencies="currencies"
    >
    </ui-bb-currency-input-ng>
  `;

  var noCurrencyTemplate = `
    <ui-bb-currency-input-ng
      ng-model="amount"
    >
    </ui-bb-currency-input-ng>
  `;

  var integerTemplate = `
    <ui-bb-currency-input-ng
      ng-model="amount"
      integer
    >
    </ui-bb-currency-input-ng>
  `;

  function createElement(template = defaultTemplate) {
    let compiled = $compile(template)(scope);
    scope.$digest();
    return compiled;
  }

  describe('rendering', function() {
    beforeEach(angular.mock.module(mainComponent));

    beforeEach(angular.mock.inject(function($rootScope, _$compile_, _$componentController_) {
      $compile = _$compile_;
      scope = $rootScope.$new();
      $componentController = _$componentController_;
    }));

    beforeEach(() => {
      scope.amount = {
        value: '',
        currency: '',
      };
      scope.currencies = currencies;
      element = createElement();
      isolatedScope = element.isolateScope();
      decimalInput = element[0].querySelectorAll('input')[1];
    });

    it('should render component', () => {
      expect(element.find('ui-bb-dropdown-select').length).toEqual(1);
      expect(element.find('input').length).toEqual(2);
    });

    it('should hide currencies dropdown if currencies are not in the scope', () => {
      element = createElement(noCurrencyTemplate);
      expect(element.find('.currency').hasClass('ng-hide')).toBe(true);
      expect(element.find('input').length).toEqual(2);
    });

    it('should hide decimal places input if integer attribute is present', () => {
      element = createElement(integerTemplate);
      expect(element.find('.decimals').hasClass('ng-hide')).toBe(true);
    });

    it('should on init set decimal places length to 2', () => {
      expect(decimalInput.attributes.maxlength.value).toEqual('2');
    });

    it('should extend decimal places length for KWD', () => {
      isolatedScope.currency = currencies[1].name;
      scope.$digest();
      expect(decimalInput.attributes.maxlength.value).toEqual('3');
    });

    it('should set decimal places length to 0 and disable input for ISK', () => {
      isolatedScope.currency = currencies[2].name;
      scope.$digest();
      expect(decimalInput.attributes.maxlength.value).toEqual('0');
      expect(decimalInput.attributes.disabled.value).toEqual('disabled');
    });
  });

  describe('parsing', () => {
    beforeEach(angular.mock.module(mainComponent));

    beforeEach(angular.mock.inject(function($rootScope, _$compile_, _$componentController_) {
      $compile = _$compile_;
      scope = $rootScope.$new();
      $componentController = _$componentController_;

      scope.amount = {
        value: '',
        currency: ''
      };
      scope.currencies = currencies;
    }));

    const setupElement = (value, currency = '') => {
      scope.amount = {
        value,
        currency
      };
      element = createElement();
      isolatedScope = element.isolateScope();
    };

    it('should correctly parse no-decimals amount', () => {
      setupElement('345');
      expect(isolatedScope.whole).toEqual('345');
      expect(isolatedScope.decimals).not.toBeDefined();
    });

    it('should correctly parse amount with period at the end', () => {
      setupElement('34.');
      expect(isolatedScope.whole).toEqual('34');
      expect(isolatedScope.decimals).not.toBeDefined();
    });

    it('should correctly parse amount with decimal places', () => {
      setupElement('12.34');
      expect(isolatedScope.whole).toEqual('12');
      expect(isolatedScope.decimals).toEqual('34');
    });

    it('should correctly parse amount with numbers in decimal places where max decimal length is 0', () => {
      setupElement('12.3', 'ISK');
      expect(isolatedScope.whole).toEqual('12');
      expect(isolatedScope.decimals).not.toBeDefined()
    });

    it('should correctly parse amount with unfinished decimal places where max decimal length is 2', () => {
      setupElement('12.3', 'EUR');
      expect(isolatedScope.whole).toEqual('12');
      expect(isolatedScope.decimals).toEqual('30');
    });

    it('should correctly parse amount with unfinished decimal places where max decimal length is 3', () => {
      setupElement('12.3', 'KWD');
      isolatedScope.currency = 'KWD';
      isolatedScope.$digest();
      expect(isolatedScope.whole).toEqual('12');
      expect(isolatedScope.decimals).toEqual('300');
    });
  });
});
