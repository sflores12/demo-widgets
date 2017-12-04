# lib-bb-currency-ng


Version: **1.0.72**

Provides currency symbol and number of decimal digits.

## Imports

* vendor-bb-angular

---

## Example

```javascript
import angular from 'vendor-bb-angular';
import libBbCurrencyNgModuleKey, { bbRuleKey } from 'lib-bb-currency-ng';

angular.module('example-module', [libBbCurrencyNgModuleKey])
  .factory('MyService', [bbRuleKey, (getRule) => ({
      getCurrencyRule: (currencyCode) => getRule(currencyCode) || {
          symbol: '',
          decimalDigits: 2,
        },
    }),
  ]);
```

## Table of Contents
- **Exports**<br/>    <a href="#default">default</a><br/>    <a href="#bbCurrencyRuleKey">bbCurrencyRuleKey</a><br/>
- **lib-bb-currency-ng**<br/>    <a href="#lib-bb-currency-nggetRule">getRule()</a><br/>
- **Type Definitions**<br/>    <a href="#getRule">getRule(currencyCode)</a><br/>    <a href="#CurrencyRule">CurrencyRule</a><br/>

## Exports

### <a name="default"></a>*default*

Angular module name

**Type:** *String*

### <a name="bbCurrencyRuleKey"></a>*bbCurrencyRuleKey*

The dependency injection key for the getRule Service

**Type:** *String*


---

### <a name="lib-bb-currency-nggetRule"></a>*getRule()*


##### Returns

[getRule](#getRule) - *Function which returns currency symbol
and number of decimal places for given currency.*

## Type Definitions



### <a name="getRule"></a>*getRule(currencyCode)*


| Parameter | Type | Description |
| :-- | :-- | :-- |
| currencyCode | String | Currency's ISO 4217 code |

##### Returns

[CurrencyRule](#CurrencyRule) - *Rule object or null if not found*

### <a name="CurrencyRule"></a>*CurrencyRule*


**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| symbol | String |  |
| decimalDigits | Number |  |

---
