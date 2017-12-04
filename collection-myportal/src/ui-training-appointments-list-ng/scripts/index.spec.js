import angular from 'vendor-bb-angular';
import 'angular-mocks';

import mainComponent from './index';


describe('ui-training-appointments-list-ng', function() {
  var $compile, $componentController,
      scope, element, component;

  var config = { name: 'Thomas Mann' };

  var defaultTemplate = `
    <ui-training-appointments-list-ng config="config"></ui-training-appointments-list-ng>
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
      scope.config = { name: 'Thomas Mann' };
      element = createElement();
    });

    it('should render component', function() {
      expect(element.find('h4').text()).toBe(scope.config.name);
    });
  });

});
