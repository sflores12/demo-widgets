/**
 * @name uiBbCharCounterNg
 * @type {object}
 *
 * @property {HTMLElement} textEl Text input DOM element
 * @property {string} textElQuery for searching element by query
 * @property {config} config Component configuration
 * @property {state} state Component state
 */
const component = {
  bindings: {
    textEl: '<',
    textElQuery: '@',
    config: '<',
    state: '=?',
  },
  controller: 'controller',
  template: `
  <div
    data-ng-if="$ctrl.isTextEl"
    class="{{ $ctrl.config.initStyling }}"
    data-ng-class="{ 'text-danger': !$ctrl.state.isValid }">
    {{ $ctrl.state.counter }}/{{ $ctrl.config.maxChars }}
  </div>
  `,
};

export default component;

/**
 * @typedef {Object} config
 * @property {?number} maxChars Maximum chars allowed (140)
 * @property {?string} initStyling CSS classes to be added on init ("text-left" - default)
 * @property {?boolean} blockTyping If true, user prevented to input when limit reached (false)
 */

/**
 * @typedef {Object} state
 * @property {?number} counter Chars count
 * @property {?boolean} isValid Flag is true if limit is not reached and false otherwise
 */
