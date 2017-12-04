# ui-bb-format-amount


Version: **1.4.48**


## Imports

* lib-bb-currency-ng
* vendor-bb-angular

---

## Example

```javascript
// In an extension:
// file: scripts/index.js
import uiBbFormatAmountKey from 'ui-bb-format-amount';

export const dependencyKeys = [
  uiBbFormatAmountKey,
];

// file: templates/template.ng.html
<ui-bb-format-amount
amount="$option.amount"
currency="$option.currency"
wrap-whole-number
wrap-decimals
wrap-currency
wrap
no-map
show-plus-sign
></ui-bb-format-amount>

Note:
wrap-whole-number, wrap-decimals and wrap-currency attributes are deprecated. Use wrap instead
```

## Table of Contents
- **Exports**<br/>    <a href="#default">default</a><br/>
- **ui-bb-format-amount**<br/>    <a href="#ui-bb-format-amountwrap">wrap($locale, $sce)</a><br/>    <a href="#ui-bb-format-amountsignFilter">signFilter($locale, $filter)</a><br/>    <a href="#ui-bb-format-amountwrapFilter">wrapFilter($locale, $sce)</a><br/>

## Exports

### <a name="default"></a>*default*

The angular module name

**Type:** *String*


---

## uiBbFormatAmountComponent

Format Amount Component Object

| Property | Type | Description |
| :-- | :-- | :-- |
| amount | String | Amount string |
| currency | String | Currency string |
| wrapWholeNumber | String | Condition to wrap amount sign (if present) and the whole part of number in HTML wrapper (deprecated) |
| wrapDecimals | String | Condition to wrap decimal point and number decimals in HTML wrapper (deprecated) |
| wrapCurrency | String | Condition to wrap currency sign or code in HTML wrapper (deprecated) |
| wrap | [void](#void) | Condition to wrap amount sign (if present), currency sign or code, whole part of the number, decimal point and number decimals in separate HTML wrappers |
| noMap | [void](#void) | Condition to stop looking for currency mapping in the currency-map |
| showPlusSign | [void](#void) | Condition to prepend plus sign for positive amounts |

---

### <a name="ui-bb-format-amountwrap"></a>*wrap($locale, $sce)*

Wraps whole number part in <span class="amount-whole-number">
Wraps decimals in <span class="amount-decimals">
Wraps decimal point in <span class="amount-decimal-point">
Wraps currency in <span class="amount-currency">


| Parameter | Type | Description |
| :-- | :-- | :-- |
| $locale | Object | Localization service |
| $sce | Object | SCE Service |

##### Returns

String - *Figures wrapped in &lt;span&gt; elements*

---

### <a name="ui-bb-format-amountsignFilter"></a>*signFilter($locale, $filter)*

Filter for currency formatting with an option to add + sign for positive values

| Parameter | Type | Description |
| :-- | :-- | :-- |
| $locale | Object | Localization service |
| $filter | Function | Filter service |

##### Returns

Function - *Function that is used to filter*

---

### <a name="ui-bb-format-amountwrapFilter"></a>*wrapFilter($locale, $sce)*

Filter used to wrap numbers (whole and decimal part) and decimal point in HTML wrappers.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| $locale | Object | Localization service |
| $sce | Object | SCE Service |

##### Returns

Function - *Function that is used to wrap the value*
