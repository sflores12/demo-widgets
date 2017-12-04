/* global window, angular */
import BootstrapSizes from './constants';

/**
 * @name parentResponsivenessDirective
 * @type {function}
 *
 * @property {BootstrapSize[]} bootstrapSizes
 * Override default Bootstrap setup with custom class prefixes and
 * minimal widths
 */
const parentResponsivenessDirective = () => ({
  restrict: 'A',
  scope: {
    bootstrapSizes: '<',
  },
  link: (scope, element, attrs) => {
    // find out the parent's margins and adjust BootstrapSizes minWidth value
    const parent = element.parent();
    const parentWrapSpace = (() => {
      const computedStyles = window.getComputedStyle(parent[0]);
      return (parseFloat(computedStyles.getPropertyValue('margin-left')) || 0) +
        (parseFloat(computedStyles.getPropertyValue('margin-right')) || 0);
    })();

    // check if there is override for BootstrapSizes object
    const sizes = scope.bootstrapSizes ? scope.bootstrapSizes : BootstrapSizes;

    // memorize css column classes applied on the element and set minWidth
    const classes = attrs.class.split(' ');
    const responsiveData = sizes.map(size => {
      const elementClass = classes.find(cssClass => cssClass.indexOf(size.classPrefix) > -1);
      const minWidth = size.minWidth + parentWrapSpace < 0 ? 0 : size.minWidth + parentWrapSpace;
      return { elementClass, minWidth };
    });

    const updateClasses = () => {
      const parentWidth = parent[0].clientWidth;
      // keep track of what happened in the next loop
      // in case we remove all classes, class for the smallest
      // media query should be re-attached
      let lastAdded;
      let firstRemoved;
      let classAction;

      responsiveData.forEach(responsiveItem => {
        if (!responsiveItem.elementClass) {
          return;
        }

        if (responsiveItem.minWidth <= parentWidth) {
          classAction = 'addClass';
          lastAdded = responsiveItem.elementClass;
        } else {
          classAction = 'removeClass';
          firstRemoved = firstRemoved || responsiveItem.elementClass;
        }

        element[classAction](responsiveItem.elementClass);
      });

      if (!lastAdded && firstRemoved) {
        element.addClass(firstRemoved);
      }
    };

    element.ready(updateClasses);
    angular.element(window).on('resize', updateClasses);
    // add custom event listener in order to provide possibility to recalculate
    // all of this on some other event (dynamic page)
    element[0].addEventListener('parentResized', updateClasses);
  },
});

export default parentResponsivenessDirective;
