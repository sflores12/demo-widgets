# widget-bb-personal-profile-ng


Version: **1.0.40**

Personal Profile widget.

## Imports

* lib-bb-event-bus-ng
* lib-bb-intent-ng
* lib-bb-widget-extension-ng
* lib-bb-widget-ng
* model-bb-personal-profile-ng
* vendor-bb-angular

---

## Example

```javascript
<div ng-controller="PersonalProfileController as $ctrl">
   <ul>
      <li>{{ $ctrl.state.user.firstName }}</li>
   </ul>
 </div>
```

## Table of Contents
- **Exports**<br/>    <a href="#default">default</a><br/>
- **Hooks**<br/>    <a href="#Hooks_processUser">#processUser(user)</a><br/>
- **Type Definitions**<br/>    <a href="#User">User</a><br/>

## Exports

### <a name="default"></a>*default*

Personal Profile Widget

**Type:** *String*


---

## PersonalProfileController

Personal Profile controller.

| Injector Key |
| :-- |
| *PersonalProfileController* |


---

## Hooks

Default hooks for widget-bb-personal-profile-ng

### <a name="Hooks_processUser"></a>*#processUser(user)*

Hook for processing the user

| Parameter | Type | Description |
| :-- | :-- | :-- |
| user | [User](#User) | User object from the controller |

##### Returns

Object - *user*

## Type Definitions


### <a name="User"></a>*User*


**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| bbid | String | Internal Backbase identifier |
| exid | String | External bank identifier |
| entityId | String | External entity identifier |
| id | String | Internally used unique identification of the user |
| imageAvatar | String | Base64 encoded picture of the user |
| firstName | String | The given name of a user |
| lastName | String | The given family name of a user |
| dateOfBirth | String | The date the user was born in format "DD-MM-YYYY" |
| street | String | Street name (part of the address) |
| houseNumber | String | House number (part of the address) |
| postalCode | String | Postal code (part of the address) |
| area | String | Area (part of the address) |
| city | String | City (part of the address) |
| citizenship | String | Country where the user is citizen of |
| email | String | The primary e-mail address of the user |
| phone | Array | The phone numbers where the user can be reached |

---

## Templates

* *template.ng.html*

---
