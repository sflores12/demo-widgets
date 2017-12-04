import angular from 'vendor-bb-angular';
import 'angular-mocks';

import uiBbMessageDirective from './index';

describe('ui-bb-message-ng', () => {
  let $compile,
    scope,
    element,
    notificationWithLink = {
      template: 'my message with {{my link}}',
      link: 'http://gogoogle.com',
      callback: () => { },
    },
    notificationWoLink = {
      template: 'my message without link',
      callback: () => { }
    };

  const defaultTemplate = `
    <ui-bb-message on-link-click="callback()" template="template" link="link"></ui-bb-message>
  `;

  const createElement = (notification = notificationWithLink, template = defaultTemplate) => {
    Object.assign(scope, notification);
    const compiled = $compile(template)(scope);
    scope.$digest();

    return compiled;
  };

  beforeEach(angular.mock.module(uiBbMessageDirective));

  beforeEach(angular.mock.inject(($rootScope, _$compile_) => {
    $compile = _$compile_;
    scope = $rootScope.$new();
  }));

  describe('rendering', () => {
    describe('render message with link', () => {
      beforeEach(() => {
        element = createElement();
      });

      it('should be defined', () => {
        expect(element).toBeDefined();
        expect(element.hasClass('ng-isolate-scope')).toBe(true);
      });

      it('should be rendered correctly', () => {
        expect(element.find('a').length).toEqual(1);
        expect(element.find('a').attr('href')).toEqual('http://gogoogle.com');
        expect(element.find('a').html()).toContain('my link');
        //TODO: it does not work with bb-test 1.2.0-alpha.5, we should figure it out
        //expect(element.find('span').html()).toContain('my message with ');
      });

      it('should fire callback on link-click', () => {
        spyOn(scope, "callback");
        element.find('a').triggerHandler('click');
        expect(scope.callback).toHaveBeenCalled();
      });
    });

    describe('render message without link', () => {
      beforeEach(() => {
        element = createElement(notificationWoLink);
      });

      it('should be defined', () => {
        expect(element).toBeDefined();
        expect(element.hasClass('ng-isolate-scope')).toBe(true);
      });

      it('should be rendered correctly', () => {
        expect(element.find('a').length).toEqual(0);
        expect(element.html()).toContain('my message without link');
      });
    });
  });
});
