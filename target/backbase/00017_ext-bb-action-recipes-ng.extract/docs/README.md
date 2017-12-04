# ext-bb-action-recipes-ng


Version: **1.4.6**

Action Recipes default extension.

## Imports

* ui-bb-account-selector
* ui-bb-confirm-ng
* ui-bb-currency-input-ng
* ui-bb-dropdown-select
* ui-bb-format-amount
* ui-bb-i18n-ng
* ui-bb-loading-indicator-ng
* ui-bb-substitute-error-ng
* ui-bb-switcher-ng
* vendor-bb-angular-ng-aria

---

## Example

```javascript
<!-- messages widget model.xml -->
<property name="extension" viewHint="text-input,admin">
  <value type="string">ext-bb-action-recipes-ng</value>
</property>
```

## Table of Contents
- **ext-bb-action-recipes-ng**<br/>    <a href="#ext-bb-action-recipes-ngisValid">isValid()</a><br/>
- **CreditTransactionFilter**<br/>    <a href="#CreditTransactionFilter_changeAccount">#changeAccount(account)</a><br/>

---

### <a name="ext-bb-action-recipes-ngisValid"></a>*isValid()*

Validate Recipe data.

##### Returns

Boolean - *true if recipe passes the validation*

---

## CreditTransactionFilter


### <a name="CreditTransactionFilter_changeAccount"></a>*#changeAccount(account)*

Handles change of selected account. Changes the currency of this filter to
the currency of the selected account. Retains the old inputted amount value.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| account | Object | the newly selected account |
