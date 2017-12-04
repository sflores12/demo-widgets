# ui-bb-number-input-ng


Version: **1.0.143**

UI number input component
The idea of this component is to have an input(numeric) element
which simply does not allow the user to select an invalid number
instead of invalidating the form with ng-min and ng-max. The browser's
native min and max only denies the user to select invalid values with the
input field's controls or arrow keys(user can still manually enter
an invalid value).

## Imports

* vendor-bb-angular

---

## Example

```javascript
// In an extension:
// file: scripts/index.js
import uiBbNumberInputKey from 'ui-bb-number-input-ng';

export const dependencyKeys = [
  uiBbNumberInputKey,
];

// file: templates/template.ng.html
<ui-bb-number-input class="form-control occurence-field"
  name="repeat"
  ng-model="$ctrl.repeat"
  min-value="$ctrl.repeatMin"
  max-value="$ctrl.repeatMax">
</ui-bb-number-input>
```

---

## uiBbNumberInput

Number input directive

| Property | Type | Description |
| :-- | :-- | :-- |
| ng-model | Number | Input value |
| min-value | Number | Minimum value allowed |
| max-value | Number | Maximum value allowed |
