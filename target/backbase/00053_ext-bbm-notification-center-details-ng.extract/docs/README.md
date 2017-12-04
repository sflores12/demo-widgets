# ext-bbm-notification-center-details-ng


Version: **1.0.36**

Mobile extension for a notiication center details.

## Imports

* lib-bbm-plugins
* ui-bb-date-label-filter-ng
* ui-bb-i18n-ng
* ui-bb-list-ng

---

## Example

```javascript
<!-- Contact widget model.xml -->
<property name="extension" viewHint="text-input,admin">
  <value type="string">ext-bbm-notification-details-ng</value>
</property>
```

## Table of Contents
- **Helpers**<br/>    <a href="#Helpers_getLevelIcon">#getLevelIcon(level)</a><br/>    <a href="#Helpers_getDateLabel">#getDateLabel(notification)</a><br/>    <a href="#Helpers_onInit">#onInit(ctrl)</a><br/>

---

## Helpers

Helpers for ext-bbm-notification-center-details-ng

### <a name="Helpers_getLevelIcon"></a>*#getLevelIcon(level)*

Returns CSS class for icon according to the given level.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| level | String | Notification level |

##### Returns

String - **

### <a name="Helpers_getDateLabel"></a>*#getDateLabel(notification)*

Returns a date label for the given notification.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| notification | [Notification](model-bb-notifications-ng.html#Notification) | Notification |

##### Returns

String - **

### <a name="Helpers_onInit"></a>*#onInit(ctrl)*

Init lifecycle hook. Adds event listeners for native toolbar buttons.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| ctrl | [DetailsController](widget-bbm-notification-center-ng.html#DetailsController) | DetailsController instance. |
