# ext-bbm-notification-center-list-ng


Version: **1.0.50**

Mobile extension for a notiication center list.

## Imports

* ui-bb-date-label-filter-ng
* ui-bb-i18n-ng
* ui-bbm-scroll-ng

---

## Example

```javascript
<!-- Contact widget model.xml -->
<property name="extension" viewHint="text-input,admin">
  <value type="string">ext-bbm-notification-list-ng</value>
</property>
```

## Table of Contents
- **Helpers**<br/>    <a href="#Helpers_getLevelIcon">#getLevelIcon(level)</a><br/>    <a href="#Helpers_getDateLabel">#getDateLabel(notification)</a><br/>    <a href="#Helpers_hasNotifications">#hasNotifications(ctrl)</a><br/>    <a href="#Helpers_showLoadingState">#showLoadingState(ctrl)</a><br/>    <a href="#Helpers_showLoadMoreLoading">#showLoadMoreLoading(ctrl)</a><br/>    <a href="#Helpers_showLoadMore">#showLoadMore(ctrl)</a><br/>    <a href="#Helpers_showErrorState">#showErrorState(ctrl)</a><br/>    <a href="#Helpers_showEmptyState">#showEmptyState(ctrl)</a><br/>

---

## Helpers

Helpers for ext-bbm-notification-center-list-ng

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
| notification | [Notification](model-bb-notifications-ng.html#Notification) |  |

##### Returns

String - **

### <a name="Helpers_hasNotifications"></a>*#hasNotifications(ctrl)*

Checks if there are notifications.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| ctrl | [ListController](widget-bbm-notification-center-ng.html#ListController) |  |

##### Returns

Boolean - **

### <a name="Helpers_showLoadingState"></a>*#showLoadingState(ctrl)*

Checks for the loading state.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| ctrl | [ListController](widget-bbm-notification-center-ng.html#ListController) |  |

##### Returns

Boolean - **

### <a name="Helpers_showLoadMoreLoading"></a>*#showLoadMoreLoading(ctrl)*

Checks for the load more's loading state.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| ctrl | [ListController](widget-bbm-notification-center-ng.html#ListController) |  |

##### Returns

Boolean - **

### <a name="Helpers_showLoadMore"></a>*#showLoadMore(ctrl)*

Checks for the load more states.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| ctrl | [ListController](widget-bbm-notification-center-ng.html#ListController) |  |

##### Returns

Boolean - **

### <a name="Helpers_showErrorState"></a>*#showErrorState(ctrl)*

Checks for the error state.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| ctrl | [ListController](widget-bbm-notification-center-ng.html#ListController) |  |

##### Returns

Boolean - **

### <a name="Helpers_showEmptyState"></a>*#showEmptyState(ctrl)*

Checks for the empty state.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| ctrl | [ListController](widget-bbm-notification-center-ng.html#ListController) |  |

##### Returns

Boolean - **
