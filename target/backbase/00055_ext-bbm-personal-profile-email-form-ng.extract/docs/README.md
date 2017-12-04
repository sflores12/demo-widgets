# ext-bbm-personal-profile-email-form-ng


Version: **1.0.17**

Mobile extension for a personal profile email form in the Mobile Personal Profile widget.

## Imports

* lib-bbm-plugins
* ui-bb-i18n-ng
* ui-bbm-switch-ng
* ui-bbm-textfield-ng

---

## Example

```javascript
<!-- Mobile Personal Profile widget model.xml -->
<property name="extension" viewHint="text-input,admin">
  <value type="string">ext-bbm-personal-profile-email-form-ng</value>
</property>
```

## Table of Contents
- **Helpers**<br/>    <a href="#Helpers_onInit">#onInit(ctrl)</a><br/>    <a href="#Helpers_isFormValid">#isFormValid(form)</a><br/>

---

## Helpers

Helpers for ext-bbm-personal-profile-email-form-ng

### <a name="Helpers_onInit"></a>*#onInit(ctrl)*

Helper which adds event listener on delete.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| ctrl | [FormController](widget-bbm-personal-profile-ng.html#FormController) | FormController instance. |

### <a name="Helpers_isFormValid"></a>*#isFormValid(form)*

Helper to get the form validation status.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| form | Object |  |

##### Returns

Boolean - *validation status.*
