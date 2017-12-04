/**
 * @name uiBbStepperController
 * @type {function}
 *
 * @description
 * Stepper controller
 */
const uiBbStepperController = function (scope) {
  const $ctrl = this;
  let currentIndex = 0;
  const originalLabels = {};

  /**
   * @name uiBbStepperController#getCurrentIndex
   * @type {function}
   * @description Retrieves current step index
   * @returns {boolean}
   */
  const getCurrentIndex = () => currentIndex;

  /**
   * @name uiBbStepperController#getCurrentStep
   * @type {function}
   * @description Retrieves current step's controller
   * @returns {object}
   */
  const getCurrentStep = () => $ctrl.steps[currentIndex];

  /**
   * @name uiBbStepperController#isFirstStep
   * @type {function}
   * @description Helper method to check if current step is first step
   * @returns {boolean}
   */
  const isFirstStep = () => currentIndex === 0;

  /**
   * @name uiBbStepperController#isLastStep
   * @type {function}
   * @description Helper method to check if current step is last step
   * @returns {boolean}
   */
  const isLastStep = () => $ctrl.steps.length - 1 === currentIndex;

  /**
   * @name uiBbStepperController#doStepChange
   * @type {function}
   * @inner
   * @description Checks if step change is allowed. If yes, changes the currentIndex to the
   * provided value and executes the afterStepChange method
   * @param {number} newStepIndex Step index to go to
   */
  const doStepChange = (newStepIndex) => {
    const newStep = $ctrl.steps[newStepIndex];
    if (typeof($ctrl.beforeStepChange) === 'function'
      && !$ctrl.beforeStepChange({ newStep, ctrl: $ctrl })) {
      return;
    }

    const oldStep = getCurrentStep();
    currentIndex = newStepIndex;
    if (typeof($ctrl.afterStepChange) === 'function') {
      $ctrl.afterStepChange({
        oldStep,
        ctrl: $ctrl,
      });
    }
  };

  /**
   * @name uiBbStepperController#toggleStep
   * @type {function}
   * @inner
   * @description Marks active step and updates labels once step index is changed
   */
  const toggleStep = () => {
    $ctrl.steps.forEach((step, index) => {
      Object.assign(step, { active: index === currentIndex });
      if (index === currentIndex) {
        Object.assign($ctrl.labels, originalLabels, step.labels || {});
      }
    });
  };

  /**
   * @name uiBbStepperController#addStep
   * @type {function}
   * @description Adds additional step to step list
   * @param {object} step Stepper step controller
   */
  const addStep = (step) => {
    Object.assign(step, {
      active: $ctrl.steps.length === 0,
      index: $ctrl.steps.length,
    });
    $ctrl.steps.push(step);
  };

  /**
   * @name uiBbStepperController#next
   * @type {function}
   * @description Makes next step active. Call is ignored if allowNext is false
   * or if current step is last step
   */
  const next = () => {
    if ($ctrl.isLastStep() || !$ctrl.allowNext) {
      return;
    }
    doStepChange(currentIndex + 1);
  };

  /**
   * @name uiBbStepperController#previous
   * @type {function}
   * @description Makes previous step active. Call is ignored if allowBack is false
   * or if current step is first step
   */
  const previous = () => {
    if ($ctrl.isFirstStep() || !$ctrl.allowBack) {
      return;
    }
    doStepChange(currentIndex - 1);
  };

  /**
   * @name uiBbStepperController#goToStep
   * @type {function}
   * @description Makes step with index provided active. Call is ignored if index is less
   * than zero, if it is larger than current step (skipping forward is not allowed) and if
   * allowBack flag is set to false
   * @param {number} stepIndex Step index to go to
   */
  const goToStep = (stepIndex) => {
    if (stepIndex < 0 || stepIndex >= currentIndex
      || (stepIndex < currentIndex && !$ctrl.allowBack)) {
      return;
    }
    doStepChange(stepIndex);
  };

  /**
   * @name uiBbStepperController#cancel
   * @type {function}
   * @description Calls provided onCancel method
   */
  const cancel = () => {
    if (typeof($ctrl.onCancel) !== 'function' || !$ctrl.allowCancel) {
      return;
    }
    $ctrl.onCancel({ ctrl: $ctrl });
  };

  /**
   * @name uiBbStepperController#finish
   * @type {function}
   * @description Calls provided onFinish method
   */
  const finish = () => {
    if (!$ctrl.allowNext) {
      return;
    }
    $ctrl.onFinish({ ctrl: $ctrl });
  };

  /**
   * @name uiBbStepperController#$onInit
   * @type {function}
   *
   * @description
   * AngularJS lifecycle Init hook
   */
  const $onInit = () => {
    // watch for index change
    scope.$watch(() => currentIndex, toggleStep);
    Object.assign(originalLabels, $ctrl.labels);
  };

  Object.assign($ctrl, {
    /**
     * @name uiBbStepperController#allowBack
     * @type {boolean}
     * @description Is going back to previous steps allowed
     */
    allowBack: $ctrl.allowBack !== false,

    /**
     * @name uiBbStepperController#allowNext
     * @type {boolean}
     * @description Is going forward allowed. This flag can be used to make sure
     * form in current step is filled correctly
     */
    allowNext: $ctrl.allowNext !== false,

    /**
     * @name uiBbStepperController#allowCancel
     * @type {boolean}
     * @description Is cancelling allowed. This flag can be used to stop the user cancelling in the
     * current step/state for some reason. e.g. when loading data
     */
    allowCancel: $ctrl.allowCancel !== false,

    /**
     * @name uiBbStepperController#steps
     * @type {object[]}
     * @description Contains array of all stepper step controllers
     */
    steps: [],
    getCurrentIndex,
    getCurrentStep,
    isFirstStep,
    isLastStep,
    addStep,
    next,
    previous,
    goToStep,
    cancel,
    finish,
    $onInit,
  });
};

export default uiBbStepperController;
