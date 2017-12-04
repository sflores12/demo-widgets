# ext-bb-places-list-ng


Version: **1.0.38**

Places widget list extension.

## Imports

* ui-bb-i18n-ng
* ui-bb-loading-indicator-ng
* ui-bb-maps-ng
* ui-bb-substitute-error-ng
* vendor-bb-angular-ng-aria

---

## Example

```javascript
<!-- places widget model.xml -->
<property name="extension" viewHint="text-input,admin">
  <value type="string">ext-bb-places-list-ng</value>
</property>

Usage of ui-bb-maps-ng component in template

<g-map-api preferences="$ctrl.getPlacesPreferences()" ng-hide="$ctrl.loadingPlaces">
  <place-listn places="$ctrl.loadPlaces"
    messages="{
      list: ('places.message.setup.list' | i18n),
      error: ('places.message.setup.error' | i18n),
      empty: ('places.message.setup.empty' | i18n),
    }"
  >
    <div class="form-group">
      <g-map-search></g-map-search>
      <span class="fa fa-search text-muted form-control-feedback" aria-hidden="true"></span>
      <span class="sr-only" data-i18n-key="places.input.search"></span>
    </div>
  </place-list>
</g-map-api>

where
places {object[]} Array of map points to be placed on map
places.latitude {number} Latitude of one point
places.longitude {number} Longitude of one point
preferences {object} Preference object containing api key, zoom level, etc.
messages {object} Object with messages that will be shown in various states of the extension
messages.list {string} Message displayed while list is being loaded
and distnaces are being calculated
messages.error {string} Message displayed if error occured
messages.empty {string} Message displayed if there are no items to show
```
