# ui-bb-search-box-ng


Version: **1.2.47**

Search box component supporting typeahead and submit search,
including clear text button

## Imports

* vendor-bb-angular

---

## Example

```javascript
// In an extension:
// file: scripts/index.js
import uiBbSearchBoxNgKey from 'ui-bb-search-box-ng';

export const dependencyKeys = [
  uiBbSearchBoxNgKey,
];

// file: templates/template.ng.html
<ui-bb-search-box-ng
  config="{
    labels: {
      title: 'Search',
      placeholder: 'Enter search text...',
      clear: 'Clear text',
      submit: 'Submit search',
    }
  }"
  on-change="(search) => {}"
  on-submit="(search) => {}">
</ui-bb-search-box-ng>
```

## Table of Contents
- **Exports**<br/>    <a href="#default">default</a><br/>
- **Type Definitions**<br/>    <a href="#Config">Config</a><br/>    <a href="#Labels">Labels</a><br/>

## Exports

### <a name="default"></a>*default*

The angular module name

**Type:** *String*


---

## uiBBSearchBoxComponent


| Property | Type | Description |
| :-- | :-- | :-- |
| config | [Config](#Config) | Configuration object |
| disabled | Boolean (optional) | Enables/disabled component |
| ngModel | String | Component model value |
| onChange | Function (optional) | Function to attach to on change event, it will be called every time user adds text to component |
| onSubmit | Function (optional) | Function to attach to on submit event, the component will be submitted after user pressed enter and it has a value |
| onClear | Function (optional) | Function to attach to on clear event, when clicking clear button event will be fired. |
| isLoading | Boolean | Controls whether or not loading indicator is visible |
| forcedSubmit | Boolean | Controls whether or not onSubmit callback should be triggered regardless to state of ngModel |

## Type Definitions


### <a name="Config"></a>*Config*

Config type definition

**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| id | String | Id of the input |
| name | String | Name of the input |
| debounce | Number (optional) | Time in ms to start search after writting, 0 to start search immediately after writing |
| hideButton | Boolean (optional) | Controls whether or not should hide action button |
| showIcon | Boolean (optional) | Controls whether or not should show search icon |
| iconClasses | String (optional) | String with css-classes for button icon |
| Labels | [Labels](#Labels) | Texts used in component |

### <a name="Labels"></a>*Labels*

Labels type definition

**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| title | String | Accessibility label for component |
| placeholder | String | Placeholder label for the search input |
| clear | String | Accesibility label for clear button |
| button | String | Accesibility label for main button |

---
