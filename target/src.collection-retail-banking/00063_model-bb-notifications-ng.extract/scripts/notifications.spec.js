import Model from './notifications';
import { E_UNEXPECTED } from 'lib-bb-model-errors';
import { Event, PollingType } from './constants';

const expectedNotifications = {
  data: [],
  headers: () => {},
};

const expectedUnreadCount = {
  data: {
    unread: 0,
  },
  headers: () => {},
};

describe('Notifications model', () => {

  let notificationsData,
    widget,
    $timeout,
    eventBus,
    model,
    initData;

  beforeEach(inject((_$timeout_) => {
    initData = resolve => {

      notificationsData = {
        getNotifications: () => Promise[resolve ? 'resolve': 'reject'](expectedNotifications),
        getNotificationsStream: () => Promise[resolve ? 'resolve': 'reject'](expectedNotifications),
        getNotificationsUnreadCount: () => Promise[resolve ? 'resolve': 'reject'](expectedUnreadCount),
        postNotificationsRecord: () => Promise[resolve ? 'resolve': 'reject'](),
        putNotificationsReadRecord: () => Promise[resolve ? 'resolve': 'reject'](),
        deleteNotificationsRecord: () => Promise[resolve ? 'resolve': 'reject'](),
      };
      widget = {
        getLongPreference: () => 0,
        getBooleanPreference: () => true,
      };
      eventBus = {
        subscribe: jasmine.createSpy('subscribe'),
        publish: jasmine.createSpy('publish'),
      };
      $timeout = _$timeout_;
      model = Model(notificationsData, widget, eventBus, $timeout);
    };
  }));

  it('load notifications', (done) => {
    initData(true);

    spyOn(notificationsData, 'getNotifications').and.callThrough();

    const params = {};

    model.load(params)
      .then((actual) => {
        expect(notificationsData.getNotifications).toHaveBeenCalledWith(params);
        expect(actual).toEqual({
          data: [],
          totalCount: 0,
          cursor: NaN,
        });
      })
      .then(done);
  });

  it('handles load errors', (done) => {
    initData(false);

    spyOn(notificationsData, 'getNotifications').and.callThrough();

    const params = {};

    model.load(params)
      .catch(error => {
        expect(notificationsData.getNotifications).toHaveBeenCalledWith(params);
        expect(error.code).toBe(E_UNEXPECTED);
      })
      .then(done);
  });

  it('load notifications stream', (done) => {
    initData(true);

    spyOn(notificationsData, 'getNotificationsStream').and.callThrough();

    const params = {};

    model.loadStream(params)
      .then((actual) => {
        expect(notificationsData.getNotificationsStream).toHaveBeenCalledWith(params);
        expect(actual).toEqual(expectedNotifications);
      })
      .then(done);
  });

  it('handles load stream errors', (done) => {
    initData(false);

    spyOn(notificationsData, 'getNotificationsStream').and.callThrough();

    const params = {};

    model.loadStream(params)
      .catch(error => {
        expect(notificationsData.getNotificationsStream).toHaveBeenCalledWith(params);
        expect(error.code).toBe(E_UNEXPECTED);
      })
      .then(done);
  });

  it('load notifications unread count', (done) => {
    initData(true);

    spyOn(notificationsData, 'getNotificationsUnreadCount').and.callThrough();

    model.loadUnreadCount()
      .then((actual) => {
        expect(notificationsData.getNotificationsUnreadCount).toHaveBeenCalled();
        expect(actual).toEqual(expectedUnreadCount);
      })
      .then(done);
  });

  it('handles load unread count errors', (done) => {
    initData(false);

    spyOn(notificationsData, 'getNotificationsUnreadCount').and.callThrough();

    model.loadUnreadCount()
      .catch(error => {
        expect(notificationsData.getNotificationsUnreadCount).toHaveBeenCalled();
        expect(error.code).toBe(E_UNEXPECTED);
      })
      .then(done);
  });

  describe('initPolling', () => {

    it('should load data through interval time if it is correct', (done) => {
      initData(true);

      spyOn(notificationsData, 'getNotificationsStream').and.callThrough();

      const options = {
        type: PollingType.STREAM,
        pollingInterval: 15000,
      };
      model.initPolling(options);

      $timeout.flush(15000);

      expect(notificationsData.getNotificationsStream).toHaveBeenCalled();

      $timeout.flush(15000);

      expect(notificationsData.getNotificationsStream.calls.count()).toEqual(2);

      done();
    });

    it('should not load data through interval time if it is not correct', (done) => {
      initData(true);

      spyOn(notificationsData, 'getNotificationsStream').and.callThrough();

      const options = {
        type: PollingType.STREAM,
        pollingInterval: 0,
      };
      model.initPolling(options);

      $timeout.flush(15000);

      expect(notificationsData.getNotificationsStream).not.toHaveBeenCalled();

      done();
    });

    it('should fires event when polling response was successful', (done) => {
      initData(true);

      spyOn(notificationsData, 'getNotificationsStream').and.callThrough();

      const options = {
        type: PollingType.STREAM,
        pollingInterval: 15000,
      };
      model.initPolling(options);

      $timeout.flush(15000);

      setTimeout(() => {
        expect(eventBus.publish).toHaveBeenCalledWith(Event.NOTIFICATION_STREAM_SUCCESS, jasmine.any(Object));

        done();
      }, 100);
    });

    it('should fires event when polling response was failed', (done) => {
      initData(false);

      spyOn(notificationsData, 'getNotificationsStream').and.callThrough();

      const options = {
        type: PollingType.STREAM,
        pollingInterval: 15000,
      };
      model.initPolling(options);

      $timeout.flush(15000);

      setTimeout(() => {
        expect(eventBus.publish).toHaveBeenCalledWith(Event.NOTIFICATION_STREAM_ERROR, jasmine.any(Object));

        done();
      }, 100);
    });

  });

});
