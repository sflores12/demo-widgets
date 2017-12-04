# widget-bb-turnovers-ng


Version: **2.0.8**

Turnovers

## Imports

* lib-bb-currency-ng
* lib-bb-event-bus-ng
* lib-bb-extension-helpers-ng
* lib-bb-intent-ng
* lib-bb-model-errors
* lib-bb-widget-extension-ng
* lib-bb-widget-ng
* model-bb-turnovers-ng
* vendor-bb-angular

---

## Table of Contents
- **widget-bb-turnovers-ng**<br/>    <a href="#widget-bb-turnovers-ngINTERVAL">INTERVAL</a><br/>    <a href="#widget-bb-turnovers-ngDEFAULT_INTERVAL">DEFAULT_INTERVAL</a><br/>    <a href="#widget-bb-turnovers-ngDEFAULT_DURATION">DEFAULT_DURATION</a><br/>    <a href="#widget-bb-turnovers-ngDEFAULT_START_DAY">DEFAULT_START_DAY</a><br/>    <a href="#widget-bb-turnovers-ngACCOUNT_CHANGE_DEBOUNCE">ACCOUNT_CHANGE_DEBOUNCE</a><br/>    <a href="#widget-bb-turnovers-ngonPeriodStartDateChanged">onPeriodStartDateChanged()</a><br/>    <a href="#widget-bb-turnovers-ngonPeriodEndDateChanged">onPeriodEndDateChanged()</a><br/>    <a href="#widget-bb-turnovers-ngonProductSelected">onProductSelected()</a><br/>    <a href="#widget-bb-turnovers-ngonProductsSelected">onProductsSelected()</a><br/>    <a href="#widget-bb-turnovers-ng$onInit">$onInit()</a><br/>    <a href="#widget-bb-turnovers-ngdata">data</a><br/>    <a href="#widget-bb-turnovers-ngseries">series</a><br/>    <a href="#widget-bb-turnovers-ngselectedProducts">selectedProducts</a><br/>    <a href="#widget-bb-turnovers-ngproducts">products</a><br/>    <a href="#widget-bb-turnovers-ngperiodStartDate">periodStartDate</a><br/>    <a href="#widget-bb-turnovers-ngperiodEndDate">periodEndDate</a><br/>    <a href="#widget-bb-turnovers-ngintervalDuration">intervalDuration</a><br/>    <a href="#widget-bb-turnovers-ngintervalStartDay">intervalStartDay</a><br/>    <a href="#widget-bb-turnovers-ngisLoading">isLoading</a><br/>    <a href="#widget-bb-turnovers-nginterval">interval</a><br/>    <a href="#widget-bb-turnovers-ngerror">error</a><br/>
- **Events**<br/>    <a href="#bb.event.product.selected">bb.event.product.selected</a><br/>    <a href="#bb.event.products.selected">bb.event.products.selected</a><br/>    <a href="#bb.event.turnovers.period.start.date.changed">bb.event.turnovers.period.start.date.changed</a><br/>    <a href="#bb.event.turnovers.period.end.date.changed">bb.event.turnovers.period.end.date.changed</a><br/>    <a href="#widget-bb-turnovers-ng.load.failed">widget-bb-turnovers-ng.load.failed</a><br/>
- **Type Definitions**<br/>    <a href="#Interval">Interval</a><br/>

---
### <a name="widget-bb-turnovers-ngINTERVAL"></a>*INTERVAL*

Available intervals

**Type:** *[Interval](#Interval)*


---
### <a name="widget-bb-turnovers-ngDEFAULT_INTERVAL"></a>*DEFAULT_INTERVAL*

Default load interval

**Type:** *String*


---
### <a name="widget-bb-turnovers-ngDEFAULT_DURATION"></a>*DEFAULT_DURATION*

Default load duration

**Type:** *Number*


---
### <a name="widget-bb-turnovers-ngDEFAULT_START_DAY"></a>*DEFAULT_START_DAY*

Default start day for monthly interval

**Type:** *Number*


---
### <a name="widget-bb-turnovers-ngACCOUNT_CHANGE_DEBOUNCE"></a>*ACCOUNT_CHANGE_DEBOUNCE*

Delay for account selection change callback execution

**Type:** *Number*


---

### <a name="widget-bb-turnovers-ngonPeriodStartDateChanged"></a>*onPeriodStartDateChanged()*

Handler to be called on period start date change

##### Returns

[void](#void) - **

---

### <a name="widget-bb-turnovers-ngonPeriodEndDateChanged"></a>*onPeriodEndDateChanged()*

Handler to be called on period end date change

##### Returns

[void](#void) - **

---

### <a name="widget-bb-turnovers-ngonProductSelected"></a>*onProductSelected()*

Handler to be used on product selection, is using first item
returned from [Hooks.processSelectedProducts](#Hooks.processSelectedProducts) hook

##### Returns

[void](#void) - **

---

### <a name="widget-bb-turnovers-ngonProductsSelected"></a>*onProductsSelected()*

Handler to be used on products selection, is using
selected products value from [Hooks.processSelectedProducts](#Hooks.processSelectedProducts) hook

##### Returns

[void](#void) - **

---

### <a name="widget-bb-turnovers-ng$onInit"></a>*$onInit()*

AngularJS Lifecycle hook used to initialize the controller


##### Returns

Promise of [void](#void) - **

---
### <a name="widget-bb-turnovers-ngdata"></a>*data*

The value returned from [Hooks.processTurnoverResponse](#Hooks.processTurnoverResponse) hook.
null if the data isn't loaded.

**Type:** *[Turnover](model-bb-turnovers-ng.html#Turnover)*


---
### <a name="widget-bb-turnovers-ngseries"></a>*series*

The value returned from [Hooks.processTurnoverSeries](#Hooks.processTurnoverSeries) hook.
Formatted for use within chart UI component.
null if the data isn't loaded

**Type:** *[BBSeries](model-bb-turnovers-ng.html#BBSeries)*


---
### <a name="widget-bb-turnovers-ngselectedProducts"></a>*selectedProducts*

The product selection for turnovers evaluation

**Type:** *Array of [Product](model-bb-product-summary-ng.html#Product)*


---
### <a name="widget-bb-turnovers-ngproducts"></a>*products*

List of products to be used by account selector for turnovers evaluation.
Is recieved from [Hooks.processProductsList](#Hooks.processProductsList)

**Type:** *Array of [Product](model-bb-product-summary-ng.html#Product)*


---
### <a name="widget-bb-turnovers-ngperiodStartDate"></a>*periodStartDate*

Date of the turnovers evaluation period start

**Type:** *String*


---
### <a name="widget-bb-turnovers-ngperiodEndDate"></a>*periodEndDate*

Date of the turnovers evaluation period end

**Type:** *String*


---
### <a name="widget-bb-turnovers-ngintervalDuration"></a>*intervalDuration*

Length of each periodic interval

**Type:** *String*


---
### <a name="widget-bb-turnovers-ngintervalStartDay"></a>*intervalStartDay*

Day of a month to start turnover interval

**Type:** *Number*


---
### <a name="widget-bb-turnovers-ngisLoading"></a>*isLoading*

Loading status

**Type:** *Boolean*


---
### <a name="widget-bb-turnovers-nginterval"></a>*interval*

Object containing all available intervals as key:value pairs

**Type:** *[Interval](#Interval)*


---
### <a name="widget-bb-turnovers-ngerror"></a>*error*

The error encountered when attempting to fetch from the model

**Type:** *[ModelError](lib-bb-model-errors.html#ModelError)*


---

## Default Hooks

Default hooks for widget-bb-turnovers-ng

---

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

### <a name="bb.event.turnovers.period.start.date.changed"></a>*bb.event.turnovers.period.start.date.changed*

Triggered when period start date is changed.

### <a name="bb.event.turnovers.period.end.date.changed"></a>*bb.event.turnovers.period.end.date.changed*

Triggered when period end date is changed.

### <a name="widget-bb-turnovers-ng.load.failed"></a>*widget-bb-turnovers-ng.load.failed*

Triggered when turnovers widget fails to load.


---

## Type Definitions


### <a name="Interval"></a>*Interval*

Interval object

**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| DAY | String | Daily interval |
| WEEK | String | Weekly interval |
| MONTH | String | Monthly interval |
| YEAR | String | Yearly interval |

---

## Templates

* *template.ng.html*

---
