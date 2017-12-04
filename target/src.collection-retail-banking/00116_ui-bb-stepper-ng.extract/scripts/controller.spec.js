import controller from './controller';

describe('uiBbStepperController', () => {
  let ctrl;
  const scope = {
    '$watch': () => null,
  };

  const steps = [
    { title: 'Step 1' },
    { title: 'Step 2' },
    { title: 'Step 3' },
  ];

  const insertSteps = (controller) => {
    steps.forEach(step => {
      controller.addStep(step);
    });
  };

  beforeEach(() => {
    ctrl = new controller(scope);
  });

  describe('allow flow flags', () => {
    it('should set default values for allowBack and allowNext flags', () => {
      expect(ctrl.allowBack).toBeTrue();
      expect(ctrl.allowNext).toBeTrue();
    });
  });

  describe('addStep', () => {
    it('should add step object to step list', () => {
      ctrl.$onInit();
      expect(ctrl.steps.length).toBe(0);

      ctrl.addStep(steps[0]);
      expect(ctrl.steps.length).toBe(1);
    });
  });

  describe('step navigation', () => {
    beforeEach(() => {
      ctrl.$onInit();
      insertSteps(ctrl);
    });

    it('should start from the first step', () => {
      expect(ctrl.getCurrentIndex()).toBe(0);
      expect(ctrl.isFirstStep()).toBeTrue();
    });

    it('should return first step as current after init', () => {
      expect(ctrl.getCurrentStep().title).toBe('Step 1');
    });

    it('should move to the next step after next() is called', () => {
      ctrl.next();
      expect(ctrl.getCurrentStep().title).toBe('Step 2');
      expect(ctrl.isFirstStep()).toBeFalse();
    });

    it('should return true if isLastStep is called on last step', () => {
      ctrl.next();
      expect(ctrl.isLastStep()).toBeFalse();
      ctrl.next();
      expect(ctrl.isLastStep()).toBeTrue();
    });

    it('should stay on the same step after next() is called, if allowNext flag is false', () => {
      ctrl.allowNext = false;
      ctrl.next();
      expect(ctrl.getCurrentStep().title).toBe('Step 1');
    });

    it('should move to the next step after next() is called', () => {
      ctrl.next();
      expect(ctrl.getCurrentStep().title).toBe('Step 2');
    });

    it('should ignore previous() called on first step', () => {
      expect(ctrl.getCurrentStep().title).toBe('Step 1');
      ctrl.previous();
      expect(ctrl.getCurrentStep().title).toBe('Step 1');
    });

    it('should go one step back if current step is not first step', () => {
      expect(ctrl.getCurrentStep().title).toBe('Step 1');
      ctrl.next();
      expect(ctrl.getCurrentStep().title).toBe('Step 2');
      ctrl.previous();
      expect(ctrl.getCurrentStep().title).toBe('Step 1');
    });

    it('should ignore previous() called on any step if allowBack flag is false', () => {
      expect(ctrl.getCurrentStep().title).toBe('Step 1');
      ctrl.next();
      expect(ctrl.getCurrentStep().title).toBe('Step 2');
      ctrl.allowBack = false;
      ctrl.previous();
      expect(ctrl.getCurrentStep().title).toBe('Step 2');
    });

    it('should ignore goToStep() if desired step comes after current step', () => {
      expect(ctrl.getCurrentStep().title).toBe('Step 1');
      ctrl.goToStep(2);
      expect(ctrl.getCurrentStep().title).toBe('Step 1');
    });

    it('should go back from last to the first step if goToStep is called', () => {
      ctrl.next();
      ctrl.next();
      expect(ctrl.getCurrentStep().title).toBe('Step 3');
      ctrl.goToStep(0);
      expect(ctrl.getCurrentStep().title).toBe('Step 1');
    });

    it('should ignore goToStep() allowBack flag is false', () => {
      ctrl.next();
      ctrl.next();
      expect(ctrl.getCurrentStep().title).toBe('Step 3');
      ctrl.allowBack = false;
      ctrl.goToStep(0);
      expect(ctrl.getCurrentStep().title).toBe('Step 3');
    });

    it('should ignore step change if beforeStepChange returns false', () => {
      ctrl.next();
      ctrl.beforeStepChange = () => false;
      expect(ctrl.getCurrentStep().title).toBe('Step 2');
      ctrl.next();
      expect(ctrl.getCurrentStep().title).toBe('Step 2');
      ctrl.previous();
      expect(ctrl.getCurrentStep().title).toBe('Step 2');
      ctrl.goToStep(0);
      expect(ctrl.getCurrentStep().title).toBe('Step 2');
    });

    it('should call afterStepChange after step is being changed', () => {
      ctrl.afterStepChange = (data) => {
        ctrl.lastStep = data.oldStep.title;
      };
      ctrl.next();
      expect(ctrl.lastStep).toBe('Step 1');
    });

    it('exposes the next step to beforeStepChange', () => {
      ctrl.beforeStepChange = () => true;
      ctrl.next();
      spyOn(ctrl, 'beforeStepChange');
      ctrl.next();
      expect(ctrl.beforeStepChange).toHaveBeenCalledWith(jasmine.objectContaining({ newStep: jasmine.objectContaining({ index: 2 }) }));
    });
  });

  describe('cancel', () => {
    it('should call onCancel method if allowCancel is not false', () => {
      ctrl.allowCancel = true;
      ctrl.onCancel = jasmine.createSpy('onCancel');
      ctrl.cancel();
      expect(ctrl.onCancel).toHaveBeenCalled();
    });

    it('should not call onCancel method if allowCancel is false', () => {
      ctrl.allowCancel = false;
      ctrl.onCancel = jasmine.createSpy('onCancel');
      ctrl.cancel();
      expect(ctrl.onCancel).not.toHaveBeenCalled();
    });
  });

  describe('finish', () => {
    it('should call onFinish method', () => {
      ctrl.onFinish = jasmine.createSpy('onFinish');
      ctrl.finish();
      expect(ctrl.onFinish).toHaveBeenCalled();
    });
  });
});