import angular from 'vendor-bb-angular';
import 'angular-mocks';

import Controller from './controller';

describe('Ui message controller', () => {

  let ctrl,
    scope,
    event;


  beforeEach(angular.mock.inject(($rootScope) => {
    event = { preventDefault: () => {} };
    scope = $rootScope.$new();
    scope.onLinkClick = () => {};
    scope.preventDefault = () => {};
    ctrl = new Controller(scope);
  }));

  it('should have appropriate variables in controller', () => {
    expect(ctrl.onLinkClick).toBeDefined();
  });

  describe('$ctrl:onLinkClick', () => {

    beforeEach(inject(function() {

      spyOn(scope, 'onLinkClick').and.callThrough();
      spyOn(event, 'preventDefault').and.callThrough();

      ctrl.onLinkClick(event);

    }));

    it('should call onLinkClick function if it is set', () => {

      expect(scope.onLinkClick).toHaveBeenCalled();

    });

    it('should `preventDefault` method from event object if preventDefault is set', () => {

      expect(event.preventDefault).toHaveBeenCalled();

    });

  });

});
