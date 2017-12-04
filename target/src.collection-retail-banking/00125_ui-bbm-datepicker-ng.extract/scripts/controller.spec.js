import plugins from 'lib-bbm-plugins';

import Controller from './controller';

describe('ui-bbm-datepicker-ng::controller', () => {
  const filters = {
    date: () => {},
  };

  const $filter = key => filters[key];

  const datepicker = {
    show: () => Promise.resolve(),
  };

  const ngModelCtrl = {
    $setViewValue: () => {},
  };

  /**
   * --------------------------------------------------------------------------------------
   * Helpers
   * --------------------------------------------------------------------------------------
   */

  const createElement = () => ({
    controller: key => key === 'ngModel' ? ngModelCtrl : null,
  });

  const createController = attrs => (
    Object.assign(new Controller(createElement(), $filter), attrs)
  );

  /**
   * --------------------------------------------------------------------------------------
   * Specs
   * --------------------------------------------------------------------------------------
   */

  beforeEach(() => {
    spyOn(plugins, 'DatePicker').and.returnValue(datepicker);
  });

  describe('API', () => {
    describe('#openDatePicker', () => {
      it('should open the datepicker', () => {
        const ctrl = createController({
          ngModel: '2017-05-15T14:00:00+0200',
          title: 'Select a date',
        });

        spyOn(datepicker, 'show').and.returnValue(Promise.resolve({
          date: '2017-05-15T15:00:00+0200',
        }));

        ctrl.openDatepicker();

        expect(datepicker.show).toHaveBeenCalledWith({
          title: 'Select a date',
          minDate: null,
          maxDate: null,
        });
      });

      it('should be ignored if the datepicker was already opened', () => {
        const ctrl = createController({
          ngModel: '2017-05-15T14:00:00+0200',
          title: 'Select a date',
        });

        spyOn(datepicker, 'show').and.returnValue(Promise.resolve({
          date: '2017-05-15T15:00:00+0200',
        }));

        ctrl.openDatepicker();
        ctrl.openDatepicker();

        expect(datepicker.show).toHaveBeenCalledTimes(1);
      });

      it('should apply the selected date', done => {
        const ctrl = createController({
          ngModel: '2017-05-15T14:00:00+0200',
          title: 'Select a date',
        });

        spyOn(datepicker, 'show').and.returnValue(Promise.resolve({
          date: '2017-05-15T15:00:00+0200',
        }));

        spyOn(ngModelCtrl, '$setViewValue');

        ctrl.openDatepicker();


        setTimeout(() => {
          expect(ngModelCtrl.$setViewValue).toHaveBeenCalledWith('2017-05-15T15:00:00+0200');
          done();
        }, 0);
      });

      it('should update the `opened` flag', done => {
        const ctrl = createController({
          ngModel: '2017-05-15T14:00:00+0200',
          title: 'Select a date',
        });

        spyOn(datepicker, 'show').and.returnValue(Promise.resolve({
          date: '2017-05-15T15:00:00+0200',
        }));

        expect(ctrl.opened).toBe(false);

        ctrl.openDatepicker();

        expect(ctrl.opened).toBe(true);

        setTimeout(() => {
          expect(ctrl.opened).toBe(false);
          done();
        }, 0);
      });
    });
  });
});
