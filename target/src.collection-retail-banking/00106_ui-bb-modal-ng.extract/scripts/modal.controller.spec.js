import controller from './modal.controller';

describe('uiBbModalController', () => {
  let modal, modalInstance, scope, ctrl;

  beforeEach(() => {
    scope = {
      '$watch': jasmine.createSpy('$watch'),
      $parent: 'parent scope',
    };
    modalInstance = {
      close: jasmine.createSpy('close'),
      opened: new Promise(() => {}),
      closed: new Promise(() => {}),
    };
    modal = {
      open: jasmine.createSpy('open').and.returnValue(modalInstance),
    };
    const timeout = fn => fn();
    ctrl = new controller(modal, scope, timeout);
  });

  describe('$onInit', () => {
    it('should watch on controller isOpen property', () => {
      ctrl.isOpen = 'test';
      ctrl.$onInit();

      expect(scope.$watch).toHaveBeenCalled();

      const args = scope.$watch.calls.argsFor(0);
      expect(args[0]()).toBe('test');
      expect(args[1]).toBeFunction();
    });

    it('should open modal with parameters if value changes to true', () => {
      ctrl.$onInit();
      ctrl.modalTemplate = 'template';
      ctrl.keyboard = true;
      ctrl.animation = true;

      scope.$watch.calls.argsFor(0)[1](true);

      expect(modal.open).toHaveBeenCalled();

      const options = modal.open.calls.argsFor(0)[0];
      expect(options).toBeObject();
      expect(Object.keys(options).length).toBe(4);
      expect(options.template).toBe('template');
      expect(options.scope).toBe('parent scope');
      expect(options.keyboard).toBeTrue();
      expect(options.animation).toBeTrue();
    });

    it('should close modal if values changes to false', () => {
      ctrl.$onInit();
      ctrl.backdrop = 'bd';
      ctrl.size = 123;

      const callback = scope.$watch.calls.argsFor(0)[1];
      callback(true);

      const options = modal.open.calls.argsFor(0)[0];
      expect(options).toBeObject();
      expect(Object.keys(options).length).toBe(4);
      expect(options.backdrop).toBe('bd');
      expect(options.size).toBe(123);

      callback(false);
      expect(modalInstance.close).toHaveBeenCalled();
    });

    it('should call onOpen callback when modal opened', done => {
      modalInstance.opened = Promise.resolve();
      ctrl.onOpen = jasmine.createSpy('onOpen');

      ctrl.$onInit();
      scope.$watch.calls.argsFor(0)[1](true);

      setTimeout(() => {
        expect(ctrl.onOpen).toHaveBeenCalled();
        done();
      });
    });

    it('should call onClose callback when modal opened', done => {
      modalInstance.closed = Promise.resolve();
      ctrl.onClose = jasmine.createSpy('onClose');

      ctrl.$onInit();
      scope.$watch.calls.argsFor(0)[1](true);

      setTimeout(() => {
        expect(ctrl.onClose).toHaveBeenCalled();
        done();
      });
    });
  });

  describe('$onDestroy', () => {
    it('should close modal if it was opened', () => {
      ctrl.$onDestroy();
      expect(modalInstance.close).not.toHaveBeenCalled();

      ctrl.$onInit();
      const callback = scope.$watch.calls.argsFor(0)[1];
      callback(true);
      expect(modalInstance.close).not.toHaveBeenCalled();

      ctrl.$onDestroy();
      expect(modalInstance.close).toHaveBeenCalled();
    });

    it('should close modal just once', () => {
      ctrl.$onInit();
      const callback = scope.$watch.calls.argsFor(0)[1];
      callback(true);

      ctrl.$onDestroy();
      ctrl.$onDestroy();
      expect(modalInstance.close.calls.count()).toBe(1);
    });
  });
});
