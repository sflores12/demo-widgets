# ui-bbm-beneficiary-select-ng


Version: **1.0.328**

Credit suggest input mobile UI component

## Imports

* ui-bb-i18n-ng
* ui-bb-iban-ng
* ui-bbm-textfield-ng
* vendor-bb-angular

---

## Example

```javascript
// In an extension:
// file: scripts/index.js
import uiBbmBeneficiarySelectKey from 'ui-bbm-beneficiary-select-ng';

export const dependencyKeys = [
  uiBbmBeneficiarySelectKey,
];

// file: templates/template.ng.html
<ui-bbm-beneficiary-select-ng
  name="beneficiary"
  ng-model="$ctrl.payment.to"
  accounts="$ctrl.accountsTo"
  debit-account="$ctrl.payment.to.debitAccount"
  allowCreate="!$ctrl.payment.from || $ctrl.payment.from.externalTransferAllowed"
  on-button-click="ext.helpers.onPaymentToAccountsClick($ctrl)"
  messages="{
    identifierPlaceholder: ('label.beneficiaryIdentifier' | i18n),
    namePlaceholder: ('label.beneficiaryName' | i18n),
  }">
</ui-bbm-beneficiary-select-ng>
```

---

## uiBBMBeneficiarySelect


| Property | Type | Description |
| :-- | :-- | :-- |
| accounts | Array of [AccountsView](#AccountsView) | List of accounts to filter and select with user input |
| allowCreate | Boolean | Is creating of a new beneficiary allowed |
| messages | Object | Localized messages |
| debitAccount | Object | Debit Account |
| ngModel | Object | Beneficiary object |
| onButtonClick | Function | Handler for button clicks |
