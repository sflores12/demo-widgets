import angular from 'vendor-bb-angular';
import 'angular-mocks';

import mainComponent from './index';

describe('ui-bb-track-form-changes-ng', () => {
  let $compile, $componentController,
      scope, element, component;

  const defaultTemplate = `
    <form name="testForm" ui-bb-track-changes="trackingObject">
    </form>
  `;

  const createElement = (template = defaultTemplate) => {
    let compiled = $compile(template)(scope);
    scope.$digest();
    return compiled;
  };

  beforeEach(angular.mock.module(mainComponent));

  beforeEach(angular.mock.inject(($rootScope, _$compile_, _$componentController_) => {
    $compile = _$compile_;
    scope = $rootScope.$new();
    $componentController = _$componentController_;
  }));

  describe('tracking', () => {
    beforeEach(() => {
      scope.trackingObject = { name: 'Thomas', lastName: 'Mann' };
      element = createElement();
    });

    it('should not change initial form state', () => {
      expect(scope.testForm.$pristine).toBeTrue();
    });

    it('should not change form state when object modified and not equal to initial value', () => {
      scope.testForm.$setDirty();
      scope.trackingObject.name = 'Johnny';
      scope.$apply();

      expect(scope.testForm.$pristine).toBeFalse();
    });

    it('should change form state when object modified and equal to initial value', () => {
      scope.testForm.$setDirty();
      scope.trackingObject.name = 'Johnny';
      scope.$apply();

      expect(scope.testForm.$pristine).toBeFalse();

      scope.trackingObject.name = 'Thomas';
      scope.$apply();

      expect(scope.testForm.$pristine).toBeTrue();
    });
  });
});
