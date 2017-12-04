# widget-bb-income-spending-analysis-category-ng


Version: **3.1.5**

Income/Spending analysis by category widget

## Imports

* lib-bb-currency-ng
* lib-bb-event-bus-ng
* lib-bb-extension-helpers-ng
* lib-bb-intent-ng
* lib-bb-model-errors
* lib-bb-widget-extension-ng
* lib-bb-widget-ng
* model-bb-income-spending-analysis-category-ng
* model-bb-turnovers-ng
* vendor-bb-angular

---

## Example

```javascript
<div ng-controller="IncomeSpendingAnalysisCategoryController as $ctrl">
  <ui-bb-chartjs-chart-donut-ng
    data-series="$ctrl.series"
  ></ui-bb-chartjs-chart-donut-ng>
</div>
```

## Table of Contents
- **widget-bb-income-spending-analysis-category-ng**<br/>    <a href="#widget-bb-income-spending-analysis-category-ngANALYSIS_INDICATOR_PREF">ANALYSIS_INDICATOR_PREF</a><br/>    <a href="#widget-bb-income-spending-analysis-category-ngSPENDING_ANALYSIS_INDICATOR">SPENDING_ANALYSIS_INDICATOR</a><br/>    <a href="#widget-bb-income-spending-analysis-category-ngMS_IN_MIN">MS_IN_MIN</a><br/>    <a href="#widget-bb-income-spending-analysis-category-ngDEFAULT_PERIOD_START">DEFAULT_PERIOD_START</a><br/>    <a href="#widget-bb-income-spending-analysis-category-ngDEFAULT_PERIOD_END">DEFAULT_PERIOD_END</a><br/>    <a href="#widget-bb-income-spending-analysis-category-ngACCOUNT_CHANGE_DEBOUNCE">ACCOUNT_CHANGE_DEBOUNCE</a><br/>    <a href="#widget-bb-income-spending-analysis-category-ngisSpendingAnalysis">isSpendingAnalysis()</a><br/>    <a href="#widget-bb-income-spending-analysis-category-ngsetSelectedAnalysisItem">setSelectedAnalysisItem(item)</a><br/>    <a href="#widget-bb-income-spending-analysis-category-ngupdateAnalysisCategories">updateAnalysisCategories()</a><br/>    <a href="#widget-bb-income-spending-analysis-category-ngonPeriodStartDateChanged">onPeriodStartDateChanged(startDate)</a><br/>    <a href="#widget-bb-income-spending-analysis-category-ngonPeriodEndDateChanged">onPeriodEndDateChanged(endDate)</a><br/>    <a href="#widget-bb-income-spending-analysis-category-ngonProductSelected">onProductSelected()</a><br/>    <a href="#widget-bb-income-spending-analysis-category-ngonProductsSelected">onProductsSelected()</a><br/>    <a href="#widget-bb-income-spending-analysis-category-ng$onInit">$onInit()</a><br/>    <a href="#widget-bb-income-spending-analysis-category-ngselectedProducts">selectedProducts</a><br/>    <a href="#widget-bb-income-spending-analysis-category-ngproducts">products</a><br/>    <a href="#widget-bb-income-spending-analysis-category-ngitems">items</a><br/>    <a href="#widget-bb-income-spending-analysis-category-ngturnoversItems">turnoversItems</a><br/>    <a href="#widget-bb-income-spending-analysis-category-ngturnoversSeries">turnoversSeries</a><br/>    <a href="#widget-bb-income-spending-analysis-category-ngperiodStartDate">periodStartDate</a><br/>    <a href="#widget-bb-income-spending-analysis-category-ngperiodEndDate">periodEndDate</a><br/>    <a href="#widget-bb-income-spending-analysis-category-ngselectedAnalysisItem">selectedAnalysisItem</a><br/>    <a href="#widget-bb-income-spending-analysis-category-ngisLoading">isLoading</a><br/>
- **default-hooks**<br/>    <a href="#default-hooks_processAnalysisCategoryItems">#processAnalysisCategoryItems(items)</a><br/>    <a href="#default-hooks_processAnalysisCategorySeries">#processAnalysisCategorySeries(series, data)</a><br/>    <a href="#default-hooks_onAnalysisDataUpdate">#onAnalysisDataUpdate(params)</a><br/>    <a href="#default-hooks_onTurnoversUpdate">#onTurnoversUpdate(params)</a><br/>    <a href="#default-hooks_processTurnoverResponse">#processTurnoverResponse(data)</a><br/>    <a href="#default-hooks_processTurnoverSeries">#processTurnoverSeries(series, data)</a><br/>    <a href="#default-hooks_processSelectedProducts">#processSelectedProducts(product)</a><br/>    <a href="#default-hooks_processProductsList">#processProductsList(products)</a><br/>    <a href="#default-hooks_defaultPeriodStart">#defaultPeriodStart()</a><br/>    <a href="#default-hooks_defaultPeriodEnd">#defaultPeriodEnd()</a><br/>    <a href="#default-hooks_accountSelectionDebounce">#accountSelectionDebounce()</a><br/>    <a href="#default-hooks_onSelectedItemChanged">#onSelectedItemChanged(item)</a><br/>    <a href="#default-hooks_processLoadError">#processLoadError(error)</a><br/>
- **Events**<br/>    <a href="#bb.event.product.selected">bb.event.product.selected</a><br/>    <a href="#bb.event.products.selected">bb.event.products.selected</a><br/>    <a href="#widget-bb-income-spending-analysis-category-ng.load.failed">widget-bb-income-spending-analysis-category-ng.load.failed</a><br/>    <a href="#bb.event.analysis.category.period.start.date.changed">bb.event.analysis.category.period.start.date.changed</a><br/>    <a href="#bb.event.analysis.category.period.end.date.changed">bb.event.analysis.category.period.end.date.changed</a><br/>

---
### <a name="widget-bb-income-spending-analysis-category-ngANALYSIS_INDICATOR_PREF"></a>*ANALYSIS_INDICATOR_PREF*

Name of analysis indicator preference in the model

**Type:** *String*


---
### <a name="widget-bb-income-spending-analysis-category-ngSPENDING_ANALYSIS_INDICATOR"></a>*SPENDING_ANALYSIS_INDICATOR*

Analysis indicator value for spending analysis

**Type:** *String*


---
### <a name="widget-bb-income-spending-analysis-category-ngMS_IN_MIN"></a>*MS_IN_MIN*

Amount of milliseconds in a minute

**Type:** *Number*


---
### <a name="widget-bb-income-spending-analysis-category-ngDEFAULT_PERIOD_START"></a>*DEFAULT_PERIOD_START*

First day in the current month

**Type:** *Number*


---
### <a name="widget-bb-income-spending-analysis-category-ngDEFAULT_PERIOD_END"></a>*DEFAULT_PERIOD_END*

Current day

**Type:** *Number*


---
### <a name="widget-bb-income-spending-analysis-category-ngACCOUNT_CHANGE_DEBOUNCE"></a>*ACCOUNT_CHANGE_DEBOUNCE*

Delay for account selection change callback execution

**Type:** *Number*


---

## Intents

An object with all the intents names

---

### <a name="widget-bb-income-spending-analysis-category-ngisSpendingAnalysis"></a>*isSpendingAnalysis()*

Is current analysis spending analysis

##### Returns

Boolean - **

---

### <a name="widget-bb-income-spending-analysis-category-ngsetSelectedAnalysisItem"></a>*setSelectedAnalysisItem(item)*

Setter for the selected analysis category.
It creates an intent 'view.account.category.transactions'
that can be handled by transaction widget

| Parameter | Type | Description |
| :-- | :-- | :-- |
| item | [any](#any) | selected item |

##### Returns

[void](#void) - **

---

### <a name="widget-bb-income-spending-analysis-category-ngupdateAnalysisCategories"></a>*updateAnalysisCategories()*

Updates analysis items list based on selected product


##### Returns

Promise of [void](#void) - **

---

### <a name="widget-bb-income-spending-analysis-category-ngonPeriodStartDateChanged"></a>*onPeriodStartDateChanged(startDate)*

Handler to be called on period start date change

| Parameter | Type | Description |
| :-- | :-- | :-- |
| startDate | String | Date as string in format yyyy-mm-dd |

##### Returns

[void](#void) - **

---

### <a name="widget-bb-income-spending-analysis-category-ngonPeriodEndDateChanged"></a>*onPeriodEndDateChanged(endDate)*

Handler to be called on period end date change

| Parameter | Type | Description |
| :-- | :-- | :-- |
| endDate | String | Date as string in format yyyy-mm-dd |

##### Returns

[void](#void) - **

---

### <a name="widget-bb-income-spending-analysis-category-ngonProductSelected"></a>*onProductSelected()*

Handler to be used on product selection, is using
selected product value from [Hooks.processSelectedProducts](#Hooks.processSelectedProducts) hook

##### Returns

[void](#void) - **

---

### <a name="widget-bb-income-spending-analysis-category-ngonProductsSelected"></a>*onProductsSelected()*

Handler to be used on products selection, is using
selected products value from [Hooks.processSelectedProducts](#Hooks.processSelectedProducts) hook

##### Returns

[void](#void) - **

---

### <a name="widget-bb-income-spending-analysis-category-ng$onInit"></a>*$onInit()*

AngularJS Lifecycle hook used to initialize the controller

##### Returns

Promise of [void](#void) - **

---
### <a name="widget-bb-income-spending-analysis-category-ngselectedProducts"></a>*selectedProducts*

The product selection for analysis

**Type:** *Array of [Product](model-bb-product-summary-ng.html#Product)*


---
### <a name="widget-bb-income-spending-analysis-category-ngproducts"></a>*products*

List of products to be used by account selector for the analysis.
Is recieved from [Hooks.processProductsList](#Hooks.processProductsList)

**Type:** *Array of [Product](model-bb-product-summary-ng.html#Product)*


---
### <a name="widget-bb-income-spending-analysis-category-ngitems"></a>*items*

The value returned from [Hooks.processAnalysisCategoryItems](#Hooks.processAnalysisCategoryItems) hook.
null if the items aren't loaded.

**Type:** *[AnalysisCategoryData](model-bb-income-spending-analysis-category-ng.html#AnalysisCategoryData)*


---
### <a name="widget-bb-income-spending-analysis-category-ngturnoversItems"></a>*turnoversItems*

The value returned from [Hooks.processTurnoverResponse](#Hooks.processTurnoverResponse) hook.
null if the data isn't loaded.

**Type:** *[Turnover](model-bb-turnovers-ng.html#Turnover)*


---

## series

The value returned from [Hooks.processAnalysisCategorySeries](#Hooks.processAnalysisCategorySeries) hook.
Formatted for use within chart UI component.
null if the data isn't loaded

---
### <a name="widget-bb-income-spending-analysis-category-ngturnoversSeries"></a>*turnoversSeries*

The value returned from [Hooks.processTurnoverSeries](#Hooks.processTurnoverSeries) hook.
Formatted for use within chart UI component.
null if the data isn't loaded

**Type:** *[BBSeries](model-bb-turnovers-ng.html#BBSeries)*


---
### <a name="widget-bb-income-spending-analysis-category-ngperiodStartDate"></a>*periodStartDate*

Date of the analysis period start

**Type:** *String*


---
### <a name="widget-bb-income-spending-analysis-category-ngperiodEndDate"></a>*periodEndDate*

Date of the analysis period end

**Type:** *String*


---
### <a name="widget-bb-income-spending-analysis-category-ngselectedAnalysisItem"></a>*selectedAnalysisItem*

selected analysis item

**Type:** *[any](#any)*


---
### <a name="widget-bb-income-spending-analysis-category-ngisLoading"></a>*isLoading*

Loading status

**Type:** *Boolean*


---

---

## default-hooks

Default hooks for widget-bb-income-spending-analysis-category-ng

### <a name="default-hooks_processAnalysisCategoryItems"></a>*#processAnalysisCategoryItems(items)*

Default hook for income/spending analysis by category collection post processing

| Parameter | Type | Description |
| :-- | :-- | :-- |
| items | [AnalysisCategoryData](model-bb-income-spending-analysis-category-ng.html#AnalysisCategoryData) | items to process |

##### Returns

[AnalysisCategoryData](model-bb-income-spending-analysis-category-ng.html#AnalysisCategoryData) - *processed items*

### <a name="default-hooks_processAnalysisCategorySeries"></a>*#processAnalysisCategorySeries(series, data)*

Default hook for donut chart series object post processing

| Parameter | Type | Description |
| :-- | :-- | :-- |
| series | [BBSeries](model-bb-income-spending-analysis-category-ng.html#BBSeries) | chart series data |
| data | [AnalysisCategoryData](model-bb-income-spending-analysis-category-ng.html#AnalysisCategoryData) | original analysis object |

##### Returns

Object - *processed series*

### <a name="default-hooks_onAnalysisDataUpdate"></a>*#onAnalysisDataUpdate(params)*

Process parameters before they are sent to the model's load method

| Parameter | Type | Description |
| :-- | :-- | :-- |
| params | Object | parameters to process |

##### Returns

Object - *processed params*

### <a name="default-hooks_onTurnoversUpdate"></a>*#onTurnoversUpdate(params)*

Process parameters before they are sent to the model's load method

| Parameter | Type | Description |
| :-- | :-- | :-- |
| params | Object | to process |

##### Returns

Object - *processed params*

### <a name="default-hooks_processTurnoverResponse"></a>*#processTurnoverResponse(data)*

Default hook for turnovers response object post processing

| Parameter | Type | Description |
| :-- | :-- | :-- |
| data | [Turnover](model-bb-turnovers-ng.html#Turnover) | turnover object to process |

##### Returns

[Turnover](model-bb-turnovers-ng.html#Turnover) - *turnover response object*

### <a name="default-hooks_processTurnoverSeries"></a>*#processTurnoverSeries(series, data)*

Default hook for turnovers chart series object post processing

| Parameter | Type | Description |
| :-- | :-- | :-- |
| series | [BBSeries](model-bb-turnovers-ng.html#BBSeries) | chart series data |
| data | [Turnover](model-bb-turnovers-ng.html#Turnover) | original turnover object |

##### Returns

Object - *processed series*

### <a name="default-hooks_processSelectedProducts"></a>*#processSelectedProducts(product)*

Default hook to process products when selection is changed

| Parameter | Type | Description |
| :-- | :-- | :-- |
| product | Array of [Product](model-bb-product-summary-ng.html#Product) | which is selected |

##### Returns

Array of [Product](model-bb-product-summary-ng.html#Product) - *product after processing*

### <a name="default-hooks_processProductsList"></a>*#processProductsList(products)*

Process passed products list before passing it to the view.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| products | Array of [Product](model-bb-product-summary-ng.html#Product) | products to process |

##### Returns

Array of [Product](model-bb-product-summary-ng.html#Product) - *processed products*

### <a name="default-hooks_defaultPeriodStart"></a>*#defaultPeriodStart()*

Sets period start property on init

##### Returns

String - *Start period string in format yyyy-mm-dd*

### <a name="default-hooks_defaultPeriodEnd"></a>*#defaultPeriodEnd()*

Sets period end property on init

##### Returns

String - *End period string in format yyyy-mm-dd*

### <a name="default-hooks_accountSelectionDebounce"></a>*#accountSelectionDebounce()*

Used when multiple account selection is active. Defines account selection change
silence interval after which widget should send a new request and refresh

##### Returns

Number - *Time in ms*

### <a name="default-hooks_onSelectedItemChanged"></a>*#onSelectedItemChanged(item)*

Sets a selected analysis item

| Parameter | Type | Description |
| :-- | :-- | :-- |
| item | [any](#any) | selected analysis item |

##### Returns

[any](#any) - *selected analysis item*

### <a name="default-hooks_processLoadError"></a>*#processLoadError(error)*

Sets the error for missing parameters in the income/spending analysis request

| Parameter | Type | Description |
| :-- | :-- | :-- |
| error | Error | error passed |

##### Returns

Error - *processed error*

---

## helpers

Controller helpers

| Property | Type | Description |
| :-- | :-- | :-- |
| debounce | Function | Executes a callback after some time |

---

## Events

### <a name="bb.event.product.selected"></a>*bb.event.product.selected*

Triggered when product is selected.

### <a name="bb.event.products.selected"></a>*bb.event.products.selected*

Triggered when products selection has changed

### <a name="widget-bb-income-spending-analysis-category-ng.load.failed"></a>*widget-bb-income-spending-analysis-category-ng.load.failed*

Triggered when spending widget fails to load.

### <a name="bb.event.analysis.category.period.start.date.changed"></a>*bb.event.analysis.category.period.start.date.changed*

Triggered when period start date is changed.

### <a name="bb.event.analysis.category.period.end.date.changed"></a>*bb.event.analysis.category.period.end.date.changed*

Triggered when period end date is changed.


---

## Templates

* *template.ng.html*

---
