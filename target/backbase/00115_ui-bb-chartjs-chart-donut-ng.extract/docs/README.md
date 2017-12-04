# ui-bb-chartjs-chart-donut-ng


Version: **1.0.127**


## Imports

* vendor-bb-angular
* vendor-bb-chartjs

---

## Example

```javascript
// In an extension:
// file: scripts/index.js
import uiBbChartjsChartDonut from 'ui-bb-chartjs-chart-donut-ng';

export const dependencyKeys = [
  uiBbChartjsChartDonut,
];

// file: templates/template.ng.html
<ui-bb-chartjs-chart-donut
  data-series="$ctrl.series"
  data-title="$ctrl.title"
  data-cutout-percentage="30"
  data-legend="ext.helpers.customizeLegend"
  data-options="ext.helpers.chartOptions"
  data-click-getter="ext.helpers.getClickHandler($ctrl)">
    <!-- Optional content that can be inserted over the canvas -->
    <div class="absolute-center">Total amount: 100</div>
<ui-bb-chartjs-chart-donut
```

## Table of Contents
- **Exports**<br/>    <a href="#default">default</a><br/>
- **ui-bb-chartjs-chart-donut-ng**<br/>    <a href="#ui-bb-chartjs-chart-donut-nguiBbChartjsChartDonutController">uiBbChartjsChartDonutController()</a><br/>    <a href="#ui-bb-chartjs-chart-donut-ng$onInit">$onInit()</a><br/>    <a href="#ui-bb-chartjs-chart-donut-ng$onChanges">$onChanges()</a><br/>
- **Type Definitions**<br/>    <a href="#ChartjsDonutSeries">ChartjsDonutSeries</a><br/>    <a href="#ChartjsDonutDataset">ChartjsDonutDataset</a><br/>    <a href="#ChartjsLegend">ChartjsLegend</a><br/>    <a href="#ChartjsPlugin">ChartjsPlugin</a><br/>    <a href="#ChartjsSettings">ChartjsSettings</a><br/>    <a href="#ChartjsEvents">ChartjsEvents</a><br/>

## Exports

### <a name="default"></a>*default*

The angular module name

**Type:** *String*


---

## uiBbChartjsChartDonutComponent

Chart.js Donut chart component object

| Property | Type | Description |
| :-- | :-- | :-- |
| title | String | Title of the chart |
| series | [ChartjsDonutSeries](#ChartjsDonutSeries) | Object used to draw Chartjs donut chart |
| legend | [ChartjsLegend](#ChartjsLegend) | Object used to define chart's legend behavior and look |
| cutoutPercentage | Number | The percentage of the chart that is cut out of the middle. Example: 50 - for doughnut, 0 - for pie |
| tooltip | Function | Method for drawing custom tooltip. If this property is not used, default tooltip will be rendered. Otherwise, this method will be provided with: - tooltip: Chart.js tooltip object - element: tooltip DOM element - data: series used to draw chart - chart: Chart.js chart object Custom method needs at least to fill in internal HTML of custom tooltip by injecting the content into element provided - Example: customTooltip: (tooltip, element, data, chart) =&gt; Object.assign(element, { innerHTML: '&lt;div&gt;Custom content&lt;/div&gt;' }), |
| plugins | Array of [ChartjsPlugin](#ChartjsPlugin) |  |
| options | [ChartjsSettings](#ChartjsSettings) | Object that overrides any property of Chart.js default settings object |
| clickGetter | [ChartjsEvents](#ChartjsEvents) | Function, which returns click handler for the Donut chart. |

---

### <a name="ui-bb-chartjs-chart-donut-nguiBbChartjsChartDonutController"></a>*uiBbChartjsChartDonutController()*

Chart.js donut chart controller

---

### <a name="ui-bb-chartjs-chart-donut-ng$onInit"></a>*$onInit()*

AngularJS Lifecycle hook used to initialize the controller


##### Returns

[void](#void) - **

---

### <a name="ui-bb-chartjs-chart-donut-ng$onChanges"></a>*$onChanges()*

AngularJS Lifecycle hook used to update chart


##### Returns

[void](#void) - **

## Type Definitions


### <a name="ChartjsDonutSeries"></a>*ChartjsDonutSeries*

Series object used to draw Chartjs donut chart. Compatible with BBSeries generated
by model modules.

**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| labels | Array of String | Array of chart labels |
| datasets | Array of [ChartjsDonutDataset](#ChartjsDonutDataset) | Array of datasets |

### <a name="ChartjsDonutDataset"></a>*ChartjsDonutDataset*

Dataset object for donut chart as defined by Chart.js library.
Compatible with BBDataset object used in BBSeries.
It is required for it to contain data as array of values.
More info about additional (optional) properties can be found at
[http://www.chartjs.org/docs/latest/charts/doughnut.html#dataset-properties](http://www.chartjs.org/docs/latest/charts/doughnut.html#dataset-properties)

**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| data | Array of Number | Array of data points to be drawn for each label |

### <a name="ChartjsLegend"></a>*ChartjsLegend*

Legend object as defined in Chart.js library.
More info
[http://www.chartjs.org/docs/latest/configuration/legend.html#configuration-options](http://www.chartjs.org/docs/latest/configuration/legend.html#configuration-options)

**Type:** *Object*


### <a name="ChartjsPlugin"></a>*ChartjsPlugin*

Plugin object as defined in Chart.js library. It should define at least one hook from
[http://www.chartjs.org/docs/latest/developers/plugins.html#plugin-core-api](http://www.chartjs.org/docs/latest/developers/plugins.html#plugin-core-api)

**Type:** *Object*


### <a name="ChartjsSettings"></a>*ChartjsSettings*

Settings object with options available for Donut chart.
More info [http://www.chartjs.org/docs/latest/charts/doughnut.html](http://www.chartjs.org/docs/latest/charts/doughnut.html)

**Type:** *Object*


### <a name="ChartjsEvents"></a>*ChartjsEvents*

Function, which returns click handler for the Donut chart.
More info [http://www.chartjs.org/docs/latest/general/interactions/events.html](http://www.chartjs.org/docs/latest/general/interactions/events.html)

**Type:** *Object*


---
