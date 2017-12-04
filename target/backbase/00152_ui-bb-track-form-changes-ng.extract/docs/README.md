# ui-bb-track-form-changes-ng


Version: **1.0.155**

Contains UI directive to track changes on the provided object
and set $pristine flag of ngForm directive to true when tracking
object value changes back to initial value.

## Imports

* vendor-bb-angular

---

## Example

```javascript
// In an extension:
// file: scripts/index.js
import uiBbTrackChanges from 'ui-bb-track-form-changes-ng';

export const dependencyKeys = [
  uiBbTrackChanges,
];

// file: templates/template.ng.html
<form ui-bb-track-changes="formObject">
  <input name="firstName" ng-model="formObject.name" />
  <input name="lastName" ng-model="formObject.lastName" />
</form>
```

## Table of Contents
- **Exports**<br/>    <a href="#default">default</a><br/>

## Exports

### <a name="default"></a>*default*

The angular module name

**Type:** *String*

