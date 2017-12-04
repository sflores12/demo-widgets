# widget-bb-notification-popups-ng


Version: **1.1.90**

Notification popups.

## Imports

* lib-bb-event-bus-ng
* lib-bb-intent-ng
* model-bb-notifications-ng
* vendor-bb-angular

---

## Example

```javascript
<div ng-controller="NotificationsPopupsController as $ctrl">
 <ul ng-repeat="notification in $ctrl.notifications">
   <li>{{notification.id}}</li>
 </ul>
</div>
```

## Table of Contents
- **NotificationsPopupsController**<br/>    <a href="#NotificationsPopupsController_getNotificationType">#getNotificationType(notification)</a><br/>    <a href="#NotificationsPopupsController_closeNotification">#closeNotification(id, sticky)</a><br/>    <a href="#NotificationsPopupsController_$onInit">#$onInit()</a><br/>    <a href="#NotificationsPopupsController_$onDestroy">#$onDestroy()</a><br/>    <a href="#NotificationsPopupsController_notifications">#notifications</a><br/>    <a href="#NotificationsPopupsController_stickyNotifications">#stickyNotifications</a><br/>    <a href="#NotificationsPopupsController_isNotificationsLoading">#isNotificationsLoading</a><br/>    <a href="#NotificationsPopupsController_hasNotifications">#hasNotifications()</a><br/>    <a href="#NotificationsPopupsController_dismissSticky">#dismissSticky</a><br/>
- **Type Definitions**<br/>    <a href="#loadStreamResponse">loadStreamResponse</a><br/>

---

## Event

Widget events enum

---

## NotificationType

List of css-classes to be used for detect notification type

---

## NotificationsPopupsController

Notification Popups controller.

| Injector Key |
| :-- |
| *NotificationsPopupsController* |


### <a name="NotificationsPopupsController_getNotificationType"></a>*#getNotificationType(notification)*

return notification type for ui.bootstrap.alert directive according to notifications level:
ALERT: alert-danger
INFO: alert-info
WARNING: alert-warning
SUCCESS: alert-success

| Parameter | Type | Description |
| :-- | :-- | :-- |
| notification | Object | A notification object |

##### Returns

Promise of String - *A Promise with result of marking*

### <a name="NotificationsPopupsController_closeNotification"></a>*#closeNotification(id, sticky)*

removes notification from list.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| id | String | Notification ID |
| sticky | Boolean | Type of notification for closing |

##### Fires Events:

> bb.event.number.of.unread.changed


### <a name="NotificationsPopupsController_$onInit"></a>*#$onInit()*

Widget initialization logic - called automatically in the angular cycle.

### <a name="NotificationsPopupsController_$onDestroy"></a>*#$onDestroy()*

Widget destroy logic - called automatically in the angular cycle.
### <a name="NotificationsPopupsController_notifications"></a>*#notifications*

The array of notifications. Empty if no notifications were received.

**Type:** *Array of [NotificationsData.NotificationItem](data-bb-notifications-http-ng.html#NotificationsData.NotificationItem)*

### <a name="NotificationsPopupsController_stickyNotifications"></a>*#stickyNotifications*

The array of sticky notifications. Empty if no sticky notifications were received.

**Type:** *Array of [NotificationsData.NotificationItem](data-bb-notifications-http-ng.html#NotificationsData.NotificationItem)*

### <a name="NotificationsPopupsController_isNotificationsLoading"></a>*#isNotificationsLoading*

True if notifications is loading

**Type:** *Boolean*


### <a name="NotificationsPopupsController_hasNotifications"></a>*#hasNotifications()*

Checks the list of notifications is empty or not

##### Returns

Boolean - *false if notifications list is empty*
### <a name="NotificationsPopupsController_dismissSticky"></a>*#dismissSticky*

True if sticky notifications can be dismissing

**Type:** *Boolean*


## Type Definitions


### <a name="loadStreamResponse"></a>*loadStreamResponse*


**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| data | Array of [NotificationsData.NotificationItem](data-bb-notifications-http-ng.html#NotificationsData.NotificationItem) | Array of notifications |

---

## Templates

* *template.ng.html*

---
