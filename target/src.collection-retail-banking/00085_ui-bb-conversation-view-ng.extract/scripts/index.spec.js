import angular from 'vendor-bb-angular';
import 'angular-mocks';

import mainComponent from './index';


describe('ui-bb-conversation-view-ng', function() {
  var $compile, $componentController,
      scope, element, component;

  var config = { name: 'Thomas Mann' };

  var defaultTemplate = `
    <ui-bb-conversation-view-ng conversation="conversation" messages="messages"></ui-bb-conversation-view-ng>
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
      scope.conversation = { subject: 'Give back my money!' };
      scope.messages = [];
      element = createElement();
    });

    it('should render component', function() {
      expect(element[0].querySelector('.subject').innerHTML.trim()).toBe(scope.conversation.subject);
    });
  });

});
