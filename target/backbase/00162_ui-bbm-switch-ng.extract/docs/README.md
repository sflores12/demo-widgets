# ui-bbm-switch-ng


Version: **1.1.104**

Mobile Switch UI component

## Imports

* vendor-bb-angular

---

## Example

```javascript
// In an extension:
// file: scripts/index.js
import uiBbmSwitchNgKey from 'ui-bbm-switch-ng';

export const dependencyKeys = [
  uiBbmSwitchNgKey,
];

// file: templates/template.ng.html
<ui-bbm-switch-ng
  title="{{ 'form.label.urgentPayment' | i18n }}"
  name="urgent"
  data-ng-model="$ctrl.urgentPayment"
</ui-bbm-switch-ng>
```

## Table of Contents
- **Exports**<br/>    <a href="#default">default</a><br/>

## Exports

### <a name="default"></a>*default*

The angular module name

**Type:** *String*


---

## uiBbmSwitchNg


| Property | Type | Description |
| :-- | :-- | :-- |
| name | [name](#name) | Input name |
| title | [title](#title) | Container title |
| ngModel | Boolean | Model |
