import angular from 'vendor-bb-angular';
import 'angular-mocks';

import mainComponent from './index';


describe('ui-bb-char-counter-ng', function() {
  var $compile, $componentController,
      scope, element, component;

  var config = { maxChars: 5, initStyling: 'text-right' };

  var defaultTemplate = `
      <ui-bb-char-counter-ng 
        text-el-query="textarea[name='description']"
        config="config"></ui-bb-char-counter-ng>
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

    it('should render component', function() {
      element = createElement();
      expect(element.hasClass('ng-isolate-scope')).toBeTrue();
    });

    xit('should add text-danger class once limit breached', function() {
      scope.newTextarea = document.createElement("textarea");
      scope.config = config;

      element = createElement(`<ui-bb-char-counter-ng 
        text-el="newTextarea"
        state="state"
        config="config"></ui-bb-char-counter-ng>`);

      scope.newTextarea.innerHTML = '123456';
      const event = new KeyboardEvent("keyup");

      expect(scope.state.isValid).toBeTrue();
      scope.newTextarea.dispatchEvent(event);
      expect(scope.state.isValid).toBeFalse();
    });

  });

});
