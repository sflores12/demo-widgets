# ext-bb-manage-products-ng


Version: **1.3.4**

Default extension for widget-bb-manage-products-ng

## Imports

* ui-bb-element-dimensions-ng
* ui-bb-empty-state-ng
* ui-bb-focus-ng
* ui-bb-format-amount
* ui-bb-i18n-ng
* ui-bb-loading-indicator-ng
* ui-bb-notification-stripe-ng
* ui-bb-substitute-error-ng
* vendor-bb-angular-ng-aria

---

## Table of Contents
- **ext-bb-manage-products-ng**<br/>    <a href="#ext-bb-manage-products-nghandleAlias">handleAlias(name, alias)</a><br/>    <a href="#ext-bb-manage-products-ngshowChangeNameInput">showChangeNameInput(productSelected, product)</a><br/>    <a href="#ext-bb-manage-products-ngprocessBalances">processBalances(selectedProduct)</a><br/>    <a href="#ext-bb-manage-products-ngprocessKinds">processKinds(productKinds)</a><br/>

---

### <a name="ext-bb-manage-products-nghandleAlias"></a>*handleAlias(name, alias)*

Handles displaying a value for alias depending on what is available
from the product.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| name | String |  |
| alias | String |  |

##### Returns

String - *alias || name || fallback message*

---

### <a name="ext-bb-manage-products-ngshowChangeNameInput"></a>*showChangeNameInput(productSelected, product)*

Checking if the condition is met to display the editable input
for changing the name or alias.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| productSelected | Object | The selected product. |
| product | Object | The product that needs to be checked. |

##### Returns

Boolean - *true if condition is met or false otherwise*

---

### <a name="ext-bb-manage-products-ngprocessBalances"></a>*processBalances(selectedProduct)*

Processing the selected product and appending appropriate balance values
per product kind

| Parameter | Type | Description |
| :-- | :-- | :-- |
| selectedProduct | Object | The selected product. |

##### Returns

Object - *selectedProduct.balance - Returns the appropriate
balance available on the object*

---

## Hooks

Hooks for widget-bb-manage-products-ng

---

### <a name="ext-bb-manage-products-ngprocessKinds"></a>*processKinds(productKinds)*

Hook that processing all productKinds to get
a singe array containing all products from all productKinds

| Parameter | Type | Description |
| :-- | :-- | :-- |
| productKinds | Array of [ProductKind](model-bb-product-summary-ng.html#ProductKind) | ProductKinds to process |

##### Returns

Array of Object - *Array of products from all ProductKinds*
