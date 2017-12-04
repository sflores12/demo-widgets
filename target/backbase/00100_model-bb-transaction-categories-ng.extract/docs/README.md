# model-bb-transaction-categories-ng


Version: **1.1.4**

Model for widget-bb-transaction-categories-ng

## Imports

* data-bb-categories-management-http-ng
* lib-bb-model-errors
* lib-bb-storage-ng
* vendor-bb-angular

---

## Example

```javascript
import modelTransactionCategoriesModuleKey, {
 modelTransactionCategoriesKey
} from 'model-bb-transaction-categories-ng';

angular
  .module('ExampleModule', [
    modelTransactionCategoriesModuleKey,
  ])
  .factory('someFactory', [
    modelTransactionCategoriesKey,
    // into
    function someFactory(transactionCategoriesModel) {
      // ...
    },
  ]);
```

## Table of Contents
- **transactionCategoriesModel**<br/>    <a href="#transactionCategoriesModel_loadCategories">#loadCategories()</a><br/>    <a href="#transactionCategoriesModel_getCategories">#getCategories()</a><br/>

---

## bbStorageKeys

bbStorage keys enum

---

## transactionCategoriesModel


### <a name="transactionCategoriesModel_loadCategories"></a>*#loadCategories()*

Load the availabe categories.

##### Returns

Promise of Object - *A Promise with all of the availabe categories.*

### <a name="transactionCategoriesModel_getCategories"></a>*#getCategories()*

Load the availabe categories from server or storage.

##### Returns

Promise of Object - *A Promise with all of the availabe categories.*
