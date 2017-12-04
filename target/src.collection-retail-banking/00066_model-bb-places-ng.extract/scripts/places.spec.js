import Model from './places';
import { Preference } from './constants';

describe('model-bb-places-ng::model', function() {
  const placesData = {};
  const widget = {
    getDoublePreference: (preference) => 0.0,
    getLongPreference: (preference) => 0,
    getStringPreference: (preference) => '',
  };
  
  const getModel = () =>
    Model(Promise, widget, placesData);

  describe('#getPlaces', () => {
    it('should load list of places', (done) => {
      const response = {
        headers: {},
        data: {
          id: "123"
        }
      };
      placesData.getPlaces = jasmine.createSpy('getPlaces').and.returnValue(Promise.resolve(response));

      getModel().getPlaces()
        .then((response) => {
          expect(response).toBeDefined();
        })
        .then(done)
        .catch(done.fail);
    });
  });

  describe('#getPlacesPreferences', () => {
    it('should load preferences object', () => {
      expect(getModel().getPlacesPreferences()).toBeObject();
    });
  });
});
