import angular from 'vendor-bb-angular';
import 'angular-mocks';

import mainComponent from './index';


describe('ui-bb-expandable-ng', function () {
  var $compile, $componentController,
    scope, element, component;

  var config = { name: 'Thomas Mann' };

  var defaultTemplate = `
    <ui-bb-expandable-ng>
      <ui-bb-expandable-summary-ng>
        <div class="summary">{{config.name}}</div>
      </ui-bb-expandable-summary-ng>
      <ui-bb-expandable-details-ng>
        <div class="details"></div>
      </ui-bb-expandable-details-ng>
    </ui-bb-expandable-ng>
  `;

  function createElement(template = defaultTemplate) {
    let compiled = $compile(template)(scope);
    scope.$digest();
    return compiled;
  }

  beforeEach(angular.mock.module(mainComponent));

  beforeEach(angular.mock.inject(function ($rootScope, _$compile_, _$componentController_) {
    $compile = _$compile_;
    scope = $rootScope.$new();
    scope.config = config;

    $componentController = _$componentController_;
  }));

  function getSummaryElement() {
    return element[0].querySelectorAll('.summary');
  }

  function getDetailsElement() {
    return element[0].querySelectorAll('.details');
  }

  describe('Directive ui-bb-expandable-ng', function () {

    beforeEach(function () {
      element = createElement();
    });

    it('should render component', function () {
      expect(element.length).toBe(1);
    });

    it('should render summary', function () {
      expect(getSummaryElement().length).toBe(1);
    });

    it('should render summary content', function () {
      expect(getSummaryElement()[0].innerHTML).toBe(config.name);
    });

    it('should render details', function () {
      expect(getDetailsElement().length).toBe(1);
    });
  });

});
