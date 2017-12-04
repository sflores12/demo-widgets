import Controller from './controller';

describe('ui-bbm-switch-ng::controller', () => {
  const controlElem = {
    addEventListener: () => {},
    removeEventListener: () => {},
  };

  const documentElem = {
    addEventListener: () => {},
    querySelector: () => {},
    removeEventListener: () => {},
  };

  const inputElem = {
    checked: false,
    addEventListener: () => {},
    removeEventListener: () => {},
  };

  const ngModelCtrl = {
    $setViewValue: () => {},
  };

  const ElementControllerMap = {
    'ngModel': ngModelCtrl,
  };

  const SelectorToElementMap = {
    'input': inputElem,
    '[data-role="switch-control"]': controlElem,
  };

  const $element = {
    0: {
      querySelector: selector => SelectorToElementMap[selector],
    },
    controller: ctrlKey => ElementControllerMap[ctrlKey],
  };

  const $document = {
    0: documentElem,
  };

  const createController = () => new Controller($element, $document);

  describe('Methods', () => {
    describe('onChange', () => {
      it('should set a corresponding model value', () => {
        const ctrl = createController();

        spyOn(ngModelCtrl, '$setViewValue');

        inputElem.checked = true;
        ctrl.onChange();

        expect(ngModelCtrl.$setViewValue).toHaveBeenCalledWith(true);

        inputElem.checked = false;
        ctrl.onChange();

        expect(ngModelCtrl.$setViewValue).toHaveBeenCalledWith(false);
      });
    });
  });

  describe('User actions', () => {
    describe('Swipe to left', () => {
      it('should set model value to true', () => {
        let touchStartListener;
        let touchMoveListener;
        let touchEndListener;

        inputElem.checked = true;

        const ctrl = createController();

        spyOn(controlElem, 'addEventListener').and.callFake((eventType, listener) => {
          if (eventType === 'touchstart') {
            touchStartListener = listener;
          }
        });

        spyOn(documentElem, 'addEventListener').and.callFake((eventType, listener) => {
          if (eventType === 'touchmove') {
            touchMoveListener = listener;
          } else if (eventType === 'touchend') {
            touchEndListener = listener;
          }
        });

        ctrl.$onInit();

        spyOn(ngModelCtrl, '$setViewValue');

        touchStartListener({
          targetTouches: [{ screenX: 100 }],
        });

        touchMoveListener({
          preventDefault: () => {},
          targetTouches: [{ screenX: 80 }],
        });

        touchEndListener();

        expect(ngModelCtrl.$setViewValue).toHaveBeenCalledWith(false);
      });
    });

    describe('Swipe to right', () => {
      it('should set model value to false', () => {
        let touchStartListener;
        let touchMoveListener;
        let touchEndListener;

        inputElem.checked = true;

        const ctrl = createController();

        spyOn(controlElem, 'addEventListener').and.callFake((eventType, listener) => {
          if (eventType === 'touchstart') {
            touchStartListener = listener;
          }
        });

        spyOn(documentElem, 'addEventListener').and.callFake((eventType, listener) => {
          if (eventType === 'touchmove') {
            touchMoveListener = listener;
          } else if (eventType === 'touchend') {
            touchEndListener = listener;
          }
        });

        ctrl.$onInit();

        spyOn(ngModelCtrl, '$setViewValue');

        touchStartListener({
          targetTouches: [{ screenX: 100 }],
        });

        touchMoveListener({
          preventDefault: () => {},
          targetTouches: [{ screenX: 120 }],
        });

        touchEndListener();

        expect(ngModelCtrl.$setViewValue).toHaveBeenCalledWith(true);
      });
    });
  });
});
