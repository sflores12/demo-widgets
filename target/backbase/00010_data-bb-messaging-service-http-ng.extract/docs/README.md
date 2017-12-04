# data-bb-messaging-service-http-ng


Version: **2.1.1**

A data module for accessing the Messaging Service REST API.

## Imports

* vendor-bb-angular

---

## Example

```javascript
import messagingServiceDataModuleKey, {
  messagingServiceDataKey,
} from 'data-bb-messaging-service-http-ng';
```

## Table of Contents
- **Exports**<br/>    <a href="#default">default</a><br/>    <a href="#messagingServiceDataKey">messagingServiceDataKey</a><br/>
- **MessagingServiceData**<br/>    <a href="#MessagingServiceData_getMessageCenterUsersTopics">#getMessageCenterUsersTopics(userId, params, headers)</a><br/>    <a href="#MessagingServiceData_postMessageCenterUsersTopicsRecord">#postMessageCenterUsersTopicsRecord(userId, data, headers)</a><br/>    <a href="#MessagingServiceData_getMessageCenterUsersUnreadConversationCount">#getMessageCenterUsersUnreadConversationCount(userId, params, headers)</a><br/>    <a href="#MessagingServiceData_getMessageCenterUsersDrafts">#getMessageCenterUsersDrafts(userId, params, headers)</a><br/>    <a href="#MessagingServiceData_postMessageCenterUsersDraftsRecord">#postMessageCenterUsersDraftsRecord(userId, data, headers)</a><br/>    <a href="#MessagingServiceData_getMessageCenterUsersConversations">#getMessageCenterUsersConversations(userId, params, headers)</a><br/>    <a href="#MessagingServiceData_deleteMessageCenterUsersTopicsRecord">#deleteMessageCenterUsersTopicsRecord(userId, topicId, data, headers)</a><br/>    <a href="#MessagingServiceData_getMessageCenterUsersTopicsSubscriptions">#getMessageCenterUsersTopicsSubscriptions(userId, topicId, params, headers)</a><br/>    <a href="#MessagingServiceData_postMessageCenterUsersTopicsSubscriptionsRecord">#postMessageCenterUsersTopicsSubscriptionsRecord(userId, topicId, data, headers)</a><br/>    <a href="#MessagingServiceData_deleteMessageCenterUsersTopicsSubscriptionsRecord">#deleteMessageCenterUsersTopicsSubscriptionsRecord(userId, topicId, subscriptionId, subscriberId, data, headers)</a><br/>    <a href="#MessagingServiceData_putMessageCenterUsersDraftsRecord">#putMessageCenterUsersDraftsRecord(userId, draftId, data, headers)</a><br/>    <a href="#MessagingServiceData_deleteMessageCenterUsersDraftsRecord">#deleteMessageCenterUsersDraftsRecord(userId, draftId, data, headers)</a><br/>    <a href="#MessagingServiceData_postMessageCenterUsersDraftsSendDraftRequestRecord">#postMessageCenterUsersDraftsSendDraftRequestRecord(userId, draftId, data, headers)</a><br/>    <a href="#MessagingServiceData_deleteMessageCenterUsersConversationsRecord">#deleteMessageCenterUsersConversationsRecord(userId, conversationId, data, headers)</a><br/>    <a href="#MessagingServiceData_postMessageCenterUsersConversationsArchiveConversationRequestRecord">#postMessageCenterUsersConversationsArchiveConversationRequestRecord(userId, conversationId, data, headers)</a><br/>    <a href="#MessagingServiceData_getMessageCenterUsersConversationsDrafts">#getMessageCenterUsersConversationsDrafts(userId, conversationId, params, headers)</a><br/>    <a href="#MessagingServiceData_postMessageCenterUsersConversationsDraftsRecord">#postMessageCenterUsersConversationsDraftsRecord(userId, conversationId, data, headers)</a><br/>    <a href="#MessagingServiceData_getMessageCenterUsersConversationsMessages">#getMessageCenterUsersConversationsMessages(userId, conversationId, params, headers)</a><br/>    <a href="#MessagingServiceData_putMessageCenterUsersConversationsDraftsRecord">#putMessageCenterUsersConversationsDraftsRecord(userId, conversationId, draftId, data, headers)</a><br/>    <a href="#MessagingServiceData_postMessageCenterUsersConversationsMessagesReadMessageRequestRecord">#postMessageCenterUsersConversationsMessagesReadMessageRequestRecord(userId, conversationId, messageId, data, headers)</a><br/>    <a href="#MessagingServiceData_schemas">#schemas</a><br/>    <a href="#MessagingServiceData_schemas.postMessageCenterUsersTopicsRecord">#schemas.postMessageCenterUsersTopicsRecord</a><br/>    <a href="#MessagingServiceData_schemas.postMessageCenterUsersDraftsRecord">#schemas.postMessageCenterUsersDraftsRecord</a><br/>    <a href="#MessagingServiceData_schemas.postMessageCenterUsersTopicsSubscriptionsRecord">#schemas.postMessageCenterUsersTopicsSubscriptionsRecord</a><br/>    <a href="#MessagingServiceData_schemas.putMessageCenterUsersDraftsRecord">#schemas.putMessageCenterUsersDraftsRecord</a><br/>    <a href="#MessagingServiceData_schemas.postMessageCenterUsersDraftsSendDraftRequestRecord">#schemas.postMessageCenterUsersDraftsSendDraftRequestRecord</a><br/>    <a href="#MessagingServiceData_schemas.postMessageCenterUsersConversationsDraftsRecord">#schemas.postMessageCenterUsersConversationsDraftsRecord</a><br/>    <a href="#MessagingServiceData_schemas.putMessageCenterUsersConversationsDraftsRecord">#schemas.putMessageCenterUsersConversationsDraftsRecord</a><br/>
- **MessagingServiceDataProvider**<br/>    <a href="#MessagingServiceDataProvider_setBaseUri">#setBaseUri(baseUri)</a><br/>    <a href="#MessagingServiceDataProvider_$get">#$get()</a><br/>
- **Type Definitions**<br/>    <a href="#Response">Response</a><br/>

## Exports

### <a name="default"></a>*default*

Angular dependency injection module key

**Type:** *String*

### <a name="messagingServiceDataKey"></a>*messagingServiceDataKey*

Angular dependency injection key for the MessagingServiceData service

**Type:** *String*


---

## MessagingServiceData

Public api for data-bb-messaging-service-http-ng service

### <a name="MessagingServiceData_getMessageCenterUsersTopics"></a>*#getMessageCenterUsersTopics(userId, params, headers)*

Returns a list of available topics. Each topic is associated with a list of subscribers. Selection of a topic determines a target destination a message is to be sent to.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| userId | String |  |
| params | Object (optional) | Map of query parameters. |
| headers | Object (optional) | Map of custom header attributes. |

##### Returns

Promise of [Response](#Response) - **

## Example

```javascript
messagingServiceData
 .getMessageCenterUsersTopics(userId, params, headers)
 .then(function(result){
   console.log('headers', result.headers)
   console.log('data', result.data);
 });
```

### <a name="MessagingServiceData_postMessageCenterUsersTopicsRecord"></a>*#postMessageCenterUsersTopicsRecord(userId, data, headers)*

Creates a new topic

| Parameter | Type | Description |
| :-- | :-- | :-- |
| userId | String |  |
| data | Object (optional) | Data to be sent as the request message data. |
| headers | Object (optional) | Map of custom header attributes. |

##### Returns

Promise of [Response](#Response) - **

## Example

```javascript
messagingServiceData
 .postMessageCenterUsersTopicsRecord(userId, data, headers)
 .then(function(result){
   console.log('headers', result.headers)
   console.log('data', result.data);
 });
```

### <a name="MessagingServiceData_getMessageCenterUsersUnreadConversationCount"></a>*#getMessageCenterUsersUnreadConversationCount(userId, params, headers)*

Returns unread conversation count for a given user

| Parameter | Type | Description |
| :-- | :-- | :-- |
| userId | String |  |
| params | Object (optional) | Map of query parameters. |
| headers | Object (optional) | Map of custom header attributes. |

##### Returns

Promise of [Response](#Response) - **

## Example

```javascript
messagingServiceData
 .getMessageCenterUsersUnreadConversationCount(userId, params, headers)
 .then(function(result){
   console.log('headers', result.headers)
   console.log('data', result.data);
 });
```

### <a name="MessagingServiceData_getMessageCenterUsersDrafts"></a>*#getMessageCenterUsersDrafts(userId, params, headers)*

Returns a list of user's drafts

| Parameter | Type | Description |
| :-- | :-- | :-- |
| userId | String |  |
| params | Object (optional) | Map of query parameters. |
| params.sort | String (optional) | Comma separated field names. If prefix is not given, results will be ordered in ascending order. If prefix - is provided, results will be ordered in descending fashion. Eg: subject,-updatedDate. (defaults to -updatedDate) |
| params.recipients | String (optional) | It is a filtering parameter. It represents a list of users to whom the draft is addressed to. Every user is identified by an external user ID. The resulting set will include drafts that are addressed to these users only. The ";" character is used as a delimiter. Eg: sarah;john. |
| params.category | String (optional) | A category a conversation/draft belongs to. Eg: Loans. |
| params.subject | String (optional) | A topic of a conversation/draft. Eg: Inquiry About the Loans. |
| headers | Object (optional) | Map of custom header attributes. |

##### Returns

Promise of [Response](#Response) - **

## Example

```javascript
messagingServiceData
 .getMessageCenterUsersDrafts(userId, params, headers)
 .then(function(result){
   console.log('headers', result.headers)
   console.log('data', result.data);
 });
```

### <a name="MessagingServiceData_postMessageCenterUsersDraftsRecord"></a>*#postMessageCenterUsersDraftsRecord(userId, data, headers)*

Creates a draft with a specified user as an author

| Parameter | Type | Description |
| :-- | :-- | :-- |
| userId | String |  |
| data | Object (optional) | Data to be sent as the request message data. |
| headers | Object | Map of custom header attributes. |
| headers.X-BBSVC-Request-Id | String | Request Idempotency Identifier. |

##### Returns

Promise of [Response](#Response) - **

## Example

```javascript
messagingServiceData
 .postMessageCenterUsersDraftsRecord(userId, data, headers)
 .then(function(result){
   console.log('headers', result.headers)
   console.log('data', result.data);
 });
```

### <a name="MessagingServiceData_getMessageCenterUsersConversations"></a>*#getMessageCenterUsersConversations(userId, params, headers)*

Returns preview of conversations available for user

| Parameter | Type | Description |
| :-- | :-- | :-- |
| userId | String |  |
| params | Object (optional) | Map of query parameters. |
| params.status | String (optional) | Type of a conversation. Essentially it is used for selecting a mailbox. Currently supported types: received (i.e., inbox), sent (i.e., outbox), archived (i.e., archive). If the parameter is not specified, received (non archived, non deleted) conversations are returned by default. |
| params.sort | String (optional) | Comma separated field names. If prefix is not given, results will be ordered in ascending order. If prefix - is provided, results will be ordered in descending fashion. Eg: subject,-timestamp. (defaults to -timestamp) |
| params.sender | String (optional) | It is a filtering parameter. It represents a user that takes part in the conversation. It is an external user ID. The resulting list will include only those conversatons where the specified user takes part in. Eg: lisa. |
| params.from | Number (optional) | The offset from which the results are listed. Eg: 3. (defaults to 0) |
| params.size | Number (optional) | Maximum number of elements to be returned. Eg: 20. (defaults to 10) |
| params.category | String (optional) | A category a conversation/draft belongs to. Eg: Loans. |
| params.subject | String (optional) | A topic of a conversation/draft. Eg: Inquiry About the Loans. |
| headers | Object (optional) | Map of custom header attributes. |

##### Returns

Promise of [Response](#Response) - **

## Example

```javascript
messagingServiceData
 .getMessageCenterUsersConversations(userId, params, headers)
 .then(function(result){
   console.log('headers', result.headers)
   console.log('data', result.data);
 });
```

### <a name="MessagingServiceData_deleteMessageCenterUsersTopicsRecord"></a>*#deleteMessageCenterUsersTopicsRecord(userId, topicId, data, headers)*

Deletes a topic of the given ID

| Parameter | Type | Description |
| :-- | :-- | :-- |
| userId | String |  |
| topicId | String |  |
| data | Object (optional) | Data to be sent as the request message data. |
| headers | Object (optional) | Map of custom header attributes. |

##### Returns

Promise of [Response](#Response) - **

## Example

```javascript
messagingServiceData
 .deleteMessageCenterUsersTopicsRecord(userId, topicId, data, headers)
 .then(function(result){
   console.log('headers', result.headers)
   console.log('data', result.data);
 });
```

### <a name="MessagingServiceData_getMessageCenterUsersTopicsSubscriptions"></a>*#getMessageCenterUsersTopicsSubscriptions(userId, topicId, params, headers)*

Returns a list of subscriptions for a topic

| Parameter | Type | Description |
| :-- | :-- | :-- |
| userId | String |  |
| topicId | String |  |
| params | Object (optional) | Map of query parameters. |
| headers | Object (optional) | Map of custom header attributes. |

##### Returns

Promise of [Response](#Response) - **

## Example

```javascript
messagingServiceData
 .getMessageCenterUsersTopicsSubscriptions(userId, topicId, params, headers)
 .then(function(result){
   console.log('headers', result.headers)
   console.log('data', result.data);
 });
```

### <a name="MessagingServiceData_postMessageCenterUsersTopicsSubscriptionsRecord"></a>*#postMessageCenterUsersTopicsSubscriptionsRecord(userId, topicId, data, headers)*

Add a new subscription to the given topic

| Parameter | Type | Description |
| :-- | :-- | :-- |
| userId | String |  |
| topicId | String |  |
| data | Object (optional) | Data to be sent as the request message data. |
| headers | Object (optional) | Map of custom header attributes. |

##### Returns

Promise of [Response](#Response) - **

## Example

```javascript
messagingServiceData
 .postMessageCenterUsersTopicsSubscriptionsRecord(userId, topicId, data, headers)
 .then(function(result){
   console.log('headers', result.headers)
   console.log('data', result.data);
 });
```

### <a name="MessagingServiceData_deleteMessageCenterUsersTopicsSubscriptionsRecord"></a>*#deleteMessageCenterUsersTopicsSubscriptionsRecord(userId, topicId, subscriptionId, subscriberId, data, headers)*

Remove a subscription for a topic

| Parameter | Type | Description |
| :-- | :-- | :-- |
| userId | String |  |
| topicId | String |  |
| subscriptionId | String |  |
| subscriberId | String |  |
| data | Object (optional) | Data to be sent as the request message data. |
| headers | Object (optional) | Map of custom header attributes. |

##### Returns

Promise of [Response](#Response) - **

## Example

```javascript
messagingServiceData
 .deleteMessageCenterUsersTopicsSubscriptionsRecord(userId, topicId, subscriptionId, subscriberId, data, headers)
 .then(function(result){
   console.log('headers', result.headers)
   console.log('data', result.data);
 });
```

### <a name="MessagingServiceData_putMessageCenterUsersDraftsRecord"></a>*#putMessageCenterUsersDraftsRecord(userId, draftId, data, headers)*

Updates draft with a given id for a given user

| Parameter | Type | Description |
| :-- | :-- | :-- |
| userId | String |  |
| draftId | String |  |
| data | Object (optional) | Data to be sent as the request message data. |
| headers | Object | Map of custom header attributes. |
| headers.X-BBSVC-Request-Id | String | Request Idempotency Identifier. |

##### Returns

Promise of [Response](#Response) - **

## Example

```javascript
messagingServiceData
 .putMessageCenterUsersDraftsRecord(userId, draftId, data, headers)
 .then(function(result){
   console.log('headers', result.headers)
   console.log('data', result.data);
 });
```

### <a name="MessagingServiceData_deleteMessageCenterUsersDraftsRecord"></a>*#deleteMessageCenterUsersDraftsRecord(userId, draftId, data, headers)*

Deletes given draft

| Parameter | Type | Description |
| :-- | :-- | :-- |
| userId | String |  |
| draftId | String |  |
| data | Object (optional) | Data to be sent as the request message data. |
| headers | Object (optional) | Map of custom header attributes. |

##### Returns

Promise of [Response](#Response) - **

## Example

```javascript
messagingServiceData
 .deleteMessageCenterUsersDraftsRecord(userId, draftId, data, headers)
 .then(function(result){
   console.log('headers', result.headers)
   console.log('data', result.data);
 });
```

### <a name="MessagingServiceData_postMessageCenterUsersDraftsSendDraftRequestRecord"></a>*#postMessageCenterUsersDraftsSendDraftRequestRecord(userId, draftId, data, headers)*

Creates send request for given draft. If body is added draft will be updated with provided data.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| userId | String |  |
| draftId | String |  |
| data | Object (optional) | Data to be sent as the request message data. |
| headers | Object | Map of custom header attributes. |
| headers.X-BBSVC-Request-Id | String | Request Idempotency Identifier. |

##### Returns

Promise of [Response](#Response) - **

## Example

```javascript
messagingServiceData
 .postMessageCenterUsersDraftsSendDraftRequestRecord(userId, draftId, data, headers)
 .then(function(result){
   console.log('headers', result.headers)
   console.log('data', result.data);
 });
```

### <a name="MessagingServiceData_deleteMessageCenterUsersConversationsRecord"></a>*#deleteMessageCenterUsersConversationsRecord(userId, conversationId, data, headers)*

Deletes conversation for given user. However conversation may be resurrected if another party updates it.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| userId | String |  |
| conversationId | String |  |
| data | Object (optional) | Data to be sent as the request message data. |
| headers | Object | Map of custom header attributes. |
| headers.X-BBSVC-Request-Id | String | Request Idempotency Identifier. |

##### Returns

Promise of [Response](#Response) - **

## Example

```javascript
messagingServiceData
 .deleteMessageCenterUsersConversationsRecord(userId, conversationId, data, headers)
 .then(function(result){
   console.log('headers', result.headers)
   console.log('data', result.data);
 });
```

### <a name="MessagingServiceData_postMessageCenterUsersConversationsArchiveConversationRequestRecord"></a>*#postMessageCenterUsersConversationsArchiveConversationRequestRecord(userId, conversationId, data, headers)*

Puts given conversation in user's archive box

| Parameter | Type | Description |
| :-- | :-- | :-- |
| userId | String |  |
| conversationId | String |  |
| data | Object (optional) | Data to be sent as the request message data. |
| headers | Object | Map of custom header attributes. |
| headers.X-BBSVC-Request-Id | String | Request Idempotency Identifier. |

##### Returns

Promise of [Response](#Response) - **

## Example

```javascript
messagingServiceData
 .postMessageCenterUsersConversationsArchiveConversationRequestRecord(userId, conversationId, data, headers)
 .then(function(result){
   console.log('headers', result.headers)
   console.log('data', result.data);
 });
```

### <a name="MessagingServiceData_getMessageCenterUsersConversationsDrafts"></a>*#getMessageCenterUsersConversationsDrafts(userId, conversationId, params, headers)*

Returns drafts that have been created in conversation by given user

| Parameter | Type | Description |
| :-- | :-- | :-- |
| userId | String |  |
| conversationId | String |  |
| params | Object (optional) | Map of query parameters. |
| params.status | String (optional) | statuses of drafts to return. No statuses would match no drafts. |
| params.limit | Number (optional) | maximum amount of drafts to provide. |
| headers | Object (optional) | Map of custom header attributes. |

##### Returns

Promise of [Response](#Response) - **

## Example

```javascript
messagingServiceData
 .getMessageCenterUsersConversationsDrafts(userId, conversationId, params, headers)
 .then(function(result){
   console.log('headers', result.headers)
   console.log('data', result.data);
 });
```

### <a name="MessagingServiceData_postMessageCenterUsersConversationsDraftsRecord"></a>*#postMessageCenterUsersConversationsDraftsRecord(userId, conversationId, data, headers)*

Creates a draft in conversation for user

| Parameter | Type | Description |
| :-- | :-- | :-- |
| userId | String |  |
| conversationId | String |  |
| data | Object (optional) | Data to be sent as the request message data. |
| headers | Object | Map of custom header attributes. |
| headers.X-BBSVC-Request-Id | String | Request Idempotency Identifier. |

##### Returns

Promise of [Response](#Response) - **

## Example

```javascript
messagingServiceData
 .postMessageCenterUsersConversationsDraftsRecord(userId, conversationId, data, headers)
 .then(function(result){
   console.log('headers', result.headers)
   console.log('data', result.data);
 });
```

### <a name="MessagingServiceData_getMessageCenterUsersConversationsMessages"></a>*#getMessageCenterUsersConversationsMessages(userId, conversationId, params, headers)*

Returns all messages that have been sent in conversation by all parties

| Parameter | Type | Description |
| :-- | :-- | :-- |
| userId | String |  |
| conversationId | String |  |
| params | Object (optional) | Map of query parameters. |
| headers | Object (optional) | Map of custom header attributes. |

##### Returns

Promise of [Response](#Response) - **

## Example

```javascript
messagingServiceData
 .getMessageCenterUsersConversationsMessages(userId, conversationId, params, headers)
 .then(function(result){
   console.log('headers', result.headers)
   console.log('data', result.data);
 });
```

### <a name="MessagingServiceData_putMessageCenterUsersConversationsDraftsRecord"></a>*#putMessageCenterUsersConversationsDraftsRecord(userId, conversationId, draftId, data, headers)*

Updates draft in conversation for a given user

| Parameter | Type | Description |
| :-- | :-- | :-- |
| userId | String |  |
| conversationId | String |  |
| draftId | String |  |
| data | Object (optional) | Data to be sent as the request message data. |
| headers | Object | Map of custom header attributes. |
| headers.X-BBSVC-Request-Id | String | Request Idempotency Identifier. |

##### Returns

Promise of [Response](#Response) - **

## Example

```javascript
messagingServiceData
 .putMessageCenterUsersConversationsDraftsRecord(userId, conversationId, draftId, data, headers)
 .then(function(result){
   console.log('headers', result.headers)
   console.log('data', result.data);
 });
```

### <a name="MessagingServiceData_postMessageCenterUsersConversationsMessagesReadMessageRequestRecord"></a>*#postMessageCenterUsersConversationsMessagesReadMessageRequestRecord(userId, conversationId, messageId, data, headers)*

Marks given message as read

| Parameter | Type | Description |
| :-- | :-- | :-- |
| userId | String |  |
| conversationId | String |  |
| messageId | String |  |
| data | Object (optional) | Data to be sent as the request message data. |
| headers | Object | Map of custom header attributes. |
| headers.X-BBSVC-Request-Id | String | Request Idempotency Identifier. |

##### Returns

Promise of [Response](#Response) - **

## Example

```javascript
messagingServiceData
 .postMessageCenterUsersConversationsMessagesReadMessageRequestRecord(userId, conversationId, messageId, data, headers)
 .then(function(result){
   console.log('headers', result.headers)
   console.log('data', result.data);
 });
```
### <a name="MessagingServiceData_schemas"></a>*#schemas*

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

### <a name="MessagingServiceData_schemas.postMessageCenterUsersTopicsRecord"></a>*#schemas.postMessageCenterUsersTopicsRecord*

An object describing the JSON schema for the postMessageCenterUsersTopicsRecord method

**Type:** *Object*


## Example

```javascript
{
  "properties": {}
}
```
### <a name="MessagingServiceData_schemas.postMessageCenterUsersDraftsRecord"></a>*#schemas.postMessageCenterUsersDraftsRecord*

An object describing the JSON schema for the postMessageCenterUsersDraftsRecord method

**Type:** *Object*


## Example

```javascript
{
  "properties": {}
}
```
### <a name="MessagingServiceData_schemas.postMessageCenterUsersTopicsSubscriptionsRecord"></a>*#schemas.postMessageCenterUsersTopicsSubscriptionsRecord*

An object describing the JSON schema for the postMessageCenterUsersTopicsSubscriptionsRecord method

**Type:** *Object*


## Example

```javascript
{
  "properties": {
    "externalUserId": {
      "type": "string",
      "required": true
    }
  }
}
```
### <a name="MessagingServiceData_schemas.putMessageCenterUsersDraftsRecord"></a>*#schemas.putMessageCenterUsersDraftsRecord*

An object describing the JSON schema for the putMessageCenterUsersDraftsRecord method

**Type:** *Object*


## Example

```javascript
{
  "properties": {}
}
```
### <a name="MessagingServiceData_schemas.postMessageCenterUsersDraftsSendDraftRequestRecord"></a>*#schemas.postMessageCenterUsersDraftsSendDraftRequestRecord*

An object describing the JSON schema for the postMessageCenterUsersDraftsSendDraftRequestRecord method

**Type:** *Object*


## Example

```javascript
{
  "properties": {}
}
```
### <a name="MessagingServiceData_schemas.postMessageCenterUsersConversationsDraftsRecord"></a>*#schemas.postMessageCenterUsersConversationsDraftsRecord*

An object describing the JSON schema for the postMessageCenterUsersConversationsDraftsRecord method

**Type:** *Object*


## Example

```javascript
{
  "properties": {}
}
```
### <a name="MessagingServiceData_schemas.putMessageCenterUsersConversationsDraftsRecord"></a>*#schemas.putMessageCenterUsersConversationsDraftsRecord*

An object describing the JSON schema for the putMessageCenterUsersConversationsDraftsRecord method

**Type:** *Object*


## Example

```javascript
{
  "properties": {}
}
```

---

## MessagingServiceDataProvider

Data service that can be configured with custom base URI.

| Injector Key |
| :-- |
| *data-bb-messaging-service-http-ng:messagingServiceDataProvider* |


### <a name="MessagingServiceDataProvider_setBaseUri"></a>*#setBaseUri(baseUri)*


| Parameter | Type | Description |
| :-- | :-- | :-- |
| baseUri | String | Base URI which will be the prefix for all HTTP requests |

### <a name="MessagingServiceDataProvider_$get"></a>*#$get()*


##### Returns

Object - *An instance of the service*

## Example

```javascript
// Configuring in an angular app:
angular.module(...)
  .config(['data-bb-messaging-service-http-ng:messagingServiceDataProvider',
    (dataProvider) => {
      dataProvider.setBaseUri('http://my-service.com/');
      });

// Configuring With config-bb-providers-ng:
export default [
  ['data-bb-messaging-service-http-ng:messagingServiceDataProvider', (dataProvider) => {
      dataProvider.setBaseUri('http://my-service.com/');
  }]
];
```

## Type Definitions


### <a name="Response"></a>*Response*


**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| data | Object | See method descriptions for possible return types |
| headers | Function | Getter headers function |
| status | Number | HTTP status code of the response. |
| statusText | String | HTTP status text of the response. |

---
