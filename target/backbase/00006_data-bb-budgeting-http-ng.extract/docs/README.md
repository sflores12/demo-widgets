# data-bb-budgeting-http-ng


Version: **1.0.7**

A data module for accessing the Budgeting REST API.

## Imports

* vendor-bb-angular

---

## Example

```javascript
import budgetingDataModuleKey, {
  budgetingDataKey,
} from 'data-bb-budgeting-http-ng';
```

## Table of Contents
- **Exports**<br/>    <a href="#default">default</a><br/>    <a href="#budgetingDataKey">budgetingDataKey</a><br/>
- **BudgetingData**<br/>    <a href="#BudgetingData_postBudgetsRecord">#postBudgetsRecord(data, headers)</a><br/>    <a href="#BudgetingData_getBudgets">#getBudgets(params, headers)</a><br/>    <a href="#BudgetingData_deleteBudgetsRecord">#deleteBudgetsRecord(id, data, headers)</a><br/>    <a href="#BudgetingData_putBudgetsRecord">#putBudgetsRecord(id, data, headers)</a><br/>    <a href="#BudgetingData_schemas">#schemas</a><br/>    <a href="#BudgetingData_schemas.postBudgetsRecord">#schemas.postBudgetsRecord</a><br/>    <a href="#BudgetingData_schemas.putBudgetsRecord">#schemas.putBudgetsRecord</a><br/>
- **BudgetingDataProvider**<br/>    <a href="#BudgetingDataProvider_setBaseUri">#setBaseUri(baseUri)</a><br/>    <a href="#BudgetingDataProvider_$get">#$get()</a><br/>
- **Type Definitions**<br/>    <a href="#BudgetingData.Budget-BAD-REQUEST">BudgetingData.Budget-BAD-REQUEST</a><br/>    <a href="#BudgetingData.Budget-GET">BudgetingData.Budget-GET</a><br/>    <a href="#BudgetingData.Budget-INTERNAL-SERVER-ERROR">BudgetingData.Budget-INTERNAL-SERVER-ERROR</a><br/>    <a href="#BudgetingData.Budget-LIST">BudgetingData.Budget-LIST</a><br/>    <a href="#BudgetingData.Budget-NOT-FOUND">BudgetingData.Budget-NOT-FOUND</a><br/>    <a href="#BudgetingData.Budget-POST">BudgetingData.Budget-POST</a><br/>    <a href="#BudgetingData.Budget-UPDATE">BudgetingData.Budget-UPDATE</a><br/>    <a href="#BudgetingData.BudgetId">BudgetingData.BudgetId</a><br/>    <a href="#BudgetingData.BudgetUPDATE">BudgetingData.BudgetUPDATE</a><br/>    <a href="#BudgetingData.Currency">BudgetingData.Currency</a><br/>    <a href="#Response">Response</a><br/>

## Exports

### <a name="default"></a>*default*

Angular dependency injection module key

**Type:** *String*

### <a name="budgetingDataKey"></a>*budgetingDataKey*

Angular dependency injection key for the BudgetingData service

**Type:** *String*


---

## BudgetingData

Public api for data-bb-budgeting-http-ng service

### <a name="BudgetingData_postBudgetsRecord"></a>*#postBudgetsRecord(data, headers)*

Create budget

| Parameter | Type | Description |
| :-- | :-- | :-- |
| data | [BudgetingData.Budget-POST](#BudgetingData.Budget-POST) | Data to be sent as the request message data. |
| headers | Object (optional) | Map of custom header attributes. |

##### Returns

Promise of [Response](#Response) - *Resolves data value as [BudgetingData.BudgetId](#BudgetingData.BudgetId) on success  or rejects with data of [BudgetingData.Budget-BAD-REQUEST](#BudgetingData.Budget-BAD-REQUEST), [BudgetingData.Budget-INTERNAL-SERVER-ERROR](#BudgetingData.Budget-INTERNAL-SERVER-ERROR) on error*

## Example

```javascript
budgetingData
 .postBudgetsRecord(data, headers)
 .then(function(result){
   console.log('headers', result.headers)
   console.log('data', result.data);
 });
```

### <a name="BudgetingData_getBudgets"></a>*#getBudgets(params, headers)*

Retrieve list of budgets

| Parameter | Type | Description |
| :-- | :-- | :-- |
| params | Object (optional) | Map of query parameters. |
| params.id | String (optional) | Find by budgetId to which the category belong. |
| params.categoryName | String (optional) | backbase specific category. |
| params.budgetName | String (optional) | Budget name. |
| headers | Object (optional) | Map of custom header attributes. |

##### Returns

Promise of [Response](#Response) - *Resolves data value as [BudgetingData.Budget-LIST](#BudgetingData.Budget-LIST) on success  or rejects with data of [BudgetingData.Budget-BAD-REQUEST](#BudgetingData.Budget-BAD-REQUEST), [BudgetingData.Budget-NOT-FOUND](#BudgetingData.Budget-NOT-FOUND), [BudgetingData.Budget-INTERNAL-SERVER-ERROR](#BudgetingData.Budget-INTERNAL-SERVER-ERROR) on error*

## Example

```javascript
budgetingData
 .getBudgets(params, headers)
 .then(function(result){
   console.log('headers', result.headers)
   console.log('data', result.data);
 });
```

### <a name="BudgetingData_deleteBudgetsRecord"></a>*#deleteBudgetsRecord(id, data, headers)*

Delete budget by Id

| Parameter | Type | Description |
| :-- | :-- | :-- |
| id | String |  |
| data | Object (optional) | Data to be sent as the request message data. |
| headers | Object (optional) | Map of custom header attributes. |

##### Returns

Promise of [Response](#Response) - *Resolves data value as void on success or rejects with data of [BudgetingData.Budget-BAD-REQUEST](#BudgetingData.Budget-BAD-REQUEST), [BudgetingData.Budget-NOT-FOUND](#BudgetingData.Budget-NOT-FOUND), [BudgetingData.Budget-INTERNAL-SERVER-ERROR](#BudgetingData.Budget-INTERNAL-SERVER-ERROR) on error*

## Example

```javascript
budgetingData
 .deleteBudgetsRecord(id, data, headers)
 .then(function(result){
   console.log('headers', result.headers)
   console.log('data', result.data);
 });
```

### <a name="BudgetingData_putBudgetsRecord"></a>*#putBudgetsRecord(id, data, headers)*

Update budget by an Id

| Parameter | Type | Description |
| :-- | :-- | :-- |
| id | String |  |
| data | [BudgetingData.Budget-UPDATE](#BudgetingData.Budget-UPDATE) | Data to be sent as the request message data. |
| headers | Object (optional) | Map of custom header attributes. |

##### Returns

Promise of [Response](#Response) - *Resolves data value as void on success or rejects with data of [BudgetingData.Budget-BAD-REQUEST](#BudgetingData.Budget-BAD-REQUEST), [BudgetingData.Budget-NOT-FOUND](#BudgetingData.Budget-NOT-FOUND), [BudgetingData.Budget-INTERNAL-SERVER-ERROR](#BudgetingData.Budget-INTERNAL-SERVER-ERROR) on error*

## Example

```javascript
budgetingData
 .putBudgetsRecord(id, data, headers)
 .then(function(result){
   console.log('headers', result.headers)
   console.log('data', result.data);
 });
```
### <a name="BudgetingData_schemas"></a>*#schemas*

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

### <a name="BudgetingData_schemas.postBudgetsRecord"></a>*#schemas.postBudgetsRecord*

An object describing the JSON schema for the postBudgetsRecord method

**Type:** *Object*


## Example

```javascript
{
  "properties": {
    "categoryName": {
      "type": "string",
      "enum": [
        "Home",
        "Health & Beauty",
        "Groceries",
        "Eating & Drinking",
        "Transportation",
        "Shopping",
        "Hobbies & Entertainment",
        "Bills & Utilities",
        "Income",
        "Other Income",
        "Savings",
        "Transfer",
        "Fees",
        "Other",
        "Uncategorized"
      ],
      "required": true
    },
    "budgetName": {
      "type": "string",
      "required": true
    },
    "budgetIcon": {
      "type": "string",
      "required": false
    },
    "spendingLimit": {
      "type": "object",
      "properties": {
        "amount": {
          "type": "string",
          "required": true
        },
        "currencyCode": {
          "type": "string",
          "pattern": "^[A-Z]{3}$",
          "required": true
        }
      },
      "required": true
    },
    "period": {
      "required": false
    }
  }
}
```
### <a name="BudgetingData_schemas.putBudgetsRecord"></a>*#schemas.putBudgetsRecord*

An object describing the JSON schema for the putBudgetsRecord method

**Type:** *Object*


## Example

```javascript
{
  "properties": {
    "id": {
      "type": "string",
      "required": true
    },
    "categoryName": {
      "type": "string",
      "enum": [
        "Home",
        "Health & Beauty",
        "Groceries",
        "Eating & Drinking",
        "Transportation",
        "Shopping",
        "Hobbies & Entertainment",
        "Bills & Utilities",
        "Income",
        "Other Income",
        "Savings",
        "Transfer",
        "Fees",
        "Other",
        "Uncategorized"
      ],
      "required": true
    },
    "budgetName": {
      "type": "string",
      "required": true
    },
    "budgetIcon": {
      "type": "string",
      "required": false
    },
    "spendingLimit": {
      "type": "object",
      "properties": {
        "amount": {
          "type": "string",
          "required": true
        },
        "currencyCode": {
          "type": "string",
          "pattern": "^[A-Z]{3}$",
          "required": true
        }
      },
      "required": true
    },
    "spent": {
      "type": "object",
      "properties": {
        "amount": {
          "type": "string",
          "required": true
        },
        "currencyCode": {
          "type": "string",
          "pattern": "^[A-Z]{3}$",
          "required": true
        }
      },
      "required": false
    },
    "spentPercentage": {
      "type": "number",
      "required": false
    },
    "available": {
      "type": "object",
      "properties": {
        "amount": {
          "type": "string",
          "required": true
        },
        "currencyCode": {
          "type": "string",
          "pattern": "^[A-Z]{3}$",
          "required": true
        }
      },
      "required": false
    },
    "period": {
      "required": false
    }
  }
}
```

---

## BudgetingDataProvider

Data service that can be configured with custom base URI.

| Injector Key |
| :-- |
| *data-bb-budgeting-http-ng:budgetingDataProvider* |


### <a name="BudgetingDataProvider_setBaseUri"></a>*#setBaseUri(baseUri)*


| Parameter | Type | Description |
| :-- | :-- | :-- |
| baseUri | String | Base URI which will be the prefix for all HTTP requests |

### <a name="BudgetingDataProvider_$get"></a>*#$get()*


##### Returns

Object - *An instance of the service*

## Example

```javascript
// Configuring in an angular app:
angular.module(...)
  .config(['data-bb-budgeting-http-ng:budgetingDataProvider',
    (dataProvider) => {
      dataProvider.setBaseUri('http://my-service.com/');
      });

// Configuring With config-bb-providers-ng:
export default [
  ['data-bb-budgeting-http-ng:budgetingDataProvider', (dataProvider) => {
      dataProvider.setBaseUri('http://my-service.com/');
  }]
];
```

## Type Definitions


### <a name="BudgetingData.Budget-BAD-REQUEST"></a>*BudgetingData.Budget-BAD-REQUEST*


**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| message | String |  |
| additions | Object (optional) | Container object for custom API extensions |

### <a name="BudgetingData.Budget-GET"></a>*BudgetingData.Budget-GET*


**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| id | String | Primary Key Internal Budget Id |
| categoryName | String | One of "Home", "Health &amp; Beauty", "Groceries", "Eating &amp; Drinking", "Transportation", "Shopping", "Hobbies &amp; Entertainment", "Bills &amp; Utilities", "Income", "Other Income", "Savings", "Transfer", "Fees", "Other", "Uncategorized" |
| budgetName | String | Budget name |
| budgetIcon | String (optional) |  |
| spendingLimit | [BudgetingData.Currency](#BudgetingData.Currency) |  |
| spent | [BudgetingData.Currency](#BudgetingData.Currency) (optional) |  |
| spentPercentage | Number (optional) |  |
| available | [BudgetingData.Currency](#BudgetingData.Currency) (optional) |  |
| period | [*](#*) (optional) |  |
| additions | Object (optional) | Container object for custom API extensions |

### <a name="BudgetingData.Budget-INTERNAL-SERVER-ERROR"></a>*BudgetingData.Budget-INTERNAL-SERVER-ERROR*


**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| message | String |  |
| additions | Object (optional) | Container object for custom API extensions |

### <a name="BudgetingData.Budget-LIST"></a>*BudgetingData.Budget-LIST*


**Type:** *Array of [BudgetingData.BudgetUPDATE](#BudgetingData.BudgetUPDATE)*


### <a name="BudgetingData.Budget-NOT-FOUND"></a>*BudgetingData.Budget-NOT-FOUND*


**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| message | String |  |
| additions | Object (optional) | Container object for custom API extensions |

### <a name="BudgetingData.Budget-POST"></a>*BudgetingData.Budget-POST*


**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| categoryName | String | One of "Home", "Health &amp; Beauty", "Groceries", "Eating &amp; Drinking", "Transportation", "Shopping", "Hobbies &amp; Entertainment", "Bills &amp; Utilities", "Income", "Other Income", "Savings", "Transfer", "Fees", "Other", "Uncategorized" |
| budgetName | String | Specific code of the group the category type belongs to this to be mapped to in integration |
| budgetIcon | String (optional) |  |
| spendingLimit | [BudgetingData.Currency](#BudgetingData.Currency) |  |
| period | [*](#*) (optional) |  |
| additions | Object (optional) | Container object for custom API extensions |

### <a name="BudgetingData.Budget-UPDATE"></a>*BudgetingData.Budget-UPDATE*


**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| id | String | Primary Key Internal Budget Id |
| categoryName | String | One of "Home", "Health &amp; Beauty", "Groceries", "Eating &amp; Drinking", "Transportation", "Shopping", "Hobbies &amp; Entertainment", "Bills &amp; Utilities", "Income", "Other Income", "Savings", "Transfer", "Fees", "Other", "Uncategorized" |
| budgetName | String | Budget name |
| budgetIcon | String (optional) |  |
| spendingLimit | [BudgetingData.Currency](#BudgetingData.Currency) |  |
| spent | [BudgetingData.Currency](#BudgetingData.Currency) (optional) |  |
| spentPercentage | Number (optional) |  |
| available | [BudgetingData.Currency](#BudgetingData.Currency) (optional) |  |
| period | [*](#*) (optional) |  |
| additions | Object (optional) | Container object for custom API extensions |

### <a name="BudgetingData.BudgetId"></a>*BudgetingData.BudgetId*


**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| id | String | Internally used unique identification |
| additions | Object (optional) | Container object for custom API extensions |

### <a name="BudgetingData.BudgetUPDATE"></a>*BudgetingData.BudgetUPDATE*


**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| id | String | Primary Key Internal Budget Id |
| categoryName | String | One of "Home", "Health &amp; Beauty", "Groceries", "Eating &amp; Drinking", "Transportation", "Shopping", "Hobbies &amp; Entertainment", "Bills &amp; Utilities", "Income", "Other Income", "Savings", "Transfer", "Fees", "Other", "Uncategorized" |
| budgetName | String | Budget name |
| budgetIcon | String (optional) |  |
| spendingLimit | [BudgetingData.Currency](#BudgetingData.Currency) |  |
| spent | [BudgetingData.Currency](#BudgetingData.Currency) (optional) |  |
| spentPercentage | Number (optional) |  |
| available | [BudgetingData.Currency](#BudgetingData.Currency) (optional) |  |
| period | [*](#*) (optional) |  |
| additions | Object (optional) | Container object for custom API extensions |

### <a name="BudgetingData.Currency"></a>*BudgetingData.Currency*


**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| amount | String | The amount in the specified currency |
| currencyCode | String | The alpha-3 code (complying with ISO 4217) of the currency that qualifies the amount |
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
