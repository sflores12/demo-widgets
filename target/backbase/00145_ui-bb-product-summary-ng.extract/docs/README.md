# ui-bb-product-summary-ng


Version: **1.0.125**


## Imports

* ui-bb-format-amount
* vendor-bb-angular

---

## Example

```javascript
// In an extension:
// file: scripts/index.js
import uiBbProductSummaryNgKey from 'ui-bb-product-summary-ng';

export const dependencyKeys = [
  uiBbProductSummaryNgKey,
];

// file: templates/template.ng.html
<ui-bb-product-summary-ng
product-name="product.name"
product-identifier="product.identifier"
primary-value="product.primaryValue"
secondary-value="product.secondaryValue"
secondary-label="product.secondaryLabel"
tertiary-value="product.tertiaryValue"
tertiary-label="product.tertiaryLabel"
currency="product.currency">
</ui-bb-product-summary-ng>
```

## Table of Contents
- **Exports**<br/>    <a href="#default">default</a><br/>

## Exports

### <a name="default"></a>*default*

The angular module name

**Type:** *String*


---

## uiBbProductSummaryComponent

Product Summary Component Object

| Property | Type | Description |
| :-- | :-- | :-- |
| product-name | String | name of the product |
| product-identifier | String | product indentifier |
| currency | String | currency of the product |
| primary-value | String | primary value of the product |
| secondary-value | String | secondary value of the product |
| secondary-label | String | label for the secondary value |
| tertiary-value | String | tertiary value of the product |
| tertiary-label | String | label for the tertiary value |
| on-select | String | function to be executed on product summary selection |
