# widget-bb-initiate-payment-ng


Version: **1.7.37**

Initiate payment widget

## Imports

* lib-bb-event-bus-ng
* lib-bb-intent-ng
* lib-bb-model-errors
* lib-bb-storage-ng
* lib-bb-widget-extension-ng
* lib-bb-widget-ng
* model-bb-payment-orders-ng
* vendor-bb-angular

---

## Table of Contents
- **InitiatePaymentController**<br/>    <a href="#InitiatePaymentController_updateAccounts">#updateAccounts(params)</a><br/>    <a href="#InitiatePaymentController_resetPayment">#resetPayment()</a><br/>    <a href="#InitiatePaymentController_onAccountFromChange">#onAccountFromChange()</a><br/>    <a href="#InitiatePaymentController_$onInit">#$onInit()</a><br/>    <a href="#InitiatePaymentController_updateRate">#updateRate()</a><br/>    <a href="#InitiatePaymentController_canSaveNewContact">#canSaveNewContact(beneficiary, creditAccounts)</a><br/>    <a href="#InitiatePaymentController_clearPaymentError">#clearPaymentError()</a><br/>    <a href="#InitiatePaymentController_reviewPayment">#reviewPayment(payment)</a><br/>    <a href="#InitiatePaymentController_makePayment">#makePayment(paymentData)</a><br/>    <a href="#InitiatePaymentController_createPaymentResponseStatus">#createPaymentResponseStatus</a><br/>    <a href="#InitiatePaymentController_accountsLoading">#accountsLoading</a><br/>    <a href="#InitiatePaymentController_accountsLoadError">#accountsLoadError</a><br/>    <a href="#InitiatePaymentController_payment">#payment</a><br/>    <a href="#InitiatePaymentController_accountsFrom">#accountsFrom</a><br/>    <a href="#InitiatePaymentController_accountsTo">#accountsTo</a><br/>    <a href="#InitiatePaymentController_currencies">#currencies</a><br/>    <a href="#InitiatePaymentController_saveNewContact">#saveNewContact</a><br/>    <a href="#InitiatePaymentController_rate">#rate</a><br/>    <a href="#InitiatePaymentController_paymentPreferences">#paymentPreferences</a><br/>    <a href="#InitiatePaymentController_EndingType">#EndingType</a><br/>    <a href="#InitiatePaymentController_singleTransfer">#singleTransfer</a><br/>    <a href="#InitiatePaymentController_paymentSubmitError">#paymentSubmitError</a><br/>    <a href="#InitiatePaymentController_paymentLoading">#paymentLoading</a><br/>    <a href="#InitiatePaymentController_paymentValidation">#paymentValidation</a><br/>    <a href="#InitiatePaymentController_descriptionCounterState">#descriptionCounterState</a><br/>
- **Hooks**<br/>    <a href="#Hooks_processAccountsTo">#processAccountsTo(debitAccount, getCreditAccounts, getExternalContacts)</a><br/>    <a href="#Hooks_getRecurringTransactionDay">#getRecurringTransactionDay(schedule)</a><br/>    <a href="#Hooks_processCurrencies">#processCurrencies(currencies)</a><br/>    <a href="#Hooks_processAccountsFrom">#processAccountsFrom(accounts)</a><br/>    <a href="#Hooks_processNewPaymentData">#processNewPaymentData(data)</a><br/>    <a href="#Hooks_validatePayment">#validatePayment(data)</a><br/>
- **Type Definitions**<br/>    <a href="#Validation">Validation</a><br/>    <a href="#ValidationMessage">ValidationMessage</a><br/>

---

## Preference

Widget preferences enum

---

## singleTransfer

Single transfer constant

---

## EndingType

Available payment order ending types

---

## InitiatePaymentController

Initiate payment widget

### <a name="InitiatePaymentController_updateAccounts"></a>*#updateAccounts(params)*

Update accounts from service (with possible search param)

| Parameter | Type | Description |
| :-- | :-- | :-- |
| params | Object |  |

##### Returns

Promise - *A Promise with no response data.*

### <a name="InitiatePaymentController_resetPayment"></a>*#resetPayment()*

Resets payment model, updates accounts and currency lists

##### Returns

Promise - *A Promise with no response data.*

### <a name="InitiatePaymentController_onAccountFromChange"></a>*#onAccountFromChange()*

Account from change handler.

##### Returns

Promise - *A Promise object.*

### <a name="InitiatePaymentController_$onInit"></a>*#$onInit()*

AngularJS Lifecycle hook used to initialize the controller


##### Returns

Promise - **

### <a name="InitiatePaymentController_updateRate"></a>*#updateRate()*

Retrieves exchange rate for two currencies.

##### Returns

Promise - **

### <a name="InitiatePaymentController_canSaveNewContact"></a>*#canSaveNewContact(beneficiary, creditAccounts)*

Checks if layout should show 'save beneficiary' switcher

| Parameter | Type | Description |
| :-- | :-- | :-- |
| beneficiary | Object | Recipient data |
| creditAccounts | Array | Credit accounts and contacts collection |

##### Returns

Boolean - *True if new contact can be saved*

### <a name="InitiatePaymentController_clearPaymentError"></a>*#clearPaymentError()*

Clears payment submit message

### <a name="InitiatePaymentController_reviewPayment"></a>*#reviewPayment(payment)*

Validate payment data before moving payment state to review.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| payment | undefined | The payment to validate |

##### Returns

Promise - *A promise that will be fulfilled with the validation result*

### <a name="InitiatePaymentController_makePayment"></a>*#makePayment(paymentData)*

Prepares and sends payment order request

| Parameter | Type | Description |
| :-- | :-- | :-- |
| paymentData | Object | New payment order data |

##### Returns

Promise - *A Promise object for new payment request*
### <a name="InitiatePaymentController_createPaymentResponseStatus"></a>*#createPaymentResponseStatus*

Status of payment order create. Needed to show proper
message on confirmation screen

**Type:** *String or Null*

### <a name="InitiatePaymentController_accountsLoading"></a>*#accountsLoading*

Flag that tells if accounts list is being loaded

**Type:** *Boolean*

### <a name="InitiatePaymentController_accountsLoadError"></a>*#accountsLoadError*

Store model error key which can be used for translation in the extension

Possible values:
- account.model.error.auth
- account.model.error.connectivity
- account.model.error.user
- account.model.error.unexpected

**Type:** *Object*

### <a name="InitiatePaymentController_payment"></a>*#payment*

Payment object, containing info - from account, to account, amount, etc.

**Type:** *Object*

### <a name="InitiatePaymentController_accountsFrom"></a>*#accountsFrom*

List of accounts to do payment from

**Type:** *Array of Object*

### <a name="InitiatePaymentController_accountsTo"></a>*#accountsTo*

List of accounts to payment to

**Type:** *Array of Object*

### <a name="InitiatePaymentController_currencies"></a>*#currencies*

List of currencies available for payment

**Type:** *Array of Object*

### <a name="InitiatePaymentController_saveNewContact"></a>*#saveNewContact*

Flag which indicates is new contact have to be saved

**Type:** *Boolean*

### <a name="InitiatePaymentController_rate"></a>*#rate*

Rate defined for cross-currency payments

**Type:** *Number*

### <a name="InitiatePaymentController_paymentPreferences"></a>*#paymentPreferences*

Payment preferences set in the widget preferences

**Type:** *Number*

### <a name="InitiatePaymentController_EndingType"></a>*#EndingType*

Available payment order ending types

**Type:** *Object*

### <a name="InitiatePaymentController_singleTransfer"></a>*#singleTransfer*

Single Transfer constant

**Type:** *String*

### <a name="InitiatePaymentController_paymentSubmitError"></a>*#paymentSubmitError*

Store model error key which can be used for translation in the extension

Possible values:
- payment.model.error.auth
- payment.model.error.connectivity
- payment.model.error.user
- payment.model.error.unexpected

**Type:** *String*

### <a name="InitiatePaymentController_paymentLoading"></a>*#paymentLoading*

Flag that tells if new payment is being processed

**Type:** *Boolean*

### <a name="InitiatePaymentController_paymentValidation"></a>*#paymentValidation*

Store payment validations

**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| valid | Boolean |  |
| messages | Array of [ValidationMessages](#ValidationMessages) |  |
### <a name="InitiatePaymentController_descriptionCounterState"></a>*#descriptionCounterState*

Container to store char counter state for payment description

**Type:** *Object*


---

## Hooks

Hooks for widget-bb-initiate-payment-ng

### <a name="Hooks_processAccountsTo"></a>*#processAccountsTo(debitAccount, getCreditAccounts, getExternalContacts)*

Hook for processing account list in 'to' field (credit).
Assigned to $ctrl.accountsTo.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| debitAccount | Object | Selected debit account (can be null). |
| getCreditAccounts | Function | Function to retrieve all credit accounts |
| getExternalContacts | Function | Function to retrieve all external contacts formatted like Product kind |

##### Returns

Promise of Array of [Product](model-bb-product-summary-ng.html#Product) - *Promise that retrieves array of accounts.*

### <a name="Hooks_getRecurringTransactionDay"></a>*#getRecurringTransactionDay(schedule)*

Denotes day on which transfer should be executed.
For weekly it will be 1..7 indicating weekday.
For monthly it will be 1..31 indicating day of month.
For yearly it will be 1..12 indicating month of the year

| Parameter | Type | Description |
| :-- | :-- | :-- |
| schedule | Object | Recurring payment schedule object |

##### Returns

Number - *Recurring transaction day*

### <a name="Hooks_processCurrencies"></a>*#processCurrencies(currencies)*

Processes currencies array returned from the service

| Parameter | Type | Description |
| :-- | :-- | :-- |
| currencies | Array of Object | Initial currencies |

##### Returns

Array of Object - *Processed currencies*

### <a name="Hooks_processAccountsFrom"></a>*#processAccountsFrom(accounts)*

Hook for processing account list in 'from' field (debit).
Assigned to $ctrl.accountsFrom.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| accounts | Array of Object | Initial debit accounts. |

##### Returns

Array of Object - *Processed debit accounts.*

### <a name="Hooks_processNewPaymentData"></a>*#processNewPaymentData(data)*

Hook for processing new payment order data.
Will be passed to model.createPaymentOrder method.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| data | Object | Initial new payment order data. |

##### Returns

Object - *Processed new payment order data.*

### <a name="Hooks_validatePayment"></a>*#validatePayment(data)*

Hook for reviewing new payment order data.
Assigned to $ctrl.reviewPayment

| Parameter | Type | Description |
| :-- | :-- | :-- |
| data | Object | Initial new payment order data. |

##### Returns

[Validation](#Validation) - *Payment validation object.*

## Type Definitions


### <a name="Validation"></a>*Validation*

Validation object

**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| valid | Boolean |  |
| messages | Array of [ValidationMessage](#ValidationMessage) |  |

### <a name="ValidationMessage"></a>*ValidationMessage*

Validation Messages object

**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| messageKey | String |  |
| type | String |  |

---

## Templates

* *template.ng.html*

---
