import angular from 'vendor-bb-angular';
import 'angular-mocks';

import Controller from './controller';

describe('Ui notifications filter controller', () => {

  let ctrl,
    scope;

  beforeEach(angular.mock.inject(($rootScope) => {
    scope = $rootScope.$new();
    ctrl = new Controller(scope);
  }));

  it('should have appropriate variables in controller', () => {
    expect(ctrl.isOpen).toBeDefined();
    expect(ctrl.levels).toBeDefined();
    expect(ctrl.statuses).toBeDefined();
    expect(ctrl.fromDate).toBeDefined();
    expect(ctrl.toDate).toBeDefined();
    expect(ctrl.onApplyFilter).toBeDefined();
    expect(ctrl.onClearFilter).toBeDefined();
    expect(ctrl.toggleFilter).toBeDefined();
  });

  describe('watch for datepicker config', () => {

    let dateString;

    beforeEach(inject(function() {
      dateString = 'Fri Jan 13 2017 13:18:53 GMT+0200 (EET)';
      ctrl.toDate.config.minDate = new Date().getTime();
      ctrl.fromDate.config.maxDate = new Date().getTime();
    }));

    it('should change toDate.config.minDate when fromDate.value was set', () => {

      ctrl.filterParams.fromDate = dateString;

      scope.$digest();

      expect(ctrl.toDate.config.minDate).toEqual(new Date(dateString));

    });

    it('should unset toDate.config.minDate when fromDate.value was not set', () => {

      ctrl.filterParams.fromDate = null;

      scope.$digest();

      expect(ctrl.toDate.config.minDate).toEqual(null);

    });

    it('should change fromDate.config.maxDate when toDate.value was set', () => {

      ctrl.filterParams.toDate = dateString;

      scope.$digest();

      expect(ctrl.fromDate.config.maxDate).toEqual(new Date(dateString));

    });

    it('should set current date to toDate.config.minDate when fromDate.value was not set', () => {

      ctrl.filterParams.toDate = null;

      scope.$digest();

      expect(ctrl.fromDate.config.maxDate).toEqual(new Date());

    });

  });


  describe('$ctrl:toggleFilter', () => {

    it('should toggle isOpen variable', () => {

      ctrl.toggleFilter();

      expect(ctrl.isOpen).toEqual(true);

      ctrl.toggleFilter();

      expect(ctrl.isOpen).toEqual(false);

    });

  });

  describe('$ctrl:onApplyFilter', () => {

    it('should call binding function', () => {

      ctrl.onFilter = () => {};

      spyOn(ctrl, 'onFilter').and.callThrough();

      ctrl.onApplyFilter();

      expect(ctrl.onFilter).toHaveBeenCalled();

    });

    it('should return null if binding function is not set', () => {

      expect(ctrl.onApplyFilter()).toEqual(null);

    });

  });

  describe('$ctrl:onClearFilter', () => {

    it('should clear filter parameters', () => {

      ctrl.statuses.options = [{ value: true }, { value: true }];
      ctrl.levels.options = [{ value: true }, { value: true }];

      ctrl.onClearFilter();

      expect(ctrl.filterParams.fromDate).toEqual(null);
      expect(ctrl.filterParams.toDate).toEqual(null);
      expect(ctrl.filterParams.status).toEqual(null);
      expect(ctrl.filterParams.levels).toEqual([]);

    });

  });

});
