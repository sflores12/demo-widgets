# vendor-bb-uib-rating

Angular UI Bootstrap rating component written in pure AngularJS  based on Bootstrap's markup and CSS.

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
import uibRatingKey from 'vendor-bb-uib-rating';

export const dependencyKeys = [
  uibRatingKey,
];
```

## Directive Usage

<usage>
Rating directive that will take care of visualising a star rating bar.

### uib-rating settings

* `max`
  <small class="badge">$</small>
  <small class="badge">C</small>
  _(Default: `5`)_ -
  Changes the number of icons.

* `ng-model`
  <small class="badge">$</small>
  <i class="glyphicon glyphicon-eye-open"></i> -
  The current rate.

* `on-hover(value)`
  <small class="badge">$</small> -
  An optional expression called when user's mouse is over a particular icon.

* `on-leave()`
  <small class="badge">$</small> -
  An optional expression called when user's mouse leaves the control altogether.

* `rating-states`
  <small class="badge">$</small>
  _(Default: `null`)_ -
  An array of objects defining properties for all icons. In default template, `stateOn` & `stateOff` property is used to specify the icon's class.

* `read-only`
  <small class="badge">$</small>
  <i class="icon-eye-open"></i>
  _(Default: `false`)_ -
  Prevent user's interaction.

* `titles`
  <small class="badge">$</small>
  <small class="badge">C</small>
  _(Default: ['one', 'two', 'three', 'four', 'five']`)_ -
  An array of strings defining titles for all icons.

* `enable-reset`
  <small class="badge">$</small>
  _(Default: `true`)_ -
  Clicking the icon of the current rating will reset the rating to 0.

* `state-off`
  <small class="badge">$</small>
  <small class="badge">C</small>
  _(Default: `null`)_ -
  A variable used in the template to specify the state for unselected icons.

* `state-on`
  <small class="badge">$</small>
  <small class="badge">C</small>
  _(Default: `null`)_ -
 	A variable used in the template to specify the state (class, src, etc) for selected icons.

---

## Demo

To see all docs and a working demo, please refer to the
<a href="http://angular-ui.github.io/bootstrap/versioned-docs/1.3.3/#/rating" target="_blank">official
documentation</a> for this component.
