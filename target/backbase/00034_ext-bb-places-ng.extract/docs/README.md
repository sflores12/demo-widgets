# ext-bb-places-ng


Version: **1.0.39**

Places widget map extension.

## Imports

* ui-bb-i18n-ng
* ui-bb-maps-ng
* ui-bb-substitute-error-ng
* vendor-bb-angular-ng-aria

---

## Example

```javascript
<!-- places widget model.xml -->
<property name="extension" viewHint="text-input,admin">
  <value type="string">ext-bb-places-ng</value>
</property>

Usage of ui-bb-maps-ng component in template

<g-map-api preferences="$ctrl.getPlacesPreferences()">
  <g-map places="$ctrl.loadPlaces">
    <div class="form-group has-feedback">
      <g-map-search></g-map-search>
      <span class="fa fa-search text-muted form-control-feedback" aria-hidden="true"></span>
      <span class="sr-only" data-i18n-key="places.input.search"></span>
    </div>
  </g-map>
</g-map-api>

where
places {object[]} Array of map points to be placed on map
places.latitude {number} Latitude of one point
places.longitude {number} Longitude of one point
preferences {object} Preference object containing api key, zoom level, etc.
```

## Table of Contents
- **Hooks**<br/>    <a href="#Hooks_processPlaces">#processPlaces(places)</a><br/>    <a href="#Hooks_onContainerToggle">#onContainerToggle(activatedElement)</a><br/>

---

## Hooks

Hooks for widget-bb-places-ng

### <a name="Hooks_processPlaces"></a>*#processPlaces(places)*

Hook for processing places list
Assigned to [$ctrl.loadPlaces]

| Parameter | Type | Description |
| :-- | :-- | :-- |
| places | Array of [Place](#Place) | Array of places |

##### Returns

Array of [Place](#Place) - *Processed array of places*

### <a name="Hooks_onContainerToggle"></a>*#onContainerToggle(activatedElement)*

Hook that is being triggered in case when parent container
that has the ability to show/hide part of it's content (tabs, deck, carousel)
toggles the child element
Assigned to [$ctrl.$onInit]

| Parameter | Type | Description |
| :-- | :-- | :-- |
| activatedElement | Object | Child element that became visible |

##### Returns

[void](#void) - **
