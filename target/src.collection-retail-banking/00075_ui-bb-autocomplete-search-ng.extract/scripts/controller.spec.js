/* global document */

import angular from 'vendor-bb-angular';

import Controller from './controller';

const result = {
  data: [{
    name: 'name 1',
    identifier: '1234',
  }, {
    name: 'name 2',
    identifier: '2234',
  }, {
    name: 'name 3',
    identifier: '3234',
  }, {
    name: 'name 4',
    identifier: '4234',
  }, {
    name: 'name 5',
    identifier: '5234',
  }, {
    name: 'name 6',
    identifier: '6234',
  }],
  totalItems: 6,
  hasMore: true,
};

describe('ui-bb-autocomplete-search-ng::controller', () => {
  let element, templateCache, timeout, q, deferred, document, ctrl, rootScope;

  const createElement = () => ({
    controller: () => ({
      $setViewValue: () => {},
    }),
    children: () => ({
      eq: () => ({
        controller: () => ({
          $setViewValue: () => {},
        }),
      }),
    }),
    find: () => {},
    [0]: {
      querySelector: () => {},
    },
  });

  const createTemplateCache = () => ({
    get: () => {},
    put: () => {},
  });

  const createNgModelCtrl = (val = null) => ({
    $setViewValue: jasmine.createSpy('$setViewValue'),
    $viewValue: val,
  });

  const createController = (bindings, elementExtensions = {}) => {
    Object.assign(element, elementExtensions);
    ctrl = new Controller(element, templateCache, timeout, deferred, angular.element(document));
    Object.assign(ctrl, bindings);
  };

  beforeEach(angular.mock.inject(($timeout, $q, $rootScope) => {
    element = createElement();
    templateCache = createTemplateCache();
    timeout = $timeout;
    deferred = $q.defer();
    q = deferred.promise;
    rootScope = $rootScope;
  }));

  it('should have appropriate variables in controller', () => {
    createController();

    expect(ctrl.$onInit).toBeDefined();
    expect(ctrl.$postLink).toBeDefined();
    expect(ctrl.state).toBeDefined();
    expect(ctrl.listWrapper).toBeDefined();
    expect(ctrl.getResult).toBeDefined();
    expect(ctrl.onSearch).toBeDefined();
    expect(ctrl.onSubmit).toBeDefined();
    expect(ctrl.onSearchClear).toBeDefined();
    expect(ctrl.onMatchSelect).toBeDefined();
  });

  describe('$onInit', () => {
    beforeEach(() => {
      spyOn(templateCache, 'get').and.returnValue('custom-template');
      spyOn(templateCache, 'put');
    });

    it('should get custom popup template and assign it to component template URL if given', () => {
      createController({ popupTemplateUrl: 'custom-template-url' });
      ctrl.$onInit();

      expect(templateCache.get).toHaveBeenCalledWith('custom-template-url');
      expect(templateCache.put).toHaveBeenCalledWith(jasmine.any(String), 'custom-template');
    });

    it('should get custom match template and assign it to component template URL if given', () => {
      createController({ matchTemplateUrl: 'custom-template-url' });
      ctrl.$onInit();

      expect(templateCache.get).toHaveBeenCalledWith('custom-template-url');
      expect(templateCache.put).toHaveBeenCalledWith(jasmine.any(String), 'custom-template');
    });
  });

  describe('getResult', () => {
    let loadResult;

    beforeEach(() => {
      loadResult = jasmine.createSpy('loadResult').and.returnValue(q);
      createController({ loadResult });
    });

    it('should call loadResult method and set result to state', () => {
      ctrl.getResult('searchQuery1');

      expect(loadResult).toHaveBeenCalledWith(jasmine.objectContaining({
        options: { searchQuery: 'searchQuery1' },
      }));

      deferred.resolve(result);
      rootScope.$apply();

      expect(ctrl.state.result.data).toEqual(result.data);
      expect(ctrl.state.result.totalItems).toEqual(result.totalItems);
      expect(ctrl.state.result.hasMore).toEqual(result.hasMore);
      expect(ctrl.state.result.isLoaded).toEqual(true);
    });

    it('should resolve loaded data if isLoaded key sets to true', () => {
      spyOn(deferred, 'resolve').and.callThrough();
      ctrl.state.result.isLoaded = true;
      ctrl.state.result.data = [{}];
      ctrl.getResult();

      expect(loadResult).not.toHaveBeenCalled();
      expect(deferred.resolve).toHaveBeenCalledWith([{}]);
    });
  });

  describe('onSearch', () => {
    let resultNgModelCtrl, ngModelCtrl;

    beforeEach(() => {
      ngModelCtrl = createNgModelCtrl();
      resultNgModelCtrl = createNgModelCtrl();
      spyOn(angular.element.prototype, 'controller').and.returnValue(resultNgModelCtrl);
      createController({}, { controller: () => ngModelCtrl });
    });

    it('should update model and result value', () => {
      ctrl.state.search.isSearchPrevented = false;
      ctrl.onSearch('searchValue');

      expect(ctrl.state.result.isLoaded).toEqual(false);
      expect(ngModelCtrl.$setViewValue).toHaveBeenCalledWith('searchValue');
      expect(resultNgModelCtrl.$setViewValue).toHaveBeenCalledWith('searchValue');
    });

    it('should only reset result if search is prevented', () => {
      ctrl.state.search.isSearchPrevented = true;
      ctrl.onSearch('searchValue');

      expect(ctrl.state.result.isLoaded).toEqual(false);
      expect(resultNgModelCtrl.$setViewValue).toHaveBeenCalledWith('');
    });

  });

  describe('onSubmit', () => {
    let resultNgModelCtrl;

    beforeEach(() => {
      resultNgModelCtrl = createNgModelCtrl();
      spyOn(angular.element.prototype, 'controller').and.returnValue(resultNgModelCtrl);
      createController();
    });

    it('should trigger search model if submit', () => {
      ctrl.state.search.value = 'value';
      ctrl.onSubmit();
      timeout.flush();

      expect(ctrl.state.result.isLoaded).toEqual(false);
      expect(resultNgModelCtrl.$$lastCommittedViewValue).toEqual('value ');
      expect(resultNgModelCtrl.$setViewValue).toHaveBeenCalledWith('value');
    });

    it('should toggle searchMinLength value', () => {
      expect(ctrl.state.search.minLength).toEqual(3);
      ctrl.onSubmit();

      expect(ctrl.state.search.minLength).toEqual(0);

      timeout.flush();

      expect(ctrl.state.search.minLength).toEqual(3);
    });

    it('shouldn\'t trigger search model if submit is prevented', () => {
      ctrl.state.search.isSubmitPrevented = true;
      ctrl.onSubmit();

      expect(timeout.verifyNoPendingTasks()).toEqual(undefined);

      expect(resultNgModelCtrl.$setViewValue).not.toHaveBeenCalled();
    });

    it('shouldn\'t trigger search model if popup is Open', () => {
      ctrl.state.isOpen = true;
      ctrl.onSubmit();

      expect(timeout.verifyNoPendingTasks()).toEqual(undefined);

      expect(resultNgModelCtrl.$setViewValue).not.toHaveBeenCalled();
    });

  });

  describe('onSearchClear', () => {

    it('should call onClear callback', () => {
      const onClear = jasmine.createSpy('onClear');
      const $setViewValue = jasmine.createSpy('$setViewValue');
      const searchModelCtrl = () => ({ $setViewValue });
      createController({ onClear }, { controller: searchModelCtrl });
      ctrl.onSearchClear();

      expect(onClear).toHaveBeenCalled();
    });

  });

  describe('onMatchSelect', () => {

    it('should set search value based on selected item, reset result state and call onSelect callback', () => {
      const onSelect = jasmine.createSpy('onSelect');
      const $setViewValue = jasmine.createSpy('$setViewValue');
      const searchModelCtrl = () => ({ $setViewValue });
      const item = {};
      createController({ onSelect }, { controller: searchModelCtrl });

      ctrl.onMatchSelect(item, item, 'value');

      expect($setViewValue).toHaveBeenCalledWith('value');
      expect(onSelect).toHaveBeenCalledWith({ $model: item, $label: 'value' });
    });

  });

});
