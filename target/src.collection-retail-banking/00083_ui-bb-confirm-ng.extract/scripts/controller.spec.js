import controller from './controller';

describe('uiBbConfirmController', () => {
  let ctrl;

  beforeEach(() => {
    const timeout = fn => fn();
    ctrl = new controller(timeout);
  });

  describe('$onInit', () => {
    it('should set default value for dismissible property', () => {
      expect(ctrl.isDismissible).toBeUndefined();

      ctrl.$onInit();
      expect(ctrl.isDismissible).toBeTrue();
    });

    it('should set dismissible prope;rty', () => {
      ctrl.isDismissible = false;
      expect(ctrl.isDismissible).toBeFalse()

      ctrl.$onInit();
      expect(ctrl.isDismissible).toBeFalse();
    });
  });

  describe('confirm', () => {
    it('should change isOpen property and call confirm callback', () => {
      ctrl.isOpen = true;
      ctrl.onConfirm = jasmine.createSpy('onConfirm');

      ctrl.confirm();
      expect(ctrl.isOpen).toBeFalse();
      expect(ctrl.onConfirm).toHaveBeenCalled();
    });
  });

  describe('cancel', () => {
    it('should change isOpen property and call cancel callback', () => {
      ctrl.isOpen = true;
      ctrl.onCancel = jasmine.createSpy('onCancel');

      ctrl.cancel();
      expect(ctrl.isOpen).toBeFalse();
      expect(ctrl.onCancel).toHaveBeenCalled();
    });
  });
});
