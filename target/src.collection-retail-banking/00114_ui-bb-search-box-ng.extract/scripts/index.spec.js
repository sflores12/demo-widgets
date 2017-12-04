import angular from 'vendor-bb-angular';
import 'angular-mocks';

import mainComponent from './index';


describe('ui-bb-search-box-ng', () => {
  let $compile, $componentController,
      scope, element, component;

  const config = {
    debounce: 200,
    labels: {
      title: 'Search',
      placeholder: 'Enter text...',
      clear: 'Clear',
      submit: 'Submit search',
    },
  };

  const defaultTemplate = `
    <ui-bb-search-box-ng config="config"></ui-bb-search-box-ng>
  `;

  const createElement = (template = defaultTemplate) => {
    let compiled = $compile(template)(scope);
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

    beforeEach(() => {
      scope.config = config;
      element = createElement();
    });

    it('should render component', () => {
      expect(element.find('div').hasClass('bb-search-box')).toBeTrue();
    });

    it('should set label from config', () => {
      expect(element.find('label').text()).toEqual(config.labels.title);
    });

    it('should use placeholder from config', () => {
      expect(element.find('input').attr('placeholder')).toEqual(config.labels.placeholder);
    });

    it('should set clear button label from config', () => {
      expect(element.find('button').eq(0).attr('aria-label')).toEqual(config.labels.clear);
    });

    it('should set submit button label from config', () => {
      expect(element.find('button').eq(1).attr('aria-label')).toEqual(config.labels.submit);
    });
  });
});
