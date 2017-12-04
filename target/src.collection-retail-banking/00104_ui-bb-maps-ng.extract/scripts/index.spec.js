import angular from 'vendor-bb-angular';
import 'angular-mocks';

import mainComponent from './index';
import { Preference } from './constants';

describe('ui-bb-maps-ng', function() {
  let $compile, $componentController, scope;

  const controller = () => ({
    loadPlaces: () => Promise.resolve([]),
    getPlacesPreferences: () => ({
      [Preference.KEY]: 'key',
      [Preference.API]: 'http://maps.googleapis.com/maps/api',
    }),
  });

  var mapsTemplate = `
    <g-map-api data-preferences="ctrl.getPlacesPreferences()">
      <g-map
        data-places="ctrl.loadPlaces()">
      </g-map>
    </g-map-api>
  `;
  var listTemplate = `
    <g-map-api data-preferences="ctrl.getPlacesPreferences()">
      <place-list
        data-places="ctrl.loadPlaces()">
      </place-list>
    </g-map-api>
  `;

  function createElement(template) {
    let compiled = $compile(template)(scope);
    scope.$digest();
    return compiled;
  }

  describe('rendering', function() {
    beforeEach(angular.mock.module(mainComponent));

    beforeEach(angular.mock.inject(function($rootScope, _$compile_, _$componentController_) {
      $compile = _$compile_;
      scope = $rootScope.$new();
      scope.ctrl = controller();
      $componentController = _$componentController_;
    }));

    it('should render map view of the component', () => {
      var element = createElement(mapsTemplate);
      expect(element[0].firstElementChild.tagName.toLocaleLowerCase()).toBe('g-map');
    });

    it('should render list view of the component', () => {
      var element = createElement(listTemplate);
      expect(element[0].firstElementChild.tagName.toLocaleLowerCase()).toBe('place-list');
    });
  });
});
