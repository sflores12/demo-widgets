# model-bb-income-spending-analysis-category-ng


Version: **1.1.7**

Model for widget-bb-income-spending-analysis-category-ng

## Imports

* data-bb-product-summary-http-ng
* data-bb-transactions-http-ng
* lib-bb-model-errors
* lib-bb-storage-ng
* lib-bb-widget-ng
* vendor-bb-angular

---

## Example

```javascript
import modelIncomeSpendingAnalysisCategoryModuleKey, {
 modelIncomeSpendingAnalysisCategoryKey
} from 'model-bb-income-spending-analysis-category-ng';

angular
  .module('ExampleModule', [
    modelAnalysisCategoryModuleKey,
  ])
  .factory('someFactory', [
    modelAnalysisCategoryKey,
    // into
    function someFactory(analysisCategoryModel) {
      // ...
    },
  ]);
```

## Table of Contents
- **model-bb-income-spending-analysis-category-ng**<br/>    <a href="#model-bb-income-spending-analysis-category-ngE_PARAMS">E_PARAMS</a><br/>
- **analysisCategoryModel**<br/>    <a href="#analysisCategoryModel_validateAnalysisParameters">#validateAnalysisParameters(params)</a><br/>    <a href="#analysisCategoryModel_loadAnalysisData">#loadAnalysisData(params)</a><br/>    <a href="#analysisCategoryModel_getProducts">#getProducts()</a><br/>    <a href="#analysisCategoryModel_getProductsArray">#getProductsArray(keepEmptyProducts)</a><br/>    <a href="#analysisCategoryModel_getSelectedProduct">#getSelectedProduct()</a><br/>    <a href="#analysisCategoryModel_getSelectedProducts">#getSelectedProducts()</a><br/>    <a href="#analysisCategoryModel_setSelectedProduct">#setSelectedProduct(selectedProduct)</a><br/>    <a href="#analysisCategoryModel_setSelectedProducts">#setSelectedProducts(products)</a><br/>    <a href="#analysisCategoryModel_transformToSeries">#transformToSeries(analysisCategoryData)</a><br/>    <a href="#analysisCategoryModel_isFirstProductDefault">#isFirstProductDefault()</a><br/>    <a href="#analysisCategoryModel_isMultipleAccount">#isMultipleAccount()</a><br/>
- **Type Definitions**<br/>    <a href="#Amount">Amount</a><br/>    <a href="#AnalysisCategoryData">AnalysisCategoryData</a><br/>    <a href="#AnalysisCategory">AnalysisCategory</a><br/>    <a href="#BBSeries">BBSeries</a><br/>    <a href="#Dataset">Dataset</a><br/>

---

## bbStorageKeys

bbStorage keys enum

---

## preferencesKeys

Preferences keys enum

---
### <a name="model-bb-income-spending-analysis-category-ngE_PARAMS"></a>*E_PARAMS*

Additional model error in case required parameters are missing

**Type:** *String*


---

## analysisCategoryModel


### <a name="analysisCategoryModel_validateAnalysisParameters"></a>*#validateAnalysisParameters(params)*

Checks if all required parameters are set

| Parameter | Type | Description |
| :-- | :-- | :-- |
| params | Object |  |

##### Returns

Promise of Object - *A Promise resolving to object with parameters.*

### <a name="analysisCategoryModel_loadAnalysisData"></a>*#loadAnalysisData(params)*

Load income/spending analysis data by category

| Parameter | Type | Description |
| :-- | :-- | :-- |
| params | Object | Request parameters |

##### Returns

Promise of [AnalysisCategoryData](#AnalysisCategoryData), [ModelError](lib-bb-model-errors.html#ModelError) - *A Promise with spending or error data*

### <a name="analysisCategoryModel_getProducts"></a>*#getProducts()*

Get products either from storage or from the service

##### Returns

Promise of [ProductKinds](model-bb-product-summary-ng.html#ProductKinds), [ModelError](lib-bb-model-errors.html#ModelError) - *A Promise resolving to object with ProductsKinds and TotalBalance.*

### <a name="analysisCategoryModel_getProductsArray"></a>*#getProductsArray(keepEmptyProducts)*

Get products.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| keepEmptyProducts | Boolean | defines if empty product kinds should be passed. |

##### Returns

Promise of Array of [Product](model-bb-product-summary-ng.html#Product), [ModelError](lib-bb-model-errors.html#ModelError) - *A Promise resolving to array with Products.*

### <a name="analysisCategoryModel_getSelectedProduct"></a>*#getSelectedProduct()*

Get current selected product.

##### Returns

Promise of [Product](model-bb-product-summary-ng.html#Product), [ModelError](lib-bb-model-errors.html#ModelError) - *A Promise resolving to a selected product object.*

### <a name="analysisCategoryModel_getSelectedProducts"></a>*#getSelectedProducts()*

Get currently selected products array

##### Returns

Promise of Array of [Product](model-bb-product-summary-ng.html#Product), [ModelError](lib-bb-model-errors.html#ModelError) - *A Promise resolving to Product array*

### <a name="analysisCategoryModel_setSelectedProduct"></a>*#setSelectedProduct(selectedProduct)*

Set selected product to the sorage

| Parameter | Type | Description |
| :-- | :-- | :-- |
| selectedProduct | [Product](model-bb-product-summary-ng.html#Product) | The selected product value |

### <a name="analysisCategoryModel_setSelectedProducts"></a>*#setSelectedProducts(products)*

Set currently selected products array

| Parameter | Type | Description |
| :-- | :-- | :-- |
| products | Array of [Product](model-bb-product-summary-ng.html#Product) | Array of products to select |

### <a name="analysisCategoryModel_transformToSeries"></a>*#transformToSeries(analysisCategoryData)*

Transforms data into format suitable for chart UI components

| Parameter | Type | Description |
| :-- | :-- | :-- |
| analysisCategoryData | [AnalysisCategoryData](#AnalysisCategoryData) | Income/Spending category data |

##### Returns

[BBSeries](#BBSeries) - *Data in format suitable for chart UI components*

### <a name="analysisCategoryModel_isFirstProductDefault"></a>*#isFirstProductDefault()*

Defines if the first product is selected by default

##### Returns

Boolean - *GET_FIRST_AS_DEFAULT*

### <a name="analysisCategoryModel_isMultipleAccount"></a>*#isMultipleAccount()*

Defines if the widget is combined with multiple account selector

##### Returns

Boolean - *IS_MULTIPLE_ACCOUNTS*

## Type Definitions


### <a name="Amount"></a>*Amount*

Amount object

**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| currencyCode | String | Currency code (ISO) |
| value | Number |  |

### <a name="AnalysisCategoryData"></a>*AnalysisCategoryData*

Income/Spending analysis category response object

**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| total | [Amount](#Amount) | Total amount for all categories retrieved for selected period |
| items | Array of [AnalysisCategory](#AnalysisCategory) | Array of income/spending items |

### <a name="AnalysisCategory"></a>*AnalysisCategory*

Income/Spending category item

**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| category | String | Transactions category |
| totalAmount | [Amount](#Amount) | Total amount of aggregated transactions by category |
| trend | Number | Percentage value of the trend |
| portion | Number | Percentage of the total amount for a given period |

### <a name="BBSeries"></a>*BBSeries*

BBSeries data object used to draw charts

**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| labels | Array of String | Array of x axis labels |
| datasets | Array of [Dataset](#Dataset) | Array of all y axis value datasets |

### <a name="Dataset"></a>*Dataset*

Dataset object for y axis data

**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| data | Array of Number | Array of data points to be drawn for each label |

---
