/* eslint-disable import/prefer-default-export */
/**
 * @name DEFAULT_TOOLTIP_SELECTOR
 * @description
 * Chart's tooltip CSS selector
 * @type {string}
 */
export const DEFAULT_TOOLTIP_SELECTOR = '.chart-tooltip-default';

/**
 * @name ARROW_INNER_CSS_SELECTOR
 * @description
 * Chart tooltip's arrow CSS selector (inner layer)
 * @type {string}
 */
export const ARROW_INNER_CSS_SELECTOR = `${DEFAULT_TOOLTIP_SELECTOR}.bb-arrow-left::after`;

/**
 * @name ARROW_OUTER_CSS_SELECTOR
 * @description
 * Chart tooltip's arrow CSS selector (outer layer)
 * @type {string}
 */
export const ARROW_OUTER_CSS_SELECTOR = `${DEFAULT_TOOLTIP_SELECTOR}.bb-arrow-left::before`;

/**
 * @name CHART_SLICE_LABEL
 * @description
 * Slice labels configuration
 * @type {object}
 * @property {string} dataAttr Data attribute that will be attached to the wrapper
 * that contains the label
 * @property {number} offset Icon's offset from the outer edge of the chart
 * @property {number} minimum Minimum value of portion required to create a label
 */
export const CHART_SLICE_LABEL = {
  dataAttr: 'data-category-label',
  offset: 27,
  minimum: 2,
};

/**
 * @name CHART_SECTOR_SHIFT_SIZE
 * @description
 * Slice shifting size (pixels) and size of the canvas padding (which is
 * needed to provide a space for the shifting animation). Is also
 * used for icons offset calculation.
 * @type {number}
 */
export const CHART_SECTOR_SHIFT_SIZE = 10; // pixels

/**
 * @name MS_IN_MIN
 * @description
 * Amount of milliseconds in a minute
 * @type {number}
 */
export const MS_IN_MIN = 60000;

/**
 * @name RENDERING_ANIMATION_TIME
 * @description
 * Time in milliseconds to have a donut slice animation on click
 * @type {number}
 */
export const RENDERING_ANIMATION_TIME = 500; // ms

/**
 * @name CHART_UPDATE_SUBSCRIPTIONS
 * @description
 * List of container names and events that those containers can publish on which
 * chart needs to be redrawn
 * @type {UpdateSubscription[]}
 */
export const CHART_UPDATE_SUBSCRIPTIONS = [
  {
    container: 'panel',
    event: 'DeckPanelLoaded',
  },
  {
    container: 'carousel',
    event: 'CarouselSlideLoaded',
  },
  {
    container: 'lightbox',
    event: 'LightboxOpened',
  },
];

/**
 * @typedef {object} UpdateSubscription
 * @description
 * Object containing container name and event that that container can publish
 * @property {string} container Container name
 * @property {string} event Event that can be expected from a container
 */
