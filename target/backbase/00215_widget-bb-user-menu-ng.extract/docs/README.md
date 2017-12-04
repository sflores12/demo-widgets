# widget-bb-user-menu-ng


Version: **5.0.20**

User Menu widget

## Imports

* lib-bb-intent-ng
* lib-bb-user-data-ng
* lib-bb-widget-extension-ng
* lib-bb-widget-ng
* model-bb-login-ng
* vendor-bb-angular

---

## Table of Contents
- **UserMenuController**<br/>    <a href="#UserMenuController_$onInit">#$onInit()</a><br/>    <a href="#UserMenuController_logout">#logout()</a><br/>    <a href="#UserMenuController_currentUser">#currentUser</a><br/>    <a href="#UserMenuController_loggedUser">#loggedUser()</a><br/>    <a href="#UserMenuController_userDataUrl">#userDataUrl</a><br/>
- **default-hooks**<br/>    <a href="#default-hooks_processProfileData">#processProfileData(user)</a><br/>
- **Type Definitions**<br/>    <a href="#User">User</a><br/>    <a href="#Portal">Portal</a><br/>

---

## UserMenuController

User Menu widget

### <a name="UserMenuController_$onInit"></a>*#$onInit()*

AngularJS Lifecycle hook used to initialize the controller

##### Returns

Promise of [void](#void) - **

### <a name="UserMenuController_logout"></a>*#logout()*

Logout function

##### Returns

Promise - **
### <a name="UserMenuController_currentUser"></a>*#currentUser*

Currently logged in user's data object

**Type:** *[User](#User)*


### <a name="UserMenuController_loggedUser"></a>*#loggedUser()*

Retrieves logged in user id
Returns empty string if user is not found (deprecated)

##### Returns

String - **
### <a name="UserMenuController_userDataUrl"></a>*#userDataUrl*

URL that leads to the page with additional user data

**Type:** *String*


---

## default-hooks

Default hooks for widget-bb-user-menu-ng

### <a name="default-hooks_processProfileData"></a>*#processProfileData(user)*

Processes user data retrieved from user profile endpoint

| Parameter | Type | Description |
| :-- | :-- | :-- |
| user | [User](#User) | User data |

##### Returns

[User](#User) - *Processed data*

## Type Definitions


### <a name="User"></a>*User*


**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| name | String | Name that should be displayed on page |
| username | String (optional) | Internal user identifier |

### <a name="Portal"></a>*Portal*


**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| loggedInUserId | String | Internally used unique identification of the user |

---

## Templates

* *template.ng.html*

---
