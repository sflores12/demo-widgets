# ui-bbm-textfield-ng


Version: **1.0.142**

Mobile specific textfield component with extra features such as highlighting
the label and a clear button

## Imports

* ui-bbm-maxlength-ng
* vendor-bb-angular

---

## Example

```javascript
// In an extension:
// file: scripts/index.js
import uiBbmTextfieldNgKey from 'ui-bbm-textfield-ng';

export const dependencyKeys = [
  uiBbmTextfieldNgKey,
];

// file: templates/template.ng.html
<ui-bbm-textfield-ng
 type="text"
 name="name"
 label="{{ 'Name' | i18n }}"
 placeholder="{{ 'Name' | i18n }}"
 role="name-field"
 ng-model="$ctrl.state.name"
 disabled="false"
 required="true"
 max-length="10"
 autofocus="true"
 autocomplete="off"
 autocorrect="off"
 autocapitalize="off"
 clear-button="true">

 <ng-messages
   for="form.name.$error"
   ng-show="form.name.$touched && form.name.$dirty && form.name.$error.required"
   data-role="alert">
   <ng-message when="required" i18n-key="errors.requiredName"></ng-message>
 </ng-messages>

</ui-bbm-textfield-ng>
```

## Table of Contents
- **Exports**<br/>    <a href="#default">default</a><br/>

## Exports

### <a name="default"></a>*default*

The angular module name

**Type:** *String*


---

## uiBBmTextfield


| Property | Type | Description |
| :-- | :-- | :-- |
| name: | String | the name of the input field |
| type: | String | the type of the input field |
| label: | String | the title of the textfield component |
| placeholder: | String | the placeholder of the input field |
| ngModel: | Object | the model of the textfield compenent |
| role: | String (optional) | the role of the input field |
| disabled: | Boolean (optional) | determines if the input field is disabled |
| required: | Boolean (optional) | determines if the input field is required |
| autofocus: | Boolean (optional) | determines if the input field should autofocus |
| autocomplete: | String (optional) | determines if the input field should autocomplete |
| autocorrect: | String (optional) | determines if the input field should autocorrect |
| autocapitalize: | String (optional) | determines if the input field should autocapitalize |
| clearButton: | Boolean (optional) | determines if the input field should show a clear button |
| maxLength: | Number (optional) | the max number of symbols that is allowed |
