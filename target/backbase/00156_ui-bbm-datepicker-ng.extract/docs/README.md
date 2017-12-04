# ui-bbm-datepicker-ng


Version: **1.0.144**

Mobile DatePicker UI component

## Imports

* lib-bbm-plugins
* ui-bb-date-label-filter-ng
* vendor-bb-angular

---

## Example

```javascript
// In an extension:
// file: scripts/index.js
import uiBbmDatepickerNgKey from 'ui-bbm-datepicker-ng';

export const dependencyKeys = [
  uiBbmDatepickerNgKey,
];

// file: templates/template.ng.html
<ui-bbm-datepicker-ng
  data-label="'Start date'"
  data-title="'Select a start date'"
  data-ng-model="$ctrl.startDate"
  data-min-date="'2017-05-10T14:00:00+0200'">
  data-max-date="'2018-01-01T14:00:00+0200'"
  data-date-labels="ext.helpers.dateLabels">
</ui-bbm-datepicker-ng>
```

## Table of Contents
- **Exports**<br/>    <a href="#default">default</a><br/>
- **ui-bbm-datepicker-ng**<br/>    <a href="#ui-bbm-datepicker-ngdateDecoratorFilter">dateDecoratorFilter($filter)</a><br/>

## Exports

### <a name="default"></a>*default*

The angular module name

**Type:** *String*


---

## uiBbmDatepickerNg


| Property | Type | Description |
| :-- | :-- | :-- |
| label | String | Text label |
| title | String (optional) | Title for the DatePicker plugin |
| placeholder | String (optional) | Placeholder text which is displayed when there is no selected date yet |
| ngModel | String | Selected date |
| minDate | String (optional) | Minimum allowed date |
| maxDate | String (optional) | Maximum allowed date |
| dateLabels | Object (optional) | Labels for decorating dates |

---

### <a name="ui-bbm-datepicker-ngdateDecoratorFilter"></a>*dateDecoratorFilter($filter)*

Filter for decorating date based on the date labels.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| $filter | Function | Filter service |

##### Returns

Function - *Function that is used to filter*
