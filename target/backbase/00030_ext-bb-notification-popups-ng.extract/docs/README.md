# ext-bb-notification-popups-ng


Version: **1.1.28**

Default extension for notification popups.

## Imports

* ui-bb-date-label-filter-ng
* ui-bb-i18n-ng
* ui-bb-message-ng
* vendor-bb-angular-ng-aria
* vendor-bb-uib-alert

---

## Example

```javascript
<!-- widget's model.xml -->
<property name="extension" viewHint="text-input,admin">
 <value type="string">ext-bb-notification-popups-ng</value>
</property>
```

## Table of Contents
- **ext-bb-notification-popups-ng**<br/>    <a href="#ext-bb-notification-popups-nggetLevelIcon">getLevelIcon(level)</a><br/>    <a href="#ext-bb-notification-popups-nggetDateLabel">getDateLabel(item)</a><br/>    <a href="#ext-bb-notification-popups-nggetVisibleLinesLength">getVisibleLinesLength(item)</a><br/>
- **Type Definitions**<br/>    <a href="#DateLabelKey">DateLabelKey</a><br/>    <a href="#levelIconClass">levelIconClass</a><br/>    <a href="#LinesLength">LinesLength</a><br/>

---

### <a name="ext-bb-notification-popups-nggetLevelIcon"></a>*getLevelIcon(level)*

Helper to get severity level icon

| Parameter | Type | Description |
| :-- | :-- | :-- |
| level | String | severity level |

##### Returns

String - *Severity level icon class*

---

### <a name="ext-bb-notification-popups-nggetDateLabel"></a>*getDateLabel(item)*

Helper to get date label

| Parameter | Type | Description |
| :-- | :-- | :-- |
| item | Object | Notification object |

##### Returns

String - *Date label*

---

### <a name="ext-bb-notification-popups-nggetVisibleLinesLength"></a>*getVisibleLinesLength(item)*

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


### <a name="levelIconClass"></a>*levelIconClass*

Level classes enum

**Type:** *Enumeration*


### <a name="LinesLength"></a>*LinesLength*

Lines length enum

**Type:** *Enumeration*


---
