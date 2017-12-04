import angular from 'vendor-bb-angular';

import mainComponent from './index';

describe('ui-bb-modal-ng', () => {
  let $compile, scope;

  const defaultTemplate = `<ui-bb-modal><div></div></ui-bb-modal>`;

  const createElement = (template = defaultTemplate) => {
    let compiled = $compile(template)(scope);
    scope.$digest();
    return compiled;
  };

  beforeEach(angular.mock.module(mainComponent));

  beforeEach(angular.mock.inject(($rootScope, _$compile_) => {
    $compile = _$compile_;
    scope = $rootScope.$new();
  }));

  afterEach(() => {
    scope.$destroy();

    const modal = document.querySelector('.modal');
    if (modal) {
      modal.parentNode.removeChild(modal);
    }
  });

  describe('rendering', () => {
    it('should render component with scope', () => {
      const elem = createElement();
      expect(elem.hasClass('ng-scope')).toBeTrue();
    });
  });

  describe('isOpen', () => {
    it('should open dialog when value changed to true', () => {
      scope.isOpen = false;
      const element = createElement('<ui-bb-modal is-open="isOpen"><div></div></ui-bb-modal>');

      expect(document.querySelectorAll('.modal').length).toBe(0);

      scope.isOpen = true;
      scope.$digest();
      expect(document.querySelectorAll('.modal').length).toBe(1);
    });
  });

  describe('size', () => {
    it('should add size attribute to the modal dialog', () => {
      const template = `<ui-bb-modal is-open="true" size="'custom'"><div></div></ui-bb-modal>`;
      const element = createElement(template);

      const size = document.querySelector('.modal').attributes.size;
      expect(size).toBeDefined();
      expect(size.value).toBe('custom');
    });
  });

  describe('animation', () => {
    it('should have animation turned on by default', () => {
      const template = `<ui-bb-modal is-open="true"><div></div></ui-bb-modal>`;
      const element = createElement(template);

      const animation = document.querySelector('.modal').attributes['modal-animation'];
      expect(animation).toBeDefined();
      expect(animation.value).toBe('true');
    });

    it('should have animation turned off if specified', () => {
      const template = `<ui-bb-modal is-open="true" animation="false"><div></div></ui-bb-modal>`;
      const element = createElement(template);

      const animation = document.querySelector('.modal').attributes['modal-animation'];
      expect(animation).toBeUndefined();
    });
  });
});
