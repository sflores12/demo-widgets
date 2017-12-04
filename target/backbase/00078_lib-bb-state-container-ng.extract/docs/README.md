# lib-bb-state-container-ng


Version: **1.0.6**

Adds a state container (See
<a href="lib-bb-state-container.html#lib-bb-state-container">lib-bb-state-container</a>) to the widget's
scope as `state`.

The state container is also added to the context for extension intents and helpers, See also:
 - Extension <a href="lib-bb-extension-intents-ng.html#IntentContext">IntentContext</a>
 - Extension <a href="lib-bb-extension-helpers-ng.html#HelperContext">HelperContext</a>
 - Extension <a href="lib-bb-extension-events-ng.html#EventContext">EventContext</a>

This library can also be configured to enable sharing of state within multiple "widget
instances" on mobile.

Sharing state is enabled by adding a new preference to a widget called "widget-sync-id". Any
widgets that share the same value for "widget-sync-id" will automatically have their state
shared (via <a href="lib-bb-storage-ng.html#lib-bb-storage-ng">lib-bb-storage-ng</a>). This is a feature to be used
on the *hybrid mobile widgets* so that multiple instances of the same widget (usually with a
different extension) automatically share a single state.

To use this feature it's important that the widget doesn't have any state which is
derived from extension hooks (eg: the result a processData hook should never be saved
directly to the state object). Instead, these hooks can be implemented as state selectors (see
<a href="lib-bb-state-container.html#StateContainer#SelectorCreator">StateContainer#SelectorCreator</a>).

## Imports

* lib-bb-state-container
* lib-bb-storage-ng
* lib-bb-widget-ng
* vendor-bb-angular

---

## Example

```javascript
<!-- Extension template: Use `state` on the scope -->
<h2>Todo</h2>
<div>
  <ul><li ng-repeat="todo in state.todos track by todo.id">{{todo.title}}</li></ul>
</div>
```

## Table of Contents
- **Exports**<br/>    <a href="#bbStateContainerKey">bbStateContainerKey</a><br/>

## Exports

### <a name="bbStateContainerKey"></a>*bbStateContainerKey*

The injector key to be used to provide the state container instance

**Type:** *String*


---

## bbStateContainerProvider

A provider that allows configuration of the initial state of the container.



| Injector Key |
| :-- |
| *lib-bb-state-container-ng:bbStateContainerProvider* |


## Example

```javascript
angular.module(...)
  .config([
    `${bbStateContainerKey}Provider`,
    (provider) => {
      provider.setInitialState(...);
    },
  ]);
```
