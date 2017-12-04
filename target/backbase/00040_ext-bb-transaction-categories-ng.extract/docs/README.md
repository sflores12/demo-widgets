# ext-bb-transaction-categories-ng


Version: **1.1.4**

Default extension for widget-bb-transaction-categories-ng

## Imports

* ui-bb-format-amount
* ui-bb-i18n-ng
* ui-bb-loading-indicator-ng
* ui-bb-modal-ng
* vendor-bb-angular-ng-aria

---

## Table of Contents
- **ext-bb-transaction-categories-ng**<br/>    <a href="#ext-bb-transaction-categories-ngCATEGORY_CLASS_PREFIX">CATEGORY_CLASS_PREFIX</a><br/>    <a href="#ext-bb-transaction-categories-ngUNCATEGORIZED_ICON_CLASS">UNCATEGORIZED_ICON_CLASS</a><br/>    <a href="#ext-bb-transaction-categories-ngpositiveSignKey">positiveSignKey</a><br/>    <a href="#ext-bb-transaction-categories-nggetCategoryIconClass">getCategoryIconClass(transactionCategory)</a><br/>    <a href="#ext-bb-transaction-categories-nggetSignedAmount">getSignedAmount(transaction)</a><br/>    <a href="#ext-bb-transaction-categories-nggetModalData">getModalData()</a><br/>    <a href="#ext-bb-transaction-categories-nginitModal">initModal(ctrl)</a><br/>    <a href="#ext-bb-transaction-categories-ngcancel">cancel()</a><br/>    <a href="#ext-bb-transaction-categories-ngsubmit">submit()</a><br/>    <a href="#ext-bb-transaction-categories-ngonClose">onClose()</a><br/>

---
### <a name="ext-bb-transaction-categories-ngCATEGORY_CLASS_PREFIX"></a>*CATEGORY_CLASS_PREFIX*

Category icon CSS class prefix

**Type:** *String*


---
### <a name="ext-bb-transaction-categories-ngUNCATEGORIZED_ICON_CLASS"></a>*UNCATEGORIZED_ICON_CLASS*

Uncategorized CSS icon class

**Type:** *String*


---
### <a name="ext-bb-transaction-categories-ngpositiveSignKey"></a>*positiveSignKey*

Debit transaction type

**Type:** *String*


---

## modal

Contains default modal config (if any) used to init the modal window

---

### <a name="ext-bb-transaction-categories-nggetCategoryIconClass"></a>*getCategoryIconClass(transactionCategory)*

Converts transaction category name into category CSS icon class

| Parameter | Type | Description |
| :-- | :-- | :-- |
| transactionCategory | String | Transaction category |

##### Returns

String - **

---

### <a name="ext-bb-transaction-categories-nggetSignedAmount"></a>*getSignedAmount(transaction)*

Based on credit/debit indicator, put right sign on the transaction amount

| Parameter | Type | Description |
| :-- | :-- | :-- |
| transaction | Object | Transaction object |

##### Returns

Number - *Signed amount*

---

### <a name="ext-bb-transaction-categories-nggetModalData"></a>*getModalData()*

Get modal widget data

##### Returns

Object - **

---

### <a name="ext-bb-transaction-categories-nginitModal"></a>*initModal(ctrl)*

Get modal widget data

| Parameter | Type | Description |
| :-- | :-- | :-- |
| ctrl | Object |  |

##### Returns

[void](#void) - **

---

### <a name="ext-bb-transaction-categories-ngcancel"></a>*cancel()*

Cancel / close the modal window

##### Returns

[void](#void) - **

---

### <a name="ext-bb-transaction-categories-ngsubmit"></a>*submit()*

Submit a category object to update transactions' category

##### Returns

[void](#void) - **

---

### <a name="ext-bb-transaction-categories-ngonClose"></a>*onClose()*

Handler to call cancel()

##### Returns

[void](#void) - **
