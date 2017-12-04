import angular from 'vendor-bb-angular';
import 'angular-mocks';

import mainComponent from './index';

describe('ui-bbm-product-kind-summary-ng', function() {
  var $compile, $componentController,
      scope, element, component;

  var defaultTemplate = `
    <ui-bbm-product-kind-summary-ng config="config"></ui-bbm-product-kind-summary-ng>
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
      element = createElement();
    });

    it('should be defined', function() {
      expect(element).toBeDefined();
    });
  });

});
