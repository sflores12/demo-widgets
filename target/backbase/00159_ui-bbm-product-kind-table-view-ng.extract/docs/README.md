# ui-bbm-product-kind-table-ng


Version: **1.0.125**


## Imports

* ui-bbm-product-summary-ng
* vendor-bb-angular

---

## Example

```javascript
// In an extension:
// file: scripts/index.js
import uiBbmProductKindTableViewKey from 'ui-bbm-product-kind-table-view-ng';

export const dependencyKeys = [
  uiBbmProductKindTableViewKey,
];

// file: templates/template.ng.html
<ui-bbm-product-kind-table-view-ng
  product-kind="productKind"
  on-select="$ctrl.selectProduct(product)"
  data-role="product-kind"
  data-index="{{$index}}"
  messages="{
   available: ('ui-bbm-product-summary.available' | i18n),
   creditLimit: ('ui-bbm-product-summary.creditLimit' | i18n),
   accrued: ('ui-bbm-product-summary.accrued' | i18n),
  }">
  </ui-bbm-product-kind-table-view-ng>
```

## Table of Contents
- **Exports**<br/>    <a href="#default">default</a><br/>

## Exports

### <a name="default"></a>*default*

The angular module name

**Type:** *String*


---

## uiBbmProductKindTableViewComponent

Product kind table view component object

| Property | Type | Description |
| :-- | :-- | :-- |
| product-kind | Object | product kind with a group of products |
| select | Function | function to select a product |
| messages | Object | messages per product kind |
