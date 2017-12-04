# ui-bb-notification-stripe-ng


Version: **1.1.58**


## Imports

* vendor-bb-angular

---

## Example

```javascript
// In an extension:
// file: scripts/index.js
import uiBbNotificationStripeNgKey from 'ui-bb-notification-stripe-ng';

export const dependencyKeys = [
  uiBbNotificationStripeNgKey,
];

// file: templates/template.ng.html
<ui-bb-notification-stripe
message="{{ $ctrl.status.text }}"
on-close="$ctrl.status = null;"
type="bg-{{ $ctrl.status.class }}"
timeout-second="5">
</ui-bb-notification-stripe>
```

## Table of Contents
- **Exports**<br/>    <a href="#default">default</a><br/>
- **ui-bb-notification-stripe-ng**<br/>    <a href="#ui-bb-notification-stripe-nguiBbNotificationStripeController">uiBbNotificationStripeController()</a><br/>

## Exports

### <a name="default"></a>*default*

The angular module name

**Type:** *String*


---

## uiBbNotificationStripeComponent

Notification Stripe Component Object

| Property | Type | Description |
| :-- | :-- | :-- |
| on-close | Function | function to be invoked on clicking "✕" |
| message | String | message -&gt; messageHtmlSafe, processed in controller |
| type | String | css class to be added to wrapper element |
| timeout-second | Number | delay in seconds after which onClose will be invoked |
| icon-classes | String | font-awesome icon classes. If provided it will add that icon |

---

### <a name="ui-bb-notification-stripe-nguiBbNotificationStripeController"></a>*uiBbNotificationStripeController()*

Notification Stripe Controller
