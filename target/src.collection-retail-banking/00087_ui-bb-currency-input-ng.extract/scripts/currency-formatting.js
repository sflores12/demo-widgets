import utils from './formatting-utils';

const currencyFormatting = ($filter, $locale) => ({
  require: 'ngModel',
  restrict: 'A',
  link: (scope, element, attrs, ngModel) => {
    const inputMaxLength = scope.maxLength;
    const invalidChars = /[a-zA-Z!?>:;|<@#%^&*)(+/\\={}[\]_]/g;

    // manually trigger the $formatters pipeline
    function triggerRender() {
      ngModel.$setViewValue(
        ngModel.$formatters.reduce((value, fn) => fn(value), ngModel.$modelValue)
      );
    }

    let filter = $filter('number');

    // extend input max length by adding number of special characters (like ',')
    const updateMaxLength = (number) =>
      Object.assign(scope, {
        maxLength: inputMaxLength + utils.specialCharsCount(number, filter(number, 0)),
      });

    scope.$watch(
      () => scope.$eval(attrs.currencyFilter),
      (f) => {
        filter = f ? $filter(f) : $filter('number');
        triggerRender();
      }
    );

    ngModel.$formatters.push((value) => {
      updateMaxLength(value);
      return filter(value, 0);
    });

    ngModel.$parsers.push((value) => {
      if (value === '') {
        return value;
      }

      let numericChars;
      // ignore non-numeric characters
      if (ngModel.$modelValue >= 0) {
        numericChars = value.replace(invalidChars, '');
      } else {
        numericChars = value.replace(invalidChars, 0);
      }

      const decimalPosition = numericChars.indexOf($locale.NUMBER_FORMATS.DECIMAL_SEP);
      const groupSeparator = $locale.NUMBER_FORMATS.GROUP_SEP.replace(/[.]/g, '\\$&');

      let number = utils.toFloat(numericChars
        .replace(new RegExp(groupSeparator, 'g'), '')
        .substring(0, decimalPosition !== -1 ? decimalPosition : numericChars.length))
        .toFixed();

      if (!isNaN(number)) {
        // in case when value is pasted, it can take advantage of
        // extended max length (special character) and exceed input limits
        // make sure that this doesn't happen
        number = utils.truncateNumber(utils.toFloat(number), inputMaxLength).toFixed();

        const formatted = filter(number, 0);
        updateMaxLength(number);

        // did we add a comma or currency symbol?
        const specialCharactersCountChange = [numericChars, formatted]
          .map((string) => utils.occurrences(string, utils.diffChars(numericChars, formatted)))
          .reduce((prev, cur) => (cur - prev));

        // compute the new selection range, correcting for
        // formatting introduced by the number or currency $filter
        const selectionRange = [
          element[0].selectionStart,
          element[0].selectionEnd,
        ].map((position) => (position + specialCharactersCountChange));

        // set the formatted value in the view
        ngModel.$setViewValue(formatted);
        ngModel.$render();

        // set the cursor back to its expected position
        // (since $render resets the cursor the the end)
        element[0].setSelectionRange(selectionRange[0], selectionRange[1]);
      } else {
        ngModel.$setViewValue(number.replace(invalidChars, 0));
        ngModel.$render();

        // reset input max length to default value
        Object.assign(scope, { maxLength: inputMaxLength });
      }
      return number;
    });
  },
});

export default currencyFormatting;
