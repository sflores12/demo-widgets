# ui-bb-loading-overlay-ng


Version: **1.0.98**


## Imports

* vendor-bb-angular

---

## Example

```javascript
// In an extension:
// file: scripts/index.js
import uiBbLoadingOverlayKey from 'ui-bb-loading-overlay-ng';

export const dependencyKeys = [
  uiBbLoadingOverlayKey,
];

// file: templates/template.ng.html
<ui-bb-loading-overlay-ng
  is-loading="$ctrl.loading">
  Content available when loading is finished
</ui-bb-loading-overlay-ng>
```

## Table of Contents
- **Exports**<br/>    <a href="#default">default</a><br/>

## Exports

### <a name="default"></a>*default*

The angular module name

**Type:** *String*


---

## uiBbLoadingOverlayNg

Loading overlay component.

| Property | Type | Description |
| :-- | :-- | :-- |
| isLoading | Boolean | Controls whether or not loading overlay is visible It shows an overlay with a spinning animation in it that will be positioned on top of the current content. |
