# ext-bb-product-selected-ng


Version: **1.0.135**

Extension for product summary widget to show currently selected product

## Imports

* ui-bb-i18n-ng
* ui-bb-loading-indicator-ng
* ui-bb-product-summary-ng

---

## Example

```javascript
<!-- payment widget model.xml -->
<property name="extension" viewHint="text-input,admin">
 <value type="string">ext-bb-product-selected-ng</value>
</property>
```

## Table of Contents
- **ext-bb-product-selected-ng**<br/>    <a href="#ext-bb-product-selected-ngprocessProductSelected">processProductSelected(product)</a><br/>
- **Type Definitions**<br/>    <a href="#ProductView">ProductView</a><br/>

## Exports


## Hooks

Hooks for widget-bb-product-summary-ng

---

### <a name="ext-bb-product-selected-ngprocessProductSelected"></a>*processProductSelected(product)*

Hook for processing selected product after selection update

| Parameter | Type | Description |
| :-- | :-- | :-- |
| product | Object | The source Product from the widget controller |

##### Returns

[ProductView](#ProductView) - **

## Type Definitions


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
| currency | String (optional) | ISO currency code |

---
