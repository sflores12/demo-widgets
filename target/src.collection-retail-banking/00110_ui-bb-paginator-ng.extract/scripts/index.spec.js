import angular from 'vendor-bb-angular';
import 'angular-mocks';

import mainComponent from './index';

describe('ui-bb-paginator-ng', () => {
  let scope, element, innerScope, controller, model;

  const template = `
    <ui-bb-paginator-ng
      class="bb-pagination"
      data-first-text="First"
      data-last-text="Last"
      data-previous-text="Previous"
      data-next-text="Next"
      data-total-items="100"
      data-items-per-page="10"
      data-max-nav-pages="5"
      data-change-page="changePage(params)"></ui-bb-paginator-ng>
  `;

  const getPaginatorButton = (type) => {
    const listItems = element.find('ul').children();

    switch (type) {
      case 'last':
        return angular.element(listItems[listItems.length - 1]).find('a');
      case 'first':
        return angular.element(listItems[0]).find('a');
      case 'next':
        return angular.element(listItems[listItems.length - 2]).find('a');
      case 'prev':
        return angular.element(listItems[1]).find('a');
      default:
        return angular.element(listItems[type]).find('a');
    }
  };

  beforeEach(() => {
    angular.mock.module(mainComponent);

    // Create element with a directive
    element = angular.element(template);

    angular.mock.inject(($rootScope, $compile) => {
      scope = $rootScope.$new();

      // Create scope variables to pass to the directive
      scope.changePage = function(){};
      $compile(element)(scope);
      scope.$digest();

      innerScope = element.isolateScope();
      controller = innerScope.$ctrl;
    });
  });


  describe('rendering', () => {
    it('should have nav element', () => {
      const navElement = element.find('nav');
      expect(navElement).toBeDefined();
    });

    it('should render pagination buttons', () => {
      expect(element.find('ul').children().length).toEqual(11);
    });

    it('should have first/last/next/previous buttons', () => {
      const firstLink = getPaginatorButton('first');
      expect(firstLink.html()).toEqual('<span class="fa fa-angle-double-left fa-lg" aria-hidden="true"></span>');

      const lastLink = getPaginatorButton('last');
      expect(lastLink.html()).toEqual('<span class="fa fa-angle-double-right fa-lg" aria-hidden="true"></span>');

      const nextLink = getPaginatorButton('next');
      expect(nextLink.html()).toEqual('<span class="fa fa-angle-right fa-lg" aria-hidden="true"></span>');

      const prevLink = getPaginatorButton('prev');
      expect(prevLink.html()).toEqual('<span class="fa fa-angle-left fa-lg" aria-hidden="true"></span>');

    })
  });

  describe('paginating', () => {
    it('should change model according to page clicked', () => {
      spyOn(scope, 'changePage');
      expect(scope.changePage).not.toHaveBeenCalled();

      const lastLink = getPaginatorButton('last');
      lastLink.triggerHandler('click');
      scope.$digest();
      expect(scope.changePage).toHaveBeenCalledWith({ currentPage: 10 });


      const prevLink = getPaginatorButton('prev');
      prevLink.triggerHandler('click');
      scope.$digest();
      expect(scope.changePage).toHaveBeenCalledWith({ currentPage: 9 });

      const link = getPaginatorButton(4);
      link.triggerHandler('click');
      scope.$digest();
      expect(scope.changePage).toHaveBeenCalledWith({ currentPage: 6 });
    });
  });
});



