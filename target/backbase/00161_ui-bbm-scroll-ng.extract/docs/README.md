# ui-bbm-scroll-ng


Version: **1.0.38**


## Imports

* vendor-bb-angular

---

## Example

```javascript
// In an extension:
// file: scripts/index.js
import uiBbmScrollNgKey from 'ui-bbm-scroll-ng';

// ...

export const dependencyKeys = [
  uiBbmScrollNgKey,
];

// file: templates/template.ng.html
<ui-bbm-scroll-ng on-scroll-to-end="$ctrl.searchMore()">
  <div ng-repeat="group in $ctrl.searchTransactions track by $index">
    <div class="table-view-divider">
      <h4 data-role="transactions-group-date" ng-bind="group.date | date"></h4>
    </div>
  </div>
</ui-bbm-scroll-ng>
```

---

## uiBbmScrollNgComponent

Descriptor of the scroll component.

| Property | Type | Description |
| :-- | :-- | :-- |
| onScrollToEnd | Function | callback function to invoke when the threshold of the distance to the end of the scrollable area has been reached. |
