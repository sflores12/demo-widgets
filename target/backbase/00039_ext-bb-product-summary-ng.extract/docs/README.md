# ext-bb-product-summary-ng


Version: **1.4.33**

Default extension for product summary widget.

## Imports

* ui-bb-account-card
* ui-bb-element-dimensions-ng
* ui-bb-format-amount
* ui-bb-i18n-ng
* ui-bb-loading-indicator-ng
* ui-bb-substitute-error-ng
* vendor-bb-angular-ng-aria
* vendor-bb-uib-accordion
* vendor-bb-uib-popover

---

## Example

```javascript
<!-- payment widget model.xml -->
<property name="extension" viewHint="text-input,admin">
 <value type="string">ext-bb-product-summary-ng</value>
</property>

Usage of ui-bb-account-card component in template

<ui-bb-account-card
  account-name="$ctrl.payment.from.name"
  account-number="$ctrl.payment.from.identifier"
  amount="$ctrl.payment.from.amount"
  currency="$ctrl.payment.from.currency"
  show-avatar="true">
</ui-bb-account-card>

Usage of ui-bb-format-amount component in template

<ui-bb-format-amount
amount="$option.amount"
currency="$option.currency"
wrap
no-map
></ui-bb-format-amount>

where
amount {string} Amount string
currency {string} Currency code string
wrap Condition to process values as HTML or not
noMap Condition to stop looking for currency mapping in the currency-map
```

## Table of Contents
- **ext-bb-product-summary-ng**<br/>    <a href="#ext-bb-product-summary-ngbuildAdditionalInfo">buildAdditionalInfo(product)</a><br/>    <a href="#ext-bb-product-summary-ngfilterVisibleProducts">filterVisibleProducts(products)</a><br/>    <a href="#ext-bb-product-summary-nghandleAlias">handleAlias(name, alias)</a><br/>    <a href="#ext-bb-product-summary-ngprocessKinds">processKinds(kinds)</a><br/>    <a href="#ext-bb-product-summary-ngproductNameAsc">productNameAsc(productA, productB)</a><br/>
- **Type Definitions**<br/>    <a href="#AdditionalInfo">AdditionalInfo</a><br/>    <a href="#ProductKindView">ProductKindView</a><br/>    <a href="#ProductView">ProductView</a><br/>

## Exports


## Hooks

Hooks for widget-bb-product-summary-ng

---

### <a name="ext-bb-product-summary-ngbuildAdditionalInfo"></a>*buildAdditionalInfo(product)*

Builds AdditionalInfo array out of ProductView object.
Result can be passed to account card component

| Parameter | Type | Description |
| :-- | :-- | :-- |
| product | [ProductView](#ProductView) |  |

##### Returns

Array of [AdditionalInfo](#AdditionalInfo) - **

---

### <a name="ext-bb-product-summary-ngfilterVisibleProducts"></a>*filterVisibleProducts(products)*

Filters products by visibility

| Parameter | Type | Description |
| :-- | :-- | :-- |
| products | Array of Object |  |

##### Returns

Object - *products - filtered products*

---

### <a name="ext-bb-product-summary-nghandleAlias"></a>*handleAlias(name, alias)*

Handles displaying a value for alias depending on what is available
from the product.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| name | String |  |
| alias | String |  |

##### Returns

String - *alias || name || fallback message*

---

### <a name="ext-bb-product-summary-ngprocessKinds"></a>*processKinds(kinds)*

Hook for processing product kinds after initialization.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| kinds | Array of [ProductKind](#ProductKind) | ProductKinds to process |

##### Returns

Array of [ProductKindView](#ProductKindView) - **

---

### <a name="ext-bb-product-summary-ngproductNameAsc"></a>*productNameAsc(productA, productB)*

Sort products alphabetically by name, ascending

| Parameter | Type | Description |
| :-- | :-- | :-- |
| productA | Object |  |
| productB | Object |  |

##### Returns

[('-1'](#('-1') or ['0'](#'0') or ['1')](#'1')) - *result*

## Type Definitions


### <a name="AdditionalInfo"></a>*AdditionalInfo*


**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| name | String (optional) | Additional info label |
| amount | Number (optional) | Additional info row's amount |
| currency | String (optional) | ISO currency code |

### <a name="ProductKindView"></a>*ProductKindView*


**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| id | String | The Product Kind identifier |
| name | String | The name of the Kind, suitable for display to users |
| products | Array of [ProductView](#ProductView) | The products of this Kind |

### <a name="ProductView"></a>*ProductView*


**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| id | String | The internal Product Identifier |
| name | String | The product's name, suitable for display to users |
| identifier | String (optional) | The identifier of the Product from the user's perspective |
| primaryValue | String (optional) | The most important associated value to be displayed |
| secondaryValue | String (optional) | A secondary associated value to be displayed |
| secondaryLabel | String (optional) | A label to describe the secondary value |
| tertiaryValue | String (optional) | A tertiary associated value to be displayed |
| tertiaryLabel | String (optional) | A label to describe the tertiary value |
| currency | String (optional) | ISO currency code |

---
