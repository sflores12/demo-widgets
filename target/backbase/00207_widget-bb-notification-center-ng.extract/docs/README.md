# widget-bb-notification-center-ng


Version: **1.5.61**

Notifications center widget.

## Imports

* lib-bb-event-bus-ng
* lib-bb-intent-ng
* lib-bb-model-errors
* model-bb-notifications-ng
* vendor-bb-angular

---

## Example

```javascript
<div ng-controller="NotificationsCenterController as $ctrl">
 <ul ng-repeat="notification in $ctrl.notifications">
   <li>{{notification.id}}</li>
 </ul>
</div>
```

## Table of Contents
- **NotificationCenterController**<br/>    <a href="#NotificationCenterController_changePage">#changePage(params)</a><br/>    <a href="#NotificationCenterController_filter">#filter(params)</a><br/>    <a href="#NotificationCenterController_currentPage">#currentPage</a><br/>    <a href="#NotificationCenterController_totalItems">#totalItems</a><br/>    <a href="#NotificationCenterController_notifications">#notifications</a><br/>    <a href="#NotificationCenterController_isNotificationsLoading">#isNotificationsLoading</a><br/>    <a href="#NotificationCenterController_isInitialLoading">#isInitialLoading</a><br/>    <a href="#NotificationCenterController_initialError">#initialError</a><br/>    <a href="#NotificationCenterController_status">#status</a><br/>    <a href="#NotificationCenterController_isFilterApplied">#isFilterApplied</a><br/>    <a href="#NotificationCenterController_hasNotifications">#hasNotifications()</a><br/>    <a href="#NotificationCenterController_hasMore">#hasMore()</a><br/>    <a href="#NotificationCenterController_dismissTime">#dismissTime</a><br/>    <a href="#NotificationCenterController_pageSize">#pageSize</a><br/>    <a href="#NotificationCenterController_itemsPerPage">#itemsPerPage</a><br/>    <a href="#NotificationCenterController_maxNavPages">#maxNavPages</a><br/>    <a href="#NotificationCenterController_paginationType">#paginationType</a><br/>
- **Type Definitions**<br/>    <a href="#DefaultResponse">DefaultResponse</a><br/>    <a href="#loadResponse">loadResponse</a><br/>

---

## Event

Widget events enum

---

## StatusClass

List of css-classes to be used for status notification

---

## Message

Widget static messages for the template

---

## NotificationCenterController

Notification center controller.

| Injector Key |
| :-- |
| *NotificationCenterController* |


### <a name="NotificationCenterController_changePage"></a>*#changePage(params)*

Changes page of displayed notifications.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| params | Object | Pagination params. |

##### Returns

Promise of [loadResponse](#loadResponse), [ModelError](lib-bb-model-errors.html#ModelError) - *Resolves data of
[loadResponse](#loadResponse) on success or rejects with data of
[ModelError](lib-bb-model-errors.html#ModelError)*

### <a name="NotificationCenterController_filter"></a>*#filter(params)*

Filters notifications.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| params | Object | Filter params. |

##### Returns

Promise of [loadResponse](#loadResponse), [ModelError](lib-bb-model-errors.html#ModelError) - *Resolves data of
[loadResponse](#loadResponse) on success or rejects with data of
[ModelError](lib-bb-model-errors.html#ModelError)*
### <a name="NotificationCenterController_currentPage"></a>*#currentPage*

Current page for pagination directive.

**Type:** *Number*

### <a name="NotificationCenterController_totalItems"></a>*#totalItems*

The number of total available notifications.

**Type:** *Number*

### <a name="NotificationCenterController_notifications"></a>*#notifications*

The array of notifications. Empty if no notifications were received.

**Type:** *Array of [NotificationsData.NotificationItem](data-bb-notifications-http-ng.html#NotificationsData.NotificationItem)*

### <a name="NotificationCenterController_isNotificationsLoading"></a>*#isNotificationsLoading*

True if notifications is loading.

**Type:** *Boolean*

### <a name="NotificationCenterController_isInitialLoading"></a>*#isInitialLoading*

True if widget is loading.

**Type:** *Boolean*

### <a name="NotificationCenterController_initialError"></a>*#initialError*

Object with error text after initial.

**Type:** *String*

### <a name="NotificationCenterController_status"></a>*#status*

Status message object of Notification Center.

**Type:** *Object*

### <a name="NotificationCenterController_isFilterApplied"></a>*#isFilterApplied*

True is filter is applied

**Type:** *Boolean*


### <a name="NotificationCenterController_hasNotifications"></a>*#hasNotifications()*

Checks the list of notifications is empty or not.

##### Returns

Boolean - *False if notifications list is empty*

### <a name="NotificationCenterController_hasMore"></a>*#hasMore()*

Checks if server has more notification to load

##### Returns

Boolean - *true if has more notifications to load*
### <a name="NotificationCenterController_dismissTime"></a>*#dismissTime*

Time for dismiss status messages from server

**Type:** *Number*

### <a name="NotificationCenterController_pageSize"></a>*#pageSize*

Notifications per page

**Type:** *Number*

### <a name="NotificationCenterController_itemsPerPage"></a>*#itemsPerPage*


#### Deprecated: Deprecated in favor of pageSize property
Notifications per page

**Type:** *Number*

### <a name="NotificationCenterController_maxNavPages"></a>*#maxNavPages*

Maximum number of displayed pages in pagination component

**Type:** *Number*

### <a name="NotificationCenterController_paginationType"></a>*#paginationType*

Type of displayed pagination component

**Type:** *Number*


---

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

---

## Templates

* *template.ng.html*

---
