# ui-bb-ellipsis-tooltip-ng


Version: **1.0.64**

UI component that shows tooltip when text is truncated

## Imports

* vendor-bb-angular
* vendor-bb-uib-tooltip

---

## Example

```javascript
// In an extension:
// file: scripts/index.js
import uiBbEllipsisTooltipNg from 'ui-bb-ellipsis-tooltip-ng';

export const dependencyKeys = [
  uiBbEllipsisTooltipNg,
];

// file: templates/template.ng.html
<ui-bb-ellipsis-tooltip-ng
  tooltip="'Some very long text, that will be truncated'"
>
  <span class="dummy">Some very long text</span>
</ui-bb-ellipsis-tooltip-ng>
```

## Table of Contents
- **Exports**<br/>    <a href="#default">default</a><br/>

## Exports

### <a name="default"></a>*default*

The angular module name

**Type:** *String*


---

## uiBbEllipsisTooltipDirective


| Property | Type | Description |
| :-- | :-- | :-- |
| tooltip | String | Text that will be displayed in the tooltip |
