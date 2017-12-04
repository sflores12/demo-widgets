/* eslint no-param-reassign: ["error", {"props": false}] */

/**
 * @name uiBbNumberInput
 * @type {object}
 * @description
 * Number input directive
 *
 * @property {number} ng-model Input value
 * @property {number} min-value Minimum value allowed
 * @property {number} max-value Maximum value allowed
 */
const clamp = (value, min, max) => {
  if (min != null && value < min) {
    return min;
  }
  if (max != null && value > max) {
    return max;
  }
  return value != null ? value : min;
};

export default () => ({
  restrict: 'E',
  link: (scope, element) => {
    scope.value = clamp(scope.value, scope.min || 0);

    scope.$watch('value', (newValue) => {
      const min = scope.min != null ? scope.min : newValue;
      const max = scope.max != null ? scope.max : newValue;

      if (newValue != null) {
        scope.value = Math.min(newValue, max);
      }

      if (min >= 0 && scope.value < 0) {
        scope.value = min;
      }

      if (min < 0 && scope.value < min) {
        scope.value = min;
      }
    });

    scope.$watch('min + max', () => {
      scope.value = clamp(scope.value, scope.min, scope.max);
    });

    element.bind('blur', () => {
      scope.$apply(() => {
        scope.value = clamp(scope.value, scope.min, scope.max);
      });
    });
  },
  require: 'ngModel',
  template: '<input type="number" min="{{ min }}">',
  replace: true,
  scope: {
    value: '=ngModel',
    min: '=?minValue',
    max: '=?maxValue',
  },
});
