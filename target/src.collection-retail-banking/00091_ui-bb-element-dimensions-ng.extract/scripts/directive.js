/**
 * @name uiBbElementDimensionsDirective
 * @type {object}
 * @description
 * Element Dimensions Directive
 *
 * Exposes element dimensions object:
 * {left, top, right, bottom, x, y, width, height}
 *
 * @example
 * <div ng-class="{'my-xs-col': dims.width < 200}" element-dimensions="dims"></div>
 *
 * @ngInject
 */
export default function () {
  return {
    link(scope, element, attrs) {
      // get exposing scope property name
      const prop = attrs.elementDimensions || 'elDims';
      const $scope = scope;
      function checkElementDimensions() {
        const dimensions = element[0].getBoundingClientRect();
        // is the element's width changed since last digest?
        if (checkElementDimensions.lastWidth !== dimensions.width) {
          // expose element's dimensions as an object
          // {left, top, right, bottom, x, y, width, height}
          $scope[prop] = dimensions;

          // remember last width changed
          checkElementDimensions.lastWidth = dimensions.width;
        }
      }
      $scope.$watch(checkElementDimensions);
    },
  };
}
