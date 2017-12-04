import ListController from './list.controller';

const defaultRequestParams = {
  fromDate: null,
  toDate: null,
  levels: null,
  read: null,
  from: 0,
  size: 2,
};

const state = {
  notifications: {
    error: null,
    loading: false,
    data: null,
    pagination: {
      hasMore: true,
      rawData: null,
      requestParams: defaultRequestParams,
    },
  }
};

const notifications = {
  loading: false,
  error: null,
  data: [
    {
      "id": "1234-5678-9014",
      "message": "Message shown in future (unless it's past November 2016 :)",
      "level": "WARNING",
      "createdOn": "2016-10-04T11:54:37.777+0000",
      "link": "http://support.dashboard.backbase.com",
      "validFrom": "2016-11-30T23:01:00.000+0000",
      "expiresOn": "2016-11-30T23:01:17.777+0000",
      "read": false,
      "origin": "Maintenance"
    }
  ]
};

describe('widget-bbm-notification-center-ng::ListController', () => {
  const widget = {
    getId: () => '123',
  };

  const model = {
    load: () => Promise.resolve([]),
    deleteRecord: () => Promise.resolve(),
  };

  const bus = {
    publish: () => { },
    subscribe: () => { },
  };

  const viewModel = {
    setNotifications: () => { },
    setNotificationsError: () => { },
    setNotificationsLoading: () => { },
    getRequestParams: () => { },
    setRawNotifications: () => { },
    setHasMoreFlag: () => { },
    calculateRequestParams: () => { },
    setRequestParams: () => { },
    hasMoreNotifications: () => { },
    setSelectedNotification: () => { },
    setNotificationRead: () => { },
    deleteNotification: () => { },
    fetch: () => Promise.resolve(),
    save: () => Promise.resolve(),
    state,
    getTotalCount: () => { },
    getPageSize: () => { },
  };

  const bbIntent = {
    create: () => () => { },
    handle: () => { },
    init: () => { },
  };

  const hooks = {
    processNotifications: notifications => notifications,
  };

  const sharedApi = {
    deleteNotification: () => Promise.resolve(),
  };

  const mockIntents = (intentMocks) => {
    spyOn(bbIntent, 'create').and.callFake((name) => (
      intentMocks[name] ? intentMocks[name] : () => { }
    ));
  };

  const createController = () => new ListController(
    widget,
    model,
    viewModel,
    sharedApi,
    bbIntent,
    bus,
    hooks,
  );

  describe('Methods', () => {
    describe('#$onInit', () => {
      it('should publish "cxp.item.loaded" and "bb.item.loaded" event', done => {
        const ctrl = createController();

        spyOn(bus, 'publish');

        spyOn(viewModel, "getRequestParams").and.returnValue(defaultRequestParams);

        spyOn(model, 'load').and.callFake((params) => Promise.resolve({
          data: notifications.data
        }));

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

    describe('#loadNotifications', () => {
      beforeEach(() => {
        spyOn(viewModel, 'getPageSize').and.returnValue(10);
        spyOn(viewModel, 'getTotalCount').and.returnValue(7);
      });

      it('should load notifications if loading succeeds', done => {
        const ctrl = createController();

        spyOn(viewModel, 'setNotifications');
        spyOn(viewModel, 'setNotificationsLoading');
        spyOn(viewModel, 'setNotificationsError');

        spyOn(model, 'load').and.callFake((params) => Promise.resolve({
          data: notifications.data
        }));

        ctrl.$onInit()
          .then(() => {
            expect(viewModel.setNotifications).toHaveBeenCalledWith(notifications.data);
            expect(viewModel.setNotificationsLoading).toHaveBeenCalledWith(notifications.loading);
            expect(viewModel.setNotificationsError).toHaveBeenCalledWith(notifications.error);
            done()
          })
          .catch(done.fail);
      });

      it('should set the notifications error when loading fails', done => {
        const error = "Error";

        const ctrl = createController();

        spyOn(model, 'load').and.callFake((params) => Promise.reject(error));

        spyOn(viewModel, 'setNotifications');
        spyOn(viewModel, 'setNotificationsLoading');
        spyOn(viewModel, 'setNotificationsError');

        ctrl.$onInit()
          .then(done.fail)
          .catch(() => {
            expect(viewModel.setNotificationsLoading).toHaveBeenCalledWith(false);
            expect(viewModel.setNotificationsError).toHaveBeenCalledWith(error);
            done()
          });
      });
    });

    describe('#loadMoreNotifications', () => {
      it('should load more notifications', done => {
        const notifications = [
          { id: "1111" },
          { id: "2222" },
          { id: "3333" },
          { id: "3333" },
        ];

        const requestParams = {
          from: 0,
          size: 2
        };

        const ctrl = createController();

        spyOn(model, 'load').and.callFake((params) => Promise.resolve({
          data: notifications.slice(params.from, params.from + params.size)
        }));

        spyOn(viewModel, 'getPageSize').and.callFake(() => requestParams.size);
        spyOn(viewModel, 'getTotalCount').and.callFake(() => requestParams.from);

        spyOn(viewModel, 'setRawNotifications');
        spyOn(viewModel, 'hasMoreNotifications').and.returnValue(true);

        ctrl.$onInit()
          .then(() => {
            expect(viewModel.setRawNotifications).toHaveBeenCalledWith([
              { id: "1111" },
              { id: "2222" },
            ]);

            requestParams.from = 2;
            viewModel.state.notifications.pagination.rawData = [
              { id: "1111" },
              { id: "2222" },
            ];
            ctrl.loadMoreNotifications()
              .then(() => {
                expect(viewModel.setRawNotifications).toHaveBeenCalledWith([
                  { id: "1111" },
                  { id: "2222" },
                  { id: "3333" },
                ]);

                done();
              })
              .catch(done.fail);
          })
          .catch(done.fail);
      });

      it('should set the flag that indicates if there are more notifications to load', done => {
        const notifications = [
          { id: "1111" },
          { id: "2222" },
          { id: "3333" },
          { id: "4444" }
        ];

        const requestParams = {
          from: 0,
          size: 2
        };

        const ctrl = createController();

        spyOn(model, 'load').and.callFake((params) => Promise.resolve({
          totalCount: 4,
          data: notifications.slice(params.from, params.from + params.size)
        }));

        spyOn(viewModel, 'getPageSize').and.callFake(() => requestParams.size);
        spyOn(viewModel, 'getTotalCount').and.callFake(() => requestParams.from);

        spyOn(viewModel, 'hasMoreNotifications').and.returnValue(true);
        spyOn(viewModel, 'setHasMoreFlag');

        ctrl.$onInit()
          .then(() => {
            expect(viewModel.setHasMoreFlag).toHaveBeenCalledWith(true);

            requestParams.from = 2;
            viewModel.state.notifications.pagination.rawData = [
              { id: "1111" },
              { id: "2222" }
            ];

            ctrl.loadMoreNotifications()
              .then(() => {
                expect(viewModel.setHasMoreFlag).toHaveBeenCalledWith(false);

                done();
              })
              .catch(done.fail);
          })
          .catch(done.fail);
      });
    });

    describe('#reloadNotifications', () => {
      it('should set request params when reload', done => {
        const ctrl = createController();

        spyOn(viewModel, 'getPageSize').and.returnValue(10);
        spyOn(viewModel, 'getTotalCount').and.returnValue(7);

        spyOn(model, 'load').and.returnValue(Promise.resolve({
          data: notifications.data
        }));

        ctrl.reloadNotifications()
          .then(() => {
            expect(model.load).toHaveBeenCalledWith({
              from: 0,
              size: 10
            });
            done();
          })
          .catch(done.fail);
      });
    });

    describe('#showNotificationDetails', () => {
      it('should set the selected notification', () => {
        const ctrl = createController();

        spyOn(viewModel, 'setSelectedNotification');

        ctrl.showNotificationDetails('1111');

        expect(viewModel.setSelectedNotification).toHaveBeenCalledWith('1111');
      });

      it('should save the view model state', () => {
        const ctrl = createController();

        spyOn(viewModel, 'save').and.callThrough();

        ctrl.showNotificationDetails('1111');

        expect(viewModel.save).toHaveBeenCalled();
      });

      it('should call the "intent.bb.notification.details.show" intent', done => {
        const intent = jasmine.createSpy('intent.bb.notification.details.show');

        mockIntents({
          'intent.bb.notification.details.show': intent,
        });

        const ctrl = createController();

        ctrl.showNotificationDetails('1111');

        setTimeout(() => {
          expect(intent).toHaveBeenCalledWith('1111');
          done();
        }, 0);
      });
    });
  });

  describe('Intents handlers', () => {
    describe('intent.bb.notification.list.show', () => {
      it('should reload notifications', done => {
        const intentHandlers = {};

        spyOn(bbIntent, 'handle').and.callFake((name, fn) => {
          intentHandlers[name] = fn;
        });

        const ctrl = createController();

        spyOn(viewModel, 'fetch');
        intentHandlers['intent.bb.notification.list.show']();

        setTimeout(() => {
          expect(viewModel.fetch).toHaveBeenCalled();
          done();
        }, 0);
      });
    });
  });

  describe('Events', () => {
    describe('bb.event.notification.delete.done', () => {
      it('should delete the notification with a given id from the view model', done => {
        let handlerFn;

        spyOn(bus, 'subscribe').and.callFake((name, fn) => {
          if (name === 'bb.event.notification.delete.done') {
            handlerFn = fn;
          }
        });

        const ctrl = createController();

        spyOn(viewModel, "deleteNotification");

        spyOn(model, 'load').and.callFake((params) => Promise.resolve({
          data: notifications.data
        }));

        ctrl.$onInit()
          .then(() => {
            handlerFn({id: '1111'});

            expect(viewModel.deleteNotification).toHaveBeenCalledWith('1111');
            done();
          })
          .catch(done.fail);
      });
    });

    describe('bb.event.notification.read.change', () => {
      it('should update the read status of the notification on the view model', done => {
        let handlerFn;

        spyOn(bus, 'subscribe').and.callFake((name, fn) => {
          if (name === 'bb.event.notification.read.change') {
            handlerFn = fn;
          }
        });

        const ctrl = createController();

        spyOn(viewModel, "setNotificationRead");

        spyOn(model, 'load').and.callFake((params) => Promise.resolve({
          data: notifications.data
        }));

        ctrl.$onInit()
          .then(() => {
            handlerFn({ id: '1111', read: true });

            expect(viewModel.setNotificationRead).toHaveBeenCalledWith('1111', true);
            done();
          })
          .catch(done.fail);
      });
    });
  });
});
