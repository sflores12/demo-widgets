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
      return keys[key] || null;
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
      expect(helpersInstance.getDateLabel({createdOn: {getTime: () => '10/10/10'}})).toEqual('10/10/10');
    });

  });

});