import angular from 'vendor-bb-angular';
import 'angular-mocks';

import mainComponent from './index';

describe('ui-bb-notification-stripe-ng', () => {
  let $compile;
  let $componentController;
  let scope;
  let element;

  const defaultTemplate = `
    <ui-bb-notification-stripe message="Test" type="bg-danger"></ui-bb-notification-stripe>
  `;

  const templateHtmlMessage = `
    <ui-bb-notification-stripe message="<b>Test</b>" type="bg-danger"></ui-bb-notification-stripe>
  `;

  const templateHtmlMessageMalware = `
    <ui-bb-notification-stripe message="Test js injection <script>window.virus=10;</script>" type="bg-danger"></ui-bb-notification-stripe>
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
      expect(element.attr('message')).toEqual('Test');
      expect(element.attr('type')).toEqual('bg-danger');
    });

    it('should have type class added', () => {
      element = createElement();
      expect(element.find('div').hasClass('bg-danger')).toBe(true);
    });

    it('should have message added', () => {
      element = createElement();
      expect(element.find('div').find('div').html()).toEqual('Test');
    });

    it('should render message with HTML tags', () => {
      element = createElement(templateHtmlMessage);
      expect(element.find('div').find('div').html()).toEqual('<b>Test</b>');
    });

    it('should not allow to inject JS malware', () => {
      element = createElement(templateHtmlMessageMalware);
      expect(window.virus).toEqual(undefined);
    });
  });
});
