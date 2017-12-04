# ext-bb-manage-payment-orders-ng


Version: **1.0.1**

Payment order overview extension.

## Imports

* ui-bb-date-label-filter-ng
* ui-bb-empty-state-ng
* ui-bb-i18n-ng
* ui-bb-load-more-ng
* ui-bb-loading-indicator-ng
* ui-bb-loading-overlay-ng
* ui-bb-substitute-error-ng
* vendor-bb-angular-ng-aria

---

## Example

```javascript
<!-- payment order widget model.xml -->
<property name="extension" viewHint="text-input,admin">
 <value type="string">ext-bb-manage-payment-orders-ng</value>
</property>
```

## Table of Contents
- **ext-bb-manage-payment-orders-ng**<br/>    <a href="#ext-bb-manage-payment-orders-ngdateFormat">dateFormat</a><br/>    <a href="#ext-bb-manage-payment-orders-ngStatuses">Statuses</a><br/>    <a href="#ext-bb-manage-payment-orders-ngdateLabel">dateLabel(label)</a><br/>

---
### <a name="ext-bb-manage-payment-orders-ngdateFormat"></a>*dateFormat*

Date Format

**Type:** *String*


---

## TimePeriod

Date labels enum

---
### <a name="ext-bb-manage-payment-orders-ngStatuses"></a>*Statuses*

An array with the statuses, payments with which should be displayed.

**Type:** *Array*


---

### <a name="ext-bb-manage-payment-orders-ngdateLabel"></a>*dateLabel(label)*

Returns either label like now, today or yesterday or the actual date

| Parameter | Type | Description |
| :-- | :-- | :-- |
| label | String | date |

##### Returns

String - **

---

## statusLabel

Contains translated strings of payment modes
