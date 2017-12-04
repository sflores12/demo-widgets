import SelectAccountController from './select-account.controller';

describe('widget-bbm-initiate-payment-ng::SelectAccountController', () => {
  const widget = {
    getId: () => '123',
  };

  const model = {
    getPaymentPreferences: () => ({}),
  };

  const viewModel = {
    fetch: () => Promise.resolve(),
    save: () => Promise.resolve(),
  };

  const sharedApi = {
    preferences: {
      key: 'value',
    },
  };

  const bbIntent = {
    create: () => () => {},
    handle: () => {},
    init: () => {},
  };

  const bus = {
    publish: () => {},
    subscribe: () => {},
  };

  const wait = delay => new Promise(resolve => setTimeout(resolve, delay || 0));

  const noop = () => {};

  const createController = () => new SelectAccountController(
    widget,
    model,
    viewModel,
    sharedApi,
    bbIntent,
    bus
  );

  it('should expose preferences', () => {
    expect(createController().preferences).toEqual({ key: 'value' });
  });

  describe('Methods', () => {
    describe('#$onInit', () => {
      it('should prepare the view model', done => {
        const ctrl = createController();

        spyOn(viewModel, 'fetch').and.callThrough();

        ctrl.$onInit()
          .then(() => {
            expect(viewModel.fetch).toHaveBeenCalled();
            done();
          })
          .catch(done.fail);
      });

      it('should publish "cxp.item.loaded" and "bb.item.loaded" event', done => {
        const ctrl = createController();

        spyOn(bus, 'publish');

        ctrl.$onInit()
          .then(() => {
            /* event cxp.item.loaded will be deprecated */
            expect(bus.publish).toHaveBeenCalledWith('cxp.item.loaded', { id: '123' });
            expect(bus.publish).toHaveBeenCalledWith('bb.item.loaded', { id: '123' });
            done();
          })
          .catch(done.fail);
      });
    });

    describe('#selectAccount', () => {
      it('should fulfill the "view.payment.account.select" intent with the given account', done => {
        let handler;

        spyOn(bbIntent, 'handle').and.callFake((name, fn) => {
          if (name === 'view.payment.account.select') {
            handler = fn;
          }
        });

        const ctrl = createController();
        const respond = jasmine.createSpy('selectAccount');

        ctrl.$onInit()
          .then(() => {
            handler({ type: 'credit' }, respond);
          })
          .then(() => wait())
          .then(() => {
            ctrl.selectAccount({ id: 'accountA' });
          })
          .then(() => wait())
          .then(() => {
            expect(respond).toHaveBeenCalledWith({
              selectedAccount: { id: 'accountA' },
              type: 'credit',
            });
          })
          .then(done, done.fail);
      });

      it('should save the view model', done => {
        let handler;

        spyOn(bbIntent, 'handle').and.callFake((name, fn) => {
          if (name === 'view.payment.account.select') {
            handler = fn;
          }
        });

        const ctrl = createController();

        ctrl.$onInit()
          .then(() => {
            handler({ type: 'credit' }, noop);
          })
          .then(() => wait())
          .then(() => {
            spyOn(viewModel, 'save').and.callThrough();

            ctrl.selectAccount({
              id: 'accountA',
            });

            expect(viewModel.save).toHaveBeenCalled();
          })
          .then(done, done.fail);
      });
    });
  });

  describe('Intents handlers', () => {
    describe('view.payment.account.select', () => {
      it('should fetch the view model', done => {
        let handler;

        spyOn(bbIntent, 'handle').and.callFake((name, fn) => {
          if (name === 'view.payment.account.select') {
            handler = fn;
          }
        });

        const ctrl = createController();

        ctrl.$onInit()
          .then(() => {
            spyOn(viewModel, 'fetch').and.callThrough();
            handler({ type: 'debit' }, noop);

            expect(viewModel.fetch).toHaveBeenCalled();
          })
          .then(done, done.fail);
      });

      it('should apply the given account type', done => {
        let handler;

        spyOn(bbIntent, 'handle').and.callFake((name, fn) => {
          if (name === 'view.payment.account.select') {
            handler = fn;
          }
        });

        const ctrl = createController();

        ctrl.$onInit()
          .then(() => {
            handler({ type: 'debit' }, noop);
          })
          .then(() => wait())
          .then(() => {
            expect(ctrl.accountType).toBe('debit');
          })
          .then(done, done.fail);
      });
    });
  });

  describe('Properties', () => {
    describe('AccountType', () => {
      it('should have DEBIT and CREDIT types', () => {
        const ctrl = createController();

        expect(ctrl.AccountType.DEBIT).toEqual(jasmine.any(String));
        expect(ctrl.AccountType.CREDIT).toEqual(jasmine.any(String));
      });
    });
  });
});
