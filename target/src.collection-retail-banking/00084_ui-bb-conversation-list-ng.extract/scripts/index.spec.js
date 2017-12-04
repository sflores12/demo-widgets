import angular from 'vendor-bb-angular';
import 'angular-mocks';

import mainComponent from './index';


describe('ui-bb-conversation-list-ng', function() {
  var $compile, $componentController,
      scope, element;

  var defaultTemplate = `
    <ui-bb-conversation-list-ng conversations="conversations"></ui-bb-conversation-list-ng>
  `;

  function createElement(template = defaultTemplate) {
    let compiled = $compile(template)(scope);
    scope.$digest();
    return compiled;
  }

  beforeEach(angular.mock.module(mainComponent));

  beforeEach(angular.mock.inject(function($rootScope, _$compile_, _$componentController_) {
    $compile = _$compile_;
    scope = $rootScope.$new();
    $componentController = _$componentController_;
  }));

  describe('rendering', function() {

    beforeEach(function() {
      scope.conversations = [{ sender: 'Thomas Mann' }];
      element = createElement();
    });

    it('should render component', function() {
      expect(element[0].querySelector('.sender').innerHTML.trim()).toBe(scope.conversations[0].sender);
    });
  });

});
