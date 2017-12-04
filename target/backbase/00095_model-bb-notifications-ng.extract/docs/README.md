# model-bb-notifications-ng


Version: **1.2.78**

Notification widgets model.

## Imports

* data-bb-notifications-http-ng
* lib-bb-event-bus-ng
* lib-bb-model-errors
* lib-bb-widget-ng
* vendor-bb-angular

---

## Example

```javascript
import modelNotificationsModuleKey, { modelNotificationsKey } from 'model-bb-notifications-ng';

angular
  .module('ExampleModule', [
    modelNotificationsModuleKey,
  ])
  .factory('someFactory', [
    modelNotificationsKey,
    // into
    function someFactory(notificationsModel) {
      // ...
    },
  ]);
```

## Table of Contents
- **NotificationModel**<br/>    <a href="#NotificationModel_load">#load(params)</a><br/>    <a href="#NotificationModel_loadStream">#loadStream(params)</a><br/>    <a href="#NotificationModel_create">#create(params)</a><br/>    <a href="#NotificationModel_loadUnreadCount">#loadUnreadCount()</a><br/>    <a href="#NotificationModel_putReadRecord">#putReadRecord(notificationID, data)</a><br/>    <a href="#NotificationModel_DefaultResponse">#DefaultResponse(notificationID)</a><br/>    <a href="#NotificationModel_getNotificationPreferences">#getNotificationPreferences()</a><br/>    <a href="#NotificationModel_stopPolling">#stopPolling(ref)</a><br/>    <a href="#NotificationModel_initPolling">#initPolling(options)</a><br/>
- **Type Definitions**<br/>    <a href="#PollingOptions">PollingOptions</a><br/>    <a href="#DefaultResponse">DefaultResponse</a><br/>    <a href="#loadResponse">loadResponse</a><br/>    <a href="#loadStreamResponse">loadStreamResponse</a><br/>    <a href="#loadUnreadCountResponse">loadUnreadCountResponse</a><br/>

## Exports


## PollingType

Object with polling types

---

## Preference

Enum for preferences.
Usage of "itemsPerPage" is deprecated in favor of "pageSize"

---

## Event

Enum for events

---

## PollingType

Enum for polling types

---

## NotificationModel

Model factory for widget-bb-notification-center-ng, widget-bb-notification-badge-ng,
widget-bb-notification-popups-ng, widget-bbm-notification-center-ng

### <a name="NotificationModel_load"></a>*#load(params)*

Load notifications.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| params | Object (optional) | Optional configuration object. |

##### Returns

Promise of [loadResponse](#loadResponse), [ModelError](lib-bb-model-errors.html#ModelError) - *Resolves data of
[loadResponse](#loadResponse) on success or rejects with data of
[ModelError](lib-bb-model-errors.html#ModelError)*

### <a name="NotificationModel_loadStream"></a>*#loadStream(params)*

Load notifications stream.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| params | Object (optional) | Optional configuration object. |

##### Returns

Promise of [loadStreamResponse](#loadStreamResponse), [ModelError](lib-bb-model-errors.html#ModelError) - *Resolves data of
[loadStreamResponse](#loadStreamResponse) on success or rejects with data of
[ModelError](lib-bb-model-errors.html#ModelError)*

### <a name="NotificationModel_create"></a>*#create(params)*

Create notification.
See [NotificationsData.CreateNotificationsCommand](data-bb-notifications-http-ng.html#NotificationsData.CreateNotificationsCommand)
to get information about configuration object

| Parameter | Type | Description |
| :-- | :-- | :-- |
| params | Object | Configuration object to create notification |

##### Returns

Promise of [DefaultResponse](#DefaultResponse), [ModelError](lib-bb-model-errors.html#ModelError) - *Resolves data of
[DefaultResponse](#DefaultResponse) on success or rejects with data of
[ModelError](lib-bb-model-errors.html#ModelError)*

### <a name="NotificationModel_loadUnreadCount"></a>*#loadUnreadCount()*

Load unread count of notifications.

##### Returns

Promise of [loadUnreadCountResponse](#loadUnreadCountResponse), [ModelError](lib-bb-model-errors.html#ModelError) - *Resolves
data of [loadUnreadCountResponse](#loadUnreadCountResponse) on success or rejects with data of
[ModelError](lib-bb-model-errors.html#ModelError)*

### <a name="NotificationModel_putReadRecord"></a>*#putReadRecord(notificationID, data)*

Set read/unread status of notification.
See [NotificationsData.ChangeAcknowledgementCommand](data-bb-notifications-http-ng.html#NotificationsData.ChangeAcknowledgementCommand)
to get information about configuration object

| Parameter | Type | Description |
| :-- | :-- | :-- |
| notificationID | String | Notification ID |
| data | Object | Object with new read status |

##### Returns

Promise of [DefaultResponse](#DefaultResponse), [ModelError](lib-bb-model-errors.html#ModelError) - *Resolves data of
[DefaultResponse](#DefaultResponse) on success or rejects with data of
[ModelError](lib-bb-model-errors.html#ModelError)*

### <a name="NotificationModel_DefaultResponse"></a>*#DefaultResponse(notificationID)*

Delete notification.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| notificationID | String | Notification ID |

##### Returns

Promise of [DefaultResponse](#DefaultResponse), [ModelError](lib-bb-model-errors.html#ModelError) - *Resolves data of
[DefaultResponse](#DefaultResponse) on success or rejects with data of
[ModelError](lib-bb-model-errors.html#ModelError)*

### <a name="NotificationModel_getNotificationPreferences"></a>*#getNotificationPreferences()*

Getting notifications preferences from widget. Usage of "itemsPerPage" is deprecated
in favor of "pageSize"

##### Returns

Object - *Preferences object*

### <a name="NotificationModel_stopPolling"></a>*#stopPolling(ref)*

Stop polling.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| ref | String | Polling (interval) reference |

### <a name="NotificationModel_initPolling"></a>*#initPolling(options)*

Subscribe to stream notifications loading.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| options | [PollingOptions](#PollingOptions) | Subscribe options |

##### Returns

String - *Polling (interval) reference*

## Type Definitions


### <a name="PollingOptions"></a>*PollingOptions*


**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| type | String | Polling type |
| pollingInterval | Number | Polling interval time |
| params | Object (optional) | Optional parameters that apply to polling method |

### <a name="DefaultResponse"></a>*DefaultResponse*


**Type:** *[Response](data-bb-notifications-http-ng.html#Response)*


### <a name="loadResponse"></a>*loadResponse*


**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| data | Array of [NotificationsData.NotificationItem](data-bb-notifications-http-ng.html#NotificationsData.NotificationItem) | Array of notifications |
| totalCount | Number | Total count of notifications if needed |
| cursor | Number (optional) | Cursor is used in request parameters as an alternative for specifying 'from' this allows to point to the record to start the selection from |

### <a name="loadStreamResponse"></a>*loadStreamResponse*


**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| data | Array of [NotificationsData.NotificationItem](data-bb-notifications-http-ng.html#NotificationsData.NotificationItem) | Array of notifications |

### <a name="loadUnreadCountResponse"></a>*loadUnreadCountResponse*


**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| unread | Number | Total count of unread notifications |

---
