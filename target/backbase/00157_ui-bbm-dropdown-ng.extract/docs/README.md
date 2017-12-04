# ui-bbm-dropdown-ng


Version: **1.0.147**

Mobile Dropdown UI component

## Imports

* lib-bbm-plugins
* vendor-bb-angular

---

## Example

```javascript
// In an extension:
// file: scripts/index.js
import uiBbmDropdownNgKey from 'ui-bbm-dropdown-ng';

export const dependencyKeys = [
  uiBbmDropdownNgKey,
];

// file: templates/template.ng.html
<ui-bbm-dropdown-ng
  data-label="'Frequency'"
  data-title="'Select frequency'"
  data-ng-model="$ctrl.frequency"
  data-options="$ctrl.frequencies">
</ui-bbm-dropdown-ng>
```

## Table of Contents
- **Exports**<br/>    <a href="#default">default</a><br/>
- **Type Definitions**<br/>    <a href="#DropdownOption">DropdownOption</a><br/>

## Exports

### <a name="default"></a>*default*

The angular module name

**Type:** *String*


---

## uiBbmDropdownNg


| Property | Type | Description |
| :-- | :-- | :-- |
| label | String | Text label |
| title | String | Dropdown title |
| ngModel | String | Selected option |
| options | Array of [DropdownOption](#DropdownOption) | List of dropdown options |

## Type Definitions


### <a name="DropdownOption"></a>*DropdownOption*


**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| id | String | Identifier of the option |
| text | String | Text of the option, that will be displayed in a dropdown |

---
