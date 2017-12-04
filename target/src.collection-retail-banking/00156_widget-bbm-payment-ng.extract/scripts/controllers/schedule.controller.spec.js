import ScheduleController from './schedule.controller';

describe('widget-bbm-payment-ng::ScheduleController', () => {
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

  const createController = () => new ScheduleController(
    widget,
    model,
    viewModel,
    sharedApi,
    bbIntent,
    bus
  );

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

      it('should publish "cxp.item.loaded" and "bb.item.loaded" events', done => {
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

    describe('#submitSchedule', () => {
      it('should fulfill the "view.payment.schedule.select" intent', done => {
        let handler;

        spyOn(bbIntent, 'handle').and.callFake((name, fn) => {
          if (name === 'view.payment.schedule.select') {
            handler = fn;
          }
        });

        const ctrl = createController();
        const respond = jasmine.createSpy('submitSchedule');

        ctrl.$onInit()
          .then(() => {
            handler({}, respond);
          })
          .then(() => wait())
          .then(() => {
            ctrl.submitSchedule();
          })
          .then(() => wait())
          .then(() => {
            expect(respond).toHaveBeenCalled();
          })
          .then(done, done.fail);
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
