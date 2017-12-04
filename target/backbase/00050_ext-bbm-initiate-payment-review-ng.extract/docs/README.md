# ext-bbm-initiate-payment-review-ng


Version: **1.0.113**

Mobile extension for a payment review step in the Mobile initiate payment widget.

## Imports

* lib-bbm-plugins
* ui-bb-format-amount
* ui-bb-i18n-ng

---

## Example

```javascript
<!-- Contact widget model.xml -->
<property name="extension" viewHint="text-input,admin">
  <value type="string">ext-bbm-initiate-payment-review-ng</value>
</property>
```

## Table of Contents
- **Helpers**<br/>    <a href="#Helpers_getAccountDisplayAmount">#getAccountDisplayAmount(account)</a><br/>    <a href="#Helpers_getScheduleSummary">#getScheduleSummary(schedule)</a><br/>

---

## Helpers

Helpers for ext-bbm-initiate-payment-form-ng

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
