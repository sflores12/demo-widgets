import ReviewController from './review.controller';

describe('widget-bbm-payment-ng::ReviewController', () => {
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
    makePayment: () => Promise.resolve(),
    makePaymentWithAuthorization: () => Promise.resolve(),
    saveContactIfNeeded: () => {},
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

  const createController = () => new ReviewController(
    widget,
    model,
    viewModel,
    sharedApi,
    bbIntent,
    bus
  );

  const mockIntents = (intentMocks) => {
    spyOn(bbIntent, 'create').and.callFake((name) => (
      intentMocks[name] ? intentMocks[name] : () => {}
    ));
  };

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

    describe('#submitPayment', () => {
      it('should make a payment', done => {
        const ctrl = createController();

        spyOn(sharedApi, 'makePaymentWithAuthorization').and.callThrough();

        ctrl.submitPayment()
          .then(() => {
            expect(sharedApi.makePaymentWithAuthorization).toHaveBeenCalled();
            done();
          })
          .catch(done.fail);
      });

      it('should show the form once the payment is done', done => {
        const intent = jasmine.createSpy('view.payment.form.show');

        mockIntents({
          'view.payment.form.show': intent,
        });

        const ctrl = createController();

        ctrl.submitPayment()
          .then(() => {
            expect(intent).toHaveBeenCalledWith({ reset: true });
            done();
          })
          .catch(done.fail);
      });

      it('should save the view model before navigating to the form', done => {
        const ctrl = createController();

        spyOn(viewModel, 'save').and.callThrough();

        ctrl.submitPayment()
          .then(() => {
            expect(viewModel.save).toHaveBeenCalled();
            done();
          })
          .catch(done.fail);
      });

      it('should save the beneficiary as a new contact if needed', () => {
        const ctrl = createController();

        spyOn(sharedApi, 'saveContactIfNeeded');

        ctrl.submitPayment()

        expect(sharedApi.saveContactIfNeeded).toHaveBeenCalled();
      });
    });
  });

  describe('Properties', () => {
    describe('preferences', () => {
      it('should expose preferences', () => {
        const preferences = { key: 'value' };

        spyOn(model, 'getPaymentPreferences').and.returnValue(preferences);

        expect(createController().preferences).toEqual(preferences);
      });
    });
  });
});
