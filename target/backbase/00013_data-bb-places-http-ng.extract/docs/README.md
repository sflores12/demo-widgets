# data-bb-places-http-ng

A data module for accessing the Places REST API.

## Imports

* vendor-bb-angular

---

## Exports

### <a name="default"></a>*default*

Angular dependency injection module key

**Type:** *String*

### <a name="placesDataKey"></a>*placesDataKey*

Angular dependency injection key for the PlacesData service

**Type:** *String*


---

## Example

```javascript
import placesDataModuleKey, {
  placesDataKey,
} from 'data-bb-places-http-ng';
```

---

## PlacesData

Public api for data-bb-places-http-ng service

### <a name="PlacesData#getPlaces"></a>*#getPlaces(params)*

Retrieve list of all places.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| params | Object | Map of query parameters. |
| params.latitude | Number | Latitude for current location. Should be used with longitude and radius params to return places available in specified radius. Eg: 40.71558. |
| params.longitude | Number | Longitude for current location. Should be used with latitude and radius params to return places available in specified radius. Eg: 39.91558. |
| params.radius | Number | Search radius (distance in KM). Eg: 2. |

##### Returns

Promise of <a href="#Response">Response</a> - *A promise resolving to response object*

## Example

```javascript
placesData
 .getPlaces(params)
 .then(function(result){
   console.log('headers', result.headers)
   console.log('data', result.data);
 });
```

---

## PlacesDataProvider

Data service that can be configured with custom base URI.

| Injector Key |
| :-- |
| *data-bb-places-http-ng:placesDataProvider* |


### <a name="PlacesDataProvider#setBaseUri"></a>*#setBaseUri(baseUri)*


| Parameter | Type | Description |
| :-- | :-- | :-- |
| baseUri | String | Base URI which will be the prefix for all HTTP requests |

### <a name="PlacesDataProvider#$get"></a>*#$get()*


##### Returns

Object - *An instance of the service*

## Example

```javascript
// Configuring in an angular app:
angular.module(...)
  .config(['data-bb-places-http-ng:placesDataProvider',
    (dataProvider) => {
      dataProvider.setBaseUri('http://my-service.com/');
      });

// Configuring With config-bb-providers-ng:
export default [
  ['data-bb-places-http-ng:placesDataProvider', (dataProvider) => {
      dataProvider.setBaseUri('http://my-service.com/');
  }]
];
```

## Type Definitions


### <a name="Response"></a>*Response*


**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| data | Object | See method descriptions for possible return types |
| headers | Function | Getter headers function |
| status | Number | HTTP status code of the response. |
| statusText | String | HTTP status text of the response. |

---
