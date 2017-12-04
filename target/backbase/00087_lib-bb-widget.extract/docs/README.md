# lib-bb-widget


Version: **1.0.57**

Provides access to the details of the instance of the widget in the
portal, such as its ID and preferences.

## Example

```javascript
// file: index.js
import bbWidget from 'lib-bb-widget';

const widget = bbWidget(widgetInstance);
widget.getPreference('foo');
```

## Table of Contents
- **Widget**<br/>    <a href="#Widget#getPreference">#getPreference(name)</a><br/>    <a href="#Widget#getStringPreference">#getStringPreference(name)</a><br/>    <a href="#Widget#getLongPreference">#getLongPreference(name)</a><br/>    <a href="#Widget#getDoublePreference">#getDoublePreference(name)</a><br/>    <a href="#Widget#getBooleanPreference">#getBooleanPreference(name)</a><br/>    <a href="#Widget#getStringArrayPreference">#getStringArrayPreference(name)</a><br/>    <a href="#Widget#getNullPreference">#getNullPreference(name)</a><br/>    <a href="#Widget#getRawPreference">#getRawPreference(name)</a><br/>    <a href="#Widget#setPreference">#setPreference(name, value)</a><br/>    <a href="#Widget#savePreference">#savePreference(name, value)</a><br/>    <a href="#Widget#getId">#getId()</a><br/>    <a href="#Widget#onUpdate">#onUpdate(callback)</a><br/>    <a href="#Widget#render">#render()</a><br/>
- **Type Definitions**<br/>    <a href="#UpdateCallback">UpdateCallback(name, value)</a><br/>    <a href="#UpdateUnsubscribe">UpdateUnsubscribe()</a><br/>

---

## Widget

A service that provides access to the instance of the widget in the portal.


### <a name="Widget#getPreference"></a>*#getPreference(name)*


#### Deprecated: 0.2.3
Gets a preference from widget configuration (model.xml) and attempts to return it as a string

*DEPRECATED*
`getPreference` is deprecated in favor of the type specific `get<Type>Preference` methods.
This makes the use of the preferences in the context of a widget more reliable, as they are
parsed/coerced into the expected type in a reliable and consistent way, instead of ad-hoc
whenever a preference is used.


| Parameter | Type | Description |
| :-- | :-- | :-- |
| name | String |  |

##### Returns

String (optional) - *The parsed value of the preference*

### <a name="Widget#getStringPreference"></a>*#getStringPreference(name)*

Gets a preference from widget configuration (model.xml) and attempts to return it as a string


| Parameter | Type | Description |
| :-- | :-- | :-- |
| name | String |  |

##### Returns

String (optional) - *The parsed value of the preference*

### <a name="Widget#getLongPreference"></a>*#getLongPreference(name)*

Gets a preference from widget configuration (model.xml) and attempts to return it as a integer
number.


| Parameter | Type | Description |
| :-- | :-- | :-- |
| name | String |  |

##### Returns

Number (optional) - *The parsed value of the preference*

### <a name="Widget#getDoublePreference"></a>*#getDoublePreference(name)*

Gets a preference from widget configuration (model.xml) and attempts to return it as a decimal
number.


| Parameter | Type | Description |
| :-- | :-- | :-- |
| name | String |  |

##### Returns

Number (optional) - *The parsed value of the preference*

### <a name="Widget#getBooleanPreference"></a>*#getBooleanPreference(name)*

Gets a preference from widget configuration (model.xml) and attempts to return it as a boolean.


| Parameter | Type | Description |
| :-- | :-- | :-- |
| name | String |  |

##### Returns

Boolean (optional) - *The parsed value of the preference*

### <a name="Widget#getStringArrayPreference"></a>*#getStringArrayPreference(name)*

Gets a preference from widget configuration (model.xml) and attempts to return it as an array
of strings, split on commas.


| Parameter | Type | Description |
| :-- | :-- | :-- |
| name | String |  |

##### Returns

Array (optional) of String - *The parsed value of the preference*

### <a name="Widget#getNullPreference"></a>*#getNullPreference(name)*

Gets a preference from widget configuration (model.xml) and attempts to return it as an null.


| Parameter | Type | Description |
| :-- | :-- | :-- |
| name | String |  |

##### Returns

Null (optional) - *The parsed value of the preference*

### <a name="Widget#getRawPreference"></a>*#getRawPreference(name)*

Gets a preference from widget as returned by portal client. This method is provided
as a "escape hatch" when none of the types methods work, but should generally be
avoided in common use due to its reliance on the underlying portal client implementation.

*N.B.* The return type is dependant on the underlying portal client implementation, and may
change across portal client versions.


| Parameter | Type | Description |
| :-- | :-- | :-- |
| name | String |  |

##### Returns

<a href="#any">any</a> - *The value of the preference directly from the portal client*

### <a name="Widget#setPreference"></a>*#setPreference(name, value)*


#### Deprecated: 1.1.0
Sets a given value for a given preference

*DEPRECATED*
`setPreference` is deprecated in favor of `savePreference` which also persists the value to
the portal.


| Parameter | Type | Description |
| :-- | :-- | :-- |
| name | String |  |
| value | String |  |

##### Returns

Object or String - *preference*

### <a name="Widget#savePreference"></a>*#savePreference(name, value)*

Sets a given value for a given preference and persists it to the portal.


| Parameter | Type | Description |
| :-- | :-- | :-- |
| name | String |  |
| value | String |  |

##### Returns

Promise of <a href="#void">void</a> - **

### <a name="Widget#getId"></a>*#getId()*

Returns the widget's instance ID

##### Returns

String - **

### <a name="Widget#onUpdate"></a>*#onUpdate(callback)*

Registers a callback to run whenever a widget preference is modified

| Parameter | Type | Description |
| :-- | :-- | :-- |
| callback | <a href="#UpdateCallback">UpdateCallback</a> | Function to run when preference is modified |

##### Returns

<a href="#UpdateUnsubscribe">UpdateUnsubscribe</a> - *Function to call to unsubscribe UpdateCallback
from listening to preference modified events*

### <a name="Widget#render"></a>*#render()*

Rerenders the widget

##### Returns

Promise of <a href="#void">void</a> - **

## Type Definitions



### <a name="UpdateCallback"></a>*UpdateCallback(name, value)*


| Parameter | Type | Description |
| :-- | :-- | :-- |
| name | String | name of the property |
| value | String | value of the property |

##### Returns

<a href="#void">void</a> - **


### <a name="UpdateUnsubscribe"></a>*UpdateUnsubscribe()*


##### Returns

<a href="#void">void</a> - **

---
