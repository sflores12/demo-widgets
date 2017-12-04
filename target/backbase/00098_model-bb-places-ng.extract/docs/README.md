# model-bb-places-ng


Version: **1.0.35**

Model for widget-bb-places-ng

## Imports

* data-bb-places-http-ng
* lib-bb-model-errors
* lib-bb-widget-ng
* vendor-bb-angular

---

## Example

```javascript
import modelPlacesModuleKey, { modelPlacesKey } from 'model-bb-places-ng';

angular
  .module('ExampleModule', [
    modelPlacesModuleKey,
  ])
  .factory('someFactory', [
    modelPlacesKey,
    // into
    function someFactory(placesModel) {
      // ...
    },
  ]);
```

## Table of Contents
- **placesModel**<br/>    <a href="#placesModel_getPlaces">#getPlaces()</a><br/>    <a href="#placesModel_getPlacesPreferences">#getPlacesPreferences()</a><br/>
- **Type Definitions**<br/>    <a href="#PlacesWidgetPreferences">PlacesWidgetPreferences</a><br/>

---

## placesModel


### <a name="placesModel_getPlaces"></a>*#getPlaces()*

Loads places collection from server

##### Returns

Promise - **

### <a name="placesModel_getPlacesPreferences"></a>*#getPlacesPreferences()*

Get required preferences from widget

##### Returns

[PlacesWidgetPreferences](#PlacesWidgetPreferences) - *preferences*

## Type Definitions


### <a name="PlacesWidgetPreferences"></a>*PlacesWidgetPreferences*


**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| latitude | Number |  |
| longitude | Number |  |
| mapZoom | Number |  |
| placesFilterRadius | Number |  |
| apiKey | String |  |
| mapApiUrl | String |  |

---
