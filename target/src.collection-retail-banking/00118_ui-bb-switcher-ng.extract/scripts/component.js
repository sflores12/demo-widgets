/**
 * @name uiBbSwitcherNg
 * @type {object}
 *
 * @description
 * Simple switch component. From next major version,
 * 'switch', 'slider' and 'switch-text' CSS classes will be removed
 * from template
 *
 * @property {boolean} switcher Boolean variable to track switcher state
 * @property {string} size Defines the switcher's size
 * ('normal', 'wide', 'small', 'smaller') (deprecated)
 * @property {string} on Text for 'checked' state
 * @property {string} off Text for 'un-checked' state
 * @property {boolean} disabled pass "true" if we want it to be disabled
 * @property {string} ariaLabel string to be used as aria-label attribute
 */
const component = {
  bindings: {
    switcher: '=?',
    size: '@',
    on: '@',
    off: '@',
    disabled: '<',
    ariaLabel: '@',
  },
  template: `
    <span class="bb-switch switch"
      data-ng-focus="keyboardFocus = true"
      data-ng-blur="keyboardFocus = false"
      data-ng-click="!$ctrl.disabled && ($ctrl.switcher = !$ctrl.switcher)"
      data-ng-class="{
        normal: !$ctrl.size || $ctrl.size === 'normal',
        wide: $ctrl.size === 'wide',
        small: $ctrl.size === 'small',
        smaller: $ctrl.size === 'smaller',
        focus: keyboardFocus,
        checked: $ctrl.switcher,
        disabled: $ctrl.disabled
    }">
      <span class="bb-slider slider"></span>
      <input type="checkbox"
        data-ng-checked="$ctrl.switcher"
        data-ng-attr-aria-label="{{$ctrl.ariaLabel}}"
        tabindex="-1" />
      <span data-ng-if="$ctrl.on && $ctrl.off" class="bb-switch-text switch-text">
        <span class="on">{{$ctrl.on}}</span>
        <span class="off">{{$ctrl.off}}</span>
      </span>
    </span>
  `,
  controller: ['$attrs', ($attrs) => {
    if ($attrs.size) {
      // eslint-disable-next-line max-len, no-console
      console.warn('DEPRECATED - size attribute will be ignored in the next component major release. Use CSS classes to define different switcher sizes.');
    }
  }],
};

export default component;
