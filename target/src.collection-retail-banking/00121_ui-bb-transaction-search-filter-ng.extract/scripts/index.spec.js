import angular from 'vendor-bb-angular';
import 'angular-mocks';

import mainComponent from './index';


describe('ui-bb-transaction-search-filter-ng', function() {
  var $compile, $componentController,
      scope, element, component;

  var defaultTemplate = `
    <ui-bb-transaction-search-filter-ng
    on-filter="onFilter(params)"
      button-labels="{
        main: 'Filter',
        apply: 'Apply ',
        clear: 'Clear',
      }"
      field-labels="{
        search: 'Search',
        creditDebitIndicator: 'Credit/Debit indicator',
        credit: 'Credit',
        debit: 'Debit',
        dateRange: 'Date range',
        amountRange: 'Amount range',
        amountFrom: 'Amount from',
        amountTo: 'Amount to',
      }"
      on-clear-filter="clearFilter">
    </ui-bb-transaction-search-filter-ng>
  `;

  function createElement(template = defaultTemplate) {
    let compiled = $compile(template)(scope);
    scope.$digest();
    return compiled;
  }

  beforeEach(angular.mock.module(mainComponent));

  beforeEach(angular.mock.inject(function($rootScope, _$compile_, _$componentController_) {
    $compile = _$compile_;
    scope = $rootScope.$new();
    $componentController = _$componentController_;
  }));

  describe('rendering', function() {

    beforeEach(() => {
      scope.onFilter = () => {};
      scope.clearFilter = () => {};
      element = createElement();
    })

    it('should render component', () => {
      expect(element.find('button').length).toBe(0);
      expect(element.find('div').length).toBe(0);
    });
  });

});
