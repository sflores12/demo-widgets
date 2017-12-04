import angular from 'vendor-bb-angular';
import 'angular-mocks';

import mainComponent from './index';

describe('ui-bb-inline-status-ng', () => {
  let $compile;
  let $componentController;
  let scope;
  let element;

  const defaultTemplate = `
    <ui-bb-inline-status show-spinner="showSpinner" text="text"></ui-bb-inline-status>
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
      expect(element.hasClass('ng-isolate-scope')).toBe(true);
    });

    it('should have correct attributes', () => {
      element = createElement();
      expect(element.attr('text')).toEqual('text');
      expect(element.attr('show-spinner')).toEqual('showSpinner');
    });

    it('should have children elements with corresponding class names', function() {
      scope.showSpinner = true;
      scope.text = 'loading';
      element = createElement();

      expect(element.find('i').eq(0).hasClass('fa-spinner')).toEqual(true);
    });

    it('should show spinner and text', () => {
      scope.showSpinner = true;
      scope.text = 'loading';

      element = createElement();
      const textEl = element.find('span').eq(0);
      const spinnerEl = element.find('i').eq(1);

      expect(textEl.text()).toEqual('loading');
      expect(spinnerEl).toBeDefined();
    });

    it('should show text and no spinner', () => {
      scope.showSpinner = true;
      scope.text = 'loading';

      element = createElement();
      const textEl = element.find('span').eq(0);
      const spinnerEl = element.find('i').eq(1);

      expect(textEl.text()).toEqual('loading');
      expect(spinnerEl.length).toEqual(0);
    });
  });
});
