# ui-bb-message-ng


Version: **1.1.66**


## Imports

* vendor-bb-angular

---

## Example

```javascript
// In an extension:
// file: scripts/index.js
import uiBbMessageNgKey from 'ui-bb-message-ng';

export const dependencyKeys = [
  uiBbMessageNgKey,
];

// file: templates/template.ng.html
<ui-bb-message
 on-link-click="$ctrl.someAction()"
 template="item.message"
 link="item.link"
 preventDefault="true"
 truncate-line="1"/>
```

## Table of Contents
- **Exports**<br/>    <a href="#default">default</a><br/>
- **ui-bb-message-ng**<br/>    <a href="#ui-bb-message-nguiBbMessageController">uiBbMessageController()</a><br/>    <a href="#ui-bb-message-nguiBbMessageDirective">uiBbMessageDirective()</a><br/>

## Exports

### <a name="default"></a>*default*

The angular module name

**Type:** *String*


---

### <a name="ui-bb-message-nguiBbMessageController"></a>*uiBbMessageController()*


---

### <a name="ui-bb-message-nguiBbMessageDirective"></a>*uiBbMessageDirective()*


| Property | Type | Description |
| :-- | :-- | :-- |
| message | String | Message content |
| link | String | Link that will added in message instead of `{{ link }}` |
| preventDefault | Boolean | true if need to prevent default event when click on link |
| onLinkClick | Function | callback function when click on link |
| visibleLinesLength | Number | Number of lines to be visible. If message has more lines it will be truncated by ellipsis. If parameter is not set message will not be truncated. |
