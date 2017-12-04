import mainComponent from './index';

describe('ui-bb-text-ng', function() {
  let $compile, $componentController,
      scope, element, component;

  let regex = '^[ \\w_]{0,15}$';

  var defaultTemplate = `
     <input type="text" placeholder="Enter name" ui-bb-text-ng="ui-bb-text-ng" regex="regex" ng-model="value">
  `;

  function createElement(template = defaultTemplate) {
    let compiled = $compile(template)(scope);
    scope.$digest();
    return compiled;
  }

  describe('rendering', function() {
    beforeEach(angular.mock.module(mainComponent));

    beforeEach(angular.mock.inject(function($rootScope, _$compile_, _$componentController_) {
      $compile = _$compile_;
      scope = $rootScope.$new();
      $componentController = _$componentController_;
    }));

    beforeEach(() => {
      scope.regex = regex;
      element = createElement();
    });

    it('should render component', () => {
      expect(element).toBeDefined();
      expect(element.val()).toBe('');
    });

    it('should allow valid characters', () => {
      element.val('test 1234').triggerHandler('input');
      expect(element.val()).toBe('test 1234');
      expect(scope.value).toBe('test 1234');
    });

    it('should not allow invalid characters on input', () => {
      element.val('test 1234').triggerHandler('input');
      expect(element.val()).toBe('test 1234');
      expect(scope.value).toBe('test 1234');

      element.val('test 1234 #@#').triggerHandler('input');
      expect(element.val()).not.toBe('test 1234 #@#');
      expect(scope.value).not.toBe('test 1234 #@#');
      expect(element.val()).toBe('test 1234');
      expect(scope.value).toBe('test 1234');

      element.val('text greater then 15 chars').triggerHandler('input');
      expect(element.val()).not.toBe('text greater then 15 chars');
      expect(scope.value).not.toBe('text greater then 15 chars');
      expect(element.val()).toBe('test 1234');
      expect(scope.value).toBe('test 1234');
    });

    it('should invalidate regex on change', () => {
      element.val('test 1234').triggerHandler('input');
      expect(element.val()).toBe('test 1234');
      expect(scope.value).toBe('test 1234');

      scope.regex = '^\\d*$';
      element.val('1234').triggerHandler('input');
      expect(element.val()).not.toBe('test 1234');
      expect(scope.value).not.toBe('test 1234');
      expect(element.val()).toBe('1234');
      expect(scope.value).toBe('1234');

      element.val('test 1234').triggerHandler('input');
      expect(element.val()).not.toBe('test 1234');
      expect(scope.value).not.toBe('test 1234');
      expect(element.val()).toBe('1234');
      expect(scope.value).toBe('1234');
    });
  });
});
