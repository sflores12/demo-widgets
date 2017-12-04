# ui-bb-date-label-filter-ng


Version: **1.1.6**

Provides angular filter to create date labels

## Imports

* vendor-bb-angular

---

## Example

```javascript
import angular from 'vendor-bb-angular';
import uiBbDateLabelFilterModuleKey from 'ui-bb-date-label-filter-ng';

angular.module('example-module', [uiBbDateLabelFilterModuleKey])
  .controller('MyController', ['$filter', ($filter) => {
     this.nowLabel = $filter('dateLabel')(Date.now()); // 'now'
     this.todayLabel = $filter('dateLabel')(Date.now() - 1000 * 60 * 60); // 'today'
     this.yesterdayLabel = $filter('dateLabel')(Date.now() - 1000 * 60 * 60 * 24); // 'yesterday'
  },
 ]);
```

## Table of Contents
- **ui-bb-date-label-filter-ng**<br/>    <a href="#ui-bb-date-label-filter-ngdateLabelFilter">dateLabelFilter(date)</a><br/>

---

## TimePeriod

date labels enum

---

---

### <a name="ui-bb-date-label-filter-ngdateLabelFilter"></a>*dateLabelFilter(date)*

Converts valid date(any valid value for Date constructor) to date label string like:
"now", "today", "yesterday"


| Parameter | Type | Description |
| :-- | :-- | :-- |
| date | String or Number or Date | any valid value for Date constructor |

##### Returns

String (optional) - *Date label string, or null if unable to convert*

## Example

```javascript
// file: controller.js
function MyController() {
  const $ctrl = this;
  $ctrl.createdOn = Date.now();
}

// file: template.ng.html
<div ng-controller="MyController as $ctrl">
  <p>Created: {{ $ctrl.createdOn | dateLabel }}</p>
</div>

// Result:
<div>
  <p>Created: now</p>
</div>
```
