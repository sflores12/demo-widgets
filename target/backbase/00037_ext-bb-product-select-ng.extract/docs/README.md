# ext-bb-product-select-ng


Version: **1.0.135**

Product select extension for product summary widget.

## Imports

* ui-bb-account-selector
* vendor-bb-angular-ng-aria

---

## Example

```javascript
<!-- payment widget model.xml -->
<property name="extension" viewHint="text-input,admin">
 <value type="string">ext-bb-product-select-ng</value>
</property>
```

## Table of Contents
- **ext-bb-product-select-ng**<br/>    <a href="#ext-bb-product-select-ngprocessKinds">processKinds(product)</a><br/>    <a href="#ext-bb-product-select-ngprocessProductSelected">processProductSelected(product)</a><br/>
- **Type Definitions**<br/>    <a href="#ProductKindView">ProductKindView</a><br/>    <a href="#ProductView">ProductView</a><br/>

---

### <a name="ext-bb-product-select-ngprocessKinds"></a>*processKinds(product)*

Hook for process products

Make flat list

Map to view model

| Parameter | Type | Description |
| :-- | :-- | :-- |
| product | Array | The source Product from the widget controller |

##### Returns

Array of [ProductView](#ProductView) - **

---

### <a name="ext-bb-product-select-ngprocessProductSelected"></a>*processProductSelected(product)*

Hook for processing selected product after selection update
Prepares the fields of the selected product into a form ready for display to the User

| Parameter | Type | Description |
| :-- | :-- | :-- |
| product | Object | Product to process |

##### Returns

Object - **

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
| amount | String (optional) | The most important associated value to be displayed |
| currency | String (optional) | ISO currency code |

---
