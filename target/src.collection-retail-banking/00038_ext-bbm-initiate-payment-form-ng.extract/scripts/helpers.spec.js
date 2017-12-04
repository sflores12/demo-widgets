import extHelpers from './helpers';

describe('ext-bbm-initiate-payment-form-ng:helpers', () => {
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

  const createController = () => ({
    canSaveContact: () => {},
    setSaveContact: () => {},
    preferences: {
      urgent: true,
    },
    isUrgentPaymentAllowed: () => {},
    setUrgentPayment: () => {},
  });

  describe('checkSaveContactVisibility', () => {
    it('should return true, if the contact is valid and can be saved', () => {
      const ctrl = createController();

      const form = {
        beneficiary: {
          $valid: true,
        },
      };

      spyOn(ctrl, 'canSaveContact').and.returnValue(true);

      expect(helpers.checkSaveContactVisibility(ctrl, form)).toBe(true);
    });

    it('should return false, if the contact is not valid', () => {
      const ctrl = createController();

      const form = {
        beneficiary: {
          $valid: false,
        },
      };

      spyOn(ctrl, 'canSaveContact').and.returnValue(true);

      expect(helpers.checkSaveContactVisibility(ctrl, form)).toBe(false);
    });

    it('should return false, if the contact is valid, but cannot be saved', () => {
      const ctrl = createController();

      const form = {
        beneficiary: {
          $valid: true,
        },
      };

      spyOn(ctrl, 'canSaveContact').and.returnValue(false);

      expect(helpers.checkSaveContactVisibility(ctrl, form)).toBe(false);
    });

    it('should set `saveContact` flag to false, if the contact cannot be saved', () => {
      const ctrl = createController();

      const form = {
        beneficiary: {
          $valid: true,
        },
      };

      spyOn(ctrl, 'setSaveContact');
      spyOn(ctrl, 'canSaveContact').and.returnValue(false);

      helpers.checkSaveContactVisibility(ctrl, form);

      expect(ctrl.setSaveContact).toHaveBeenCalledWith(false);
    });
  });

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
          repeat: 5,
        };

        const expectedSummary = 'Daily, starting today, 5 times';

        expect(helpers.getScheduleSummary(schedule)).toBe(expectedSummary);
      });

      it('Daily, starting on Date, X times', () => {
        const today = new Date();

        const schedule = {
          startDate: '2015-05-15T14:00:00Z',
          transferFrequency: 'DAILY',
          end: 'AFTER',
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
          repeat: 5,
        };

        const expectedSummary = 'Daily, starting today, until 2015-05-15T14:00:00Z';

        expect(helpers.getScheduleSummary(schedule)).toBe(expectedSummary);
      });

      it('Daily, starting on Date, until Date', () => {
        const today = new Date();

        const schedule = {
          startDate: '2015-05-12T14:00:00Z',
          transferFrequency: 'DAILY',
          end: 'ON',
          endDate: '2015-05-15T14:00:00Z',
          repeat: 5,
        };

        const expectedSummary = 'Daily, starting on 2015-05-12T14:00:00Z, until 2015-05-15T14:00:00Z';

        expect(helpers.getScheduleSummary(schedule)).toBe(expectedSummary);
      });
    });
  });

  describe('isCreateBeneficiaryAllowed', () => {
    it('should return true, if there is no debit account', () => {
      const payment = {
        debitAccount: null,
      };

      expect(helpers.isCreateBeneficiaryAllowed(payment)).toBe(true);
    });

    it('should return true, if the debit account allows external transfers', () => {
      const payment = {
        debitAccount: {
          externalTransferAllowed: true,
        },
      };

      expect(helpers.isCreateBeneficiaryAllowed(payment)).toBe(true);
    });

    it('should return false, if there is no payment', () => {
      expect(helpers.isCreateBeneficiaryAllowed(null)).toBe(false);
    });

    it('should return false, if the debit account doesn\'t allow external transfers', () => {
      const payment = {
        debitAccount: {
          externalTransferAllowed: false,
        },
      };

      expect(helpers.isCreateBeneficiaryAllowed(payment)).toBe(false);
    });
  });

  describe('isUrgentVisible', () => {
    it('should return true, if urgent payments are allowed', () => {
      const ctrl = createController();
      const payment = {
        schedule: {
          startDate: new Date(),
          transferFrequency: 'ONCE',
        },
        beneficiary: {
          urgentTransferAllowed: true,
        },
      };

      spyOn(ctrl, 'isUrgentPaymentAllowed').and.returnValue(true);

      expect(helpers.isUrgentVisible(payment, ctrl)).toBe(true);
    });

    it('should return false, if urgent payments are not allowed', () => {
      const ctrl = createController();
      const payment = {};

      spyOn(ctrl, 'isUrgentPaymentAllowed').and.returnValue(false);
      spyOn(ctrl, 'setUrgentPayment').and.returnValue(true);

      expect(helpers.isUrgentVisible(payment, ctrl)).toBe(false);
    });

    it('should return false, if there is no payment', () => {
      const ctrl = createController();
      spyOn(ctrl, 'isUrgentPaymentAllowed').and.callFake((payment) => Boolean(payment));
      expect(helpers.isUrgentVisible(null, ctrl)).toBe(false);
    });
  });

  describe('isPaymentFormValid', () => {
    it('should return false, if there is no payment', () => {
      const form = { $valid: true };
      expect(helpers.isPaymentFormValid(null, form)).toBe(false);
    });

    it('should return false, if the given payment doesn\'t have a beneficiary', () => {
      const payment = {
        beneficiary: null,
        debitAccount: {},
      };

      const form = { $valid: true };

      expect(helpers.isPaymentFormValid(payment, form)).toBe(false);
    });

    it('should return false, if the given payment doesn\'t have a debit account', () => {
      const payment = {
        beneficiary: {},
        debitAccount: null,
      };

      const form = { $valid: true };

      expect(helpers.isPaymentFormValid(payment, form)).toBe(false);
    });

    it('should return false, if the given form is invalid', () => {
      const payment = {
        beneficiary: {},
        debitAccount: {},
      };

      const form = { $valid: false };

      expect(helpers.isPaymentFormValid(payment, form)).toBe(false);
    });

    it('should return true, if the given payment is complete and the given form is valid', () => {
      const payment = {
        beneficiary: {},
        debitAccount: {},
      };

      const form = { $valid: true };

      expect(helpers.isPaymentFormValid(payment, form)).toBe(true);
    });
  });

  describe('onPaymentFormSubmit', () => {
    it('should set the payment form untouched', () => {
      const ctrl = {
        submitPayment: () => {},
      };

      const form = {
        $setUntouched: jasmine.createSpy('$setUntouched'),
      };

      helpers.onPaymentFormSubmit(ctrl, form);

      expect(form.$setUntouched).toHaveBeenCalled();
    });

    it('should submit the payment', () => {
      const ctrl = {
        submitPayment: jasmine.createSpy('submitPayment'),
      };

      const form = {
        $setUntouched: () => {},
      };

      helpers.onPaymentFormSubmit(ctrl, form);

      expect(ctrl.submitPayment).toHaveBeenCalled();
    });
  });
});
