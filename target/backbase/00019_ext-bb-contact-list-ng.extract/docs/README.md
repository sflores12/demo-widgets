# ext-bb-contact-list-ng


Version: **1.1.9**

Default extension for contact widget.

## Imports

* ui-bb-account-card
* ui-bb-confirm-ng
* ui-bb-empty-state-ng
* ui-bb-i18n-ng
* ui-bb-iban-ng
* ui-bb-inline-status-ng
* ui-bb-load-more-ng
* ui-bb-loading-indicator-ng
* ui-bb-loading-overlay-ng
* ui-bb-notification-stripe-ng
* ui-bb-search-box-ng
* ui-bb-substitute-error-ng
* ui-bb-track-form-changes-ng
* vendor-bb-angular-ng-aria
* vendor-bb-angular-ng-messages

---

## Example

```javascript
<!-- payment widget model.xml -->
<property name="extension" viewHint="text-input,admin">
 <value type="string">ext-bb-contact-list-ng</value>
</property>

Usage of ui-bb-account-card component in template

<ui-bb-account-card
  account-name="contact.name"
  account-image="contact.image
  account-number="contact.IBAN"
  show-avatar="true">
</ui-bb-account-card>
```

## Table of Contents
- **ext-bb-contact-list-ng**<br/>    <a href="#ext-bb-contact-list-ngdeleteContact">deleteContact(contact, confirm)</a><br/>    <a href="#ext-bb-contact-list-ngprocessContacts">processContacts(contacts)</a><br/>    <a href="#ext-bb-contact-list-nggetSelectedContact">getSelectedContact(contacts, contact)</a><br/>

---

---

### <a name="ext-bb-contact-list-ngdeleteContact"></a>*deleteContact(contact, confirm)*

Delete contact action handler

| Parameter | Type | Description |
| :-- | :-- | :-- |
| contact | Object | Contact object |
| confirm | Function | Called to confirm delete action |

---

### <a name="ext-bb-contact-list-ngprocessContacts"></a>*processContacts(contacts)*

Extension hook for pre-processing contacts

| Parameter | Type | Description |
| :-- | :-- | :-- |
| contacts | Array |  |

##### Returns

Array - *contacts Array of contacts*

---

### <a name="ext-bb-contact-list-nggetSelectedContact"></a>*getSelectedContact(contacts, contact)*

Selects the contact from contacts by id
Or returns null if nothing is found

| Parameter | Type | Description |
| :-- | :-- | :-- |
| contacts | Array | Array of contacts |
| contact | Object | Contact object |

##### Returns

Object or Null - *Returns found contact or null*
