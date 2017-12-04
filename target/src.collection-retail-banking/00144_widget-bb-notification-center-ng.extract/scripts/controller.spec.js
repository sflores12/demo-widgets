import angular from 'vendor-bb-angular';
import 'angular-mocks';
import { E_UNEXPECTED } from 'lib-bb-model-errors';
import { MessageKey, Event } from './constants';

import Controller from './controller';

const defaultPreferences = {
  pageSize: 10,
  maxNavPages: 3,
  paginationType: 'pagination',
  dismissMessageTime: 5,
};

const expectedNotifications = {
  data: [{
    id: '1',
    level: 'ALERT',
    read: true,
  }, {
    id: '2',
    level: 'WARNING',
    read: false,
  }, {
    id: '3',
    level: 'INFO',
    read: false,
  }, {
    id: '4',
    level: 'ALERT',
    read: false,
  }, {
    id: '5',
    level: 'SUCCESS',
    read: false,
  }, {
    id: '6',
    level: 'INFO',
    read: false,
  }],
  cursor: 'example-cursor',
  totalCount: 6,
};

const expectedError = {
  code: E_UNEXPECTED,
};

const createModel = () => ({
  load: jasmine.createSpy('load').and.returnValue(Promise.resolve(expectedNotifications)),
  putReadRecord: jasmine.createSpy('putReadRecord').and.returnValue(Promise.resolve()),
  deleteRecord: jasmine.createSpy('deleteRecord').and.returnValue(Promise.resolve()),
  getNotificationPreferences: jasmine.createSpy('getNotificationPreferences').and.returnValue(defaultPreferences),
});

const createEventBus = () => ({
  subscribe: jasmine.createSpy('subscribe'),
  publish: jasmine.createSpy('publish'),
});

describe('Notification Center Widget Controller', () => {

  let eventBus,
    model;

  const createController = () => {
    return new Controller(model, eventBus);
  };

  beforeEach(() => {
    model = createModel();
    eventBus = createEventBus();
  });

  it('should have appropriate variables in controller', () => {
    const ctrl = createController();

    expect(ctrl.currentPage).toBeDefined();
    expect(ctrl.totalItems).toBeDefined();
    expect(ctrl.notifications).toBeDefined();
    expect(ctrl.isNotificationsLoading).toBeDefined();
    expect(ctrl.isInitialLoading).toBeDefined();
    expect(ctrl.initialError).toBeDefined();
    expect(ctrl.status).toBeDefined();
    expect(ctrl.hasNotifications).toBeDefined();
    expect(ctrl.hasMore).toBeDefined();
    expect(ctrl.dismissTime).toBeDefined();
    expect(ctrl.itemsPerPage).toBeDefined();
    expect(ctrl.pageSize).toBeDefined();
    expect(ctrl.maxNavPages).toBeDefined();
    expect(ctrl.paginationType).toBeDefined();
    expect(ctrl.markNotification).toBeDefined();
    expect(ctrl.deleteNotification).toBeDefined();
    expect(ctrl.loadMore).toBeDefined();
    expect(ctrl.changePage).toBeDefined();
    expect(ctrl.$onInit).toBeDefined();
  });

  describe('$ctrl:onInit', () => {

    it('loads values from the model on initialization', (done) => {
      const ctrl = createController();

      ctrl.$onInit()
        .then(() => {
          expect(ctrl.notifications).toEqual(expectedNotifications.data);
          expect(ctrl.totalItems).toEqual(6);
          expect(ctrl.isNotificationsLoading).toEqual(false);
          expect(model.load.calls.count()).toEqual(1);
          expect(model.load).toHaveBeenCalledWith(jasmine.objectContaining({
            fromDate: null,
            toDate: null,
            levels: null,
            read: null,
            from: 0,
            cursor: null,
            size: 10
          }));
          done();
        })
        .catch(done.fail);
    });

    it('loads have initial error message when error occurs', (done) => {
      model.load = jasmine.createSpy('load').and.returnValue(Promise.reject(expectedError));
      const ctrl = createController();

      ctrl.$onInit()
        .then(() => {
          expect(ctrl.initialError).toEqual(MessageKey.ERROR_UNEXPECTED);
          expect(ctrl.isNotificationsLoading).toEqual(false);

          done();
        })
        .catch(done.fail);
    });

    it('should subscribe on notification events', () => {
      const ctrl = createController();

      ctrl.$onInit()
        .then(() => {
          expect(eventBus.subscribe.calls.argsFor(0)[0]).toEqual(Event.NOTIFICATION_CHANGE_READ_STATUS);
          expect(eventBus.subscribe.calls.argsFor(1)[0]).toEqual(Event.NOTIFICATION_DELETED);
        });
    });

    it('should change read notification status if appropriate event fired', (done) => {
      let handlerFn;
      const eventObj = {
        id: '1',
        read: false,
      };

      eventBus.subscribe = jasmine.createSpy('subscribe').and.callFake((evt, fn) => {
        if (evt === Event.NOTIFICATION_CHANGE_READ_STATUS) {
          handlerFn = fn;
        }
      });

      const ctrl = createController();

      ctrl.notifications = expectedNotifications.data;

      ctrl.$onInit()
        .then(() => {
          handlerFn(eventObj);

          expect(ctrl.notifications[0].read).toEqual(false);
        })
        .then(done)
        .catch(done.fail);
    });

    it('should remove notification and load next item if appropriate event fired', (done) => {
      let handlerFn;
      const eventObj = {
        id: '6',
      };

      eventBus.subscribe = jasmine.createSpy('subscribe').and.callFake((evt, fn) => {
        if (evt === Event.NOTIFICATION_DELETED) {
          handlerFn = fn;
        }
      });

      const ctrl = createController();

      ctrl.$onInit()
        .then(() => {
          handlerFn(eventObj);

          expect(ctrl.notifications.length).toEqual(5);
          expect(ctrl.totalItems).toEqual(5);

          expect(model.load.calls.argsFor(1)[0]).toEqual(jasmine.objectContaining({
            fromDate: null,
            toDate: null,
            levels: null,
            read: null,
            from: 0,
            cursor: 'example-cursor',
            size: 1,
          }));
        })
        .then(done)
        .catch(done.fail);
    });

  });

  describe('$ctrl:markNotification', () => {
    let ctrl;

    beforeEach(() => {
      ctrl = createController();

      ctrl.$onInit();
    });

    it('should mark notification as unread', (done) => {

      setTimeout(() => {

        ctrl.markNotification('1', false)
          .then(() => {
            expect(model.putReadRecord).toHaveBeenCalled();
            expect(ctrl.notifications[0].read).toBe(false);
            expect(eventBus.publish).toHaveBeenCalledWith(
              Event.NOTIFICATION_CHANGE_READ_STATUS,
              jasmine.objectContaining({
                id: '1',
                read: false,
              }),
            );
          })
          .then(done)
          .catch(done.fail);

      }, 100);
    });

    it('should mark notification as read', (done) => {

      setTimeout(() => {

        ctrl.markNotification('2', true)
          .then(() => {
            expect(model.putReadRecord).toHaveBeenCalled();
            expect(ctrl.notifications[1].read).toBe(true);
            expect(eventBus.publish).toHaveBeenCalledWith(
              Event.NOTIFICATION_CHANGE_READ_STATUS,
              jasmine.objectContaining({
                id: '2',
                read: true,
              }),
            );
          })
          .then(done)
          .catch(done.fail);

      }, 100);
    });

    it('should have error status and when error occurs', (done) => {

      setTimeout(() => {

        model.putReadRecord = jasmine.createSpy('putReadRecord').and.returnValue(Promise.reject(expectedError));

        ctrl.markNotification('2', true)
          .then(() => {
            expect(model.putReadRecord).toHaveBeenCalled();
            expect(ctrl.status).toEqual({ message: MessageKey.ERROR_UNEXPECTED, class: 'warning'});
          })
          .then(done)
          .catch(done.fail);

      }, 100);
    });

  });

  describe('$ctrl:deleteNotification', () => {
    let ctrl;

    beforeEach(() => {
      ctrl = createController();

      ctrl.$onInit();
    });

    it('should delete notification and load new one instead of removed one', (done) => {
      setTimeout(() => {

        ctrl.deleteNotification('2')
          .then(() => {
            expect(model.deleteRecord).toHaveBeenCalled();
            expect(ctrl.notifications[0].id).not.toEqual('2');
            expect(model.load.calls.count()).toEqual(2);
            expect(model.load).toHaveBeenCalledWith(jasmine.objectContaining({
              size: 1,
              from: 0,
              cursor: 'example-cursor',
            }));
            expect(eventBus.publish.calls.argsFor(0)).toEqual([ Event.NUMBER_OF_UNREAD_CHANGED, -1]);
            expect(eventBus.publish.calls.argsFor(1)).toEqual([
              Event.NOTIFICATION_DELETED,
              jasmine.objectContaining({ id: '2' }),
            ]);
          })
          .then(done)
          .catch(done.fail);

      }, 100);
    });

    it('should have error status when error occurs', (done) => {
      setTimeout(() => {

        model.deleteRecord = jasmine.createSpy('deleteRecord').and.returnValue(Promise.reject(expectedError));

        ctrl.deleteNotification('1')
          .then(() => {
            expect(model.deleteRecord).toHaveBeenCalled();
            expect(ctrl.status).toEqual({ message: MessageKey.ERROR_UNEXPECTED, class: 'warning'});
          })
          .then(done);

      }, 100);
    });

  });

  describe('$ctrl:changePage', () => {
    let ctrl;

    beforeEach(() => {
      ctrl = createController();

      ctrl.$onInit();
    });

    it('should load new data after page is changing', (done) => {
      ctrl.notifications = [];

      ctrl.changePage()
        .then(() => {
          expect(ctrl.notifications).toEqual(expectedNotifications.data);
        })
        .then(done)
        .catch(done.fail);
    });

    it('should have error status when error occurs', (done) => {
      model.load = jasmine.createSpy('load').and.returnValue(Promise.reject(expectedError));

      ctrl.changePage()
        .then(done.fail)
        .catch(() => {
          expect(ctrl.status).toEqual({ message: MessageKey.ERROR_UNEXPECTED, class: 'warning'});

          done();
        })
    });

  });

  describe('$ctrl:filter', () => {
    let ctrl;

    beforeEach(() => {
      ctrl = createController();

      ctrl.$onInit();
    });

    it('should load new data after filtering', (done) => {

      ctrl.notifications = [];

      ctrl.filter()
        .then(() => {
          expect(ctrl.notifications).toEqual(expectedNotifications.data);
        })
        .then(done)
        .catch(done.fail);
    });

    it('should have error status when error occurs', (done) => {
      model.load = jasmine.createSpy('load').and.returnValue(Promise.reject(expectedError));

      ctrl.filter()
        .then(done.fail)
        .catch(() => {
          expect(ctrl.status).toEqual({ message: MessageKey.ERROR_UNEXPECTED, class: 'warning'});

          done();
        });
    });

  });

  describe('$ctrl:loadMore', () => {
    let ctrl, fakeDone;

    beforeEach(() => {
      ctrl = createController();
      fakeDone = () => {};

      ctrl.$onInit();
    });

    it('should load new data after page is changing', (done) => {
      setTimeout(() => {

        ctrl.loadMore(fakeDone)
          .then(() => {
            expect(ctrl.notifications).toEqual([...expectedNotifications.data, ...expectedNotifications.data])
          })
          .then(done)
          .catch(done.fail);

      }, 100);
    });

    it('should have error status when error occurs', (done) => {
      setTimeout(() => {

        model.load = jasmine.createSpy('load').and.returnValue(Promise.reject(expectedError));

        ctrl.loadMore(fakeDone)
          .then(() => {
            expect(ctrl.status).toEqual({ message: MessageKey.ERROR_UNEXPECTED, class: 'warning'});
          })
          .then(done)
          .catch(done.fail);

      }, 100);
    });

  });

  describe('$ctrl:hasNotifications', () => {

    let ctrl;

    beforeEach(() => {
      ctrl = createController();

      ctrl.$onInit();
    });

    it('should return true if has notifications', () => {
      setTimeout(() => {
        expect(ctrl.hasNotifications()).toBe(true);
      });

    });

    it('should return false if has no notifications', () => {
      setTimeout(() => {
        ctrl.notifications = [];
        expect(ctrl.hasNotifications()).toBe(false);
      });
    });

  });

});
