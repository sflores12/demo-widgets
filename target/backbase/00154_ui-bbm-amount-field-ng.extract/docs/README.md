# ui-bbm-amount-field-ng


Version: **1.0.53**

Currency input UI component

## Imports

* vendor-bb-angular

---

## Example

```javascript
// In an extension:
// file: scripts/index.js
import uiBbmAmountFieldNgKey from 'ui-bbm-amount-field-ng';

export const dependencyKeys = [
  uiBbmAmountFieldNgKey,
];

// file: templates/template.ng.html
<ui-bbm-amount-field-ng
  max-length="6"
  decimal-max-length="2"
  ng-model="$ctrl.payment.amount"
  currency="$ctrl.currency">
</ui-bbm-amount-field-ng>
```

## Table of Contents
- **Exports**<br/>    <a href="#default">default</a><br/>

## Exports

### <a name="default"></a>*default*

The angular module name

**Type:** *String*


---

## uiBbmAmountFieldNg


| Property | Type | Description |
| :-- | :-- | :-- |
| max-length | String | Maximum number of digits allowed in integer part |
| decimal-max-length | String | Maximum number of digits allowed in decimal part |
| ng-model | Object | Currency input model |
