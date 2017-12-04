import angular from 'vendor-bb-angular';

import mainComponent from './index';

describe('ui-bb-confirm-ng', () => {
  let $compile, scope;

  const defaultTemplate = `<ui-bb-confirm></ui-bb-confirm>`;

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
    it('should render component with isolated scope', () => {
      const elem = createElement();
      expect(elem.hasClass('ng-isolate-scope')).toBeTrue();
    });
  });

  describe('isOpen', () => {
    it('should open dialog when value changed to true', () => {
      scope.isOpen = false;
      const element = createElement('<ui-bb-confirm is-open="isOpen"></ui-bb-confirm>');

      expect(document.querySelectorAll('.modal').length).toBe(0);

      scope.isOpen = true;
      scope.$digest();
      expect(document.querySelectorAll('.modal').length).toBe(1);
    });
  });

  describe('labels', () => {
    it('should have labels assigned to output markup', () => {
      const template = `<ui-bb-confirm is-open="true"
        labels="{
          confirm: 'Ok btn',
          cancel: 'Cancel btn',
          bodyText: 'Some body',
        }">
        </ui-bb-confirm>`;
      const element = createElement(template);

      expect(document.querySelector('.modal .btn-primary').textContent).toBe('Ok btn');
      expect(document.querySelector('.modal .btn-default').textContent).toBe('Cancel btn');
      expect(document.querySelector('.modal .modal-body').textContent).toBe('Some body');
    });

    it('should give bodyHtml label more priority over bodyText', () => {
      const template = `<ui-bb-confirm is-open="true"
        labels="{
          bodyText: 'Some body',
          bodyHtml: 'Some html',
        }">
        </ui-bb-confirm>`;
      const element = createElement(template);

      expect(document.querySelector('.modal .modal-body').textContent).toBe('Some html');
    });
  });

  describe('confirmBtnClass', () => {
    it('should add btn-primary by default', () => {
      const template = `<ui-bb-confirm is-open="true"></ui-bb-confirm>`;
      const element = createElement(template);

      expect(document.querySelector('.modal .btn.btn-primary')).not.toBeNull();
      expect(document.querySelector('.modal .btn.cutom-class')).toBeNull();
    });

    it('should add custom class', () => {
      const template = `<ui-bb-confirm is-open="true" confirm-btn-class="'custom-class'"></ui-bb-confirm>`;
      const element = createElement(template);

      expect(document.querySelector('.modal .btn.btn-primary')).toBeNull();
      expect(document.querySelector('.modal .btn.custom-class')).not.toBeNull();
    });
  });

  describe('footerClass', () => {
    it('should add custom class to the footer block', () => {
      const template = `<ui-bb-confirm is-open="true" footer-class="'fooooter'"></ui-bb-confirm>`;
      const element = createElement(template);

      expect(document.querySelector('.modal .modal-footer.fooooter')).not.toBeNull();
    });
  });

  describe('size', () => {
    it('should add size attribute to the modal dialog', () => {
      const template = `<ui-bb-confirm is-open="true" size="'custom'"></ui-bb-confirm>`;
      const element = createElement(template);

      const size = document.querySelector('.modal').attributes.size;
      expect(size).toBeDefined();
      expect(size.value).toBe('custom');
    });
  });

  describe('animation', () => {
    it('should have animation turned on by default', () => {
      const template = `<ui-bb-confirm is-open="true"></ui-bb-confirm>`;
      const element = createElement(template);

      const animation = document.querySelector('.modal').attributes['modal-animation'];
      expect(animation).toBeDefined();
      expect(animation.value).toBe('true');
    });

    it('should have animation turned off if specified', () => {
      const template = `<ui-bb-confirm is-open="true" animation="false"></ui-bb-confirm>`;
      const element = createElement(template);

      const animation = document.querySelector('.modal').attributes['modal-animation'];
      expect(animation).toBeUndefined();
    });
  });
});
