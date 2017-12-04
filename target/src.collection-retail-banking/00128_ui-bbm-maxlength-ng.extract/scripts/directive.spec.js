import angular from 'vendor-bb-angular';
import uiBbmMaxlength from './index';

describe('ui-bbm-maxlength', () => {
  let $scope;
  let $compile;
  let injector;

  beforeEach(angular.mock.module(uiBbmMaxlength));

  beforeEach(angular.mock.inject((_$rootScope_, _$compile_) => {
    $scope = _$rootScope_;
    $compile = _$compile_;
  }));

  it('should be defined', () => {
    const element = angular.element(`<input type="text" ng-model="model" ui-bbm-maxlength="5">`);
    const $element = $compile(element)($scope);

    expect($element).toBeDefined();
  });

  it('should prevent typing if max allowed symbols is exceed', () => {
    const element = angular.element(`<input type="text" ng-model="model" ui-bbm-maxlength="5">`);
    const $element = $compile(element)($scope);
    const inputVal = '123456789';
    const expectedVal = '12345';

    $element.val(inputVal);
    $element.triggerHandler('input');
    $scope.$digest();    

    expect($element.val()).toEqual(expectedVal);
  });
});
