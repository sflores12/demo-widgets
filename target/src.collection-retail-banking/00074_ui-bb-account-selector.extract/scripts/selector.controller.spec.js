import angular from 'vendor-bb-angular';

import Controller from './selector.controller';

const result = {
  data: [{
    name: 'name 1',
    identifier: '1234',
    currency: 'EUR',
  }, {
    name: 'name 2',
    identifier: '2234',
    currency: 'EUR',
  }, {
    name: 'name 3',
    identifier: '3234',
    currency: 'EUR',
  }, {
    name: 'name 4',
    identifier: '4234',
    currency: 'EUR',
  }, {
    name: 'name 5',
    identifier: '5234',
    currency: 'EUR',
  }, {
    name: 'name 6',
    identifier: '6234',
    currency: 'EUR',
  }],
};

describe('ui-bb-account-selector::controller', () => {
  let element, templateCache, attrs, scope, ctrl;

  const focusFn = jasmine.createSpy('focus');
  const hasClassFn = () => true;

  const createElement = () => ({
    find: () => ({
      children: () => ({
        hasClass: hasClassFn,
        find: () => ({
          find: () => ({
            [0]: ({
              focus: focusFn,
            }),
          }),
        }),
      }),
    }),
  });

  const createTemplateCache = () => ({
    get: jasmine.createSpy('get').and.returnValue('custom-template'),
    put: jasmine.createSpy('put'),
  });

  const createAttrs = () => ({});

  const createController = (bindings, elementExtensions = {}) => {
    Object.assign(element, elementExtensions);
    ctrl = new Controller(templateCache, element, attrs, scope);
    Object.assign(ctrl, bindings);
  };

  beforeEach(angular.mock.inject(($rootScope) => {
    element = createElement();
    templateCache = createTemplateCache();
    attrs = createAttrs();
    scope = $rootScope.$new();
  }));

  it('should have appropriate variables in controller', () => {
    createController();

    expect(ctrl.state).toBeDefined();
    expect(ctrl.onChange).toBeDefined();
    expect(ctrl.onSearch).toBeDefined();
    expect(ctrl.onLoadMore).toBeDefined();
    expect(ctrl.onSearchBoxClick).toBeDefined();
    expect(ctrl.$onInit).toBeDefined();
    expect(ctrl.$onChanges).toBeDefined();
  });

  describe('$onInit', () => {
    beforeEach(() => {
      spyOn(scope, '$watch').and.callThrough();
      createController({
        customTemplateId: 'customTemplateId',
        selectAllTemplateId: 'selectAllTemplateId',
        selectAll: true,
        labels: { allAccounts: 'all accounts' },
        searchBox: { minLength: 4, config: {}},
        onAccountsLoad: jasmine.createSpy('onAccountsLoad'),
      });
      ctrl.$onInit();
    });

    it('should get custom template and assign it to component template URL if given', () => {
      expect(templateCache.get).toHaveBeenCalledWith('customTemplateId');
      expect(templateCache.put).toHaveBeenCalledWith(jasmine.any(String), 'custom-template');
    });

    it('should get custom selecteAll template and assign it to component template URL if given', () => {
      expect(templateCache.get).toHaveBeenCalledWith('selectAllTemplateId');
      expect(templateCache.put).toHaveBeenCalledWith(jasmine.any(String), 'custom-template');
      expect(ctrl.state.allAccountsOption).toEqual(jasmine.objectContaining({ isSelectAll: true }));
    });

    it('should config search box if coresponding variable is given', () => {
      expect(scope.$watch).toHaveBeenCalled();
      expect(ctrl.state.search.minLength).toEqual(4);

      scope.$digest();

      expect(focusFn).toHaveBeenCalled();
      expect(ctrl.onAccountsLoad).toHaveBeenCalled();

    });
  });

  describe('$onChanges', () => {
    beforeEach(() => {
      createController();
      ctrl.$onChanges({
        model: { currentValue: result.data[1] },
        accounts: { currentValue: result.data },
      });
    });

    it('should apply given changes', () => {
      expect(ctrl.state.accounts.data).toEqual(result.data);
      expect(ctrl.state.accounts.isLoading).toEqual(false);
      expect(ctrl.state.accounts.isLoadingMore).toEqual(false);
      expect(ctrl.state.accounts.isLoaded).toEqual(true);
      expect(ctrl.state.accounts.selected).toEqual(result.data[1]);
    });
  });

  describe('$onChanges for multiple selection', () => {
    beforeEach(() => {
      createController({
        multiple: true,
        onAccountsLoad: jasmine.createSpy('onAccountsLoad'),
      });
      ctrl.$onChanges({
        model: { currentValue: null },
        accounts: { currentValue: result.data },
      });
    });

    it('should have an empty array as selection if model is null', () => {
      expect(ctrl.state.accounts.data).toEqual(result.data);
      expect(ctrl.state.accounts.selected).toEqual([]);
    });
  });

  describe('multicurrency flag update', () => {
    beforeEach(() => {
      createController({
        onAccountsLoad: jasmine.createSpy('onAccountsLoad'),
      });
      ctrl.$onChanges({
        accounts: { currentValue: result.data },
      });
    });

    it('should track account updates and update hasMultipleCurrencies flag accordingly', () => {
      expect(ctrl.state.accounts.hasMultipleCurrencies).toEqual(false);
      result.data.push({
        name: 'name 100',
        identifier: '123400',
        currency: 'USD',
      });
      ctrl.$onChanges({
        accounts: { currentValue: result.data },
      });
      expect(ctrl.state.accounts.hasMultipleCurrencies).toEqual(true);
    });
  });

  describe('onChange', () => {
    beforeEach(() => {
      createController({ ngChange: jasmine.createSpy('ngChange') });
      ctrl.onChange(result.data[0]);
    });

    it('should select given account', () => {
      expect(ctrl.model).toEqual(result.data[0]);
      expect(ctrl.ngChange).toHaveBeenCalledWith(result.data[0]);
    });
  });

  describe('onSearch', () => {
    beforeEach(() => {
      createController({
        onAccountsLoad: jasmine.createSpy('onAccountsLoad'),
      });
    });

    it('should load accounts if search value is valid', () => {
      ctrl.state.search.value = 'test value';
      ctrl.onSearch();

      expect(ctrl.state.accounts.isLoaded).toEqual(false);
      expect(ctrl.state.accounts.isLoading).toEqual(true);
      expect(ctrl.onAccountsLoad).toHaveBeenCalledWith({ options: { searchQuery: 'test value' }});
    });

    it('shouldn\'t load accounts if search value is invalid', () => {
      ctrl.state.search.value = 'va';
      ctrl.onSearch();

      expect(ctrl.state.accounts.isLoading).toEqual(false);
      expect(ctrl.onAccountsLoad).not.toHaveBeenCalled();
    });
  });

  describe('onLoadMore', () => {
    beforeEach(() => {
      createController({
        onAccountsLoad: jasmine.createSpy('onAccountsLoad'),
        totalItems: 10,
      });
    });

    it('should call load accounts function if more accounts is available', () => {
      ctrl.state.accounts.data = result.data;
      expect(ctrl.state.accounts.hasMore).toEqual(true);
      ctrl.onLoadMore();

      expect(ctrl.state.accounts.isLoaded).toEqual(false);
      expect(ctrl.state.accounts.isLoadingMore).toEqual(true);
      expect(ctrl.state.accounts.isLoading).toEqual(true);
      expect(ctrl.onAccountsLoad).toHaveBeenCalledWith({
        options: { searchQuery: '', isLoadMore: true },
      });
    });

    it('shouldn\'t call load accounts function if more accounts isn\'t available', () => {
      ctrl.state.accounts.data = result.data;
      ctrl.totalItems = result.data.length;
      expect(ctrl.state.accounts.hasMore).toEqual(false);
      ctrl.onLoadMore();

      expect(ctrl.onAccountsLoad).not.toHaveBeenCalled();
    });
  });

  describe('onSearchBoxClick', () => {
    beforeEach(() => {
      createController();
    });

    it('should call stop propagation method', () => {
      const event = { stopPropagation: jasmine.createSpy('stopPropagation') };

      ctrl.onSearchBoxClick(event);

      expect(event.stopPropagation).toHaveBeenCalled();
    });
  });

});
