# model-bb-personal-profile-ng


Version: **1.1.18**

Personal profile widget model.

## Imports

* data-bb-user-http-ng
* lib-bb-model-errors
* vendor-bb-angular

---

## Example

```javascript
import modelPersonalProfileModuleKey, {
  modelPersonalProfileKey,
} from 'model-bb-personal-profile-ng';

angular.module('widget-bb-payment-ng', [
  modelPersonalProfileModuleKey,
])
.controller('PersonalProfileController', [
  modelPersonalProfileKey,
  ...,
])
```

## Table of Contents
- **PersonalProfileModel**<br/>    <a href="#PersonalProfileModel_load">#load()</a><br/>    <a href="#PersonalProfileModel_loadUsersProfile">#loadUsersProfile()</a><br/>    <a href="#PersonalProfileModel_updateUsersProfile">#updateUsersProfile(user)</a><br/>
- **Type Definitions**<br/>    <a href="#User">User</a><br/>    <a href="#Email">Email</a><br/>    <a href="#Phone">Phone</a><br/>    <a href="#UserProfile">UserProfile</a><br/>

---

## PersonalProfileModel

Personal Profile model service

### <a name="PersonalProfileModel_load"></a>*#load()*

Loads the data for the current logged in user

##### Returns

Promise of [User](#User), [ModelError](lib-bb-model-errors.html#ModelError) - *A Promise with the user's data.*

### <a name="PersonalProfileModel_loadUsersProfile"></a>*#loadUsersProfile()*

Loads the data for the current logged in user

##### Returns

Promise of [UserProfile](#UserProfile), [ModelError](lib-bb-model-errors.html#ModelError) - *A Promise with the user's data.*

### <a name="PersonalProfileModel_updateUsersProfile"></a>*#updateUsersProfile(user)*

Updates a user

| Parameter | Type | Description |
| :-- | :-- | :-- |
| user | [UserProfile](#UserProfile) | User data |

##### Returns

Promise of [UserProfile](#UserProfile), [ModelError](lib-bb-model-errors.html#ModelError) - *A Promise with the user's data.*

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
| email | String | The primary email address of the user |
| phone | Array | The phone numbers where the user can be reached |

### <a name="Email"></a>*Email*


**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| value | String | The email address of the user |
| primary | Boolean | The flag to identidy if an email is primary |

### <a name="Phone"></a>*Phone*


**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| value | String | The phone number of the user |
| primary | Boolean | The flag to identidy if a phone is primary |

### <a name="UserProfile"></a>*UserProfile*


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
| emails | Array of [Email](#Email) | Email adresses of the user |
| phones | Array of [Phone](#Phone) | Phone numbers where the user can be reached |

---
