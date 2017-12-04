# ext-bbm-initiate-payment-form-ng


Version: **1.0.115**

Mobile extension for the payment form in the Mobile initiate payment widget.

## Imports

* lib-bbm-plugins
* ui-bb-format-amount
* ui-bb-i18n-ng
* ui-bb-iban-ng
* ui-bbm-amount-field-ng
* ui-bbm-beneficiary-select-ng
* ui-bbm-switch-ng
* ui-bbm-textfield-ng
* vendor-bb-angular-ng-messages

---

## Example

```javascript
<!-- File model.xml of widget-bbm-initiate-payment-ng -->
<property name="extension" viewHint="text-input,admin">
  <value type="string">ext-bbm-initiate-payment-form-ng</value>
</property>
```

## Table of Contents
- **Helpers**<br/>    <a href="#Helpers_checkSaveContactVisibility">#checkSaveContactVisibility(ctrl, form)</a><br/>    <a href="#Helpers_getAccountDisplayAmount">#getAccountDisplayAmount(account)</a><br/>    <a href="#Helpers_getScheduleSummary">#getScheduleSummary(schedule)</a><br/>
- **ext-bbm-initiate-payment-form-ng**<br/>    <a href="#ext-bbm-initiate-payment-form-ngisCreateBeneficiaryAllowed">isCreateBeneficiaryAllowed(payment)</a><br/>    <a href="#ext-bbm-initiate-payment-form-ngisUrgentVisible">isUrgentVisible(payment)</a><br/>    <a href="#ext-bbm-initiate-payment-form-ngonUrgentPaymentInfoClick">onUrgentPaymentInfoClick()</a><br/>    <a href="#ext-bbm-initiate-payment-form-ngisPaymentFormValid">isPaymentFormValid(payment, form)</a><br/>    <a href="#ext-bbm-initiate-payment-form-ngonPaymentFormSubmit">onPaymentFormSubmit(ctrl, form)</a><br/>
- **Hooks**<br/>    <a href="#Hooks_processBeneficiaries">#processBeneficiaries(creditAccounts, contacts)</a><br/>
- **Type Definitions**<br/>    <a href="#AccountView">AccountView</a><br/>    <a href="#Beneficiaries">Beneficiaries</a><br/>    <a href="#ContactsGroup">ContactsGroup</a><br/>

---

## Helpers

Helpers for ext-bbm-initiate-payment-form-ng

### <a name="Helpers_checkSaveContactVisibility"></a>*#checkSaveContactVisibility(ctrl, form)*

Decides whether to show the "Save contact" checkbox in UI or not.
Returns true, if the checkbox is visible, and false otherwise.

If the checkbox is not visible, sets the `saveContact` flag to false.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| ctrl | [FormController](#FormController) | Instance of the Form controller |
| form | Object | Instance of the form |

##### Returns

Boolean - **

### <a name="Helpers_getAccountDisplayAmount"></a>*#getAccountDisplayAmount(account)*

Returns the amount of the given account that should be displayed.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| account | [AccountView](widget-bbm-initiate-payment-ng.html#AccountView) | Account to display |

##### Returns

String - **

### <a name="Helpers_getScheduleSummary"></a>*#getScheduleSummary(schedule)*

Returns a summary of the given payment schedule as a string.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| schedule | [Schedule](#Schedule) |  |

##### Returns

String - **

---

### <a name="ext-bbm-initiate-payment-form-ngisCreateBeneficiaryAllowed"></a>*isCreateBeneficiaryAllowed(payment)*

Checks for the given payment whether it is allowed to create a new beneficiary
instead of selecting an existing one from the list of beneficiaries.

Returns true, if a user can create a beneficiary, otherwise false.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| payment | [Payment](#Payment) | Payment object |

##### Returns

Boolean - **

---

### <a name="ext-bbm-initiate-payment-form-ngisUrgentVisible"></a>*isUrgentVisible(payment)*

Checks if urgent payment is available for the current transaction.

Returns true, if beneficiary allows urgent payments, payment is scheduled only for once,
payment is not scheduled for future, otherwise false.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| payment | [Payment](#Payment) | Payment object |

##### Returns

Boolean - **

---

### <a name="ext-bbm-initiate-payment-form-ngonUrgentPaymentInfoClick"></a>*onUrgentPaymentInfoClick()*

Shows information about urgent payment.

---

### <a name="ext-bbm-initiate-payment-form-ngisPaymentFormValid"></a>*isPaymentFormValid(payment, form)*

Checks whether the form is valid. Returns true, if the form is valid, false otherwise.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| payment | [Payment](#Payment) | Payment object |
| form | Object | Instance of the form |

##### Returns

Boolean - **

---

### <a name="ext-bbm-initiate-payment-form-ngonPaymentFormSubmit"></a>*onPaymentFormSubmit(ctrl, form)*

Handles the payment form submit.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| ctrl | [FormController](#FormController) | Form controller instance |
| form | Object | Angular form instance |

---

## Hooks

Hooks for widget-bbm-initiate-payment-ng

### <a name="Hooks_processBeneficiaries"></a>*#processBeneficiaries(creditAccounts, contacts)*

Hook for processing the list of all possible beneficiaries.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| creditAccounts | Array of [AccountView](#AccountView) |  |
| contacts | Array of [AccountView](#AccountView) |  |

##### Returns

[Beneficiaries](#Beneficiaries) - **

## Type Definitions


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

### <a name="Beneficiaries"></a>*Beneficiaries*


**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| all | Array of [AccountView](#AccountView) | The list of all beneficiaries. |
| creditAccounts | Array of [AccountView](#AccountView) | The list of credit accounts. |
| contacts | Array of [ContactsGroup](#ContactsGroup) | The list of contacts groups. |

### <a name="ContactsGroup"></a>*ContactsGroup*


**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| char | String | The first character of a contact name |
| contacts | Array of [AccountView](#AccountView) | The list of contacts |

---
