# vendor-bb-uib-collapse

Angular UI Bootstrap collapse component written in pure AngularJS  based on Bootstrap's markup and CSS.

This component has been split from the complete
<a href="http://angular-ui.github.io/bootstrap/versioned-docs/1.3.3/">Angular UI
Bootstrap v1.3.3</a> and wrapped in a UMD block.

## Imports

* vendor-bb-angular


---

## Exports

### *default*

The angular module name

**Type:** *string*

---

## Usage in Extensions

UI Components must be declared as dependencies of extensions before they can be used:

```javascript
// extension scripts/index.js
import uibCollapseKey from 'vendor-bb-uib-collapse';

export const dependencyKeys = [
  uibCollapseKey,
];
```

## Directive Usage

<usage>
**uib-collapse** provides a simple way to hide and show an element with a css transition

### uib-collapse settings

* `collapsed()`
  <small class="badge">$</small> -
  An optional expression called after the element finished collapsing.

* `collapsing()`
  <small class="badge">$</small> -
  An optional expression called before the element begins collapsing.
  If the expression returns a promise, animation won't start until the promise resolves.
  If the returned promise is rejected, collapsing will be cancelled.

* `expanded()`
  <small class="badge">$</small> -
  An optional expression called after the element finished expanding.

* `expanding()`
  <small class="badge">$</small> -
  An optional expression called before the element begins expanding.
  If the expression returns a promise, animation won't start until the promise resolves.
  If the returned promise is rejected, expanding will be cancelled.

* `uib-collapse`
  <small class="badge">$</small>
  <i class="glyphicon glyphicon-eye-open"></i>
  _(Default: `false`)_ -
  Whether the element should be collapsed or not.


---

## Demo

To see all docs and a working demo, please refer to the
<a href="http://angular-ui.github.io/bootstrap/versioned-docs/1.3.3/#/collapse" target="_blank">official
documentation</a> for this component.
