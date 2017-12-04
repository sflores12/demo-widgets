import SharedApi from './shared-api';
import {
  Event
} from '../constants';

describe('widget-bbm-notification-center-ng::shared-api', () => {
  const widget = {};

  const model = {
    load: () => Promise.resolve([]),
    putReadRecord: () => Promise.resolve([]),
    deleteRecord: () => Promise.resolve(),
  };

  const bus = {
    publish: () => { },
    subscribe: () => { }
  };

  const viewModel = {
    setSelectedNotification: () => Promise.resolve(),
    findNotificationById: () => {},
    fetch: () => Promise.resolve(),
    setNotificationRead: () => {},
    setNotifications: () => {},
    state: {
      notifications : [
        { id: "123", read: false },
      ]
    }
  };


  const getApi = () => SharedApi(model, bus, viewModel);

  describe('#setNotificationRead', () => {
    it('should transfer parameters to the viewModel', done => {
      const api = getApi();

      spyOn(bus, 'publish');
      spyOn(viewModel, 'setNotificationRead');

      api.setNotificationRead('123', true);

      setTimeout(() => {
        expect(bus.publish).toHaveBeenCalled();
        expect(viewModel.setNotificationRead).toHaveBeenCalledWith('123', true);
        done();
      }, 0);
    });

    it('should send read event with notification id and read status', done => {
      const api = getApi();

      spyOn(bus, 'publish');

      api.setNotificationRead('123', true);

      setTimeout(() => {
        expect(bus.publish).toHaveBeenCalledWith(Event.NOTIFICATION_CHANGE_READ, { id: '123', read: true } );
        done();
      }, 0);
    });
  });

  describe('#changeNotificationRead', () => {
    it('should transfer parameters to the viewModel', done => {
      const api = getApi();

      spyOn(viewModel, 'findNotificationById').and.returnValue(viewModel.state.notifications[0]);
      spyOn(viewModel, 'setNotificationRead');
      api.changeNotificationRead('123');

      expect(viewModel.findNotificationById).toHaveBeenCalledWith('123');

      setTimeout(() => {
       expect(viewModel.setNotificationRead).toHaveBeenCalledWith('123', true);
        done();
      }, 0);
    });
  });

  describe('#deleteNotification', () => {
    it('should delete record with a given id', done => {
      const api = getApi();

      spyOn(bus, 'publish');

      spyOn(model, 'deleteRecord').and.returnValue(Promise.resolve());

      api.deleteNotification('1234-5678-9014')
        .then(response => {
          expect(bus.publish).toHaveBeenCalledWith(Event.NOTIFICATION_DELETE_DONE, { id: '1234-5678-9014'});
          expect(model.deleteRecord).toHaveBeenCalledWith('1234-5678-9014');
          done();
        })
        .catch(done.fail);

      expect(bus.publish).toHaveBeenCalledWith(Event.NOTIFICATION_DELETE_START);
    });

    it('should throw an error if notificationId is not provided', () => {
      const api = getApi();

      expect(api.deleteNotification).toThrow(new Error('[notificationId] Notification Id is not defined'));
    });

    it('should fail when error occurs', done => {
      const api = getApi();

      const errorMock = 'Error';

      spyOn(bus, 'publish');

      spyOn(model, 'deleteRecord').and.returnValue(Promise.reject(errorMock));

      api.deleteNotification('1234-5678-9014')
        .then(done.fail)
        .catch(error => {
          expect(bus.publish).toHaveBeenCalledWith(Event.NOTIFICATION_DELETE_START);
          expect(bus.publish).toHaveBeenCalledWith(Event.NOTIFICATION_DELETE_FAILED, { error });
          expect(error).toEqual(errorMock);

          done();
        });
    });
  });

});

