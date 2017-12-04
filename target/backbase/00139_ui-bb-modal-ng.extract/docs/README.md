# ui-bb-modal-ng


Version: **2.0.77**

UI component for displaying the custom modal.

To open modal dialog define "is-open" attribute with scope property
as value. Modal dialog can be opened by changing value of scope property to "true".
"is-open" has two-way data binding, so when modal dialog is closed, scope property
value will change to "false".

## Imports

* vendor-bb-angular
* vendor-bb-uib-modal

---

## Example

```javascript
// In an extension:
// file: scripts/index.js

import uiBbModalKey from 'ui-bb-modal-ng';

export const dependencyKeys = [
  uiBbModalKey,
]

// file: templates/template.ng.html
<button data-ng-click="ext.isModalOpen = true">Open Modal</button>

<ui-bb-modal
  data-is-open="ext.isModalOpen"
  data-animation="true"
  data-size="'sm'"
  data-backdrop="'static'"
  data-keyboard="true"
  data-on-open="$ctrl.someAction()"
  data-on-close="$ctrl.dismissAction()">
  <div data-ng-include="'#template.ng.html'"></div>
</ui-bb-modal>
```

## Table of Contents
- **ui-bb-modal-ng**<br/>    <a href="#ui-bb-modal-nguiBbModalController">uiBbModalController($uibModal, $scope)</a><br/>

## Exports


## uiBbModalNg


---

## uiBbModalNg

Generic modal component with template transclution

| Property | Type | Description |
| :-- | :-- | :-- |
| is-open | Boolean | Modal open state |
| animation | Boolean | Defines whether the modal should be animated |
| size | String | Defines size of the modal dialog (ex. 'sm', 'lg') |
| keyboard | Boolean | Indicates whether the dialog should be closable by hitting the ESC key. |
| backdrop | Boolean or String | Controls presence of a backdrop. Allowed values: true (default), false (no backdrop), 'static' (disables modal closing by click on the backdrop). |
| on-open | Function | Function to be invoked on opening the modal |
| on-close | Function | Function to be invoked on closing the modal |

---

### <a name="ui-bb-modal-nguiBbModalController"></a>*uiBbModalController($uibModal, $scope)*

Modal instance controller

| Parameter | Type | Description |
| :-- | :-- | :-- |
| $uibModal | Object | AngularUI modal provider |
| $scope | Object | Directive scope |
