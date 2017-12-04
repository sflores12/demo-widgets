# widget-bb-places-ng


Version: **1.0.39**

Places widget

## Imports

* lib-bb-event-bus-ng
* lib-bb-intent-ng
* lib-bb-model-errors
* lib-bb-widget-extension-ng
* lib-bb-widget-ng
* model-bb-places-ng
* vendor-bb-angular

---

## Example

```javascript
<div ng-controller="PlacesController as $ctrl">
  <g-map-api preferences="$ctrl.getPlacesPreferences()">
    <g-map places="$ctrl.loadPlaces"></g-map>
  </g-map-api>
</div>
```

## Table of Contents
- **PlacesController**<br/>    <a href="#PlacesController_loadPlaces">#loadPlaces(params)</a><br/>    <a href="#PlacesController_getPlacesPreferences">#getPlacesPreferences()</a><br/>    <a href="#PlacesController_$onInit">#$onInit()</a><br/>
- **Hooks**<br/>    <a href="#Hooks_processPlaces">#processPlaces(places)</a><br/>    <a href="#Hooks_onContainerToggle">#onContainerToggle(activatedElement)</a><br/>
- **Type Definitions**<br/>    <a href="#PlacesParameters">PlacesParameters</a><br/>    <a href="#Place">Place</a><br/>

---

## PlacesController

Places widget

### <a name="PlacesController_loadPlaces"></a>*#loadPlaces(params)*

Load places collection

| Parameter | Type | Description |
| :-- | :-- | :-- |
| params | [PlacesParameters](#PlacesParameters) | configuration to call model getPlaces |

##### Returns

Promise - **

### <a name="PlacesController_getPlacesPreferences"></a>*#getPlacesPreferences()*

Returns widget preferences as an enum object
(shorthand to model method)

##### Returns

Object - **

### <a name="PlacesController_$onInit"></a>*#$onInit()*

AngularJS Lifecycle hook used to initialize the controller

##### Returns

[void](#void) - **

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

## Type Definitions


### <a name="PlacesParameters"></a>*PlacesParameters*


**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| latitude | Number | Latitude for current location |
| longitude | Number | Longitude for current location |
| radius | Number | Search radius |
| city | String (optional) | Search by city name |
| country | String (optional) | Search by country name |

### <a name="Place"></a>*Place*


**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| id | String | The internal place identifier |
| name | String | The place's name, suitable for display to users |
| address.addressLine1 | String | First line of address |
| address.addressLine2 | String (optional) | Second line of address |
| address.addressLine3 | String (optional) | Third line of address |
| address.postalCode | String | Post (ZIP) code of the place |
| address.country | String | Place's country |
| latitude | Number | Latitude of the place |
| longitude | Number | Longitude of the place |
| placeType | String | Type of the place (atm, branch, ...) |

---

## Templates

* *template.ng.html*

---
