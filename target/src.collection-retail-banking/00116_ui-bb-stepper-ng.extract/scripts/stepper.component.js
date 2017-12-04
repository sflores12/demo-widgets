import uiBbStepperController from './controller';

/**
 * @name uiBbStepperNg
 * @type {object}
 * @description
 * Stepper component that can be used to split user flow into multiple steps. Component
 * provides progress indicator and controls for navigation through steps
 *
 * @property {object} labels Component's labels
 * @property {string} labels.step Label for word "step" in step progress (Step 1 of 2)
 * @property {string} labels.of Label for word "of" in step progress (Step 1 of 2)
 * @property {string} labels.previous Label for button that navigates one step back
 * @property {string} labels.next Label for button that navigates one step further
 * @property {string} labels.cancel Label for button that cancels the whole process
 * @property {string} labels.finish Label for button (on last step) that finilizes step process
 * @property {?boolean} allowBack Flag that can be used to prevent reverting back to previous steps
 * @property {?boolean} allowNext Flag that can be used to prevent user to proceed to the next step
 * @property {?boolean} allowCancel Flag that can be used to prevent user from clicking cancel
 * @property {function} onFinish Function that will be executed after all steps are passed.
 * It receives component's controller (ctrl) as a parameter
 * @property {?function} beforeStepChange Function that will be executed before step change.
 * If provided, function needs to return true if step change is allowed.
 * Objects (newStep) containing new step controller and (ctrl) component's controller
 * will be provided as a parameters
 * @property {?function} afterStepChange Function that will be executed once step has been changed.
 * Objects (oldStep) containing old step controller and (ctrl) component's controller
 * will be provided as a parameters
 * @property {?function} onCancel Function that will be executed once user clicks on cancel button.
 * If not provided, cancel button will not be drawn on the form. Component's controller (ctrl) is
 * provided as a parameter
 */
const uiBbStepperComponent = {
  transclude: true,
  bindings: {
    labels: '<',
    allowBack: '<?',
    allowNext: '<?',
    allowCancel: '<?',
    onFinish: '&',
    beforeStepChange: '&?',
    afterStepChange: '&?',
    onCancel: '&?',
  },
  controller: ['$scope', uiBbStepperController],
  template: `
    <div class="bb-stepper panel panel-default">
      <div class="bb-stepper-indicator panel-heading">
        <div class="visible-xs row">
          <div class="col-xs-3">
            <button class="bb-stepper-btn btn btn-default"
              data-ng-disabled="!$ctrl.allowBack"
              data-ng-if="!$ctrl.isFirstStep()"
              data-ng-click="$ctrl.previous()"
              data-ng-bind="$ctrl.labels.previous"
            >
            </button>
          </div>
          <div class="col-xs-6 text-center">
            <span class="bb-stepper-step-progress">
              {{ $ctrl.labels.step }} {{ $ctrl.getCurrentIndex() + 1 }}
              {{ $ctrl.labels.of }} {{ $ctrl.steps.length }}
            </span>
          </div>
          <div class="col-xs-3 text-right">
            <button class="bb-stepper-btn btn btn-primary"
              data-ng-disabled="!$ctrl.allowNext"
              data-ng-if="!$ctrl.isLastStep()"
              data-ng-click="$ctrl.next()"
              data-ng-bind="$ctrl.labels.next"
            >
            </button>
            <button class="bb-stepper-btn btn btn-primary"
              data-ng-disabled="!$ctrl.allowNext"
              data-ng-if="$ctrl.isLastStep()"
              data-ng-click="$ctrl.finish()"
              data-ng-bind="$ctrl.labels.finish"
            >
            </button>
          </div>
        </div>
        <div class="bb-stepper-step hidden-xs" data-ng-repeat="step in $ctrl.steps track by $index">
          <a href="javascript:void(0)"
            class="bb-stepper-step-item label"
            data-ng-class="{
              'active': $index <= $ctrl.getCurrentIndex(),
              'passed': $index < $ctrl.getCurrentIndex(),
              'disabled': !$ctrl.allowBack,
            }"
            data-ng-click="$ctrl.goToStep($index)"
            role="button"
          >
            <span class="bb-stepper-step-number" data-ng-bind="$index + 1"></span>
            <span class="bb-stepper-step-icon fa fa-check"></span>
          </a>
          <span class="bb-stepper-step-title" data-ng-bind="step.title"></span>
          <hr class="bb-stepper-step-separator">
        </div>
      </div>
      <div class="bb-stepper-content panel-body" data-ng-transclude></div>
      <div class="bb-stepper-controls panel-footer panel-footer-white hidden-xs clearfix">
        <button class="bb-stepper-btn btn btn-default pull-left"
          data-ng-disabled="!$ctrl.allowBack"
          data-ng-if="!$ctrl.isFirstStep()"
          data-ng-click="$ctrl.previous()"
          data-ng-bind="$ctrl.labels.previous"
        >
        </button>
        <div class="pull-right">
          <button class="bb-stepper-btn btn btn-default"
            data-ng-disabled="!$ctrl.allowCancel"
            data-ng-click="$ctrl.cancel()"
            data-ng-if="$ctrl.onCancel"
            data-ng-bind="$ctrl.labels.cancel"
          >
          </button>
          <button class="bb-stepper-btn btn btn-primary"
            data-ng-disabled="!$ctrl.allowNext"
            data-ng-if="!$ctrl.isLastStep()"
            data-ng-click="$ctrl.next()"
            data-ng-bind="$ctrl.labels.next"
          >
          </button>
          <button class="bb-stepper-btn btn btn-primary"
            data-ng-disabled="!$ctrl.allowNext"
            data-ng-if="$ctrl.isLastStep()"
            data-ng-click="$ctrl.finish()"
            data-ng-bind="$ctrl.labels.finish"
          >
          </button>
        </div>
      </div>
    </div>
  `,
};

export default uiBbStepperComponent;
