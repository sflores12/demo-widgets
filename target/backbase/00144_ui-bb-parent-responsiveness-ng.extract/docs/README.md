# ui-bb-parent-responsiveness-ng


Version: **1.0.172**

Directive that dynamically toggles bootstrap column
classes based on the width of the parent container, rather
than the width of the whole window

This directive listens to parentResized event.
Use this event to manually trigger parent size calculation and
class processing

## Imports

* vendor-bb-angular

---

## Example

```javascript
// in main script
import uiBbParentResponsivenessNg from 'ui-bb-parent-responsiveness-ng';

export const dependencyKeys = [
  uiBbParentResponsivenessNg,
];

// in template file
<div ui-bb-parent-responsiveness-ng class="col-xs-12 col-sm-8 col-md-6">
	...
</div>

// dispatch an event to manually trigger size processing
const event = new Event('parentResized');
element.dispatchEvent(event);
```

## Table of Contents
- **ui-bb-parent-responsiveness-ng**<br/>    <a href="#ui-bb-parent-responsiveness-ngBootstrapSizes">BootstrapSizes</a><br/>    <a href="#ui-bb-parent-responsiveness-ngparentResponsivenessDirective">parentResponsivenessDirective()</a><br/>
- **Type Definitions**<br/>    <a href="#BootstrapSize">BootstrapSize</a><br/>

---
### <a name="ui-bb-parent-responsiveness-ngBootstrapSizes"></a>*BootstrapSizes*

Array of BootstrapSize objects

**Type:** *Array of [BootstrapSize](#BootstrapSize)*


---

### <a name="ui-bb-parent-responsiveness-ngparentResponsivenessDirective"></a>*parentResponsivenessDirective()*


| Property | Type | Description |
| :-- | :-- | :-- |
| bootstrapSizes | Array of [BootstrapSize](#BootstrapSize) | Override default Bootstrap setup with custom class prefixes and minimal widths |

## Type Definitions


### <a name="BootstrapSize"></a>*BootstrapSize*


**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| minWidth | Number | Minimum width at which class prefix should apply |
| classPrefix | String | Bootstrap class prefix to be used |

---
