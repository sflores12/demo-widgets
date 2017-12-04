import angular from 'vendor-bb-angular';
import 'angular-mocks';

import mainComponent from './index';

describe('ui-bb-switcher-ng', function() {
  let $compile, $componentController,
      scope, element, component;

  var defaultTemplate = `
     <ui-bb-switcher-ng switcher="user.toBeSaved" size="small"></ui-bb-switcher-ng>
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

    beforeEach(() => {
      scope.user = {toBeSaved: true};
      element = createElement();
    });

    it('should render component', () => {
      let el = element[0].querySelectorAll('span.bb-switch');
      expect(el.length).toBe(1);
    });

    it('should apply small layout', () => {
      let el = element[0].querySelectorAll('span.small');
      expect(el.length).toBe(1);
    });

    it('should be checked', () => {
      let el = element[0].querySelectorAll('span.checked');
      expect(el.length).toBe(1);

      let checkbox = element[0].querySelectorAll('input');
      expect(checkbox[0].checked).toBe(true);
    });

    it('should have aria-label on checkbox', () => {
      const template = '<ui-bb-switcher-ng switcher="user.toBeSaved" size="small"' +
        'aria-label="Test label"></ui-bb-switcher-ng>';

      let checkbox = createElement(template).find('input');
      expect(checkbox.attr('aria-label')).toBe('Test label');
    });
  });
});
