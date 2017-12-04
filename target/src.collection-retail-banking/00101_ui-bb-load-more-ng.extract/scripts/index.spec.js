import angular from 'vendor-bb-angular';
import 'angular-mocks';

import mainComponent from './index';


describe('ui-bb-load-more-ng', () => {
  var $compile, $componentController,
      scope, element, component;


  var defaultTemplate = `
    <ui-bb-load-more-ng label="Load more" on-load-more="onLoadMore(done)"></ui-bb-load-more-ng>
  `;

  function createElement(template = defaultTemplate) {
    let compiled = $compile(template)(scope);
    scope.$digest();
    return compiled;
  }

  const onLoadMore = () => {};

  beforeEach(angular.mock.module(mainComponent));

  beforeEach(angular.mock.inject(function($rootScope, _$compile_, _$componentController_) {
    $compile = _$compile_;
    scope = $rootScope.$new();
    $componentController = _$componentController_;
  }));

  describe('rendering', () => {

    beforeEach(() => {
      scope.onLoadMore = onLoadMore;
      element = createElement();
    });

    it('should render component', () => {
      expect(element.find('nav').length).toBe(1);
    });

    it('should put the label attribute as text in the button', () => {
      expect(element.find('button').text().trim()).toBe('Load more');
    });
  });

  describe('when click', () => {
    const onLoadMoreDone = (done) => {
      done();
    };

    beforeEach(() => {
      scope.onLoadMore = onLoadMore;
      spyOn(scope, 'onLoadMore').and.callThrough();
      element = createElement();
    });

    it('should call callback when click button', () => {
      element.find('button').triggerHandler('click');
      expect(scope.onLoadMore).toHaveBeenCalled();
    });

    it('should start loading when clicking button', () => {
      const nav = element.find('nav');
      element.find('button').triggerHandler('click');
      expect(nav.hasClass('disabled')).toBeTrue();
    });

    it('should stop loading when `done` callback is called', () => {
      const nav = element.find('nav');
      scope.onLoadMore = onLoadMoreDone;
      element.find('button').triggerHandler('click');
      expect(nav.hasClass('disabled')).toBeFalse();
    });
  });

});
