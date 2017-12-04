/**
 * @name uiBbDropdownSelectedDirective
 * @type {object}
 */
function uiBbDropdownSelectedDirective($q, $compile, $templateRequest) {
  return {
    restrict: 'A',
    require: '^^uiBbDropdownSelect',
    link: (scope, element, attrs, uiBbDropdownSelectController) => {
      let templateSrc;
      const config = uiBbDropdownSelectController.getSelectedConfig();

      if (config.selectedAs) {
        templateSrc = config.selectedAs;
      } else if (config.templateUrl) {
        templateSrc = $templateRequest(config.templateUrl);
      } else {
        throw new Error(
          'ui-bb-dropdown-select element expects either selected-as or template-src attribute.'
        );
      }

      $q.when(templateSrc).then(template => {
        element.html(template).removeAttr('ui-bb-dropdown-selected');
        $compile(element)(scope);
      });
    },
  };
}

export default uiBbDropdownSelectedDirective;
