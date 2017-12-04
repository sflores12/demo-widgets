import angular from 'vendor-bb-angular';
import 'angular-mocks';

import mainComponent from './index';


describe('ui-bb-ellipsis-tooltip-ng', () => {
  let $compile, $componentController,
      scope, element, component;

  const defaultTemplate = `
    <ui-bb-ellipsis-tooltip-ng tooltip="Some very long text that do not fit in the parent space">
      Some very long text that do not fit in the parent space
    </ui-bb-ellipsis-tooltip-ng>
  `;

  const createElement = (template = defaultTemplate) => {
    let compiled = $compile(template)(scope);
    scope.$digest();
    return compiled;
  };

  beforeEach(angular.mock.module(mainComponent));

  beforeEach(angular.mock.inject(($rootScope, _$compile_, _$componentController_) => {
    $compile = _$compile_;
    scope = $rootScope.$new();
    $componentController = _$componentController_;
  }));

  describe('rendering', () => {
    beforeEach(() => {
      element = createElement();
    });

    it('should render component', () => {
      expect(element.find('span').hasClass('bb-ellipsis')).toBeTrue();
    });
  });

  describe('behavior', () => {
    beforeEach(() => {
      element = createElement();
      document.body.appendChild(element[0]);
    });

    afterEach(() => {
      element.remove();
      element = null;
    });

    it('should set open flag to true when hovering element and text is truncated', () => {
      const isolatedScope = element.isolateScope();
      element[0].style.cssText = 'width: 10px';
      element.triggerHandler('mouseenter');
      expect(isolatedScope.tooltipIsOpen).toBeTrue();
    });

    it('should set open flag to false when hovering element and text is not truncated', () => {
      const isolatedScope = element.isolateScope();
      element.triggerHandler('mouseenter');
      expect(isolatedScope.tooltipIsOpen).toBeFalse();
    });

    it('should set open flag to true when leaving element regardless text is truncated', () => {
      const isolatedScope = element.isolateScope();
      element[0].style.cssText = 'width: 10px';
      element.triggerHandler('mouseenter');
      element.triggerHandler('mouseleave');
      expect(isolatedScope.tooltipIsOpen).toBeFalse();
    })
  })

});
