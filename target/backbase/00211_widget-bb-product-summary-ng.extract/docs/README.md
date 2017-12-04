# widget-bb-product-summary-ng


Version: **1.3.2**

Product summary.

## Imports

* lib-bb-event-bus-ng
* lib-bb-intent-ng
* lib-bb-model-errors
* lib-bb-widget-extension-ng
* lib-bb-widget-ng
* model-bb-product-summary-ng
* vendor-bb-angular

---

## Example

```javascript
<div ng-controller="ProductSummaryController as $ctrl">
   <ul>
      <li ng-repeat="product in $ctrl.products">{{product.id}}</li>
   </ul>
 </div>
```

## Table of Contents
- **Exports**<br/>    <a href="#default">default</a><br/>
- **widget-bb-product-summary-ng**<br/>    <a href="#widget-bb-product-summary-nguiError">uiError(messageMap, modelError)</a><br/>
- **ProductSummaryController**<br/>    <a href="#ProductSummaryController_selectProduct">#selectProduct(product)</a><br/>    <a href="#ProductSummaryController_selectProducts">#selectProducts(products)</a><br/>    <a href="#ProductSummaryController_updateProductSelected">#updateProductSelected()</a><br/>    <a href="#ProductSummaryController_updateProductsSelected">#updateProductsSelected()</a><br/>    <a href="#ProductSummaryController_loadProducts">#loadProducts()</a><br/>    <a href="#ProductSummaryController_bindEvents">#bindEvents()</a><br/>    <a href="#ProductSummaryController_productSelected">#productSelected</a><br/>    <a href="#ProductSummaryController_productsSelected">#productsSelected</a><br/>    <a href="#ProductSummaryController_extendedProduct">#extendedProduct</a><br/>    <a href="#ProductSummaryController_productKinds">#productKinds</a><br/>    <a href="#ProductSummaryController_isProductLoading">#isProductLoading</a><br/>    <a href="#ProductSummaryController_productKindsError">#productKindsError</a><br/>    <a href="#ProductSummaryController_hasProducts">#hasProducts()</a><br/>    <a href="#ProductSummaryController_total">#total</a><br/>
- **Hooks**<br/>    <a href="#Hooks_processKinds">#processKinds(kinds)</a><br/>    <a href="#Hooks_processProductSelected">#processProductSelected(product)</a><br/>    <a href="#Hooks_processProductsSelected">#processProductsSelected(products)</a><br/>    <a href="#Hooks_processExtendedProduct">#processExtendedProduct(product)</a><br/>
- **Events**<br/>    <a href="#bb.event.product.selected">bb.event.product.selected</a><br/>    <a href="#bb.event.products.selected">bb.event.products.selected</a><br/>
- **Type Definitions**<br/>    <a href="#TotalBalance">TotalBalance</a><br/>

## Exports

### <a name="default"></a>*default*

Angular module name

**Type:** *String*


---

## errorMessages

Error messages keys for connectivity, user, auth and unexpected errors.

---

### <a name="widget-bb-product-summary-nguiError"></a>*uiError(messageMap, modelError)*

Creates UI error message.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| messageMap | Object | object with error message keys |
| modelError | Object | the error object |

##### Returns

[{message: string}](#{message: string}) - **

---

## ProductSummaryController

Product summary controller.

| Injector Key |
| :-- |
| *ProductSummaryController* |


### <a name="ProductSummaryController_selectProduct"></a>*#selectProduct(product)*

Sets the alternate workflow when a user selects a Product from the overview.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| product | [Product](#Product) | Product to select. |

##### Fires Events:

> bb.event.product.selected

> bb.event.product.selected.[product-kind]


### <a name="ProductSummaryController_selectProducts"></a>*#selectProducts(products)*

Sets the alternate workflow when a user selects multiple Products from the overview or selector

| Parameter | Type | Description |
| :-- | :-- | :-- |
| products | Array of [Product](#Product) | Array of Products to select |

##### Fires Events:

> bb.event.products.selected


### <a name="ProductSummaryController_updateProductSelected"></a>*#updateProductSelected()*

Handles product select

##### Returns

Promise of [void](#void) - **

### <a name="ProductSummaryController_updateProductsSelected"></a>*#updateProductsSelected()*

Handles multiple product selection

##### Returns

Promise of [void](#void) - **

### <a name="ProductSummaryController_loadProducts"></a>*#loadProducts()*

Products loading logic

##### Returns

Promise of [void](#void) - **

### <a name="ProductSummaryController_bindEvents"></a>*#bindEvents()*

Adds subscriptions to bus events
### <a name="ProductSummaryController_productSelected"></a>*#productSelected*

The selected product.
The value returned from [Hooks.processProductSelected](#Hooks.processProductSelected) hook

**Type:** *[any](#any)*

### <a name="ProductSummaryController_productsSelected"></a>*#productsSelected*

Array of selected products.
The value returned from [Hooks.processProductsSelected](#Hooks.processProductsSelected) hook

**Type:** *Array*

### <a name="ProductSummaryController_extendedProduct"></a>*#extendedProduct*

The selected product extended with arrangement details.

**Type:** *[any](#any)*

### <a name="ProductSummaryController_productKinds"></a>*#productKinds*

The value returned from [Hooks.processKinds](#Hooks.processKinds) hook.
null if the products aren't loaded.

**Type:** *[any](#any)*

### <a name="ProductSummaryController_isProductLoading"></a>*#isProductLoading*

Loading status of the products

**Type:** *Boolean*

### <a name="ProductSummaryController_productKindsError"></a>*#productKindsError*

The error encountered when attempting to fetch the products from the model

**Type:** *[ModelError](#ModelError)*


### <a name="ProductSummaryController_hasProducts"></a>*#hasProducts()*

Checks the list is empty or not

##### Returns

Boolean - *false if product list is empty*
### <a name="ProductSummaryController_total"></a>*#total*

The total balance for the products

**Type:** *[TotalBalance](#TotalBalance)*


---

---

## Hooks

Hooks for widget-bb-product-summary-ng

### <a name="Hooks_processKinds"></a>*#processKinds(kinds)*

Hook for processing product kinds after initialization.
Assigned to [$ctrl.productKinds][ProductSummaryController#productKinds](#ProductSummaryController_productKinds)

| Parameter | Type | Description |
| :-- | :-- | :-- |
| kinds | Array of [ProductKind](#ProductKind) | ProductKinds to process |

##### Returns

[any](#any) - *Depends on hook implementation.*

### <a name="Hooks_processProductSelected"></a>*#processProductSelected(product)*

Hook for processing selected product after selection update
Assigned to [$ctrl.productSelected][ProductSummaryController#productSelected](#ProductSummaryController_productSelected)

| Parameter | Type | Description |
| :-- | :-- | :-- |
| product | [Product](#Product) | Product to process |

##### Returns

[any](#any) - *Depends on hook implementation.*

### <a name="Hooks_processProductsSelected"></a>*#processProductsSelected(products)*

Hook for processing selected array of products after selection update
Assigned to [$ctrl.productsSelected][ProductSummaryController#productsSelected](#ProductSummaryController_productsSelected)

| Parameter | Type | Description |
| :-- | :-- | :-- |
| products | Array of [Product](#Product) | Products to process |

##### Returns

[any](#any) - *Depends on hook implementation.*

### <a name="Hooks_processExtendedProduct"></a>*#processExtendedProduct(product)*

Hook for processing extended product after selection update
Assigned to [$ctrl.extendedProduct][ProductSummaryController#extendedProduct](#ProductSummaryController_extendedProduct)

| Parameter | Type | Description |
| :-- | :-- | :-- |
| product | [Product](#Product) | Product to process |

##### Returns

[any](#any) - *Depends on hook implementation.*

---

## Events

### <a name="bb.event.product.selected"></a>*bb.event.product.selected*

Triggered when product is selected.

### <a name="bb.event.products.selected"></a>*bb.event.products.selected*

Triggered when multiple products are selected.


---

## Type Definitions


### <a name="TotalBalance"></a>*TotalBalance*


**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| aggregatedBalance | String | aggregated balance |
| currency | String | currency code |

---

## Templates

* *template.ng.html*

---
