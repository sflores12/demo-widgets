(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("ui-bb-i18n-ng"), require("vendor-bb-angular"));
	else if(typeof define === 'function' && define.amd)
		define("ui-bb-maps-ng", ["ui-bb-i18n-ng", "vendor-bb-angular"], factory);
	else if(typeof exports === 'object')
		exports["ui-bb-maps-ng"] = factory(require("ui-bb-i18n-ng"), require("vendor-bb-angular"));
	else
		root["ui-bb-maps-ng"] = factory(root["ui-bb-i18n-ng"], root["vendor-bb-angular"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_19__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(29);

/***/ }),
/* 1 */,
/* 2 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ }),
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_19__;

/***/ }),
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.moduleKey = undefined;
	
	var _vendorBbAngular = __webpack_require__(19);
	
	var _vendorBbAngular2 = _interopRequireDefault(_vendorBbAngular);
	
	var _uiBbI18nNg = __webpack_require__(2);
	
	var _uiBbI18nNg2 = _interopRequireDefault(_uiBbI18nNg);
	
	var _mapApi = __webpack_require__(30);
	
	var _mapApi2 = _interopRequireDefault(_mapApi);
	
	var _mapView = __webpack_require__(32);
	
	var _mapView2 = _interopRequireDefault(_mapView);
	
	var _listView = __webpack_require__(33);
	
	var _listView2 = _interopRequireDefault(_listView);
	
	var _mapSearch = __webpack_require__(34);
	
	var _mapSearch2 = _interopRequireDefault(_mapSearch);
	
	var _mapsHelpers = __webpack_require__(35);
	
	var _mapsHelpers2 = _interopRequireDefault(_mapsHelpers);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var mapsHelpersKey = 'ui-bb-maps-ng:maps-helpers'; /**
	                                                    * @module ui-bb-maps-ng
	                                                    *
	                                                    * @example
	                                                    * // In an extension:
	                                                    * // file: scripts/index.js
	                                                    * import uiBbMapsNg from 'ui-bb-maps-ng';
	                                                    *
	                                                    * export const dependencyKeys = [
	                                                    *   uiBbMapsNg,
	                                                    * ];
	                                                    *
	                                                    * // file: templates/template.ng.html
	                                                    * <g-map places="$ctrl.loadPlaces()" preferences="$ctrl.getPlacesPreferences()">
	                                                    *  {{ ::'places.message.loading' | i18n }}
	                                                    * </g-map>
	                                                    */
	var moduleKey = exports.moduleKey = 'ui-bb-maps-ng';
	
	exports.default = _vendorBbAngular2.default.module(moduleKey, [_uiBbI18nNg2.default]).factory(mapsHelpersKey, ['$q', _mapsHelpers2.default]).directive('gMapApi', ['$q', mapsHelpersKey, _mapApi2.default]).directive('gMap', [mapsHelpersKey, _mapView2.default]).directive('gMapSearch', [_mapSearch2.default]).directive('placeList', ['$q', mapsHelpersKey, _listView2.default]).name;

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _constants = __webpack_require__(31);
	
	var directive = function directive(Promise, mapsHelpers) {
	  return {
	    scope: {
	      preferences: '&'
	    },
	    restrict: 'E',
	    controller: ['$scope', function ctrl($scope) {
	      var $maps = void 0;
	      var preferences = $scope.preferences() || {};
	      var deferred = Promise.defer();
	      mapsHelpers.setPreferences(preferences);
	
	      var cbFuncName = 'googleMapsAPILoad';
	      var script = document.createElement('script');
	      var mapKey = preferences[_constants.Preference.KEY];
	      var url = preferences[_constants.Preference.API];
	
	      // Ugly global function -- cannot be avoided...
	      window[cbFuncName] = function () {
	        $maps = google.maps;
	        deferred.resolve();
	        delete window[cbFuncName];
	      };
	
	      script.type = 'text/javascript';
	      script.async = 'true';
	      script.src = url + '/js?libraries=geometry,places&key=' + mapKey + '&callback=' + cbFuncName;
	      document.querySelector('head').appendChild(script);
	
	      this.getMapsApi = function () {
	        // quit if maps are already there
	        if ($maps) {
	          deferred.resolve();
	          return deferred.promise;
	        }
	
	        return deferred.promise.then(function () {
	          mapsHelpers.setApi($maps);
	
	          return $maps;
	        });
	      };
	
	      this.getPreferences = function () {
	        return preferences;
	      };
	    }]
	  };
	}; /* global google, document, window */
	/**
	 * @name gMapApi
	 * @type {function}
	 *
	 * @param {object} mapsHelpers
	 * @param {Promise}
	 *
	 * @return {object}
	 */
	
	exports.default = directive;

/***/ }),
/* 31 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * Widget preferences enum
	 * @type {object}
	 */
	var Preference = exports.Preference = {
	  KEY: 'apiKey',
	  API: 'mapApiUrl',
	  ZOOM: 'mapZoom',
	  LAT: 'latitude',
	  LNG: 'longitude',
	  RADIUS: 'placesFilterRadius',
	  LIMIT: 'limitList'
	};
	
	var Events = exports.Events = {};

/***/ }),
/* 32 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/* global document */
	/**
	 * @name gMap
	 * @type {function}
	 *
	 * @description
	 * Implements a component, which invokes
	 * a map initialization process inside
	 * an element, where it's applied.
	 *
	 * @param {object} mapsHelpers
	 *
	 * @return {object}
	 */
	var directive = function directive(mapsHelpers) {
	  return {
	    restrict: 'E',
	    scope: {
	      places: '&'
	    },
	    require: '^^gMapApi',
	    transclude: true,
	    template: '\n    <div class="col-lg-12">\n      <div class="row">\n        <ng-transclude></ng-transclude>\n        <div class="places-map"></div>\n      </div>\n    </div>\n  ',
	    controller: function ctrl() {
	      this.searchMethod = mapsHelpers.mapSearch;
	    },
	    link: function link(scope, element, attr, parentCtrl) {
	      var $scope = scope;
	
	      /**
	       * @name initMap
	       * @type {function}
	       *
	       * @description
	       * Init map with setting current position,
	       * adding places as markers and info wins.
	       *
	       * @param {HTMLElement} mapEl
	       *
	       * @returns {promise}
	       */
	      $scope.initMap = function (mapEl) {
	        return parentCtrl.getMapsApi().then(function () {
	          return mapsHelpers.drawMap(mapEl);
	        }).then(function () {
	          return mapsHelpers.setCurrentPosition();
	        }).then(function () {
	          return mapsHelpers.registerMapEvents($scope.places());
	        });
	      };
	
	      $scope.initMap(element[0].querySelector('div.places-map'));
	    }
	  };
	};
	
	exports.default = directive;

/***/ }),
/* 33 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/* global document */
	/**
	 * @name placeList
	 * @type {function}
	 *
	 * @description
	 * Implements a component, which shows a list
	 * of places with distances to current location
	 *
	 * @param {object} mapsHelpers
	 *
	 * @return {object}
	 */
	var directive = function directive(Promise, mapsHelpers) {
	  return {
	    restrict: 'E',
	    scope: {
	      places: '&',
	      messages: '<'
	    },
	    transclude: true,
	    template: '\n    <div class="places-list list-items-wrapper">\n      <ng-transclude></ng-transclude>\n      <div\n        data-ng-if="placesList.length && !placesList[0].distance"\n        class="alert alert-info text-center"\n        data-ng-bind="messages.list"\n      ></div>\n      <div\n        class="alert alert-info text-center"\n        data-ng-if="!placesList.length"\n        data-ng-bind="messages.empty"\n      ></div>\n      <div\n        data-ng-if="setupError"\n        class="alert alert-danger text-center"\n        data-ng-bind="messages.error"\n      ></div>\n      <div\n        data-ng-if="placesList.length"\n        class="panel list-item list-item-min-height"\n        data-ng-repeat="place in placesList | limitTo: listLimit"\n        data-ng-click="selectPlace(place)"\n      >\n        <div class="col-xs-12 col-sm-8">\n          <div class="row">\n            <div class="col-xs-12">\n              <strong data-ng-bind="place.name"></strong>\n            </div>\n            <div class="col-xs-12 place-address">\n              <span data-ng-bind="place.address.addressLine1"></span>\n              <span data-ng-bind="place.address.postalCode"></span>\n              <span data-ng-if="place.address.country">,\n                <span class="text-muted" data-ng-bind="place.address.country"></span>\n              </span>\n              <span data-ng-if="place.address.addressLine2 || place.address.addressLine3">\n                <br>\n                <span data-ng-bind="place.address.addressLine2"></span>\n                <span data-ng-bind="place.address.addressLine3"></span>\n              </span>\n              <span class="text-primary visible-xs" data-ng-if="place.distance">\n                <br>\n                <span data-ng-bind="place.distance | number: 0"></span>\n                <span> m</span>\n              </span>\n            </div>\n          </div>\n        </div>\n        <div data-ng-if="place.distance" class="col-sm-4 text-primary text-right hidden-xs">\n          <span data-ng-bind="place.distance | number: 0"></span>\n          <span> m</span>\n        </div>\n        <div class="clearfix"></div>\n      </div>\n    </div>\n  ',
	    require: '^^gMapApi',
	    controller: function ctrl() {
	      this.searchMethod = mapsHelpers.listSearch;
	    },
	    link: function link(scope, el, attr, parentCtrl) {
	      var $scope = scope;
	
	      /**
	       * @name initList
	       * @type {function}
	       *
	       * @description
	       * Init places list with getting current position,
	       * adding distance to current position.
	       *
	       * @returns {promise}
	       */
	      $scope.initList = function () {
	        $scope.listLimit = mapsHelpers.getListLimit();
	
	        $scope.setPlaces = function (placesList) {
	          $scope.placesList = placesList;
	        };
	
	        var settingUpPromise = mapsHelpers.settingUp($scope.places(), $scope.setPlaces);
	
	        return parentCtrl.getMapsApi().then(function () {
	          Promise.all([settingUpPromise, mapsHelpers.discoverCurrentPosition()]).then(function () {
	            mapsHelpers.loadPlaces().then(function (data) {
	              return mapsHelpers.calculateDistance(data);
	            }).then(function (data) {
	              return mapsHelpers.sortByDistance(data);
	            }).then(function (data) {
	              $scope.placesList = data;
	            });
	          }).catch(function () {
	            $scope.setupError = true;
	          });
	        });
	      };
	
	      $scope.selectPlace = function (place) {
	        mapsHelpers.mapSearch(place);
	      };
	
	      $scope.initList();
	    }
	  };
	};
	
	exports.default = directive;

/***/ }),
/* 34 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * @name gMapSearch
	 * @type {function}
	 *
	 * @description
	 * Location search component
	 *
	 * @return {object}
	 * @property {string} placeholder Placeholder text
	 */
	var directive = function directive() {
	  return {
	    restrict: 'E',
	    bindings: {
	      placeholder: '@'
	    },
	    template: '\n    <label class="show">\n      <input type="text" class="form-control g-map-address-search" placeholder="{{placeholder}}" />\n    </label>\n  ',
	    require: ['^^gMapApi', '^?^^gMap', '?^^placeList'],
	    link: function link(scope, el, attr, ctrls) {
	      Object.assign(scope, { placeholder: attr.placeholder });
	
	      var apiCtrl = ctrls[0];
	      var gMapCtrl = ctrls[1];
	      var placeListCtrl = ctrls[2];
	      var searchMethod = gMapCtrl && gMapCtrl.searchMethod || placeListCtrl && placeListCtrl.searchMethod;
	
	      apiCtrl.getMapsApi().then(function (mapsApi) {
	        var autocomplete = new mapsApi.places.Autocomplete(el[0].querySelector('.g-map-address-search'));
	
	        autocomplete.addListener('place_changed', function () {
	          var place = autocomplete.getPlace();
	
	          if (place.geometry) {
	            searchMethod(place);
	          }
	        });
	      });
	    }
	  };
	};
	
	exports.default = directive;

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function (Promise) {
	  // Vars to be shared among map helpers
	  var $maps = void 0;
	  var map = void 0;
	  var centerMarker = void 0;
	  var centerCoords = void 0;
	  var preferences = void 0;
	  var markers = void 0;
	  var placesLoadFn = void 0;
	
	  // for list view
	  var setPlaces = void 0;
	  var setupDeferred = void 0;
	
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
	    centerCoords = new $maps.LatLng(preferences[_constants.Preference.LAT], preferences[_constants.Preference.LNG]);
	    return {
	      center: centerCoords,
	      zoom: preferences[_constants.Preference.ZOOM] || 10
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
	    var infoWindow = new $maps.InfoWindow({
	      content: text || 'No text provided'
	    });
	
	    marker.addListener('click', function () {
	      return infoWindow.open(map, marker);
	    });
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
	    list.forEach(function (place) {
	      var latitude = place.latitude,
	          longitude = place.longitude,
	          icon = place.icon;
	
	      var position = { lat: parseFloat(latitude), lng: parseFloat(longitude) };
	      var marker = new $maps.Marker({
	        position: position,
	        map: map,
	        icon: icon
	      });
	      markers.push(Object.assign(marker, { place: place }));
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
	
	    markers.forEach(function (marker) {
	      var markerWrapper = marker;
	      var place = markerWrapper.place || {};
	      // TODO: info window template should be customizable
	      var content = '\n        <h4>' + place.name + '</h4>\n        <div>\n          ' + (place.address.addressLine1 || '') + ',\n          ' + (place.address.postalCode || '') + '\n          ' + (place.address.addressLine2 || '') + '\n        </div>\n      ';
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
	      markers.forEach(function (marker) {
	        var markerWrapper = marker;
	        markerWrapper.place.distance = $maps.geometry.spherical.computeDistanceBetween(centerMarker.position, markerWrapper.position);
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
	    var mapOptions = Object.assign(populateMapOptions(), {
	      mapTypeControlOptions: {
	        mapTypeIds: [google.maps.MapTypeId.ROADMAP]
	      },
	      disableDefaultUI: true, // a way to quickly hide all controls
	      zoomControl: true // allow zoom only
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
	      navigator.geolocation.getCurrentPosition(function (position) {
	        centerCoords = new $maps.LatLng(position.coords.latitude, position.coords.longitude);
	        map.setCenter(centerCoords);
	
	        // TODO: current position marker should be customizable
	        centerMarker = new $maps.Marker({
	          position: centerCoords,
	          icon: {
	            path: $maps.SymbolPath.CIRCLE,
	            scale: 5,
	            strokeColor: 'green',
	            strokeWeight: 5
	          },
	          map: map
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
	      navigator.geolocation.getCurrentPosition(function (position) {
	        centerCoords = new $maps.LatLng(position.coords.latitude, position.coords.longitude);
	        setupDeferred.resolve();
	      }, function () {
	        // User refused to use geolocation
	        centerCoords = new $maps.LatLng(preferences[_constants.Preference.LAT], preferences[_constants.Preference.LNG]);
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
	    data.forEach(function (place) {
	      var item = place;
	      var itemPosition = new $maps.LatLng(place.latitude, place.longitude);
	      item.distance = $maps.geometry.spherical.computeDistanceBetween(centerCoords, itemPosition);
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
	    return data.sort(function (a, b) {
	      return a.distance - b.distance;
	    });
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
	    return preferences[_constants.Preference.RADIUS];
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
	    return preferences[_constants.Preference.LIMIT];
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
	    map.addListener('idle', function () {
	      var bounds = map.getBounds();
	      // distance in km
	      var distance = $maps.geometry.spherical.computeDistanceBetween(bounds.getNorthEast(), bounds.getSouthWest()) / 1000;
	
	      var params = {
	        latitude: bounds.getCenter().lat(),
	        longitude: bounds.getCenter().lng(),
	        radius: Math.ceil(distance / 2)
	      };
	
	      var loadFn = fn(params).then(function (data) {
	        if (data) {
	          createMarkers(data);
	          addMarkersInfoWin();
	        }
	        return data;
	      });
	
	      if (setPlaces) {
	        loadFn.then(function (data) {
	          return calculateDistance(data);
	        }).then(function (data) {
	          return sortByDistance(data);
	        }).then(function (data) {
	          return setPlaces(data);
	        });
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
	    var params = {
	      latitude: preferences[_constants.Preference.LAT],
	      longitude: preferences[_constants.Preference.LNG],
	      radius: preferences[_constants.Preference.RADIUS]
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
	    var params = {
	      latitude: place.geometry.location.lat(),
	      longitude: place.geometry.location.lng(),
	      radius: preferences[_constants.Preference.RADIUS]
	    };
	
	    // updates center coordinates, used to calculate distance
	    centerCoords = new $maps.LatLng(params.latitude, params.longitude);
	
	    if (map) {
	      map.setCenter(place.geometry.location);
	      // reset zoom to default value on each new search
	      map.setZoom(preferences[_constants.Preference.ZOOM]);
	    }
	
	    placesLoadFn(params).then(function (data) {
	      return calculateDistance(data);
	    }).then(function (data) {
	      return sortByDistance(data);
	    }).then(function (data) {
	      return setPlaces(data);
	    });
	  }
	
	  function mapSearch(place) {
	    var location = place.geometry && place.geometry.location || new $maps.LatLng(place.latitude, place.longitude);
	
	    if (map) {
	      map.setCenter(location);
	      // reset zoom to default value on each new search
	      map.setZoom(preferences[_constants.Preference.ZOOM]);
	    }
	  }
	
	  return {
	    drawMap: drawMap,
	    setCurrentPosition: setCurrentPosition,
	    discoverCurrentPosition: discoverCurrentPosition,
	    settingUp: settingUp,
	    calculateDistance: calculateDistance,
	    sortByDistance: sortByDistance,
	    getListRadius: getListRadius,
	    getListLimit: getListLimit,
	    registerMapEvents: registerMapEvents,
	    loadPlaces: loadPlaces,
	    setApi: setApi,
	    setPreferences: setPreferences,
	    listSearch: listSearch,
	    mapSearch: mapSearch
	  };
	};
	
	var _constants = __webpack_require__(31);

/***/ })
/******/ ])
});
;
//# sourceMappingURL=ui-bb-maps-ng.js.map