# data-bb-action-recipes-http-ng

A data module for accessing the Action Recipes REST API.

## Imports

* vendor-bb-angular

---

## Example

```javascript
import actionRecipesDataModuleKey, {
  actionRecipesDataKey,
} from 'data-bb-action-recipes-http-ng';
```

## Table of Contents
- **Exports**<br/>    <a href="#default">default</a><br/>    <a href="#actionRecipesDataKey">actionRecipesDataKey</a><br/>
- **ActionRecipesData**<br/>    <a href="#ActionRecipesData#getActionRecipeSpecifications">#getActionRecipeSpecifications(params)</a><br/>    <a href="#ActionRecipesData#getActionRecipes">#getActionRecipes(params)</a><br/>    <a href="#ActionRecipesData#postActionRecipesRecord">#postActionRecipesRecord(data)</a><br/>    <a href="#ActionRecipesData#getActionRecipesRecord">#getActionRecipesRecord(recipeId, params)</a><br/>    <a href="#ActionRecipesData#putActionRecipesRecord">#putActionRecipesRecord(recipeId, data)</a><br/>    <a href="#ActionRecipesData#deleteActionRecipesRecord">#deleteActionRecipesRecord(recipeId, data)</a><br/>    <a href="#ActionRecipesData#postActionRecipesDeactivationRequestRecord">#postActionRecipesDeactivationRequestRecord(recipeId, data)</a><br/>    <a href="#ActionRecipesData#postActionRecipesActivationRequestRecord">#postActionRecipesActivationRequestRecord(recipeId, data)</a><br/>    <a href="#ActionRecipesData#schemas">#schemas</a><br/>    <a href="#ActionRecipesData#schemas.postActionRecipesRecord">#schemas.postActionRecipesRecord</a><br/>    <a href="#ActionRecipesData#schemas.putActionRecipesRecord">#schemas.putActionRecipesRecord</a><br/>
- **ActionRecipesDataProvider**<br/>    <a href="#ActionRecipesDataProvider#setBaseUri">#setBaseUri(baseUri)</a><br/>    <a href="#ActionRecipesDataProvider#$get">#$get()</a><br/>
- **Type Definitions**<br/>    <a href="#ActionRecipesData.ActionRecipe">ActionRecipesData.ActionRecipe</a><br/>    <a href="#ActionRecipesData.ActionRecipe.trigger">ActionRecipesData.ActionRecipe.trigger</a><br/>    <a href="#ActionRecipesData.ActionRecipe.trigger.selectors">ActionRecipesData.ActionRecipe.trigger.selectors</a><br/>    <a href="#ActionRecipesData.ActionRecipe.actions">ActionRecipesData.ActionRecipe.actions</a><br/>    <a href="#ActionRecipesData.ActionRecipes">ActionRecipesData.ActionRecipes</a><br/>    <a href="#ActionRecipesData.ActionRecipes.actionRecipes">ActionRecipesData.ActionRecipes.actionRecipes</a><br/>    <a href="#ActionRecipesData.ActionRecipes.actionRecipes.trigger">ActionRecipesData.ActionRecipes.actionRecipes.trigger</a><br/>    <a href="#ActionRecipesData.ActionRecipes.actionRecipes.trigger.selectors">ActionRecipesData.ActionRecipes.actionRecipes.trigger.selectors</a><br/>    <a href="#ActionRecipesData.ActionRecipes.actionRecipes.actions">ActionRecipesData.ActionRecipes.actionRecipes.actions</a><br/>    <a href="#ActionRecipesData.ActionRecipeSpecifications">ActionRecipesData.ActionRecipeSpecifications</a><br/>    <a href="#ActionRecipesData.ActionRecipeSpecifications.actionRecipeSpecifications">ActionRecipesData.ActionRecipeSpecifications.actionRecipeSpecifications</a><br/>    <a href="#ActionRecipesData.ActionRecipeSpecifications.actionRecipeSpecifications.triggerDefinition">ActionRecipesData.ActionRecipeSpecifications.actionRecipeSpecifications.triggerDefinition</a><br/>    <a href="#ActionRecipesData.ActionRecipeSpecifications.actionRecipeSpecifications.triggerDefinition.selectors">ActionRecipesData.ActionRecipeSpecifications.actionRecipeSpecifications.triggerDefinition.selectors</a><br/>    <a href="#ActionRecipesData.ActionRecipeSpecifications.actionRecipeSpecifications.triggerDefinition.filter">ActionRecipesData.ActionRecipeSpecifications.actionRecipeSpecifications.triggerDefinition.filter</a><br/>    <a href="#ActionRecipesData.ActionRecipeSpecifications.actionRecipeSpecifications.actions">ActionRecipesData.ActionRecipeSpecifications.actionRecipeSpecifications.actions</a><br/>    <a href="#ActionRecipesData.IdHolder">ActionRecipesData.IdHolder</a><br/>    <a href="#ActionRecipesData.NewActionRecipe">ActionRecipesData.NewActionRecipe</a><br/>    <a href="#ActionRecipesData.NewActionRecipe.trigger">ActionRecipesData.NewActionRecipe.trigger</a><br/>    <a href="#ActionRecipesData.NewActionRecipe.trigger.selectors">ActionRecipesData.NewActionRecipe.trigger.selectors</a><br/>    <a href="#ActionRecipesData.NewActionRecipe.actions">ActionRecipesData.NewActionRecipe.actions</a><br/>    <a href="#ActionRecipesData.UpdateActionRecipe">ActionRecipesData.UpdateActionRecipe</a><br/>    <a href="#ActionRecipesData.UpdateActionRecipe.trigger">ActionRecipesData.UpdateActionRecipe.trigger</a><br/>    <a href="#ActionRecipesData.UpdateActionRecipe.trigger.selectors">ActionRecipesData.UpdateActionRecipe.trigger.selectors</a><br/>    <a href="#ActionRecipesData.UpdateActionRecipe.actions">ActionRecipesData.UpdateActionRecipe.actions</a><br/>    <a href="#ActionRecipesData.Error">ActionRecipesData.Error</a><br/>    <a href="#Response">Response</a><br/>

## Exports

### <a name="default"></a>*default*

Angular dependency injection module key

**Type:** *String*

### <a name="actionRecipesDataKey"></a>*actionRecipesDataKey*

Angular dependency injection key for the ActionRecipesData service

**Type:** *String*


---

## ActionRecipesData

Public api for data-bb-action-recipes-http-ng service

### <a name="ActionRecipesData#getActionRecipeSpecifications"></a>*#getActionRecipeSpecifications(params)*

get request - Returns data as ActionRecipesData.ActionRecipeSpecifications on success or ActionRecipesData.Error on error

| Parameter | Type | Description |
| :-- | :-- | :-- |
| params | Object | Map of query parameters. |

##### Returns

Promise of <a href="#Response">Response</a> - *A promise resolving to response object*

## Example

```javascript
actionRecipesData
 .getActionRecipeSpecifications(params)
 .then(function(result){
   console.log('headers', result.headers)
   console.log('data', result.data);
 });
```

### <a name="ActionRecipesData#getActionRecipes"></a>*#getActionRecipes(params)*

get request - Returns data as ActionRecipesData.ActionRecipes on success or ActionRecipesData.Error on error

| Parameter | Type | Description |
| :-- | :-- | :-- |
| params | Object (optional) | Map of query parameters. |
| params.trigger | String (optional) | trigger. |
| params.specificationId | String (optional) | specificationId. |
| params.selectors | String (optional) | selectors. |
| params.active | String (optional) | active. |

##### Returns

Promise of <a href="#Response">Response</a> - *A promise resolving to response object*

## Example

```javascript
actionRecipesData
 .getActionRecipes(params)
 .then(function(result){
   console.log('headers', result.headers)
   console.log('data', result.data);
 });
```

### <a name="ActionRecipesData#postActionRecipesRecord"></a>*#postActionRecipesRecord(data)*

post request - Returns data as ActionRecipesData.IdHolder on success or ActionRecipesData.Error|ActionRecipesData.Error on error

| Parameter | Type | Description |
| :-- | :-- | :-- |
| data | <a href="#ActionRecipesData.NewActionRecipe">ActionRecipesData.NewActionRecipe</a> | Data to be sent as the request message data. |

##### Returns

Promise of <a href="#Response">Response</a> - *A promise resolving to response object*

## Example

```javascript
actionRecipesData
 .postActionRecipesRecord(data)
 .then(function(result){
   console.log('headers', result.headers)
   console.log('data', result.data);
 });
```

### <a name="ActionRecipesData#getActionRecipesRecord"></a>*#getActionRecipesRecord(recipeId, params)*

ActionRecipe - Returns data as ActionRecipesData.ActionRecipe on success or ActionRecipesData.Error|ActionRecipesData.Error on error

| Parameter | Type | Description |
| :-- | :-- | :-- |
| recipeId | String |  |
| params | Object | Map of query parameters. |

##### Returns

Promise of <a href="#Response">Response</a> - *A promise resolving to response object*

## Example

```javascript
actionRecipesData
 .getActionRecipesRecord(recipeId, params)
 .then(function(result){
   console.log('headers', result.headers)
   console.log('data', result.data);
 });
```

### <a name="ActionRecipesData#putActionRecipesRecord"></a>*#putActionRecipesRecord(recipeId, data)*

put request - Returns data as ActionRecipesData.Error|ActionRecipesData.Error on error

| Parameter | Type | Description |
| :-- | :-- | :-- |
| recipeId | String |  |
| data | <a href="#ActionRecipesData.UpdateActionRecipe">ActionRecipesData.UpdateActionRecipe</a> | Data to be sent as the request message data. |

##### Returns

Promise of <a href="#Response">Response</a> - *A promise resolving to response object*

## Example

```javascript
actionRecipesData
 .putActionRecipesRecord(recipeId, data)
 .then(function(result){
   console.log('headers', result.headers)
   console.log('data', result.data);
 });
```

### <a name="ActionRecipesData#deleteActionRecipesRecord"></a>*#deleteActionRecipesRecord(recipeId, data)*

delete request - Returns data as ActionRecipesData.Error|ActionRecipesData.Error on error

| Parameter | Type | Description |
| :-- | :-- | :-- |
| recipeId | String |  |
| data | Object (optional) | Data to be sent as the request message data. |

##### Returns

Promise of <a href="#Response">Response</a> - *A promise resolving to response object*

## Example

```javascript
actionRecipesData
 .deleteActionRecipesRecord(recipeId, data)
 .then(function(result){
   console.log('headers', result.headers)
   console.log('data', result.data);
 });
```

### <a name="ActionRecipesData#postActionRecipesDeactivationRequestRecord"></a>*#postActionRecipesDeactivationRequestRecord(recipeId, data)*

post request - Returns data as ActionRecipesData.Error on error

| Parameter | Type | Description |
| :-- | :-- | :-- |
| recipeId | String |  |
| data | Object (optional) | Data to be sent as the request message data. |

##### Returns

Promise of <a href="#Response">Response</a> - *A promise resolving to response object*

## Example

```javascript
actionRecipesData
 .postActionRecipesDeactivationRequestRecord(recipeId, data)
 .then(function(result){
   console.log('headers', result.headers)
   console.log('data', result.data);
 });
```

### <a name="ActionRecipesData#postActionRecipesActivationRequestRecord"></a>*#postActionRecipesActivationRequestRecord(recipeId, data)*

post request - Returns data as ActionRecipesData.Error on error

| Parameter | Type | Description |
| :-- | :-- | :-- |
| recipeId | String |  |
| data | Object (optional) | Data to be sent as the request message data. |

##### Returns

Promise of <a href="#Response">Response</a> - *A promise resolving to response object*

## Example

```javascript
actionRecipesData
 .postActionRecipesActivationRequestRecord(recipeId, data)
 .then(function(result){
   console.log('headers', result.headers)
   console.log('data', result.data);
 });
```
### <a name="ActionRecipesData#schemas"></a>*#schemas*

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

### <a name="ActionRecipesData#schemas.postActionRecipesRecord"></a>*#schemas.postActionRecipesRecord*

An object describing the JSON schema for the postActionRecipesRecord method

**Type:** *Object*


## Example

```javascript
{
  "properties": {
    "name": {
      "type": "string",
      "required": true
    },
    "specificationId": {
      "type": "string",
      "required": true
    },
    "active": {
      "type": "boolean",
      "required": true
    },
    "trigger": {
      "type": "object",
      "properties": {
        "selectors": {
          "type": "array",
          "items": {
            "properties": {
              "path": {
                "type": "string",
                "required": false
              },
              "value": {
                "type": "string",
                "required": false
              }
            }
          },
          "required": false
        },
        "filter": {
          "type": "object",
          "properties": {},
          "required": false
        }
      },
      "required": true
    },
    "actions": {
      "type": "array",
      "items": {
        "properties": {
          "type": {
            "type": "string",
            "required": false
          }
        }
      },
      "required": true
    }
  }
}
```
### <a name="ActionRecipesData#schemas.putActionRecipesRecord"></a>*#schemas.putActionRecipesRecord*

An object describing the JSON schema for the putActionRecipesRecord method

**Type:** *Object*


## Example

```javascript
{
  "properties": {
    "name": {
      "type": "string",
      "required": true
    },
    "specificationId": {
      "type": "string",
      "required": true
    },
    "active": {
      "type": "boolean",
      "required": true
    },
    "trigger": {
      "type": "object",
      "properties": {
        "selectors": {
          "type": "array",
          "items": {
            "properties": {
              "path": {
                "type": "string",
                "required": false
              },
              "value": {
                "type": "string",
                "required": false
              }
            }
          },
          "required": false
        },
        "filter": {
          "type": "object",
          "properties": {},
          "required": false
        }
      },
      "required": false
    },
    "actions": {
      "type": "array",
      "items": {
        "properties": {
          "type": {
            "type": "string",
            "required": false
          }
        }
      },
      "required": false
    }
  }
}
```

---

## ActionRecipesDataProvider

Data service that can be configured with custom base URI.

| Injector Key |
| :-- |
| *data-bb-action-recipes-http-ng:actionRecipesDataProvider* |


### <a name="ActionRecipesDataProvider#setBaseUri"></a>*#setBaseUri(baseUri)*


| Parameter | Type | Description |
| :-- | :-- | :-- |
| baseUri | String | Base URI which will be the prefix for all HTTP requests |

### <a name="ActionRecipesDataProvider#$get"></a>*#$get()*


##### Returns

Object - *An instance of the service*

## Example

```javascript
// Configuring in an angular app:
angular.module(...)
  .config(['data-bb-action-recipes-http-ng:actionRecipesDataProvider',
    (dataProvider) => {
      dataProvider.setBaseUri('http://my-service.com/');
      });

// Configuring With config-bb-providers-ng:
export default [
  ['data-bb-action-recipes-http-ng:actionRecipesDataProvider', (dataProvider) => {
      dataProvider.setBaseUri('http://my-service.com/');
  }]
];
```

## Type Definitions


### <a name="ActionRecipesData.ActionRecipe"></a>*ActionRecipesData.ActionRecipe*


**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| id | String |  |
| name | String |  |
| specificationId | String |  |
| active | Boolean |  |
| userId | String (optional) |  |
| trigger | <a href="#ActionRecipesData.ActionRecipe.trigger">ActionRecipesData.ActionRecipe.trigger</a> |  |
| actions | Array of <a href="#ActionRecipesData.ActionRecipe.actions">ActionRecipesData.ActionRecipe.actions</a> |  |

### <a name="ActionRecipesData.ActionRecipe.trigger"></a>*ActionRecipesData.ActionRecipe.trigger*


**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| selectors | Array (optional) of <a href="#ActionRecipesData.ActionRecipe.trigger.selectors">ActionRecipesData.ActionRecipe.trigger.selectors</a> |  |
| filter | <a href="#ActionRecipesData.ActionRecipe.trigger.filter">ActionRecipesData.ActionRecipe.trigger.filter</a> (optional) |  |

### <a name="ActionRecipesData.ActionRecipe.trigger.selectors"></a>*ActionRecipesData.ActionRecipe.trigger.selectors*


**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| path | String (optional) |  |
| value | String (optional) |  |

### <a name="ActionRecipesData.ActionRecipe.actions"></a>*ActionRecipesData.ActionRecipe.actions*


**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| type | String (optional) |  |
| destination | <a href="#ActionRecipesData.ActionRecipe.actions.destination">ActionRecipesData.ActionRecipe.actions.destination</a> (optional) |  |

### <a name="ActionRecipesData.ActionRecipes"></a>*ActionRecipesData.ActionRecipes*


**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| actionRecipes | Array (optional) of <a href="#ActionRecipesData.ActionRecipes.actionRecipes">ActionRecipesData.ActionRecipes.actionRecipes</a> |  |

### <a name="ActionRecipesData.ActionRecipes.actionRecipes"></a>*ActionRecipesData.ActionRecipes.actionRecipes*


**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| id | String |  |
| name | String |  |
| specificationId | String |  |
| active | Boolean |  |
| userId | String (optional) |  |
| trigger | <a href="#ActionRecipesData.ActionRecipes.actionRecipes.trigger">ActionRecipesData.ActionRecipes.actionRecipes.trigger</a> |  |
| actions | Array of <a href="#ActionRecipesData.ActionRecipes.actionRecipes.actions">ActionRecipesData.ActionRecipes.actionRecipes.actions</a> |  |

### <a name="ActionRecipesData.ActionRecipes.actionRecipes.trigger"></a>*ActionRecipesData.ActionRecipes.actionRecipes.trigger*


**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| selectors | Array (optional) of <a href="#ActionRecipesData.ActionRecipes.actionRecipes.trigger.selectors">ActionRecipesData.ActionRecipes.actionRecipes.trigger.selectors</a> |  |
| filter | <a href="#ActionRecipesData.ActionRecipes.actionRecipes.trigger.filter">ActionRecipesData.ActionRecipes.actionRecipes.trigger.filter</a> (optional) |  |

### <a name="ActionRecipesData.ActionRecipes.actionRecipes.trigger.selectors"></a>*ActionRecipesData.ActionRecipes.actionRecipes.trigger.selectors*


**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| path | String (optional) |  |
| value | String (optional) |  |

### <a name="ActionRecipesData.ActionRecipes.actionRecipes.actions"></a>*ActionRecipesData.ActionRecipes.actionRecipes.actions*


**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| type | String (optional) |  |
| destination | <a href="#ActionRecipesData.ActionRecipes.actionRecipes.actions.destination">ActionRecipesData.ActionRecipes.actionRecipes.actions.destination</a> (optional) |  |

### <a name="ActionRecipesData.ActionRecipeSpecifications"></a>*ActionRecipesData.ActionRecipeSpecifications*


**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| actionRecipeSpecifications | Array (optional) of <a href="#ActionRecipesData.ActionRecipeSpecifications.actionRecipeSpecifications">ActionRecipesData.ActionRecipeSpecifications.actionRecipeSpecifications</a> |  |

### <a name="ActionRecipesData.ActionRecipeSpecifications.actionRecipeSpecifications"></a>*ActionRecipesData.ActionRecipeSpecifications.actionRecipeSpecifications*


**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| id | String (optional) |  |
| name | String (optional) |  |
| type | String (optional) |  |
| userDefinable | Boolean (optional) |  |
| triggerDefinition | <a href="#ActionRecipesData.ActionRecipeSpecifications.actionRecipeSpecifications.triggerDefinition">ActionRecipesData.ActionRecipeSpecifications.actionRecipeSpecifications.triggerDefinition</a> (optional) |  |
| actions | Array (optional) of <a href="#ActionRecipesData.ActionRecipeSpecifications.actionRecipeSpecifications.actions">ActionRecipesData.ActionRecipeSpecifications.actionRecipeSpecifications.actions</a> |  |

### <a name="ActionRecipesData.ActionRecipeSpecifications.actionRecipeSpecifications.triggerDefinition"></a>*ActionRecipesData.ActionRecipeSpecifications.actionRecipeSpecifications.triggerDefinition*


**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| selectors | Array (optional) of <a href="#ActionRecipesData.ActionRecipeSpecifications.actionRecipeSpecifications.triggerDefinition.selectors">ActionRecipesData.ActionRecipeSpecifications.actionRecipeSpecifications.triggerDefinition.selectors</a> |  |
| filter | Array (optional) of <a href="#ActionRecipesData.ActionRecipeSpecifications.actionRecipeSpecifications.triggerDefinition.filter">ActionRecipesData.ActionRecipeSpecifications.actionRecipeSpecifications.triggerDefinition.filter</a> |  |

### <a name="ActionRecipesData.ActionRecipeSpecifications.actionRecipeSpecifications.triggerDefinition.selectors"></a>*ActionRecipesData.ActionRecipeSpecifications.actionRecipeSpecifications.triggerDefinition.selectors*


**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| path | String (optional) |  |
| type | String (optional) |  |

### <a name="ActionRecipesData.ActionRecipeSpecifications.actionRecipeSpecifications.triggerDefinition.filter"></a>*ActionRecipesData.ActionRecipeSpecifications.actionRecipeSpecifications.triggerDefinition.filter*


**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| path | String (optional) |  |
| type | String (optional) |  |

### <a name="ActionRecipesData.ActionRecipeSpecifications.actionRecipeSpecifications.actions"></a>*ActionRecipesData.ActionRecipeSpecifications.actionRecipeSpecifications.actions*


**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| type | String (optional) |  |
| destination | <a href="#ActionRecipesData.ActionRecipeSpecifications.actionRecipeSpecifications.actions.destination">ActionRecipesData.ActionRecipeSpecifications.actionRecipeSpecifications.actions.destination</a> (optional) |  |
| templateId | String (optional) |  |

### <a name="ActionRecipesData.IdHolder"></a>*ActionRecipesData.IdHolder*


**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| id | String (optional) |  |

### <a name="ActionRecipesData.NewActionRecipe"></a>*ActionRecipesData.NewActionRecipe*


**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| name | String |  |
| specificationId | String |  |
| active | Boolean |  |
| trigger | <a href="#ActionRecipesData.NewActionRecipe.trigger">ActionRecipesData.NewActionRecipe.trigger</a> |  |
| actions | Array of <a href="#ActionRecipesData.NewActionRecipe.actions">ActionRecipesData.NewActionRecipe.actions</a> |  |

### <a name="ActionRecipesData.NewActionRecipe.trigger"></a>*ActionRecipesData.NewActionRecipe.trigger*


**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| selectors | Array (optional) of <a href="#ActionRecipesData.NewActionRecipe.trigger.selectors">ActionRecipesData.NewActionRecipe.trigger.selectors</a> |  |
| filter | <a href="#ActionRecipesData.NewActionRecipe.trigger.filter">ActionRecipesData.NewActionRecipe.trigger.filter</a> (optional) |  |

### <a name="ActionRecipesData.NewActionRecipe.trigger.selectors"></a>*ActionRecipesData.NewActionRecipe.trigger.selectors*


**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| path | String (optional) |  |
| value | String (optional) |  |

### <a name="ActionRecipesData.NewActionRecipe.actions"></a>*ActionRecipesData.NewActionRecipe.actions*


**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| type | String (optional) |  |

### <a name="ActionRecipesData.UpdateActionRecipe"></a>*ActionRecipesData.UpdateActionRecipe*


**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| name | String |  |
| specificationId | String |  |
| active | Boolean |  |
| trigger | <a href="#ActionRecipesData.UpdateActionRecipe.trigger">ActionRecipesData.UpdateActionRecipe.trigger</a> (optional) |  |
| actions | Array (optional) of <a href="#ActionRecipesData.UpdateActionRecipe.actions">ActionRecipesData.UpdateActionRecipe.actions</a> |  |

### <a name="ActionRecipesData.UpdateActionRecipe.trigger"></a>*ActionRecipesData.UpdateActionRecipe.trigger*


**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| selectors | Array (optional) of <a href="#ActionRecipesData.UpdateActionRecipe.trigger.selectors">ActionRecipesData.UpdateActionRecipe.trigger.selectors</a> |  |
| filter | <a href="#ActionRecipesData.UpdateActionRecipe.trigger.filter">ActionRecipesData.UpdateActionRecipe.trigger.filter</a> (optional) |  |

### <a name="ActionRecipesData.UpdateActionRecipe.trigger.selectors"></a>*ActionRecipesData.UpdateActionRecipe.trigger.selectors*


**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| path | String (optional) |  |
| value | String (optional) |  |

### <a name="ActionRecipesData.UpdateActionRecipe.actions"></a>*ActionRecipesData.UpdateActionRecipe.actions*


**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| type | String (optional) |  |

### <a name="ActionRecipesData.Error"></a>*ActionRecipesData.Error*


**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| message | String |  |
| errorCode | String |  |

### <a name="Response"></a>*Response*


**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| data | Object | See method descriptions for possible return types |
| headers | Function | Getter headers function |
| status | Number | HTTP status code of the response. |
| statusText | String | HTTP status text of the response. |

---
