# widget-bb-manage-products-ng


Version: **1.1.34**

Manage products

## Imports

* lib-bb-event-bus-ng
* lib-bb-intent-ng
* lib-bb-model-errors
* lib-bb-widget-extension-ng
* lib-bb-widget-ng
* model-bb-product-summary-ng
* vendor-bb-angular

---

## Table of Contents
- **widget-bb-manage-products-ng**<br/>    <a href="#widget-bb-manage-products-ngDEFAULT_DISMISS_TIME">DEFAULT_DISMISS_TIME</a><br/>    <a href="#widget-bb-manage-products-ngUPDATED_PRODUCT_SUCCESS_KEY">UPDATED_PRODUCT_SUCCESS_KEY</a><br/>    <a href="#widget-bb-manage-products-ngUPDATED_PRODUCT_ERROR_KEY">UPDATED_PRODUCT_ERROR_KEY</a><br/>    <a href="#widget-bb-manage-products-nguiError">uiError(messageMap, modelError)</a><br/>    <a href="#widget-bb-manage-products-ngManageProductsController">ManageProductsController()</a><br/>    <a href="#widget-bb-manage-products-ngprocessKinds">processKinds(productKinds)</a><br/>

---

## errorMessages

Error messages keys for connectivity, user, auth and unexpected errors.

---
### <a name="widget-bb-manage-products-ngDEFAULT_DISMISS_TIME"></a>*DEFAULT_DISMISS_TIME*

Default notification dismiss time.

**Type:** *Number*


---
### <a name="widget-bb-manage-products-ngUPDATED_PRODUCT_SUCCESS_KEY"></a>*UPDATED_PRODUCT_SUCCESS_KEY*

Key string for notification success message

**Type:** *String*


---
### <a name="widget-bb-manage-products-ngUPDATED_PRODUCT_ERROR_KEY"></a>*UPDATED_PRODUCT_ERROR_KEY*

Key string for notification error message

**Type:** *String*


---

### <a name="widget-bb-manage-products-nguiError"></a>*uiError(messageMap, modelError)*

Creates UI error message.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| messageMap | Object | object with error message keys |
| modelError | Object | the error object |

##### Returns

[{message: string}](#{message: string}) - **

---

### <a name="widget-bb-manage-products-ngManageProductsController"></a>*ManageProductsController()*

Manage products widget controller

---

## Hooks

Hooks for widget-bb-manage-products-ng

---

### <a name="widget-bb-manage-products-ngprocessKinds"></a>*processKinds(productKinds)*

Hook for processing productKinds.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| productKinds | Array of [ProductKind](model-bb-product-summary-ng.html#ProductKind) | ProductKinds to process |

##### Returns

Array of [ProductKind](model-bb-product-summary-ng.html#ProductKind) - *Processed  productKinds*

## Templates

* *template.ng.html*

---
