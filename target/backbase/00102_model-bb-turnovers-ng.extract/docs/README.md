# model-bb-turnovers-ng


Version: **1.1.8**

Model for widget-bb-turnovers-ng

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
import modelTurnoversModuleKey, { modelTurnoversKey } from 'model-bb-turnovers-ng';

angular
  .module('ExampleModule', [
    modelTurnoversModuleKey,
  ])
  .factory('someFactory', [
    modelTurnoversKey,
    // into
    function someFactory(turnoversModel) {
      // ...
    },
  ]);
```

## Table of Contents
- **model-bb-turnovers-ng**<br/>    <a href="#model-bb-turnovers-ngE_PARAMS">E_PARAMS</a><br/>
- **turnoversModel**<br/>    <a href="#turnoversModel_validateTurnoversParameters">#validateTurnoversParameters()</a><br/>    <a href="#turnoversModel_getProducts">#getProducts()</a><br/>    <a href="#turnoversModel_getProductsArray">#getProductsArray(keepEmptyProducts)</a><br/>    <a href="#turnoversModel_getSelectedProduct">#getSelectedProduct()</a><br/>    <a href="#turnoversModel_getSelectedProducts">#getSelectedProducts()</a><br/>    <a href="#turnoversModel_setSelectedProduct">#setSelectedProduct(selectedProduct)</a><br/>    <a href="#turnoversModel_setSelectedProducts">#setSelectedProducts(products)</a><br/>    <a href="#turnoversModel_loadTurnovers">#loadTurnovers(params)</a><br/>    <a href="#turnoversModel_transformToSeries">#transformToSeries(data, dataKey)</a><br/>    <a href="#turnoversModel_isFirstProductDefault">#isFirstProductDefault()</a><br/>    <a href="#turnoversModel_isProductsListFromStorage">#isProductsListFromStorage()</a><br/>    <a href="#turnoversModel_isMultipleAccount">#isMultipleAccount()</a><br/>
- **Type Definitions**<br/>    <a href="#Amount">Amount</a><br/>    <a href="#Turnover">Turnover</a><br/>    <a href="#TurnoverItem">TurnoverItem</a><br/>    <a href="#BBSeries">BBSeries</a><br/>    <a href="#Dataset">Dataset</a><br/>

---

## bbStorageKeys

bbStorage keys enum

---

## preferencesKeys

Preferences keys enum

---
### <a name="model-bb-turnovers-ngE_PARAMS"></a>*E_PARAMS*

Additional model error in case required parameters are missing

**Type:** *String*


---

## turnoversModel


### <a name="turnoversModel_validateTurnoversParameters"></a>*#validateTurnoversParameters()*

Checks if all required parameters are set

##### Returns

Promise of Object - *A Promise resolving to object with parameters.*

### <a name="turnoversModel_getProducts"></a>*#getProducts()*

Get products either from storage or from the service

##### Returns

Promise of [ProductKinds](model-bb-product-summary-ng.html#ProductKinds), [ModelError](lib-bb-model-errors.html#ModelError) - *A Promise resolving to object with ProductsKinds and TotalBalance.*

### <a name="turnoversModel_getProductsArray"></a>*#getProductsArray(keepEmptyProducts)*

Get products.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| keepEmptyProducts | Boolean | defines if empty product kinds should be passed. |

##### Returns

Promise of Array of [Product](model-bb-product-summary-ng.html#Product), [ModelError](lib-bb-model-errors.html#ModelError) - *A Promise resolving to array with Products.*

### <a name="turnoversModel_getSelectedProduct"></a>*#getSelectedProduct()*

Get current selected product.

##### Returns

Promise of [Product](model-bb-product-summary-ng.html#Product), [ModelError](lib-bb-model-errors.html#ModelError) - *A Promise resolving to a selected product object.*

### <a name="turnoversModel_getSelectedProducts"></a>*#getSelectedProducts()*

Get currently selected products array

##### Returns

Promise of Array of [Product](model-bb-product-summary-ng.html#Product), [ModelError](lib-bb-model-errors.html#ModelError) - *A Promise resolving to Product array*

### <a name="turnoversModel_setSelectedProduct"></a>*#setSelectedProduct(selectedProduct)*

Set selected product to the sorage

| Parameter | Type | Description |
| :-- | :-- | :-- |
| selectedProduct | [Product](model-bb-product-summary-ng.html#Product) | The selected product value |

### <a name="turnoversModel_setSelectedProducts"></a>*#setSelectedProducts(products)*

Set currently selected products array

| Parameter | Type | Description |
| :-- | :-- | :-- |
| products | Array of [Product](model-bb-product-summary-ng.html#Product) | Array of products to select |

### <a name="turnoversModel_loadTurnovers"></a>*#loadTurnovers(params)*

Load product turnovers

| Parameter | Type | Description |
| :-- | :-- | :-- |
| params | Object | Request parameters |

##### Returns

Promise of [Turnover](#Turnover), [ModelError](lib-bb-model-errors.html#ModelError) - *A Promise with turnover or error data*

### <a name="turnoversModel_transformToSeries"></a>*#transformToSeries(data, dataKey)*

Transforms data into format suitable for chart UI components

| Parameter | Type | Description |
| :-- | :-- | :-- |
| data | [Turnover](#Turnover) | Turnover data |
| dataKey | String (optional) | Optional, tells if data should be mapped to specific key |

##### Returns

[BBSeries](#BBSeries) - *Data in format suitable for chart UI components*

### <a name="turnoversModel_isFirstProductDefault"></a>*#isFirstProductDefault()*

Defines if the first product is selected by default

##### Returns

Boolean - *GET_FIRST_AS_DEFAULT*

### <a name="turnoversModel_isProductsListFromStorage"></a>*#isProductsListFromStorage()*

Defines if products are recieved from bb-storage or from API always

##### Returns

Boolean - *FROM_STORAGE*

### <a name="turnoversModel_isMultipleAccount"></a>*#isMultipleAccount()*

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

### <a name="Turnover"></a>*Turnover*

Turnover response object

**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| arrangementId | String | Id of the arrangement this turnover belongs to |
| intervalDuration | String | Duration of intervals returned |
| turnovers | Array of [TurnoverItem](#TurnoverItem) | Array of turnover items |

### <a name="TurnoverItem"></a>*TurnoverItem*

Turnover response item

**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| intervalStartDate | String | Date in ISO format (2016-06-01T16:41:41.090Z) |
| debitAmount | [Amount](#Amount) | Debit amount object |
| creditAmount | [Amount](#Amount) | Credit amount object |
| balance | [Amount](#Amount) | Debit and credit difference object |

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
