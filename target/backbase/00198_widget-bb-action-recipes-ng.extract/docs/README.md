# widget-bb-action-recipes-ng


Version: **2.1.8**

Action Recipes Widget

## Imports

* lib-bb-event-bus-ng
* lib-bb-intent-ng
* lib-bb-model-errors
* lib-bb-widget-extension-ng
* lib-bb-widget-ng
* model-bb-action-recipes-ng
* vendor-bb-angular

---

## Table of Contents
- **ActionRecipesController**<br/>    <a href="#ActionRecipesController_$onInit">#$onInit()</a><br/>    <a href="#ActionRecipesController_statics">#statics</a><br/>    <a href="#ActionRecipesController_state">#state</a><br/>
- **widget-bb-action-recipes-ng**<br/>    <a href="#widget-bb-action-recipes-ngcurrentView">currentView()</a><br/>    <a href="#widget-bb-action-recipes-ngnavigateTo">navigateTo(view)</a><br/>    <a href="#widget-bb-action-recipes-ngonCreate">onCreate(sepcification)</a><br/>    <a href="#widget-bb-action-recipes-ngonEdit">onEdit(recipe)</a><br/>    <a href="#widget-bb-action-recipes-ngonSave">onSave(recipe)</a><br/>    <a href="#widget-bb-action-recipes-ngonCreateDismiss">onCreateDismiss()</a><br/>    <a href="#widget-bb-action-recipes-ngonActivate">onActivate(recipe)</a><br/>    <a href="#widget-bb-action-recipes-ngonDeactivate">onDeactivate(recipe)</a><br/>
- **Hooks**<br/>    <a href="#Hooks_createRecipeFilter">#createRecipeFilter(specification, trigger, accounts)</a><br/>    <a href="#Hooks_getAvailableChannels">#getAvailableChannels()</a><br/>
- **Events**<br/>    <a href="#bb.event.actionrecipe.activate.failed">bb.event.actionrecipe.activate.failed</a><br/>    <a href="#bb.event.actionrecipe.deactivate.failed">bb.event.actionrecipe.deactivate.failed</a><br/>
- **Type Definitions**<br/>    <a href="#ActionRecipesControllerStatics">ActionRecipesControllerStatics</a><br/>    <a href="#ActionRecipesControllerState">ActionRecipesControllerState</a><br/>

---

## 

Recipe data to labels mapper

---

## View

Available views for the widget

---

## httpErrorMessages

Http error codes. Used to identify what error has occured

---

## ActionRecipesController

Action recipes widget controller

| Injector Key |
| :-- |
| *ActionRecipesController* |


### <a name="ActionRecipesController_$onInit"></a>*#$onInit()*

AngularJS Lifecycle hook used to initialize the controller

##### Returns

[void](#void) - **
### <a name="ActionRecipesController_statics"></a>*#statics*

Holds static data of controller.

**Type:** *[ActionRecipesControllerStatics](#ActionRecipesControllerStatics)*

### <a name="ActionRecipesController_state"></a>*#state*

Keeps state related data

**Type:** *[ActionRecipesControllerState](#ActionRecipesControllerState)*


---

### <a name="widget-bb-action-recipes-ngcurrentView"></a>*currentView()*

Returns current view, used by the template to identify in
which state the widget is in

##### Returns

[View](#View) - **

---

### <a name="widget-bb-action-recipes-ngnavigateTo"></a>*navigateTo(view)*

Used to switch the view in the template

| Parameter | Type | Description |
| :-- | :-- | :-- |
| view | [View](#View) | New view to switch to |

##### Returns

[void](#void) - **

---

### <a name="widget-bb-action-recipes-ngonCreate"></a>*onCreate(sepcification)*

Creates a new action recipe from the given specification.
- Stores composed action object in state.
- Changes view to recipe view

| Parameter | Type | Description |
| :-- | :-- | :-- |
| sepcification | [Specification](#Specification) | Action specification which is used as a template to create new action recipe |

##### Returns

[void](#void) - **

---

### <a name="widget-bb-action-recipes-ngonEdit"></a>*onEdit(recipe)*

Starts a process to edit a given recipe

| Parameter | Type | Description |
| :-- | :-- | :-- |
| recipe | [Recipe](#Recipe) | recipe to be editted |

##### Returns

[void](#void) - **

---

### <a name="widget-bb-action-recipes-ngonSave"></a>*onSave(recipe)*

Saves given action recipe. Additionally stores new action in state,
recipe list and changes the view to list

| Parameter | Type | Description |
| :-- | :-- | :-- |
| recipe | [Recipe](#Recipe) | Action recipe to be saved |

##### Returns

[void](#void) - **

---

### <a name="widget-bb-action-recipes-ngonCreateDismiss"></a>*onCreateDismiss()*

Dismiss action recipe creation.
- Clears action being created from controller state
- Changes view to list

##### Returns

[void](#void) - **

---

### <a name="widget-bb-action-recipes-ngonActivate"></a>*onActivate(recipe)*

Activates given action recipe.
If activation fails, 'active' property of given recipe is set to false.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| recipe | [RecipeModel](#RecipeModel) | to activate |

##### Returns

Promise - **

##### Fires Events:

> bb.event.actionrecipe.activate.failed


---

### <a name="widget-bb-action-recipes-ngonDeactivate"></a>*onDeactivate(recipe)*

Deactivates given action recipe.
If deactivation fails, 'active' property of given recipe is set to true.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| recipe | [RecipeModel](#RecipeModel) | to deactivate |

##### Returns

Promise - **

##### Fires Events:

> bb.event.actionrecipe.deactivate.failed


---

## Hooks

Hooks for widget-bb-action-recipes-ng

### <a name="Hooks_createRecipeFilter"></a>*#createRecipeFilter(specification, trigger, accounts)*

This hook function should return a model of recipe's filter. The returned model is likely to be
different for each specification type. The returned object will be assigned to 'filter' field
of the recipe and it will be accessible from the templates.
The returned object must implement 'toApiModel()' method. This method must convert the filter
back to API representation of a trigger (i.e. 'selectors' and 'filter' fields must be present).
Here's an example of an object returned by 'toApiModel()':
{
  selectors: [{
    path: 'accountId',
    value: '123456789'
  }],
  filter: {
    gte: [{ 'pathValue': 'transaction.amount' }, 1000]
  }
}

| Parameter | Type | Description |
| :-- | :-- | :-- |
| specification | Object | specification used by the recipe |
| trigger | Object | trigger in backen format from which filter model should be created |
| accounts | Array | list of accounts which are available for the user |

##### Returns

Object - *view model of recipe filter*

### <a name="Hooks_getAvailableChannels"></a>*#getAvailableChannels()*

This hook returns an object which contains mapping from template channel to backend channel
code. Only the channels defined here will be mapped when loading or sending data to/from backend.

##### Returns

Object - *mapping from template channel name to backend channel name*

---

## Events

### <a name="bb.event.actionrecipe.activate.failed"></a>*bb.event.actionrecipe.activate.failed*

Event fired when activation of action recipe has failed

### <a name="bb.event.actionrecipe.deactivate.failed"></a>*bb.event.actionrecipe.deactivate.failed*

Event fired when deactivation of action recipe has failed


---

## Type Definitions


### <a name="ActionRecipesControllerStatics"></a>*ActionRecipesControllerStatics*


**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| views | [Views](#Views) | views supported by controller |

### <a name="ActionRecipesControllerState"></a>*ActionRecipesControllerState*


**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| loading | Boolean | loading indicator. |
| view | [View](#View) | tracks the view the user is in |
| error | Object | http error code, if any |
| recipes | Array of [Recipe](#Recipe) | array of users recipes |
| specifications | Array of [Specification](#Specification) | array of available action specifications |
| accounts | Array of [Account](#Account) | array of users accounts |
| newAction | [Recipe](#Recipe) | object used to hold recipe data when new recipe is being created, if any |

---

## Templates

* *template.ng.html*

---
