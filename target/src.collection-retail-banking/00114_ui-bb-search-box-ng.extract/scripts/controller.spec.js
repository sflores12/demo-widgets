import angular from 'vendor-bb-angular';

import Controller from './controller';

describe('ui-bb-search-box-ng::controller', () => {
  let $element;

  const input = {
    focus: () => {},
  };

  /**
   * --------------------------------------------------------------------------------------
   * Helpers
   * --------------------------------------------------------------------------------------
   */

  const createElement = () => (
    {
      find: () => ({
        eq: () => [input],
      }),
      controller: () => ({
        $setViewValue: () => {},
      }),
    }
  );

  const createController = (props, elementExtensions = {}) => {
    $element = Object.assign(createElement(), elementExtensions);

    const ctrl = new Controller($element);

    Object.assign(ctrl, props);

    return ctrl;
  };

  /**
   * --------------------------------------------------------------------------------------
   * Specs
   * --------------------------------------------------------------------------------------
   */

  describe('$onChanges', () => {
    it('should call onChange method lifecycle hook $onChanges is fired and it\'s value is ngModel with different values', () => {
      const onChange = jasmine.createSpy('onChange');
      const ctrl = createController({ onChange });
      const onChangesValue = { ngModel: { currentValue: 'value2', previousValue: 'value1', isFirstChange: () => false } };
      ctrl.$onChanges(onChangesValue);

      expect(ctrl.state.value).toEqual('value2');
      expect(onChange).toHaveBeenCalledWith({ search: 'value2' });
    });

    it('shouldn\'t call onChange method lifecycle hook $onChanges is fired and it\'s value is ngModel with equal values', () => {
      const onChange = jasmine.createSpy('onChange');
      const ctrl = createController({ onChange });
      const onChangesValue = { ngModel: { currentValue: 'value', previousValue: 'value', isFirstChange: () => false } };
      ctrl.$onChanges(onChangesValue);

      expect(ctrl.state.value).not.toEqual('value2');
      expect(onChange).not.toHaveBeenCalled();
    });
  });

  describe('setValue', () => {
    it('should call controller model method to update its value', () => {
      const $setViewValue = jasmine.createSpy('$setViewValue');
      const ctrl = createController({}, { controller: () => ({ $setViewValue }) });
      ctrl.state.value = 'dummy';
      ctrl.setValue();
      expect($setViewValue).toHaveBeenCalledWith(ctrl.state.value);
    });
  });

  describe('clear', () => {
    it('should reset value', () => {
      const ctrl = createController({
        onChange: () => {},
        onClear: () => {},
      });
      ctrl.searchValue = 'test';
      ctrl.clear();
      expect(ctrl.state.value).toBeNull();
    });
  });

  describe('hasValue', () => {
    let ctrl;

    beforeEach(() => {
      ctrl = createController();
    });

    it('should return true if there is value set on component', () => {
      ctrl.state.value = 'test';
      expect(ctrl.hasValue()).toBeTrue();
    });

    it('should return false if there is no value set on component', () => {
      expect(ctrl.hasValue()).toBeFalse();
    });
  });

  describe('onKeyup', () => {
    let ctrl, onSubmit;
    const event = {
      keyCode: 13
    };

    beforeEach(() => {
      onSubmit = jasmine.createSpy('onSubmit');
      ctrl = createController({
        onSubmit,
      });
    });

    it('should not submit when ENTER key was pressed and change is not digested', () => {
      ctrl.state.value = 'test';
      ctrl.onKeyup(event);
      expect(onSubmit).not.toHaveBeenCalled();
    });

    it('should submit when ENTER key was pressed', () => {
      Object.assign(ctrl.state, { value: 'test', valueChanged: true });
      ctrl.onKeyup(event);
      expect(onSubmit).toHaveBeenCalledWith({ search: ctrl.state.value });
    });
  });

  describe('submitSearch', () => {
    let ctrl, onSubmit;

    beforeEach(() => {
      onSubmit = jasmine.createSpy('onSubmit');
      ctrl = createController({
        onSubmit,
      });
    });

    it('should not submit when submitSearch triggered and change is not digested', () => {
      ctrl.state.value = 'test';
      ctrl.submitSearch();
      expect(onSubmit).not.toHaveBeenCalled();
    });

    it('should submit when submitSearch triggered', () => {
      Object.assign(ctrl.state, { value: 'test', valueChanged: true })
      ctrl.submitSearch();
      expect(onSubmit).toHaveBeenCalledWith({ search: ctrl.state.value });
    });
  });
});
