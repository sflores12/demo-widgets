import angular from 'vendor-bb-angular';

import ModuleKey from './index';

describe('ui-bb-autocomplete-search-ng', () => {
  let $compile, $componentController,
      scope, element, component;

  const defaultTemplate = `
    <ui-bb-autocomplete-search-ng ng-model="model">
    </ui-bb-autocomplete-search-ng>
  `;

  const createElement = (template = defaultTemplate) => {
    let compiled = $compile(template)(scope);
    scope.$digest();

    return compiled;
  }

  beforeEach(angular.mock.module(ModuleKey));

  beforeEach(angular.mock.inject(($rootScope, _$compile_) => {
    $compile = _$compile_;
    scope = $rootScope.$new();
  }));

  describe('rendering', () => {

    beforeEach(() => {
      element = createElement();
    });

    it('should render component', () => {
      expect(element.find('div').hasClass('bb-autocomplete-search')).toBeTrue();
    });
  });
});
