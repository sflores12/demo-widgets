# ui-bb-sortable-column-ng


Version: **1.1.43**

UI component to add sortable behavior to a table header column.

## Imports

* vendor-bb-angular

---

## Example

```javascript
// In an extension:
// file: scripts/index.js
import uiBbSortableColumnNg from 'ui-bb-sortable-column-ng';

export const dependencyKeys = [
  uiBbSortableColumnNg,
];

// file: templates/template.ng.html
<th
  ui-bb-sortable-column-ng
  options="columnOptions"
  active="columnActive"
  on-sort="$ctrl.onSort(key, direction)">
  <span i18n-key="label.status"></span>
</th>
```

## Table of Contents
- **Exports**<br/>    <a href="#default">default</a><br/>

## Exports

### <a name="default"></a>*default*

The angular module name

**Type:** *String*


---

## uiBbSortableColumnDirective


| Property | Type | Description |
| :-- | :-- | :-- |
| options | Object |  |
| options.key | Object | The column key to sort |
| options.direction | Object | Default direction to sort, ascending or descending |
| active | Boolean | Show or hide sort caret |
| onSort | Function | Callback called when clicked on the column header. It is called with `key` and `direction` arguments |

---

## sortDirection

Enum type to describe sort direction
