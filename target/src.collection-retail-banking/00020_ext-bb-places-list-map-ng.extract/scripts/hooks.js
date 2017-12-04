/* eslint-disable import/prefer-default-export */
/* global window, google, angular */

// TODO: Replace this function with the one provided by building blocks
/**
 * @inner
 * @description
 * Get extension assets' directory path
 *
 * @returns {string}
 */
const getExtensionAssetsPath = () => {
  const configuredContextRoot = window.BB && window.BB.config && window.BB.config.contextRoot;
  const v6ContextRoot = () => {
    const cxpFeature = window.portalClient &&
          window.portalClient.getFeature &&
          window.portalClient.getFeature('cxp');
    return cxpFeature && cxpFeature.config.get('contextRoot');
  };
  const v5ContextRoot = () => window.b$ && window.b$.portal && window.b$.portal.config.resourceRoot;
  const DEFAULT_CONTEXT_ROOT = '/portalserver';
  const contextRoot = configuredContextRoot ||
      v6ContextRoot() ||
      v5ContextRoot() ||
      DEFAULT_CONTEXT_ROOT;
  const extensionName = 'ext-bb-places-ng'; // configure me
  return `${contextRoot}/static/features/[BBHOST]/${extensionName}/assets`;
};

/**
 * @name Hooks
 * @type {object}
 *
 * @description
 * Hooks for widget-bb-places-ng
 */

/**
 * @name Hooks#processPlaces
 * @type {function}
 *
 * @description
 * Hook for processing places list
 * Assigned to [$ctrl.loadPlaces]
 *
 * @param {Place[]} places Array of places
 * @returns {Place[]} Processed array of places
 */
export const processPlaces = places => {
  const assetsPath = getExtensionAssetsPath();
  return (places || []).map((place) => {
    Object.assign(place, {
      icon: `${assetsPath}/images/atm-marker.png`,
    });
    return place;
  });
};

/**
 * @name Hooks#onContainerToggle
 * @type {function}
 *
 * @description
 * Hook that is being triggered in case when parent container
 * that has the ability to show/hide part of it's content (tabs, deck, carousel)
 * toggles the child element
 * Assigned to [$ctrl.$onInit]
 *
 * @param {object} activatedElement Child element that became visible
 * @returns {void}
 */
export const onContainerToggle = activatedElement => {
  const mapElements = angular.element(activatedElement).find('.places-map');
  if (mapElements.length === 0) {
    return;
  }

  google.maps.event.trigger(mapElements.data('map'), 'resize');
};
