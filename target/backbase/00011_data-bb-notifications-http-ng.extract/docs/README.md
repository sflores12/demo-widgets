# data-bb-notifications-http-ng


Version: **1.3.1**

A data module for accessing the Notifications REST API.

## Imports

* vendor-bb-angular

---

## Example

```javascript
import notificationsDataModuleKey, {
  notificationsDataKey,
} from 'data-bb-notifications-http-ng';
```

## Table of Contents
- **Exports**<br/>    <a href="#default">default</a><br/>    <a href="#notificationsDataKey">notificationsDataKey</a><br/>
- **NotificationsData**<br/>    <a href="#NotificationsData_getNotifications">#getNotifications(params, headers)</a><br/>    <a href="#NotificationsData_postNotificationsRecord">#postNotificationsRecord(data, headers)</a><br/>    <a href="#NotificationsData_getNotificationsUnreadCount">#getNotificationsUnreadCount(params, headers)</a><br/>    <a href="#NotificationsData_getNotificationsStream">#getNotificationsStream(params, headers)</a><br/>    <a href="#NotificationsData_deleteNotificationsRecord">#deleteNotificationsRecord(id, data, headers)</a><br/>    <a href="#NotificationsData_putNotificationsReadRecord">#putNotificationsReadRecord(id, data, headers)</a><br/>    <a href="#NotificationsData_schemas">#schemas</a><br/>    <a href="#NotificationsData_schemas.postNotificationsRecord">#schemas.postNotificationsRecord</a><br/>    <a href="#NotificationsData_schemas.putNotificationsReadRecord">#schemas.putNotificationsReadRecord</a><br/>
- **NotificationsDataProvider**<br/>    <a href="#NotificationsDataProvider_setBaseUri">#setBaseUri(baseUri)</a><br/>    <a href="#NotificationsDataProvider_$get">#$get()</a><br/>
- **Type Definitions**<br/>    <a href="#NotificationsData.BadRequest">NotificationsData.BadRequest</a><br/>    <a href="#NotificationsData.ChangeAcknowledgementCommand">NotificationsData.ChangeAcknowledgementCommand</a><br/>    <a href="#NotificationsData.CreateNotificationsCommand">NotificationsData.CreateNotificationsCommand</a><br/>    <a href="#NotificationsData.CreatedNotifications">NotificationsData.CreatedNotifications</a><br/>    <a href="#NotificationsData.CreatedNotificationsItem">NotificationsData.CreatedNotificationsItem</a><br/>    <a href="#NotificationsData.ErrorMessage">NotificationsData.ErrorMessage</a><br/>    <a href="#NotificationsData.Forbidden">NotificationsData.Forbidden</a><br/>    <a href="#NotificationsData.InternalServerError">NotificationsData.InternalServerError</a><br/>    <a href="#NotificationsData.NotFound">NotificationsData.NotFound</a><br/>    <a href="#NotificationsData.NotificationItem">NotificationsData.NotificationItem</a><br/>    <a href="#NotificationsData.NotificationStreamItem">NotificationsData.NotificationStreamItem</a><br/>    <a href="#NotificationsData.Notifications">NotificationsData.Notifications</a><br/>    <a href="#NotificationsData.NotificationsStream">NotificationsData.NotificationsStream</a><br/>    <a href="#NotificationsData.UnprocessableEntity">NotificationsData.UnprocessableEntity</a><br/>    <a href="#NotificationsData.UnreadNotificationsCount">NotificationsData.UnreadNotificationsCount</a><br/>    <a href="#NotificationsData.errorFields">NotificationsData.errorFields</a><br/>    <a href="#NotificationsData.legalEntities">NotificationsData.legalEntities</a><br/>    <a href="#NotificationsData.recipients">NotificationsData.recipients</a><br/>    <a href="#Response">Response</a><br/>

## Exports

### <a name="default"></a>*default*

Angular dependency injection module key

**Type:** *String*

### <a name="notificationsDataKey"></a>*notificationsDataKey*

Angular dependency injection key for the NotificationsData service

**Type:** *String*


---

## NotificationsData

Public api for data-bb-notifications-http-ng service

### <a name="NotificationsData_getNotifications"></a>*#getNotifications(params, headers)*

Get all notifications for current user

| Parameter | Type | Description |
| :-- | :-- | :-- |
| params | Object (optional) | Map of query parameters. |
| params.cursor | String (optional) | As an alternative for specifying 'from' this allows to point to the record to start the selection from. Eg: 1483006260. (defaults to null) |
| params.from | Number (optional) | Skip over a page of elements by specifying a start value for the query. Eg: 20. (defaults to 0) |
| params.size | Number (optional) | Limit the number of elements on the response. Eg: 80. (defaults to 10) |
| params.fromDate | String (optional) | Date from which the notifications should be retrieved. Eg: 2017-02-12T14:15:12+00:00. |
| params.toDate | String (optional) | Date to which the notifications should be retrieved. Eg: 2017-04-11T15:14:33+00:00. |
| params.levels | String (optional) | Array of severity levels notifications should be filtered by. |
| params.read | String (optional) | Fetch only read or not read notifications. (defaults to null) |
| params.originTerm | String (optional) | A sequense of symbols/words entered by user. |
| params.messageTerm | String (optional) | A sequense of symbols/words entered by user. |
| headers | Object (optional) | Map of custom header attributes. |

##### Returns

Promise of [Response](#Response) - *Resolves data value as [NotificationsData.Notifications](#NotificationsData.Notifications) on success  or rejects with data of [NotificationsData.BadRequest](#NotificationsData.BadRequest), [NotificationsData.Forbidden](#NotificationsData.Forbidden), [NotificationsData.InternalServerError](#NotificationsData.InternalServerError) on error*

## Example

```javascript
notificationsData
 .getNotifications(params, headers)
 .then(function(result){
   console.log('headers', result.headers)
   console.log('data', result.data);
 });
```

### <a name="NotificationsData_postNotificationsRecord"></a>*#postNotificationsRecord(data, headers)*

Create notification

| Parameter | Type | Description |
| :-- | :-- | :-- |
| data | [NotificationsData.CreateNotificationsCommand](#NotificationsData.CreateNotificationsCommand) | Data to be sent as the request message data. |
| headers | Object (optional) | Map of custom header attributes. |

##### Returns

Promise of [Response](#Response) - *Resolves data value as [NotificationsData.CreatedNotifications](#NotificationsData.CreatedNotifications) on success  or rejects with data of [NotificationsData.BadRequest](#NotificationsData.BadRequest), [NotificationsData.Forbidden](#NotificationsData.Forbidden), [NotificationsData.UnprocessableEntity](#NotificationsData.UnprocessableEntity), [NotificationsData.InternalServerError](#NotificationsData.InternalServerError) on error*

## Example

```javascript
notificationsData
 .postNotificationsRecord(data, headers)
 .then(function(result){
   console.log('headers', result.headers)
   console.log('data', result.data);
 });
```

### <a name="NotificationsData_getNotificationsUnreadCount"></a>*#getNotificationsUnreadCount(params, headers)*

get request

| Parameter | Type | Description |
| :-- | :-- | :-- |
| params | Object (optional) | Map of query parameters. |
| headers | Object (optional) | Map of custom header attributes. |

##### Returns

Promise of [Response](#Response) - *Resolves data value as [NotificationsData.UnreadNotificationsCount](#NotificationsData.UnreadNotificationsCount) on success  or rejects with data of [NotificationsData.BadRequest](#NotificationsData.BadRequest), [NotificationsData.Forbidden](#NotificationsData.Forbidden), [NotificationsData.InternalServerError](#NotificationsData.InternalServerError) on error*

## Example

```javascript
notificationsData
 .getNotificationsUnreadCount(params, headers)
 .then(function(result){
   console.log('headers', result.headers)
   console.log('data', result.data);
 });
```

### <a name="NotificationsData_getNotificationsStream"></a>*#getNotificationsStream(params, headers)*

Retrieve latest unread notifications for current user

| Parameter | Type | Description |
| :-- | :-- | :-- |
| params | Object (optional) | Map of query parameters. |
| params.interval | Number (optional) | Age of notifications that will be retrieved from stream (milliseconds). Eg: 15000. (defaults to 30000) |
| headers | Object (optional) | Map of custom header attributes. |

##### Returns

Promise of [Response](#Response) - *Resolves data value as [NotificationsData.NotificationsStream](#NotificationsData.NotificationsStream) on success  or rejects with data of [NotificationsData.BadRequest](#NotificationsData.BadRequest), [NotificationsData.Forbidden](#NotificationsData.Forbidden), [NotificationsData.InternalServerError](#NotificationsData.InternalServerError) on error*

## Example

```javascript
notificationsData
 .getNotificationsStream(params, headers)
 .then(function(result){
   console.log('headers', result.headers)
   console.log('data', result.data);
 });
```

### <a name="NotificationsData_deleteNotificationsRecord"></a>*#deleteNotificationsRecord(id, data, headers)*

Delete the notification with the specified id

| Parameter | Type | Description |
| :-- | :-- | :-- |
| id | String |  |
| data | Object (optional) | Data to be sent as the request message data. |
| headers | Object (optional) | Map of custom header attributes. |

##### Returns

Promise of [Response](#Response) - *Resolves data value as void on success or rejects with data of [NotificationsData.Forbidden](#NotificationsData.Forbidden), [NotificationsData.NotFound](#NotificationsData.NotFound), [NotificationsData.InternalServerError](#NotificationsData.InternalServerError) on error*

## Example

```javascript
notificationsData
 .deleteNotificationsRecord(id, data, headers)
 .then(function(result){
   console.log('headers', result.headers)
   console.log('data', result.data);
 });
```

### <a name="NotificationsData_putNotificationsReadRecord"></a>*#putNotificationsReadRecord(id, data, headers)*

Mark notification as read/unread

| Parameter | Type | Description |
| :-- | :-- | :-- |
| id | String |  |
| data | [NotificationsData.ChangeAcknowledgementCommand](#NotificationsData.ChangeAcknowledgementCommand) | Data to be sent as the request message data. |
| headers | Object (optional) | Map of custom header attributes. |

##### Returns

Promise of [Response](#Response) - *Resolves data value as void on success or rejects with data of [NotificationsData.BadRequest](#NotificationsData.BadRequest), [NotificationsData.Forbidden](#NotificationsData.Forbidden), [NotificationsData.NotFound](#NotificationsData.NotFound), [NotificationsData.UnprocessableEntity](#NotificationsData.UnprocessableEntity), [NotificationsData.InternalServerError](#NotificationsData.InternalServerError) on error*

## Example

```javascript
notificationsData
 .putNotificationsReadRecord(id, data, headers)
 .then(function(result){
   console.log('headers', result.headers)
   console.log('data', result.data);
 });
```
### <a name="NotificationsData_schemas"></a>*#schemas*

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

### <a name="NotificationsData_schemas.postNotificationsRecord"></a>*#schemas.postNotificationsRecord*

An object describing the JSON schema for the postNotificationsRecord method

**Type:** *Object*


## Example

```javascript
{
  "properties": {
    "recipients": {
      "type": "array",
      "items": {
        "properties": {
          "userId": {
            "type": "string",
            "minLength": 1,
            "required": true
          }
        }
      },
      "required": false
    },
    "legalEntities": {
      "type": "array",
      "items": {
        "properties": {
          "leId": {
            "type": "string",
            "minLength": 1,
            "required": true
          }
        }
      },
      "required": false
    },
    "title": {
      "type": "string",
      "required": false
    },
    "message": {
      "type": "string",
      "minLength": 1,
      "required": true
    },
    "level": {
      "type": "string",
      "enum": [
        "ALERT",
        "WARNING",
        "SUCCESS",
        "INFO"
      ],
      "required": true
    },
    "targetGroup": {
      "type": "string",
      "enum": [
        "GLOBAL",
        "CUSTOMER",
        "USER"
      ],
      "required": true
    },
    "link": {
      "type": "string",
      "required": false
    },
    "validFrom": {
      "type": "string",
      "format": "date-time",
      "required": false
    },
    "expiresOn": {
      "type": "string",
      "format": "date-time",
      "required": false
    },
    "origin": {
      "type": "string",
      "minLength": 1,
      "required": true
    }
  }
}
```
### <a name="NotificationsData_schemas.putNotificationsReadRecord"></a>*#schemas.putNotificationsReadRecord*

An object describing the JSON schema for the putNotificationsReadRecord method

**Type:** *Object*


## Example

```javascript
{
  "properties": {
    "read": {
      "type": "boolean",
      "required": true
    }
  }
}
```

---

## NotificationsDataProvider

Data service that can be configured with custom base URI.

| Injector Key |
| :-- |
| *data-bb-notifications-http-ng:notificationsDataProvider* |


### <a name="NotificationsDataProvider_setBaseUri"></a>*#setBaseUri(baseUri)*


| Parameter | Type | Description |
| :-- | :-- | :-- |
| baseUri | String | Base URI which will be the prefix for all HTTP requests |

### <a name="NotificationsDataProvider_$get"></a>*#$get()*


##### Returns

Object - *An instance of the service*

## Example

```javascript
// Configuring in an angular app:
angular.module(...)
  .config(['data-bb-notifications-http-ng:notificationsDataProvider',
    (dataProvider) => {
      dataProvider.setBaseUri('http://my-service.com/');
      });

// Configuring With config-bb-providers-ng:
export default [
  ['data-bb-notifications-http-ng:notificationsDataProvider', (dataProvider) => {
      dataProvider.setBaseUri('http://my-service.com/');
  }]
];
```

## Type Definitions


### <a name="NotificationsData.BadRequest"></a>*NotificationsData.BadRequest*


**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| message | String |  |
| additions | Object (optional) | Container object for custom API extensions |

### <a name="NotificationsData.ChangeAcknowledgementCommand"></a>*NotificationsData.ChangeAcknowledgementCommand*


**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| read | Boolean | Read Status field |
| additions | Object (optional) | Container object for custom API extensions |

### <a name="NotificationsData.CreateNotificationsCommand"></a>*NotificationsData.CreateNotificationsCommand*


**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| recipients | Array (optional) of [NotificationsData.recipients](#NotificationsData.recipients) | Notification recipients. List all users IDs intended to receive this particular notification |
| legalEntities | Array (optional) of [NotificationsData.legalEntities](#NotificationsData.legalEntities) | List all legal entity IDs intended to receive this particular notification. Use with targetGroup=CUSTOMER |
| title | String (optional) | Title of notification message |
| message | String | Text of notification message |
| level | String |  |
| targetGroup | String | One of "GLOBAL", "CUSTOMER", "USER" |
| link | String (optional) | Http(s) link where user will be directed when clicking notification. If present, 'message' needs to have a special {{link}} placeholder |
| validFrom | String (optional) | Date and time when notification becomes relevant, e.g. should be shown to user. Use this field to notify recipients about something supposed to happen at some point in future |
| expiresOn | String (optional) | Special-purpose field to create 'sticky' notifications: this is a date until which notification will always be shown. Be careful: many 'sticky' notifications can cause bad user experience. Notification will not be displayed after expiry date. |
| origin | String | Name of notification creator |
| additions | Object (optional) | Container object for custom API extensions |

### <a name="NotificationsData.CreatedNotifications"></a>*NotificationsData.CreatedNotifications*


**Type:** *Array of [NotificationsData.CreatedNotificationsItem](#NotificationsData.CreatedNotificationsItem)*


### <a name="NotificationsData.CreatedNotificationsItem"></a>*NotificationsData.CreatedNotificationsItem*


**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| id | String | Identifier assigned to notification by server |
| additions | Object (optional) | Container object for custom API extensions |

### <a name="NotificationsData.ErrorMessage"></a>*NotificationsData.ErrorMessage*


**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| message | String | Description of the exception |
| errorFields | Array of [NotificationsData.errorFields](#NotificationsData.errorFields) | Description of the error and the field that caused the error |
| additions | Object (optional) | Container object for custom API extensions |

### <a name="NotificationsData.Forbidden"></a>*NotificationsData.Forbidden*


**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| message | String |  |
| additions | Object (optional) | Container object for custom API extensions |

### <a name="NotificationsData.InternalServerError"></a>*NotificationsData.InternalServerError*


**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| message | String |  |
| additions | Object (optional) | Container object for custom API extensions |

### <a name="NotificationsData.NotFound"></a>*NotificationsData.NotFound*


**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| message | String |  |
| additions | Object (optional) | Container object for custom API extensions |

### <a name="NotificationsData.NotificationItem"></a>*NotificationsData.NotificationItem*


**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| id | String | Notification identifier |
| title | String (optional) | Title of notification message |
| message | String | Text of notification message |
| level | String |  |
| createdOn | String | Date and time when notification was created |
| link | String (optional) | Link where user will be directed when clicks notification |
| validFrom | String (optional) | Date and time when notification becomes valid and should be shown |
| expiresOn | String (optional) | Date until which notification will be shown. Notification will not be displayed after this date. |
| read | Boolean | Was notification already seen by user |
| origin | String | Name of notification creator |
| additions | Object (optional) | Container object for custom API extensions |

### <a name="NotificationsData.NotificationStreamItem"></a>*NotificationsData.NotificationStreamItem*


**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| id | String | Notification identifier |
| title | String (optional) | Title of notification message |
| message | String | Text of notification message |
| level | String |  |
| createdOn | String | Date and time when notification was created |
| link | String (optional) | Link where user will be directed when clicks notification |
| validFrom | String (optional) | Date and time when notification becomes valid and should be shown |
| expiresOn | String (optional) | Date until which notification will be shown. Notification will not be displayed after this date. |
| additions | Object (optional) | Container object for custom API extensions |

### <a name="NotificationsData.Notifications"></a>*NotificationsData.Notifications*


**Type:** *Array of [NotificationsData.NotificationItem](#NotificationsData.NotificationItem)*


### <a name="NotificationsData.NotificationsStream"></a>*NotificationsData.NotificationsStream*


**Type:** *Array of [NotificationsData.NotificationStreamItem](#NotificationsData.NotificationStreamItem)*


### <a name="NotificationsData.UnprocessableEntity"></a>*NotificationsData.UnprocessableEntity*


**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| errorDetails | [NotificationsData.ErrorMessage](#NotificationsData.ErrorMessage) (optional) |  |
| additions | Object (optional) | Container object for custom API extensions |

### <a name="NotificationsData.UnreadNotificationsCount"></a>*NotificationsData.UnreadNotificationsCount*


**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| unread | [Integer](#Integer) |  |
| additions | Object (optional) | Container object for custom API extensions |

### <a name="NotificationsData.errorFields"></a>*NotificationsData.errorFields*


**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| fieldName | String | The name of the field that caused the error |
| message | String | Description of the error in the field |
| additions | Object (optional) | Container object for custom API extensions |

### <a name="NotificationsData.legalEntities"></a>*NotificationsData.legalEntities*


**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| leId | String | legal entity Id |
| additions | Object (optional) | Container object for custom API extensions |

### <a name="NotificationsData.recipients"></a>*NotificationsData.recipients*


**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| userId | String | User Id |
| additions | Object (optional) | Container object for custom API extensions |

### <a name="Response"></a>*Response*


**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| data | Object | See method descriptions for possible return types |
| headers | Function | Getter headers function |
| status | Number | HTTP status code of the response. |
| statusText | String | HTTP status text of the response. |

---
