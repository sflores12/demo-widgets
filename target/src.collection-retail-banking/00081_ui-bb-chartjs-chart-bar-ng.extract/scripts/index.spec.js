import angular from 'vendor-bb-angular';

import mainComponent from './index';

describe('ui-bb-chartjs-chart-bar-ng', function() {
  let $compile, $componentController, scope, element;
  const defaultTemplate = '<ui-bb-chartjs-chart-bar series="series" />';

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
      element = createElement()[0];
      expect(element.innerHTML.indexOf('canvas')).not.toBe(-1);
    });
  });
});
