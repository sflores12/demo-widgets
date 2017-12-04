import angular from 'vendor-bb-angular';
import 'angular-mocks';

import { COMPONENT_KEY } from './constants';

import mainComponent from './index';

describe('ui-bbm-scroll-ng:controller', () => {
  let $compile;
  let $componentController;
  let $window;
  let $document;
  let scope;
  let element;

  const defaultTemplate = `
    <ui-bbm-scroll-ng on-scroll-to-end="callback()"></ui-bbm-scroll-ng>
  `;

  function createElement(template = defaultTemplate) {
    const compiled = $compile(template)(scope);
    scope.$digest();

    return compiled;
  }

  beforeEach(angular.mock.module(mainComponent));

  beforeEach(angular.mock.inject(($rootScope, _$compile_, _$componentController_, _$window_, _$document_) => {
    $compile = _$compile_;
    $window = _$window_;
    $document = _$document_;
    scope = $rootScope.$new();
    $componentController = _$componentController_;
  }));

  describe('Methods', () => {
    describe('onScrollToEnd', () => {
      it('should add scroll listener to the element if the platform is Ios', (done) => {
        $window.BB_PLATFORM = 'ios';

        const handlers = {};
        const scrollElement = {on: () => {}};

        const element = createElement();
        element.children = () => ({
          eq: () => scrollElement,
        })

        let ctrl;

        spyOn(scrollElement, 'on').and.callFake((eventType, handler) => {
          handlers[eventType] = handler;
        });

        ctrl = $componentController(COMPONENT_KEY, {
          $scope: scope,
          $element: element,
          $document: $document,
          $window: $window,
        });

        ctrl.$onInit();

        setTimeout(() => {
          expect(handlers['scroll']).toBeTruthy();
          done();
        }, 0);
      });

      it('should add scroll listener to the document element if the platform is Android or not specified', (done) => {
        $window.BB_PLATFORM = 'android';

        const handlers = {};
        const element = createElement();
        let ctrl;

        spyOn($document, 'on').and.callFake((eventType, handler) => {
          handlers[eventType] = handler;
        });

        ctrl = $componentController(COMPONENT_KEY, {
          $scope: scope,
          $element: element,
          $document: $document,
          $window: $window
        });

        ctrl.$onInit();

        setTimeout(() => {
          expect(handlers['scroll']).toBeTruthy();
          done();
        }, 0);
      });
    });
  });
});
