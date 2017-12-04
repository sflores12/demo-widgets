/* eslint-disable import/prefer-default-export */
/* eslint no-unused-vars: ["error", { "args": "none" }] */

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
export const processPlaces = places => places || [];

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
export const onContainerToggle = activatedElement => {};
