# ext-bbm-product-details-view-ng


Version: **1.0.54**

Mobile extension for the product details widget - View.

## Imports

* ui-bb-format-amount
* ui-bb-i18n-ng

---

## Example

```javascript
<!-- product details widget model.xml -->
<property name="extension" viewHint="text-input,admin">
 <value type="string">ext-bbm-product-details-view-ng</value>
</property>
```

## Table of Contents
- **Helpers**<br/>    <a href="#Helpers_isLoading">#isLoading(ctrl)</a><br/>    <a href="#Helpers_isErrorState">#isErrorState(ctrl)</a><br/>
- **ext-bbm-product-details-view-ng**<br/>    <a href="#ext-bbm-product-details-view-ngprocessProductDetails">processProductDetails(productDetails)</a><br/>
- **Type Definitions**<br/>    <a href="#ProductDetailsView">ProductDetailsView</a><br/>    <a href="#ProductBalances">ProductBalances</a><br/>    <a href="#AdditionalDetails">AdditionalDetails</a><br/>    <a href="#PrimaryBalance">PrimaryBalance</a><br/>    <a href="#SecondaryBalance">SecondaryBalance</a><br/>    <a href="#TertiaryBalance">TertiaryBalance</a><br/>

---

## Helpers

Helpers for ext-bbm-product-details-view-ng

### <a name="Helpers_isLoading"></a>*#isLoading(ctrl)*

Checks for the loading status.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| ctrl | [ViewController](widget-bbm-product-details-ng.html#ViewController) |  |

##### Returns

Boolean - **

### <a name="Helpers_isErrorState"></a>*#isErrorState(ctrl)*

Checks for the error state.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| ctrl | [ViewController](widget-bbm-product-details-ng.html#ViewController) |  |

##### Returns

Boolean - **

---

## Hooks

Hooks for widget-bb-product-details-ng

---

### <a name="ext-bbm-product-details-view-ngprocessProductDetails"></a>*processProductDetails(productDetails)*

Hook for processing product details after initialization.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| productDetails | [ProductDetails](#ProductDetails) | ProductDetails to process |

##### Returns

[ProductDetailsView](#ProductDetailsView) - **

## Type Definitions


### <a name="ProductDetailsView"></a>*ProductDetailsView*


**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| id | String | The internal Product Identifier |
| name | String | The product's name, suitable for display to users |
| alias | String | The product's alias, suitable for display to users (fallback to product name) |
| identifier | String (optional) | The identifier of the Product from the user's perspective |
| currency | String (optional) | ISO currency code |
| productBalances | [ProductBalances](#ProductBalances) (optional) | Balances (amounts) for the given product |
| additionalDetails | [AdditionalDetails](#AdditionalDetails) (optional) | Additional details for the given product |

### <a name="ProductBalances"></a>*ProductBalances*


**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| primary | [PrimaryBalance](#PrimaryBalance) (optional) | The primary balance for the given product |
| secondary | [SecondaryBalance](#SecondaryBalance) (optional) | The secondary balance for the given product |
| tertiary | [TertiaryBalance](#TertiaryBalance) (optional) | The tertiary balance for the given product |

### <a name="AdditionalDetails"></a>*AdditionalDetails*


**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| accountOpeningDate | String (optional) | The opening date of the product arrangement |
| externalTransferAllowed | Boolean (optional) | Flag to check if transfers to external accounts are allowed |

### <a name="PrimaryBalance"></a>*PrimaryBalance*


**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| label | String | The label to show for the primary balance |
| value | String | The value (amount) of the primary balance |

### <a name="SecondaryBalance"></a>*SecondaryBalance*


**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| label | String | The label to show for the secondary balance |
| value | String | The value (amount) of the secondary balance |

### <a name="TertiaryBalance"></a>*TertiaryBalance*


**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| label | String | The label to show for the tertiary balance |
| value | String | The value (amount) of the tertiary balance |

---
