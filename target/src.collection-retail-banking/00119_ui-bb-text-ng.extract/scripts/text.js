/**
 * @name uiBBTextNg
 * @type {function}
 *
 * @property {string} regex regular expression of enabled symbols
 */
const textDirective = () => ({
  restrict: 'A',
  scope: {
    regex: '<',
  },
  require: '?ngModel',
  link: (scope, element, attrs, ngModel) => {
    if (!ngModel) return;

    let viewValue = '';
    let REGEX = new RegExp(scope.regex);

    /**
     * @description
     * Method to validate string using REGEX
     * @param {String} text
     */
    const isValid = (text) => text === '' || REGEX.test(text);

    // to avoid spaces, newlines, tabs
    /* eslint no-param-reassign: ["error", { "props": false }] */
    if (!attrs.ngTrim) {
      attrs.ngTrim = 'false';
    }

    // view to model
    ngModel.$parsers.push((value) => {
      let returnValue;

      if (!isValid(value)) {
        returnValue = viewValue;
        ngModel.$setViewValue(viewValue);
        ngModel.$render();
      } else {
        returnValue = value;
        viewValue = returnValue;
      }

      return returnValue;
    });

    // model to view
    ngModel.$formatters.push((value) => {
      let returnValue;

      if (!isValid(value)) {
        returnValue = '';
      } else {
        returnValue = value;
      }

      return returnValue;
    });

    /**
     * @description
     * watch for regex
     */
    scope.$watch('regex', (newRegex) => {
      REGEX = new RegExp(newRegex);
    });
  },
});

export default textDirective;
