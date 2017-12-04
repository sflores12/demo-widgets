import helpers from './helpers';
import plugins from 'lib-bbm-plugins';

describe('helpers', () => {

  let helpersInstance;

  const filters = {
    'dateLabel': date => date,
    'i18n': key => {
      const keys = {
        'calendar.label.now': 'Now',
        'calendar.label.today': 'Today',
        'calendar.label.yesterday': 'Yesterday',
        'calendar.label.at': ' at ',
      };
      return keys[key] || null;
    },
    'date': (date, format) => {

      if (format === 'yyyy-MM-ddTHH:mm:ss.sssZ') {
        return '2017-08-20T14:25:00.000+02:00';
      }
      if (format === 'd MMMM yyyy') {
        return '20 August 2017';
      }
      if (format === 'hh:mm') {
        return '14:25';
      }
      return null;

    }
  };

  const $filter = filter => ((...args) => {
    return filters[filter].apply(null, args);
  });

  const alertDialog = {
    show: () => { },
    hide: () => { },
  };

  beforeEach(() => {
    helpersInstance = helpers({ $filter });

    spyOn(plugins, 'AlertDialog').and.returnValue(alertDialog);
  });

  describe('getDateLabel', () => {
    it('should return an empty string if there is no notification', () => {
      expect(helpersInstance.getDateLabel()).toEqual('');
    });

    it('should return corresponding label for the given date', () => {
      spyOn(filters, 'dateLabel');

      filters.dateLabel.and.returnValue('now');
      expect(helpersInstance.getDateLabel({ createdOn: 'now' })).toEqual('Now');

      filters.dateLabel.and.returnValue('today');
      expect(helpersInstance.getDateLabel({ createdOn: 'today' })).toEqual('Today at 14:25');

      filters.dateLabel.and.returnValue('yesterday');
      expect(helpersInstance.getDateLabel({ createdOn: 'yesterday' })).toEqual('Yesterday at 14:25');

      filters.dateLabel.and.returnValue(undefined);
      expect(helpersInstance.getDateLabel({ createdOn: new Date() })).toEqual('20 August 2017 at 14:25');
    });

    it('should call date filter', () => {
      const createdOn = new Date();
      expect(helpersInstance.getDateLabel({ isOpen: true, createdOn })).toEqual("20 August 2017 at 14:25");
    });

  });

  describe('onInit', () => {
    it('should call a given confirm function once user confirmed deleting', done => {
      const handlers = {};

      spyOn(window, 'addEventListener').and.callFake((eventType, handler) => {
        handlers[eventType] = handler;
      });

      const ctrl = {
        deleteNotification: jasmine.createSpy('deleteNotification'),
      };

      spyOn(alertDialog, 'show').and.returnValue(Promise.resolve({
        callback: 'confirm',
      }));

      helpersInstance.onInit(ctrl);

      handlers['bb.action.notification.delete']();

      setTimeout(() => {
        expect(ctrl.deleteNotification).toHaveBeenCalled();
        done();
      }, 0);
    });
  });
});
