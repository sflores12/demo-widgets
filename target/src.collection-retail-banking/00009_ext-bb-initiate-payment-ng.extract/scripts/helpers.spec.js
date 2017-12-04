import { transferFrequencies } from './constants';
import helpersGenerator from './helpers';

describe('ui-bb-initiate-payment-ng::helpers', () => {
  const $filter = (filter) => {
    switch (filter) {
      case 'i18n':
        return key => `i18n-${key}`;
      case 'date':
        return date => date.toString();
    }
  };
  const helpers = helpersGenerator({ $filter });

  it('should contain static properties', () => {
    expect(helpers.minOccurrences).toBeNumber();
    expect(helpers.maxOccurences).toBeNumber();
    expect(helpers.maxDigits).toBeNumber();
  });

  describe('showCrossCurrencyMessage()', () => {
    it('should return messages if ctrl has rate and from account and amount defined', () => {
      const ctrl = {
        rate: true,
        payment: {
          from: {
            currency: 1,
          },
          amount: {
            value: '1.00',
          },
        },
        paymentPreferences: {
          showExchangeRate: true,
        },
      };

      const result = helpers.showCrossCurrencyMessage(ctrl);

      expect(result).toBeObject();
      expect(result['cross-currency']).toEqual(true);
    });

    it('should return null if showExchangeRate is false', () => {
      const ctrl = {
        rate: true,
        payment: {
          from: {
            currency: 1,
          },
          amount: {
            value: '1.00',
          },
        },
        paymentPreferences: {
          showExchangeRate: false,
        },
      };

      expect(helpers.showCrossCurrencyMessage(ctrl)).toEqual(null);
    });

    it('should return null if ctrl has rate or from account or amount not defined', () => {
      const ctrl = {
        rate: false,
        payment: {
          from: true,
          amount: {
            value: true,
          },
        },
        paymentPreferences: {
          showExchangeRate: true,
        },
      };

      expect(helpers.showCrossCurrencyMessage(ctrl)).toEqual(null);

      ctrl.rate = true;
      ctrl.payment.from = false;
      expect(helpers.showCrossCurrencyMessage(ctrl)).toEqual(null);

      ctrl.payment.from = true;
      ctrl.payment.amount.value = false;
      expect(helpers.showCrossCurrencyMessage(ctrl)).toEqual(null);
    });

    it('should return null if ctrl from account currency and amount have same currency', () => {
      const ctrl = {
        rate: true,
        payment: {
          from: {
            currency: 'test',
          },
          amount: {
            value: true,
            currency: 'test',
          },
        },
        paymentPreferences: {
          showExchangeRate: true,
        },
      };

      expect(helpers.showCrossCurrencyMessage(ctrl)).toEqual(null);
    });
  });

    describe('normalizeAccounts()', () => {
    it('should return initial accounts if "search" is specified', () => {
      const result = helpers.normalizeAccounts([1, 2, 3]);

      expect(result).toBeNonEmptyArray();
      expect(result[1]).toEqual(2);
    });

    it('should return empty array if accounts undefined', () => {
      expect(helpers.normalizeAccounts([])).toBeEmptyArray();
    });

    it('should transform and flatten (external) accounts to format (identifier, name)', () => {
    
      const internals = [
        {identifier: 1, name: 'Internal 1'},
        {identifier: 2, name: 'Internal 2'},
      ];

      const externals = [
         {identifier: 1, name: 'John', external: true, accounts: [
           {IBAN: 'IBAN1', bankName: 'Account 1'},
           {accountNumber: 'Acc2', bankName: 'Account 2'}
         ]}
      ];

      const result = helpers.normalizeAccounts([].concat(internals, externals));

      expect(result).toBeNonEmptyArray();
      expect(result.length).toEqual(4);
      expect(result[0]).toEqual({identifier: 1, name: 'Internal 1'});
      expect(result[2].identifier).toEqual('IBAN1');
      expect(result[2].name).toEqual('John');
      expect(result[3].identifier).toEqual('Acc2');
      expect(result[3].name).toEqual('John');
    });
  });
  
  describe('canSelectUrgentPayment()', () => {
    it('should return correct value depending on control properties', () => {
      const ctrl = {
        payment: {},
        paymentPreferences: {},
      };
      
      expect(helpers.canSelectUrgentPayment(ctrl)).toBeFalse();

      ctrl.payment.from = {};
      expect(helpers.canSelectUrgentPayment(ctrl)).toBeFalse();

      ctrl.paymentPreferences.urgent = {};
      expect(helpers.canSelectUrgentPayment(ctrl)).toBeFalse();

      ctrl.payment.from = { urgentTransferAllowed: true };
      ctrl.paymentPreferences.urgent = false;
      expect(helpers.canSelectUrgentPayment(ctrl)).toBeFalse();

      ctrl.payment.from = { urgentTransferAllowed: true };
      ctrl.paymentPreferences.urgent = true;
      expect(helpers.canSelectUrgentPayment(ctrl)).toBeTrue();
    });
  });

  describe('getScheduleText()', () => {
    const EndingType = {
      AFTER: 'after',
      NEVER: 'never',
      ON: 'on',
    };
    const singleTransfer = {
      value: 'once',
      name: 'Once'
    };

    let payment;
    let dailyFrequency;
    let ctrl;

    beforeEach(() => {
      payment = {
        schedule: {
          startDate: new Date(),
        },
        endingType: EndingType.NEVER,
      };

      dailyFrequency = transferFrequencies[0];

      ctrl = {
        EndingType,
        payment,
        singleTransfer,
      };
    });

    it('should return "Once - Today" if we are dealing with single payment and executing it today', () => {
      payment.schedule.transferFrequency = singleTransfer;

      expect(helpers.getScheduleText(ctrl)).toEqual('i18n-Once - i18n-form.schedule.today');
    });

    it('should return "Daily - Starting today, x times" if "after" option selected', () => {
      payment.schedule.transferFrequency = dailyFrequency;
      payment.endingType = EndingType.AFTER;
      payment.schedule.repeat = 3;

      expect(helpers.getScheduleText(ctrl)).toEqual('i18n-form.schedule.frequency.daily - i18n-form.schedule.starting i18n-form.schedule.today, 3 i18n-form.schedule.repeat.count');
    });

    it('should return "Daily - Starting today" if "never" option selected', () => {
      payment.schedule.transferFrequency = dailyFrequency;
      payment.endingType = EndingType.NEVER;

      expect(helpers.getScheduleText(ctrl)).toEqual('i18n-form.schedule.frequency.daily - i18n-form.schedule.starting i18n-form.schedule.today');
    });

    it('should return "Daily - Starting today, until date" if "on" option selected', () => {
      payment.schedule.transferFrequency = dailyFrequency;
      payment.endingType = EndingType.ON;
      payment.schedule.endDate = new Date();

      const expected = `i18n-form.schedule.frequency.daily - i18n-form.schedule.starting i18n-form.schedule.today, i18n-form.schedule.until ${payment.schedule.endDate}`;
      expect(helpers.getScheduleText(ctrl)).toEqual(expected);
    });
  });

  describe('getFrequencies()', () => {
    it('should return frequencies depending on controller properties', () => {
      const ctrl = {
        singleTransfer: 123,
        paymentPreferences: {},
      };
      
      let result = helpers.getFrequencies(ctrl);
      expect(result).toBeNonEmptyArray();
      expect(result.length).toEqual(1);
      expect(result[0]).toEqual(123);

      ctrl.paymentPreferences.recurring = true;
      result = helpers.getFrequencies(ctrl);
      expect(result).toBeNonEmptyArray();
      expect(result.length).toEqual(6);
      expect(result[0]).toEqual(123);
      expect(result[3].value).toEqual('MONTHLY');
    });
  });

  describe('resetPayment()', () => {
    it('should reset payment and change step', done => {
      const scope = {
        step: 'edit',
        $digest: () => {},
      };
      const ctrl = {
        resetPayment: jasmine.createSpy('makePayment').and.returnValue(Promise.resolve()),
      };

      helpers.resetPayment(ctrl, scope)
        .then(() => {
          expect(ctrl.resetPayment).toHaveBeenCalled();
          expect(scope.step).toEqual('form');
        })
        .then(done)
        .catch(done.fail);
    });
  });
  
  describe('makePayment()', () => {
    it('should make payment and change step on success', done => {
      const scope = {
        step: 'edit',
        $digest: () => {},
      };
      const ctrl = {
        makePayment: jasmine.createSpy('makePayment').and.returnValue(Promise.resolve()),
      };

      helpers.makePayment(ctrl, scope)
        .then(() => {
          expect(ctrl.makePayment).toHaveBeenCalled();
          expect(scope.step).toEqual('confirmation');
        })
        .then(done)
        .catch(done.fail);
    });

    it('should make payment and do not change step on failure', done => {
      const scope = {
        step: 'edit',
        $digest: () => {},
      };
      const ctrl = {
        clearPaymentError: () => {},
        makePayment: jasmine.createSpy('makePayment').and.returnValue(Promise.reject()),
      };

      helpers.makePayment(ctrl, scope)
        .then(() => {
          expect(ctrl.makePayment).toHaveBeenCalled();
          expect(scope.step).toEqual('edit');
          done();
        })
        .catch(done.fail);
    });
  });

  describe('reviewPayment()', () => {
    it('should validate form and move to review step', done => {
      const nextStep = 'review';
      const ctrl = {
        clearPaymentError: () => {},
        reviewPayment: jasmine.createSpy('reviewPayment').and.returnValue(Promise.resolve()),
      };
      const scope = {
        step: 'form',
        $digest: () => {},
      };

      helpers.reviewPayment(ctrl, scope)
        .then(() => {
          expect(ctrl.reviewPayment).toHaveBeenCalled();
          expect(scope.step).toEqual(nextStep);
        })
        .then(done)
        .catch(done.fail);
    });

    it('should not move to review step when form is not valid', done => {
      const step = 'form';
      const promise = Promise.reject([]);
      const ctrl = {
        clearPaymentError: () => {},
        reviewPayment: jasmine.createSpy('reviewPayment').and.returnValue(promise),
      };
      const scope = {
        step,
        $digest: () => {},
      };

      helpers.reviewPayment(ctrl, scope);
      promise.then(done.fail)
        .catch(() => {
          expect(ctrl.reviewPayment).toHaveBeenCalled();
          expect(scope.step).toEqual(step);
        })
        .then(done);
    });
  });
  
  describe('toggleCreditSuggestGroup()', () => {
    it('should call open controller method', () => {
      const event = jasmine.createSpyObj(['stopPropagation']);
      const ctrl = jasmine.createSpyObj(['open']);

      helpers.toggleCreditSuggestGroup(event, {}, ctrl);
      expect(event.stopPropagation).toHaveBeenCalled();
      expect(ctrl.open).toHaveBeenCalled();
    });
  });
  
  describe('onAccountChange()', () => {
    it('should call account change callback and digest scope', done => {

      const ctrl = {
        payment: {
          from: null,
        },
        onAccountFromChange: jasmine.createSpy('onAccountFromChange').and.returnValue(Promise.resolve()),
      };

      helpers.onAccountChange(ctrl, {id: "1"})
        .then(() => {
          expect(ctrl.onAccountFromChange).toHaveBeenCalled();
        })
        .then(done)
        .catch(done.fail);
    });

    it('should call account change callback and not digest scope on failure', done => {

      const ctrl = {
        payment: {
          from: null,
        },
        onAccountFromChange: jasmine.createSpy('onAccountFromChange').and.returnValue(Promise.reject()),
      };

      helpers.onAccountChange(ctrl, {id: "1"})
        .then(done.fail)
        .catch(() => {
          expect(ctrl.onAccountFromChange).toHaveBeenCalled();
        })
        .then(done);
    });
  });

  describe('getMinDate()', () => {
    const dateString = (d) => d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate();

    it('should add days', () => {
      let day = new Date('2017-03-07');
      expect(dateString(helpers.getMinDate(day, transferFrequencies[0]))).toBe('2017-3-8');

      day = new Date('2017-12-31');
      expect(dateString(helpers.getMinDate(day, transferFrequencies[0]))).toBe('2018-1-1');

      day = new Date('2017-02-28');
      expect(dateString(helpers.getMinDate(day, transferFrequencies[0]))).toBe('2017-3-1');

      day = new Date('2016-02-28'); // 2016 - leap year
      expect(dateString(helpers.getMinDate(day, transferFrequencies[0]))).toBe('2016-2-29');
    });

    it('should add weeks', () => {
      let day = new Date('2017-03-07');
      expect(dateString(helpers.getMinDate(day, transferFrequencies[1]))).toBe('2017-3-14');

      day = new Date('2017-12-30');
      expect(dateString(helpers.getMinDate(day, transferFrequencies[1]))).toBe('2018-1-6');

      day = new Date('2017-02-28');
      expect(dateString(helpers.getMinDate(day, transferFrequencies[1]))).toBe('2017-3-7');

      day = new Date('2016-02-28'); // 2016 - leap year
      expect(dateString(helpers.getMinDate(day, transferFrequencies[1]))).toBe('2016-3-6');
    });

    it('should add months', () => {
      let day = new Date('2017-03-07');
      expect(dateString(helpers.getMinDate(day, transferFrequencies[2]))).toBe('2017-4-7');

      day = new Date('2017-03-31');
      expect(dateString(helpers.getMinDate(day, transferFrequencies[2]))).toBe('2017-4-30');

      day = new Date('2017-01-31');
      expect(dateString(helpers.getMinDate(day, transferFrequencies[2]))).toBe('2017-2-28');

      day = new Date('2016-01-31'); // 2016 - leap year
      expect(dateString(helpers.getMinDate(day, transferFrequencies[2]))).toBe('2016-2-29');
    });

    it('should add quarters', () => {
      let day = new Date('2017-03-07');
      expect(dateString(helpers.getMinDate(day, transferFrequencies[3]))).toBe('2017-6-7');

      day = new Date('2017-03-31');
      expect(dateString(helpers.getMinDate(day, transferFrequencies[3]))).toBe('2017-6-30');

      day = new Date('2017-01-31');
      expect(dateString(helpers.getMinDate(day, transferFrequencies[3]))).toBe('2017-4-30');

      day = new Date('2015-11-30'); // 2016 - leap year
      expect(dateString(helpers.getMinDate(day, transferFrequencies[3]))).toBe('2016-2-29');
    });

    it('should add years', () => {
      let day = new Date('2017-03-07');
      expect(dateString(helpers.getMinDate(day, transferFrequencies[4]))).toBe('2018-3-7');

      day = new Date('2016-02-29'); // 2016 - leap year
      expect(dateString(helpers.getMinDate(day, transferFrequencies[4]))).toBe('2017-3-1');
    });

  });
});
