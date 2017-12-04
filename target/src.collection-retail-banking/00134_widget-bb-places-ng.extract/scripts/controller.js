import { E_AUTH, E_CONNECTIVITY, E_UNEXPECTED, E_USER } from 'lib-bb-model-errors';
import { Text } from './constants';

const errorMessages = {
  [E_AUTH]: Text.ERROR_AUTH,
  [E_CONNECTIVITY]: Text.ERROR_CONNECTION,
  [E_UNEXPECTED]: Text.ERROR_UNEXPECTED,
  [E_USER]: Text.ERROR_USER,
};

/**
 * @name PlacesController
 *
 * @type {object}
 * @description
 * Places widget
 */
export default function PlacesController(model, hooks, bus) {
  const $ctrl = this;

  /**
   * @name uiError
   * @type {function}
   *
   * @description
   * Creates an error object for a template
   *
   * @inner
   * @param {object} modelError object
   *
   * @returns {{message: string}}
   */
  const uiError = (modelError) => {
    let error = '';

    if (modelError && modelError.code) {
      error = errorMessages[modelError.code];
    }

    return {
      message: error,
    };
  };

  /**
   * @name PlacesController#loadPlaces
   * @type {function}
   *
   * @description
   * Load places collection
   *
   * @param {PlacesParameters} params configuration to call model getPlaces
   * @return {promise}
   */
  const loadPlaces = (params) => {
    $ctrl.loadingPlaces = true;
    return model.getPlaces(params)
      .then((data) => {
        $ctrl.places = hooks.processPlaces(data);
        $ctrl.loadingPlaces = false;
        return $ctrl.places;
      })
      .catch((error) => {
        $ctrl.error = uiError(error);
        $ctrl.loadingPlaces = false;
      });
  };

  /**
   * @name PlacesController#getPlacesPreferences
   * @type {function}
   *
   * @description
   * Returns widget preferences as an enum object
   * (shorthand to model method)
   *
   * @return {object}
   */
  const getPlacesPreferences = () => model.getPlacesPreferences();

  /**
   * @name PlacesController#bindEvents
   * @type {function}
   * @inner
   * @description
   * Binds event listeners for containers that can show map after user action or timeout
   *
   * @return {void}
   */
  const bindEvents = () => {
    bus.subscribe('DeckPanelLoaded', (panel) => hooks.onContainerToggle(panel.htmlNode));
    bus.subscribe('CarouselSlideLoaded', hooks.onContainerToggle);
    bus.subscribe('LightboxOpened', hooks.onContainerToggle);
  };

  /**
   * @name PlacesController#$onInit
   * @type {function}
   *
   * @description
   * AngularJS Lifecycle hook used to initialize the controller
   *
   * @returns {void}
   */
  const $onInit = () => {
    bindEvents();
  };

  Object.assign($ctrl, {
    $onInit,
    loadPlaces,
    getPlacesPreferences,
  });
}
