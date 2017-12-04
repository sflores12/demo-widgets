# ext-bbm-initiate-payment-schedule-ng


Version: **1.0.112**

Mobile extension for the payment schedule view in the Mobile initiate payment widget.

## Imports

* lib-bbm-plugins
* ui-bb-date-label-filter-ng
* ui-bb-i18n-ng
* ui-bbm-datepicker-ng
* ui-bbm-dropdown-ng
* ui-bbm-textfield-ng

---

## Example

```javascript
<!-- File model.xml of widget-bbm-initiate-payment-ng -->
<property name="extension" viewHint="text-input,admin">
  <value type="string">ext-bbm-initiate-payment-schedule-ng</value>
</property>
```

## Table of Contents
- **Helpers**<br/>    <a href="#Helpers_getFrequencyOptions">#getFrequencyOptions()</a><br/>    <a href="#Helpers_getMinimumRecurrenceEndDate">#getMinimumRecurrenceEndDate()</a><br/>    <a href="#Helpers_getMinimumExecutionDate">#getMinimumExecutionDate()</a><br/>    <a href="#Helpers_getMinimumStartDate">#getMinimumStartDate()</a><br/>    <a href="#Helpers_getRecurrenceEndingOptions">#getRecurrenceEndingOptions()</a><br/>    <a href="#Helpers_getStartDateLabel">#getStartDateLabel(ctrl)</a><br/>    <a href="#Helpers_getStartDateTitle">#getStartDateTitle(ctrl)</a><br/>    <a href="#Helpers_isPaymentRecurring">#isPaymentRecurring(ctrl)</a><br/>    <a href="#Helpers_isRecurrenceRepeatVisible">#isRecurrenceRepeatVisible(ctrl)</a><br/>    <a href="#Helpers_isRecurrenceEndDateVisible">#isRecurrenceEndDateVisible(ctrl)</a><br/>    <a href="#Helpers_onScheduleFormSubmit">#onScheduleFormSubmit(ctrl)</a><br/>
- **Type Definitions**<br/>    <a href="#PaymentFrequency">PaymentFrequency</a><br/>

---

## Helpers

Helpers for ext-bbm-initiate-payment-schedule-ng

### <a name="Helpers_getFrequencyOptions"></a>*#getFrequencyOptions()*

Returns a list of frequency options.

##### Returns

Array of [PaymentFrequency](#PaymentFrequency) - **

### <a name="Helpers_getMinimumRecurrenceEndDate"></a>*#getMinimumRecurrenceEndDate()*

Returns a minimum allowed date to start a recurring payment.

##### Returns

String - **

### <a name="Helpers_getMinimumExecutionDate"></a>*#getMinimumExecutionDate()*

Returns a minimum allowed date to make a payment.

##### Returns

String - **

### <a name="Helpers_getMinimumStartDate"></a>*#getMinimumStartDate()*

Returns a minimum allowed date to start a recurring payment.

##### Returns

String - **

### <a name="Helpers_getRecurrenceEndingOptions"></a>*#getRecurrenceEndingOptions()*

Returns a list of possible recurring payment endings.

##### Returns

Array of [RecurrenceEnding](#RecurrenceEnding) - **

### <a name="Helpers_getStartDateLabel"></a>*#getStartDateLabel(ctrl)*

Returns the label of the start date field.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| ctrl | [ScheduleController](#ScheduleController) | Instance of the controller |

##### Returns

String - **

### <a name="Helpers_getStartDateTitle"></a>*#getStartDateTitle(ctrl)*

Returns the title of the start date datepicker.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| ctrl | [ScheduleController](#ScheduleController) | Instance of the controller |

##### Returns

String - **

### <a name="Helpers_isPaymentRecurring"></a>*#isPaymentRecurring(ctrl)*

Checks whether the payment is recurring.
Returns true, if the payment is recurring, false otherwise.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| ctrl | [ScheduleController](#ScheduleController) |  |

##### Returns

Boolean - **

### <a name="Helpers_isRecurrenceRepeatVisible"></a>*#isRecurrenceRepeatVisible(ctrl)*

Defines whether the recurrence repeat field should be visible.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| ctrl | [ScheduleController](#ScheduleController) |  |

##### Returns

Boolean - **

### <a name="Helpers_isRecurrenceEndDateVisible"></a>*#isRecurrenceEndDateVisible(ctrl)*

Defines whether the recurrence end date field should be visible.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| ctrl | [ScheduleController](#ScheduleController) |  |

##### Returns

Boolean - **

### <a name="Helpers_onScheduleFormSubmit"></a>*#onScheduleFormSubmit(ctrl)*

Handles submit of the schedule payment form.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| ctrl | [ScheduleController](#ScheduleController) | Instance of the controller |

##### Returns

String - **

## Type Definitions


### <a name="PaymentFrequency"></a>*PaymentFrequency*


**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| id | String | Frequency identifier |
| text | String | Frequency as a text to be displayed |

---
