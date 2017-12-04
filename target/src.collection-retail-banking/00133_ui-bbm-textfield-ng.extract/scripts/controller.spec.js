import Controller from './controller';

describe('ui-bbm-text-field-ng::controller', () => {
  let $element;

  const ngModelCtrl = {
    $setViewValue: () => { },
    $setPristine: () => { },
    $setUntouched: () => { },
    $setTouched: () => { },
    $modelValue: null,
    $viewValue: null,
  };

  const input = {
    focus: () => { },
  };

  const $input = {
    0: input,
    on: () => { },
    val: () => { },
  };

  const $timeout = setTimeout;

  /**
   * --------------------------------------------------------------------------------------
   * Helpers
   * --------------------------------------------------------------------------------------
   */

  const createElement = () => (
    {
      find: () => ({
        eq: () => $input,
      }),
      controller: (key) => {
        if (key === 'ngModel') {
          return ngModelCtrl;
        }
      },
      on: () => { }
    }
  );

  const createController = props => {
    $element = createElement();

    const ctrl = new Controller($element, $timeout);

    Object.assign(ctrl, props);
    ctrl.$onInit();

    return ctrl;
  };

  /**
   * --------------------------------------------------------------------------------------
   * Specs
   * --------------------------------------------------------------------------------------
   */

  describe('$onInit', () => {
    it('should set the value to an empty string if no value was passed to the component', () => {
      const ctrl = createController();

      expect(ctrl.state.value).toEqual('');
    });

    it('should set the value to the value that was passed to the component', () => {
      const ctrl = createController({
        ngModel: 'test'
      });

      expect(ctrl.state.value).toEqual('test');
    });
  });

  describe('$onChanges', () => {
    it('should update the value on model changes', () => {
      const ctrl = createController({
        ngModelCtrl,
      });

      ctrl.ngModel = 'test';

      ctrl.$onChanges({ ngModel: 'change' });

      expect(ctrl.state.value).toEqual(ctrl.ngModel);
    });

    it('should reset the model state when model updates to the initial state', done => {
      const ctrl = createController({
        ngModelCtrl,
      });

      spyOn(ngModelCtrl, '$setPristine');
      spyOn(ngModelCtrl, '$setUntouched');

      ctrl.ngModel = 'test';
      ngModelCtrl.$viewValue = 'test';

      setTimeout(() => {
        ctrl.$onChanges({ ngModel: 'change' });

        expect(ngModelCtrl.$setPristine).toHaveBeenCalled();
        expect(ngModelCtrl.$setUntouched).toHaveBeenCalled();
        done();
      }, 0);
    });
  });

  describe('clearField', () => {
    it('should reset the value to null', () => {
      ngModelCtrl.$modelValue = 'test';

      const ctrl = createController();
      const event = {
        type: 'click',
        preventDefault: () => { }
      };
      ctrl.clearField();

      expect(ctrl.state.value).toEqual('');
    });
  });

  describe('isEmpty', () => {
    it('should return true, if input is empty', () => {
      ngModelCtrl.$modelValue = '';

      const ctrl = createController();

      expect(ctrl.isEmpty()).toBe(true);

      ngModelCtrl.$modelValue = null;
      ctrl.$onChanges({ ngModel: {} });

      expect(ctrl.isEmpty()).toBe(true);
    });

    it('should return false, if input is not empty', () => {
      const ctrl = createController();
      ctrl.ngModel = ' ';
      ctrl.$onInit();

      expect(ctrl.isEmpty()).toBe(false);

      ctrl.ngModel = '0';

      ctrl.$onChanges({ ngModel: {} });

      expect(ctrl.isEmpty()).toBe(false);

      ctrl.ngModel = '123';
      ctrl.$onChanges({ ngModel: {} });

      expect(ctrl.isEmpty()).toBe(false);
    });
  });

  describe('setFocus', () => {
    it('should set the focussed flag to true', () => {
      const ctrl = createController();

      ctrl.setFocus();

      expect(ctrl.state.isActive).toBeTrue();
    });
  });

  describe('unsetFocus', () => {
    it('should set the focussed flag to false', () => {
      const ctrl = createController();

      ctrl.unsetFocus();

      expect(ctrl.state.isActive).toBeFalse();
    });
  });

  describe('isNumeric', () => {
    it('should check whether field type is number', () => {
      const ctrl = createController({
        type: 'number'
      });

      const isNumeric = ctrl.isNumeric();

      expect(isNumeric).toBeTrue();
    });
  });

  describe('User events', () => {
    describe('textInput', () => {
      it('should prevent input of non numeric characters', () => {
        const handlers = {};

        const event = {
          data: '',
          preventDefault: () => { },
        };

        spyOn($input, 'on').and.callFake((eventType, handler) => {
          handlers[eventType] = handler;
        });

        spyOn($input, 'val');

        spyOn(event, 'preventDefault');

        const ctrl = createController({
          type: 'number',
        });

        ctrl.$postLink();

        event.data = '123';
        handlers['textInput'](event);
        expect(event.preventDefault).not.toHaveBeenCalled();
        event.preventDefault.calls.reset();

        event.data = '123.';
        handlers['textInput'](event);
        expect(event.preventDefault).toHaveBeenCalled();
        event.preventDefault.calls.reset();

        event.data = 'abc';
        handlers['textInput'](event);
        expect(event.preventDefault).toHaveBeenCalled();
        event.preventDefault.calls.reset();

        event.data = '123abc';
        handlers['textInput'](event);
        expect(event.preventDefault).toHaveBeenCalled();
        event.preventDefault.calls.reset();
      })
    });

    describe('input', () => {
      it('should strip leading zeros', () => {
        const handlers = {};

        spyOn($input, 'on').and.callFake((eventType, handler) => {
          handlers[eventType] = handler;
        });

        spyOn($input, 'val');

        const ctrl = createController({
          type: 'number',
        });

        ctrl.$postLink();

        $input.val.and.returnValue('123');
        handlers['input']();
        expect($input.val).toHaveBeenCalledTimes(1);
        expect($input.val).toHaveBeenCalledWith();
        $input.val.calls.reset();

        $input.val.and.returnValue('0123');
        handlers['input']();
        expect($input.val).toHaveBeenCalledTimes(2);
        expect($input.val).toHaveBeenCalledWith('123');
        $input.val.calls.reset();

        $input.val.and.returnValue('000012030');
        handlers['input']();
        expect($input.val).toHaveBeenCalledTimes(2);
        expect($input.val).toHaveBeenCalledWith('12030');
        $input.val.calls.reset();
      });
    });
  })
});
