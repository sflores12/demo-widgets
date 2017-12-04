import angular from 'vendor-bb-angular';
import 'angular-mocks';

import uiBbAmount from './index';


describe('ui-bb-format-amount', function() {

  var scope, compile;

  /**
   * @return {{length}}
   */
  angular.element.prototype.find = function(selector) {
    return angular.element(this[0].querySelectorAll(selector));
  };

  function createElement(template) {
    var compiled = compile(template)(scope);
    scope.$digest();
    return compiled;
  }

  // =========================================================================================

  beforeEach(angular.mock.module(uiBbAmount));

  beforeEach(angular.mock.inject(['$rootScope', '$compile', function($rootScope, $compile) {
    scope = $rootScope.$new();
    compile = $compile;
  }]));

  describe('rendering', function() {

    beforeEach(function() {
      scope.total = 1234.56;
      scope.currency = 'EUR';
    });

    it('should render component', function() {
      var element = createElement('<ui-bb-format-amount amount="total"></ui-bb-format-amount>');
      expect(element.find('.amount').length).toBe(1);
    });

    it('should wrap each part of the result in corresponding span element', function() {
      var element = createElement('<ui-bb-format-amount amount="total" currency="currency" wrap></ui-bb-format-amount>');
      expect(element.find('.amount-whole-number').html()).toBe("1,234");
      expect(element.find('.amount-decimal-points').html()).toBe(".");
      expect(element.find('.amount-decimals').html()).toBe("56");
      expect(element.find('.amount-currency').html()).toBe("€");
    });

    it('should render positive class', function() {
      var element = createElement('<ui-bb-format-amount amount="total"></ui-bb-format-amount>');
      expect(element.find('.amount').hasClass('amount-positive')).toBe(true);
    });

    it('should render negative class', function() {
      scope.total = -123;
      var element = createElement('<ui-bb-format-amount amount="total"></ui-bb-format-amount>');
      expect(element.find('.amount').hasClass('amount-negative')).toBe(true);
    });
  });

  describe('formatting', function() {

    it('should properly format amount', function() {
      scope.total = 123.1234;
      var element = createElement('<ui-bb-format-amount amount="total" currency="\'$\'"></ui-bb-format-amount>');
      expect(element.find('.amount').text()).toBe('$123.12');
    });

    it('should prepend plus sign for positive amounts if show-plus-sign attribute is set', function() {
      scope.total = 123.1234;
      var element = createElement('<ui-bb-format-amount amount="total" currency="\'$\'" show-plus-sign></ui-bb-format-amount>');
      expect(element.find('.amount').text()).toBe('+$123.12');
    });

    it('should format amount without currency symbol if currency attribute is not passed in', function() {
      scope.total = 123.1234;
      var element = createElement('<ui-bb-format-amount amount="total"></ui-bb-format-amount>');
      expect(element.find('.amount').text()).toBe('123.12');
    });

    it('should update value when model changes', function() {
      scope.total = 123.1234;
      var element = createElement('<ui-bb-format-amount amount="total" currency="\'$\'"></ui-bb-format-amount>');
      expect(element.find('.amount').text()).toBe('$123.12');

      scope.total = 1550.125;
      scope.$digest();
      expect(element.find('.amount').text()).toBe('$1,550.13');
    });
  });

  describe('currency map', function() {
    it('should format with currency symbol', function() {
      scope.total = 1550.125;
      scope.currency = 'EUR';

      var element = createElement('<ui-bb-format-amount amount="total" currency="currency"></ui-bb-format-amount>');

      expect(element.find('.amount').text()).toBe('€1,550.13');

      scope.currency = 'JPY';
      scope.$digest();

      expect(element.find('.amount').text()).toBe('¥1,550');
    });

    it('should use not use currency map if no-map attribute is present', function() {
      scope.total = 1550.125;
      scope.currency = 'EUR';

      var element = createElement('<ui-bb-format-amount amount="total" currency="currency" no-map></ui-bb-format-amount>');
      expect(element.find('.amount').text()).toBe('EUR1,550.13');
    });
  });
});
