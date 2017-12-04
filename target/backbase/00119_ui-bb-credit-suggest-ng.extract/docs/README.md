# ui-bb-credit-suggest-ng


Version: **1.6.38**

Credit suggest input UI component

## Imports

* lib-bb-iban
* ui-bb-autocomplete-search-ng
* ui-bb-avatar-ng
* ui-bb-i18n-ng
* ui-bb-iban-ng
* vendor-bb-angular
* vendor-bb-uib-debounce
* vendor-bb-uib-position
* vendor-bb-uib-typeahead

---

## Example

```javascript
// In an extension:
// file: scripts/index.js
import uiBbCreditSuggestKey from 'ui-bb-credit-suggest-ng';

export const dependencyKeys = [
  uiBbCreditSuggestKey,
];

// file: templates/template.ng.html
<ui-bb-credit-suggest-ng
  name="credit"
  data-ng-model="$ctrl.payment.to"
  data-accounts="$ctrl.accountsTo"
  data-iban-validation-classes
  required
></ui-bb-credit-suggest-ng>
```

## Table of Contents
- **uiBBCreditSuggest**<br/>    <a href="#uiBBCreditSuggest_messages">#messages</a><br/>    <a href="#uiBBCreditSuggest_customTemplateId">#customTemplateId</a><br/>
- **uiBbCreditSuggestController**<br/>    <a href="#uiBbCreditSuggestController_$postLink">#$postLink()</a><br/>    <a href="#uiBbCreditSuggestController_filterAccounts">#filterAccounts(options, filterBy)</a><br/>    <a href="#uiBbCreditSuggestController_$doCheck">#$doCheck()</a><br/>    <a href="#uiBbCreditSuggestController_$selectedSetter">#$selectedSetter()</a><br/>    <a href="#uiBbCreditSuggestController_selected">#selected</a><br/>

---

## uiBBCreditSuggest


| Property | Type | Description |
| :-- | :-- | :-- |
| accounts | Array of Object | List of accounts to filter and select with user input |
| messages | Object | Localized messages |
| custom-template-id | String | Template ID (or URL) which will be rendered as an option in dropdown |
| allow-external | Boolean | Are external accounts included in list. If not, IBAN field stays disabled |
| hide-account-number | Boolean | Hides account number (bban) and searching by bban functionality |
| get-accounts | Function | External method for transform accounts array into custom structure Can be defined in extensions helpers |
| iban-validation-classes | [void](#void) | Append has-success and has-error classes to IBAN field on validation |
| formatAmountTemplateUrl | String (optional) | Custom template url for popup element. |
### <a name="uiBBCreditSuggest_messages"></a>*#messages*

List of messages to be shown by component

**Type:** *Object*

### <a name="uiBBCreditSuggest_customTemplateId"></a>*#customTemplateId*

Template ID (or URL) which will be rendered
as an option in dropdown

**Type:** *String*


---

## uiBbCreditSuggestController

Credit suggest component controller.

| Injector Key |
| :-- |
| *uiBbCreditSuggestController* |


### <a name="uiBbCreditSuggestController_$postLink"></a>*#$postLink()*

Called after this controller's element and its children have been linked
Initialize necessary functionality

### <a name="uiBbCreditSuggestController_filterAccounts"></a>*#filterAccounts(options, filterBy)*

Filters accounts by name
Called by the uiBBAutocomplete load-result - uses as a data composer for accounts

| Parameter | Type | Description |
| :-- | :-- | :-- |
| options | Object | as provided by uiBBAutocomplete, we only use searchQuery prop |
| filterBy | String | specifies which field triggers filtering (name, iban or bban). |

### <a name="uiBbCreditSuggestController_$doCheck"></a>*#$doCheck()*

Default angular function running on digest cycle
Applies selected credit to model.

### <a name="uiBbCreditSuggestController_$selectedSetter"></a>*#$selectedSetter()*

Sets the beneficiary account
### <a name="uiBbCreditSuggestController_selected"></a>*#selected*


**Type:** *[AccountView](#AccountView)*

