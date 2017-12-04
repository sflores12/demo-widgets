# ui-bb-expandable-ng


Version: **1.1.99**


## Imports

* vendor-bb-angular
* vendor-bb-uib-collapse

---

## Example

```javascript
// In an extension:
// file: scripts/index.js
import uiBbExpandableNgKey from 'ui-bb-expandable-ng';

export const dependencyKeys = [
  uiBbExpandableNgKey,
];

// file: templates/template.ng.html
<ui-bb-expandable-ng chevron="true">
 <ui-bb-expandable-summary-ng>
     Hello
 </ui-bb-expandable-summary-ng>
 <ui-bb-expandable-details-ng>
     World!
 </ui-bb-expandable-details-ng>
</ui-bb-expandable-ng>
```

## Table of Contents
- **Exports**<br/>    <a href="#default">default</a><br/>
- **ui-bb-expandable-ng**<br/>    <a href="#ui-bb-expandable-nguiBbExpandableController">uiBbExpandableController()</a><br/>

## Exports

### <a name="default"></a>*default*

The angular module name

**Type:** *String*


---

## uiBbExpandableComponent

Expandable Component Object

| Property | Type | Description |
| :-- | :-- | :-- |
| summary | String | Transcluded content of &lt;ui-bb-expandable-summary-ng&gt; |
| details | String | Transcluded content of &lt;ui-bb-expandable-details-ng&gt; |
| chevron | String | Condition to show/hide chevron arrow |

---

### <a name="ui-bb-expandable-nguiBbExpandableController"></a>*uiBbExpandableController()*

Component's controller
