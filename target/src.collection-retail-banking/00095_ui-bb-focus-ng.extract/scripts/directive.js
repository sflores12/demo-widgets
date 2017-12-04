/**
   * @name uiBbFocus
   * @type {function}
   * @description
   * Directive which focuses element it applied to, when provided expression evaluates to true.
   *
   * @example
   * <form name="form">
   *   <input type="text" name="fullName" ui-bb-focus="form.fullName.$invalid">
   * </form>
   */
const directive = ($timeout) => ({
  restrict: 'A',
  link: (scope, element, attrs) => {
    scope.$watch(attrs.uiBbFocus, (newValue) => {
      if (newValue) {
        $timeout(() => element[0].focus());
      }
    }, true);
  },
});

export default directive;
