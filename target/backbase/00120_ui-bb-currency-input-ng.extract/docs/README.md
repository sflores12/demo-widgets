# ui-bb-currency-input-ng


Version: **1.3.20**

Currency input UI component

## Imports

* lib-bb-currency-ng
* ui-bb-dropdown-select
* vendor-bb-angular

---

## Example

```javascript
// In an extension:
// file: scripts/index.js
import uiBbCurrencyInputNgKey from 'ui-bb-currency-input-ng';

export const dependencyKeys = [
  uiBbCurrencyInputNgKey,
];

// file: templates/template.ng.html
<ui-bb-currency-input-ng
  data-max-length="6"
  data-decimal-max-length="2"
  data-placeholder="000,000"
  data-ng-model="$ctrl.payment.amount"
  data-currencies="$ctrl.currencies"
  data-integer>
</ui-bb-currency-input-ng>
```

## Table of Contents
- **Exports**<br/>    <a href="#default">default</a><br/>
- **uiBbCurrencyInputNg**<br/>    <a href="#uiBbCurrencyInputNg_messages">#messages</a><br/>

## Exports

### <a name="default"></a>*default*

The angular module name

**Type:** *String*


---

## uiBbCurrencyInputNg


| Property | Type | Description |
| :-- | :-- | :-- |
| placeholder | String | Text to display for input's placeholder |
| max-length | String | Maximum number of digits allowed in whole part |
| decimal-max-length | String | Maximum number of digits allowed in decimal part |
| currencies | Array | List of available currencies |
| ng-model | Object | Currency input model |
| messages | Object | Localized messages |
| integer | [void](#void) | If attribute is present, decimal places input will be hidden |
### <a name="uiBbCurrencyInputNg_messages"></a>*#messages*

List of messages to be shown by component

**Type:** *Object*

