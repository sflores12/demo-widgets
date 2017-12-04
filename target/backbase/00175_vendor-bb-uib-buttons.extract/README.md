# vendor-bb-uib-buttons

Angular UI Bootstrap buttons component written in pure AngularJS  based on Bootstrap's markup and CSS.

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
import uibButtonsKey from 'vendor-bb-uib-buttons';

export const dependencyKeys = [
  uibButtonsKey,
];
```

## Directive Usage

<usage>
With the buttons directive, we can make a group of buttons behave like a set of checkboxes (`uib-btn-checkbox`) or behave like a set of radio buttons (`uib-btn-radio`).

### uib-btn-checkbox settings

* `btn-checkbox-false`
  _(Default: `false`)_ -
  Sets the value for the unchecked status.
  
* `btn-checkbox-true`
  _(Default: `true`)_ -
  Sets the value for the checked status.
  
* `ng-model`
  <small class="badge">$</small>
  <i class="glyphicon glyphicon-eye-open"></i> -
  Model where we set the checkbox status. By default `true` or `false`.

### uib-btn-radio settings

* `ng-model`
  <small class="badge">$</small>
  <i class="glyphicon glyphicon-eye-open"></i> -
  Model where we set the radio status. All radio buttons in a group should use the same `ng-model`.
    
* `uib-btn-radio` -
  <small class="badge">$</small>
  Value to assign to the `ng-model` if we check this radio button.

* `uib-uncheckable`
  <small class="badge">$</small>
  _(Default: `null`)_ -
  An expression that evaluates to a truthy or falsy value that determines whether the `uncheckable` attribute is present.
  
* `uncheckable`
  <small class="badge">B</small> -
  Whether a radio button can be unchecked or not.
  
### Additional settings `uibButtonConfig`

* `activeClass`
  _(Default: `active`)_ -
  Class to apply to the checked buttons.
  
* `toggleEvent`
  _(Default: `click`)_ -
  Event used to toggle the buttons.

### Known issues

To use tooltips or popovers on elements within a `btn-group`, set the tooltip/popover `appendToBody` option to `true`. This is due to Bootstrap CSS styling. See [here](http://getbootstrap.com/components/#btn-groups) for more information.

---

## Demo

To see all docs and a working demo, please refer to the
<a href="http://angular-ui.github.io/bootstrap/versioned-docs/1.3.3/#/buttons" target="_blank">official
documentation</a> for this component.
