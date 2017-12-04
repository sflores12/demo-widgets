import DetailsController from './details.controller';

describe('widget-bbm-notification-center-ng::DetailsController', () => {
  const widget = {
    getId: () => '123',
  };

  const model = {
    load: () => Promise.resolve([]),
  };

  const bus = {
    publish: () => { },
    subscribe: () => { },
  };

  const viewModel = {
    setSelectedNotification: () => Promise.resolve(),
    deleteNotification: () => () => { },
    fetch: () => Promise.resolve(),
    save: () => Promise.resolve(),
  };

  const bbIntent = {
    create: () => () => { },
    handle: () => { },
    init: () => { },
  };

  const sharedApi = {
    deleteNotification: () => { },
    setNotificationRead: () => {}
  };

  const createController = () => new DetailsController(
    widget,
    model,
    viewModel,
    sharedApi,
    bbIntent,
    bus,
    sharedApi
  );

  const mockIntents = (intentMocks) => {
    spyOn(bbIntent, 'create').and.callFake((name) => (
      intentMocks[name] ? intentMocks[name] : () => { }
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
            done()
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
            done()
          })
          .catch(done.fail);
      });
    });

    describe('#deleteNotification', () => {
      it('should call delete notification with a given id', done => {
        const notification = { id: '1111' };

        const ctrl = createController();
        viewModel.state = {
          selectedNotification: {
            id: '123',
          }
        };

        viewModel.state = {
          selectedNotification: notification,
        };

        spyOn(sharedApi, 'deleteNotification').and.returnValue(Promise.resolve());

        ctrl.deleteNotification()
          .then(() => {
            expect(sharedApi.deleteNotification).toHaveBeenCalledWith(notification.id);
            done();
          })
          .catch(done.fail);
      });

      it('should delete the notification with a given id from the view model', done => {
        const notification = { id: '1111' };

        const ctrl = createController();
        viewModel.state.selectedNotification = notification;

        spyOn(sharedApi, 'deleteNotification').and.returnValue(Promise.resolve());
        spyOn(viewModel, 'deleteNotification');

        ctrl.deleteNotification()
          .then(() => {
            expect(viewModel.deleteNotification).toHaveBeenCalledWith(notification.id);
            done();
          })
          .catch(done.fail);
      });

      it('should call an intent "intent.bb.notification.list.show"', done => {
        const notification = { id: '1111' };

        const intent = jasmine.createSpy('intent.bb.notification.list.show');

        spyOn(sharedApi, 'deleteNotification').and.returnValue(Promise.resolve());

        mockIntents({
          'intent.bb.notification.list.show': intent,
        });

        const ctrl = createController();

        viewModel.state = {
          selectedNotification: notification,
        };

        ctrl.deleteNotification()
          .then(() => {
            expect(intent).toHaveBeenCalled();
            done();
          });
      });
    });
  });

  describe('Intents handlers', () => {
    describe('intent.bb.notification.details.show', () => {
      it('should fetch the view model', done => {
        const intentHandlers = {};

        spyOn(bbIntent, 'handle').and.callFake((name, fn) => {
          intentHandlers[name] = fn;
        });

        const ctrl = createController();

        spyOn(viewModel, 'fetch').and.callThrough();
        intentHandlers['intent.bb.notification.details.show']('123');

        setTimeout(() => {
          expect(viewModel.fetch).toHaveBeenCalled();
          done();
        }, 0);
      });

      it('should set the selected notification to the notification with the given id', done => {
        const intentHandlers = {};

        spyOn(bbIntent, 'handle').and.callFake((name, fn) => {
          intentHandlers[name] = fn;
        });

        const ctrl = createController();

        spyOn(viewModel, 'setSelectedNotification');
        intentHandlers['intent.bb.notification.details.show']('123');

        setTimeout(() => {
          expect(viewModel.setSelectedNotification).toHaveBeenCalledWith('123');
          done();
        }, 0);
      });

      it('should mark the given notification as read', done => {
        spyOn(sharedApi, 'setNotificationRead').and.returnValue(Promise.resolve());

        const intentHandlers = {};

        spyOn(bbIntent, 'handle').and.callFake((name, fn) => {
          intentHandlers[name] = fn;
        });

        const ctrl = createController();

        intentHandlers['intent.bb.notification.details.show']('123');

        ctrl.$onInit()
          .then(() => {
            expect(sharedApi.setNotificationRead).toHaveBeenCalledWith('123', true);
            done();
          })
          .catch(done.fail);
      });
    });
  });
});
