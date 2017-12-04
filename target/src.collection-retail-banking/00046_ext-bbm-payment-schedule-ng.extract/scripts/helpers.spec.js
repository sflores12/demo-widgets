import plugins from 'lib-bbm-plugins';
import extHelpers from './helpers';

describe('ext-bbm-payment-schedule-ng:helpers', () => {
  const filters = {
    i18n: key => key,
    date: date => date,
  };

  const context = {
    $filter: key => filters[key],
  };

  const helpers = extHelpers(context);

  let snackbar;

  beforeEach(() => {
    snackbar = jasmine.createSpyObj('snackbar', ['error', 'hide', 'success']);
    snackbar.error.and.returnValue(Promise.resolve({}));

    spyOn(plugins, 'Snackbar').and.returnValue(snackbar);
  });

  describe('getFrequencyOptions', () => {
    it('should return a list of options for the frequency dropdown', () => {
      expect(helpers.getFrequencyOptions()).toEqual([
        { id: 'ONCE', text: 'message.payment.schedule.frequency.once' },
        { id: 'DAILY', text: 'message.payment.schedule.frequency.daily' },
        { id: 'WEEKLY', text: 'message.payment.schedule.frequency.weekly' },
        { id: 'MONTHLY', text: 'message.payment.schedule.frequency.monthly' },
        { id: 'QUARTERLY', text: 'message.payment.schedule.frequency.quarterly' },
        { id: 'YEARLY', text: 'message.payment.schedule.frequency.yearly' },
      ]);
    });
  });

  describe('getMinimumRecurrenceEndDate', () => {
    it('should return the start date of the given payment schedule', () => {
      const startDate = '2015-10-05T14:00:00Z';

      const payment = {
        data: {
          schedule: { startDate },
        },
      };

      const ctrl = {
        state: { payment }
      };

      expect(helpers.getMinimumRecurrenceEndDate(ctrl)).toBe(startDate);
    });
  });

  describe('getMinimumExecutionDate', () => {
    it('should return the current date', () => {
      const today = 123;

      spyOn(Date, 'now').and.returnValue(today);

      expect(helpers.getMinimumExecutionDate()).toBe(today);
    });
  });

  describe('getMinimumRecurrenceStartDate', () => {
    it('should return the current date', () => {
      const today = 123;

      spyOn(Date, 'now').and.returnValue(today);

      expect(helpers.getMinimumRecurrenceStartDate()).toBe(today);
    });
  });

  describe('getRecurrenceEndingOptions', () => {
    it('should return a list of options for the recurrence ending dropdown', () => {
      expect(helpers.getRecurrenceEndingOptions()).toEqual([
        { id: 'NEVER', text: 'recurrence.ending.never' },
        { id: 'ON', text: 'recurrence.ending.on' },
        { id: 'AFTER', text: 'recurrence.ending.after' },
      ]);
    });
  });

  describe('getStartDateLabel', () => {
    it('should return an execution date label, if the given payment is not recurring', () => {
      const transferFrequency = 'ONCE';

      const payment = {
        data: {
          schedule: { transferFrequency },
        },
      };

      const ctrl = {
        state: { payment }
      };

      expect(helpers.getStartDateLabel(ctrl)).toBe('form.label.executionDate');
    });

    it('should return a start date label, if the given payment is recurring', () => {
      const transferFrequency = 'DAILY';

      const payment = {
        data: {
          schedule: { transferFrequency },
        },
      };

      const ctrl = {
        state: { payment }
      };

      expect(helpers.getStartDateLabel(ctrl)).toBe('form.label.startDate');
    });
  });

  describe('getStartDateTitle', () => {
    it('should return an execution date title, if the given payment is not recurring', () => {
      const transferFrequency = 'ONCE';

      const payment = {
        data: {
          schedule: { transferFrequency },
        },
      };

      const ctrl = {
        state: { payment }
      };

      expect(helpers.getStartDateTitle(ctrl)).toBe('form.title.selectExecutionDate');
    });

    it('should return a start date title, if the given payment is recurring', () => {
      const transferFrequency = 'DAILY';

      const payment = {
        data: {
          schedule: { transferFrequency },
        },
      };

      const ctrl = {
        state: { payment }
      };

      expect(helpers.getStartDateTitle(ctrl)).toBe('form.title.selectStartDate');
    });
  });

  describe('isPaymentRecurring', () => {
    it('should return true, if the given payment is recurring', () => {
      const transferFrequency = 'DAILY';

      const payment = {
        data: {
          schedule: { transferFrequency },
        },
      };

      const ctrl = {
        state: { payment }
      };

      expect(helpers.isPaymentRecurring(ctrl)).toBe(true);
    });

    it('should return false, if the given payment is not recurring', () => {
      const transferFrequency = 'ONCE';

      const payment = {
        data: {
          schedule: { transferFrequency },
        },
      };

      const ctrl = {
        state: { payment }
      };

      expect(helpers.isPaymentRecurring(ctrl)).toBe(false);
    });
  });

  describe('isRecurrenceRepeatVisible', () => {
    it('should return true, if the given payment is scheduled to be executed X times', () => {
      const transferFrequency = 'DAILY';
      const end = 'AFTER';

      const payment = {
        data: {
          schedule: {
            transferFrequency,
            end,
          },
        },
      };

      const ctrl = {
        state: { payment }
      };

      expect(helpers.isRecurrenceRepeatVisible(ctrl)).toBe(true);
    });

    it('should return false, if the given payment is scheduled to continue until a date', () => {
      const transferFrequency = 'DAILY';
      const end = 'ON';

      const payment = {
        data: {
          schedule: {
            transferFrequency,
            end,
          },
        },
      };

      const ctrl = {
        state: { payment }
      };

      expect(helpers.isRecurrenceRepeatVisible(ctrl)).toBe(false);
    });

    it('should return false, if the given payment is not recurring', () => {
      const transferFrequency = 'ONCE';

      const payment = {
        data: {
          schedule: { transferFrequency },
        },
      };

      const ctrl = {
        state: { payment }
      };

      expect(helpers.isRecurrenceRepeatVisible(ctrl)).toBe(false);
    });
  });

  describe('isRecurrenceEndDateVisible', () => {
    it('should return true, if the given payment is scheduled to continue until a date', () => {
      const transferFrequency = 'DAILY';
      const end = 'ON';

      const payment = {
        data: {
          schedule: {
            transferFrequency,
            end,
          },
        },
      };

      const ctrl = {
        state: { payment }
      };

      expect(helpers.isRecurrenceEndDateVisible(ctrl)).toBe(true);
    });

    it('should return false, if the given payment is scheduled to be executed X times', () => {
      const transferFrequency = 'DAILY';
      const end = 'AFTER';

      const payment = {
        data: {
          schedule: {
            transferFrequency,
            end,
          },
        },
      };

      const ctrl = {
        state: { payment }
      };

      expect(helpers.isRecurrenceEndDateVisible(ctrl)).toBe(false);
    });

    it('should return false, if the given payment is not recurring', () => {
      const transferFrequency = 'ONCE';

      const payment = {
        data: {
          schedule: { transferFrequency },
        },
      };

      const ctrl = {
        state: { payment }
      };

      expect(helpers.isRecurrenceEndDateVisible(ctrl)).toBe(false);
    });
  });

  describe('onScheduleFormSubmit', () => {
    it('should submit the schedule if it is valid', () => {
      const payment = {
        data: {
          schedule: {
            transferFrequency: 'ONCE',
          },
        },
      };

      const ctrl = {
        state: { payment },
        submitSchedule: jasmine.createSpy('submitScheduleSpy'),
      };

      helpers.onScheduleFormSubmit(ctrl);

      expect(ctrl.submitSchedule).toHaveBeenCalled();
    });

    it('should show an error, if end date is not valid', () => {
      const payment = {
        data: {
          schedule: {
            transferFrequency: 'DAILY',
            startDate: '2015-10-05T14:00:00Z',
            end: 'ON',
            endDate: '2015-09-05T14:00:00Z',
          },
        },
      };

      const ctrl = {
        state: { payment },
        submitSchedule: jasmine.createSpy('submitScheduleSpy'),
      };

      helpers.onScheduleFormSubmit(ctrl);

      expect(snackbar.error).toHaveBeenCalledWith('errors.payment.schedule.endDate.invalid');
      expect(ctrl.submitSchedule).not.toHaveBeenCalled();
    });

    it('should show an error, if repeat value is not valid', () => {
      const payment = {
        data: {
          schedule: {
            transferFrequency: 'DAILY',
            startDate: '2015-10-05T14:00:00Z',
            end: 'AFTER',
            repeat: 0,
          },
        },
      };

      const ctrl = {
        state: { payment },
        submitSchedule: jasmine.createSpy('submitScheduleSpy'),
      };

      helpers.onScheduleFormSubmit(ctrl);

      expect(snackbar.error).toHaveBeenCalledWith('errors.payment.schedule.repeat.invalid');
      expect(ctrl.submitSchedule).not.toHaveBeenCalled();
    });
  });
});
