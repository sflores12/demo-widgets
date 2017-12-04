# widget-bbm-product-details-ng


Version: **1.1.43**

Mobile product details widget.

## Imports

* lib-bb-event-bus-ng
* lib-bb-intent-ng
* lib-bb-storage-ng
* lib-bb-widget-extension-ng
* lib-bb-widget-ng
* model-bb-product-summary-ng
* vendor-bb-angular

---

## Example

```javascript
<div ng-controller="FormController as $ctrl">
 </div>

 <div ng-controller="ViewController as $ctrl">
 </div>
```

## Table of Contents
- **FormController**<br/>    <a href="#FormController_updateProductAlias">#updateProductAlias()</a><br/>    <a href="#FormController_$onInit">#$onInit()</a><br/>
- **ViewController**<br/>    <a href="#ViewController_showProductAliasEditForm">#showProductAliasEditForm()</a><br/>    <a href="#ViewController_loadProductDetails">#loadProductDetails()</a><br/>    <a href="#ViewController_$onInit">#$onInit()</a><br/>
- **widget-bbm-product-details-ng**<br/>    <a href="#widget-bbm-product-details-ngprocessProductDetails">processProductDetails(productDetails)</a><br/>

---

## FormController

Product details form controller.

| Injector Key |
| :-- |
| *FormController* |


### <a name="FormController_updateProductAlias"></a>*#updateProductAlias()*

Updates a product alias

##### Returns

Promise - **

### <a name="FormController_$onInit"></a>*#$onInit()*

AngularJS Lifecycle hook used to initialize the controller.

##### Fires Events:

> cxp.item.loaded

> bb.item.loaded


---

## ViewController

Product details view controller.

| Injector Key |
| :-- |
| *ViewController* |


### <a name="ViewController_showProductAliasEditForm"></a>*#showProductAliasEditForm()*

Handles the intent to show the form to edit a product alias.

### <a name="ViewController_loadProductDetails"></a>*#loadProductDetails()*

Loads product details.

##### Returns

Promise of [ProductDetails](model-bb-product-summary-ng.html#ProductDetails) - **

### <a name="ViewController_$onInit"></a>*#$onInit()*

AngularJS Lifecycle hook used to initialize the controller.

##### Fires Events:

> cxp.item.loaded

> bb.item.loaded


---

## Hooks

Hooks for widget-bbm-product-details-ng.

---

### <a name="widget-bbm-product-details-ngprocessProductDetails"></a>*processProductDetails(productDetails)*

Hook for processing product details after initialization.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| productDetails | [ProductDetails](#ProductDetails) | ProductDetails to process |

##### Returns

[ProductDetails](#ProductDetails) - **

## Templates

* *template.ng.html*

---
