# ui-bb-list-ng


Version: **1.0.157**


## Imports

* vendor-bb-angular

---

## Example

```javascript
// In an extension:
// file: scripts/index.js
import uiBbListKey from 'ui-bb-list-ng';

// ...

export const dependencyKeys = [
  uiBbListKey,
];

// file: templates/template.ng.html
<ui-bb-list on-scroll-to-end="$ctrl.searchMore()">
  <div ng-repeat="group in $ctrl.searchTransactions track by $index">
    <div class="table-view-divider">
      <h4 data-role="transactions-group-date" ng-bind="group.date | date"></h4>
    </div>
  </div>
</ui-bb-list>
```

---

## uiBbListComponent

List Component Object

| Property | Type | Description |
| :-- | :-- | :-- |
| onScrollToEnd | Function | callback function to invoke when the threshold of the list has been reached. |
