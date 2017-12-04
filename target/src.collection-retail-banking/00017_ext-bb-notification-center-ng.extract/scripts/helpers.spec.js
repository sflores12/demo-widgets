import helpers from './helpers';

describe('helpers', () => {

  let helpersInstance;

  // Filter mock
  const filters = {
    'dateLabel': date => date,
    'i18n': key => {
      const keys = {
        'calendar.label.now': 'Now',
        'calendar.label.today': 'Today',
        'calendar.label.yesterday': 'Yesterday',
      };
      return keys[key] || key;
    },
    'date': (date, format) => format === 'shortDate' ? date.getTime() : null
  };

  // Filter mock
  const $filter = filter => ((...args) => {
    return filters[filter].apply(null, args);
  });

  beforeEach(() => {
    helpersInstance = helpers({ $filter });
  });

  describe('getDateLabel', () => {

    it('should call i18n', () => {
      expect(helpersInstance.getDateLabel({validFrom: 'now'})).toEqual('Now');
      expect(helpersInstance.getDateLabel({validFrom: 'today'})).toEqual('Today');
      expect(helpersInstance.getDateLabel({createdOn: 'yesterday'})).toEqual('Yesterday');
      expect(helpersInstance.getDateLabel({createdOn: { getTime: () => '10/10/10' }})).toEqual('10/10/10');
    });

    it('should call date filter', () => {
      const createdOn = new Date();
      expect(helpersInstance.getDateLabel({ isOpen: true, createdOn })).toEqual(createdOn.getTime());
    });

  });

  describe('getLevelIcon', () => {
    it('should return appropriate level icon class for given severity level if it exists', () => {
      expect(helpersInstance.getLevelIcon('ALERT')).toEqual('fa-exclamation-circle text-danger');
      expect(helpersInstance.getLevelIcon('WARNING')).toEqual('fa-exclamation-triangle text-warning');
      expect(helpersInstance.getLevelIcon('INFO')).toEqual('fa-info-circle text-info');
      expect(helpersInstance.getLevelIcon('SUCCESS')).toEqual('fa-check-circle text-success');
    });
  });

  describe('getLevelTitle', () => {
    it('should return appropriate level title class for given severity level if it exists', () => {
      expect(helpersInstance.getLevelTitle('ALERT')).toEqual('notification.level.alert');
      expect(helpersInstance.getLevelTitle('WARNING')).toEqual('notification.level.warning');
      expect(helpersInstance.getLevelTitle('INFO')).toEqual('notification.level.info');
      expect(helpersInstance.getLevelTitle('SUCCESS')).toEqual('notification.level.success');
    });
  });

  describe('getReadBtnLabel', () => {
    it('should return appropriate read status label for given read status if it exists', () => {
      expect(helpersInstance.getReadBtnLabel(true)).toEqual('notification.label.read');
      expect(helpersInstance.getReadBtnLabel(false)).toEqual('notification.label.unread');
    });
  });

  describe('getReadBtnIcon', () => {
    it('should return appropriate read status icon class for given read status if it exists', () => {
      expect(helpersInstance.getReadBtnIcon(true)).toEqual('fa-check-circle');
      expect(helpersInstance.getReadBtnIcon(false)).toEqual('fa-check-circle-o');
    });
  });

  describe('isPaginationTypeMatch', () => {
    it('should return true if pagination type is equal to established', () => {
      const ctrlWithPaginator = { paginationType: 'pagination-type' };

      expect(helpersInstance.isPaginationTypeMatch(ctrlWithPaginator, 'pagination-type')).toEqual(true);
      expect(helpersInstance.isPaginationTypeMatch(ctrlWithPaginator, 'other-pagination-type')).toEqual(false);
    });
  });

  describe('getVisibleLinesLength', () => {
    it('should return correct visible lines length', () => {
      const notificationWithTitle = { title: 'some title' };

      expect(helpersInstance.getVisibleLinesLength(notificationWithTitle)).toEqual(1);
      expect(helpersInstance.getVisibleLinesLength({})).toEqual(2);
    });
  });

  describe('getEmptyMessage', () => {
    it('should return correct empty message key', () => {
      expect(helpersInstance.getEmptyMessage(true)).toEqual('notification.message.not.found');
      expect(helpersInstance.getEmptyMessage(false)).toEqual('notification.message.empty');
    });
  });

  describe('toggleDetails', () => {

    let event;

    beforeEach(() => {
      event = {
        target: {
          nodeName: 'div',
          parentNode: {
            nodeName: 'td',
          }
        },
        view: {
          getSelection: () => ({ toString: () => '' }),
        }
      }
    });

    it('should expand notification', () => {

      helpersInstance.toggleDetails('1', event);

      expect(helpersInstance.isToggled('1')).toEqual(true);

      helpersInstance.toggleDetails('1', event);

      expect(helpersInstance.isToggled('1')).toEqual(false);

      event = {
        target: {
          nodeName: 'INPUT',
          parentNode: {
            nodeName: 'BUTTON',
          }
        },
        view: {
          getSelection: () => ({ toString: () => 'highlighted text' }),
        }
      };

      helpersInstance.toggleDetails('1', event);

      expect(helpersInstance.isToggled('1')).toEqual(false);

    });

  });

});
