import angular from 'vendor-bb-angular';
import 'angular-mocks';

import uiBbNumberInput from './index';

describe('ui-bb-number-input', () => {

  var scope, compile, element;

  const template = `
  <div>
    <ui-bb-number-input ng-model="number"
                        min-value="min"
                        max-value="max">
    </ui-bb-number-input>
  </div>
  `;

  const getInput = () => {
    return element[0].querySelectorAll('input')[0];
  };

  const getElementValue = () => {
    return parseInt(getInput().value);
  };

  const blur = () => {
    angular.element(getInput()).triggerHandler('blur');
  };

  const createElement = () => {
    const compiled = compile(template)(scope);
    scope.$digest();
    return compiled;
  };

  beforeEach(angular.mock.module(uiBbNumberInput));

  beforeEach(angular.mock.inject(function($rootScope, $compile) {
      scope = $rootScope.$new();
      compile = $compile;
  }));

  describe('rendering with min/max', () => {
    beforeEach(() => {
      scope.number = 4;
      scope.min = 5;
      scope.max = 20;
      element = createElement();
    });

    it('number cannot be lower than minimum after blur event', () => {
      scope.number = -10;
      scope.$digest();
      blur();
      expect(getElementValue()).toEqual(scope.min);
      expect(scope.number).toEqual(scope.min);
    });

    it('number cannot be lower than minimum after blur event', () => {
      scope.number = 2;
      scope.$digest();
      blur();
      expect(getElementValue()).toEqual(scope.min);
      expect(scope.number).toEqual(scope.min);
    });

    it('number cannot be higher than maximum', () => {
      scope.number = 30;
      scope.$digest();
      expect(getElementValue()).toEqual(scope.max);
      expect(scope.number).toEqual(scope.max);
    });
  });

  describe('rendering', () => {
    const getCreatedElementValue = () => {
      element = createElement();
      return getElementValue();
    };

    it('sets default value to given value', () => {
      scope.number = 5;
      expect(getCreatedElementValue()).toEqual(5);
    });

    it('sets default value to minimum value if value is undefined', () => {
      scope.min = 13;
      expect(getCreatedElementValue()).toEqual(13);
    });

    it('sets default value to 0 if value and minimum value are undefined', () => {
      expect(getCreatedElementValue()).toEqual(0);
    });

    it('sets default value to minimum value if value is lower than minimum', () => {
      scope.number = 10;
      scope.min = 20;
      expect(getCreatedElementValue()).toEqual(20);
    });

    it('sets default value to maximum value if value is higher than maximum', () => {
      scope.number = 20;
      scope.max = 10;
      expect(getCreatedElementValue()).toEqual(10);
    });
  });
});
