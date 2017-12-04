# lib-bb-start


Version: **2.0.53**

Provides a consistent interface for bootstrapping a Widget's JavaScript.

The purpose of this module is to handle the loading of bootstrap helpers, so on-page `script`
tags can be consistent and independent of the bootstrap process.

## Table of Contents
- **lib-bb-start**<br/>    <a href="#lib-bb-startngStart">ngStart(widgetInstance)</a><br/>
- **Type Definitions**<br/>    <a href="#WidgetInstance">WidgetInstance</a><br/>    <a href="#WidgetInstance#getPreference">WidgetInstance#getPreference(preferenceName)</a><br/>

---

### <a name="lib-bb-startngStart"></a>*ngStart(widgetInstance)*

A helper function that lazy loads the angular start library and
uses it to start the given module.

It is attached to the global (`window`) scope under `BB.Widget` to allow access from non-modular
JavaScript code, such as the widget's main template (index.html)

See <a href="lib-bb-start-ng.html#lib-bb-start-ng">lib-bb-start-ng</a> for more info on how the angular app is
bootstrapped.


| Parameter | Type | Description |
| :-- | :-- | :-- |
| widgetInstance | <a href="#WidgetInstance">WidgetInstance</a> | WidgetInstance to start |

##### Returns

<a href="#void">void</a> - **

## Example

```javascript
<body g:onload="BB.Widget.ngStart(__WIDGET__);">
```

## Type Definitions


### <a name="WidgetInstance"></a>*WidgetInstance*

The portal client widget instance (a.k.a __WIDGET__)

**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| id | String | Unique ID of the widget instance |
| name | String | The name of the widget |
| body | <a href="#HTMLElement">HTMLElement</a> | The DOM Node where the widget can be rendered |
| getPreference | <a href="#WidgetInstance#getPreference">WidgetInstance#getPreference</a> | Get a preference from the widget model |


### <a name="WidgetInstance#getPreference"></a>*WidgetInstance#getPreference(preferenceName)*


| Parameter | Type | Description |
| :-- | :-- | :-- |
| preferenceName | String | Name of the preference to fetch from the model |

##### Returns

String (optional) - *The value of the preference in the model, or undefined if it isn't available*

---
