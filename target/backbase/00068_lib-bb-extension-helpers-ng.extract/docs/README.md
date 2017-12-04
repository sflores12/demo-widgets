# lib-bb-extension-helpers-ng


Version: **1.0.28**

Allows extensions to define additional view helpers, which will be automatically
added to the widget's scope.

Sometimes you need to have some extra logic in your view that isn't part of the controller
interface. One way to do this, is to create a UI component and put all that logic into the UI's
controller. But you can also use extension helpers for moving view logic out of the template.

View helpers are created from the exported `helpers` of the extension module.

View helpers can either be exported as an object, or a function which returns an object.

If the `helpers` is a function it will receive an <a href="#HelperContext">HelperContext</a> object.

The object returned should be a map of helper name to function (see example below).

The helpers are made available on the root scope on ext.helpers.<helper-name>.

## Imports

* lib-bb-event-bus-ng
* lib-bb-extension-intents-ng
* lib-bb-notifications-ng
* lib-bb-state-container-ng
* lib-bb-view-model-ng
* lib-bb-widget-extension-ng
* lib-bb-widget-ng
* vendor-bb-angular

---

## Example

```javascript
// My "TODO" widget extension:
export const helpers = ({ widget }) => ({
  isLowBalance: (product) => product.balance < widget.getLongPreference('lowBalanceThreshold'),
});

<!-- My "TODO" widget extension template -->
<span ng-class="{low-balance: ext.helpers.isLowBalance(vm.product)">
  {{product.name}}
</span>
```

## Table of Contents
- **Exports**<br/>    <a href="#extensionHelpersContextKey">extensionHelpersContextKey</a><br/>
- **Type Definitions**<br/>    <a href="#HelperContext">HelperContext</a><br/>    <a href="#Helpers">Helpers</a><br/>    <a href="#HelpersFactory">HelpersFactory(context)</a><br/>    <a href="#ExtensionHelpers">ExtensionHelpers</a><br/>

## Exports

### <a name="extensionHelpersContextKey"></a>*extensionHelpersContextKey*

The injector key to be used to provide an alternative context to the extension module's
helpers

**Type:** *String*


## Example

```javascript
// "TODO" Widget index.js

import bbExtensionHelpersModuleKey, {
  extensionHelpersContextKey,
} from 'lib-bb-extension-helpers-ng';

import todoModelModuleKey, { modelTodoKey } from 'model-bb-todo-ng';

// Add TODO `model` to the `context` provided to the extension `helpers` key
export default angular.module(..., [
  ...,
  extensionHelpersContextKey,
  todoModelModuleKey,
])
.factory(extensionHelpersContextKey, [
  modelTodoKey,
  (model) => ({
    model,
  }),
])
```

## Type Definitions


### <a name="HelperContext"></a>*HelperContext*

The default context passed to the `helpers` factory function of the extension. This context can
be extended by individual widgets, so consult the widget docs for additional context properties.

**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| $filter | Object | Angular's $filter service. See <a href="https://docs.angularjs.org/api/ng/service/$filter">https://docs.angularjs.org/api/ng/service/$filter</a> |
| widget | <a href="lib-bb-widget.html#BBWidget">BBWidget</a> | The widget instance |
| notifications | <a href="lib-bb-notifications-ng.html#Notifications">Notifications</a> | The notifications service |
| publish | <a href="lib-bb-event-bus-ng.html#publish">publish</a> | The publish function of the event bus |
| intents | Object | The extension intents created by <a href="lib-bb-extension-intents-ng.html#lib-bb-extension-intents-ng">lib-bb-extension-intents-ng</a> |
| viewModel | <a href="lib-bb-state-container.html#StateContainer">StateContainer</a> | View model state container (deprecated since Building Blocks 2.6.0) |
| stateContainer | <a href="lib-bb-state-container.html#StateContainer">StateContainer</a> | Widget state container |

### <a name="Helpers"></a>*Helpers*

Arbitrary view helper functions. Can be used to avoid multi-statement expressions being
written inline in templates.

**Type:** *<a href="#object<function>">object<function></a>*



### <a name="HelpersFactory"></a>*HelpersFactory(context)*


| Parameter | Type | Description |
| :-- | :-- | :-- |
| context | <a href="#HelperContext">HelperContext</a> |  |

##### Returns

<a href="#Helpers">Helpers</a> - **

### <a name="ExtensionHelpers"></a>*ExtensionHelpers*

The helpers will be made available to the view scope as `ext.helpers`.

**Type:** *<a href="#Helpers">Helpers</a> or <a href="#HelpersFactory">HelpersFactory</a>*


---
