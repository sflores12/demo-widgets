# data-bb-contact-http-ng


Version: **0.0.0**

A data module for accessing the Contact REST API.

## Imports

* lib-bb-challenge-ng
* vendor-bb-angular

---

## Example

```javascript
import contactDataModuleKey, {
  contactDataKey,
} from 'data-bb-contact-http-ng';
```

## Table of Contents
- **Exports**<br/>    <a href="#default">default</a><br/>    <a href="#contactDataKey">contactDataKey</a><br/>
- **ContactData**<br/>    <a href="#ContactData_getContacts">#getContacts(params, headers)</a><br/>    <a href="#ContactData_postContactsRecord">#postContactsRecord(data, headers)</a><br/>    <a href="#ContactData_getApprovals">#getApprovals(params, headers)</a><br/>    <a href="#ContactData_getContactsRecord">#getContactsRecord(contactId, params, headers)</a><br/>    <a href="#ContactData_putContactsRecord">#putContactsRecord(contactId, data, headers)</a><br/>    <a href="#ContactData_deleteContactsRecord">#deleteContactsRecord(contactId, data, headers)</a><br/>    <a href="#ContactData_postApprovalsApprovalRecordsRecord">#postApprovalsApprovalRecordsRecord(requestId, data, headers)</a><br/>    <a href="#ContactData_postApprovalsRejectionRecordsRecord">#postApprovalsRejectionRecordsRecord(requestId, data, headers)</a><br/>    <a href="#ContactData_getApprovalsMe">#getApprovalsMe(params, headers)</a><br/>    <a href="#ContactData_schemas">#schemas</a><br/>    <a href="#ContactData_schemas.postContactsRecord">#schemas.postContactsRecord</a><br/>    <a href="#ContactData_schemas.putContactsRecord">#schemas.putContactsRecord</a><br/>
- **ContactDataProvider**<br/>    <a href="#ContactDataProvider_setBaseUri">#setBaseUri(baseUri)</a><br/>    <a href="#ContactDataProvider_$get">#$get()</a><br/>
- **Type Definitions**<br/>    <a href="#Response">Response</a><br/>

## Exports

### <a name="default"></a>*default*

Angular dependency injection module key

**Type:** *String*

### <a name="contactDataKey"></a>*contactDataKey*

Angular dependency injection key for the ContactData service

**Type:** *String*


---

## ContactData

Public api for data-bb-contact-http-ng service

### <a name="ContactData_getContacts"></a>*#getContacts(params, headers)*

Retrieve list of all contacts.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| params | Object (optional) | Map of query parameters. |
| params.saId | String (optional) | The service agreement id that the user is acting in. Will be overriden by a claim in the JWT when available. Eg: 54d4c741-51d1-415a-8523-d0d25141d7b2. |
| params.leId | String (optional) | The legal entity id that the user is acting in. Will be overriden by a claim in the JWT when available. Eg: 5ea2659b-e2e7-4935-b686-190fa75d3f96. |
| params.cursor | String (optional) | Record UUID. As an alternative for specifying 'from' this allows to point to the record to start the selection from. Eg: 76d5be8b-e80d-4842-8ce6-ea67519e8f74. (defaults to "") |
| params.from | Number (optional) | Page Number. Skip over pages of elements by specifying a start value for the query. Eg: 20. (defaults to 0) |
| params.size | Number (optional) | Limit the number of elements on the response. When used in combination with cursor, the value is allowed to be a negative number to indicate requesting records upwards from the starting point indicated by the cursor. Eg: 80. (defaults to 10) |
| params.query | String (optional) | The search term used to search for contacts by their name. Eg: john. |
| headers | Object (optional) | Map of custom header attributes. |

##### Returns

Promise of [Response](#Response) - **

## Example

```javascript
contactData
 .getContacts(params, headers)
 .then(function(result){
   console.log('headers', result.headers)
   console.log('data', result.data);
 });
```

### <a name="ContactData_postContactsRecord"></a>*#postContactsRecord(data, headers)*

Create a new contact

| Parameter | Type | Description |
| :-- | :-- | :-- |
| data | Object (optional) | Data to be sent as the request message data. |
| headers | Object (optional) | Map of custom header attributes. |
| headers.X-MFA | String (optional) | Challenge payload response. Eg: sms challenge="123456789". |

##### Returns

Promise of [Response](#Response) - **

## Example

```javascript
contactData
 .postContactsRecord(data, headers)
 .then(function(result){
   console.log('headers', result.headers)
   console.log('data', result.data);
 });
```

### <a name="ContactData_getApprovals"></a>*#getApprovals(params, headers)*

Retrieve list of all approvals.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| params | Object (optional) | Map of query parameters. |
| headers | Object (optional) | Map of custom header attributes. |

##### Returns

Promise of [Response](#Response) - **

## Example

```javascript
contactData
 .getApprovals(params, headers)
 .then(function(result){
   console.log('headers', result.headers)
   console.log('data', result.data);
 });
```

### <a name="ContactData_getContactsRecord"></a>*#getContactsRecord(contactId, params, headers)*

Get a single contact by ID

| Parameter | Type | Description |
| :-- | :-- | :-- |
| contactId | String |  |
| params | Object (optional) | Map of query parameters. |
| headers | Object (optional) | Map of custom header attributes. |

##### Returns

Promise of [Response](#Response) - **

## Example

```javascript
contactData
 .getContactsRecord(contactId, params, headers)
 .then(function(result){
   console.log('headers', result.headers)
   console.log('data', result.data);
 });
```

### <a name="ContactData_putContactsRecord"></a>*#putContactsRecord(contactId, data, headers)*

Update a single contact by ID

| Parameter | Type | Description |
| :-- | :-- | :-- |
| contactId | String |  |
| data | Object (optional) | Data to be sent as the request message data. |
| headers | Object (optional) | Map of custom header attributes. |
| headers.X-MFA | String (optional) | Challenge payload response. Eg: sms challenge="123456789". |

##### Returns

Promise of [Response](#Response) - **

## Example

```javascript
contactData
 .putContactsRecord(contactId, data, headers)
 .then(function(result){
   console.log('headers', result.headers)
   console.log('data', result.data);
 });
```

### <a name="ContactData_deleteContactsRecord"></a>*#deleteContactsRecord(contactId, data, headers)*

Delete a single contact by ID

| Parameter | Type | Description |
| :-- | :-- | :-- |
| contactId | String |  |
| data | Object (optional) | Data to be sent as the request message data. |
| headers | Object (optional) | Map of custom header attributes. |

##### Returns

Promise of [Response](#Response) - **

## Example

```javascript
contactData
 .deleteContactsRecord(contactId, data, headers)
 .then(function(result){
   console.log('headers', result.headers)
   console.log('data', result.data);
 });
```

### <a name="ContactData_postApprovalsApprovalRecordsRecord"></a>*#postApprovalsApprovalRecordsRecord(requestId, data, headers)*

Entrypoint for approving a draft. Given an approval request is created, a user can approve an approval enquiry that is pointed towards his/her user-group.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| requestId | String |  |
| data | Object (optional) | Data to be sent as the request message data. |
| headers | Object (optional) | Map of custom header attributes. |

##### Returns

Promise of [Response](#Response) - **

## Example

```javascript
contactData
 .postApprovalsApprovalRecordsRecord(requestId, data, headers)
 .then(function(result){
   console.log('headers', result.headers)
   console.log('data', result.data);
 });
```

### <a name="ContactData_postApprovalsRejectionRecordsRecord"></a>*#postApprovalsRejectionRecordsRecord(requestId, data, headers)*

End point for rejecting a draft. Given an approval request is created, a user can reject an approval enquiry that is pointed towards his/her user-group.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| requestId | String |  |
| data | Object (optional) | Data to be sent as the request message data. |
| headers | Object (optional) | Map of custom header attributes. |

##### Returns

Promise of [Response](#Response) - **

## Example

```javascript
contactData
 .postApprovalsRejectionRecordsRecord(requestId, data, headers)
 .then(function(result){
   console.log('headers', result.headers)
   console.log('data', result.data);
 });
```

### <a name="ContactData_getApprovalsMe"></a>*#getApprovalsMe(params, headers)*

Retrieve list of approvals created by me.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| params | Object (optional) | Map of query parameters. |
| headers | Object (optional) | Map of custom header attributes. |

##### Returns

Promise of [Response](#Response) - **

## Example

```javascript
contactData
 .getApprovalsMe(params, headers)
 .then(function(result){
   console.log('headers', result.headers)
   console.log('data', result.data);
 });
```
### <a name="ContactData_schemas"></a>*#schemas*

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

### <a name="ContactData_schemas.postContactsRecord"></a>*#schemas.postContactsRecord*

An object describing the JSON schema for the postContactsRecord method

**Type:** *Object*


## Example

```javascript
{
  "properties": {
    "accessContext": {
      "type": "object",
      "properties": {
        "legalEntityId": {
          "type": "string",
          "maxLength": 36,
          "required": false
        },
        "serviceAgreementId": {
          "type": "string",
          "maxLength": 36,
          "required": false
        }
      },
      "required": false
    }
  }
}
```
### <a name="ContactData_schemas.putContactsRecord"></a>*#schemas.putContactsRecord*

An object describing the JSON schema for the putContactsRecord method

**Type:** *Object*


## Example

```javascript
{
  "properties": {
    "name": {
      "type": "string",
      "maxLength": 70,
      "required": true
    },
    "alias": {
      "type": "string",
      "maxLength": 70,
      "required": false
    },
    "category": {
      "type": "string",
      "required": false
    },
    "contactPerson": {
      "type": "string",
      "maxLength": 70,
      "required": false
    },
    "phoneNumber": {
      "type": "string",
      "required": false
    },
    "emailId": {
      "type": "string",
      "format": "email",
      "required": false
    },
    "addressLine1": {
      "type": "string",
      "maxLength": 70,
      "required": false
    },
    "addressLine2": {
      "type": "string",
      "maxLength": 70,
      "required": false
    },
    "streetName": {
      "type": "string",
      "maxLength": 70,
      "required": false
    },
    "town": {
      "type": "string",
      "maxLength": 35,
      "required": false
    },
    "postCode": {
      "type": "string",
      "maxLength": 16,
      "required": false
    },
    "countrySubDivision": {
      "type": "string",
      "maxLength": 35,
      "required": false
    },
    "country": {
      "type": "string",
      "minLength": 2,
      "maxLength": 2,
      "required": false
    },
    "accounts": {
      "type": "array",
      "items": {
        "properties": {
          "name": {
            "type": "string",
            "maxLength": 70,
            "required": false
          },
          "alias": {
            "type": "string",
            "maxLength": 70,
            "required": false
          },
          "accountNumber": {
            "type": "string",
            "required": false
          },
          "IBAN": {
            "type": "string",
            "required": false
          },
          "BIC": {
            "type": "string",
            "required": false
          },
          "bankCode": {
            "type": "string",
            "required": false
          },
          "bankName": {
            "type": "string",
            "required": false
          },
          "bankAddressLine1": {
            "type": "string",
            "maxLength": 70,
            "required": false
          },
          "bankAddressLine2": {
            "type": "string",
            "maxLength": 70,
            "required": false
          },
          "bankStreetName": {
            "type": "string",
            "maxLength": 70,
            "required": false
          },
          "bankTown": {
            "type": "string",
            "maxLength": 35,
            "required": false
          },
          "bankPostCode": {
            "type": "string",
            "maxLength": 16,
            "required": false
          },
          "bankCountrySubDivision": {
            "type": "string",
            "maxLength": 35,
            "required": false
          },
          "bankCountry": {
            "type": "string",
            "minLength": 2,
            "maxLength": 2,
            "required": false
          },
          "accountHolderAddressLine1": {
            "type": "string",
            "maxLength": 70,
            "required": false
          },
          "accountHolderAddressLine2": {
            "type": "string",
            "maxLength": 70,
            "required": false
          },
          "accountHolderStreetName": {
            "type": "string",
            "maxLength": 70,
            "required": false
          },
          "accountHolderTown": {
            "type": "string",
            "maxLength": 35,
            "required": false
          },
          "accountHolderPostCode": {
            "type": "string",
            "maxLength": 16,
            "required": false
          },
          "accountHolderCountrySubDivision": {
            "type": "string",
            "maxLength": 35,
            "required": false
          },
          "accountHolderCountry": {
            "type": "string",
            "minLength": 2,
            "maxLength": 2,
            "required": false
          }
        }
      },
      "minItems": 1,
      "required": true
    },
    "accessContextScope": {
      "type": "string",
      "enum": [
        "SA",
        "LE",
        "USER"
      ],
      "default": "USER",
      "required": false
    }
  }
}
```

---

## ContactDataProvider

Data service that can be configured with custom base URI.

| Injector Key |
| :-- |
| *data-bb-contact-http-ng:contactDataProvider* |


### <a name="ContactDataProvider_setBaseUri"></a>*#setBaseUri(baseUri)*


| Parameter | Type | Description |
| :-- | :-- | :-- |
| baseUri | String | Base URI which will be the prefix for all HTTP requests |

### <a name="ContactDataProvider_$get"></a>*#$get()*


##### Returns

Object - *An instance of the service*

## Example

```javascript
// Configuring in an angular app:
angular.module(...)
  .config(['data-bb-contact-http-ng:contactDataProvider',
    (dataProvider) => {
      dataProvider.setBaseUri('http://my-service.com/');
      });

// Configuring With config-bb-providers-ng:
export default [
  ['data-bb-contact-http-ng:contactDataProvider', (dataProvider) => {
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
