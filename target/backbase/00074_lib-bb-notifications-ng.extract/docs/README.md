# lib-bb-notifications-ng


Version: **1.0.39**

Library for publishing notifications intended to be displayed to the user.

## Imports

* lib-bb-event-bus-ng
* vendor-bb-angular

---

## Example

```javascript
// Widget 1 (My Widget)
import angular from 'vendor-bb-angular';
import bbNotificationsModuleKey, { notificationsKey } from 'lib-bb-notifications-ng';
import myModelModuleKey, { myModelKey } from 'lib-bb-my-model-ng';
import bbEventBusModuleKey, { eventBusKey } from 'lib-bb-event-bus-ng';

angular.module('MyWidget', [bbNotificationsModuleKey, myModelModuleKey, bbEventBusModuleKey])
  .controller('MyWidgetController', [
    notificationsKey, myModelKey, (notifications, myModel, bbEventBus) => ({
    $onInit: () => {
      myModel.load()
        .then(() => {
          // This shows the how to manually inject and call the notification service, but this
          // is *not* recommended usage, as the message cannot be translated.
          notifications.notifyInfo('My Widget data was successfully loaded');
        })
        .catch(() => {
          // Publish a widget-specific event that the extension can choose to handle
          bbEventBus.publish('my-widget.load.failed');
        });
    },
  })]);

// Widget 1 - Extension (ext-my-widget-ng)
export const events = ({ notifications, $filter }) => ({
  // subscribe to widget load failure event
  'my-widget.load.failed': () => {
    // publish translated notification to inform the user
    notifications.notifyAlert($filter('i18n')('notification.load.fail'));
  },
});

// Module 2 (Notification Module)
import angular from 'vendor-bb-angular';
import bbEventBusModuleKey, { eventBusKey } from 'lib-bb-event-bus-ng';

angular.module('NotificationModule', [bbEventBusModuleKey])
  .controller('NotificationController', [eventBusKey, '$window', (eventBus, $window) => ({
    $onInit: () => {
      eventBus.subscribe('bb.event.notifications.notify', ({ level, message }) => {
        // display the notification to the user, if appropriate
        if (level === 'ALERT') {
          $window.alert(message);
        }
      });
    },
  })]);
```

## Table of Contents
- **Exports**<br/>    <a href="#notificationsKey">notificationsKey</a><br/>
- **Notifications**<br/>    <a href="#Notifications#notifyAlert">#notifyAlert(message)</a><br/>    <a href="#Notifications#notifyWarning">#notifyWarning(message)</a><br/>    <a href="#Notifications#notifySuccess">#notifySuccess(message)</a><br/>    <a href="#Notifications#notifyInfo">#notifyInfo(message)</a><br/>

## Exports

### <a name="notificationsKey"></a>*notificationsKey*

Injector name of [Notifications](#Notifications) instance

**Type:** *String*


---

## Notifications


### <a name="Notifications#notifyAlert"></a>*#notifyAlert(message)*

Publish a notification to alert the user to a probably unexpected situation

| Parameter | Type | Description |
| :-- | :-- | :-- |
| message | String | The message to display to the user |

##### Fires Events:

> bb.event.notifications.notify


### <a name="Notifications#notifyWarning"></a>*#notifyWarning(message)*

Publish a notification to warn the user about a possibly unexpected situation

| Parameter | Type | Description |
| :-- | :-- | :-- |
| message | String | The message to display to the user |

##### Fires Events:

> bb.event.notifications.notify


### <a name="Notifications#notifySuccess"></a>*#notifySuccess(message)*

Publish a notification to tell the user their action was successful

| Parameter | Type | Description |
| :-- | :-- | :-- |
| message | String | The message to display to the user |

##### Fires Events:

> bb.event.notifications.notify


### <a name="Notifications#notifyInfo"></a>*#notifyInfo(message)*

Publish a notification to inform the user about something

| Parameter | Type | Description |
| :-- | :-- | :-- |
| message | String | The message to display to the user |

##### Fires Events:

> bb.event.notifications.notify

