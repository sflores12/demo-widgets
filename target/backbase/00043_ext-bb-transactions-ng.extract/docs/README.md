# ext-bb-transactions-ng


Version: **1.7.15**

Default extension for transactions widget.

## Imports

* ui-bb-date-label-filter-ng
* ui-bb-empty-state-ng
* ui-bb-format-amount
* ui-bb-i18n-ng
* ui-bb-load-more-ng
* ui-bb-loading-indicator-ng
* ui-bb-notification-stripe-ng
* ui-bb-paginator-ng
* ui-bb-substitute-error-ng
* ui-bb-transaction-search-filter-ng
* vendor-bb-angular-ng-aria
* vendor-bb-uib-accordion
* vendor-bb-uib-alert

---

## Example

```javascript
<!-- payment widget model.xml -->
<property name="extension" viewHint="text-input,admin">
 <value type="string">ext-bb-transactions-ng</value>
</property>
```

## Table of Contents
- **ext-bb-transactions-ng**<br/>    <a href="#ext-bb-transactions-ngcategoryClassPrefix">categoryClassPrefix</a><br/>    <a href="#ext-bb-transactions-nguncategorizedIconClass">uncategorizedIconClass</a><br/>    <a href="#ext-bb-transactions-ngtransactionTypes">transactionTypes</a><br/>    <a href="#ext-bb-transactions-nggetSignedAmount">getSignedAmount(transaction)</a><br/>    <a href="#ext-bb-transactions-ngisPaginationTypeMatch">isPaginationTypeMatch($ctrl, type)</a><br/>    <a href="#ext-bb-transactions-ngshowNoResults">showNoResults($ctrl)</a><br/>    <a href="#ext-bb-transactions-nggetCategoryIconClass">getCategoryIconClass(transactionCategory, withPrefix)</a><br/>    <a href="#ext-bb-transactions-ngdateLabel">dateLabel(label)</a><br/>    <a href="#ext-bb-transactions-ngdefaultSortableColumn">defaultSortableColumn()</a><br/>    <a href="#ext-bb-transactions-ngdefaultSortableDirection">defaultSortableDirection()</a><br/>    <a href="#ext-bb-transactions-ngdefaultPaginationType">defaultPaginationType(pagination)</a><br/>    <a href="#ext-bb-transactions-ngprocessTransactions">processTransactions(transactions)</a><br/>

## Exports


## Hooks

Hooks for widget-bb-transactions-ng

---
### <a name="ext-bb-transactions-ngcategoryClassPrefix"></a>*categoryClassPrefix*

Category icon CSS class prefix

**Type:** *String*


---
### <a name="ext-bb-transactions-nguncategorizedIconClass"></a>*uncategorizedIconClass*

Uncategorized CSS icon class

**Type:** *String*


---

## Types

Widget custom type preferences

---

## TimePeriod

Date labels enum

---
### <a name="ext-bb-transactions-ngtransactionTypes"></a>*transactionTypes*

Transaction types constant

**Type:** *[Types](#Types)*


---

### <a name="ext-bb-transactions-nggetSignedAmount"></a>*getSignedAmount(transaction)*

Based on credit/debit indicator, put right sign on the transaction amount

| Parameter | Type | Description |
| :-- | :-- | :-- |
| transaction | Object | Transaction object |

##### Returns

Number - *Signed amount*

---

### <a name="ext-bb-transactions-ngisPaginationTypeMatch"></a>*isPaginationTypeMatch($ctrl, type)*

Checkes if actual pagination type matches the one, defined in properties

| Parameter | Type | Description |
| :-- | :-- | :-- |
| $ctrl | Function | Current controller |
| type | String | Description of pagination type (pagination, load-more) |

##### Returns

Boolean - **

---

### <a name="ext-bb-transactions-ngshowNoResults"></a>*showNoResults($ctrl)*

Checks if conditions are met to show the no result icon and message

| Parameter | Type | Description |
| :-- | :-- | :-- |
| $ctrl | Function | Current controller |

##### Returns

Boolean - **

---

### <a name="ext-bb-transactions-nggetCategoryIconClass"></a>*getCategoryIconClass(transactionCategory, withPrefix)*

Converts transaction category name into category CSS icon class

| Parameter | Type | Description |
| :-- | :-- | :-- |
| transactionCategory | String | Transaction category |
| withPrefix | Boolean (optional) | Include class prefix |

##### Returns

String - **

---

### <a name="ext-bb-transactions-ngdateLabel"></a>*dateLabel(label)*

Returns either label like now, today or yesterday or the actual date

| Parameter | Type | Description |
| :-- | :-- | :-- |
| label | String | date |

##### Returns

String - **

---

### <a name="ext-bb-transactions-ngdefaultSortableColumn"></a>*defaultSortableColumn()*

defaultSortableColumn default hook

##### Returns

String - **

---

### <a name="ext-bb-transactions-ngdefaultSortableDirection"></a>*defaultSortableDirection()*

defaultSortableDirection default hook

##### Returns

String - **

---

### <a name="ext-bb-transactions-ngdefaultPaginationType"></a>*defaultPaginationType(pagination)*

defaultPaginationType default hook for setting load-more or pagination as default

| Parameter | Type | Description |
| :-- | :-- | :-- |
| pagination | String | type |

##### Returns

String (optional) - **

---

### <a name="ext-bb-transactions-ngprocessTransactions"></a>*processTransactions(transactions)*

Hook for process transactions

Add debitCreditSign property to transaction

Add customType field to transaction

Sort transactions collection based on valueDate (descending)

| Parameter | Type | Description |
| :-- | :-- | :-- |
| transactions | Array of Object | The source transactions from the widget controller |

##### Returns

Object - *Processed transaction array*
