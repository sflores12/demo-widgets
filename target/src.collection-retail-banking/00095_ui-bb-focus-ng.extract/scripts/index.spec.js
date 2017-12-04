import angular from 'vendor-bb-angular';
import 'angular-mocks';

import mainComponent from './index';

describe('ui-bb-focus-ng', () => {
  var $compile, scope, element, $timeout;

  var defaultTemplate = `
    <input type="text" name="fullName" ui-bb-focus="focusElement">
  `;

  const createElement = (template = defaultTemplate) => {
    return $compile(template)(scope);
  }

  beforeEach(angular.mock.module(mainComponent));

  beforeEach(angular.mock.inject(function($rootScope, _$compile_, _$timeout_) {
    $compile = _$compile_;
    scope = $rootScope.$new();
    $timeout = _$timeout_;

  }));

  it('should focus element on successful condition', () => {
    element = createElement()[0];
    spyOn(element, 'focus');

    scope.focusElement = false;
    scope.$digest();

    expect(element.focus).not.toHaveBeenCalled();

    scope.focusElement = true;
    scope.$digest();
    $timeout.flush();

    expect(element.focus).toHaveBeenCalled();
  });
});
