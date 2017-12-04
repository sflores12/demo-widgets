import angular from 'vendor-bb-angular';
import 'angular-mocks';

import mainComponent from './index';


describe('ui-bb-element-dimensions-ng', function() {
  var $compile, $componentController,
      scope, element, component;

  var defaultTemplate = `
    <div style="width: 345px;" element-dimensions="dims">1</div>
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
      scope.dims = null;
      element = createElement();
    });

    it('should expose dimensions with defined property name', function() {
      expect(scope.dims.left).not.toBe(undefined);
      expect(scope.dims.top).not.toBe(undefined);
      expect(scope.dims.right).not.toBe(undefined);
      expect(scope.dims.bottom).not.toBe(undefined);
      expect(scope.dims.width).not.toBe(undefined);
      expect(scope.dims.height).not.toBe(undefined);
    });

  });

});
