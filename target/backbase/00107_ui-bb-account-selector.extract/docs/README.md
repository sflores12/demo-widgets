# ui-bb-account-selector


Version: **1.8.4**

UI component for selecting user account.

## Imports

* ui-bb-dropdown-select
* ui-bb-format-amount
* ui-bb-list-ng
* ui-bb-search-box-ng
* vendor-bb-angular

---

## Example

```javascript
// In an extension:
// file: scripts/index.js
import uiBbAccountSelector from 'ui-bb-account-selector';

export const dependencyKeys = [
  uiBbAccountSelector,
];

// file: templates/template.ng.html
<ui-bb-account-selector
  ng-model="$ctrl.payment.from"
  accounts="$ctrl.accountsList"
  ng-change="$ctrl.onAccountChange()">
</ui-bb-account-selector>

// multiple selection
<ui-bb-account-selector
  ng-model="$ctrl.accounts.selected"
  accounts="$ctrl.accounts.list"
  multiple="true"
  ng-change="$ctrl.onAccountChange($item)"
  labels="{
    noAccounts: ('account.select.label.no.accounts' | i18n),
    account: ('account.select.label.account' | i18n),
    accounts: ('account.select.label.accounts' | i18n),
    allAccounts: ('account.select.label.all.accounts' | i18n),
    selectedAccounts: ('account.select.label.selected.accounts' | i18n),
  }">
</ui-bb-account-selector>
```

## Table of Contents
- **Exports**<br/>    <a href="#default">default</a><br/>
- **ui-bb-account-selector**<br/>    <a href="#ui-bb-account-selectoruiBbAccountSelector">uiBbAccountSelector(templateCache, element, attrs, scope)</a><br/>
- **Type Definitions**<br/>    <a href="#Labels">Labels</a><br/>    <a href="#SearchBox">SearchBox</a><br/>

## Exports

### <a name="default"></a>*default*

The angular module name

**Type:** *String*


---

### <a name="ui-bb-account-selectoruiBbAccountSelector"></a>*uiBbAccountSelector(templateCache, element, attrs, scope)*

Account selector controller

| Parameter | Type | Description |
| :-- | :-- | :-- |
| templateCache | Object |  |
| element | Object |  |
| attrs | Object |  |
| scope | Object |  |

| Property | Type | Description |
| :-- | :-- | :-- |
| ngModel | Object | Account selector model |
| accounts | Array | List of accounts |
| ngChange | Function | Callback function triggered when account is selected |
| selectAll | Boolean (optional) | True if select all option is enabled (false by default) |
| multiple | Boolean (optional) | True if multiple selection is enabled (false by default) |
| multicurrency | Boolean (optional) | True if multiple currency selection is enabled (true by default). If set to false, Select all option will be hidden if more than one currency is listed. Also, once an item is selected, all items with different currency will become disabled. This property has an effect only if multiple is set to true |
| labels | [Labels](#Labels) | Object with labels |
| selectAllTemplateId | String (optional) | Enables select all option and contains template id |
| customTemplateId | String (optional) | Id of the template that will be used for rendering instead of default ui-bb-account-selector/option-template.html template |
| onAccountsLoad | Function (optional) | Function to retrieve filtered accounts. It should update accounts assigns to `accounts` property and number of accounts in `totalItems` property |
| onClear | Function (optional) | Function to be called once the search input is cleared |
| totalItems | Number (optional) | Total items in the list. Used internally for select all item |
| searchBox | [SearchBox](#SearchBox) (optional) | Object contains minLength of search string and config object of searchBox |
| formatAmountTemplateUrl | String (optional) | Custom template url for popup element. |

---

## Type Definitions


### <a name="Labels"></a>*Labels*

Labels type definition

**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| allAccounts | String | Label for all accounts |
| accounts | String | Label for plural accounts |
| account | String | Label for single accounts |
| noAccounts | String | Label for no accounts |
| selectedAccounts | String | Label for selected accounts |

### <a name="SearchBox"></a>*SearchBox*

Labels type definition

**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| minLength | String | Minimum length of search string to apply search |
| config | Object | SearchBox config object |

---
