# lib-bb-model-errors


Version: **1.0.106**

Provides a unified set of errors that can be returned from the
Model layer, isolating the Widget and UI layer from the details of the underlying HTTP errors.

## Example

```javascript
// file: my-model.js

import { fromHttpError } from 'lib-bb-model-errors';

function load() {
  return accountData.getAccounts()
    .catch(e => {
      const modelError = fromHttpError(e);
      throw modelError;
    });
} ```

// file: my-controller.js

// get error constants
import { E_AUTH, E_CONNECTIVITY, E_UNEXPECTED } from 'lib-bb-model-errors';
import { Labels, Message } from './constants';

// Map of error constants to user messages.
const errorMessages = {
  [E_AUTH]: Labels.ERROR_AUTH,
  [E_CONNECTIVITY]: Labels.ERROR_CONNECTION,
  [E_UNEXPECTED]: Labels.ERROR_UNEXPECTED,
};

const uiError = modelError => errorMessages[modelError.code];

const $onInit = () => {
  $ctrl.isAccountLoading = true;
  return model
    .load()
    .then(accounts=> {
      $ctrl.isAccountLoading = false;
      $ctrl.accounts = accounts;
    })
    .catch(error => {
      $ctrl.isAccountLoading = false;
      $ctrl.accountsError = uiError(error);
      bus.publish(Message.ACCOUNT_LOAD_FAILED, { error });
    });
};
```

## Table of Contents
- **Exports**<br/>    <a href="#E_AUTH">E_AUTH</a><br/>    <a href="#E_CONNECTIVITY">E_CONNECTIVITY</a><br/>    <a href="#E_UNEXPECTED">E_UNEXPECTED</a><br/>    <a href="#E_USER">E_USER</a><br/>    <a href="#fromHttpError">fromHttpError(errorResponse)</a><br/>
- **Type Definitions**<br/>    <a href="#ModelError">ModelError</a><br/>    <a href="#ErrorCode">ErrorCode</a><br/>

## Exports

### <a name="E_AUTH"></a>*E_AUTH*

An Authentication or Authorization Error

The user is not logged in or is not allowed to access this resource.


**Type:** *<a href="#ErrorCode">ErrorCode</a>*

### <a name="E_CONNECTIVITY"></a>*E_CONNECTIVITY*

A Connectivity Error

The connection either timed out or could not be established.


**Type:** *<a href="#ErrorCode">ErrorCode</a>*

### <a name="E_UNEXPECTED"></a>*E_UNEXPECTED*

An Unexpected Error

Some other unclassified error prevented the completion of the requested action.


**Type:** *<a href="#ErrorCode">ErrorCode</a>*

### <a name="E_USER"></a>*E_USER*

A User Error

Some part of the requested action is invalid - e.g. A the submitted data is invalid


**Type:** *<a href="#ErrorCode">ErrorCode</a>*


### <a name="fromHttpError"></a>*fromHttpError(errorResponse)*

Convert an HTTP Error response to a ModelError

| Parameter | Type | Description |
| :-- | :-- | :-- |
| errorResponse | Object | The error response from the HTTP library |
| errorResponse.status | Number | The HTTP Status code |

##### Returns

<a href="#ModelError">ModelError</a> - *The ModelError related to the HTTP Error*

## Example

```javascript
someHttpDataService.get()
  .then(updateUI)
  .catch(httpErrorResponse => {
    const modelError = fromHttpError(httpErrorResponse);
    throw modelError;
  });
```

## Type Definitions


### <a name="ModelError"></a>*ModelError*


**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| code | <a href="#ErrorCode">ErrorCode</a> |  |

### <a name="ErrorCode"></a>*ErrorCode*


**Type:** *Symbol*


---
