# lib-bb-i18n-ng


Version: **1.0.106**

Translation of message keys.

Generally this library doesn't need to be used directly, and you should use ui-bb-i18n-ng for
translations.

## Imports

* vendor-bb-angular

---

## Example

```javascript
import angular from 'vendor-bb-angular';
import libBbI18nNgModuleKey, { bbTranslateKey, bbMessageFormatKey } from 'lib-bb-i18n-ng';

angular.module('example-module', [libBbI18nNgModuleKey])
  .config([`${bbTranslateKey}Provider`, function(i18n) {
    i18n.setMessages({
      'example.greeting': 'Greetings, {user}!',
    });
  }])

  .factory('MyService', [
    bbTranslateKey, bbMessageFormatKey,
    (translate, format) => ({
      internationalize: (key, data) => format(data, translate(key)),
    }),
  ]);
```

## Table of Contents
- **Exports**<br/>    <a href="#default">default</a><br/>    <a href="#bbMessageFormatKey">bbMessageFormatKey</a><br/>    <a href="#bbTranslateKey">bbTranslateKey</a><br/>
- **bbTranslateProvider**<br/>    <a href="#bbTranslateProvider#setMessages">#setMessages(msgs)</a><br/>    <a href="#bbTranslateProvider#$get">#$get()</a><br/>
- **lib-bb-i18n-ng**<br/>    <a href="#lib-bb-i18n-ngbbMessageFormat">bbMessageFormat()</a><br/>
- **Type Definitions**<br/>    <a href="#bbTranslate">bbTranslate(key)</a><br/>    <a href="#bbMessageFormat">bbMessageFormat(message, data)</a><br/>

## Exports

### <a name="default"></a>*default*

Angular module name

**Type:** *String*

### <a name="bbMessageFormatKey"></a>*bbMessageFormatKey*

The dependency injection key for the bbMessageFormat Service

**Type:** *String*

### <a name="bbTranslateKey"></a>*bbTranslateKey*

The dependency injection key for the bbTranslate Service

**Type:** *String*


---

## bbTranslateProvider

A provider that allows configuration of the localized messages to use.
Set the messages for the current locale using the `setMessages` provider method.


| Injector Key |
| :-- |
| *lib-bb-i18n-ng:bbTranslateProvider* |


### <a name="bbTranslateProvider#setMessages"></a>*#setMessages(msgs)*


| Parameter | Type | Description |
| :-- | :-- | :-- |
| msgs | Object of String | A map of translation keys to translations |

### <a name="bbTranslateProvider#$get"></a>*#$get()*


##### Returns

<a href="#bbTranslate">bbTranslate</a> - *A translation function*

## Example

```javascript
angular.module(...)
  .config([
    `${bbTranslateKey}Provider`,
    (i18nProvider) => {
      i18nProvider.setMessages(...);
    }
  ]);
```

---

### <a name="lib-bb-i18n-ngbbMessageFormat"></a>*bbMessageFormat()*

A factory to get a message format function, allowing translated messages to have values
subsituted into their placeholders.


##### Returns

<a href="#bbMessageFormat">bbMessageFormat</a> - *Function which returns message with substituted data.*

## Type Definitions



### <a name="bbTranslate"></a>*bbTranslate(key)*


| Parameter | Type | Description |
| :-- | :-- | :-- |
| key | String | The translation key for which to find a translation |

##### Returns

String - *The translated message. Empty string if not translation is available.*


### <a name="bbMessageFormat"></a>*bbMessageFormat(message, data)*


| Parameter | Type | Description |
| :-- | :-- | :-- |
| message | String | The message, with placeholders, to format |
| data | Object of String | A map of placeholder to value. To be substituted into the message |

##### Returns

String - *The message with substituted data. Missing data leaves the key in place*

---
