import ViewModel from './view-model';

const defaultPreferences = {
  pageSize: 10,
  maxNavPages: 3,
  paginationType: 'load-more',
  dismissMessageTime: 5,
};

const defaultRequestParams = {
  fromDate: null,
  toDate: null,
  levels: null,
  read: null,
  from: 0,
  size: 10,
};

describe('widget-bbm-notification-center-ng::ViewModel', () => {

  let model;

  const bbStorage = {
    getItem: () => Promise.resolve(),
    setItem: () => Promise.resolve(),
  };

  const createModel = () => ({
    getNotificationPreferences: jasmine.createSpy('getNotificationPreferences').and.returnValue(defaultPreferences),
  });

  beforeEach(() => {
    model = createModel();
  });

  const createViewModel = () => ViewModel(model, bbStorage);

  const mockState = state => {
    spyOn(bbStorage, 'getItem').and.returnValue(Promise.resolve(state));
  };

  describe('Methods', () => {
    describe('#setNotifications', () => {
      it('should set the notifications', () => {
        const data = [{
          "id": "1234-5678-9014",
          "message": "Message shown in future (unless it's past November 2016 :)",
          "level": "WARNING",
          "createdOn": "2016-10-04T11:54:37.777+0000",
          "link": "http://support.dashboard.backbase.com",
          "validFrom": "2016-11-30T23:01:00.000+0000",
          "expiresOn": "2016-11-30T23:01:17.777+0000",
          "read": false,
          "origin": "Maintenance"
        }];

        const viewModel = createViewModel();

        viewModel.setNotifications(data);

        expect(viewModel.state.notifications.data).toEqual(data);
      });
    });

    describe('#getNotifications', () => {
      it('should return notifications', () => {
        const data = [{
          "id": "1234-5678-9014",
          "message": "Message shown in future (unless it's past November 2016 :)",
          "level": "WARNING",
          "createdOn": "2016-10-04T11:54:37.777+0000",
          "link": "http://support.dashboard.backbase.com",
          "validFrom": "2016-11-30T23:01:00.000+0000",
          "expiresOn": "2016-11-30T23:01:17.777+0000",
          "read": false,
          "origin": "Maintenance"
        }];

        const viewModel = createViewModel();

        viewModel.setNotifications(data);

        expect(viewModel.getNotifications()).toBe(data);
      });
    });

    describe('#hasNotifications', () => {
      it('should return false if there are no notifications', () => {

        const viewModel = createViewModel();

        expect(viewModel.hasNotifications()).toBe(false);
      });

      it('should return false if there are notifications', () => {
        const data = [{
          "id": "1234-5678-9014",
          "message": "Message shown in future (unless it's past November 2016 :)",
          "level": "WARNING",
          "createdOn": "2016-10-04T11:54:37.777+0000",
          "link": "http://support.dashboard.backbase.com",
          "validFrom": "2016-11-30T23:01:00.000+0000",
          "expiresOn": "2016-11-30T23:01:17.777+0000",
          "read": false,
          "origin": "Maintenance"
        }];

        const viewModel = createViewModel();

        viewModel.setNotifications(data);

        expect(viewModel.hasNotifications()).toBe(true);
      });
    });

    describe('#setNotificationsLoading', () => {
      it('should set the error on the notifications object', () => {

        const viewModel = createViewModel();

        expect(viewModel.state.notifications.loading).toEqual(false);

        viewModel.setNotificationsLoading(true);

        expect(viewModel.state.notifications.loading).toEqual(true);

      });
    });

    describe('#setNotificationsError', () => {
      it('should set the error on the notifications object', () => {

        const viewModel = createViewModel();

        const error = "Error";

        expect(viewModel.state.notifications.error).toEqual(null);

        viewModel.setNotificationsError(error);

        expect(viewModel.state.notifications.error).toEqual(error);

      });
    });

    describe('#setRawNotifications', () => {
      it('should set the notifications on the pagination property to the new raw notifications object', () => {

        const rawNotifications = [
          { id: "1111" },
          { id: "2222" },
        ];

        const viewModel = createViewModel();

        expect(viewModel.state.notifications.pagination.rawData).toBe(null);

        viewModel.setRawNotifications(rawNotifications);

        expect(viewModel.state.notifications.pagination.rawData).toEqual(rawNotifications);
      });
    });

    describe('#setHasMoreFlag', () => {
      it('should set the has more flag on the pagination property to the given value', () => {

        const viewModel = createViewModel();

        expect(viewModel.state.notifications.pagination.hasMore).toBe(true);

        viewModel.setHasMoreFlag(false);

        expect(viewModel.state.notifications.pagination.hasMore).toBe(false);

        viewModel.setHasMoreFlag(true);

        expect(viewModel.state.notifications.pagination.hasMore).toBe(true);
      });
    });

    describe('#findNotificationById', () => {
      it('should find the selected notification by id', () => {
        const notifications = [
          { id: "1111" },
          { id: "2222" },
        ];

        const viewModel = createViewModel();

        expect(viewModel.state.notifications.data).toBe(null);

        viewModel.setNotifications(notifications);

        expect(viewModel.state.notifications.data).toEqual(notifications);

        expect(viewModel.findNotificationById('1111')).toEqual(notifications[0]);
      });
    });

    describe('#findNotificationIndexById', () => {
      it('should find the selected notification index by id', () => {
        const notifications = [
          { id: "1111" },
          { id: "2222" },
        ];

        const viewModel = createViewModel();

        expect(viewModel.state.notifications.data).toBe(null);

        viewModel.setNotifications(notifications);

        expect(viewModel.state.notifications.data).toEqual(notifications);

        expect(viewModel.findNotificationIndexById('1111')).toEqual(0);
      });
    });

    describe('#setSelectedNotification', () => {
      it('should set the selected notification', () => {
        const notifications = [
          { id: "1111" },
          { id: "2222" },
        ];

        const viewModel = createViewModel();

        expect(viewModel.state.notifications.data).toBe(null);

        viewModel.setNotifications(notifications);

        expect(viewModel.state.notifications.data).toEqual(notifications);

        viewModel.setSelectedNotification('1111');

        expect(viewModel.state.selectedNotification).toEqual(notifications[0])
      });
    });

    describe('#setNotificationRead', () => {
      it('should set the selected notification "read" status', () => {
        const notifications = [
          { id: "1111", read: false },
          { id: "2222", read: true },
        ];

        let notification;

        const viewModel = createViewModel();
        expect(viewModel.state.notifications.data).toBe(null);

        viewModel.setNotifications(notifications);
        expect(viewModel.state.notifications.data).toEqual(notifications);

        viewModel.setNotificationRead('1111', true);
        notification = viewModel.findNotificationById('1111');
        expect(notification.read).toBeTrue();

        viewModel.setNotificationRead('2222', false);
        notification = viewModel.findNotificationById('2222');
        expect(notification.read).not.toBeTrue()
      });
    });

    describe('#setNotificationRead', () => {
      it('should set the selected notification "read" status', () => {
        const notifications = [
          { id: "1111", read: false },
          { id: "2222", read: true },
        ];

        let notification;

        const viewModel = createViewModel();
        expect(viewModel.state.notifications.data).toBe(null);

        viewModel.setNotifications(notifications);
        expect(viewModel.state.notifications.data).toEqual(notifications);

        viewModel.setNotificationRead('1111', true);
        notification = viewModel.findNotificationById('1111');
        expect(notification.read).toBeTrue();

        viewModel.setNotificationRead('2222', false);
        notification = viewModel.findNotificationById('2222');
        expect(notification.read).not.toBeTrue()
      });
    });

    describe('#deleteNotification', () => {
      it('should delete the notification with the given id from the list', () => {
        const notifications = [
          { id: "1111", read: false },
          { id: "2222", read: true },
        ];

        const viewModel = createViewModel();
        expect(viewModel.state.notifications.data).toBe(null);

        viewModel.setNotifications(notifications);
        expect(viewModel.state.notifications.data).toEqual(notifications);

        viewModel.deleteNotification('1111');
        expect(viewModel.state.notifications.data).toEqual([
          { id: "2222", read: true },
        ]);
      });
    });

    describe('#fetch', () => {
      it('should read the state from the storage', done => {
        const state = {};

        mockState(state);

        const viewModel = createViewModel();

        viewModel.fetch().then(() => {
          expect(viewModel.state).toBe(state);
          done();
        });
      });
    });

    describe('#save', () => {
      it('should save the current state to the storage', done => {
        spyOn(bbStorage, 'setItem');

        mockState({});

        const viewModel = createViewModel();

        viewModel.fetch()
          .then(() => viewModel.save())
          .then(() => {
            expect(bbStorage.setItem).toHaveBeenCalledWith('widget-bbm-notification-center-ng:state', viewModel.state);
            done();
          });
      });
    });
  });
});
