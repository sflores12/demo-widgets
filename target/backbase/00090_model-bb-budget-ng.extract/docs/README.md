# model-bb-budget-ng


Version: **1.0.18**

Budget widget model

## Imports

* data-bb-budgeting-http-ng
* lib-bb-model-errors
* vendor-bb-angular

---

## Example

```javascript
import modelBudgetModuleKey, { modelBudgetKey } from 'model-bb-budget-ng';
```

## Table of Contents
- **budgetModel**<br/>    <a href="#budgetModel_getBudgetSchema">#getBudgetSchema()</a><br/>    <a href="#budgetModel_getBudgets">#getBudgets(params)</a><br/>    <a href="#budgetModel_createBudget">#createBudget(budget)</a><br/>    <a href="#budgetModel_updateBudget">#updateBudget(budgetId, budget)</a><br/>    <a href="#budgetModel_deleteBudget">#deleteBudget(budgetId, budget)</a><br/>
- **Type Definitions**<br/>    <a href="#BudgetingResponse">BudgetingResponse</a><br/>    <a href="#BudgetingItem">BudgetingItem</a><br/>    <a href="#BudgetingSchema">BudgetingSchema</a><br/>

---

## budgetModel


### <a name="budgetModel_getBudgetSchema"></a>*#getBudgetSchema()*

Gets the budgeting item schema from the data (RAML)

##### Returns

[BudgetingSchema](#BudgetingSchema) - **

### <a name="budgetModel_getBudgets"></a>*#getBudgets(params)*

Gets the list of budgets

| Parameter | Type | Description |
| :-- | :-- | :-- |
| params | Object | Parameters to be passed. |

##### Returns

Promise of [BudgetingResponse](#BudgetingResponse) - *A Promise with an array of budgets*

### <a name="budgetModel_createBudget"></a>*#createBudget(budget)*

Creates a new budget

| Parameter | Type | Description |
| :-- | :-- | :-- |
| budget | Object | Budget data |

##### Returns

Promise - *A Promise with response data*

### <a name="budgetModel_updateBudget"></a>*#updateBudget(budgetId, budget)*

Updates an existing budget

| Parameter | Type | Description |
| :-- | :-- | :-- |
| budgetId | String | Budget id |
| budget | Object | budget object |

##### Returns

Promise - *A Promise with response data*

### <a name="budgetModel_deleteBudget"></a>*#deleteBudget(budgetId, budget)*

Deletes a budget

| Parameter | Type | Description |
| :-- | :-- | :-- |
| budgetId | String | Budget id |
| budget | Object | Budget data |

##### Returns

Promise - *A Promise with response data*

## Type Definitions


### <a name="BudgetingResponse"></a>*BudgetingResponse*


**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| data | Array of [BudgetingItem](#BudgetingItem) |  |

### <a name="BudgetingItem"></a>*BudgetingItem*


*Extends*: [BudgetingData](data-bb-budgeting-http-ng.html#BudgetingData)

**Type:** *Object*


### <a name="BudgetingSchema"></a>*BudgetingSchema*


*Extends*: [schemas](data-bb-budgeting-http-ng.html#schemas)

**Type:** *Object*


---
