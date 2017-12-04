import { fromHttpError } from 'lib-bb-model-errors';
import {
  Preference,
} from './constants';

/**
 * Model factory for model-bb-places-ng
 *
 * @inner
 * @type {function}
 *
 * @return {object}
 */
export default function placesModel(Promise, widget, placesData) {
  /**
   * @name placesModel#getPlaces
   * @type {function}
   *
   * @description
   * Loads places collection from server
   *
   * @returns {promise}
   */
  const getPlaces = params =>
    placesData
      .getPlaces(params)
      .then(response => response.data)
      .catch((httpErrorResponse) => {
        throw fromHttpError(httpErrorResponse);
      });

  /**
   * @name placesModel#getPlacesPreferences
   * @type {function}
   *
   * @description
   * Get required preferences from widget
   *
   * @returns {PlacesWidgetPreferences} preferences
   */
  const getPlacesPreferences = () => ({
    [Preference.LAT]: widget.getDoublePreference(Preference.LAT),
    [Preference.LNG]: widget.getDoublePreference(Preference.LNG),
    [Preference.ZOOM]: widget.getDoublePreference(Preference.ZOOM),
    [Preference.RADIUS]: widget.getDoublePreference(Preference.RADIUS),
    [Preference.KEY]: widget.getStringPreference(Preference.KEY),
    [Preference.API]: widget.getStringPreference(Preference.API),
    [Preference.LIMIT]: widget.getLongPreference(Preference.LIMIT),
  });

  /**
   * @name placesModel
   * @type {object}
   */
  return {
    getPlaces,
    getPlacesPreferences,
  };
}
