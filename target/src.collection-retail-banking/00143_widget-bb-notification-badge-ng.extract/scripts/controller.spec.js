/* global expect, describe, beforeEach, jasmine, it, fail, spyOn */

import angular from 'vendor-bb-angular';
import 'angular-mocks';

import { E_UNEXPECTED } from 'lib-bb-model-errors';
import { PollingType } from 'model-bb-notifications-ng';

import { MessageKey, Event } from './constants';

import Controller from './controller';

const defaultPreferences = {
  pollingInterval: 0,
  badgeCounter: true,
  pageSize: 15,
};

const expectedUnreadCount = {
  data: {
    unread: 5,
  },
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
  loadUnreadCount: jasmine.createSpy('loadUnreadCount').and.returnValue(Promise.resolve(expectedUnreadCount)),
  load: jasmine.createSpy('load').and.returnValue(Promise.resolve(expectedNotifications)),
  putReadRecord: jasmine.createSpy('putReadRecord').and.returnValue(Promise.resolve()),
  deleteRecord: jasmine.createSpy('deleteRecord').and.returnValue(Promise.resolve()),
  getNotificationPreferences: jasmine.createSpy('getNotificationPreferences').and.returnValue(defaultPreferences),
  initPolling: jasmine.createSpy('initPolling'),
  stopPolling: jasmine.createSpy('stopPolling'),
});

const createEventBus = () => ({
  subscribe: jasmine.createSpy('subscribe'),
  publish: jasmine.createSpy('publish'),
});

describe('Notifications Badge Widget Controller', () => {

  let model,
    eventBus,
    $interval;

  const createController = () => {
    return new Controller(model, eventBus, $interval);
  };

  beforeEach(inject((_$interval_) => {
    model = createModel();
    eventBus = createEventBus();
    $interval = _$interval_;
  }));

  it('should have appropriate variables in controller', () => {
    const ctrl = createController();

    expect(ctrl.state).toBeDefined();
    expect(ctrl.loadMore).toBeDefined();
    expect(ctrl.togglePopover).toBeDefined();
    expect(ctrl.$onInit).toBeDefined();
    expect(ctrl.$onDestroy).toBeDefined();
    expect(ctrl.viewNotificationList).toBeDefined();
    expect(ctrl.viewNotificationDetails).toBeDefined();
    expect(ctrl.deleteNotification).toBeDefined();
    expect(ctrl.markNotification).toBeDefined();
    expect(ctrl.isNotificationUnRead).toBeDefined();
  });

  describe('$ctrl:onInit', () => {

    let ctrl;

    beforeEach(() => {
      ctrl = createController();
      ctrl.$onInit();
    });

    it('loads values from the model on initialization', (done) => {
      setTimeout(() => {
        expect(model.loadUnreadCount).toHaveBeenCalled();
        expect(ctrl.state.badge.numberOfUnread).toEqual(5);
        expect(ctrl.state.badge.loading).toEqual(false);

        done();
      }, 100);
    });

    it('should subscribe on notification events', () => {
      expect(eventBus.subscribe.calls.argsFor(0)).toEqual([Event.NUMBER_OF_UNREAD_CHANGED, jasmine.any(Function)]);
      expect(eventBus.subscribe.calls.argsFor(1)).toEqual([Event.NOTIFICATION_CHANGE_READ_STATUS, jasmine.any(Function)]);
      expect(eventBus.subscribe.calls.argsFor(2)).toEqual([Event.NOTIFICATION_DELETED, jasmine.any(Function)]);
    });

    it('should change number of unread notifications if appropriate event fired', (done) => {
      let handlerFn;
      const eventValue = 2;

      eventBus.subscribe = jasmine.createSpy('subscribe').and.callFake((evt, fn) => {
        if (evt === Event.NUMBER_OF_UNREAD_CHANGED) {
          handlerFn = fn;
        }
      });

      ctrl = createController();
      ctrl.$onInit();

      setTimeout(() => {
        handlerFn(eventValue);

        expect(ctrl.state.badge.numberOfUnread).toEqual(7);

        done();
      }, 100);
    });

    it('should change read notification status if appropriate event fired', (done) => {
      let handlerFn;
      const eventObjUnread = {
        id: '1',
        read: false,
      };
      const eventObjRead = {
        id: '2',
        read: true,
      };

      eventBus.subscribe = jasmine.createSpy('subscribe').and.callFake((evt, fn) => {
        if (evt === Event.NOTIFICATION_CHANGE_READ_STATUS) {
          handlerFn = fn;
        }
      });

      ctrl = createController();
      ctrl.$onInit();
      ctrl.togglePopover();

      setTimeout(() => {
        handlerFn(eventObjUnread);

        expect(ctrl.state.notifications.data[0].read).toEqual(false);
        expect(ctrl.state.badge.numberOfUnread).toEqual(6);

        handlerFn(eventObjRead);

        expect(ctrl.state.notifications.data[1].read).toEqual(true);
        expect(ctrl.state.badge.numberOfUnread).toEqual(5);

        done();
      }, 100);
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

      ctrl = createController();
      ctrl.$onInit();
      ctrl.togglePopover();

      setTimeout(() => {
        handlerFn(eventObj);

        expect(ctrl.state.notifications.data.length).toEqual(5);

        expect(model.load).toHaveBeenCalledWith(jasmine.objectContaining({
          size: 1,
        }));

        done();
      }, 100);
    });

    it('should start http polling and subscribe on polling events', () => {
      const options = {
        type: PollingType.UNREAD_COUNT,
        pollingInterval: 0,
      };

      expect(model.initPolling).toHaveBeenCalledWith(options);

      expect(eventBus.subscribe.calls.argsFor(3)).toEqual([Event.NOTIFICATION_UNREAD_COUNT_SUCCESS, jasmine.any(Function)]);
      expect(eventBus.subscribe.calls.argsFor(4)).toEqual([Event.NOTIFICATION_UNREAD_COUNT_ERROR, jasmine.any(Function)]);
    });

    it('should handle data from http polling', (done) => {
      const expected = {
        ref: 1,
        data: expectedUnreadCount.data,
      };
      let handlerFn;

      eventBus.subscribe = jasmine.createSpy('subscribe').and.callFake((evt, fn) => {
        if (evt === Event.NOTIFICATION_UNREAD_COUNT_SUCCESS) {
          handlerFn = fn;
        }
      });

      ctrl = createController();
      ctrl.$onInit();

      setTimeout(() => {
        ctrl.state.badge.numberOfUnread = 0;
        handlerFn(expected);

        expect(ctrl.state.badge.numberOfUnread).toEqual(5);
        expect(ctrl.state.badge.loading).toEqual(false);

        done();

      }, 100);

    });

    it('should handle error from http polling', (done) => {
      let handlerFn;

      eventBus.subscribe = jasmine.createSpy('subscribe').and.callFake((evt, fn) => {
        if (evt === Event.NOTIFICATION_UNREAD_COUNT_ERROR) {
          handlerFn = fn;
        }
      });

      ctrl = createController();
      ctrl.$onInit();

      setTimeout(() => {
        handlerFn(expectedError);

        expect(model.stopPolling).toHaveBeenCalled();

        done();

      }, 100);

    });

    it('should return true if notification unread', () => {
      const unreadNotification = ctrl.isNotificationUnRead({ id: 2, read: false });

      expect(unreadNotification).toBe(true);
    });

    it('should return false if notification read', () => {
      const readNotification = ctrl.isNotificationUnRead({ id: 1, read: true });

      expect(readNotification).toBe(false);
    });

  });

  describe('$ctrl:togglePopover', () => {

    it('should load notifications when popover in open', (done) => {
      const ctrl = createController();

      ctrl.$onInit();
      ctrl.togglePopover();

      setTimeout(() => {

        expect(model.load).toHaveBeenCalled();
        expect(ctrl.state.popover.loading).toBeFalse();
        expect(ctrl.state.notifications.loading).toBeFalse();
        expect(ctrl.state.notifications.hasMore).toBeTrue();
        expect(ctrl.state.notifications.data).toEqual(expectedNotifications.data);

        done();

      }, 100);

    });

    it('should have status error when popover in open and error occurs', (done) => {
      model.load = jasmine.createSpy('load').and.returnValue(Promise.reject(expectedError));

      const ctrl = createController();

      ctrl.$onInit();
      ctrl.togglePopover();

      setTimeout(() => {

        expect(model.load).toHaveBeenCalled();
        expect(ctrl.state.popover.loading).toBeFalse();
        expect(ctrl.state.notifications.loading).toBeFalse();
        expect(ctrl.state.popover.error).toEqual(jasmine.objectContaining({
          message: MessageKey.ERROR_UNEXPECTED,
        }));

        done();

      }, 100);

    });
  });

  describe('$ctrl:markNotification', () => {
    let ctrl;

    beforeEach(() => {
      ctrl = createController();

      ctrl.$onInit();
      ctrl.togglePopover();
    });

    it('should mark notification as unread', (done) => {

      setTimeout(() => {

        ctrl.markNotification('1', false)
          .then(() => {
            expect(model.putReadRecord).toHaveBeenCalled();
            expect(ctrl.state.notifications.data[0].read).toBe(false);
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
            expect(ctrl.state.notifications.data[1].read).toBe(true);
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
            expect(ctrl.state.notifications.error).toEqual(jasmine.objectContaining({
              message: MessageKey.ERROR_UNEXPECTED,
            }));

            done();
          });

      }, 100);
    });

  });

  describe('$ctrl:showNotificationDetails', () => {

    it('should show details', (done) => {
      const ctrl = createController();

      ctrl.$onInit();
      ctrl.togglePopover();

      setTimeout(() => {

        ctrl.viewNotificationDetails(ctrl.state.notifications.data[0]);

        expect(ctrl.state.notifications.active).toEqual(ctrl.state.notifications.data[0]);
        expect(ctrl.state.page).toBe('details');

        done();

      }, 100);
    });

  });

  describe('$ctrl:showNotificationBadgeList', () => {

    it('should show list of notification', (done) => {
      const ctrl = createController();

      ctrl.$onInit();
      ctrl.togglePopover();

      setTimeout(() => {

        ctrl.viewNotificationList();

        expect(ctrl.state.notifications.active).toEqual(null);
        expect(ctrl.state.page).toBe('list');

        done();

      }, 100)
    });

  });

  describe('$ctrl:deleteNotification', () => {
    let ctrl;

    beforeEach(() => {
      ctrl = createController();

      ctrl.$onInit();
      ctrl.togglePopover();
    });

    it('should delete notification', (done) => {
      setTimeout(() => {

        ctrl.deleteNotification('2')
          .then(() => {
            expect(model.deleteRecord).toHaveBeenCalled();
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
            expect(ctrl.state.notifications.error).toEqual(jasmine.objectContaining({
              message: MessageKey.ERROR_UNEXPECTED,
            }));

            done();
          });

      }, 100);
    })

  });

  describe('$ctrl:loadMore', () => {
    let ctrl;

    beforeEach(() => {
      ctrl = createController();

      ctrl.$onInit();
      ctrl.togglePopover();
    });

    it('should load new notifications', (done) => {
      setTimeout(() => {

        ctrl.loadMore()
          .then(() => {
            expect(model.load.calls.count()).toEqual(2);
            expect(model.load).toHaveBeenCalledWith(jasmine.objectContaining({
              cursor: expectedNotifications.cursor
            }));
            expect(ctrl.state.notifications.loading).toBeFalse();
            expect(ctrl.state.notifications.data).toEqual([...expectedNotifications.data, ...expectedNotifications.data])
          })
          .then(done)
          .catch(done.fail);

      }, 100);
    });

    it('should have status error when error occurs', (done) => {
      setTimeout(() => {

        model.load = jasmine.createSpy('load').and.returnValue(Promise.reject(expectedError));

        ctrl.loadMore()
          .then(done.fail)
          .catch(() => {
            expect(ctrl.state.notifications.loading).toBeFalse();
            expect(ctrl.state.notifications.error).toEqual(jasmine.objectContaining({
              message: MessageKey.ERROR_UNEXPECTED,
            }));
            expect(ctrl.state.notifications.data).toEqual(expectedNotifications.data)

            done();
          });

      }, 100);
    });
  });

  it('$ctrl:onDestroy should stop polling', (done) => {
    const ctrl = createController();

    setTimeout(() => {

      ctrl.$onDestroy();

      expect(model.stopPolling).toHaveBeenCalled();

      done();

    }, 100);
  });

});
