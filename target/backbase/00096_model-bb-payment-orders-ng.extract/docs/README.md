# model-bb-payment-orders-ng


Version: **1.8.14**

Model for widget-bb-payment-orders-ng

## Imports

* data-bb-contact-http-ng
* data-bb-payment-orders-http-ng
* data-bb-product-summary-http-ng
* lib-bb-model-errors
* lib-bb-storage-ng
* lib-bb-widget-ng
* vendor-bb-angular

---

## Example

```javascript
import modelPaymentOrdersModuleKey, { modelPaymentOrdersKey } from 'model-bb-payment-orders-ng';

angular
  .module('ExampleModule', [
    modelPaymentOrdersModuleKey,
  ])
  .factory('someFactory', [
    modelPaymentOrdersKey,
    // into
    function someFactory(paymentOrdersModel) {
      // ...
    },
  ]);
```

## Table of Contents
- **model-bb-payment-orders-ng**<br/>    <a href="#model-bb-payment-orders-ngcreateAccountModel">createAccountModel(kindId)</a><br/>    <a href="#model-bb-payment-orders-nggetExtendedAccountModelFlat">getExtendedAccountModelFlat(accountsRaw)</a><br/>
- **paymentOrdersModel**<br/>    <a href="#paymentOrdersModel_createPaymentOrder">#createPaymentOrder(paymentOrderParams)</a><br/>    <a href="#paymentOrdersModel_getCurrencies">#getCurrencies()</a><br/>    <a href="#paymentOrdersModel_getAccountsFrom">#getAccountsFrom(params)</a><br/>    <a href="#paymentOrdersModel_getAccountsTo">#getAccountsTo(debitAccountId)</a><br/>    <a href="#paymentOrdersModel_getExternals">#getExternals()</a><br/>    <a href="#paymentOrdersModel_getRate">#getRate(rateParams)</a><br/>    <a href="#paymentOrdersModel_createContact">#createContact(contact)</a><br/>    <a href="#paymentOrdersModel_getPaymentOrders">#getPaymentOrders(params)</a><br/>    <a href="#paymentOrdersModel_getStandingOrdersPreferences">#getStandingOrdersPreferences()</a><br/>    <a href="#paymentOrdersModel_getStandingOrders">#getStandingOrders(params)</a><br/>
- **Type Definitions**<br/>    <a href="#Payments">Payments</a><br/>    <a href="#Payment">Payment</a><br/>

---

### <a name="model-bb-payment-orders-ngcreateAccountModel"></a>*createAccountModel(kindId)*

Prepare the fields of a account into a form ready for display to the User

| Parameter | Type | Description |
| :-- | :-- | :-- |
| kindId | String | Product kind Id |

##### Returns

Function - **

---

### <a name="model-bb-payment-orders-nggetExtendedAccountModelFlat"></a>*getExtendedAccountModelFlat(accountsRaw)*

Prepare the fields of a account into a form ready for display to the User

| Parameter | Type | Description |
| :-- | :-- | :-- |
| accountsRaw | Array of Object | flat list of accounts |

##### Returns

Array of Object - **

---

## ExternalType

Identifier and name for external account product kind

---

## paymentOrdersModel


### <a name="paymentOrdersModel_createPaymentOrder"></a>*#createPaymentOrder(paymentOrderParams)*

Create new payment order.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| paymentOrderParams | Object | New payment order data |

##### Returns

Promise of Object - *A Promise with response.*

### <a name="paymentOrdersModel_getCurrencies"></a>*#getCurrencies()*

Get available currencies.

##### Returns

Promise of Array of Object - *A Promise with response.*

### <a name="paymentOrdersModel_getAccountsFrom"></a>*#getAccountsFrom(params)*

Load accounts available to payment from.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| params | Object |  |

##### Returns

Promise of Array of Object - *A Promise with flat accounts list.*

### <a name="paymentOrdersModel_getAccountsTo"></a>*#getAccountsTo(debitAccountId)*

Load accounts available for payment to.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| debitAccountId | String | Filter account list with debitAccountId param |

##### Returns

Promise of Array of Object - *A Promise with flat accounts list.*

### <a name="paymentOrdersModel_getExternals"></a>*#getExternals()*

Load external accounts from contact list.

##### Returns

Promise of Array of Object - *A Promise with flat accounts list.*

### <a name="paymentOrdersModel_getRate"></a>*#getRate(rateParams)*

Get currencies available for payment.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| rateParams | Object | Parameters for getRate request |

##### Returns

Number - *Rate number*

### <a name="paymentOrdersModel_createContact"></a>*#createContact(contact)*

Creates a new contact

| Parameter | Type | Description |
| :-- | :-- | :-- |
| contact | Object | Contact data |

##### Returns

Promise - *A Promise object for create contact request*

### <a name="paymentOrdersModel_getPaymentOrders"></a>*#getPaymentOrders(params)*

Get payments orders data.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| params | Object | Params to send to the request |

##### Returns

Promise of [Payments](#Payments), [ModelError](lib-bb-model-errors.html#ModelError) - *A Promise*

### <a name="paymentOrdersModel_getStandingOrdersPreferences"></a>*#getStandingOrdersPreferences()*

Tries to read the stored standing orders preferences

##### Returns

Object - **

### <a name="paymentOrdersModel_getStandingOrders"></a>*#getStandingOrders(params)*

Get standing orders data.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| params | Object | Params to send to the request |

##### Returns

Promise of [Payments](#Payments), [ModelError](#ModelError) - *A Promise*

## Type Definitions


### <a name="Payments"></a>*Payments*

Payments type definition

**Type:** *Array of [Payment](#Payment)*


### <a name="Payment"></a>*Payment*

Payment type definition

**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| id | String | Payment ID |
| status | String | Payment status |
| bankStatus | String | Bank Status |
| reasonCode | String | Reason id |
| reasonText | String | Reason description |
| debtorAccount | Object | Debtor account |
| instructionPriority | String | Instruction priority |
| requestedExecutionDate | String | Requested execution date |
| creditTransferTransactionInformation | Object | Transaction information |
| createdBy | String | User id that created payment |
| createdAt | String | Date when payment was created |

---
