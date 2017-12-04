# ui-bb-empty-state-ng


Version: **1.0.130**


## Imports

* vendor-bb-angular
* vendor-bb-angular-sanitize

---

## Example

```javascript
// In an extension:
// file: scripts/index.js
import uiBbEmptyStateKey from 'ui-bb-empty-state-ng';

export const dependencyKeys = [
  uiBbEmptyStateKey,
];

// file: templates/template.ng.html
<ui-bb-empty-state-ng
 data-icon-classes="fa fa-4x fa-bar-chart"
 data-title="{{ $ctrl.title }}"
 data-subtitle="{{ $ctrl.subtitle }}"
 data-is-empty="true"
>
</ui-bb-empty-state-ng>
```

## Table of Contents
- **Exports**<br/>    <a href="#default">default</a><br/>

## Exports

### <a name="default"></a>*default*

The angular module name

**Type:** *String*


---

## uiBbEmptyStateNg

Empty state component.

| Property | Type | Description |
| :-- | :-- | :-- |
| iconClasses | String | Specify the icon class names |
| title | String | Title of the component |
| subtitle | String | Sub title of the component |
| isEmpty | Boolean | Specify if the component is shown or not Can be used to avoid bad user experience while missing data |
