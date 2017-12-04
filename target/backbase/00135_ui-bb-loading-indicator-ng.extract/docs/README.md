# ui-bb-loading-indicator-ng


Version: **1.0.172**


## Imports

* vendor-bb-angular

---

## Example

```javascript
// In an extension:
// file: scripts/index.js
import uiBbLoadingIndicatorKey from 'ui-bb-loading-indicator-ng';

export const dependencyKeys = [
  uiBbLoadingIndicatorKey,
];

// file: templates/template.ng.html
<ui-bb-loading-indicator-ng
  is-loading="$ctrl.loading"
  show-delay="$ctrl.loadingDelay"
  loading-text="Loading...">
  Content available when loading is finished
</ui-bb-loading-indicator-ng>
```

## Table of Contents
- **Exports**<br/>    <a href="#default">default</a><br/>
- **ui-bb-loading-indicator-ng**<br/>    <a href="#ui-bb-loading-indicator-nguiBbLoadingIndicatorController">uiBbLoadingIndicatorController()</a><br/>

## Exports

### <a name="default"></a>*default*

The angular module name

**Type:** *String*


---

## uiBbLoadingIndicatorNg

Loading indicator component.

| Property | Type | Description |
| :-- | :-- | :-- |
| isLoading | Boolean | Controls whether or not loading indicator is visible |
| showDelay | Number (optional) | Loading message display delay in ms Can be used to avoid bad user experience while rebuilding parts of the current form based on changes in user input/selection. Rather than displaying loading message immediately, it will pop up on slow server response only |
| loadingText | String | Loading message |

---

### <a name="ui-bb-loading-indicator-nguiBbLoadingIndicatorController"></a>*uiBbLoadingIndicatorController()*

Loading indicator Controller
