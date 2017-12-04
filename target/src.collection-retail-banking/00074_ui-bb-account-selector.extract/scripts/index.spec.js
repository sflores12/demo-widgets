import angular from 'vendor-bb-angular';

import ModuleKey from './index';

describe('ui-bb-account-selector', () => {
  let $compile, $componentController,
      scope, element, component;

  const defaultTemplate = `
    <ui-bb-account-selector ng-model="model">
    </ui-bb-account-selector>
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
      expect(element.find('div').hasClass('bb-account-selector')).toEqual(true);
      expect(element.find('ui-bb-search-box-ng').length).toEqual(0);
    });

    it('should have searchBox if coresponding property is given', () => {
      scope.searchBox = {};
      element = createElement(`
        <ui-bb-account-selector ng-model="model" search-box="searchBox">
        </ui-bb-account-selector>
      `);
      expect(element.find('ui-bb-search-box-ng').length).toEqual(1);
    });
  });
});
