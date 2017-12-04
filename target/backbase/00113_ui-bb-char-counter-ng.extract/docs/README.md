# ui-bb-char-counter-ng


Version: **1.1.50**

UI component for displaying chars counter.

## Imports

* vendor-bb-angular

---

## Example

```javascript
// In an extension:
// file: scripts/index.js
import uiBbCharCounterNg from 'ui-bb-char-counter-ng';

export const dependencyKeys = [
  uiBbCharCounterNg,
];

// file: templates/template.ng.html
<textarea name="description"></textarea>
<ui-bb-char-counter-ng
  data-state="stateTextarea"
  data-text-el="$ctrl.textElTextarea"
  data-config="$ctrl.configTextarea">
</ui-bb-char-counter-ng>
```

## Table of Contents
- **ui-bb-char-counter-ng**<br/>    <a href="#ui-bb-char-counter-ngpreventInput">preventInput(event)</a><br/>    <a href="#ui-bb-char-counter-ng$onInit">$onInit()</a><br/>
- **Type Definitions**<br/>    <a href="#config">config</a><br/>    <a href="#state">state</a><br/>

---

## uiBbCharCounterNg


| Property | Type | Description |
| :-- | :-- | :-- |
| textEl | [HTMLElement](#HTMLElement) | Text input DOM element |
| textElQuery | String | for searching element by query |
| config | [config](#config) | Component configuration |
| state | [state](#state) | Component state |

---

### <a name="ui-bb-char-counter-ngpreventInput"></a>*preventInput(event)*

Prevent from further input in case of respective config property is true
and the input limit is reached

| Parameter | Type | Description |
| :-- | :-- | :-- |
| event | [KeyboardEvent](#KeyboardEvent) |  |

---

### <a name="ui-bb-char-counter-ng$onInit"></a>*$onInit()*

Init hook - initialize component model

## Type Definitions


### <a name="config"></a>*config*


**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| maxChars | Number (optional) | Maximum chars allowed (140) |
| initStyling | String (optional) | CSS classes to be added on init ("text-left" - default) |
| blockTyping | Boolean (optional) | If true, user prevented to input when limit reached (false) |

### <a name="state"></a>*state*


**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| counter | Number (optional) | Chars count |
| isValid | Boolean (optional) | Flag is true if limit is not reached and false otherwise |

---
