# ext-bb-income-spending-analysis-category-ng


Version: **1.6.5**

Default extension for widget-bb-income-spending-analysis-category-ng

## Imports

* lib-bb-styles
* ui-bb-change-period-ng
* ui-bb-chartjs-chart-bar-ng
* ui-bb-chartjs-chart-donut-ng
* ui-bb-empty-state-ng
* ui-bb-format-amount
* ui-bb-i18n-ng
* ui-bb-substitute-error-ng
* vendor-bb-angular-ng-aria
* vendor-bb-uib-buttons

---

## Table of Contents
- **ext-bb-income-spending-analysis-category-ng**<br/>    <a href="#ext-bb-income-spending-analysis-category-ngDEFAULT_TOOLTIP_SELECTOR">DEFAULT_TOOLTIP_SELECTOR</a><br/>    <a href="#ext-bb-income-spending-analysis-category-ngARROW_INNER_CSS_SELECTOR">ARROW_INNER_CSS_SELECTOR</a><br/>    <a href="#ext-bb-income-spending-analysis-category-ngARROW_OUTER_CSS_SELECTOR">ARROW_OUTER_CSS_SELECTOR</a><br/>    <a href="#ext-bb-income-spending-analysis-category-ngBAR_CHART_CSS_SELECTORS">BAR_CHART_CSS_SELECTORS</a><br/>    <a href="#ext-bb-income-spending-analysis-category-ngCHART_SECTOR_SHIFT_SIZE">CHART_SECTOR_SHIFT_SIZE</a><br/>    <a href="#ext-bb-income-spending-analysis-category-ngMS_IN_MIN">MS_IN_MIN</a><br/>    <a href="#ext-bb-income-spending-analysis-category-ngRENDERING_ANIMATION_TIME">RENDERING_ANIMATION_TIME</a><br/>    <a href="#ext-bb-income-spending-analysis-category-ngCHART_UPDATE_SUBSCRIPTIONS">CHART_UPDATE_SUBSCRIPTIONS</a><br/>    <a href="#ext-bb-income-spending-analysis-category-ngonDonutChartSectorClickAnimation">onDonutChartSectorClickAnimation(chartInstance, event)</a><br/>    <a href="#ext-bb-income-spending-analysis-category-ngperiodStartLabelFormatter">periodStartLabelFormatter(date)</a><br/>    <a href="#ext-bb-income-spending-analysis-category-ngperiodEndLabelFormatter">periodEndLabelFormatter(date)</a><br/>    <a href="#ext-bb-income-spending-analysis-category-ngcustomizeTooltip">customizeTooltip(tooltip, element, data, chart)</a><br/>    <a href="#ext-bb-income-spending-analysis-category-ngcustomizeTurnoversTooltip">customizeTurnoversTooltip(tooltip, element, data)</a><br/>    <a href="#ext-bb-income-spending-analysis-category-ngdonutChartOptions">donutChartOptions()</a><br/>    <a href="#ext-bb-income-spending-analysis-category-ngchartPlugins">chartPlugins</a><br/>    <a href="#ext-bb-income-spending-analysis-category-ngonPeriodStartChange">onPeriodStartChange(ctrl)</a><br/>    <a href="#ext-bb-income-spending-analysis-category-ngonPeriodEndChange">onPeriodEndChange(ctrl)</a><br/>    <a href="#ext-bb-income-spending-analysis-category-ngisSeriesDataAvailable">isSeriesDataAvailable(series)</a><br/>    <a href="#ext-bb-income-spending-analysis-category-nggetClickHandler">getClickHandler($ctrl)</a><br/>    <a href="#ext-bb-income-spending-analysis-category-ngformatX">formatX(ticks, data)</a><br/>    <a href="#ext-bb-income-spending-analysis-category-ngformatY">formatY(ticks, data)</a><br/>    <a href="#ext-bb-income-spending-analysis-category-ngprocessAnalysisCategorySeries">processAnalysisCategorySeries(series, data)</a><br/>    <a href="#ext-bb-income-spending-analysis-category-ngprocessTurnoverSeries">processTurnoverSeries(series, data)</a><br/>    <a href="#ext-bb-income-spending-analysis-category-ngonTurnoversUpdate">onTurnoversUpdate(params)</a><br/>    <a href="#ext-bb-income-spending-analysis-category-ngprocessLoadError">processLoadError(The)</a><br/>
- **Type Definitions**<br/>    <a href="#UpdateSubscription">UpdateSubscription</a><br/>    <a href="#Position">Position</a><br/>    <a href="#ExtendedAnalysisCategory">ExtendedAnalysisCategory</a><br/>    <a href="#AnalysisCategoryBBSeries">AnalysisCategoryBBSeries</a><br/>    <a href="#AnalysisCategoryDataset">AnalysisCategoryDataset</a><br/>

---
### <a name="ext-bb-income-spending-analysis-category-ngDEFAULT_TOOLTIP_SELECTOR"></a>*DEFAULT_TOOLTIP_SELECTOR*

Chart's tooltip CSS selector

**Type:** *String*


---
### <a name="ext-bb-income-spending-analysis-category-ngARROW_INNER_CSS_SELECTOR"></a>*ARROW_INNER_CSS_SELECTOR*

Chart tooltip's arrow CSS selector (inner layer)

**Type:** *String*


---
### <a name="ext-bb-income-spending-analysis-category-ngARROW_OUTER_CSS_SELECTOR"></a>*ARROW_OUTER_CSS_SELECTOR*

Chart tooltip's arrow CSS selector (outer layer)

**Type:** *String*


---
### <a name="ext-bb-income-spending-analysis-category-ngBAR_CHART_CSS_SELECTORS"></a>*BAR_CHART_CSS_SELECTORS*

Object with selectors needed for correct styling of bar chart canvas parts

**Type:** *[CSS](#CSS)*


---

## CHART_SLICE_LABEL

Slice labels configuration

| Property | Type | Description |
| :-- | :-- | :-- |
| dataAttr | String | Data attribute that will be attached to the wrapper that contains the label |
| offset | Number | Icon's offset from the outer edge of the chart |
| minimum | Number | Minimum value of portion required to create a label |

---
### <a name="ext-bb-income-spending-analysis-category-ngCHART_SECTOR_SHIFT_SIZE"></a>*CHART_SECTOR_SHIFT_SIZE*

Slice shifting size (pixels) and size of the canvas padding (which is
needed to provide a space for the shifting animation). Is also
used for icons offset calculation.

**Type:** *Number*


---
### <a name="ext-bb-income-spending-analysis-category-ngMS_IN_MIN"></a>*MS_IN_MIN*

Amount of milliseconds in a minute

**Type:** *Number*


---
### <a name="ext-bb-income-spending-analysis-category-ngRENDERING_ANIMATION_TIME"></a>*RENDERING_ANIMATION_TIME*

Time in milliseconds to have a donut slice animation on click

**Type:** *Number*


---
### <a name="ext-bb-income-spending-analysis-category-ngCHART_UPDATE_SUBSCRIPTIONS"></a>*CHART_UPDATE_SUBSCRIPTIONS*

List of container names and events that those containers can publish on which
chart needs to be redrawn

**Type:** *Array of [UpdateSubscription](#UpdateSubscription)*


---

### <a name="ext-bb-income-spending-analysis-category-ngonDonutChartSectorClickAnimation"></a>*onDonutChartSectorClickAnimation(chartInstance, event)*

onClick handler with a visualisation for donut sector

| Parameter | Type | Description |
| :-- | :-- | :-- |
| chartInstance | [*](#*) | the Chart.js object |
| event | [*](#*) | Chart.js click event object with a clicked area |

##### Returns

Object - *name and isSelected flag of the active sector (category)*

---

### <a name="ext-bb-income-spending-analysis-category-ngperiodStartLabelFormatter"></a>*periodStartLabelFormatter(date)*

Start period label formatter helper. Returns formatted date.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| date | Date |  |

##### Returns

String - *Formatted label*

---

### <a name="ext-bb-income-spending-analysis-category-ngperiodEndLabelFormatter"></a>*periodEndLabelFormatter(date)*

End period label formatter helper. In case period is larger than current date
(end date of current month) it returns translation for analysis.label.period.now,
otherwise it returns formatted date

| Parameter | Type | Description |
| :-- | :-- | :-- |
| date | Date |  |

##### Returns

String - *Formatted label*

---

### <a name="ext-bb-income-spending-analysis-category-ngcustomizeTooltip"></a>*customizeTooltip(tooltip, element, data, chart)*

Creates custom tooltip content and places tooltip element on the edge
of currently active portion

| Parameter | Type | Description |
| :-- | :-- | :-- |
| tooltip | Object | object containing tooltip related data like positions, current data point, styling from chart options, etc. |
| element | Object | in DOM |
| data | [AnalysisCategoryBBSeries](#AnalysisCategoryBBSeries) | array of data used to draw the chart |
| chart | Object | instance |

---

### <a name="ext-bb-income-spending-analysis-category-ngcustomizeTurnoversTooltip"></a>*customizeTurnoversTooltip(tooltip, element, data)*

Creates custom tooltip content and places tooltip element on top
of the currently active bar

| Parameter | Type | Description |
| :-- | :-- | :-- |
| tooltip | Object | object containing tooltip related data like positions, current data point, styling from chart options, etc. |
| element | Object | in DOM |
| data | [TurnoversBBSeries](#TurnoversBBSeries) | array of data used to draw the chart |

---

### <a name="ext-bb-income-spending-analysis-category-ngdonutChartOptions"></a>*donutChartOptions()*

Keeps analysis type flag and returns chart options object

##### Returns

Object - *Donut chart options object*

---
### <a name="ext-bb-income-spending-analysis-category-ngchartPlugins"></a>*chartPlugins*

Array of plugins used to transform Chart.js rendering in the extension

**Type:** *Array*


---

### <a name="ext-bb-income-spending-analysis-category-ngonPeriodStartChange"></a>*onPeriodStartChange(ctrl)*

Callback on period start date value change. This function ensures
that controller property is also updated

| Parameter | Type | Description |
| :-- | :-- | :-- |
| ctrl | [IncomeSpendingAnalysisCategoryController](#IncomeSpendingAnalysisCategoryController) |  |

---

### <a name="ext-bb-income-spending-analysis-category-ngonPeriodEndChange"></a>*onPeriodEndChange(ctrl)*

Callback on period value change. Calls
controller's onPeriodEndChanged listener

| Parameter | Type | Description |
| :-- | :-- | :-- |
| ctrl | [IncomeSpendingAnalysisCategoryController](#IncomeSpendingAnalysisCategoryController) |  |

---

### <a name="ext-bb-income-spending-analysis-category-ngisSeriesDataAvailable"></a>*isSeriesDataAvailable(series)*

Checks if data for chart is available in series object

| Parameter | Type | Description |
| :-- | :-- | :-- |
| series | [AnalysisCategoryBBSeries](#AnalysisCategoryBBSeries) |  |

##### Returns

Boolean - *returns true if series data is not empty*

---

### <a name="ext-bb-income-spending-analysis-category-nggetClickHandler"></a>*getClickHandler($ctrl)*

Function to create new handler for the chart click handling

| Parameter | Type | Description |
| :-- | :-- | :-- |
| $ctrl | [IncomeSpendingAnalysisCategoryController](#IncomeSpendingAnalysisCategoryController) |  |

##### Returns

Function - *chart click handler*

---

### <a name="ext-bb-income-spending-analysis-category-ngformatX"></a>*formatX(ticks, data)*

X axis tick formatter

| Parameter | Type | Description |
| :-- | :-- | :-- |
| ticks | Array | Array of scale ticks |
| data | [TurnoversBBSeries](#TurnoversBBSeries) | Chart series |

##### Returns

Array - *Formatted array of ticks*

---

### <a name="ext-bb-income-spending-analysis-category-ngformatY"></a>*formatY(ticks, data)*

Y axis tick formatter

| Parameter | Type | Description |
| :-- | :-- | :-- |
| ticks | Array | Array of scale ticks |
| data | [TurnoversBBSeries](#TurnoversBBSeries) | Chart series |

##### Returns

Array - *Formatted array of ticks*

---

### <a name="ext-bb-income-spending-analysis-category-ngprocessAnalysisCategorySeries"></a>*processAnalysisCategorySeries(series, data)*

Hook for income/spending chart series object post processing

| Parameter | Type | Description |
| :-- | :-- | :-- |
| series | [BBSeries](model-bb-income-spending-analysis-category-ng.html#BBSeries) | chart series data |
| data | [AnalysisCategoryData](model-bb-income-spending-analysis-category-ng.html#AnalysisCategoryData) |  |

##### Returns

[AnalysisCategoryBBSeries](#AnalysisCategoryBBSeries) - *processed series*

---

### <a name="ext-bb-income-spending-analysis-category-ngprocessTurnoverSeries"></a>*processTurnoverSeries(series, data)*

Default hook for turnovers chart series object post processing

| Parameter | Type | Description |
| :-- | :-- | :-- |
| series | [BBSeries](model-bb-turnovers-ng.html#BBSeries) | chart series data |
| data | [Turnover](model-bb-turnovers-ng.html#Turnover) | original turnover object |

##### Returns

[TurnoversBBSeries](#TurnoversBBSeries) - *processed series*

---

### <a name="ext-bb-income-spending-analysis-category-ngonTurnoversUpdate"></a>*onTurnoversUpdate(params)*

Process parameters before they are sent to the model's load method

| Parameter | Type | Description |
| :-- | :-- | :-- |
| params | Object | to process |

##### Returns

Object - *processed params*

---

### <a name="ext-bb-income-spending-analysis-category-ngprocessLoadError"></a>*processLoadError(The)*

Overwrite the default hook and don't return passed error

| Parameter | Type | Description |
| :-- | :-- | :-- |
| The | Error | error passed |

##### Returns

[*](#*) - *null*

## Type Definitions


### <a name="UpdateSubscription"></a>*UpdateSubscription*

Object containing container name and event that that container can publish

**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| container | String | Container name |
| event | String | Event that can be expected from a container |

### <a name="Position"></a>*Position*

Element absolute position object

**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| left | Number | Distance from left edge of the area |
| top | Number | Distance from the top of area |

### <a name="ExtendedAnalysisCategory"></a>*ExtendedAnalysisCategory*

Extended analysis category item

*Extends*: [AnalysisCategory](model-bb-income-spending-analysis-category-ng.html#AnalysisCategory)

**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| totalPortion | Number | Percentage of total income/spending for a given category and all categories with a higher portion |

### <a name="AnalysisCategoryBBSeries"></a>*AnalysisCategoryBBSeries*

Analysis specific BBSeries object

**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| labels | Array of String | Array of chart labels |
| datasets | Array of [AnalysisCategoryDataset](#AnalysisCategoryDataset) | Array of all datasets |
| analysisItems | Array of [ExtendedAnalysisCategory](#ExtendedAnalysisCategory) | Extended spending array |

### <a name="AnalysisCategoryDataset"></a>*AnalysisCategoryDataset*

Spendings specific dataset object for chart

*Extends*: [Dataset](model-bb-income-spending-analysis-category-ng.html#Dataset)

**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| backgroundColor | String | Background color for chart slices |
| borderWidth | Number | Border size between slices |

---
