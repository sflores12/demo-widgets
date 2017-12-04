/* global google, document, window, navigator, angular*/
import { Preference } from './constants';

export default function (Promise) {
  // Vars to be shared among map helpers
  let $maps;
  let map;
  let centerMarker;
  let centerCoords;
  let preferences;
  let markers;
  let placesLoadFn;

  // for list view
  let setPlaces;
  let setupDeferred;

  /**
   * @name populateMapOptions
   * @type {function}
   * @private
   * @inner
   *
   * @description
   * Populates map options object with values
   *
   * @returns {{center: {lat: number, lng: number}, zoom: number}}
   */
  function populateMapOptions() {
    centerCoords = new $maps.LatLng(preferences[Preference.LAT], preferences[Preference.LNG]);
    return {
      center: centerCoords,
      zoom: preferences[Preference.ZOOM] || 10,
    };
  }

  /**
   * @name addInfoWindow
   * @type {function}
   * @private
   *
   * @param {object} marker
   * @param {string} text to be shown within a window
   * @returns {object}
   */
  function addInfoWindow(marker, text) {
    const infoWindow = new $maps.InfoWindow({
      content: text || 'No text provided',
    });

    marker.addListener('click', () => infoWindow.open(map, marker));
    return infoWindow;
  }

  /**
   * @name createMarkers
   * @type {function}
   * @private
   *
   * @description
   * Create markers and add those to a list we will use later
   *
   * @param {array} list
   * @returns {void}
   */
  function createMarkers(list) {
    // remove all markers first
    markers = [];
    list.forEach((place) => {
      const { latitude, longitude, icon } = place;
      const position = { lat: parseFloat(latitude), lng: parseFloat(longitude) };
      const marker = new $maps.Marker({
        position,
        map,
        icon,
      });
      markers.push(Object.assign(marker, { place }));
    });
  }

  /**
   * @name addMarkersInfoWin
   * @type {function}
   * @private
   *
   * @description
   * Add name and address info windows to markers
   *
   * @returns {void}
   */
  function addMarkersInfoWin() {
    if (markers.length < 1) return;

    markers.forEach((marker) => {
      const markerWrapper = marker;
      const place = markerWrapper.place || {};
      // TODO: info window template should be customizable
      const content = `
        <h4>${place.name}</h4>
        <div>
          ${place.address.addressLine1 || ''},
          ${place.address.postalCode || ''}
          ${place.address.addressLine2 || ''}
        </div>
      `;
      markerWrapper.infoWin = addInfoWindow(markerWrapper, content);
    });
  }

  /**
   * @name addDistanceToCenter
   * @type {function}
   * @private
   *
   * @description
   * Add information about distance between current location
   * and specific place (marker)
   *
   * @returns {void}
   */
  function addDistanceToCenter() {
    if (markers.length > 0 && centerMarker) {
      markers.forEach((marker) => {
        const markerWrapper = marker;
        markerWrapper.place.distance =
          $maps.geometry
            .spherical
            .computeDistanceBetween(centerMarker.position, markerWrapper.position);
      });
    }
  }

  /**
   * @name drawMap
   * @type {function}
   * @private
   *
   * @description
   * Draw map into a wrapper
   *
   * @param {string} mapWrapperIdentifier of map wrapper DOM el
   * @param {function} getDoublePreference
   *
   * @returns {object}
   */
  function drawMap(wrapperEl) {
    const mapOptions = Object.assign(populateMapOptions(), {
      mapTypeControlOptions: {
        mapTypeIds: [google.maps.MapTypeId.ROADMAP],
      },
      disableDefaultUI: true, // a way to quickly hide all controls
      zoomControl: true, // allow zoom only
    });
    map = new $maps.Map(wrapperEl, mapOptions);
    // save reference
    angular.element(wrapperEl).data('map', map);
    return map;
  }

  /**
   * @name setCurrentPosition
   * @type {function}
   * @private
   *
   * @description
   * Set position based on geolocation (if allowed)
   *
   * @returns {object}
   */
  function setCurrentPosition() {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        centerCoords = new $maps.LatLng(position.coords.latitude, position.coords.longitude);
        map.setCenter(centerCoords);

        // TODO: current position marker should be customizable
        centerMarker = new $maps.Marker({
          position: centerCoords,
          icon: {
            path: $maps.SymbolPath.CIRCLE,
            scale: 5,
            strokeColor: 'green',
            strokeWeight: 5,
          },
          map,
        });
        addDistanceToCenter();
      });
    }
    return map;
  }

  /**
   * @name discoverCurrentPosition
   * @type {function}
   * @private
   *
   * @description
   * Returns position based on geolocation (if allowed)
   *
   * @return {void}
   */
  function discoverCurrentPosition() {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        centerCoords = new $maps.LatLng(position.coords.latitude, position.coords.longitude);
        setupDeferred.resolve();
      }, () => {
        // User refused to use geolocation
        centerCoords = new $maps.LatLng(preferences[Preference.LAT], preferences[Preference.LNG]);
        setupDeferred.resolve();
      });
    } else {
      setupDeferred.reject();
    }
  }

  /**
   * @name settingUp
   * @type {function}
   * @private
   *
   * @description
   * Returns promise of setting up current position
   *
   * @param {function} fn
   * @param {function} setPlacesFn
   *
   * @return {promise}
   */
  function settingUp(fn, setPlacesFn) {
    setPlaces = setPlacesFn;
    placesLoadFn = fn;
    setupDeferred = Promise.defer();

    return setupDeferred.promise;
  }

  /**
   * @name calculateDistance
   * @type {function}
   * @private
   *
   * @param {array} data list of places
   *
   * @return {Array}
   */
  function calculateDistance(data) {
    if (!centerCoords || !data) return [];
    data.forEach((place) => {
      const item = place;
      const itemPosition = new $maps.LatLng(place.latitude, place.longitude);
      item.distance = $maps.geometry.spherical
        .computeDistanceBetween(centerCoords, itemPosition);
    });

    return data;
  }

  /**
   * @name sortByDistance
   * @type {function}
   * @private
   *
   * @description
   * Sorting places list by distance to current location
   * (closest on top)
   *
   * @param {array} data list of places
   *
   * @return {Array}
   */
  function sortByDistance(data) {
    if (!data) return [];
    return data.sort((a, b) => a.distance - b.distance);
  }

  /**
   * @name getListRadius
   * @type {function}
   * @private
   *
   * @description
   * Return radius preference
   *
   * @returns {number}
   */
  function getListRadius() {
    return preferences[Preference.RADIUS];
  }

  /**
   * @name getListLimit
   * @type {function}
   * @private
   *
   * @description
   * Return preference related to list limit
   *
   * @returns {number}
   */
  function getListLimit() {
    return preferences[Preference.LIMIT];
  }

  /**
   * @name registerMapEvents
   * @type {function}
   * @private
   * @param  {Function} fn Callback function
   *
   * @return {void}
   */
  function registerMapEvents(fn) {
    // Idle event is fired when the map becomes idle after panning or zooming.
    map.addListener('idle', () => {
      const bounds = map.getBounds();
      // distance in km
      const distance = $maps.geometry.spherical
            .computeDistanceBetween(bounds.getNorthEast(), bounds.getSouthWest()) / 1000;

      const params = {
        latitude: bounds.getCenter().lat(),
        longitude: bounds.getCenter().lng(),
        radius: Math.ceil(distance / 2),
      };

      const loadFn = fn(params)
        .then((data) => {
          if (data) {
            createMarkers(data);
            addMarkersInfoWin();
          }
          return data;
        });

      if (setPlaces) {
        loadFn
          .then((data) => calculateDistance(data))
          .then((data) => sortByDistance(data))
          .then((data) => setPlaces(data));
      }
    });
  }

  /**
   * @name loadPlaces
   * @type {function}
   * @private
   *
   * @return {Promise}
   */
  function loadPlaces() {
    const params = {
      latitude: preferences[Preference.LAT],
      longitude: preferences[Preference.LNG],
      radius: preferences[Preference.RADIUS],
    };

    return placesLoadFn(params);
  }

  function setApi(mapsApi) {
    $maps = mapsApi;
  }

  function setPreferences(prefs) {
    preferences = prefs;
  }

  function listSearch(place) {
    const params = {
      latitude: place.geometry.location.lat(),
      longitude: place.geometry.location.lng(),
      radius: preferences[Preference.RADIUS],
    };

    // updates center coordinates, used to calculate distance
    centerCoords = new $maps.LatLng(params.latitude, params.longitude);

    if (map) {
      map.setCenter(place.geometry.location);
      // reset zoom to default value on each new search
      map.setZoom(preferences[Preference.ZOOM]);
    }

    placesLoadFn(params)
      .then((data) => calculateDistance(data))
      .then((data) => sortByDistance(data))
      .then((data) => setPlaces(data));
  }

  function mapSearch(place) {
    const location = (place.geometry && place.geometry.location) ||
            new $maps.LatLng(place.latitude, place.longitude);

    if (map) {
      map.setCenter(location);
      // reset zoom to default value on each new search
      map.setZoom(preferences[Preference.ZOOM]);
    }
  }

  return {
    drawMap,
    setCurrentPosition,
    discoverCurrentPosition,
    settingUp,
    calculateDistance,
    sortByDistance,
    getListRadius,
    getListLimit,
    registerMapEvents,
    loadPlaces,
    setApi,
    setPreferences,
    listSearch,
    mapSearch,
  };
}
