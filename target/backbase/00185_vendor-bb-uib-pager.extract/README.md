# vendor-bb-uib-pager

Angular UI Bootstrap pager component written in pure AngularJS  based on Bootstrap's markup and CSS.

This component has been split from the complete
<a href="http://angular-ui.github.io/bootstrap/versioned-docs/1.3.3/">Angular UI
Bootstrap v1.3.3</a> and wrapped in a UMD block.

## Imports

* vendor-bb-angular
* vendor-bb-uib-paging

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
import uibPagerKey from 'vendor-bb-uib-pager';

export const dependencyKeys = [
  uibPagerKey,
];
```

## Directive Usage

<usage>
A lightweight pager directive that is focused on providing previous/next paging functionality

### uib-pager settings

* `align`
  <small class="badge">C</small>
  _(Default: `true`)_ -
  Whether to align each link to the sides.
  
* `items-per-page`
  <small class="badge">$</small>
  <small class="badge">C</small>
  <i class="glyphicon glyphicon-eye-open"></i>
  _(Default: `10`)_ -
  Maximum number of items per page. A value less than one indicates all items on one page.
  
* `next-text`
  <small class="badge">C</small>
  _(Default: `Next »`)_ -
  Text for Next button.
  
* `ng-disabled`
  <small class="badge">$</small>
  <i class="glyphicon glyphicon-eye-open"></i>
  _(Default: `false`)_ -
  Used to disable the pager component.
  
* `ng-model`
  <small class="badge">$</small>
  <i class="glyphicon glyphicon-eye-open"></i> -
  Current page number. First page is 1.
  
* `num-pages`
  <small class="badge">$</small>
  <small class="badge">readonly</small>
  _(Default: `angular.noop`)_ -
  An optional expression assigned the total number of pages to display.

* `previous-text`
  <small class="badge">C</small>
  _(Default: `« Previous`)_ -
  Text for Previous button.

* `template-url`
  _(Default: `uib/template/pager/pager.html`)_ -
  Override the template for the component with a custom provided template.
  
* `total-items`
  <small class="badge">$</small>
  <i class="glyphicon glyphicon-eye-open"></i> -
  Total number of items in all pages.

---

## Demo

To see all docs and a working demo, please refer to the
<a href="http://angular-ui.github.io/bootstrap/versioned-docs/1.3.3/#/pager" target="_blank">official
documentation</a> for this component.
