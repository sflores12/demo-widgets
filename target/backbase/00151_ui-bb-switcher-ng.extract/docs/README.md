# ui-bb-switcher-ng


Version: **1.2.99**

State switcher UI component

## Imports

* vendor-bb-angular

---

## Example

```javascript
// In an extension:
// file: scripts/index.js
import uiBbSwitcherNgKey from 'ui-bb-switcher-ng';

export const dependencyKeys = [
  uiBbSwitcherNgKey,
];

// file: templates/template.ng.html
<ui-bb-switcher-ng
  data-switcher="user.toBeSaved"
  data-size="small"
 data-on="Switch on text"
 data-off="Switch off text"
 data-disabled="false"
  aria-label="Save user">
</ui-bb-switcher-ng>
```

---

## uiBbSwitcherNg

Simple switch component. From next major version,
'switch', 'slider' and 'switch-text' CSS classes will be removed
from template

| Property | Type | Description |
| :-- | :-- | :-- |
| switcher | Boolean | Boolean variable to track switcher state |
| size | String | Defines the switcher's size ('normal', 'wide', 'small', 'smaller') (deprecated) |
| on | String | Text for 'checked' state |
| off | String | Text for 'un-checked' state |
| disabled | Boolean | pass "true" if we want it to be disabled |
| ariaLabel | String | string to be used as aria-label attribute |
