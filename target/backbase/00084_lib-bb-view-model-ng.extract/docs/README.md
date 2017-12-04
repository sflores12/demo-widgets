# lib-bb-view-model-ng


Version: **1.0.28**


#### Deprecated: since version Building Blocks 2.6.0. See {@link module:lib-bb-state-container-ng.lib-bb-state-container-ng} for the new library to support widget state.
Adds a state container (See
<a href="lib-bb-state-container.html#lib-bb-state-container">lib-bb-state-container</a>) to the widget's scope as `vm`.

This can be used to give widget *extensions* ownership over the view model.

The view model is also added to the context for extension intents and helpers, See also:
 - Extension <a href="lib-bb-extension-intents-ng.html#IntentContext">IntentContext</a>
 - Extension <a href="lib-bb-extension-helpers-ng.html#HelperContext">HelperContext</a>
 - Extension <a href="lib-bb-extension-events-ng.html#EventContext">EventContext</a>

## Imports

* lib-bb-state-container
* vendor-bb-angular

---

## Example

```javascript
// Extension JS: Set a "view state" on the view model when an intent is triggered
export const intents = ({ viewModel: vm }) => ({
  viewList: handleRequest('todos.list', vm.createAction((state) => {
    state.template = '#widget-bb-todo-ng/list.html';
    return state;
  }))
});

<!-- Extension template: Use `vm` on the scope -->
<h2>Todo</h2>
<div>
  <ng-include src="vm.template"></ng-include>
</div>
<script type="text/ng-template" id="#widget-bb-todo-ng/list.html">
  <ul><li ng-repeat="todo in vm.todos track by todo.id">{{todo.title}}</li></ul>
</script>
```

## Table of Contents
- **Exports**<br/>    <a href="#bbViewModelKey">bbViewModelKey</a><br/>

## Exports

### <a name="bbViewModelKey"></a>*bbViewModelKey*

The injector key to be used to provide the view model state container

**Type:** *String*

