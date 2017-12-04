import angular from 'vendor-bb-angular';
import 'angular-mocks';

import mainComponent from './index';
import Controller from './controller';


const defaultTemplate = `
  <ui-bb-budget-card-ng></ui-bb-budget-card-ng>
`;

describe('ui-bb-budget-card-ng', function() {
  let $compile, $componentController,
    scope, element, component, $ctrl;

  const createController = attrs => Object.assign(new Controller(), attrs);

  const createElement = (template = defaultTemplate) => {
    let compiled = $compile(template)(scope);
    scope.$digest();
    return compiled;
  }

  beforeEach(angular.mock.module(mainComponent));

  beforeEach(angular.mock.inject(function($rootScope, _$compile_, _$componentController_) {
    $compile = _$compile_;
    scope = $rootScope.$new();
    $componentController = _$componentController_;

    element = createElement();
    $ctrl = createController({});
  }));

  describe('Rendering', function () {
    it('should render component', function() {
      expect(element.find('div').length).toBeTruthy();
    });
  });

});
