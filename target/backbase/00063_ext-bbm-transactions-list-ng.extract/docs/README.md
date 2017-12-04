# ext-bbm-transactions-list-ng


Version: **1.1.21**

Mobile extension for the transactions list widget.

## Imports

* ui-bb-format-amount
* ui-bb-i18n-ng
* ui-bbm-scroll-ng

---

## Example

```javascript
<!-- transactions widget model.xml -->
<property name="extension" viewHint="text-input,admin">
 <value type="string">ext-bbm-transactions-list-ng</value>
</property>
```

## Table of Contents
- **Hooks**<br/>    <a href="#Hooks_processProductSelected">#processProductSelected(product)</a><br/>    <a href="#Hooks_processTransactions">#processTransactions(transactions)</a><br/>
- **Type Definitions**<br/>    <a href="#ProductView">ProductView</a><br/>

## Exports


## Hooks

Hooks for widget-bb-transactions-ng

### <a name="Hooks_processProductSelected"></a>*#processProductSelected(product)*

Hook to process the selected product.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| product | Object | The original product data from the API |

##### Returns

[ProductView](#ProductView) - *Processed product*

### <a name="Hooks_processTransactions"></a>*#processTransactions(transactions)*

Hook to process the list of transactions.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| transactions | Array of Object | The original transactions from the API |

##### Returns

Array of Object - *The list of processed transactions*

---

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

---
