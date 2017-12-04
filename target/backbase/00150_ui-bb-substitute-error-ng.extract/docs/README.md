# ui-bb-substitute-error-ng


Version: **1.0.23**

UI Component to replace content with an error message

## Imports

* vendor-bb-angular

---

## Example

```javascript
// In an extension:
// file: scripts/index.js
import uiBbSubstituteErrorNgKey from 'ui-bb-substitute-error-ng';

export const dependencyKeys = [
  uiBbSubstituteErrorNgKey,
];

// file: templates/template.ng.html
<ui-bb-substitute-error-ng
error="$ctrl.productKindsError">
</ui-bb-substitute-error-ng>
```

## Table of Contents
- **Exports**<br/>    <a href="#default">default</a><br/>

## Exports

### <a name="default"></a>*default*

The angular module name

**Type:** *String*


---

## uiBbSubstituteErrorComponent

Substitute Error Component Object

| Property | Type | Description |
| :-- | :-- | :-- |
| error | Object | Object containing error message. Kept for backwards compatibility. |
| message | String | Translated error message |
