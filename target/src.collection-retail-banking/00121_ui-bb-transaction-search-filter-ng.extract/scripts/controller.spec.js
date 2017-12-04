import angular from 'vendor-bb-angular';
import 'angular-mocks';

import Controller from './controller';

describe('Transaction search filter UI component controller', () => {

  let ctrl,scope,form;

  beforeEach(angular.mock.inject(($rootScope) => {
    scope = $rootScope.$new();
    ctrl = new Controller(scope);
    form = jasmine.createSpyObj('form', ['$setPristine', '$setUntouched']);
  }));

  it('should have appropriate variables in controller', () => {
    expect(ctrl.filterParams).toBeDefined();
    expect(ctrl.onApplyFilter).toBeDefined();
    expect(ctrl.onClearFilter).toBeDefined();
    expect(ctrl.toggleFilter).toBeDefined();
  });

  describe('$ctrl:toggleFilter', () => {

    it('should toggle isFilterOpen variable', () => {

      ctrl.toggleFilter();

      expect(ctrl.state.isFilterOpen).toEqual(true);

      ctrl.toggleFilter();

      expect(ctrl.state.isFilterOpen).toEqual(false);

    });

  });

  describe('$ctrl:onApplyFilter', () => {

    it('should call binding function', () => {

      ctrl.onFilter = () => {};

      spyOn(ctrl, 'onFilter').and.callThrough();

      ctrl.onApplyFilter(form);

      expect(ctrl.onFilter).toHaveBeenCalled();

    });

  });

  describe('$ctrl:onClearFilter', () => {

    it('should clear filter parameters', () => {

	  ctrl.filterParams.dateRange.startDate = '12-04-2018';
	  ctrl.filterParams.amountTo = 20;
	  ctrl.filterParams.creditDebitIndicator.value = 'CRDT';

      ctrl.onFilter = () => {};

      ctrl.onClearFilter(form);

      expect(ctrl.state.isFilterOpen).toEqual(false);
      expect(ctrl.filterParams.dateRange.startDate).toEqual(null);
      expect(ctrl.filterParams.dateRange.endDate).toEqual(null);
      expect(ctrl.filterParams.amountFrom).toEqual(null);
      expect(ctrl.filterParams.amountTo).toEqual(null);
      expect(ctrl.filterParams.creditDebitIndicator.value).toEqual(null);

    });

  });

  describe('$ctrl.validateAmountKeypress', () => {

    it('should allow meta keys', () => {

      const event = {};
      event.metaKey = true;
      event.preventDefault = jasmine.createSpy('preventDefault');

      ctrl.validateAmountKeypress(event);

      expect(event.preventDefault).not.toHaveBeenCalled();

    });

    it('should allow arrow keys', () => {

      const event = {};
      event.metaKey = false;
      event.which = 0; // arrow key
      event.preventDefault = jasmine.createSpy('preventDefault');

      ctrl.validateAmountKeypress(event);

      expect(event.preventDefault).not.toHaveBeenCalled();

    });

    it('should allow delete key', () => {

      const event = {};
      event.metaKey = false;
      event.which = 8; // delete key
      event.preventDefault = jasmine.createSpy('preventDefault');

      ctrl.validateAmountKeypress(event);

      expect(event.preventDefault).not.toHaveBeenCalled();

    });

    it('should allow numbers key', () => {

      const event = {};
      event.metaKey = false;
      event.which = 48; // number 0
      event.preventDefault = jasmine.createSpy('preventDefault');

      ctrl.validateAmountKeypress(event);
      expect(event.preventDefault).not.toHaveBeenCalled();

      event.which = 57; // number 9
      ctrl.validateAmountKeypress(event);
      expect(event.preventDefault).not.toHaveBeenCalled();

    });

    it('should not allow letter e', () => {

      const event = {};
      event.metaKey = false;
      event.which = 101; // letter e
      event.preventDefault = jasmine.createSpy('preventDefault');

      ctrl.validateAmountKeypress(event);
      expect(event.preventDefault).toHaveBeenCalled();

    });

    it('should not allow minus sigh', () => {

      const event = {};
      event.metaKey = false;
      event.which = 45; // minus sign
      event.preventDefault = jasmine.createSpy('preventDefault');

      ctrl.validateAmountKeypress(event);
      expect(event.preventDefault).toHaveBeenCalled();
      
    });
  });

  describe('isFormValid', () => {
    it('should return true if form is not set yet', () => {
      const form = null;
      expect(ctrl.isFormValid(form)).toBeTrue();
    });

    it('should return true if form is pristine', () => {
      const form = { $pristine: true };
      expect(ctrl.isFormValid(form)).toBeTrue();
    }); 

    it('should return true if form is invalid', () => {
      const form = { $invalid: true };
      expect(ctrl.isFormValid(form)).toBeTrue();
    });

    it('should return false if form is invalid or pristine', () => {
      const form = { $pristine: false, $invalid: false };
      expect(ctrl.isFormValid(form)).toBeFalse();
    });
  });

});
