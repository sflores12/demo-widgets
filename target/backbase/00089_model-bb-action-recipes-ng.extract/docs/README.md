# model-bb-action-recipes-ng


Version: **2.1.8**

Model for widget-bb-action-recipes-ng

## Imports

* data-bb-action-recipes-http-ng
* data-bb-product-summary-http-ng
* lib-bb-model-errors
* vendor-bb-angular

---

## Example

```javascript
import modelActionRecipesModuleKey, { modelActionRecipesKey } from 'model-bb-action-recipes-ng';

angular
  .module('ExampleModule', [
    modelActionRecipesModuleKey,
  ])
  .factory('someFactory', [
    modelActionRecipesKey,
    // into
    function someFactory(actionRecipesModel) {
      // ...
    },
  ]);
```

## Table of Contents
- **actionRecipesModel**<br/>    <a href="#actionRecipesModel_loadRecipes">#loadRecipes()</a><br/>    <a href="#actionRecipesModel_loadSpecifications">#loadSpecifications()</a><br/>    <a href="#actionRecipesModel_loadAccounts">#loadAccounts()</a><br/>    <a href="#actionRecipesModel_load">#load()</a><br/>    <a href="#actionRecipesModel_activate">#activate(recipe)</a><br/>    <a href="#actionRecipesModel_deactivate">#deactivate(recipe)</a><br/>

---

## actionRecipesModel

Action recipes  widget model service.

### <a name="actionRecipesModel_loadRecipes"></a>*#loadRecipes()*

Load users recipe data.

##### Returns

Promise of Object - *A Promise with an array of Recipes*

### <a name="actionRecipesModel_loadSpecifications"></a>*#loadSpecifications()*

Load available Recipe Specifications

##### Returns

Promise of Object - *A Promise with an array of specification data*

### <a name="actionRecipesModel_loadAccounts"></a>*#loadAccounts()*

Load users account data

##### Returns

Promise of Object - *A Promise with an array of account data*

### <a name="actionRecipesModel_load"></a>*#load()*

Load all necessary data to display Recipes:
Recipes, Specifications and Accounts.

##### Returns

Promise of Object - *A Promise with an array of account data*

### <a name="actionRecipesModel_activate"></a>*#activate(recipe)*

Activates given action recipe

| Parameter | Type | Description |
| :-- | :-- | :-- |
| recipe | Object | recipe to activate |

##### Returns

Promise - *promise which is resolved with the activated recipe*

### <a name="actionRecipesModel_deactivate"></a>*#deactivate(recipe)*

Deactivates given action recipe

| Parameter | Type | Description |
| :-- | :-- | :-- |
| recipe | Object | recipe to deactivate |

##### Returns

Promise - *promise which is resolved with deactivated recipe*
