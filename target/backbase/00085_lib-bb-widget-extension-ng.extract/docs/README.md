# lib-bb-widget-extension-ng


Version: **1.1.35**

Provides a helper function that creates an angular injectable, which works in conjunction
with `lib-bb-start-ng` to:
 1. merge the custom hooks from the widgets extension with the defaults provided by the widget.
 2. provide the hooks with limited access to contextually useful services.

Extensible widgets should use this library to create hooks that can be consumed by a widget
extension.

## Imports

* lib-bb-widget-ng
* vendor-bb-angular

---

## Example

```javascript
// extension exports hooks, file: ext-bb-example-ng/scripts/index.js

export const hooks = ({ widget }) => ({
  prepareData: (data) => widget.getPreference('reverse') ? data.reverse() : data,
});

// widget consumes extension hook implementation, file: widget-bb-example-ng/scripts/index.js
import extendHooks from 'lib-bb-widget-extension-ng';

import * as defaultHooks from './default-hooks';

angular.module(...)
  .factory('my-widget:hooks', extendHooks(defaultHooks));
```

## Table of Contents
- **Exports**<br/>    <a href="#default">default(defaultHooks)</a><br/>    <a href="#extensionHooksKey">extensionHooksKey</a><br/>    <a href="#extensionContextKey">extensionContextKey</a><br/>
- **lib-bb-widget-extension-ng**<br/>    <a href="#lib-bb-widget-extension-ngextensionHooksKey">extensionHooksKey</a><br/>
- **Type Definitions**<br/>    <a href="#Extension">Extension</a><br/>    <a href="#Hooks">Hooks</a><br/>    <a href="#HooksFactory">HooksFactory(context)</a><br/>    <a href="#HooksContext">HooksContext</a><br/>    <a href="#ExtensionHooks">ExtensionHooks</a><br/>

## Exports


### <a name="default"></a>*default(defaultHooks)*

Create an angular injectable to help merge the widgets extension hooks with the default hooks
provided by the widget.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| defaultHooks | <a href="#Hooks">Hooks</a> | The default hook implementation |

##### Returns

<a href="#NgInjectedFunction">NgInjectedFunction</a> - **
### <a name="extensionHooksKey"></a>*extensionHooksKey*

The injector key to be used to access the extension hooks module

**Type:** *String*

### <a name="extensionContextKey"></a>*extensionContextKey*

The injector key to be used to provide an extra context to the extension module's intents,
helpers, and event handlers.

The value provided by this key is added to the context before the individual services context
customization. i.e. In the case of collisions, the order of priority (ascending) is;

 - The default context for the service
 - This customization
 - The service specific customization (e.g.
<a href="lib-bb-extension-intents-ng.html#extensionIntentsContextKey">extensionIntentsContextKey</a>)

**Type:** *String*


## Example

```javascript
// "TODO" Widget index.js

import {
  extensionContextKey,
} from 'lib-bb-widget-extension-ng';

import todoModelModuleKey, { modelTodoKey } from 'model-bb-todo-ng';

// Add TODO `model` to the `context` provided to the extension contexts
export default angular.module(..., [
  ...,
  todoModelModuleKey,
])
.factory(extensionContextKey, [
  modelTodoKey,
  (model) => ({
    model,
  }),
])
```

---
### <a name="lib-bb-widget-extension-ngextensionHooksKey"></a>*extensionHooksKey*

The injector key to be used to access the extension hooks module

**Type:** *String*


## Type Definitions


### <a name="Extension"></a>*Extension*


**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| intents | <a href="lib-bb-extension-intents-ng.html#ExtensionIntents">ExtensionIntents</a> |  |
| events | <a href="lib-bb-extension-events-ng.html#ExtensionEvents">ExtensionEvents</a> |  |
| helpers | <a href="lib-bb-extension-helpers-ng.html#ExtensionHelpers">ExtensionHelpers</a> |  |
| hooks | <a href="#ExtensionHooks">ExtensionHooks</a> |  |

### <a name="Hooks"></a>*Hooks*


**Type:** *Object of Function*



### <a name="HooksFactory"></a>*HooksFactory(context)*


| Parameter | Type | Description |
| :-- | :-- | :-- |
| context | <a href="#HooksContext">HooksContext</a> |  |

##### Returns

<a href="#Hooks">Hooks</a> - **

### <a name="HooksContext"></a>*HooksContext*


**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| widget | <a href="lib-bb-widget-ng.html#widget">widget</a> |  |

### <a name="ExtensionHooks"></a>*ExtensionHooks*


**Type:** *<a href="#Hooks">Hooks</a> or <a href="#HooksFactory">HooksFactory</a>*


---
