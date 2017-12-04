import angular from 'vendor-bb-angular';
import 'angular-mocks';

import uiBbFilterComponent from './index';

describe('ui-bb-notifications-filter-ng', () => {

  let $compile, $componentController,
    scope, element;

  const defaultTemplate = `
    <ui-bb-notifications-filter
      on-filter="onFilter(params)"
      header-labels="{
        date: 'Date',
        level: 'Severity level',
        status: 'Status',
      }"
      level-labels="{
        all: 'All',
        info: 'Info',
        alert: 'Alert',
        warning: 'Warning',
        success: 'Success',
      }"
      status-labels="{
        all: 'All',
        read: 'Read',
        unread: 'Unread',
      }"
      button-labels="{
        main: 'Filter',
        apply: 'Apply filter',
        cancel: 'Cancel',
        clear: 'Clear all',
      }"
      on-clear-filter="clearFilter">
    </ui-bb-notifications-filter>
  `;

  function createElement(template = defaultTemplate) {
    let compiled = $compile(template)(scope);
    scope.$digest();

    return compiled;
  }

  beforeEach(angular.mock.module(uiBbFilterComponent));

  beforeEach(angular.mock.inject(function($rootScope, _$compile_, _$componentController_) {
    $compile = _$compile_;
    scope = $rootScope.$new();
    $componentController = _$componentController_;
  }));

  describe('rendering', () => {

    beforeEach(() => {
      scope.onFilter = () => {};
      scope.clearFilter = () => {};
      element = createElement();
    })

    it('should render component', () => {
      expect(element.find('button').length).toBe(1);
      expect(element.find('form').length).toBe(1);
    });
  });
});
