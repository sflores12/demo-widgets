import angular from 'vendor-bb-angular';
import 'angular-mocks';

import mainComponent from './index';


describe('ui-bb-draft-edit-ng', function() {
  var $compile, $componentController,
      scope, element, component;

  var config = { name: 'Thomas Mann' };

  var defaultTemplate = `
    <ui-bb-draft-edit-ng config="config"
                         messages="{ formHeader: 'New message' }"></ui-bb-draft-edit-ng>
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
      scope.config = { subjectMaxLength: 10 };
      element = createElement();
    });

    it('should render component', function() {
      expect(element.find('h3').text()).toBe('New message');
    });

    it('should max length for subject input field from config', () => {
      expect(element.find('input')[0].getAttribute("maxlength")).toBe('10');
    })

    // TODO: Add few more tests
  });

});
