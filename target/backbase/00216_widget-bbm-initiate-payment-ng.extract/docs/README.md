# widget-bbm-initiate-payment-ng


Version: **1.1.44**

Mobile Initiate Payment widget.

## Imports

* lib-bb-event-bus-ng
* lib-bb-intent-ng
* lib-bb-storage-ng
* lib-bb-widget-extension-ng
* lib-bb-widget-ng
* model-bb-payment-orders-ng
* vendor-bb-angular

---

## Example

```javascript
<!-- Initiate Payment Form Extension -->
 <div ng-controller="FormController as $ctrl">
   <form name="initiate-payment-form">
     <input
       type="text"
       name="description"
       value="$ctrl.state.payment.data.description"/>
   </form>
 </div>

 <!-- Initiate Payment Review Extension -->
 <div ng-controller="ReviewController as $ctrl">
   <ul>
     <li>
       <div i18n-key="label.description"></div>
       <div data-ng-bind="$ctrl.state.payment.data.description"></div>
     </li>
   </ul>
 </div>

 <!-- Initiate Payment Select Account Extension -->
 <div ng-controller="SelectAccountController as $ctrl">
   <ul>
     <li ng-repeat="account in $ctrl.state.beneficiaries.data.creditAccounts track by $index">
       <div data-ng-bind="account.name"></div>
       <div data-ng-bind="account.identifier"></div>
     </li>
   </ul>
 </div>

 <!-- Initiate Payment Schedule Extension -->
 <div ng-controller="ScheduleController as $ctrl">
   <div>
     <input
       type="number"
       name="repeat"
       value="$ctrl.state.payment.data.schedule.repeat"/>
   </div>
 </div>
```

## Table of Contents
- **FormController**<br/>    <a href="#FormController_canSaveContact">#canSaveContact()</a><br/>    <a href="#FormController_resetPayment">#resetPayment()</a><br/>    <a href="#FormController_selectBeneficiary">#selectBeneficiary()</a><br/>    <a href="#FormController_selectDebitAccount">#selectDebitAccount()</a><br/>    <a href="#FormController_selectSchedule">#selectSchedule()</a><br/>    <a href="#FormController_setSaveContact">#setSaveContact(saveContact)</a><br/>    <a href="#FormController_setUrgentPayment">#setUrgentPayment(urgent)</a><br/>    <a href="#FormController_submitPayment">#submitPayment()</a><br/>    <a href="#FormController_$onInit">#$onInit()</a><br/>    <a href="#FormController_isUrgentPaymentAllowed">#isUrgentPaymentAllowed()</a><br/>    <a href="#FormController_preferences">#preferences</a><br/>
- **ReviewController**<br/>    <a href="#ReviewController_$onInit">#$onInit()</a><br/>    <a href="#ReviewController_submitPayment">#submitPayment()</a><br/>
- **ScheduleController**<br/>    <a href="#ScheduleController_$onInit">#$onInit()</a><br/>    <a href="#ScheduleController_submitSchedule">#submitSchedule()</a><br/>
- **SelectAccountController**<br/>    <a href="#SelectAccountController_$onInit">#$onInit()</a><br/>    <a href="#SelectAccountController_selectAccount">#selectAccount(account)</a><br/>    <a href="#SelectAccountController_AccountType">#AccountType</a><br/>    <a href="#SelectAccountController_accountType">#accountType</a><br/>
- **Hooks**<br/>    <a href="#Hooks_processDebitAccounts">#processDebitAccounts(debitAccounts)</a><br/>    <a href="#Hooks_processBeneficiaries">#processBeneficiaries(creditAccounts, contacts)</a><br/>    <a href="#Hooks_processInitialPaymentState">#processInitialPaymentState(payment)</a><br/>    <a href="#Hooks_processPaymentPayload">#processPaymentPayload(paymentPayload)</a><br/>
- **Type Definitions**<br/>    <a href="#InitiatePaymentIntentParameters">InitiatePaymentIntentParameters</a><br/>    <a href="#ContactIdentification">ContactIdentification</a><br/>    <a href="#CreditAccountIdentification">CreditAccountIdentification</a><br/>    <a href="#DebitAccountIdentification">DebitAccountIdentification</a><br/>    <a href="#PaymentPayload">PaymentPayload</a><br/>    <a href="#SchedulePayload">SchedulePayload</a><br/>    <a href="#ContactAccount">ContactAccount</a><br/>    <a href="#ContactCreatePayload">ContactCreatePayload</a><br/>    <a href="#AccountView">AccountView</a><br/>    <a href="#PaymentView">PaymentView</a><br/>    <a href="#BeneficiariesState">BeneficiariesState</a><br/>    <a href="#DebitAccountsState">DebitAccountsState</a><br/>    <a href="#PaymentState">PaymentState</a><br/>    <a href="#Schedule">Schedule</a><br/>    <a href="#Payment">Payment</a><br/>    <a href="#Amount">Amount</a><br/>    <a href="#Currency">Currency</a><br/>

---

## Preference

Widget preferences enum

---

## FormController

Initiate payment widget form controller.
Loads debit accounts and beneficiaries on start.
Provides API to make a payment.

| Injector Key |
| :-- |
| *FormController* |


### <a name="FormController_canSaveContact"></a>*#canSaveContact()*

Checks whether the beneficiary can be saved to the address book as a new contact.

##### Returns

Boolean - **

### <a name="FormController_resetPayment"></a>*#resetPayment()*

Resets the payment form.

### <a name="FormController_selectBeneficiary"></a>*#selectBeneficiary()*

Initiates the process of selecting of the beneficiary by calling
the "view.payment.account.select" intent with type = "credit".

Before calling the intent it ensures, that beneficiaries are loaded.

##### Fires Events:

> bb.event.payment.selectAccount.load.start

> bb.event.payment.selectAccount.load.done

> bb.event.payment.selectAccount.failed


### <a name="FormController_selectDebitAccount"></a>*#selectDebitAccount()*

Initiates the process of selecting of the debit account by calling
the "view.payment.account.select" intent with type = "debit".

Before calling the intent it ensures, that debit accounts are loaded.

##### Fires Events:

> bb.event.payment.selectAccount.load.start

> bb.event.payment.selectAccount.load.done

> bb.event.payment.selectAccount.failed


### <a name="FormController_selectSchedule"></a>*#selectSchedule()*

Initiates the process of a scheduling a payment by calling
the "view.payment.schedule.select" intent, that navigates the user
to the Payment Schedule view.

### <a name="FormController_setSaveContact"></a>*#setSaveContact(saveContact)*

Updates state of the "Save contact" flag.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| saveContact | Boolean |  |

### <a name="FormController_setUrgentPayment"></a>*#setUrgentPayment(urgent)*

Updates state of the "urgent" flag.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| urgent | Boolean |  |

### <a name="FormController_submitPayment"></a>*#submitPayment()*

Depending on the preference either navigates the user to the review page
or makes the payment.

##### Returns

Promise - *Promise that resolves once the operation is complete.*

### <a name="FormController_$onInit"></a>*#$onInit()*

AngularJS Lifecycle hook used to initialize the controller.

Preloads debit accounts and beneficiaries. Prepares the view model.

##### Fires Events:

> cxp.item.loaded


### <a name="FormController_isUrgentPaymentAllowed"></a>*#isUrgentPaymentAllowed()*

Checks if urgent payment is available for the current transaction.

Returns true, if beneficiary allows urgent payments, payment is scheduled only for once,
payment is not scheduled for future, otherwise false.

##### Returns

Boolean - **
### <a name="FormController_preferences"></a>*#preferences*

Payment preferences set in the widget preferences.

**Type:** *Object*


---

## ReviewController

Initiate payment widget review controller.
Provides API to make a payment.

| Injector Key |
| :-- |
| *ReviewController* |


### <a name="ReviewController_$onInit"></a>*#$onInit()*

AngularJS Lifecycle hook used to initialize the controller.

Prepares the view model.

##### Fires Events:

> cxp.item.loaded


### <a name="ReviewController_submitPayment"></a>*#submitPayment()*

Submits the payment.

##### Returns

Promise - **

---

## ScheduleController

Initiate payment widget Schedule controller.
Provides API to set a schedule of a payment.

| Injector Key |
| :-- |
| *ScheduleController* |


### <a name="ScheduleController_$onInit"></a>*#$onInit()*

AngularJS Lifecycle hook used to initialize the controller.

Prepares the view model.

##### Fires Events:

> cxp.item.loaded


### <a name="ScheduleController_submitSchedule"></a>*#submitSchedule()*

Fulfils the select schedule intent with the given data.

---

## SelectAccountController

Initiate payment widget Select account controller.
Provides API to select an account.

| Injector Key |
| :-- |
| *SelectAccountController* |


### <a name="SelectAccountController_$onInit"></a>*#$onInit()*

AngularJS Lifecycle hook used to initialize the controller.

Prepares the view model.

##### Fires Events:

> cxp.item.loaded


### <a name="SelectAccountController_selectAccount"></a>*#selectAccount(account)*

Fulfils the select account intent with the given account.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| account | [AccountView](#AccountView) |  |
### <a name="SelectAccountController_AccountType"></a>*#AccountType*

Enumeration of available types of accounts.

**Type:** *Object*

### <a name="SelectAccountController_accountType"></a>*#accountType*

The type of the account that needs to be selected.
Possible values are "debit" or "credit".

**Type:** *String (optional)*


---

## Hooks

Hooks for widget-bbm-initiate-payment-ng.

### <a name="Hooks_processDebitAccounts"></a>*#processDebitAccounts(debitAccounts)*

Processes the list of debit accounts.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| debitAccounts | Array of [AccountView](#AccountView) | Original list of debit accounts from the model. |

##### Returns

Array of [AccountView](#AccountView) - *Processed list of debit accounts.*

### <a name="Hooks_processBeneficiaries"></a>*#processBeneficiaries(creditAccounts, contacts)*

Processes the list of beneficiaries. By default it merges credit accounts and
contacts into a single list of beneficiaries.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| creditAccounts | Array of [AccountView](#AccountView) | Original list of credit accounts from the model. |
| contacts | Array of [AccountView](#AccountView) | Original list of contacts from the model. |

##### Returns

Array of [AccountView](#AccountView) - *Processed list of beneficiaries.*

### <a name="Hooks_processInitialPaymentState"></a>*#processInitialPaymentState(payment)*

Processes the initial payment object.

The widget uses this hook on start when the initial payment object is created.
Also the widget uses this when it resets the payment and starts another one.

Use it to add custom properties to the payment object.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| payment | [Payment](#Payment) | Payment state, that is supposed to be processed |

##### Returns

[Payment](#Payment) - **

### <a name="Hooks_processPaymentPayload"></a>*#processPaymentPayload(paymentPayload)*

Processes the payload of a the payment.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| paymentPayload | [PaymentPayload](#PaymentPayload) | Payment payload, that is supposed to be processed |

##### Returns

[Payment](#Payment) - **

## Type Definitions


### <a name="InitiatePaymentIntentParameters"></a>*InitiatePaymentIntentParameters*


**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| debitAccount | [Product?](model-bb-product-summary-ng.html#Product?) | An optional debit account for a new payment. |

### <a name="ContactIdentification"></a>*ContactIdentification*


**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| counterpartyName | String | Counterparty name. Only required when 'scheme' is set to IBAN/BBAN. |
| identification | String | Identification of the product. Different schemes are supported: IBAN, BBAN, ID |
| scheme | String | The name of the scheme. For contacts is always "IBAN". |

### <a name="CreditAccountIdentification"></a>*CreditAccountIdentification*


**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| identification | String | Credit account ID |
| scheme | String | The name of the scheme. For credit accounts is always "ID". |

### <a name="DebitAccountIdentification"></a>*DebitAccountIdentification*


**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| identification | String | Debit account ID |
| scheme | String | The name of the scheme. For debit accounts is always "ID". |

### <a name="PaymentPayload"></a>*PaymentPayload*


**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| debitAccountIdentification | [DebitAccountIdentification](#DebitAccountIdentification) | Identification of the payment debit account |
| creditAccountIdentification | [CreditAccountIdentification](#CreditAccountIdentification) | Identification of the payment credit account |
| amount | Number | The amount of the payment |
| currency | String | The alpha-3 code (complying with ISO 4217) of the currency that qualifies the amount |
| description | String | The description for the payment. |
| paymentMode | String | Denotes whether payment will be single or will be recurring. Possible values are "SINGLE" and "RECURRING" |

### <a name="SchedulePayload"></a>*SchedulePayload*


**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| transferFrequency | String | Denotes how frequently the transfer should be made |
| on | Number | Denotes day on which transfer should be executed. For weekly it will be 1..7 indicating weekday. For monthly it will be 1..31 indicating day of month. For yearly it will be 1..12 indicating month of the year |
| startDate | String | When to start executing the schedule. First transfer will be executed on first calculated date by schedule after this date |
| repeat | Number | Number of transfer to be executed. Only one of endDate and repeat is possible. If neither repeat nor endDate is provided transfer will be executed until canceled |
| every | Number | Indicates skip interval of transfer. 1 would mean execute every time, 2 - every other time |
| endDate | String (optional) | When to stop transfers. Transfers will not be executed after this date. Only one of endDate and repeat is possible. If neither repeat nor endDate is provided transfer will be executed until canceled |

### <a name="ContactAccount"></a>*ContactAccount*


**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| IBAN | String | Contact's IBAN |

### <a name="ContactCreatePayload"></a>*ContactCreatePayload*


**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| name | String | Contact's name |
| accounts | Array of [ContactAccount](#ContactAccount) | List of contact's accounts |

### <a name="AccountView"></a>*AccountView*


**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| id | String | The internal account identifier |
| name | String | The account's name, suitable for display to users |
| identifier | String (optional) | The identifier of the account from the user's perspective |
| amount | String (optional) | The most important associated value to be displayed |
| currency | String (optional) | Account currency |
| external | Boolean (optional) | Whether the account is external |

### <a name="PaymentView"></a>*PaymentView*


**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| beneficiaries | [BeneficiariesState](#BeneficiariesState) | State of the beneficiaries |
| debitAccounts | [DebitAccountsState](#DebitAccountsState) | State of the debit accounts |
| payment | [PaymentState](#PaymentState) | State of the payment |
| saveContact | Boolean | Whether the beneficiary should be saved to address book |

### <a name="BeneficiariesState"></a>*BeneficiariesState*


**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| error | Error | Error if beneficiaries request failed |
| loading | Boolean | Indicates whether beneficiaries are being loading |
| data | Array of [AccountView](#AccountView) | List of beneficiaries |

### <a name="DebitAccountsState"></a>*DebitAccountsState*


**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| error | Error | Error if accounts request failed |
| loading | Boolean | Indicates whether debit accounts are being loading |
| data | Array of [AccountView](#AccountView) | List of accounts |

### <a name="PaymentState"></a>*PaymentState*


**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| error | Error | Error if payment request failed |
| loading | Boolean | Indicates whether a payment request is being sending |
| data | [Payment](#Payment) | Payment data |

### <a name="Schedule"></a>*Schedule*


**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| transferFrequency | String | How frequently the transfer should be made |
| startDate | Date | When to start executing the schedule |
| endDate | Date (optional) | When to stop transfers |

### <a name="Payment"></a>*Payment*


**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| debitAccount | [AccountView](#AccountView) | Selected debit account |
| beneficiary | [AccountView](#AccountView) | Selected beneficiary |
| amount | [Amount](#Amount) | Amount and currency of the payment |
| description | String | Description of the payment |
| schedule | [Schedule](#Schedule) | Schedule for recurring transfer |

### <a name="Amount"></a>*Amount*


**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| currency | String | Currency code |
| value | Number | Amount value |

### <a name="Currency"></a>*Currency*


**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| name | String | Currency name, suitable for display to users |

---

## Templates

* *template.ng.html*

---
