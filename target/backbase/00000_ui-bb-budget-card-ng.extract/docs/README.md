# ui-bb-budget-card-ng


Version: **1.1.5**


## Imports

* ui-bb-format-amount
* vendor-bb-angular

---

## Example

```javascript
// In an extension:
// file: scripts/index.js
import uiBbBudgetCardNg from 'ui-bb-budget-card-ng';

export const dependencyKeys = [
  uiBbBudgetCardNg,
];

// file: templates/template.ng.html
<ui-bb-budget-card-ng class="col-xs-12"
/>
```

## Table of Contents
- **Exports**<br/>    <a href="#default">default</a><br/>
- **ui-bb-budget-card-ng**<br/>    <a href="#ui-bb-budget-card-nguiBbBudgetCardController">uiBbBudgetCardController()</a><br/>    <a href="#ui-bb-budget-card-nganimateAvailableAmount">animateAvailableAmount</a><br/>    <a href="#ui-bb-budget-card-ngchartColor">chartColor</a><br/>    <a href="#ui-bb-budget-card-ngamountColor">amountColor</a><br/>    <a href="#ui-bb-budget-card-ngamountSpentColor">amountSpentColor</a><br/>

## Exports

### <a name="default"></a>*default*

The angular module name

**Type:** *String*


---

## uiBbBudgetCardNg

Component used to display data using a lightweight chart

| Property | Type | Description |
| :-- | :-- | :-- |
| labels | Object | Contains translated component labels |
| labels.title | String | Title label |
| labels.spent | String | Spent label |
| labels.chart | String | Chart's center label |
| labels.limit | String | Limit label |
| labels.edit | String | Edit button label |
| labels.delete | String | Delete button label |
| budgetIcon | String | Font awesome icon class |
| chartWrapperClass | String | It sets a class on the chart wrapper |
| chartColorLevel | String | Sets the color level of the chart - success, warning, danger |
| spent | Object | Amount object that is passed to the format ui component |
| spendingLimit | Object | Spending limit object that is passed to the format ui component |
| spentPercentage | Number | The percentage of the chart |
| availableAmount | Object | Available amount object that is passed to the format ui component |
| onUpdate | Function (optional) | Function to be called after click on Edit button. If not provided, button will be hidden. If delete handler is also not provided, whole dropdown will be hidden |
| onDelete | Function (optional) | Function to be called after click on Delete button. If not provided, button will be hidden. If edit handler is also not provided, whole dropdown will be hidden |

---

## ChartLevel

A set of constants which defines the color level
of the chart

---

## CHART_SLICE_CLASSES

A set of constants which defines CSS classes of
chart moving slices

---

## CARD_COLOR_CLASSES

A set of constants which defines the color level
classes used to style the chart

---

### <a name="ui-bb-budget-card-nguiBbBudgetCardController"></a>*uiBbBudgetCardController()*

Card chart controller

---

---
### <a name="ui-bb-budget-card-nganimateAvailableAmount"></a>*animateAvailableAmount*

Animated available amount

**Type:** *Number*


---
### <a name="ui-bb-budget-card-ngchartColor"></a>*chartColor*

Chart color

**Type:** *String*


---
### <a name="ui-bb-budget-card-ngamountColor"></a>*amountColor*

Amount color

**Type:** *String*


---
### <a name="ui-bb-budget-card-ngamountSpentColor"></a>*amountSpentColor*

Amount spent color

**Type:** *String*

