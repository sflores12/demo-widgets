# lib-bb-widget-ng


Version: **1.2.60**

Provides access to the details of the instance of the widget in the
portal, such as its ID and preferences.

## Imports

* lib-bb-widget
* vendor-bb-angular

---

## Example

```javascript
// file: index.js
import libBbWidgetNgKey, { widgetKey } from 'lib-bb-widget-ng';
import Controller from './controller.js';

angular.module('blah', [ libBbWidgetNgKey ])
.controller([
  // inject
  widgetKey
  // into
  Controller
])

// file: controller.js
function Controller(bbWidget) {
  // ...
}
```

## Table of Contents
- **Exports**<br/>    <a href="#default">default</a><br/>    <a href="#widgetKey">widgetKey</a><br/>
- **widgetProvider**<br/>    <a href="#widgetProvider#config">#config(portalWidget)</a><br/>    <a href="#widgetProvider#$get">#$get()</a><br/>

## Exports

### <a name="default"></a>*default*

Angular module name

**Type:** *String*

### <a name="widgetKey"></a>*widgetKey*

Injector name of <a href="lib-bb-widget.html#WidgetAdapter">WidgetAdapter</a> service

**Type:** *String*


---

## widgetProvider

Service can be configured with underlying widget instance.

### <a name="widgetProvider#config"></a>*#config(portalWidget)*


| Parameter | Type | Description |
| :-- | :-- | :-- |
| portalWidget | Object | portal client widget instance (a.k.a __WIDGET__) |

### <a name="widgetProvider#$get"></a>*#$get()*


##### Returns

<a href="#widget">widget</a> - *A <a href="lib-bb-widget.html#WidgetAdapter">WidgetAdapter</a> service*

## Example

```javascript
angular.module(...)
  .config([`${widgetKey}Provider`,
    (widgetProvider) => {
      widgetProvider.config( ... );
    });
```
