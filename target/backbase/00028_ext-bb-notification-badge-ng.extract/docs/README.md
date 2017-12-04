# ext-bb-notification-badge-ng


Version: **2.2.28**

Default extension for notifications badge.

## Imports

* ui-bb-confirm-ng
* ui-bb-date-label-filter-ng
* ui-bb-i18n-ng
* ui-bb-load-more-ng
* ui-bb-loading-overlay-ng
* ui-bb-message-ng
* ui-bb-substitute-error-ng
* vendor-bb-angular-ng-aria
* vendor-bb-uib-popover

---

## Example

```javascript
<!-- widget's model.xml -->
<property name="extension" viewHint="text-input,admin">
 <value type="string">ext-bb-notification-badge-ng</value>
</property>
```

## Table of Contents
- **ext-bb-notification-badge-ng**<br/>    <a href="#ext-bb-notification-badge-nggetLevelIcon">getLevelIcon(level)</a><br/>    <a href="#ext-bb-notification-badge-nggetDateLabel">getDateLabel(item, format)</a><br/>    <a href="#ext-bb-notification-badge-nggetFormattedDate">getFormattedDate(item, format)</a><br/>    <a href="#ext-bb-notification-badge-nggetLevelTitle">getLevelTitle(level)</a><br/>    <a href="#ext-bb-notification-badge-nggetVisibleLinesLength">getVisibleLinesLength(item)</a><br/>
- **Type Definitions**<br/>    <a href="#DateLabelKey">DateLabelKey</a><br/>    <a href="#Level">Level</a><br/>    <a href="#LinesLength">LinesLength</a><br/>

---

### <a name="ext-bb-notification-badge-nggetLevelIcon"></a>*getLevelIcon(level)*

Helper to get severity level icon

| Parameter | Type | Description |
| :-- | :-- | :-- |
| level | String | severity level |

##### Returns

String - *Severity level icon class*

---

### <a name="ext-bb-notification-badge-nggetDateLabel"></a>*getDateLabel(item, format)*

Helper to get date label

| Parameter | Type | Description |
| :-- | :-- | :-- |
| item | Object | Notification object |
| format | Object (optional) | Date format |

##### Returns

String - *Date label*

---

### <a name="ext-bb-notification-badge-nggetFormattedDate"></a>*getFormattedDate(item, format)*

Helper to get date string

| Parameter | Type | Description |
| :-- | :-- | :-- |
| item | Object | Notification object |
| format | Object (optional) | Date format |

##### Returns

String - *Date string*

---

### <a name="ext-bb-notification-badge-nggetLevelTitle"></a>*getLevelTitle(level)*

Helper to get severity level title

| Parameter | Type | Description |
| :-- | :-- | :-- |
| level | String | severity level |

##### Returns

String - *Severity level title*

---

### <a name="ext-bb-notification-badge-nggetVisibleLinesLength"></a>*getVisibleLinesLength(item)*

Helper to get visible lines length

| Parameter | Type | Description |
| :-- | :-- | :-- |
| item | Object | Notification object |

##### Returns

Number - *Visible lines length*

## Type Definitions


### <a name="DateLabelKey"></a>*DateLabelKey*

Date label enum

**Type:** *Enumeration*


### <a name="Level"></a>*Level*

Level objects enum

**Type:** *Enumeration*


### <a name="LinesLength"></a>*LinesLength*

Lines length enum

**Type:** *Enumeration*


---
