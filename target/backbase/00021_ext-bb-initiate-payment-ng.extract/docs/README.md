# ext-bb-initiate-payment-ng


Version: **2.2.15**

Default extension for widget-bb-initiate-payment-ng

## Imports

* ui-bb-account-card
* ui-bb-account-selector
* ui-bb-calendar-popup-ng
* ui-bb-char-counter-ng
* ui-bb-confirm-ng
* ui-bb-credit-suggest-ng
* ui-bb-currency-input-ng
* ui-bb-expandable-ng
* ui-bb-i18n-ng
* ui-bb-loading-overlay-ng
* ui-bb-number-input-ng
* ui-bb-parent-responsiveness-ng
* ui-bb-substitute-error-ng
* ui-bb-switcher-ng
* vendor-bb-angular-ng-aria
* vendor-bb-angular-ng-messages
* vendor-bb-angular-sanitize
* vendor-bb-uib-alert
* vendor-bb-uib-popover

---

## Table of Contents
- **ext-bb-initiate-payment-ng**<br/>    <a href="#ext-bb-initiate-payment-ngtransferFrequencies">transferFrequencies</a><br/>    <a href="#ext-bb-initiate-payment-ngshowCrossCurrencyMessage">showCrossCurrencyMessage(controller)</a><br/>    <a href="#ext-bb-initiate-payment-ngcanSelectUrgentPayment">canSelectUrgentPayment($ctrl)</a><br/>    <a href="#ext-bb-initiate-payment-ngresetPayment">resetPayment($ctrl, scope)</a><br/>    <a href="#ext-bb-initiate-payment-ngmakePayment">makePayment($ctrl, scope)</a><br/>    <a href="#ext-bb-initiate-payment-ngonAccountChange">onAccountChange($ctrl, selectedAccount)</a><br/>    <a href="#ext-bb-initiate-payment-ngtoggleCreditSuggestGroup">toggleCreditSuggestGroup(event, model, ctrl)</a><br/>    <a href="#ext-bb-initiate-payment-ngreviewPayment">reviewPayment(ctrl, scope)</a><br/>    <a href="#ext-bb-initiate-payment-nggetAccounts">getAccounts(accounts)</a><br/>    <a href="#ext-bb-initiate-payment-nggetScheduleText">getScheduleText($ctrl)</a><br/>    <a href="#ext-bb-initiate-payment-nggetFrequencies">getFrequencies($ctrl)</a><br/>    <a href="#ext-bb-initiate-payment-nggetMinDate">getMinDate(startDate, transferFrequency)</a><br/>

---
### <a name="ext-bb-initiate-payment-ngtransferFrequencies"></a>*transferFrequencies*

Array of recurring frequency objects with the following properties (all mandatory)

**Type:** *Array*


| Property | Type | Description |
| :-- | :-- | :-- |
| object.name | String | Translation key of the label that will be displayed to the end user |
| object.value | String | Denotes frequency type of transfer. Possible values: DAILY/WEEKLY/MONTHLY/YEARLY |
| object.every | Number | Indicates skip interval of transfer. 1 would mean execute every time, 2 - every other time |

## Example

```javascript
{
  name: 'form.schedule.frequency.weekly',
  value: 'WEEKLY',
  every: 1,
},
{
  name: 'form.schedule.frequency.bi.weekly',
  value: 'WEEKLY',
  every: 2,
}
```

---

### <a name="ext-bb-initiate-payment-ngshowCrossCurrencyMessage"></a>*showCrossCurrencyMessage(controller)*

Returns cross currency messages if they should be shown

| Parameter | Type | Description |
| :-- | :-- | :-- |
| controller | Object | Widget controller |

##### Returns

Object - *Cross currency messages*

---

### <a name="ext-bb-initiate-payment-ngcanSelectUrgentPayment"></a>*canSelectUrgentPayment($ctrl)*

Checks if layout should show 'Urgent payment' switcher

| Parameter | Type | Description |
| :-- | :-- | :-- |
| $ctrl | Object | Widget controller |

##### Returns

Boolean - *True if urget payment switchet should be shown, false otherwise*

---

### <a name="ext-bb-initiate-payment-ngresetPayment"></a>*resetPayment($ctrl, scope)*

Resets payment order

| Parameter | Type | Description |
| :-- | :-- | :-- |
| $ctrl | Object | Widget controller |
| scope | Object | Template scope |

##### Returns

Promise of [any](#any) - **

---

### <a name="ext-bb-initiate-payment-ngmakePayment"></a>*makePayment($ctrl, scope)*

Makes new payment request and changes step on success

| Parameter | Type | Description |
| :-- | :-- | :-- |
| $ctrl | Object | Payment controller |
| scope | Object | Parent ng scope |

##### Returns

Object - *Payment request Promise*

---

### <a name="ext-bb-initiate-payment-ngonAccountChange"></a>*onAccountChange($ctrl, selectedAccount)*

Handler for Account From change action

| Parameter | Type | Description |
| :-- | :-- | :-- |
| $ctrl | Object | Payment controller |
| selectedAccount | Object |  |

##### Returns

Object - *A Promise object*

---

### <a name="ext-bb-initiate-payment-ngtoggleCreditSuggestGroup"></a>*toggleCreditSuggestGroup(event, model, ctrl)*

Toggle group in credit suggest component

| Parameter | Type | Description |
| :-- | :-- | :-- |
| event | Object | Event object |
| model | Object |  |
| ctrl | Object | Widget's controller |

---

### <a name="ext-bb-initiate-payment-ngreviewPayment"></a>*reviewPayment(ctrl, scope)*

Called when submitting payment for review, it actually calls a hook that
can be customized with all the validations needed by the specific project.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| ctrl | Object | Payment controller |
| scope | Object | Parent ng scope |

---

### <a name="ext-bb-initiate-payment-nggetAccounts"></a>*getAccounts(accounts)*

Transforms provided accounts to custom structure. External contacts account list will be
flattened to be molded to same structure as internal accounts
(identifier=IBAN/BBAN, name=contactperson).

| Parameter | Type | Description |
| :-- | :-- | :-- |
| accounts | Array of Object |  |

##### Returns

Array of Object - *View accounts*

---

### <a name="ext-bb-initiate-payment-nggetScheduleText"></a>*getScheduleText($ctrl)*

Compiles the scheduling description out of payment object params.

In this process, following translation keys are being used:

form.schedule.starting, for word "Starting"

form.schedule.today, for word "Today"

form.schedule.on, for word "On" (used before date to form "on 01.01.2017")

form.schedule.until, for word "until" (used before date to form "until 01.01.2017")

form.schedule.repeat.count, for word "times" (used after repeat count to form "5 times")

and name of the transfer frequency set in constants file

| Parameter | Type | Description |
| :-- | :-- | :-- |
| $ctrl | Object | Widget controller |

##### Returns

String - *Compiled text that can be used as scheduling value in views*

---

### <a name="ext-bb-initiate-payment-nggetFrequencies"></a>*getFrequencies($ctrl)*

Returns frequencies for payment depending on occurences number

| Parameter | Type | Description |
| :-- | :-- | :-- |
| $ctrl | Object | Widget controller |

##### Returns

Array of Object - *Array of transfer frequencies*

---

### <a name="ext-bb-initiate-payment-nggetMinDate"></a>*getMinDate(startDate, transferFrequency)*

Get the minimum available date for specific frequency

| Parameter | Type | Description |
| :-- | :-- | :-- |
| startDate | Date |  |
| transferFrequency | Object |  |

##### Returns

Date - **

---
