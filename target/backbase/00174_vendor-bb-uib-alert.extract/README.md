# vendor-bb-uib-alert

Angular UI Bootstrap alert component written in pure AngularJS  based on Bootstrap's markup and CSS.

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
import uibAlertKey from 'vendor-bb-uib-alert';

export const dependencyKeys = [
  uibAlertKey,
];
```

## Directive Usage

<usage>
This directive can be used both to generate alerts from static and dynamic model data (using the `ng-repeat` directive).

### uib-alert settings

* `close()`
  <small class="badge">$</small> -
  A callback function that gets fired when an `alert` is closed. If the attribute exists, a close button is displayed as well.
  
* `dismiss-on-timeout`
  _(Default: `none`)_ -
  Takes the number of milliseconds that specify the timeout duration, after which the alert will be closed. This attribute requires the presence of the `close` attribute.
  
* `template-url`
  _(Default: `uib/template/alert/alert.html`)_ -
  Add the ability to override the template used in the component.
  
* `type`
  _(Default: `warning`)_ -
  Defines the type of the alert. Go to [bootstrap page](http://getbootstrap.com/components/#alerts) to see the type of alerts available.

---

## Demo

To see all docs and a working demo, please refer to the
<a href="http://angular-ui.github.io/bootstrap/versioned-docs/1.3.3/#/alert" target="_blank">official
documentation</a> for this component.
