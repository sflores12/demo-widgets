# model-bb-contact-ng


Version: **4.1.80**

Contact widget model.

## Imports

* data-bb-contact-http-ng
* lib-bb-model-errors
* lib-bb-storage-ng
* lib-bb-widget-ng
* vendor-bb-angular

---

## Example

```javascript
import modelContactModuleKey,
 { modelContactKey } from 'model-bb-contact-ng';
```

## Table of Contents
- **contactModel**<br/>    <a href="#contactModel_getNewContactObject">#getNewContactObject()</a><br/>    <a href="#contactModel_getContactSchema">#getContactSchema()</a><br/>    <a href="#contactModel_deleteContact">#deleteContact(contact)</a><br/>    <a href="#contactModel_getContacts">#getContacts(params)</a><br/>    <a href="#contactModel_getCurrentContact">#getCurrentContact()</a><br/>    <a href="#contactModel_storeContactAsCurrent">#storeContactAsCurrent(contact)</a><br/>    <a href="#contactModel_updateContact">#updateContact(contact)</a><br/>    <a href="#contactModel_createContact">#createContact(contact)</a><br/>    <a href="#contactModel_getContactPreferences">#getContactPreferences()</a><br/>

---

## Preference

Widget preferences enum

---

## contactModel

Model factory for widget-bb-contact-ng

### <a name="contactModel_getNewContactObject"></a>*#getNewContactObject()*

Returns empty contact object. Used for contact creation.

##### Returns

Object - *New contact object*

### <a name="contactModel_getContactSchema"></a>*#getContactSchema()*

Gets the contact schema from the data (RAML)

##### Returns

Object - **

### <a name="contactModel_deleteContact"></a>*#deleteContact(contact)*

Deletes a given contact

| Parameter | Type | Description |
| :-- | :-- | :-- |
| contact | Object |  |

##### Returns

Promise - **

### <a name="contactModel_getContacts"></a>*#getContacts(params)*

Gets the list of contacts

| Parameter | Type | Description |
| :-- | :-- | :-- |
| params | Object | Parameters to be passed. |

##### Returns

Promise of Object - *A Promise with an array of contacts
and total number of contacts on the server*

### <a name="contactModel_getCurrentContact"></a>*#getCurrentContact()*

Tries to read the current contact from sync preferences

##### Returns

Object - *Contact data*

### <a name="contactModel_storeContactAsCurrent"></a>*#storeContactAsCurrent(contact)*

Stores a given contact as current in sync preferences

| Parameter | Type | Description |
| :-- | :-- | :-- |
| contact | Object | Contact data |

### <a name="contactModel_updateContact"></a>*#updateContact(contact)*

Updates a given contact

| Parameter | Type | Description |
| :-- | :-- | :-- |
| contact | Object | Contact data |

##### Returns

Promise of Object - *A Promise with response data*

### <a name="contactModel_createContact"></a>*#createContact(contact)*

Creates a new contact

| Parameter | Type | Description |
| :-- | :-- | :-- |
| contact | Object | Contact data |

##### Returns

Promise - *A Promise with response data*

### <a name="contactModel_getContactPreferences"></a>*#getContactPreferences()*

Read all the available preferences from the widget.

##### Returns

Object - *Widget preferences object*
