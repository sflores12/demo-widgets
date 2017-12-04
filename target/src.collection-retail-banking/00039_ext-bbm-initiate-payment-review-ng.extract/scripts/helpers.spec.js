import extHelpers from './helpers';

describe('ext-bbm-initiate-payment-review-ng:helpers', () => {
  const filters = {
    i18n: key => ({
      'message.payment.schedule.frequency.once': 'One payment',
      'message.payment.schedule.frequency.daily': 'Daily',
      'message.payment.schedule.frequency.weekly': 'Weekly',
      'message.payment.schedule.frequency.monthly': 'Monthly',
      'message.payment.schedule.frequency.quarterly': 'Quarterly',
      'message.payment.schedule.frequency.yearly': 'Annually',
      'message.payment.schedule.today': 'today',
      'message.payment.schedule.startingFrom': 'starting',
      'message.payment.schedule.frequency.end.never': 'until cancelled',
      'message.payment.schedule.frequency.end.after': 'times',
      'message.payment.schedule.frequency.end.on': 'until'
    })[key],
    date: date => date,
  };

  const context = {
    $filter: key => filters[key],
  };

  const helpers = extHelpers(context);

  describe('getAccountDisplayAmount', () => {
    it('should return the primary value of the given account', () => {
      const account = {
        amount: 100,
        primaryValue: 200,
      };

      expect(helpers.getAccountDisplayAmount(account)).toBe(200);
    });

    it('should return the amount of the given account if it doesn\'t have a primary value', () => {
      const account = {
        amount: 100,
      };

      expect(helpers.getAccountDisplayAmount(account)).toBe(100);
    });
  });

  describe('getScheduleSummary', () => {
    describe('Once', () => {
      it('Today, one payment', () => {
        const today = new Date();

        const schedule = {
          startDate: today.toISOString(),
          transferFrequency: 'ONCE',
          end: 'NEVER',
        };

        const expectedSummary = 'One payment, today';

        expect(helpers.getScheduleSummary(schedule)).toBe(expectedSummary);
      });

      it('One payment, on Date', () => {
        const schedule = {
          startDate: '2015-05-15T14:00:00Z',
          transferFrequency: 'ONCE',
          end: 'NEVER',
        };

        const expectedSummary = 'One payment, on 2015-05-15T14:00:00Z';

        expect(helpers.getScheduleSummary(schedule)).toBe(expectedSummary);
      });
    });

    describe('Daily', () => {
      it('Daily, starting today', () => {
        const today = new Date();

        const schedule = {
          startDate: today.toISOString(),
          transferFrequency: 'DAILY',
          end: 'NEVER',
        };

        const expectedSummary = 'Daily, starting today, until cancelled';

        expect(helpers.getScheduleSummary(schedule)).toBe(expectedSummary);
      });

      it('Daily, starting on Date', () => {
        const schedule = {
          startDate: '2015-05-15T14:00:00Z',
          transferFrequency: 'DAILY',
          end: 'NEVER',
        };

        const expectedSummary = 'Daily, starting on 2015-05-15T14:00:00Z, until cancelled';

        expect(helpers.getScheduleSummary(schedule)).toBe(expectedSummary);
      });

      it('Daily, starting today, X times', () => {
        const today = new Date();

        const schedule = {
          startDate: today.toISOString(),
          transferFrequency: 'DAILY',
          end: 'AFTER',
          every: 1,
          repeat: 5,
        };

        const expectedSummary = 'Daily, starting today, 5 times';

        expect(helpers.getScheduleSummary(schedule)).toBe(expectedSummary);
      });

      it('Daily, starting on Date, X times', () => {
        const schedule = {
          startDate: '2015-05-15T14:00:00Z',
          transferFrequency: 'DAILY',
          end: 'AFTER',
          every: 1,
          repeat: 5,
        };

        const expectedSummary = 'Daily, starting on 2015-05-15T14:00:00Z, 5 times';

        expect(helpers.getScheduleSummary(schedule)).toBe(expectedSummary);
      });

      it('Daily, starting today, until Date', () => {
        const today = new Date();

        const schedule = {
          startDate: today.toISOString(),
          transferFrequency: 'DAILY',
          end: 'ON',
          endDate: '2015-05-15T14:00:00Z',
          every: 1,
          repeat: 5,
        };

        const expectedSummary = 'Daily, starting today, until 2015-05-15T14:00:00Z';

        expect(helpers.getScheduleSummary(schedule)).toBe(expectedSummary);
      });

      it('Daily, starting on Date, until Date', () => {
        const schedule = {
          startDate: '2015-05-12T14:00:00Z',
          transferFrequency: 'DAILY',
          end: 'ON',
          endDate: '2015-05-15T14:00:00Z',
          every: 1,
          repeat: 5,
        };

        const expectedSummary = 'Daily, starting on 2015-05-12T14:00:00Z, until 2015-05-15T14:00:00Z';

        expect(helpers.getScheduleSummary(schedule)).toBe(expectedSummary);
      });
    });
  });
});
