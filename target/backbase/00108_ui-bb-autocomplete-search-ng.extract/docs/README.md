# ui-bb-autocomplete-search-ng


Version: **1.0.47**

Autocomplete search component

## Imports

* ui-bb-list-ng
* ui-bb-search-box-ng
* vendor-bb-angular
* vendor-bb-angular-sanitize
* vendor-bb-uib-typeahead

---

## Example

```javascript
// In an extension:
// file: scripts/index.js
import uiBbAutocompleteSearchNgKey from 'ui-bb-autocomplete-search-ng';

export const dependencyKeys = [
  uiBbAutocompleteSearchNgKey,
];

// file: templates/template.ng.html
<ui-bb-autocomplete-search-ng
  searchBoxConfig="{
    labels: {
      title: 'Search',
      placeholder: 'Enter search text...',
      clear: 'Clear text',
      submit: 'Submit search',
    },
    hideButton: true,
    iconClasses: 'fa fa-chevron-down',
  }"
  load-result="(options) => {}"
  on-select="(item, label) => {}"
  label-key="'name'">
</ui-bb-autocomplete-search-ng>
```

## Table of Contents
- **Exports**<br/>    <a href="#default">default</a><br/>
- **ui-bb-autocomplete-search-ng**<br/>    <a href="#ui-bb-autocomplete-search-nguiBbAutocompleteSearchController">uiBbAutocompleteSearchController(element, templateCache, timeout, Promise)</a><br/>
- **Type Definitions**<br/>    <a href="#Messages">Messages</a><br/>

## Exports

### <a name="default"></a>*default*

The angular module name

**Type:** *String*


---

## uiBBAutocompleteSearchComponent


| Property | Type | Description |
| :-- | :-- | :-- |
| ngModel | String | Component model value |
| disabled | String | Controls whether or not component disabled or not |
| searchBoxConfig | Object | Configuration object for search box component |
| searchMinLength | Number | Minimum search string length for show dropdown result |
| loadResult | Function | Function to retrieve search result. It gets an object with: - searchValue - Search query string - isLoadMore - Indicates that Function should load next page of results Function should return a Promise with object with properties: - data - array of results - totalItems - Total count of results - hasMore - Controls whether or not load service has more results |
| labelKey | String | Property name of result item that will be used for show in search field after select item |
| onSelect | Function | Function that calls after select result item |
| onClear | Function | Function that calls after input field was cleared |
| messages | [Messages](#Messages) | Messages object |
| popupTemplateUrl | [String?](#String?) | Custom template url for popup element. The referenced template should contain the element with attribute 'data-role="list-wrapper"' for append matched results to it. |
| matchTemplateUrl | [String?](#String?) | Custom template url for match element |

---

### <a name="ui-bb-autocomplete-search-nguiBbAutocompleteSearchController"></a>*uiBbAutocompleteSearchController(element, templateCache, timeout, Promise)*

Modal instance controller

| Parameter | Type | Description |
| :-- | :-- | :-- |
| element | Object | Angular element object |
| templateCache | Object | Angular template cache service |
| timeout | Object | Angular timeout service |
| Promise | Object | Angular Promise service |

## Type Definitions


### <a name="Messages"></a>*Messages*

Labels type definition

**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| noResults | String | Translated message when no one results found |
| result | String | Translated message when one result found |
| results | String | Translated prefix for message when more then one result found |

---
