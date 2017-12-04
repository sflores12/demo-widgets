# widget-bb-budget-ng


Version: **1.1.4**

Budget

## Imports

* lib-bb-currency-ng
* lib-bb-event-bus-ng
* lib-bb-extension-helpers-ng
* lib-bb-intent-ng
* lib-bb-model-errors
* lib-bb-state-container-ng
* lib-bb-widget-extension-ng
* lib-bb-widget-ng
* model-bb-budget-ng
* vendor-bb-angular

---

## Table of Contents
- **BudgetFormController**<br/>    <a href="#BudgetFormController_$onInit">#$onInit()</a><br/>    <a href="#BudgetFormController_$onDestroy">#$onDestroy()</a><br/>    <a href="#BudgetFormController_save">#save(value, thenReload)</a><br/>
- **ListBudgetsController**<br/>    <a href="#ListBudgetsController_$onInit">#$onInit()</a><br/>    <a href="#ListBudgetsController_$onDestroy">#$onDestroy()</a><br/>    <a href="#ListBudgetsController_edit">#edit(budgetId)</a><br/>    <a href="#ListBudgetsController_create">#create()</a><br/>    <a href="#ListBudgetsController_deleteBudget">#deleteBudget(budget, thenReload)</a><br/>
- **BudgetService**<br/>    <a href="#BudgetService_list">#list(requestParams)</a><br/>    <a href="#BudgetService_startEdit">#startEdit(budgetId)</a><br/>    <a href="#BudgetService_startCreate">#startCreate()</a><br/>    <a href="#BudgetService_edit">#edit(item)</a><br/>    <a href="#BudgetService_create">#create(item)</a><br/>    <a href="#BudgetService_deleteBudget">#deleteBudget(item)</a><br/>
- **Type Definitions**<br/>    <a href="#BudgetItem">BudgetItem</a><br/>    <a href="#HelperContext">HelperContext</a><br/>    <a href="#IntentContext">IntentContext</a><br/>    <a href="#EventContext">EventContext</a><br/>    <a href="#ViewState">ViewState</a><br/>

---

## BudgetFormController

Budget widget form controller

| Injector Key |
| :-- |
| *BudgetFormController* |


### <a name="BudgetFormController_$onInit"></a>*#$onInit()*

AngularJS Lifecycle hook used to initialize the controller

##### Returns

Promise - *Promise which is resolved once contoller is initialized,
  or rejected in case of errors*

### <a name="BudgetFormController_$onDestroy"></a>*#$onDestroy()*

AngularJS Lifecycle hook used to destroy the controller

### <a name="BudgetFormController_save"></a>*#save(value, thenReload)*

Controller method to handle new/edited item saving
and to initiate state change via routing

| Parameter | Type | Description |
| :-- | :-- | :-- |
| value | Object | Object to be saved as a budget |
| thenReload | Boolean (optional) | Flag which defines if budget values should be reloaded from the server after update/create operation |

---

## notificationLevels

enum with levels for ui notifications

---

## errorMessages

enum with standart model error message keys

---

## successMessages

enum with success messages keys

---

## ListBudgetsController

Budget widget list controller

| Injector Key |
| :-- |
| *ListBudgetsController* |


### <a name="ListBudgetsController_$onInit"></a>*#$onInit()*

AngularJS Lifecycle hook used to initialize the controller

##### Returns

Promise - *Promise which is resolved once contoller is initialized,
  or rejected in case of errors*

### <a name="ListBudgetsController_$onDestroy"></a>*#$onDestroy()*

AngularJS Lifecycle hook used to destroy the controller

### <a name="ListBudgetsController_edit"></a>*#edit(budgetId)*

Internal navigation for getting to edit form from the list of items

| Parameter | Type | Description |
| :-- | :-- | :-- |
| budgetId | String | identifier of a budget to be changed |

### <a name="ListBudgetsController_create"></a>*#create()*

Internal navigation for getting to create form from the list of items

### <a name="ListBudgetsController_deleteBudget"></a>*#deleteBudget(budget, thenReload)*

Controller method to handle deleting of an item

| Parameter | Type | Description |
| :-- | :-- | :-- |
| budget | Object | Object to be removed |
| thenReload | Boolean (optional) | Flag which defines if budget values should be reloaded from the server after delete operation (default true) |

---

## BudgetService

The core functionality of the Budget widget

The purpose of this module is to provide the main structure of the
widget. Outlining the workflows, connecting the data from the
model to the view via the customizations provided by the extension.


### <a name="BudgetService_list"></a>*#list(requestParams)*

Update the view with an list of items loaded from the data source

| Parameter | Type | Description |
| :-- | :-- | :-- |
| requestParams | Object | paremeters of the BudgetModel.GET request to be passed to the model |

##### Returns

Promise - **

### <a name="BudgetService_startEdit"></a>*#startEdit(budgetId)*

Prepare the view for editing a budget item

| Parameter | Type | Description |
| :-- | :-- | :-- |
| budgetId | String | budget item id to be modified |

### <a name="BudgetService_startCreate"></a>*#startCreate()*

Prepare the view for creating a new budget item

### <a name="BudgetService_edit"></a>*#edit(item)*

Updates budget item and triggers view update after it

| Parameter | Type | Description |
| :-- | :-- | :-- |
| item | [BudgetItem](model-bb-budget-ng.html#BudgetItem) | budget item to be modified |

##### Returns

Promise - **

### <a name="BudgetService_create"></a>*#create(item)*

Creates a new budget item and triggers view update after it

| Parameter | Type | Description |
| :-- | :-- | :-- |
| item | [BudgetItem](model-bb-budget-ng.html#BudgetItem) | set of data for a new budget to be created |

##### Returns

Promise - **

### <a name="BudgetService_deleteBudget"></a>*#deleteBudget(item)*

Removes budget and triggers view update after it

| Parameter | Type | Description |
| :-- | :-- | :-- |
| item | [BudgetItem](model-bb-budget-ng.html#BudgetItem) | budget item to be deleted |

##### Returns

Promise - **

## Type Definitions


### <a name="BudgetItem"></a>*BudgetItem*


*Extends*: [BudgetItem](model-bb-budget-ng.html#BudgetItem)

**Type:** *Object*


### <a name="HelperContext"></a>*HelperContext*


*Extends*: [HelperContext](lib-bb-extension-helpers-ng.html#HelperContext)

**Type:** *Object*


### <a name="IntentContext"></a>*IntentContext*


*Extends*: [IntentContext](lib-bb-extension-intents-ng.html#IntentContext)

**Type:** *Object*


### <a name="EventContext"></a>*EventContext*


*Extends*: [EventContext](lib-bb-extension-events-ng.html#EventContext)

**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| BudgetService | [BudgetService](#BudgetService) |  |

### <a name="ViewState"></a>*ViewState*


**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| isLoading | Boolean |  |
| budgets | Array of [BudgetItem](#BudgetItem) |  |
| template | String |  |

---

## Templates

* *template.ng.html*

---
