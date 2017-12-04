# lib-bb-event-bus-ng


Version: **1.1.61**

Event bus module, angular wrapper around CXP's gadgets.pubsub.

## Imports

* vendor-bb-angular

---

## Example

```javascript
import bbEventBusModuleKey, { eventBusKey } from 'lib-bb-event-bus-ng';

angular.module('MyModule', [bbEventBusModuleKey])
  .controller('Controller1', [eventBusKey, (eventBus) => ({
    $onInit: () => {
      eventBus.publish('example.event', { msg: 'Hello' });
    },
  })])
  .controller('Controller2', [eventBusKey, (eventBus) => ({
    $onInit: () => {
      eventBus.subscribe('example.event', ({ msg }) => {
        console.log(`Controller 1 says ${msg}`);
      });
    },
  })])
```

## Table of Contents
- **Exports**<br/>    <a href="#default">default</a><br/>    <a href="#eventBusKey">eventBusKey</a><br/>
- **EventBus**<br/>    <a href="#EventBus#publish">#publish(topic, payload)</a><br/>    <a href="#EventBus#subscribe">#subscribe(topic, callback)</a><br/>
- **EventBusProvider**<br/>    <a href="#EventBusProvider#setWidget">#setWidget(portalWidget)</a><br/>    <a href="#EventBusProvider#$get">#$get()</a><br/>
- **Type Definitions**<br/>    <a href="#Subscription">Subscription(payload)</a><br/>

## Exports

### <a name="default"></a>*default*

Angular module name

**Type:** *String*

### <a name="eventBusKey"></a>*eventBusKey*

Injector name of [EventBus](#EventBus) instance

**Type:** *String*


---

## EventBus


### <a name="EventBus#publish"></a>*#publish(topic, payload)*

Publish an event to the bus. Any subscribers should be notified

| Parameter | Type | Description |
| :-- | :-- | :-- |
| topic | String | The name of the event, this value is needed to subscribe |
| payload | <a href="#any">any</a> | The data payload to provide additional context to the event |

## Example

```javascript
bbEventBus
 .publish('test', {})
```

### <a name="EventBus#subscribe"></a>*#subscribe(topic, callback)*

Subscribe to be notified when an event on the same topic event is `publish`ed.
The callback will trigger an angular digest.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| topic | String |  |
| callback | <a href="#Subscription">Subscription</a> | To be called when an event is published on the same topic |

##### Returns

<a href="#void">void</a> - **

## Example

```javascript
bbEventBus
 .subscribe('test', function(){
   console.log('event')
 })
```

---

## EventBusProvider


### <a name="EventBusProvider#setWidget"></a>*#setWidget(portalWidget)*


| Parameter | Type | Description |
| :-- | :-- | :-- |
| portalWidget | Object | portal client widget instance (a.k.a __WIDGET__) |

##### Returns

<a href="#void">void</a> - **

### <a name="EventBusProvider#$get"></a>*#$get()*


##### Returns

<a href="#EventBus">EventBus</a> - *An [EventBus](#EventBus) service*

## Type Definitions



### <a name="Subscription"></a>*Subscription(payload)*


| Parameter | Type | Description |
| :-- | :-- | :-- |
| payload | <a href="#any">any</a> | The data payload that was `publish`ed with the event |

##### Returns

<a href="#void">void</a> - **

---
