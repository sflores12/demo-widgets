# ext-bbm-select-product-ng


Version: **1.0.224**

Mobile extension for a select product step in the Payment widget.

## Imports

* ui-bb-avatar-ng
* ui-bb-i18n-ng

---

## Example

```javascript
<!-- Contact widget model.xml -->
<property name="extension" viewHint="text-input,admin">
  <value type="string">ext-bbm-select-product-ng</value>
</property>
```

## Table of Contents
- **Helpers**<br/>    <a href="#Helpers_hasExternalAccounts">#hasExternalAccounts(accounts)</a><br/>    <a href="#Helpers_onSelectAccount">#onSelectAccount($ctrl, account)</a><br/>
- **Hooks**<br/>    <a href="#Hooks_groupAccountsTo">#groupAccountsTo(accountsTo)</a><br/>

---

## Helpers

Helpers for ext-bbm-select-product-ng

### <a name="Helpers_hasExternalAccounts"></a>*#hasExternalAccounts(accounts)*

Helper to check whether the given list of accounts contains some external accounts

| Parameter | Type | Description |
| :-- | :-- | :-- |
| accounts | Array of Object | List of accounts |

##### Returns

Boolean - *True, if there is at least one external account, false otherwise*

### <a name="Helpers_onSelectAccount"></a>*#onSelectAccount($ctrl, account)*

Helper to process account select action

| Parameter | Type | Description |
| :-- | :-- | :-- |
| $ctrl | Object | Instance of widget angular controller |
| account | Object | Selected account object |

##### Returns

[void](#void) - **

##### Fires Events:

> bb.event.payment.form.step

> bb.event.account.selected


---

## Hooks

Hooks for widget-bb-payment-ng

### <a name="Hooks_groupAccountsTo"></a>*#groupAccountsTo(accountsTo)*

Hook for grouping accounts. Used only for Mobile.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| accountsTo | Array of Object | List of beneficiary accounts |

##### Returns

Array of Object - *List of grouped accounts*
