# ui-bb-maps-ng


Version: **1.2.32**


## Imports

* ui-bb-i18n-ng
* vendor-bb-angular

---

## Example

```javascript
// In an extension:
// file: scripts/index.js
import uiBbMapsNg from 'ui-bb-maps-ng';

export const dependencyKeys = [
  uiBbMapsNg,
];

// file: templates/template.ng.html
<g-map places="$ctrl.loadPlaces()" preferences="$ctrl.getPlacesPreferences()">
 {{ ::'places.message.loading' | i18n }}
</g-map>
```

## Table of Contents
- **ui-bb-maps-ng**<br/>    <a href="#ui-bb-maps-ngplaceList">placeList(mapsHelpers)</a><br/>    <a href="#ui-bb-maps-nginitList">initList()</a><br/>    <a href="#ui-bb-maps-nggMapSearch">gMapSearch()</a><br/>    <a href="#ui-bb-maps-nggMap">gMap(mapsHelpers)</a><br/>    <a href="#ui-bb-maps-nginitMap">initMap(mapEl)</a><br/>

---

### <a name="ui-bb-maps-ngplaceList"></a>*placeList(mapsHelpers)*

Implements a component, which shows a list
of places with distances to current location

| Parameter | Type | Description |
| :-- | :-- | :-- |
| mapsHelpers | Object |  |

##### Returns

Object - **

---

### <a name="ui-bb-maps-nginitList"></a>*initList()*

Init places list with getting current position,
adding distance to current position.

##### Returns

Promise - **

---

---

### <a name="ui-bb-maps-nggMapSearch"></a>*gMapSearch()*

Location search component

| Property | Type | Description |
| :-- | :-- | :-- |
| placeholder | String | Placeholder text |

##### Returns

Object - **

---

### <a name="ui-bb-maps-nggMap"></a>*gMap(mapsHelpers)*

Implements a component, which invokes
a map initialization process inside
an element, where it's applied.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| mapsHelpers | Object |  |

##### Returns

Object - **

---

### <a name="ui-bb-maps-nginitMap"></a>*initMap(mapEl)*

Init map with setting current position,
adding places as markers and info wins.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| mapEl | [HTMLElement](#HTMLElement) |  |

##### Returns

Promise - **
