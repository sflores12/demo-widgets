# ext-bb-transactions-list-ng


Version: **1.2.23**

Extention used to show list of transactions that match certain criteria,
for instance - specific category, start and end date, productId, etc.
It remains hidden until category search is being executed.

## Imports

* ui-bb-date-label-filter-ng
* ui-bb-empty-state-ng
* ui-bb-format-amount
* ui-bb-i18n-ng
* ui-bb-load-more-ng
* ui-bb-loading-indicator-ng
* ui-bb-substitute-error-ng
* vendor-bb-angular-ng-aria
* vendor-bb-uib-accordion

---

## Example

```javascript
<!-- payment widget model.xml -->
<property name="extension" viewHint="text-input,admin">
 <value type="string">ext-bb-transactions-list-ng</value>
</property>
```

## Table of Contents
- **ext-bb-transactions-list-ng**<br/>    <a href="#ext-bb-transactions-list-ngcategoryClassPrefix">categoryClassPrefix</a><br/>    <a href="#ext-bb-transactions-list-nguncategorizedIconClass">uncategorizedIconClass</a><br/>    <a href="#ext-bb-transactions-list-ngdateFormat">dateFormat</a><br/>    <a href="#ext-bb-transactions-list-ngtransactionTypes">transactionTypes</a><br/>    <a href="#ext-bb-transactions-list-ngformatDate">formatDate()</a><br/>    <a href="#ext-bb-transactions-list-nggetSignedAmount">getSignedAmount(transaction)</a><br/>    <a href="#ext-bb-transactions-list-ngisPaginationTypeMatch">isPaginationTypeMatch($ctrl, type)</a><br/>    <a href="#ext-bb-transactions-list-nggetCategoryIconClass">getCategoryIconClass(transactionCategory, withPrefix)</a><br/>    <a href="#ext-bb-transactions-list-ngisTransactionsAvailable">isTransactionsAvailable(transactions)</a><br/>    <a href="#ext-bb-transactions-list-ngdateLabel">dateLabel(label)</a><br/>    <a href="#ext-bb-transactions-list-ngdefaultSortableColumn">defaultSortableColumn()</a><br/>    <a href="#ext-bb-transactions-list-ngdefaultSortableDirection">defaultSortableDirection()</a><br/>    <a href="#ext-bb-transactions-list-ngdefaultPaginationType">defaultPaginationType(pagination)</a><br/>    <a href="#ext-bb-transactions-list-ngisTransactionsShown">isTransactionsShown()</a><br/>    <a href="#ext-bb-transactions-list-ngprocessTransactions">processTransactions(transactions)</a><br/>

## Exports


## Hooks

Hooks for widget-bb-transactions-ng

---
### <a name="ext-bb-transactions-list-ngcategoryClassPrefix"></a>*categoryClassPrefix*

Category icon CSS class prefix

**Type:** *String*


---
### <a name="ext-bb-transactions-list-nguncategorizedIconClass"></a>*uncategorizedIconClass*

Uncategorized CSS icon class

**Type:** *String*


---
### <a name="ext-bb-transactions-list-ngdateFormat"></a>*dateFormat*

Date Format

**Type:** *String*


---

## Types

Widget custom type preferences

---

## TimePeriod

Date labels enum

---
### <a name="ext-bb-transactions-list-ngtransactionTypes"></a>*transactionTypes*

Transaction types constant

**Type:** *[Types](#Types)*


---

### <a name="ext-bb-transactions-list-ngformatDate"></a>*formatDate()*

Format date based on constant

##### Returns

String - *Date format*

---

### <a name="ext-bb-transactions-list-nggetSignedAmount"></a>*getSignedAmount(transaction)*

Based on credit/debit indicator, put right sign on the transaction amount

| Parameter | Type | Description |
| :-- | :-- | :-- |
| transaction | Object | Transaction object |

##### Returns

Number - *Signed amount*

---

### <a name="ext-bb-transactions-list-ngisPaginationTypeMatch"></a>*isPaginationTypeMatch($ctrl, type)*

Checkes if actual pagination type matches the one, defined in properties

| Parameter | Type | Description |
| :-- | :-- | :-- |
| $ctrl | Function | Current controller |
| type | String | Description of pagination type (pagination, load-more) |

##### Returns

Boolean - **

---

### <a name="ext-bb-transactions-list-nggetCategoryIconClass"></a>*getCategoryIconClass(transactionCategory, withPrefix)*

Converts transaction category name into category CSS icon class

| Parameter | Type | Description |
| :-- | :-- | :-- |
| transactionCategory | String | Transaction category |
| withPrefix | Boolean (optional) | Include class prefix |

##### Returns

String - **

---

### <a name="ext-bb-transactions-list-ngisTransactionsAvailable"></a>*isTransactionsAvailable(transactions)*

Checks if transactions data is available

| Parameter | Type | Description |
| :-- | :-- | :-- |
| transactions | Object |  |

##### Returns

Boolean - *returns true if transactions data is not present*

---

### <a name="ext-bb-transactions-list-ngdateLabel"></a>*dateLabel(label)*

Returns either label like now, today or yesterday or the actual date

| Parameter | Type | Description |
| :-- | :-- | :-- |
| label | String | date |

##### Returns

String - **

---

### <a name="ext-bb-transactions-list-ngdefaultSortableColumn"></a>*defaultSortableColumn()*

defaultSortableColumn default hook

##### Returns

String - **

---

### <a name="ext-bb-transactions-list-ngdefaultSortableDirection"></a>*defaultSortableDirection()*

defaultSortableDirection default hook

##### Returns

String - **

---

### <a name="ext-bb-transactions-list-ngdefaultPaginationType"></a>*defaultPaginationType(pagination)*

defaultPaginationType default hook for setting load-more or pagination as default

| Parameter | Type | Description |
| :-- | :-- | :-- |
| pagination | String | type |

##### Returns

String (optional) - **

---

### <a name="ext-bb-transactions-list-ngisTransactionsShown"></a>*isTransactionsShown()*

Hook for checking if the transactions should be visible

##### Returns

Boolean - **

---

### <a name="ext-bb-transactions-list-ngprocessTransactions"></a>*processTransactions(transactions)*

Hook for process transactions

Add debitCreditSign property to transaction

Add customType field to transaction

Sort transactions collection based on valueDate (descending)

| Parameter | Type | Description |
| :-- | :-- | :-- |
| transactions | Array of Object | The source transactions from the widget controller |

##### Returns

Object - *Processed transaction array*
