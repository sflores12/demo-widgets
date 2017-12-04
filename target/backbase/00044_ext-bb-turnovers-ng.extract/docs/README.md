# ext-bb-turnovers-ng


Version: **1.2.8**

Default extension for widget-bb-turnovers-ng

## Imports

* lib-bb-styles
* ui-bb-chartjs-chart-bar-ng
* ui-bb-dropdown-select
* ui-bb-empty-state-ng
* ui-bb-format-amount
* ui-bb-i18n-ng
* ui-bb-substitute-error-ng
* vendor-bb-angular-ng-aria

---

## Table of Contents
- **ext-bb-turnovers-ng**<br/>    <a href="#ext-bb-turnovers-ngPERIODS">PERIODS</a><br/>    <a href="#ext-bb-turnovers-ngDATASET_LABELS">DATASET_LABELS</a><br/>    <a href="#ext-bb-turnovers-ngBAR_COUNT_BREAK_POINT">BAR_COUNT_BREAK_POINT</a><br/>    <a href="#ext-bb-turnovers-ngMAX_Y_TICKS">MAX_Y_TICKS</a><br/>    <a href="#ext-bb-turnovers-ngCSS_SELECTORS">CSS_SELECTORS</a><br/>    <a href="#ext-bb-turnovers-nggetPeriods">getPeriods()</a><br/>    <a href="#ext-bb-turnovers-ngperiodToDate">periodToDate(period)</a><br/>    <a href="#ext-bb-turnovers-nggetDefaultPeriod">getDefaultPeriod()</a><br/>    <a href="#ext-bb-turnovers-ngchartPlugins">chartPlugins</a><br/>    <a href="#ext-bb-turnovers-ngcustomizeTooltip">customizeTooltip(tooltip, element, data, chart)</a><br/>    <a href="#ext-bb-turnovers-ngformatX">formatX(ticks, data)</a><br/>    <a href="#ext-bb-turnovers-ngformatY">formatY(ticks, data)</a><br/>    <a href="#ext-bb-turnovers-ngchartOptions">chartOptions</a><br/>    <a href="#ext-bb-turnovers-nghasDataToDraw">hasDataToDraw(series)</a><br/>    <a href="#ext-bb-turnovers-ngdefaultPeriodStart">defaultPeriodStart()</a><br/>    <a href="#ext-bb-turnovers-ngdefaultInterval">defaultInterval(interval)</a><br/>    <a href="#ext-bb-turnovers-ngonTurnoversUpdate">onTurnoversUpdate(params)</a><br/>    <a href="#ext-bb-turnovers-ngprocessTurnoverSeries">processTurnoverSeries(series, data)</a><br/>    <a href="#ext-bb-turnovers-ngprocessLoadError">processLoadError(The)</a><br/>
- **Type Definitions**<br/>    <a href="#CSS">CSS</a><br/>    <a href="#Period">Period</a><br/>    <a href="#TurnoversBBSeries">TurnoversBBSeries</a><br/>    <a href="#TurnoversDataset">TurnoversDataset</a><br/>    <a href="#ChartjsSettings">ChartjsSettings</a><br/>

---
### <a name="ext-bb-turnovers-ngPERIODS"></a>*PERIODS*

Periods definition array

**Type:** *Array of [Period](#Period)*


---
### <a name="ext-bb-turnovers-ngDATASET_LABELS"></a>*DATASET_LABELS*

Array of dataset labels

**Type:** *Array of String*


---
### <a name="ext-bb-turnovers-ngBAR_COUNT_BREAK_POINT"></a>*BAR_COUNT_BREAK_POINT*

Number of bars from which they should be put closer together

**Type:** *Number*


---
### <a name="ext-bb-turnovers-ngMAX_Y_TICKS"></a>*MAX_Y_TICKS*

Maximum number of ticks on Y axis

**Type:** *Number*


---
### <a name="ext-bb-turnovers-ngCSS_SELECTORS"></a>*CSS_SELECTORS*

Object with all selectors needed for correct styling of canvas parts

**Type:** *[CSS](#CSS)*


---

### <a name="ext-bb-turnovers-nggetPeriods"></a>*getPeriods()*

Retrieves list of all periods

##### Returns

Array of [Period](#Period) - *List of all available periods*

---

### <a name="ext-bb-turnovers-ngperiodToDate"></a>*periodToDate(period)*

Checks period object and converts it into format needed
for request (yyyy-mm-dd)

| Parameter | Type | Description |
| :-- | :-- | :-- |
| period | [Period](#Period) |  |

##### Returns

String - *Formatted date*

---

### <a name="ext-bb-turnovers-nggetDefaultPeriod"></a>*getDefaultPeriod()*

Finds default period from period list

##### Returns

[Period](#Period) - *Period marked as default*

---

---
### <a name="ext-bb-turnovers-ngchartPlugins"></a>*chartPlugins*

Array of plugins used to transform Chart.js rendering in the extension

**Type:** *Array*


---

### <a name="ext-bb-turnovers-ngcustomizeTooltip"></a>*customizeTooltip(tooltip, element, data, chart)*

Creates custom tooltip content and places tooltip element on top
of the currently active bar

| Parameter | Type | Description |
| :-- | :-- | :-- |
| tooltip | Object | object containing tooltip related data like positions, current data point, styling from chart options, etc. |
| element | Object | in DOM |
| data | [TurnoversBBSeries](#TurnoversBBSeries) | array of data used to draw the chart |
| chart | Object | instance |

---

### <a name="ext-bb-turnovers-ngformatX"></a>*formatX(ticks, data)*

X axis tick formatter

| Parameter | Type | Description |
| :-- | :-- | :-- |
| ticks | Array | Array of scale ticks |
| data | [TurnoversBBSeries](#TurnoversBBSeries) | Chart series |

##### Returns

Array - *Formatted array of ticks*

---

### <a name="ext-bb-turnovers-ngformatY"></a>*formatY(ticks, data)*

Y axis tick formatter

| Parameter | Type | Description |
| :-- | :-- | :-- |
| ticks | Array | Array of scale ticks |
| data | [TurnoversBBSeries](#TurnoversBBSeries) | Chart series |

##### Returns

Array - *Formatted array of ticks*

---
### <a name="ext-bb-turnovers-ngchartOptions"></a>*chartOptions*

Object with chart options that need to be overriden

**Type:** *[ChartjsSettings](#ChartjsSettings)*


---

### <a name="ext-bb-turnovers-nghasDataToDraw"></a>*hasDataToDraw(series)*

Checks chart series object to see if there are actual chart points to draw

| Parameter | Type | Description |
| :-- | :-- | :-- |
| series | [TurnoversBBSeries](#TurnoversBBSeries) | Chart series |

##### Returns

Boolean - **

---

### <a name="ext-bb-turnovers-ngdefaultPeriodStart"></a>*defaultPeriodStart()*

Sets period start property on init

##### Returns

String - *Start period string in format yyyy-mm-dd*

---

### <a name="ext-bb-turnovers-ngdefaultInterval"></a>*defaultInterval(interval)*

Sets interval property on init

| Parameter | Type | Description |
| :-- | :-- | :-- |
| interval | [Interval](widget-bb-turnovers-ng.html#Interval) | Available intervals |

##### Returns

String - *One of the available intervals*

---

### <a name="ext-bb-turnovers-ngonTurnoversUpdate"></a>*onTurnoversUpdate(params)*

Process parameters before they are sent to the model's load method

| Parameter | Type | Description |
| :-- | :-- | :-- |
| params | Object | to process |

##### Returns

Object - *processed params*

---

### <a name="ext-bb-turnovers-ngprocessTurnoverSeries"></a>*processTurnoverSeries(series, data)*

Default hook for turnovers chart series object post processing

| Parameter | Type | Description |
| :-- | :-- | :-- |
| series | [BBSeries](model-bb-turnovers-ng.html#BBSeries) | chart series data |
| data | [Turnover](model-bb-turnovers-ng.html#Turnover) | original turnover object |

##### Returns

[TurnoversBBSeries](#TurnoversBBSeries) - *processed series*

---

### <a name="ext-bb-turnovers-ngprocessLoadError"></a>*processLoadError(The)*

Overwrite the default hook and don't return passed error

| Parameter | Type | Description |
| :-- | :-- | :-- |
| The | Error | error passed |

##### Returns

String - *The actual error*

## Type Definitions


### <a name="CSS"></a>*CSS*

Object that containes all CSS selectors needed to style canvas parts

**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| axisBase | String | Axis CSS selector prefix |
| axisX | String | X axis CSS selector |
| axisY | String | Y axis CSS selector |
| arrowOuter | String | Chart's tooltip arrow CSS selector (outer) |
| layoutBreak | String | Selector for getting breaking point between small and medium screen |
| arrowNear | String | CSS class for tooltip's arrow moved to the front |
| arrowFar | String | CSS class for tooltip's arrow moved to the back |
| legend | String | CSS class for legend wrapper |

### <a name="Period"></a>*Period*

Object used to create list of period options

**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| interval | String | Interval name |
| duration | Number | Number of intervals (for creation period of multiple days, weeks, months...) |
| label | String | Key used to generate localized title for the option |
| default | Boolean (optional) | Optional flag to mark default period. If there is no default, first period will be shown |

### <a name="TurnoversBBSeries"></a>*TurnoversBBSeries*

Turnovers specific BBSeries object

**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| labels | Array of String | Array of x axis labels |
| datasets | Array of [TurnoversDataset](#TurnoversDataset) | Array of all y axis value datasets |
| original | [Turnover](model-bb-turnovers-ng.html#Turnover) | Original turnover object |
| updated | Boolean | Flag that signals that series are processed by hook |

### <a name="TurnoversDataset"></a>*TurnoversDataset*

Turnovers specific dataset object for y axis

*Extends*: [Dataset](model-bb-turnovers-ng.html#Dataset)

**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| backgroundColor | String | Background color of bars that represent this dataset |
| hoverBackgroundColor | String | Hover color of bars that represent this dataset |

### <a name="ChartjsSettings"></a>*ChartjsSettings*

Settings object with options available for bar chart.
More info [http://www.chartjs.org/docs/latest/charts/bar.html](http://www.chartjs.org/docs/latest/charts/bar.html)

**Type:** *Object*


---
