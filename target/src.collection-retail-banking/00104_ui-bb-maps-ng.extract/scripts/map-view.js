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
const directive = (mapsHelpers) => ({
  restrict: 'E',
  scope: {
    places: '&',
  },
  require: '^^gMapApi',
  transclude: true,
  template: `
    <div class="col-lg-12">
      <div class="row">
        <ng-transclude></ng-transclude>
        <div class="places-map"></div>
      </div>
    </div>
  `,
  controller: function ctrl() {
    this.searchMethod = mapsHelpers.mapSearch;
  },
  link: (scope, element, attr, parentCtrl) => {
    const $scope = scope;

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
    $scope.initMap = (mapEl) =>
      parentCtrl.getMapsApi()
        .then(() => mapsHelpers.drawMap(mapEl))
        .then(() => mapsHelpers.setCurrentPosition())
        .then(() => mapsHelpers.registerMapEvents($scope.places()));

    $scope.initMap(element[0].querySelector('div.places-map'));
  },
});

export default directive;

