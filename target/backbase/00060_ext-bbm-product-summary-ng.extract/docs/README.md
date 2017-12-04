# ext-bbm-product-summary-ng


Version: **1.0.126**

Mobile extension for the product summary widget.

## Imports

* ui-bb-i18n-ng
* ui-bbm-product-kind-table-view-ng

---

## Example

```javascript
<!-- product summary widget model.xml -->
<property name="extension" viewHint="text-input,admin">
 <value type="string">ext-bbm-product-summary-ng</value>
</property>
```

## Table of Contents
- **Helpers**<br/>    <a href="#Helpers_isInitialLoading">#isInitialLoading(ctrl)</a><br/>    <a href="#Helpers_isEmptyState">#isEmptyState(ctrl)</a><br/>    <a href="#Helpers_isErrorState">#isErrorState(ctrl)</a><br/>
- **ext-bbm-product-summary-ng**<br/>    <a href="#ext-bbm-product-summary-ngprocessKinds">processKinds(kinds)</a><br/>    <a href="#ext-bbm-product-summary-ngproductNameAsc">productNameAsc(productA, productB)</a><br/>
- **Type Definitions**<br/>    <a href="#ProductKindView">ProductKindView</a><br/>    <a href="#ProductView">ProductView</a><br/>

---

## Helpers

Helpers for ext-bbm-product-summary-ng

### <a name="Helpers_isInitialLoading"></a>*#isInitialLoading(ctrl)*

Checks for the initial loading.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| ctrl | [ProductSummaryController](widget-bb-product-summary-ng.html#ProductSummaryController) |  |

##### Returns

Boolean - **

### <a name="Helpers_isEmptyState"></a>*#isEmptyState(ctrl)*

Checks if there are no products.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| ctrl | [ProductSummaryController](widget-bb-product-summary-ng.html#ProductSummaryController) |  |

##### Returns

Boolean - **

### <a name="Helpers_isErrorState"></a>*#isErrorState(ctrl)*

Checks for the error state.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| ctrl | [ProductSummaryController](widget-bb-product-summary-ng.html#ProductSummaryController) |  |

##### Returns

Boolean - **

---

## Hooks

Hooks for widget-bb-product-summary-ng

---

### <a name="ext-bbm-product-summary-ngprocessKinds"></a>*processKinds(kinds)*

Hook for processing product kinds after initialization.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| kinds | Array of [ProductKind](#ProductKind) | ProductKinds to process |

##### Returns

Array of [ProductKindView](#ProductKindView) - **

---

### <a name="ext-bbm-product-summary-ngproductNameAsc"></a>*productNameAsc(productA, productB)*

Sort products alphabetically by name, ascending

| Parameter | Type | Description |
| :-- | :-- | :-- |
| productA | Object |  |
| productB | Object |  |

##### Returns

[('-1'](#('-1') or ['0'](#'0') or ['1')](#'1')) - *result*

## Type Definitions


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
