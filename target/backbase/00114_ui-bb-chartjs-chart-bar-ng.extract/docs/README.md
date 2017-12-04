# ui-bb-chartjs-chart-bar-ng


Version: **1.0.131**


## Imports

* vendor-bb-angular
* vendor-bb-chartjs

---

## Example

```javascript
// In an extension:
// file: scripts/index.js
import uiBbChartjsChartBar from 'ui-bb-chartjs-chart-bar-ng';

export const dependencyKeys = [
  uiBbChartjsChartBar,
];

// file: templates/template.ng.html
<ui-bb-chartjs-chart-bar class="col-xs-12"
  data-series="$ctrl.series"
  data-title="$ctrl.title"
  data-stacked="false"
  data-horizontal="false"
  data-grid-lines="false"
  data-bar-percentage="0.9"
  data-category-percentage="1.0"
  data-legend="ext.helpers.customizeLegend"
  data-tooltip="ext.helpers.customizeTooltip"
  data-plugins="ext.helpers.chartPlugins"
  data-options="ext.helpers.chartOptions"
  data-x-formatter="ext.helpers.formatX"
  data-y-formatter="ext.helpers.formatY"
/>
```

## Table of Contents
- **Exports**<br/>    <a href="#default">default</a><br/>
- **ui-bb-chartjs-chart-bar-ng**<br/>    <a href="#ui-bb-chartjs-chart-bar-nguiBbChartjsChartBarController">uiBbChartjsChartBarController()</a><br/>    <a href="#ui-bb-chartjs-chart-bar-ng$onInit">$onInit()</a><br/>    <a href="#ui-bb-chartjs-chart-bar-ng$onChanges">$onChanges()</a><br/>
- **Type Definitions**<br/>    <a href="#ChartjsBarSeries">ChartjsBarSeries</a><br/>    <a href="#ChartjsBarDataset">ChartjsBarDataset</a><br/>    <a href="#ChartjsLegend">ChartjsLegend</a><br/>    <a href="#ChartjsPlugin">ChartjsPlugin</a><br/>    <a href="#ChartjsSettings">ChartjsSettings</a><br/>

## Exports

### <a name="default"></a>*default*

The angular module name

**Type:** *String*


---

## uiBbChartjsChartBarComponent

Chart.js bar chart component object

| Property | Type | Description |
| :-- | :-- | :-- |
| title | String | Title of the chart |
| series | [ChartjsBarSeries](#ChartjsBarSeries) | Object used to draw Chartjs bar chart |
| barPercentage | Number | Part of tick width used for one bar in the category. Can be number between 0.0 and 1.0 |
| categoryPercentage | Number | Part of tick width used for one category. Can be number between 0.0 and 1.0 |
| tooltip | Function | Method for drawing custom tooltip. If this property is not used, default tooltip will be rendered. Otherwise, this method will be provided with: - tooltip: Chart.js tooltip object - element: tooltip DOM element - data: series used to draw chart - chart: Chart.js chart object Custom method needs at least to fill in internal HTML of custom tooltip by injecting the content into element provided - Example: customTooltip: (tooltip, element, data, chart) =&gt; Object.assign(element, { innerHTML: '&lt;div&gt;Custom content&lt;/div&gt;' }), |
| legend | [ChartjsLegend](#ChartjsLegend) | Object used to define chart's legend behavior and look |
| plugins | Array of [ChartjsPlugin](#ChartjsPlugin) | Array of plugins that will be registered upon chart rendering |
| horizontal | Boolean | Draw bars horizontally |
| stacked | Boolean | Draw bars stacked one on another |
| gridLines | Boolean | Draw gridlines inside chart area |
| xFormatter | Function | Callback that receives all x axes ticks and series data. It should return array of formatted ticks |
| yFormatter | Function | Callback that receives all y axes ticks and series data. It should return array of formatted ticks |
| options | [ChartjsSettings](#ChartjsSettings) | Object that overrides any property of Chart.js default settings object |

---

### <a name="ui-bb-chartjs-chart-bar-nguiBbChartjsChartBarController"></a>*uiBbChartjsChartBarController()*

Chart.js bar chart controller

---

### <a name="ui-bb-chartjs-chart-bar-ng$onInit"></a>*$onInit()*

AngularJS Lifecycle hook used to draw chart


##### Returns

[void](#void) - **

---

### <a name="ui-bb-chartjs-chart-bar-ng$onChanges"></a>*$onChanges()*

AngularJS Lifecycle hook used to update chart


##### Returns

[void](#void) - **

## Type Definitions


### <a name="ChartjsBarSeries"></a>*ChartjsBarSeries*

Series object used to draw Chartjs bar chart. Compatible with BBSeries generated
by model modules.

**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| labels | Array of String | Array of x axis labels |
| datasets | Array of [ChartjsBarDataset](#ChartjsBarDataset) | Array of datasets |

### <a name="ChartjsBarDataset"></a>*ChartjsBarDataset*

Dataset object for bar chart as defined by Chart.js library.
Compatible with BBDataset object used in BBSeries.
It is required for it to contain data as array of values.
More info about additional (optional) properties can be found at
[http://www.chartjs.org/docs/latest/charts/bar.html#dataset-properties](http://www.chartjs.org/docs/latest/charts/bar.html#dataset-properties)

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

Settings object with options available for bar chart.
More info [http://www.chartjs.org/docs/latest/charts/bar.html](http://www.chartjs.org/docs/latest/charts/bar.html)

**Type:** *Object*


---
