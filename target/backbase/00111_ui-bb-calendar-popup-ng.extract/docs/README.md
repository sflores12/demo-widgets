# ui-bb-calendar-popup-ng


Version: **1.2.82**

UI datepicker popup component

## Imports

* vendor-bb-angular
* vendor-bb-uib-datepicker
* vendor-bb-uib-datepicker-popup
* vendor-bb-uib-position

---

## Example

```javascript
// In an extension:
// file: scripts/index.js
import uiBbCalendarPopupKey from 'ui-bb-calendar-popup-ng';

export const dependencyKeys = [
  uiBbCalendarPopupKey,
];

// file: templates/template.ng.html
<ui-bb-calendar-popup
  data-date="$ctrl.date"
  data-config="$ctrl.calendarPopupConfig"
  data-disabled="false">
</ui-bb-calendar-popup>
```

## Table of Contents
- **Exports**<br/>    <a href="#default">default</a><br/>
- **ui-bb-calendar-popup-ng**<br/>    <a href="#ui-bb-calendar-popup-nguiBbCalendarPopupController">uiBbCalendarPopupController()</a><br/>    <a href="#ui-bb-calendar-popup-ngformatViewValue">formatViewValue()</a><br/>    <a href="#ui-bb-calendar-popup-ngtoggle">toggle()</a><br/>    <a href="#ui-bb-calendar-popup-ng$onChanges">$onChanges(changesObject)</a><br/>    <a href="#ui-bb-calendar-popup-ng$onInit">$onInit()</a><br/>
- **Type Definitions**<br/>    <a href="#DateRange">DateRange</a><br/>    <a href="#DateRangeClass">DateRangeClass</a><br/>

## Exports

### <a name="default"></a>*default*

The angular module name

**Type:** *String*


---

## uiBbCalendarPopupComponent


| Property | Type | Description |
| :-- | :-- | :-- |
| date | String | Date model |
| dateRange | [DateRange](#DateRange) | Date-range model |
| config | Object | Configuration object |
| messages | Object | Object with translated messages |
| disabled | Boolean | Defines whether or not component is disabled |
| onClick | Boolean | Defines whether or not component is toggled on click |
| onFocus | Boolean | Defines whether or not component is toggled on focus |

---

### <a name="ui-bb-calendar-popup-nguiBbCalendarPopupController"></a>*uiBbCalendarPopupController()*

Calendar popup controller

---

### <a name="ui-bb-calendar-popup-ngformatViewValue"></a>*formatViewValue()*

Displays translation of "calendar.label.today" key or "today" string in the input field
when today date is selected

##### Returns

String - **

---

### <a name="ui-bb-calendar-popup-ngtoggle"></a>*toggle()*

Toggling open/close state of the calendar

---

### <a name="ui-bb-calendar-popup-ng$onChanges"></a>*$onChanges(changesObject)*

Adjusts selected date, minDate and maxDate of current control
to the value passed through a binding

| Parameter | Type | Description |
| :-- | :-- | :-- |
| changesObject | Object | Object containing changes in one-way bindings |

---

### <a name="ui-bb-calendar-popup-ng$onInit"></a>*$onInit()*

Set default value on icon click

## Type Definitions


### <a name="DateRange"></a>*DateRange*

DateRange type definition

**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| startDate | String | Start date of date-range |
| endDate | String | End date of date-range |

### <a name="DateRangeClass"></a>*DateRangeClass*

Css-classes for date-range selection

**Type:** *Enumeration*


---
