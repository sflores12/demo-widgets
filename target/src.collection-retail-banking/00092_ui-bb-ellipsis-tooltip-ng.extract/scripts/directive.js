/* global document, window */

/**
 * @name  createClone
 * @description Clones an HTML element and applies some default styles
 * @type {function}
 * @inner
 * @param  {object} element Angular element
 * @return {object}         A copy of the provided element
 */
const createClone = element => {
  const target = element.children();
  const css = window.getComputedStyle(target[0], null);
  const clone = target.clone();

  for (let i = 0, name; i < css.length; i++) {
    name = css.item(i);
    clone[0].style[name] = css.getPropertyValue(name);
  }

  return clone.css({
    display: 'inline',
    width: 'auto',
    visibility: 'hidden',
  });
};

/**
 * @name uiBbEllipsisTooltipDirective
 * @type {object}
 *
 * @property {string} tooltip Text that will be displayed in the tooltip
 */
const directive = function uiBbEllipsisTooltipDirective() {
  return {
    restrict: 'E',
    transclude: true,
    scope: {
      tooltip: '@',
    },
    template: `
      <span
        class="bb-ellipsis"
        uib-tooltip="{{ tooltip }}"
        tooltip-trigger="none"
        tooltip-is-open="tooltipIsOpen"
        tooltip-placement="auto top"
        ng-transclude
      ></span>
    `,
    link: (scope, element) => {
      let clone;
      // IE size calculations are not as accurate as we would expect, adding
      // threshold to fix it.
      const threshold = 1;

      element.on('mouseenter', () => {
        if (!clone) {
          clone = createClone(element);
        }
        document.body.appendChild(clone[0]);
        const cloneWidth = clone[0].offsetWidth;
        const elementWidth = element[0].offsetWidth;
        clone.remove();
        Object.assign(scope, { tooltipIsOpen: (cloneWidth - elementWidth) > threshold });
        scope.$apply();
      });

      element.on('mouseleave', () => {
        Object.assign(scope, { tooltipIsOpen: false });
        scope.$apply();
      });
    },
  };
};

export default directive;
