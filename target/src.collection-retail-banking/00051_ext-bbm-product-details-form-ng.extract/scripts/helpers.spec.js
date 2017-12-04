import helpers from './helpers';

describe('helpers', () => {
  const filters = {
    'i18n': key => key,
  };

  const $filter = filter => ((...args) => {
    return filters[filter].apply(null, args);
  });

  let helpersInstance;

  beforeEach(() => {
    helpersInstance = helpers();
  });

  describe('isFormValid', () => {
    it('should return true if the form is valid', () => {
      const form = {
        $valid: true,
        $dirty: true,
      };

      expect(helpersInstance.isFormValid(form)).toBe(true);
    });

    it('should return false if the form is invalid', () => {
      const form = {
        $valid: false,
      };

      expect(helpersInstance.isFormValid(form)).toBe(false);
    });
  });
});  