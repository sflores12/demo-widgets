import Controller from './controller';
import * as defaultHooks from './default-hooks';
import { Preference } from './constants';

let bus;
let model;
let ctrl;
let bbStorage;
let widget;

const controller = () => new Controller(bus, defaultHooks, model, bbStorage, widget, Promise);

describe('widget-bb-initiate-payment-ng::Controller', () => {
  beforeEach(() => {
    bus = jasmine.createSpyObj('bus', ['publish', 'subscribe']);
    model = jasmine.createSpyObj('model', ['getAccountsFrom', 'getCurrencies', 'getAccountsTo', 'getRate', 'createContact', 'createPaymentOrder', 'getContextArrangements', 'getProductSelectedId']);
    bbStorage = jasmine.createSpyObj('bbStorage', ['getItem']);
    widget = jasmine.createSpyObj('widget', ['getId', 'getBooleanPreference']);
    ctrl = controller();
    ctrl.payment = null;
  });

  it('should have payment preferences available on initialize', () => {
    widget.getBooleanPreference.and.callFake(name => {
      return name === Preference.SHOW_EXCHANGE_RATE || name === Preference.RECURRING;
    });

    ctrl = controller();

    expect(ctrl.paymentPreferences.showExchangeRate).toBeTrue();
    expect(ctrl.paymentPreferences.urgent).toBeFalse();
    expect(ctrl.paymentPreferences.recurring).toBeTrue();
  });

  describe('$onInit()', () => {
    beforeEach(() => {
      model.getAccountsFrom.and.returnValue(Promise.resolve());
      model.getAccountsTo.and.returnValue(Promise.resolve());
      model.getCurrencies.and.returnValue(Promise.resolve([]));
      model.getProductSelectedId.and.returnValue(Promise.resolve());
      bbStorage.getItem.and.returnValue(Promise.resolve());
    });

    it('should reset payment on init', done => {
      // resetPayment method itself is tested in different place

      expect(ctrl.payment).toBeNull();
      expect(ctrl.accountsFrom).toBeNull();

      ctrl.$onInit()
        .then(() => {
          expect(ctrl.payment).toBeNonEmptyObject();
          expect(ctrl.accountsFrom).not.toBeNull();
        })
        .then(done)
        .catch(done.fail);
    });

    describe('Events', () => {
      it('should update currencies and accounts on account select event', done => {
        let eventFn = () => {};

        model.getAccountsTo.and.returnValue(Promise.resolve([1, 2, 3]));
        model.getCurrencies.and.returnValue(Promise.resolve([4, 5, 6]));

        bus.subscribe.and.callFake((event, callback) => {
          if (event === 'bb.event.account.selected') {
            eventFn = callback;
          }
        });

        const checkUpdatedAccounts = result => Promise.resolve(result)
          .then(() => {
            expect(ctrl.accountsLoading).toBeFalse();
            expect(ctrl.accountsTo).toEqual([1, 2, 3]);
            expect(ctrl.currencies).toBeNonEmptyArray();
          });

        ctrl.$onInit()
          .then(() => {
            ctrl.accountsTo = ctrl.currencies = null;

            expect(ctrl.payment.from).toBeNull();
            const result = eventFn({ account: 'test', isAccountsFrom: true });

            expect(ctrl.payment.from).toEqual('test');
            expect(ctrl.accountsLoading).toBeTrue();
            expect(ctrl.accountsTo).toBeNull();
            expect(ctrl.currencies).toBeNull();

            return checkUpdatedAccounts(result);
          })
          .then(done)
          .catch(done.fail);
      });

      it('should only update payment to account on account select event', done => {
        let eventFn = () => Promise.resolve();

        bus.subscribe.and.callFake((event, callback) => {
          if (event === 'bb.event.account.selected') {
            eventFn = callback;
          }
        });

        ctrl.$onInit()
          .then(() => {
            expect(ctrl.payment.to).toBeNull();

            eventFn({ account: 'test' });

            expect(ctrl.payment.to).toEqual('test');
          })
          .then(done)
          .catch(done.fail);
      });

      it('should update accounts on contact create event', done => {
        let eventFn = () => {};

        model.getAccountsTo.and.returnValue(Promise.resolve([1, 2, 3]));
        bus.subscribe.and.callFake((event, callback) => {
          if (event === 'bb.event.contact.create.done') {
            eventFn = callback;
          }
        });

        const checkUpdatedAccounts = result => Promise.resolve(result)
          .then(() => {
            expect(ctrl.accountsLoading).toBeFalse();
            expect(ctrl.accountsTo).toEqual([1, 2, 3]);
          });

        ctrl.$onInit()
          .then(() => {
            ctrl.accountsTo = null;

            const result = eventFn();

            expect(ctrl.accountsLoading).toBeTrue();
            expect(ctrl.accountsTo).toBeNull();

            return checkUpdatedAccounts(result);
          })
          .then(done)
          .catch(done.fail);
      });

      it('should update accounts on contact update event', done => {
        let eventFn = () => {};

        model.getAccountsTo.and.returnValue(Promise.resolve([1, 2, 3]));
        bus.subscribe.and.callFake((event, callback) => {
          if (event === 'bb.event.contact.update.done') {
            eventFn = callback;
          }
        });

        const checkUpdatedAccounts = result => Promise.resolve(result)
          .then(() => {
            expect(ctrl.accountsLoading).toBeFalse();
            expect(ctrl.accountsTo).toEqual([1, 2, 3]);
          });

        ctrl.$onInit()
          .then(() => {
            ctrl.accountsTo = null;

            const result = eventFn();

            expect(ctrl.accountsLoading).toBeTrue();
            expect(ctrl.accountsTo).toBeNull();

            return checkUpdatedAccounts(result);
          })
          .then(done)
          .catch(done.fail);
      });

      it('should update accounts on contact delete event', done => {
        let eventFn = () => {};

        model.getAccountsTo.and.returnValue(Promise.resolve([1, 2, 3]));
        bus.subscribe.and.callFake((event, callback) => {
          if (event === 'bb.event.contact.delete.done') {
            eventFn = callback;
          }
        });

        const checkUpdatedAccounts = result => Promise.resolve(result)
          .then(() => {
            expect(ctrl.accountsLoading).toBeFalse();
            expect(ctrl.accountsTo).toEqual([1, 2, 3]);
          });

        ctrl.$onInit()
          .then(() => {
            ctrl.accountsTo = null;

            const result = eventFn();

            expect(ctrl.accountsLoading).toBeTrue();
            expect(ctrl.accountsTo).toBeNull();

            return checkUpdatedAccounts(result);
          })
          .then(done)
          .catch(done.fail);
      });

      it('should publish loaded events', done => {
        widget.getId.and.returnValue('test');

        ctrl.$onInit()
          .then(() => {
            expect(bus.publish).toHaveBeenCalledWith('cxp.item.loaded', { id: 'test' });
            expect(bus.publish).toHaveBeenCalledWith('bb.item.loaded', { id: 'test' });
          })
          .then(done)
          .catch(done.fail);
      });
    });
  });

  describe('resetPayment()', () => {
    beforeEach(() => {
      model.getAccountsFrom.and.returnValue(Promise.resolve());
      model.getAccountsTo.and.returnValue(Promise.resolve());
      model.getCurrencies.and.returnValue(Promise.resolve([]));
      model.getProductSelectedId.and.returnValue(Promise.resolve());
      bbStorage.getItem.and.returnValue(Promise.resolve());
    });

    it('should initialize payment object', () => {
      expect(ctrl.payment).toBeNull();

      ctrl.$onInit();

      expect(ctrl.payment).toBeNonEmptyObject();
      expect(ctrl.payment).toHaveNonEmptyObject('amount');
      expect(ctrl.payment).toHaveNonEmptyObject('schedule');
      expect(ctrl.payment).toHaveMember('from');
      expect(ctrl.payment).toHaveMember('to');
    });

    it('should reset char counter for description field', () => {
      ctrl.descriptionCounterState = {counter: 7, isValid: true};

      ctrl.resetPayment();

      expect(ctrl.descriptionCounterState).toBeNull();
    });

    describe('updateAccountsFrom()', () => {
      it('should update payments from accounts', done => {
        model.getAccountsFrom.and.returnValue(Promise.resolve([{id:1}, {id: 2}, {id: 3}]));

        ctrl.$onInit()
          .then(() => {
            expect(ctrl.accountsLoading).toBeFalse();
            expect(ctrl.accountsLoadError).toBeNull();
            expect(ctrl.accountsFrom).toEqual([{id:1}, {id: 2}, {id: 3}]);
            expect(ctrl.payment.from).toEqual(null);
          })
          .then(done)
          .catch(done.fail);

        expect(ctrl.accountsLoading).toBeTrue();
      });

      it('should update payments from accounts and not set from payment if present already', done => {
        model.getAccountsFrom.and.returnValue(Promise.resolve([{id:1}, {id: 2}, {id: 3}]));

        ctrl.$onInit()
          .then(() => {
            expect(ctrl.accountsLoading).toBeFalse();
            expect(ctrl.accountsLoadError).toBeNull();
            expect(ctrl.accountsFrom).toEqual([{id:1}, {id: 2}, {id: 3}]);
            expect(ctrl.payment.from).toEqual('test');
          })
          .then(done)
          .catch(done.fail);

        expect(ctrl.accountsLoading).toBeTrue();

        ctrl.payment.from = 'test';
      });

      it('should set load error on failure', done => {
        model.getAccountsFrom.and.returnValue(Promise.reject({}));

        ctrl.$onInit()
          .then(() => {
            expect(ctrl.accountsLoading).toBeFalse();
            expect(ctrl.accountsLoadError).toBeNonEmptyObject();
          })
          .then(done)
          .catch(done.fail);

        expect(ctrl.accountsLoading).toBeTrue();
      });
    });

    describe('updateCurrencyList()', () => {
      it('should return default array if from account set and cross currency not allowed', done => {
        model.getCurrencies.and.returnValue(Promise.resolve([]));

        ctrl.$onInit()
          .then(() => {
            expect(ctrl.currencies).toBeNonEmptyArray();
            expect(ctrl.currencies.length).toEqual(1);
            expect(ctrl.currencies[0].name).toEqual('test');
          })
          .then(done)
          .catch(done.fail);

        ctrl.payment.from = {
          crossCurrencyAllowed: false,
          currency: 'test',
        };

        expect(ctrl.currencies).toBeNull();
        expect(ctrl.payment.amount.currency).toBeNull();
        expect(ctrl.payment.amount.value).toBeNull();
      });

      it('should return default array if get currencies request failed', done => {
        model.getCurrencies.and.returnValue(Promise.reject());

        ctrl.$onInit()
          .then(() => {
            expect(ctrl.currencies).toBeNonEmptyArray();
            expect(ctrl.currencies.length).toEqual(1);
            expect(ctrl.currencies[0].name).toEqual('test');
          })
          .then(done)
          .catch(done.fail);

        ctrl.payment.from = {
          currency: 'test',
          crossCurrencyAllowed: true,
        };

        expect(ctrl.currencies).toBeNull();
      });

      it('should preserve currencies order and set controller state properties', done => {
        const currencies = [
          { name: 'GBP' },
          { name: 'ZBP' },
          { name: 'ACM' },
          { name: 'EUR' },
        ];
        model.getCurrencies.and.returnValue(Promise.resolve(currencies));

        ctrl.$onInit()
          .then(() => {
            expect(ctrl.currencies).toEqual(currencies);
            expect(ctrl.payment.amount).toBeNonEmptyObject();
            expect(ctrl.payment.amount.currency).toEqual('GBP');
          })
          .then(done)
          .catch(done.fail);
      });

      it('should sort currencies by current currency and set controller state properties', done => {
        const currencies = [
          { name: 'GBP' },
          { name: 'ZBP' },
          { name: 'ACM' },
          { name: 'EUR' },
        ];
        model.getCurrencies.and.returnValue(Promise.resolve(currencies));

        ctrl.$onInit()
          .then(() => {
            expect(ctrl.currencies).toBeArrayOfObjects();
            expect(ctrl.currencies[0].name).toEqual('ZBP');
            expect(ctrl.currencies[2].name).toEqual('ACM');
            expect(ctrl.payment.amount).toBeNonEmptyObject();
            expect(ctrl.payment.amount.currency).toEqual('ZBP');
          })
          .then(done)
          .catch(done.fail);

        ctrl.payment.from = {
          currency: 'ZBP',
          crossCurrencyAllowed: true,
        };
      });

      it('should add unknown currency to the list', done => {
        const currencies = [
          { name: 'GBP' },
          { name: 'ZBP' },
          { name: 'ACM' },
          { name: 'EUR' },
        ];
        model.getCurrencies.and.returnValue(Promise.resolve(currencies));

        ctrl.$onInit()
          .then(() => {
            expect(ctrl.currencies).toBeArrayOfObjects();
            expect(ctrl.currencies.length).toEqual(5);
            expect(ctrl.currencies[0].name).toEqual('ABC');
            expect(ctrl.currencies[2].name).toEqual('ZBP');
            expect(ctrl.payment.amount).toBeNonEmptyObject();
            expect(ctrl.payment.amount.currency).toEqual('ABC');
          })
          .then(done)
          .catch(done.fail);

        ctrl.payment.from = {
          currency: 'ABC',
          crossCurrencyAllowed: true,
        };
      });
    });

    describe('updateAccountsTo()', () => {
      it('should set returned accounts to controller state property', done => {
        model.getAccountsTo.and.returnValue(Promise.resolve([1, 2, 3]));
        model.getAccountsFrom.and.returnValue(Promise.resolve([4, 5, 6]));

        ctrl.$onInit()
          .then(() => {
            expect(ctrl.accountsLoading).toBeFalse();
            expect(ctrl.accountsTo).toEqual([1, 2, 3]);
            expect(ctrl.accountsLoadError).toBeNull();
            expect(ctrl.payment.to).toEqual({ name: 'test' });
          })
          .then(done)
          .catch(done.fail);

        ctrl.payment.to = { name: 'test' };

        expect(ctrl.accountsLoading).toBeTrue();
      });

      it('should set error property in case of failed request', done => {
        model.getAccountsTo.and.returnValue(Promise.reject({}));

        ctrl.$onInit()
          .then(() => {
            expect(ctrl.accountsLoading).toBeFalse();
            expect(ctrl.accountsTo).toBeNull();
            expect(ctrl.accountsLoadError).toEqual({
              messageKey: 'account.model.error.unexpected',
              type: 'warning',
            });
          })
          .then(done)
          .catch(done.fail);

        expect(ctrl.accountsLoading).toBeTrue();
      });
    });

    describe('updateAccountSelected()', () => {
      it('should select saved account', done => {
        model.getProductSelectedId.and.returnValue(Promise.resolve(2));
        model.getAccountsFrom.and.returnValue(Promise.resolve([{id: 1}, {id: 2}, {id: 3}]));

        ctrl.$onInit()
          .then(() => {
            expect(ctrl.accountsLoading).toBeFalse();
            expect(ctrl.accountsLoadError).toBeNull();
            expect(ctrl.accountsFrom).toEqual([{id: 1}, {id: 2}, {id: 3}]);
            expect(ctrl.payment.from).toEqual({id: 2});
          })
          .then(done)
          .catch(done.fail);

        expect(ctrl.accountsLoading).toBeTrue();
      });
    });
  });

  describe('onAccountFromChange()', () => {
    beforeEach(() => {
      model.getAccountsTo.and.returnValue(Promise.resolve([1, 2, 3]));
      model.getCurrencies.and.returnValue(Promise.resolve([]));

      ctrl.payment = { amount: {} };
    });

    it('should update currency list and credit accounts', done => {
      ctrl.payment = Object.assign(ctrl.payment, {
        from: { currency: 'ABC' },
      });

      ctrl.onAccountFromChange()
        .then(() => {
          expect(ctrl.currencies).toEqual([{ name: 'ABC' }]);
          expect(ctrl.accountsTo).toEqual([1, 2, 3]);
        })
        .then(done)
        .catch(done.fail);
    });

    it('should reset credit account if credit and debit accounts are the same', done => {
      ctrl.payment = Object.assign(ctrl.payment, {
        from: { id: 123 },
        to: { id: 123 },
      });

      ctrl.onAccountFromChange()
        .then(() => {
          expect(ctrl.payment.to).toBeNull();
        })
        .then(done)
        .catch(done.fail);
    });

    it('should reset credit account if credit account is external', done => {
      ctrl.payment = Object.assign(ctrl.payment, {
        from: { id: 123 },
        to: { external: true },
      });

      ctrl.onAccountFromChange()
        .then(() => {
          expect(ctrl.payment.to).toBeNull();
        })
        .then(done)
        .catch(done.fail);
    });

    it('should reset credit account if credit account is new', done => {
      ctrl.payment = Object.assign(ctrl.payment, {
        from: {
          id: 123,
          externalTransferAllowed: false,
        },
        to: { isNew: true },
      });

      ctrl.onAccountFromChange()
        .then(() => {
          expect(ctrl.payment.to).toBeNull();
        })
        .then(done)
        .catch(done.fail);
    });
  });

  describe('updateRate()', () => {
    it('should return resolved promise if currencies are not different', done => {
      ctrl.updateRate('ABC', 'ABC')
        .then(() => {
          expect(model.getRate).not.toHaveBeenCalled();
          expect(ctrl.rate).toBeNull();
        })
        .then(done)
        .catch(done.fail);
    });

    it('should not set rate if service request fails', done => {
      model.getRate.and.returnValue(Promise.reject());

      ctrl.updateRate('ABC', 'BCD')
        .then(done.fail)
        .catch(() => {
          expect(ctrl.rate).toBeNull();
        })
        .then(done);
    });

    it('should set rate in case of successful response', done => {
      model.getRate.and.returnValue(Promise.resolve(111.11));

      ctrl.updateRate('ABC', 'BCD')
        .then(() => {
          expect(ctrl.rate).toEqual(111.11);
        })
        .then(done)
        .catch(done.fail);
    });
  });

  describe('canSaveNewContact()', () => {
    it('should return correct value and set "saveNewContact" property on false', () => {
      const accounts = [
        { name: 'test', identifier: 123 },
      ];

      ctrl.saveNewContact = null;
      expect(ctrl.canSaveNewContact()).toBeFalse();
      expect(ctrl.saveNewContact).toBeFalse();

      ctrl.saveNewContact = null;
      expect(ctrl.canSaveNewContact({ name: 'test', identifier: 123 }, accounts)).toBeFalse();
      expect(ctrl.saveNewContact).toBeFalse();

      ctrl.saveNewContact = null;
      expect(ctrl.canSaveNewContact({ name: 'test', identifier: 123 }, [])).toBeTrue();
      expect(ctrl.saveNewContact).toBeNull();
    });
  });

  describe('clearPaymentError()', () => {
    it('should clear payment error property', () => {
      ctrl.paymentSubmitError = 'test';

      ctrl.clearPaymentError();

      expect(ctrl.paymentSubmitError).toBeNull();
    });
  });

  describe('makePayment()', () => {
    beforeEach(() => {
      model.createPaymentOrder.and.returnValue(Promise.resolve({data: { status: 'ENTERED'}}));
      model.createContact.and.returnValue(Promise.resolve());
      model.getAccountsTo.and.returnValue(Promise.resolve([]));

      ctrl.payment = {};
    });

    it('should create new payment with transformed data', done => {
      const data = {
        to: {},
        from: {},
        schedule: {
          transferFrequency: {
            value: 'ONCE'
          },
        },
        amount: {},
      };

      ctrl.makePayment(data)
        .then(() => {
          expect(ctrl.paymentLoading).toBeFalse();
          expect(ctrl.createPaymentResponseStatus).toBe('ENTERED');
          expect(ctrl.paymentSubmitError).toBeNull();
          expect(model.createContact).not.toHaveBeenCalled();
          expect(model.createPaymentOrder.calls.first().args[0]).not.toEqual(data);
        })
        .then(done)
        .catch(done.fail);

      expect(ctrl.paymentLoading).toBeTrue();
    });

    it('should return rejected promise if payment data is invalid', done => {
      ctrl.makePayment({})
        .then(done.fail)
        .catch(() => {
          expect(ctrl.paymentLoading).toBeFalse();
          expect(ctrl.createPaymentResponseStatus).toBeNull();
          expect(model.createContact).not.toHaveBeenCalled();
          expect(model.createPaymentOrder).not.toHaveBeenCalled();
          expect(ctrl.paymentSubmitError).toBeObject();
        })
        .then(done);

      expect(ctrl.paymentLoading).toBeTrue();
    });

    it('should show error on payment create failure', done => {
      model.createPaymentOrder.and.returnValue(Promise.reject({}));

      const data = {
        to: {},
        from: {},
        schedule: {
          transferFrequency: {
            value: 'ONCE'
          },
        },
        amount: {},
      };

      ctrl.makePayment(data)
        .then(done.fail)
        .catch(() => {
          expect(ctrl.paymentLoading).toBeFalse();
          expect(ctrl.createPaymentResponseStatus).toBeNull();
          expect(ctrl.paymentSubmitError).toBeObject();
        })
        .then(done);

      expect(ctrl.paymentLoading).toBeTrue();
    });

    it('should not save contact if save flag is not set', done => {
      const data = {
        to: {
          name: 'Test',
          identifier: 123,
        },
      };

      ctrl.makePayment(data)
        .then(done.fail)
        .catch(() => {
          expect(model.createContact).not.toHaveBeenCalled();
          expect(model.createPaymentOrder).not.toHaveBeenCalled();
          expect(ctrl.paymentSubmitError).toBeObject();
        })
        .then(done);
    });

    it('should save contact and update accounts even if payment data is invalid', done => {
      const data = {
        to: {
          name: 'Test',
          identifier: 123,
        },
      };

      ctrl.saveNewContact = true;
      ctrl.makePayment(data)
        .then(done.fail)
        .catch(() => {
          expect(model.createContact).toHaveBeenCalledWith({ name: 'Test', accounts: [{ IBAN: 123 }] });
          expect(model.createPaymentOrder).not.toHaveBeenCalled();
          expect(model.getAccountsTo).toHaveBeenCalled();
          expect(ctrl.paymentSubmitError).toBeObject();
          expect(ctrl.saveNewContact).toBeFalse();
        })
        .then(done);
    });

    it('should clear payment Submit Error before making payment', done => {
      const data = {
        to: {},
        from: {},
        schedule: {
          transferFrequency: {
            value: 'ONCE'
          },
        },
        amount: {},
      };
      ctrl.paymentSubmitError = {error: 'Error'};

      ctrl.makePayment(data)
        .then(() => {
          expect(ctrl.paymentSubmitError).toBeNull();
        })
        .then(done)
        .catch(done.fail);
    });

    it('should save contact and not update accounts on failure', done => {
      model.createContact.and.returnValue(Promise.reject());

      const data = {
        to: {
          name: 'Test',
          identifier: 123,
        },
      };

      ctrl.saveNewContact = true;
      ctrl.makePayment(data)
        .then(done.fail)
        .catch(() => {
          expect(model.createContact).toHaveBeenCalledWith({ name: 'Test', accounts: [{ IBAN: 123 }] });
          expect(model.getAccountsTo).not.toHaveBeenCalled();
          expect(ctrl.saveNewContact).toBeTrue();
        })
        .then(done);
    });
  });

  describe('reviewPayment()', () => {
    const data = {
      to: {
        name: 'Test',
        identifier: 123,
      },
    };

    it('should validate payment when validate hook validates it', done => {
      const validResult = { valid: true, messages: [] };
      defaultHooks.validatePayment = jasmine.createSpy('validatePayment').and.returnValue(validResult);
      ctrl.reviewPayment(data)
        .then(() => {
          expect(defaultHooks.validatePayment).toHaveBeenCalled();
          expect(ctrl.paymentValidation.valid).toBeTrue();
          expect(ctrl.paymentValidation.messages).toBeEmptyArray();
        })
        .then(done)
        .catch(done.fail);
    });

    it('should invalidate payment when hook does not validate it', done => {
      const invalidResult = {
        valid: false,
        messages: [{
          messageKey: 'key',
          type: 'danger',
        }],
      };
      defaultHooks.validatePayment = jasmine.createSpy('validatePayment').and.returnValue(invalidResult);
      ctrl.reviewPayment(data)
        .then(done.fail)
        .catch(() => {
          expect(defaultHooks.validatePayment).toHaveBeenCalled();
          expect(ctrl.paymentValidation.valid).toBeFalse();
          expect(ctrl.paymentValidation.messages).toEqual(invalidResult.messages);
        })
        .then(done);
    });
  });
});
