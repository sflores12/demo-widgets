# data-bb-product-summary-http-ng


Version: **1.3.2**

A data module for accessing the Product Summary REST API.

## Imports

* vendor-bb-angular

---

## Example

```javascript
import productSummaryDataModuleKey, {
  productSummaryDataKey,
} from 'data-bb-product-summary-http-ng';
```

## Table of Contents
- **Exports**<br/>    <a href="#default">default</a><br/>    <a href="#productSummaryDataKey">productSummaryDataKey</a><br/>
- **ProductSummaryData**<br/>    <a href="#ProductSummaryData_getProductsummary">#getProductsummary(params, headers)</a><br/>    <a href="#ProductSummaryData_getProductsummaryDebitaccounts">#getProductsummaryDebitaccounts(params, headers)</a><br/>    <a href="#ProductSummaryData_getProductsummaryCreditaccounts">#getProductsummaryCreditaccounts(params, headers)</a><br/>    <a href="#ProductSummaryData_getProductsummaryArrangements">#getProductsummaryArrangements(params, headers)</a><br/>    <a href="#ProductSummaryData_getProductsummaryConfigurationRecord">#getProductsummaryConfigurationRecord(legalEntityId, params, headers)</a><br/>    <a href="#ProductSummaryData_getProductsummaryContextArrangements">#getProductsummaryContextArrangements(params, headers)</a><br/>
- **ProductSummaryDataProvider**<br/>    <a href="#ProductSummaryDataProvider_setBaseUri">#setBaseUri(baseUri)</a><br/>    <a href="#ProductSummaryDataProvider_$get">#$get()</a><br/>
- **Type Definitions**<br/>    <a href="#ProductSummaryData.AggregatedBalance">ProductSummaryData.AggregatedBalance</a><br/>    <a href="#ProductSummaryData.CreditCard">ProductSummaryData.CreditCard</a><br/>    <a href="#ProductSummaryData.CurrentAccount">ProductSummaryData.CurrentAccount</a><br/>    <a href="#ProductSummaryData.DebitCard">ProductSummaryData.DebitCard</a><br/>    <a href="#ProductSummaryData.DebitCardItem">ProductSummaryData.DebitCardItem</a><br/>    <a href="#ProductSummaryData.InvestmentAccount">ProductSummaryData.InvestmentAccount</a><br/>    <a href="#ProductSummaryData.Loan">ProductSummaryData.Loan</a><br/>    <a href="#ProductSummaryData.Productsummary-EXAMPLE">ProductSummaryData.Productsummary-EXAMPLE</a><br/>    <a href="#ProductSummaryData.Productsummary-GET">ProductSummaryData.Productsummary-GET</a><br/>    <a href="#ProductSummaryData.ProductsummaryFlatStructure-GET">ProductSummaryData.ProductsummaryFlatStructure-GET</a><br/>    <a href="#ProductSummaryData.ProductsummaryItem">ProductSummaryData.ProductsummaryItem</a><br/>    <a href="#ProductSummaryData.SavingsAccount">ProductSummaryData.SavingsAccount</a><br/>    <a href="#ProductSummaryData.TermDeposit">ProductSummaryData.TermDeposit</a><br/>    <a href="#ProductSummaryData.creditCards">ProductSummaryData.creditCards</a><br/>    <a href="#ProductSummaryData.currentAccounts">ProductSummaryData.currentAccounts</a><br/>    <a href="#ProductSummaryData.debitCards">ProductSummaryData.debitCards</a><br/>    <a href="#ProductSummaryData.investmentAccounts">ProductSummaryData.investmentAccounts</a><br/>    <a href="#ProductSummaryData.loans">ProductSummaryData.loans</a><br/>    <a href="#ProductSummaryData.savingsAccounts">ProductSummaryData.savingsAccounts</a><br/>    <a href="#ProductSummaryData.termDeposits">ProductSummaryData.termDeposits</a><br/>    <a href="#Response">Response</a><br/>

## Exports

### <a name="default"></a>*default*

Angular dependency injection module key

**Type:** *String*

### <a name="productSummaryDataKey"></a>*productSummaryDataKey*

Angular dependency injection key for the ProductSummaryData service

**Type:** *String*


---

## ProductSummaryData

Public api for data-bb-product-summary-http-ng service

### <a name="ProductSummaryData_getProductsummary"></a>*#getProductsummary(params, headers)*

Retrieve list of products summaries.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| params | Object (optional) | Map of query parameters. |
| headers | Object (optional) | Map of custom header attributes. |

##### Returns

Promise of [Response](#Response) - *Resolves data value as [ProductSummaryData.Productsummary-GET](#ProductSummaryData.Productsummary-GET) on success*

## Example

```javascript
productSummaryData
 .getProductsummary(params, headers)
 .then(function(result){
   console.log('headers', result.headers)
   console.log('data', result.data);
 });
```

### <a name="ProductSummaryData_getProductsummaryDebitaccounts"></a>*#getProductsummaryDebitaccounts(params, headers)*

All accounts available to transfer from

| Parameter | Type | Description |
| :-- | :-- | :-- |
| params | Object (optional) | Map of query parameters. |
| headers | Object (optional) | Map of custom header attributes. |

##### Returns

Promise of [Response](#Response) - *Resolves data value as [ProductSummaryData.Productsummary-GET](#ProductSummaryData.Productsummary-GET) on success*

## Example

```javascript
productSummaryData
 .getProductsummaryDebitaccounts(params, headers)
 .then(function(result){
   console.log('headers', result.headers)
   console.log('data', result.data);
 });
```

### <a name="ProductSummaryData_getProductsummaryCreditaccounts"></a>*#getProductsummaryCreditaccounts(params, headers)*

All accounts available for transfer to

| Parameter | Type | Description |
| :-- | :-- | :-- |
| params | Object (optional) | Map of query parameters. |
| headers | Object (optional) | Map of custom header attributes. |

##### Returns

Promise of [Response](#Response) - *Resolves data value as [ProductSummaryData.Productsummary-GET](#ProductSummaryData.Productsummary-GET) on success*

## Example

```javascript
productSummaryData
 .getProductsummaryCreditaccounts(params, headers)
 .then(function(result){
   console.log('headers', result.headers)
   console.log('data', result.data);
 });
```

### <a name="ProductSummaryData_getProductsummaryArrangements"></a>*#getProductsummaryArrangements(params, headers)*

Retrieve list of products summaries, flat structure.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| params | Object (optional) | Map of query parameters. |
| params.legalEntityId | String (optional) | legalEntityId. Eg: id9876543210. |
| params.productKindName | String (optional) | Product kind name. Eg: Current Account. |
| params.from | Number (optional) | Page Number. Skip over pages of elements by specifying a start value for the query. Eg: 20. (defaults to 0) |
| params.cursor | String (optional) | Record UUID. As an alternative for specifying 'from' this allows to point to the record to start the selection from. Eg: 76d5be8b-e80d-4842-8ce6-ea67519e8f74. (defaults to "") |
| params.size | Number (optional) | Limit the number of elements on the response. When used in combination with cursor, the value is allowed to be a negative number to indicate requesting records upwards from the starting point indicated by the cursor. Eg: 80. (defaults to 10) |
| params.orderBy | String (optional) | Order by field: "name", "externalArrangementId", "externalLegalEntityId", "externalProductId", "alias", "bookedBalance", "availableBalance", "creditLimit", "IBAN", "BBAN", "BIC", "currency", "externalTransferAllowed", "urgentTransferAllowed", "accruedInterest", "Number", "principalAmount", "currentInvestmentValue", "legalEntityId", "productId", "productNumber", "accountOpeningDate", "accountInterestRate", "valueDateBalance", "creditLimitUsage", "creditLimitInterestRate", "creditLimitExpiryDate", "debitCards", "startDate", "termUnit", "termNumber", "maturityDate", "maturityAmount", "autoRenewalIndicator", "interestPaymentFrequencyUnit", "interestPaymentFrequencyNumber", "interestSettlementAccount", "outstandingPrincipalAmount", "monthlyInstalmentAmount", "amountInArrear", "minimumRequiredBalance", "creditCardAccountNumber", "validThru", "applicableInterestRate", "remainingCredit", "outstandingPayment", "minimumPayment", "minimumPaymentDueDate", "totalInvestmentValue", "accountHolderAddressLine1", "accountHolderAddressLine2", "accountHolderAddressLine3", "accountHolderAddressLine4", "accountHolderCountry", "creditAccount", "debitAccount". |
| params.direction | String (optional) | Direction. (defaults to DESC) |
| headers | Object (optional) | Map of custom header attributes. |

##### Returns

Promise of [Response](#Response) - *Resolves data value as [ProductSummaryData.ProductsummaryFlatStructure-GET](#ProductSummaryData.ProductsummaryFlatStructure-GET) on success*

## Example

```javascript
productSummaryData
 .getProductsummaryArrangements(params, headers)
 .then(function(result){
   console.log('headers', result.headers)
   console.log('data', result.data);
 });
```

### <a name="ProductSummaryData_getProductsummaryConfigurationRecord"></a>*#getProductsummaryConfigurationRecord(legalEntityId, params, headers)*

Retrieve list of products summaries, flat structure.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| legalEntityId | String |  |
| params | Object (optional) | Map of query parameters. |
| params.from | Number (optional) | Page Number. Skip over pages of elements by specifying a start value for the query. Eg: 20. (defaults to 0) |
| params.cursor | String (optional) | Record UUID. As an alternative for specifying 'from' this allows to point to the record to start the selection from. Eg: 76d5be8b-e80d-4842-8ce6-ea67519e8f74. (defaults to "") |
| params.size | Number (optional) | Limit the number of elements on the response. When used in combination with cursor, the value is allowed to be a negative number to indicate requesting records upwards from the starting point indicated by the cursor. Eg: 80. (defaults to 10) |
| params.orderBy | String (optional) | Order by field: "name", "externalArrangementId", "externalLegalEntityId", "externalProductId", "alias", "bookedBalance", "availableBalance", "creditLimit", "IBAN", "BBAN", "BIC", "currency", "externalTransferAllowed", "urgentTransferAllowed", "accruedInterest", "Number", "principalAmount", "currentInvestmentValue", "legalEntityId", "productId", "productNumber", "accountOpeningDate", "accountInterestRate", "valueDateBalance", "creditLimitUsage", "creditLimitInterestRate", "creditLimitExpiryDate", "debitCards", "startDate", "termUnit", "termNumber", "maturityDate", "maturityAmount", "autoRenewalIndicator", "interestPaymentFrequencyUnit", "interestPaymentFrequencyNumber", "interestSettlementAccount", "outstandingPrincipalAmount", "monthlyInstalmentAmount", "amountInArrear", "minimumRequiredBalance", "creditCardAccountNumber", "validThru", "applicableInterestRate", "remainingCredit", "outstandingPayment", "minimumPayment", "minimumPaymentDueDate", "totalInvestmentValue", "accountHolderAddressLine1", "accountHolderAddressLine2", "accountHolderAddressLine3", "accountHolderAddressLine4", "accountHolderCountry", "creditAccount", "debitAccount". |
| params.direction | String (optional) | Direction. (defaults to DESC) |
| headers | Object (optional) | Map of custom header attributes. |

##### Returns

Promise of [Response](#Response) - *Resolves data value as [ProductSummaryData.ProductsummaryFlatStructure-GET](#ProductSummaryData.ProductsummaryFlatStructure-GET) on success*

## Example

```javascript
productSummaryData
 .getProductsummaryConfigurationRecord(legalEntityId, params, headers)
 .then(function(result){
   console.log('headers', result.headers)
   console.log('data', result.data);
 });
```

### <a name="ProductSummaryData_getProductsummaryContextArrangements"></a>*#getProductsummaryContextArrangements(params, headers)*

Get a list of arrangements according to a given business function

| Parameter | Type | Description |
| :-- | :-- | :-- |
| params | Object | Map of query parameters. |
| params.businessFunction | String | Provide the context for retrieving arrangements. Eg: Product Summary. |
| params.resourceName | String | Provide the resource for retrieving arrangements. Eg: Product Summary. |
| params.privilege | String | Privilege for the arrangements. Eg: view. |
| params.externalTransferAllowed | String (optional) | Privilege for external transfers. Eg: false. |
| params.creditAccount | String (optional) | Type of account. Eg: true. |
| params.debitAccount | String (optional) | Type of account. Eg: true. |
| params.productKindName | String (optional) | Product Kind Name. Eg: Current Account. |
| params.searchTerm | String (optional) | Full text search. Eg: Account X. |
| params.from | Number (optional) | Page Number. Skip over pages of elements by specifying a start value for the query. Eg: 20. (defaults to 0) |
| params.cursor | String (optional) | Record UUID. As an alternative for specifying 'from' this allows to point to the record to start the selection from. Eg: 76d5be8b-e80d-4842-8ce6-ea67519e8f74. (defaults to "") |
| params.size | Number (optional) | Limit the number of elements on the response. When used in combination with cursor, the value is allowed to be a negative number to indicate requesting records upwards from the starting point indicated by the cursor. Eg: 80. (defaults to 10) |
| params.orderBy | String (optional) | Order by field: "name", "externalArrangementId", "externalLegalEntityId", "externalProductId", "alias", "bookedBalance", "availableBalance", "creditLimit", "IBAN", "BBAN", "BIC", "currency", "externalTransferAllowed", "urgentTransferAllowed", "accruedInterest", "Number", "principalAmount", "currentInvestmentValue", "legalEntityId", "productId", "productNumber", "accountOpeningDate", "accountInterestRate", "valueDateBalance", "creditLimitUsage", "creditLimitInterestRate", "creditLimitExpiryDate", "debitCards", "startDate", "termUnit", "termNumber", "maturityDate", "maturityAmount", "autoRenewalIndicator", "interestPaymentFrequencyUnit", "interestPaymentFrequencyNumber", "interestSettlementAccount", "outstandingPrincipalAmount", "monthlyInstalmentAmount", "amountInArrear", "minimumRequiredBalance", "creditCardAccountNumber", "validThru", "applicableInterestRate", "remainingCredit", "outstandingPayment", "minimumPayment", "minimumPaymentDueDate", "totalInvestmentValue", "accountHolderAddressLine1", "accountHolderAddressLine2", "accountHolderAddressLine3", "accountHolderAddressLine4", "accountHolderCountry", "creditAccount", "debitAccount". |
| params.direction | String (optional) | Direction. (defaults to DESC) |
| headers | Object (optional) | Map of custom header attributes. |

##### Returns

Promise of [Response](#Response) - *Resolves data value as [ProductSummaryData.ProductsummaryFlatStructure-GET](#ProductSummaryData.ProductsummaryFlatStructure-GET) on success*

## Example

```javascript
productSummaryData
 .getProductsummaryContextArrangements(params, headers)
 .then(function(result){
   console.log('headers', result.headers)
   console.log('data', result.data);
 });
```

---

## ProductSummaryDataProvider

Data service that can be configured with custom base URI.

| Injector Key |
| :-- |
| *data-bb-product-summary-http-ng:productSummaryDataProvider* |


### <a name="ProductSummaryDataProvider_setBaseUri"></a>*#setBaseUri(baseUri)*


| Parameter | Type | Description |
| :-- | :-- | :-- |
| baseUri | String | Base URI which will be the prefix for all HTTP requests |

### <a name="ProductSummaryDataProvider_$get"></a>*#$get()*


##### Returns

Object - *An instance of the service*

## Example

```javascript
// Configuring in an angular app:
angular.module(...)
  .config(['data-bb-product-summary-http-ng:productSummaryDataProvider',
    (dataProvider) => {
      dataProvider.setBaseUri('http://my-service.com/');
      });

// Configuring With config-bb-providers-ng:
export default [
  ['data-bb-product-summary-http-ng:productSummaryDataProvider', (dataProvider) => {
      dataProvider.setBaseUri('http://my-service.com/');
  }]
];
```

## Type Definitions


### <a name="ProductSummaryData.AggregatedBalance"></a>*ProductSummaryData.AggregatedBalance*


**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| currency | String (optional) |  |
| value | String (optional) |  |
| additions | Object (optional) | Container object for custom API extensions |

### <a name="ProductSummaryData.CreditCard"></a>*ProductSummaryData.CreditCard*


**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| bookedBalance | String (optional) |  |
| availableBalance | String (optional) |  |
| creditLimit | String (optional) |  |
| number | String (optional) |  |
| currency | String (optional) |  |
| urgentTransferAllowed | Boolean (optional) |  |
| cardNumber | Number (optional) |  |
| creditCardAccountNumber | String (optional) |  |
| validThru | String (optional) |  |
| applicableInterestRate | Number (optional) |  |
| remainingCredit | Number (optional) |  |
| outstandingPayment | Number (optional) |  |
| minimumPayment | Number (optional) |  |
| minimumPaymentDueDate | String (optional) |  |
| accountInterestRate | Number (optional) |  |
| accountHolderName | String (optional) |  |
| creditLimitUsage | Number (optional) |  |
| creditLimitInterestRate | Number (optional) |  |
| accruedInterest | Number (optional) |  |
| additions | Object (optional) | Container object for custom API extensions |

### <a name="ProductSummaryData.CurrentAccount"></a>*ProductSummaryData.CurrentAccount*


**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| bookedBalance | String (optional) |  |
| availableBalance | String (optional) |  |
| creditLimit | String (optional) |  |
| IBAN | String (optional) |  |
| BBAN | String (optional) |  |
| currency | String (optional) |  |
| urgentTransferAllowed | Boolean (optional) |  |
| BIC | String (optional) |  |
| bankBranchCode | String (optional) |  |
| accountInterestRate | Number (optional) |  |
| valueDateBalance | Number (optional) |  |
| creditLimitUsage | Number (optional) |  |
| creditLimitInterestRate | Number (optional) |  |
| creditLimitExpiryDate | String (optional) |  |
| accruedInterest | Number (optional) |  |
| debitCardsItems | Array (optional) of [ProductSummaryData.DebitCardItem](#ProductSummaryData.DebitCardItem) |  |
| accountHolderName | String (optional) |  |
| startDate | String (optional) |  |
| minimumRequiredBalance | Number (optional) |  |
| accountHolderAddressLine1 | String (optional) |  |
| accountHolderAddressLine2 | String (optional) |  |
| accountHolderAddressLine3 | String (optional) |  |
| accountHolderAddressLine4 | String (optional) |  |
| creditAccount | Boolean (optional) |  |
| debitAccount | Boolean (optional) |  |
| accountHolderCountry | String (optional) |  |
| additions | Object (optional) | Container object for custom API extensions |

### <a name="ProductSummaryData.DebitCard"></a>*ProductSummaryData.DebitCard*


**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| number | String (optional) |  |
| urgentTransferAllowed | Boolean (optional) |  |
| cardNumber | Number (optional) |  |
| accountInterestRate | Number (optional) |  |
| accountHolderName | String (optional) |  |
| debitCardsItems | Array (optional) of [ProductSummaryData.DebitCardItem](#ProductSummaryData.DebitCardItem) |  |
| startDate | String (optional) |  |
| validThru | String (optional) |  |
| additions | Object (optional) | Container object for custom API extensions |

### <a name="ProductSummaryData.DebitCardItem"></a>*ProductSummaryData.DebitCardItem*


**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| number | String (optional) |  |
| expiryDate | String (optional) |  |
| additions | Object (optional) | Container object for custom API extensions |

### <a name="ProductSummaryData.InvestmentAccount"></a>*ProductSummaryData.InvestmentAccount*


**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| currentInvestmentValue | String (optional) |  |
| currency | String (optional) |  |
| urgentTransferAllowed | Boolean (optional) |  |
| productNumber | String (optional) |  |
| additions | Object (optional) | Container object for custom API extensions |

### <a name="ProductSummaryData.Loan"></a>*ProductSummaryData.Loan*


**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| bookedBalance | String (optional) |  |
| principalAmount | String (optional) |  |
| currency | String (optional) |  |
| urgentTransferAllowed | Boolean (optional) |  |
| productNumber | String (optional) |  |
| accountInterestRate | Number (optional) |  |
| termUnit | String (optional) |  |
| termNumber | Number (optional) |  |
| outstandingPrincipalAmount | Number (optional) |  |
| monthlyInstalmentAmount | Number (optional) |  |
| amountInArrear | Number (optional) |  |
| interestSettlementAccount | String (optional) |  |
| accruedInterest | Number (optional) |  |
| accountHolderName | String (optional) |  |
| maturityDate | String (optional) |  |
| valueDateBalance | Number (optional) |  |
| creditAccount | Boolean (optional) |  |
| debitAccount | Boolean (optional) |  |
| additions | Object (optional) | Container object for custom API extensions |

### <a name="ProductSummaryData.Productsummary-EXAMPLE"></a>*ProductSummaryData.Productsummary-EXAMPLE*


**Type:** *[*](#*)*


### <a name="ProductSummaryData.Productsummary-GET"></a>*ProductSummaryData.Productsummary-GET*


**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| aggregatedBalance | [ProductSummaryData.AggregatedBalance](#ProductSummaryData.AggregatedBalance) (optional) |  |
| currentAccounts | [ProductSummaryData.currentAccounts](#ProductSummaryData.currentAccounts) (optional) |  |
| savingsAccounts | [ProductSummaryData.savingsAccounts](#ProductSummaryData.savingsAccounts) (optional) |  |
| termDeposits | [ProductSummaryData.termDeposits](#ProductSummaryData.termDeposits) (optional) |  |
| loans | [ProductSummaryData.loans](#ProductSummaryData.loans) (optional) |  |
| creditCards | [ProductSummaryData.creditCards](#ProductSummaryData.creditCards) (optional) |  |
| debitCards | [ProductSummaryData.debitCards](#ProductSummaryData.debitCards) (optional) |  |
| investmentAccounts | [ProductSummaryData.investmentAccounts](#ProductSummaryData.investmentAccounts) (optional) |  |
| additions | Object (optional) | Container object for custom API extensions |

### <a name="ProductSummaryData.ProductsummaryFlatStructure-GET"></a>*ProductSummaryData.ProductsummaryFlatStructure-GET*


**Type:** *Array of [ProductSummaryData.ProductsummaryItem](#ProductSummaryData.ProductsummaryItem)*


### <a name="ProductSummaryData.ProductsummaryItem"></a>*ProductSummaryData.ProductsummaryItem*


**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| id | String |  |
| externalArrangementId | String |  |
| externalLegalEntityId | String |  |
| externalProductId | String |  |
| name | String (optional) |  |
| alias | String (optional) |  |
| bookedBalance | Number (optional) |  |
| availableBalance | Number (optional) |  |
| creditLimit | Number (optional) |  |
| IBAN | String (optional) |  |
| BBAN | String (optional) |  |
| currency | String (optional) |  |
| externalTransferAllowed | Boolean (optional) |  |
| urgentTransferAllowed | Boolean (optional) |  |
| accruedInterest | Number (optional) |  |
| number | String (optional) |  |
| principalAmount | Number (optional) |  |
| currentInvestmentValue | Number (optional) |  |
| legalEntityId | String (optional) |  |
| productId | String (optional) |  |
| productNumber | String (optional) |  |
| productKindName | String (optional) |  |
| productTypeName | String (optional) |  |
| BIC | String (optional) |  |
| bankBranchCode | String (optional) |  |
| visible | Boolean (optional) | User specific visibility for an arrangement |
| accountOpeningDate | String (optional) |  |
| accountInterestRate | Number (optional) |  |
| valueDateBalance | Number (optional) |  |
| creditLimitUsage | Number (optional) |  |
| creditLimitInterestRate | Number (optional) |  |
| creditLimitExpiryDate | String (optional) |  |
| startDate | String (optional) |  |
| termUnit | String (optional) |  |
| termNumber | Number (optional) |  |
| interestPaymentFrequencyUnit | String (optional) |  |
| interestPaymentFrequencyNumber | Number (optional) |  |
| maturityDate | String (optional) |  |
| maturityAmount | Number (optional) |  |
| autoRenewalIndicator | Boolean (optional) |  |
| interestSettlementAccount | String (optional) |  |
| outstandingPrincipalAmount | Number (optional) |  |
| monthlyInstalmentAmount | Number (optional) |  |
| amountInArrear | Number (optional) |  |
| minimumRequiredBalance | Number (optional) |  |
| creditCardAccountNumber | String (optional) |  |
| validThru | String (optional) |  |
| applicableInterestRate | Number (optional) |  |
| remainingCredit | Number (optional) |  |
| outstandingPayment | Number (optional) |  |
| minimumPayment | Number (optional) |  |
| minimumPaymentDueDate | String (optional) |  |
| totalInvestmentValue | Number (optional) |  |
| debitCards | Array (optional) of [ProductSummaryData.DebitCardItem](#ProductSummaryData.DebitCardItem) |  |
| accountHolderAddressLine1 | String (optional) |  |
| accountHolderAddressLine2 | String (optional) |  |
| accountHolderAddressLine3 | String (optional) |  |
| accountHolderAddressLine4 | String (optional) |  |
| accountHolderName | String (optional) |  |
| accountHolderCountry | String (optional) |  |
| creditAccount | Boolean (optional) |  |
| debitAccount | Boolean (optional) |  |
| additions | Object (optional) | Container object for custom API extensions |

### <a name="ProductSummaryData.SavingsAccount"></a>*ProductSummaryData.SavingsAccount*


**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| bookedBalance | String (optional) |  |
| accruedInterest | Number (optional) |  |
| IBAN | String (optional) |  |
| BBAN | String (optional) |  |
| currency | String (optional) |  |
| urgentTransferAllowed | Boolean (optional) |  |
| BIC | String (optional) |  |
| bankBranchCode | String (optional) |  |
| accountInterestRate | Number (optional) |  |
| minimumRequiredBalance | Number (optional) |  |
| startDate | String (optional) |  |
| termUnit | String (optional) |  |
| termNumber | Number (optional) |  |
| maturityDate | String (optional) |  |
| maturityAmount | Number (optional) |  |
| autoRenewalIndicator | Boolean (optional) |  |
| interestPaymentFrequencyUnit | String (optional) |  |
| interestPaymentFrequencyNumber | Number (optional) |  |
| principalAmount | Number (optional) |  |
| interestSettlementAccount | String (optional) |  |
| accountHolderName | String (optional) |  |
| valueDateBalance | Number (optional) |  |
| accountHolderAddressLine1 | String (optional) |  |
| accountHolderAddressLine2 | String (optional) |  |
| accountHolderAddressLine3 | String (optional) |  |
| accountHolderAddressLine4 | String (optional) |  |
| accountHolderCountry | String (optional) |  |
| creditAccount | Boolean (optional) |  |
| debitAccount | Boolean (optional) |  |
| additions | Object (optional) | Container object for custom API extensions |

### <a name="ProductSummaryData.TermDeposit"></a>*ProductSummaryData.TermDeposit*


**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| bookedBalance | String (optional) |  |
| principalAmount | String (optional) |  |
| accruedInterest | Number (optional) |  |
| IBAN | String (optional) |  |
| currency | String (optional) |  |
| urgentTransferAllowed | Boolean (optional) |  |
| productNumber | String (optional) |  |
| accountInterestRate | Number (optional) |  |
| startDate | String (optional) |  |
| termUnit | String (optional) |  |
| termNumber | Number (optional) |  |
| maturityDate | String (optional) |  |
| maturityAmount | Number (optional) |  |
| autoRenewalIndicator | Boolean (optional) |  |
| interestPaymentFrequencyUnit | String (optional) |  |
| interestPaymentFrequencyNumber | Number (optional) |  |
| interestSettlementAccount | String (optional) |  |
| valueDateBalance | Number (optional) |  |
| accountHolderName | String (optional) |  |
| outstandingPrincipalAmount | Number (optional) |  |
| creditAccount | Boolean (optional) |  |
| debitAccount | Boolean (optional) |  |
| minimumRequiredBalance | Number (optional) |  |
| additions | Object (optional) | Container object for custom API extensions |

### <a name="ProductSummaryData.creditCards"></a>*ProductSummaryData.creditCards*


**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| name | String (optional) |  |
| products | Array (optional) of [ProductSummaryData.CreditCard](#ProductSummaryData.CreditCard) |  |
| aggregatedBalance | [ProductSummaryData.AggregatedBalance](#ProductSummaryData.AggregatedBalance) (optional) |  |
| additions | Object (optional) | Container object for custom API extensions |

### <a name="ProductSummaryData.currentAccounts"></a>*ProductSummaryData.currentAccounts*


**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| name | String (optional) |  |
| products | Array (optional) of [ProductSummaryData.CurrentAccount](#ProductSummaryData.CurrentAccount) |  |
| aggregatedBalance | [ProductSummaryData.AggregatedBalance](#ProductSummaryData.AggregatedBalance) (optional) |  |
| additions | Object (optional) | Container object for custom API extensions |

### <a name="ProductSummaryData.debitCards"></a>*ProductSummaryData.debitCards*


**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| name | String (optional) |  |
| products | Array (optional) of [ProductSummaryData.DebitCard](#ProductSummaryData.DebitCard) |  |
| aggregatedBalance | [ProductSummaryData.AggregatedBalance](#ProductSummaryData.AggregatedBalance) (optional) |  |
| additions | Object (optional) | Container object for custom API extensions |

### <a name="ProductSummaryData.investmentAccounts"></a>*ProductSummaryData.investmentAccounts*


**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| name | String (optional) |  |
| products | Array (optional) of [ProductSummaryData.InvestmentAccount](#ProductSummaryData.InvestmentAccount) |  |
| aggregatedBalance | [ProductSummaryData.AggregatedBalance](#ProductSummaryData.AggregatedBalance) (optional) |  |
| additions | Object (optional) | Container object for custom API extensions |

### <a name="ProductSummaryData.loans"></a>*ProductSummaryData.loans*


**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| name | String (optional) |  |
| products | Array (optional) of [ProductSummaryData.Loan](#ProductSummaryData.Loan) |  |
| aggregatedBalance | [ProductSummaryData.AggregatedBalance](#ProductSummaryData.AggregatedBalance) (optional) |  |
| additions | Object (optional) | Container object for custom API extensions |

### <a name="ProductSummaryData.savingsAccounts"></a>*ProductSummaryData.savingsAccounts*


**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| name | String (optional) |  |
| products | Array (optional) of [ProductSummaryData.SavingsAccount](#ProductSummaryData.SavingsAccount) |  |
| aggregatedBalance | [ProductSummaryData.AggregatedBalance](#ProductSummaryData.AggregatedBalance) (optional) |  |
| additions | Object (optional) | Container object for custom API extensions |

### <a name="ProductSummaryData.termDeposits"></a>*ProductSummaryData.termDeposits*


**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| name | String (optional) |  |
| products | Array (optional) of [ProductSummaryData.TermDeposit](#ProductSummaryData.TermDeposit) |  |
| aggregatedBalance | [ProductSummaryData.AggregatedBalance](#ProductSummaryData.AggregatedBalance) (optional) |  |
| additions | Object (optional) | Container object for custom API extensions |

### <a name="Response"></a>*Response*


**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| data | Object | See method descriptions for possible return types |
| headers | Function | Getter headers function |
| status | Number | HTTP status code of the response. |
| statusText | String | HTTP status text of the response. |

---
