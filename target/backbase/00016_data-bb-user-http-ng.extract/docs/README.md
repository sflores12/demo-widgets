# data-bb-user-http-ng


Version: **1.1.6**

A data module for accessing the User REST API.

## Imports

* vendor-bb-angular

---

## Example

```javascript
import userDataModuleKey, {
  userDataKey,
} from 'data-bb-user-http-ng';
```

## Table of Contents
- **Exports**<br/>    <a href="#default">default</a><br/>    <a href="#userDataKey">userDataKey</a><br/>
- **UserData**<br/>    <a href="#UserData_getUsers">#getUsers(params, headers)</a><br/>    <a href="#UserData_postUsersRecord">#postUsersRecord(data, headers)</a><br/>    <a href="#UserData_getUsersProfiles">#getUsersProfiles(params, headers)</a><br/>    <a href="#UserData_postUsersProfilesRecord">#postUsersProfilesRecord(data, headers)</a><br/>    <a href="#UserData_getUsersBulk">#getUsersBulk(params, headers)</a><br/>    <a href="#UserData_getUsersRecord">#getUsersRecord(userId, params, headers)</a><br/>    <a href="#UserData_postUsersExternalIdsRecord">#postUsersExternalIdsRecord(data, headers)</a><br/>    <a href="#UserData_getUsersExternalIdRecord">#getUsersExternalIdRecord(externalId, params, headers)</a><br/>    <a href="#UserData_postUsersEntitlementsAdminRecord">#postUsersEntitlementsAdminRecord(data, headers)</a><br/>    <a href="#UserData_getUsersExternalIdLegalentities">#getUsersExternalIdLegalentities(externalId, params, headers)</a><br/>    <a href="#UserData_getUsersProfilesRecord">#getUsersProfilesRecord(userId, params, headers)</a><br/>    <a href="#UserData_putUsersProfilesRecord">#putUsersProfilesRecord(userId, data, headers)</a><br/>    <a href="#UserData_schemas">#schemas</a><br/>    <a href="#UserData_schemas.postUsersRecord">#schemas.postUsersRecord</a><br/>    <a href="#UserData_schemas.postUsersProfilesRecord">#schemas.postUsersProfilesRecord</a><br/>    <a href="#UserData_schemas.postUsersExternalIdsRecord">#schemas.postUsersExternalIdsRecord</a><br/>    <a href="#UserData_schemas.postUsersEntitlementsAdminRecord">#schemas.postUsersEntitlementsAdminRecord</a><br/>    <a href="#UserData_schemas.putUsersProfilesRecord">#schemas.putUsersProfilesRecord</a><br/>
- **UserDataProvider**<br/>    <a href="#UserDataProvider_setBaseUri">#setBaseUri(baseUri)</a><br/>    <a href="#UserDataProvider_$get">#$get()</a><br/>
- **Type Definitions**<br/>    <a href="#UserData.EntitlementsAdminCreateItem">UserData.EntitlementsAdminCreateItem</a><br/>    <a href="#UserData.GetLegalEntities">UserData.GetLegalEntities</a><br/>    <a href="#UserData.GetLegalEntity">UserData.GetLegalEntity</a><br/>    <a href="#UserData.GetUsers">UserData.GetUsers</a><br/>    <a href="#UserData.GetUsersByExternalIdsPostItem">UserData.GetUsersByExternalIdsPostItem</a><br/>    <a href="#UserData.GetUsersByExternalIdsResponseItem">UserData.GetUsersByExternalIdsResponseItem</a><br/>    <a href="#UserData.GetUsersByIds">UserData.GetUsersByIds</a><br/>    <a href="#UserData.IdItem">UserData.IdItem</a><br/>    <a href="#UserData.UserByIdsItem">UserData.UserByIdsItem</a><br/>    <a href="#UserData.UserCreateItem">UserData.UserCreateItem</a><br/>    <a href="#UserData.UserItem">UserData.UserItem</a><br/>    <a href="#UserData.UserProfileCreate">UserData.UserProfileCreate</a><br/>    <a href="#UserData.UsersProfileItem">UserData.UsersProfileItem</a><br/>    <a href="#UserData.UsersProfileItems">UserData.UsersProfileItems</a><br/>    <a href="#Response">Response</a><br/>

## Exports

### <a name="default"></a>*default*

Angular dependency injection module key

**Type:** *String*

### <a name="userDataKey"></a>*userDataKey*

Angular dependency injection key for the UserData service

**Type:** *String*


---

## UserData

Public api for data-bb-user-http-ng service

### <a name="UserData_getUsers"></a>*#getUsers(params, headers)*

# Users list

Initial call to retrieve the list of enrolled Users that belong to a given Legal Entity.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| params | Object | Map of query parameters. |
| params.entityId | String | Legal Entity ID. Eg: 1002. |
| params.query | String (optional) | The search term used to search users. Eg: backb. |
| params.from | Number (optional) | Page Number. Skip over pages of elements by specifying a start value for the query. Eg: 0. (defaults to 0) |
| params.size | Number (optional) | Query parameter for pagination - number of records that will be shown on the page. Eg: 10. (defaults to 10) |
| params.cursor | String (optional) | Cursor for pagination. Eg: 1. (defaults to "") |
| headers | Object (optional) | Map of custom header attributes. |

##### Returns

Promise of [Response](#Response) - *Resolves data value as [UserData.GetUsers](#UserData.GetUsers) on success*

## Example

```javascript
userData
 .getUsers(params, headers)
 .then(function(result){
   console.log('headers', result.headers)
   console.log('data', result.data);
 });
```

### <a name="UserData_postUsersRecord"></a>*#postUsersRecord(data, headers)*

# Create user

Creates a new user that belongs to the given legal entity

| Parameter | Type | Description |
| :-- | :-- | :-- |
| data | [UserData.UserCreateItem](#UserData.UserCreateItem) | Data to be sent as the request message data. |
| headers | Object (optional) | Map of custom header attributes. |

##### Returns

Promise of [Response](#Response) - *Resolves data value as [UserData.IdItem](#UserData.IdItem) on success*

## Example

```javascript
userData
 .postUsersRecord(data, headers)
 .then(function(result){
   console.log('headers', result.headers)
   console.log('data', result.data);
 });
```

### <a name="UserData_getUsersProfiles"></a>*#getUsersProfiles(params, headers)*

# Users profiles list

Initial call to retrieve the list of enrolled Users profiles that belong to a given Legal Entity.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| params | Object | Map of query parameters. |
| params.entityId | String | Legal Entity ID. Eg: 1002. |
| headers | Object (optional) | Map of custom header attributes. |

##### Returns

Promise of [Response](#Response) - *Resolves data value as [UserData.UsersProfileItems](#UserData.UsersProfileItems) on success*

## Example

```javascript
userData
 .getUsersProfiles(params, headers)
 .then(function(result){
   console.log('headers', result.headers)
   console.log('data', result.data);
 });
```

### <a name="UserData_postUsersProfilesRecord"></a>*#postUsersProfilesRecord(data, headers)*

# Create a user profile

Creates a new user profile that belongs to the given legal entity

| Parameter | Type | Description |
| :-- | :-- | :-- |
| data | [UserData.UserProfileCreate](#UserData.UserProfileCreate) | Data to be sent as the request message data. |
| headers | Object (optional) | Map of custom header attributes. |

##### Returns

Promise of [Response](#Response) - *Resolves data value as [UserData.IdItem](#UserData.IdItem) on success*

## Example

```javascript
userData
 .postUsersProfilesRecord(data, headers)
 .then(function(result){
   console.log('headers', result.headers)
   console.log('data', result.data);
 });
```

### <a name="UserData_getUsersBulk"></a>*#getUsersBulk(params, headers)*

# Users By Ids

Initial call to retrieve the list of enrolled Users by Ids in the System that might belong to separate Legal Entities.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| params | Object | Map of query parameters. |
| params.id | String | # Users By Ids Initial call to retrieve the list of enrolled Users by Ids in the System that might belong to separate Legal Entities. Eg: 1,2,3,4. |
| params.query | String (optional) | The search term used to search users. Eg: backb. |
| params.from | Number (optional) | Page Number. Skip over pages of elements by specifying a start value for the query. Eg: 0. (defaults to 0) |
| params.size | Number (optional) | Query parameter for pagination - number of records that will be shown on the page. Eg: 10. (defaults to 10) |
| params.cursor | String (optional) | Cursor for pagination. Eg: 1. (defaults to "") |
| headers | Object (optional) | Map of custom header attributes. |

##### Returns

Promise of [Response](#Response) - *Resolves data value as [UserData.GetUsersByIds](#UserData.GetUsersByIds) on success*

## Example

```javascript
userData
 .getUsersBulk(params, headers)
 .then(function(result){
   console.log('headers', result.headers)
   console.log('data', result.data);
 });
```

### <a name="UserData_getUsersRecord"></a>*#getUsersRecord(userId, params, headers)*

# User

Get a single User by ID.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| userId | String |  |
| params | Object (optional) | Map of query parameters. |
| headers | Object (optional) | Map of custom header attributes. |

##### Returns

Promise of [Response](#Response) - *Resolves data value as [UserData.UserItem](#UserData.UserItem) on success*

## Example

```javascript
userData
 .getUsersRecord(userId, params, headers)
 .then(function(result){
   console.log('headers', result.headers)
   console.log('data', result.data);
 });
```

### <a name="UserData_postUsersExternalIdsRecord"></a>*#postUsersExternalIdsRecord(data, headers)*

# Users By External Ids

Initial call to retrieve the list of enrolled Users by external Ids in the System that might belong to separate Legal Entities.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| data | [UserData.GetUsersByExternalIdsPostItem](#UserData.GetUsersByExternalIdsPostItem) | Data to be sent as the request message data. |
| headers | Object (optional) | Map of custom header attributes. |

##### Returns

Promise of [Response](#Response) - *Resolves data value as [UserData.GetUsersByExternalIdsResponseItem](#UserData.GetUsersByExternalIdsResponseItem) on success*

## Example

```javascript
userData
 .postUsersExternalIdsRecord(data, headers)
 .then(function(result){
   console.log('headers', result.headers)
   console.log('data', result.data);
 });
```

### <a name="UserData_getUsersExternalIdRecord"></a>*#getUsersExternalIdRecord(externalId, params, headers)*

# Get User By External Id

Initial call to retrieve a single user from the platform
using the external identifier.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| externalId | String |  |
| params | Object (optional) | Map of query parameters. |
| headers | Object (optional) | Map of custom header attributes. |

##### Returns

Promise of [Response](#Response) - *Resolves data value as [UserData.UserItem](#UserData.UserItem) on success*

## Example

```javascript
userData
 .getUsersExternalIdRecord(externalId, params, headers)
 .then(function(result){
   console.log('headers', result.headers)
   console.log('data', result.data);
 });
```

### <a name="UserData_postUsersEntitlementsAdminRecord"></a>*#postUsersEntitlementsAdminRecord(data, headers)*

# Create Admin User

Create Admin required to manage entitlements for the Bank and every Legal Entity.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| data | [UserData.EntitlementsAdminCreateItem](#UserData.EntitlementsAdminCreateItem) | Data to be sent as the request message data. |
| headers | Object (optional) | Map of custom header attributes. |

##### Returns

Promise of [Response](#Response) - **

## Example

```javascript
userData
 .postUsersEntitlementsAdminRecord(data, headers)
 .then(function(result){
   console.log('headers', result.headers)
   console.log('data', result.data);
 });
```

### <a name="UserData_getUsersExternalIdLegalentities"></a>*#getUsersExternalIdLegalentities(externalId, params, headers)*

# Legal Entities by User list

Retrieve the Legal Entity that the User Belongs to

| Parameter | Type | Description |
| :-- | :-- | :-- |
| externalId | String |  |
| params | Object (optional) | Map of query parameters. |
| headers | Object (optional) | Map of custom header attributes. |

##### Returns

Promise of [Response](#Response) - *Resolves data value as [UserData.GetLegalEntity](#UserData.GetLegalEntity) on success*

## Example

```javascript
userData
 .getUsersExternalIdLegalentities(externalId, params, headers)
 .then(function(result){
   console.log('headers', result.headers)
   console.log('data', result.data);
 });
```

### <a name="UserData_getUsersProfilesRecord"></a>*#getUsersProfilesRecord(userId, params, headers)*

# User profile

Get a single User profile by ID.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| userId | String |  |
| params | Object (optional) | Map of query parameters. |
| headers | Object (optional) | Map of custom header attributes. |

##### Returns

Promise of [Response](#Response) - *Resolves data value as [UserData.UsersProfileItem](#UserData.UsersProfileItem) on success*

## Example

```javascript
userData
 .getUsersProfilesRecord(userId, params, headers)
 .then(function(result){
   console.log('headers', result.headers)
   console.log('data', result.data);
 });
```

### <a name="UserData_putUsersProfilesRecord"></a>*#putUsersProfilesRecord(userId, data, headers)*

# Update a user profile

Updates an existing user profile that belongs to the given legal entity

| Parameter | Type | Description |
| :-- | :-- | :-- |
| userId | String |  |
| data | [UserData.UsersProfileItem](#UserData.UsersProfileItem) | Data to be sent as the request message data. |
| headers | Object (optional) | Map of custom header attributes. |

##### Returns

Promise of [Response](#Response) - *Resolves data value as [UserData.UsersProfileItem](#UserData.UsersProfileItem) on success*

## Example

```javascript
userData
 .putUsersProfilesRecord(userId, data, headers)
 .then(function(result){
   console.log('headers', result.headers)
   console.log('data', result.data);
 });
```
### <a name="UserData_schemas"></a>*#schemas*

Schema data. Keys of the object are names of the POST and PUT methods

Note: The schema is not strictly a JSON schema. It is a whitelisted set of
keys for each object property. The keys that are exposed are meant for validation
purposes.

The full list of *possible* keys for each property is:
type, minimum, maximum, minLength, maxLength, pattern, enum, format, default,
properties, items, minItems, maxItems, uniqueItems and required.

See http://json-schema.org/latest/json-schema-validation.html for more details
on the meaning of these keys.

The "required" array from JSON schema is tranformed into a "required" boolean
on each property. This is for ease of use.

**Type:** *Object*

### <a name="UserData_schemas.postUsersRecord"></a>*#schemas.postUsersRecord*

An object describing the JSON schema for the postUsersRecord method

**Type:** *Object*


## Example

```javascript
{
  "properties": {
    "externalId": {
      "type": "string",
      "minLength": 1,
      "maxLength": 255,
      "pattern": "^\\S+$",
      "required": true
    },
    "legalEntityExternalId": {
      "type": "string",
      "minLength": 1,
      "maxLength": 255,
      "pattern": "^\\S+$",
      "required": true
    },
    "fullName": {
      "type": "string",
      "minLength": 1,
      "maxLength": 255,
      "pattern": "^\\S(.*(\\S))?$",
      "required": true
    }
  }
}
```
### <a name="UserData_schemas.postUsersProfilesRecord"></a>*#schemas.postUsersProfilesRecord*

An object describing the JSON schema for the postUsersProfilesRecord method

**Type:** *Object*


## Example

```javascript
{
  "properties": {
    "externalId": {
      "type": "string",
      "minLength": 1,
      "pattern": "^\\S+$",
      "required": true
    },
    "legalEntityExternalId": {
      "type": "string",
      "minLength": 1,
      "pattern": "^\\S+$",
      "required": true
    },
    "firstName": {
      "type": "string",
      "minLength": 1,
      "pattern": "^\\S(.*(\\S))?$",
      "required": true
    }
  }
}
```
### <a name="UserData_schemas.postUsersExternalIdsRecord"></a>*#schemas.postUsersExternalIdsRecord*

An object describing the JSON schema for the postUsersExternalIdsRecord method

**Type:** *Object*


## Example

```javascript
{
  "properties": {
    "ids": {
      "type": "array",
      "items": {
        "properties": {}
      },
      "minItems": 1,
      "uniqueItems": true,
      "required": false
    }
  }
}
```
### <a name="UserData_schemas.postUsersEntitlementsAdminRecord"></a>*#schemas.postUsersEntitlementsAdminRecord*

An object describing the JSON schema for the postUsersEntitlementsAdminRecord method

**Type:** *Object*


## Example

```javascript
{
  "properties": {
    "externalId": {
      "type": "string",
      "minLength": 1,
      "maxLength": 255,
      "required": true
    },
    "legalEntityExternalId": {
      "type": "string",
      "minLength": 1,
      "maxLength": 255,
      "required": true
    }
  }
}
```
### <a name="UserData_schemas.putUsersProfilesRecord"></a>*#schemas.putUsersProfilesRecord*

An object describing the JSON schema for the putUsersProfilesRecord method

**Type:** *Object*


## Example

```javascript
{
  "properties": {
    "externalId": {
      "type": "string",
      "required": true
    },
    "legalEntityId": {
      "type": "string",
      "required": true
    },
    "id": {
      "type": "string",
      "required": false
    },
    "imageAvatar": {
      "type": "string",
      "required": false
    },
    "fullName": {
      "type": "string",
      "required": false
    },
    "lastName": {
      "type": "string",
      "required": false
    },
    "dateOfBirth": {
      "type": "string",
      "pattern": "^[0-9]{2}-[0-9]{2}-[0-9]{4}$",
      "required": false
    },
    "street": {
      "type": "string",
      "required": false
    },
    "houseNumber": {
      "type": "string",
      "required": false
    },
    "postalCode": {
      "type": "string",
      "required": false
    },
    "area": {
      "type": "string",
      "required": false
    },
    "city": {
      "type": "string",
      "required": false
    },
    "citizenship": {
      "type": "string",
      "required": false
    },
    "phones": {
      "type": "array",
      "items": {
        "properties": {}
      },
      "required": false
    },
    "emails": {
      "type": "array",
      "items": {
        "properties": {}
      },
      "required": false
    },
    "lastLogin": {
      "type": "string",
      "format": "date-time",
      "required": false
    }
  }
}
```

---

## UserDataProvider

Data service that can be configured with custom base URI.

| Injector Key |
| :-- |
| *data-bb-user-http-ng:userDataProvider* |


### <a name="UserDataProvider_setBaseUri"></a>*#setBaseUri(baseUri)*


| Parameter | Type | Description |
| :-- | :-- | :-- |
| baseUri | String | Base URI which will be the prefix for all HTTP requests |

### <a name="UserDataProvider_$get"></a>*#$get()*


##### Returns

Object - *An instance of the service*

## Example

```javascript
// Configuring in an angular app:
angular.module(...)
  .config(['data-bb-user-http-ng:userDataProvider',
    (dataProvider) => {
      dataProvider.setBaseUri('http://my-service.com/');
      });

// Configuring With config-bb-providers-ng:
export default [
  ['data-bb-user-http-ng:userDataProvider', (dataProvider) => {
      dataProvider.setBaseUri('http://my-service.com/');
  }]
];
```

## Type Definitions


### <a name="UserData.EntitlementsAdminCreateItem"></a>*UserData.EntitlementsAdminCreateItem*


**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| externalId | String |  |
| legalEntityExternalId | String |  |
| additions | Object (optional) | Container object for custom API extensions |

### <a name="UserData.GetLegalEntities"></a>*UserData.GetLegalEntities*


**Type:** *Array of [UserData.GetLegalEntity](#UserData.GetLegalEntity)*


### <a name="UserData.GetLegalEntity"></a>*UserData.GetLegalEntity*


**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| id | String |  |
| externalId | String |  |
| name | String |  |
| parentId | String (optional) |  |
| isParent | Boolean (optional) |  |
| additions | Object (optional) | Container object for custom API extensions |

### <a name="UserData.GetUsers"></a>*UserData.GetUsers*


**Type:** *Array of [UserData.UserItem](#UserData.UserItem)*


### <a name="UserData.GetUsersByExternalIdsPostItem"></a>*UserData.GetUsersByExternalIdsPostItem*


**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| ids | Array (optional) of String |  |
| additions | Object (optional) | Container object for custom API extensions |

### <a name="UserData.GetUsersByExternalIdsResponseItem"></a>*UserData.GetUsersByExternalIdsResponseItem*


**Type:** *Array of [UserData.UserByIdsItem](#UserData.UserByIdsItem)*


### <a name="UserData.GetUsersByIds"></a>*UserData.GetUsersByIds*


**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| totalElements | Number | total number of elements matching the query |
| users | Array of [UserData.UserByIdsItem](#UserData.UserByIdsItem) |  |
| additions | Object (optional) | Container object for custom API extensions |

### <a name="UserData.IdItem"></a>*UserData.IdItem*


**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| id | String | Internally used unique identification |
| additions | Object (optional) | Container object for custom API extensions |

### <a name="UserData.UserByIdsItem"></a>*UserData.UserByIdsItem*


**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| id | String |  |
| externalId | String |  |
| legalEntityId | String |  |
| fullName | String |  |
| additions | Object (optional) | Container object for custom API extensions |

### <a name="UserData.UserCreateItem"></a>*UserData.UserCreateItem*


**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| externalId | String | external Id of the user. |
| legalEntityExternalId | String | Legal Entity Id of the user. |
| fullName | String | Full name of the user. |
| additions | Object (optional) | Container object for custom API extensions |

### <a name="UserData.UserItem"></a>*UserData.UserItem*


**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| externalId | String |  |
| legalEntityId | String |  |
| id | String (optional) | Internally used unique identification of the user. |
| imageAvatar | String (optional) | base64 encoded picture of the user. |
| fullName | String (optional) | The full name of a user. |
| firstName | String (optional) | The given name of a user. |
| lastName | String (optional) | The family name of a user. |
| dateOfBirth | String (optional) | The date the party was born in the format DD-MM-YYYY. |
| street | String (optional) | Optional part of the address specification. |
| houseNumber | String (optional) | Optional part of the address specifying the location in a street. |
| postalCode | String (optional) | Optional part of the address specification. |
| area | String (optional) | Optional part of the address specification. |
| city | String (optional) | Part of the address specification referring to the place. |
| citizenship | String (optional) | Reference to the country where the user is citizen of. |
| phone | Array (optional) of String | The number the user can be reached by. |
| email | String (optional) | The primary email address of the user. |
| lastLogin | String (optional) | Timestamp of the last user login. |
| additions | Object (optional) | Container object for custom API extensions |

### <a name="UserData.UserProfileCreate"></a>*UserData.UserProfileCreate*


**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| externalId | String | external Id of the user. |
| legalEntityExternalId | String | Legal Entity Id of the user. |
| firstName | String | First name of the user. |
| additions | Object (optional) | Container object for custom API extensions |

### <a name="UserData.UsersProfileItem"></a>*UserData.UsersProfileItem*


**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| externalId | String |  |
| legalEntityId | String |  |
| id | String (optional) | Internally used unique identification of the user. |
| imageAvatar | String (optional) | base64 encoded picture of the user. |
| fullName | String (optional) | The given name of a user. |
| lastName | String (optional) | The family name of a user. |
| dateOfBirth | String (optional) | The date the party was born in the format DD-MM-YYYY. |
| street | String (optional) | Optional part of the address specification. |
| houseNumber | String (optional) | Optional part of the address specifying the location in a street. |
| postalCode | String (optional) | Optional part of the address specification. |
| area | String (optional) | Optional part of the address specification. |
| city | String (optional) | Part of the address specification referring to the place. |
| citizenship | String (optional) | Reference to the country where the user is citizen of. |
| phones | Array (optional) of Object | The phone numbers the user can be reached by. |
| emails | Array (optional) of Object | The email addresses of the user. |
| lastLogin | String (optional) | Timestamp of the last user login. |
| additions | Object (optional) | Container object for custom API extensions |

### <a name="UserData.UsersProfileItems"></a>*UserData.UsersProfileItems*


**Type:** *Array of [UserData.UsersProfileItem](#UserData.UsersProfileItem)*


### <a name="Response"></a>*Response*


**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| data | Object | See method descriptions for possible return types |
| headers | Function | Getter headers function |
| status | Number | HTTP status code of the response. |
| statusText | String | HTTP status text of the response. |

---
