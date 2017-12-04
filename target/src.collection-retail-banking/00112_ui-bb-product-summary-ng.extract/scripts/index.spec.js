import angular from 'vendor-bb-angular';
import 'angular-mocks';

import mainComponent from './index';

describe('ui-bb-product-summary-ng', function() {
  var $compile, $componentController,
      scope, element, component;

  var defaultTemplate = `
    <ui-bb-product-summary-ng product-name="name"></ui-bb-product-summary-ng>
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
      scope.name = 'Thomas Mann';
      element = createElement();
    });

    it('should render component', function() {
      expect(element.find('h3').text()).toContain(scope.name);
    });
  });

});
