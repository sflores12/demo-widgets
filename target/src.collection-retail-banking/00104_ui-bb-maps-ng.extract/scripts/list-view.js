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
const directive = (Promise, mapsHelpers) => ({
  restrict: 'E',
  scope: {
    places: '&',
    messages: '<',
  },
  transclude: true,
  template: `
    <div class="places-list list-items-wrapper">
      <ng-transclude></ng-transclude>
      <div
        data-ng-if="placesList.length && !placesList[0].distance"
        class="alert alert-info text-center"
        data-ng-bind="messages.list"
      ></div>
      <div
        class="alert alert-info text-center"
        data-ng-if="!placesList.length"
        data-ng-bind="messages.empty"
      ></div>
      <div
        data-ng-if="setupError"
        class="alert alert-danger text-center"
        data-ng-bind="messages.error"
      ></div>
      <div
        data-ng-if="placesList.length"
        class="panel list-item list-item-min-height"
        data-ng-repeat="place in placesList | limitTo: listLimit"
        data-ng-click="selectPlace(place)"
      >
        <div class="col-xs-12 col-sm-8">
          <div class="row">
            <div class="col-xs-12">
              <strong data-ng-bind="place.name"></strong>
            </div>
            <div class="col-xs-12 place-address">
              <span data-ng-bind="place.address.addressLine1"></span>
              <span data-ng-bind="place.address.postalCode"></span>
              <span data-ng-if="place.address.country">,
                <span class="text-muted" data-ng-bind="place.address.country"></span>
              </span>
              <span data-ng-if="place.address.addressLine2 || place.address.addressLine3">
                <br>
                <span data-ng-bind="place.address.addressLine2"></span>
                <span data-ng-bind="place.address.addressLine3"></span>
              </span>
              <span class="text-primary visible-xs" data-ng-if="place.distance">
                <br>
                <span data-ng-bind="place.distance | number: 0"></span>
                <span> m</span>
              </span>
            </div>
          </div>
        </div>
        <div data-ng-if="place.distance" class="col-sm-4 text-primary text-right hidden-xs">
          <span data-ng-bind="place.distance | number: 0"></span>
          <span> m</span>
        </div>
        <div class="clearfix"></div>
      </div>
    </div>
  `,
  require: '^^gMapApi',
  controller: function ctrl() {
    this.searchMethod = mapsHelpers.listSearch;
  },
  link: (scope, el, attr, parentCtrl) => {
    const $scope = scope;

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
    $scope.initList = () => {
      $scope.listLimit = mapsHelpers.getListLimit();

      $scope.setPlaces = (placesList) => {
        $scope.placesList = placesList;
      };

      const settingUpPromise = mapsHelpers.settingUp($scope.places(), $scope.setPlaces);

      return parentCtrl.getMapsApi()
        .then(() => {
          Promise.all([settingUpPromise, mapsHelpers.discoverCurrentPosition()])
            .then(() => {
              mapsHelpers.loadPlaces()
                .then((data) => mapsHelpers.calculateDistance(data))
                .then((data) => mapsHelpers.sortByDistance(data))
                .then((data) => {
                  $scope.placesList = data;
                });
            })
            .catch(() => {
              $scope.setupError = true;
            });
        });
    };

    $scope.selectPlace = (place) => {
      mapsHelpers.mapSearch(place);
    };

    $scope.initList();
  },
});

export default directive;

