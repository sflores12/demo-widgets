# model-bb-transactions-ng


Version: **1.5.16**

Transactions model module.

## Imports

* data-bb-payment-orders-http-ng
* data-bb-product-summary-http-ng
* data-bb-transactions-http-ng
* lib-bb-model-errors
* lib-bb-storage-ng
* lib-bb-widget-ng
* vendor-bb-angular

---

## Example

```javascript
import modelTransactionsModuleKey, {
  modelTransactionsKey,
} from 'model-bb-transactions-ng';

angular.module('widget-bb-transactions-ng', [
  modelTransactionsModuleKey,
])
.controller('TransactionsController', [
  modelTransactionsKey,
  ...,
])
```

## Table of Contents
- **Exports**<br/>    <a href="#default">default</a><br/>
- **transactionsModel**<br/>    <a href="#transactionsModel_load">#load(params)</a><br/>    <a href="#transactionsModel_getSelectedProduct">#getSelectedProduct()</a><br/>    <a href="#transactionsModel_getCurrentTransaction">#getCurrentTransaction()</a><br/>    <a href="#transactionsModel_storeTransactionAsCurrent">#storeTransactionAsCurrent(transaction)</a><br/>    <a href="#transactionsModel_updateTransactionCategory">#updateTransactionCategory(id, body)</a><br/>    <a href="#transactionsModel_getCurrencies">#getCurrencies()</a><br/>
- **model-bb-transactions-ng**<br/>    <a href="#model-bb-transactions-ngtransactions@getExportFileResource">transactions@getExportFileResource(params)</a><br/>
- **Type Definitions**<br/>    <a href="#TransactionUpdate">TransactionUpdate</a><br/>    <a href="#TransactionItem">TransactionItem</a><br/>    <a href="#ProductViewModel">ProductViewModel</a><br/>

## Exports

### <a name="default"></a>*default*

Transactions Model

**Type:** *String*


---

## transactionsModel


### <a name="transactionsModel_load"></a>*#load(params)*

Load transactions.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| params | Object | Request parameters |

##### Returns

Promise of Array of [TransactionItem](#TransactionItem) - *List of transactions as a promise.*

### <a name="transactionsModel_getSelectedProduct"></a>*#getSelectedProduct()*

Get current selected product

##### Returns

Promise of [Product](model-bb-product-summary-ng.html#Product), [ModelError](lib-bb-model-errors.html#ModelError) - *A Promise with Product*

### <a name="transactionsModel_getCurrentTransaction"></a>*#getCurrentTransaction()*

Tries to read the current transaction from sync preferences

##### Returns

Object - *Transaction data*

### <a name="transactionsModel_storeTransactionAsCurrent"></a>*#storeTransactionAsCurrent(transaction)*

Stores a given transaction as current in sync preferences

| Parameter | Type | Description |
| :-- | :-- | :-- |
| transaction | Object | Transaction data |

### <a name="transactionsModel_updateTransactionCategory"></a>*#updateTransactionCategory(id, body)*

Updates the transaction's category

| Parameter | Type | Description |
| :-- | :-- | :-- |
| id | String | Transaction identifier |
| body | [TransactionUpdate](#TransactionUpdate) | Update object |

##### Returns

Promise of [TransactionItem](#TransactionItem), [ModelError](lib-bb-model-errors.html#ModelError) - *A Promise with Transaction item or error*

### <a name="transactionsModel_getCurrencies"></a>*#getCurrencies()*

Get available currencies.

##### Returns

Promise of Array of Object - *A Promise with response.*

---

### <a name="model-bb-transactions-ngtransactions@getExportFileResource"></a>*transactions@getExportFileResource(params)*

Compound URI by data module method and query parameters

| Parameter | Type | Description |
| :-- | :-- | :-- |
| params | Object | Request parameters |

## Type Definitions


### <a name="TransactionUpdate"></a>*TransactionUpdate*

TransactionUpdate type definition

**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| categoryName | String | Name of the category |

### <a name="TransactionItem"></a>*TransactionItem*

TransactionItem type definition

**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| id | String | Internally used unique identification of the transaction |
| arrangementId | String | Reference to the product to which the transaction belongs |
| externalId | String | Internally used unique external identification of the transaction |
| externalArrangementId | String | External reference to the product to which the transaction belongs |
| productId | String | Reference to the product to which the transaction belongs |
| reference | String | A tag/label issued by the initiator of the transaction in order to be able to refer to the respective transaction |
| description | String | Transaction description |
| typeGroup | String | Bank specific code of the group the transaaction type belangs to this to be mapped to in integration |
| type | String | Bank specific code to be mapped to generic type in integration |
| category | String | Transaction category |
| bookingDate | String | The date the amount is posted to the balance of an account from a book keeping perspective |
| valueDate | String | The date on which an amount posted to an account becomes interest bearing |
| amount | Number | The amount of the transaction |
| currency | String | Currency code |
| creditDebitIndicator | String | Indicator if transaction is incoming our outgoing |
| instructedAmount | Number | Only present if the transaction currency &lt;&gt; account currency |
| instructedCurrency | String | Currency code of instructed amount |
| currencyExchangeRate | Number | The exchange rate (between both account and transaction currency) that was used for the conversion. To be used if those currencies are not the same |
| counterPartyName | String | The name of the counterparty |
| counterPartyAccountNumber | String | The International Bank Account Number of the counterparty |
| counterPartyBIC | String | The BIC of the counterparty |
| counterPartyCountry | String | ISO Country code |
| counterPartyBankName | String | The bank name of the counterparty |
| creditorId | String | Id of the creditor (Only for SEPA DD) |
| mandateReference | String | Mandate Reference (Only for SEPA DD) |

### <a name="ProductViewModel"></a>*ProductViewModel*

Product view model type definition

**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| productName | String | name of the Product |
| productNumber | String | number of the Product |

---
