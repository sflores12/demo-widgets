# ui-bb-account-card


Version: **1.2.9**

UI component for displaying account card.

## Imports

* ui-bb-avatar-ng
* ui-bb-format-amount
* vendor-bb-angular

---

## Example

```javascript
// In an extension:
// file: scripts/index.js
import uiBbAccountCard from 'ui-bb-account-card';

export const dependencyKeys = [
  uiBbAccountCard,
];

// file: templates/template.ng.html
<ui-bb-account-card
  account-name="$ctrl.payment.from.name"
  account-number="$ctrl.payment.from.name.account"
  amount="$ctrl.payment.from.amount"
  currency="$ctrl.payment.from.currency"
  show-avatar="true">
</ui-bb-account-card>
```

## Table of Contents
- **Exports**<br/>    <a href="#default">default</a><br/>
- **Type Definitions**<br/>    <a href="#AdditionalInfo">AdditionalInfo</a><br/>

## Exports

### <a name="default"></a>*default*

The angular module name

**Type:** *String*


---

## uiBbAccountCard


| Property | Type | Description |
| :-- | :-- | :-- |
| account-name | String | Account name |
| account-image | String | Image url, shown in avatar field (if it is enabled) |
| account-number | String | Account number |
| amount | Number | Account's balance |
| currency | String | Currency's ISO 4217 code |
| additional-info | Array of [AdditionalInfo](#AdditionalInfo) | Array with additional card info objects |
| show-avatar | Boolean | Display avatar field with image or name initials |

## Type Definitions


### <a name="AdditionalInfo"></a>*AdditionalInfo*


**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| name | String (optional) | Additional info label |
| amount | Number (optional) | Additional info row's amount |
| currency | String (optional) | Currency's ISO 4217 code |

---
