import angular from 'vendor-bb-angular';
import 'angular-mocks';

import mainComponent from './index';

describe('ui-bb-iban-ng', () => {
  const validIBAN = 'GB82   WEST    1234    5698   7654   32';
  const invalidBBAN = 'NL91 1234 0417 1643 00';
  let $compile;
  let scope;
  let element;

  const defaultTemplate = `
    <form name="form">
      <input name="ibanInput" data-ng-model="iban" ui-bb-iban />
      <span data-ng-if="form.ibanInput.$error.uiBbIban">Error</span>
    </form>
  `;

  const createElement = (template = defaultTemplate) => {
    const compiled = $compile(template)(scope);
    scope.$digest();

    return compiled;
  };

  beforeEach(angular.mock.module(mainComponent));

  beforeEach(angular.mock.inject(($rootScope, _$compile_) => {
    $compile = _$compile_;
    scope = $rootScope.$new();
  }));

  it('should be defined', () => {
    element = createElement();
    expect(element).toBeDefined();
    expect(element.hasClass('ng-valid-ui-bb-iban')).toBeTrue();
  });

  it('should validate if input has empty value', () => {
    scope.iban = '';
    element = createElement();
    expect(element.hasClass('ng-valid-ui-bb-iban')).toBeTrue();
  });

  it('should invalidate input if incorrect iban', () => {
    scope.iban = invalidBBAN;
    element = createElement();
    expect(element.hasClass('ng-invalid-ui-bb-iban')).toBeTrue();
  });

  it('should validate input if correct iban', () => {
    scope.iban = validIBAN;
    element = createElement();
    expect(element.hasClass('ng-valid-ui-bb-iban')).toBeTrue();
  });

});
