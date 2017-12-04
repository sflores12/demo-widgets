# ui-bb-dropdown-select


Version: **1.1.4**

UI dropdown select component

## Imports

* vendor-bb-angular
* vendor-bb-uib-dropdown

---

## Example

```javascript
// In an extension:
// file: scripts/index.js
import uiBbDropdownSelectKey from 'ui-bb-dropdown-select';

export const dependencyKeys = [
  uiBbDropdownSelectKey,
];

// file: templates/template.ng.html
<ui-bb-dropdown-select
  ng-model="item"
  selected-as="$option.name">
  <ui-bb-dropdown-option
    option="item"
    data-arrow-navigation="true"
    ng-repeat="item in items"
    class="list-group-item-text">
      {{:: $option.name }}
  </ui-bb-dropdown-option>
</ui-bb-dropdown-select>
```

## Table of Contents
- **Exports**<br/>    <a href="#default">default</a><br/>
- **uiBbDropdownSelectDirective**<br/>    <a href="#uiBbDropdownSelectDirective_onBlur">#onBlur(event)</a><br/>    <a href="#uiBbDropdownSelectDirective_clickHandler">#clickHandler(event)</a><br/>

## Exports

### <a name="default"></a>*default*

The angular module name

**Type:** *String*


---

## uiBbDropdownOption


---

## uiBbDropdownSelectDirective


| Property | Type | Description |
| :-- | :-- | :-- |
| isOpen | Boolean | Defines whether or not the dropdown is open |
| multiple | Boolean (optional) | True if multiple selection is enabled (false by default) |
| ngDisabled | Boolean | Defines whether or not the dropdown is disabled |
| ngModel | Object | Dropdown model |
| placeholder | String (optional) | Placeholder text |
| ngChange | Function | Callback function triggered when dropdown item is selected |
| selectedAs | Function | Allows to customize selected value |
| labels | Object | Object with labels that will be attached to dropdown's scope |

### <a name="uiBbDropdownSelectDirective_onBlur"></a>*#onBlur(event)*

Close menu if next focused element is outside of container

| Parameter | Type | Description |
| :-- | :-- | :-- |
| event | Object |  |

### <a name="uiBbDropdownSelectDirective_clickHandler"></a>*#clickHandler(event)*

Handles clicks on the items in the list

| Parameter | Type | Description |
| :-- | :-- | :-- |
| event | Object |  |

---

## uiBbDropdownSelectedDirective

