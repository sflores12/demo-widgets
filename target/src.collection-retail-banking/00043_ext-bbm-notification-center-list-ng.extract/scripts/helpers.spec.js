import helpers from './helpers';

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

  beforeEach(() => {
    helpersInstance = helpers({ $filter });
  });

  describe('getDateLabel', () => {

    it('should return corresponding label for the given date', () => {

      spyOn(filters, 'dateLabel');

      filters.dateLabel.and.returnValue('now');
      expect(helpersInstance.getDateLabel({ createdOn: 'now' })).toEqual('Now');

      filters.dateLabel.and.returnValue('today');
      expect(helpersInstance.getDateLabel({ createdOn: 'today' })).toEqual('Today at 14:25');

      filters.dateLabel.and.returnValue('yesterday');
      expect(helpersInstance.getDateLabel({ createdOn: 'yesterday' })).toEqual('Yesterday at 14:25');

      filters.dateLabel.and.returnValue(undefined);
      expect(helpersInstance.getDateLabel({ createdOn: new Date() })).toEqual('20 August 2017');
    });

    it('should call date filter', () => {
      const createdOn = new Date();
      expect(helpersInstance.getDateLabel({ isOpen: true, createdOn })).toEqual("20 August 2017");
    });
  });

  describe('hasNotifications', () => {
    it('should return true if notifications exist', () => {
      const ctrl = {
        state: {
          notifications: {
            data: [{ id: 1 }, { id: 2 }, { id: 3 }],
          },
        },
      };

      expect(helpersInstance.hasNotifications(ctrl)).toEqual(true);
    });

    it('should return false if there are no notifications', () => {
      const ctrl = {
        state: {
          notifications: {
            data: [],
          },
        },
      };

      expect(helpersInstance.hasNotifications(ctrl)).toEqual(false);
    });
  });

  describe('showLoadingState', () => {
    it('should be true if there is a loading at the moment and there are no notifications', () => {
      const ctrl = {
        state: {
          notifications: {
            data: null,
            loading: true,
          },
        },
      };

      expect(helpersInstance.showLoadingState(ctrl)).toEqual(true);
    });

    it('should be false if there is no loading at the moment', () => {
      const ctrl = {
        state: {
          notifications: {
            data: [],
            loading: false,
          },
        },
      };

      expect(helpersInstance.showLoadingState(ctrl)).toEqual(false);
    });

    it('should be false if the loading has started and notifications already exist', () => {
      const ctrl = {
        state: {
          notifications: {
            data: [{ id: 1 }, { id: 2 }, { id: 3 }],
            loading: true,
          },
        },
      };

      expect(helpersInstance.showLoadingState(ctrl)).toEqual(false);
    });
  });

  describe('showLoadMoreLoading', () => {
    it('should be true if the loading has started and notifications already exist', () => {
      const ctrl = {
        state: {
          notifications: {
            data: [{ id: 1 }, { id: 2 }, { id: 3 }],
            loading: true,
          },
        },
      };

      expect(helpersInstance.showLoadMoreLoading(ctrl)).toEqual(true);
    });

    it('should be false if there is no loading at the moment', () => {
      const ctrl = {
        state: {
          notifications: {
            data: [{ id: 1 }, { id: 2 }, { id: 3 }],
            loading: false,
          },
        },
      };

      expect(helpersInstance.showLoadMoreLoading(ctrl)).toEqual(false);
    });

    it('should be false if this is the first loading', () => {
      const ctrl = {
        state: {
          notifications: {
            data: null,
            loading: true,
          },
        },
      };

      expect(helpersInstance.showLoadMoreLoading(ctrl)).toEqual(false);
    });
  });

  describe('showEmptyState', () => {
    it('should be true if there are no notifications', () => {
      const ctrl = {
        state: {
          notifications: {
            data: [],
            error: false,
          },
        },
      };

      expect(helpersInstance.showEmptyState(ctrl)).toEqual(true);
    });

    it('should be false if there are some notifications', () => {
      const ctrl = {
        state: {
          notifications: {
            data: [{ id: 1 }, { id: 2 }, { id: 3 }],
            error: false,
          },
        },
      };

      expect(helpersInstance.showEmptyState(ctrl)).toEqual(false);
    });

    it('should not show the empty state if the first loading has not been completed', () => {
      const ctrl = {
        state: {
          notifications: {
            data: null,
            error: false,
          },
        },
      };

      expect(helpersInstance.showEmptyState(ctrl)).toEqual(false);
    });
  });

  describe('showErrorState', () => {
    it('should be true if there is an error during the loading', () => {
      const ctrl = {
        state: {
          notifications: {
            error: true,
          },
        },
      };

      expect(helpersInstance.showErrorState(ctrl)).toEqual(true);
    });

    it('should be false if there are no errors', () => {
      const ctrl = {
        state: {
          notifications: {
            error: false,
          },
        },
      };

      expect(helpersInstance.showErrorState(ctrl)).toEqual(false);
    });
  });
});
