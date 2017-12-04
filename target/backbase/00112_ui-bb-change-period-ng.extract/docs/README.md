# ui-bb-change-period-ng


Version: **1.2.9**


## Imports

* vendor-bb-angular

---

## Example

```javascript
// In an extension:
// file: scripts/index.js
import uiBbChangePeriodKey from 'ui-bb-change-period-ng';

export const dependencyKeys = [
  uiBbChangePeriodKey,
];

// file: templates/template.ng.html
<ui-bb-change-period-ng
 data-period-start="2017-06-01"
 data-period-end="2017-06-31"
 data-change-period="ext.helpers.onPeriodChange()"
></ui-bb-change-period-ng>
```

## Table of Contents
- **ui-bb-change-period-ng**<br/>    <a href="#ui-bb-change-period-ngformatPeriodLabel">formatPeriodLabel(day, formattingFn)</a><br/>    <a href="#ui-bb-change-period-ngisButtonDisabled">isButtonDisabled(month)</a><br/>    <a href="#ui-bb-change-period-ngchangePeriod">changePeriod(period)</a><br/>

---

## uiBbChangePeriodNg

Component used to change the date period.

| Property | Type | Description |
| :-- | :-- | :-- |
| periodStart | String | Start date as a ISO string |
| periodEnd | String | End date as a ISO string |
| periodStep | Number | Monthly interval |
| onPeriodStartChange | Function (optional) | Callback triggered after the period start is changed |
| onPeriodEndChange | Function (optional) | Callback triggered after the period end is changed |
| periodFormatter | Function (optional) | [Deprecated] Method called to format period start and end date labels |
| periodStartFormatter | Function (optional) | Method called to format period start date label |
| periodEndFormatter | Function (optional) | Method called to format period end date label |

---

---

### <a name="ui-bb-change-period-ngformatPeriodLabel"></a>*formatPeriodLabel(day, formattingFn)*

Period label formatter method. It uses provided custom formatter
or formats date in format d MMM yyyy


| Parameter | Type | Description |
| :-- | :-- | :-- |
| day | Number | Period's day |
| formattingFn | Function | Formatting function |

##### Returns

String - **

---

### <a name="ui-bb-change-period-ngisButtonDisabled"></a>*isButtonDisabled(month)*

Checks if a button is disabled


| Parameter | Type | Description |
| :-- | :-- | :-- |
| month | [any](#any) | Number of the month |

##### Returns

Boolean - **

---

### <a name="ui-bb-change-period-ngchangePeriod"></a>*changePeriod(period)*

Changes the to previous or next one based on a month number passed to it


| Parameter | Type | Description |
| :-- | :-- | :-- |
| period | [any](#any) | Change period step |

##### Returns

[void](#void) - **

---
