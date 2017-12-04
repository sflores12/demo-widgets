import angular from 'vendor-bb-angular';
import 'angular-mocks';

import mainComponent from './index';


describe('ui-bb-sortable-column-ng', () => {
  let $compile, $componentController,
      scope, element, component;

  const options = {
    key: 'test',
    direction: 'DESC',
  };

  const defaultTemplate = `
    <span ui-bb-sortable-column-ng
      options="options"
      active="active"
      on-sort="onSort(key, direction)">
      Test
    </span>
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

  beforeEach(() => {
    scope.options = Object.assign({}, options);
    scope.active = true;
    scope.onSort = jasmine.createSpy('onSort');
  });

  describe('rendering', () => {
    it('should render component', () => {
      element = createElement();
      expect(element.find('ng-transclude').text().trim()).toBe('Test');
    });

    it('should add class sortable if key is provided', ()=> {
      element = createElement();
      expect(element.find('span')[0].className).toEqual('ng-scope bb-sortable');
    });

    it('should not add class sortable if key is not provided', ()=> {
      scope.options.key = null;
      element = createElement();
      expect(element.find('span')[0].className).toEqual('ng-scope');
    });

    it('shouldn\'t render icon if no key', () => {
      scope.options.key = null;
      element = createElement();
      expect(element.find('i').length).toEqual(0);
    })

    it('should hide icon if not active', () =>{
      scope.active = false;
      element = createElement();
      expect(element.find('i').hasClass('invisible')).toBeTrue();
    });

    it('should show caret up if direction is ascending', () => {
      scope.options.direction = 'ASC';
      element = createElement();
      expect(element.find('i').hasClass('fa-caret-up')).toBeTrue();
    });

    it('should show caret down if direction is descending', () => {
      scope.options.direction = 'DESC';
      element = createElement();
      expect(element.find('i').hasClass('fa-caret-down')).toBeTrue();
    });
  });

  describe('#toggleDirection', () => {
    const getClickableElement = (element) => element.find('span').eq(0);

    describe('when key is not provided', () => {
      beforeEach(() => {
        scope.options.key = null;
      });

      it('should have not been called when clicking element', () => {
        getClickableElement(createElement()).triggerHandler('click');
        expect(scope.onSort).not.toHaveBeenCalled();
      });
    });

    describe('when key is provided', () => {
      it('should have been called when clicking element', () => {
        getClickableElement(createElement()).triggerHandler('click');
        expect(scope.onSort).toHaveBeenCalled();
      });

      it('should change direction if active', () => {
        getClickableElement(createElement()).triggerHandler('click');
        expect(scope.onSort).toHaveBeenCalledWith('test', 'ASC');
      });

      it('should not change direction if not active', () => {
        scope.active = false;
        getClickableElement(createElement()).triggerHandler('click');
        expect(scope.onSort).toHaveBeenCalledWith('test', 'DESC');
      });
    });
  });

});
