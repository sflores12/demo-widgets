# ui-bb-confirm-ng


Version: **2.0.72**

UI component for displaying the confirmation modal dialog.

## Imports

* ui-bb-modal-ng
* vendor-bb-angular
* vendor-bb-angular-sanitize

---

## Example

```javascript
// In an extension:
// file: scripts/index.js
import uiBbConfirmKey from 'ui-bb-confirm-ng';

export const dependencyKeys = [
  uiBbConfirmKey,
];

// file: templates/template.ng.html
<button data-ng-click="isConfirmationOpen = true">Open confirmation</button>

<!-- Large dialog, opened without animation -->
<ui-bb-confirm
  data-is-open="isConfirmationOpen"
  data-labels="{
    heading: 'Are you sure?',
    bodyText: 'Are you sure you want to perform this action?',
    cancel: 'Cancel',
    confirm: 'Ok',
  }"
  data-size="'lg'"
  data-animation="false"
  data-onCancel="$ctrl.onCancel()"
  data-onConfirm="$ctrl.doAction()">
</ui-bb-confirm>

<!-- Dialog with red confirm button which can't be dismissed and centered buttons -->
<ui-bb-confirm
  data-is-open="isConfirmationOpen"
  data-labels="{
    heading: 'Are you sure?',
    bodyText: 'Are you sure you want to delete this item?',
    cancel: 'No',
    confirm: 'Delete',
  }"
  data-confirm-btn-class="'btn-danger'"
  data-is-dismissible="false"
  data-footer-class="'text-centered'"
  data-onClose="$ctrl.onClose()"
  data-onConfirm="$ctrl.doAction()">
</ui-bb-confirm>
```

## Table of Contents
- **Exports**<br/>    <a href="#default">default</a><br/>
- **ui-bb-confirm-ng**<br/>    <a href="#ui-bb-confirm-nguiBbConfirmController">uiBbConfirmController()</a><br/>

## Exports

### <a name="default"></a>*default*

The angular module name

**Type:** *String*


---

## uiBbConfirmComponent

Confirmation modal component

| Property | Type | Description |
| :-- | :-- | :-- |
| isOpen | Boolean | Flag which indicates dialog's open state |
| labels | Object | Object with string labels for component |
| isDismissible | Boolean | Flag which indicates can component be dismissed by keyboard or mouse click. Default is true. |
| confirmBtnClass | String | Class name for confirmation button |
| footerClass | String | Class name for the footer section |
| size | String | Confirmation modal dialog size |
| animation | Boolean | Flag which indicates will dialog be open/hidden with animation. Default is true. |
| onConfirm | Function | Confirm callback function |
| onCancel | Function | Cancel callback function |
| onClose | Function | Dialog close callback function |

---

### <a name="ui-bb-confirm-nguiBbConfirmController"></a>*uiBbConfirmController()*

Confirmation modal controller

---
