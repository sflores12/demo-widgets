import angular from 'vendor-bb-angular';
import 'angular-mocks';

import mainComponent from './index';

describe('ui-bb-stepper-ng', function() {
  var $compile, $componentController,
      scope, element;

  var labels = {
    step: 'Step',
    of: 'of',
    previous: 'Previous',
    next: 'Next',
    cancel: 'Cancel',
    finish: 'Close',
  };

  var defaultTemplate = `
    <ui-bb-stepper-ng labels="labels">
      <ui-bb-stepper-step-ng title="Step">
        Content
      </ui-bb-stepper-step-ng>
    </ui-bb-stepper-ng>
  `;

  function createElement(template = defaultTemplate) {
    let compiled = $compile(template)(scope);
    scope.$digest();
    return compiled;
  }

  beforeEach(angular.mock.module(mainComponent));

  beforeEach(angular.mock.inject(function($rootScope, _$compile_, _$componentController_) {
    $compile = _$compile_;
    scope = $rootScope.$new();
    $componentController = _$componentController_;
  }));

  describe('rendering', function() {
    beforeEach(function() {
      scope.labels = labels;
    });

    it('should render component', function() {
      element = createElement();
      expect(element[0].nodeName.toLowerCase()).toBe('ui-bb-stepper-ng');
      expect(element[0].querySelectorAll('ui-bb-stepper-step-ng').length).toBe(1);
    });
  });

});
