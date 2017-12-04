# ext-bbm-contact-form-ng


Version: **1.0.161**

Mobile extension for a contact form in the Contacts widget.

## Imports

* lib-bbm-plugins
* ui-bb-i18n-ng
* ui-bb-iban-ng
* ui-bbm-textfield-ng
* vendor-bb-angular-ng-messages

---

## Example

```javascript
<!-- Contact widget model.xml -->
<property name="extension" viewHint="text-input,admin">
  <value type="string">ext-bbm-contact-form-ng</value>
</property>
```

## Table of Contents
- **Helpers**<br/>    <a href="#Helpers_saveContact">#saveContact($ctrl, contactForm)</a><br/>
- **Hooks**<br/>    <a href="#Hooks_deleteContact">#deleteContact(contact, confirm, cancel)</a><br/>

---

## Helpers

Helpers for ext-bbm-contact-form-ng

### <a name="Helpers_saveContact"></a>*#saveContact($ctrl, contactForm)*

Helper to save a contact and reset the form

| Parameter | Type | Description |
| :-- | :-- | :-- |
| $ctrl | Object | Angular controller instance |
| contactForm | Object | Angular form instance |

##### Returns

Promise of [void](#void) - *Promise which gets resolved once contact is saved and the form
  is reset, or rejected in case of errors*

---

## Hooks

Hooks for widget-bb-contact-ng

### <a name="Hooks_deleteContact"></a>*#deleteContact(contact, confirm, cancel)*

Hook for a handling a confirmation process of a contact deleting.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| contact | Object | Contact data |
| confirm | Function | Confirms delete |
| cancel | Function | Cancels delete |

##### Returns

Promise of [void](#void) - *Promise which gets resolved once contact deleting
  is confirmed or cancelled*
