import angular from 'vendor-bb-angular';
import 'angular-mocks';

import mainComponent from './index';
import Controller from './controller';


const CONFIG = {
  periodStart: '2017-06-01',
  periodEnd: '2017-06-31',
  onPeriodStartChange: function() {},
  onPeriodEndChange: function() {},
};

const defaultTemplate = `
  <ui-bb-change-period-ng
    data-period-start="CONFIG.periodStart"
    data-period-end="CONFIG.periodEnd"
    data-period-step="1"
    data-change-start-period="CONFIG.changeStartPeriod()"
    data-change-end-period="CONFIG.changeEndPeriod()"
  ></ui-bb-change-period-ng>
`;

const $locale = {
  DATETIME_FORMATS: {
    MONTH: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
  }
}

const createController = attrs => Object.assign(new Controller($locale), attrs);

describe('ui-bb-change-period-ng', function() {
  let $compile, $componentController,
    scope, element, component, $ctrl;

  const createElement = (template = defaultTemplate) => {
    let compiled = $compile(template)(scope);
    scope.$digest();
    return compiled;
  }

  beforeEach(angular.mock.module(mainComponent));

  beforeEach(angular.mock.inject(function($rootScope, _$compile_, _$componentController_) {
    $compile = _$compile_;
    scope = $rootScope.$new();
    $componentController = _$componentController_;

    element = createElement();
    $ctrl = createController({
      periodStart: '2017-06-01',
      periodEnd: '2017-06-31',
      onPeriodStartChange: () => () => true,
      onPeriodEndChange: () => () => true
    });
  }));

  describe('Rendering', function() {
    it('should render component', () => {
      expect(element.find('div').length).toBeTruthy();
    });
  });

  describe('Controller', function() {
    it('should have an isButtonDisabled callback', () => {
      expect($ctrl.isButtonDisabled).toBeFunction();
    });

    it('should have an changePeriod callback', () => {
      expect($ctrl.changePeriod).toBeFunction();
    });

    it('calling changePeriod should execute onPeriodStartChange and onPeriodEndChange', () => {
      spyOn($ctrl, 'changePeriod').and.callThrough();
      spyOn($ctrl, 'onPeriodStartChange').and.callThrough();
      spyOn($ctrl, 'onPeriodEndChange').and.callThrough();

      $ctrl.changePeriod();

      expect($ctrl.onPeriodStartChange).toHaveBeenCalled();
      expect($ctrl.onPeriodEndChange).toHaveBeenCalled();
    });
  });

});
