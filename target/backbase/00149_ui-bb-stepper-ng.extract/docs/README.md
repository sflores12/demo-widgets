# ui-bb-stepper-ng


Version: **1.2.8**

UI component for spliting views into multiple steps that
user needs to pass in order to complete some process.

## Imports

* vendor-bb-angular

---

## Example

```javascript
// In an extension:
// file: scripts/index.js
import uiBbStepperNg from 'ui-bb-stepper-ng';

export const dependencyKeys = [
  uiBbStepperNg,
];

// file: templates/template.ng.html
<ui-bb-stepper-ng
  labels="{
    step: 'Step',
    of: 'of',
    previous: 'Previous',
    next: 'Next',
    cancel: 'Cancel',
    finish: 'Close',
  }"
  on-cancel="ext.helpers.onCancel(ctrl)"
  allow-next="ext.helpers.allowNext"
  after-step-change="ext.helpers.stepChange(ctrl, oldStep)"
  on-finish="ext.helpers.onFinish(ctrl)"
>
  <ui-bb-stepper-step-ng title="Step 1">
    <p>Step 1 content</p>
    <input type="text" ng-model="$ctrl.myinput" />
  </ui-bb-stepper-step-ng>
  <ui-bb-stepper-step-ng
    title="Step 2"
    labels="{
      next: 'Submit',
    }"
  >
    <p>Step 2 content</p>
    <p>Your input was: {{ $ctrl.myinput }}</p>
  </ui-bb-stepper-step-ng>
  <ui-bb-stepper-step-ng title="Step 3">
    <p>Step 3 content</p>
    <p>You are ready to go</p>
  </ui-bb-stepper-step-ng>
</ui-bb-stepper-ng>
```

## Table of Contents
- **ui-bb-stepper-ng**<br/>    <a href="#ui-bb-stepper-nguiBbStepperController">uiBbStepperController()</a><br/>

---

### <a name="ui-bb-stepper-nguiBbStepperController"></a>*uiBbStepperController()*

Stepper controller

---

## uiBbStepperStepNg

Step item inside stepper component

| Property | Type | Description |
| :-- | :-- | :-- |
| title | String | Step's title |
| labels | Object | Override of parent component labels |
| labels.step | String | Label for word "step" in step progress (Step 1 of 2) |
| labels.of | String | Label for word "of" in step progress (Step 1 of 2) |
| labels.previous | String | Label for button that navigates one step back |
| labels.next | String | Label for button that navigates one step further |
| labels.cancel | String | Label for button that cancels the whole process |
| labels.finish | String | Label for button (on last step) that finilizes step process |

---

## uiBbStepperNg

Stepper component that can be used to split user flow into multiple steps. Component
provides progress indicator and controls for navigation through steps

| Property | Type | Description |
| :-- | :-- | :-- |
| labels | Object | Component's labels |
| labels.step | String | Label for word "step" in step progress (Step 1 of 2) |
| labels.of | String | Label for word "of" in step progress (Step 1 of 2) |
| labels.previous | String | Label for button that navigates one step back |
| labels.next | String | Label for button that navigates one step further |
| labels.cancel | String | Label for button that cancels the whole process |
| labels.finish | String | Label for button (on last step) that finilizes step process |
| allowBack | Boolean (optional) | Flag that can be used to prevent reverting back to previous steps |
| allowNext | Boolean (optional) | Flag that can be used to prevent user to proceed to the next step |
| allowCancel | Boolean (optional) | Flag that can be used to prevent user from clicking cancel |
| onFinish | Function | Function that will be executed after all steps are passed. It receives component's controller (ctrl) as a parameter |
| beforeStepChange | Function (optional) | Function that will be executed before step change. If provided, function needs to return true if step change is allowed. Objects (newStep) containing new step controller and (ctrl) component's controller will be provided as a parameters |
| afterStepChange | Function (optional) | Function that will be executed once step has been changed. Objects (oldStep) containing old step controller and (ctrl) component's controller will be provided as a parameters |
| onCancel | Function (optional) | Function that will be executed once user clicks on cancel button. If not provided, cancel button will not be drawn on the form. Component's controller (ctrl) is provided as a parameter |
