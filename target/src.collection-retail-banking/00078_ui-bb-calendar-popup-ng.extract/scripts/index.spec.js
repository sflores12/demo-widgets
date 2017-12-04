import angular from 'vendor-bb-angular';

import ModuleKey from './index';

describe('ui-bb-calendar-popup-ng', () => {
  let $compile, scope, element, ctrl;

  const defaultTemplate = `
    <ui-bb-calendar-popup data-date="date"
      data-date-range="dateRange"
      data-config="config"
      data-messages="messages"
      data-disabled="disabled"
      data-on-click="onClick"
      data-on-focus="onFocus">
    </ui-bb-calendar-popup>
  `;

  const compileComponent = (template = defaultTemplate) => {
    element = angular.element(template);

    $compile(element)(scope);
    scope.$digest();

    ctrl = element.isolateScope().$ctrl;
  };

  beforeEach(angular.mock.module(ModuleKey));
  beforeEach(angular.mock.inject((_$compile_, $rootScope) => {
    $compile = _$compile_;
    scope = $rootScope.$new();
  }));

  describe('rendering', () => {

    beforeEach(() => {
      scope.date = null;
      compileComponent();
    });

    it('should render component', () => {
      expect(element.children().length).toEqual(2);
      expect(element.find('.input-group').length).toEqual(1);
      expect(element.find('[uib-datepicker-popup-wrap]').length).toEqual(1);
    });

    it('should render input field', () => {
      const input = element.find('.input-group > .form-control');

      expect(input.attr('placeholder')).not.toEqual('');
      expect(input.val()).toEqual('');

      // if date is preset
      scope.date = new Date('8/16/17');
      compileComponent();

      expect(input.val()).toEqual('8/16/17');
    });

    it('should render calendar button', () => {
      scope.messages = { calendarBtn: 'Calendar' };
      compileComponent();

      const button = element.find('.input-group > .input-group-btn > .btn');

      expect(button.attr('aria-label')).toEqual('Calendar');
      expect(button.find('.fa.fa-calendar').length).toEqual(1);
    });

    it('should render input field when date-range picker is enabled', () => {
      scope.dateRange = { startDate: null, endDate: null };
      compileComponent();

      const input = element.find('.input-group > .form-control');

      expect(input.val()).toEqual('');

      // if date-range is preset
      scope.dateRange = { startDate: new Date('8/16/17'), endDate: new Date('8/20/17') };
      compileComponent();

      expect(input.val()).toEqual('8/16/17 - 8/20/17');
    });

  });

  describe('toggling', () => {

    beforeEach(() => {
      compileComponent();
    });

    it('should show datepicker when clicking', () => {
      const popupWrap = element.find('[uib-datepicker-popup-wrap]');

      expect(popupWrap.children().length).toEqual(0);
      element.find('.input-group').triggerHandler('click');
      expect(popupWrap.children().length).toEqual(1);
    });

    it('shouldn\'t show datepicker when clicking if disabled', () => {
      scope.onClick = false;
      compileComponent();

      const popupWrap = element.find('[uib-datepicker-popup-wrap]');

      expect(popupWrap.children().length).toEqual(0);
      element.find('.input-group').triggerHandler('click');
      expect(popupWrap.children().length).toEqual(0);
    });

    it('shouldn\'t show datepicker when focusing', () => {
      const popupWrap = element.find('[uib-datepicker-popup-wrap]');

      expect(popupWrap.children().length).toEqual(0);
      element.find('.input-group').triggerHandler('focus');
      expect(popupWrap.children().length).toEqual(0);
    });

    it('should show datepicker when focusing if enabled', () => {
      scope.onFocus = true;
      compileComponent();

      const popupWrap = element.find('[uib-datepicker-popup-wrap]');

      expect(popupWrap.children().length).toEqual(0);
      element.find('.input-group').triggerHandler('focus');
      expect(popupWrap.children().length).toEqual(1);
    });

    it('shouldn\'t show datepicker when disabled option is set', () => {
      scope.disabled = true;
      // also test with focus event
      scope.onFocus = true;
      compileComponent();

      const popupWrap = element.find('[uib-datepicker-popup-wrap]');

      expect(popupWrap.children().length).toEqual(0);
      element.find('.input-group').triggerHandler('click');
      expect(popupWrap.children().length).toEqual(0);
      element.find('.input-group').triggerHandler('focus');
      expect(popupWrap.children().length).toEqual(0);
    });

  });

});
