# ui-bbm-product-summary-ng


Version: **1.0.125**


## Imports

* ui-bb-format-amount
* vendor-bb-angular

---

## Example

```javascript
// In an extension:
// file: scripts/index.js
import uiBbmProductSummaryNgKey from 'ui-bbm-product-summary-ng';

export const dependencyKeys = [
  uiBbmProductSummaryNgKey,
];

// file: templates/template.ng.html
<ui-bbm-product-summary-ng
  product-name="product.name"
  product-identifier="$ctrl.getIdentifier(product)"
  currency="product.currency"
  primary-value="$ctrl.getPrimaryValue(product)"
  available-balance="product.availableBalance"
  accrued-interest="product.accruedInterest"
  credit-limit="product.creditLimit"
  messages="{
    available: ('ui-bbm-product-summary.available' | i18n),
    creditLimit: ('ui-bbm-product-summary.creditLimit' | i18n),
    accrued: ('ui-bbm-product-summary.accrued' | i18n),
  }">
</ui-bbm-product-summary-ng>
```

## Table of Contents
- **Exports**<br/>    <a href="#default">default</a><br/>

## Exports

### <a name="default"></a>*default*

The angular module name

**Type:** *String*


---

## uiBbmProductSummaryComponent

Product summary component descriptor.

| Property | Type | Description |
| :-- | :-- | :-- |
| productName | String | The product's name, suitable for display to users |
| productIdentifier | String | The identifier of the product from the user's perspective |
| currency | String | Currency code |
| primaryValue | String | The most important associated value to be displayed |
| availableBalance | String | Available balance of the product |
| accruedInterest | String | Accrued interest of the product |
| creditLimit | String | Credit limit of the product |
| messages | Object | Messages |
