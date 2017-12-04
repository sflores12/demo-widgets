const decimalsFormatting = () => ({
  require: 'ngModel',
  link: (scope, element, attrs, ngModelCtrl) => {
    ngModelCtrl.$parsers.push((value) => {
      ngModelCtrl.$setViewValue(value.replace(/[^0-9]/g, ''));
      ngModelCtrl.$render();

      return value;
    });
  },
});

export default decimalsFormatting;
