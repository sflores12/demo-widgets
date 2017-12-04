# widget-bb-notification-badge-ng


Version: **2.4.61**

Notifications badge widget.

## Imports

* lib-bb-event-bus-ng
* lib-bb-intent-ng
* lib-bb-model-errors
* model-bb-notifications-ng
* vendor-bb-angular

---

## Example

```javascript
<div ng-controller="NotificationsBadgeController as $ctrl">
 <span>{{$ctrl.numberOfUnread}}</span>
</div>
```

## Table of Contents
- **NotificationsBadgeController**<br/>    <a href="#NotificationsBadgeController_state">#state</a><br/>    <a href="#NotificationsBadgeController_loadMore">#loadMore(done)</a><br/>    <a href="#NotificationsBadgeController_viewNotificationDetails">#viewNotificationDetails(item)</a><br/>    <a href="#NotificationsBadgeController_togglePopover">#togglePopover()</a><br/>    <a href="#NotificationsBadgeController_markNotification">#markNotification(id, read)</a><br/>    <a href="#NotificationsBadgeController_deleteNotification">#deleteNotification(id)</a><br/>    <a href="#NotificationsBadgeController_isNotificationUnRead">#isNotificationUnRead(item)</a><br/>    <a href="#NotificationsBadgeController_$onInit">#$onInit()</a><br/>    <a href="#NotificationsBadgeController_$onDestroy">#$onDestroy()</a><br/>
- **Type Definitions**<br/>    <a href="#DefaultResponse">DefaultResponse</a><br/>    <a href="#loadResponse">loadResponse</a><br/>    <a href="#loadUnreadCountResponse">loadUnreadCountResponse</a><br/>

---

## Event

Widget events enum

---

## MessageKey

Widget static messages for the template

---

## NotificationsBadgeController

Notifications badge controller.

| Injector Key |
| :-- |
| *NotificationsBadgeController* |

### <a name="NotificationsBadgeController_state"></a>*#state*

Holds current controller state

**Type:** *Object*


### <a name="NotificationsBadgeController_loadMore"></a>*#loadMore(done)*

Loads more notifications.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| done | Function | Callback function for `ui-bb-load-more-ng` component |

##### Returns

Null or Promise of [loadResponse](#loadResponse), [ModelError](lib-bb-model-errors.html#ModelError) - *Returns void if
loading is in process or whether a Promise that resolves data of [loadResponse](#loadResponse) on
success or rejects with data of [ModelError](lib-bb-model-errors.html#ModelError)*

### <a name="NotificationsBadgeController_viewNotificationDetails"></a>*#viewNotificationDetails(item)*

Set active notification and navigates the user to the Notifications Detail view.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| item | [NotificationsData.NotificationItem](data-bb-notifications-http-ng.html#NotificationsData.NotificationItem) | Active notification |

### <a name="NotificationsBadgeController_togglePopover"></a>*#togglePopover()*

Loads notifications and toggles the popover.

### <a name="NotificationsBadgeController_markNotification"></a>*#markNotification(id, read)*

Mark notification as read/unread.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| id | String | Notification ID. |
| read | Boolean | True if notification was read. |

##### Returns

Null or Promise of [DefaultResponse](#DefaultResponse), [ModelError](lib-bb-model-errors.html#ModelError) - *Returns void
if notification is in process or whether a Promise that resolves data of
[DefaultResponse](#DefaultResponse) on success or rejects with data of
[ModelError](lib-bb-model-errors.html#ModelError)*

##### Fires Events:

> bb.event.number.of.unread.changed


### <a name="NotificationsBadgeController_deleteNotification"></a>*#deleteNotification(id)*

Delete notification.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| id | String | Notification ID. |

##### Returns

Null or Promise of [DefaultResponse](#DefaultResponse), [ModelError](lib-bb-model-errors.html#ModelError) - *Returns void
if notification is in process or whether a Promise that resolves data of
[DefaultResponse](#DefaultResponse) on success or rejects with data of
[ModelError](lib-bb-model-errors.html#ModelError)*

##### Fires Events:

> bb.event.number.of.unread.changed


### <a name="NotificationsBadgeController_isNotificationUnRead"></a>*#isNotificationUnRead(item)*

Check notification has read status.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| item | [NotificationsData.NotificationItem](data-bb-notifications-http-ng.html#NotificationsData.NotificationItem) | A notification |

##### Returns

Boolean - *True if notification is read or false if notification is unread*

### <a name="NotificationsBadgeController_$onInit"></a>*#$onInit()*

Widget initialization logic - called automatically in the angular cycle.

### <a name="NotificationsBadgeController_$onDestroy"></a>*#$onDestroy()*

Widget destroy logic - called automatically in the angular cycle.

## Type Definitions


### <a name="DefaultResponse"></a>*DefaultResponse*


**Type:** *[Response](data-bb-notifications-http-ng.html#Response)*


### <a name="loadResponse"></a>*loadResponse*


**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| data | Array of [NotificationsData.NotificationItem](data-bb-notifications-http-ng.html#NotificationsData.NotificationItem) | Array of notifications |
| totalCount | Number | Total count of notifications if needed |
| cursor | Number (optional) | Cursor is used in request parameters as an alternative for specifying 'from' this allows to point to the record to start the selection from |

### <a name="loadUnreadCountResponse"></a>*loadUnreadCountResponse*


**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| unread | Number | Total count of unread notifications |

---

## Templates

* *template.ng.html*

---
