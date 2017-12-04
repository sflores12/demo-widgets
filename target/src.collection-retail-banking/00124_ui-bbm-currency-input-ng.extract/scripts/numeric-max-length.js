const numericMaxLength = () => ({
  restrict: 'A',
  scope: {
    maxLength: '<',
  },
  link: (scope, element) => {
    element.on('input', () => {
      if (element.val().length > scope.maxLength) {
        element.val(element.val().substr(0, scope.maxLength));
      }
    });
  },
});

export default numericMaxLength;
