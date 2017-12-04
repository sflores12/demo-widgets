# widget-bbm-personal-profile-ng


Version: **1.0.19**

Mobile Personal Profile widget.

## Imports

* lib-bb-event-bus-ng
* lib-bb-intent-ng
* lib-bb-storage-ng
* lib-bb-widget-extension-ng
* lib-bb-widget-ng
* model-bb-personal-profile-ng
* vendor-bb-angular

---

## Example

```javascript
<div ng-controller="DetailsController as $ctrl">
   <ul>
      <li>{{ $ctrl.state.user.firstName }}</li>
   </ul>
 </div>
```

## Table of Contents
- **DetailsController**<br/>    <a href="#DetailsController_showAddPhoneForm">#showAddPhoneForm()</a><br/>    <a href="#DetailsController_showAddEmailForm">#showAddEmailForm()</a><br/>    <a href="#DetailsController_showEditPhoneForm">#showEditPhoneForm(index)</a><br/>    <a href="#DetailsController_showEditEmailForm">#showEditEmailForm(index)</a><br/>    <a href="#DetailsController_loadUser">#loadUser()</a><br/>    <a href="#DetailsController_$onInit">#$onInit()</a><br/>
- **FormController**<br/>    <a href="#FormController_updateUserEmail">#updateUserEmail()</a><br/>    <a href="#FormController_updateUserPhone">#updateUserPhone()</a><br/>    <a href="#FormController_deleteUserPhone">#deleteUserPhone()</a><br/>    <a href="#FormController_deleteUserEmail">#deleteUserEmail()</a><br/>    <a href="#FormController_$onInit">#$onInit()</a><br/>
- **Hooks**<br/>    <a href="#Hooks_processUser">#processUser(user)</a><br/>
- **Type Definitions**<br/>    <a href="#SelectedPhone">SelectedPhone</a><br/>    <a href="#SelectedEmail">SelectedEmail</a><br/>    <a href="#FormData">FormData</a><br/>

---

## DetailsController

Mobile personal profile details controller.

| Injector Key |
| :-- |
| *DetailsController* |


### <a name="DetailsController_showAddPhoneForm"></a>*#showAddPhoneForm()*

Handles the intent to show the form to add a phone

### <a name="DetailsController_showAddEmailForm"></a>*#showAddEmailForm()*

Handles the intent to show the form to add an email

### <a name="DetailsController_showEditPhoneForm"></a>*#showEditPhoneForm(index)*

Handles the intent to show the form to edit a phone

| Parameter | Type | Description |
| :-- | :-- | :-- |
| index | Number | position of a phone in the user phone's list |

### <a name="DetailsController_showEditEmailForm"></a>*#showEditEmailForm(index)*

Handles the intent to show the form to edit an email

| Parameter | Type | Description |
| :-- | :-- | :-- |
| index | Number | position of an email in the user email's list |

### <a name="DetailsController_loadUser"></a>*#loadUser()*

Loads the user profile.

##### Returns

Promise of [UserProfile](model-bb-personal-profile-ng.html#UserProfile) - **

### <a name="DetailsController_$onInit"></a>*#$onInit()*

AngularJS Lifecycle hook used to initialize the controller.

##### Fires Events:

> cxp.item.loaded

> bb.item.loaded


---

## FormController

Mobile personal profile form controller.

| Injector Key |
| :-- |
| *FormController* |


### <a name="FormController_updateUserEmail"></a>*#updateUserEmail()*

Updates user's emails

### <a name="FormController_updateUserPhone"></a>*#updateUserPhone()*

Updates user's phones

### <a name="FormController_deleteUserPhone"></a>*#deleteUserPhone()*

Deletes a user phone

##### Returns

Promise of [UserProfile](model-bb-personal-profile-ng.html#UserProfile) - **

### <a name="FormController_deleteUserEmail"></a>*#deleteUserEmail()*

Deletes a user email

##### Returns

Promise of [UserProfile](model-bb-personal-profile-ng.html#UserProfile) - **

### <a name="FormController_$onInit"></a>*#$onInit()*

AngularJS Lifecycle hook used to initialize the controller.

##### Fires Events:

> cxp.item.loaded

> bb.item.loaded


---

## Hooks

Default hooks for widget-bbm-personal-profile-ng

### <a name="Hooks_processUser"></a>*#processUser(user)*

Hook for processing the user

| Parameter | Type | Description |
| :-- | :-- | :-- |
| user | [User](#User) | User object from the controller |

##### Returns

Object - *user*

## Type Definitions


### <a name="SelectedPhone"></a>*SelectedPhone*


**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| index | Number | position of a phone in the user's phone list |

### <a name="SelectedEmail"></a>*SelectedEmail*


**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| index | Number | position of an email in the user's email list |

### <a name="FormData"></a>*FormData*


**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| phone | [Phone](#Phone) | phone data |
| email | [Email](#Email) | email data |

---

## Templates

* *template.ng.html*

---
