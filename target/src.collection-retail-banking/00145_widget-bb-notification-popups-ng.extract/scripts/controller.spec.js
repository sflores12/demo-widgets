import angular from 'vendor-bb-angular';
import 'angular-mocks';

import { E_UNEXPECTED } from 'lib-bb-model-errors';
import { PollingType } from 'model-bb-notifications-ng';

import { Event } from './constants';

import Controller from './controller';

const LOCAL_NOTIFICATION_ID_PREFIX = 'LOCAL_NOTIFICATION:';

const defaultPreferences = {
  dismissSticky: false,
  listenFeNotify: true,
  pollingInterval: 3000,
  dismissAlertTime: 0,
  dismissWarningTime: 2000,
  dismissInfoTime: 1000,
  dismissSuccessTime: 3000,
};

const expectedNotifications = {
  data: [{
    id: '1',
    level: 'ALERT',
    read: false,
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
  }, {
    id: '7',
    level: 'INFO',
    read: false,
    expiresOn: new Date(),
  }],
};

const createModel = () => ({
  loadStream: jasmine.createSpy('loadStream').and.returnValue(Promise.resolve(expectedNotifications)),
  putReadRecord: jasmine.createSpy('putReadRecord').and.returnValue(Promise.resolve()),
  getNotificationPreferences: jasmine.createSpy('getNotificationPreferences').and.returnValue(defaultPreferences),
  initPolling: jasmine.createSpy('initPolling').and.returnValue('pollingRef'),
  stopPolling: jasmine.createSpy('stopPolling'),
});

const createEventBus = () => ({
  subscribe: jasmine.createSpy('subscribe'),
  publish: jasmine.createSpy('publish'),
});

describe('Notifications Popups Controller', () => {

  let $timeout,
    eventBus,
    model;

  const createController = () => {
    return new Controller(model, eventBus, $timeout);
  };

  beforeEach(inject(function(_$timeout_) {
    model = createModel();
    eventBus = createEventBus();
    $timeout = _$timeout_;
  }));

  it('should have appropriate variables in controller', () => {
    const ctrl = createController();

    expect(ctrl.notifications).toBeDefined();
    expect(ctrl.stickyNotifications).toBeDefined();
    expect(ctrl.isNotificationsLoading).toBeDefined();
    expect(ctrl.hasNotifications).toBeDefined();
    expect(ctrl.getNotificationType).toBeDefined();
    expect(ctrl.closeNotification).toBeDefined();
    expect(ctrl.$onInit).toBeDefined();
    expect(ctrl.$onDestroy).toBeDefined();
  });

  describe('$ctrl:onInit', () => {

    it('should start http polling and subscribe on polling events', () => {
      const ctrl = createController();

      ctrl.$onInit();

      const options = {
        type: PollingType.STREAM,
        pollingInterval: 3000,
      };

      expect(model.initPolling).toHaveBeenCalledWith(options);

      expect(eventBus.subscribe.calls.argsFor(1)).toEqual([Event.NOTIFICATION_STREAM_SUCCESS, jasmine.any(Function)]);
      expect(eventBus.subscribe.calls.argsFor(2)).toEqual([Event.NOTIFICATION_STREAM_ERROR, jasmine.any(Function)]);

    });

    it('should handle data from http polling', (done) => {
      const expected = {
        ref: 1,
        data: expectedNotifications.data,
      };
      let handlerFn;

      eventBus.subscribe = jasmine.createSpy('subscribe').and.callFake((evt, fn) => {
        if (evt === Event.NOTIFICATION_STREAM_SUCCESS) {
          handlerFn = fn;
        }
      });

      const ctrl = createController();
      ctrl.$onInit();

      setTimeout(() => {


        handlerFn(expected);

        expect(ctrl.notifications.length).toEqual(6);
        expect(ctrl.stickyNotifications.length).toEqual(1);
        expect(eventBus.publish).toHaveBeenCalledWith(Event.NUMBER_OF_UNREAD_CHANGED, 6);

        $timeout.flush(2000);
        expect(ctrl.notifications.length).toEqual(5);

        $timeout.flush(4000);
        expect(ctrl.notifications.length).toEqual(3);

        $timeout.flush(1000);
        expect(ctrl.notifications.length).toEqual(2);

        done();

      }, 100);
    });

    it('should handle error from http polling', (done) => {
      let handlerFn;

      eventBus.subscribe = jasmine.createSpy('subscribe').and.callFake((evt, fn) => {
        if (evt === Event.NOTIFICATION_STREAM_ERROR) {
          handlerFn = fn;
        }
      });

      const ctrl = createController();
      ctrl.$onInit();

      setTimeout(() => {
        handlerFn();

        expect(model.stopPolling).toHaveBeenCalled();

        done();
      }, 100);

    });

  });

  describe('FE notifications', function() {

    it('should not add notification when appropriate option is disabled', () => {
      const preferences = {
        listenFeNotify: false,
      };

      model.getNotificationPreferences = jasmine.createSpy('getNotificationPreferences').and.returnValue(preferences);
      const ctrl = createController();

      ctrl.$onInit();

      expect(eventBus.subscribe).not.toHaveBeenCalledWith(Event.NOTIFICATION_CREATE_LOCAL, jasmine.any(Function));

    });

    it('should add notification when appropriate option is enabled', (done) => {

      let handlerFn;
      const eventObj = {
        level: 'INFO',
        message: 'Test',
      };

      eventBus.subscribe = jasmine.createSpy('subscribe').and.callFake((evt, fn) => {
        if (evt === Event.NOTIFICATION_CREATE_LOCAL) {
          handlerFn = fn;
        }
      });

      const ctrl = createController();

      ctrl.$onInit();

      setTimeout(() => {

        handlerFn(eventObj);

        expect(ctrl.notifications[0].local).toBe(true);
        expect(ctrl.notifications[0].level).toBe(eventObj.level);
        expect(ctrl.notifications[0].message).toBe(eventObj.message);
        expect(ctrl.notifications[0].id.indexOf(LOCAL_NOTIFICATION_ID_PREFIX)).toBe(0);

        done();
      }, 100);

    });

  });

  describe('$ctrl:hasNotifications', () => {

    let ctrl;

    beforeEach(() => {
      ctrl = createController();
    });

    it('should return true if has notifications', () => {
      ctrl.notifications = [{}];

      expect(ctrl.hasNotifications()).toBe(true);
    });

    it('should return false if has no notifications', () => {
      ctrl.notifications = [];

      expect(ctrl.hasNotifications()).toBe(false);
    });

  });

  describe('$ctrl:getNotificationType', () => {

    it('should return appropriate type according to notification level', () => {
      const ctrl = createController();

      expect(ctrl.getNotificationType({level: 'ALERT'})).toEqual('danger');
      expect(ctrl.getNotificationType({level: 'WARNING'})).toEqual('warning');
      expect(ctrl.getNotificationType({level: 'INFO'})).toEqual('info');
      expect(ctrl.getNotificationType({level: 'SUCCESS'})).toEqual('success');
    });

  });

  describe('$ctrl:closeNotification', () => {

    let ctrl;

    beforeEach(() => {
      ctrl = createController();

      ctrl.notifications = [{ id: '1', read: false }];
      ctrl.stickyNotifications= [{ id: '2',read: false }];
    });

    it('should close notification', (done) => {
      ctrl.closeNotification('1');

      setTimeout(() => {

        expect(model.putReadRecord).toHaveBeenCalled();
        expect(ctrl.notifications.length).toBe(0);
        expect(eventBus.publish).toHaveBeenCalledWith(
          Event.NOTIFICATION_CHANGE_READ_STATUS,
          jasmine.objectContaining({
            id: '1',
            read: true,
          }),
        );

        done();

      }, 100);
    });

    it('should close sticky notification', (done) => {
      ctrl.closeNotification('2', true);

      setTimeout(() => {

        expect(model.putReadRecord).toHaveBeenCalled();
        expect(ctrl.stickyNotifications.length).toBe(0);

        done();

      }, 100);

    });

  });

  describe('$ctrl:onDestroy', () => {

    it('should stop polling', (done) => {
      const ctrl = createController();

      setTimeout(() => {

        ctrl.$onDestroy();

        expect(model.stopPolling).toHaveBeenCalled();

        done();

      }, 100);
    });

  });



});