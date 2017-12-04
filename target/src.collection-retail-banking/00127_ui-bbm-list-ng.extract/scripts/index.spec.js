import angular from 'vendor-bb-angular';
import 'angular-mocks';

import mainComponent from './index';

describe('ui-bbm-list-ng', () => {
  let $compile;
  let $componentController;
  let scope;
  let element;

  const defaultTemplate = `
    <ui-bbm-list on-scroll-to-end="callback()"></ui-bbm-list>
  `;

  function createElement(template = defaultTemplate) {
    const compiled = $compile(template)(scope);
    scope.$digest();

    return compiled;
  }

  beforeEach(angular.mock.module(mainComponent));

  beforeEach(angular.mock.inject(($rootScope, _$compile_, _$componentController_) => {
    $compile = _$compile_;
    scope = $rootScope.$new();
    $componentController = _$componentController_;
  }));

  describe('rendering', () => {
    it('should be defined', () => {
      element = createElement();
      expect(element).toBeDefined();
    });

    it('should have correct attributes', () => {
      element = createElement();      
      expect(element.attr('on-scroll-to-end')).toEqual('callback()');
    });

  });
});