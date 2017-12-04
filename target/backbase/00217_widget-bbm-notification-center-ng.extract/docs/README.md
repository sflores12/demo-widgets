# widget-bbm-notification-center-ng


Version: **1.0.50**

Mobile notification center widget.

## Imports

* lib-bb-event-bus-ng
* lib-bb-intent-ng
* lib-bb-storage-ng
* lib-bb-widget-extension-ng
* lib-bb-widget-ng
* model-bb-notifications-ng
* vendor-bb-angular

---

## Example

```javascript
<!-- Notifications list template -->
<div data-ng-controller="ListController as $ctrl">
 <ul data-ng-repeat="notification in $ctrl.state.notifications.data track by notification.id">
   <li>{{notification.id}}</li>
 </ul>
</div>

<!-- Notification details template -->
<div data-ng-controller="DetailsController as $ctrl">
 <h2>{{$ctrl.state.selectedNotification.title}}</h2>
 <p>
   {{$ctrl.state.selectedNotification.message}}
 </p>
</div>
```

## Table of Contents
- **DetailsController**<br/>    <a href="#DetailsController_deleteNotification">#deleteNotification()</a><br/>    <a href="#DetailsController_$onInit">#$onInit()</a><br/>    <a href="#DetailsController_setNotificationRead">#setNotificationRead(notificationId, readStatus)</a><br/>    <a href="#DetailsController_changeNotificationRead">#changeNotificationRead(notificationId)</a><br/>
- **ListController**<br/>    <a href="#ListController_loadMoreNotifications">#loadMoreNotifications()</a><br/>    <a href="#ListController_showNotificationsDetails">#showNotificationsDetails(id)</a><br/>    <a href="#ListController_hasNotifications">#hasNotifications()</a><br/>    <a href="#ListController_$onInit">#$onInit()</a><br/>
- **Hooks**<br/>    <a href="#Hooks_processNotifications">#processNotifications(notifications)</a><br/>

---

## DetailsController

Notification center details controller.
Loads notification on start.

| Injector Key |
| :-- |
| *DetailsController* |


### <a name="DetailsController_deleteNotification"></a>*#deleteNotification()*

Deletes the selected notification.

##### Returns

Promise - **

### <a name="DetailsController_$onInit"></a>*#$onInit()*

AngularJS Lifecycle hook used to initialize the controller.

Preloads the notification details and prepares the view model.

##### Fires Events:

> cxp.item.loaded

> bb.item.loaded


### <a name="DetailsController_setNotificationRead"></a>*#setNotificationRead(notificationId, readStatus)*

Set notification read status

| Parameter | Type | Description |
| :-- | :-- | :-- |
| notificationId | String | Id of the notification |
| readStatus | Boolean | read status of notification |

### <a name="DetailsController_changeNotificationRead"></a>*#changeNotificationRead(notificationId)*

Change notification read status

| Parameter | Type | Description |
| :-- | :-- | :-- |
| notificationId | String | Id of the notification |

---

## ListController

Notification center list controller.
Loads notifications on start.

| Injector Key |
| :-- |
| *ListController* |


### <a name="ListController_loadMoreNotifications"></a>*#loadMoreNotifications()*

Loads more notifications.

##### Returns

Promise of Array - **

### <a name="ListController_showNotificationsDetails"></a>*#showNotificationsDetails(id)*

Handles the intent to show the notification details


| Parameter | Type | Description |
| :-- | :-- | :-- |
| id | String | Id of the notification |

### <a name="ListController_hasNotifications"></a>*#hasNotifications()*

Checks if there are notifications on the view model

##### Returns

Boolean - **

### <a name="ListController_$onInit"></a>*#$onInit()*

AngularJS Lifecycle hook used to initialize the controller.

Preloads notifications and prepares the view model.

##### Fires Events:

> cxp.item.loaded

> bb.item.loaded


---

## Hooks

Hooks for widget-bbm-notification-center-ng.

### <a name="Hooks_processNotifications"></a>*#processNotifications(notifications)*

Processes the list of notifications.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| notifications | Array of [Notification](model-bb-notifications-ng.html#Notification) | Original list of notifications from the model. |

##### Returns

Array of [Notification](model-bb-notifications-ng.html#Notification) - *Processed list of notifications.*

## Templates

* *template.ng.html*

---
