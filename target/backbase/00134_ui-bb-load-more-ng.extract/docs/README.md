# ui-bb-load-more-ng


Version: **1.0.174**


## Imports

* vendor-bb-angular

---

## Example

```javascript
// In an extension:
// file: scripts/index.js
import uiBbLoadMoreNgKey from 'ui-bb-load-more-ng';

export const dependencyKeys = [
  uiBbLoadMoreNgKey,
];

// file: templates/template.ng.html
<ui-bb-load-more-ng
  ng-show="$ctrl.hasMore"
  label="Load more"
  on-load-more="$ctrl.loadMore(done)"
></ui-bb-load-more-ng>
```

## Table of Contents
- **Exports**<br/>    <a href="#default">default</a><br/>

## Exports

### <a name="default"></a>*default*

The angular module name

**Type:** *String*


---

## uiBbLoadMoreComponent

Load More Component Object

| Property | Type | Description |
| :-- | :-- | :-- |
| label | String | Text to display |
| onLoadMore | Function | Callback to call when clicking button |
