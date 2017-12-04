/* global google, document, window */
/**
 * @name gMapApi
 * @type {function}
 *
 * @param {object} mapsHelpers
 * @param {Promise}
 *
 * @return {object}
 */

import { Preference } from './constants';

const directive = (Promise, mapsHelpers) => ({
  scope: {
    preferences: '&',
  },
  restrict: 'E',
  controller: ['$scope', function ctrl($scope) {
    let $maps;
    const preferences = $scope.preferences() || {};
    const deferred = Promise.defer();
    mapsHelpers.setPreferences(preferences);

    const cbFuncName = 'googleMapsAPILoad';
    const script = document.createElement('script');
    const mapKey = preferences[Preference.KEY];
    const url = preferences[Preference.API];

    // Ugly global function -- cannot be avoided...
    window[cbFuncName] = () => {
      $maps = google.maps;
      deferred.resolve();
      delete window[cbFuncName];
    };

    script.type = 'text/javascript';
    script.async = 'true';
    script.src = `${url}/js?libraries=geometry,places&key=${mapKey}&callback=${cbFuncName}`;
    document.querySelector('head').appendChild(script);

    this.getMapsApi = () => {
      // quit if maps are already there
      if ($maps) {
        deferred.resolve();
        return deferred.promise;
      }

      return deferred.promise.then(() => {
        mapsHelpers.setApi($maps);

        return $maps;
      });
    };

    this.getPreferences = () => preferences;
  }],
});

export default directive;
