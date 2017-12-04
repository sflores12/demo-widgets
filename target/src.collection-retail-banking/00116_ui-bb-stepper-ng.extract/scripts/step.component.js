/**
 * @name uiBbStepperStepNg
 * @type {object}
 * @description
 * Step item inside stepper component
 *
 * @property {string} title Step's title
 * @property {object} labels Override of parent component labels
 * @property {string} labels.step Label for word "step" in step progress (Step 1 of 2)
 * @property {string} labels.of Label for word "of" in step progress (Step 1 of 2)
 * @property {string} labels.previous Label for button that navigates one step back
 * @property {string} labels.next Label for button that navigates one step further
 * @property {string} labels.cancel Label for button that cancels the whole process
 * @property {string} labels.finish Label for button (on last step) that finilizes step process
 */
const uiBbStepperStepComponent = {
  transclude: true,
  bindings: {
    title: '@',
    labels: '<',
  },
  require: {
    stepperCtrl: '^uiBbStepperNg',
  },
  controller: function stepperStepController() {
    const $ctrl = this;
    const $onInit = () => {
      $ctrl.stepperCtrl.addStep($ctrl);
    };
    Object.assign($ctrl, {
      $onInit,
    });
  },
  template: `
    <div class="bb-stepper-content-step" data-ng-if="$ctrl.active" data-ng-transclude></div>
  `,
};

export default uiBbStepperStepComponent;
